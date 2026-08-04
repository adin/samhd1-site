/**
 * data/index.js — merges every pathway module into one graph and validates it.
 *
 * Adding a module: import it, add it to MODULES, done. Validation runs at load
 * and reports problems to the console rather than failing silently, so a new
 * session can add a hundred nodes and immediately see what it broke.
 */

import * as sensing      from './sensing.js';
import * as mito         from './mito.js';
import * as ifn          from './ifn.js';
import * as inflammasome from './inflammasome.js';
import * as nfkb         from './nfkb.js';
import * as cytokines    from './cytokines.js';
import * as celldeath    from './celldeath.js';
import * as retro        from './retro.js';
import * as samhd1       from './samhd1.js';
import * as drugs        from './drugs.js';

import { COMPARTMENTS, CLASSES, PATHWAYS, EDGE_KINDS } from '../config.js';
import { CASE_NOTES, HAS_CASE_NOTES } from './case-notes.js';

const MODULES = [
  ['sensing', sensing],
  ['mito', mito],
  ['ifn', ifn],
  ['inflammasome', inflammasome],
  ['nfkb', nfkb],
  ['cytokines', cytokines],
  ['celldeath', celldeath],
  ['retro', retro],
  ['samhd1', samhd1],
  ['drugs', drugs],
];

export const NODES = [];
export const EDGES = [];

for (const [name, mod] of MODULES) {
  for (const n of mod.nodes ?? []) NODES.push({ ...n, module: name });
  for (const e of mod.edges ?? []) EDGES.push({ ...e, module: name });
}

// Patient-specific narrative lives in exactly one file so the public export is
// a file swap rather than an audit. See data/case-notes.js.
for (const n of NODES) {
  if (CASE_NOTES[n.id]) n.caseNote = CASE_NOTES[n.id];
}
export const IS_PRIVATE_BUILD = HAS_CASE_NOTES;

export const NODE_BY_ID = new Map(NODES.map((n) => [n.id, n]));

// ── Validation ───────────────────────────────────────────────────────────
const problems = [];

const seen = new Set();
for (const n of NODES) {
  if (seen.has(n.id)) problems.push(`duplicate node id "${n.id}" (module ${n.module})`);
  seen.add(n.id);
  if (!COMPARTMENTS[n.compartment]) problems.push(`node "${n.id}": unknown compartment "${n.compartment}"`);
  if (!CLASSES[n.klass]) problems.push(`node "${n.id}": unknown klass "${n.klass}"`);
  if (!Array.isArray(n.pos) || n.pos.length !== 3) problems.push(`node "${n.id}": bad pos`);
  for (const p of n.pathways ?? []) if (!PATHWAYS[p]) problems.push(`node "${n.id}": unknown pathway "${p}"`);
}

// Drop edges with dangling endpoints rather than letting them crash the scene.
const validEdges = [];
for (const e of EDGES) {
  let ok = true;
  if (!NODE_BY_ID.has(e.from)) { problems.push(`edge ${e.from}→${e.to}: unknown source "${e.from}" (module ${e.module})`); ok = false; }
  if (!NODE_BY_ID.has(e.to))   { problems.push(`edge ${e.from}→${e.to}: unknown target "${e.to}" (module ${e.module})`); ok = false; }
  if (!EDGE_KINDS[e.kind])     { problems.push(`edge ${e.from}→${e.to}: unknown kind "${e.kind}"`); ok = false; }
  for (const p of e.pathways ?? []) if (!PATHWAYS[p]) problems.push(`edge ${e.from}→${e.to}: unknown pathway "${p}"`);
  if (ok) validEdges.push(e);
}
EDGES.length = 0;
EDGES.push(...validEdges);

if (problems.length) {
  console.group(`%c⚠ atlas data: ${problems.length} problem(s)`, 'color:#e0674f;font-weight:bold');
  problems.forEach((p) => console.warn(p));
  console.groupEnd();
} else {
  console.log(`%c✓ atlas data: ${NODES.length} nodes, ${EDGES.length} edges, ${Object.keys(PATHWAYS).length} layers` +
    (IS_PRIVATE_BUILD ? ' · PRIVATE build (case notes present)' : ' · PUBLIC build (case notes stripped)'),
    'color:#46d18a');
}

// ── Derived indexes ──────────────────────────────────────────────────────
export const EDGES_BY_NODE = new Map();
for (const n of NODES) EDGES_BY_NODE.set(n.id, { out: [], in: [] });
for (const e of EDGES) {
  EDGES_BY_NODE.get(e.from).out.push(e);
  EDGES_BY_NODE.get(e.to).in.push(e);
}

export const NODES_BY_COMPARTMENT = new Map();
for (const key of Object.keys(COMPARTMENTS)) NODES_BY_COMPARTMENT.set(key, []);
for (const n of NODES) NODES_BY_COMPARTMENT.get(n.compartment)?.push(n);

export const PATHWAY_COUNTS = Object.fromEntries(
  Object.keys(PATHWAYS).map((p) => [p, NODES.filter((n) => (n.pathways ?? []).includes(p)).length])
);
