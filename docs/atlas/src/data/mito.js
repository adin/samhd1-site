export const nodes = [
  {
    "id": "vdac1",
    "label": "VDAC1",
    "full": "Voltage-dependent anion channel 1 — outer-membrane porin",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito",
      "cgas-sting"
    ],
    "pos": [
      58,
      14,
      26
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "The most abundant outer-membrane protein and the gatekeeper of metabolite flux — and, when it oligomerises, of DNA escape.",
    "detail": "Monomeric VDAC1 passes ATP/ADP, NAD⁺ and Ca²⁺. Oligomeric VDAC1 forms a large-conductance macropore wide enough to pass mtDNA fragments into the cytosol. The switch between the two states is the single most therapeutically addressable event in this figure.",
    "samhd1": "SAMHD1 physically interacts with VDAC1 on the outer membrane, and Diaz-Griffero's group showed SAMHD1 must be present INSIDE the mitochondrial compartment to prevent ΔΨm collapse and mtDNA release. Losing that interaction opens the macropore. VBIT-4 in SAMHD1-KO monocytes prevents cytosolic mtDNA release and FULLY abolishes the spontaneous ISG response — which is the strongest single piece of evidence that Loop A is VDAC1-gated rather than oxidation-dependent.",
    "drugs": [
      "vbit4"
    ],
    "refs": [
      "xu2023vdac1",
      "rabinowitz2025",
      "shoshan2020"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "xu2023vdac1 = mouse + RAW264.7; rabinowitz2025 = THP-1 monocytes; shoshan2020 = review. No primary human evidence among these three. Fixed 2026-09-12; see literature-agent audit of commit e62bb56.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "db_xrefs": {
      "uniprot": "P21796",
      "ensembl": "ENSG00000213886",
      "hgnc": "HGNC:12682"
    }
  },
  {
    "id": "vdac1-oligo",
    "label": "VDAC1 macropore",
    "full": "Oligomerised VDAC1 — the large-conductance DNA-permissive pore",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito",
      "cgas-sting"
    ],
    "pos": [
      70,
      10,
      30
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "The primary constitutive mtDNA-fragment escape route in SAMHD1 haploinsufficiency.",
    "detail": "Driven by mtROS and amplified by SLC25A33 (PNC1) upregulation. Distinct from mPTP: this route operates without ΔΨm collapse, which is why it can run constitutively in a cell that is still alive and dividing.",
    "drugs": [
      "vbit4"
    ],
    "refs": [
      "xu2023vdac1",
      "kim2025",
      "rabinowitz2025"
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
    "id": "mptp",
    "label": "mPTP",
    "full": "Mitochondrial permeability transition pore (ANT/CypD/ATP-synthase dimer)",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito"
    ],
    "pos": [
      64,
      -16,
      18
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Second mtDNA escape route, opening downstream of ΔΨm collapse and Ca²⁺/ROS overload.",
    "detail": "TNF-α drives sublethal chronic mPTP opening via ROS, producing a persistent cytochrome-c leak rather than a lethal burst — stressor S8, and the reason apoptotic priming here is chronic rather than executioner.",
    "refs": [
      "shoshan2020",
      "docSiege"
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
    "id": "bik",
    "label": "BIK",
    "full": "BCL2-interacting killer — BH3-only apoptotic primer",
    "compartment": "mitochondrion",
    "klass": "effector",
    "pathways": [
      "mito",
      "mitophagy"
    ],
    "pos": [
      38,
      -22,
      14
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Directly upregulated by SAMHD1; sequesters BECN1, biasing the cell toward apoptosis over mitophagy.",
    "detail": "BIK knockdown blunts apoptosis and cytochrome-c release in THP-1 cells. Germline BIK + SAMHD1 variants co-segregate as prostate cancer susceptibility genes — a rare instance where the mitochondrial arm and the oncologic arm of this framework touch the same two genes.",
    "refs": [
      "yang2025bik",
      "luo2012",
      "pavlovich2025"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "OPEN 2026-09-12: yang2025bik is THP-1/U937 (this node's own detail text even says 'in THP-1 cells', directly contradicting the prior L4 tag). luo2012 (Luo S et al. Mol Cell 2012;47:359-370, PMID 22742832) is about BIM (BCL2L11) sequestering BECN1, NOT BIK -- flagged, not removed, since the BECN1-sequestration claim in this node's summary needs a real BIK-specific source or correction. pavlovich2025 IS a genuine human genetic cohort (BIK+SAMHD1 prostate cancer susceptibility) but backs the germline-variant claim, not the apoptosis/BECN1 mechanism this tier covers. See literature-agent audit of commit 20ae777.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "baxbak",
    "label": "BAX / BAK",
    "full": "Pro-apoptotic effectors — MOMP pore formers",
    "compartment": "mitochondrion",
    "klass": "effector",
    "pathways": [
      "mito"
    ],
    "pos": [
      46,
      -24,
      20
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Macropore formation for cytochrome-c release; sublethal (\"minority\") MOMP also permits mtDNA herniation.",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "cytc",
    "label": "cytochrome c",
    "full": "Cytochrome c — ETC electron shuttle and apoptotic signal",
    "compartment": "mitochondrion",
    "klass": "metabolite",
    "pathways": [
      "mito"
    ],
    "pos": [
      52,
      -24,
      24
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Its release is simultaneously a bioenergetic loss (Complex III→IV gap) and an apoptotic signal.",
    "refs": [
      "yang2025bik"
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
    "id": "drp1",
    "label": "DRP1",
    "full": "Dynamin-related protein 1 — fission GTPase",
    "compartment": "mitochondrion",
    "klass": "enzyme",
    "pathways": [
      "mito",
      "mitophagy"
    ],
    "pos": [
      30,
      -16,
      36
    ],
    "lod": 2,
    "evidence": "I",
    "summary": "STING activation drives DRP1-mediated fission far in excess of fusion, fragmenting the network.",
    "detail": "Fragmentation raises surface-to-volume ratio, raises mtROS, and multiplies the number of VDAC1 oligomerisation sites — the geometry itself becomes part of the feedback loop.",
    "refs": [
      "docSiege"
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
    "id": "mfn",
    "label": "MFN1/2",
    "full": "Mitofusins 1 and 2 — outer-membrane fusion GTPases",
    "compartment": "mitochondrion",
    "klass": "enzyme",
    "pathways": [
      "mito",
      "mitophagy",
      "isg"
    ],
    "pos": [
      74,
      -14,
      20
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "ISGylated by ISG15, which blocks the PINK1/Parkin mitophagy programme downstream of them.",
    "detail": "The IRF1 → PARP12 → ISG15 → MFN1/2 ISGylation axis is the replacement anchor for the retracted Sliter 2018 paper. ISG15 knockdown restores mitophagic flux, ΔΨm and ATP.",
    "refs": [
      "deng2024"
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
    "id": "pink1",
    "label": "PINK1",
    "full": "PTEN-induced kinase 1 — depolarisation sensor",
    "compartment": "mitochondrion",
    "klass": "kinase",
    "pathways": [
      "mitophagy",
      "mito"
    ],
    "pos": [
      66,
      -20,
      32
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Accumulates on the outer membrane only when import fails — i.e. only on depolarised mitochondria.",
    "detail": "In a healthy mitochondrion PINK1 is imported and cleaved by PARL. ΔΨm collapse stops import, so PINK1 stabilises on the surface and phosphorylates ubiquitin at Ser65, recruiting Parkin. This is the sensor that is supposed to flag exactly the mitochondria this disease creates.",
    "refs": [
      "deng2024"
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
    "id": "parkin",
    "label": "Parkin",
    "full": "Parkin RBR E3 ubiquitin ligase (PRKN)",
    "compartment": "mitochondrion",
    "klass": "enzyme",
    "pathways": [
      "mitophagy"
    ],
    "pos": [
      76,
      -20,
      36
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Amplifies the pS65-Ub signal into a dense ubiquitin coat that autophagy receptors read.",
    "samhd1": "The pathway is intact but jammed downstream: ISGylated MFN1/2 and ISGylated BECN1 both block flux, so damaged mitochondria are flagged and then never cleared.",
    "refs": [
      "deng2024",
      "xu2015becn1"
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
    "id": "tom20",
    "label": "TOM/TIM",
    "full": "Translocases of the outer and inner membranes",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito"
    ],
    "pos": [
      28,
      6,
      34
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Protein import machinery. ΔΨm-dependent: when the potential collapses, import stops and PINK1 accumulates.",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "pnc1",
    "label": "PNC1 (SLC25A33)",
    "full": "Pyrimidine nucleotide carrier 1 — inner-membrane dNTP importer",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      42,
      8,
      18
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Imports cytosolic (deoxy)nucleotides across the inner membrane into the matrix — including guanine, not only pyrimidines.",
    "detail": "PNC1 sits at the intersection of BOTH loops: it feeds the matrix dNTP pool that stalls POLG (→ ox-mtDNA → NLRP3, Loop B), and its upregulation independently drives mtDNA synthesis and VDAC1 oligomerisation via mtROS (→ cGAS, Loop A). That makes it the only node in the study upstream of both NLRP3 and VDAC1.\n\nThe name is misleading and the distinction matters here. Di Noia 2014 reconstituted both carriers in proteoliposomes: SLC25A33 antiports uracil, thymine and cytosine (deoxy)nucleoside di- and triphosphates — and BOTH carriers also transport guanine (deoxy)nucleotides, though neither transports adenine. That is what licenses this atlas to route a dGTP-SKEWED cytosolic pool through carriers named for pyrimidines. Without it the purple stream would have a chemical gap at exactly its load-bearing step.",
    "samhd1": "Cytosolic dNTP excess from dNTPase failure floods PNC1/PNC2. Arm 10 tests this with PLP (vitamin B6), which inhibits SLC25A33 transport and is clinically trivial to obtain. The bifurcating prediction is the sharpest experiment in the study: suppress Loop B only → the loops are independently gated; suppress both → PNC1-driven mtROS is the dominant driver of VDAC1 oligomerisation.",
    "drugs": [
      "plp"
    ],
    "refs": [
      "dolce2001",
      "dinoia2014",
      "kim2025",
      "doc10arm",
      "liu2026nlrp3"
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
    "id": "pnc2",
    "label": "PNC2 (SLC25A36)",
    "full": "Pyrimidine nucleotide carrier 2",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      48,
      10,
      15
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Second inner-membrane carrier; uniports and antiports cytosine/uracil nucleotides plus guanine, and shares the overload with PNC1.",
    "refs": [
      "lunetti2016",
      "dinoia2014"
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
    "id": "etc-i",
    "label": "Complex I",
    "full": "NADH:ubiquinone oxidoreductase",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      34,
      -8,
      16
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Suppressed by sustained STAT1/2 signalling; also the dominant site of reverse-electron-transport ROS.",
    "refs": [
      "mihaylova2024",
      "docSiege"
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
    "id": "etc-iii",
    "label": "Complex III",
    "full": "Cytochrome bc1 complex",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      45,
      -10,
      14
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Directly inhibited by ceramide, and suppressed by ISG-driven transcriptional programmes.",
    "detail": "The IL-1β/NF-κB axis drives ceramide synthesis, and ceramide inhibits Complex III directly while permeabilising the inner membrane and raising mPTP propensity. One cytokine, three simultaneous injuries.",
    "refs": [
      "gudz1997",
      "mihaylova2024"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "The core claim (ceramide directly inhibits Complex III) rests on gudz1997 -- isolated rat heart/muscle mitochondria + HL-60 cells, not primary human. mihaylova2024 is genuine primary human (RA patient PBMCs) but establishes a different, more general JAK-inhibitor/ATP finding, not this specific ceramide->CIII mechanism. Fixed 2026-09-12; see literature-agent audit of commit 20ae777.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "etc-iv",
    "label": "Complex IV",
    "full": "Cytochrome c oxidase",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      56,
      -10,
      14
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Terminal oxidase; its activity falls with cytochrome-c leak and with mtDNA-encoded subunit loss.",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "etc-v",
    "label": "ATP synthase",
    "full": "Complex V — F1F0 ATP synthase",
    "compartment": "mitochondrion",
    "klass": "structure",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      66,
      -8,
      16
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Uses the proton-motive force to make ATP; runs in reverse to defend ΔΨm when the ETC fails, burning ATP.",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "deltapsi",
    "label": "ΔΨm",
    "full": "Mitochondrial inner-membrane potential",
    "compartment": "mitochondrion",
    "klass": "metabolite",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      52,
      -18,
      30
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "The master state variable of the organelle: sets ATP output, protein import, PINK1 stability and mPTP threshold.",
    "samhd1": "Samhd1-KO causes measurable ΔΨm collapse and M1 macrophage skewing. Collapse here is not a downstream symptom — it re-enters the loop by stopping PINK1 import and opening mPTP.",
    "refs": [
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
    "id": "cardiolipin",
    "label": "cardiolipin",
    "full": "Cardiolipin — inner-membrane signature phospholipid",
    "compartment": "mitochondrion",
    "klass": "metabolite",
    "pathways": [
      "mito",
      "mitophagy"
    ],
    "pos": [
      40,
      -16,
      26
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Externalised cardiolipin is itself a mitophagy \"eat-me\" signal and an NLRP3-binding surface.",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "ceramide",
    "label": "ceramide",
    "full": "Ceramide — sphingolipid second messenger",
    "compartment": "er",
    "klass": "metabolite",
    "pathways": [
      "mito",
      "inflammasome"
    ],
    "pos": [
      -4,
      34,
      42
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Synthesised downstream of IL-1β/NF-κB; inhibits Complex III and permeabilises the inner membrane.",
    "refs": [
      "gudz1997"
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
    "id": "mtdna",
    "label": "mtDNA nucleoid",
    "full": "Mitochondrial DNA packaged with TFAM into nucleoids",
    "compartment": "mitochondrion",
    "klass": "ligand",
    "pathways": [
      "mito",
      "cgas-sting"
    ],
    "pos": [
      52,
      0,
      24
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "~16.6 kb circular genome at 100–1000 copies per cell. Hypomethylated, unprotected by histones, adjacent to the ROS source.",
    "detail": "mtDNA is the perfect autoantigen: bacterial in ancestry, CpG-hypomethylated, chemically damaged by its own neighbourhood, and present in high copy number. Everything the innate immune system evolved to treat as foreign.",
    "refs": [
      "west2015"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "west2015 = mouse cell lines + mouse peritoneal macrophages, not primary human. Fixed 2026-09-12; see literature-agent audit of commit 20ae777.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "polg",
    "label": "POLG",
    "full": "DNA polymerase gamma — the only mtDNA replicase",
    "compartment": "mitochondrion",
    "klass": "enzyme",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      45,
      2,
      27
    ],
    "lod": 1,
    "evidence": "I",
    "summary": "Fidelity and processivity both degrade when the matrix dNTP pool is skewed, especially by excess dGTP.",
    "detail": "POLG stalling produces mtDNA strand breaks, and the uncontrolled neosynthesis that follows yields the OXIDISED product — ox-mtDNA — which is the NLRP3 ligand. This is the purple stream.",
    "refs": [
      "elpeleg2008",
      "liu2026nlrp3",
      "docSiege"
    ],
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "db_xrefs": {
      "uniprot": "P54098",
      "ensembl": "ENSG00000140521",
      "hgnc": "HGNC:9179"
    }
  },
  {
    "id": "tfam",
    "label": "TFAM",
    "full": "Mitochondrial transcription factor A — nucleoid packaging protein",
    "compartment": "mitochondrion",
    "klass": "tf",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      59,
      2,
      22
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Compacts and protects mtDNA. TFAM insufficiency alone is enough to release mtDNA and prime cGAS.",
    "detail": "West et al. 2015 showed that mtDNA stress from TFAM depletion primes the antiviral interferon response — the foundational demonstration that the mitochondrion can start an interferon reaction with no pathogen present.",
    "refs": [
      "west2015"
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
    "id": "twnk",
    "label": "TWNK / mtSSB",
    "full": "Twinkle helicase and mitochondrial single-strand binding protein",
    "compartment": "mitochondrion",
    "klass": "enzyme",
    "pathways": [
      "mito"
    ],
    "pos": [
      63,
      5,
      27
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "The rest of the mtDNA replisome; stalls with POLG when nucleotide supply is unbalanced.",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "mito-dntp",
    "label": "matrix dNTP pool",
    "full": "Mitochondrial deoxynucleotide pool",
    "compartment": "mitochondrion",
    "klass": "metabolite",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      44,
      2,
      21
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Independently maintained from the cytosolic pool — but only as long as PNC1/PNC2 import is balanced.",
    "detail": "Upgraded S on Liu 2026: cytosolic dNTP accumulating behind a disabled SAMHD1 is transported into mitochondria through nucleotide carriers, supplying excess building blocks for mtDNA neosynthesis and bypassing the CMPK2 salvage pathway that normally rate-limits it. Demonstrated in cells from zebrafish, mice and humans, with a myeloid-conditional Samhd1 knockout, and reversed by blocking the transport step.",
    "samhd1": "The perturbation here is qualitative as well as quantitative: it is the dGTP skew, not just total concentration, that impairs POLG fidelity.",
    "refs": [
      "dolce2001",
      "dinoia2014",
      "liu2026nlrp3"
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
    "id": "mtros",
    "label": "mtROS",
    "full": "Mitochondrial reactive oxygen species",
    "compartment": "mitochondrion",
    "klass": "metabolite",
    "pathways": [
      "mito",
      "inflammasome"
    ],
    "pos": [
      50,
      -6,
      31
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "The hub metabolite: oxidises mtDNA, drives VDAC1 oligomerisation, primes NLRP3, and damages the ETC that made it.",
    "refs": [
      "docSiege",
      "kim2025",
      "swanson2019"
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
    "id": "oxmtdna",
    "label": "ox-mtDNA",
    "full": "Oxidised mitochondrial DNA — the NLRP3 ligand",
    "compartment": "cytosol",
    "klass": "ligand",
    "pathways": [
      "mito",
      "inflammasome"
    ],
    "pos": [
      46,
      -18,
      32
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Product of dNTP overload → POLG stalling → uncontrolled mtDNA neosynthesis, oxidised in situ. Activates NLRP3, NOT cGAS.",
    "detail": "This species distinction is the correction at the heart of the project's mitochondrial manuscript. ox-mtDNA is the direct NLRP3 ligand demonstrated in SAMHD1-null and obese macrophages (Loop B). It is NOT the species that drives the ISG signature — that is the unoxidised/mixed fragment pool escaping through VDAC1 (Loop A). Same organelle, different oxidation state, different sensor, different loop, different rescue point.",
    "refs": [
      "liu2026nlrp3",
      "docSiege"
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
    "id": "mtdna-frag",
    "label": "cytosolic mtDNA fragments",
    "full": "Unoxidised / mixed mtDNA fragments in the cytosol — the cGAS ligand",
    "compartment": "cytosol",
    "klass": "ligand",
    "pathways": [
      "mito",
      "cgas-sting"
    ],
    "pos": [
      40,
      6,
      40
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Escapes via the VDAC1 macropore (primary, constitutive) and mPTP (secondary). Bound by cGAS → Loop A.",
    "detail": "The proof is pharmacological and clean: VBIT-4 prevents release and abolishes the spontaneous ISG response; IMSB301 (cGAS inhibitor) normalises the ISG signature in AGS PBMCs. Both confirm the route is cGAS-dependent and VDAC1-gated rather than oxidation-dependent.",
    "refs": [
      "rabinowitz2025",
      "xu2023vdac1",
      "han2026",
      "west2015"
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
    "id": "succinate",
    "label": "succinate",
    "full": "Succinate — TCA-cycle inflammatory signal",
    "compartment": "mitochondrion",
    "klass": "metabolite",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      48,
      -12,
      32
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Accumulates in M1 macrophages, inhibits prolyl hydroxylases, stabilises HIF-1α under normoxia.",
    "refs": [
      "tannahill2013"
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
    "id": "hif1a",
    "label": "HIF-1α",
    "full": "Hypoxia-inducible factor 1-alpha",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "metabolic",
      "inflammasome"
    ],
    "pos": [
      30,
      -6,
      52
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Stabilised normoxically by succinate → aerobic glycolysis (Warburg shift) and IL-1β transcription.",
    "refs": [
      "tannahill2013"
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
    "id": "atp",
    "label": "ATP output",
    "full": "Cellular ATP production capacity",
    "compartment": "mitochondrion",
    "klass": "metabolite",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      72,
      -4,
      22
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "The bottom line of the whole mitochondrial arm — and the readout that JAK inhibition did NOT rescue.",
    "samhd1": "This node is the JAK-refractory residual. When JAK1 inhibition clears the inflammatory arm and the fatigue and metabolic dysfunction stay, what is left is bioenergetic — Loop B and the direct mitochondrial injuries, both of which run independently of JAK–STAT.",
    "refs": [
      "mihaylova2024",
      "che2025",
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
    "id": "glycolysis",
    "label": "aerobic glycolysis",
    "full": "Compensatory fermentative / aerobic glycolysis (Warburg shift)",
    "compartment": "cytosol",
    "klass": "metabolite",
    "pathways": [
      "metabolic",
      "mito"
    ],
    "pos": [
      20,
      -8,
      48
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Emergency metabolic switch when OXPHOS fails; prevents bioenergetic necrosis but fuels lactate and pyruvate overflow.",
    "detail": "Marcucci & Rumio (2026) demonstrated that compensatory fermentative glycolysis acts as an emergency survival switch when mitochondrial membrane potential collapses, preventing catastrophic necrotic lysis. However, the resulting pyruvate overflow pyruvilates STAT1 (Zuo 2026) and lactate accumulation drives H3K18 lactylation (Ziogas 2025).",
    "refs": [
      "marcucci2026",
      "tannahill2013"
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
    "id": "lactate",
    "label": "lactate",
    "full": "Cytosolic and extracellular lactic acid accumulation",
    "compartment": "cytosol",
    "klass": "metabolite",
    "pathways": [
      "metabolic",
      "clinical"
    ],
    "pos": [
      12,
      -18,
      46
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Glycolytic end-product; fuels nuclear histone lactylation and delivers a synovial entrapment signal for Th17 cells.",
    "refs": [
      "certo2025",
      "marcucci2026"
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
    "id": "h3k18la",
    "label": "H3K18la",
    "full": "Histone H3 Lys18 lactylation (H3K18la) chromatin lock",
    "compartment": "nucleus",
    "klass": "structure",
    "pathways": [
      "metabolic",
      "genome",
      "clinical"
    ],
    "pos": [
      -28,
      -6,
      -10
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Persistent epigenetic chromatin mark linking sustained innate-immune activation to multi-day post-exertional malaise (PEM).",
    "detail": "Ziogas et al. (Cell 2025) established that chronic/repeated lactate exposure drives long-term enzymatic histone lactylation (H3K18la) at active enhancer loci in monocytes, persisting for weeks and marking a durable state of ENHANCED innate-immune responsiveness (trained immunity) -- not exhaustion. Fixed 2026-09-12 (cell_context topical-fit literature audit): the node previously described this as an 'exhaustion' state, inverting what ziogas2025 actually shows. The atlas's own hypothesis -- that this same persistent, metabolically costly activation mark plausibly manifests clinically as a multi-day PEM crash once the sustained response outstrips available energy supply (Marcucci & Rumio 2026) -- is retained, but is this atlas's own extrapolation, not a claim either cited paper makes directly. certo2025 removed: it has no histone-lactylation content and was mis-cited here.",
    "refs": [
      "ziogas2025",
      "marcucci2026"
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
    "id": "becn1",
    "label": "BECN1",
    "full": "Beclin-1 — autophagy initiation scaffold",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "mitophagy",
      "isg"
    ],
    "pos": [
      6,
      -36,
      -28
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "ISGylated by ISG15, which competes with the activating K63-Ub mark and independently blocks autophagic flux.",
    "detail": "This is the second, ISG15-dependent brake — distinct from the MFN1/2 block and additive to it. The project manuscript calls the ISG15–BECN1 block the KEYSTONE stressor (S6): it is what converts transient mitochondrial damage into permanent accumulation.",
    "refs": [
      "xu2015becn1",
      "luo2012",
      "docSiege"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "OPEN 2026-09-12: xu2015becn1's abstract/MeSH don't specify its exact cell system (PMID 25906440, Autophagy 2015;11:617-28) -- downgraded conservatively rather than left at the unsupported L4_primary_human; needs a full-text check to confirm or promote. luo2012 is again the BIM-not-BIK paper (see the `bik` node above) cited here for the BECN1-sequestration mechanism -- same flag applies. See literature-agent audit of commit 20ae777.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "lc3",
    "label": "LC3-II",
    "full": "Microtubule-associated protein 1 light chain 3, lipidated form",
    "compartment": "cytosol",
    "klass": "effector",
    "pathways": [
      "mitophagy"
    ],
    "pos": [
      0,
      -30,
      -22
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Autophagosome membrane marker; LC3-II/I ratio with p62 is the standard flux readout in Arm 1.",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "p62",
    "label": "p62 / SQSTM1",
    "full": "Sequestosome-1 — ubiquitin-binding autophagy receptor",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "mitophagy"
    ],
    "pos": [
      -6,
      -38,
      -30
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Accumulates when flux is blocked — the readout that separates \"more autophagosomes\" from \"working autophagy\".",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "mtor",
    "label": "mTORC1",
    "full": "Mechanistic target of rapamycin complex 1",
    "compartment": "lysosome",
    "klass": "kinase",
    "pathways": [
      "mitophagy",
      "metabolic"
    ],
    "pos": [
      26,
      -38,
      -32
    ],
    "lod": 2,
    "evidence": "I",
    "summary": "Constitutively active under chronic inflammation; retains MITF/TFEB in the cytoplasm.",
    "refs": [
      "yaxian2025",
      "napolitano2020"
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
    "id": "mitf",
    "label": "MITF / TFEB",
    "full": "Lysosomal biogenesis transcription factors",
    "compartment": "lysosome",
    "klass": "tf",
    "pathways": [
      "mitophagy"
    ],
    "pos": [
      31,
      -46,
      -44
    ],
    "lod": 2,
    "evidence": "I",
    "summary": "Cytoplasmically retained by mTORC1 → lysosomal hydrolase genes under-transcribed.",
    "refs": [
      "yaxian2025",
      "napolitano2020"
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
    "id": "ctsd",
    "label": "Cathepsin D",
    "full": "CTSD — principal lysosomal aspartyl protease",
    "compartment": "lysosome",
    "klass": "enzyme",
    "pathways": [
      "mitophagy"
    ],
    "pos": [
      16,
      -46,
      -40
    ],
    "lod": 1,
    "evidence": "I",
    "summary": "Under-produced when MITF is retained; autolysosomes fail to degrade their cargo.",
    "samhd1": "The SAMHD1 → mTOR → MITF → CTSD axis was described in macrophage autophagy-lysosomal failure. Damaged mitochondria stay trapped upstream of a non-functional lysosome, amplifying mtROS.",
    "refs": [
      "yaxian2025"
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
    "id": "dnase2",
    "label": "DNase II",
    "full": "Deoxyribonuclease II alpha (DNASE2) — the lysosomal acid DNase",
    "compartment": "lysosome",
    "klass": "enzyme",
    "pathways": [
      "mitophagy",
      "cgas-sting",
      "retro"
    ],
    "pos": [
      10,
      -52,
      -46
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "The terminal step of DNA disposal: whatever autophagy and phagocytosis deliver, DNase II is what actually destroys it.",
    "detail": "DNase II is acid-dependent and lysosome-restricted, so it only works in a compartment that has been properly acidified and properly stocked. Human DNASE2 deficiency is a type-I interferonopathy, and in mice Dnase2 loss is embryonically lethal from interferon — rescued by deleting the interferon receptor, and by deleting cGAS or STING. Undigested DNA in a failing lysosome is sufficient, by itself, to drive the exact signature this whole framework is about.",
    "samhd1": "This is a missing EDGE between two arms the atlas already had, not a new subgraph. The mTOR→MITF→CTSD axis is already modelled as under-producing lysosomal hydrolases — and DNase II is one of them. So the same lysosomal failure that traps damaged mitochondria upstream also stops the cell degrading the mtDNA it did manage to engulf. Mitophagy failure and cGAS ligand supply turn out to be the same lesion seen from two directions.",
    "refs": [
      "kawane2006",
      "rodero2017",
      "lan2014"
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
    "id": "dnase1l3",
    "label": "DNASE1L3",
    "full": "Deoxyribonuclease 1-like 3 — the secreted chromatin nuclease",
    "compartment": "extracellular",
    "klass": "enzyme",
    "pathways": [
      "cgas-sting"
    ],
    "pos": [
      -6,
      86,
      -22
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "The only nuclease that digests chromatin inside apoptotic microparticles. Loss-of-function causes familial SLE.",
    "detail": "It handles the extracellular half of the same problem: DNA that leaves a dying cell packaged in membrane, where soluble DNase I cannot reach it. Relevant here because the framework already posits continuous sub-lethal and lytic death — pyroptosis, and now necroptosis — as ongoing sources of extracellular DNA.",
    "refs": [
      "almayouf2011",
      "sisirak2016"
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
    "id": "autolysosome",
    "label": "autolysosome",
    "full": "Autophagosome–lysosome fusion product",
    "compartment": "lysosome",
    "klass": "structure",
    "pathways": [
      "mitophagy"
    ],
    "pos": [
      8,
      -44,
      -36
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Where mitophagy should terminate. In this disease the cargo arrives and is not destroyed.",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "id": "pnc1-dntp-bypass",
    "label": "PNC1/PNC2 dNTP Bypass",
    "full": "Mitochondrial pyrimidine nucleotide carrier 1/2 (SLC25A33 / SLC25A36) import bypass",
    "compartment": "mitochondrion",
    "klass": "metabolite",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "pos": [
      46,
      12,
      24
    ],
    "lod": 1,
    "evidence": "S",
    "refs": [
      "liu2026nlrp3"
    ],
    "evidence_tier": "L4_primary_human",
    "evidenceTierNote": "Added the missing citation 2026-09-12 -- this node's own detail text already described Liu 2026's finding but never actually listed it in refs. liu2026nlrp3 includes a human-cell arm alongside zebrafish/mouse, per its own bibliography entry.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "kinetics": {
      "dGTP_Vmax_nmol_min_mg": 3.8,
      "Km_cytosolic_dGTP_uM": 12
    },
    "summary": "Cytosolic dNTP excess floods PNC1/PNC2, bypassing CMPK2 salvage and causing matrix pool asymmetry.",
    "detail": "Liu 2026 (Science 391:eadq9006) demonstrated that cytosolic dNTP accumulating behind disabled SAMHD1 is transported into mitochondria via SLC25A33/36, supplying excess substrate for aberrant mtDNA neosynthesis.",
    "samhd1": "Direct consequence of SAMHD1 dNTPase failure; the metabolic bridge between cytosolic dNTP excess and mitochondrial matrix DNA damage.",
    "db_xrefs": {
      "uniprot": "Q9BSK2",
      "ensembl": "ENSG00000117010",
      "hgnc": "HGNC:20658"
    }
  }
];

export const edges = [
  {
    "from": "pnc1",
    "to": "mito-dntp",
    "kind": "transport",
    "label": "imports cytosolic dNTPs (incl. dGTP) across the inner membrane",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "evidence": "S",
    "refs": [
      "dolce2001",
      "dinoia2014",
      "liu2026nlrp3"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "metabolic_bypass_flux",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "pnc2",
    "to": "mito-dntp",
    "kind": "transport",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "refs": [
      "lunetti2016",
      "dinoia2014"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "signal_transduction",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mito-dntp",
    "to": "polg",
    "kind": "inhibit",
    "label": "dGTP skew impairs fidelity + processivity",
    "pathways": [
      "mito"
    ],
    "evidence": "I",
    "refs": [
      "elpeleg2008"
    ],
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "polg",
    "to": "mtdna",
    "kind": "degrade",
    "label": "stalling → strand breaks",
    "pathways": [
      "mito"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "polg",
    "to": "oxmtdna",
    "kind": "produce",
    "label": "uncontrolled neosynthesis → oxidised product",
    "pathways": [
      "mito",
      "inflammasome"
    ],
    "evidence": "S",
    "loop": "B",
    "refs": [
      "liu2026nlrp3"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mtros",
    "to": "oxmtdna",
    "kind": "produce",
    "label": "oxidises nascent mtDNA in situ",
    "pathways": [
      "mito",
      "inflammasome"
    ],
    "evidence": "S",
    "loop": "B",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "pnc1",
    "to": "mtros",
    "kind": "drive",
    "label": "SLC25A33 upregulation → mtDNA synthesis → mtROS",
    "pathways": [
      "mito"
    ],
    "evidence": "I",
    "refs": [
      "kim2025"
    ],
    "evidence_tier": "L1_in_silico",
    "interaction_type": "metabolic_bypass_flux",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "vdac1",
    "to": "vdac1-oligo",
    "kind": "activate",
    "label": "oligomerisation (loss of SAMHD1 restraint + mtROS)",
    "pathways": [
      "mito",
      "cgas-sting"
    ],
    "evidence": "S",
    "loop": "A",
    "refs": [
      "xu2023vdac1"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "macropore_translocation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mtros",
    "to": "vdac1-oligo",
    "kind": "drive",
    "label": "mtROS drives oligomerisation",
    "pathways": [
      "mito"
    ],
    "evidence": "S",
    "loop": "A",
    "refs": [
      "kim2025"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mtdna",
    "to": "mtdna-frag",
    "kind": "release",
    "label": "escape through the macropore",
    "pathways": [
      "mito",
      "cgas-sting"
    ],
    "evidence": "S",
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "organellar_damage_release",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "vdac1-oligo",
    "to": "mtdna-frag",
    "kind": "release",
    "label": "primary constitutive escape route",
    "pathways": [
      "mito",
      "cgas-sting"
    ],
    "evidence": "S",
    "loop": "A",
    "refs": [
      "rabinowitz2025",
      "xu2023vdac1"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "macropore_translocation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mptp",
    "to": "mtdna-frag",
    "kind": "release",
    "label": "secondary route, downstream of ΔΨm collapse",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "loop": "A",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "organellar_damage_release",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mtdna-frag",
    "to": "cgas",
    "kind": "sense",
    "label": "cGAS binds cytosolic dsDNA → Loop A initiation",
    "pathways": [
      "mito",
      "cgas-sting"
    ],
    "evidence": "S",
    "loop": "A",
    "refs": [
      "west2015",
      "han2026"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "nucleic_acid_sensing",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "oxmtdna",
    "to": "nlrp3",
    "kind": "activate",
    "label": "direct NLRP3 ligand → Loop B initiation",
    "detail": "Cross-species: SAMHD1 deletion promoted NLRP3 hyperactivation in cells from zebrafish, mice AND humans (Liu 2026). The strongest evidence in this atlas — and it does not extend to Loop C.",
    "pathways": [
      "mito",
      "inflammasome"
    ],
    "evidence": "S",
    "loop": "B",
    "refs": [
      "liu2026nlrp3"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "vdac1-oligo",
    "to": "deltapsi",
    "kind": "inhibit",
    "label": "ΔΨm collapse",
    "pathways": [
      "mito"
    ],
    "evidence": "S",
    "refs": [
      "xu2023vdac1"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "macropore_translocation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "deltapsi",
    "to": "mptp",
    "kind": "inhibit",
    "label": "intact potential holds the pore shut — collapse is what lowers the threshold",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "deltapsi",
    "to": "atp",
    "kind": "activate",
    "label": "proton-motive force drives Complex V",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "deltapsi",
    "to": "tom20",
    "kind": "activate",
    "label": "import is ΔΨm-dependent",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "tom20",
    "to": "pink1",
    "kind": "degrade",
    "label": "healthy import → PARL cleavage of PINK1",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "etc-i",
    "to": "mtros",
    "kind": "produce",
    "label": "reverse electron transport",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "etc-i",
    "to": "deltapsi",
    "kind": "activate",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "etc-iii",
    "to": "deltapsi",
    "kind": "activate",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "etc-iii",
    "to": "mtros",
    "kind": "produce",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "etc-iv",
    "to": "deltapsi",
    "kind": "activate",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "etc-v",
    "to": "atp",
    "kind": "produce",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "ceramide",
    "to": "etc-iii",
    "kind": "inhibit",
    "label": "direct Complex III inhibition + inner-membrane permeabilisation",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "refs": [
      "gudz1997"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "ceramide",
    "to": "mptp",
    "kind": "activate",
    "label": "raises mPTP propensity",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "succinate",
    "to": "hif1a",
    "kind": "activate",
    "label": "inhibits PHD → normoxic HIF-1α stabilisation",
    "pathways": [
      "metabolic"
    ],
    "evidence": "G",
    "refs": [
      "tannahill2013"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "etc-iii",
    "to": "succinate",
    "kind": "produce",
    "label": "TCA remodelling in M1 skewing",
    "pathways": [
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "deltapsi",
    "to": "glycolysis",
    "kind": "drive",
    "label": "OXPHOS collapse forces emergency fermentative glycolysis",
    "pathways": [
      "metabolic",
      "mito"
    ],
    "evidence": "G",
    "refs": [
      "marcucci2026"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "hif1a",
    "to": "glycolysis",
    "kind": "activate",
    "label": "normoxic HIF-1α upregulates glycolytic enzymes",
    "pathways": [
      "metabolic"
    ],
    "evidence": "G",
    "refs": [
      "tannahill2013"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "glycolysis",
    "to": "atp",
    "kind": "produce",
    "label": "emergency glycolytic ATP generation",
    "pathways": [
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "glycolysis",
    "to": "lactate",
    "kind": "produce",
    "label": "LDHA reduction of pyruvate to lactate",
    "pathways": [
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "lactate",
    "to": "h3k18la",
    "kind": "drive",
    "label": "enzymatic histone lactylation at Lys18",
    "pathways": [
      "metabolic",
      "genome"
    ],
    "evidence": "G",
    "refs": [
      "ziogas2025"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "h3k18la",
    "to": "pem",
    "kind": "drive",
    "label": "epigenetic chromatin lock driving multi-day PEM crashes",
    "pathways": [
      "clinical",
      "metabolic"
    ],
    "evidence": "G",
    "refs": [
      "ziogas2025",
      "marcucci2026"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): this edge's destination (pem) is a systemic clinical outcome -- matched to that endpoint's array (same convention as inflammasome.js's aim2->psa edge) rather than the generic myeloid+cd4_tcell template. ziogas2025 (the H3K18la source) is monocyte-only with no CD4 T-cell basis.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "from": "glycolysis",
    "to": "mlkl",
    "kind": "inhibit",
    "label": "necrosis defense: glycolytic ATP prevents bioenergetic necrotic lysis",
    "pathways": [
      "celldeath",
      "metabolic"
    ],
    "evidence": "G",
    "refs": [
      "marcucci2026"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "lactate",
    "to": "psa",
    "kind": "drive",
    "label": "lactate-driven immune-cell entrapment in inflamed tissue (mechanism site unconfirmed for PsA specifically)",
    "pathways": [
      "clinical"
    ],
    "evidence": "I",
    "refs": [
      "certo2025"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): this edge's destination (psa) is a systemic clinical outcome -- matched to that endpoint's array rather than the generic myeloid+cd4_tcell template. certo2025 does show real CD4 T-cell (TH1/17/FH) biology via SLC5A12, so cd4_tcell wasn't baseless here the way it was elsewhere in this file -- but the paper's own system is salivary-gland ectopic lymphoid structures in Sjogren's disease, not synovium, and it found no effect on Il17 (the lactate-responsive population was TFH/IL-21). The original 'synovial ... Th17 priming' label traces to two papers not currently in refs.js (Haas et al. PLoS Biol 2015; Pucino et al. Cell Metab 2019) -- unverified this session, label softened and evidence downgraded S/G->I pending that citation being added properly rather than asserted via certo2025.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "from": "bik",
    "to": "baxbak",
    "kind": "activate",
    "label": "BH3-only priming",
    "pathways": [
      "mito"
    ],
    "evidence": "S",
    "refs": [
      "yang2025bik"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "baxbak",
    "to": "cytc",
    "kind": "release",
    "label": "sublethal / minority MOMP",
    "pathways": [
      "mito"
    ],
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "organellar_damage_release",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mptp",
    "to": "cytc",
    "kind": "release",
    "label": "chronic sublethal leak (TNF-α/ROS driven)",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "organellar_damage_release",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "cytc",
    "to": "etc-iv",
    "kind": "inhibit",
    "label": "losing the shuttle breaks III→IV",
    "pathways": [
      "mito",
      "metabolic"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "bik",
    "to": "becn1",
    "kind": "inhibit",
    "label": "BH3-only proteins sequester BECN1 → apoptosis bias over mitophagy",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "S",
    "refs": [
      "luo2012",
      "yang2025bik"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "luo2012 is the BIM-not-BIK paper (see the `bik` node above); yang2025bik is THP-1/U937. Fixed 2026-09-12; see literature-agent audit of commit 20ae777.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "deltapsi",
    "to": "pink1",
    "kind": "inhibit",
    "label": "intact potential imports and destroys PINK1 — collapse is what stabilises it",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "pink1",
    "to": "parkin",
    "kind": "phos",
    "label": "pSer65-Ub recruits and activates Parkin",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "kinase_phosphorylation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "parkin",
    "to": "optn",
    "kind": "activate",
    "label": "Ub coat read by OPTN/p62 receptors",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "optn",
    "to": "lc3",
    "kind": "bind",
    "label": "LIR-motif engagement of the phagophore",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "p62",
    "to": "lc3",
    "kind": "bind",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "becn1",
    "to": "lc3",
    "kind": "activate",
    "label": "PI3KC3 initiation",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "lc3",
    "to": "autolysosome",
    "kind": "translocate",
    "label": "autophagosome–lysosome fusion",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "compartment_translocation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "ctsd",
    "to": "autolysosome",
    "kind": "activate",
    "label": "hydrolytic degradation of cargo",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mtor",
    "to": "mitf",
    "kind": "inhibit",
    "label": "phosphorylation → cytoplasmic retention",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "I",
    "refs": [
      "napolitano2020"
    ],
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mitf",
    "to": "ctsd",
    "kind": "produce",
    "label": "transcribes lysosomal hydrolases",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "I",
    "refs": [
      "yaxian2025"
    ],
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mitf",
    "to": "dnase2",
    "kind": "produce",
    "label": "DNase II is a MITF/TFEB lysosomal target gene — the same failure hits it",
    "pathways": [
      "mitophagy",
      "cgas-sting"
    ],
    "evidence": "I",
    "refs": [
      "yaxian2025",
      "rodero2017"
    ],
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "autolysosome",
    "to": "dnase2",
    "kind": "activate",
    "label": "acidified compartment licenses the nuclease",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dnase2",
    "to": "mtdna-frag",
    "kind": "degrade",
    "label": "THE MISSING EDGE — destroys engulfed mtDNA before it can reach cGAS",
    "pathways": [
      "mitophagy",
      "cgas-sting"
    ],
    "evidence": "G",
    "loop": "A",
    "refs": [
      "lan2014",
      "kawane2006"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dnase2",
    "to": "l1-cdna",
    "kind": "degrade",
    "label": "lysosomal disposal of retroelement DNA",
    "pathways": [
      "retro"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dnase1l3",
    "to": "ssdna",
    "kind": "degrade",
    "label": "digests chromatin inside apoptotic microparticles",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "sisirak2016"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "drp1",
    "to": "mtros",
    "kind": "drive",
    "label": "fragmentation raises surface-to-volume → more mtROS",
    "pathways": [
      "mito"
    ],
    "evidence": "I",
    "loop": "sting-fission",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mfn",
    "to": "drp1",
    "kind": "inhibit",
    "label": "fusion opposes fission",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mfn",
    "to": "pink1",
    "kind": "bind",
    "label": "MFN2 is a Parkin substrate on the mitophagy path",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "mtdna",
    "to": "mtdsrna",
    "kind": "produce",
    "label": "bidirectional transcription → complementary duplexes",
    "pathways": [
      "rlr-mavs",
      "mito"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit literature audit): cd4_tcell was this atlas's default template token, not per-edge judgment -- no citation in this file supports CD4 T-cell involvement in this intracellular organelle mechanism. Corrected to ipsc, matching this edge's own endpoint nodes' cell_context and the file's SAMHD1 iPSC-derived-myeloid modeling platform (see analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md).",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ]
  },
  {
    "from": "dntp-pool",
    "to": "pnc1-dntp-bypass",
    "kind": "drive",
    "sign": "+",
    "interaction_type": "metabolic_bypass_flux",
    "evidence": "S",
    "refs": [
      "liu2026nlrp3"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "loop": "B",
    "label": "Cytosolic dNTP excess floods PNC1/PNC2"
  },
  {
    "from": "pnc1-dntp-bypass",
    "to": "mito-dntp",
    "kind": "transport",
    "sign": "+",
    "interaction_type": "metabolic_bypass_flux",
    "evidence": "S",
    "refs": [
      "liu2026nlrp3"
    ],
    "evidence_tier": "L4_primary_human",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "loop": "B",
    "label": "Imports excess dNTP into matrix"
  }
];

