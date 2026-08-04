/**
 * paths.js — route enumeration over the atlas graph. No Three.js in here.
 *
 * The question this exists to answer is "show me EVERY way the variant causes
 * X", not "show me the shortest way". So it enumerates simple directed paths
 * rather than running a shortest-path algorithm, using iterative deepening so
 * results arrive shortest-first and the caps bite on the long tail rather than
 * on the routes you actually wanted.
 *
 * Three properties are computed per route, and they are the point:
 *
 *   sign   — the PRODUCT of the edge polarities. `a565t ⊣ samhd1 ⊣ irf7` is a
 *            double negative: losing a brake on a brake raises IRF7. A route
 *            that ends net-negative is a route that SUPPRESSES its endpoint,
 *            and saying so is the difference between a map and an argument.
 *   grade  — the WEAKEST evidence grade on the route. A chain is only as
 *            defensible as its softest link, so an all-S route and a route
 *            that dips through one `I` edge must not look alike.
 *   loops  — which named feedback loops (A, B, C, ankib1, irf7…) it traverses.
 *
 * Enumeration runs over the full edge set, not the currently visible one: a
 * route should not vanish because a layer is switched off. The caller turns on
 * whatever layers the chosen route needs, the way stream selection does.
 *
 * ── Why selection is diversity-based, not "first N shortest" ──────────────
 * Measured on this graph: a565t→ifnb has 379 simple routes within 16 steps.
 * Taking the 40 shortest returns FOUR routes through cGAS and ZERO through the
 * VDAC1 macropore — because the short ones all crowd through the NF-κB hub, and
 * the canonical Loop A mechanism is 13 steps long. "Every way" that omits the
 * centrepiece mechanism is worse than no answer.
 *
 * So: enumerate deep and cheap (10ms at depth 16), then select greedily for
 * node coverage. The displayed set spans distinct mechanisms instead of
 * repeating one, and the UI reports how many of the total it is showing.
 */

import { EDGES, NODE_BY_ID } from './data/index.js';
import { EDGE_KINDS } from './config.js';

const EV_RANK = { S: 0, G: 1, I: 2 };
const GRADES = ['S', 'G', 'I'];

let _adj = null;

/** from-id → outgoing edges. Built once; the graph is static after load. */
function adjacency() {
  if (_adj) return _adj;
  _adj = new Map();
  for (const e of EDGES) {
    if (!_adj.has(e.from)) _adj.set(e.from, []);
    _adj.get(e.from).push(e);
  }
  return _adj;
}

function summarise(steps) {
  let sign = 1;
  let worst = 0;
  const loops = new Set();
  let inhibitions = 0;

  for (const e of steps) {
    const kind = EDGE_KINDS[e.kind];
    sign *= kind.sign ?? 1;
    if ((kind.sign ?? 1) < 0) inhibitions++;
    worst = Math.max(worst, EV_RANK[e.evidence] ?? 2);
    if (e.loop) loops.add(e.loop);
  }

  return {
    steps: steps.slice(),
    nodes: [steps[0].from, ...steps.map((e) => e.to)],
    length: steps.length,
    sign,
    inhibitions,
    grade: GRADES[worst],
    loops: [...loops],
    compartments: [...new Set(steps.map((e) => NODE_BY_ID.get(e.to)?.compartment).filter(Boolean))],
  };
}

const routeKey = (steps) => steps.map((e) => `${e.from}>${e.kind}>${e.to}`).join('|');

/**
 * Every simple directed route from `from` to `to`.
 *
 * @param {string} from            start node id
 * @param {string|string[]} to     one or more target node ids
 * @param {object} opts
 *   maxDepth      hard ceiling on route length (default 16)
 *   maxRoutes     how many to DISPLAY, chosen for mechanism coverage (default 24)
 *   enumerateCap  safety valve on the search itself (default 4000)
 * @returns {{routes, total, truncated, searchedTo}} — `total` is how many exist,
 *          `routes` is the diverse subset actually returned.
 */
export function findRoutes(from, to, { maxDepth = 16, maxRoutes = 24, enumerateCap = 4000 } = {}) {
  const adj = adjacency();
  const targets = new Set(Array.isArray(to) ? to : [to]);
  if (!NODE_BY_ID.has(from)) return { routes: [], total: 0, truncated: false, searchedTo: 0 };

  const routes = [];
  const seenKeys = new Set();
  let truncated = false;
  let searchedTo = 0;

  // Iterative deepening: collect routes of length exactly `limit`, then
  // lengthen. Costs a little repeated work and buys shortest-first ordering
  // plus diversity — a plain DFS with a cap returns 40 variations of whichever
  // branch it happened to descend first.
  for (let limit = 1; limit <= maxDepth && routes.length < enumerateCap; limit++) {
    searchedTo = limit;
    const onPath = new Set([from]);
    const stack = [];

    const dfs = (cur, depth) => {
      if (routes.length >= enumerateCap) return;
      const remaining = limit - depth;
      if (remaining <= 0) return;

      for (const e of adj.get(cur) ?? []) {
        if (onPath.has(e.to)) continue;                // simple paths only
        stack.push(e);

        if (targets.has(e.to)) {
          if (stack.length === limit) {
            const key = routeKey(stack);
            if (!seenKeys.has(key)) {
              seenKeys.add(key);
              routes.push(summarise(stack));
              if (routes.length >= enumerateCap) { truncated = true; stack.pop(); return; }
            }
          }
          // Do not walk past a target: routes end where they were asked to end.
        } else {
          onPath.add(e.to);
          dfs(e.to, depth + 1);
          onPath.delete(e.to);
        }

        stack.pop();
        if (routes.length >= enumerateCap) return;
      }
    };

    dfs(from, 0);
  }

  // Already shortest-first from the deepening. Within a length, prefer the
  // better-evidenced route, then the net-positive one, then fewer sign flips.
  routes.sort((a, b) =>
    a.length - b.length ||
    EV_RANK[a.grade] - EV_RANK[b.grade] ||
    b.sign - a.sign ||
    a.inhibitions - b.inhibitions);

  const shown = selectDiverse(routes, maxRoutes);
  shown.sort((a, b) => a.length - b.length || EV_RANK[a.grade] - EV_RANK[b.grade]);

  return { routes: shown, total: routes.length, truncated, searchedTo };
}

/**
 * Greedy maximal-coverage selection: seed with the shortest route, then
 * repeatedly take whichever remaining route introduces the most nodes not yet
 * covered. Novelty dominates; length and evidence break ties. This is what
 * surfaces the cGAS, NLRP3 and retroelement routes instead of twenty-four
 * variations on the same hub.
 */
function selectDiverse(routes, k) {
  if (routes.length <= k) return routes.slice();

  const chosen = [routes[0]];
  const covered = new Set(routes[0].nodes);
  const pool = routes.slice(1);

  while (chosen.length < k && pool.length) {
    let bestIdx = 0;
    let bestScore = -Infinity;
    for (let i = 0; i < pool.length; i++) {
      const r = pool[i];
      let novel = 0;
      for (const id of r.nodes) if (!covered.has(id)) novel++;
      const score = novel * 100 - r.length - (EV_RANK[r.grade] ?? 2) * 2;
      if (score > bestScore) { bestScore = score; bestIdx = i; }
    }
    const pick = pool.splice(bestIdx, 1)[0];
    for (const id of pick.nodes) covered.add(id);
    chosen.push(pick);
  }
  return chosen;
}

/** Human-readable net effect of a route. */
export function signLabel(sign) {
  return sign > 0 ? 'increases' : sign < 0 ? 'suppresses' : 'no net direction';
}

/**
 * A one-line prose reading of a single step, used as the stepper caption when
 * the edge carries no `label` of its own.
 */
export function stepSentence(edge) {
  const a = NODE_BY_ID.get(edge.from), b = NODE_BY_ID.get(edge.to);
  const kind = EDGE_KINDS[edge.kind];
  return `${a?.label ?? edge.from} ${kind.label} ${b?.label ?? edge.to}`;
}
