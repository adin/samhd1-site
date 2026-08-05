/**
 * ui.js — the 2D chrome: rail, inspector, search, tour HUD.
 *
 * Everything here talks to main.js through a callbacks object. No Three.js
 * imports live in this file, so the UI can be reworked without touching the
 * scene, and vice versa.
 */

import { COMPARTMENTS, PATHWAYS, CLASSES, EDGE_KINDS, EVIDENCE, STREAMS } from './config.js';
import { NODES, NODE_BY_ID, EDGES_BY_NODE, PATHWAY_COUNTS } from './data/index.js';
import { REFS } from './data/refs.js';
import { TOURS, PATH_PRESETS } from './data/tours.js';
import { signLabel, stepSentence } from './paths.js';

const hex = (n) => '#' + n.toString(16).padStart(6, '0');
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ── Left rail ─────────────────────────────────────────────────────────────
export function buildRail(cb) {
  // Compartments
  const list = document.getElementById('compartment-list');
  for (const [key, c] of Object.entries(COMPARTMENTS)) {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.dataset.compartment = key;
    chip.innerHTML = `<span class="dot" style="background:${hex(c.color)}"></span><span>${esc(c.label)}</span>`;
    chip.addEventListener('click', () => cb.onCompartment(key));
    list.appendChild(chip);
  }
  document.getElementById('btn-overview').addEventListener('click', () => cb.onCompartment(null));

  // Layers
  const layerList = document.getElementById('layer-list');
  const ordered = Object.entries(PATHWAYS).sort((a, b) => a[1].order - b[1].order);
  for (const [key, p] of ordered) {
    const row = document.createElement('label');
    row.className = 'layer' + (p.on ? '' : ' off');
    row.dataset.layer = key;
    row.innerHTML =
      `<input type="checkbox" ${p.on ? 'checked' : ''}>` +
      `<span class="swatch" style="background:${hex(p.color)}"></span>` +
      `<span>${esc(p.label)}</span>` +
      `<span class="count">${PATHWAY_COUNTS[key] ?? 0}</span>`;
    row.querySelector('input').addEventListener('change', (ev) => {
      row.classList.toggle('off', !ev.target.checked);
      cb.onLayerToggle(key, ev.target.checked);
    });
    layerList.appendChild(row);
  }
  document.getElementById('layers-all').addEventListener('click', () => cb.onLayersSet(true));
  document.getElementById('layers-none').addEventListener('click', () => cb.onLayersSet(false));

  // Streams — the coloured pathways of "The Mitochondrion Under Siege"
  const streamList = document.getElementById('stream-list');
  for (const [key, st] of Object.entries(STREAMS)) {
    const row = document.createElement('button');
    row.className = 'stream';
    row.dataset.stream = key;
    row.style.setProperty('--stream', hex(st.color));
    row.innerHTML =
      `<span class="bar"></span>` +
      `<span class="txt"><b>${esc(st.label)}</b>` +
      `<span>${esc(st.vectors)}</span></span>` +
      `<span class="ev ev-${st.evidence}">${st.evidence}</span>`;
    row.addEventListener('click', () => cb.onStream(key));
    streamList.appendChild(row);
  }
  document.getElementById('btn-clear-stream').addEventListener('click', () => cb.onStream(null));
  document.getElementById('btn-consequences').addEventListener('click', () => cb.onConsequences());

  // Cascade path presets
  const pathList = document.getElementById('path-list');
  for (const preset of PATH_PRESETS) {
    const btn = document.createElement('button');
    btn.className = 'tour path-preset';
    btn.dataset.preset = preset.id;
    btn.innerHTML = `<b>${esc(preset.title)}</b><span>${esc(preset.blurb)}</span>`;
    btn.addEventListener('click', () => cb.onPathPreset(preset.id));
    pathList.appendChild(btn);
  }
  document.getElementById('btn-clear-path').addEventListener('click', () => cb.onExitPath());

  // Tours
  const tourList = document.getElementById('tour-list');
  for (const t of TOURS) {
    const btn = document.createElement('button');
    btn.className = 'tour';
    btn.innerHTML = `<b>${esc(t.title)}</b><span>${esc(t.blurb)}</span>`;
    btn.addEventListener('click', () => cb.onTour(t.id));
    tourList.appendChild(btn);
  }

  // Options
  const opt = (id, ev, fn) => document.getElementById(id).addEventListener(ev, fn);
  opt('opt-flow', 'change', (e) => cb.onOption('flow', e.target.checked));
  opt('opt-detail', 'change', (e) => cb.onOption('detail', e.target.checked));
  opt('opt-membranes', 'change', (e) => cb.onOption('membranes', e.target.checked));
  opt('opt-spin', 'change', (e) => cb.onOption('spin', e.target.checked));
  opt('opt-labels', 'change', (e) => cb.onOption('labels', e.target.value));
  opt('opt-evidence', 'change', (e) => cb.onOption('evidence', e.target.value));
}

// ── Share / permalinks ────────────────────────────────────────────────────
// The rail panel that turns the current view into something you can send.
let shareCb = null;

export function buildShare(cb) {
  shareCb = cb;
  document.getElementById('btn-copy-link').addEventListener('click', () => copyLink());
  document.getElementById('opt-cam').addEventListener('change', (e) => cb.onPinCamera(e.target.checked));
  // Reading the URL is part of trusting it, so the box is selectable — but it
  // must not fight the live rewrite while the reader has it selected.
  document.getElementById('share-url').addEventListener('focus', (e) => e.target.select());
}

/** Say in words what the current link opens, so you can check before sending. */
export function setShareNote(text, link) {
  const note = document.getElementById('share-note');
  if (note) note.textContent = text;
  const box = document.getElementById('share-url');
  if (box && document.activeElement !== box) box.value = link;
}

/**
 * Copy the current view's URL.
 *
 * The async Clipboard API is the right call, but it is refused in two places
 * this atlas genuinely runs: inside the docs-site iframe, and on any non-secure
 * origin. So there is a synchronous fallback, and if both fail the URL is left
 * selected — being told "press ⌘C" beats being told nothing happened.
 */
export async function copyLink() {
  const link = shareCb?.getLink?.() ?? location.href;
  const box = document.getElementById('share-url');
  if (box) box.value = link;

  let ok = false;
  try {
    await navigator.clipboard.writeText(link);
    ok = true;
  } catch {
    try { box?.select(); ok = document.execCommand('copy'); } catch { ok = false; }
  }

  if (ok) toast('Link copied — it opens on exactly this view');
  else { box?.select(); toast('Press ⌘C / Ctrl-C to copy the selected link'); }
}

let toastEl = null;
let toastTimer = 0;

export function toast(msg) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('on'), 2600);
}

export function setLayerChecks(on) {
  document.querySelectorAll('#layer-list .layer').forEach((row) => {
    row.querySelector('input').checked = on;
    row.classList.toggle('off', !on);
  });
}

export function markCompartment(key) {
  document.querySelectorAll('#compartment-list .chip').forEach((c) => {
    c.classList.toggle('active', c.dataset.compartment === key);
  });
}

// ── Inspector ─────────────────────────────────────────────────────────────
function refItem(key) {
  const r = REFS[key];
  if (!r) return `<li>${esc(key)} <em>(missing from refs.js)</em></li>`;
  const link = r.doi
    ? ` <a href="https://doi.org/${esc(r.doi)}" target="_blank" rel="noopener">doi</a>`
    : r.pmid ? ` <a href="https://pubmed.ncbi.nlm.nih.gov/${esc(r.pmid)}/" target="_blank" rel="noopener">PubMed</a>` : '';
  const tag = r.doc ? '<b style="color:#ffb454">▸ project document — </b>' : '';
  return `<li>${tag}${esc(r.text)}${link}</li>`;
}

function edgeRow(e, selfId) {
  const outgoing = e.from === selfId;
  const other = NODE_BY_ID.get(outgoing ? e.to : e.from);
  const kind = EDGE_KINDS[e.kind];
  const glyph = kind.head === 'bar' ? '⊣' : '→';
  const arrow = outgoing ? glyph : (kind.head === 'bar' ? '⊢' : '←');
  return `<li data-goto="${esc(other.id)}">
    <span class="arrow" style="color:${hex(kind.color)}">${arrow}</span>
    <span><span class="en">${esc(other.label)}</span>
    ${e.label ? `<br><span class="el">${esc(e.label)}</span>` : `<br><span class="el">${esc(kind.label)}</span>`}</span>
  </li>`;
}

export function renderInspector(id, cb) {
  const panel = document.getElementById('inspector');
  const body = document.getElementById('insp-body');
  const n = NODE_BY_ID.get(id);
  if (!n) { panel.classList.add('hidden'); return; }

  const cls = CLASSES[n.klass];
  const comp = COMPARTMENTS[n.compartment];
  const ev = EVIDENCE[n.evidence];
  const links = EDGES_BY_NODE.get(id) ?? { in: [], out: [] };

  const parts = [];
  parts.push(`<div class="insp-kicker" style="color:${hex(comp.color)}">${esc(comp.label)}</div>`);
  parts.push(`<h2 class="insp-title" style="color:${hex(cls.color)}">${esc(n.label)}</h2>`);
  if (n.full) parts.push(`<p class="insp-full">${esc(n.full)}</p>`);

  parts.push('<div class="insp-tags">');
  parts.push(`<span class="tag">${esc(cls.label)}</span>`);
  parts.push(`<span class="tag ev-${n.evidence}">${n.evidence} — ${esc(ev.label)}</span>`);
  for (const p of n.pathways ?? []) {
    parts.push(`<span class="tag" style="border-color:${hex(PATHWAYS[p].color)}66">${esc(PATHWAYS[p].label)}</span>`);
  }
  if (n.lod === 2) parts.push('<span class="tag">sub-detail</span>');
  parts.push('</div>');

  if (n.summary) parts.push(`<p>${esc(n.summary)}</p>`);
  if (n.detail) {
    parts.push('<h4>Mechanism</h4>');
    for (const para of n.detail.split('\n')) {
      if (para.trim()) parts.push(`<p class="dim">${esc(para.trim())}</p>`);
    }
  }
  if (n.samhd1) {
    parts.push('<h4>In SAMHD1 A565T haploinsufficiency</h4>');
    parts.push(`<div class="samhd1-box">${esc(n.samhd1)}</div>`);
  }
  if (n.caseNote) {
    // Private build only — data/case-notes.js is stubbed out in public exports.
    parts.push('<h4 class="private-head">Case note — private, not for publication</h4>');
    parts.push('<div class="case-box">' +
      n.caseNote.split('\n\n').map((para) => `<p>${esc(para.trim())}</p>`).join('') + '</div>');
  }

  if (id !== 'a565t') {
    parts.push(`<button class="trace-btn" data-trace="${esc(id)}">
      ⇢ Trace every route from p.A565T to ${esc(n.label)}</button>`);
  }

  const drugEdges = links.in.filter((e) => NODE_BY_ID.get(e.from)?.klass === 'drug');
  if (drugEdges.length || (n.drugs ?? []).length) {
    parts.push('<h4>Pharmacology at this node</h4><div>');
    const seen = new Set();
    for (const e of drugEdges) {
      if (seen.has(e.from)) continue; seen.add(e.from);
      const d = NODE_BY_ID.get(e.from);
      parts.push(`<span class="drug-pill" data-goto="${esc(d.id)}">${esc(d.label)}${e.label ? ' — ' + esc(e.label) : ''}</span>`);
    }
    for (const d of n.drugs ?? []) {
      if (seen.has(d)) continue; seen.add(d);
      const dn = NODE_BY_ID.get(d);
      if (dn) parts.push(`<span class="drug-pill" data-goto="${esc(d)}">${esc(dn.label)}</span>`);
    }
    parts.push('</div>');
  }

  if (links.out.length) {
    parts.push(`<h4>Acts on (${links.out.length})</h4><ul class="edge-list">`);
    parts.push(links.out.map((e) => edgeRow(e, id)).join(''));
    parts.push('</ul>');
  }
  if (links.in.length) {
    parts.push(`<h4>Acted on by (${links.in.length})</h4><ul class="edge-list">`);
    parts.push(links.in.map((e) => edgeRow(e, id)).join(''));
    parts.push('</ul>');
  }

  const refs = new Set(n.refs ?? []);
  for (const e of [...links.in, ...links.out]) for (const r of e.refs ?? []) refs.add(r);
  if (refs.size) {
    parts.push('<h4>Sources</h4><ul class="ref-list">');
    parts.push([...refs].map(refItem).join(''));
    parts.push('</ul>');
  }

  body.innerHTML = parts.join('');
  panel.classList.remove('hidden');
  panel.scrollTop = 0;

  body.querySelectorAll('[data-goto]').forEach((el) => {
    el.addEventListener('click', () => cb.onNavigate(el.dataset.goto));
  });
  body.querySelectorAll('[data-trace]').forEach((el) => {
    el.addEventListener('click', () => cb.onTrace?.(el.dataset.trace));
  });
}

export function hideInspector() {
  document.getElementById('inspector').classList.add('hidden');
}

// ── Search ────────────────────────────────────────────────────────────────
export function buildSearch(cb) {
  const input = document.getElementById('search');
  const results = document.getElementById('search-results');
  let items = [];
  let sel = -1;

  const clear = () => { results.innerHTML = ''; items = []; sel = -1; };

  const run = () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 1) return clear();

    const scored = [];
    for (const n of NODES) {
      const label = n.label.toLowerCase();
      const full = (n.full ?? '').toLowerCase();
      const summary = (n.summary ?? '').toLowerCase();
      let score = -1;
      if (label === q) score = 0;
      else if (label.startsWith(q)) score = 1;
      else if (label.includes(q)) score = 2;
      else if (full.includes(q)) score = 3;
      else if (summary.includes(q)) score = 4;
      if (score >= 0) scored.push([score, n]);
    }
    scored.sort((a, b) => a[0] - b[0] || a[1].label.length - b[1].label.length);

    items = scored.slice(0, 14).map(([, n]) => n);
    sel = items.length ? 0 : -1;
    results.innerHTML = items.map((n, i) =>
      `<div class="sr ${i === 0 ? 'sel' : ''}" data-id="${esc(n.id)}">
         <b style="color:${hex(CLASSES[n.klass].color)}">${esc(n.label)}</b>
         <i>${esc(COMPARTMENTS[n.compartment].label)}</i>
       </div>`).join('');
    results.querySelectorAll('.sr').forEach((el) => {
      el.addEventListener('click', () => { cb.onPick(el.dataset.id); clear(); input.value = ''; input.blur(); });
    });
  };

  input.addEventListener('input', run);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { clear(); input.value = ''; input.blur(); return; }
    if (!items.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      results.querySelectorAll('.sr').forEach((el, i) => el.classList.toggle('sel', i === sel));
    } else if (e.key === 'Enter' && sel >= 0) {
      cb.onPick(items[sel].id); clear(); input.value = ''; input.blur();
    }
  });
}

// ── Tour HUD ──────────────────────────────────────────────────────────────
let hud = null;

export function showTourStep(tour, index, cb) {
  if (!hud) {
    hud = document.createElement('div');
    hud.id = 'tour-hud';
    document.body.appendChild(hud);
  }
  const step = tour.steps[index];
  hud.innerHTML = `
    <div class="step-kicker">${esc(tour.title)} — step ${index + 1} of ${tour.steps.length}</div>
    <h3>${esc(step.title)}</h3>
    <p>${esc(step.text)}</p>
    <div class="nav">
      <button class="mini-btn" data-act="prev" ${index === 0 ? 'disabled' : ''}>← back</button>
      <button class="mini-btn" data-act="next">${index === tour.steps.length - 1 ? 'finish' : 'next →'}</button>
      <div class="spacer"></div>
      <div class="dots">${tour.steps.map((_, i) => `<i class="${i === index ? 'on' : ''}"></i>`).join('')}</div>
      <button class="mini-btn" data-act="link" title="Copy a link that opens on this step">⧉ link</button>
      <button class="mini-btn" data-act="exit">exit</button>
    </div>`;
  hud.querySelector('[data-act="prev"]').addEventListener('click', cb.onPrev);
  hud.querySelector('[data-act="next"]').addEventListener('click', cb.onNext);
  hud.querySelector('[data-act="link"]').addEventListener('click', () => copyLink());
  hud.querySelector('[data-act="exit"]').addEventListener('click', cb.onExit);
}

export function hideTour() {
  if (hud) { hud.remove(); hud = null; }
}

// ── Stream inspector ──────────────────────────────────────────────────────
export function markStream(key) {
  document.querySelectorAll('#stream-list .stream').forEach((el) => {
    el.classList.toggle('active', el.dataset.stream === key);
  });
  document.getElementById('btn-clear-stream').classList.toggle('hidden', !key);
}

function nodePills(ids, cb) {
  return ids.map((id) => {
    const n = NODE_BY_ID.get(id);
    if (!n) return '';
    return `<span class="node-pill" data-goto="${esc(id)}"
      style="border-color:${hex(CLASSES[n.klass].color)}80">${esc(n.label)}</span>`;
  }).join('');
}

export function renderStreamInspector(key, cb) {
  const st = STREAMS[key];
  const panel = document.getElementById('inspector');
  const body = document.getElementById('insp-body');
  if (!st) { panel.classList.add('hidden'); return; }

  const col = hex(st.color);
  const parts = [];
  parts.push(`<div class="insp-kicker" style="color:${col}">` +
    (st.source ? 'Mitochondrion Under Siege — stream' : 'Atlas extension — not in the source figure') + '</div>');
  parts.push(`<h2 class="insp-title" style="color:${col}">${esc(st.label)}</h2>`);
  parts.push(`<p class="insp-full">${esc(st.vectors)}</p>`);

  parts.push('<div class="insp-tags">');
  parts.push(`<span class="tag ev-${st.evidence}">${st.evidence} — ${esc(EVIDENCE[st.evidence].label)}</span>`);
  parts.push(`<span class="tag">${st.chain.length} nodes in chain</span>`);
  if (!st.source) parts.push('<span class="tag" style="border-color:#66e07a80">extension</span>');
  parts.push('</div>');

  parts.push(`<p>${esc(st.summary)}</p>`);

  parts.push('<h4>How the stream works</h4>');
  for (const para of st.mechanism ?? []) parts.push(`<p class="dim">${esc(para)}</p>`);

  parts.push(`<h4 style="color:${col}">Inputs — what feeds it</h4>`);
  parts.push(`<div class="pill-row">${nodePills(st.inputs ?? [], cb)}</div>`);

  parts.push(`<h4 style="color:${col}">Outputs — what it hands on</h4>`);
  parts.push(`<div class="pill-row">${nodePills(st.outputs ?? [], cb)}</div>`);

  parts.push('<h4>Full chain</h4>');
  parts.push('<ol class="chain-list">');
  for (const id of st.chain) {
    const n = NODE_BY_ID.get(id);
    if (!n) continue;
    const isIn = (st.inputs ?? []).includes(id);
    const isOut = (st.outputs ?? []).includes(id);
    const badge = isIn ? '<i class="cb in">in</i>' : isOut ? '<i class="cb out">out</i>' : '';
    parts.push(`<li data-goto="${esc(id)}"><span class="en">${esc(n.label)}</span>${badge}
      <br><span class="el">${esc(COMPARTMENTS[n.compartment].label)} · ${esc(n.summary ?? '')}</span></li>`);
  }
  parts.push('</ol>');

  if (st.refs?.length) {
    parts.push('<h4>Sources</h4><ul class="ref-list">');
    parts.push(st.refs.map(refItem).join(''));
    parts.push('</ul>');
  }

  body.innerHTML = parts.join('');
  panel.classList.remove('hidden');
  panel.scrollTop = 0;
  body.querySelectorAll('[data-goto]').forEach((el) => {
    el.addEventListener('click', () => cb.onNavigate(el.dataset.goto));
  });
}

// ── "All immune consequences of A565T" ────────────────────────────────────
/**
 * `reached` is the BFS result from graph.downstreamOf('a565t').
 * Rendered as a depth-ordered account rather than a flat list, because the
 * distance from the variant is the point: hop 1 is biochemistry, hop 12 is
 * a clinical diagnosis.
 */
export function renderConsequences(reached, cb) {
  const panel = document.getElementById('inspector');
  const body = document.getElementById('insp-body');
  const { order, depth } = reached;

  const byKlass = new Map();
  for (const id of order) {
    const n = NODE_BY_ID.get(id);
    if (!n || n.id === 'a565t' || n.klass === 'drug') continue;
    if (!byKlass.has(n.klass)) byKlass.set(n.klass, []);
    byKlass.get(n.klass).push(n);
  }

  const total = order.length - 1;
  const outcomes = (byKlass.get('outcome') ?? []);
  const cytokines = (byKlass.get('cytokine') ?? []);

  const parts = [];
  parts.push('<div class="insp-kicker" style="color:#ffb454">Downstream closure</div>');
  parts.push('<h2 class="insp-title">All consequences of p.A565T</h2>');
  parts.push('<p class="insp-full">Every node reachable from the variant by following directed edges.</p>');

  parts.push('<div class="insp-tags">');
  parts.push(`<span class="tag">${total} nodes reached</span>`);
  parts.push(`<span class="tag">max ${Math.max(...depth.values())} hops</span>`);
  parts.push('</div>');

  parts.push('<p>One heterozygous substitution, and this is the closure of its downstream set. ' +
    'The breadth is the argument: SAMHD1 is not a pathway member but a brake on four independent systems, ' +
    'so a partial loss propagates into all of them at once.</p>');

  if (outcomes.length) {
    parts.push('<h4 style="color:#e0674f">Clinical endpoints reached</h4>');
    parts.push('<ul class="edge-list">');
    for (const n of outcomes) {
      parts.push(`<li data-goto="${esc(n.id)}"><span class="arrow" style="color:#e0674f">${depth.get(n.id)}·</span>
        <span><span class="en">${esc(n.label)}</span><br><span class="el">${esc(n.summary ?? '')}</span></span></li>`);
    }
    parts.push('</ul>');
  }

  if (cytokines.length) {
    parts.push('<h4 style="color:#4de0c0">Cytokines driven</h4>');
    parts.push(`<div class="pill-row">${nodePills(cytokines.map((n) => n.id), cb)}</div>`);
  }

  parts.push('<h4>By hop distance from the variant</h4>');
  const byDepth = new Map();
  for (const id of order) {
    const d = depth.get(id);
    if (!byDepth.has(d)) byDepth.set(d, []);
    byDepth.get(d).push(id);
  }
  for (const [d, ids] of [...byDepth.entries()].sort((a, b) => a[0] - b[0])) {
    if (d === 0) continue;
    parts.push(`<div class="hop"><span class="hop-n">${d}</span>
      <div class="pill-row">${nodePills(ids, cb)}</div></div>`);
  }

  body.innerHTML = parts.join('');
  panel.classList.remove('hidden');
  panel.scrollTop = 0;
  body.querySelectorAll('[data-goto]').forEach((el) => {
    el.addEventListener('click', () => cb.onNavigate(el.dataset.goto));
  });
}

// ── Cascade path mode ─────────────────────────────────────────────────────
export function markPathActive(active) {
  document.getElementById('btn-clear-path').classList.toggle('hidden', !active);
}

const SIGN_GLYPH = (s) => (s > 0 ? '↑' : s < 0 ? '↓' : '·');

/** The route chooser: every enumerated way from A to B, ranked. */
export function renderRouteList(query, result, activeIdx, cb) {
  const panel = document.getElementById('inspector');
  const body = document.getElementById('insp-body');
  const { routes, total, truncated, searchedTo } = result;

  const from = NODE_BY_ID.get(query.from);
  const targets = (Array.isArray(query.to) ? query.to : [query.to])
    .map((t) => NODE_BY_ID.get(t)?.label ?? t);

  const parts = [];
  parts.push('<div class="insp-kicker" style="color:#ffd75e">Cascade routes</div>');
  parts.push(`<h2 class="insp-title">${esc(query.title ?? `${from?.label} → ${targets.join(', ')}`)}</h2>`);
  parts.push(`<p class="insp-full">${esc(from?.label ?? query.from)} → ${esc(targets.join(' · '))}</p>`);

  if (!routes.length) {
    parts.push(`<p>No directed route found within ${searchedTo} steps. ` +
      'That is a real answer: either the arms are genuinely unconnected in the current graph, ' +
      'or an edge is missing that should be there.</p>');
    body.innerHTML = parts.join('');
    panel.classList.remove('hidden');
    return;
  }

  const up = routes.filter((r) => r.sign > 0).length;
  const down = routes.length - up;

  parts.push('<div class="insp-tags">');
  parts.push(`<span class="tag">${total ?? routes.length} route${(total ?? routes.length) === 1 ? '' : 's'}${truncated ? '+' : ''}</span>`);
  parts.push(`<span class="tag">${routes[0].length}–${routes[routes.length - 1].length} steps</span>`);
  if (up) parts.push(`<span class="tag" style="border-color:#e0674f80">${up} increase</span>`);
  if (down) parts.push(`<span class="tag" style="border-color:#46d18a80">${down} suppress</span>`);
  parts.push('</div>');

  if (total > routes.length) {
    parts.push(`<p class="dim"><b>${routes.length} of ${total}</b> shown, chosen to span distinct ` +
      'mechanisms rather than to be the shortest — the short routes all crowd through the same hubs, ' +
      'and picking by length alone drops the long ones that matter most.' +
      (truncated ? ' The search itself also hit its cap, so more exist beyond these.' : '') + '</p>');
  }

  parts.push('<p class="dim">Pick a route, then step it with <b>←</b> / <b>→</b>. ' +
    'Net effect is the product of the edge polarities: two inhibitions make an increase.</p>');

  parts.push('<ul class="route-list">');
  routes.forEach((r, i) => {
    const dirClass = r.sign > 0 ? 'up' : r.sign < 0 ? 'down' : '';
    const via = r.nodes.slice(1, -1).map((id) => NODE_BY_ID.get(id)?.label ?? id);
    const viaText = via.length <= 4 ? via.join(' → ')
      : `${via.slice(0, 2).join(' → ')} → … → ${via.slice(-1)[0]}`;
    parts.push(`<li class="${i === activeIdx ? 'sel' : ''}" data-route="${i}">
      <div class="route-head">
        <span class="route-sign ${dirClass}">${SIGN_GLYPH(r.sign)}</span>
        <span class="route-n">${r.length} steps</span>
        <span class="ev ev-${r.grade}">${r.grade}</span>
        ${r.loops.length ? `<span class="route-loops">loop ${esc(r.loops.join('/'))}</span>` : ''}
      </div>
      <div class="route-via">${esc(viaText)}</div>
    </li>`);
  });
  parts.push('</ul>');

  parts.push('<h4>How to read the grade</h4>');
  parts.push('<p class="dim">A route carries the <b>weakest</b> evidence grade along it — a chain is only ' +
    'as defensible as its softest link. An all-<b>S</b> route is one you can argue from directly; ' +
    'a route graded <b>I</b> has at least one inferred step in it somewhere.</p>');

  body.innerHTML = parts.join('');
  panel.classList.remove('hidden');
  panel.scrollTop = 0;
  body.querySelectorAll('[data-route]').forEach((el) => {
    el.addEventListener('click', () => cb.onPickRoute(Number(el.dataset.route)));
  });
}

/** The stepper HUD: one reaction at a time. */
let pathHud = null;

export function showPathStep(route, stepIdx, cb) {
  if (!pathHud) {
    pathHud = document.createElement('div');
    pathHud.id = 'tour-hud';
    pathHud.classList.add('path-hud');
    document.body.appendChild(pathHud);
  }
  const e = route.steps[stepIdx];
  const kind = EDGE_KINDS[e.kind];
  const a = NODE_BY_ID.get(e.from), b = NODE_BY_ID.get(e.to);
  const glyph = kind.head === 'bar' ? '⊣' : '→';

  // The running product up to and including this step — so at any point you
  // can see whether the cascade is currently pushing the endpoint up or down.
  let running = 1;
  for (let i = 0; i <= stepIdx; i++) running *= EDGE_KINDS[route.steps[i].kind].sign ?? 1;

  pathHud.innerHTML = `
    <div class="step-kicker">
      Step ${stepIdx + 1} of ${route.steps.length}
      &nbsp;·&nbsp; net so far <b class="${running > 0 ? 'up' : 'down'}">${SIGN_GLYPH(running)} ${esc(signLabel(running))}</b>
      &nbsp;·&nbsp; route grade <span class="ev ev-${route.grade}">${route.grade}</span>
    </div>
    <h3>
      <span class="hop-node" data-goto="${esc(e.from)}">${esc(a?.label ?? e.from)}</span>
      <span class="hop-kind" style="color:${hex(kind.color)}">${glyph}</span>
      <span class="hop-node" data-goto="${esc(e.to)}">${esc(b?.label ?? e.to)}</span>
    </h3>
    <p>${esc(e.label || stepSentence(e))}</p>
    ${e.detail ? `<p class="dim">${esc(e.detail)}</p>` : ''}
    <div class="step-meta">
      <span class="ev ev-${e.evidence}">${e.evidence}</span>
      <span>${esc(EVIDENCE[e.evidence].label)}</span>
      ${e.loop ? `<span class="route-loops">loop ${esc(e.loop)}</span>` : ''}
      ${(e.refs ?? []).length ? `<span class="dim">${(e.refs ?? []).length} source${e.refs.length === 1 ? '' : 's'}</span>` : ''}
    </div>
    <div class="nav">
      <button class="mini-btn" data-act="prev" ${stepIdx === 0 ? 'disabled' : ''}>← back</button>
      <button class="mini-btn" data-act="next" ${stepIdx === route.steps.length - 1 ? 'disabled' : ''}>next →</button>
      <div class="spacer"></div>
      <div class="dots">${route.steps.map((_, i) =>
        `<i class="${i === stepIdx ? 'on' : i < stepIdx ? 'past' : ''}"></i>`).join('')}</div>
      <button class="mini-btn" data-act="routes">all routes</button>
      <button class="mini-btn" data-act="link" title="Copy a link that opens on this route, at this step">⧉ link</button>
      <button class="mini-btn" data-act="exit">exit</button>
    </div>`;

  pathHud.querySelector('[data-act="prev"]').addEventListener('click', () => cb.onStep(-1));
  pathHud.querySelector('[data-act="next"]').addEventListener('click', () => cb.onStep(+1));
  pathHud.querySelector('[data-act="routes"]').addEventListener('click', cb.onShowRoutes);
  pathHud.querySelector('[data-act="link"]').addEventListener('click', () => copyLink());
  pathHud.querySelector('[data-act="exit"]').addEventListener('click', cb.onExit);
  pathHud.querySelectorAll('[data-goto]').forEach((el) => {
    el.addEventListener('click', () => cb.onNavigate(el.dataset.goto));
  });
}

export function hidePathHud() {
  if (pathHud) { pathHud.remove(); pathHud = null; }
}
