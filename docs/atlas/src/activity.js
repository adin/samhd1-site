/**
 * activity.js — per-state activity levels (B1, perturbation / comparison mode).
 *
 * Answers one question: in state X, is this node running hotter or cooler than
 * wild type, and by roughly how much? The answer drives edge thickness and node
 * glow in `scene/graph.js`, which turns the atlas from a map of what CAN happen
 * into a picture of what the study predicts WILL happen under each arm.
 *
 * ── The model ────────────────────────────────────────────────────────────
 * Activity is carried in LOG space and exponentiated at the end:
 *
 *     activity(n) = exp( L(n) )        L = 0 → 1.0 → unchanged from WT
 *
 * Working in logs is not decoration. It makes the scale multiplicative and
 * symmetric — "twice as active" and "half as active" are equal and opposite
 * displacements — and it makes activity STRICTLY POSITIVE, so no amount of
 * suppression can drive a node to a negative concentration. A linear model
 * does not have that property and produces exactly that nonsense on the
 * suppressed arms (ATP, ΔΨm, SAMHD1 itself).
 *
 *   L(n) = strength · influence(a565t → n)                  disease baseline
 *   L(n) ← L(n) + strength · efficacy · sign · influence(target → n)   a drug
 *
 * The drug term is ADDITIVE, and it must be. The obvious alternative — scaling
 * the baseline log by (1 + effect) — is wrong in a way that is easy to miss and
 * embarrassing once seen: it amplifies whatever displacement a node already
 * has instead of pushing in the drug's own direction. Under that model
 * poly-ICLC, an agonist whose entire purpose is to RAISE SAMHD1 through IRF3,
 * drives SAMHD1 further DOWN (0.52 → 0.49), because SAMHD1's baseline log is
 * negative and scaling a negative number up makes it more negative. Adding a
 * signed push has no such failure mode: the drug moves a node the way the drug
 * acts, regardless of where the node started.
 *
 * Sharing `strength` between the two terms is what makes the reversion arm
 * exact rather than approximate. ABE8e inhibits `a565t` itself at efficacy 1.0
 * with `reach` equal to BASELINE.reach, so its push is the exact negative of
 * the baseline field and every log cancels to zero — the whole board returns to
 * wild type, which is the arithmetic sanity check the arm exists to provide.
 *
 * ── Influence ────────────────────────────────────────────────────────────
 * `influence(src → n)` walks OUTGOING edges from `src`, multiplying by each
 * edge's `sign` and damping by `reach` per hop, and keeps the LARGEST-MAGNITUDE
 * value found for each node. The sign arithmetic is the same one the cascade
 * navigator uses and that the C4 audit validated — which is the point. A double
 * negative reads correctly here for the same reason it reads correctly there:
 * inhibiting a brake RAISES what the brake was holding down, and the render
 * shows that node getting brighter under the drug, not dimmer.
 *
 * Damping per hop also terminates the walk on a cyclic graph without a visited
 * set: every revisit is strictly smaller, so the improvement test fails and the
 * frontier empties. `EPSILON` bounds the tail.
 *
 * ── What this is NOT ─────────────────────────────────────────────────────
 * Not kinetics. There are no rate constants, no stoichiometry and no time axis
 * in the graph, so there cannot be any here. These are coarse ordinal
 * expectations — "this arm goes down, that one does not" — and the UI says so.
 * Do not quote a number from this module as a predicted fold-change.
 */

import { EDGE_KINDS, BASELINE, PERTURBATIONS } from './config.js';
import { NODES, EDGES } from './data/index.js';

// ── Adjacency, built once ────────────────────────────────────────────────
const OUT = new Map();
for (const e of EDGES) {
  if (!OUT.has(e.from)) OUT.set(e.from, []);
  OUT.get(e.from).push(e);
}

const EPSILON = 0.02;      // stop propagating below this magnitude
const MAX_HOPS = 14;

/**
 * Signed, damped influence of `startId` on everything reachable from it.
 * Returns Map<nodeId, number> with values in [−1, 1]; the start node is 1.
 */
function influenceFrom(startId, reach) {
  const infl = new Map([[startId, 1]]);
  let frontier = [[startId, 1]];

  for (let hop = 0; hop < MAX_HOPS && frontier.length; hop++) {
    const next = [];
    for (const [id, val] of frontier) {
      for (const e of OUT.get(id) ?? []) {
        const sign = EDGE_KINDS[e.kind]?.sign ?? 1;
        const v = val * sign * reach;
        if (Math.abs(v) < EPSILON) continue;
        const cur = infl.get(e.to);
        // Keep the strongest route to each node. On a cycle the value is
        // strictly smaller each lap, so this terminates.
        if (cur === undefined || Math.abs(v) > Math.abs(cur) + 1e-9) {
          infl.set(e.to, v);
          next.push([e.to, v]);
        }
      }
    }
    frontier = next;
  }
  return infl;
}

/** Disease baseline in log space, computed once and reused by every drug state. */
let _baselineLogs = null;
function baselineLogs() {
  if (_baselineLogs) return _baselineLogs;
  const infl = influenceFrom(BASELINE.source, BASELINE.reach);
  _baselineLogs = new Map();
  for (const n of NODES) {
    // An authored `activity` pins a node where a real measurement exists and
    // wins over the derived value. None are pinned yet — see C1/C2.
    _baselineLogs.set(n.id, typeof n.activity === 'number' && n.activity > 0
      ? Math.log(n.activity)
      : BASELINE.strength * (infl.get(n.id) ?? 0));
  }
  return _baselineLogs;
}

/**
 * Activity levels for a state.
 * @returns {Map<string, number>|null} node id → activity (1 = wild type), or
 *   null for `wt` and for an unknown state — null means "render normally",
 *   which keeps the untouched view byte-for-byte what it was before B1.
 */
export function activityFor(stateId) {
  const st = PERTURBATIONS[stateId];
  if (!st || stateId === 'wt') return null;

  const logs = new Map(baselineLogs());

  if (st.drug) {
    // Each outgoing edge of the drug names a target AND a polarity, so the
    // arm needs no separate description of what it does — an agonist and an
    // antagonist differ only in the sign already on the edge.
    const push = new Map();
    for (const de of OUT.get(st.drug) ?? []) {
      const dSign = EDGE_KINDS[de.kind]?.sign ?? 1;
      for (const [id, v] of influenceFrom(de.to, st.reach)) {
        const p = BASELINE.strength * st.efficacy * dSign * v;
        const cur = push.get(id);
        if (cur === undefined || Math.abs(p) > Math.abs(cur)) push.set(id, p);
      }
    }
    for (const [id, p] of push) {
      if (logs.has(id)) logs.set(id, logs.get(id) + p);
    }
  }

  const act = new Map();
  for (const n of NODES) act.set(n.id, Math.exp(logs.get(n.id) ?? 0));
  return act;
}

/**
 * Activity of an EDGE — the geometric mean of its endpoints.
 *
 * Geometric rather than arithmetic because activity is multiplicative: an edge
 * between a node at 4× and one at 0.25× is carrying normal flux, and the
 * geometric mean says 1.0 where the arithmetic mean would say 2.1 and draw a
 * fat arrow across a link where nothing changed.
 */
export function edgeActivity(act, edge) {
  if (!act) return 1;
  const a = act.get(edge.from) ?? 1;
  const b = act.get(edge.to) ?? 1;
  return Math.sqrt(Math.max(a, 1e-6) * Math.max(b, 1e-6));
}

/**
 * The biggest movers in a state, for the readout panel.
 *
 * `ref` is what to compare against, and choosing it correctly is the whole
 * point of the panel. For a DRUG state the useful question is "what did the
 * treatment change", so the reference is the untreated A565T baseline — not
 * wild type. Ranking a drug state against WT instead just re-lists whatever is
 * elevated in the disease, identically for every arm, which tells the reader
 * nothing about the arm they selected.
 *
 * @returns {{up: Array, down: Array}} each entry { id, label, activity, change }
 */
export function movers(act, ref = null, limit = 8) {
  if (!act) return { up: [], down: [] };
  const byId = new Map(NODES.map((n) => [n.id, n]));
  const scored = [];
  for (const [id, a] of act) {
    const n = byId.get(id);
    // Drug nodes are annotations on the model rather than parts of it, and a
    // drug is trivially "changed" in its own arm — it would top its own chart.
    if (!n || n.klass === 'drug') continue;
    const base = ref?.get(id) ?? 1;
    const l = Math.log(Math.max(a, 1e-6) / Math.max(base, 1e-6));
    if (Math.abs(l) < 0.05) continue;
    scored.push({ id, label: n.label, activity: a, change: Math.exp(l), l });
  }
  scored.sort((x, y) => y.l - x.l);
  return {
    up: scored.filter((s) => s.l > 0).slice(0, limit),
    down: scored.filter((s) => s.l < 0).reverse().slice(0, limit),
  };
}
