/**
 * scene/flow.js — animated signal flow.
 *
 * One instanced sphere per edge, riding its curve. Cheap enough to run on every
 * visible edge at once, and it makes direction legible without needing to read
 * a single arrowhead. Inhibitory edges pulse back and forth instead of
 * travelling, so a brake never looks like a signal.
 */

import * as THREE from 'three';
import { SETTINGS } from '../config.js';

const HIDDEN = new THREE.Matrix4().makeScale(0, 0, 0);

export function buildFlow(scene, graph) {
  const count = graph.edges.length;
  const mesh = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.62, 10, 8),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.95, depthWrite: false }),
    Math.max(count, 1)
  );
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;
  mesh.raycast = () => {};
  scene.add(mesh);

  const color = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const e = graph.edges[i];
    color.copy(e.baseColor).lerp(new THREE.Color(0xffffff), 0.35);
    mesh.setColorAt(i, color);
  }
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

  // Stagger so particles do not march in lockstep.
  const offsets = new Float32Array(count);
  for (let i = 0; i < count; i++) offsets[i] = Math.random();

  const m = new THREE.Matrix4();
  const p = new THREE.Vector3();

  return {
    mesh,
    update(t, enabled) {
      if (!enabled) { mesh.visible = false; return; }
      mesh.visible = true;

      for (let i = 0; i < count; i++) {
        const e = graph.edges[i];
        if (!e.visible || e.tube.material.opacity < 0.12) { mesh.setMatrixAt(i, HIDDEN); continue; }

        const inhibitory = e.data.kind === 'inhibit' || e.data.kind === 'degrade';
        let u;
        if (inhibitory) {
          // a short stalled shuttle near the target end — reads as a brake
          u = 0.72 + 0.12 * Math.sin((t * 2.2 + offsets[i] * 6.283));
        } else {
          u = (t * SETTINGS.flowSpeed * (e.isLoop ? 1.35 : 1.0) + offsets[i]) % 1;
        }

        e.curve.getPoint(u, p);
        const s = (e.isLoop ? 1.25 : 1.0) * (0.75 + 0.35 * Math.sin(u * Math.PI));
        m.makeScale(s, s, s);
        m.setPosition(p);
        mesh.setMatrixAt(i, m);
      }
      mesh.instanceMatrix.needsUpdate = true;
    },
  };
}
