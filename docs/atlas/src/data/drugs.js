/**
 * drugs.js — pharmacologic scalpels and clinical outcomes.
 *
 * The ten study arms of the ex vivo proposal, placed at the anatomical position
 * in the cascade where each one actually cuts. Reading them in place makes the
 * design's logic visible: Arms 7–10 are four scalpels at four distinct depths
 * through the same mitochondrial cascade, chosen so that their readout patterns
 * can only be explained one way.
 *
 * Layers `drugs` and `clinical` are OFF by default so the biology reads clean.
 */

export const nodes = [
  // ── Drugs ────────────────────────────────────────────────────────────
  {
    id: 'upadacitinib', label: 'upadacitinib', full: 'JAK1-selective inhibitor — Arm 2 (and the shared brake in Arms 4, 6)',
    compartment: 'cytosol', klass: 'drug', pathways: ['drugs'],
    pos: [-28, 60, 6], lod: 1, evidence: 'S', key: true,
    summary: 'Arrests IFNAR signal transduction at JAK1 — the only node in this framework with in-human response data.',
    detail: 'Short-course JAK1 inhibition resolves the inflammatory arm of this disease almost completely while ' +
      'leaving core fatigue and metabolic dysfunction largely intact. That split is the empirical basis for the ' +
      'two-arm (and later three-arm) model: a JAK–STAT-driven inflammatory component, and a metabolic/bioenergetic ' +
      'component that requires upstream rescue.',
    samhd1: 'Predicted NOT to change: dNTP pools, R-loops, autophagy flux, p-TBK1(Ser172), ANKIB1 protein, IL-1β, or ' +
      'ASC speck burden. Everything it fails to move is a map of the disease it does not treat.',
    refs: ['doc10arm', 'fremond2023', 'mihaylova2024'],
  },
  {
    id: 'brepocitinib', label: 'brepocitinib / TYK2i', full: 'Dual JAK1/TYK2 or selective TYK2 inhibitors',
    compartment: 'cytosol', klass: 'drug', pathways: ['drugs'],
    pos: [8, 60, 28], lod: 2, evidence: 'G',
    summary: 'Alternative to JAK1-only blockade; adds IL-12/IL-23 coverage relevant to the Th17/psoriatic arm.',
    refs: ['docGlass'],
  },
  {
    id: 'amlexanox', label: 'amlexanox', full: 'TBK1/IKKε inhibitor — Arm 5 (and Arm 6 in combination)',
    compartment: 'cytosol', klass: 'drug', pathways: ['drugs'],
    pos: [2, 36, 16], lod: 1, evidence: 'G', key: true,
    summary: 'Cuts interferon production at source rather than blocking its reception. Also an established metabolic agent.',
    detail: 'Because TBK1/IKKε is the master switch linking cGAS–STING to IRF3/7 transactivation, this clamp suppresses ' +
      'IFN production upstream of everything JAK inhibition touches. Reilly et al. showed the same target improves ' +
      'obesity-related metabolic dysfunction, so it lands on both arms at once.',
    samhd1: 'CRITICAL TRADEOFF, and the most important safety claim in the study: by suppressing IRF3/7-mediated ' +
      'SAMHD1 transcription, amlexanox may reduce total SAMHD1 protein in a cell that is ALREADY haploinsufficient. ' +
      'As total protein falls, the p-T592/total ratio shifts toward dNTPase-active tetramers while functionally ' +
      'starving the phospho-dependent genome-stability roles. If DR-GFP efficiency or S9.6 R-loop burden WORSENS in ' +
      'Arm 5 despite inflammatory improvement, that is direct human evidence of a genome-stability/immune-control ' +
      'tradeoff — and an argument for pulsed rather than continuous dosing.',
    refs: ['bjork2025', 'reilly2013', 'doc10arm', 'yang2016irf3'],
  },
  {
    id: 'polyiclc', label: 'poly-ICLC (Hiltonol)', full: 'TLR3 agonist — Arm 3 (Arm 4 with JAK1 shielding)',
    compartment: 'endosome', klass: 'drug', pathways: ['drugs'],
    pos: [-16, -24, 60], lod: 1, evidence: 'S',
    summary: 'The "upward" direction: drive IRF3 to INDUCE more SAMHD1 protein in a haploinsufficient cell.',
    detail: 'Arm 3 alone is expected to improve genomic-stability endpoints while provoking an interferon surge. Arm 4 ' +
      'adds upadacitinib to test whether the genome-stability gain can be uncoupled from the surge. Dosing follows ' +
      'the published ME/CFS poly I:C PBMC protocol of Che et al. 2025 (0.2–20 µg/ml, 12–48 h).',
    refs: ['yang2016irf3', 'che2025', 'doc10arm'],
  },
  {
    id: 'vbit4', label: 'VBIT-4', full: 'VDAC1 oligomerisation inhibitor — Arm 7 (outer mitochondrial membrane)',
    compartment: 'mitochondrion', klass: 'drug', pathways: ['drugs'],
    pos: [80, 16, 34], lod: 1, evidence: 'S',
    summary: 'Closes the macropore. In SAMHD1-KO monocytes it prevents mtDNA release and FULLY abolishes the spontaneous ISG response.',
    detail: 'Dose constraint is non-negotiable: above ~10 µM VBIT-4 produces VDAC1-INDEPENDENT membrane disruption, so ' +
      'the arm runs a strict 5 µM ceiling with PI/annexin-V viability gating at every timepoint. ISG suppression at ' +
      'non-cytotoxic concentrations is required for the result to mean anything.',
    refs: ['rabinowitz2025', 'xu2023vdac1', 'vbit4mem2025', 'doc10arm'],
  },
  {
    id: 'imsb301', label: 'IMSB301', full: 'Oral selective cGAS inhibitor — Arm 8 (cytosolic sensor)',
    compartment: 'cytosol', klass: 'drug', pathways: ['drugs'],
    pos: [32, 0, 58], lod: 1, evidence: 'S',
    summary: 'Intercepts cytosolic DNA AFTER mitochondrial egress. Blind to the ox-mtDNA/NLRP3 arm by construction.',
    detail: 'Predicted outcome is the single highest-value result in Axis 3: ISG and IFN normalised, while IL-1β, ASC ' +
      'specks and caspase-1 p20 stay UNCHANGED. With Arm 9\'s mirror-image profile, that pair is the definitive ' +
      'Loop A/B independence matrix in primary human heterozygous cells.',
    refs: ['han2026', 'immunesensor', 'doc10arm'],
  },
  {
    id: 'mcc950', label: 'MCC950', full: 'NLRP3 inflammasome inhibitor — Arm 9 (cytosolic sensor)',
    compartment: 'cytosol', klass: 'drug', pathways: ['drugs'],
    pos: [22, -24, 16], lod: 1, evidence: 'G',
    summary: 'Binds the NACHT-domain Walker B motif, blocking ATPase-driven assembly downstream of BOTH ox-mtDNA and MSU inputs.',
    detail: 'Predicted mirror image of Arm 8: IL-1β, IL-18, ASC specks and caspase-1 p20 normalised; ISG signature ' +
      'unchanged. Residual IL-1β despite confirmed absence of ASC specks would implicate a caspase-1-independent ' +
      'maturation route — which points at allopurinol as an adjunct.',
    refs: ['coll2019', 'doc10arm'],
  },
  {
    id: 'plp', label: 'PLP / vitamin B6', full: 'Pyridoxal 5′-phosphate — SLC25A33 (PNC1) transport inhibitor, Arm 10 (inner membrane)',
    compartment: 'mitochondrion', klass: 'drug', pathways: ['drugs'],
    pos: [34, 16, 12], lod: 1, evidence: 'I', key: true,
    summary: 'The only arm upstream of BOTH NLRP3 and VDAC1 — and clinically available over the counter.',
    detail: 'The bifurcating prediction is what makes this arm worth running:\n' +
      '  Outcome A — Loop B suppressed, Loop A intact: the two loops are independently gated, and VDAC1 ' +
      'oligomerisation is driven by existing mtROS tone rather than by PNC1 substrate flux.\n' +
      '  Outcome B — both suppressed: PNC1-driven mtROS is the dominant upstream driver, and the therapeutic target ' +
      'hierarchy shifts to the inner membrane.\n' +
      '  Null — neither: heterozygous dNTP excess is below the SLC25A33 overload threshold, meaning this arm needs ' +
      'near-complete dNTPase loss to engage. Equally informative, and it defines the haploinsufficiency threshold.',
    refs: ['dolce2001', 'lunetti2016', 'kim2025', 'doc10arm'],
  },
  {
    id: 'allopurinol', label: 'allopurinol', full: 'Xanthine oxidase inhibitor — candidate adjunct, not a current arm',
    compartment: 'cytosol', klass: 'drug', pathways: ['drugs'],
    pos: [4, -32, 56], lod: 2, evidence: 'I',
    summary: 'Would cut the GOLD stream at urate production if MSU crystals prove to be a real third NLRP3 input.',
    refs: ['martinon2006', 'doc10arm'],
  },
  {
    id: 'abe8e', label: 'ABE8e-YA base editor', full: 'Adenine base editor for A·T → G·C reversion of c.1693G>A',
    compartment: 'nucleus', klass: 'drug', pathways: ['drugs'],
    pos: [-14, 18, 40], lod: 2, evidence: 'I',
    summary: 'The curative horizon: a clean transition mutation is a premier base-editing candidate, with no double-strand break required.',
    refs: ['docGlass'],
  },

  // ── Clinical outcomes ────────────────────────────────────────────────
  {
    id: 'naci', label: 'NACI', full: 'Non-Acute Chronic Interferonopathy — the proposed diagnostic category',
    compartment: 'extracellular', klass: 'outcome', pathways: ['clinical'],
    pos: [0, -96, 32], lod: 1, evidence: 'I', key: true,
    summary: 'Tonic, source-driven interferon activation with no flare-remit cyclicity and a seronegative cytokine profile.',
    detail: 'Distinguished from AGS, SAVI and CANDLE by kinetics and biomarkers rather than by signalling architecture: ' +
      'non-acute (persistently engaged, not episodic), chronic (sustained over decades, progressive rather than ' +
      'episodic), and acting through intracellular ISG induction rather than elevated serum cytokines. That last ' +
      'property is the clinically ' +
      'actionable part — it predicts that standard cytokine panels will read normal in active multi-system disease, ' +
      'and it redirects workup toward IFN-α/β, free ISG15, CXCL10 and ISG scoring.',
    samhd1: 'Proposed as a descriptive category for this patient\'s pattern, explicitly NOT an established clinical ' +
      'entity. It requires independent validation before use outside the concept note.',
    refs: ['docConcept', 'tesser2025'],
  },
  {
    id: 'mecfs', label: 'ME/CFS', full: 'Myalgic encephalomyelitis / chronic fatigue syndrome',
    compartment: 'extracellular', klass: 'outcome', pathways: ['clinical'],
    pos: [-32, -100, 12], lod: 1, evidence: 'G',
    summary: 'Multi-generational, concordant phenotype, with age at onset falling in each successive generation.',
    detail: 'Heightened innate immunity, mitochondrial dysfunction, lipid oxidation and a Warburg shift are all ' +
      'documented in ME/CFS cohorts independently. SAMHD1 haploinsufficiency is proposed as a genetic driver of that ' +
      'convergent interferon–mitochondrial phenotype in a subset — not as an explanation for all of ME/CFS. ' +
      'Falling age at onset across generations is consistent with apparent anticipation, plausibly from cumulative ' +
      'genomic instability or telomere attrition.',
    refs: ['che2025', 'wirth2021', 'docConcept'],
  },
  {
    id: 'pem', label: 'PEM / fatigue', full: 'Post-exertional malaise and core fatigue — the JAK-refractory residual',
    compartment: 'extracellular', klass: 'outcome', pathways: ['clinical'],
    pos: [-46, -98, 32], lod: 2, evidence: 'G',
    summary: 'Reduced OXPHOS, impaired ATP generation, metabolic shifts worsening post-exertion — and largely refractory to JAK inhibition.',
    refs: ['che2025', 'doc10arm'],
  },
  {
    id: 'psa', label: 'psoriatic arthritis', full: 'Enthesitis-predominant psoriatic arthritis',
    compartment: 'extracellular', klass: 'outcome', pathways: ['clinical'],
    pos: [30, -100, -2], lod: 1, evidence: 'G',
    summary: 'IL-23 → Th17 → IL-17A/TNF-α at tendon–bone and fascial insertions.',
    detail: 'The distinction matters: PsA is established at the diagnosis level, whereas SAMHD1-to-PsA causality ' +
      'remains a mechanistic hypothesis pending specialist review and cell-based confirmation.',
    refs: ['fragoulis2023', 'docConcept'],
  },
  {
    id: 'steatosis', label: 'metabolic interferonopathy', full: 'Hepatic steatosis, android adiposity, insulin resistance',
    compartment: 'extracellular', klass: 'outcome', pathways: ['clinical'],
    pos: [52, -96, 22], lod: 1, evidence: 'S',
    summary: 'Diet-refractory steatosis, pancreatic fatty infiltration and android-pattern central adiposity.',
    detail: 'Two independent drivers converge here. IRF7 → MCP-1 in visceral adipocytes gives the distribution ' +
      '(android, with no subcutaneous lower-body accumulation). The NLRP3/IL-1β arm gives the hepatic insulin ' +
      'resistance — and SAMHD1-null animals develop steatohepatitis with no diet challenge at all, which is why ' +
      'this phenotype is modelled as immune-driven rather than as a caloric-balance problem.',
    refs: ['kuroda2020', 'ghazarian2017', 'liu2026nlrp3'],
  },
  {
    id: 'immunodef', label: 'immunodeficiency', full: 'Progressive T-cell attrition with recurrent infection',
    compartment: 'extracellular', klass: 'outcome', pathways: ['clinical'],
    pos: [-56, -96, 2], lod: 2, evidence: 'G',
    summary: 'Impaired intrinsic antiviral restriction + chronic antigenic load + interferon-driven lymphocyte attrition.',
    refs: ['docConcept'],
  },
  {
    id: 'connective', label: 'connective tissue failure', full: 'Fascial, ligamentous and enthesial structural failure',
    compartment: 'extracellular', klass: 'outcome', pathways: ['clinical'],
    pos: [10, -100, -36], lod: 2, evidence: 'G',
    summary: 'Tonic IFN-γ → STAT1 antagonises TGF-β/Smad3 collagen-I transcription while upregulating MMP-1/MMP-3.',
    refs: ['verrecchia2004', 'fragoulis2023'],
  },
  {
    id: 'dysautonomia', label: 'dysautonomia / SFN', full: 'Autonomic dysregulation via small-fibre neuropathy',
    compartment: 'extracellular', klass: 'outcome', pathways: ['clinical'],
    pos: [46, -98, -30], lod: 2, evidence: 'G',
    summary: 'Chronic tonic type-I IFN drives progressive injury to intraepidermal autonomic nerve fibres.',
    refs: ['wirth2021'],
  },
  {
    id: 'cancer-risk', label: 'cancer surveillance', full: 'Elevated malignancy risk from cumulative genomic instability',
    compartment: 'extracellular', klass: 'outcome', pathways: ['clinical'],
    pos: [-20, -98, -42], lod: 2, evidence: 'S',
    summary: 'Prostate (BIK + SAMHD1 co-segregating), colorectal (heterozygous SAMHD1) and haematological lineages.',
    detail: 'Framed as a surveillance rationale, not a claim of present malignancy — and as the reason IRF3→SAMHD1 ' +
      'signalling should not be blunted too aggressively. SAMHD1 is a canonical tumour suppressor in myeloid and ' +
      'lymphoid lineages, so structural uncoupling drives replication stress in exactly the compartments this ' +
      'disease already inflames.',
    refs: ['pavlovich2025', 'rentoft2016'],
  },
];

export const edges = [
  // ── Drug → target (all inhibitory except the TLR3 agonist and the editor)
  { from: 'upadacitinib', to: 'jak1', kind: 'inhibit', label: 'Arm 2 — JAK1-selective', pathways: ['drugs'], evidence: 'S' },
  { from: 'brepocitinib', to: 'tyk2', kind: 'inhibit', label: 'dual JAK1/TYK2', pathways: ['drugs'], evidence: 'G' },
  { from: 'amlexanox', to: 'tbk1', kind: 'inhibit', label: 'Arm 5 — cuts IFN production at source', pathways: ['drugs'], evidence: 'G' },
  { from: 'amlexanox', to: 'ikke', kind: 'inhibit', pathways: ['drugs'], evidence: 'G' },
  { from: 'amlexanox', to: 'samhd1', kind: 'inhibit', label: 'TRADEOFF — suppressing IRF3 lowers SAMHD1 transcription in an already haploinsufficient cell', pathways: ['drugs', 'genome'], evidence: 'I', bend: 0.35 },
  { from: 'polyiclc', to: 'tlr3', kind: 'activate', label: 'Arms 3–4 — agonist, the "upward" direction', pathways: ['drugs'], evidence: 'S' },
  { from: 'vbit4', to: 'vdac1-oligo', kind: 'inhibit', label: 'Arm 7 — outer membrane, ≤5 µM ceiling', pathways: ['drugs'], evidence: 'S' },
  { from: 'imsb301', to: 'cgas', kind: 'inhibit', label: 'Arm 8 — cytosolic sensor', pathways: ['drugs'], evidence: 'S' },
  { from: 'mcc950', to: 'nlrp3', kind: 'inhibit', label: 'Arm 9 — NACHT Walker B motif', pathways: ['drugs'], evidence: 'G' },
  { from: 'plp', to: 'pnc1', kind: 'inhibit', label: 'Arm 10 — inner membrane, upstream of BOTH loops', pathways: ['drugs'], evidence: 'I' },
  { from: 'allopurinol', to: 'urate', kind: 'inhibit', label: 'candidate adjunct if the GOLD stream is real', pathways: ['drugs'], evidence: 'I' },
  { from: 'abe8e', to: 'a565t', kind: 'inhibit', label: 'A·T → G·C reversion to wild type', pathways: ['drugs'], evidence: 'I' },

  // ── Mechanism → clinical outcome
  { from: 'ifnb', to: 'naci', kind: 'drive', label: 'tonic, moderate-amplitude, source-driven', pathways: ['clinical'], evidence: 'I' },
  { from: 'isg-set', to: 'naci', kind: 'drive', label: 'intracellular ISG induction with flat serum cytokines', pathways: ['clinical'], evidence: 'I' },
  { from: 'atp', to: 'pem', kind: 'drive', label: 'the JAK-refractory bioenergetic residual', pathways: ['clinical', 'metabolic'], evidence: 'G' },
  { from: 'atp', to: 'mecfs', kind: 'drive', pathways: ['clinical'], evidence: 'G' },
  { from: 'naci', to: 'mecfs', kind: 'drive', pathways: ['clinical'], evidence: 'I' },
  { from: 'il17a', to: 'psa', kind: 'drive', label: 'enthesitis at tendon–bone insertions', pathways: ['clinical'], evidence: 'G' },
  { from: 'il17a', to: 'connective', kind: 'drive', pathways: ['clinical'], evidence: 'G' },
  { from: 'ifng', to: 'connective', kind: 'drive', label: 'STAT1 antagonises TGF-β/Smad3; MMP-1/3 up', pathways: ['clinical'], evidence: 'G' },
  { from: 'mcp1', to: 'steatosis', kind: 'drive', label: 'visceral adipocyte inflammation → android distribution', pathways: ['clinical', 'metabolic'], evidence: 'S' },
  { from: 'il1b', to: 'steatosis', kind: 'drive', label: 'JAK-resistant hepatic insulin resistance', pathways: ['clinical', 'metabolic'], evidence: 'S' },
  { from: 'hif1a', to: 'steatosis', kind: 'drive', label: 'Warburg shift', pathways: ['clinical', 'metabolic'], evidence: 'G' },
  { from: 'ifnb', to: 'immunodef', kind: 'drive', label: 'IFN-mediated lymphocyte attrition', pathways: ['clinical'], evidence: 'G' },
  { from: 'ifnb', to: 'dysautonomia', kind: 'drive', label: 'small-fibre neuropathy', pathways: ['clinical'], evidence: 'G' },
  { from: 'genomic-instability', to: 'cancer-risk', kind: 'drive', pathways: ['clinical', 'genome'], evidence: 'S' },
];
