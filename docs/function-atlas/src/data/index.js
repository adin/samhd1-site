/**
 * data/index.js — assemble the graph and validate it.
 *
 * Same discipline as the sibling atlas: validation runs at load and reports to
 * the console rather than failing silently, so a data edit that breaks a link
 * is visible immediately instead of showing up as a node that quietly stopped
 * being reachable.
 */

import { FUNCTIONS } from './functions.js';
import { LINKS } from './links.js';
import { REFS } from './refs.js';
import { layout } from './layout.js';
import { COMPARTMENTS, TIERS, LINK_KINDS } from '../config.js';

// ── The hub ───────────────────────────────────────────────────────────────
// SAMHD1 itself is not in the workbooks — they list what it DOES, not the
// protein. Without it the picture has no centre and the regulation tier points
// at nothing, so it is added here as the one synthetic node in the atlas.
export const HUB = {
  id: 'samhd1',
  label: 'SAMHD1',
  tier: 'hub',
  compartment: 'cytosol',
  pos: [0, 16, 0],
  criticality: 'Critical',
  locEvidence: 'S',
  category: 'The protein',
  relevance:
    'SAM domain and HD domain-containing protein 1. A dGTP-activated triphosphohydrolase ' +
    'that is also a nucleic-acid binding protein, a phase-separating scaffold and a ' +
    'mitochondrial interactor — which is why one gene produces a phenotype this wide.',
  rationale:
    'SAMHD1 is an obligate TETRAMER. That is the single most important fact for reading ' +
    'this atlas: a heterozygote does not simply make half as much working enzyme, it makes ' +
    'mixed tetramers, and any activity requiring all four subunits to be intact falls ' +
    'further than the 50% that gene dosage alone would predict. It is why the functional ' +
    'losses below are not uniformly one half.',
};

export const NODES = layout([HUB, ...FUNCTIONS.map((f) => ({ ...f }))]);
export const NODE_BY_ID = new Map(NODES.map((n) => [n.id, n]));

// ── Structural links, generated ───────────────────────────────────────────
// Every PTM controls the protein; the protein performs every molecular
// function. Listing ~24 mechanical edges by hand would add no information and
// would rot the moment a node is added.
const structural = [];
for (const n of FUNCTIONS) {
  if (n.tier === 'regulation') {
    structural.push({ from: n.id, to: 'samhd1', kind: 'controls', evidence: n.locEvidence, generated: true });
  } else if (n.tier === 'function') {
    structural.push({ from: 'samhd1', to: n.id, kind: 'performs', evidence: 'S', generated: true });
  }
}

export const EDGES = [...structural, ...LINKS];

// ── Validation ────────────────────────────────────────────────────────────
const problems = [];

const seen = new Set();
for (const n of NODES) {
  if (seen.has(n.id)) problems.push(`duplicate node id '${n.id}'`);
  seen.add(n.id);
  if (n.tier !== 'hub' && !TIERS[n.tier]) problems.push(`${n.id}: unknown tier '${n.tier}'`);
  if (!COMPARTMENTS[n.compartment]) problems.push(`${n.id}: unknown compartment '${n.compartment}'`);
  if (!n.pos || n.pos.some((c) => !Number.isFinite(c))) problems.push(`${n.id}: bad position`);
  for (const r of n.refs ?? []) {
    if (!REFS[r]) problems.push(`${n.id}: dangling citation ${r}`);
  }
}

for (const e of EDGES) {
  if (!NODE_BY_ID.has(e.from)) problems.push(`edge from unknown node '${e.from}'`);
  if (!NODE_BY_ID.has(e.to)) problems.push(`edge to unknown node '${e.to}'`);
  if (!LINK_KINDS[e.kind]) problems.push(`edge ${e.from}->${e.to}: unknown kind '${e.kind}'`);
}

// A node nothing reaches and nothing leaves is almost always an authoring slip
// — usually a typo'd id in links.js — and it is invisible in the render.
const touched = new Set(['samhd1']);
for (const e of EDGES) { touched.add(e.from); touched.add(e.to); }
const orphans = NODES.filter((n) => !touched.has(n.id));

// Overlap must be impossible by construction; if it is not, layout.js is wrong.
let worstOverlap = 0, worstPair = null;
for (let i = 0; i < NODES.length; i++) {
  for (let j = i + 1; j < NODES.length; j++) {
    const a = NODES[i], b = NODES[j];
    if ((a.compartment === 'clinical') !== (b.compartment === 'clinical')) continue;
    const d = Math.hypot(...a.pos.map((c, k) => c - b.pos[k]));
    const need = ((TIERS[a.tier]?.size ?? 2.4) + (TIERS[b.tier]?.size ?? 2.4)) * 1.6;
    if (need - d > worstOverlap) { worstOverlap = need - d; worstPair = `${a.id}/${b.id}`; }
  }
}

export const STATS = {
  nodes: NODES.length,
  edges: EDGES.length,
  authored: LINKS.length,
  generated: structural.length,
  orphans: orphans.map((n) => n.id),
  worstOverlap: +worstOverlap.toFixed(2),
};

if (problems.length) {
  console.error(`%c✗ SAMHD1 atlas: ${problems.length} data problem(s)`, 'color:#e0674f');
  for (const p of problems) console.error('   ' + p);
} else {
  console.log(
    `%c✓ SAMHD1 atlas: ${NODES.length} nodes, ${EDGES.length} links ` +
    `(${LINKS.length} authored, ${structural.length} structural), ${Object.keys(REFS).length} refs`,
    'color:#46d18a'
  );
}
if (orphans.length) {
  console.warn(`⚠ ${orphans.length} node(s) with no links: ${orphans.map((n) => n.id).join(', ')}`);
}
if (worstOverlap > 0.5) {
  console.warn(`⚠ layout did not fully separate: worst overlap ${worstOverlap.toFixed(2)}u (${worstPair})`);
}

export { REFS, TIERS, COMPARTMENTS };
