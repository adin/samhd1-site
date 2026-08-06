/**
 * scene/graph.js — cell shells, node meshes, links, and the WT/A565T channel.
 *
 * One file rather than the sibling atlas's three, because this scene is a third
 * the size and splitting it would cost more in indirection than it saves.
 */

import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { COMPARTMENTS, TIERS, EVIDENCE, LINK_KINDS, CRITICALITY, SETTINGS } from '../config.js';
import { NODES, EDGES, NODE_BY_ID } from '../data/index.js';

const GEO = {
  octa:   new THREE.OctahedronGeometry(1.15, 0),
  sphere: new THREE.SphereGeometry(1, 20, 14),
  box:    new THREE.BoxGeometry(1.5, 1.5, 1.5),
  cone:   new THREE.ConeGeometry(1.1, 2.1, 14),
  dodeca: new THREE.DodecahedronGeometry(1.25, 0),
};
const ARROW = new THREE.ConeGeometry(0.8, 1.9, 10);
const BAR   = new THREE.BoxGeometry(1.9, 0.42, 0.42);

const HUB_COLOR = 0xffb454;

function curveFor(a, b, bend = 0.14) {
  const p0 = new THREE.Vector3().fromArray(a);
  const p2 = new THREE.Vector3().fromArray(b);
  const mid = p0.clone().add(p2).multiplyScalar(0.5);
  const dir = p2.clone().sub(p0);
  const L = dir.length() || 1;
  let up = new THREE.Vector3(0, 1, 0);
  if (Math.abs(dir.clone().normalize().dot(up)) > 0.94) up = new THREE.Vector3(1, 0, 0);
  const perp = new THREE.Vector3().crossVectors(dir, up).normalize();
  mid.addScaledVector(perp, L * bend);
  return new THREE.QuadraticBezierCurve3(p0, mid, p2);
}

// ── Cell ──────────────────────────────────────────────────────────────────
export function buildCell(scene) {
  const root = new THREE.Group();
  root.name = 'cell';
  scene.add(root);
  const parts = new Map();

  for (const [key, c] of Object.entries(COMPARTMENTS)) {
    const group = new THREE.Group();
    const s = c.shell;
    if (s) {
      const geo = s.kind === 'cell'
        ? new THREE.SphereGeometry(1, 48, 32)
        : new THREE.SphereGeometry(s.r, 32, 22);
      const skin = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({
        color: c.color, transparent: true, opacity: s.kind === 'cell' ? 0.03 : 0.07,
        side: THREE.DoubleSide, depthWrite: false, roughness: 0.5, transmission: 0.3, thickness: 4,
      }));
      const wire = new THREE.LineSegments(new THREE.WireframeGeometry(geo),
        new THREE.LineBasicMaterial({ color: c.color, transparent: true,
          opacity: s.kind === 'cell' ? 0.05 : 0.14, depthWrite: false }));
      if (s.kind === 'cell') { skin.scale.set(s.rx, s.ry, s.rz); wire.scale.set(s.rx, s.ry, s.rz); }
      else { skin.position.fromArray(c.anchor); wire.position.fromArray(c.anchor); }
      group.add(skin, wire);
    }

    const el = document.createElement('div');
    el.className = 'compartment-label';
    el.textContent = c.label;
    el.style.color = '#' + new THREE.Color(c.color).getHexString();
    const label = new CSS2DObject(el);
    label.position.fromArray(c.labelAt ?? [c.anchor[0], c.anchor[1] + (c.radius ?? 20) * 0.86, c.anchor[2]]);
    group.add(label);

    root.add(group);
    parts.set(key, { group, label,
      focusTarget: new THREE.Vector3().fromArray(c.anchor),
      focusRadius: c.radius ?? 40 });
  }
  return { root, parts };
}

export function setMembranesVisible(parts, visible) {
  for (const { group, label } of parts.values()) {
    group.traverse((o) => { if (o !== label && (o.isMesh || o.isLineSegments)) o.visible = visible; });
  }
}

// ── Graph ─────────────────────────────────────────────────────────────────
export function buildGraph(scene) {
  const root = new THREE.Group();
  root.name = 'graph';
  scene.add(root);
  const nodeGroup = new THREE.Group();
  const edgeGroup = new THREE.Group();
  root.add(edgeGroup, nodeGroup);

  const nodes = new Map();
  for (const n of NODES) {
    const isHub = n.tier === 'hub';
    const tier = TIERS[n.tier];
    const color = new THREE.Color(isHub ? HUB_COLOR : tier.color);
    // Criticality drives size, so the eye lands on the load-bearing claims
    // before it reads a single label.
    const crit = CRITICALITY[n.criticality]?.weight ?? 0.7;
    const size = isHub ? 5.2 : tier.size * (0.72 + 0.42 * crit);

    const mesh = new THREE.Mesh(
      isHub ? GEO.dodeca : (GEO[tier.shape] ?? GEO.sphere),
      new THREE.MeshStandardMaterial({
        color, emissive: color.clone().multiplyScalar(isHub ? 0.5 : 0.28),
        roughness: 0.36, metalness: 0.16, transparent: true, opacity: 1,
      })
    );
    mesh.scale.setScalar(size);
    mesh.position.fromArray(n.pos);
    mesh.userData.nodeId = n.id;
    nodeGroup.add(mesh);

    // Evidence ring — here it grades the LOCATION claim, not the function:
    // "we are confident this activity happens in this compartment".
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(size * 1.5, size * 0.08, 6, 28),
      new THREE.MeshBasicMaterial({
        color: EVIDENCE[n.locEvidence]?.color ?? 0x888888,
        transparent: true, opacity: 0.6, depthWrite: false,
      })
    );
    ring.position.fromArray(n.pos);
    ring.raycast = () => {};
    nodeGroup.add(ring);

    // Loss halo — owned exclusively by the WT/A565T channel, for the reason
    // the sibling atlas learned the hard way: highlight passes rewrite
    // emissive every time they run and would erase anything written there.
    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(size * 2.05, size * 0.14, 6, 28),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0,
        depthWrite: false, blending: THREE.AdditiveBlending })
    );
    halo.position.fromArray(n.pos);
    halo.raycast = () => {};
    halo.visible = false;
    nodeGroup.add(halo);

    const el = document.createElement('div');
    el.className = 'node-label' + (isHub ? ' hub' : n.criticality === 'Critical' ? '' : ' dim');
    el.textContent = isHub ? 'SAMHD1' : shortLabel(n.label);
    const label = new CSS2DObject(el);
    label.position.set(n.pos[0], n.pos[1] + size * 2.0, n.pos[2]);
    label.center.set(0.5, 1);
    nodeGroup.add(label);

    nodes.set(n.id, { data: n, mesh, ring, halo, label, el, baseColor: color, size, visible: true });
  }

  const edges = [];
  for (const e of EDGES) {
    const a = NODE_BY_ID.get(e.from), b = NODE_BY_ID.get(e.to);
    const kind = LINK_KINDS[e.kind];
    const color = new THREE.Color(kind.color);
    const curve = curveFor(a.pos, b.pos, e.generated ? 0.07 : 0.16);
    const baseRadius = e.generated ? 0.16 : 0.26;

    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 22, baseRadius, 5, false),
      new THREE.MeshBasicMaterial({ color, transparent: true,
        opacity: e.generated ? 0.20 : 0.42, depthWrite: false })
    );
    tube.userData.edge = e;
    edgeGroup.add(tube);

    const t = 0.9;
    const pos = curve.getPoint(t);
    const tan = curve.getTangent(t).normalize();
    const head = new THREE.Mesh(kind.sign < 0 ? BAR : ARROW,
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75, depthWrite: false }));
    head.position.copy(pos);
    if (kind.sign < 0) head.lookAt(pos.clone().add(tan));
    else head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
    head.raycast = () => {};
    head.scale.setScalar(e.generated ? 0.65 : 1);
    edgeGroup.add(head);

    edges.push({ data: e, tube, head, curve, baseColor: color, baseRadius, visible: true });
  }

  return { root, nodeGroup, edgeGroup, nodes, edges };
}

/**
 * Trim the long workbook names down to something a 3D label can carry.
 *
 * Truncating at a fixed character count cuts words in half — "BIK-Mediated
 * Mitochondrial Apoptos" — which reads as a rendering bug rather than as an
 * abbreviation. Drop whole words instead and mark the elision; the inspector
 * always shows the full name.
 */
function shortLabel(s) {
  let out = String(s)
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/ (Activity|Regulation|Control|Prevention|Suppression|Maintenance|Modulation|Promotion)$/i, '')
    .trim();
  if (out.length <= 26) return out;
  const words = out.split(' ');
  let acc = '';
  for (const w of words) {
    if ((acc + ' ' + w).trim().length > 26) break;
    acc = (acc + ' ' + w).trim();
  }
  return (acc || out.slice(0, 26)) + '…';
}

// ── Visibility ────────────────────────────────────────────────────────────
export function applyVisibility(graph, state) {
  const { tiers, evidence, labels } = state;
  for (const entry of graph.nodes.values()) {
    const n = entry.data;
    const vis = n.tier === 'hub'
      || (tiers.has(n.tier) && (evidence === 'all' || allowed(n.locEvidence, evidence)));
    entry.visible = vis;
    entry.mesh.visible = vis;
    entry.ring.visible = vis;
    entry.halo.visible = vis && entry.haloOn === true;
    entry.labelEligible = vis && labels !== 'none'
      && (labels === 'all' || n.tier === 'hub' || n.criticality === 'Critical');
    entry.label.visible = entry.labelEligible;
  }
  for (const e of graph.edges) {
    const a = graph.nodes.get(e.data.from), b = graph.nodes.get(e.data.to);
    const vis = a.visible && b.visible && (state.showStructural || !e.data.generated);
    e.visible = vis;
    e.tube.visible = vis;
    e.head.visible = vis;
  }
}

const allowed = (ev, filter) => filter === 'all'
  || (filter === 'SG' ? ev === 'S' || ev === 'G' : ev === 'S');

// ── Highlight ─────────────────────────────────────────────────────────────
export function applyHighlight(graph, focusIds) {
  const focus = new Set(focusIds ?? []);
  const active = focus.size > 0;
  const near = new Set(focus);
  if (active) {
    for (const e of graph.edges) {
      if (focus.has(e.data.from)) near.add(e.data.to);
      if (focus.has(e.data.to)) near.add(e.data.from);
    }
  }

  for (const entry of graph.nodes.values()) {
    if (!entry.visible) continue;
    const m = entry.mesh.material;
    const isFocus = focus.has(entry.data.id);
    const isNear = near.has(entry.data.id);
    if (!active) {
      m.opacity = 1; m.emissive.copy(entry.baseColor).multiplyScalar(0.28);
      entry.mesh.scale.setScalar(entry.size);
      entry.ring.material.opacity = 0.6; entry.hlOpacity = 1; entry.spotlit = false;
    } else if (isFocus) {
      m.opacity = 1; m.emissive.copy(entry.baseColor).multiplyScalar(0.95);
      entry.mesh.scale.setScalar(entry.size * 1.34);
      entry.ring.material.opacity = 0.95; entry.hlOpacity = 1; entry.spotlit = true;
    } else if (isNear) {
      m.opacity = 0.95; m.emissive.copy(entry.baseColor).multiplyScalar(0.4);
      entry.mesh.scale.setScalar(entry.size);
      entry.ring.material.opacity = 0.55; entry.hlOpacity = 1; entry.spotlit = true;
    } else {
      m.opacity = 0.14; m.emissive.copy(entry.baseColor).multiplyScalar(0.04);
      entry.mesh.scale.setScalar(entry.size * 0.86);
      entry.ring.material.opacity = 0.06; entry.hlOpacity = 0.12; entry.spotlit = false;
    }
    entry.labelForced = active && entry.spotlit;
  }

  for (const e of graph.edges) {
    if (!e.visible) continue;
    const touching = focus.has(e.data.from) || focus.has(e.data.to);
    const base = e.data.generated ? 0.20 : 0.42;
    e.tube.material.opacity = !active ? base : touching ? 0.95 : 0.04;
    e.head.material.opacity = !active ? 0.75 : touching ? 1 : 0.04;
  }
}

// ── WT vs A565T ───────────────────────────────────────────────────────────
// `loss` is the fraction of function lost in the heterozygote, read straight
// from the 2026 workbook. Unlike the sibling atlas's derived activity model,
// nothing is propagated here — each number is authored and cited, so the
// picture states what the analysis says rather than what a graph walk infers.
const LOSS_COLD = new THREE.Color(0x4fc3f7);
const PROTECTIVE = new THREE.Color(0x7fd97a);

export function setState(graph, stateKey) {
  const on = stateKey === 'a565t';
  for (const entry of graph.nodes.values()) {
    const n = entry.data;
    if (!on || n.tier === 'hub') {
      entry.haloOn = false;
      entry.halo.visible = false;
      entry.mesh.material.color.copy(entry.baseColor);
      continue;
    }
    const protective = n.lossKind === 'protective';
    const mag = protective ? 0.55 : (n.loss ?? 0);
    entry.haloOn = mag > 0.05;
    entry.halo.visible = entry.visible && entry.haloOn;
    if (entry.haloOn) {
      entry.halo.material.color.copy(protective ? PROTECTIVE : LOSS_COLD);
      entry.halo.material.opacity = 0.12 + 0.62 * mag;
      entry.halo.scale.setScalar(1 + 0.22 * mag);
    }
    // Desaturate toward slate in proportion to loss — a node running at 25% of
    // wild type should look drained, not merely ringed.
    if (!protective) {
      entry.mesh.material.color.copy(entry.baseColor).lerp(new THREE.Color(0x2a3442), mag * 0.62);
    }
  }

  for (const e of graph.edges) {
    const a = NODE_BY_ID.get(e.data.from), b = NODE_BY_ID.get(e.data.to);
    const worst = Math.max(a?.loss ?? 0, b?.loss ?? 0);
    const want = on ? e.baseRadius * (1 - 0.55 * worst) : e.baseRadius;
    if (Math.abs((e.renderedRadius ?? e.baseRadius) - want) < 0.005) continue;
    e.tube.geometry.dispose();
    e.tube.geometry = new THREE.TubeGeometry(e.curve, 22, want, 5, false);
    e.renderedRadius = want;
  }
}

// ── Labels ────────────────────────────────────────────────────────────────
const _v = new THREE.Vector3();
let _tick = 0;

export function updateBillboards(graph, camera, hoveredId = null) {
  for (const entry of graph.nodes.values()) {
    if (!entry.visible) continue;
    entry.ring.quaternion.copy(camera.quaternion);
    if (entry.halo.visible) entry.halo.quaternion.copy(camera.quaternion);
  }
  if (_tick++ % 3 !== 0) return;

  const w = innerWidth, h = innerHeight;
  const cands = [];
  for (const entry of graph.nodes.values()) {
    const eligible = entry.visible
      && (entry.labelEligible || entry.labelForced || entry.data.id === hoveredId);
    if (!eligible) { entry.label.visible = false; continue; }
    _v.copy(entry.mesh.position).project(camera);
    if (_v.z > 1) { entry.label.visible = false; continue; }
    const sx = (_v.x * 0.5 + 0.5) * w, sy = (-_v.y * 0.5 + 0.5) * h;
    if (sx < -150 || sx > w + 150 || sy < -60 || sy > h + 60) { entry.label.visible = false; continue; }
    const dist = camera.position.distanceTo(entry.mesh.position);
    const fade = 1 - THREE.MathUtils.clamp(
      (dist - SETTINGS.labelFadeStart) / (SETTINGS.labelFadeEnd - SETTINGS.labelFadeStart), 0, 1);
    const forced = entry.labelForced || entry.data.id === hoveredId;
    if (!forced && fade <= 0.05) { entry.label.visible = false; continue; }
    let priority = dist;
    if (entry.data.tier === 'hub') priority -= 5000;
    if (entry.data.criticality === 'Critical') priority -= 300;
    if (entry.labelForced) priority -= 2000;
    if (entry.data.id === hoveredId) priority -= 8000;
    cands.push({ entry, sx, sy, priority, fade, forced });
  }
  cands.sort((a, b) => a.priority - b.priority);

  const placed = [];
  for (const c of cands) {
    if (!c.entry.labelW) {
      const w0 = c.entry.el.offsetWidth;
      if (w0) { c.entry.labelW = w0; c.entry.labelH = c.entry.el.offsetHeight || 14; }
    }
    const halfW = (c.entry.labelW || c.entry.el.textContent.length * 6.2) / 2 + 5;
    const halfH = (c.entry.labelH || 14) / 2 + 4;
    let clash = false;
    for (const p of placed) {
      if (Math.abs(p.sx - c.sx) < halfW + p.halfW && Math.abs(p.sy - c.sy) < halfH + p.halfH) { clash = true; break; }
    }
    if (clash && !c.forced) { c.entry.label.visible = false; continue; }
    c.entry.label.visible = true;
    c.entry.el.style.opacity = String(Math.max(0.14, (c.entry.hlOpacity ?? 1) * (c.forced ? 1 : c.fade)));
    placed.push({ sx: c.sx, sy: c.sy, halfW, halfH });
  }
}
