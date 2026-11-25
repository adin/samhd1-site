/**
 * SAMHD1 Functional & Pseudo-Functional Inventory — 3D Atlas Data Layer
 * Primary Authoritative Source of Truth for SAMHD1 molecular functions,
 * subcellular compartments, tiers (1-4), biophysical layers (1-5), evidence tiers (L1-L6),
 * cell context vectors, and quantitative haploinsufficiency kinetics.
 *
 * Sibling of viz/innate-immune-3d/src/data/functions.js
 */

export const FUNCTIONS = [
  {
    "id": "dntpase",
    "label": "dNTPase Activity",
    "compartment": "cytosol",
    "tier": "function",
    "category": "DNA Metabolism",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Essential dNTP regulation for DNA replication and repair; dysfunction causes genomic instability and increased mutation rates leading to cancer predisposition",
    "rationale": "Essential enzymatic function; A565T in catalytic domain severely impairs dNTP hydrolysis activity",
    "locEvidence": "S",
    "domain": "dntp",
    "lossLabel": "Critically Impaired",
    "lossKind": "loss",
    "loss": 0.75,
    "refs": [
      "[7]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ],
    "kinetics": {
      "Km_dGTP_uM": 5.2,
      "kcat_s": 0.42,
      "tetramer_Kd_uM": 2.4,
      "hill_coefficient": 2.1
    }
  },
  {
    "id": "dna-resection",
    "label": "DNA End Resection",
    "compartment": "nucleus",
    "tier": "function",
    "category": "DNA Metabolism",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Critical DNA repair mechanism for homologous recombination; failure leads to hereditary breast cancer-like phenotype with genomic instability",
    "rationale": "Critical cancer protection mechanism; SAMHD1 promotes CtIP recruitment to DNA breaks (Daddacha et al. 2017, whose binding-defective variant was the cancer-associated K484T). The effect of A565T on CtIP recruitment has not been tested",
    "locEvidence": "S",
    "domain": "genome",
    "lossLabel": "A565T effect on CtIP recruitment untested",
    "lossKind": "untested",
    "refs": [
      "[15]",
      "[56]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "rloop",
    "label": "R-loop Resolution",
    "compartment": "nucleus",
    "tier": "function",
    "category": "DNA Metabolism",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Prevents DNA-RNA hybrid accumulation causing cancer; dysfunction leads to chronic lymphocytic leukemia and solid tumor formation",
    "rationale": "Essential genomic stability function; dysfunction directly linked to chronic lymphocytic leukemia",
    "locEvidence": "S",
    "domain": "genome",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.75,
    "refs": [
      "[5]",
      "[9]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "fork",
    "label": "Replication Fork Protection",
    "compartment": "nucleus",
    "tier": "function",
    "category": "DNA Metabolism",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Protects stalled DNA replication forks from collapse; failure causes replication stress syndrome with early aging and cancer susceptibility",
    "rationale": "Primary DNA repair mechanism; SAMHD1 stimulates MRE11 at stalled forks (Coquel et al. 2018). The effect of A565T on MRE11 interaction and fork stability has not been tested",
    "locEvidence": "S",
    "domain": "genome",
    "lossLabel": "A565T effect on MRE11 interaction and fork stability untested",
    "lossKind": "untested",
    "refs": [
      "[9]",
      "[64]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "mrna-deg",
    "label": "ssRNA Binding & Post-Transcriptional Restraint",
    "compartment": "cytosol",
    "tier": "function",
    "category": "RNA Metabolism",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Non-catalytically binds single-stranded RNA with high affinity without active site-associated nuclease activity; coordinates with stress granules and post-transcriptional buffering (Seamon et al. 2015, Jang et al. 2025)",
    "rationale": "Non-catalytic stoichiometric nucleic acid binding distinct from dNTPase activity; moderate ~40% loss under haploinsufficiency",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[39]",
      "[21]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "chemo-hydrolysis",
    "label": "Chemotherapy Triphosphate Hydrolysis",
    "compartment": "cytosol",
    "tier": "function",
    "category": "Enzymatic Hydrolysis / Pharmacogenomics",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Hydrolyzes and inactivates nucleoside analogue triphosphates (Ara-CTP, dFdCTP/gemcitabine-TP), mediating chemotherapy resistance in AML and solid tumors; loss of SAMHD1 sensitizes AML cells (Schneider et al. 2017); A565T reconstituted in SAMHD1-knockout glioblastoma cells behaved like the knockout (Schneider S 2022 thesis); the heterozygous effect is untested",
    "rationale": "Catalytic triphosphohydrolase requiring tetramer assembly; the >75% heterozygous A565T loss is a model estimate, not a measurement",
    "locEvidence": "S",
    "domain": "dntp",
    "lossLabel": "Critically Impaired",
    "lossKind": "loss",
    "loss": 0.75,
    "refs": [
      "[54]",
      "[65]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "line1",
    "label": "LINE-1 Retrotransposon Restriction",
    "compartment": "cytosol",
    "tier": "function",
    "category": "Genomic Stability",
    "criticality": "Critical",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Restricts LINE-1 and endogenous retrotransposon mobilization through dNTPase-independent stress granule sequestration mechanism; prevents genomic instability from transposon activity in cycling cells even when antiviral dNTPase function inactive",
    "rationale": "Stoichiometric function requiring G3BP1/TIA1 interaction for stress granule assembly; promotes eIF2\u03b1 phosphorylation and disrupts eIF4A/eIF4G interaction; approximately 50% loss with haploinsufficiency",
    "locEvidence": "S",
    "domain": "viral",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[35]",
      "[36]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "telomere",
    "label": "Telomere Length and Stability Maintenance",
    "compartment": "nucleus",
    "tier": "function",
    "category": "Genomic Stability",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Controls telomere length by restricting dGTP pools which regulates telomerase processivity; prevents telomere fragility, chromosome end instability, and telomere breakage events working with TRF1. SAMHD1 deficiency causes excessive telomere lengthening in telomerase-positive cells and telomere instability contributing to both cancer risk and cellular aging",
    "rationale": "Moderate functional loss (~40-50%) as other telomere maintenance proteins (TRF1, shelterins) provide redundancy; long-term probabilistic function rather than acute regulatory role",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.45,
    "refs": [
      "[4]"
    ],
    "layer": 2,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "lentivirus",
    "label": "Lentivirus Restriction (HIV-1, SIV)",
    "compartment": "cytosol",
    "tier": "function",
    "category": "Innate Immunity",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Depletes cellular dNTP pools below threshold required for reverse transcription, restricting HIV-1/SIV in non-dividing myeloid cells (macrophages, dendritic cells) and resting CD4+ T-cells. Complete Loss of Function - loss of viral restriction capacity in target cells",
    "rationale": "Complete Loss of Function - loss of viral restriction capacity in target cells - CRITICAL - Hallmark function of SAMHD1; Vpx-mediated degradation target; loss causes enhanced viral infection susceptibility and impaired innate immunity",
    "locEvidence": "S",
    "domain": "viral",
    "lossLabel": "Critically Impaired",
    "lossKind": "loss",
    "loss": 0.75,
    "refs": [
      "[1]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "rnp-sequestration",
    "label": "Retroelement RNP Sequestration",
    "compartment": "cytosol",
    "tier": "function",
    "category": "Innate Immunity / Phase Separation",
    "criticality": "Critical",
    "impact": "Moderate-Severe",
    "priority": "Most Urgent",
    "relevance": "Non-catalytic sequestration of retroviral/retroelement RNA and RNPs into stress granules and condensates; acts independently of dNTPase to restrict retrotransposition and viral cDNA synthesis (Hu et al. 2015, Seamon et al. 2015)",
    "rationale": "Non-catalytic physical RNP trapping and stress granule assembly rather than enzymatic RNA cleavage; ~40-50% loss under haploinsufficiency",
    "locEvidence": "S",
    "domain": "viral",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[35]",
      "[39]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "dna-virus",
    "label": "DNA Virus Restriction (HSV-1, Vaccinia, Others)",
    "compartment": "cytosol",
    "tier": "function",
    "category": "Innate Immunity",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Restricts multiple DNA viruses in non-dividing myeloid cells including Herpes Simplex Virus 1, vaccinia virus, and other DNA viruses through HD domain-dependent dNTP depletion blocking viral DNA replication. Broader antiviral role beyond lentiviruses explaining susceptibility to DNA viral infections",
    "rationale": "Same tetramer-dependent dNTPase mechanism as lentivirus restriction; high functional loss (>75%) due to cooperative tetramerization collapse at 50% protein",
    "locEvidence": "G",
    "domain": "viral",
    "lossLabel": "Critically Impaired",
    "lossKind": "loss",
    "loss": 0.75,
    "refs": [
      "[43]",
      "[44]"
    ],
    "layer": 2,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "llps",
    "label": "Liquid-Liquid Phase Separation (LLPS) and RNA Condensate Formation",
    "compartment": "granule",
    "tier": "function",
    "category": "RNA Homeostasis",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "In vitro, SAMHD1 condenses into liquid-like droplets with ssDNA or ssRNA in the presence of a crowding agent (9% PEG 2000); droplets need the SAM and C-terminal domains and are dissolved by A1-site ligands (GTP, dGTP) and small-molecule inhibitors, and ssDNA-SAMHD1 condensates form in nuclei after microinjection (Smith 2025). This is a nucleic-acid-bound oligomeric state, distinct from the dNTPase-active nucleotide-bound tetramer. Roles for SAMHD1 in sequestering immunostimulatory dsRNA in cellular condensates come from a single study (Maharana 2022, Mol Cell) and have not been independently confirmed",
    "rationale": "Reconciles two sources: Smith 2025 (peer-reviewed, recombinant, in vitro, SAMHD1 itself condenses) and Maharana 2022 (Mol Cell, cells, RNA condensate control). Seamon 2015 found SAMHD1 binds ssRNA with no active-site-associated nuclease activity, so the earlier 'ssRNA-degrading RNase' wording is withdrawn. The earlier 70% loss was an assumption about threshold effects; no A565T condensate data exist",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "A565T condensate behaviour untested",
    "lossKind": "untested",
    "refs": [
      "[38]",
      "[39]",
      "[69]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "stress-granule",
    "label": "Stress Granule Assembly Promotion",
    "compartment": "granule",
    "tier": "function",
    "category": "Cellular Stress Response",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Promotes cellular stress granule formation by inducing eIF2\u03b1 phosphorylation and disrupting eIF4A/eIF4G interaction; broader stress response function beyond transposon control affecting cellular adaptation to stress conditions",
    "rationale": "Stoichiometric signaling function with approximately 50% loss; stress granule formation can be partially compensated by other stress response pathways",
    "locEvidence": "G",
    "domain": "immune",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[35]"
    ],
    "layer": 2,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "ac-k580",
    "label": "Acetylation at K580",
    "compartment": "nucleus",
    "tier": "regulation",
    "category": "Post-Translational Regulation",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Essential for dNTPase-independent antiviral activity; dysfunction abolishes HIV restriction in myeloid cells despite normal dNTP levels",
    "rationale": "Essential for dNTPase-independent antiviral activity; critical for myeloid cell HIV restriction",
    "locEvidence": "G",
    "domain": "viral",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[21]",
      "[24]"
    ],
    "layer": 1,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "p-t592",
    "label": "Phosphorylation at T592 (CDK kinetic switch)",
    "compartment": "nucleus",
    "tier": "regulation",
    "category": "Post-Translational Regulation",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "CDK1/2 (cyclin A) phosphorylation of Thr592 in S/G2 acts as a kinetic switch: it has little effect on dNTPase activity or ssDNA affinity but speeds tetramer dissociation about 15-fold, and HIV-1 restriction tracks the dephosphorylated form. In cells, fork speed, MRE11-dependent degradation of nascent DNA at HU-stalled forks and cytosolic-ssDNA suppression need SAMHD1 that can be phosphorylated at T592 (T592E rescues, T592A does not; dNTPase activity is not required). Whether pT592 on monomers is needed for MRE11 or CtIP binding has not been tested.",
    "rationale": "Mechanism from Orris 2022 (biophysics) and Coquel 2018 (cell complementation, read from figures). A565T link is untested: residue 565 is not an interface residue (F-230), the Thr565-Cys554 contact carries almost none of the A565T cost (F-246, coupling -0.28 kcal/mol), and the chi1 latch-orientation claim was retracted (F-241). The earlier mixed-tetramer latch-uncoupling hypothesis (>85% loss) is withdrawn pending direct data.",
    "locEvidence": "I",
    "domain": "viral",
    "lossLabel": "A565T effect untested (dosage-limited 50% default)",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[64]",
      "[66]"
    ],
    "layer": 1,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "ac-k354",
    "label": "Acetylation at K354",
    "compartment": "nucleus",
    "tier": "regulation",
    "category": "Post-Translational Regulation",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "SIRT1-regulated modification promoting DNA repair; dysfunction impairs homologous recombination and increases cancer risk",
    "rationale": "Regulatory modification affecting DNA repair efficiency; moderate impact on overall function",
    "locEvidence": "I",
    "domain": "dntp",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[21]"
    ],
    "layer": 1,
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "ub-k421",
    "label": "Ubiquitination at K421",
    "compartment": "cytosol",
    "tier": "regulation",
    "category": "Post-Translational Regulation",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "USP7 de-ubiquitinates SAMHD1 at K421, which stabilizes the protein under oxidative or genotoxic stress and allows interaction with CtIP for DNA damage repair; USP7 inhibition lowers SAMHD1 and sensitizes tumour cells to chemotherapy (Liu 2023, human carcinoma cell lines and xenografts). Effect of A565T on K421 ubiquitination is untested",
    "rationale": "Replaces the earlier source [6] (a mouse VDAC1 paper that did not support this modification) with Liu 2023. Abstract read via PubMed; K421 and CtIP interaction are stated there. The earlier 40% loss was an assumption and is withdrawn",
    "locEvidence": "S",
    "domain": "dntp",
    "lossLabel": "A565T effect on K421 ubiquitination untested",
    "lossKind": "untested",
    "refs": [
      "[70]"
    ],
    "layer": 1,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "ac-k405",
    "label": "Acetylation at K405",
    "compartment": "nucleus",
    "tier": "regulation",
    "category": "Post-Translational Regulation",
    "criticality": "Medium",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "ARD1-mediated modification enhancing dNTPase activity; dysfunction reduces enzymatic efficiency affecting DNA replication fidelity",
    "rationale": "Regulatory modification enhancing enzymatic activity; moderate impact on primary function",
    "locEvidence": "I",
    "domain": "dntp",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[21]"
    ],
    "layer": 1,
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "sumo-k469",
    "label": "SUMOylation at K469",
    "compartment": "nucleus",
    "tier": "regulation",
    "category": "Post-Translational Regulation",
    "criticality": "Medium",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "PIAS1 SUMOylates SAMHD1 at K469, K595 and K622 on the tetramer surface; SUMOylation-deficient SAMHD1 loses anti-EBV activity, and phosphorylated SAMHD1 can still be SUMOylated (Saiada 2021). K595 SUMOylation is required for dNTPase-independent HIV-1 restriction in non-cycling cells, and T592 phosphorylation antagonizes this antiviral activity (Martinat 2021). A role of K469 in nuclear trafficking or DNA repair is not shown, and the effect of A565T is untested",
    "rationale": "Replaces the earlier source [6] (a mouse VDAC1 paper that did not support this modification). Abstracts read via PubMed: K469 is named in Saiada 2021; the Martinat 2021 abstract names K595 only. The earlier 40% loss and localization claim were assumptions and are withdrawn",
    "locEvidence": "S",
    "domain": "genome",
    "lossLabel": "A565T effect on K469 SUMOylation untested",
    "lossKind": "untested",
    "refs": [
      "[71]",
      "[72]"
    ],
    "layer": 1,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "oglc-s93",
    "label": "O-GlcNAcylation at Ser93",
    "compartment": "cytosol",
    "tier": "regulation",
    "category": "Post-Translational Regulation",
    "criticality": "Medium",
    "impact": "Low",
    "priority": "Monitor",
    "relevance": "OGT-mediated O-GlcNAcylation at Ser93 stabilizes SAMHD1 protein and enhances antiviral activity; glucose metabolism reprogramming through hexosamine biosynthetic pathway drives modification reflecting metabolic-immune crosstalk",
    "rationale": "Regulatory modification affecting protein stability; low additional functional loss (~20-30%) beyond baseline protein reduction as modification still operates on available protein",
    "locEvidence": "I",
    "domain": "dntp",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.3,
    "refs": [
      "[47]"
    ],
    "layer": 1,
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "nfkb",
    "label": "NF-κB Signaling Pathway",
    "compartment": "cytosol",
    "tier": "cellular",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Pro-inflammatory signaling pathway normally restrained by SAMHD1 physical interaction with NF-κB subunits (p50/p65); loss of restraint causes constitutive cascade activation and chronic sterile inflammation resembling autoimmune disease. Columbia 2025 ME/CFS study shows heightened innate immune responses with elevated IL-6, IL-1β, TNF-α, and IFN-γ — directly consistent with unrestrained NF-κB pathway activation upon SAMHD1 impairment",
    "rationale": "Master inflammatory signaling cascade; modeled A565T haploinsufficiency is hypothesized to relieve SAMHD1-mediated restraint, promoting chronic NF-κB pathway activation. Columbia 2025 study confirms ME/CFS patients have 'screaming baseline immune activation' with elevated cytokines — providing clinical phenotype correlation consistent with unrestrained NF-κB signaling as a hypothesized ME/CFS disease mechanism",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[16]",
      "[33]",
      "[34]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "ifn-i",
    "label": "Type-I Interferon (IFN-I) Signaling",
    "compartment": "cytosol",
    "tier": "cellular",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Suppresses IRF7-mediated interferon production; dysfunction causes chronic interferonopathy resembling Aicardi-Goutières syndrome. Columbia 2025 ME/CFS study confirms overactive innate immune responses in ME/CFS patients with dysregulated IFN pathways - consistent with impaired SAMHD1 IFN suppression",
    "rationale": "Critical immune system regulator; dysfunction causes life-threatening interferonopathy. Columbia 2025 findings of heightened innate immunity in ME/CFS validate A565T mutation contribution to chronic IFN activation",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[16]",
      "[22]",
      "[33]",
      "[34]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "cgas-sting",
    "label": "cGAS-STING Regulation",
    "compartment": "cytosol",
    "tier": "cellular",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Regulates cytosolic DNA sensing pathway; dysfunction leads to constitutive interferon activation and systemic autoimmune manifestations",
    "rationale": "Central DNA sensing pathway; A565T mutation causes constitutive pathway activation",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[22]"
    ],
    "layer": 3,
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "dendritic_cell"
    ],
    "kinetics": {
      "cGAS_DNA_length_threshold_bp": 45,
      "cGAMP_Kd_STING_nM": 4.8,
      "phase_separation_threshold_nM_DNA": 25.0
    }
  },
  {
    "id": "sterile-inflam",
    "label": "Sterile Inflammation Cascade",
    "compartment": "cytosol",
    "tier": "cellular",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Controls DAMP-mediated tissue inflammation without infection; dysfunction causes chronic sterile prostatitis and organ inflammation. Columbia 2025 ME/CFS study shows activation of complement system and chronic inflammatory state — supporting sterile inflammation as an aligned ME/CFS mechanism",
    "rationale": "Primary mechanism explaining chronic inflammation; A565T haploinsufficiency is hypothesized to permit persistent tissue inflammation. Columbia 2025 study demonstrates ME/CFS involves 'disruptions in interconnected pathological processes' including complement activation and sustained inflammation",
    "locEvidence": "G",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[16]",
      "[6]",
      "[33]",
      "[34]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "cytokine-storm",
    "label": "Cytokine Storm / Hypercytokinemia",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Prevents excessive cytokine release during immune responses; dysfunction leads to cytokine storm-like inflammatory episodes. Columbia 2025 ME/CFS study shows enhanced pro-inflammatory cytokine production (IL-6, IL-1β, TNF-α) after microbial stimulation — consistent with cytokine dysregulation in modeled SAMHD1 insufficiency",
    "rationale": "Critical inflammatory control; dysfunction leads to dangerous cytokine release patterns. Columbia 2025 findings show ME/CFS PBMCs produce excessive IL-6 and inflammatory cytokines - consistent with impaired SAMHD1 cytokine regulation",
    "locEvidence": "I",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[6]",
      "[33]",
      "[34]"
    ],
    "layer": 5,
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
    "id": "cd8",
    "label": "CD8+ Cytotoxic T Cell Activation",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Prevents excessive CD8+ T cell activation; maintains immune tolerance; prevents autoimmune responses to viral infections. Complete Loss of Function - CD8+ T cells hyperactivate during infections, attacking host tissues",
    "rationale": "Complete Loss of Function - CD8+ T cells hyperactivate during infections, attacking host tissues - CRITICAL - Explains viral-mediated autoimmune encephalitis; ongoing autoimmune risk; requires JAK inhibitor therapy",
    "locEvidence": "G",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[29]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "tlr4",
    "label": "TLR4 Signaling Pathway",
    "compartment": "membrane",
    "tier": "cellular",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Inhibits LPS-induced TLR4 pathway activation and M1 macrophage polarization; loss of function is hypothesized to cause heightened inflammatory responses to bacterial components and chronic inflammation. Columbia 2025 ME/CFS study used LPS stimulation showing heightened IL-6 production, supporting the hypothesis of TLR4 hyperresponsiveness in SAMHD1-deficient contexts",
    "rationale": "Master pattern recognition receptor; A565T haploinsufficiency is modeled to attenuate TLR4 restraint, hypothesized to permit amplified inflammatory responses to endotoxin and PAMPs. Columbia 2025 demonstrates heightened TLR4 responses in ME/CFS, presenting phenotypic concordance with modeled SAMHD1 dysfunction",
    "locEvidence": "G",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[6]",
      "[33]",
      "[34]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "ip10",
    "label": "IP-10 Cytokine Response Coordination",
    "compartment": "cytosol",
    "tier": "cellular",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Coordinates IP-10 and other antiviral cytokine responses; dysfunction impairs cytokine elaboration after pathogen recognition, reducing viral defense signaling capability",
    "rationale": "Critical antiviral cytokine coordinator; A565T mutation impairs IP-10 elaboration reducing viral defense signaling and increasing infection susceptibility",
    "locEvidence": "G",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[30]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "m1m2",
    "label": "M1/M2 Macrophage Polarization Control",
    "compartment": "cytosol",
    "tier": "cellular",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Inhibits M1 pro-inflammatory macrophage polarization and promotes M2 anti-inflammatory/repair polarization through NF-\u03baB suppression and VDAC1-mediated metabolic control. SAMHD1-deficient macrophages show increased M1 markers (CD80, iNOS, IL-6, TNF-\u03b1), decreased M2 markers (CD206, Arg1, IL-10), enhanced glycolytic metabolism. Chronic M1 polarization drives tissue damage and impaired repair",
    "rationale": "Stoichiometric function affecting multiple converging pathways with moderate-high loss (~50-60%); M1/M2 imbalance critical for chronic inflammatory tissue damage vs repair capacity",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.6,
    "refs": [
      "[6]",
      "[41]",
      "[42]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "dsrna-seq",
    "label": "dsRNA Sequestration in Condensates",
    "compartment": "granule",
    "tier": "function",
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Sequesters self-derived double-stranded RNA in RNA-containing condensates preventing aberrant innate immune activation; dsRNA enriched in condensates while ssRNA dissolves them. Loss causes dsRNA release triggering chronic interferon activation through RIG-I-like receptors - additional mechanism for chronic IFN signature in AGS beyond cGAS-STING",
    "rationale": "Condensate behaviour of SAMHD1 is shown in vitro (Smith 2025) and RNA condensates in cells (Maharana 2022). The earlier ~60-70% loss estimate rested on an assumed phase-separation threshold and is withdrawn; no A565T construct has been tested",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "A565T effect on dsRNA sequestration untested",
    "lossKind": "untested",
    "refs": [
      "[38]",
      "[39]",
      "[69]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "checkpoint",
    "label": "Cell Cycle Checkpoint",
    "compartment": "nucleus",
    "tier": "cellular",
    "category": "Cell Cycle Control",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Controls DNA damage checkpoint activation; dysfunction allows cell cycle progression with genomic damage leading to transformation",
    "rationale": "Important cell cycle function; moderate impact on checkpoint activation mechanisms",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[7]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "g1s",
    "label": "G1/S Transition Control",
    "compartment": "nucleus",
    "tier": "cellular",
    "category": "Cell Cycle Control",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Regulates transition from G1 to S phase; dysfunction causes aberrant proliferation patterns and potential malignant transformation",
    "rationale": "Cell cycle transition control; moderate impact on proliferation regulation",
    "locEvidence": "G",
    "domain": "dntp",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[7]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "sphase",
    "label": "S-phase Regulation",
    "compartment": "nucleus",
    "tier": "cellular",
    "category": "Cell Cycle Control",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Controls S-phase progression and DNA synthesis; dysfunction leads to replication stress and chromosomal instability",
    "rationale": "S-phase progression control; moderate impact on DNA synthesis regulation",
    "locEvidence": "G",
    "domain": "dntp",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[7]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "cll",
    "label": "Chronic Lymphocytic Leukemia (CLL)",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Cancer Suppression",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Tumor suppressor in B-cell malignancies; dysfunction directly correlates with poor prognosis and aggressive disease progression",
    "rationale": "Direct tumor suppressor role; A565T mutation strongly correlates with poor cancer outcomes",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Long-term",
    "lossKind": "risk",
    "refs": [
      "[1]",
      "[5]"
    ],
    "layer": 5,
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
    "id": "breast-ca",
    "label": "Breast Cancer",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Cancer Suppression",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Prognostic biomarker in early breast cancer; dysfunction associated with increased recurrence risk and reduced overall survival",
    "rationale": "Established prognostic factor; A565T dysfunction increases breast cancer recurrence and mortality",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Long-term",
    "lossKind": "risk",
    "refs": [
      "[11]"
    ],
    "layer": 5,
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
    "id": "colon-ca",
    "label": "Colorectal Cancer",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Cancer Suppression",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Protective role in colorectal cancer through dNTP regulation; dysfunction increases mutation rates in mismatch repair-deficient tumors",
    "rationale": "Cancer protection in high-turnover tissue; A565T mutation increases colorectal malignancy risk",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Long-term",
    "lossKind": "risk",
    "refs": [
      "[13]"
    ],
    "layer": 5,
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
    "id": "lung-ca",
    "label": "Lung Cancer",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Cancer Suppression",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Tumor suppressor in lung adenocarcinoma; dysfunction promotes oncogenic transformation and metastatic potential",
    "rationale": "Tumor suppressor in lung tissue; A565T dysfunction promotes oncogenic transformation",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Long-term",
    "lossKind": "risk",
    "refs": [
      "[13]"
    ],
    "layer": 5,
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
    "id": "prostate-ca",
    "label": "Prostate Cancer Risk Modulation",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Cancer Suppression",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "2.02-fold increased hereditary prostate cancer risk requiring enhanced surveillance protocols similar to BRCA carriers. Mechanism involves telomere maintenance dysfunction through same variant model associated with longer telomere length",
    "rationale": "Established hereditary cancer predisposition with odds ratio (2.02) comparable to validated cancer genes like BRCA2 and ATM. Meta-analysis of 37,184 cases validates genome-wide significance requiring enhanced surveillance",
    "locEvidence": "I",
    "domain": "genome",
    "lossLabel": "Long-term",
    "lossKind": "risk",
    "refs": [
      "[25]",
      "[26]"
    ],
    "layer": 5,
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
    "id": "rcc",
    "label": "Renal Clear Cell Carcinoma Progression (Oncogenic)",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Cancer Promotion",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Paradoxical oncogenic role where SAMHD1 promotes clear cell renal cell carcinoma metastasis through endosomal FAK-Rac1 signaling pathway. High SAMHD1 expression correlates with poor prognosis in ccRCC patients requiring enhanced renal imaging surveillance",
    "rationale": "Unique oncogenic mechanism in kidney cancer promoting metastasis through cortactin binding and lamellipodia formation. Contradicts tumor suppressor role in other cancers, creating enhanced cancer progression risk",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Reduced Oncogenic Activity",
    "lossKind": "protective",
    "refs": [
      "[27]"
    ],
    "layer": 5,
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
    "id": "senescence",
    "label": "Cellular Senescence Barrier",
    "compartment": "nucleus",
    "tier": "cellular",
    "category": "Senescence Control",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Prevents premature cellular aging and senescence; dysfunction accelerates aging processes and contributes to early organ dysfunction",
    "rationale": "Aging control mechanism; moderate impact on cellular senescence pathways",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[9]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "aging",
    "label": "Premature Aging & Cellular Exhaustion Phenotype",
    "compartment": "nucleus",
    "tier": "cellular",
    "category": "Senescence Control",
    "criticality": "Medium",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Controls cellular lifespan and aging-related dysfunction; dysfunction may contribute to accelerated aging phenotypes in ME/CFS",
    "rationale": "Secondary aging-related function; moderate impact on lifespan regulation",
    "locEvidence": "I",
    "domain": "genome",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[9]"
    ],
    "layer": 5,
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
    "id": "deltapsi",
    "label": "Mitochondrial Membrane Potential",
    "compartment": "mitochondrion",
    "tier": "cellular",
    "category": "Mitochondrial Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Maintains mitochondrial energetics and membrane stability through VDAC1 interaction; dysfunction causes energy metabolism defects characteristic of ME/CFS with impaired oxidative phosphorylation. Columbia 2025 ME/CFS study confirms impaired cellular energy production and metabolic dysfunction — phenotypically consistent with hypothesized mitochondrial defects in SAMHD1 insufficiency",
    "rationale": "Essential energy metabolism; modeled A565T haploinsufficiency is hypothesized to disrupt mitochondrial regulation via impaired VDAC1 interaction. Columbia 2025 findings of impaired cellular energy production and metabolite accumulation provide phenotypic alignment with this mechanism",
    "locEvidence": "S",
    "domain": "mito",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[6]",
      "[33]",
      "[34]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "vdac1",
    "label": "VDAC1 Interaction",
    "compartment": "mitochondrion",
    "tier": "function",
    "category": "Mitochondrial Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Direct protein interaction maintaining mitochondrial function and metabolite exchange; dysfunction disrupts cellular energetics and promotes inflammatory responses through mitochondrial stress",
    "rationale": "Direct mitochondrial protein interaction; A565T mutation impairs VDAC1-mediated energetics and metabolite transport",
    "locEvidence": "S",
    "domain": "mito",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[6]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "cytc",
    "label": "Cytochrome c Release Regulation",
    "compartment": "mitochondrion",
    "tier": "cellular",
    "category": "Mitochondrial Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Context-dependent regulation of cytochrome c release during apoptosis; dysfunction affects programmed cell death responses with enhanced release during viral infection promoting apoptosis",
    "rationale": "Context-dependent mitochondrial apoptosis regulation; A565T mutation causes dysregulated cytochrome c release during viral challenge",
    "locEvidence": "S",
    "domain": "mito",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[20]",
      "[23]",
      "[30]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "bik",
    "label": "BIK-Mediated Mitochondrial Apoptosis",
    "compartment": "mitochondrion",
    "tier": "cellular",
    "category": "Mitochondrial Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Directly upregulates BIK (BCL-2-interacting killer) mRNA and protein at transcriptional level; BIK mediates mitochondrial membrane depolarization and apoptosis. SAMHD1 deficiency impairs BIK transcriptional induction, hypothesized to contribute to altered apoptosis kinetics. Columbia 2025 ME/CFS study shows disrupted cellular processes and tissue damage consistent with apoptosis dysregulation",
    "rationale": "NEW 2025: Direct transcriptional regulator of pro-apoptotic BIK gene; modeled A565T haploinsufficiency is hypothesized to attenuate BIK upregulation, potentially affecting mitochondrial apoptosis thresholds in immune cells. Columbia 2025 findings provide supportive clinical context for cellular damage pathways in ME/CFS",
    "locEvidence": "S",
    "domain": "mito",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[30]",
      "[33]",
      "[34]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "apoptosis",
    "label": "Context-Dependent Apoptosis Modulation",
    "compartment": "mitochondrion",
    "tier": "cellular",
    "category": "Mitochondrial Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Cell type-specific apoptosis control: decreases mitochondrial membrane potential in monocytes (pro-apoptotic) but maintains it in macrophages (anti-apoptotic). Dysfunction causes inappropriate apoptosis responses in both cell types",
    "rationale": "NEW 2025: Paradoxical cell type-specific function; A565T mutation disrupts appropriate apoptosis responses in monocytes (reduced apoptosis) and macrophages (increased apoptosis)",
    "locEvidence": "I",
    "domain": "mito",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[30]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "mtdna-leak",
    "label": "Mitochondrial DNA (mtDNA) Leakage",
    "compartment": "mitochondrion",
    "tier": "function",
    "category": "Mitochondrial Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Prevents mitochondrial dysfunction-induced mtDNA leakage to cytoplasm; dysfunction allows cytoplasmic mtDNA accumulation triggering chronic innate immune activation",
    "rationale": "NEW 2025: Essential mitochondrial integrity maintenance; A565T mutation allows mtDNA cytoplasmic leakage creating chronic innate immune activation",
    "locEvidence": "S",
    "domain": "mito",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[30]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "mtdna-ifn",
    "label": "mtDNA-Triggered Type I IFN Induction",
    "compartment": "mitochondrion",
    "tier": "cellular",
    "category": "Mitochondrial Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Prevents cytoplasmic mtDNA from activating cGAS-STING pathway; dysfunction causes constitutive Type I interferon production through mtDNA-triggered innate immunity resembling AGS",
    "rationale": "NEW 2025: Critical innate immune checkpoint; A565T mutation causes constitutive cGAS-STING activation through mtDNA triggering chronic Type I IFN signature",
    "locEvidence": "S",
    "domain": "mito",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[30]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "mono-mac",
    "label": "Monocyte vs Macrophage Differential Regulation",
    "compartment": "cytosol",
    "tier": "cellular",
    "category": "Mitochondrial Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Complete functional dichotomy between dividing monocytes (enhanced viral-induced apoptosis) vs terminally differentiated macrophages (viral restriction, reduced apoptosis). Dysfunction impairs both innate immune cell populations through different mechanisms",
    "rationale": "NEW 2025: Cell differentiation-dependent functional switch; A565T mutation impairs both monocyte viral defense and macrophage homeostatic functions through distinct mechanisms",
    "locEvidence": "S",
    "domain": "mito",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[30]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "ox-dna-bind",
    "label": "Oxidative Stress-Enhanced DNA Binding",
    "compartment": "nucleus",
    "tier": "function",
    "category": "DNA Metabolism",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Oxidation lowers dNTPase activity and raises ssDNA binding. C522 is the initial sensor of H2O2; the sulfenic acid then switches to a C341-C350 disulfide, which is the form seen in the inhibited, DNA-bound dimer. Oxidized wild type binds ssDNA about 40-fold tighter than reduced (Kd 0.8 vs 33 uM) and overhang/fork DNA about 5-fold tighter; C522A loses the effect. ssDNA binds at the A1/A2 regulatory sites of the dimer, and GTP competes with it. Oxidation occurs in S and G2/M in PC3 cells",
    "rationale": "Simermeyer 2023 (recombinant protein, crystal structure, PC3 cells). The T592E mimic did not change ssDNA binding with or without oxidation. The A565T link (oxidative stress in ME/CFS combined with the mutation) is a hypothesis; no A565T construct has been tested",
    "locEvidence": "S",
    "domain": "genome",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[4]"
    ],
    "layer": 2,
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "autophagy",
    "label": "Autophagy-Lysosomal Homeostasis Regulation",
    "compartment": "lysosome",
    "tier": "cellular",
    "category": "Cellular Homeostasis",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Regulates autophagy-lysosomal flux through mTOR-MITF-CTSD axis maintaining cellular degradation pathways. SAMHD1 deficiency impairs autophagy-lysosomal flux, enhances MITF nuclear translocation, suppresses cathepsin D expression, causes lysosomal dysfunction and promotes inflammation. Autophagy dysfunction is major ME/CFS pathophysiology feature. NEW 2025 discovery",
    "rationale": "Stoichiometric regulation of MITF with moderate-high functional loss (~50-60%); autophagy has some compensatory mechanisms but chronic dysfunction contributes significantly to ME/CFS pathology",
    "locEvidence": "S",
    "domain": "mito",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.6,
    "refs": [
      "[41]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "metabolic",
    "label": "Metabolic Reprogramming Regulation",
    "compartment": "cytosol",
    "tier": "cellular",
    "category": "Cellular Metabolism",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Regulates cellular metabolism beyond mitochondrial function including glycolysis, glucose metabolism pathways, and macrophage metabolic phenotype (M1 glycolytic vs M2 oxidative). Modulates hexosamine biosynthetic pathway. Metabolic dysfunction central to ME/CFS pathophysiology",
    "rationale": "Moderate functional loss (~40-50%) as multiple metabolic regulators provide redundancy; however chronic metabolic dysfunction significantly contributes to ME/CFS symptoms",
    "locEvidence": "G",
    "domain": "dntp",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[47]",
      "[48]"
    ],
    "layer": 3,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "prostatitis",
    "label": "Prostate Inflammation Control",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Urological Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Prevents chronic sterile prostatitis through inflammation control; dysfunction causes treatment-resistant prostate inflammation without infection",
    "rationale": "Direct explanation for chronic urological symptoms; A565T mutation causes sterile prostatitis",
    "locEvidence": "I",
    "domain": "immune",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[16]",
      "[6]"
    ],
    "layer": 4,
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "macrophage",
      "microglia",
      "cd4_tcell",
      "monocyte"
    ]
  },
  {
    "id": "bladder",
    "label": "Neurogenic Bladder & Pelvic Dysfunction",
    "compartment": "clinical",
    "tier": "systemic",
    "category": "Urological Function",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Controls bladder inflammatory responses; dysfunction leads to neurogenic bladder spasms and chronic urinary symptoms",
    "rationale": "Primary mechanism for bladder dysfunction; A565T mutation causes neurogenic inflammation",
    "locEvidence": "I",
    "domain": "immune",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[16]",
      "[6]"
    ],
    "layer": 4,
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "macrophage",
      "microglia",
      "cd4_tcell",
      "monocyte"
    ]
  },
  {
    "id": "transcription",
    "label": "Transcriptional Regulation",
    "compartment": "nucleus",
    "tier": "function",
    "category": "Gene Expression",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Regulates gene expression through chromatin interactions; dysfunction may affect multiple cellular programs and homeostatic functions",
    "rationale": "Gene expression regulation; moderate impact on transcriptional control mechanisms",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[9]"
    ],
    "layer": 2,
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "tetramer-switch",
    "label": "Allosteric Tetramerization Engine",
    "compartment": "cytosol",
    "tier": "regulation",
    "layer": 1,
    "category": "Allosteric Regulation",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Obligate cooperative homotetramer assembly driven by dual-site nucleotide occupancy (GTP at Site 1, dGTP/dNTP at Site 2). Monomers and dimers lack catalytic dNTPase activity. Under basal unphosphorylated conditions, nucleotide clamping stabilizes the catalytic Dimer 1 interface in heterozygous 2xWT+2xA565T complexes (ipTM=0.81), preserving ~50% dosage-limited dNTPase capacity",
    "rationale": "Dosage-limited haploinsufficiency model; full allosteric saturation (4xGTP at A1 + 4xdNTP at A2) stabilizes the primary catalytic core, preventing complete tetramer collapse in the unphosphorylated basal state (~50% activity loss)",
    "locEvidence": "S",
    "domain": "dntp",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[49]",
      "[50]",
      "[51]",
      "[63]",
      "[66]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "site1-gtp",
    "label": "Site 1 Allosteric GTP Binding",
    "compartment": "cytosol",
    "tier": "regulation",
    "layer": 1,
    "category": "Allosteric Regulation",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "High-affinity nucleotide sensor binding GTP or dGTP at allosteric Site 1 (Kd ~50-100 \u03bcM), triggering the primary conformational pivot that aligns dimer-dimer interfaces",
    "rationale": "Essential priming step for tetramer formation; required for all subsequent catalytic and restriction functions",
    "locEvidence": "S",
    "domain": "dntp",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[7]",
      "[50]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "metal-center",
    "label": "Active-Site Dinuclear Metal Center (Fe plus Fe/Mn/Mg)",
    "compartment": "cytosol",
    "tier": "regulation",
    "layer": 1,
    "category": "Catalytic Cofactor",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Important",
    "relevance": "Robust dNTPase activity is supported preferentially by transition metals. Iron preferentially occupies one position of the bimetallic core and recruits the second divalent metal; manganese can substitute but assembles the dinuclear site less efficiently; the second site is permissive (Mg2+, Mn2+, Fe2+). Mg2+ alone gives tetramer with minimal turnover. Transition metals are also higher-affinity allosteric activators than Mg2+",
    "rationale": "Reframes 'active' as tetramer plus the right metal cofactor, not nucleotide occupancy alone. Recombinant truncated enzyme under controlled metal conditions; whether A565T changes metal occupancy or affinity has not been tested",
    "locEvidence": "I",
    "domain": "dntp",
    "lossLabel": "A565T metal occupancy untested",
    "lossKind": "untested",
    "refs": [
      "[67]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "c522-redox",
    "label": "Redox Switch (C522 sensor, C341-C350 disulfide)",
    "compartment": "cytosol",
    "tier": "regulation",
    "layer": 1,
    "category": "Allosteric Regulation",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Important",
    "relevance": "Oxidation inhibits dNTPase activity by preventing tetramerization. C522 senses H2O2 first; its sulfenic acid then switches to a C341-C350 disulfide, the final inhibited form (Simermeyer 2023). Mixed-metal active sites retain catalytic activity under redox conditions that suppress homodinuclear diiron sites, so metal plasticity buffers SAMHD1 against oxidative inhibition (Calderone 2026)",
    "rationale": "Recombinant data. Linked to the DNA-binding function through ox-dna-bind. A565T redox sensitivity untested",
    "locEvidence": "I",
    "domain": "dntp",
    "lossLabel": "A565T redox sensitivity untested",
    "lossKind": "untested",
    "refs": [
      "[4]",
      "[67]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "gtp-supply",
    "label": "Guanine-Nucleotide Supply (IMPDH to GTP/dGTP)",
    "compartment": "cytosol",
    "tier": "regulation",
    "layer": 1,
    "category": "Nucleotide Metabolism",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Important",
    "relevance": "Cellular GTP and dGTP are the allosteric activators that fill Site 1. IMPDH inhibition (mycophenolic acid) depletes GTP and dGTP, which lowers SAMHD1 activity and raises ara-CTP in SAMHD1-proficient, but not SAMHD1-deficient, AML cells; the effect is seen in a subset of AML lines and not in ALL lines",
    "rationale": "Cell-line result from the abstract (Klootsema 2026); full text not read. Whether lowering GTP further reduces residual dNTPase in heterozygous carriers is an open hypothesis, not clinical advice",
    "locEvidence": "I",
    "domain": "dntp",
    "lossLabel": "Heterozygous effect untested",
    "lossKind": "untested",
    "refs": [
      "[68]"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "hsc",
      "monocyte"
    ]
  },
  {
    "id": "site2-dgtp",
    "label": "Site 2 Allosteric dNTP Binding",
    "compartment": "cytosol",
    "tier": "regulation",
    "layer": 1,
    "category": "Allosteric Regulation",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Second allosteric site binding any of the four dNTPs (dGTP, dATP, dCTP, dTTP) to complete tetramer stabilization and license active site hydrolytic firing",
    "rationale": "dNTP-sensing allosteric checkpoint coordinating cellular nucleotide pool abundance with destruction rates",
    "locEvidence": "S",
    "domain": "dntp",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[7]",
      "[50]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "cdk1-cdk2",
    "label": "CDK1/CDK2 Cell Cycle Kinase Gating",
    "compartment": "nucleus",
    "tier": "regulation",
    "layer": 1,
    "category": "Post-Translational Regulation",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Cell-cycle dependent kinase complex (CDK2 in S-phase, CDK1 in G2/M) that phosphorylates SAMHD1 at Thr592, turning off retroviral restriction while preserving replication fork protection",
    "rationale": "Upstream kinase writer governing the functional toggle between resting antiviral restriction and proliferative DNA replication licensing",
    "locEvidence": "S",
    "domain": "viral",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[21]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "pp2a-b55",
    "label": "PP2A-B55\u03b1 Phosphatase Reactivation",
    "compartment": "nucleus",
    "tier": "regulation",
    "layer": 1,
    "category": "Post-Translational Regulation",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Serine/threonine phosphatase holoenzyme that dephosphorylates Thr592 at mitotic exit, resetting SAMHD1 into its active antiviral/dNTP-depleting state during G1 and quiescence (G0)",
    "rationale": "Upstream enzymatic eraser essential for restoring baseline antiviral protection and nucleotide homeostasis in differentiated cells",
    "locEvidence": "G",
    "domain": "viral",
    "lossLabel": "Modestly Impaired",
    "lossKind": "loss",
    "loss": 0.4,
    "refs": [
      "[21]"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "ankib1-ub",
    "label": "ANKIB1 K11-Ubiquitin Checkpoint",
    "compartment": "cytosol",
    "tier": "regulation",
    "layer": 1,
    "category": "Post-Translational Regulation",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "ANKIB1 E3 ubiquitin ligase conjugates K11-linked ubiquitin chains onto TRIF, STING, NEMO, OPTN and itself, recruiting OPTN and TBK1 to amplify IRF3-driven type-I/III interferon induction downstream of cGAS–STING and TLR3/4. SAMHD1 is not a reported substrate (corrected 2026-11-21)",
    "rationale": "ANKIB1 K11 amplification of STING/TLR3 signalling is established (Betrancourt 2026, full text read). OPEN 2026-11-21: no paper links SAMHD1 to ANKIB1; the earlier reading that SAMHD1 itself carries an ANKIB1-dependent positive gain-control arm came from a reference that does not resolve (see refs [52]). The loss value and L2 tier below were set under that reading and have not been revisited. A separate report (Liu 2024) has ANKIB1 K48-degrade MAVS, the opposite direction on the RIG-I arm.",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Unverified: set when ANKIB1 was thought to modify SAMHD1 itself; not re-derived",
    "lossKind": "loss",
    "loss": 0.6,
    "refs": [
      "[52]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "hek293t",
      "ipsc"
    ]
  },
  {
    "id": "sting-gain",
    "label": "STING Gain-Control Amplification",
    "compartment": "cytosol",
    "tier": "cellular",
    "layer": 3,
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Direct potentiating arm of cGAS–STING signalling in which ANKIB1-generated K11 ubiquitin chains on STING, TRIF and NEMO recruit OPTN and TBK1 to amplify type-I interferon output. Whether SAMHD1 haploinsufficiency alters this dynamic range is a hypothesis, not a finding (corrected 2026-11-21)",
    "rationale": "ANKIB1 K11 amplification of STING signalling is established (Betrancourt 2026). An ANKIB1–SAMHD1 axis is not established in any paper; treat the claim that loss alters inflammatory thresholds as a hypothesis (OPEN, 2026-11-21)",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[52]"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "nlrp3-metab",
    "label": "NLRP3 Inflammasome Metabolic Brake",
    "compartment": "cytosol",
    "tier": "cellular",
    "layer": 3,
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Direct metabolic checkpoint (Liu et al. 2026, Science) where SAMHD1-mediated dNTP depletion prevents expanded intracellular dNTP pools from directly triggering NLRP3 inflammasome oligomerization and ASC speck assembly",
    "rationale": "Explains sterile inflammasome hyperactivation in SAMHD1 deficiency without requiring exogenous PAMPs or priming cytokines",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Critically Impaired",
    "lossKind": "loss",
    "loss": 0.75,
    "refs": [
      "[53]"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "il1b-release",
    "label": "IL-1\u03b2 / IL-18 Pyroptotic Cascades",
    "compartment": "cytosol",
    "tier": "cellular",
    "layer": 3,
    "category": "Inflammation Control",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Caspase-1-mediated proteolytic processing of pro-IL-1\u03b2 and pro-IL-18 into mature secretable cytokines and Gasdermin-D cleavage; unconstrained when SAMHD1 dNTPase fails",
    "rationale": "Direct downstream effector of NLRP3 activation driving severe sterile tissue inflammation and systemic cytokine elaboration",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.6,
    "refs": [
      "[53]"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "ctip-interact",
    "label": "CtIP Physical Recruitment & Resection Initiation",
    "compartment": "nucleus",
    "tier": "function",
    "layer": 2,
    "category": "DNA Metabolism",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Direct physical interaction with CtIP at double-strand breaks, stimulating CtIP endonuclease activity and loading the MRE11 complex to initiate 5'-3' DNA end resection for homologous recombination",
    "rationale": "Definitive physical mechanism for SAMHD1's cancer-protective DNA repair role (Daddacha et al. 2017, Cell Rep). CtIP binding maps to aa 465-562 (K484T disrupts it); Ala565 lies just outside that region and a 1-562 truncation still binds CtIP, so any A565T effect on CtIP recruitment is untested and would have to act through reduced abundance or C-terminal conformation",
    "locEvidence": "S",
    "domain": "genome",
    "lossLabel": "A565T effect on CtIP binding untested",
    "lossKind": "untested",
    "refs": [
      "[15]",
      "[56]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "mrn-complex",
    "label": "MRE11-RAD50-NBS1 (MRN) Complex Regulation",
    "compartment": "nucleus",
    "tier": "function",
    "layer": 2,
    "category": "DNA Metabolism",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Coordination with the MRN sensor complex at stalled replication forks; stimulates MRE11 exonuclease activity to degrade reversed fork structures and prevent catastrophic fork collapse",
    "rationale": "Central molecular partner for replication fork protection; loss induces fork degradation and chromosomal breakage",
    "locEvidence": "S",
    "domain": "genome",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.75,
    "refs": [
      "[9]",
      "[56]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "rad51-brca2",
    "label": "RAD51 / BRCA2 Homologous Recombination Axis",
    "compartment": "nucleus",
    "tier": "function",
    "layer": 2,
    "category": "DNA Metabolism",
    "criticality": "High",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Facilitates single-stranded DNA generation required for RAD51 nucleoprotein filament assembly with BRCA2; enables error-free homologous recombination repair over mutagenic NHEJ",
    "rationale": "Mechanistic basis for BRCA-like breast and ovarian cancer predisposition observed in SAMHD1 deficiency",
    "locEvidence": "S",
    "domain": "genome",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.6,
    "refs": [
      "[11]",
      "[56]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "parp1-axis",
    "label": "PARP1 Replication Stress Hyperactivation",
    "compartment": "nucleus",
    "tier": "cellular",
    "layer": 3,
    "category": "Genomic Stability",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "Unresolved replication forks and impaired resection in SAMHD1 deficiency trigger hyperactivation of PARP1-mediated PARylation; creates therapeutic synthetic lethality with PARP inhibitors",
    "rationale": "Direct actionable therapeutic target for SAMHD1-mutant tumors and marker of ongoing replication stress",
    "locEvidence": "G",
    "domain": "genome",
    "lossLabel": "Significantly Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[9]",
      "[56]"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia"
    ]
  },
  {
    "id": "cytarabine-metab",
    "label": "Ara-C & Gemcitabine Triphosphate Hydrolysis",
    "compartment": "cytosol",
    "tier": "function",
    "layer": 2,
    "category": "Chemotherapy Metabolism",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Enzymatically hydrolyzes the active antimetabolite triphosphates of cytarabine (Ara-CTP), decitabine, and gemcitabine (dFdCTP), neutralizing their cytotoxic DNA chain termination effects",
    "rationale": "Major clinical biomarker in hematologic and solid oncology (Schneider et al. 2017, Nat Med); high SAMHD1 causes drug resistance, while A565T behaved like the knockout in a knockout-reconstitution glioblastoma cell model (Schneider S 2022 thesis); the heterozygous effect is untested",
    "locEvidence": "S",
    "domain": "dntp",
    "lossLabel": "Critically Impaired",
    "lossKind": "loss",
    "loss": 0.75,
    "refs": [
      "[54]",
      "[65]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "chemo-sensitivity",
    "label": "Chemotherapy Synthetic Hypersensitivity",
    "compartment": "clinical",
    "tier": "systemic",
    "layer": 5,
    "category": "Clinical Oncology Profiling",
    "criticality": "High",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Hypothesis for A565T carriers: impaired antimetabolite hydrolysis could raise intracellular Ara-CTP / gemcitabine-TP and therapeutic sensitivity. Supported in a knockout-reconstitution cell model (Schneider S 2022 thesis, higher Ara-CTP and knockout-like ED50); untested in heterozygous carriers",
    "rationale": "Critical pharmacogenomic precision medicine endpoint; tailored dosing for nucleoside analogue chemotherapies is a research hypothesis for A565T carriers, not an established consequence",
    "locEvidence": "I",
    "domain": "dntp",
    "lossLabel": "Carrier sensitivity is an untested hypothesis",
    "lossKind": "untested",
    "refs": [
      "[54]",
      "[65]"
    ],
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "id": "vpx-degradation",
    "label": "Vpx-CRL4(DCAF1) Proteasomal Degradation",
    "compartment": "cytosol",
    "tier": "function",
    "layer": 2,
    "category": "Viral Evasion & Degradation",
    "criticality": "High",
    "impact": "Moderate",
    "priority": "Monitor",
    "relevance": "HIV-2 and SIV accessory protein Vpx binds SAMHD1 C-terminal domain, recruiting the CRL4-DCAF1 E3 ubiquitin ligase to trigger rapid proteasomal destruction and overcome restriction",
    "rationale": "Definitive viral antagonism mechanism proving the physiological barrier SAMHD1 imposes on retroviral replication",
    "locEvidence": "S",
    "domain": "viral",
    "lossLabel": "Moderately Impaired",
    "lossKind": "loss",
    "loss": 0.5,
    "refs": [
      "[57]"
    ],
    "evidence_tier": "L2_recombinant",
    "cell_context": [
      "monocyte",
      "macrophage",
      "cd4_tcell",
      "microglia",
      "hsc",
      "ipsc"
    ]
  },
  {
    "id": "mecfs-phenotype",
    "label": "ME/CFS & Post-Exertional Malaise (PEM)",
    "compartment": "clinical",
    "tier": "systemic",
    "layer": 5,
    "category": "Systemic Clinical Phenotype",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Multisystem neuro-immune pathology characterized by post-exertional neuro-immune crashes, mitochondrial bioenergetic failure (\u0394\u03a8m collapse), baseline cytokine elevation (IL-1\u03b2, IL-6, TNF, IFN-\u03b3), and complement hyperactivation validated in Columbia 2025 patient cohorts",
    "rationale": "Direct systemic manifestation of combined mitochondrial VDAC1 uncoupling, chronic cGAS-STING/NLRP3 sterile inflammation, and impaired cellular recovery",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Primary Clinical Manifestation",
    "lossKind": "risk",
    "refs": [
      "[33]",
      "[34]"
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
    "id": "psa-phenotype",
    "label": "Psoriatic Arthritis & Synovial Enthesitis",
    "compartment": "clinical",
    "tier": "systemic",
    "layer": 4,
    "category": "Tissue / Synovial Pathology",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Chronic auto-inflammatory arthropathy driven by unrestrained IL-17A, TNF, and Type I IFN signaling at entheses and synovial membranes; responds rapidly to JAK inhibitor therapy (tofacitinib/upadacitinib)",
    "rationale": "Systemic inflammatory manifestation linked to loss of NF-\u03baB and IRF7 suppression",
    "locEvidence": "G",
    "domain": "immune",
    "lossLabel": "Active Auto-inflammatory Disease",
    "lossKind": "risk",
    "refs": [
      "[16]",
      "[33]"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "macrophage",
      "microglia",
      "cd4_tcell",
      "monocyte"
    ]
  },
  {
    "id": "interferonopathy-ags",
    "label": "Type I Interferonopathy / AGS-like Spectrum",
    "compartment": "clinical",
    "tier": "systemic",
    "layer": 5,
    "category": "Systemic Clinical Phenotype",
    "criticality": "Critical",
    "impact": "Severe",
    "priority": "Most Urgent",
    "relevance": "Constitutive interferon-stimulated gene (ISG) transcriptional signature driven by chronic cytosolic DNA (mtDNA/micronuclei) and dsRNA sensing; phenotypic spectrum spanning Aicardi-Gouti\u00e8res syndrome (AGS5) to adult-onset lupus-like autoimmunity",
    "rationale": "Prototypical systemic outcome of SAMHD1 genetic deficiency (Rice et al. 2009); foundation of the clinical autoinflammatory phenotype",
    "locEvidence": "S",
    "domain": "immune",
    "lossLabel": "Haploinsufficient Interferonopathy",
    "lossKind": "risk",
    "refs": [
      "[2]",
      "[22]",
      "[58]"
    ],
    "evidence_tier": "L6_human_clinical",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  }
];
