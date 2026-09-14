/**
 * ifn.js — interferon output and the receptor cascade that reads it back.
 *
 * IFN-β/α → IFNAR1/2 → JAK1 + TYK2 → STAT1/STAT2/IRF9 (ISGF3) → ISRE → ISGs.
 * IFN-γ → IFNGR1/2 → JAK1 + JAK2 → STAT1 homodimer (GAF) → GAS.
 * IFN-λ → IFNLR1/IL10RB → same JAK1/TYK2 module, epithelial-restricted.
 *
 * Also holds the ISG effector layer, the two negative-feedback brakes
 * (USP18 and SOCS), and the transcriptional targets in the nucleus.
 */

export const nodes = [
  {
    "id": "ifnb",
    "label": "IFN-β",
    "full": "Interferon beta-1 (IFNB1)",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "ifn-jak",
      "cgas-sting"
    ],
    "pos": [
      -8,
      92,
      10
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "The single-gene first-wave interferon. IRF3-driven, requires no new protein synthesis.",
    "samhd1": "Tonic and moderate-amplitude rather than surging — the signature the concept note names NACI (Non-Acute Chronic Interferonopathy).",
    "refs": [
      "docConcept",
      "tesser2025"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "P01574",
      "ensembl": "ENSG00000171855",
      "hgnc": "HGNC:5434"
    }
  },
  {
    "id": "ifna",
    "label": "IFN-α (13 subtypes)",
    "full": "Interferon alpha family",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      10,
      94,
      4
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "The second-wave amplifier set, driven by IRF7 rather than IRF3.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "P01562",
      "ensembl": "ENSG00000188383",
      "hgnc": "HGNC:5431"
    }
  },
  {
    "id": "ifng",
    "label": "IFN-γ",
    "full": "Interferon gamma — the type II interferon",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "ifn-jak",
      "clinical"
    ],
    "pos": [
      36,
      90,
      -12
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Different receptor, different STAT dimer, overlapping ISG output. Suppresses procollagen synthesis via STAT1 antagonism of TGF-β/Smad3.",
    "detail": "Tonic IFN-γ suppresses type I collagen (COL1A1/COL1A2) transcription via STAT1 competition for p300/CBP and Smad7 induction, antagonizing anabolic TGF-β/Smad3 signaling in dermal fibroblasts (Hit 1; Ghosh 2001, Ulloa 1999). As a disease-model hypothesis, concomitant TNF-α-driven matrix metalloproteinase (MMP-1/MMP-3) induction (Hit 2; Ågren 2015) could plausibly uncouple matrix synthesis from degradation and contribute to connective-tissue pathology; direct evidence in SAMHD1-associated disease is not yet available.",
    "refs": [
      "ghosh2001",
      "ulloa1999",
      "agren2015"
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
    "id": "ifnl",
    "label": "IFN-λ",
    "full": "Type III interferon (IL-28/IL-29)",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "ifn-jak",
      "ankib1"
    ],
    "pos": [
      -28,
      90,
      -6
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Epithelial-restricted receptor, identical downstream JAK module. Also driven by the ANKIB1 K11-Ub node.",
    "refs": [
      "betrancourt2026"
    ],
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): this node's own summary says 'epithelial-restricted' -- the generic myeloid template does not fit at all. This atlas's cell_context vocabulary has no epithelial-cell token, so left empty rather than force a wrong immune-lineage tag or invent a new value unprompted.",
    "cell_context": []
  },
  {
    "id": "il6",
    "label": "IL-6",
    "full": "Interleukin-6",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "nfkb",
      "clinical"
    ],
    "pos": [
      -42,
      86,
      18
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "NF-κB output; dose-dependently elevated in ME/CFS PBMCs after poly I:C stimulation.",
    "refs": [
      "che2025"
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
    "id": "tnfa",
    "label": "TNF-α",
    "full": "Tumour necrosis factor alpha",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "nfkb",
      "mito"
    ],
    "pos": [
      -16,
      88,
      34
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Drives sublethal chronic mPTP opening via ROS — a persistent cytochrome-c leak rather than an execution signal.",
    "refs": [
      "shoshan2020"
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
    "id": "il23",
    "label": "IL-23",
    "full": "Interleukin-23",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "nfkb",
      "clinical"
    ],
    "pos": [
      2,
      86,
      -30
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Local myeloid cytokine output in human enthesis tissue (Bridgewood 2019). Inferred in SpA disease models to support local inflammation.",
    "refs": [
      "bridgewood2019"
    ],
    "evidence_tier": "L4_primary_human",
    "evidenceTierNote": "Bridgewood 2019 demonstrated that CD14+ myeloid cells in normal human enthesis tissue produce IL-23 upon stimulation (ex vivo primary human tissue).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "il17a",
    "label": "IL-17A",
    "full": "Interleukin-17A — Th17 effector",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "clinical"
    ],
    "pos": [
      18,
      84,
      -36
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "IL-17A was measured in peripheral blood as part of a PsA cytokine panel, but was not significantly elevated, and the study did not connect IL-17A to DNA damage or the reduced IFN-I score.",
    "refs": [
      "fragoulis2023"
    ],
    "evidence_tier": "L6_human_clinical",
    "evidenceTierNote": "Fragoulis 2023 investigated DNA damage and type I IFN scores in PsA PBMCs, observing increased DNA damage alongside a lower IFN-I score; IL-17A was measured as part of a peripheral cytokine panel but was not significantly elevated and was not connected to DNA damage or IFN score. Extrapolation to entheseal tissue pathology represents an imported spondyloarthritis disease hypothesis rather than an empirical finding of this paper.",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): this node's own `full` field says 'Th17 effector' -- IL-17A is made by Th17/ILC3/gammadelta T cells, not monocytes/macrophages/microglia/DCs. Narrowed to match cytokines.js's th17-cell node (same citation, already correctly cd4_tcell-only per PR #112) -- the myeloid template had been left on the cytokine itself while PR #112 fixed the surrounding Th17 axis nodes.",
    "cell_context": [
      "cd4_tcell"
    ]
  },
  {
    "id": "mcp1",
    "label": "MCP-1 / CCL2",
    "full": "Monocyte chemoattractant protein 1",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "metabolic",
      "clinical"
    ],
    "pos": [
      48,
      84,
      4
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "IRF7 transactivates MCP-1 specifically in VISCERAL adipocytes, not subcutaneous ones.",
    "samhd1": "This tissue specificity is the mechanistic explanation for android-pattern adiposity with no subcutaneous lower-body accumulation — a metabolic phenotype produced by an immune transcription factor.",
    "refs": [
      "kuroda2020",
      "li2013irf7"
    ],
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): this node's own summary specifically says VISCERAL ADIPOCYTES, not subcutaneous ones -- the generic myeloid template does not fit at all. Left empty pending an adipocyte vocabulary token; see ifnl's note for the same pattern.",
    "cell_context": []
  },
  {
    "id": "gdf15",
    "label": "GDF15",
    "full": "Growth differentiation factor 15 — mitochondrial stress cytokine",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "metabolic",
      "mito"
    ],
    "pos": [
      -54,
      84,
      -6
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "The canonical circulating readout of integrated mitochondrial stress; elevated post-exercise in ME/CFS.",
    "refs": [
      "che2025"
    ],
    "evidence_tier": "L6_human_clinical",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): che2025 is a human ME/CFS clinical cohort, not a cell-line study -- upgraded from the generic L3_cell_line template.",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): this node's own summary calls GDF15 'the canonical CIRCULATING readout' -- a plasma biomarker, not a cell-intrinsic myeloid claim. Matched to the systemic clinical-outcome array (see drugs.js's mecfs node) rather than the generic myeloid template, same convention PR #112 used for mcp1/psa/pem. Softer than those cases since ISR-driven GDF15 genuinely is produced by myeloid cells -- the systemic array better represents 'circulating readout' than a producing-cell claim would.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "id": "ifnar1",
    "label": "IFNAR1",
    "full": "Interferon alpha/beta receptor subunit 1",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      -16,
      64,
      16
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Low-affinity subunit, constitutively associated with TYK2. Ligand affinity here sets ISG-response breadth.",
    "refs": [
      "rabinowitz2025"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "P17181",
      "ensembl": "ENSG00000142166",
      "hgnc": "HGNC:5432"
    }
  },
  {
    "id": "ifnar2",
    "label": "IFNAR2",
    "full": "Interferon alpha/beta receptor subunit 2",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "ifn-jak",
      "isg"
    ],
    "pos": [
      -2,
      64,
      21
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "High-affinity subunit bound to JAK1; the docking site for the USP18 negative-feedback brake.",
    "samhd1": "USP18 is stabilised by ISG15 and is the primary IFNAR2 brake. In this disease the brake is present and even upregulated — it is simply overwhelmed by an upstream genetic drive it cannot reach.",
    "refs": [
      "zhang2015isg15"
    ],
    "evidence_tier": "L4_primary_human",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): converged to L4_primary_human, matching the isg15 node and isg15->usp18 edge which already correctly carry this tier on the same citation (zhang2015isg15 = human ISG15-deficiency patient cells).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "P48551",
      "ensembl": "ENSG00000159110",
      "hgnc": "HGNC:5433"
    }
  },
  {
    "id": "jak1",
    "label": "JAK1",
    "full": "Janus kinase 1",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      -18,
      54,
      14
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Shared by type I, type II and type III interferon receptors. The pharmacologic choke point of the whole ISG arm.",
    "samhd1": "JAK inhibition can suppress interferon-associated systemic manifestations in biallelic SAMHD1 deficiency and other AGS genotypes, but responses are variable, neurological benefit is limited, and effects on bioenergetic abnormalities or heterozygous p.Ala565Thr disease remain unestablished. The working model predicts that residual manifestations may reflect mechanisms not routed through JAK–STAT, including Loop B, direct mitochondrial injury, and upstream ANKIB1-associated priming.",
    "drugs": [
      "upadacitinib"
    ],
    "refs": [
      "doc10arm",
      "fremond2023",
      "rodriguez2023"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Updated 2026-09-14: rodriguez2023 verified and resolved to Emreol HE et al., Rheumatology 2026;65(1):keaf695 (PMID 41496005), confirming a pediatric homozygous SAMHD1 cohort treated with JAK inhibitors (tofacitinib) showing variable but positive clinical responses. Note: fremond2023 remains a cross-genotype AGS real-world benchmark (RNASEH2B/ADAR1/TREX1/IFIH1/RNU7-1).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "P23458",
      "ensembl": "ENSG00000162434",
      "hgnc": "HGNC:6190",
      "chembl": "CHEMBL2835"
    }
  },
  {
    "id": "tyk2",
    "label": "TYK2",
    "full": "Tyrosine kinase 2",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      -2,
      54,
      21
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Partners JAK1 on IFNAR1. Human TYK2 deficiency is well tolerated, which is what makes it a clean drug target.",
    "detail": "TYK2 also serves IL-12 and IL-23, so TYK2 blockade hits the Th17/psoriatic arm as well as the interferon arm — relevant given the confirmed PsA diagnosis.",
    "drugs": [
      "brepocitinib"
    ],
    "refs": [
      "docGlass"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "P29597",
      "ensembl": "ENSG00000105397",
      "hgnc": "HGNC:12440",
      "chembl": "CHEMBL3553"
    }
  },
  {
    "id": "jak2",
    "label": "JAK2",
    "full": "Janus kinase 2",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      34,
      50,
      -16
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Partners JAK1 on IFNGR. Also the erythropoietin/thrombopoietin kinase — the source of JAK-inhibitor cytopenias.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "ifngr",
    "label": "IFNGR1/2",
    "full": "Interferon gamma receptor",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      36,
      60,
      -16
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Uses JAK1 + JAK2 → STAT1 homodimer (GAF) → GAS elements.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "ifnlr",
    "label": "IFNLR1/IL10RB",
    "full": "Type III interferon receptor",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      -34,
      60,
      -6
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Epithelial-restricted; converges on the same JAK1/TYK2 → ISGF3 module.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): same as the ifnl node -- 'epithelial-restricted' per its own summary, no myeloid basis. Left empty pending an epithelial-cell vocabulary token; see ifnl's note.",
    "cell_context": []
  },
  {
    "id": "il1r",
    "label": "IL-1R1",
    "full": "Interleukin-1 receptor type 1",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "inflammasome",
      "nfkb"
    ],
    "pos": [
      34,
      62,
      22
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Reads IL-1β back into MyD88 → NF-κB — how Loop B keeps its own priming signal alive.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "tnfr",
    "label": "TNFR1",
    "full": "Tumour necrosis factor receptor 1",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "nfkb",
      "mito"
    ],
    "pos": [
      -24,
      62,
      36
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "NF-κB activation and, via ROS, chronic sublethal mPTP opening.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "stat1",
    "label": "STAT1",
    "full": "Signal transducer and activator of transcription 1",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "ifn-jak",
      "metabolic"
    ],
    "pos": [
      -26,
      42,
      20
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Y701-phosphorylated by JAK1/TYK2. Forms ISGF3 with STAT2/IRF9, or GAF homodimers downstream of IFN-γ.",
    "samhd1": "SAMHD1-KO monocytes show persistent JAK–STAT1/2 and ISG activation that JAK inhibition normalises. STAT1 also directly represses PGC-1α transcription, so the interferon arm suppresses mitochondrial biogenesis as a transcriptional side effect.",
    "drugs": [
      "upadacitinib"
    ],
    "refs": [
      "rabinowitz2025",
      "bhimavarapu2015"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): neither ref is primary human tissue -- rabinowitz2025 is SAMHD1-KO THP-1 monocytes (a cell line, matching the ifnar1 node's own correct tier on this same ref) and bhimavarapu2015 (real author: Sisler et al. 2015, see refs.js) is a mouse study. L4_primary_human was wrong; L3_cell_line is the best fit config.js offers without introducing an unused L5_animal_in_vivo tier for a single mixed-evidence node.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "P42224",
      "ensembl": "ENSG00000115415",
      "hgnc": "HGNC:11362"
    }
  },
  {
    "id": "stat2",
    "label": "STAT2",
    "full": "Signal transducer and activator of transcription 2",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      -16,
      44,
      24
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Type-I-specific; provides the transactivation domain of ISGF3.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico. Also, evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "P52630",
      "ensembl": "ENSG00000170581",
      "hgnc": "HGNC:11363"
    }
  },
  {
    "id": "irf9",
    "label": "IRF9",
    "full": "Interferon regulatory factor 9 (p48)",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      -22,
      48,
      30
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "The DNA-binding subunit of ISGF3; supplies ISRE specificity.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "isgf3",
    "label": "ISGF3",
    "full": "Interferon-stimulated gene factor 3 (STAT1:STAT2:IRF9)",
    "compartment": "nucleus",
    "klass": "complex",
    "pathways": [
      "ifn-jak",
      "isg"
    ],
    "pos": [
      -40,
      30,
      -2
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "The type-I interferon transcription complex. Binds ISRE elements across several hundred ISGs.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico. Also, evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "pyr-stat1",
    "label": "pyr-STAT1 (K201)",
    "full": "STAT1 Lys201 pyruvilation via glycolytic overflow",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "ifn-jak",
      "metabolic"
    ],
    "pos": [
      -20,
      36,
      14
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Glycolytic overflow covalently pyruvilates STAT1 at Lys201, selectively disrupting STAT1–STAT2 heterodimerization.",
    "detail": "Zuo et al. (Cell 2026) established that pyruvate modification of STAT1 at Lys201 uncouples Type I IFN antiviral transcriptional output from upstream cGAS–STING drive without blunting NF-κB or STAT3 inflammatory signaling. This resolves the central paradox of heightened viral susceptibility despite sustained interferon pathway activation.",
    "refs": [
      "zuo2026"
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
    "id": "ifnb1-gene",
    "label": "IFNB1 locus",
    "full": "IFN-β gene — the enhanceosome",
    "compartment": "nucleus",
    "klass": "structure",
    "pathways": [
      "cgas-sting",
      "rlr-mavs",
      "tlr"
    ],
    "pos": [
      -30,
      22,
      -8
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Requires IRF3 dimers (PRDIII-I) AND NF-κB (PRDII) AND ATF2/c-Jun on the same enhanceosome.",
    "detail": "The AND-gate architecture is why interferon induction is normally so hard to trigger — and why priming several inputs at once, as the ANKIB1 node does, changes the output so dramatically.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "isre",
    "label": "ISRE elements",
    "full": "Interferon-stimulated response elements",
    "compartment": "nucleus",
    "klass": "structure",
    "pathways": [
      "ifn-jak",
      "isg"
    ],
    "pos": [
      -48,
      18,
      -4
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "ISGF3 binding sites upstream of several hundred interferon-stimulated genes.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "gas",
    "label": "GAS elements",
    "full": "Gamma-activated sequences",
    "compartment": "nucleus",
    "klass": "structure",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      -42,
      28,
      -22
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "STAT1-homodimer (GAF) binding sites — the type II interferon transcriptional programme.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "isg-set",
    "label": "ISG programme",
    "full": "Interferon-stimulated gene set (IFIT1, MX1, OAS, IFI27, ISG15, USP18, RSAD2…)",
    "compartment": "nucleus",
    "klass": "complex",
    "pathways": [
      "isg",
      "ifn-jak"
    ],
    "pos": [
      -54,
      8,
      -12
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Several hundred genes. The quantitative ISG score is the practical clinical biomarker of this disease.",
    "samhd1": "The concept note predicts a SERONEGATIVE profile: standard serum cytokine panels normal, but intracellular ISG expression elevated. Workup should target IFN-α/β, free ISG15, CXCL10 and ISG scoring rather than a conventional cytokine panel.",
    "refs": [
      "tesser2025",
      "docConcept",
      "han2026"
    ],
    "evidence_tier": "L6_human_clinical",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): tesser2025 is a 39-patient human clinical cohort (whole-blood RT-qPCR validation study), not a cell-line study -- upgraded from the generic L3_cell_line template. han2026 (SAMHD1-AGS patient PBMC scRNA-seq) added as a directly relevant citation -- its top upregulated genes (IFIT1, IFIT3, IFI44L, ISG15, OAS1) are this node's own gene list.",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): cd4_tcell's only real basis anywhere in this atlas's ISG-programme/IFN-receptor machinery is han2026's SAMHD1-AGS patient PBMC scRNA-seq (also the basis for cd4_tcell in sensing.js's cgas node) -- no other citation in ifn.js resolves a T cell. Kept, since IFNAR/JAK-STAT signaling is genuinely constitutive on T cells and this is this file's closest citation to a real basis, but caveated: han2026's abstract describes whole-PBMC (not cell-sorted) scRNA-seq from a single patient, and CD4-cluster-level ISG resolution could not be independently confirmed from the abstract alone (full text is paywalled). Worth re-verifying against full text since two files now lean on this claim.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "pgc1a",
    "label": "PGC-1α",
    "full": "PPARG coactivator 1-alpha — master mitochondrial biogenesis regulator",
    "compartment": "nucleus",
    "klass": "tf",
    "pathways": [
      "metabolic",
      "mito"
    ],
    "pos": [
      -16,
      12,
      -34
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Directly repressed by IFN-I/STAT1 → mitochondrial biogenesis failure.",
    "detail": "STAT1-knockout hepatocytes show higher mtDNA content and more mitochondria — the clean demonstration that this repression is real and reversible. Stressor #5 of the mitochondrial figure.",
    "refs": [
      "bhimavarapu2015"
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
    "id": "isg15",
    "label": "ISG15",
    "full": "Interferon-stimulated gene 15 — ubiquitin-like modifier",
    "compartment": "cytosol",
    "klass": "effector",
    "pathways": [
      "isg",
      "mitophagy"
    ],
    "pos": [
      -42,
      22,
      30
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "The hinge of the whole ISG arm: stabilises the USP18 brake, but also ISGylates MFN1/2 and BECN1 to block mitophagy.",
    "detail": "ISG15 is simultaneously protective and destructive here. Free ISG15 stabilises USP18 (the IFNAR2 brake), while conjugated ISG15 shuts down the two autophagy routes the cell needs to clear the mitochondria that are generating the ligand. Knockdown restores flux, ΔΨm and ATP.",
    "refs": [
      "zhang2015isg15",
      "deng2024",
      "xu2015becn1"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "P05161",
      "ensembl": "ENSG00000187608",
      "hgnc": "HGNC:6153"
    }
  },
  {
    "id": "usp18",
    "label": "USP18",
    "full": "Ubiquitin-specific peptidase 18 — the primary IFNAR2 brake",
    "compartment": "cytosol",
    "klass": "effector",
    "pathways": [
      "isg",
      "ifn-jak"
    ],
    "pos": [
      -32,
      46,
      12
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Sterically displaces JAK1 from IFNAR2. Its protease activity is dispensable for this function.",
    "samhd1": "Tonic IFN upregulates ISG15, which stabilises USP18 — but this compensatory axis is constitutively overwhelmed by the upstream genetic defect. A brake that is fully engaged and still losing.",
    "refs": [
      "zhang2015isg15"
    ],
    "evidence_tier": "L4_primary_human",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): converged to L4_primary_human, matching the isg15 node and isg15->usp18 edge which already correctly carry this tier on the same citation (zhang2015isg15 = human ISG15-deficiency patient cells).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "Q9UMW8",
      "ensembl": "ENSG00000184981",
      "hgnc": "HGNC:12629"
    }
  },
  {
    "id": "socs",
    "label": "SOCS1/3",
    "full": "Suppressor of cytokine signalling 1 and 3",
    "compartment": "cytosol",
    "klass": "effector",
    "pathways": [
      "isg",
      "ifn-jak"
    ],
    "pos": [
      -38,
      50,
      22
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Second brake layer: direct JAK inhibition plus ElonginBC-Cul2 ubiquitination of receptor complexes.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "id": "irf1",
    "label": "IRF1",
    "full": "Interferon regulatory factor 1",
    "compartment": "nucleus",
    "klass": "tf",
    "pathways": [
      "isg"
    ],
    "pos": [
      -36,
      36,
      -18
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Drives PARP12 → ISG15 in the axis that ISGylates MFN1/2 and blocks PINK1/Parkin mitophagy.",
    "refs": [
      "deng2024"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  }
];

export const edges = [
  {
    "from": "irf3",
    "to": "ifnb1-gene",
    "kind": "translocate",
    "label": "dimer → nuclear import → PRDIII-I",
    "pathways": [
      "cgas-sting",
      "rlr-mavs",
      "tlr"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "compartment_translocation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "nfkb",
    "to": "ifnb1-gene",
    "kind": "activate",
    "label": "PRDII — the AND-gate partner",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifnb1-gene",
    "to": "ifnb",
    "kind": "produce",
    "label": "IFN-β synthesis and secretion",
    "pathways": [
      "cgas-sting",
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "irf7",
    "to": "ifna",
    "kind": "produce",
    "label": "second-wave IFN-α subtypes",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "irf7",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "irf3",
    "to": "ifnl",
    "kind": "produce",
    "pathways": [
      "ankib1",
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "betrancourt2026"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): this is the IFN-lambda PRODUCTION arm, kept myeloid/DC -- pDCs/cDCs are significant IFN-lambda producers. Distinct from ifnl->ifnlr/ifnlr->jak1 (the RECEPTION arm, cleared to [] since IFNLR1 expression is epithelial/neutrophil-restricted). The ifnl node's own summary conflates production and reception by calling the ligand itself 'epithelial-restricted' when only the receptor is.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifnb",
    "to": "ifnar1",
    "kind": "bind",
    "label": "autocrine and paracrine",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifnb",
    "to": "ifnar2",
    "kind": "bind",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifna",
    "to": "ifnar1",
    "kind": "bind",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "irf7",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifng",
    "to": "ifngr",
    "kind": "bind",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifnl",
    "to": "ifnlr",
    "kind": "bind",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): this edge and ifnlr->jak1 are the IFN-lambda RECEPTION arm -- IFNLR1 is epithelial/neutrophil-restricted (this is what the ifnl/ifnlr nodes' own PR #112 clearing to [] already established), so an edge between two [] nodes inherited the myeloid template with zero overlap to either endpoint (the disjoint-check violation PR #112 defined). Cleared to match. This is distinct from IFN-lambda PRODUCTION (see irf3->ifnl), which is not epithelial-restricted and correctly keeps myeloid/DC.",
    "cell_context": []
  },
  {
    "from": "il1b",
    "to": "il1r",
    "kind": "bind",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "G",
    "loop": "B",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "tnfa",
    "to": "tnfr",
    "kind": "bind",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "il1r",
    "to": "myd88",
    "kind": "activate",
    "label": "TIR-domain recruitment",
    "pathways": [
      "nfkb",
      "inflammasome"
    ],
    "evidence": "G",
    "loop": "B",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "tnfr",
    "to": "ikk",
    "kind": "activate",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "tnfr",
    "to": "mptp",
    "kind": "drive",
    "label": "ROS → chronic sublethal mPTP opening (stressor S8)",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "refs": [
      "shoshan2020"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifnar1",
    "to": "tyk2",
    "kind": "activate",
    "label": "constitutively associated",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifnar2",
    "to": "jak1",
    "kind": "activate",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifngr",
    "to": "jak2",
    "kind": "activate",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifngr",
    "to": "jak1",
    "kind": "activate",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifnlr",
    "to": "jak1",
    "kind": "activate",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): same reasoning as ifnl->ifnlr -- IFN-lambda reception is epithelial/neutrophil-restricted, matching the ifnl/ifnlr nodes' own [] clearing from PR #112. Cleared to match rather than left as a disjoint edge.",
    "cell_context": []
  },
  {
    "from": "jak1",
    "to": "stat1",
    "kind": "phos",
    "label": "Y701",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "kinase_phosphorylation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_scores": {
      "string_combined": 0.999,
      "string_experimental": 0.985,
      "string_database": 0.9
    }
  },
  {
    "from": "tyk2",
    "to": "stat2",
    "kind": "phos",
    "label": "Y690",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "kinase_phosphorylation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "jak2",
    "to": "stat1",
    "kind": "phos",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "kinase_phosphorylation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "stat1",
    "to": "pyr-stat1",
    "kind": "drive",
    "label": "STAT1 Lys201 pyruvilation",
    "pathways": [
      "ifn-jak",
      "metabolic"
    ],
    "evidence": "G",
    "refs": [
      "zuo2026"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "glycolysis",
    "to": "pyr-stat1",
    "kind": "drive",
    "label": "glycolytic pyruvate overflow drives pyruvilation",
    "pathways": [
      "ifn-jak",
      "metabolic"
    ],
    "evidence": "G",
    "refs": [
      "zuo2026"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "pyr-stat1",
    "to": "isgf3",
    "kind": "inhibit",
    "label": "blocks STAT1–STAT2 heterodimerization; uncouples antiviral ISGs",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "zuo2026"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "stat1",
    "to": "isgf3",
    "kind": "bind",
    "label": "STAT1:STAT2:IRF9 assembly",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_scores": {
      "string_combined": 0.999,
      "string_experimental": 0.99,
      "string_database": 0.9
    }
  },
  {
    "from": "stat2",
    "to": "isgf3",
    "kind": "bind",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "irf9",
    "to": "isgf3",
    "kind": "bind",
    "label": "supplies ISRE DNA-binding specificity",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "stat1",
    "to": "gas",
    "kind": "translocate",
    "label": "GAF homodimer → GAS",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "compartment_translocation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isgf3",
    "to": "isre",
    "kind": "bind",
    "pathways": [
      "ifn-jak",
      "isg"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isre",
    "to": "isg-set",
    "kind": "produce",
    "label": "several hundred ISGs",
    "pathways": [
      "isg"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "gas",
    "to": "isg-set",
    "kind": "produce",
    "pathways": [
      "isg"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isg-set",
    "to": "isg15",
    "kind": "produce",
    "pathways": [
      "isg"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isg-set",
    "to": "usp18",
    "kind": "produce",
    "pathways": [
      "isg"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isg-set",
    "to": "socs",
    "kind": "produce",
    "pathways": [
      "isg"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isg-set",
    "to": "irf7",
    "kind": "produce",
    "label": "IRF7 is itself an ISG — the amplifier is interferon-inducible",
    "pathways": [
      "isg",
      "ifn-jak"
    ],
    "evidence": "G",
    "loop": "irf7",
    "bend": 0.35,
    "refs": [
      "marie1998"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Was zero-refs L4_primary_human (mechanically downgraded to L1 2026-09-12, then properly sourced): marie1998 is the primary paper establishing IRF7 as an ISG whose induction feeds the delayed IFN-alpha gene set -- mouse/human cell lines, not SAMHD1-specific, hence G/L3 not S/L4.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isg-set",
    "to": "irf1",
    "kind": "produce",
    "pathways": [
      "isg"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "stat1",
    "to": "pgc1a",
    "kind": "inhibit",
    "label": "represses PGC-1α → biogenesis failure (stressor #5)",
    "pathways": [
      "metabolic",
      "mito"
    ],
    "evidence": "G",
    "refs": [
      "bhimavarapu2015"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Sisler et al. 2015 demonstrated STAT1-mediated transcriptional repression of PGC-1alpha in murine models; mapped to general literature (G) and animal-model cell-line fallback (L3_cell_line).",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "stat1",
    "to": "etc-i",
    "kind": "inhibit",
    "label": "sustained STAT1/2 suppresses Complexes I and III",
    "pathways": [
      "metabolic",
      "mito"
    ],
    "evidence": "S",
    "refs": [
      "mihaylova2024"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "stat1",
    "to": "etc-iii",
    "kind": "inhibit",
    "pathways": [
      "metabolic",
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "pgc1a",
    "to": "tfam",
    "kind": "produce",
    "label": "NRF1/NRF2 → TFAM → biogenesis",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isg15",
    "to": "usp18",
    "kind": "activate",
    "label": "free ISG15 stabilises USP18 against degradation",
    "pathways": [
      "isg"
    ],
    "evidence": "S",
    "refs": [
      "zhang2015isg15"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "usp18",
    "to": "ifnar2",
    "kind": "inhibit",
    "label": "sterically displaces JAK1 — the primary brake",
    "pathways": [
      "isg",
      "ifn-jak"
    ],
    "evidence": "G",
    "bend": 0.3,
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): evidence downgraded S -> G in the same pass -- S requires SAMHD1-specific evidence, impossible with zero refs.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "socs",
    "to": "jak1",
    "kind": "inhibit",
    "pathways": [
      "isg"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "irf1",
    "to": "isg15",
    "kind": "produce",
    "label": "IRF1 → PARP12 → ISG15",
    "pathways": [
      "isg"
    ],
    "evidence": "S",
    "refs": [
      "deng2024"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isg15",
    "to": "mfn",
    "kind": "inhibit",
    "label": "ISGylation of MFN1/2 blocks PINK1/Parkin mitophagy",
    "pathways": [
      "isg",
      "mitophagy"
    ],
    "evidence": "S",
    "refs": [
      "deng2024"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "isg15",
    "to": "becn1",
    "kind": "inhibit",
    "label": "ISGylates BECN1, competing with activating K63-Ub (KEYSTONE stressor S6)",
    "pathways": [
      "isg",
      "mitophagy"
    ],
    "evidence": "S",
    "refs": [
      "xu2015becn1"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "irf7",
    "to": "mcp1",
    "kind": "produce",
    "label": "transactivates MCP-1 in VISCERAL adipocytes only",
    "pathways": [
      "metabolic"
    ],
    "evidence": "S",
    "refs": [
      "kuroda2020"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): this edge's own label says visceral adipocytes ONLY -- the generic myeloid template does not fit. Matches mcp1's own node (also cleared to []); see that node's note for the vocabulary-gap rationale.",
    "cell_context": []
  },
  {
    "from": "atp",
    "to": "gdf15",
    "kind": "produce",
    "label": "integrated mitochondrial stress response",
    "pathways": [
      "metabolic",
      "mito"
    ],
    "evidence": "G",
    "refs": [
      "che2025"
    ],
    "evidence_tier": "L6_human_clinical",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): che2025 is a human clinical cohort -- upgraded from the generic L3_cell_line template.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): matched to gdf15's own systemic clinical-outcome array (a circulating biomarker readout, not a myeloid-intrinsic claim).",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "from": "nfkb",
    "to": "il6",
    "kind": "produce",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "nfkb",
    "to": "tnfa",
    "kind": "produce",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "nfkb",
    "to": "il23",
    "kind": "produce",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "nfkb",
    "to": "ikba",
    "kind": "produce",
    "label": "its own inhibitor — the oscillator that a constitutive drive flattens",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "bend": 0.35,
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-13 (cell_context topical-fit literature audit): dendritic_cell added to converge with this edge's own endpoint nodes, which already carried it -- the prior node/edge split was a batch-authoring artifact, same class found in retro.js/sensing.js. pDCs are the professional type-I IFN producers (see cytokines.js's pdc node), so an interferon-pathway file excluding dendritic cells from every edge was backwards. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ]
  },
  {
    "from": "il23",
    "to": "il17a",
    "kind": "drive",
    "label": "inferred SpA axis",
    "pathways": [
      "clinical"
    ],
    "evidence": "I",
    "refs": [
      "bridgewood2019",
      "cuthbert2019"
    ],
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "evidenceTierNote": "Inferred spondyloarthritis disease-model axis. Bridgewood 2019 and Cuthbert 2019 establish co-located myeloid IL-23 production and resident gamma-delta T-cell IL-17A capability in human enthesis tissue, but direct IL-23-to-IL-17 driving was not demonstrated in enthesis.",
    "cellContextNote": "This is the myeloid-to-responder crossing edge: il23 is a myeloid DC/macrophage product, il17a is produced by resident entheseal lymphocytes. Direct coupling represents an inferred SpA disease model (Bridgewood 2019, Cuthbert 2019).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "dendritic_cell",
      "cd4_tcell"
    ]
  }
];

