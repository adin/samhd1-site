/**
 * inflammasome.js — Loop B. NLRP3 priming and activation, the GOLD dG-catabolism
 * feedforward, caspase-1, GSDMD/pyroptosis, and the cross-link back to Loop A.
 *
 * The defining property of this loop is that it is JAK-RESISTANT. Neither
 * upadacitinib nor amlexanox touches it, which is why 8 of 9 inflammatory
 * domains resolved on JAK inhibition while core fatigue and metabolic
 * dysfunction did not.
 */

export const nodes = [
  {
    "id": "nlrp3",
    "label": "NLRP3",
    "full": "NACHT, LRR and PYD domains-containing protein 3",
    "compartment": "cytosol",
    "klass": "sensor",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      30,
      -30,
      26
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Two-signal sensor: NF-κB primes its expression (signal 1), then ox-mtDNA, MSU crystals or K⁺ efflux trigger assembly (signal 2).",
    "detail": "NLRP3 does not bind its activators the way cGAS binds DNA — it integrates a set of cell-stress proxies (K⁺ efflux, lysosomal rupture, mtROS, ox-mtDNA, crystals) into one ATPase-driven conformational switch. That integration is why one genetic lesion can drive it from several directions at once.",
    "samhd1": "SAMHD1 is a metabolic gatekeeper of NLRP3: dNTPase loss ALONE — with no obesity and no exogenous trigger — drives cytoplasmic dNTP accumulation, mitochondrial dNTP overload, ox-mtDNA generation and NLRP3 hyperactivation. SAMHD1-deficient animals develop elevated circulating IL-1β, insulin resistance and steatohepatitis without any diet challenge.",
    "drugs": [
      "mcc950"
    ],
    "refs": [
      "liu2026nlrp3",
      "swanson2019",
      "docSiege"
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
      "ASC_nucleation_rate_s": 0.85,
      "ox_mtDNA_Kd_nM": 18
    },
    "db_xrefs": {
      "uniprot": "Q96P20",
      "ensembl": "ENSG00000162711",
      "hgnc": "HGNC:16400",
      "chembl": "CHEMBL3714856"
    }
  },
  {
    "id": "aim2",
    "label": "AIM2",
    "full": "Absent in melanoma 2 — cytosolic double-stranded DNA inflammasome sensor",
    "compartment": "cytosol",
    "klass": "sensor",
    "pathways": [
      "inflammasome",
      "cgas-sting"
    ],
    "pos": [
      34,
      -42,
      38
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "The third cytosolic DNA sensor. Binds dsDNA ≥ ~80 bp along the backbone and nucleates ASC directly — no NLRP3, no NEK7, no priming step.",
    "detail": "AIM2 matters to this atlas because of what it does NOT need. It reads DNA by length rather than sequence, exactly as cGAS does, but its output is an ASC speck rather than an interferon. So the same cytosolic mtDNA fragment pool that feeds Loop A can produce inflammasome activation without ever passing through NLRP3 or ox-mtDNA. In psoriatic lesions AIM2 is activated by cytosolic DNA in keratinocytes, which puts it directly on the confirmed skin/enthesis arm.",
    "samhd1": "IMPORTANT FOR THE STUDY DESIGN, and untested. The atlas claims ox-mtDNA→NLRP3 and fragments→cGAS run in parallel; AIM2 is the third DNA sensor a reviewer will ask about, and it changes how Arm 9 reads. MCC950 inhibits NLRP3 specifically — it does NOT touch AIM2. So residual IL-1β and residual ASC specks under MCC950 have TWO possible explanations: a caspase-1-independent maturation route (the current reading), or an AIM2 inflammasome the drug was never going to block. Those are distinguishable — AIM2 specks are NLRP3-independent and NEK7-independent — and the arm should be designed to tell them apart rather than attributing the residual to the first hypothesis.",
    "refs": [
      "hornung2009aim2",
      "fernandes2009aim2",
      "dombrowski2011"
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
    "id": "ifi16",
    "label": "IFI16",
    "full": "Interferon-gamma-inducible protein 16 — nuclear and cytosolic DNA sensor",
    "compartment": "nucleus",
    "klass": "sensor",
    "pathways": [
      "cgas-sting",
      "inflammasome"
    ],
    "pos": [
      -24,
      0,
      -4
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "The other ALR: predominantly nuclear, and required for full cGAS–STING signalling in human macrophages rather than acting instead of it.",
    "detail": "IFI16 is a cooperator, not a competitor — it promotes cGAMP production and STING activation, so knocking it down blunts DNA sensing that would otherwise be called purely cGAS-dependent. Its nuclear localisation also puts it where the genome-stability arm generates its ligands, which is the one place cGAS is normally kept away from chromatin by nucleosome autoinhibition.",
    "refs": [
      "unterholzner2010",
      "jonsson2017"
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
    "id": "nek7",
    "label": "NEK7",
    "full": "NIMA-related kinase 7 — the NLRP3 licensing partner",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      24,
      -38,
      34
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Bridges adjacent NLRP3 subunits; required for oligomerisation and mutually exclusive with mitosis.",
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
    "id": "asc",
    "label": "ASC speck",
    "full": "Apoptosis-associated speck-like protein containing a CARD (PYCARD)",
    "compartment": "cytosol",
    "klass": "complex",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      37,
      -34,
      18
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "Single micron-scale prion-like polymer per cell — the visible, countable commitment step of the loop.",
    "detail": "ASC speck formation by immunofluorescence is a primary Arm 1 readout precisely because it is binary and countable. Specks are also released intact and keep processing IL-1β extracellularly.",
    "refs": [
      "swanson2019",
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
      "uniprot": "Q9ULZ3",
      "ensembl": "ENSG00000103490",
      "hgnc": "HGNC:9360"
    }
  },
  {
    "id": "casp1",
    "label": "caspase-1",
    "full": "Caspase-1 (p20/p10 active heterotetramer)",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      43,
      -32,
      10
    ],
    "lod": 1,
    "evidence": "S",
    "summary": "Proximity-induced autoprocessing on the ASC filament; cleaves pro-IL-1β, pro-IL-18 and GSDMD.",
    "detail": "Note the compartment: caspase-1 activation is strictly cytosolic. It does not happen inside the mitochondrion, even though its trigger comes from there.",
    "refs": [
      "docSiege"
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
      "uniprot": "P29466",
      "ensembl": "ENSG00000137752",
      "hgnc": "HGNC:1499",
      "chembl": "CHEMBL234"
    }
  },
  {
    "id": "proil1b",
    "label": "pro-IL-1β",
    "full": "Inactive interleukin-1β precursor",
    "compartment": "cytosol",
    "klass": "cytokine",
    "pathways": [
      "inflammasome",
      "nfkb"
    ],
    "pos": [
      30,
      -22,
      6
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Transcribed by NF-κB (signal 1). Held inert until caspase-1 cleaves it.",
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
    "id": "il1b",
    "label": "IL-1β",
    "full": "Interleukin-1 beta — mature, secreted",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      26,
      88,
      26
    ],
    "lod": 1,
    "evidence": "S",
    "key": true,
    "summary": "The output of Loop B and the primary readout separating it from the interferon arm.",
    "samhd1": "Predicted to stay ELEVATED in Arm 2 (upadacitinib) and Arm 5 (amlexanox) despite improving cytokine panels — because the dNTP→PNC1/2→ox-mtDNA→NLRP3 cascade is upstream of both drug targets. Persistent IL-1β in those arms is the formal proof that Loop B is an independent, currently unaddressed therapeutic axis.",
    "drugs": [
      "mcc950"
    ],
    "refs": [
      "liu2026nlrp3",
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
      "uniprot": "P01584",
      "ensembl": "ENSG00000125538",
      "hgnc": "HGNC:5992",
      "chembl": "CHEMBL5546"
    }
  },
  {
    "id": "il18",
    "label": "IL-18",
    "full": "Interleukin-18",
    "compartment": "extracellular",
    "klass": "cytokine",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      38,
      86,
      20
    ],
    "lod": 2,
    "evidence": "S",
    "summary": "Co-matured with IL-1β; drives IFN-γ from NK and T cells, linking Loop B back into the interferon arm.",
    "evidence_tier": "L1_in_silico",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "db_xrefs": {
      "uniprot": "Q14116",
      "ensembl": "ENSG00000150782",
      "hgnc": "HGNC:5986",
      "chembl": "CHEMBL5749"
    }
  },
  {
    "id": "gsdmd",
    "label": "GSDMD",
    "full": "Gasdermin D",
    "compartment": "cytosol",
    "klass": "effector",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      44,
      -30,
      22
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Cleaved N-terminal fragment oligomerises into plasma-membrane pores — the IL-1β export route and the pyroptotic lesion.",
    "refs": [
      "shi2015gsdmd"
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
      "uniprot": "P57764",
      "ensembl": "ENSG00000104518",
      "hgnc": "HGNC:13308"
    }
  },
  {
    "id": "gsdmd-pore",
    "label": "GSDMD pore",
    "full": "Gasdermin-D membrane pore",
    "compartment": "membrane",
    "klass": "structure",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      44,
      58,
      30
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Unconventional secretion channel below lytic threshold; the pyroptotic lesion above it.",
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
    "id": "pyroptosis",
    "label": "pyroptosis",
    "full": "Inflammatory lytic cell death",
    "compartment": "cytosol",
    "klass": "outcome",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      54,
      -36,
      22
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Spills cytosolic contents — including mtDNA — into the extracellular space, re-arming bystander cGAS.",
    "detail": "This is the dotted cross-link between the two loops: Loop B ends by handing Loop A fresh ligand in the neighbouring cell.",
    "refs": [
      "docSiege"
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
    "id": "p2x7",
    "label": "P2X7",
    "full": "P2X purinoceptor 7 — extracellular ATP-gated K⁺ efflux channel",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      50,
      54,
      6
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "The classic signal-2 route: extracellular ATP from dying cells → K⁺ efflux → NLRP3 assembly.",
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
    "id": "urate",
    "label": "uric acid",
    "full": "Uric acid — terminal purine catabolite",
    "compartment": "cytosol",
    "klass": "metabolite",
    "pathways": [
      "inflammasome",
      "metabolic"
    ],
    "pos": [
      12,
      -28,
      50
    ],
    "lod": 2,
    "evidence": "I",
    "summary": "Excess dGTP is catabolised through the purine pathway; humans lack uricase, so urate is the endpoint.",
    "drugs": [
      "allopurinol"
    ],
    "refs": [
      "martinon2006"
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
    "id": "msu",
    "label": "MSU crystals",
    "full": "Monosodium urate crystals",
    "compartment": "cytosol",
    "klass": "ligand",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      18,
      -34,
      44
    ],
    "lod": 1,
    "evidence": "I",
    "summary": "Third NLRP3 input, independent of cGAS status; hits an NLRP3 already sensitised by NF-κB priming.",
    "detail": "The feedforward trap: one genetic lesion generates both NLRP3 ligands at once. dGTP excess yields ox-mtDNA through POLG stalling AND MSU crystals through purine catabolism — driving NLRP3 from two directions with a single mutation. Note the honest caveat: MSU crystal presence in SAMHD1-null cells has not been confirmed by peer-reviewed primary data and is carried as inferred input only.",
    "refs": [
      "martinon2006",
      "swanson2019",
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
  }
];

export const edges = [
  {
    "from": "nfkb",
    "to": "nlrp3",
    "kind": "produce",
    "label": "signal 1 — transcriptional priming",
    "pathways": [
      "inflammasome",
      "nfkb"
    ],
    "evidence": "S",
    "loop": "B",
    "refs": [
      "swanson2019"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "nfkb",
    "to": "proil1b",
    "kind": "produce",
    "label": "signal 1 — pro-IL-1β transcription",
    "pathways": [
      "inflammasome",
      "nfkb"
    ],
    "evidence": "G",
    "loop": "B",
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
    "from": "mtros",
    "to": "nfkb",
    "kind": "activate",
    "label": "mtROS primes NF-κB",
    "pathways": [
      "inflammasome",
      "mito"
    ],
    "evidence": "S",
    "loop": "B",
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
    "from": "msu",
    "to": "nlrp3",
    "kind": "activate",
    "label": "GOLD feedforward — crystal activation, cGAS-independent",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "I",
    "loop": "B",
    "refs": [
      "martinon2006"
    ],
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
    "from": "urate",
    "to": "msu",
    "kind": "produce",
    "label": "urate retention → crystal formation in cytosol",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "I",
    "loop": "B",
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
    "from": "p2x7",
    "to": "nlrp3",
    "kind": "activate",
    "label": "K⁺ efflux",
    "pathways": [
      "inflammasome"
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
    "from": "mtros",
    "to": "nlrp3",
    "kind": "activate",
    "label": "mtROS as signal 2",
    "pathways": [
      "inflammasome",
      "mito"
    ],
    "evidence": "G",
    "loop": "B",
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
    "from": "nek7",
    "to": "nlrp3",
    "kind": "bind",
    "label": "licenses oligomerisation",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "G",
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
    "from": "mtdna-frag",
    "to": "aim2",
    "kind": "sense",
    "label": "the same fragment pool that feeds cGAS also feeds AIM2",
    "pathways": [
      "inflammasome",
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "hornung2009aim2"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "nucleic_acid_sensing",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "l1-cdna",
    "to": "aim2",
    "kind": "sense",
    "label": "retroelement cDNA as inflammasome ligand",
    "pathways": [
      "inflammasome",
      "retro"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "nucleic_acid_sensing",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "micronucleus",
    "to": "aim2",
    "kind": "sense",
    "pathways": [
      "inflammasome",
      "genome"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "nucleic_acid_sensing",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "aim2",
    "to": "asc",
    "kind": "activate",
    "label": "nucleates ASC DIRECTLY — no NLRP3, no NEK7, no priming, and no MCC950 sensitivity",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "G",
    "refs": [
      "fernandes2009aim2"
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
    "from": "mtdna-frag",
    "to": "ifi16",
    "kind": "sense",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "nucleic_acid_sensing",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ssdna",
    "to": "ifi16",
    "kind": "sense",
    "label": "nuclear ligands from replication stress",
    "pathways": [
      "genome",
      "cgas-sting"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "nucleic_acid_sensing",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifi16",
    "to": "sting",
    "kind": "activate",
    "label": "promotes cGAMP production and STING activation — a cooperator, not a rival",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "loop": "A",
    "refs": [
      "jonsson2017"
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
    "from": "ifi16",
    "to": "asc",
    "kind": "activate",
    "pathways": [
      "inflammasome"
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
    "from": "isg-set",
    "to": "aim2",
    "kind": "produce",
    "label": "both ALRs are interferon-inducible",
    "pathways": [
      "isg",
      "inflammasome"
    ],
    "evidence": "G",
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
    "from": "isg-set",
    "to": "ifi16",
    "kind": "produce",
    "pathways": [
      "isg"
    ],
    "evidence": "G",
    "bend": 0.32,
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
    "from": "aim2",
    "to": "psa",
    "kind": "drive",
    "label": "cytosolic DNA activates AIM2 in psoriatic keratinocytes",
    "pathways": [
      "clinical"
    ],
    "evidence": "G",
    "refs": [
      "dombrowski2011"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): this edge's own label names psoriatic KERATINOCYTES specifically (no myeloid-vocabulary token exists for that), but its destination (psa) is a systemic clinical outcome -- matched to that endpoint's array rather than the generic myeloid template.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "from": "nlrp3",
    "to": "asc",
    "kind": "activate",
    "label": "PYD–PYD nucleation of the speck",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "S",
    "loop": "B",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ],
    "db_scores": {
      "string_combined": 0.999,
      "string_experimental": 0.995,
      "string_database": 0.9
    }
  },
  {
    "from": "asc",
    "to": "casp1",
    "kind": "activate",
    "label": "CARD–CARD → proximity-induced autoprocessing",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "S",
    "loop": "B",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ],
    "db_scores": {
      "string_combined": 0.999,
      "string_experimental": 0.995,
      "string_database": 0.9
    }
  },
  {
    "from": "casp1",
    "to": "il1b",
    "kind": "produce",
    "label": "cleaves pro-IL-1β → mature IL-1β",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "S",
    "loop": "B",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ],
    "db_scores": {
      "string_combined": 0.999,
      "string_experimental": 0.97,
      "string_database": 0.9
    }
  },
  {
    "from": "proil1b",
    "to": "il1b",
    "kind": "produce",
    "label": "maturation",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "S",
    "loop": "B",
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
    "from": "casp1",
    "to": "il18",
    "kind": "produce",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "S",
    "loop": "B",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ],
    "db_scores": {
      "string_combined": 0.999,
      "string_experimental": 0.965,
      "string_database": 0.9
    }
  },
  {
    "from": "casp1",
    "to": "gsdmd",
    "kind": "activate",
    "label": "cleaves GSDMD",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "G",
    "refs": [
      "shi2015gsdmd"
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
    "from": "gsdmd",
    "to": "gsdmd-pore",
    "kind": "translocate",
    "label": "N-terminal fragment oligomerises in the plasma membrane",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "G",
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
    "from": "gsdmd-pore",
    "to": "il1b",
    "kind": "release",
    "label": "unconventional secretion",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "G",
    "evidence_tier": "L3_cell_line",
    "interaction_type": "organellar_damage_release",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "gsdmd-pore",
    "to": "pyroptosis",
    "kind": "drive",
    "label": "above lytic threshold",
    "pathways": [
      "inflammasome"
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
    "from": "il1b",
    "to": "nfkb",
    "kind": "activate",
    "label": "IL-1R → further NF-κB priming (Loop B closure)",
    "pathways": [
      "inflammasome",
      "nfkb"
    ],
    "evidence": "G",
    "loop": "B",
    "bend": 0.45,
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
    "from": "pyroptosis",
    "to": "mtdna-frag",
    "kind": "release",
    "label": "DOTTED CROSS-LINK — pyroptotic mtDNA reactivates bystander cGAS",
    "pathways": [
      "inflammasome",
      "cgas-sting"
    ],
    "evidence": "G",
    "bend": 0.5,
    "refs": [
      "docSiege"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "organellar_damage_release",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "il1b",
    "to": "ceramide",
    "kind": "produce",
    "label": "IL-1β → ceramide synthesis → inner-membrane injury",
    "pathways": [
      "inflammasome",
      "mito"
    ],
    "evidence": "S",
    "refs": [
      "gudz1997"
    ],
    "evidence_tier": "L4_primary_human",
    "interaction_type": "catalytic_activation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  }
];

