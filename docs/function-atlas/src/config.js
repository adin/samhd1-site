/**
 * config.js — the contract for the SAMHD1 function atlas.
 *
 * Sibling of viz/innate-immune-3d, deliberately much smaller. That atlas maps a
 * PATHWAY — hundreds of molecules reacting on each other. This one maps ONE
 * PROTEIN: everything SAMHD1 does, where it does it, and what fails downstream
 * when there is only half enough of it.
 *
 * ── The tier split is the whole idea ─────────────────────────────────────
 * The source workbooks list 54 "functions" as a flat set, which files three
 * different kinds of claim as peers:
 *
 *   regulation  something done TO SAMHD1 that controls it (the PTM sites)
 *   function    a molecular activity OF SAMHD1
 *   cellular    a consequence at the level of the cell
 *   systemic    a consequence at the level of the organism
 *
 * "dNTPase Activity", "Phosphorylation at T592" and "Bladder Dysfunction
 * Prevention" are all in that flat list. They are not comparable claims: one is
 * an enzymatic activity, one is an upstream control input, one is an
 * organism-level phenotype several inferential steps away. Flattening them is
 * what makes a correct list feel untrustworthy. The tiers restore the
 * direction of travel — control → activity → cell → body — and the scene is
 * laid out along that axis so the reader can see how far from the protein any
 * given claim actually sits.
 *
 * ── Positions are DERIVED, not authored ──────────────────────────────────
 * The immune atlas hand-authors every coordinate, and needed a whole tooling
 * task (B3) to find the six nodes that had drifted outside their compartment.
 * Here `data/layout.js` computes positions from compartment + tier, so a node
 * cannot be misplaced and adding one costs nothing. Do not add a `pos` field.
 */

// ── Compartments ─────────────────────────────────────────────────────────
// A simplified cell. Fewer, larger compartments than the immune atlas, because
// there are 54 nodes rather than 217 and the point is legibility at a glance.
export const COMPARTMENTS = {
  nucleus: {
    label: 'Nucleus', color: 0x8b6cff,
    anchor: [-46, 4, 0], radius: 38, shell: { kind: 'sphere', r: 34 }, labelAt: [-46, 46, 0],
    blurb: 'SAMHD1 is predominantly nuclear — an N-terminal NLS carries it here, and this ' +
           'is where the DNA-facing work happens: end resection with CtIP/MRE11, R-loop ' +
           'resolution, fork protection, and the CDK-driven T592 phosphorylation that ' +
           'switches its restriction activity off during S phase.',
  },
  cytosol: {
    label: 'Cytosol', color: 0x3d7fa8,
    anchor: [0, 0, 0], radius: 76, shell: null, labelAt: [-4, -30, 88],
    blurb: 'The dNTP pool SAMHD1 governs, the retroelement and lentiviral intermediates it ' +
           'restricts, and the sensing machinery (cGAS–STING, NF-κB) it holds down by ' +
           'denying them ligand.',
  },
  mitochondrion: {
    label: 'Mitochondrion', color: 0x2f8f6a,
    anchor: [52, -10, 16], radius: 30, shell: { kind: 'sphere', r: 24 }, labelAt: [52, 20, 16],
    blurb: 'A smaller and more recent literature than the nuclear pool, but load-bearing ' +
           'for this variant: the VDAC1 interaction, membrane potential, cytochrome c, ' +
           'BIK-mediated apoptosis, and the mtDNA leakage that feeds cGAS.',
  },
  granule: {
    label: 'Stress granule / condensate', color: 0x7d7f4a,
    anchor: [-16, -52, 30], radius: 20, shell: { kind: 'sphere', r: 16 }, labelAt: [-30, -72, 30],
    blurb: 'SAMHD1 phase-separates with nucleic acid. The condensates sequester ' +
           'immunostimulatory dsRNA and hold L1 ribonucleoprotein particles out of ' +
           'circulation — restriction by sequestration rather than by catalysis.',
  },
  lysosome: {
    label: 'Lysosome / autophagy', color: 0xb06a4a,
    anchor: [30, -46, -28], radius: 18, shell: { kind: 'sphere', r: 13 }, labelAt: [44, -62, -28],
    blurb: 'Autophagic–lysosomal homeostasis. Where damaged mitochondria are supposed to ' +
           'be destroyed, and in this disease are not.',
  },
  membrane: {
    label: 'Plasma membrane', color: 0x6e7ea0,
    anchor: [0, 62, 0], radius: 40, shell: { kind: 'cell', rx: 96, ry: 68, rz: 96 }, labelAt: [0, 80, 58],
    blurb: 'Receptor-proximal signalling SAMHD1 restrains, principally TLR4.',
  },
  clinical: {
    label: 'Body — clinical outcome', color: 0xe0674f,
    anchor: [0, -104, 0], radius: 60, shell: null, labelAt: [0, -132, 0],
    blurb: 'Organism-level consequences. These sit OUTSIDE the cell deliberately: they are ' +
           'phenotypes reached by several inferential steps, not activities of the protein, ' +
           'and the distance on screen is the distance in the argument.',
  },
};

// ── Tiers ────────────────────────────────────────────────────────────────
// `ring` is the distance from the SAMHD1 hub at which this tier is laid out —
// the visual grammar of the whole atlas.
export const TIERS = {
  regulation: {
    label: 'Regulation of SAMHD1', color: 0xffd75e, shape: 'cone', size: 2.2, ring: 0,
    blurb: 'Post-translational marks that CONTROL SAMHD1. These are inputs, not jobs — ' +
           'they point INTO the protein. T592 phosphorylation by CDK1/2 is the best ' +
           'characterised: it does not abolish dNTPase activity but switches off ' +
           'restriction, which is why cycling cells lose the protection resting ones have.',
  },
  function: {
    label: 'Molecular function', color: 0x4de0c0, shape: 'octa', size: 2.7, ring: 1,
    blurb: 'What the protein itself does. These are the claims closest to the biochemistry ' +
           'and the ones a loss-of-function variant acts on most directly.',
  },
  cellular: {
    label: 'Cellular consequence', color: 0x7fd97a, shape: 'sphere', size: 2.4, ring: 2,
    blurb: 'What changes in the cell when a function above is impaired. One step of ' +
           'inference away from the protein.',
  },
  systemic: {
    label: 'Body / clinical outcome', color: 0xe0674f, shape: 'box', size: 2.6, ring: 3,
    blurb: 'Organism-level phenotypes. Several steps of inference away, and graded ' +
           'accordingly — a cancer-risk association is not the same kind of claim as an ' +
           'enzyme assay, and this atlas does not draw them the same way.',
  },
};

// ── Domains — the canonical groupings ────────────────────────────────────
// How SAMHD1 is actually taught: the protein at the centre, core roles around
// it, each mapping onto a field where it matters. The workbooks' 16 categories
// are too granular to group by and correspond to nothing anyone teaches; these
// are the divisions a reader will already have seen in a review figure.
//
// `canonical: false` marks the one domain that is NOT in that published
// framing. The mitochondrial literature is newer than the four-role figure, and
// it is central to this variant — but extending a figure and implying the
// extension was always in it are different things. The sibling atlas marks its
// IFN-γ stream the same way and for the same reason.
export const DOMAINS = {
  dntp: {
    label: 'dNTP balance', field: 'Cell metabolism', color: 0x7fd97a, canonical: true,
    blurb: 'The enzymatic core. A dGTP-activated triphosphohydrolase holding the dNTP pool ' +
           'in the band replication needs, plus the cell-cycle control that runs on it. ' +
           'Excess is as mutagenic as scarcity.',
  },
  genome: {
    label: 'Genome integrity', field: 'Tumour development', color: 0xff8e5c, canonical: true,
    blurb: 'Repair and replication: end resection with CtIP/MRE11, R-loop resolution, fork ' +
           'protection, telomeres. The cancer associations sit here because they are one ' +
           'genome-maintenance lesion seen in several tissues, not several separate jobs.',
  },
  viral: {
    label: 'Viral restriction', field: 'Intrinsic immunity', color: 0x53a8ff, canonical: true,
    blurb: 'What SAMHD1 is best known for — HIV-1 and other lentiviruses, DNA viruses, and ' +
           'LINE-1. T592 phosphorylation belongs here rather than with the dNTPase: it ' +
           'switches RESTRICTION off without abolishing hydrolase activity, which is why a ' +
           'cycling cell loses protection a resting one has.',
  },
  immune: {
    label: 'Immune modulation', field: 'Autoimmunity', color: 0xff7ad9, canonical: true,
    blurb: 'Holding sterile inflammation down — cGAS–STING, NF-κB, type-I interferon — ' +
           'largely by denying sensors their ligand rather than by inhibiting them directly. ' +
           'This is the arm that fails loudest in an interferonopathy.',
  },
  mito: {
    label: 'Mitochondrial integrity', field: 'Not in the canonical figure', color: 0x2fbf8f, canonical: false,
    blurb: 'NOT one of the four canonical domains — that framing predates this literature. ' +
           'Added because it is load-bearing for this variant: the VDAC1 interaction, ' +
           'membrane potential, and the mtDNA leak that becomes a cGAS ligand. It is where ' +
           'the metabolic arm and the immune arm turn out to be the same arm.',
  },
};

// ── Evidence ─────────────────────────────────────────────────────────────
// Same S/G/I key as the immune atlas and "The Mitochondrion Under Siege", so
// the two visualisations can be read side by side without relearning anything.
export const EVIDENCE = {
  S: { label: 'Demonstrated for SAMHD1',        color: 0x46d18a },
  G: { label: 'Established elsewhere, imported', color: 0xd1a246 },
  I: { label: 'Inferred — placement is reasoning', color: 0xe0674f },
};

// ── Criticality, carried from the workbooks ──────────────────────────────
export const CRITICALITY = {
  Critical: { weight: 1.0,  label: 'Critical' },
  High:     { weight: 0.72, label: 'High' },
  Medium:   { weight: 0.5,  label: 'Medium' },
};

// ── Link kinds ───────────────────────────────────────────────────────────
export const LINK_KINDS = {
  controls:  { color: 0xffd75e, label: 'controls',        sign: +1, dashed: true },
  performs:  { color: 0x4de0c0, label: 'performs',        sign: +1 },
  maintains: { color: 0x7fd97a, label: 'maintains',       sign: +1 },
  prevents:  { color: 0xff5c5c, label: 'prevents',        sign: -1 },
  drives:    { color: 0xe0674f, label: 'drives',          sign: +1 },
};

// ── States ───────────────────────────────────────────────────────────────
// Only two, and unlike the immune atlas's twelve derived arms these are NOT
// computed. The 2026 workbook states a functional-loss estimate per function
// with a citation attached, so the comparison is read straight off authored,
// sourced data rather than propagated through a graph. That is a stronger
// footing, and it is why this atlas can show a percentage and the other cannot.
export const STATES = {
  wt: {
    label: 'Wild type', short: 'WT',
    blurb: 'Two working copies. Every function at full capacity — the reference the ' +
           'variant is measured against.',
  },
  a565t: {
    label: 'p.A565T heterozygous', short: 'A565T',
    blurb: 'One working copy. Each function dims by the functional loss the 2026 analysis ' +
           'estimates for it. Note this is not uniformly 50%: SAMHD1 is an obligate ' +
           'TETRAMER, so a heterozygote assembles mixed tetramers and activities that ' +
           'require all four subunits fall further than gene dosage alone would predict.',
  },
};

export const SETTINGS = {
  // The scene spans y +68 (membrane) to −104 (clinical ring), so it is NOT
  // centred on the origin. Framing it from [0,0,0] cuts the clinical outcomes
  // off the bottom of the viewport — which hides an entire tier.
  // Kept near-frontal (about 13 degrees off axis) on purpose. The clinical tier
  // is a row along x, and from a strongly oblique angle a straight row reads as
  // a diagonal smear rather than as one rank of outcomes. Enough offset to
  // still show depth, not enough to shear the row.
  cameraStart: [64, 22, 262],
  cameraTarget: [0, -20, 0],
  // Must reach the clinical tier. Those nodes sit ~306 units from the default
  // camera, so a fade ending at 300 silently hid an entire rank of labels —
  // the tier was on screen with nothing naming it.
  labelFadeStart: 320,
  labelFadeEnd: 480,
};
