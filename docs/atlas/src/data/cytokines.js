export const nodes = [
  {
    "id": "responder-cell",
    "label": "NK / Th1 cell",
    "full": "Neighbouring NK cell or Th1 lymphocyte — the IFN-γ source",
    "compartment": "responder",
    "klass": "cell",
    "pathways": [
      "ifn-gamma",
      "th17"
    ],
    "pos": [
      -112,
      96,
      18
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "IFN-γ is made HERE, not in the cell whose mitochondria are failing. Loop C is paracrine by construction.",
    "detail": "NK cells respond fastest and need no antigen; Th1 cells sustain the response. Both read the same two signals — IL-18 through a MyD88 receptor and IL-12 through a STAT4 receptor — and neither alone is sufficient.",
    "samhd1": "This is the step that is missing from the compressed chain. An inflammasome running constitutively in one cell recruits a second cell into the disease, and that second cell sends back a cytokine that damages the first one further.",
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-12 (redteam audit of commit 20ae777): this node's own compartment field already says 'responder' and its label says 'NK / Th1 cell', but cell_context still carried the generic myeloid template (monocyte/macrophage/microglia/dendritic_cell/cd4_tcell) instead of the responder-lineage array its sibling node il18r-nfkb already used correctly. Propagated the same fix through the whole responder arm of this Loop C pathway (il18r, il12r, stat4, tbet, and the crossing edges il18->il18r/il12->il12r/cxcl9-11->responder-cell) and the Th17 axis (th17-cell/il23r/stat3/rorgt -> cd4_tcell only) and pdc (-> dendritic_cell only), based on each node's own compartment/label/text, not external lookup.",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "id": "th17-cell",
    "label": "Th17 / ILC3 / γδ T",
    "full": "IL-17-producing lymphocyte populations",
    "compartment": "responder",
    "klass": "cell",
    "pathways": [
      "th17"
    ],
    "pos": [
      -98,
      80,
      30
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "The entheseal IL-17-producing compartment, dominated by resident γδ T cells capable of IL-17A production (Cuthbert 2019).",
    "detail": "Cuthbert 2019 demonstrated that resident human entheseal γδ T cells produce IL-17A independently of IL-23R transcript expression, distinguishing local entheseal pathology from circulating Th17 autoantigen-driven models.",
    "refs": [
      "cuthbert2019"
    ],
    "evidence_tier": "L4_primary_human",
    "evidenceTierNote": "Cuthbert 2019 demonstrated that human enthesis tissue harbors resident gamma-delta T cells capable of IL-17A production independently of conventional circulation (primary human tissue ex vivo).",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "id": "pdc",
    "label": "pDC",
    "full": "Plasmacytoid dendritic cell — the professional type-I interferon producer",
    "compartment": "responder",
    "klass": "cell",
    "pathways": [
      "tlr",
      "ifn-jak"
    ],
    "pos": [
      -118,
      104,
      -2
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "The cell that converts TLR7/9 ligation into an IFN-α burst — orders of magnitude more type-I interferon per cell than any other blood leukocyte.",
    "detail": "Among the TLRs a pDC expresses essentially only TLR7 and TLR9, and it retains ligand in an early endosome long enough for the MyD88–IRAK1–IRF7 complex to assemble there. That retention, together with constitutively high resting IRF7, is why the same receptor gives NF-κB cytokines in a macrophage and an interferon burst here — the difference is the cell, not the receptor. IRAK1 is the kinase step and it is already an atlas node (irak14, data/sensing.js); this is the cell that step happens in, not a second copy.",
    "samhd1": "NOT demonstrated in a SAMHD1 system, and graded G for exactly that reason — it sits downstream of an S claim without inheriting its grade. What makes the cell worth drawing is arithmetic rather than a new mechanism: IRF7 is the node SAMHD1 physically restrains (Brake 1), and the pDC is where derepressed IRF7 has the largest per-cell interferon consequence. Whether pDCs contribute measurably to the tonic IFN-α of this phenotype is a MEASUREMENT — pDC frequency together with per-cell IFN-α — not something this model asserts.",
    "refs": [
      "siegal1999",
      "uematsu2005",
      "honda2005"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "dendritic_cell"
    ]
  },
  {
    "id": "il18r",
    "label": "IL-18R1 / IL-18RAP",
    "full": "Interleukin-18 receptor complex",
    "compartment": "responder",
    "klass": "receptor",
    "pathways": [
      "ifn-gamma",
      "inflammasome"
    ],
    "pos": [
      -96,
      108,
      6
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "An IL-1-family receptor: TIR domains, MyD88, IRAK — the same module TLRs use.",
    "detail": "Because IL-18 signals through MyD88, the inflammasome output reaches NF-κB in the responder cell by exactly the route a pathogen would use. The cell cannot distinguish sterile metabolic inflammasome activity from infection.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "id": "il18bp",
    "label": "IL-18BP",
    "full": "Interleukin-18 binding protein — the constitutive IL-18 decoy",
    "compartment": "extracellular",
    "klass": "effector",
    "pathways": [
      "ifn-gamma",
      "isg"
    ],
    "pos": [
      22,
      100,
      34
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "A high-affinity secreted decoy that neutralises free IL-18. Itself IFN-γ-inducible — the loop builds its own brake.",
    "detail": "The clinically useful readout is not total IL-18 but FREE IL-18 — the fraction unbound by IL-18BP. Total IL-18 can look unremarkable while free IL-18 is high, which is the same measurement trap the concept note describes for serum cytokines generally. Recombinant IL-18BP (tadekinig alfa) exists as a therapeutic.",
    "samhd1": "Worth measuring alongside free ISG15 in this framework: both are brakes that are induced by the very signal they oppose, and both are candidates for being present, engaged, and overwhelmed.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "il12",
    "label": "IL-12 (p35/p40)",
    "full": "Interleukin-12 — the Th1-polarising heterodimer",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "ifn-gamma",
      "th17"
    ],
    "pos": [
      -30,
      96,
      26
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Made by activated myeloid cells. Shares its p40 subunit with IL-23 — which is why one antibody can hit both.",
    "detail": "The p40 sharing is the reason ustekinumab (anti-p40) suppresses the Th1 and Th17 arms together while anti-p19 agents spare IL-12. In a disease with both an IFN-γ arm and a Th17 arm, that choice is not neutral.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "il12r",
    "label": "IL-12Rβ1/β2",
    "full": "Interleukin-12 receptor",
    "compartment": "responder",
    "klass": "receptor",
    "pathways": [
      "ifn-gamma"
    ],
    "pos": [
      -124,
      108,
      26
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Signals through TYK2 and JAK2 → STAT4. The TYK2 dependence is why TYK2 inhibitors reach this arm.",
    "drugs": [
      "brepocitinib"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "id": "stat4",
    "label": "STAT4",
    "full": "Signal transducer and activator of transcription 4",
    "compartment": "responder",
    "klass": "tf",
    "pathways": [
      "ifn-gamma"
    ],
    "pos": [
      -118,
      88,
      4
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "The Th1 STAT. Induces T-bet, which is what actually licenses the IFNG locus.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "id": "tbet",
    "label": "T-bet (TBX21)",
    "full": "T-box transcription factor 21 — master Th1 regulator",
    "compartment": "responder",
    "klass": "tf",
    "pathways": [
      "ifn-gamma"
    ],
    "pos": [
      -106,
      80,
      12
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Remodels the IFNG locus. Without it, IL-18 and IL-12 signalling produce no interferon-γ.",
    "detail": "T-bet is the step that makes the two-signal requirement real: IL-18's NF-κB arm cannot transactivate a closed locus, and IL-12's STAT4 arm is what opens it.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "id": "gaf",
    "label": "STAT1 : STAT1 (GAF)",
    "full": "Gamma-activated factor — the STAT1 homodimer",
    "compartment": "cytosol",
    "klass": "complex",
    "pathways": [
      "ifn-gamma",
      "ifn-jak"
    ],
    "pos": [
      24,
      44,
      -14
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "A different dimer from ISGF3, reading a different element (GAS, not ISRE) — but drawing on the same STAT1 pool.",
    "detail": "Type-I and type-II interferon compete for STAT1. That shared dependency is why JAK1 inhibition dampens both arms, and why STAT1 abundance is a better readout of total interferon burden than either ligand alone.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "cxcl9-11",
    "label": "CXCL9/10/11",
    "full": "Interferon-γ-induced chemokines (MIG, IP-10, I-TAC)",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "ifn-gamma",
      "isg"
    ],
    "pos": [
      56,
      92,
      -22
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "CXCR3 ligands that recruit more Th1 and NK cells — the loop's amplification step at tissue level.",
    "samhd1": "CXCL10 is one of the four assays the concept note directs workup toward (with IFN-α/β, free ISG15 and ISG scoring) precisely because it reports intracellular interferon activity when a standard cytokine panel reads normal.",
    "refs": [
      "docConcept",
      "tesser2025"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "ciita",
    "label": "CIITA → MHC-II",
    "full": "Class II transactivator and MHC class II induction",
    "compartment": "nucleus",
    "klass": "tf",
    "pathways": [
      "ifn-gamma"
    ],
    "pos": [
      -20,
      18,
      -28
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "IFN-γ turns non-professional cells into antigen presenters — how an innate loop acquires an adaptive audience.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "nos2",
    "label": "NOS2 / iNOS",
    "full": "Inducible nitric oxide synthase",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "ifn-gamma",
      "metabolic"
    ],
    "pos": [
      40,
      26,
      -30
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "IFN-γ + NF-κB output. NO nitrosylates and inhibits Complexes I and IV — an interferon-driven respiratory lesion.",
    "detail": "NOS2 induction is one of the most direct routes from a cytokine to a bioenergetic defect: nitric oxide competes with oxygen at cytochrome c oxidase and S-nitrosylates Complex I.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "m1",
    "label": "M1 polarisation",
    "full": "Classically activated (M1) macrophage programme",
    "compartment": "cytosol",
    "klass": "outcome",
    "pathways": [
      "ifn-gamma",
      "metabolic",
      "mito"
    ],
    "pos": [
      46,
      16,
      -18
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "IFN-γ locks macrophages into aerobic glycolysis with a broken TCA cycle, high mtROS, and succinate accumulation.",
    "detail": "M1 is where Loop C re-enters the mitochondrion. The programme itself raises mtROS and remodels the TCA cycle — so an interferon signal arriving from a neighbouring cell physically worsens the organelle damage that started the cascade. Succinate accumulation from the broken cycle stabilises HIF-1α under normoxia, which is the Warburg shift already in this figure.",
    "samhd1": "Samhd1-KO drives M1 skewing directly, and does so alongside ΔΨm collapse. The cell arrives at this state from two directions at once: its own genetic lesion, and the IFN-γ its neighbours send back.",
    "refs": [
      "xu2023vdac1",
      "tannahill2013"
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
    "id": "il23r",
    "label": "IL-23R / IL-12Rβ1",
    "full": "Interleukin-23 receptor complex",
    "compartment": "responder",
    "klass": "receptor",
    "pathways": [
      "th17"
    ],
    "pos": [
      -100,
      92,
      42
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "JAK2/TYK2 → STAT3. IL23R variants are among the strongest genetic associations in psoriatic disease.",
    "drugs": [
      "brepocitinib"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "id": "stat3",
    "label": "STAT3",
    "full": "Signal transducer and activator of transcription 3",
    "compartment": "responder",
    "klass": "tf",
    "pathways": [
      "th17"
    ],
    "pos": [
      -104,
      88,
      34
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "The Th17 STAT, driven by IL-6 and IL-23. Induces RORγt.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "id": "rorgt",
    "label": "RORγt (RORC)",
    "full": "Retinoic acid receptor-related orphan receptor gamma t",
    "compartment": "responder",
    "klass": "tf",
    "pathways": [
      "th17"
    ],
    "pos": [
      -109,
      83,
      27
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Master Th17 transcription factor. IL-23 does not create Th17 cells so much as stabilise and license them.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "id": "il17ra",
    "label": "IL-17RA / RC",
    "full": "Interleukin-17 receptor on the target tissue",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "th17"
    ],
    "pos": [
      -8,
      62,
      -44
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Signals through ACT1 → TRAF6 → NF-κB in fibroblasts, synoviocytes and keratinocytes.",
    "detail": "IL-17 is a weak cytokine alone and a potent one with TNF-α. The synergy is why enthesitis responds to blocking either arm and why the two appear together in every mechanistic account of psoriatic disease.",
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): this node's own `full` field says 'on the target tissue' and its summary names fibroblasts, synoviocytes and keratinocytes explicitly -- none myeloid/immune. Left empty pending a stromal/epithelial vocabulary token; see ifn.js's ifnl node for the same pattern.",
    "cell_context": []
  },
  {
    "id": "act1",
    "label": "ACT1 (TRAF3IP2)",
    "full": "NF-κB activator 1 — the IL-17R adaptor",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "th17",
      "nfkb"
    ],
    "pos": [
      -14,
      46,
      -40
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "U-box E3 that couples IL-17R to TRAF6 → NF-κB — closing an IL-17 → NF-κB → IL-23 feed-forward at tissue level.",
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): this is IL-17RA's direct downstream adaptor, in the same target-tissue cell as il17ra (its own summary says 'at tissue level'), not myeloid. Left empty for the same reason as il17ra; see that node's note.",
    "cell_context": []
  },
  {
    "id": "il22",
    "label": "IL-22 / GM-CSF",
    "full": "Additional Th17-lineage effector cytokines",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "th17"
    ],
    "pos": [
      34,
      96,
      -40
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Epithelial proliferation (IL-22) and myeloid recruitment (GM-CSF) — the rest of the Th17 output.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "il18r-nfkb",
    "label": "IL-18R → NF-κB (Responder)",
    "full": "Responder cell NF-κB activation downstream of IL-18R",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "ifn-gamma",
      "nfkb"
    ],
    "pos": [
      -38,
      22,
      14
    ],
    "lod": 1,
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ],
    "summary": "IL-18R MyD88-dependent NF-κB transactivation inside responder lymphoid cells.",
    "detail": "IL-18 engagement of IL-18Rα/β recruits MyD88, IRAK4 and TRAF6, activating NF-κB to drive co-transcription of IFN-γ and chemokines in NK/Th1 cells.",
    "samhd1": "Second arm of the paracrine Loop C circuit."
  }
];

export const edges = [
  {
    "from": "il18",
    "to": "il18r",
    "kind": "bind",
    "label": "STEP 1 — mature IL-18 crosses to a NEIGHBOURING cell",
    "pathways": [
      "ifn-gamma",
      "inflammasome"
    ],
    "evidence": "G",
    "loop": "C",
    "bend": 0.2,
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "from": "il18bp",
    "to": "il18",
    "kind": "inhibit",
    "label": "decoy — only FREE IL-18 signals",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "il18r",
    "to": "myd88",
    "kind": "activate",
    "label": "STEP 2 — TIR domain, the same module TLRs use",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "loop": "C",
    "bend": 0.3,
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "from": "il12",
    "to": "il12r",
    "kind": "bind",
    "label": "STEP 3 — second signal, from the same inflamed myeloid cell",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "from": "nfkb-targets",
    "to": "il12",
    "kind": "produce",
    "label": "IL-12p35/p40 from the activated myeloid cell",
    "pathways": [
      "nfkb",
      "ifn-gamma"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "il12r",
    "to": "stat4",
    "kind": "phos",
    "label": "STEP 4 — TYK2/JAK2 → STAT4",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "kinase_phosphorylation",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "from": "stat4",
    "to": "tbet",
    "kind": "produce",
    "label": "STEP 5 — T-bet opens the IFNG locus",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "from": "tbet",
    "to": "responder-cell",
    "kind": "activate",
    "label": "Th1/NK effector programme",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "from": "il18r",
    "to": "responder-cell",
    "kind": "activate",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "responder-cell",
    "to": "ifng",
    "kind": "produce",
    "label": "STEP 6 — IFN-γ requires BOTH signals; neither alone suffices",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "from": "ifng",
    "to": "ifngr",
    "kind": "bind",
    "label": "STEP 7 — paracrine return to the cell that started it",
    "pathways": [
      "ifn-gamma",
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "stat1",
    "to": "gaf",
    "kind": "bind",
    "label": "STEP 8 — STAT1 homodimer, not ISGF3",
    "pathways": [
      "ifn-gamma",
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "gaf",
    "to": "gas",
    "kind": "translocate",
    "label": "GAS elements — a different programme from ISRE",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "compartment_translocation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "gas",
    "to": "cxcl9-11",
    "kind": "produce",
    "label": "CXCR3 ligands recruit more Th1/NK — tissue-level amplification",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "gas",
    "to": "ciita",
    "kind": "produce",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "gas",
    "to": "nos2",
    "kind": "produce",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "gas",
    "to": "il18bp",
    "kind": "produce",
    "label": "the loop induces its own brake — as the type-I arm does with USP18",
    "pathways": [
      "ifn-gamma",
      "isg"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "gas",
    "to": "m1",
    "kind": "produce",
    "label": "STEP 9 — classical macrophage activation",
    "pathways": [
      "ifn-gamma",
      "metabolic"
    ],
    "evidence": "S",
    "loop": "C",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "cxcl9-11",
    "to": "responder-cell",
    "kind": "drive",
    "label": "recruits more responders — Loop C amplifies at tissue scale",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "loop": "C",
    "bend": 0.35,
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ]
  },
  {
    "from": "m1",
    "to": "mtros",
    "kind": "drive",
    "label": "STEP 10 — M1 metabolic reprogramming raises mtROS",
    "pathways": [
      "ifn-gamma",
      "mito"
    ],
    "evidence": "S",
    "loop": "C",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "m1",
    "to": "succinate",
    "kind": "produce",
    "label": "broken TCA cycle → succinate accumulation",
    "pathways": [
      "ifn-gamma",
      "metabolic"
    ],
    "evidence": "G",
    "loop": "C",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "nos2",
    "to": "etc-i",
    "kind": "inhibit",
    "label": "NO S-nitrosylates Complex I",
    "pathways": [
      "ifn-gamma",
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "nos2",
    "to": "etc-iv",
    "kind": "inhibit",
    "label": "NO competes with O₂ at cytochrome c oxidase",
    "pathways": [
      "ifn-gamma",
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "m1",
    "to": "deltapsi",
    "kind": "inhibit",
    "label": "M1 skewing accompanies ΔΨm collapse in Samhd1-KO",
    "pathways": [
      "ifn-gamma",
      "mito"
    ],
    "evidence": "S",
    "refs": [
      "xu2023vdac1"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "tlr7",
    "to": "pdc",
    "kind": "activate",
    "label": "ssRNA — a pDC expresses essentially only TLR7 and TLR9 among the TLRs",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "refs": [
      "uematsu2005"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "tlr9",
    "to": "pdc",
    "kind": "activate",
    "label": "CpG DNA — the receptor the LL-37 arm converts a SELF ligand for",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "refs": [
      "uematsu2005"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "irf7",
    "to": "pdc",
    "kind": "activate",
    "label": "constitutively high resting IRF7 licenses the burst — a licensing step, not lineage",
    "pathways": [
      "tlr",
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "honda2005"
    ],
    "bend": 0.3,
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "pdc",
    "to": "ifna",
    "kind": "produce",
    "label": "the IFN-α burst — the reason one rare cell type can set the interferon tone of a tissue",
    "pathways": [
      "tlr",
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "siegal1999",
      "uematsu2005"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "il23",
    "to": "il23r",
    "kind": "bind",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell"
    ]
  },
  {
    "from": "il23r",
    "to": "stat3",
    "kind": "phos",
    "label": "JAK2/TYK2 → STAT3",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "kinase_phosphorylation",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "from": "il6",
    "to": "stat3",
    "kind": "activate",
    "label": "IL-6 is the other STAT3 input — with TGF-β it initiates Th17",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell"
    ]
  },
  {
    "from": "stat3",
    "to": "rorgt",
    "kind": "produce",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "from": "rorgt",
    "to": "th17-cell",
    "kind": "activate",
    "label": "licenses the IL-17 programme",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "from": "th17-cell",
    "to": "il17a",
    "kind": "produce",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "from": "th17-cell",
    "to": "il22",
    "kind": "produce",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "from": "il1b",
    "to": "th17-cell",
    "kind": "activate",
    "label": "IL-1β is a Th17-stabilising signal — Loop B feeds the Th17 arm directly",
    "pathways": [
      "th17",
      "inflammasome"
    ],
    "evidence": "G",
    "bend": 0.25,
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell"
    ]
  },
  {
    "from": "il17a",
    "to": "il17ra",
    "kind": "bind",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cell_context": []
  },
  {
    "from": "il17ra",
    "to": "act1",
    "kind": "activate",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": []
  },
  {
    "from": "act1",
    "to": "traf6",
    "kind": "activate",
    "label": "IL-17 → NF-κB in the target tissue — a feed-forward at tissue level",
    "pathways": [
      "th17",
      "nfkb"
    ],
    "evidence": "G",
    "bend": 0.3,
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": []
  },
  {
    "from": "tnfa",
    "to": "il17ra",
    "kind": "activate",
    "label": "TNF-α synergy — IL-17 is weak alone and potent with it",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": []
  },
  {
    "from": "ifng",
    "to": "m1",
    "kind": "drive",
    "pathways": [
      "ifn-gamma"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "cxcl9-11",
    "to": "naci",
    "kind": "drive",
    "label": "CXCL10 as a NACI workup biomarker",
    "pathways": [
      "clinical"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "il22",
    "to": "psa",
    "kind": "drive",
    "pathways": [
      "clinical"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "il18r",
    "to": "il18r-nfkb",
    "kind": "activate",
    "sign": "+",
    "interaction_type": "catalytic_activation",
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ],
    "loop": "C",
    "label": "IL-18R recruits MyD88 → NF-κB"
  },
  {
    "from": "il18r-nfkb",
    "to": "ifng",
    "kind": "produce",
    "sign": "+",
    "interaction_type": "transcriptional_priming",
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ],
    "loop": "C",
    "label": "Transactivates IFN-γ in responder cells"
  }
];

