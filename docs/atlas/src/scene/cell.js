/**
 * scene/cell.js — the cell itself: compartment membranes and their labels.
 *
 * Membranes are deliberately faint. They exist to give the molecular graph a
 * place to live, not to compete with it for attention.
 */

import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { COMPARTMENTS } from '../config.js';

/** Faint translucent shell + brighter wire overlay, grouped and tagged. */
function shell(geometry, color, { fill = 0.045, wire = 0.16, wireGeo = null } = {}) {
  const group = new THREE.Group();

  const skin = new THREE.Mesh(
    geometry,
    new THREE.MeshPhysicalMaterial({
      color, transparent: true, opacity: fill, side: THREE.DoubleSide,
      depthWrite: false, roughness: 0.55, metalness: 0.0,
      transmission: 0.35, thickness: 4, clearcoat: 0.4,
    })
  );
  group.add(skin);

  const lines = new THREE.LineSegments(
    new THREE.WireframeGeometry(wireGeo ?? geometry),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity: wire, depthWrite: false })
  );
  group.add(lines);

  group.userData.skin = skin;
  group.userData.lines = lines;
  return group;
}

/** A few flattened tori inside the mitochondrion, to read as cristae. */
function cristae(len, r, color) {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.20, depthWrite: false });
  const n = 7;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const x = (t - 0.5) * (len - r * 1.6);
    const rr = r * (0.62 + 0.22 * Math.sin(t * Math.PI * 2.2));
    const torus = new THREE.Mesh(new THREE.TorusGeometry(rr, r * 0.055, 6, 40), mat);
    torus.rotation.y = Math.PI / 2;
    torus.rotation.x = 0.35 * Math.sin(i * 1.7);
    torus.position.x = x;
    g.add(torus);
  }
  return g;
}

/** ER: a stack of gently curved sheets around the anchor. */
function erSheets(color) {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity: 0.11, side: THREE.DoubleSide, depthWrite: false,
  });
  for (let i = 0; i < 5; i++) {
    const geo = new THREE.TorusGeometry(16 + i * 3.4, 1.1, 5, 46, Math.PI * 1.25);
    const m = new THREE.Mesh(geo, mat);
    m.rotation.set(1.15 + i * 0.09, i * 0.55, 0.4 * i);
    g.add(m);
  }
  return g;
}

export function buildCell(scene) {
  const root = new THREE.Group();
  root.name = 'cell';
  scene.add(root);

  /** compartment key → { group, label, focusTarget, focusRadius } */
  const parts = new Map();

  for (const [key, c] of Object.entries(COMPARTMENTS)) {
    const group = new THREE.Group();
    group.name = `compartment:${key}`;
    group.userData.compartment = key;

    const s = c.shell;
    if (s?.kind === 'cell') {
      const geo = new THREE.SphereGeometry(1, 56, 40);
      const sh = shell(geo, c.color, { fill: 0.030, wire: 0.055 });
      sh.scale.set(s.rx, s.ry, s.rz);
      group.add(sh);
    } else if (s?.kind === 'sphere') {
      const geo = new THREE.SphereGeometry(s.r, 34, 24);
      const sh = shell(geo, c.color, { fill: 0.075, wire: 0.16 });
      sh.position.fromArray(s.at);
      group.add(sh);
    } else if (s?.kind === 'mito') {
      const geo = new THREE.CapsuleGeometry(s.r, s.len - s.r * 2, 10, 30);
      const sh = shell(geo, c.color, { fill: 0.065, wire: 0.15 });
      sh.rotation.z = Math.PI / 2;          // long axis → +X
      sh.position.fromArray(s.at);
      group.add(sh);

      // inner membrane, slightly inset
      const innerGeo = new THREE.CapsuleGeometry(s.r * 0.78, (s.len - s.r * 2) * 0.94, 8, 26);
      const inner = shell(innerGeo, c.color, { fill: 0.05, wire: 0.10 });
      inner.rotation.z = Math.PI / 2;
      inner.position.fromArray(s.at);
      group.add(inner);

      const cr = cristae(s.len, s.r, c.color);
      cr.position.fromArray(s.at);
      group.add(cr);
    } else if (s?.kind === 'er') {
      const sheets = erSheets(c.color);
      sheets.position.fromArray(s.at);
      group.add(sheets);
    }

    // Compartment name floating at the anchor.
    const el = document.createElement('div');
    el.className = 'compartment-label';
    el.textContent = c.label;
    el.style.color = '#' + new THREE.Color(c.color).getHexString();
    const label = new CSS2DObject(el);
    const a = c.labelAt ?? [c.anchor[0], c.anchor[1] + (c.radius ?? 20) * 0.62, c.anchor[2]];
    label.position.fromArray(a);
    group.add(label);

    root.add(group);
    parts.set(key, {
      group, label,
      focusTarget: new THREE.Vector3().fromArray(c.anchor),
      focusRadius: c.radius ?? 40,
    });
  }

  return { root, parts };
}

/** Toggle membrane visibility without hiding the compartment labels. */
export function setMembranesVisible(parts, visible) {
  for (const { group, label } of parts.values()) {
    group.traverse((o) => {
      if (o !== label && (o.isMesh || o.isLineSegments)) o.visible = visible;
    });
  }
}

/** Dim every compartment except `key` (pass null to clear). */
export function emphasiseCompartment(parts, key) {
  for (const [k, { group }] of parts.entries()) {
    const strong = key === null || k === key || k === 'membrane' || k === 'cytosol';
    group.traverse((o) => {
      if (o.material && (o.isMesh || o.isLineSegments)) {
        if (o.userData.baseOpacity === undefined) o.userData.baseOpacity = o.material.opacity;
        o.material.opacity = o.userData.baseOpacity * (strong ? 1 : 0.28);
      }
    });
  }
}
