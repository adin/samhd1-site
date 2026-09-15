export const nodes = [
  {
    "id": "upadacitinib",
    "label": "upadacitinib",
    "full": "JAK1-selective inhibitor — Arm 2 (and the shared brake in Arms 4, 6)",
    "compartment": "cytosol",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      -28,
      60,
      6
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Arrests IFNAR signal transduction at JAK1 — the only node in this framework with in-human response data.",
    "detail": "Short-course JAK1 inhibition resolves the inflammatory arm of this disease almost completely while leaving core fatigue and metabolic dysfunction largely intact. That split is the empirical basis for the two-arm (and later three-arm) model: a JAK–STAT-driven inflammatory component, and a metabolic/bioenergetic component that requires upstream rescue.",
    "samhd1": "Predicted NOT to change: dNTP pools, R-loops, autophagy flux, p-TBK1(Ser172), ANKIB1 protein, IL-1β, or ASC speck burden. Everything it fails to move is a map of the disease it does not treat.",
    "refs": [
      "doc10arm",
      "fremond2023",
      "mihaylova2024"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "db_xrefs": {
      "chembl": "CHEMBL3989938",
      "drugbank": "DB12399"
    },
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier upgraded L4_primary_human -> L6_human_clinical -- this node's own summary/detail describe an actual observed clinical treatment response (doc10arm, this atlas's own subject), matching the already-L6 tofacitinib node's precedent for real-patient-response data. The evidence:\"S\" grade rests on doc10arm alone: fremond2023 is a real AGS JAK-inhibition cohort with zero SAMHD1 cases (per its own refs.js note) and mihaylova2024 is a rheumatoid-arthritis pilot -- neither is SAMHD1-specific, both are legitimate generic supporting-mechanism refs, not the basis for the S grade."
  },
  {
    "id": "brepocitinib",
    "label": "brepocitinib / TYK2i",
    "full": "Dual JAK1/TYK2 or selective TYK2 inhibitors",
    "compartment": "cytosol",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      8,
      60,
      28
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Alternative to JAK1-only blockade; adds IL-12/IL-23 coverage relevant to the Th17/psoriatic arm.",
    "refs": [
      "docGlass"
    ],
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier downgraded L3_cell_line -> L1_in_silico -- its sole ref (docGlass) is this project's executive prospectus, not wet-lab evidence; L3_cell_line asserted a cell-line demonstration that does not exist in the citation chain."
  },
  {
    "id": "tofacitinib",
    "label": "tofacitinib",
    "full": "JAK1/JAK3 inhibitor",
    "compartment": "cytosol",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      -8,
      60,
      46
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Real-world clinical rescue in a complete-SAMHD1-loss patient (Baker et al. 2026) -- not a proposed ex-vivo arm from this atlas's own 10-arm study, but actual human treatment-response data.",
    "detail": "In a 13-year-old with COMPLETE SAMHD1 protein loss (homozygous balanced t(17;20) translocation -- not this atlas's heterozygous A565T haploinsufficiency model), tofacitinib normalized the 6-gene ISG panel (IFI27, IFI44L, IFIT1, ISG15, SIGLEC1, RSAD2), resolved active joint count from 14 to 0, normalized NK cell counts, increased switched memory B cells more than threefold, and improved growth trajectory and perniosis. Distinct from this atlas's own upadacitinib (JAK1-selective) -- tofacitinib additionally inhibits JAK3. Anifrolumab (IFNAR1 antagonist) was considered but declined given the degree of improvement already achieved.",
    "refs": [
      "baker2026"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "monocyte",
      "macrophage"
    ],
    "db_xrefs": {
      "chembl": "CHEMBL221959",
      "drugbank": "DB08895"
    },
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped per the file-wide template fix. microglia deliberately NOT added, unlike every other drug node in this file -- baker2026's own refs.js note records this patient's phenotype as \"WITHOUT AGS neurological features or cerebral calcification,\" so its sole citation specifically lacks CNS/microglial involvement; adding microglia would assert something the citation does not support."
  },
  {
    "id": "amlexanox",
    "label": "amlexanox",
    "full": "TBK1/IKKε inhibitor — Arm 5 (and Arm 6 in combination)",
    "compartment": "cytosol",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      2,
      36,
      16
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Cuts interferon production at source rather than blocking its reception. Also an established metabolic agent.",
    "detail": "Because TBK1/IKKε is the master switch linking cGAS–STING to IRF3/7 transactivation, this clamp suppresses IFN production upstream of everything JAK inhibition touches. Reilly et al. showed the same target improves obesity-related metabolic dysfunction, so it lands on both arms at once.",
    "samhd1": "CRITICAL TRADEOFF, and the most important safety claim in the study: by suppressing IRF3/7-mediated SAMHD1 transcription, amlexanox may reduce total SAMHD1 protein in a cell that is ALREADY haploinsufficient. As total protein falls, the p-T592/total ratio shifts toward dNTPase-active tetramers while functionally starving the phospho-dependent genome-stability roles. If DR-GFP efficiency or S9.6 R-loop burden WORSENS in Arm 5 despite inflammatory improvement, that is direct human evidence of a genome-stability/immune-control tradeoff — and an argument for pulsed rather than continuous dosing.\n\nBIDIRECTIONAL as of 2026-09 (Teodoro-Castro 2026): the tradeoff now cuts both ways depending on nuclear STING state. As described above, IRF3 suppression starves genome-stability roles in a haploinsufficient cell — the ORIGINAL direction. But the COUNTER-direction also exists: in cells where nuclear STING is already high, SAMHD1 depletion (this drug's downstream effect) actually RESCUES fork speed by removing the excess-MRE11-resection driver (see the ndd node). Which tradeoff dominates is conditional, not fixed — the deciding measurement is chromatin-bound STING fraction in the cells being dosed.",
    "refs": [
      "bjork2025",
      "reilly2013",
      "doc10arm",
      "yang2016irf3",
      "teodorocastro2026"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "db_xrefs": {
      "chembl": "CHEMBL442",
      "drugbank": "DB00223"
    },
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "id": "polyiclc",
    "label": "poly-ICLC (Hiltonol)",
    "full": "TLR3 agonist — Arm 3 (Arm 4 with JAK1 shielding)",
    "compartment": "endosome",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      -20,
      -22,
      60
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "The \"upward\" direction: drive IRF3 to INDUCE more SAMHD1 protein in a haploinsufficient cell.",
    "detail": "Arm 3 alone is expected to improve genomic-stability endpoints while provoking an interferon surge. Arm 4 adds upadacitinib to test whether the genome-stability gain can be uncoupled from the surge. Dosing follows the published ME/CFS poly I:C PBMC protocol of Che et al. 2025 (0.2–20 µg/ml, 12–48 h).\n\nNEW SAFETY FLAG (2026-09, Teodoro-Castro 2026): raising total SAMHD1 via IRF3 induction is the exact manipulation shown to be toxic to replication forks in cells where nuclear STING is already elevated (see the ndd node) — the same lever this arm pulls to improve genome stability. Keep the existing p-T592:total ratio readout, and ADD an S33-phospho-RPA readout (immunoblot or IF) and/or a CldU:IdU DNA-fiber endpoint to this arm's readout set to catch it if it happens.",
    "refs": [
      "yang2016irf3",
      "che2025",
      "doc10arm",
      "teodorocastro2026"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "id": "vbit4",
    "label": "VBIT-4",
    "full": "VDAC1 oligomerisation inhibitor — Arm 7 (outer mitochondrial membrane)",
    "compartment": "mitochondrion",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      80,
      16,
      34
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Closes the macropore. In SAMHD1-KO monocytes it prevents mtDNA release and FULLY abolishes the spontaneous ISG response.",
    "detail": "Dose constraint is non-negotiable: above ~10 µM VBIT-4 produces VDAC1-INDEPENDENT membrane disruption, so the arm runs a strict 5 µM ceiling with PI/annexin-V viability gating at every timepoint. ISG suppression at non-cytotoxic concentrations is required for the result to mean anything.",
    "refs": [
      "rabinowitz2025",
      "xu2023vdac1",
      "vbit4mem2025",
      "doc10arm"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier downgraded L4_primary_human -> L3_cell_line. Its own citations do not demonstrate primary human tissue: rabinowitz2025's refs.js note already flags its system as SAMHD1-KO THP-1 monocytes (a cell line), and xu2023vdac1 is mouse/RAW264.7 (already L3_cell_line elsewhere in this atlas). vbit4mem2025 is an uncitable dosing note and doc10arm is a study proposal, not data."
  },
  {
    "id": "imsb301",
    "label": "IMSB301",
    "full": "Oral selective cGAS inhibitor — Arm 8 (cytosolic sensor)",
    "compartment": "cytosol",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      32,
      0,
      58
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Intercepts cytosolic DNA AFTER mitochondrial egress. Blind to the ox-mtDNA/NLRP3 arm by construction.",
    "detail": "Predicted outcome is the single highest-value result in Axis 3: ISG and IFN normalised, while IL-1β, ASC specks and caspase-1 p20 stay UNCHANGED. With Arm 9's mirror-image profile, that pair is the definitive Loop A/B independence matrix in primary human heterozygous cells.\n\nCONDITIONAL as of 2026-09 (Teodoro-Castro 2026 — see sting-nuclear node): \"ISG and IFN normalised\" now has two candidate explanations if residual ISG signal persists under cGAS blockade — incomplete cGAS inhibition, or the non-canonical, cGAMP-independent nuclear-STING route to ISGs that this drug cannot touch (it inhibits cGAS, not STING itself). Distinguishable without re-running anything: S366-phospho-STING and p-IRF3 should stay flat if the residual is non-canonical (that route doesn't use either); nuclear/chromatin STING fractionation is the direct readout for whether that pool is active in these cells.",
    "refs": [
      "han2026",
      "immunesensor",
      "doc10arm",
      "teodorocastro2026"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ],
    "cellContextNote": "Confirmed 2026-09-15 (cell_context literature-verification audit): cd4_tcell kept -- the sole documented exception in this file. han2026 (whole-PBMC SAMHD1-AGS scRNA-seq) is this file's only cd4_tcell basis and it is this node's own direct citation, unlike every other drug node here where han2026 is peripheral. Same whole-PBMC/paracrine caveat as sensing.js: the T-cell ISG signal could be paracrine (myeloid-made IFN, T cells responding) rather than cell-intrinsic."
  },
  {
    "id": "mcc950",
    "label": "MCC950",
    "full": "NLRP3 inflammasome inhibitor — Arm 9 (cytosolic sensor)",
    "compartment": "cytosol",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      22,
      -24,
      16
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Binds the NACHT-domain Walker B motif, blocking ATPase-driven assembly downstream of BOTH ox-mtDNA and MSU inputs.",
    "detail": "Predicted mirror image of Arm 8: IL-1β, IL-18, ASC specks and caspase-1 p20 normalised; ISG signature unchanged. Residual IL-1β despite confirmed absence of ASC specks would implicate a caspase-1-independent maturation route — which points at allopurinol as an adjunct.",
    "refs": [
      "coll2019",
      "doc10arm"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "id": "plp",
    "label": "PLP / vitamin B6",
    "full": "Pyridoxal 5′-phosphate — SLC25A33 (PNC1) transport inhibitor, Arm 10 (inner membrane)",
    "compartment": "mitochondrion",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      34,
      16,
      12
    ],
    "lod": 1,
    "evidence": "I",
    "key": true,
    "summary": "The only arm upstream of BOTH NLRP3 and VDAC1 — and clinically available over the counter.",
    "detail": "The bifurcating prediction is what makes this arm worth running:\n  Outcome A — Loop B suppressed, Loop A intact: the two loops are independently gated, and VDAC1 oligomerisation is driven by existing mtROS tone rather than by PNC1 substrate flux.\n  Outcome B — both suppressed: PNC1-driven mtROS is the dominant upstream driver, and the therapeutic target hierarchy shifts to the inner membrane.\n  Null — neither: heterozygous dNTP excess is below the SLC25A33 overload threshold, meaning this arm needs near-complete dNTPase loss to engage. Equally informative, and it defines the haploinsufficiency threshold.\n\nThe class has a positive control now. Liu 2026 blocked mitochondrial dNTP transport pharmacologically and abolished NLRP3 hyperactivation in macrophages from Samhd1-deficient mice AND from obese human donors — the rescue experiment that anchors Loop B. That validates the TARGET, not this compound: PLP itself remains graded I here, because nobody has run pyridoxal 5′-phosphate against a SAMHD1-haploinsufficient cell.",
    "refs": [
      "dolce2001",
      "lunetti2016",
      "dinoia2014",
      "kim2025",
      "liu2026nlrp3",
      "doc10arm"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "id": "allopurinol",
    "label": "allopurinol",
    "full": "Xanthine oxidase inhibitor — candidate adjunct, not a current arm",
    "compartment": "cytosol",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      4,
      -32,
      56
    ],
    "lod": 2,
    "evidence": "I",
    "summary": "Would cut the GOLD stream at urate production if MSU crystals prove to be a real third NLRP3 input.",
    "refs": [
      "martinon2006",
      "doc10arm"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "id": "abe8e",
    "label": "ABE8e-YA base editor",
    "full": "Adenine base editor for A·T → G·C reversion of c.1693G>A",
    "compartment": "nucleus",
    "klass": "drug",
    "pathways": [
      "drugs"
    ],
    "pos": [
      -20,
      20,
      6
    ],
    "lod": 2,
    "evidence": "I",
    "summary": "The curative horizon: a clean transition mutation is a premier base-editing candidate, with no double-strand break required.",
    "refs": [
      "docGlass"
    ],
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier downgraded L3_cell_line -> L1_in_silico -- its sole ref (docGlass) is this project's executive prospectus, not wet-lab evidence; L3_cell_line asserted a cell-line demonstration that does not exist in the citation chain."
  },
  {
    "id": "arac",
    "label": "Ara-C (Ara-CTP)",
    "full": "Cytarabine triphosphate (Ara-CTP) — nucleoside analogue chemotherapy",
    "compartment": "cytosol",
    "klass": "drug",
    "pathways": [
      "drugs",
      "genome"
    ],
    "pos": [
      -12,
      16,
      36
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "SAMHD1 hydrolyzes and inactivates Ara-CTP; haploinsufficiency causes marked hypersensitivity and clinical chemotherapy toxicity.",
    "detail": "Schneider et al. (Nature Medicine 2017) and Herold et al. (2017) demonstrated that SAMHD1 is the primary cellular triphosphohydrolase degrading Ara-CTP. Defective tetramer assembly prevents drug inactivation, creating synthetic lethality in AML/hematological malignancies but severe host toxicity under standard dosing.",
    "refs": [
      "schneider2017",
      "herold2017"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "id": "gemcitabine",
    "label": "gemcitabine (dFdCTP)",
    "full": "Gemcitabine triphosphate (dFdCTP) — cytidine analogue chemotherapy",
    "compartment": "cytosol",
    "klass": "drug",
    "pathways": [
      "drugs",
      "genome"
    ],
    "pos": [
      -4,
      18,
      40
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Substrate of SAMHD1 catalytic inactivation; defective tetramer assembly impairs drug hydrolysis, enhancing cytotoxic stalling.",
    "refs": [
      "schneider2017"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "id": "naci",
    "label": "NACI",
    "full": "Non-Acute Chronic Interferonopathy — the proposed diagnostic category",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      0,
      -96,
      32
    ],
    "lod": 1,
    "evidence": "I",
    "key": true,
    "summary": "Tonic, source-driven interferon activation with no flare-remit cyclicity and a seronegative cytokine profile.",
    "detail": "Distinguished from AGS, SAVI and CANDLE by kinetics and biomarkers rather than by signalling architecture: non-acute (persistently engaged, not episodic), chronic (sustained over decades, progressive rather than episodic), and acting through intracellular ISG induction rather than elevated serum cytokines. That last property is the clinically actionable part — it predicts that standard cytokine panels will read normal in active multi-system disease, and it redirects workup toward IFN-α/β, free ISG15, CXCL10 and ISG scoring.",
    "samhd1": "Proposed as a descriptive category for this patient's pattern, explicitly NOT an established clinical entity. It requires independent validation before use outside the concept note.",
    "refs": [
      "docConcept",
      "tesser2025"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "id": "mecfs",
    "label": "ME/CFS",
    "full": "Myalgic encephalomyelitis / chronic fatigue syndrome",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      -32,
      -100,
      12
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Multi-generational, concordant phenotype, with age at onset falling in each successive generation.",
    "detail": "Heightened innate immunity, mitochondrial dysfunction, lipid oxidation and a Warburg shift are all documented in ME/CFS cohorts independently. SAMHD1 haploinsufficiency is proposed as a genetic driver of that convergent interferon–mitochondrial phenotype in a subset — not as an explanation for all of ME/CFS. Falling age at onset across generations is consistent with apparent anticipation, plausibly from cumulative genomic instability or telomere attrition.",
    "refs": [
      "che2025",
      "wirth2021",
      "docConcept"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "id": "pem",
    "label": "PEM / fatigue",
    "full": "Post-exertional malaise and core fatigue — the JAK-refractory residual",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      -46,
      -98,
      32
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Impaired energy production (citric-acid cycle, fatty-acid beta-oxidation) on plasma metabolomics, worsening post-exertion -- and largely refractory to JAK inhibition.",
    "refs": [
      "che2025",
      "doc10arm"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "id": "psa",
    "label": "psoriatic arthritis",
    "full": "Enthesitis-predominant psoriatic arthritis",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      30,
      -100,
      -2
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Entheseal inflammatory axis: myeloid IL-23 and resident γδ T-cell IL-17A at tendon–bone and fascial insertions.",
    "detail": "Bridgewood 2019 and Cuthbert 2019 establish co-located myeloid IL-23 and resident γδ T-cell IL-17A in human enthesis tissue. Inferred coupling and SAMHD1-to-PsA causality remain disease-model hypotheses pending direct clinical evaluation.",
    "refs": [
      "bridgewood2019",
      "cuthbert2019",
      "docConcept"
    ],
    "evidence_tier": "L4_primary_human",
    "evidenceTierNote": "Bridgewood 2019 and Cuthbert 2019 establish the local myeloid IL-23 and resident gamma-delta T cell IL-17A axis in human enthesis tissue ex vivo; linkage to SAMHD1 deficiency is a disease-model hypothesis.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "id": "steatosis",
    "label": "metabolic interferonopathy",
    "full": "Hepatic steatosis, android adiposity, insulin resistance",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      52,
      -96,
      22
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Diet-refractory steatosis, pancreatic fatty infiltration and android-pattern central adiposity.",
    "detail": "Two independent drivers converge here. IRF7 → MCP-1 in visceral adipocytes gives the distribution (android, with no subcutaneous lower-body accumulation). The NLRP3/IL-1β arm gives the hepatic insulin resistance — and myeloid-SAMHD1-deficient mice develop worse steatohepatitis than diet-matched controls under the SAME high-fat-diet challenge (Liu 2026 fed both groups a 24-week HFD; the phenotype is not spontaneous), which is why this arm is modelled as an immune-status modifier of a caloric challenge rather than a pure caloric-balance problem. Notably, global (not myeloid-conditional) Samhd1 knockout did NOT show the same liver-steatosis change in that study — this arm is specifically myeloid-driven.",
    "refs": [
      "kuroda2020",
      "ghazarian2017",
      "liu2026nlrp3"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier downgraded L6_human_clinical -> L4_primary_human -- kuroda2020 and ghazarian2017 are mouse studies; liu2026nlrp3's human component is macrophages isolated from obese human donors (ex vivo primary human cells), not a clinical cohort or trial. evidence \"S\" unchanged -- liu2026nlrp3 is genuinely SAMHD1-specific (myeloid-conditional Samhd1(dMye) KO)."
  },
  {
    "id": "immunodef",
    "label": "immunodeficiency",
    "full": "Progressive T-cell attrition with recurrent infection",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      -56,
      -96,
      2
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Impaired intrinsic antiviral restriction + chronic antigenic load + interferon-driven lymphocyte attrition.",
    "refs": [
      "docConcept"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "id": "connective",
    "label": "connective tissue failure",
    "full": "Fascial, ligamentous and enthesial structural failure",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      10,
      -100,
      -36
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Hypothesized two-hit uncoupled catabolism: tonic IFN-γ/STAT1 blocks collagen-I synthesis (Hit 1) while inflammatory cytokines upregulate MMPs (Hit 2); direct evidence in SAMHD1 deficiency is pending.",
    "refs": [
      "ghosh2001",
      "ulloa1999",
      "agren2015",
      "verrecchia2004",
      "wang2018"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier downgraded L6_human_clinical -> L4_primary_human -- none of its five refs is a human clinical cohort (ghosh2001/ulloa1999 are cell-based, agren2015 is human skin explants ex vivo, verrecchia2004 is a review, wang2018/Chen S is cell-line). L4 (agren2015/ghosh2001, primary human tissue ex vivo) is the ceiling this bibliography supports -- matches what the ifng->connective edge's own evidenceTierNote already says."
  },
  {
    "id": "dysautonomia",
    "label": "dysautonomia / SFN",
    "full": "Autonomic dysregulation via small-fibre neuropathy",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      46,
      -98,
      -30
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Chronic tonic type-I IFN drives progressive injury to intraepidermal autonomic nerve fibres.",
    "refs": [
      "wirth2021"
    ],
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier downgraded L6_human_clinical -> L1_in_silico -- its sole ref (wirth2021) is \"A unifying hypothesis of ME/CFS pathophysiology,\" a review article, not primary data. Same class as nfkb.js's lubac/betrancourt2026 and celldeath.js's malireddi2019 (review-only citations capped rather than trusted for tier)."
  },
  {
    "id": "cancer-risk",
    "label": "cancer surveillance",
    "full": "Elevated malignancy risk from cumulative genomic instability",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      -20,
      -98,
      -42
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Prostate (BIK and SAMHD1 both confirmed susceptibility genes), colorectal (heterozygous SAMHD1) and haematological lineages.",
    "detail": "Framed as a surveillance rationale, not a claim of present malignancy — and as the reason IRF3→SAMHD1 signalling should not be blunted too aggressively. SAMHD1 is a canonical tumour suppressor in myeloid and lymphoid lineages, so structural uncoupling drives replication stress in exactly the compartments this disease already inflames.",
    "refs": [
      "pavlovich2025",
      "rentoft2016"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "id": "nk-lymphopenia",
    "label": "NK cell lymphopenia",
    "full": "Peripheral natural killer cell depletion",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      70,
      -98,
      10
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Peripheral NK cell counts persistently below normal range, normalizing with tofacitinib -- observed in a complete-SAMHD1-loss patient (Baker et al. 2026).",
    "detail": "NK cell counts of 27-125 x10^6/L (normal 70-480) pre-tofacitinib, rising to 88 post-treatment -- consistent with, but not proof of, tonic IFN-I-driven exhaustion. Single-patient observation in COMPLETE SAMHD1 loss, not this atlas's heterozygous A565T model; the paper does not establish the mechanism independently of the treatment-response correlation.",
    "refs": [
      "baker2026"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "nk_cell"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): nk_cell token added -- this node is literally \"NK cell lymphopenia,\" and its sibling nodes in the same baker2026 cluster already carry their own specific token (memory-b-deficiency/hypergammaglobulinemia: b_cell; esr-crp-dissociation: hepatic; perniosis: cardiovascular). nk_cell is established atlas vocabulary (cytokines.js/trailshort.js), not a new token."
  },
  {
    "id": "memory-b-deficiency",
    "label": "switched memory B-cell deficiency",
    "full": "CD19+CD27+IgM-IgD- switched memory B-cell depletion with elevated total CD19+ B cells",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      70,
      -98,
      -20
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Switched memory B cells markedly low despite elevated total CD19+ B cells; increased >3-fold after tofacitinib.",
    "detail": "A dissociation the source paper does not mechanistically resolve: total CD19+ B cells were elevated throughout, while the switched-memory (CD19+CD27+IgM-IgD-) subset was very low pre-treatment and increased more than threefold post-tofacitinib. Single-patient observation, complete SAMHD1 loss.",
    "refs": [
      "baker2026"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "b_cell"
    ]
  },
  {
    "id": "hypergammaglobulinemia",
    "label": "hypergammaglobulinemia",
    "full": "Elevated polyclonal IgG without specific autoantibody positivity",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      -75,
      -98,
      10
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "IgG persistently above normal range, with negative autoantibody serologies -- polyclonal, not a specific autoimmune signature.",
    "detail": "IgG 19.9-24.4 g/L (normal 6.6-15.3) with NEGATIVE antinuclear, anti-extractable-nuclear, anti-dsDNA, anti-proteinase-3, anti-myeloperoxidase, and antiphospholipid antibody titers -- consistent with polyclonal B-cell activation rather than a specific autoantibody-driven process. Single-patient observation, complete SAMHD1 loss.",
    "refs": [
      "baker2026"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "b_cell"
    ]
  },
  {
    "id": "esr-crp-dissociation",
    "label": "ESR / CRP dissociation",
    "full": "Accelerated erythrocyte sedimentation rate with normal-to-low C-reactive protein",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      -75,
      -98,
      -20
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "ESR elevated while CRP stays normal or low -- a biomarker pattern, not a proven mechanism, worth flagging for interferonopathy workups.",
    "detail": "ESR 8-22 mm/h (normal 0-10) alongside CRP persistently <0.2-0.4 mg/L (normal 0-5). Plausibly consistent with an IFN-I/fibrinogen drive uncoupled from IL-6-driven hepatic acute-phase response, but this citation does not establish that mechanism directly -- it reports the dissociation, not its cause. Relevant to workup: standard CRP-based inflammation screening would miss this patient's disease activity.",
    "refs": [
      "baker2026"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "hepatic"
    ]
  },
  {
    "id": "perniosis",
    "label": "perniosis / acral ischemia",
    "full": "Cold-induced acral vasculopathy with tissue loss",
    "compartment": "extracellular",
    "klass": "outcome",
    "pathways": [
      "clinical"
    ],
    "pos": [
      10,
      -100,
      45
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Severe perniosis with acral autoamputation from late infancy, decreasing with tofacitinib -- a hallmark familial-chilblain-lupus-spectrum presentation.",
    "detail": "Present from late infancy with autoamputation of toes and mild erosion of fingers/ears; decreased following tofacitinib treatment alongside ISG normalization. Single-patient observation, complete SAMHD1 loss (not this atlas's heterozygous A565T model), though perniosis is a recognized FCL/AGS-spectrum feature more broadly.",
    "refs": [
      "baker2026"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "cardiovascular"
    ]
  },
  {
    "id": "tadekinig-alfa",
    "label": "tadekinig alfa",
    "full": "Recombinant human IL-18-binding protein (rhIL-18BP)",
    "compartment": "extracellular",
    "klass": "drug",
    "pathways": [
      "drugs",
      "ifn-gamma"
    ],
    "pos": [
      30,
      92,
      44
    ],
    "lod": 1,
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "systemic_immune",
      "monocyte",
      "macrophage"
    ],
    "summary": "High-affinity soluble decoy receptor neutralizing circulating IL-18 to extinguish Loop C paracrine signaling.",
    "detail": "Tadekinig alfa binds IL-18 with high, picomolar-range affinity, preventing receptor engagement and blocking downstream NK/Th1 IFN-γ release (Novick et al. 1999).",
    "samhd1": "Direct therapeutic interrupter of Loop C in SAMHD1-driven interferonopathies and systemic autoinflammation.",
    "db_xrefs": {
      "drugbank": "DB12845"
    },
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence downgraded S -> I -- this node's own samhd1 field describes a proposed therapeutic interruption, not a demonstrated one (nobody has run rhIL-18BP against a SAMHD1-deficient system); matches the correctly-graded sibling proposed arms plp/allopurinol/abe8e. evidence_tier L1_in_silico already correct, no change.",
    "refs": [
      "novick1999"
    ]
  }
];

export const edges = [
  {
    "from": "upadacitinib",
    "to": "jak1",
    "kind": "inhibit",
    "label": "Arm 2 — JAK1-selective",
    "pathways": [
      "drugs"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence downgraded S -> G -- zero refs; \"upadacitinib inhibits JAK1\" is a generic pharmacology fact true independent of SAMHD1 biology. The SAMHD1-specific part of the story lives on the upadacitinib node (doc10arm), not this edge's own mechanistic claim. evidence_tier L1_in_silico already correct, no change."
  },
  {
    "from": "brepocitinib",
    "to": "tyk2",
    "kind": "inhibit",
    "label": "dual JAK1/TYK2",
    "pathways": [
      "drugs"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier capped L3_cell_line -> L1_in_silico -- zero refs, no citation supports a tier above the config.js in-silico ceiling."
  },
  {
    "from": "amlexanox",
    "to": "tbk1",
    "kind": "inhibit",
    "label": "Arm 5 — cuts IFN production at source",
    "pathways": [
      "drugs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "refs": [
      "reilly2013"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): formal ref added (reilly2013 -- the amlexanox-as-TBK1/IKKe-inhibitor paper already cited on the amlexanox node, and this edge's own on-point mechanism source) rather than leaving the edge zero-ref. evidence_tier L3_cell_line unchanged -- reilly2013 is a mouse study, correctly at cell-line tier."
  },
  {
    "from": "amlexanox",
    "to": "ikke",
    "kind": "inhibit",
    "pathways": [
      "drugs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "refs": [
      "reilly2013"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): formal ref added (reilly2013 -- the amlexanox-as-TBK1/IKKe-inhibitor paper already cited on the amlexanox node, and this edge's own on-point mechanism source) rather than leaving the edge zero-ref. evidence_tier L3_cell_line unchanged -- reilly2013 is a mouse study, correctly at cell-line tier."
  },
  {
    "from": "amlexanox",
    "to": "samhd1",
    "kind": "inhibit",
    "label": "TRADEOFF — suppressing IRF3 lowers SAMHD1 transcription in an already haploinsufficient cell",
    "pathways": [
      "drugs",
      "genome"
    ],
    "evidence": "I",
    "bend": 0.35,
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "from": "polyiclc",
    "to": "tlr3",
    "kind": "activate",
    "label": "Arms 3–4 — agonist, the \"upward\" direction",
    "pathways": [
      "drugs"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence downgraded S -> G -- zero refs; \"poly-ICLC activates TLR3\" is a generic pharmacology fact true independent of SAMHD1 biology. evidence_tier L1_in_silico already correct, no change."
  },
  {
    "from": "vbit4",
    "to": "vdac1-oligo",
    "kind": "inhibit",
    "label": "Arm 7 — outer membrane, ≤5 µM ceiling",
    "pathways": [
      "drugs"
    ],
    "evidence": "S",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "refs": [
      "rabinowitz2025"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): formal ref added (rabinowitz2025 -- confirmed via full text that VBIT-4 was used in SAMHD1-KO THP-1 cells and blocked the ISG response, i.e. genuinely demonstrated in a SAMHD1-deficient system) rather than leaving the edge zero-ref. evidence \"S\" correctly stands; evidence_tier raised L1_in_silico -> L3_cell_line to match the cell-line system (matches the vbit4 node's own corrected tier)."
  },
  {
    "from": "imsb301",
    "to": "cgas",
    "kind": "inhibit",
    "label": "Arm 8 — cytosolic sensor",
    "pathways": [
      "drugs"
    ],
    "evidence": "S",
    "evidence_tier": "L4_primary_human",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ],
    "refs": [
      "han2026",
      "immunesensor"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): formal refs added (han2026 -- IMSB301 in SAMHD1-patient PBMCs, the single best-evidenced drug-target claim in this file, previously the worst-documented; immunesensor -- the compound's own Phase 1 trial description) rather than leaving the edge zero-ref. evidence_tier raised L1_in_silico -> L4_primary_human to match. cell_context unchanged (keeps cd4_tcell -- see the imsb301 node's note, the sole documented exception in this file)."
  },
  {
    "from": "mcc950",
    "to": "nlrp3",
    "kind": "inhibit",
    "label": "Arm 9 — NACHT Walker B motif",
    "pathways": [
      "drugs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "refs": [
      "coll2019"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): formal ref added (coll2019 -- the MCC950-targets-the-NACHT-Walker-B-motif paper this edge's own label paraphrases, already on the mcc950 node) rather than leaving the edge zero-ref. evidence_tier L3_cell_line unchanged."
  },
  {
    "from": "plp",
    "to": "pnc1",
    "kind": "inhibit",
    "label": "Arm 10 — inner membrane, upstream of BOTH loops",
    "pathways": [
      "drugs"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "from": "allopurinol",
    "to": "urate",
    "kind": "inhibit",
    "label": "candidate adjunct if the GOLD stream is real",
    "pathways": [
      "drugs"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "from": "abe8e",
    "to": "a565t",
    "kind": "inhibit",
    "label": "A·T → G·C reversion to wild type",
    "pathways": [
      "drugs"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "from": "samhd1",
    "to": "arac",
    "kind": "inhibit",
    "label": "hydrolyzes Ara-CTP; haploinsufficiency causes hypersensitivity",
    "pathways": [
      "drugs",
      "genome"
    ],
    "evidence": "S",
    "refs": [
      "schneider2017",
      "herold2017"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "from": "samhd1",
    "to": "gemcitabine",
    "kind": "inhibit",
    "label": "hydrolyzes dFdCTP; loss enhances cytotoxicity",
    "pathways": [
      "drugs",
      "genome"
    ],
    "evidence": "S",
    "refs": [
      "schneider2017"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped -- this file's own citations give no CD4 T-cell support for the myeloid template (han2026, the SAMHD1-AGS PBMC scRNA-seq paper that supports cd4_tcell in sensing.js/ifn.js, is peripheral here -- only cited by the imsb301 node/edge, which keeps cd4_tcell as the sole documented exception). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md."
  },
  {
    "from": "ifnb",
    "to": "naci",
    "kind": "drive",
    "label": "tonic, moderate-amplitude, source-driven",
    "pathways": [
      "clinical"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the destination node -- this edge describes a secreted mediator acting on an organism-level outcome, the same rule PR #112 already applied to naci->mecfs/mcp1->steatosis/genomic-instability->cancer-risk in this file and cytokines.js PR #137 applied to edges pointing into this file's own naci/psa nodes."
  },
  {
    "from": "isg-set",
    "to": "naci",
    "kind": "drive",
    "label": "intracellular ISG induction with flat serum cytokines",
    "pathways": [
      "clinical"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the destination node -- this edge describes a secreted mediator acting on an organism-level outcome, the same rule PR #112 already applied to naci->mecfs/mcp1->steatosis/genomic-instability->cancer-risk in this file and cytokines.js PR #137 applied to edges pointing into this file's own naci/psa nodes."
  },
  {
    "from": "atp",
    "to": "pem",
    "kind": "drive",
    "label": "the JAK-refractory bioenergetic residual",
    "pathways": [
      "clinical",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L6_human_clinical",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the destination node -- this edge describes a secreted mediator acting on an organism-level outcome, the same rule PR #112 already applied to naci->mecfs/mcp1->steatosis/genomic-instability->cancer-risk in this file and cytokines.js PR #137 applied to edges pointing into this file's own naci/psa nodes.",
    "refs": [
      "che2025"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): che2025 (already cited on both destination nodes) directly supports this edge's own claim -- a human ME/CFS cohort reporting impaired energy production via the citric acid cycle, fatty-acid beta-oxidation and the urea cycle. Added as a formal ref rather than leaving the edge zero-ref; evidence_tier raised L3_cell_line -> L6_human_clinical to match."
  },
  {
    "from": "atp",
    "to": "mecfs",
    "kind": "drive",
    "pathways": [
      "clinical"
    ],
    "evidence": "G",
    "evidence_tier": "L6_human_clinical",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the destination node -- this edge describes a secreted mediator acting on an organism-level outcome, the same rule PR #112 already applied to naci->mecfs/mcp1->steatosis/genomic-instability->cancer-risk in this file and cytokines.js PR #137 applied to edges pointing into this file's own naci/psa nodes.",
    "refs": [
      "che2025"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): che2025 (already cited on both destination nodes) directly supports this edge's own claim -- a human ME/CFS cohort reporting impaired energy production via the citric acid cycle, fatty-acid beta-oxidation and the urea cycle. Added as a formal ref rather than leaving the edge zero-ref; evidence_tier raised L3_cell_line -> L6_human_clinical to match."
  },
  {
    "from": "naci",
    "to": "mecfs",
    "kind": "drive",
    "pathways": [
      "clinical"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): both endpoints (naci, mecfs) are systemic clinical-outcome nodes tagged with the systemic array, but this edge carried the generic myeloid template. Matched the edge to its endpoints.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "from": "il17a",
    "to": "psa",
    "kind": "drive",
    "label": "enthesitis at tendon–bone insertions",
    "pathways": [
      "clinical"
    ],
    "evidence": "G",
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the psa node -- il17a's own array (ifn.js) is cd4_tcell-only (a narrow Th17-effector node, PR #128) and the target tissue (enthesis) is neither myeloid nor a T-cell compartment, so neither endpoint supports \"myeloid\" truthfully; the shared cd4_tcell token was hiding this mismatch (the trailshort.js blind spot). Not tagged cd4_tcell-only either -- that would make the edge disjoint from psa.",
    "refs": [
      "cuthbert2019",
      "bridgewood2019"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cuthbert2019/bridgewood2019 (already on the psa node) directly support this edge's own claim -- both are ex vivo human enthesis tissue studies establishing the myeloid-IL-23/gamma-delta-T-IL-17A axis this edge describes. Added as formal refs; evidence_tier raised L3_cell_line -> L4_primary_human to match."
  },
  {
    "from": "il17a",
    "to": "connective",
    "kind": "drive",
    "pathways": [
      "clinical"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the connective node -- same reasoning as il17a->psa (see that edge's note): il17a's own array is cd4_tcell-only and the target tissue is neither myeloid nor T-cell, so the myeloid template was disjoint from both the true producer context and the destination.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier capped L3_cell_line -> L1_in_silico -- zero refs, and no citation in this file's bibliography specifically supports IL-17A driving fascial/ligamentous connective-tissue failure (unlike il17a->psa, where cuthbert2019/bridgewood2019 are on-point)."
  },
  {
    "from": "ifng",
    "to": "connective",
    "kind": "drive",
    "label": "STAT1 blocks collagen-I synthesis (Hit 1)",
    "pathways": [
      "clinical"
    ],
    "evidence": "G",
    "evidence_tier": "L4_primary_human",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): formal refs array added (ghosh2001, ulloa1999, agren2015 -- already named in prose in this edge's own evidenceTierNote below, and already on the connective node, but never copied into the refs field, leaving this edge incorrectly zero-ref). evidence_tier raised L3_cell_line -> L4_primary_human to match (ghosh2001/agren2015 are human tissue ex vivo). Original note retained: Demonstrated in human dermal fibroblasts (Ghosh 2001, Ulloa 1999): IFN-gamma/STAT1 competitively sequesters p300/CBP and induces Smad7, blocking TGF-beta/Smad3 procollagen transcription. Synergistic uncoupling via TNF-alpha-driven MMP-1/MMP-3 degradation (Hit 2; Agren 2015) represents a plausible disease-model hypothesis; clinical confirmation in SAMHD1 deficiency remains to be directly demonstrated.",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the connective node -- this edge describes IFN-gamma/STAT1 acting on the dermal fibroblast (per its own evidenceTierNote naming Ghosh 2001), a non-myeloid target tissue, not an event inside the myeloid producer cell.",
    "refs": [
      "ghosh2001",
      "ulloa1999",
      "agren2015"
    ]
  },
  {
    "from": "mcp1",
    "to": "steatosis",
    "kind": "drive",
    "label": "visceral adipocyte inflammation → android distribution",
    "pathways": [
      "clinical",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): mcp1's own node is visceral-adipocyte-specific (no myeloid vocabulary token exists for that), but this edge's destination (steatosis) is a systemic clinical outcome -- matched the edge to the endpoint that has a valid tag rather than the generic myeloid template.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence downgraded S -> G -- zero refs; kuroda2020 (on the steatosis node) supports IRF7->MCP-1 in obesity generically, not a SAMHD1-specific finding."
  },
  {
    "from": "il1b",
    "to": "steatosis",
    "kind": "drive",
    "label": "JAK-resistant hepatic insulin resistance",
    "pathways": [
      "clinical",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the steatosis node -- IL-1beta acting on hepatic insulin resistance is a secreted-mediator/organ-level effect, not an event inside the myeloid producer cell.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence downgraded S -> G -- zero refs; liu2026nlrp3 (on the steatosis node) genuinely links SAMHD1 loss to NLRP3/IL-1beta hyperactivation, but this edge's specific claim (IL-1beta driving hepatic insulin resistance) is standard IL-1beta/metabolic literature, not something that paper itself demonstrates. evidence_tier L1_in_silico already correct, no change."
  },
  {
    "from": "hif1a",
    "to": "steatosis",
    "kind": "drive",
    "label": "Warburg shift",
    "pathways": [
      "clinical",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the steatosis node and its sibling edges (mcp1->steatosis, il1b->steatosis) into the same node -- leaving this one on the myeloid template while its two siblings are systemic recreated the exact inconsistency PR #112 fixed for mcp1/il1b.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier capped L3_cell_line -> L1_in_silico -- zero refs, no citation supports a tier above the config.js in-silico ceiling."
  },
  {
    "from": "ifnb",
    "to": "immunodef",
    "kind": "drive",
    "label": "IFN-mediated lymphocyte attrition",
    "pathways": [
      "clinical"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the destination node -- this edge describes a secreted mediator acting on an organism-level outcome, the same rule PR #112 already applied to naci->mecfs/mcp1->steatosis/genomic-instability->cancer-risk in this file and cytokines.js PR #137 applied to edges pointing into this file's own naci/psa nodes.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier capped L3_cell_line -> L1_in_silico -- zero refs, no citation supports a tier above the config.js in-silico ceiling."
  },
  {
    "from": "ifnb",
    "to": "dysautonomia",
    "kind": "drive",
    "label": "small-fibre neuropathy",
    "pathways": [
      "clinical"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cell_context retagged to the systemic clinical-outcome array, matching the destination node -- this edge describes a secreted mediator acting on an organism-level outcome, the same rule PR #112 already applied to naci->mecfs/mcp1->steatosis/genomic-instability->cancer-risk in this file and cytokines.js PR #137 applied to edges pointing into this file's own naci/psa nodes.",
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence_tier capped L3_cell_line -> L1_in_silico -- zero refs, no citation supports a tier above the config.js in-silico ceiling."
  },
  {
    "from": "genomic-instability",
    "to": "cancer-risk",
    "kind": "drive",
    "pathways": [
      "clinical",
      "genome"
    ],
    "evidence": "S",
    "evidence_tier": "L6_human_clinical",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): both endpoints (genomic-instability, cancer-risk) are systemic clinical-outcome nodes tagged with the systemic array, but this edge carried the generic myeloid template. Matched the edge to its endpoints.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ],
    "refs": [
      "rentoft2016",
      "pavlovich2025"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): formal refs added (rentoft2016 -- \"Heterozygous colon cancer-associated mutations of SAMHD1 have functional significance,\" precisely this edge's own claim in SAMHD1; pavlovich2025 -- confirms BIK/SAMHD1 as prostate-cancer susceptibility genes) rather than leaving the edge zero-ref. Both are human genetic-association studies; evidence_tier raised L1_in_silico -> L6_human_clinical to match."
  },
  {
    "from": "tadekinig-alfa",
    "to": "il18",
    "kind": "inhibit",
    "interaction_type": "allosteric_suppression",
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "systemic_immune"
    ],
    "loop": "C",
    "label": "Neutralizes free IL-18",
    "pathways": [
      "drugs",
      "ifn-gamma"
    ],
    "refs": [
      "novick1999"
    ],
    "evidenceTierNote": "Fixed 2026-09-15 (cell_context literature-verification audit): evidence downgraded S -> G, matching the tadekinig-alfa node's own downgrade (see that node's note) -- IL-18BP neutralizing IL-18 is established non-SAMHD1 biology (novick1999, added as a formal ref: IL-18BP abolishes IL-18-induced IFN-gamma/IL-8/NF-kB activation), not a SAMHD1-specific finding. evidence_tier set L3_cell_line to match novick1999's in vitro/biochemical system. Also removed an undocumented \"sign\" field (config.js derives edge polarity from EDGE_KINDS[kind].sign; kind:\"inhibit\" already supplies it) and added a missing pathways array to match the source node."
  },
  {
    "from": "isg-set",
    "to": "nk-lymphopenia",
    "kind": "drive",
    "label": "Tonic ISG elevation tracks with peripheral NK depletion (single-patient, treatment-response correlation, not isolated mechanism)",
    "pathways": [
      "clinical"
    ],
    "evidence": "S",
    "evidence_tier": "L6_human_clinical",
    "interaction_type": "catalytic_activation",
    "refs": [
      "baker2026"
    ],
    "cell_context": [
      "systemic_immune",
      "nk_cell"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): nk_cell token added to match the nk-lymphopenia node's own correction (see that node's note)."
  },
  {
    "from": "isg-set",
    "to": "memory-b-deficiency",
    "kind": "drive",
    "label": "Tonic ISG elevation tracks with switched memory B-cell block, reversed by JAK inhibition",
    "pathways": [
      "clinical"
    ],
    "evidence": "S",
    "evidence_tier": "L6_human_clinical",
    "interaction_type": "catalytic_activation",
    "refs": [
      "baker2026"
    ],
    "cell_context": [
      "systemic_immune",
      "b_cell"
    ]
  },
  {
    "from": "isg-set",
    "to": "hypergammaglobulinemia",
    "kind": "drive",
    "label": "Tonic ISG elevation tracks with polyclonal IgG elevation, uncoupled from specific autoantibodies",
    "pathways": [
      "clinical"
    ],
    "evidence": "S",
    "evidence_tier": "L6_human_clinical",
    "interaction_type": "catalytic_activation",
    "refs": [
      "baker2026"
    ],
    "cell_context": [
      "systemic_immune",
      "b_cell"
    ]
  },
  {
    "from": "isg-set",
    "to": "esr-crp-dissociation",
    "kind": "drive",
    "label": "Tonic ISG elevation plausibly explains the ESR-high/CRP-normal pattern -- reported, not mechanistically proven, by this citation",
    "pathways": [
      "clinical"
    ],
    "evidence": "S",
    "evidence_tier": "L6_human_clinical",
    "interaction_type": "catalytic_activation",
    "refs": [
      "baker2026"
    ],
    "cell_context": [
      "systemic_immune",
      "hepatic"
    ]
  },
  {
    "from": "isg-set",
    "to": "perniosis",
    "kind": "drive",
    "label": "Tonic Type-I IFN drives microvascular endotheliopathy and acral tissue loss, reversed by JAK inhibition",
    "pathways": [
      "clinical"
    ],
    "evidence": "S",
    "evidence_tier": "L6_human_clinical",
    "interaction_type": "catalytic_activation",
    "refs": [
      "baker2026"
    ],
    "cell_context": [
      "systemic_immune",
      "cardiovascular"
    ]
  },
  {
    "from": "tofacitinib",
    "to": "isg-set",
    "kind": "inhibit",
    "label": "JAK1/3 blockade normalizes the 6-gene ISG panel in a complete-SAMHD1-loss patient",
    "pathways": [
      "clinical",
      "isg"
    ],
    "evidence": "S",
    "evidence_tier": "L6_human_clinical",
    "interaction_type": "allosteric_suppression",
    "refs": [
      "baker2026"
    ],
    "cell_context": [
      "monocyte",
      "macrophage"
    ],
    "cellContextNote": "Fixed 2026-09-15 (cell_context literature-verification audit): cd4_tcell dropped, microglia deliberately not added -- matches the tofacitinib node's own correction (see that node's note; baker2026's patient specifically lacked AGS neurological/CNS features)."
  }
];

