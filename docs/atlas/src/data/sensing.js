/**
 * sensing.js — cytosolic and endosomal nucleic-acid sensing, the ANKIB1 K11-Ub
 * gain-control node, the TBK1/IRF3/IRF7 scaffold, and NF-κB.
 *
 * This is Loop A's upstream half plus the shared signalling spine that every
 * other module plugs into.
 */

export const nodes = [
  {
    "id": "cgas",
    "label": "cGAS",
    "full": "Cyclic GMP-AMP synthase (MB21D1)",
    "compartment": "cytosol",
    "klass": "sensor",
    "pathways": [
      "cgas-sting"
    ],
    "pos": [
      26,
      6,
      48
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Length-dependent cytosolic dsDNA sensor. Binds DNA as a 2:2 ladder and switches on its nucleotidyl-transferase activity.",
    "detail": "cGAS does not care where the DNA came from — only that it is double-stranded and in the cytosol. In SAMHD1-deficient cells the cytosolic DNA is overwhelmingly mitochondrial, and the entire ISG signature is cGAS-dependent: double knockout of SAMHD1 + cGAS abolishes ISGs, and IMSB301 normalises the ISG signature in AGS PBMCs.",
    "samhd1": "A565T haploinsufficiency supplies cGAS with three ligand streams at once: mtDNA fragments through the VDAC1 macropore, ssDNA fragments from collapsed replication forks, and LINE-1 cDNA that escaped restriction. This is the entry point of Loop A.",
    "drugs": [
      "imsb301"
    ],
    "refs": [
      "west2015",
      "han2026",
      "rabinowitz2025",
      "coquel2018"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "kinetics": {
      "DNA_length_threshold_bp": 45,
      "cGAMP_synth_kcat_s": 1.2,
      "Kd_dsDNA_nM": 25
    },
    "db_xrefs": {
      "uniprot": "Q8N884",
      "ensembl": "ENSG00000164430",
      "hgnc": "HGNC:21367",
      "chembl": "CHEMBL3706170"
    }
  },
  {
    "id": "cgamp",
    "label": "2′3′-cGAMP",
    "full": "Cyclic GMP-AMP, the cGAS second messenger",
    "compartment": "cytosol",
    "klass": "metabolite",
    "pathways": [
      "cgas-sting"
    ],
    "pos": [
      16,
      16,
      42
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Non-canonical 2′-5′/3′-5′ cyclic dinucleotide; the highest-affinity endogenous STING agonist known.",
    "detail": "cGAMP also passes to neighbouring cells through gap junctions and via SLC19A1 import, which is how one stressed cell can raise the interferon tone of a whole tissue field.",
    "refs": [
      "ablasser2013"
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
    "id": "sting",
    "label": "STING",
    "full": "Stimulator of interferon genes (TMEM173 / STING1)",
    "compartment": "er",
    "klass": "adaptor",
    "pathways": [
      "cgas-sting",
      "ankib1"
    ],
    "pos": [
      4,
      30,
      36
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "ER-resident dimer. cGAMP binding closes its ligand-binding lid, triggering polymerisation and ER exit.",
    "detail": "Activated STING traffics ER → ERGIC → Golgi. Only after it reaches the ERGIC does its C-terminal tail recruit TBK1 in a way that permits IRF3 phosphorylation — trafficking is part of the switch, not incidental to it.\n\nGENOTYPE MODIFIER, EXPLICITLY HYPOTHETICAL (added 2026-09, Baker et al. 2026 + Simchoni et al. 2025): a patient with COMPLETE SAMHD1 loss (homozygous balanced translocation, not this atlas's heterozygous A565T model) who is also heterozygous for the common STING1 HAQ allele presented WITHOUT the AGS-typical neurological features or cerebral calcification. Baker et al. propose the HAQ allele as a partial explanation, citing Simchoni et al. 2025's demonstration that HAQ STING dominantly dampens COPA-syndrome-driven STING signaling as precedent -- but say so explicitly as hypothetical, pending a larger SAMHD1-deficiency cohort. No causal edge is drawn for this: it is a single-patient genotype observation with an authors'-own-flagged-speculative mechanism, not a demonstrated dose-response.",
    "samhd1": "STING is one of the five ANKIB1 K11-Ub substrates held constitutively primed by SAMHD1 loss. Primed STING lowers the threshold for TBK1/IRF3 scaffold assembly, producing tonic rather than pulsatile interferon.",
    "refs": [
      "betrancourt2026",
      "ng2024",
      "baker2026",
      "simchoni2025haq"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "kinetics": {
      "Kd_cGAMP_nM": 4.8,
      "oligomerization_threshold_nM": 15
    },
    "db_xrefs": {
      "uniprot": "Q86WV6",
      "ensembl": "ENSG00000184584",
      "hgnc": "HGNC:27962",
      "chembl": "CHEMBL3714578"
    }
  },
  {
    "id": "sting-golgi",
    "label": "STING°(Golgi)",
    "full": "Palmitoylated STING at the ERGIC/Golgi — the signalling-competent pool",
    "compartment": "er",
    "klass": "adaptor",
    "pathways": [
      "cgas-sting"
    ],
    "pos": [
      18,
      36,
      26
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Palmitoylation at Cys88/91 clusters STING into signalling-competent microdomains on Golgi membranes.",
    "detail": "This step is where the covalent-inhibitor class (H-151, nitrofurans) acts, and it is the reason STING signalling is terminated by lysosomal degradation rather than by dephosphorylation.",
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
    "id": "sting-nuclear",
    "label": "STING (nuclear/chromatin)",
    "full": "Nuclear/chromatin-bound STING pool induced by replication stress",
    "compartment": "nucleus",
    "klass": "adaptor",
    "pathways": [
      "cgas-sting",
      "genome"
    ],
    "pos": [
      -46,
      -2,
      -14
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "A cGAMP-independent STING pool: replication stress alone drives STING onto chromatin, bypassing cytosolic-DNA sensing entirely.",
    "detail": "Replication stress (HU, ssDNA transfection) drives STING into the nucleus and onto chromatin WITHOUT cGAMP elevation, S366 phosphorylation, ERGIC/Golgi trafficking, or TBK1/IRF3 activation — a distinct pool from sting-golgi. This is the first direct fork-arm-to-interferon-arm edge that does not route through cytosolic DNA sensing: cytosolic DNA is not the only route by which the fork arm reaches ISGs. Predominates in chronic endogenous-stress states (aged/late-passage fibroblasts, progeria) rather than acute infection.\n\nCELL-CONTEXT NOTE (per review, 2026-09-12): Teodoro-Castro et al. 2026 demonstrated this exclusively in progerin-inducible human dermal fibroblasts and U2OS cells -- NOT in monocytes, macrophages, microglia, dendritic cells, or CD4+ T cells. The cell_context list below represents this atlas's own disease-relevant myeloid/immune lineages for modeling purposes; whether the mechanism transfers to those cell types is an open extrapolation, not something this citation directly tested.",
    "refs": [
      "teodorocastro2026"
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
    "id": "rigi",
    "label": "RIG-I",
    "full": "Retinoic acid-inducible gene I (DDX58)",
    "compartment": "cytosol",
    "klass": "sensor",
    "pathways": [
      "rlr-mavs"
    ],
    "pos": [
      -6,
      -22,
      54
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Senses short 5′-triphosphate blunt-ended dsRNA — the signature of viral replication intermediates.",
    "detail": "ATP-driven translocation along duplex RNA releases the CARD domains from autorepression; the freed CARDs nucleate MAVS filaments in a prion-like manner.",
    "refs": [
      "espada2023"
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
    "id": "mda5",
    "label": "MDA5",
    "full": "Melanoma differentiation-associated protein 5 (IFIH1)",
    "compartment": "cytosol",
    "klass": "sensor",
    "pathways": [
      "rlr-mavs",
      "retro"
    ],
    "pos": [
      8,
      -18,
      56
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Senses long duplex RNA by cooperative filament assembly. The retroelement sensor of the RLR family.",
    "detail": "MDA5 has no end-recognition mechanism — it polymerises along the length of a duplex, so it reads duplex LENGTH as the danger signal. Its physiological self-antigen problem is Alu inverted-repeat dsRNA in 3′UTRs, which ADAR1 p150 must continuously edit to keep below the MDA5 threshold. IFIH1 gain-of-function is AGS7; ADAR1 loss is AGS6. Both converge on this node.",
    "samhd1": "SAMHD1 deficiency activates MDA5 in a cGAS/STING-INDEPENDENT manner — a genuinely separate arm from Loop A. SAMHD1 normally sequesters immunostimulatory dsRNA in LLPS condensates; losing that sequestration exposes duplex RNA that MDA5 reads as viral.",
    "refs": [
      "schumann2023",
      "ahmad2018",
      "liddicoat2015",
      "ricemda5"
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
    "id": "lgp2",
    "label": "LGP2",
    "full": "Laboratory of genetics and physiology 2 (DHX58)",
    "compartment": "cytosol",
    "klass": "sensor",
    "pathways": [
      "rlr-mavs"
    ],
    "pos": [
      16,
      -26,
      52
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "CARD-less RLR that tunes MDA5 filament nucleation — accelerates it at low levels, caps it at high levels.",
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
    "id": "dsrna-cyt",
    "label": "cytosolic dsRNA",
    "full": "Immunostimulatory cytosolic double-stranded RNA",
    "compartment": "cytosol",
    "klass": "ligand",
    "pathways": [
      "rlr-mavs",
      "retro"
    ],
    "pos": [
      0,
      -12,
      62
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Mixed pool: Alu inverted repeats, mitochondrial bidirectional transcripts, HERV transcripts, viral replication intermediates.",
    "samhd1": "SAMHD1 normally holds this pool inside LLPS condensates. Haploinsufficiency releases it into free solution where MDA5 can polymerise on it.",
    "refs": [
      "schumann2023",
      "ahmad2018"
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
    "id": "mtdsrna",
    "label": "mito dsRNA",
    "full": "Mitochondrial bidirectional-transcription double-stranded RNA",
    "compartment": "mitochondrion",
    "klass": "ligand",
    "pathways": [
      "rlr-mavs",
      "mito"
    ],
    "pos": [
      44,
      8,
      34
    ],
    "lod": 2,
    "evidence": "I",
    "summary": "Both mtDNA strands are transcribed fully; the resulting complementary RNAs form duplexes that PNPASE and SUV3 normally degrade.",
    "detail": "When mitochondrial RNA-degradosome capacity is exceeded, mito-dsRNA escapes to the cytosol and is read by MDA5 — stressor S5 in the Convergent Mitochondrial Catastrophe figure.",
    "refs": [
      "docSiege"
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
    "id": "mavs",
    "label": "MAVS",
    "full": "Mitochondrial antiviral-signalling protein (IPS-1 / VISA / Cardif)",
    "compartment": "mitochondrion",
    "klass": "adaptor",
    "pathways": [
      "rlr-mavs",
      "mito"
    ],
    "pos": [
      34,
      12,
      25
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Tail-anchored in the outer mitochondrial membrane. RLR CARDs seed self-propagating MAVS prion-like filaments.",
    "detail": "MAVS is why RNA sensing is a mitochondrial event. Filament assembly is all-or-nothing and requires an intact membrane potential — which links ΔΨm collapse directly to signalling competence.",
    "samhd1": "SAMHD1 impairs type I IFN induction through the MAVS–IKKε–IRF3/7 axis; losing it de-represses this platform at the same time as the mitochondrion beneath it is being damaged.",
    "refs": [
      "espada2023"
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
    "id": "mavs-perox",
    "label": "MAVS (peroxisomal)",
    "full": "Peroxisomal MAVS pool",
    "compartment": "peroxisome",
    "klass": "adaptor",
    "pathways": [
      "rlr-mavs"
    ],
    "pos": [
      58,
      36,
      -34
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Drives rapid, IFN-independent ISG expression; the mitochondrial pool supplies the slower type-I IFN amplitude.",
    "detail": "Two platforms, two kinetics: peroxisomal MAVS gives an immediate local antiviral state, mitochondrial MAVS gives the systemic interferon wave. Only the mitochondrial pool is degraded by mitochondrial injury.",
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
    "id": "traf3",
    "label": "TRAF3",
    "full": "TNF receptor-associated factor 3",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "rlr-mavs",
      "tlr"
    ],
    "pos": [
      30,
      20,
      40
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "K63-Ub ligase that couples MAVS and TRIF to the TBK1/IKKε arm (IRF branch).",
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
    "id": "traf6",
    "label": "TRAF6",
    "full": "TNF receptor-associated factor 6",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "rlr-mavs",
      "tlr",
      "nfkb"
    ],
    "pos": [
      38,
      -12,
      44
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "K63-Ub ligase that couples MAVS/MyD88 to the IKK complex (NF-κB branch).",
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
    "id": "tlr3",
    "label": "TLR3",
    "full": "Toll-like receptor 3",
    "compartment": "endosome",
    "klass": "receptor",
    "pathways": [
      "tlr"
    ],
    "pos": [
      -26,
      -32,
      52
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Endosomal dsRNA receptor. The only TLR that signals exclusively through TRIF.",
    "detail": "TLR3 → TRIF → TBK1 → IRF3 is also the arm that INDUCES SAMHD1 transcription. That makes it the “upward” therapeutic direction: poly-ICLC agonism raises SAMHD1 protein in a haploinsufficient cell.",
    "samhd1": "A two-phase onset — prodromal immune fragility, then a full phenotype precipitated by acute viral infection — is read as the TLR3→IRF3→SAMHD1 loop failing to terminate the innate response after viral clearance. Losing the induction arm means the response has no scheduled end.",
    "drugs": [
      "polyiclc"
    ],
    "refs": [
      "yang2016irf3",
      "doc10arm",
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
    "id": "tlr7",
    "label": "TLR7/8",
    "full": "Toll-like receptors 7 and 8 — endosomal ssRNA sensors",
    "compartment": "endosome",
    "klass": "receptor",
    "pathways": [
      "tlr",
      "retro"
    ],
    "pos": [
      -38,
      -42,
      46
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Sense GU-rich ssRNA including HERV and LINE-1 transcripts delivered by autophagy or phagocytosis.",
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
    "id": "tlr9",
    "label": "TLR9",
    "full": "Toll-like receptor 9 — endosomal unmethylated CpG DNA sensor",
    "compartment": "endosome",
    "klass": "receptor",
    "pathways": [
      "tlr"
    ],
    "pos": [
      -24,
      -48,
      44
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Senses hypomethylated CpG DNA — including mtDNA, which is bacterially hypomethylated by ancestry.",
    "detail": "Mitochondrial DNA released from dying cells is a TLR9 agonist as well as a cGAS ligand: the same molecule drives two receptors in two compartments.",
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
    "id": "ll37",
    "label": "LL-37",
    "full": "Cathelicidin antimicrobial peptide LL-37 (CAMP / hCAP18 C-terminal peptide)",
    "compartment": "extracellular",
    "klass": "effector",
    "pathways": [
      "tlr"
    ],
    "pos": [
      -58,
      86,
      40
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "A cationic antimicrobial peptide whose second job is to chaperone self-DNA — converting an inert host molecule into a TLR9 agonist.",
    "detail": "LL-37 is massively overexpressed in psoriatic skin. It binds extracellular self-DNA electrostatically and condenses it into ordered aggregates that resist nuclease digestion and are retained in the pDC early endosome long enough to signal. Neither component does this alone: LL-37 without DNA is not an interferon stimulus, and self-DNA without LL-37 is not a TLR9 ligand.",
    "samhd1": "No SAMHD1 link is claimed, and none should be read in. This arm is in the atlas because the phenotype includes enthesitis-predominant psoriatic arthritis and the canonical psoriasis initiation mechanism was absent — a gap in the DISEASE model rather than in the SAMHD1 cascade. What joins it to the rest of the board is its product, IFN-α, which is already modelled; it does not join through SAMHD1.",
    "refs": [
      "lande2007",
      "ganguly2009"
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
    "id": "ll37-dna",
    "label": "LL-37 · self-DNA",
    "full": "LL-37–self-DNA condensate — the converted TLR9 agonist",
    "compartment": "endosome",
    "klass": "ligand",
    "pathways": [
      "tlr"
    ],
    "pos": [
      -22,
      -42,
      54
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "The conversion product. This is the node that carries the claim, because self-DNA alone is not a TLR9 agonist and this complex is.",
    "detail": "Lande et al. showed the discrimination is one of trafficking and residence rather than of chemistry — the aggregate is delivered to and retained in the early endosome, which is the compartment where a pDC couples TLR9 to IRF7 rather than to NF-κB. Same receptor, same nucleotide sequence, different outcome, because a peptide changed where and for how long the ligand sat.",
    "refs": [
      "lande2007"
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
    "id": "tlr4",
    "label": "TLR4",
    "full": "Toll-like receptor 4 (LPS / DAMP receptor)",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "tlr",
      "nfkb"
    ],
    "pos": [
      8,
      64,
      36
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Surface receptor using both MyD88 (NF-κB) and, after endocytosis, TRIF (IRF3). The canonical NLRP3 priming signal.",
    "samhd1": "TLR4 engagement triggers interferon-independent G0 arrest with SAMHD1-dependent dNTP depletion — a normal response that a haploinsufficient cell cannot execute properly.",
    "refs": [
      "mlcochova2020",
      "betrancourt2026"
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
    "id": "trif",
    "label": "TRIF",
    "full": "TIR-domain-containing adapter-inducing IFN-β (TICAM1)",
    "compartment": "endosome",
    "klass": "adaptor",
    "pathways": [
      "tlr",
      "ankib1"
    ],
    "pos": [
      -30,
      -34,
      59
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "The IRF3-directing TLR adaptor; also a bona fide ANKIB1 K11-Ub substrate.",
    "samhd1": "Reduced SAMHD1-mediated negative feedback leaves TRIF constitutively K11-primed — one of the five substrates that lowers the TBK1/IRF3 assembly threshold.",
    "refs": [
      "betrancourt2026"
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
    "id": "myd88",
    "label": "MyD88",
    "full": "Myeloid differentiation primary response 88",
    "compartment": "endosome",
    "klass": "adaptor",
    "pathways": [
      "tlr",
      "nfkb"
    ],
    "pos": [
      -40,
      -34,
      40
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Assembles the Myddosome with IRAK4/IRAK1 → TRAF6 → NF-κB, and in pDCs → IRF7 directly.",
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
    "id": "irak14",
    "label": "IRAK4/1",
    "full": "Interleukin-1 receptor-associated kinases 4 and 1",
    "compartment": "endosome",
    "klass": "kinase",
    "pathways": [
      "tlr",
      "nfkb"
    ],
    "pos": [
      -45,
      -40,
      37
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Myddosome kinases; IRAK1 phosphorylates IRF7 directly in the plasmacytoid dendritic-cell IFN burst.",
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
    "id": "ankib1",
    "label": "ANKIB1",
    "full": "Ankyrin repeat and IBR domain-containing 1 — K11-Ub E3 ligase",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "ankib1",
      "cgas-sting",
      "tlr"
    ],
    "pos": [
      6,
      22,
      8
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Assembles K11-linked ubiquitin chains on STING, TRIF, NEMO, OPTN — and on itself. The gain-control knob of the whole system.",
    "detail": "Betrancourt/Rieser/Walczak (Nat Cell Biol 2026) established K11 ubiquitination as the linkage that drives type-I/III interferon induction downstream of both cGAS–STING and TLR3/4. ANKIB1 is not a terminal effector — it sets the THRESHOLD at which TBK1/IRF3 scaffolds assemble. That is why the resulting phenotype is a moderate, unrelenting tonic interferon output rather than discrete cytokine surges.",
    "samhd1": "This is the framework's central gain-control claim. SAMHD1 loss primes all five substrates at once: dNTPase failure primes STING via cGAS, reduced negative feedback primes TRIF, reduced NF-κB suppression primes NEMO. Worse, ANKIB1 AUTO-ubiquitinates during activation and is degraded by the proteasome — so the master negative regulator destroys itself exactly when it is needed most. A self-terminating feedback controller cannot hold homeostasis under chronic drive. Predicted readout: ANKIB1 protein REDUCED at baseline in A565T cells, restored by amlexanox (Arms 5–6) but NOT by upadacitinib (Arm 2).",
    "refs": [
      "betrancourt2026",
      "doc10arm",
      "docConcept"
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
      "uniprot": "Q9P2G1",
      "ensembl": "ENSG00000113889",
      "hgnc": "HGNC:19363"
    }
  },
  {
    "id": "k11ub",
    "label": "K11-Ub chains",
    "full": "Lysine-11-linked polyubiquitin — the interferon-permissive linkage",
    "compartment": "cytosol",
    "klass": "metabolite",
    "pathways": [
      "ankib1"
    ],
    "pos": [
      12,
      28,
      2
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Distinct from K48 (degradation) and K63 (canonical signalling). K11 loading on the five substrates lowers scaffold-assembly threshold.",
    "detail": "Measurable with linkage-specific antibodies (clone 2A3/2E6) or K11-TUBE reagents — which is what makes K11-Ub/STING loading a candidate patient-stratification biomarker rather than a purely theoretical node.",
    "refs": [
      "betrancourt2026",
      "doc10arm"
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
    "id": "optn",
    "label": "OPTN",
    "full": "Optineurin — TBK1 scaffold recruiter and mitophagy receptor",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "ankib1",
      "mitophagy"
    ],
    "pos": [
      18,
      34,
      12
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Dual role: recruits TBK1 into signalling scaffolds, and acts as an autophagy receptor on ubiquitinated mitochondria.",
    "detail": "OPTN sits at the exact junction where this disease turns on itself — the same protein that amplifies interferon signalling is the one needed to clear the damaged mitochondria producing the ligands.",
    "refs": [
      "betrancourt2026"
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
    "id": "nemo",
    "label": "NEMO",
    "full": "NF-κB essential modulator (IKKγ)",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "nfkb",
      "ankib1"
    ],
    "pos": [
      -2,
      -10,
      26
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Regulatory subunit of the IKK complex; ubiquitin-chain receptor and ANKIB1 K11-Ub substrate.",
    "samhd1": "Loss of SAMHD1's NF-κB-suppressive function leaves NEMO constitutively primed — the third of the five ANKIB1 substrates.",
    "refs": [
      "wang2018",
      "betrancourt2026"
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
      "uniprot": "Q9Y6K9",
      "ensembl": "ENSG00000269386",
      "hgnc": "HGNC:5961"
    }
  },
  {
    "id": "tbk1",
    "label": "TBK1",
    "full": "TANK-binding kinase 1",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "cgas-sting",
      "rlr-mavs",
      "tlr",
      "ankib1"
    ],
    "pos": [
      12,
      26,
      22
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "The master switch linking every upstream sensor to IRF3/IRF7 transactivation. Trans-autophosphorylates at Ser172.",
    "detail": "TBK1 activation requires clustering on a scaffold, not simple ligand binding — which is precisely why K11-Ub priming of the scaffold components is a gain-control mechanism rather than an on/off switch.",
    "samhd1": "p-TBK1(Ser172) is unaffected by JAK1 inhibition, making it the cleanest pharmacologic separator across the study arms: it moves with amlexanox (Arms 5–6) and not with upadacitinib (Arm 2).",
    "drugs": [
      "amlexanox"
    ],
    "refs": [
      "betrancourt2026",
      "doc10arm",
      "reilly2013"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "kinetics": {
      "p_Ser172_turnover_s": 3.4,
      "amlexanox_IC50_uM": 5.6
    },
    "db_xrefs": {
      "uniprot": "Q9UHD2",
      "ensembl": "ENSG00000183747",
      "hgnc": "HGNC:11584",
      "chembl": "CHEMBL5686"
    }
  },
  {
    "id": "ikke",
    "label": "IKKε",
    "full": "Inhibitor of κB kinase ε (IKBKE)",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "cgas-sting",
      "rlr-mavs",
      "ankib1",
      "metabolic"
    ],
    "pos": [
      24,
      28,
      16
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "TBK1 paralogue; the dominant IRF7 kinase and an independent driver of metabolic inflammation.",
    "detail": "Reilly et al. showed TBK1/IKKε inhibition improves obesity-related metabolic dysfunction — which is why amlexanox lands on both the interferon and the metabolic arms of this phenotype at once.",
    "samhd1": "SAMHD1 occupies IRF7's inhibitory domain and physically prevents IKKε-mediated phosphorylation. Haploinsufficiency removes that block, so IKKε phosphorylates IRF7 constitutively.",
    "drugs": [
      "amlexanox"
    ],
    "refs": [
      "espada2023",
      "reilly2013",
      "bjork2025"
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
      "uniprot": "Q14164",
      "ensembl": "ENSG00000143464",
      "hgnc": "HGNC:5962",
      "chembl": "CHEMBL5687"
    }
  },
  {
    "id": "irf3",
    "label": "IRF3",
    "full": "Interferon regulatory factor 3",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "cgas-sting",
      "rlr-mavs",
      "tlr"
    ],
    "pos": [
      -2,
      16,
      6
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Constitutively expressed first-wave IFN transcription factor. Phosphorylation → dimerisation → nuclear import.",
    "detail": "IRF3 drives IFN-β (IFNB1) and a subset of ISGs directly, without needing new protein synthesis — it is the immediate response. It also drives SAMHD1 transcription, closing a normally protective loop.",
    "samhd1": "The IRF3→SAMHD1 induction arm is the therapeutic \"upward\" direction (Arms 3–4). It is also the reason amlexanox carries a genome-stability tradeoff: suppressing IRF3 lowers SAMHD1 transcription in a cell that is already haploinsufficient.",
    "refs": [
      "yang2016irf3",
      "doc10arm"
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
      "uniprot": "Q14653",
      "ensembl": "ENSG00000126456",
      "hgnc": "HGNC:6118"
    }
  },
  {
    "id": "irf7",
    "label": "IRF7",
    "full": "Interferon regulatory factor 7 — the amplification-loop factor",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "cgas-sting",
      "tlr",
      "metabolic"
    ],
    "pos": [
      -10,
      4,
      16
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "The second-wave amplifier: itself an ISG, so once interferon starts, IRF7 rises and drives more interferon.",
    "detail": "IRF7 is the master regulator of the IFN-α subtypes. Because IRF7 is interferon-inducible, IRF3 → IFN-β → IFNAR → IRF7 → IFN-α is a positive-feedback amplifier with no intrinsic ceiling except its brakes.",
    "samhd1": "SAMHD1 physically occupies IRF7's inhibitory domain. This is Brake 1 of the four failed brakes: haploinsufficiency removes IRF7 restraint, giving constitutive second-wave interferon. IRF7 also transactivates MCP-1 SPECIFICALLY in visceral adipocytes — the mechanistic link from an immune gene to android-pattern adiposity and diet-refractory steatosis.",
    "refs": [
      "espada2023",
      "kuroda2020",
      "li2013irf7",
      "docConcept"
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
      "uniprot": "Q92985",
      "ensembl": "ENSG00000185507",
      "hgnc": "HGNC:6122"
    }
  },
  {
    "id": "ikk",
    "label": "IKKβ",
    "full": "Inhibitor of κB kinase beta (IKBKB) — the canonical catalytic subunit",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "nfkb"
    ],
    "pos": [
      -8,
      -14,
      22
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Phosphorylates IκBα on Ser32/36, marking it for K48-Ub and proteasomal destruction. The canonical arm runs through here; IKKα carries the non-canonical one.",
    "evidence_tier": "L3_cell_line",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "O15111",
      "ensembl": "ENSG00000104365",
      "hgnc": "HGNC:5960"
    }
  },
  {
    "id": "ikba",
    "label": "IκBα",
    "full": "Nuclear factor of κB inhibitor alpha (NFKBIA)",
    "compartment": "cytosol",
    "klass": "structure",
    "pathways": [
      "nfkb"
    ],
    "pos": [
      -16,
      -10,
      18
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Masks the NF-κB nuclear localisation signal. Its degradation is the licensing step for NF-κB nuclear entry.",
    "detail": "IκBα is itself an NF-κB target gene, giving the pathway its classic oscillatory negative feedback — oscillation that a constitutively driven system flattens into a plateau.",
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
    "id": "nfkb",
    "label": "NF-κB p65/p50",
    "full": "Nuclear factor κB — RelA/p50 heterodimer",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "nfkb",
      "inflammasome"
    ],
    "pos": [
      -20,
      -18,
      12
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Drives the NLRP3 priming signal (NLRP3 + pro-IL-1β transcription), IL-6, IL-23, TNF-α and IκBα.",
    "detail": "NF-κB is signal 1 of the two-signal inflammasome model. Without it, NLRP3 and pro-IL-1β are not present in sufficient quantity for signal 2 to matter.",
    "samhd1": "SAMHD1 suppresses innate immune responses by inhibiting the NF-κB pathway directly. Its loss is Brake 4 of the four failed brakes — de-suppressed IKK gives IL-1β/IL-23 → Th17 → the psoriatic arthritis axis.",
    "refs": [
      "wang2018",
      "swanson2019",
      "docConcept"
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
      "uniprot": "P19838",
      "ensembl": "ENSG00000109320",
      "hgnc": "HGNC:7794"
    }
  }
];

export const edges = [
  {
    "from": "cgas",
    "to": "cgamp",
    "kind": "produce",
    "label": "ATP + GTP → 2′3′-cGAMP",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "loop": "A",
    "refs": [
      "ablasser2013"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "cgamp",
    "to": "sting",
    "kind": "activate",
    "label": "binds CDN pocket, closes lid",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "sting",
    "to": "sting-golgi",
    "kind": "translocate",
    "label": "ER → ERGIC → Golgi trafficking",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "compartment_translocation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "sting-golgi",
    "to": "tbk1",
    "kind": "activate",
    "label": "CTT recruits TBK1",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "sting",
    "to": "tbk1",
    "kind": "activate",
    "label": "STING–TBK1 scaffold",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "S",
    "loop": "A",
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "sting",
    "to": "nemo",
    "kind": "activate",
    "label": "STING → NF-κB branch",
    "pathways": [
      "cgas-sting",
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "dsrna-cyt",
    "to": "mda5",
    "kind": "sense",
    "label": "long duplex → cooperative filament",
    "pathways": [
      "rlr-mavs",
      "retro"
    ],
    "evidence": "S",
    "refs": [
      "schumann2023"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "nucleic_acid_sensing",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "dsrna-cyt",
    "to": "rigi",
    "kind": "sense",
    "label": "5′ppp blunt end",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "nucleic_acid_sensing",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "mtdsrna",
    "to": "mda5",
    "kind": "sense",
    "label": "mito dsRNA escape (stressor S5)",
    "pathways": [
      "rlr-mavs",
      "mito"
    ],
    "evidence": "I",
    "refs": [
      "docSiege"
    ],
    "evidence_tier": "L1_in_silico",
    "interaction_type": "nucleic_acid_sensing",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "lgp2",
    "to": "mda5",
    "kind": "activate",
    "label": "tunes filament nucleation",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "mda5",
    "to": "mavs",
    "kind": "activate",
    "label": "CARD–CARD prion-like seeding",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "S",
    "refs": [
      "espada2023"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "rigi",
    "to": "mavs",
    "kind": "activate",
    "label": "CARD–CARD seeding",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "mda5",
    "to": "mavs-perox",
    "kind": "activate",
    "label": "peroxisomal platform — fast, IFN-independent ISGs",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "mavs",
    "to": "traf3",
    "kind": "activate",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "mavs",
    "to": "traf6",
    "kind": "activate",
    "pathways": [
      "rlr-mavs",
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "mavs-perox",
    "to": "traf3",
    "kind": "activate",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "traf3",
    "to": "tbk1",
    "kind": "activate",
    "label": "K63-Ub scaffolding",
    "pathways": [
      "rlr-mavs",
      "tlr"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "traf3",
    "to": "ikke",
    "kind": "activate",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "S",
    "refs": [
      "espada2023"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "traf6",
    "to": "ikk",
    "kind": "activate",
    "label": "K63-Ub → TAK1 → IKK",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "tlr3",
    "to": "trif",
    "kind": "activate",
    "label": "TIR–TIR, TRIF-exclusive",
    "pathways": [
      "tlr"
    ],
    "evidence": "S",
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "tlr4",
    "to": "trif",
    "kind": "activate",
    "label": "after endocytosis (TRAM-dependent)",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "tlr4",
    "to": "myd88",
    "kind": "activate",
    "label": "surface, MAL-dependent",
    "pathways": [
      "tlr",
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "tlr7",
    "to": "myd88",
    "kind": "activate",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "tlr9",
    "to": "myd88",
    "kind": "activate",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "myd88",
    "to": "irak14",
    "kind": "activate",
    "label": "Myddosome assembly",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "irak14",
    "to": "traf6",
    "kind": "activate",
    "pathways": [
      "tlr",
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "irak14",
    "to": "irf7",
    "kind": "phos",
    "label": "IRAK1 → IRF7 (pDC burst)",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "kinase_phosphorylation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "ll37",
    "to": "ll37-dna",
    "kind": "bind",
    "label": "condenses self-DNA into nuclease-resistant aggregates",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "refs": [
      "lande2007"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "ll37-dna",
    "to": "tlr9",
    "kind": "sense",
    "label": "the conversion step — self-DNA alone is NOT a TLR9 agonist, the complex is",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "refs": [
      "lande2007"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "nucleic_acid_sensing",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "trif",
    "to": "traf3",
    "kind": "activate",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "trif",
    "to": "traf6",
    "kind": "activate",
    "pathways": [
      "tlr",
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "ankib1",
    "to": "k11ub",
    "kind": "produce",
    "label": "assembles K11-linked chains",
    "pathways": [
      "ankib1"
    ],
    "evidence": "G",
    "loop": "ankib1",
    "refs": [
      "betrancourt2026"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "k11ub",
    "to": "sting",
    "kind": "ubiq",
    "label": "substrate 1 — primes STING",
    "pathways": [
      "ankib1"
    ],
    "evidence": "G",
    "loop": "ankib1",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "ubiquitin_conjugation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "k11ub",
    "to": "trif",
    "kind": "ubiq",
    "label": "substrate 2 — primes TRIF",
    "pathways": [
      "ankib1"
    ],
    "evidence": "G",
    "loop": "ankib1",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "ubiquitin_conjugation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "k11ub",
    "to": "nemo",
    "kind": "ubiq",
    "label": "substrate 3 — primes NEMO",
    "pathways": [
      "ankib1"
    ],
    "evidence": "G",
    "loop": "ankib1",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "ubiquitin_conjugation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "k11ub",
    "to": "optn",
    "kind": "ubiq",
    "label": "substrate 4 — primes OPTN",
    "pathways": [
      "ankib1"
    ],
    "evidence": "G",
    "loop": "ankib1",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "ubiquitin_conjugation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "k11ub",
    "to": "ankib1",
    "kind": "ubiq",
    "label": "substrate 5 — AUTO-ubiquitination → proteasomal self-destruction",
    "pathways": [
      "ankib1"
    ],
    "evidence": "G",
    "loop": "ankib1",
    "bend": 0.4,
    "refs": [
      "betrancourt2026",
      "doc10arm"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "ubiquitin_conjugation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "optn",
    "to": "tbk1",
    "kind": "activate",
    "label": "OPTN recruits TBK1 to the scaffold",
    "pathways": [
      "ankib1"
    ],
    "evidence": "G",
    "loop": "ankib1",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "tbk1",
    "to": "irf3",
    "kind": "phos",
    "label": "Ser386/396 → dimerisation",
    "pathways": [
      "cgas-sting",
      "rlr-mavs",
      "tlr"
    ],
    "evidence": "S",
    "loop": "A",
    "evidence_tier": "L4_primary_human",
    "interaction_type": "kinase_phosphorylation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ],
    "db_scores": {
      "string_combined": 0.999,
      "string_experimental": 0.927,
      "string_database": 0.9
    }
  },
  {
    "from": "tbk1",
    "to": "irf7",
    "kind": "phos",
    "pathways": [
      "cgas-sting",
      "tlr"
    ],
    "evidence": "S",
    "evidence_tier": "L4_primary_human",
    "interaction_type": "kinase_phosphorylation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ],
    "db_scores": {
      "string_combined": 0.992,
      "string_experimental": 0.331,
      "string_database": 0.9
    }
  },
  {
    "from": "ikke",
    "to": "irf7",
    "kind": "phos",
    "label": "dominant IRF7 kinase — blocked by SAMHD1 in health",
    "pathways": [
      "cgas-sting",
      "metabolic"
    ],
    "evidence": "S",
    "loop": "irf7",
    "refs": [
      "espada2023"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "kinase_phosphorylation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "ikke",
    "to": "irf3",
    "kind": "phos",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "kinase_phosphorylation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "nemo",
    "to": "ikk",
    "kind": "activate",
    "label": "ubiquitin-chain-dependent IKK activation",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "ikk",
    "to": "ikba",
    "kind": "phos",
    "label": "Ser32/36 → K48-Ub → proteasome",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "kinase_phosphorylation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "ikba",
    "to": "nfkb",
    "kind": "inhibit",
    "label": "masks NLS until degraded",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "ikk",
    "to": "nfkb",
    "kind": "activate",
    "label": "releases p65/p50",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  },
  {
    "from": "fork",
    "to": "sting-nuclear",
    "kind": "drive",
    "label": "Replication stress drives nuclear/chromatin STING accumulation, cGAMP-independent (demonstrated in fibroblasts/U2OS; myeloid cell-context is atlas extrapolation, not directly tested)",
    "pathways": [
      "genome",
      "cgas-sting"
    ],
    "evidence": "S",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "refs": [
      "teodorocastro2026"
    ],
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "ipsc"
    ]
  },
  {
    "from": "sting-nuclear",
    "to": "isg-set",
    "kind": "drive",
    "label": "CANDIDATE non-canonical association between nuclear/chromatin STING and residual ISG activation (p-STAT1, ISG15, RIG-I), observed alongside absent p-TBK1/p-IRF3 -- the direct causal intermediary remains unresolved",
    "pathways": [
      "cgas-sting",
      "isg"
    ],
    "evidence": "I",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "non_canonical_signaling",
    "detail": "Graded I deliberately: the source paper (fibroblasts/U2OS only) shows this ISG pattern co-occurring with nuclear STING accumulation, not a demonstrated mechanistic chain to it. Do not read `drive` here as established causation -- it is the closest available edge kind for a candidate/proposed association, not a claim the intermediary step is proven. Cell context (monocyte/macrophage/microglia/vic_cardiac/cd4_tcell) is this atlas's own disease-relevant modeling target, not a tested system.",
    "refs": [
      "teodorocastro2026"
    ],
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "vic_cardiac",
      "cd4_tcell"
    ]
  }
];

