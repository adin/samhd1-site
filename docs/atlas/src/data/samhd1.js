export const nodes = [
  {
    "id": "samhd1",
    "label": "SAMHD1",
    "full": "SAM and HD domain-containing deoxynucleoside triphosphate triphosphohydrolase 1",
    "compartment": "cytosol",
    "klass": "restrict",
    "pathways": [
      "samhd1"
    ],
    "pos": [
      4,
      2,
      22
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Obligate homotetramer. dNTPase, replication-fork guardian, retroelement restrictor, innate-immune brake, mitochondrial stabiliser.",
    "detail": "The enzyme is allosterically gated: GTP/dGTP occupy allosteric site 1, the substrate dNTP occupies site 2, and only the fully loaded tetramer hydrolyses. Activity is further switched by CDK1/2–cyclin A phosphorylation at Thr592 — phospho-SAMHD1 retains the genome-stability functions while the dephospho form carries the dNTPase restriction activity. That split is why any therapy that changes total SAMHD1 protein must be evaluated for BOTH functions, not just the one being targeted.\n\nDELIBERATELY NOT AN EDGE — the SAMHD1/NK-function relation. It is context-dependent with opposite signs, so no single signed edge can carry it, and this note exists so the next person to reach for one hits the same wall rather than picking a direction. In the TUMOUR microenvironment SAMHD1 RESTRAINS NK killing: selectively depleting tumour-associated SAMHD1 improves NK-mediated killing (Sun 2025), and SAMHD1-expressing breast tumours carry shorter time-to-progression via downregulated IL-12 signalling (Gutiérrez-Chamorro 2024). In acute RETROVIRAL infection it does the reverse: Samhd1-KO mice mount weaker NK, CD4+ and CD8+ responses (Barrett 2022) — and only male mice did so. Different cell of origin, different direction, and one of the three findings is sex-limited. Signs multiply along paths in this model, so an edge whose sign cannot be defended is worse than a documented gap.",
    "samhd1": "Highly conserved down to zebrafish. Nuclear-predominant, but with functionally required cytosolic and mitochondrial pools. NOTE, and do not collapse this into an edge: the SAMHD1/NK-function relation is CONTEXT-DEPENDENT with opposite signs — SAMHD1 restrains NK killing in the tumour microenvironment (Sun 2025, Gutiérrez-Chamorro 2024) but supports NK/CD4/CD8 responses in acute retroviral infection, in male mice only (Barrett 2022). No signed edge is drawn for it, deliberately.",
    "refs": [
      "ji2014",
      "mccown2025",
      "franzolin2013",
      "daddacha2017",
      "sun2025nk",
      "gutierrez2024",
      "barrett2022"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Composite node citing 7 papers of mixed methodology: structural/recombinant (ji2014, mccown2025), cell-line (franzolin2013, daddacha2017), mouse (sun2025nk, barrett2022), and one real human clinical cohort (gutierrez2024, breast cancer patients). A single evidence_tier can't fairly represent all seven -- set to the majority-characteristic tier (cell-line/non-primary-human) rather than the strongest one, since the node's overall claim isn't specifically the gutierrez2024 finding. Fixed 2026-09-12; see redteam audit (commit 20ae777).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "db_xrefs": {
      "uniprot": "Q9Y3Z3",
      "ensembl": "ENSG00000101347",
      "hgnc": "HGNC:15925",
      "chembl": "CHEMBL4523507",
      "opentargets_ags": 0.809
    }
  },
  {
    "id": "a565t",
    "label": "p.A565T",
    "full": "SAMHD1 c.1693G>A (p.Ala565Thr), NM_015474.3 — rs779491090",
    "compartment": "cytosol",
    "klass": "outcome",
    "pathways": [
      "samhd1"
    ],
    "pos": [
      -6,
      10,
      30
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Heterozygous missense at the extreme C-terminal boundary of the phosphohydrolase HD domain — 27 residues from the T592 regulatory hinge.",
    "detail": "Introducing a polar, hydroxyl-bearing threonine at 565 warps the allosteric pocket walls of site 2 and destabilises the C-terminal regulatory lobe. The only direct functional data — Schneider, LMU Munich 2022 — showed 2.4× reduced protein stability at equal mRNA in LN-18 and THP-1, but ONLY in homozygous/complete-loss models. Heterozygous cells were never tested. gnomAD v4 AF ≈ 1.1×10⁻⁵.",
    "samhd1": "The interpretive constraint is clinical, and it is the honest part of this framework: the observed course is survival to middle age without AGS, with symptomatic improvement during acute viral illness. Both are inconsistent with complete dNTPase loss and consistent with ~40–60% residual activity — one functional allele. Enough to prevent AGS5, not enough to prevent a sustained low-grade interferonopathy. Because SAMHD1 is an obligate homotetramer, HD-domain missense variants can additionally poison wild-type tetramers, so real activity may sit below 50%.",
    "refs": [
      "schneider2022",
      "rentoft2016",
      "docSiege",
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
    "id": "samhd1-t592",
    "label": "p-SAMHD1 (T592)",
    "full": "Thr592-phosphorylated SAMHD1 — CDK1/2–cyclin A substrate",
    "compartment": "nucleus",
    "klass": "restrict",
    "pathways": [
      "samhd1",
      "genome"
    ],
    "pos": [
      -26,
      16,
      -18
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "The phospho-switch that partitions SAMHD1 between its dNTPase and its genome-stability roles.",
    "detail": "Phosphorylation at T592 also regulates LINE-1 restriction, tying the retroelement and genome-stability arms to the same residue.\n\nContext-dependence added 2026-09: the phospho-dependent fork functions this residue governs are protective in the Coquel 2018 regime (controlled MRE11 resection, fork restart) but pathological under STING-high conditions (Teodoro-Castro 2026 — see the ndd node). The p-T592:total ratio remains the monitoring biomarker, but the therapeutic window it's meant to catch is now bounded on BOTH sides, not just the amlexanox-starvation side.",
    "samhd1": "The p-T592/total-SAMHD1 RATIO — not total protein — is proposed as a therapeutic monitoring biomarker. It is the readout that would catch amlexanox starving the genome-stability arm while it improves inflammation.",
    "refs": [
      "herrmann2018",
      "doc10arm",
      "teodorocastro2026"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "samhd1-mito",
    "label": "SAMHD1 (mitochondrial pool)",
    "full": "Mitochondrion-localised SAMHD1",
    "compartment": "mitochondrion",
    "klass": "restrict",
    "pathways": [
      "samhd1",
      "mito"
    ],
    "pos": [
      40,
      12,
      36
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Diaz-Griffero's group showed SAMHD1 must be present INSIDE the mitochondrial compartment to prevent ΔΨm collapse and mtDNA release.",
    "detail": "This finding matters because it makes the mitochondrial arm a direct, local SAMHD1 function rather than a downstream consequence of cytosolic dNTP excess.",
    "refs": [
      "rabinowitz2025",
      "xu2023vdac1"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "dntp-pool",
    "label": "cytosolic dNTP pool",
    "full": "Cytosolic deoxynucleoside triphosphate pool (dATP, dCTP, dGTP, dTTP)",
    "compartment": "cytosol",
    "klass": "metabolite",
    "pathways": [
      "samhd1",
      "metabolic",
      "genome",
      "retro"
    ],
    "pos": [
      18,
      10,
      44
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Elevated 40–60% by dNTPase failure, with a disproportionate dGTP skew. The single upstream quantity from which four streams descend.",
    "detail": "Four streams descend from this one number:\n  PURPLE — PNC1/PNC2 overload → POLG stalling → ox-mtDNA → NLRP3 (Loop B)\n  BLUE   — mtDNA escape via VDAC1 → cGAS (Loop A bridge)\n  RED    — IFN-I → JAK-STAT → ISGs → mitophagy block, ETC suppression\n  GOLD   — dG catabolism → uric acid → MSU crystals → NLRP3 (second Loop B input)",
    "samhd1": "Measured by LC-MS/MS. This is the first-line Arm 1 readout, and the cheapest decisive experiment in the programme: a 40–60% elevation in primary heterozygous cells would establish that haploinsufficiency alone perturbs the pool, which no published work has yet shown.",
    "refs": [
      "franzolin2013",
      "docSiege",
      "doc10arm"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "The general SAMHD1-regulates-dNTP-pools mechanism (franzolin2013) was shown in mammalian cell lines, not primary human heterozygous cells -- L4_primary_human directly contradicted this node's own `samhd1` field, which says the specific 40-60% heterozygous elevation 'no published work has yet shown'. Fixed 2026-09-12; see redteam audit (commit 20ae777).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "fork",
    "label": "stalled replication fork",
    "full": "Stalled or reversed DNA replication fork",
    "compartment": "nucleus",
    "klass": "structure",
    "pathways": [
      "genome"
    ],
    "pos": [
      -44,
      -12,
      -24
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "SAMHD1 acts at stalled forks to prevent interferon induction — a nuclear, dNTPase-independent function.",
    "detail": "Coquel et al. showed SAMHD1 recruits MRE11 to degrade nascent DNA at stalled forks in a controlled way. Without it, the fork collapses instead, and the resulting single-stranded DNA fragments are released into the cytosol where cGAS binds them. This is interferon induction with no mitochondrion and no retroelement involved.",
    "refs": [
      "coquel2018",
      "park2021"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "mre11",
    "label": "MRE11",
    "full": "Meiotic recombination 11 — MRN complex nuclease",
    "compartment": "nucleus",
    "klass": "enzyme",
    "pathways": [
      "genome"
    ],
    "pos": [
      -58,
      -14,
      -22
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Recruited by SAMHD1 for controlled nascent-strand degradation at stalled forks.",
    "detail": "DELIBERATELY NOT AN EDGE — see the `ndd` node for why SAMHD1's recruitment of MRE11 here is dose/context-biphasic (protective at baseline per Coquel 2018, pathological when STING-driven per Teodoro-Castro 2026) and why no single signed samhd1→ndd edge is drawn for it.",
    "refs": [
      "coquel2018",
      "teodorocastro2026"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "db_xrefs": {
      "uniprot": "P49959",
      "ensembl": "ENSG00000020922",
      "hgnc": "HGNC:7230"
    }
  },
  {
    "id": "ndd",
    "label": "excess nascent-DNA degradation (NDD)",
    "full": "STING-driven excessive MRE11-mediated nascent DNA degradation at stalled forks",
    "compartment": "nucleus",
    "klass": "outcome",
    "pathways": [
      "genome"
    ],
    "pos": [
      -26,
      -13,
      -32
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Same SAMHD1-MRE11 resection machinery as the fork/mre11 nodes, driven to a pathological excess by nuclear STING.",
    "detail": "Dose is the point, not a new mechanism: controlled MRE11-mediated resection at stalled forks is fork restart and protective (Coquel 2018); the same activity, driven to excess by STING accumulation on chromatin, degrades forks instead (Teodoro-Castro 2026). SAMHD1 depletion rescues fork speed and symmetry specifically in STING-high cells, phenocopying STING abrogation.\n\nDELIBERATELY NOT AN EDGE — no samhd1→ndd edge is drawn. EDGE_KINDS in config.js has no unsigned kind: every kind (including `drive`) carries a fixed sign, and this relation flips sign with dose/context exactly like the SAMHD1/NK-function relation on the `samhd1` node — an edge whose sign cannot be defended is worse than a documented gap. What SAMHD1's presence does to fork outcome depends entirely on whether nuclear STING is high (pathological) or baseline (protective); that condition, not a sign, is what the next reader needs.",
    "samhd1": "OPEN QUESTION, not yet resolved by any published data specific to A565T: haploinsufficiency reduces dNTPase activity, but this axis is about SAMHD1's MRE11-recruitment/resection function, not its dNTPase function (the same phospho-T592-dependent split documented on the samhd1-t592 node). Whether partial A565T loss of function shifts a heterozygous cell's fork outcome toward the protective (Coquel) or pathological (Teodoro-Castro) regime under STING-high conditions is not established either way — do not guess a direction here.",
    "refs": [
      "teodorocastro2026",
      "coquel2018"
    ],
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): Teodoro-Castro 2026 demonstrated this in progerin fibroblasts/U2OS, not the myeloid/immune cells listed below (this atlas's own disease-relevant modeling target, not a tested system). This caveat previously lived in `samhd1` as an ad hoc \"CELL-CONTEXT NOTE\", moved to its proper schema field here.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "ctip",
    "label": "CtIP",
    "full": "CtBP-interacting protein (RBBP8) — end-resection initiator",
    "compartment": "nucleus",
    "klass": "enzyme",
    "pathways": [
      "genome"
    ],
    "pos": [
      -52,
      -6,
      -30
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "SAMHD1 recruits CtIP to double-strand breaks to initiate resection for homologous recombination.",
    "detail": "This is a scaffolding function entirely independent of dNTPase activity — which is why the genome-stability arm can fail even when residual enzymatic activity looks adequate.",
    "refs": [
      "daddacha2017"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "db_xrefs": {
      "uniprot": "Q99708",
      "ensembl": "ENSG00000101773",
      "hgnc": "HGNC:9888"
    }
  },
  {
    "id": "dsb",
    "label": "DNA double-strand break",
    "full": "DSB requiring homologous recombination or NHEJ",
    "compartment": "nucleus",
    "klass": "structure",
    "pathways": [
      "genome"
    ],
    "pos": [
      -48,
      -20,
      -18
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Repair choice here determines whether the cell keeps its genome or accumulates rearrangements.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "No refs -- a general DNA-repair-biology node with no independent citation of its own, not something 'demonstrated in primary human cells'. Fixed 2026-09-12; see redteam audit (commit 20ae777).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "rloop",
    "label": "R-loops",
    "full": "RNA:DNA hybrid with a displaced single DNA strand",
    "compartment": "nucleus",
    "klass": "structure",
    "pathways": [
      "genome",
      "retro"
    ],
    "pos": [
      -38,
      -18,
      -16
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "SAMHD1 prevents R-loop formation; accumulation drives transcription–replication conflict and breaks.",
    "detail": "Quantified by S9.6 immunofluorescence — a primary readout in the study and a safety signal in Arm 5, where amlexanox may worsen it by suppressing IRF3-driven SAMHD1 transcription.",
    "refs": [
      "park2021",
      "doc10arm"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "ssdna",
    "label": "cytosolic ssDNA fragments",
    "full": "Single-stranded DNA released from collapsed forks and resected breaks",
    "compartment": "cytosol",
    "klass": "ligand",
    "pathways": [
      "genome",
      "cgas-sting"
    ],
    "pos": [
      -26,
      -12,
      18
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "The genomic contribution to the cGAS ligand pool — parallel to the mitochondrial and retroelement routes.",
    "detail": "The Arm 7 vs Arm 8 comparison is designed to size this stream: if cGAS inhibition (Arm 8) suppresses ISGs more deeply than VDAC1 blockade (Arm 7), a non-mitochondrial DNA source — this one — is contributing meaningfully.",
    "refs": [
      "coquel2018",
      "doc10arm"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "genomic-instability",
    "label": "genomic instability",
    "full": "Cumulative replication error, HR failure and retroelement mutagenesis",
    "compartment": "nucleus",
    "klass": "outcome",
    "pathways": [
      "genome",
      "clinical"
    ],
    "pos": [
      -34,
      -30,
      -24
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Three converging pressures: elevated dNTP replication error load, impaired HR, and retroelement insertion burden — the first now has independent population-level grounding.",
    "detail": "Replication-error load (pressure 1 of 3) gains independent population-level grounding from Weischenfeldt/Macintyre/Reimand et al. 2026: replication-error-driven mutational processes are a dominant class in ~1/3 of primary prostate cancer genomes at cohort scale (959 donors), not merely a pressure predicted from this variant's own cascade. The study is signature-level and does NOT name or assay SAMHD1 — it corroborates the mechanism CLASS, not the gene.",
    "samhd1": "Translates into a cancer-surveillance rationale rather than a claim of present malignancy: prostate (BIK and SAMHD1 independently associated susceptibility genes in the same case-control cohort -- pavlovich2025, driven by specific missense variants BIK S87G and SAMHD1 Q465K/V112I, not A565T, and not a pedigree-linkage/co-segregation finding), colorectal (heterozygous SAMHD1 mutations), and haematological risk from SAMHD1's canonical tumour-suppressor role in myeloid and lymphoid lineages. It is also the reason the framework treats amlexanox as a tradeoff rather than a free anti-inflammatory.\n\nSurveillance instrument (added 2026-09, validation pending): Weischenfeldt et al. 2026's eight-signature integrated-mutational-footprint panel is projected by its authors to reach clinic \"within the next few years\" on existing sequencing platforms. If it does, it becomes the direct readout for the replication-error mutational pressure this variant predicts in tissue already carrying the BIK/SAMHD1 association signal above — named here as the ANTICIPATED instrument, not a currently validated one. Fixed 2026-09-13 (cell_context topical-fit literature audit): removed the \"OR 2.02\" figure and \"co-segregation\" framing -- neither could be verified against pavlovich2025's own abstract/tables; \"co-segregating\" specifically implies pedigree linkage the paper doesn't report. Re-add a specific OR only after confirming it against the paper's own results.",
    "refs": [
      "pavlovich2025",
      "daddacha2017",
      "docConcept",
      "weischenfeldt2026"
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
    "id": "samhd1-heterotetramer",
    "label": "SAMHD1 heterotetramer (2xWT + 2xA565T)",
    "full": "Heterozygous mixed homotetramer ensemble (Binomial 37.5% 2:2 stoichiometry)",
    "compartment": "cytosol",
    "klass": "complex",
    "pathways": [
      "samhd1",
      "metabolic"
    ],
    "pos": [
      2,
      10,
      -8
    ],
    "lod": 1,
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "kinetics": {
      "mixed_tetramer_fraction": 0.375,
      "mixed_tetramer_fraction_basis": "binomial_prediction: C(4,2)/2^4, assumes equal WT/A565T monomer abundance and random assembly -- not directly measured",
      "tetramer_Kd_uM": null,
      "hill_coefficient": null
    },
    "summary": "In A565T heterozygotes, SAMHD1 forms mixed 2xWT + 2xA565T tetramers retaining ~50% dNTPase but uncoupling cooperative PTM switches.",
    "detail": "Binomial distribution predicts 37.5% of complexes assemble as 2:2 heterotetramers (assumes equal WT/A565T abundance and random assembly). They maintain dosage-limited basal dNTPase activity (ipTM=0.81, an AlphaFold structure-prediction confidence metric, not a measured binding affinity) but suffer severe allosteric uncoupling at the phosphorylated C-terminal hinge.",
    "samhd1": "The structural basis for heterozygous haploinsufficiency with 100% phenotypic penetrance.",
    "modelNote": "OPEN 2026-09-12 -- no direct measurement exists for THIS specific mixed 2:2 complex's Kd/Hill coefficient. A prior version of this node carried tetramer_Kd_uM=2.4 and hill_coefficient=2.1 copied verbatim from the wild-type dntpase node's own sourced values (ref [7], Ji et al. 2014 PNAS) -- those describe wild-type tetramerization, not the mixed heterotetramer, and were never actually measured for this complex. Removed rather than left misleadingly precise; re-add only with its own citation. See redteam audit 2026-09-12 (commit 20ae777).",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): this node had no cell_context field at all, while both its own incident edges (a565t->samhd1-heterotetramer, samhd1-heterotetramer->dntp-pool) already correctly carried the myeloid+ipsc array. Added to match.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  }
];

export const edges = [
  {
    "from": "a565t",
    "to": "samhd1",
    "kind": "inhibit",
    "label": "2.4× reduced protein stability; ~40–60% residual dNTPase (one functional allele)",
    "pathways": [
      "samhd1"
    ],
    "evidence": "S",
    "refs": [
      "schneider2022",
      "rentoft2016"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): downgraded from the generic L4_primary_human template -- its citation's own system is a cell line/mouse, not primary human tissue.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1",
    "to": "samhd1-t592",
    "kind": "phos",
    "label": "CDK1/2–cyclin A phospho-switch",
    "pathways": [
      "samhd1",
      "genome"
    ],
    "evidence": "S",
    "refs": [
      "herrmann2018"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): downgraded from the generic L4_primary_human template -- its citation's own system is a cell line/mouse, not primary human tissue.",
    "interaction_type": "kinase_phosphorylation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1",
    "to": "samhd1-mito",
    "kind": "translocate",
    "label": "mitochondrial pool — required in situ",
    "pathways": [
      "samhd1",
      "mito"
    ],
    "evidence": "S",
    "refs": [
      "rabinowitz2025"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): downgraded from the generic L4_primary_human template -- its citation's own system is a cell line/mouse, not primary human tissue.",
    "interaction_type": "compartment_translocation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1",
    "to": "dntp-pool",
    "kind": "inhibit",
    "label": "dNTP triphosphohydrolase — the primary restriction",
    "pathways": [
      "samhd1",
      "metabolic"
    ],
    "evidence": "S",
    "refs": [
      "franzolin2013",
      "ji2014"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): downgraded from the generic L4_primary_human template -- its citation's own system is a cell line/mouse, not primary human tissue.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dntp-pool",
    "to": "pnc1",
    "kind": "drive",
    "label": "cytosolic excess floods the inner-membrane carriers",
    "pathways": [
      "samhd1",
      "mito",
      "metabolic"
    ],
    "evidence": "I",
    "refs": [
      "dolce2001",
      "liu2026nlrp3"
    ],
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dntp-pool",
    "to": "pnc2",
    "kind": "drive",
    "pathways": [
      "mito"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dntp-pool",
    "to": "urate",
    "kind": "produce",
    "label": "GOLD stream — dG catabolism → purine degradation → urate retention",
    "pathways": [
      "inflammasome",
      "metabolic"
    ],
    "evidence": "I",
    "loop": "B",
    "refs": [
      "martinon2006"
    ],
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dntp-pool",
    "to": "fork",
    "kind": "drive",
    "label": "unbalanced pools raise replication error rate",
    "pathways": [
      "genome"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1",
    "to": "irf7",
    "kind": "inhibit",
    "label": "BRAKE 1 — occupies the IRF7 inhibitory domain, blocking IKKε phosphorylation",
    "pathways": [
      "samhd1",
      "cgas-sting"
    ],
    "evidence": "S",
    "refs": [
      "espada2023"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "db_scores": {
      "string_combined": 0.814,
      "string_database": 0.5
    }
  },
  {
    "from": "samhd1",
    "to": "nfkb",
    "kind": "inhibit",
    "label": "BRAKE 4 — direct suppression of the NF-κB pathway",
    "pathways": [
      "samhd1",
      "nfkb"
    ],
    "evidence": "S",
    "refs": [
      "wang2018"
    ],
    "evidenceTierNote": "RESOLVED 2026-09-13 (cell_context topical-fit literature audit) -- wang2018 (real first author Chen S, see refs.js) verified via PubMed: Chen S et al., PNAS 2018;115(16):E3798-E3807 used THP-1, HEK293, PRIMARY HUMAN monocyte-derived macrophages, AND Samhd1-KO/heterozygous mice. L4_primary_human is correct; the OPEN flag from 2026-09-12 is closed. (Unlike the other edges in this file that were mistagged L4 -- espada2023, xu2023vdac1, daddacha2017, herrmann2018, rabinowitz2025, franzolin2013/ji2014, schneider2022/rentoft2016, yang2016irf3, all fixed to L3_cell_line in this same pass -- this one's primary-human claim actually holds up.)",
    "evidence_tier": "L4_primary_human",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1",
    "to": "mavs",
    "kind": "inhibit",
    "label": "impairs IFN-I induction through the MAVS–IKKε–IRF3/7 axis",
    "pathways": [
      "samhd1",
      "rlr-mavs"
    ],
    "evidence": "S",
    "refs": [
      "espada2023"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1",
    "to": "ikke",
    "kind": "inhibit",
    "pathways": [
      "samhd1"
    ],
    "evidence": "S",
    "refs": [
      "espada2023"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1-mito",
    "to": "vdac1",
    "kind": "bind",
    "label": "physical interaction on the outer membrane",
    "pathways": [
      "samhd1",
      "mito"
    ],
    "evidence": "S",
    "refs": [
      "xu2023vdac1"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): downgraded from the generic L4_primary_human template -- its citation's own system is a cell line/mouse, not primary human tissue.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1-mito",
    "to": "vdac1-oligo",
    "kind": "inhibit",
    "label": "the interaction RESTRAINS oligomerisation — losing it is what opens the macropore",
    "pathways": [
      "samhd1",
      "mito",
      "cgas-sting"
    ],
    "evidence": "S",
    "loop": "A",
    "refs": [
      "xu2023vdac1",
      "rabinowitz2025"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): downgraded from the generic L4_primary_human template -- its citation's own system is a cell line/mouse, not primary human tissue.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1-mito",
    "to": "deltapsi",
    "kind": "activate",
    "label": "presence in the compartment preserves ΔΨm",
    "pathways": [
      "samhd1",
      "mito"
    ],
    "evidence": "S",
    "refs": [
      "rabinowitz2025"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): downgraded from the generic L4_primary_human template -- its citation's own system is a cell line/mouse, not primary human tissue.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1",
    "to": "bik",
    "kind": "activate",
    "label": "SAMHD1 directly upregulates BIK in THP-1 cells",
    "pathways": [
      "samhd1",
      "mito"
    ],
    "evidence": "S",
    "refs": [
      "yang2025bik"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1",
    "to": "mtor",
    "kind": "inhibit",
    "label": "SAMHD1 → mTOR → MITF → CTSD autophagy-lysosomal axis",
    "pathways": [
      "samhd1",
      "mitophagy"
    ],
    "evidence": "S",
    "refs": [
      "yaxian2025"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): this edge was under-graded (evidence 'I', tier L1_in_silico) despite having a real, directly-on-point citation -- yaxian2025 is a myeloid-conditional Samhd1-KO MOUSE study directly demonstrating SAMHD1 loss -> PI3K/AKT/mTOR activation -> MITF nuclear translocation -> CTSD suppression, with rapamycin rescue in vivo. Upgraded to evidence 'S' (demonstrated in SAMHD1-deficient animals) and evidence_tier L3_cell_line (mouse).",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1-t592",
    "to": "ctip",
    "kind": "activate",
    "label": "recruits CtIP for end resection → homologous recombination",
    "pathways": [
      "samhd1",
      "genome"
    ],
    "evidence": "S",
    "refs": [
      "daddacha2017"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1-t592",
    "to": "mre11",
    "kind": "activate",
    "label": "controlled nascent-strand degradation at stalled forks",
    "pathways": [
      "samhd1",
      "genome"
    ],
    "evidence": "S",
    "refs": [
      "coquel2018"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "samhd1-t592",
    "to": "rloop",
    "kind": "inhibit",
    "label": "prevents R-loop formation",
    "pathways": [
      "samhd1",
      "genome"
    ],
    "evidence": "S",
    "refs": [
      "park2021"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "ctip",
    "to": "dsb",
    "kind": "inhibit",
    "label": "resection commits the break to homologous recombination — i.e. resolves it",
    "pathways": [
      "genome"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mre11",
    "to": "fork",
    "kind": "inhibit",
    "label": "fork protection — controlled resection prevents collapse",
    "pathways": [
      "genome"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "fork",
    "to": "ssdna",
    "kind": "produce",
    "label": "collapse → immunogenic ssDNA fragments into the cytosol",
    "pathways": [
      "genome",
      "cgas-sting"
    ],
    "evidence": "S",
    "refs": [
      "coquel2018"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "rloop",
    "to": "dsb",
    "kind": "drive",
    "label": "transcription–replication conflict",
    "pathways": [
      "genome"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dsb",
    "to": "genomic-instability",
    "kind": "drive",
    "pathways": [
      "genome"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "l1-insertion",
    "to": "genomic-instability",
    "kind": "drive",
    "label": "retroelement mutagenic burden",
    "pathways": [
      "genome",
      "retro"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dntp-pool",
    "to": "genomic-instability",
    "kind": "drive",
    "label": "replication error load",
    "pathways": [
      "genome"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "ssdna",
    "to": "cgas",
    "kind": "sense",
    "label": "genomic contribution to the cGAS ligand pool",
    "pathways": [
      "genome",
      "cgas-sting"
    ],
    "evidence": "S",
    "loop": "A",
    "refs": [
      "coquel2018"
    ],
    "evidenceNote": "Coquel et al. 2018 (Nature; PMID 29670289) explicitly reports single-stranded DNA activating cGAS-STING in this system -- this edge correctly reflects its cited source, despite cGAS's canonical dsDNA preference. Methodology was HEK293/HeLa cell lines, not primary human tissue (per the paper's own MeSH terms), hence L3 not L4. Verified 2026-09-12; see redteam audit (commit 20ae777). Fixed 2026-09-13 (cell_context topical-fit literature audit): added the missing refs entry itself -- this note already named coquel2018 as the source but the edge had no refs array, leaving its L3_cell_line tier technically unsupported by any citation field.",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "nucleic_acid_sensing",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "sting",
    "to": "samhd1",
    "kind": "drive",
    "label": "Nuclear STING engages SAMHD1-dependent fork pathology in the tested STING-high cellular context (fibroblasts/U2OS)",
    "pathways": [
      "samhd1",
      "cgas-sting"
    ],
    "evidence": "S",
    "bend": 0.4,
    "detail": "Closes a feedforward loop distinct from the existing irf3→samhd1 transcriptional edge: STING's contribution to dNTP depletion and NDD is MEDIATED BY SAMHD1 (Teodoro-Castro 2026) — a functional engagement of SAMHD1's existing resection/dNTPase activity by the nuclear STING pool, not necessarily new SAMHD1 transcription. The existing irf3→samhd1 edge is the \"upward\" therapeutic direction (Arms 3–4); this edge is the reason that direction now has a ceiling — raising SAMHD1 in a cell with elevated nuclear STING risks feeding the same pathological axis (see the polyiclc and ndd nodes).",
    "refs": [
      "teodorocastro2026"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). Demonstrated in progerin-inducible fibroblasts and U2OS only, not myeloid/immune cells -- ipsc is this atlas's own disease-relevant modeling target, not a tested system (this caveat previously lived in `detail` as an ad hoc \"CELL-CONTEXT NOTE\", moved to its proper schema field here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dsb",
    "to": "micronucleus",
    "kind": "produce",
    "pathways": [
      "genome"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico. A real micronucleus-rupture citation (e.g. Mackenzie/Harding 2017) could restore a higher tier if added properly; not added here since it isn't currently in refs.js and shouldn't be asserted without verification.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "irf3",
    "to": "samhd1",
    "kind": "produce",
    "label": "IRF3 induces SAMHD1 transcription — the \"upward\" therapeutic direction (Arms 3–4)",
    "pathways": [
      "samhd1",
      "cgas-sting"
    ],
    "evidence": "S",
    "bend": 0.4,
    "refs": [
      "yang2016irf3"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): downgraded from the generic L4_primary_human template -- its citation's own system is a cell line/mouse, not primary human tissue.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- none of this file's 28 citations demonstrate T-cell-intrinsic SAMHD1 biology (the classic resting-CD4-T-cell HIV-1 restriction literature is absent from this file's refs). Corrected to ipsc, matching this edge's own endpoint nodes' cell_context (all 11 non-empty nodes already correctly carry ipsc, a decision validated in an earlier session and not reopened here). See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "a565t",
    "to": "samhd1-heterotetramer",
    "kind": "produce",
    "sign": "+",
    "interaction_type": "catalytic_activation",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "label": "Assembles into 2:2 mixed tetramers"
  },
  {
    "from": "samhd1-heterotetramer",
    "to": "dntp-pool",
    "kind": "inhibit",
    "sign": "-",
    "interaction_type": "allosteric_suppression",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit follow-up): zero refs -- config.js caps a zero-refs entry at L1_in_silico. (Tier already correct; this note documents why, closing a gap Jules PR review caught on ifn.js and that also applied here.)",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "label": "Preserves partial ~50% dNTP depletion"
  }
];

