/**
 * ui.js — rail, inspector, search, tour HUD.
 *
 * No three.js in here; everything reaches main.js through a callbacks object,
 * same separation as the sibling atlas.
 */

import { COMPARTMENTS, TIERS, EVIDENCE, STATES, LINK_KINDS, DOMAINS } from './config.js';
import { NODES, NODE_BY_ID, EDGES, REFS, STATS } from './data/index.js';
import { TOURS } from './data/tours.js';
import { CROSSLINKS, CROSSLINK_KINDS, SIBLING, siblingUrl } from './data/crosslinks.js';

const hex = (n) => '#' + n.toString(16).padStart(6, '0');
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const edgesOf = (id) => ({
  out: EDGES.filter((e) => e.from === id),
  in:  EDGES.filter((e) => e.to === id),
});

// ── Rail ──────────────────────────────────────────────────────────────────
export function buildRail(cb) {
  const stateList = document.getElementById('state-list');
  for (const [key, s] of Object.entries(STATES)) {
    const chip = document.createElement('div');
    chip.className = 'chip state-chip' + (key === 'wt' ? ' on' : '');
    chip.dataset.state = key;
    chip.textContent = s.short;
    chip.addEventListener('click', () => cb.onState(key));
    stateList.appendChild(chip);
  }

  const domainList = document.getElementById('domain-list');
  for (const [key, d] of Object.entries(DOMAINS)) {
    const n = NODES.filter((x) => x.domain === key).length;
    const row = document.createElement('button');
    row.className = 'domain';
    row.dataset.domain = key;
    row.style.setProperty('--dom', hex(d.color));
    row.innerHTML = `<span class="bar"></span><span class="txt">` +
      `<b>${esc(d.label)}</b><span>${esc(d.field)}${d.canonical ? '' : ' &middot; added here'}</span>` +
      `</span><span class="count">${n}</span>`;
    row.addEventListener('click', () => cb.onDomain(key));
    domainList.appendChild(row);
  }
  document.getElementById('btn-clear-domain').addEventListener('click', () => cb.onDomain(null));

  const tourList = document.getElementById('tour-list');
  for (const t of TOURS) {
    const b = document.createElement('button');
    b.className = 'tour';
    b.dataset.tour = t.id;
    b.innerHTML = `<b>${esc(t.title)}</b><span>${esc(t.blurb)}</span>`;
    b.addEventListener('click', () => cb.onTour(t.id));
    tourList.appendChild(b);
  }
  document.getElementById('btn-exit-tour').addEventListener('click', () => cb.onExitTour());

  const tierList = document.getElementById('tier-list');
  for (const [key, t] of Object.entries(TIERS)) {
    const n = NODES.filter((x) => x.tier === key).length;
    const row = document.createElement('label');
    row.className = 'tier';
    row.dataset.tier = key;
    row.innerHTML = `<input type="checkbox" checked>` +
      `<span class="swatch" style="background:${hex(t.color)}"></span>` +
      `<span>${esc(t.label)}</span><span class="count">${n}</span>`;
    row.querySelector('input').addEventListener('change', (ev) => {
      row.classList.toggle('off', !ev.target.checked);
      cb.onTierToggle(key, ev.target.checked);
    });
    tierList.appendChild(row);
  }

  const compList = document.getElementById('compartment-list');
  for (const [key, c] of Object.entries(COMPARTMENTS)) {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.dataset.compartment = key;
    chip.innerHTML = `<span class="dot" style="background:${hex(c.color)}"></span><span>${esc(c.label)}</span>`;
    chip.addEventListener('click', () => cb.onCompartment(key));
    compList.appendChild(chip);
  }
  document.getElementById('btn-overview').addEventListener('click', () => cb.onCompartment(null));

  const opt = (id, fn) => document.getElementById(id).addEventListener('change', fn);
  opt('opt-structural', (e) => cb.onOption('structural', e.target.checked));
  opt('opt-membranes', (e) => cb.onOption('membranes', e.target.checked));
  opt('opt-spin', (e) => cb.onOption('spin', e.target.checked));
  opt('opt-labels', (e) => cb.onOption('labels', e.target.value));
  opt('opt-evidence', (e) => cb.onOption('evidence', e.target.value));
}

export function markState(key) {
  for (const c of document.querySelectorAll('.state-chip')) c.classList.toggle('on', c.dataset.state === key);
  const note = document.getElementById('state-note');
  note.innerHTML = `<p style="margin:0">${esc(STATES[key].blurb)}</p>`;
}

export function markDomain(key) {
  for (const b of document.querySelectorAll('#domain-list .domain'))
    b.classList.toggle('on', b.dataset.domain === key);
  document.getElementById('btn-clear-domain').classList.toggle('hidden', !key);
}

export function markCompartment(key) {
  for (const c of document.querySelectorAll('#compartment-list .chip'))
    c.classList.toggle('active', c.dataset.compartment === key);
}

export function markTour(id) {
  for (const b of document.querySelectorAll('#tour-list .tour')) b.classList.toggle('active', b.dataset.tour === id);
  document.getElementById('btn-exit-tour').classList.toggle('hidden', !id);
}

// ── Inspector ─────────────────────────────────────────────────────────────
export function renderInspector(id, cb) {
  const n = NODE_BY_ID.get(id);
  if (!n) return;
  const box = document.getElementById('inspector');
  const body = document.getElementById('insp-body');
  const tier = TIERS[n.tier];
  const comp = COMPARTMENTS[n.compartment];
  const p = [];

  p.push(`<span class="tier-pill" style="background:${hex(tier?.color ?? 0xffb454)}22;color:${hex(tier?.color ?? 0xffb454)}">` +
         `${esc(tier?.label ?? 'The protein')}</span>`);
  const dom = DOMAINS[n.domain];
  if (dom) {
    p.push(`<span class="tier-pill" style="background:${hex(dom.color)}22;color:${hex(dom.color)};margin-left:5px">` +
           `${esc(dom.label)}</span>`);
  }
  p.push(`<h2>${esc(n.label)}</h2>`);
  p.push(`<p class="insp-sub">${esc(comp?.label ?? '')}` +
         (n.category ? ` &middot; ${esc(n.category)}` : '') +
         (n.criticality ? ` &middot; <b>${esc(n.criticality)}</b>` : '') + `</p>`);

  if (n.relevance) p.push(`<p>${esc(n.relevance)}</p>`);

  // WT vs A565T — the headline number, stated with its own caveat.
  if (n.tier !== 'hub') {
    const kind = n.lossKind;
    const cls = kind === 'protective' ? 'loss protective' : kind === 'risk' ? 'loss risk' : 'loss';
    const pct = n.loss !== undefined ? Math.round(n.loss * 100) : null;
    p.push(`<div class="${cls}"><h4>Wild type → p.A565T heterozygous</h4>`);
    if (pct !== null) {
      p.push(`<div class="loss-bar"><div class="loss-fill" style="width:${pct}%"></div></div>`);
      p.push(`<div class="loss-txt"><b>${pct}%</b> of function lost — ${esc(n.lossLabel)}</div>`);
      if (pct > 50) {
        p.push(`<div class="loss-txt" style="color:var(--ink-dim);font-size:10.5px;margin-top:5px">` +
               `Above 50% because SAMHD1 acts as a tetramer: a heterozygote assembles mixed ` +
               `tetramers, so an activity needing all four subunits falls further than gene ` +
               `dosage alone predicts.</div>`);
      }
    } else if (kind === 'protective') {
      p.push(`<div class="loss-txt">Reduced SAMHD1 is <b>protective</b> here — the one node ` +
             `in the atlas where losing function helps.</div>`);
    } else {
      p.push(`<div class="loss-txt">${esc(n.lossLabel)} — a long-term probabilistic risk, ` +
             `not a measurable per-cell deficit. Not on the same scale as the percentages elsewhere.</div>`);
    }
    p.push(`</div>`);
  }

  if (n.rationale) p.push(`<h3>Why this severity</h3><p>${esc(n.rationale)}</p>`);

  if (n.locEvidence) {
    const ev = EVIDENCE[n.locEvidence];
    p.push(`<h3>Location</h3><p><span class="ev ev-${n.locEvidence}">${n.locEvidence}</span> ` +
           `Placed in the ${esc(comp?.label?.toLowerCase())} — ${esc(ev.label)}.` +
           (n.locEvidence === 'I'
             ? ' The activity is reported; the compartment is this atlas’s reasoning, not a measurement.'
             : '') + `</p>`);
  }

  const { out, in: incoming } = edgesOf(id);
  const linkRow = (e, dir) => {
    const other = dir === 'out' ? e.to : e.from;
    const k = LINK_KINDS[e.kind];
    const glyph = k.sign < 0 ? '⊣' : '→';
    return `<button class="edge-row" data-node="${esc(other)}">` +
      `<span class="er-kind" style="color:${hex(k.color)}">${dir === 'out' ? glyph : '←'}</span>` +
      `<span class="er-txt"><b>${esc(NODE_BY_ID.get(other)?.label ?? other)}</b>` +
      `<span>${esc(k.label)}${e.generated ? ' · structural' : ''}` +
      (e.evidence ? ` · ${e.evidence}` : '') + `</span></span></button>`;
  };
  if (out.length) p.push(`<h3>Leads to (${out.length})</h3><div class="edge-list">${out.map((e) => linkRow(e, 'out')).join('')}</div>`);
  if (incoming.length) p.push(`<h3>Comes from (${incoming.length})</h3><div class="edge-list">${incoming.map((e) => linkRow(e, 'in')).join('')}</div>`);

  const detailed = out.filter((e) => e.detail);
  if (detailed.length) {
    p.push(`<h3>Mechanism notes</h3>`);
    for (const e of detailed) {
      p.push(`<p class="mech"><b>→ ${esc(NODE_BY_ID.get(e.to)?.label ?? e.to)}</b> ` +
             `<span class="ev ev-${e.evidence}">${e.evidence}</span><br>${esc(e.detail)}</p>`);
    }
  }

  // Cross-atlas links. Placed above the citations because they are a stronger
  // pointer than a reference list: the sibling atlas holds the mechanism this
  // node feeds, already drawn.
  const xs = CROSSLINKS[id];
  if (xs?.length) {
    p.push(`<h3>Also in the ${esc(SIBLING.name)}</h3>`);
    p.push(`<div class="xlink-list">`);
    for (const x of xs) {
      const k = CROSSLINK_KINDS[x.kind];
      p.push(`<a class="xlink" href="${esc(siblingUrl(x.to))}" target="_blank" rel="noopener">` +
        `<span class="xl-glyph">${esc(k.glyph)}</span>` +
        `<span class="xl-txt"><b>${esc(x.to)}</b><span>${esc(k.label)}</span>` +
        (x.note ? `<span class="xl-note">${esc(x.note)}</span>` : '') +
        `</span></a>`);
    }
    p.push(`</div>`);
  }

  if (n.refs?.length) {
    p.push(`<h3>Sources (${n.refs.length})</h3><ol class="refs">`);
    for (const rid of n.refs) {
      const r = REFS[rid];
      if (!r) continue;
      const flag = r.flag
        ? `<span class="cite-flag" title="${esc(flagHelp(r.flag))}">${esc(r.flag)}</span>` : '';
      const dup = r.duplicateOf ? `<span class="cite-flag">same as ${esc(r.duplicateOf)}</span>` : '';
      p.push(`<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.short)}</a>${flag}${dup}` +
             (r.finding ? `<br><span class="ref-find">${esc(r.finding)}</span>` : '') + `</li>`);
    }
    p.push(`</ol>`);
  }

  body.innerHTML = p.join('');
  box.classList.remove('hidden');
  for (const b of body.querySelectorAll('.edge-row')) {
    b.addEventListener('click', () => cb.onSelect(b.dataset.node));
  }
}

function flagHelp(flag) {
  return {
    vendor: 'A commercial product page, not a primary research source.',
    aggregator: 'A third-party aggregator rather than the publisher of record.',
    unresolved: 'Cited to a publisher name rather than an author — the reference was never resolved to a specific paper.',
    preprint: 'Unrefereed preprint.',
    press: 'A press release, not the underlying study.',
    mirror: 'Linked to a repository or PDF mirror rather than the publisher of record.',
  }[flag] ?? flag;
}

export function hideInspector() {
  document.getElementById('inspector').classList.add('hidden');
}

// ── Tour HUD ──────────────────────────────────────────────────────────────
export function showTourStep(tour, index) {
  const hud = document.getElementById('tour-hud');
  const step = tour.steps[index];
  document.getElementById('th-title').textContent = step.title;
  document.getElementById('th-count').textContent = `${index + 1} / ${tour.steps.length}`;
  document.getElementById('th-body').textContent = step.body;
  document.getElementById('th-prev').disabled = index === 0;
  document.getElementById('th-next').textContent = index === tour.steps.length - 1 ? 'finish' : 'next →';
  hud.classList.remove('hidden');
}

export function hideTourHud() {
  document.getElementById('tour-hud').classList.add('hidden');
}

// ── Search ────────────────────────────────────────────────────────────────
export function buildSearch(cb) {
  const input = document.getElementById('search');
  const results = document.getElementById('search-results');
  let items = [], active = -1;

  const render = () => {
    results.innerHTML = items.map((n, i) =>
      `<div class="sr${i === active ? ' on' : ''}" data-id="${esc(n.id)}">` +
      `<b>${esc(n.label)}</b><span>${esc(TIERS[n.tier]?.label ?? 'The protein')} · ` +
      `${esc(COMPARTMENTS[n.compartment]?.label ?? '')}</span></div>`).join('');
    results.classList.toggle('on', items.length > 0);
    for (const el of results.querySelectorAll('.sr')) {
      el.addEventListener('mousedown', (ev) => { ev.preventDefault(); pick(el.dataset.id); });
    }
  };
  const pick = (id) => {
    input.value = ''; items = []; active = -1; render(); input.blur(); cb.onSelect(id);
  };

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { items = []; active = -1; return render(); }
    items = NODES
      .map((n) => {
        const hay = `${n.label} ${n.category ?? ''} ${n.relevance ?? ''}`.toLowerCase();
        const i = hay.indexOf(q);
        return i < 0 ? null : { n, score: i + (n.label.toLowerCase().startsWith(q) ? -100 : 0) };
      })
      .filter(Boolean).sort((a, b) => a.score - b.score).slice(0, 10).map((x) => x.n);
    active = items.length ? 0 : -1;
    render();
  });
  input.addEventListener('keydown', (ev) => {
    if (!items.length) return;
    if (ev.key === 'ArrowDown') { active = (active + 1) % items.length; render(); ev.preventDefault(); }
    else if (ev.key === 'ArrowUp') { active = (active - 1 + items.length) % items.length; render(); ev.preventDefault(); }
    else if (ev.key === 'Enter' && active >= 0) { pick(items[active].id); ev.preventDefault(); }
    else if (ev.key === 'Escape') { items = []; render(); input.blur(); }
  });
  input.addEventListener('blur', () => setTimeout(() => { items = []; render(); }, 120));
}

// ── Legend ────────────────────────────────────────────────────────────────
export function buildLegend() {
  const host = document.getElementById('legend-body');
  const p = [];

  p.push('<h5>Tiers — how far a claim sits from the protein</h5><div class="lg-grid">');
  for (const t of Object.values(TIERS)) {
    p.push(`<div class="lg-row"><span class="lg-dot" style="background:${hex(t.color)}"></span>` +
           `<span><b>${esc(t.label)}</b><br><span class="ref-find">${esc(t.blurb)}</span></span></div>`);
  }
  p.push('</div>');

  p.push('<h5>Domains — the canonical groupings</h5><div class="lg-grid">');
  for (const d of Object.values(DOMAINS)) {
    p.push(`<div class="lg-row"><span class="lg-dot" style="background:${hex(d.color)}"></span>` +
           `<span><b>${esc(d.label)}</b> — ${esc(d.field)}${d.canonical ? '' : ' <i>(added here)</i>'}` +
           `<br><span class="ref-find">${esc(d.blurb)}</span></span></div>`);
  }
  p.push('</div>');
  p.push('<p class="lg-note">Four of these are the roles most review figures group SAMHD1 by. ' +
         '<b>Mitochondrial integrity is not one of them</b> — that framing predates the ' +
         'literature — but it is load-bearing for this variant, so it is shown and marked.</p>');

  p.push('<h5>Ring colour — confidence in the LOCATION</h5><div class="lg-grid">');
  for (const [k, ev] of Object.entries(EVIDENCE)) {
    p.push(`<div class="lg-row"><span class="lg-ring" style="border-color:${hex(ev.color)}"></span>` +
           `<span><b>${k}</b> — ${esc(ev.label)}</span></div>`);
  }
  p.push('</div>');
  p.push('<p class="lg-note">The ring grades <b>where</b>, not <b>whether</b>. Neither source ' +
         'workbook has a location column at all, so every placement in this atlas is assigned ' +
         'rather than quoted, and the ring says how confident that assignment is.</p>');

  p.push('<h5>Size and colour</h5>');
  p.push('<p class="lg-note">Node size follows the <b>criticality</b> stated in the source ' +
         'workbooks, so the load-bearing claims are large before you read a single label. ' +
         'In the A565T state a node <b>drains toward slate</b> and gains a cool halo in ' +
         'proportion to the functional loss estimated for it; the one green halo is the ' +
         'node where losing SAMHD1 helps.</p>');

  p.push('<p class="lg-note">Faint thin arrows are <b>structural</b> — every PTM controls the ' +
         'protein, the protein performs every function. They are generated, carry no claim, ' +
         'and can be switched off. Solid arrows are authored reasoning and each carries a grade.</p>');

  p.push(`<p class="lg-note">${STATS.nodes} nodes · ${STATS.authored} authored links · ` +
         `${STATS.generated} structural · ${Object.keys(REFS).length} sources, 10 flagged.</p>`);

  host.innerHTML = p.join('');
}
