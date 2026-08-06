/**
 * permalink.js — the atlas view as a URL, and back again.
 *
 * Every mode the atlas can be in is expressible as a location hash, so a view
 * can be SENT to someone rather than screen-recorded for them. main.js rewrites
 * the hash on each change, which means the address bar always names what is
 * currently on screen and sharing costs nothing but a copy.
 *
 * Two rules shape the format:
 *
 *  1. Only non-default values are written. A link should stay short enough to
 *     paste into a clinic letter and legible enough that a reader can see what
 *     it will do before clicking it — `#tour=loop-a&step=3` says so plainly.
 *
 *  2. A traced route is encoded as its NODE CHAIN, never as an index into the
 *     enumerated route list. Those indices shift the moment the graph gains an
 *     edge, and a link that quietly resolves to a different argument than the
 *     one that was sent is far worse than a link that fails visibly.
 *
 * Grammar (all keys optional; at most one mode key is ever present):
 *
 *   node=<id>                       a molecule, with its inspector open
 *   tour=<id>[&step=<n>]            a guided tour, 1-based step
 *   stream=<key>                    one of the Mitochondrion Under Siege streams
 *   edge=<from>.<kind>.<to>         one interaction, inspector open
 *   all                             the "all consequences of A565T" closure
 *   path=<preset>|from=<id>&to=<id>[.<id>…]
 *     [&route=<id>.<id>.…][&step=<n>]   cascade navigator, route as node chain
 *   focus=<compartment>             camera inside a compartment
 *   layers=all|none|<key>.<key>…    pathway layers, when not the default set
 *   state=<key>                     perturbation state, when not wild type
 *   ev=all|SG|S · labels=key|all|none · detail=1 · flow=0 · membranes=0 · spin=1
 *   cam=<x,y,z,tx,ty,tz>            an exact camera pose, opt-in
 */

import { COMPARTMENTS, EDGE_KINDS, PATHWAYS, STREAMS, PERTURBATIONS } from './config.js';
import { EDGES, NODE_BY_ID } from './data/index.js';
import { TOURS, PATH_PRESETS } from './data/tours.js';

/** The layer set in force when nobody has touched anything. */
const DEFAULT_LAYERS = new Set(Object.entries(PATHWAYS).filter(([, p]) => p.on).map(([k]) => k));

const EVIDENCE_VALUES = ['all', 'SG', 'S'];
const LABEL_VALUES = ['key', 'all', 'none'];

const sameSet = (a, b) => a.size === b.size && [...a].every((x) => b.has(x));
const labelOf = (id) => NODE_BY_ID.get(id)?.label ?? id;

// ── Encode ────────────────────────────────────────────────────────────────
/**
 * Serialise the live state to a hash body (no leading `#`).
 *
 * Pass `{ camera, controls }` to pin the exact camera pose as well. That is
 * deliberately opt-in: the pose changes on every drag, so writing it always
 * would leave the URL churning and unreadable for the far commoner case where
 * the mode's own framing is the view you meant to send.
 */
export function encodeView(state, { camera = null, controls = null } = {}) {
  const p = [];
  const put = (k, v) => p.push(`${k}=${v}`);

  // The mode. Exactly one of these is ever live at a time, and the order here
  // matches the precedence main.js enforces when the modes clear each other.
  if (state.path) {
    const q = state.path.query ?? {};
    if (q.id) put('path', q.id);
    else {
      put('from', q.from);
      put('to', (Array.isArray(q.to) ? q.to : [q.to]).join('.'));
    }
    if (state.path.route) {
      put('route', state.path.route.nodes.join('.'));
      if (state.path.stepIdx > 0) put('step', state.path.stepIdx + 1);
    }
  } else if (state.tour) {
    put('tour', state.tour.tour.id);
    if (state.tour.index > 0) put('step', state.tour.index + 1);
  } else if (state.stream) {
    put('stream', state.stream);
  } else if (state.consequences) {
    p.push('all');
  } else if (state.selectedEdge) {
    // from.kind.to — the kind is part of the identity because two nodes may be
    // joined by more than one reaction, and they would not be the same claim.
    const e = state.selectedEdge;
    put('edge', `${e.from}.${e.kind}.${e.to}`);
  } else if (state.selected) {
    put('node', state.selected);
  }

  // Tours and traced routes set their own compartment as they go, so writing
  // it as well would only add a key that the mode immediately overrides.
  if (state.focus && !state.tour && !state.path) put('focus', state.focus);

  // Display state, written only where it departs from the default — otherwise
  // every link would carry twenty layer keys nobody chose.
  if (!sameSet(state.layers, DEFAULT_LAYERS)) {
    if (state.layers.size === Object.keys(PATHWAYS).length) put('layers', 'all');
    else if (state.layers.size === 0) put('layers', 'none');
    else put('layers', [...state.layers].join('.'));
  }
  // Orthogonal to the mode keys: a perturbation can be combined with a tour,
  // a stream or a traced route, so it is written alongside rather than instead.
  if (state.perturb && state.perturb !== 'wt') put('state', state.perturb);
  if (state.evidence !== 'all') put('ev', state.evidence);
  if (state.labels !== 'key') put('labels', state.labels);
  if (state.forceDetail) put('detail', '1');
  if (!state.flow) put('flow', '0');
  if (!state.membranes) put('membranes', '0');
  if (state.spin) put('spin', '1');

  if (camera && controls) {
    // Commas, not dots: the coordinates carry decimal points of their own.
    const r = (n) => Math.round(n * 10) / 10;
    put('cam', [camera.position.x, camera.position.y, camera.position.z,
                controls.target.x, controls.target.y, controls.target.z].map(r).join(','));
  }

  return p.join('&');
}

// ── Decode ────────────────────────────────────────────────────────────────
/**
 * Parse a hash into a view description, validating every id against the live
 * data as it goes. Anything unrecognised is dropped rather than carried
 * forward — a link written against an older atlas should degrade to the parts
 * that still mean something, not throw on load.
 *
 * Returns null for an empty hash.
 */
export function decodeView(hash = location.hash) {
  const raw = String(hash).replace(/^#/, '').trim();
  if (!raw) return null;

  const q = new URLSearchParams(raw);
  const view = {};
  const idList = (k) => (q.get(k) ?? '').split('.').map((s) => s.trim()).filter(Boolean);

  if (q.has('path') || q.has('from')) {
    const preset = PATH_PRESETS.find((x) => x.id === q.get('path'));
    const from = preset ? preset.from : q.get('from');
    if (from && NODE_BY_ID.has(from)) {
      const to = preset
        ? (Array.isArray(preset.to) ? preset.to : [preset.to])
        : idList('to').filter((t) => NODE_BY_ID.has(t));
      if (to.length) {
        view.path = { preset: preset?.id ?? null, from, to, route: q.has('route') ? idList('route') : null };
      }
    }
  } else if (q.has('tour')) {
    if (TOURS.some((t) => t.id === q.get('tour'))) view.tour = q.get('tour');
  } else if (q.has('stream')) {
    if (STREAMS[q.get('stream')]) view.stream = q.get('stream');
  } else if (q.has('all')) {
    view.consequences = true;
  } else if (q.has('edge')) {
    const [from, kind, to] = idList('edge');
    const e = EDGES.find((x) => x.from === from && x.kind === kind && x.to === to);
    if (e) view.edge = e;
  } else if (q.has('node')) {
    if (NODE_BY_ID.has(q.get('node'))) view.node = q.get('node');
  }

  if (q.has('step')) {
    const n = parseInt(q.get('step'), 10);
    // 1-based in the URL because it is a human-facing number: "step 3" in the
    // link should be the step the HUD calls 3.
    view.step = Number.isFinite(n) ? Math.max(0, n - 1) : 0;
  }

  if (q.has('focus') && COMPARTMENTS[q.get('focus')]) view.focus = q.get('focus');

  if (q.has('layers')) {
    const v = q.get('layers');
    if (v === 'all') view.layers = new Set(Object.keys(PATHWAYS));
    else if (v === 'none') view.layers = new Set();
    else view.layers = new Set(idList('layers').filter((k) => k in PATHWAYS));
  }
  if (q.has('state') && PERTURBATIONS[q.get('state')]) view.perturb = q.get('state');
  if (q.has('ev') && EVIDENCE_VALUES.includes(q.get('ev'))) view.evidence = q.get('ev');
  if (q.has('labels') && LABEL_VALUES.includes(q.get('labels'))) view.labels = q.get('labels');
  if (q.has('detail')) view.detail = q.get('detail') !== '0';
  if (q.has('flow')) view.flow = q.get('flow') !== '0';
  if (q.has('membranes')) view.membranes = q.get('membranes') !== '0';
  if (q.has('spin')) view.spin = q.get('spin') !== '0';

  if (q.has('cam')) {
    const n = q.get('cam').split(',').map(Number);
    if (n.length === 6 && n.every(Number.isFinite)) view.cam = n;
  }

  return view;
}

// ── Describe ──────────────────────────────────────────────────────────────
/**
 * One line of plain English for what the current link will open.
 *
 * This exists so you can see what you are about to send before you send it.
 * A URL is not self-evidently "Loop B, step 4", and the whole point of the
 * feature is handing someone else a specific argument.
 */
export function describeView(state) {
  // The perturbation is orthogonal to the mode, so it is a suffix on whatever
  // the mode already says rather than a description of its own.
  const st = state.perturb && state.perturb !== 'wt' ? PERTURBATIONS[state.perturb] : null;
  const suffix = st ? ` Rendered in the ${st.label} state.` : '';
  return describeMode(state) + suffix;
}

function describeMode(state) {
  if (state.path) {
    const q = state.path.query ?? {};
    const title = q.title ?? `${labelOf(q.from)} → ${(Array.isArray(q.to) ? q.to : [q.to]).map(labelOf).join(', ')}`;
    if (state.path.route) {
      return `Cascade — ${title}: the ${state.path.route.length}-step route via ` +
             `${labelOf(state.path.route.nodes[1])}, opening at step ${state.path.stepIdx + 1}.`;
    }
    return `Cascade — ${title}: the full route list.`;
  }
  if (state.tour) {
    const { tour, index } = state.tour;
    return `Tour — ${tour.title}, step ${index + 1} of ${tour.steps.length}: “${tour.steps[index].title}”.`;
  }
  if (state.stream) return `Stream — ${STREAMS[state.stream].label}, whole chain lit.`;
  if (state.consequences) return 'Every downstream consequence of p.A565T.';
  if (state.selectedEdge) {
    const e = state.selectedEdge;
    const glyph = EDGE_KINDS[e.kind].head === 'bar' ? '⊣' : '→';
    return `Interaction — ${labelOf(e.from)} ${glyph} ${labelOf(e.to)}, inspector open.`;
  }
  if (state.selected) return `Molecule — ${labelOf(state.selected)}, inspector open.`;
  if (state.focus) return `Inside the ${COMPARTMENTS[state.focus].label.toLowerCase()}.`;
  return 'Whole-cell overview.';
}
