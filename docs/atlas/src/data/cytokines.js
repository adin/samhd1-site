/**
 * cytokines.js — Loop C: the IFN-γ loop, and the IL-12/IL-23 → Th1/Th17 axis.
 *
 * ── Why this module exists ────────────────────────────────────────────────
 * The published chain is usually written
 *
 *     SAMHD1 → dNTP↑ → mtDNA → cGAS → NLRP3 → IFN-γ
 *
 * and every step after NLRP3 is a compression. NLRP3 does not make IFN-γ. It
 * cannot: the affected cell has no IFN-γ gene programme running. What actually
 * happens needs a second cell and six more steps:
 *
 *     NLRP3 → caspase-1 → pro-IL-18 cleaved → mature IL-18 SECRETED
 *       → crosses to a neighbouring NK cell / Th1 lymphocyte
 *       → IL-18R1/IL-18RAP → MyD88 → IRAK → NF-κB      (signal A)
 *       → IL-12R (from IL-12 made by the same inflamed myeloid cell)
 *          → TYK2/JAK2 → STAT4 → T-bet                  (signal B)
 *       → A + B together transactivate IFNG
 *       → IFN-γ secreted BACK onto the affected cell
 *       → IFNGR1/2 → JAK1 + JAK2 → STAT1 homodimer (GAF) → GAS elements
 *       → IRF1, CXCL9/10/11, CIITA/MHC-II, NOS2, and M1 polarisation
 *       → M1 metabolic reprogramming raises mtROS
 *       → mtROS drives ox-mtDNA and VDAC1 oligomerisation — back into Loops A and B.
 *
 * That last step is what makes it a loop rather than an output. It is also
 * genuinely paracrine, which is why it is invisible in a single-cell diagram
 * and why the responder compartment exists in this atlas.
 *
 * IL-18BP is the natural brake and is the node most worth watching: it is
 * itself IFN-γ-inducible, so the loop builds its own inhibitor — and, like
 * USP18 in the type-I arm, can be present, engaged, and still losing.
 */

export const nodes = [
  // ── The responder cell ───────────────────────────────────────────────
  {
    id: 'responder-cell', label: 'NK / Th1 cell', full: 'Neighbouring NK cell or Th1 lymphocyte — the IFN-γ source',
    compartment: 'responder', klass: 'cell', pathways: ['ifn-gamma', 'th17'],
    pos: [-112, 96, 18], lod: 1, evidence: 'G', key: true,
    summary: 'IFN-γ is made HERE, not in the cell whose mitochondria are failing. Loop C is paracrine by construction.',
    detail: 'NK cells respond fastest and need no antigen; Th1 cells sustain the response. Both read the same two ' +
      'signals — IL-18 through a MyD88 receptor and IL-12 through a STAT4 receptor — and neither alone is sufficient.',
    samhd1: 'This is the step that is missing from the compressed chain. An inflammasome running constitutively in ' +
      'one cell recruits a second cell into the disease, and that second cell sends back a cytokine that damages the ' +
      'first one further.',
  },
  {
    id: 'th17-cell', label: 'Th17 / ILC3 / γδ T', full: 'IL-17-producing lymphocyte populations',
    compartment: 'responder', klass: 'cell', pathways: ['th17'],
    pos: [-96, 78, 34], lod: 1, evidence: 'G',
    summary: 'The IL-23-responsive compartment. In enthesitis the dominant producers are tissue-resident γδ T and ILC3, not circulating Th17.',
    detail: 'This distinction is clinically load-bearing: entheseal IL-17 comes largely from resident innate-like ' +
      'lymphocytes responding to IL-23, which is why the psoriatic arthritis arm can run without a classical ' +
      'autoantigen or autoantibody.',
    refs: ['fragoulis2023'],
  },

  // ── IL-18 arm (signal A) ─────────────────────────────────────────────
  {
    id: 'il18r', label: 'IL-18R1 / IL-18RAP', full: 'Interleukin-18 receptor complex',
    compartment: 'responder', klass: 'receptor', pathways: ['ifn-gamma', 'inflammasome'],
    pos: [-96, 108, 6], lod: 1, evidence: 'G',
    summary: 'An IL-1-family receptor: TIR domains, MyD88, IRAK — the same module TLRs use.',
    detail: 'Because IL-18 signals through MyD88, the inflammasome output reaches NF-κB in the responder cell by ' +
      'exactly the route a pathogen would use. The cell cannot distinguish sterile metabolic inflammasome activity ' +
      'from infection.',
  },
  {
    id: 'il18bp', label: 'IL-18BP', full: 'Interleukin-18 binding protein — the constitutive IL-18 decoy',
    compartment: 'extracellular', klass: 'effector', pathways: ['ifn-gamma', 'isg'],
    pos: [22, 100, 34], lod: 2, evidence: 'G',
    summary: 'A high-affinity secreted decoy that neutralises free IL-18. Itself IFN-γ-inducible — the loop builds its own brake.',
    detail: 'The clinically useful readout is not total IL-18 but FREE IL-18 — the fraction unbound by IL-18BP. ' +
      'Total IL-18 can look unremarkable while free IL-18 is high, which is the same measurement trap the concept ' +
      'note describes for serum cytokines generally. Recombinant IL-18BP (tadekinig alfa) exists as a therapeutic.',
    samhd1: 'Worth measuring alongside free ISG15 in this framework: both are brakes that are induced by the very ' +
      'signal they oppose, and both are candidates for being present, engaged, and overwhelmed.',
  },

  // ── IL-12 arm (signal B) ─────────────────────────────────────────────
  {
    id: 'il12', label: 'IL-12 (p35/p40)', full: 'Interleukin-12 — the Th1-polarising heterodimer',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['ifn-gamma', 'th17'],
    pos: [-30, 96, 26], lod: 1, evidence: 'G',
    summary: 'Made by activated myeloid cells. Shares its p40 subunit with IL-23 — which is why one antibody can hit both.',
    detail: 'The p40 sharing is the reason ustekinumab (anti-p40) suppresses the Th1 and Th17 arms together while ' +
      'anti-p19 agents spare IL-12. In a disease with both an IFN-γ arm and a Th17 arm, that choice is not neutral.',
  },
  {
    id: 'il12r', label: 'IL-12Rβ1/β2', full: 'Interleukin-12 receptor',
    compartment: 'responder', klass: 'receptor', pathways: ['ifn-gamma'],
    pos: [-124, 108, 26], lod: 2, evidence: 'G',
    summary: 'Signals through TYK2 and JAK2 → STAT4. The TYK2 dependence is why TYK2 inhibitors reach this arm.',
    drugs: ['brepocitinib'],
  },
  {
    id: 'stat4', label: 'STAT4', full: 'Signal transducer and activator of transcription 4',
    compartment: 'responder', klass: 'tf', pathways: ['ifn-gamma'],
    pos: [-118, 88, 4], lod: 2, evidence: 'G',
    summary: 'The Th1 STAT. Induces T-bet, which is what actually licenses the IFNG locus.',
  },
  {
    id: 'tbet', label: 'T-bet (TBX21)', full: 'T-box transcription factor 21 — master Th1 regulator',
    compartment: 'responder', klass: 'tf', pathways: ['ifn-gamma'],
    pos: [-106, 80, 12], lod: 1, evidence: 'G',
    summary: 'Remodels the IFNG locus. Without it, IL-18 and IL-12 signalling produce no interferon-γ.',
    detail: 'T-bet is the step that makes the two-signal requirement real: IL-18\'s NF-κB arm cannot transactivate ' +
      'a closed locus, and IL-12\'s STAT4 arm is what opens it.',
  },

  // ── IFN-γ effector arm, back on the affected cell ────────────────────
  {
    id: 'gaf', label: 'STAT1 : STAT1 (GAF)', full: 'Gamma-activated factor — the STAT1 homodimer',
    compartment: 'cytosol', klass: 'complex', pathways: ['ifn-gamma', 'ifn-jak'],
    pos: [24, 44, -14], lod: 1, evidence: 'G',
    summary: 'A different dimer from ISGF3, reading a different element (GAS, not ISRE) — but drawing on the same STAT1 pool.',
    detail: 'Type-I and type-II interferon compete for STAT1. That shared dependency is why JAK1 inhibition dampens ' +
      'both arms, and why STAT1 abundance is a better readout of total interferon burden than either ligand alone.',
  },
  {
    id: 'cxcl9-11', label: 'CXCL9/10/11', full: 'Interferon-γ-induced chemokines (MIG, IP-10, I-TAC)',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['ifn-gamma', 'isg'],
    pos: [56, 92, -22], lod: 1, evidence: 'G',
    summary: 'CXCR3 ligands that recruit more Th1 and NK cells — the loop\'s amplification step at tissue level.',
    samhd1: 'CXCL10 is one of the four assays the concept note directs workup toward (with IFN-α/β, free ISG15 and ' +
      'ISG scoring) precisely because it reports intracellular interferon activity when a standard cytokine panel ' +
      'reads normal.',
    refs: ['docConcept', 'tesser2025'],
  },
  {
    id: 'ciita', label: 'CIITA → MHC-II', full: 'Class II transactivator and MHC class II induction',
    compartment: 'nucleus', klass: 'tf', pathways: ['ifn-gamma'],
    pos: [-20, 18, -28], lod: 2, evidence: 'G',
    summary: 'IFN-γ turns non-professional cells into antigen presenters — how an innate loop acquires an adaptive audience.',
  },
  {
    id: 'nos2', label: 'NOS2 / iNOS', full: 'Inducible nitric oxide synthase',
    compartment: 'cytosol', klass: 'enzyme', pathways: ['ifn-gamma', 'metabolic'],
    pos: [40, 26, -30], lod: 2, evidence: 'G',
    summary: 'IFN-γ + NF-κB output. NO nitrosylates and inhibits Complexes I and IV — an interferon-driven respiratory lesion.',
    detail: 'NOS2 induction is one of the most direct routes from a cytokine to a bioenergetic defect: nitric oxide ' +
      'competes with oxygen at cytochrome c oxidase and S-nitrosylates Complex I.',
  },
  {
    id: 'm1', label: 'M1 polarisation', full: 'Classically activated (M1) macrophage programme',
    compartment: 'cytosol', klass: 'outcome', pathways: ['ifn-gamma', 'metabolic', 'mito'],
    pos: [46, 16, -18], lod: 1, evidence: 'S', key: true,
    summary: 'IFN-γ locks macrophages into aerobic glycolysis with a broken TCA cycle, high mtROS, and succinate accumulation.',
    detail: 'M1 is where Loop C re-enters the mitochondrion. The programme itself raises mtROS and remodels the TCA ' +
      'cycle — so an interferon signal arriving from a neighbouring cell physically worsens the organelle damage that ' +
      'started the cascade. Succinate accumulation from the broken cycle stabilises HIF-1α under normoxia, which is ' +
      'the Warburg shift already in this figure.',
    samhd1: 'Samhd1-KO drives M1 skewing directly, and does so alongside ΔΨm collapse. The cell arrives at this state ' +
      'from two directions at once: its own genetic lesion, and the IFN-γ its neighbours send back.',
    refs: ['xu2023vdac1', 'tannahill2013'],
  },

  // ── IL-23 / IL-17 arm ────────────────────────────────────────────────
  {
    id: 'il23r', label: 'IL-23R / IL-12Rβ1', full: 'Interleukin-23 receptor complex',
    compartment: 'responder', klass: 'receptor', pathways: ['th17'],
    pos: [-86, 68, 44], lod: 2, evidence: 'G',
    summary: 'JAK2/TYK2 → STAT3. IL23R variants are among the strongest genetic associations in psoriatic disease.',
    drugs: ['brepocitinib'],
  },
  {
    id: 'stat3', label: 'STAT3', full: 'Signal transducer and activator of transcription 3',
    compartment: 'responder', klass: 'tf', pathways: ['th17'],
    pos: [-98, 62, 42], lod: 2, evidence: 'G',
    summary: 'The Th17 STAT, driven by IL-6 and IL-23. Induces RORγt.',
  },
  {
    id: 'rorgt', label: 'RORγt (RORC)', full: 'Retinoic acid receptor-related orphan receptor gamma t',
    compartment: 'responder', klass: 'tf', pathways: ['th17'],
    pos: [-90, 56, 30], lod: 1, evidence: 'G',
    summary: 'Master Th17 transcription factor. IL-23 does not create Th17 cells so much as stabilise and license them.',
  },
  {
    id: 'il17ra', label: 'IL-17RA / RC', full: 'Interleukin-17 receptor on the target tissue',
    compartment: 'membrane', klass: 'receptor', pathways: ['th17'],
    pos: [-8, 62, -44], lod: 2, evidence: 'G',
    summary: 'Signals through ACT1 → TRAF6 → NF-κB in fibroblasts, synoviocytes and keratinocytes.',
    detail: 'IL-17 is a weak cytokine alone and a potent one with TNF-α. The synergy is why enthesitis responds to ' +
      'blocking either arm and why the two appear together in every mechanistic account of psoriatic disease.',
  },
  {
    id: 'act1', label: 'ACT1 (TRAF3IP2)', full: 'NF-κB activator 1 — the IL-17R adaptor',
    compartment: 'cytosol', klass: 'adaptor', pathways: ['th17', 'nfkb'],
    pos: [-14, 46, -40], lod: 2, evidence: 'G',
    summary: 'U-box E3 that couples IL-17R to TRAF6 → NF-κB — closing an IL-17 → NF-κB → IL-23 feed-forward at tissue level.',
  },
  {
    id: 'il22', label: 'IL-22 / GM-CSF', full: 'Additional Th17-lineage effector cytokines',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['th17'],
    pos: [34, 96, -40], lod: 2, evidence: 'G',
    summary: 'Epithelial proliferation (IL-22) and myeloid recruitment (GM-CSF) — the rest of the Th17 output.',
  },
];

export const edges = [
  // ── Loop C, step by step: the missing links after NLRP3 ──────────────
  { from: 'il18', to: 'il18r', kind: 'bind', label: 'STEP 1 — mature IL-18 crosses to a NEIGHBOURING cell', pathways: ['ifn-gamma', 'inflammasome'], evidence: 'G', loop: 'C', bend: 0.2 },
  { from: 'il18bp', to: 'il18', kind: 'inhibit', label: 'decoy — only FREE IL-18 signals', pathways: ['ifn-gamma'], evidence: 'G' },
  { from: 'il18r', to: 'myd88', kind: 'activate', label: 'STEP 2 — TIR domain, the same module TLRs use', pathways: ['ifn-gamma'], evidence: 'G', loop: 'C', bend: 0.3 },
  { from: 'il12', to: 'il12r', kind: 'bind', label: 'STEP 3 — second signal, from the same inflamed myeloid cell', pathways: ['ifn-gamma'], evidence: 'G', loop: 'C' },
  { from: 'nfkb-targets', to: 'il12', kind: 'produce', label: 'IL-12p35/p40 from the activated myeloid cell', pathways: ['nfkb', 'ifn-gamma'], evidence: 'G' },
  { from: 'il12r', to: 'stat4', kind: 'phos', label: 'STEP 4 — TYK2/JAK2 → STAT4', pathways: ['ifn-gamma'], evidence: 'G', loop: 'C' },
  { from: 'stat4', to: 'tbet', kind: 'produce', label: 'STEP 5 — T-bet opens the IFNG locus', pathways: ['ifn-gamma'], evidence: 'G', loop: 'C' },
  { from: 'tbet', to: 'responder-cell', kind: 'activate', label: 'Th1/NK effector programme', pathways: ['ifn-gamma'], evidence: 'G', loop: 'C' },
  { from: 'il18r', to: 'responder-cell', kind: 'activate', pathways: ['ifn-gamma'], evidence: 'G' },
  { from: 'responder-cell', to: 'ifng', kind: 'produce', label: 'STEP 6 — IFN-γ requires BOTH signals; neither alone suffices', pathways: ['ifn-gamma'], evidence: 'G', loop: 'C' },

  // ── IFN-γ comes back onto the affected cell ──────────────────────────
  { from: 'ifng', to: 'ifngr', kind: 'bind', label: 'STEP 7 — paracrine return to the cell that started it', pathways: ['ifn-gamma', 'ifn-jak'], evidence: 'G', loop: 'C' },
  { from: 'stat1', to: 'gaf', kind: 'bind', label: 'STEP 8 — STAT1 homodimer, not ISGF3', pathways: ['ifn-gamma', 'ifn-jak'], evidence: 'G', loop: 'C' },
  { from: 'gaf', to: 'gas', kind: 'translocate', label: 'GAS elements — a different programme from ISRE', pathways: ['ifn-gamma'], evidence: 'G', loop: 'C' },
  { from: 'gas', to: 'cxcl9-11', kind: 'produce', label: 'CXCR3 ligands recruit more Th1/NK — tissue-level amplification', pathways: ['ifn-gamma'], evidence: 'G', loop: 'C' },
  { from: 'gas', to: 'ciita', kind: 'produce', pathways: ['ifn-gamma'], evidence: 'G' },
  { from: 'gas', to: 'nos2', kind: 'produce', pathways: ['ifn-gamma'], evidence: 'G' },
  { from: 'gas', to: 'il18bp', kind: 'produce', label: 'the loop induces its own brake — as the type-I arm does with USP18', pathways: ['ifn-gamma', 'isg'], evidence: 'G' },
  { from: 'gas', to: 'm1', kind: 'produce', label: 'STEP 9 — classical macrophage activation', pathways: ['ifn-gamma', 'metabolic'], evidence: 'S', loop: 'C' },
  { from: 'cxcl9-11', to: 'responder-cell', kind: 'drive', label: 'recruits more responders — Loop C amplifies at tissue scale', pathways: ['ifn-gamma'], evidence: 'G', loop: 'C', bend: 0.35 },

  // ── And back into the mitochondrion: Loop C closes ───────────────────
  { from: 'm1', to: 'mtros', kind: 'drive', label: 'STEP 10 — M1 metabolic reprogramming raises mtROS', pathways: ['ifn-gamma', 'mito'], evidence: 'S', loop: 'C' },
  { from: 'm1', to: 'succinate', kind: 'produce', label: 'broken TCA cycle → succinate accumulation', pathways: ['ifn-gamma', 'metabolic'], evidence: 'G', loop: 'C' },
  { from: 'nos2', to: 'etc-i', kind: 'inhibit', label: 'NO S-nitrosylates Complex I', pathways: ['ifn-gamma', 'mito'], evidence: 'G' },
  { from: 'nos2', to: 'etc-iv', kind: 'inhibit', label: 'NO competes with O₂ at cytochrome c oxidase', pathways: ['ifn-gamma', 'mito'], evidence: 'G' },
  { from: 'm1', to: 'deltapsi', kind: 'inhibit', label: 'M1 skewing accompanies ΔΨm collapse in Samhd1-KO', pathways: ['ifn-gamma', 'mito'], evidence: 'S', refs: ['xu2023vdac1'] },

  // ── IL-23 / IL-17 arm ────────────────────────────────────────────────
  { from: 'il23', to: 'il23r', kind: 'bind', pathways: ['th17'], evidence: 'G' },
  { from: 'il23r', to: 'stat3', kind: 'phos', label: 'JAK2/TYK2 → STAT3', pathways: ['th17'], evidence: 'G' },
  { from: 'il6', to: 'stat3', kind: 'activate', label: 'IL-6 is the other STAT3 input — with TGF-β it initiates Th17', pathways: ['th17'], evidence: 'G' },
  { from: 'stat3', to: 'rorgt', kind: 'produce', pathways: ['th17'], evidence: 'G' },
  { from: 'rorgt', to: 'th17-cell', kind: 'activate', label: 'licenses the IL-17 programme', pathways: ['th17'], evidence: 'G' },
  { from: 'th17-cell', to: 'il17a', kind: 'produce', pathways: ['th17'], evidence: 'G' },
  { from: 'th17-cell', to: 'il22', kind: 'produce', pathways: ['th17'], evidence: 'G' },
  { from: 'il1b', to: 'th17-cell', kind: 'activate', label: 'IL-1β is a Th17-stabilising signal — Loop B feeds the Th17 arm directly', pathways: ['th17', 'inflammasome'], evidence: 'G', bend: 0.25 },
  { from: 'il17a', to: 'il17ra', kind: 'bind', pathways: ['th17'], evidence: 'G' },
  { from: 'il17ra', to: 'act1', kind: 'activate', pathways: ['th17'], evidence: 'G' },
  { from: 'act1', to: 'traf6', kind: 'activate', label: 'IL-17 → NF-κB in the target tissue — a feed-forward at tissue level', pathways: ['th17', 'nfkb'], evidence: 'G', bend: 0.3 },
  { from: 'tnfa', to: 'il17ra', kind: 'activate', label: 'TNF-α synergy — IL-17 is weak alone and potent with it', pathways: ['th17'], evidence: 'G' },

  // ── Clinical
  { from: 'ifng', to: 'm1', kind: 'drive', pathways: ['ifn-gamma'], evidence: 'G' },
  { from: 'cxcl9-11', to: 'naci', kind: 'drive', label: 'CXCL10 as a NACI workup biomarker', pathways: ['clinical'], evidence: 'I' },
  { from: 'il22', to: 'psa', kind: 'drive', pathways: ['clinical'], evidence: 'G' },
];
