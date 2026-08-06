/**
 * data/layout.js — positions, computed rather than typed.
 *
 * The sibling atlas hand-authors all 217 coordinates. That needed a dedicated
 * tooling task to discover that six nodes had drifted outside the compartment
 * they were declared in, including three sitting 16–19 units clear of the cell
 * meant to contain them. Nobody typed those wrong on purpose; hand-placing
 * coordinates in three dimensions is simply not something people are good at.
 *
 * So here the only spatial statements a human makes are "this belongs in the
 * nucleus" and "this is a molecular function". Everything else is derived, and
 * the two failure modes of hand placement — leaving the shell, and landing on
 * top of a neighbour — are structurally impossible rather than merely checked.
 *
 * ── How ──────────────────────────────────────────────────────────────────
 * 1. Group by compartment.
 * 2. Distribute each group over a Fibonacci sphere — the golden-angle spiral
 *    that spaces points near-evenly on a sphere without clustering at the
 *    poles, which is what naive lat/long sampling does.
 * 3. Push tiers to different radii inside the compartment, so the reader can
 *    see at a glance how far from the protein a claim sits.
 * 4. Relax: a few iterations of pairwise push-apart, re-clamped into the shell
 *    each pass. Convergence is not guaranteed in theory; the clamp means a
 *    failure degrades to "slightly close" rather than "outside the membrane".
 *
 * Deterministic — no RNG anywhere — so the same data always yields the same
 * picture and a diff of the scene is a diff of the data.
 */

import { COMPARTMENTS, TIERS } from '../config.js';

const GOLDEN = Math.PI * (3 - Math.sqrt(5));

/** i-th of n near-evenly spaced points on the unit sphere. */
function fibonacciPoint(i, n) {
  const y = n === 1 ? 0 : 1 - (i / (n - 1)) * 2;
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = GOLDEN * i;
  return [Math.cos(theta) * r, y, Math.sin(theta) * r];
}

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const len = (v) => Math.hypot(v[0], v[1], v[2]);
const scale = (v, k) => [v[0] * k, v[1] * k, v[2] * k];

/** Node radius as drawn, used as the separation target. */
const radiusOf = (n) => (TIERS[n.tier]?.size ?? 2.4) * 1.6;

/**
 * The clinical ring is not in the cell and must not be laid out like an
 * organelle. It is an arc below the membrane, wide enough that ten outcome
 * labels can sit side by side without the declutter pass eating half of them.
 */
function clinicalArc(nodes) {
  const n = nodes.length;
  const spanX = 196, y = -98;
  nodes.forEach((node, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    // A flat row, not a bowed one. Any y or z variation across the row reads as
    // a diagonal smear under perspective rather than as depth, and the tier is
    // supposed to look like one rank of outcomes standing outside the cell.
    // Neighbours alternate above and below the line purely so their labels —
    // which are long disease names — do not collide with each other.
    node.pos = [(t - 0.5) * spanX, y + (i % 2 ? 8 : -8), -12];
  });
}

/** Lay a group out inside one compartment's shell. */
function inCompartment(key, nodes) {
  const c = COMPARTMENTS[key];
  const anchor = c.anchor;

  // How much room this compartment offers. Cytosol has no shell of its own and
  // is treated as the space between the nucleus and the membrane.
  const outer = c.shell?.kind === 'sphere' ? c.shell.r
    : c.shell?.kind === 'cell' ? 0                     // membrane: surface, handled below
    : 62;

  const n = nodes.length;
  nodes.forEach((node, i) => {
    const dir = fibonacciPoint(i, n);
    const tier = TIERS[node.tier];

    if (c.shell?.kind === 'cell') {
      // Membrane-resident: sit ON the ellipsoid surface, not inside it.
      const s = c.shell;
      node.pos = [dir[0] * s.rx * 0.99, dir[1] * s.ry * 0.99, dir[2] * s.rz * 0.99];
      return;
    }

    if (key === 'cytosol') {
      // A shell, not a ball: the middle of the cytosol is where the nucleus
      // and mitochondrion already are, so filling it would bury nodes inside
      // other compartments.
      const band = 34 + (tier?.ring ?? 1) * 8;
      node.pos = add(anchor, scale(dir, band));
      return;
    }

    // Organelle: tier sets the radius so tiers form nested shells.
    const frac = 0.34 + 0.20 * (tier?.ring ?? 1);
    node.pos = add(anchor, scale(dir, outer * Math.min(frac, 0.82)));
  });
}

/**
 * Push overlapping nodes apart, then pull everything back inside its shell.
 * Order matters: clamping last is what guarantees containment even if the
 * separation pass has not fully converged.
 */
function relax(nodes, iterations = 60) {
  for (let it = 0; it < iterations; it++) {
    let moved = false;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        // Clinical outcomes live outside the cell and legitimately sit near
        // cytosolic nodes in projection; they do not compete for space.
        if ((a.compartment === 'clinical') !== (b.compartment === 'clinical')) continue;

        const d = sub(b.pos, a.pos);
        const dist = len(d) || 1e-6;
        const need = radiusOf(a) + radiusOf(b);
        if (dist >= need) continue;

        const push = scale(d, ((need - dist) / dist) * 0.5);
        a.pos = sub(a.pos, push);
        b.pos = add(b.pos, push);
        moved = true;
      }
    }

    for (const node of nodes) {
      const c = COMPARTMENTS[node.compartment];
      if (!c) continue;
      const s = c.shell;

      if (s?.kind === 'sphere') {
        const off = sub(node.pos, c.anchor);
        const L = len(off) || 1e-6;
        const max = s.r - radiusOf(node) * 0.55;
        if (L > max) node.pos = add(c.anchor, scale(off, max / L));
      } else if (s?.kind === 'cell') {
        const L = len(node.pos) || 1e-6;
        node.pos = scale(node.pos, (s.rx * 0.99) / L);   // stay on the surface
      } else if (node.compartment === 'cytosol') {
        // Keep out of the organelles and inside the membrane.
        for (const k of ['nucleus', 'mitochondrion', 'granule', 'lysosome']) {
          const o = COMPARTMENTS[k];
          const off = sub(node.pos, o.anchor);
          const L = len(off) || 1e-6;
          const min = o.shell.r + radiusOf(node) * 1.5;
          if (L < min) node.pos = add(o.anchor, scale(off, min / L));
        }
        const L = len(node.pos) || 1e-6;
        if (L > 88) node.pos = scale(node.pos, 88 / L);
      }
    }

    if (!moved) break;
  }
}

/** Assign `pos` to every node in place. Returns the same array. */
export function layout(nodes) {
  const byCompartment = new Map();
  for (const n of nodes) {
    if (!byCompartment.has(n.compartment)) byCompartment.set(n.compartment, []);
    byCompartment.get(n.compartment).push(n);
  }

  for (const [key, group] of byCompartment) {
    // Sort by tier then id so the arrangement is stable across data edits:
    // adding one node must not reshuffle the other fifty-three.
    group.sort((a, b) => (TIERS[a.tier]?.ring ?? 0) - (TIERS[b.tier]?.ring ?? 0)
                      || a.id.localeCompare(b.id));
    if (key === 'clinical') clinicalArc(group);
    else inCompartment(key, group);
  }

  relax(nodes);
  return nodes;
}
