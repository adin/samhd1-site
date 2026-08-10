/**
 * data/crosslinks.js — where a claim in this atlas is also in the Innate
 * Immune Atlas (viz/innate-immune-3d).
 *
 * The two visualisations overlap by design. This one asks "what does SAMHD1
 * do"; the other asks "what does the innate immune system do under SAMHD1
 * haploinsufficiency". Several claims appear in both, and a reader who follows
 * the mitochondrial arm here should be able to step sideways into the pathway
 * that arm feeds, rather than losing their place and starting over.
 *
 * ── The relationship is NOT always identity ──────────────────────────────
 * `kind` records what the counterpart actually is, because collapsing three
 * different relationships into one "see also" would misrepresent two of them:
 *
 *   same       the same claim in both atlases (ΔΨm is ΔΨm)
 *   acts-on    this atlas has the FUNCTION, the other has its SUBSTRATE or
 *              target — "R-loop Resolution" here, "R-loops" there
 *   feeds      this function's failure is what supplies the other atlas's
 *              pathway — the strongest links, and the reason the two exist
 *
 * The distinction matters most for `acts-on`. A node named "VDAC1 Interaction"
 * and a node named "VDAC1" are not the same object: one is an activity, one is
 * a channel. Saying "same" would quietly assert that SAMHD1's interaction and
 * the protein it interacts with are one thing.
 *
 * ── Direction of travel ──────────────────────────────────────────────────
 * Every `to` is validated against the sibling atlas at build time by
 * tools/check_crosslinks.mjs, which imports BOTH graphs and fails on a
 * dangling target. Node ids there are stable but not immutable, and a
 * cross-atlas link that silently resolves to nothing is worse than no link —
 * the reader is told a connection exists and finds an empty view.
 */

/** Where the sibling atlas lives, resolved at runtime — see siblingUrl(). */
export const SIBLING = {
  name: 'Innate Immune Atlas',
  // Published location, used whenever this atlas is served as part of the site.
  publishedBase: '/atlas/',
  // Local dev only: the sibling runs on its own no-cache server.
  devBase: 'http://localhost:8123/',
  // THIS atlas's dev port. See siblingUrl() for why the test is on the port
  // rather than on the hostname.
  ownDevPort: '8124',
};

export const CROSSLINKS = {
  // ── The protein itself ──────────────────────────────────────────────────
  samhd1: [
    { to: 'samhd1', kind: 'same',
      note: 'The same protein, seen from the other side: there it is one node in a pathway, here it is the whole subject.' },
    { to: 'a565t', kind: 'feeds',
      note: 'The variant node. Everything the immune atlas traces downstream starts there.' },
  ],

  // ── Mitochondrial arm — the densest overlap, and the reason for both ────
  vdac1: [
    { to: 'vdac1', kind: 'acts-on',
      note: 'The channel this function acts on. Note the immune atlas splits the physical interaction from its functional consequence — a bind edge cannot carry a brake.' },
    { to: 'samhd1-mito', kind: 'same',
      note: 'The mitochondrial SAMHD1 pool that performs this interaction.' },
    { to: 'vdac1-oligo', kind: 'feeds',
      note: 'The macropore. Losing the interaction is what lets VDAC1 oligomerise wide enough to pass DNA.' },
  ],
  'mtdna-leak': [
    { to: 'mtdna-frag', kind: 'feeds',
      note: 'The cytosolic mtDNA fragments this function is supposed to prevent — the BLUE stream’s ligand supply.' },
    { to: 'vdac1-oligo', kind: 'acts-on' },
  ],
  'mtdna-ifn': [
    { to: 'cgas', kind: 'feeds',
      note: 'The sensor that reads escaped mtDNA as infection. This is the exact junction where the two atlases meet.' },
    { to: 'ifnb', kind: 'feeds' },
  ],
  deltapsi: [{ to: 'deltapsi', kind: 'same' }],
  cytc:     [{ to: 'cytc', kind: 'same' }],
  bik: [
    { to: 'bik', kind: 'same',
      note: 'SAMHD1 upregulates BIK, which sequesters BECN1 — the first of the three brakes on mitophagy in the TEAL stream.' },
    { to: 'becn1', kind: 'feeds' },
  ],
  apoptosis: [{ to: 'baxbak', kind: 'acts-on' }],

  // ── Innate immune restraint ─────────────────────────────────────────────
  'cgas-sting': [
    { to: 'cgas', kind: 'acts-on',
      note: 'The sensor held down by denying it ligand rather than by inhibiting it directly.' },
    { to: 'sting', kind: 'acts-on' },
  ],
  'ifn-i':  [{ to: 'ifnb', kind: 'acts-on' }, { to: 'isg-set', kind: 'feeds' }],
  nfkb:     [{ to: 'nfkb', kind: 'acts-on' }],
  tlr4:     [{ to: 'tlr4', kind: 'acts-on' }],
  ip10:     [{ to: 'cxcl9-11', kind: 'acts-on', note: 'IP-10 is CXCL10, modelled there with CXCL9 and CXCL11 as one ISG chemokine set.' }],
  m1m2:     [{ to: 'm1', kind: 'acts-on' }],

  // ── Retroelements and condensates ───────────────────────────────────────
  line1: [
    { to: 'l1-locus', kind: 'acts-on' },
    { to: 'l1-rnp', kind: 'acts-on',
      note: 'The ribonucleoprotein particle held out of circulation in stress granules.' },
    { to: 'l1-insertion', kind: 'feeds' },
  ],
  'stress-granule': [{ to: 'orf1p', kind: 'acts-on' }, { to: 'l1-rnp', kind: 'acts-on' }],
  'dsrna-seq':      [{ to: 'dsrna-cyt', kind: 'acts-on' }, { to: 'mtdsrna', kind: 'acts-on' }],
  llps:             [{ to: 'l1-rnp', kind: 'feeds' }],

  // ── Genome maintenance ──────────────────────────────────────────────────
  dntpase: [
    { to: 'dntp-pool', kind: 'acts-on',
      note: 'The pool this enzyme sets. In the immune atlas it is the head of the PURPLE stream.' },
    { to: 'mito-dntp', kind: 'feeds' },
  ],
  rloop:  [{ to: 'rloop', kind: 'acts-on' }],
  fork:   [{ to: 'fork', kind: 'acts-on' }],
  'dna-resection': [{ to: 'mre11', kind: 'acts-on' }, { to: 'micronucleus', kind: 'feeds' }],
  senescence: [{ to: 'genomic-instability', kind: 'feeds' }],
  checkpoint: [{ to: 'genomic-instability', kind: 'feeds' }],

  // ── Lysosome ────────────────────────────────────────────────────────────
  autophagy: [
    { to: 'autolysosome', kind: 'acts-on' },
    { to: 'ctsd', kind: 'feeds',
      note: 'Cathepsin D — the mTOR–MITF–CTSD arm where lysosomal failure becomes cGAS ligand supply.' },
  ],

  // ── Clinical outcomes — a second route, not in the source workbook ──────
  // `bladder` had only one modelled cause (sterile inflammation, via
  // sterile-inflam in links.js). The IL-23/Th17/IL-17A axis is a second,
  // mechanistically independent route: it is the immune atlas's own model of
  // enthesitis-predominant disease, where the same driver produces joint
  // involvement (psa) at one insertion site and could plausibly produce
  // genitourinary/pelvic involvement at another. No SAMHD1-specific citation
  // supports the bladder-specific claim — this is a structural analogy to an
  // already-modelled mechanism, not a demonstrated one, and is graded I
  // accordingly. It is NOT one of the 54 workbook functions, so it lives here
  // as a cross-link rather than as a fabricated internal node.
  bladder: [
    { to: 'il17a', kind: 'feeds',
      note: 'The IL-23/Th17/IL-17A axis that drives enthesitis at tendon–bone insertions ' +
            'in psoriatic arthritis. The same axis acting on a different insertion site is a ' +
            'structural analogy, not a demonstrated mechanism — no citation places IL-17A ' +
            'at the bladder specifically.' },
    { to: 'psa', kind: 'feeds',
      note: 'Psoriatic arthritis is the outcome this axis is modelled against. Genitourinary ' +
            'enthesitis sits on the same spectrum but is not the same claim as joint disease.' },
  ],
};

export const CROSSLINK_KINDS = {
  same:      { label: 'the same claim',        glyph: '=' },
  'acts-on': { label: 'acts on',               glyph: '→' },
  feeds:     { label: 'feeds the pathway at',  glyph: '⇉' },
};

/**
 * Build a URL into the sibling atlas.
 *
 * Served from a site root the sibling is at /atlas/; served from the local dev
 * server it is on its own port. Guessing wrong produces a dead link, so this
 * decides from the origin rather than assuming.
 */
export function siblingUrl(nodeId) {
  // Discriminate on the PORT, not the hostname. "Am I on localhost" is the
  // wrong question and gets this wrong in a case that matters: a `mkdocs serve`
  // preview of the built site runs on localhost but has the published layout,
  // so a hostname test sends every cross-link to a dev server that is probably
  // not running. The atlas's own dev port is the precise signal — only the
  // standalone dev server serves on it.
  const dev = location.port === SIBLING.ownDevPort;
  const base = dev ? SIBLING.devBase : SIBLING.publishedBase;
  return `${base}#node=${encodeURIComponent(nodeId)}`;
}
