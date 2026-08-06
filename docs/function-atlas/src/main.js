/**
 * main.js — scene bootstrap, picking, camera, tour engine.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';

import { COMPARTMENTS, TIERS, SETTINGS } from './config.js';
import { NODE_BY_ID, NODES } from './data/index.js';
import { TOURS } from './data/tours.js';
import { buildCell, setMembranesVisible, buildGraph, applyVisibility, applyHighlight,
         setState, updateBillboards } from './scene/graph.js';
import * as UI from './ui.js';

// ── Renderer ──────────────────────────────────────────────────────────────
const canvas = document.getElementById('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const labelRenderer = new CSS2DRenderer({ element: document.getElementById('labels') });
labelRenderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05070c);
scene.fog = new THREE.FogExp2(0x05070c, 0.0017);

const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.5, 3000);
camera.position.fromArray(SETTINGS.cameraStart);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.minDistance = 14;
controls.maxDistance = 620;
controls.autoRotateSpeed = 0.32;
controls.target.fromArray(SETTINGS.cameraTarget);
controls.update();

scene.add(new THREE.AmbientLight(0xdfe8ff, 1.05));
const keyLight = new THREE.DirectionalLight(0xffffff, 1.45); keyLight.position.set(110, 170, 130); scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0x6fa8ff, 0.7); fillLight.position.set(-150, -60, -110); scene.add(fillLight);

const cell = buildCell(scene);
const graph = buildGraph(scene);

// ── State ─────────────────────────────────────────────────────────────────
const state = {
  tiers: new Set(Object.keys(TIERS)),
  evidence: 'all',
  labels: 'key',
  showStructural: true,
  membranes: true,
  spin: false,
  selected: null,
  focus: null,
  compare: 'wt',
  domain: null,        // key of DOMAINS — highlights one grouping
  tour: null,          // { tour, index }
};

function refresh() {
  applyVisibility(graph, state);
  // A domain is a HIGHLIGHT, not a filter: hiding the other four would break
  // every arrow leaving the domain, and the point of grouping these is to see
  // what each one connects to.
  const spot = state.tour
    ? new Set(state.tour.tour.steps[state.tour.index].nodes ?? [])
    : state.selected ? new Set([state.selected])
    : state.domain ? new Set(NODES.filter((n) => n.domain === state.domain).map((n) => n.id))
    : null;
  applyHighlight(graph, spot);
  syncHash();
}

// ── Camera ────────────────────────────────────────────────────────────────
const tween = { active: false, t: 0, dur: 1,
  fromPos: new THREE.Vector3(), toPos: new THREE.Vector3(),
  fromTgt: new THREE.Vector3(), toTgt: new THREE.Vector3() };
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

function flyTo(target, distance, dur = 1.0) {
  const dir = camera.position.clone().sub(controls.target).normalize();
  if (dir.lengthSq() < 1e-6) dir.set(0.6, 0.45, 0.65).normalize();
  tween.fromPos.copy(camera.position); tween.fromTgt.copy(controls.target);
  tween.toTgt.copy(target); tween.toPos.copy(target).addScaledVector(dir, distance);
  tween.t = 0; tween.dur = dur; tween.active = true;
}

function frameNodes(ids) {
  const pts = [];
  for (const id of ids ?? []) {
    const e = graph.nodes.get(id);
    if (e?.visible) pts.push(e.mesh.position);
  }
  if (!pts.length) return;
  const box = new THREE.Box3().setFromPoints(pts);
  const centre = box.getCenter(new THREE.Vector3());
  const radius = Math.max(box.getSize(new THREE.Vector3()).length() * 0.5, 12);
  flyTo(centre, THREE.MathUtils.clamp(radius * 2.4 + 30, 46, 300));
}

function enterCompartment(key) {
  state.focus = key;
  UI.markCompartment(key);
  refresh();
  if (key === null) flyTo(new THREE.Vector3().fromArray(SETTINGS.cameraTarget), 268, 1.15);
  else {
    const part = cell.parts.get(key);
    flyTo(part.focusTarget.clone(), part.focusRadius * 2.5);
  }
}

function selectNode(id, { fly = true } = {}) {
  if (!NODE_BY_ID.has(id)) return;
  state.selected = id;
  UI.renderInspector(id, { onSelect: (x) => selectNode(x) });
  refresh();
  if (fly) {
    const e = graph.nodes.get(id);
    if (e) flyTo(e.mesh.position.clone(), 62, 0.85);
  }
}

// ── Tours ─────────────────────────────────────────────────────────────────
function startTour(id, index = 0) {
  const tour = TOURS.find((t) => t.id === id);
  if (!tour) return;
  state.selected = null;
  UI.hideInspector();
  state.tour = { tour, index: Math.max(0, Math.min(index, tour.steps.length - 1)) };
  UI.markTour(id);
  playStep();
}

function playStep() {
  const { tour, index } = state.tour;
  const step = tour.steps[index];

  // A step may set the comparison state. Replay from step 0 so opening a tour
  // partway through does not inherit whatever the previous view happened to be
  // — the same bug the sibling atlas hit with accumulated layers.
  let compare = 'wt';
  for (let i = 0; i <= index; i++) compare = tour.steps[i].state ?? compare;
  if (compare !== state.compare) setCompare(compare, { silent: true });

  if (step.focus) { state.focus = step.focus; UI.markCompartment(step.focus); }
  refresh();
  UI.showTourStep(tour, index);

  if (step.focus) {
    const part = cell.parts.get(step.focus);
    flyTo(part.focusTarget.clone(), part.focusRadius * 2.5);
  } else if (step.nodes?.length) {
    frameNodes(step.nodes);
  }
}

function stepTour(delta) {
  if (!state.tour) return;
  const next = state.tour.index + delta;
  if (next < 0) return;
  if (next >= state.tour.tour.steps.length) return exitTour();
  state.tour.index = next;
  playStep();
}

/** Leave a tour without triggering a refresh — the caller is about to do one. */
function exitTourQuiet() {
  if (!state.tour) return;
  state.tour = null;
  UI.markTour(null);
  UI.hideTourHud();
}

function exitTour() {
  state.tour = null;
  UI.markTour(null);
  UI.hideTourHud();
  refresh();
}

// ── Compare ───────────────────────────────────────────────────────────────
function setCompare(key, { silent = false } = {}) {
  state.compare = key;
  setState(graph, key);
  UI.markState(key);
  if (!silent) refresh();
}

// ── Permalink ─────────────────────────────────────────────────────────────
let hashQueued = false, lastHash = null;

function syncHash() {
  if (hashQueued) return;
  hashQueued = true;
  requestAnimationFrame(() => {
    hashQueued = false;
    const p = [];
    if (state.tour) p.push(`tour=${state.tour.tour.id}`, `step=${state.tour.index + 1}`);
    else if (state.selected) p.push(`node=${state.selected}`);
    if (state.focus) p.push(`focus=${state.focus}`);
    if (state.domain) p.push(`domain=${state.domain}`);
    if (state.compare !== 'wt') p.push(`state=${state.compare}`);
    const h = p.join('&');
    if (h === lastHash) return;
    lastHash = h;
    history.replaceState(null, '', location.pathname + (h ? `#${h}` : ''));
  });
}

function applyHash() {
  const raw = location.hash.replace(/^#/, '').trim();
  if (!raw) return false;
  const q = new URLSearchParams(raw);
  if (q.has('state')) setCompare(q.get('state') === 'a565t' ? 'a565t' : 'wt', { silent: true });
  if (q.has('focus') && COMPARTMENTS[q.get('focus')]) {
    state.focus = q.get('focus');
    UI.markCompartment(state.focus);
  }
  if (q.has('tour')) {
    const step = parseInt(q.get('step') ?? '1', 10);
    startTour(q.get('tour'), Number.isFinite(step) ? step - 1 : 0);
    return true;
  }
  if (q.has('domain')) {
    state.domain = q.get('domain');
    UI.markDomain(state.domain);
  }
  if (q.has('node') && NODE_BY_ID.has(q.get('node'))) { selectNode(q.get('node')); return true; }
  refresh();
  return true;
}

// ── Picking ───────────────────────────────────────────────────────────────
const ray = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let hovered = null;

function pick(ev) {
  pointer.x = (ev.clientX / innerWidth) * 2 - 1;
  pointer.y = -(ev.clientY / innerHeight) * 2 + 1;
  ray.setFromCamera(pointer, camera);
  const meshes = [];
  for (const e of graph.nodes.values()) if (e.visible) meshes.push(e.mesh);
  const hit = ray.intersectObjects(meshes, false)[0];
  return hit?.object?.userData?.nodeId ?? null;
}

let downAt = null;
renderer.domElement.addEventListener('pointerdown', (ev) => { downAt = { x: ev.clientX, y: ev.clientY }; });
renderer.domElement.addEventListener('pointerup', (ev) => {
  if (!downAt) return;
  const moved = Math.hypot(ev.clientX - downAt.x, ev.clientY - downAt.y);
  downAt = null;
  if (moved > 5) return;                       // a drag is an orbit, not a click
  const id = pick(ev);
  if (id) selectNode(id);
  else { state.selected = null; UI.hideInspector(); refresh(); }
});
renderer.domElement.addEventListener('pointermove', (ev) => {
  const id = pick(ev);
  if (id !== hovered) {
    hovered = id;
    renderer.domElement.style.cursor = id ? 'pointer' : 'default';
  }
});

// ── Wiring ────────────────────────────────────────────────────────────────
UI.buildRail({
  onState: (k) => setCompare(k),
  onTour: (id) => (state.tour?.tour.id === id ? exitTour() : startTour(id)),
  onExitTour: exitTour,
  onDomain: (k) => {
    state.domain = k === state.domain ? null : k;
    if (state.domain) { state.selected = null; UI.hideInspector(); exitTourQuiet(); }
    UI.markDomain(state.domain);
    refresh();
    if (state.domain) frameNodes(NODES.filter((n) => n.domain === state.domain).map((n) => n.id));
  },
  onTierToggle: (t, on) => { on ? state.tiers.add(t) : state.tiers.delete(t); refresh(); },
  onCompartment: (k) => enterCompartment(k === state.focus ? null : k),
  onOption: (k, v) => {
    if (k === 'structural') state.showStructural = v;
    else if (k === 'membranes') { state.membranes = v; setMembranesVisible(cell.parts, v); }
    else if (k === 'spin') { state.spin = v; controls.autoRotate = v; }
    else if (k === 'labels') state.labels = v;
    else if (k === 'evidence') state.evidence = v;
    refresh();
  },
});
UI.buildSearch({ onSelect: (id) => selectNode(id) });
UI.buildLegend();
UI.markState('wt');

document.getElementById('insp-close').addEventListener('click', () => {
  state.selected = null; UI.hideInspector(); refresh();
});
document.getElementById('th-next').addEventListener('click', () => stepTour(1));
document.getElementById('th-prev').addEventListener('click', () => stepTour(-1));

addEventListener('keydown', (ev) => {
  if (ev.target.tagName === 'INPUT') return;
  if (ev.key === 'ArrowRight') stepTour(1);
  else if (ev.key === 'ArrowLeft') stepTour(-1);
  else if (ev.key === 'Escape') {
    if (state.tour) exitTour();
    else { state.selected = null; UI.hideInspector(); refresh(); }
  }
});
addEventListener('hashchange', () => applyHash());
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  labelRenderer.setSize(innerWidth, innerHeight);
});

if (!applyHash()) refresh();
document.getElementById('loading').remove();

// ── Loop ──────────────────────────────────────────────────────────────────
const clock = new THREE.Clock();
function tick() {
  requestAnimationFrame(tick);
  const dt = clock.getDelta();
  if (tween.active) {
    tween.t = Math.min(1, tween.t + dt / tween.dur);
    const k = ease(tween.t);
    camera.position.lerpVectors(tween.fromPos, tween.toPos, k);
    controls.target.lerpVectors(tween.fromTgt, tween.toTgt, k);
    if (tween.t >= 1) tween.active = false;
  }
  controls.update();
  updateBillboards(graph, camera, hovered);
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}
tick();
