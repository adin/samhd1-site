/**
 * config.js — the atlas contract.
 *
 * Every data file in src/data/ emits { nodes: [...], edges: [...] } shaped
 * exactly as documented here. Nothing else in the app is allowed to invent
 * fields; if you need a new one, add it here first so later sessions and
 * parallel agents stay compatible.
 *
 * ── NODE ────────────────────────────────────────────────────────────────
 * {
 *   id:        'cgas',                  // unique, kebab/lowercase, stable — edges reference it
 *   label:     'cGAS',                  // short name drawn in 3D
 *   full:      'Cyclic GMP-AMP synthase (MB21D1)',
 *   compartment:'cytosol',              // key of COMPARTMENTS
 *   klass:     'sensor',                // key of CLASSES — drives shape + colour
 *   pathways:  ['cgas-sting','retro'],  // keys of PATHWAYS — drives layer toggles
 *   pos:       [x, y, z],               // ABSOLUTE world coords (see COMPARTMENTS for anchors)
 *   lod:       1,                       // 1 = always shown · 2 = only when its compartment is entered
 *   evidence:  'S' | 'G' | 'I',         // evidence key from "The Mitochondrion Under Siege"
 *   key:       true,                    // optional — label stays visible in overview
 *   summary:   'one sentence',
 *   detail:    'a paragraph of mechanism',       // optional
 *   samhd1:    'what A565T haploinsufficiency does here', // optional, gets the amber box
 *   drugs:     ['upadacitinib'],        // optional — node ids of drugs acting here
 *   refs:      ['west2015'],            // optional — keys into data/refs.js
 * }
 *
 * ── EDGE ────────────────────────────────────────────────────────────────
 * {
 *   from: 'cgas', to: 'cgamp',
 *   kind: 'produce',                    // key of EDGE_KINDS — drives colour + arrowhead
 *   label:'ATP + GTP → 2′3′-cGAMP',     // optional, shown on hover/inspect
 *   pathways: ['cgas-sting'],
 *   evidence: 'S',
 *   loop: 'A',                          // optional — 'A' | 'B' | 'ankib1' | 'irf7' | 'sting-fission'
 *   detail: '...',                      // optional
 *   refs: ['rabinowitz2025'],
 *   bend: 0.18,                         // optional — curve amount, default 0.12
 * }
 *
 * EVIDENCE KEY (from Mitochondria under siege.tex):
 *   S — demonstrated in SAMHD1-deficient cells / animals / AGS patients
 *   G — well established in related immune or mitochondrial systems, imported here
 *   I — mechanistically consistent extrapolation, not yet tested in SAMHD1 models
 */

// ── Compartments ─────────────────────────────────────────────────────────
// `anchor` is the centre used for camera framing; `radius` sizes the focus
// distance. `shell` describes the membrane geometry drawn for it.
export const COMPARTMENTS = {
  extracellular: {
    label: 'Extracellular',
    color: 0x2b3a52,
    anchor: [0, 96, 0], radius: 62,
    labelAt: [0, 112, 0],
    shell: null,
    blurb: 'Secreted IFN-α/β, IFN-γ, IFN-λ, IL-1β, IL-18, IL-6, MCP-1, TNF-α. ' +
           'The autocrine and paracrine space where the interferon loop closes back onto the cell.',
  },
  membrane: {
    label: 'Plasma membrane',
    color: 0x6e7ea0,
    anchor: [0, 62, 0], radius: 46,
    labelAt: [0, 80, 58],
    shell: { kind: 'cell', rx: 104, ry: 74, rz: 104 },
    blurb: 'Cytokine receptors (IFNAR1/2, IFNGR, IFNLR, IL1R, TNFR), TLR4, and the ' +
           'P2X7 K⁺-efflux channel that licenses NLRP3.',
  },
  cytosol: {
    label: 'Cytosol',
    color: 0x3d5670,
    anchor: [0, 0, 0], radius: 82,
    labelAt: [-14, -62, 82],
    shell: null,
    blurb: 'Where nucleic-acid sensing happens: cGAS, RIG-I/MDA5, the NLRP3 inflammasome, ' +
           'the dNTP pool SAMHD1 is supposed to hold down, and every retroelement ' +
           'intermediate that escapes its restriction layer.',
  },
  nucleus: {
    label: 'Nucleus',
    color: 0x5a4a86,
    anchor: [-34, 6, -14], radius: 40,
    labelAt: [-34, 50, -14],
    shell: { kind: 'sphere', r: 34, at: [-34, 6, -14] },
    blurb: 'Transcriptional output (IFNB1, ISGs, NLRP3, pro-IL-1β), replication-fork and ' +
           'R-loop biology, HUSH/SETDB1 silencing of LINE-1 and HERV loci, and the L1 ' +
           'target-primed reverse transcription that writes new insertions into the genome.',
  },
  mitochondrion: {
    label: 'Mitochondrion',
    color: 0x2f8f6a,
    anchor: [52, -6, 24], radius: 42,
    labelAt: [52, 30, 24],
    shell: { kind: 'mito', at: [52, -6, 24], len: 62, r: 19 },
    blurb: 'The convergence point of the whole framework. Outer membrane (VDAC1, MAVS, BAX/BAK, ' +
           'BIK), inner membrane (PNC1/PNC2 dNTP carriers, ETC complexes, mPTP), and matrix ' +
           '(mtDNA nucleoid, POLG, TFAM). Two escape routes, two DNA species, two sensors, two loops.',
  },
  er: {
    label: 'ER / Golgi',
    color: 0x9d7040,
    anchor: [6, 30, 34], radius: 32,
    labelAt: [6, 56, 34],
    shell: { kind: 'er', at: [6, 30, 34] },
    blurb: 'STING resides here at rest and traffics ER → ERGIC → Golgi on activation, ' +
           'picking up TBK1 en route. Also the site of ISG15 conjugation machinery and ' +
           'the ceramide synthesis that IL-1β drives into the mitochondrial inner membrane.',
  },
  endosome: {
    label: 'Endosome',
    color: 0x8a5a8f,
    anchor: [-30, -40, 46], radius: 24,
    labelAt: [-30, -20, 46],
    shell: { kind: 'sphere', r: 14, at: [-30, -40, 46] },
    blurb: 'TLR3 (dsRNA), TLR7/8 (ssRNA), TLR9 (CpG DNA) signalling through TRIF and MyD88. ' +
           'The TLR3 → IRF3 → SAMHD1 induction arm that Arm 3 (poly-ICLC) targets.',
  },
  lysosome: {
    label: 'Lysosome',
    color: 0xb06a4a,
    anchor: [16, -46, -40], radius: 22,
    labelAt: [16, -64, -40],
    shell: { kind: 'sphere', r: 12, at: [16, -46, -40] },
    blurb: 'Autolysosome maturation, cathepsin D, mTORC1–MITF–TFEB control. Where ' +
           'mitophagic cargo is supposed to be destroyed — and is not, in this disease.',
  },
  peroxisome: {
    label: 'Peroxisome',
    color: 0x4a8fa0,
    anchor: [58, 36, -34], radius: 16,
    labelAt: [58, 50, -34],
    shell: { kind: 'sphere', r: 8, at: [58, 36, -34] },
    blurb: 'The second MAVS platform. Peroxisomal MAVS drives fast, IFN-independent ISG ' +
           'expression; mitochondrial MAVS drives the type-I IFN amplitude.',
  },
  responder: {
    label: 'Responder cell',
    color: 0xc2557a,
    anchor: [-112, 96, 18], radius: 34,
    labelAt: [-112, 132, 18],
    shell: { kind: 'sphere', r: 28, at: [-112, 96, 18] },
    blurb: 'A NEIGHBOURING cell — NK cell, Th1/Th17 lymphocyte or recruited monocyte. ' +
           'IL-18 and IL-12 leave the affected cell and act here; the IFN-γ that comes back ' +
           'is made in this compartment, not the first one. Loop C is paracrine by construction, ' +
           'which is why it cannot be seen in a single-cell diagram.',
  },
  granule: {
    label: 'Stress granule',
    color: 0x7d7f4a,
    anchor: [-62, -24, 28], radius: 18,
    labelAt: [-64, -42, 28],
    shell: { kind: 'sphere', r: 10, at: [-62, -24, 28] },
    blurb: 'Where SAMHD1 sequesters immunostimulatory dsRNA in LLPS condensates and where ' +
           'L1 ORF1p ribonucleoprotein particles are held out of circulation.',
  },
};

// ── Node classes: geometry + base colour ────────────────────────────────
export const CLASSES = {
  sensor:    { label: 'Sensor / PRR',        color: 0xff6b5c, shape: 'octa',    size: 2.6 },
  adaptor:   { label: 'Adaptor / scaffold',  color: 0xffa04d, shape: 'box',     size: 2.4 },
  kinase:    { label: 'Kinase',              color: 0xffd75e, shape: 'cone',    size: 2.5 },
  tf:        { label: 'Transcription factor',color: 0x8b6cff, shape: 'tetra',   size: 2.6 },
  receptor:  { label: 'Receptor',            color: 0x53d6ff, shape: 'cyl',     size: 2.5 },
  cytokine:  { label: 'Cytokine / IFN',      color: 0x4de0c0, shape: 'sphere',  size: 2.0 },
  effector:  { label: 'Effector / ISG',      color: 0x7fd97a, shape: 'sphere',  size: 2.1 },
  ligand:    { label: 'Nucleic acid ligand', color: 0xff8ec7, shape: 'torus',   size: 2.2 },
  metabolite:{ label: 'Metabolite / dNTP',   color: 0xc0d6ff, shape: 'sphere',  size: 1.7 },
  structure: { label: 'Structure / channel', color: 0x9aa8bd, shape: 'box',     size: 2.3 },
  complex:   { label: 'Multiprotein complex',color: 0xbf7fff, shape: 'dodeca',  size: 3.0 },
  enzyme:    { label: 'Enzyme',              color: 0x6fb4ff, shape: 'octa',    size: 2.3 },
  retro:     { label: 'Retroelement',        color: 0xff5fa2, shape: 'torus',   size: 2.4 },
  restrict:  { label: 'Restriction factor',  color: 0x00c2a8, shape: 'octa',    size: 2.4 },
  drug:      { label: 'Drug / intervention', color: 0xffffff, shape: 'ring',    size: 2.2 },
  cell:      { label: 'Responder cell type', color: 0xff7fa8, shape: 'dodeca',  size: 3.4 },
  outcome:   { label: 'Clinical outcome',    color: 0xe0674f, shape: 'box',     size: 2.6 },
};

// ── Pathway layers ──────────────────────────────────────────────────────
export const PATHWAYS = {
  'samhd1':      { label: 'SAMHD1 node',            color: 0xffb454, on: true,  order: 0 },
  'cgas-sting':  { label: 'cGAS–STING (Loop A)',    color: 0x53a8ff, on: true,  order: 1 },
  'rlr-mavs':    { label: 'RIG-I / MDA5 – MAVS',    color: 0x7cc4ff, on: true,  order: 2 },
  'tlr':         { label: 'TLR3/4/7/9 – TRIF/MyD88',color: 0xa98cff, on: true,  order: 3 },
  'ankib1':      { label: 'ANKIB1 K11-Ub gain node',color: 0xc06bff, on: true,  order: 4 },
  'nfkb':        { label: 'NF-κB',                  color: 0xff7ad9, on: true,  order: 5 },
  'inflammasome':{ label: 'NLRP3 (Loop B)',         color: 0xffab3d, on: true,  order: 6 },
  'celldeath':   { label: 'Cell death (ZBP1/RIPK3)', color: 0xff6f91, on: true,  order: 7 },
  'ifn-jak':     { label: 'IFNAR–JAK/TYK2–STAT',    color: 0x37d6b0, on: true,  order: 8 },
  'ifn-gamma':   { label: 'IFN-γ loop (Loop C)',     color: 0x66e07a, on: true,  order: 9 },
  'th17':        { label: 'IL-12/IL-23 – Th1/Th17',  color: 0xff9ec4, on: true,  order: 10 },
  // Sits between the Th1/Th17 arm and the ISG effectors because it acts ON the
  // responder cell those arms depend on. Adaptive by nature — the one such arm
  // in an otherwise innate atlas — so it is grouped with the paracrine layers
  // rather than the intracellular ones. See data/trailshort.js.
  'tcr':         { label: 'TCR signalling (TRAILshort)', color: 0xffd0a0, on: true, order: 10.5 },
  'isg':         { label: 'ISG effectors & brakes', color: 0x8ce07f, on: true,  order: 11 },
  'mito':        { label: 'Mitochondrial injury',   color: 0x2fbf8f, on: true,  order: 12 },
  'mitophagy':   { label: 'Mitophagy / lysosome',   color: 0xd98b4a, on: true,  order: 13 },
  'retro':       { label: 'Retroelement defence',   color: 0xff5fa2, on: true,  order: 14 },
  'genome':      { label: 'Genome stability',       color: 0xff9a6b, on: true,  order: 15 },
  'metabolic':   { label: 'Metabolic / bioenergetic',color: 0xd7c04a, on: true, order: 16 },
  'drugs':       { label: 'Drugs & study arms',     color: 0xffffff, on: false, order: 17 },
  'clinical':    { label: 'Clinical outcomes',      color: 0xe0674f, on: false, order: 18 },
};

// ── Edge kinds ──────────────────────────────────────────────────────────
// `sign` is the edge's polarity, and it is what lets the cascade navigator
// reason rather than merely walk. A route's net effect is the PRODUCT of its
// signs, so `a565t ⊣ samhd1 ⊣ irf7` is a double negative — losing a brake on a
// brake INCREASES IRF7. Without this, every traced route would read as
// "the variant causes X" regardless of direction, which is worse than useless.
export const EDGE_KINDS = {
  activate:    { color: 0x7fd4ff, head: 'arrow', label: 'activates',       sign: +1 },
  produce:     { color: 0x8ce07f, head: 'arrow', label: 'produces',        sign: +1 },
  inhibit:     { color: 0xff5c5c, head: 'bar',   label: 'inhibits',        sign: -1 },
  translocate: { color: 0xc0a0ff, head: 'arrow', label: 'translocates to', sign: +1, dashed: true },
  bind:        { color: 0xa8b6cc, head: 'none',  label: 'binds',           sign: +1 },
  ubiq:        { color: 0xc06bff, head: 'arrow', label: 'ubiquitinates',   sign: +1 },
  phos:        { color: 0xffd75e, head: 'arrow', label: 'phosphorylates',  sign: +1 },
  transport:   { color: 0x6fd8c0, head: 'arrow', label: 'transports',      sign: +1 },
  sense:       { color: 0xff8ec7, head: 'arrow', label: 'is sensed by',    sign: +1 },
  degrade:     { color: 0xff7a4d, head: 'bar',   label: 'degrades',        sign: -1 },
  release:     { color: 0xffab3d, head: 'arrow', label: 'releases',        sign: +1, dashed: true },
  drive:       { color: 0xe0674f, head: 'arrow', label: 'drives',          sign: +1 },
};

export const EVIDENCE = {
  S: { label: 'Demonstrated in SAMHD1 systems', color: 0x46d18a },
  G: { label: 'Established elsewhere, imported', color: 0xd1a246 },
  I: { label: 'Inferred extrapolation',          color: 0xe0674f },
};

// Scene-wide tuning knobs.
export const SETTINGS = {
  cameraStart: [150, 105, 190],
  bloomless: true,
  flowSpeed: 0.22,
  labelFadeStart: 210,
  labelFadeEnd:   330,
};

// ── Streams ──────────────────────────────────────────────────────────────
// The coloured pathway streams of "The Mitochondrion Under Siege", carried
// over with their original colour names and attack-vector numbers so the 3D
// atlas and the manuscript figure can be read side by side.
//
// A stream is a VIEW over the graph, not extra data: `chain` is an ordered list
// of node ids, and an edge belongs to the stream when both of its endpoints do.
// That means streams stay correct automatically as the underlying graph grows.
//
//   inputs  — what feeds the stream (highlighted as sources)
//   outputs — what it hands to the next loop (highlighted as sinks)
//   vectors — the numbered attack vectors from the source document
//   source  — true if the stream appears in the manuscript figure; false marks
//             an extension added in this atlas and not yet in the document.
export const STREAMS = {
  purple: {
    label: 'PURPLE — dNTPase direct', color: 0x9b6bff, evidence: 'I', source: true,
    vectors: '#1 PNC1/PNC2 transporter overload · #2 POLG stalling',
    summary: 'Cytosolic dNTP excess is pushed into the matrix, wrecks mtDNA replication, and the oxidised product becomes an NLRP3 ligand.',
    mechanism: [
      'This is the stream that runs entirely on nucleotide chemistry. dNTPase failure raises the cytosolic pool ' +
      'by 40–60% with a disproportionate dGTP skew, and that excess floods the PNC1 (SLC25A33) and PNC2 (SLC25A36) ' +
      'carriers in the inner mitochondrial membrane.',
      'A perturbed matrix pool is worse than a large one: POLG fidelity and processivity both degrade when the ' +
      'four dNTPs are out of ratio, especially with excess dGTP. The polymerase stalls, mtDNA strand breaks ' +
      'accumulate, and the uncontrolled neosynthesis that follows yields an OXIDISED product.',
      'The species matters. ox-mtDNA is the direct NLRP3 ligand — it is not what activates cGAS. That is the ' +
      'BLUE stream, using a different escape route and a different sensor. Same organelle, parallel mechanisms.',
    ],
    inputs: ['a565t', 'dntp-pool'],
    outputs: ['oxmtdna', 'nlrp3'],
    chain: ['a565t', 'samhd1', 'dntp-pool', 'pnc1', 'pnc2', 'mito-dntp', 'polg', 'mtdna', 'mtros', 'oxmtdna', 'nlrp3'],
    refs: ['dolce2001', 'lunetti2016', 'liu2026nlrp3', 'elpeleg2008', 'docSiege'],
  },

  blue: {
    label: 'BLUE — mtDNA escape / cGAS bridge', color: 0x4aa8ff, evidence: 'S', source: true,
    vectors: '#3 VDAC1 macropore — cytosolic mtDNA fragment escape',
    summary: 'Unoxidised mtDNA fragments leave through the VDAC1 macropore and are bound by cGAS. This is the bridge from PURPLE into RED.',
    mechanism: [
      'SAMHD1 physically interacts with VDAC1 on the outer membrane, and must be present inside the mitochondrial ' +
      'compartment to prevent membrane-potential collapse and DNA release. Losing that interaction — with mtROS ' +
      'rising underneath — drives VDAC1 into oligomers wide enough to pass DNA.',
      'Two routes exist: the VDAC1 macropore, which is the primary constitutive one, and mPTP opening downstream ' +
      'of ΔΨm collapse. The macropore route is the important one because it runs WITHOUT depolarisation — a living, ' +
      'dividing cell can leak DNA continuously.',
      'The pharmacology settles the mechanism cleanly. VBIT-4 prevents release and fully abolishes the spontaneous ' +
      'ISG response; IMSB301 (cGAS inhibitor) normalises the ISG signature in AGS PBMCs. The route is VDAC1-gated ' +
      'and cGAS-dependent, not oxidation-dependent.',
    ],
    inputs: ['samhd1-mito', 'mtdna', 'mtros'],
    outputs: ['mtdna-frag', 'cgas', 'ifnb'],
    chain: ['samhd1-mito', 'vdac1', 'vdac1-oligo', 'mptp', 'mtdna', 'mtdna-frag', 'cgas', 'cgamp', 'sting', 'tbk1', 'irf3', 'ifnb1-gene', 'ifnb'],
    refs: ['xu2023vdac1', 'rabinowitz2025', 'han2026', 'west2015', 'docSiege'],
  },

  red: {
    label: 'RED — IFN-I indirect', color: 0xff5a5a, evidence: 'S', source: true,
    vectors: '#4 ISG15 → mitophagy doubly blocked · #5 PGC-1α suppression · #6 STAT1/2 → Complexes I and III',
    summary: 'Interferon returns and attacks the mitochondrion transcriptionally — blocking mitophagy, suppressing biogenesis, and shutting down respiration.',
    mechanism: [
      'This stream is the reason the disease does not simply burn out. Type-I interferon arrives back at IFNAR, ' +
      'runs JAK1/TYK2 → STAT1/STAT2/IRF9 → ISGs, and the ISG programme then damages the organelle that produced ' +
      'the original ligand.',
      'It does so three ways at once. ISG15 ISGylates MFN1/2, blocking PINK1/Parkin mitophagy, and independently ' +
      'ISGylates BECN1, blocking autophagic flux by a second route — the KEYSTONE stressor, because it converts ' +
      'transient damage into permanent accumulation. STAT1 represses PGC-1α, so biogenesis cannot replace what is ' +
      'lost. And sustained STAT1/2 signalling suppresses Complexes I and III directly.',
      'Damaged mitochondria are therefore flagged, not cleared, not replaced, and not respiring. They keep leaking ' +
      'DNA. Once running, this loop needs no new dNTP input at all — which is why upstream rescue alone may not ' +
      'stop it.',
    ],
    inputs: ['ifnb', 'ifnar1', 'ifnar2'],
    outputs: ['isg15', 'mfn', 'becn1', 'pgc1a', 'etc-i', 'etc-iii'],
    chain: ['ifnb', 'ifnar1', 'ifnar2', 'jak1', 'tyk2', 'stat1', 'stat2', 'irf9', 'isgf3', 'isre', 'isg-set',
            'isg15', 'irf1', 'mfn', 'becn1', 'pink1', 'parkin', 'pgc1a', 'etc-i', 'etc-iii'],
    refs: ['deng2024', 'xu2015becn1', 'bhimavarapu2015', 'mihaylova2024', 'rabinowitz2025'],
  },

  gold: {
    label: 'GOLD — dG catabolism', color: 0xe0b53a, evidence: 'I', source: true,
    vectors: '#11 MSU crystal formation — the dG catabolism feedforward',
    summary: 'The same dGTP excess that stalls POLG is also catabolised to urate, and the crystals hit an NLRP3 already primed.',
    mechanism: [
      'Excess cytosolic dGTP enters purine catabolism and ends at uric acid, because humans lack uricase. Urate ' +
      'retention permits monosodium urate crystal formation in the cytosol — the classic gout ligand, arriving here ' +
      'from a nucleotide-metabolism defect rather than from diet.',
      'This is a feedforward trap: ONE genetic lesion generates both NLRP3 ligands. dGTP excess yields ox-mtDNA ' +
      'through POLG stalling (PURPLE) and MSU crystals through catabolism (GOLD), driving a single sensor from two ' +
      'directions. And because cGAS–STING has already primed NLRP3 via NF-κB, the crystals hit a sensitised target ' +
      'with synergistically greater IL-1β/IL-18 output.',
      'Honest caveat: MSU crystal presence in SAMHD1-null cells has not been confirmed by peer-reviewed primary ' +
      'data. This stream is carried as inferred input only. If it is real, allopurinol becomes an obvious adjunct.',
    ],
    inputs: ['dntp-pool'],
    outputs: ['msu', 'nlrp3', 'il1b'],
    chain: ['dntp-pool', 'urate', 'msu', 'nlrp3', 'asc', 'casp1', 'il1b'],
    refs: ['martinon2006', 'swanson2019', 'docSiege'],
  },

  orange: {
    label: 'ORANGE — downstream inflammatory', color: 0xff9138, evidence: 'S', source: true,
    vectors: '#7 IL-1β / NF-κB → ceramide, inner-membrane damage · #8 TNF-α / mPTP opening',
    summary: 'The cytokines the loops produce come back and injure the inner membrane directly.',
    mechanism: [
      'NF-κB → IL-1β promotes ceramide synthesis, and ceramide does three things to the mitochondrion at once: it ' +
      'inhibits Complex III directly, permeabilises the inner membrane, and raises mPTP propensity. One cytokine, ' +
      'three simultaneous lesions.',
      'TNF-α drives chronic SUBLETHAL mPTP opening through ROS. The result is a persistent cytochrome-c leak rather ' +
      'than an apoptotic burst — which is exactly the phenotype needed for a chronic disease: enough damage to ' +
      'degrade function permanently, not enough to kill the cell and end the signal.',
    ],
    inputs: ['nfkb', 'il1b', 'tnfa'],
    outputs: ['ceramide', 'etc-iii', 'mptp', 'cytc'],
    chain: ['nfkb', 'nfkb-targets', 'il1b', 'tnfa', 'ceramide', 'etc-iii', 'mptp', 'cytc', 'deltapsi'],
    refs: ['gudz1997', 'shoshan2020', 'docSiege'],
  },

  teal: {
    label: 'TEAL — mitophagy failure', color: 0x3fd0c4, evidence: 'S', source: true,
    vectors: '#9a BIK/BECN1 competition · #9b mTOR–MITF–CTSD lysosomal failure · #9c STING self-reinforcing loop',
    summary: 'Three independent brakes on clearance, so damaged mitochondria are tagged and then simply accumulate.',
    mechanism: [
      'BIK — which SAMHD1 itself upregulates — sequesters BECN1, biasing the cell toward apoptosis over mitophagy. ' +
      'That is the first block, and it sits upstream of the ISG15 route entirely.',
      'Constitutive mTORC1 activation retains MITF in the cytoplasm, so cathepsin D and the lysosomal hydrolases ' +
      'are under-produced. Autolysosomes form and fail to digest their cargo — damaged mitochondria are trapped ' +
      'one step from destruction, amplifying mtROS while they wait.',
      'And STING activation drives DRP1-mediated fission far in excess of fusion. Fragmentation raises the ' +
      'surface-to-volume ratio, raises mtROS, and multiplies VDAC1 oligomerisation sites — while ISGylated BECN1 ' +
      'blocks clearance of the fragments. Self-sustaining once initiated, independent of new dNTP input.',
    ],
    inputs: ['bik', 'mtor', 'sting', 'isg15'],
    outputs: ['ctsd', 'autolysosome', 'drp1', 'mtros'],
    chain: ['bik', 'becn1', 'lc3', 'p62', 'optn', 'autolysosome', 'mtor', 'mitf', 'ctsd',
            'sting', 'drp1', 'mtros', 'vdac1-oligo', 'isg15', 'mfn'],
    refs: ['yang2025bik', 'luo2012', 'yaxian2025', 'napolitano2020', 'xu2015becn1', 'docSiege'],
  },

  green: {
    label: 'GREEN — direct membrane', color: 0x5ad06a, evidence: 'S', source: true,
    vectors: '#10 VDAC1 oligomerisation + direct depolarisation',
    summary: 'Losing the SAMHD1–VDAC1 interaction is a structural lesion in its own right, independent of any nucleotide effect.',
    mechanism: [
      'This stream is what makes the mitochondrial arm a direct SAMHD1 function rather than a downstream consequence ' +
      'of cytosolic dNTP excess. SAMHD1 physically interacts with VDAC1, and Samhd1-KO causes measurable ΔΨm ' +
      'collapse and M1 macrophage skewing.',
      'Membrane potential is the organelle\'s master state variable: it sets ATP output, protein import, PINK1 ' +
      'stability and the mPTP threshold simultaneously. Collapse is not a symptom here — it re-enters the loop by ' +
      'stopping PINK1 import and lowering the mPTP threshold.',
      'VBIT-4 at non-cytotoxic concentrations (≤5 µM) is the pharmacologic test of this stream, and the dose ceiling ' +
      'is not optional: above ~10 µM the compound disrupts membranes independently of VDAC1, which would make any ' +
      'result uninterpretable.',
    ],
    inputs: ['samhd1-mito', 'vdac1'],
    outputs: ['deltapsi', 'atp', 'm1'],
    chain: ['samhd1-mito', 'vdac1', 'vdac1-oligo', 'deltapsi', 'tom20', 'etc-v', 'atp', 'm1'],
    refs: ['xu2023vdac1', 'rabinowitz2025', 'vbit4mem2025'],
  },

  // ── The three feedback loops ─────────────────────────────────────────
  // Kept together at the END of the list, in A/B/C order. The colour streams
  // above are attack vectors — routes INTO the pathology — and these three are
  // the cycles those routes feed, so the list reads inputs-then-loops. Loop C
  // was already last; A and B join it rather than splitting the set.
  //
  // A and B are §Feedback Loops of the manuscript. Their edges already carry
  // `loop: 'A' | 'B'` in the data; the chains below are the figure's version of
  // each cycle — the closing arc included, so each reads as a loop rather than
  // a path. Colours are the manuscript's Red and Amber, darkened and brightened
  // respectively so neither collides with the RED or ORANGE streams above.
  loopA: {
    label: 'cGAS–STING (Loop A)', color: 0xe03131, evidence: 'S', source: true,
    vectors: 'Initiated by cytosolic mtDNA FRAGMENTS (VDAC1 macropore / mPTP) — not ox-mtDNA',
    summary: 'The interferon this loop produces comes back and disables the mitophagy that would have cleared the source. That block is what makes it a loop rather than a cascade.',
    mechanism: [
      'Written out as a chain this reads SAMHD1 → dNTP → mtDNA → cGAS → IFN, and stops. What the compressed ' +
      'version hides is the return leg: type-I interferon does not merely signal outward, it disables the disposal ' +
      'system for the very organelle that produced the ligand. Without that step there is a cascade. With it there ' +
      'is a loop, and the difference is the whole clinical picture.',
      'The species matters at the entrance. Cytosolic mtDNA FRAGMENTS — unoxidised, escaping through the VDAC1 ' +
      'macropore or an open mPTP — are what cGAS binds. cGAS → 2′3′-cGAMP → STING, which traffics ER → ERGIC → ' +
      'Golgi picking up TBK1 en route, then TBK1 → IRF3 → IFNB1 → IFN-β. Note what this is NOT: ox-mtDNA does not ' +
      'activate cGAS. It activates NLRP3, and that is Loop B. Same organelle, different oxidation state, ' +
      'different sensor.',
      'IFN-β returns at IFNAR1/2 → JAK1 + TYK2 → STAT1/STAT2/IRF9 as ISGF3 (not the STAT1 homodimer GAF — that is ' +
      'the IFN-γ arm) → ISRE → several hundred ISGs. ISG15 is the one that closes it: ISGylated MFN1/2 blocks ' +
      'PINK1/Parkin mitophagy, ISGylated BECN1 blocks autophagic flux by a second independent route, unopposed MFN ' +
      'loss tips fusion–fission toward DRP1, fragmentation raises mtROS, and mtROS drives further VDAC1 ' +
      'oligomerisation. More DNA escapes to cGAS. That is what closes it into a loop.',
      'The brake is the ANKIB1/K11-Ub node — ANKIB1 assembles K11-linked ubiquitin on TRIF/NEMO and attenuates the ' +
      'amplification, so the loop runs with its own inhibitor already engaged, exactly as the IFN-γ arm does with ' +
      'IL-18BP. That is the proposed reason a heterozygote smoulders at moderate amplitude instead of presenting ' +
      'in acute interferon crisis. And once running it needs NO new dNTP input — so test it against cGAS blockade ' +
      '(IMSB301 normalises the ISG signature in AGS PBMCs; SAMHD1+cGAS double KO abolishes it) rather than against ' +
      'upstream nucleotide rescue, which alone need not stop it.',
    ],
    inputs: ['mtdna-frag', 'cgas'],
    outputs: ['ifnb', 'isg15', 'mfn', 'becn1'],
    chain: ['samhd1-mito', 'vdac1', 'vdac1-oligo', 'mptp', 'mtdna', 'mtdna-frag', 'dnase2', 'necroptosis',
            'micronucleus', 'l1-cdna', 'ssdna', 'ifi16', 'cgas', 'cgamp', 'sting', 'sting-golgi', 'tbk1', 'irf3',
            'ifnb1-gene', 'ifnb', 'ifnar1', 'ifnar2', 'jak1', 'tyk2', 'stat1', 'stat2', 'irf9', 'isgf3', 'isre',
            'isg-set', 'isg15', 'mfn', 'becn1', 'pink1', 'parkin', 'drp1', 'mtros'],
    refs: ['rabinowitz2025', 'han2026', 'xu2023vdac1', 'deng2024', 'xu2015becn1', 'betrancourt2026', 'docSiege'],
  },

  loopB: {
    label: 'NLRP3 (Loop B)', color: 0xffbf1f, evidence: 'S', source: true,
    vectors: 'Initiated by ox-mtDNA (POLG/dNTP route) + MSU crystals — not cytosolic mtDNA fragments',
    summary: 'Priming is the loop; the ligands are only the trigger. NF-κB must build the sensor before ox-mtDNA can fire it, and the IL-1β that results builds it again.',
    mechanism: [
      'NLRP3 is usually written as though it were a switch that ox-mtDNA flips. It is not. An unprimed cell has ' +
      'neither NLRP3 nor pro-IL-1β in useful amounts, so the ligand arrives at a sensor that is not there. Signal 1 ' +
      '(priming) and signal 2 (activation) are separate events — and it is the priming arm, not the ligand arm, ' +
      'that closes into a loop.',
      'Signal 1: mtROS → NF-κB → the κB target set, which contains NLRP3 itself, pro-IL-1β, IL-6, IL-23 and TNF. ' +
      'Only then does signal 2 matter, and there are two of them arriving in parallel from one lesion: OXIDISED ' +
      'mtDNA, the product of dNTP overload stalling POLG and distinct from the unoxidised fragments feeding Loop A; ' +
      'and MSU crystals, arriving from excess dGTP through purine catabolism to urate, because humans lack uricase. ' +
      'One genetic lesion, two ligands, one sensor.',
      'NLRP3 nucleates a single ASC speck, caspase-1 autoprocesses on it and cleaves pro-IL-1β and pro-IL-18, and ' +
      'mature IL-1β binds IL-1R → MyD88 → NF-κB — priming the sensor that produced it. That is what closes it into ' +
      'a loop, and it is entirely cytosolic: caspase-1 activation does NOT occur inside the mitochondrion. The exit ' +
      'is pyroptotic — caspase-1 cleaves GSDMD, the N-terminal fragment pores the plasma membrane, and above the ' +
      'lytic threshold the cell spills mtDNA into the extracellular space where bystander cGAS picks it up. That ' +
      'dotted cross-link is how Loop B feeds Loop A.',
      'The brakes are A20 (TNFAIP3) and IκBα — both themselves κB targets, so this loop transcribes its own ' +
      'inhibitor and can be fully engaged and still losing, exactly as the type-I arm does with USP18. The two ' +
      'loops are PARALLEL, not sequential, and the rescue data is the proof: IMSB301 (cGAS) does not abolish NLRP3 ' +
      'activation, and MCC950 (NLRP3) does not suppress the ISG signature. Measure ASC specks and caspase-1 p20 — ' +
      'countable, binary readouts — rather than IL-1β alone, which is consumed and cleared.',
    ],
    inputs: ['oxmtdna', 'msu', 'nlrp3'],
    outputs: ['il1b', 'il18', 'pyroptosis', 'mtdna-frag'],
    chain: ['mtros', 'polg', 'oxmtdna', 'dntp-pool', 'urate', 'msu', 'nfkb', 'nfkb-targets', 'proil1b',
            'mlkl', 'nlrp3', 'asc', 'casp1', 'il1b', 'proil18', 'il18', 'il1r', 'myd88',
            'gsdmd', 'gsdmd-pore', 'pyroptosis', 'mtdna-frag'],
    refs: ['liu2026nlrp3', 'martinon2006', 'west2015', 'swanson2019', 'shi2015gsdmd', 'docSiege'],
  },

  gamma: {
    label: 'IFN-γ (Loop C)', color: 0x66e07a, evidence: 'G', source: false,
    vectors: 'Extension — not in the source figure',
    summary: 'The paracrine arm: IL-18 leaves the cell, recruits a neighbour to make IFN-γ, and the IFN-γ comes back and drives M1.',
    mechanism: [
      'The compressed chain SAMHD1 → dNTP → mtDNA → cGAS → NLRP3 → IFN-γ hides its most important step: NLRP3 ' +
      'cannot make IFN-γ, because the affected cell has no IFN-γ programme running. A second cell is required.',
      'Caspase-1 cleaves pro-IL-18, mature IL-18 is secreted, and it binds IL-18R1/IL-18RAP on a neighbouring NK ' +
      'cell or Th1 lymphocyte — signalling through MyD88, the same module a TLR uses. That alone is not enough: ' +
      'IL-12 from the inflamed myeloid cell must also engage IL-12R → TYK2/JAK2 → STAT4 → T-bet, which is what ' +
      'opens the IFNG locus. Only with both signals does IFN-γ appear.',
      'IFN-γ then returns to the original cell: IFNGR1/2 → JAK1 + JAK2 → STAT1 HOMODIMER (GAF, not ISGF3) → GAS ' +
      'elements → IRF1, CXCL9/10/11, CIITA, NOS2 and M1 polarisation. M1 reprogramming raises mtROS and breaks the ' +
      'TCA cycle, which feeds straight back into PURPLE and BLUE. That is what closes it into a loop.',
      'The brake is IL-18BP, a secreted decoy that is itself IFN-γ-inducible — so the loop builds its own inhibitor, ' +
      'exactly as the type-I arm does with USP18. Measure FREE IL-18, not total.',
    ],
    inputs: ['nlrp3', 'casp1', 'il18', 'il12'],
    outputs: ['ifng', 'm1', 'cxcl9-11', 'mtros'],
    chain: ['nlrp3', 'asc', 'casp1', 'proil18', 'il18', 'il18r', 'myd88', 'il12', 'il12r', 'stat4', 'tbet',
            'responder-cell', 'ifng', 'ifngr', 'jak1', 'jak2', 'stat1', 'gaf', 'gas', 'cxcl9-11', 'nos2', 'm1', 'mtros'],
    refs: ['liu2026nlrp3', 'swanson2019', 'xu2023vdac1', 'tannahill2013'],
  },
};

// ── Perturbation states (B1) ─────────────────────────────────────────────
// A state is a VIEW OVER THE GRAPH, exactly as a stream is — not a second copy
// of the data. Rather than hand-authoring an activity number per node per
// state (8 states × 217 nodes of unsourced fold-changes), a state is COMPUTED
// by propagating a single perturbation through the signed edges that the C4
// polarity audit already validated. `src/activity.js` does the arithmetic.
//
// Why derived rather than authored: the alternative invents ~1700 quantitative
// claims with no citation behind any of them, in an atlas whose first ground
// rule is that every claim carries its evidence grade. Deriving instead means
// the ONLY new claims are the per-arm knobs below, each of which is a statement
// about a drug that the manuscripts do make — and adding an eleventh arm costs
// two lines instead of a new column of numbers.
//
//   source    node the perturbation starts from (baseline state only)
//   drug      drug node id; its outgoing edges name the targets and polarity
//   efficacy  0–1, how completely the drug acts at its target
//   reach     per-hop damping as the effect propagates downstream (0–1)
//   evidence  grade for the arm, same S/G/I key as everything else
//
// Nodes may optionally carry `activity: 2.4` (fold-change vs WT in the A565T
// state) to PIN a value where a real measurement exists; that overrides the
// derived figure for that node. None are pinned yet — see C1/C2.
export const BASELINE = { source: 'a565t', strength: 0.9, reach: 0.86 };

export const PERTURBATIONS = {
  wt:           { label: 'Wild type', short: 'WT', evidence: 'S',
                  blurb: 'Reference state. Every node at 1.0 by definition — this is what the other states are ratios against.' },
  a565t:        { label: 'A565T baseline', short: 'A565T', evidence: 'S',
                  blurb: 'Untreated haploinsufficiency. The perturbation propagates from the variant through the signed graph, so what lights up is what the polarity data actually implies.' },

  upadacitinib: { label: '+ upadacitinib', short: 'Arm 2', drug: 'upadacitinib', efficacy: 0.85, reach: 0.86, evidence: 'S',
                  blurb: 'JAK1-selective. Cuts the RED stream where it re-enters the cell, so the ISG arm falls while anything upstream of IFNAR is untouched.' },
  brepocitinib: { label: '+ brepocitinib', short: 'TYK2i', drug: 'brepocitinib', efficacy: 0.80, reach: 0.86, evidence: 'G',
                  blurb: 'Dual JAK1/TYK2. Same arm as upadacitinib, entered one receptor-associated kinase further along.' },
  amlexanox:    { label: '+ amlexanox', short: 'Arm 5', drug: 'amlexanox', efficacy: 0.70, reach: 0.84, evidence: 'G',
                  blurb: 'TBK1/IKKε inhibitor — cuts IFN at the source rather than at the receptor. Carries its own tradeoff edge: suppressing IRF3 also lowers SAMHD1 transcription in an already haploinsufficient cell, and the model propagates that too.' },
  polyiclc:     { label: '+ poly-ICLC', short: 'Arms 3–4', drug: 'polyiclc', efficacy: 0.60, reach: 0.82, evidence: 'S',
                  blurb: 'The only arm pushing UPWARD: a TLR3 agonist inducing SAMHD1 through IRF3. Watch the sign — raising a restriction factor lowers what it restrains.' },
  vbit4:        { label: '+ VBIT-4', short: 'Arm 7', drug: 'vbit4', efficacy: 0.85, reach: 0.86, evidence: 'S',
                  blurb: 'Blocks VDAC1 oligomerisation, closing the macropore. Cuts the BLUE stream at its escape route, upstream of cGAS.' },
  imsb301:      { label: '+ IMSB301', short: 'Arm 8', drug: 'imsb301', efficacy: 0.90, reach: 0.87, evidence: 'S',
                  blurb: 'cGAS inhibitor. The mirror of Arm 9: the ISG arm goes dark while Loop B stays lit, because ox-mtDNA→NLRP3 never passed through cGAS.' },
  mcc950:       { label: '+ MCC950', short: 'Arm 9', drug: 'mcc950', efficacy: 0.85, reach: 0.86, evidence: 'G',
                  blurb: 'NLRP3 inhibitor. The mirror of Arm 8: IL-1β/IL-18 fall and the interferon arm does not. Note it does NOT touch AIM2 — that is what makes the residual interpretable.' },
  plp:          { label: '+ PLP / B6', short: 'Arm 10', drug: 'plp', efficacy: 0.50, reach: 0.84, evidence: 'I',
                  blurb: 'PNC1 transport inhibition — the only arm upstream of BOTH loops, so it should dim the whole board rather than one stream.' },
  allopurinol:  { label: '+ allopurinol', short: 'adjunct', drug: 'allopurinol', efficacy: 0.80, reach: 0.82, evidence: 'I',
                  blurb: 'Only meaningful if the GOLD stream is real. Isolates the urate→MSU contribution to NLRP3 from the ox-mtDNA one.' },
  abe8e:        { label: '+ ABE8e-YA (reversion)', short: 'edit', drug: 'abe8e', efficacy: 1.00, reach: 0.86, evidence: 'I',
                  blurb: 'Correcting the variant itself. Serves as the arithmetic sanity anchor: full reversion should collapse the whole board back onto wild type.' },
};
