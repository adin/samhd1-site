/**
 * main.js — scene bootstrap, interaction, camera choreography, tour engine.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';

import { COMPARTMENTS, PATHWAYS, SETTINGS, STREAMS } from './config.js';
import { NODE_BY_ID } from './data/index.js';
import { TOURS, PATH_PRESETS } from './data/tours.js';
import { findRoutes, routeFromNodes } from './paths.js';
import { encodeView, decodeView, describeView } from './permalink.js';
import { buildCell, setMembranesVisible, emphasiseCompartment } from './scene/cell.js';
import { buildGraph, applyVisibility, applyHighlight, applyEdgeHighlight, updateBillboards,
         applyStream, resetRings, downstreamOf,
         applyPath, forceRouteVisible } from './scene/graph.js';
import { buildFlow } from './scene/flow.js';
import * as UI from './ui.js';

// ── Renderer / scene ──────────────────────────────────────────────────────
const canvas = document.getElementById('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const labelRenderer = new CSS2DRenderer({ element: document.getElementById('labels') });
labelRenderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05070c);
scene.fog = new THREE.FogExp2(0x05070c, 0.0016);

const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.5, 3000);
camera.position.fromArray(SETTINGS.cameraStart);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.minDistance = 12;
controls.maxDistance = 700;
controls.autoRotateSpeed = 0.35;

scene.add(new THREE.AmbientLight(0xdfe8ff, 1.05));
const key = new THREE.DirectionalLight(0xffffff, 1.5); key.position.set(120, 180, 140); scene.add(key);
const fill = new THREE.DirectionalLight(0x6fa8ff, 0.7); fill.position.set(-160, -60, -120); scene.add(fill);
const rim = new THREE.PointLight(0x46c8ff, 0.85, 900); rim.position.set(-40, 120, -180); scene.add(rim);

// ── Build ─────────────────────────────────────────────────────────────────
const cell = buildCell(scene);
const graph = buildGraph(scene, labelRenderer.domElement);
const flow = buildFlow(scene, graph);

// ── State ─────────────────────────────────────────────────────────────────
const state = {
  layers: new Set(Object.entries(PATHWAYS).filter(([, p]) => p.on).map(([k]) => k)),
  focus: null,            // compartment key currently entered
  forceDetail: false,
  evidence: 'all',
  labels: 'key',
  flow: true,
  membranes: true,
  spin: false,
  selected: null,         // node id
  selectedEdge: null,     // edge object from data/index.js EDGES
  tour: null,             // { tour, index }
  stream: null,           // key of STREAMS
  consequences: null,     // BFS result from the variant
  path: null,             // { query, result, routeIdx, stepIdx } — cascade navigator
};

function refresh() {
  applyVisibility(graph, state);

  if (state.path?.route) {
    // A traced route must be fully visible even where it dips into lod-2
    // detail or a layer the user switched off — otherwise a step goes blank
    // and the walk breaks exactly where it is most interesting.
    forceRouteVisible(graph, state.path.route);
    applyPath(graph, state.path.route, state.path.stepIdx);
    applyStream(graph, null);
    resetRings(graph);
  } else if (state.stream) {
    // Streams spotlight their own chain exactly — pulling in neighbours would
    // blur the very boundary the stream exists to draw.
    const st = STREAMS[state.stream];
    applyHighlight(graph, null, new Set(st.chain), { includeNeighbours: false });
    applyStream(graph, st);
  } else if (state.consequences) {
    applyHighlight(graph, null, new Set(state.consequences.order), { includeNeighbours: false });
    applyStream(graph, null);
    resetRings(graph);
  } else {
    // Colour first, then emphasis: applyStream(null) restores every edge to its
    // base colour, so an edge highlight applied before it would be wiped.
    applyStream(graph, null);
    resetRings(graph);
    if (state.selectedEdge) applyEdgeHighlight(graph, state.selectedEdge);
    else applyHighlight(graph, state.selected, state.tour ? new Set(currentTourStep()?.nodes ?? []) : null);
  }

  syncHash();
}

// ── Camera choreography ───────────────────────────────────────────────────
const tween = { active: false, t: 0, dur: 1, fromPos: new THREE.Vector3(), toPos: new THREE.Vector3(),
                fromTgt: new THREE.Vector3(), toTgt: new THREE.Vector3() };
const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

function flyTo(target, distance, dur = 1.05) {
  const dir = camera.position.clone().sub(controls.target).normalize();
  if (dir.lengthSq() < 1e-6) dir.set(0.6, 0.45, 0.65).normalize();
  tween.fromPos.copy(camera.position);
  tween.fromTgt.copy(controls.target);
  tween.toTgt.copy(target);
  tween.toPos.copy(target).addScaledVector(dir, distance);
  tween.t = 0; tween.dur = dur; tween.active = true;
}

/** Frame a set of node ids (only the visible ones). */
function frameNodes(ids, pad = 2.5) {
  const pts = [];
  for (const id of ids) {
    const e = graph.nodes.get(id);
    if (e?.visible) pts.push(e.mesh.position);
  }
  if (!pts.length) return;
  const box = new THREE.Box3().setFromPoints(pts);
  const centre = box.getCenter(new THREE.Vector3());
  const radius = Math.max(box.getSize(new THREE.Vector3()).length() * 0.5, 14);
  flyTo(centre, THREE.MathUtils.clamp(radius * pad + 26, 45, 280));
}

function enterCompartment(keyName) {
  state.focus = keyName;
  UI.markCompartment(keyName);
  emphasiseCompartment(cell.parts, keyName);
  refresh();

  if (keyName === null) {
    flyTo(new THREE.Vector3(0, 0, 0), 300, 1.2);
  } else {
    const part = cell.parts.get(keyName);
    flyTo(part.focusTarget.clone(), part.focusRadius * 2.35);
  }
}

function selectNode(id, { fly = true } = {}) {
  // Selecting a molecule leaves any stream or consequences view — they are
  // whole-graph modes and cannot coexist with a single-node focus.
  state.stream = null;
  state.consequences = null;
  state.path = null;
  state.selectedEdge = null;
  UI.markStream(null);
  UI.markPathActive(false);
  UI.hidePathHud();
  state.selected = id;
  refresh();
  if (id) {
    UI.renderInspector(id, { onNavigate: (next) => selectNode(next), onTrace: traceTo });
    const n = NODE_BY_ID.get(id);
    // Entering the node's compartment reveals its sub-detail neighbours.
    if (n && n.lod === 2 && state.focus !== n.compartment) {
      state.focus = n.compartment;
      UI.markCompartment(n.compartment);
      emphasiseCompartment(cell.parts, n.compartment);
      refresh();
    }
    if (fly) {
      // Frame the node together with its immediate neighbourhood, so the
      // interactions you just highlighted are actually on screen.
      const near = new Set([id]);
      for (const e of graph.edges) {
        if (!e.visible) continue;
        if (e.data.from === id) near.add(e.data.to);
        if (e.data.to === id) near.add(e.data.from);
      }
      frameNodes(near, 1.5);
    }
  } else {
    UI.hideInspector();
  }
}

/**
 * Inspect one interaction (B2).
 *
 * Edges carry a great deal of the mechanism — an edge's `label` and `detail`
 * are often the substance of a claim, and its `refs` are the citation for it —
 * so an arrow is a thing you can click, not scenery between two things you can
 * click.
 */
function selectEdge(edge, { fly = true } = {}) {
  if (!edge) return;
  state.stream = null;
  state.consequences = null;
  state.path = null;
  state.selected = null;
  state.selectedEdge = edge;
  UI.markStream(null);
  UI.markPathActive(false);
  UI.hidePathHud();
  UI.hideEdgeTip();
  refresh();

  UI.renderEdgeInspector(edge, { onNavigate: (next) => selectNode(next), onTrace: traceTo });
  if (fly) frameNodes([edge.from, edge.to], 3.0);
}

// ── Streams and the consequences view ─────────────────────────────────────
function selectStream(key) {
  if (key && key === state.stream) key = null;      // clicking again clears it
  // Streams, tours and path mode all claim the same HUD and the same arrow
  // keys, so entering one has to LEAVE the others rather than layer on top of
  // them. Without this a stream picked mid-tour leaves the tour running
  // invisibly underneath, and the view stops being describable as one thing.
  if (state.tour) exitTour();
  if (state.path) exitPath();
  state.stream = key;
  state.consequences = null;
  state.selected = null;
  state.selectedEdge = null;
  UI.markStream(key);

  if (!key) { UI.hideInspector(); refresh(); return; }

  // A stream must be able to show its whole chain, so turn on every layer its
  // members live on rather than silently dropping half the pathway.
  const st = STREAMS[key];
  for (const id of st.chain) {
    const n = NODE_BY_ID.get(id);
    for (const p of n?.pathways ?? []) state.layers.add(p);
  }
  syncLayerChecks();
  state.forceDetail = true;                          // chains reach into lod-2 detail
  document.getElementById('opt-detail').checked = true;

  refresh();
  frameNodes(st.chain, 1.35);
  UI.renderStreamInspector(key, { onNavigate: (next) => selectNode(next) });
}

function showConsequences() {
  if (state.tour) exitTour();
  if (state.path) exitPath();
  state.stream = null;
  state.selected = null;
  state.selectedEdge = null;
  UI.markStream(null);

  // The question is "everything this variant causes", so nothing may be hidden.
  state.layers = new Set(Object.keys(PATHWAYS));
  UI.setLayerChecks(true);
  state.forceDetail = true;
  document.getElementById('opt-detail').checked = true;
  state.evidence = 'all';
  document.getElementById('opt-evidence').value = 'all';
  state.focus = null;
  UI.markCompartment(null);
  emphasiseCompartment(cell.parts, null);

  applyVisibility(graph, state);                     // so the BFS sees the real graph
  state.consequences = downstreamOf(graph, 'a565t');
  refresh();
  flyTo(new THREE.Vector3(0, -6, 0), 330, 1.3);
  UI.renderConsequences(state.consequences, { onNavigate: (next) => selectNode(next) });
}

function syncLayerChecks() {
  document.querySelectorAll('#layer-list .layer').forEach((row) => {
    const on = state.layers.has(row.dataset.layer);
    row.querySelector('input').checked = on;
    row.classList.toggle('off', !on);
  });
}

// ── Cascade path navigator (B8) ───────────────────────────────────────────
function clearOtherModes() {
  state.stream = null;
  state.consequences = null;
  state.selected = null;
  state.selectedEdge = null;
  if (state.tour) { state.tour = null; UI.hideTour(); }
  UI.markStream(null);
}

/**
 * @param {object} query          { from, to, title, id? } — `id` marks a preset
 * @param {object} opts
 *   route    node-id chain to reopen (from a permalink) instead of route 0
 *   stepIdx  which step of that route to open at
 */
function startPath(query, { route = null, stepIdx = 0 } = {}) {
  clearOtherModes();
  const result = findRoutes(query.from, query.to);
  state.path = { query, result, routeIdx: -1, stepIdx: 0, route: null };
  UI.markPathActive(true);
  UI.hidePathHud();

  // Show every layer, so a route is never silently truncated by a filter.
  state.layers = new Set(Object.keys(PATHWAYS));
  UI.setLayerChecks(true);
  state.forceDetail = true;
  document.getElementById('opt-detail').checked = true;
  state.evidence = 'all';
  document.getElementById('opt-evidence').value = 'all';
  state.focus = null;
  UI.markCompartment(null);
  emphasiseCompartment(cell.parts, null);

  refresh();
  showRouteList();

  if (route) {
    // A shared route names its nodes, not its rank in the list. Prefer the
    // matching entry so the chooser highlights it, but fall back to rebuilding
    // the chain from the graph: the sender may have walked a route that this
    // build's diversity selection no longer puts in the shown subset.
    const chain = route.join('.');
    const i = result.routes.findIndex((r) => r.nodes.join('.') === chain);
    if (i >= 0) { pickRoute(i, stepIdx); return; }
    const rebuilt = routeFromNodes(route);
    if (rebuilt) { adoptRoute(rebuilt, -1, stepIdx); return; }
    // Otherwise the graph no longer contains that chain. Say so and leave the
    // route list up, rather than silently opening a different route under a
    // link that was sent to argue a specific one.
    UI.toast('That link names a route the atlas no longer contains — showing the current routes instead');
    return;
  }

  if (result.routes.length) pickRoute(0);
  else flyTo(new THREE.Vector3(0, 0, 0), 300, 1.0);
}

function showRouteList() {
  if (!state.path) return;
  UI.renderRouteList(state.path.query, state.path.result, state.path.routeIdx, {
    onPickRoute: pickRoute,
  });
}

function pickRoute(i, stepIdx = 0) {
  const p = state.path;
  if (!p || !p.result.routes[i]) return;
  adoptRoute(p.result.routes[i], i, stepIdx);
}

/** Make `route` the walked one. `routeIdx` is -1 for a route rebuilt from a link. */
function adoptRoute(route, routeIdx, stepIdx = 0) {
  const p = state.path;
  if (!p) return;
  p.routeIdx = routeIdx;
  p.route = route;
  p.stepIdx = THREE.MathUtils.clamp(stepIdx, 0, route.steps.length - 1);
  refresh();
  showStep();
}

function showStep() {
  const p = state.path;
  if (!p?.route) return;

  applyPath(graph, p.route, p.stepIdx);
  const e = p.route.steps[p.stepIdx];
  frameNodes([e.from, e.to], 3.2);

  UI.showPathStep(p.route, p.stepIdx, {
    onStep: stepPath,
    onShowRoutes: showRouteList,
    onExit: exitPath,
    onNavigate: (id) => { const keep = state.path; selectNode(id); state.path = keep; },
  });

  syncHash();
}

function stepPath(delta) {
  const p = state.path;
  if (!p?.route) return;
  const next = p.stepIdx + delta;
  if (next < 0 || next >= p.route.steps.length) return;
  p.stepIdx = next;
  showStep();
}

function exitPath() {
  state.path = null;
  UI.markPathActive(false);
  UI.hidePathHud();
  UI.hideInspector();
  refresh();
}

/** "Trace every route from p.A565T to <this node>" — from any node inspector. */
function traceTo(id) {
  const n = NODE_BY_ID.get(id);
  startPath({ from: 'a565t', to: id, title: `A565T → ${n?.label ?? id}` });
}

// ── Tour engine ───────────────────────────────────────────────────────────
const currentTourStep = () => (state.tour ? state.tour.tour.steps[state.tour.index] : null);

function startTour(id, index = 0) {
  const tour = TOURS.find((t) => t.id === id);
  if (!tour) return;
  const at = THREE.MathUtils.clamp(index, 0, tour.steps.length - 1);
  state.tour = { tour, index: at };
  state.selected = null;
  state.selectedEdge = null;
  state.stream = null;
  state.consequences = null;
  // Path mode owns the same HUD slot and the same arrow keys, so a tour
  // starting on top of one has to take them back.
  if (state.path) { state.path = null; UI.markPathActive(false); UI.hidePathHud(); }
  UI.markStream(null);
  UI.hideInspector();

  // Steps accumulate: each one ADDS its layers, and a compartment stays entered
  // until a later step names a different one. A link that opens at step 5 has
  // to replay that, or it shows step 5 through step 1's empty state — which is
  // not the view the sender was looking at when they copied the link.
  for (const step of tour.steps.slice(0, at)) {
    for (const l of step.layers ?? []) state.layers.add(l);
    if (step.focus) {
      state.focus = step.focus;
      UI.markCompartment(step.focus);
      emphasiseCompartment(cell.parts, step.focus);
    }
  }
  syncLayerChecks();

  playTourStep();
}

function playTourStep() {
  const { tour, index } = state.tour;
  const step = tour.steps[index];

  // A step's layer list is additive on top of what it needs, not a hard reset —
  // but we do turn on exactly what the step names so nothing it references hides.
  for (const l of step.layers ?? []) state.layers.add(l);
  syncLayerChecks();

  if (step.focus) {
    state.focus = step.focus;
    UI.markCompartment(step.focus);
    emphasiseCompartment(cell.parts, step.focus);
  }

  refresh();

  if (step.focus) {
    const part = cell.parts.get(step.focus);
    flyTo(part.focusTarget.clone(), part.focusRadius * 2.2, 1.2);
  } else {
    frameNodes(step.nodes ?? [], 2.2);
  }

  UI.showTourStep(tour, index, {
    onPrev: () => { if (state.tour.index > 0) { state.tour.index--; playTourStep(); } },
    onNext: () => {
      if (state.tour.index < tour.steps.length - 1) { state.tour.index++; playTourStep(); }
      else exitTour();
    },
    onExit: exitTour,
  });
}

function exitTour() {
  state.tour = null;
  UI.hideTour();
  refresh();
}

// ── Permalinks ────────────────────────────────────────────────────────────
// Every view is a URL. That is what makes a pathway shareable: instead of
// screen-recording a walk through Loop B for a colleague, you send them the
// step. The hash is rewritten with replaceState — history stays clean through
// an eight-step tour, and the address bar always names what is on screen.

let hashQueued = false;
let lastHash = null;
let pinCamera = false;          // whether the exact camera pose rides along

/** The link for the current view, as an absolute URL. */
function currentLink(hash = encodeView(state, pinCamera ? { camera, controls } : {})) {
  return location.origin + location.pathname + location.search + (hash ? `#${hash}` : '');
}

/**
 * Rewrite the hash to match the state. Coalesced through one animation frame
 * because a single click can call refresh() several times on its way to a
 * settled view, and only the settled one is worth writing.
 */
function syncHash() {
  if (hashQueued) return;
  hashQueued = true;
  requestAnimationFrame(() => {
    hashQueued = false;
    const h = encodeView(state, pinCamera ? { camera, controls } : {});
    if (h === lastHash) return;
    lastHash = h;
    history.replaceState(null, '', h ? `#${h}` : location.pathname + location.search);
    UI.setShareNote(describeView(state), currentLink(h));
  });
}

/** Display options are applied on their own so a link can override a mode's defaults. */
function applyDisplay(view) {
  const set = (id, prop, v) => { document.getElementById(id)[prop] = v; };
  if (view.layers) { state.layers = new Set(view.layers); syncLayerChecks(); }
  if (view.evidence) { state.evidence = view.evidence; set('opt-evidence', 'value', view.evidence); }
  if (view.labels) { state.labels = view.labels; set('opt-labels', 'value', view.labels); }
  if (view.detail !== undefined) { state.forceDetail = view.detail; set('opt-detail', 'checked', view.detail); }
  if (view.flow !== undefined) { state.flow = view.flow; set('opt-flow', 'checked', view.flow); }
  if (view.membranes !== undefined) {
    state.membranes = view.membranes; set('opt-membranes', 'checked', view.membranes);
    setMembranesVisible(cell.parts, view.membranes);
  }
  if (view.spin !== undefined) {
    state.spin = view.spin; set('opt-spin', 'checked', view.spin); controls.autoRotate = view.spin;
  }
}

/**
 * Put the atlas into the view a hash describes. Returns false when the hash
 * named no view at all, so the caller can fall back to the overview.
 *
 * Display options are applied twice on purpose: once before the mode, so the
 * mode is built against the right layer set, and once after, because path and
 * consequences mode force every layer on and an explicit `layers=` in the link
 * is the sender's choice and should survive that.
 */
function applyView(view) {
  if (!view) return false;

  applyDisplay(view);

  if (view.focus) {
    state.focus = view.focus;
    UI.markCompartment(view.focus);
    emphasiseCompartment(cell.parts, view.focus);
  }

  let placed = true;
  if (view.path) {
    const preset = PATH_PRESETS.find((x) => x.id === view.path.preset);
    const to = view.path.to.length === 1 ? view.path.to[0] : view.path.to;
    const query = preset ?? {
      from: view.path.from, to,
      title: `${NODE_BY_ID.get(view.path.from)?.label ?? view.path.from} → ` +
             view.path.to.map((t) => NODE_BY_ID.get(t)?.label ?? t).join(', '),
    };
    startPath(query, { route: view.path.route, stepIdx: view.step ?? 0 });
  } else if (view.tour) startTour(view.tour, view.step ?? 0);
  else if (view.stream) selectStream(view.stream);
  else if (view.consequences) showConsequences();
  else if (view.edge) selectEdge(view.edge);
  else if (view.node) selectNode(view.node);
  else if (view.focus) enterCompartment(view.focus);
  else placed = false;

  applyDisplay(view);
  refresh();

  if (view.cam) {
    // Last word on the camera, so it beats whatever the mode just framed.
    // Damping has to be off across the assignment: with it on, OrbitControls
    // carries residual momentum from the flight we just cancelled and applies
    // it on the next update, landing a few units off the pose that was sent.
    tween.active = false;
    controls.enableDamping = false;
    controls.update();                                   // flush the residual
    camera.position.set(view.cam[0], view.cam[1], view.cam[2]);
    controls.target.set(view.cam[3], view.cam[4], view.cam[5]);
    controls.update();
    controls.enableDamping = true;
    pinCamera = true;
    document.getElementById('opt-cam').checked = true;
  }

  return placed || Boolean(view.cam);
}

addEventListener('hashchange', () => {
  // replaceState does not fire this, so anything arriving here is a real
  // navigation — a pasted link, or a back/forward across one.
  const h = location.hash.replace(/^#/, '');
  if (h === lastHash) return;
  lastHash = h;
  if (!applyView(decodeView(location.hash))) enterCompartment(null);
});

// ── Picking ───────────────────────────────────────────────────────────────
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let hovered = null;

function pickNode(ev) {
  pointer.x = (ev.clientX / innerWidth) * 2 - 1;
  pointer.y = -(ev.clientY / innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(graph.nodeGroup.children, false);
  for (const h of hits) {
    const id = h.object.userData.nodeId;
    if (id && graph.nodes.get(id)?.visible) return id;
  }
  return null;
}

/**
 * The edge under the pointer, or null.
 *
 * Kept separate from pickNode and only ever consulted after it misses: node
 * meshes are the primary targets, and a tube passing behind one must not steal
 * its click. Arrowheads have raycast disabled, so only the tubes answer here.
 */
function pickEdge(ev) {
  pointer.x = (ev.clientX / innerWidth) * 2 - 1;
  pointer.y = -(ev.clientY / innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(graph.edgeGroup.children, false);
  for (const h of hits) {
    if (h.object.visible && h.object.userData.edge) return h.object.userData.edge;
  }
  return null;
}

function pickCompartment(ev) {
  pointer.x = (ev.clientX / innerWidth) * 2 - 1;
  pointer.y = -(ev.clientY / innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(cell.root.children, true);
  for (const h of hits) {
    let o = h.object;
    while (o) {
      if (o.userData?.compartment) return o.userData.compartment;
      o = o.parent;
    }
  }
  return null;
}

let downAt = null;
renderer.domElement.addEventListener('pointerdown', (e) => { downAt = { x: e.clientX, y: e.clientY }; });
renderer.domElement.addEventListener('pointerup', (e) => {
  if (!downAt) return;
  const moved = Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y);
  downAt = null;
  if (moved > 5 || e.button !== 0) return;      // that was a drag, not a click
  const id = pickNode(e);
  if (id) { selectNode(id); return; }
  const edge = pickEdge(e);
  if (edge) { selectEdge(edge); return; }
  state.selected = null; state.selectedEdge = null;
  UI.hideInspector(); refresh();
});

renderer.domElement.addEventListener('dblclick', (e) => {
  if (pickNode(e)) return;
  const c = pickCompartment(e);
  if (c) enterCompartment(c === state.focus ? null : c);
});

// Hover only sets state; the declutter pass in updateBillboards() decides what
// that means for labels, so the two never fight over the same DOM property.
//
// Edge hover is throttled and only consulted when no node is under the pointer.
// The 380 tubes are ~100k triangles between them, which is far too much to
// raycast on every pointermove — but it is imperceptible at ~15 Hz, and a node
// hit means the answer is already known.
let hoveredEdge = null;
let lastEdgeProbe = 0;

renderer.domElement.addEventListener('pointermove', (e) => {
  const id = pickNode(e);
  if (id !== hovered) hovered = id;

  if (id || downAt) {                       // a node wins, and a drag suppresses
    if (hoveredEdge) { hoveredEdge = null; UI.hideEdgeTip(); }
    renderer.domElement.style.cursor = id ? 'pointer' : 'default';
    return;
  }

  const now = performance.now();
  if (now - lastEdgeProbe < 65) {
    if (hoveredEdge) UI.showEdgeTip(e.clientX, e.clientY, hoveredEdge);   // keep it under the pointer
    return;
  }
  lastEdgeProbe = now;

  const edge = pickEdge(e);
  hoveredEdge = edge;
  renderer.domElement.style.cursor = edge ? 'pointer' : 'default';
  if (edge) UI.showEdgeTip(e.clientX, e.clientY, edge);
  else UI.hideEdgeTip();
});

renderer.domElement.addEventListener('pointerleave', () => {
  hoveredEdge = null;
  UI.hideEdgeTip();
});

// ── UI wiring ─────────────────────────────────────────────────────────────
UI.buildRail({
  onCompartment: (keyName) => enterCompartment(keyName === state.focus ? null : keyName),
  onLayerToggle: (layer, on) => { on ? state.layers.add(layer) : state.layers.delete(layer); refresh(); },
  onLayersSet: (on) => {
    state.layers = on ? new Set(Object.keys(PATHWAYS)) : new Set();
    UI.setLayerChecks(on);
    refresh();
  },
  onTour: startTour,
  onStream: selectStream,
  onConsequences: showConsequences,
  onPathPreset: (id) => { const q = PATH_PRESETS.find((x) => x.id === id); if (q) startPath(q); },
  onExitPath: exitPath,
  onOption: (k, v) => {
    if (k === 'flow') { state.flow = v; syncHash(); }
    else if (k === 'detail') { state.forceDetail = v; refresh(); }
    else if (k === 'membranes') { state.membranes = v; setMembranesVisible(cell.parts, v); syncHash(); }
    else if (k === 'spin') { state.spin = v; controls.autoRotate = v; syncHash(); }
    else if (k === 'labels') { state.labels = v; refresh(); }
    else if (k === 'evidence') { state.evidence = v; refresh(); }
  },
});

UI.buildSearch({ onPick: (id) => selectNode(id) });
UI.buildLegend();

UI.buildShare({
  getLink: () => currentLink(),
  onPinCamera: (on) => { pinCamera = on; lastHash = null; syncHash(); },
});

// Only re-encode the camera when the user stops moving it. Writing a pose on
// every frame of a drag would leave the URL unreadable and the history API busy
// for no gain — the pose that matters is the one you stopped on.
controls.addEventListener('end', () => { if (pinCamera) syncHash(); });
document.getElementById('insp-close').addEventListener('click', () => {
  state.selected = null; state.selectedEdge = null; UI.hideInspector(); refresh();
});

addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
  if (e.key === 'Escape') {
    if (state.path) exitPath();
    else if (state.tour) exitTour();
    else if (state.stream) selectStream(null);
    else if (state.consequences) { state.consequences = null; UI.hideInspector(); refresh(); }
    else if (state.selectedEdge) { state.selectedEdge = null; UI.hideInspector(); refresh(); }
    else if (state.selected) { state.selected = null; UI.hideInspector(); refresh(); }
    else enterCompartment(null);
  } else if (e.key === '/') { e.preventDefault(); document.getElementById('search').focus(); }
  else if (e.key === 'ArrowRight' && state.path?.route) { e.preventDefault(); stepPath(+1); }
  else if (e.key === 'ArrowLeft' && state.path?.route) { e.preventDefault(); stepPath(-1); }
  else if (e.key === 'ArrowRight' && state.tour) {
    if (state.tour.index < state.tour.tour.steps.length - 1) { state.tour.index++; playTourStep(); } else exitTour();
  } else if (e.key === 'ArrowLeft' && state.tour) {
    if (state.tour.index > 0) { state.tour.index--; playTourStep(); }
  }
});

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  labelRenderer.setSize(innerWidth, innerHeight);
});

// ── Loop ──────────────────────────────────────────────────────────────────
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();
  const t = clock.elapsedTime;

  if (tween.active) {
    tween.t = Math.min(1, tween.t + dt / tween.dur);
    const k = easeInOut(tween.t);
    camera.position.lerpVectors(tween.fromPos, tween.toPos, k);
    controls.target.lerpVectors(tween.fromTgt, tween.toTgt, k);
    if (tween.t >= 1) tween.active = false;
  }

  controls.update();
  flow.update(t, state.flow);
  updateBillboards(graph, camera, state.labels, hovered);

  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}

refresh();
// A link decides the opening view; without one, the whole-cell overview does.
if (!applyView(decodeView(location.hash))) enterCompartment(null);
animate();

const loading = document.getElementById('loading');
loading.classList.add('done');
setTimeout(() => loading.remove(), 600);

// Handy for poking at the graph from the console during development.
window.atlas = { scene, camera, controls, graph, cell, state, refresh, selectNode, selectEdge, enterCompartment, startTour, selectStream, showConsequences, startPath, traceTo, stepPath, currentLink, applyView };
