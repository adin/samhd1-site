/**
 * scene/graph.js — molecules and interactions as 3D geometry.
 *
 * Node shape encodes class (sensor, kinase, transcription factor…), node colour
 * encodes class too, and a thin evidence ring encodes S/G/I. Edge colour
 * encodes interaction kind. Nothing is decorative: if you can see it, it means
 * something.
 */

import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { CLASSES, EDGE_KINDS, EVIDENCE, SETTINGS } from '../config.js';
import { NODES, EDGES, NODE_BY_ID } from '../data/index.js';
import { edgeActivity } from '../activity.js';

// ── Shared geometry (one per shape, reused across every node) ────────────
const GEO = {
  sphere: new THREE.SphereGeometry(1, 20, 14),
  octa:   new THREE.OctahedronGeometry(1.15, 0),
  box:    new THREE.BoxGeometry(1.6, 1.6, 1.6),
  cone:   new THREE.ConeGeometry(1.15, 2.2, 16),
  tetra:  new THREE.TetrahedronGeometry(1.45, 0),
  cyl:    new THREE.CylinderGeometry(0.95, 0.95, 2.2, 16),
  torus:  new THREE.TorusGeometry(1.0, 0.38, 10, 22),
  dodeca: new THREE.DodecahedronGeometry(1.2, 0),
  ring:   new THREE.TorusGeometry(1.15, 0.22, 8, 26),
};

const ARROW_GEO = new THREE.ConeGeometry(0.85, 2.0, 10);
const BAR_GEO   = new THREE.BoxGeometry(2.0, 0.45, 0.45);

/** Quadratic bezier from a→b, bowed perpendicular to the view-neutral axis. */
function curveFor(a, b, bend = 0.12) {
  const p0 = new THREE.Vector3().fromArray(a);
  const p2 = new THREE.Vector3().fromArray(b);
  const mid = p0.clone().add(p2).multiplyScalar(0.5);
  const dir = p2.clone().sub(p0);
  const len = dir.length() || 1;

  let up = new THREE.Vector3(0, 1, 0);
  if (Math.abs(dir.clone().normalize().dot(up)) > 0.94) up = new THREE.Vector3(1, 0, 0);
  const perp = new THREE.Vector3().crossVectors(dir, up).normalize();

  mid.addScaledVector(perp, len * bend);
  mid.y += len * bend * 0.35;
  return new THREE.QuadraticBezierCurve3(p0, mid, p2);
}

export function buildGraph(scene, labelLayer) {
  const root = new THREE.Group();
  root.name = 'graph';
  scene.add(root);

  const nodeGroup = new THREE.Group();
  const edgeGroup = new THREE.Group();
  root.add(edgeGroup, nodeGroup);

  /** id → { data, mesh, ring, label, baseColor, visible } */
  const nodes = new Map();
  /** array of { data, tube, head, curve, baseColor, visible } */
  const edges = [];

  // ── Nodes ──────────────────────────────────────────────────────────────
  for (const n of NODES) {
    const cls = CLASSES[n.klass];
    const color = new THREE.Color(cls.color);
    const size = (n.size ?? cls.size) * (n.key ? 1.28 : 1.0);

    const mesh = new THREE.Mesh(
      GEO[cls.shape] ?? GEO.sphere,
      new THREE.MeshStandardMaterial({
        color, emissive: color.clone().multiplyScalar(0.28),
        roughness: 0.38, metalness: 0.15, transparent: true, opacity: 1,
      })
    );
    mesh.scale.setScalar(size);
    mesh.position.fromArray(n.pos);
    mesh.userData.nodeId = n.id;
    nodeGroup.add(mesh);

    // Evidence ring — a thin billboarded torus in the evidence colour.
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(size * 1.55, size * 0.085, 6, 30),
      new THREE.MeshBasicMaterial({
        color: EVIDENCE[n.evidence]?.color ?? 0x888888,
        transparent: true, opacity: 0.62, depthWrite: false,
      })
    );
    ring.position.fromArray(n.pos);
    ring.userData.billboard = true;
    ring.raycast = () => {};
    nodeGroup.add(ring);

    // Activity halo (B1) — a second, wider billboarded ring that ONLY the
    // perturbation view writes to. It is a separate mesh rather than a tweak to
    // the emissive or to `ring` on purpose: applyHighlight/applyEdgeHighlight
    // own those every time they run, so an activity signal written there would
    // be silently erased by the next selection. Owning its own mesh means state
    // and selection compose instead of fighting.
    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(size * 2.15, size * 0.13, 6, 30),
      new THREE.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0,
        depthWrite: false, blending: THREE.AdditiveBlending,
      })
    );
    halo.position.fromArray(n.pos);
    halo.userData.billboard = true;
    halo.raycast = () => {};
    halo.visible = false;
    nodeGroup.add(halo);

    const el = document.createElement('div');
    el.className = 'node-label' + (n.key ? '' : ' dim');
    el.textContent = n.label;
    const label = new CSS2DObject(el);
    label.position.set(n.pos[0], n.pos[1] + size * 2.1, n.pos[2]);
    label.center.set(0.5, 1);
    nodeGroup.add(label);

    nodes.set(n.id, { data: n, mesh, ring, halo, label, el, baseColor: color, size, visible: true });
  }

  // ── Edges ──────────────────────────────────────────────────────────────
  for (const e of EDGES) {
    const a = NODE_BY_ID.get(e.from), b = NODE_BY_ID.get(e.to);
    const kind = EDGE_KINDS[e.kind];
    const color = new THREE.Color(kind.color);
    const curve = curveFor(a.pos, b.pos, e.bend ?? 0.12);

    const isLoop = !!e.loop;
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 26, isLoop ? 0.34 : 0.24, 5, false),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: isLoop ? 0.62 : 0.42, depthWrite: false })
    );
    tube.userData.edge = e;
    edgeGroup.add(tube);

    // Head sits just short of the target so it does not vanish inside it.
    const tHead = 0.9;
    const pos = curve.getPoint(tHead);
    const tan = curve.getTangent(tHead).normalize();
    let head = null;
    if (kind.head !== 'none') {
      head = new THREE.Mesh(
        kind.head === 'bar' ? BAR_GEO : ARROW_GEO,
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, depthWrite: false })
      );
      head.position.copy(pos);
      if (kind.head === 'bar') {
        head.lookAt(pos.clone().add(tan));
      } else {
        head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
      }
      head.raycast = () => {};
      edgeGroup.add(head);
    }

    const baseRadius = isLoop ? 0.34 : 0.24;
    edges.push({ data: e, tube, head, curve, baseColor: color, visible: true, isLoop, baseRadius });
  }

  return { root, nodeGroup, edgeGroup, nodes, edges };
}

// ── Visibility ────────────────────────────────────────────────────────────

const evidenceAllowed = (ev, filter) =>
  filter === 'all' || (filter === 'SG' ? ev === 'S' || ev === 'G' : ev === 'S');

/**
 * Recompute what is on screen.
 * state: { layers:Set, focus:string|null, forceDetail:bool, evidence:string, labels:'key'|'all'|'none' }
 */
export function applyVisibility(graph, state) {
  const { layers, focus, forceDetail, evidence } = state;

  for (const entry of graph.nodes.values()) {
    const n = entry.data;
    const onLayer = (n.pathways ?? []).some((p) => layers.has(p));
    const lodOK = n.lod === 1 || forceDetail || n.compartment === focus;
    const evOK = evidenceAllowed(n.evidence, evidence);
    const vis = onLayer && lodOK && evOK;

    entry.visible = vis;
    entry.mesh.visible = vis;
    entry.ring.visible = vis;
    entry.halo.visible = vis && entry.haloOn === true;
    // Base eligibility only — the final call is made per-frame by the
    // declutter pass in updateBillboards(), which also honours hover.
    entry.labelEligible = vis && state.labels !== 'none' && (state.labels === 'all' || !!n.key);
    entry.label.visible = entry.labelEligible;
  }

  for (const e of graph.edges) {
    const a = graph.nodes.get(e.data.from), b = graph.nodes.get(e.data.to);
    const onLayer = (e.data.pathways ?? []).some((p) => layers.has(p));
    const evOK = evidenceAllowed(e.data.evidence, evidence);
    const vis = onLayer && evOK && a.visible && b.visible;
    e.visible = vis;
    e.tube.visible = vis;
    if (e.head) e.head.visible = vis;
  }
}

/**
 * Highlight a node and its immediate neighbourhood; everything else recedes.
 * Pass `null` to clear. `extra` is an optional Set of ids to treat as selected
 * (used by the tour system to spotlight a whole step at once).
 */
export function applyHighlight(graph, id, extra = null, opts = {}) {
  const { includeNeighbours = true } = opts;
  const focusSet = new Set();
  if (id) focusSet.add(id);
  if (extra) for (const x of extra) focusSet.add(x);

  const neighbours = new Set(focusSet);
  if (focusSet.size && includeNeighbours) {
    for (const e of graph.edges) {
      if (focusSet.has(e.data.from)) neighbours.add(e.data.to);
      if (focusSet.has(e.data.to)) neighbours.add(e.data.from);
    }
  }
  const active = focusSet.size > 0;

  for (const entry of graph.nodes.values()) {
    if (!entry.visible) continue;
    const isFocus = focusSet.has(entry.data.id);
    const isNear = neighbours.has(entry.data.id);
    const m = entry.mesh.material;

    if (!active) {
      m.opacity = 1; m.emissive.copy(entry.baseColor).multiplyScalar(0.28);
      entry.mesh.scale.setScalar(entry.size);
      entry.ring.material.opacity = 0.62;
      entry.hlOpacity = 1; entry.spotlit = false;
    } else if (isFocus) {
      m.opacity = 1; m.emissive.copy(entry.baseColor).multiplyScalar(0.95);
      entry.mesh.scale.setScalar(entry.size * 1.35);
      entry.ring.material.opacity = 0.95;
      entry.hlOpacity = 1; entry.spotlit = true;
    } else if (isNear) {
      m.opacity = 0.95; m.emissive.copy(entry.baseColor).multiplyScalar(0.42);
      entry.mesh.scale.setScalar(entry.size);
      entry.ring.material.opacity = 0.6;
      entry.hlOpacity = 1; entry.spotlit = true;
    } else {
      m.opacity = 0.16; m.emissive.copy(entry.baseColor).multiplyScalar(0.05);
      entry.mesh.scale.setScalar(entry.size * 0.86);
      entry.ring.material.opacity = 0.08;
      entry.hlOpacity = 0.14; entry.spotlit = false;
    }
  }

  // While something is spotlit, its neighbourhood gets labels regardless of
  // the current label mode — that is the whole point of selecting it.
  for (const entry of graph.nodes.values()) entry.labelForced = active && entry.spotlit;

  for (const e of graph.edges) {
    if (!e.visible) continue;
    const touching = focusSet.has(e.data.from) || focusSet.has(e.data.to);
    const base = e.isLoop ? 0.62 : 0.42;
    const op = !active ? base : touching ? 0.95 : 0.05;
    e.tube.material.opacity = op;
    if (e.head) e.head.material.opacity = !active ? 0.8 : touching ? 1.0 : 0.05;
  }
}

/**
 * Spotlight ONE interaction: the edge burns, its two endpoints are lit, and
 * everything else recedes.
 *
 * Deliberately not `applyHighlight(graph, null, new Set([from, to]))` — that
 * lights every edge touching either endpoint, which for a hub like NF-κB is
 * forty arrows and buries the one that was actually clicked.
 */
const EDGE_LIT = new THREE.Color(0xffd75e);   // same amber the cascade stepper burns

export function applyEdgeHighlight(graph, edgeData) {
  if (!edgeData) return;
  const ends = new Set([edgeData.from, edgeData.to]);

  for (const entry of graph.nodes.values()) {
    if (!entry.visible) continue;
    const isEnd = ends.has(entry.data.id);
    const m = entry.mesh.material;
    m.opacity = isEnd ? 1 : 0.14;
    m.emissive.copy(entry.baseColor).multiplyScalar(isEnd ? 0.95 : 0.04);
    entry.mesh.scale.setScalar(entry.size * (isEnd ? 1.35 : 0.86));
    entry.ring.material.opacity = isEnd ? 0.95 : 0.07;
    entry.hlOpacity = isEnd ? 1 : 0.12;
    // Both endpoints keep their labels: the caption names them, and a lit
    // arrow between two anonymous dots is not an interaction you can read.
    entry.labelForced = isEnd;
    entry.spotlit = isEnd;
  }

  for (const e of graph.edges) {
    if (!e.visible) continue;
    const isIt = e.data === edgeData;
    e.tube.material.opacity = isIt ? 1 : 0.04;
    if (e.head) e.head.material.opacity = isIt ? 1 : 0.04;
    if (isIt) {
      e.tube.material.color.copy(EDGE_LIT);
      if (e.head) e.head.material.color.copy(EDGE_LIT);
    }
  }
}

// ── Label decluttering ────────────────────────────────────────────────────
// Screen-space greedy suppression: project every eligible label, sort by
// priority (spotlit → key → nearest), and drop any that would overlap one
// already placed. Without this, a 173-node graph is an unreadable word pile.

const _v = new THREE.Vector3();
let _declutterTick = 0;

/** Keep evidence rings facing the camera; fade and declutter labels. */
export function updateBillboards(graph, camera, labelMode, hoveredId = null) {
  for (const entry of graph.nodes.values()) {
    if (!entry.visible) continue;
    entry.ring.quaternion.copy(camera.quaternion);
    if (entry.halo.visible) entry.halo.quaternion.copy(camera.quaternion);
  }

  // Every 3rd frame is plenty — labels are not fast-moving objects.
  if (_declutterTick++ % 3 !== 0) return;

  const w = window.innerWidth, h = window.innerHeight;
  const candidates = [];

  for (const entry of graph.nodes.values()) {
    // CSS2DRenderer rewrites element.style.display every frame, so visibility
    // has to be driven through the Object3D flag, not the DOM.
    const eligible = entry.visible && (entry.labelEligible || entry.labelForced || entry.data.id === hoveredId);
    if (!eligible) { entry.label.visible = false; continue; }

    _v.copy(entry.mesh.position).project(camera);
    if (_v.z > 1) { entry.label.visible = false; continue; }        // behind camera

    const sx = (_v.x * 0.5 + 0.5) * w;
    const sy = (-_v.y * 0.5 + 0.5) * h;
    if (sx < -140 || sx > w + 140 || sy < -60 || sy > h + 60) { entry.label.visible = false; continue; }

    const dist = camera.position.distanceTo(entry.mesh.position);
    const fade = 1 - THREE.MathUtils.clamp(
      (dist - SETTINGS.labelFadeStart) / (SETTINGS.labelFadeEnd - SETTINGS.labelFadeStart), 0, 1);

    const forced = entry.labelForced || entry.data.id === hoveredId;
    if (!forced && fade <= 0.05) { entry.label.visible = false; continue; }

    let priority = dist;
    if (entry.data.key) priority -= 400;
    if (entry.labelForced) priority -= 2000;
    if (entry.data.id === hoveredId) priority -= 5000;

    candidates.push({ entry, sx, sy, priority, fade, forced });
  }

  candidates.sort((a, b) => a.priority - b.priority);

  const placed = [];
  for (const c of candidates) {
    // Measure once the element has actually been laid out; until then fall
    // back to a character-count estimate.
    if (!c.entry.labelW) {
      const w0 = c.entry.el.offsetWidth;
      if (w0) { c.entry.labelW = w0; c.entry.labelH = c.entry.el.offsetHeight || 14; }
    }
    const halfW = (c.entry.labelW || c.entry.data.label.length * 6.4) / 2 + 5;
    const halfH = (c.entry.labelH || 14) / 2 + 4;

    let clash = false;
    for (const p of placed) {
      if (Math.abs(p.sx - c.sx) < halfW + p.halfW && Math.abs(p.sy - c.sy) < halfH + p.halfH) { clash = true; break; }
    }
    if (clash && !c.forced) { c.entry.label.visible = false; continue; }

    c.entry.label.visible = true;
    c.entry.el.style.opacity = String(Math.max(0.12, (c.entry.hlOpacity ?? 1) * (c.forced ? 1 : c.fade)));
    placed.push({ sx: c.sx, sy: c.sy, halfW, halfH });
  }
}

// ── Streams ───────────────────────────────────────────────────────────────
// Recolour a "Mitochondrion Under Siege" stream in its manuscript colour, so
// the 3D view and the figure can be read side by side. An edge belongs to the
// stream when both endpoints are in its chain, which keeps membership correct
// as the graph grows.

const _streamCol = new THREE.Color();

export function applyStream(graph, stream) {
  // Always reset first — streams are exclusive and must not leave residue.
  for (const e of graph.edges) {
    e.tube.material.color.copy(e.baseColor);
    if (e.head) e.head.material.color.copy(e.baseColor);
  }
  if (!stream) return null;

  const set = new Set(stream.chain);
  _streamCol.set(stream.color);

  for (const e of graph.edges) {
    if (set.has(e.data.from) && set.has(e.data.to)) {
      e.tube.material.color.copy(_streamCol);
      if (e.head) e.head.material.color.copy(_streamCol);
    }
  }

  // Inputs and outputs read as sources and sinks: bigger, and tinted toward
  // the stream colour so the direction of the stream is legible at a glance.
  const ends = new Set([...(stream.inputs ?? []), ...(stream.outputs ?? [])]);
  for (const id of ends) {
    const entry = graph.nodes.get(id);
    if (!entry?.visible) continue;
    entry.mesh.material.emissive.copy(_streamCol).multiplyScalar(0.85);
    entry.mesh.scale.setScalar(entry.size * 1.5);
    entry.ring.material.color.copy(_streamCol);
    entry.ring.material.opacity = 1;
  }
  return set;
}

/** Reset the evidence rings that applyStream recoloured. */
export function resetRings(graph) {
  for (const entry of graph.nodes.values()) {
    entry.ring.material.color.set(EVIDENCE[entry.data.evidence]?.color ?? 0x888888);
  }
}

/**
 * Everything downstream of a node, by breadth-first walk over directed edges.
 * Returns { order: [ids in BFS order], depth: Map<id, hops> }.
 * Used by the "all consequences of A565T" view.
 */
export function downstreamOf(graph, startId, { maxDepth = 12 } = {}) {
  const adjacency = new Map();
  for (const e of graph.edges) {
    if (!adjacency.has(e.data.from)) adjacency.set(e.data.from, []);
    adjacency.get(e.data.from).push(e.data.to);
  }
  const depth = new Map([[startId, 0]]);
  const order = [startId];
  const queue = [startId];
  while (queue.length) {
    const cur = queue.shift();
    const d = depth.get(cur);
    if (d >= maxDepth) continue;
    for (const next of adjacency.get(cur) ?? []) {
      if (depth.has(next)) continue;
      depth.set(next, d + 1);
      order.push(next);
      queue.push(next);
    }
  }
  return { order, depth };
}

// ── Cascade path rendering ────────────────────────────────────────────────
// Draws a single traced route as a walk: everything behind you stays lit but
// muted, the current reaction burns, everything ahead is dim but present so
// you can see where you are going. Anything off-route recedes almost to
// nothing — the point of the mode is one chain at a time.

const PAST    = new THREE.Color(0x5f7fa8);
const CURRENT = EDGE_LIT;
const FUTURE  = new THREE.Color(0x3f5570);

/**
 * @param route     a route object from paths.js (null clears)
 * @param stepIdx   index of the current step within route.steps
 */
export function applyPath(graph, route, stepIdx = 0) {
  if (!route) return;

  const stepSet = new Map();                 // "from>kind>to" → position in route
  route.steps.forEach((e, i) => stepSet.set(`${e.from}>${e.kind}>${e.to}`, i));
  const nodeIdx = new Map();                 // node id → earliest position
  route.nodes.forEach((id, i) => { if (!nodeIdx.has(id)) nodeIdx.set(id, i); });

  for (const entry of graph.nodes.values()) {
    if (!entry.visible) continue;
    const i = nodeIdx.get(entry.data.id);
    const m = entry.mesh.material;

    if (i === undefined) {
      m.opacity = 0.07;
      m.emissive.copy(entry.baseColor).multiplyScalar(0.03);
      entry.mesh.scale.setScalar(entry.size * 0.8);
      entry.ring.material.opacity = 0.04;
      entry.hlOpacity = 0.1; entry.labelForced = false;
      continue;
    }

    // The two endpoints of the current reaction are the subject of the caption,
    // so they get the emphasis; the rest of the route stays readable.
    const isCurrent = i === stepIdx || i === stepIdx + 1;
    const isPast = i <= stepIdx;
    m.opacity = 1;
    m.emissive.copy(entry.baseColor).multiplyScalar(isCurrent ? 1.0 : isPast ? 0.4 : 0.22);
    entry.mesh.scale.setScalar(entry.size * (isCurrent ? 1.45 : 1.0));
    entry.ring.material.opacity = isCurrent ? 1 : 0.45;
    entry.hlOpacity = 1;
    entry.labelForced = true;
  }

  for (const e of graph.edges) {
    if (!e.visible) continue;
    const i = stepSet.get(`${e.data.from}>${e.data.kind}>${e.data.to}`);
    if (i === undefined) {
      e.tube.material.color.copy(e.baseColor);
      e.tube.material.opacity = 0.03;
      if (e.head) e.head.material.opacity = 0.03;
      continue;
    }
    const col = i === stepIdx ? CURRENT : i < stepIdx ? PAST : FUTURE;
    e.tube.material.color.copy(col);
    e.tube.material.opacity = i === stepIdx ? 1 : i < stepIdx ? 0.55 : 0.3;
    if (e.head) {
      e.head.material.color.copy(col);
      e.head.material.opacity = i === stepIdx ? 1 : i < stepIdx ? 0.6 : 0.3;
    }
  }
}

/** Make every node on a route visible regardless of LOD, so no step is blank. */
export function forceRouteVisible(graph, route) {
  if (!route) return;
  for (const id of route.nodes) {
    const entry = graph.nodes.get(id);
    if (!entry) continue;
    entry.visible = true;
    entry.mesh.visible = true;
    entry.ring.visible = true;
  }
  const stepSet = new Set(route.steps.map((e) => `${e.from}>${e.kind}>${e.to}`));
  for (const e of graph.edges) {
    if (stepSet.has(`${e.data.from}>${e.data.kind}>${e.data.to}`)) {
      e.visible = true;
      e.tube.visible = true;
      if (e.head) e.head.visible = true;
    }
  }
}

// ── Perturbation rendering (B1) ───────────────────────────────────────────
// Two channels, chosen so neither collides with anything selection already
// owns: node ACTIVITY becomes a coloured halo (its own mesh — see buildGraph),
// and edge activity becomes tube THICKNESS (geometry, not opacity, which
// applyHighlight rewrites on every selection).

const ACT_HOT  = new THREE.Color(0xff7043);   // above wild type
const ACT_COLD = new THREE.Color(0x4fc3f7);   // below wild type

/** Map an activity ratio to a 0–1 magnitude. log so 2× and 0.5× read equally. */
const actMagnitude = (a) => Math.min(1, Math.abs(Math.log(Math.max(a, 1e-6))) / Math.log(3));

/**
 * Render an activity map, or clear it with `null`.
 *
 * Rebuilding 380 TubeGeometries is affordable ONLY because this runs on a
 * discrete state change, never per frame. Do not call it from the animation
 * loop. Old geometry is disposed explicitly — three.js does not free GPU
 * buffers on garbage collection, and a user clicking through eleven arms would
 * otherwise leak eleven full sets of tubes.
 */
export function setActivity(graph, act) {
  for (const entry of graph.nodes.values()) {
    if (!act) {
      entry.haloOn = false;
      entry.halo.visible = false;
      entry.activity = undefined;
      continue;
    }
    const a = act.get(entry.data.id) ?? 1;
    const mag = actMagnitude(a);
    entry.activity = a;
    entry.haloOn = mag > 0.12;
    entry.halo.visible = entry.visible && entry.haloOn;
    if (entry.haloOn) {
      entry.halo.material.color.copy(a >= 1 ? ACT_HOT : ACT_COLD);
      // Strongly super-linear on purpose. In the A565T baseline four nodes in
      // five are elevated to SOME degree — that is what the disease is — so a
      // linear ramp haloes 80% of the board at once and the reader cannot tell
      // which arm actually moved. Raising it to a power keeps the faint
      // majority as a whisper and lets only genuine movers read as lit.
      entry.halo.material.opacity = 0.62 * mag ** 1.7;
      entry.halo.scale.setScalar(1 + 0.26 * mag);
    }
  }

  for (const e of graph.edges) {
    // Anchored at 1.0: an edge whose endpoints are at wild-type activity must
    // come out at exactly its base radius, or every arrow in the scene thickens
    // the moment any state is selected and thickness stops meaning anything.
    const want = act
      ? e.baseRadius * Math.min(2.2, Math.max(0.4, edgeActivity(act, e.data) ** 0.55))
      : e.baseRadius;
    if (Math.abs((e.renderedRadius ?? e.baseRadius) - want) < 0.005) continue;
    e.tube.geometry.dispose();
    e.tube.geometry = new THREE.TubeGeometry(e.curve, 26, want, 5, false);
    e.renderedRadius = want;
  }
}
