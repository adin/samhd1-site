/**
 * curated.js — edges added from curated databases (SIGNOR, Reactome) after the project's two-family review gate.
 *
 * Source: analysis/curated_pilot/accepted_both_keep.jsonl, written by scripts/curated_apply.py.
 * Only proposals that BOTH reviewer families (Sol, DeepSeek) kept are here. Everything else is on
 * analysis/curated_pilot/LATER_CONSIDERATION.md. Signs are the reviewers' agreed reading (the SIGNOR copy
 * used had no effect column); where they disagreed the link is kind 'associate' (sign 0).
 * New nodes and their per-anchor edges come from analysis/curated_pilot/node_spec.json.
 * Regenerate with the script rather than hand-editing, so the batch stays one reviewable unit.
 */

export const nodes = [
  {
    "id": "rnf5",
    "label": "RNF5",
    "full": "E3 ubiquitin ligase RNF5 (RMA1)",
    "compartment": "er",
    "klass": "enzyme",
    "pathways": [
      "cgas-sting",
      "rlr-mavs"
    ],
    "pos": [
      -1,
      24,
      30
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "ER/mitochondria-associated E3 ligase that K48-ubiquitinates STING and MAVS for degradation, terminating both DNA- and RNA-sensing arms.",
    "refs": [
      "zhong2009",
      "zhong2010"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0336): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "msk1",
    "label": "MSK1",
    "full": "Mitogen- and stress-activated kinase 1 (RPS6KA5)",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "nfkb",
      "th17"
    ],
    "pos": [
      -14,
      -13,
      7
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Nuclear kinase downstream of p38/ERK that phosphorylates p65 (Ser276) and STAT3, raising their transcriptional output.",
    "refs": [
      "vermeulen2003"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0344): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "ptpn2",
    "label": "TC-PTP",
    "full": "T-cell protein tyrosine phosphatase (PTPN2)",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "ifn-jak",
      "th17"
    ],
    "pos": [
      -28,
      53,
      22
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Tyrosine phosphatase that dephosphorylates JAK1, STAT1 and STAT3; a signal-termination brake on the interferon and IL-6/IL-23 arms.",
    "refs": [
      "simoncic2002",
      "bourdeau2005",
      "tenhoeve2002"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0347): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "il1rn",
    "label": "IL-1Ra",
    "full": "Interleukin-1 receptor antagonist (IL1RN)",
    "compartment": "extracellular",
    "klass": "ligand",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      25,
      90,
      6
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Secreted antagonist that occupies IL-1R1 without signalling; the physiological brake on the IL-1 arm of Loop B.",
    "refs": [
      "hannum1990",
      "eisenberg1990"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0380): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "il1r2",
    "label": "IL-1R2",
    "full": "Interleukin-1 receptor type 2 (decoy)",
    "compartment": "membrane",
    "klass": "receptor",
    "pathways": [
      "inflammasome"
    ],
    "pos": [
      15,
      56,
      14
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Decoy receptor that binds IL-1β without signalling, sequestering it from IL-1R1.",
    "refs": [
      "colotta1993"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0388): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "cxcr3",
    "label": "CXCR3",
    "full": "C-X-C chemokine receptor 3",
    "compartment": "responder",
    "klass": "receptor",
    "pathways": [
      "ifn-gamma",
      "isg"
    ],
    "pos": [
      -106,
      105,
      31
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Receptor for CXCL9/10/11 on Th1, CD8 and NK cells; recruits the IFN-γ-producing responders, closing the chemokine arm of Loop C.",
    "refs": [
      "smit2003"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0394): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "trim21",
    "label": "TRIM21",
    "full": "E3 ubiquitin ligase TRIM21 (Ro52)",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "cgas-sting",
      "tlr"
    ],
    "pos": [
      -20,
      -30,
      -18
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "E3 ligase that ubiquitinates IRF7 for degradation and ubiquitinates p62 to limit its oligomerisation; a second brake on IRF7 alongside SAMHD1.",
    "refs": [
      "higgs2010",
      "pan2016"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0396): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "tax1bp1",
    "label": "TAX1BP1",
    "full": "Tax1-binding protein 1",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "nfkb",
      "mitophagy"
    ],
    "pos": [
      -8,
      -12,
      35
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Ubiquitin-binding adaptor that recruits A20 to TRAF3/TRAF6 to end NF-κB and IRF3 signalling, and an autophagy receptor; its net sign depends on context.",
    "refs": [
      "devalck1999",
      "shembade2011",
      "gao2011"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0303): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "gr",
    "label": "GR",
    "full": "Glucocorticoid receptor (NR3C1)",
    "compartment": "cytosol",
    "klass": "tf",
    "pathways": [
      "nfkb"
    ],
    "pos": [
      -34,
      -24,
      4
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Ligand-activated nuclear receptor that transrepresses NF-κB and induces IκBα; the cortisol axis input to the inflammatory network.",
    "refs": [
      "scheinman1995",
      "cato1996",
      "lowenberg2006"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0307): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "mst1",
    "label": "MST1",
    "full": "Serine/threonine kinase 4 (STK4)",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "mitophagy",
      "cgas-sting"
    ],
    "pos": [
      12,
      -31,
      -33
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Hippo-pathway kinase that phosphorylates Beclin-1, IRF3 and LAT; effects differ by substrate.",
    "refs": [
      "maejima2013"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0323): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "rnf26",
    "label": "RNF26",
    "full": "E3 ubiquitin ligase RNF26",
    "compartment": "er",
    "klass": "enzyme",
    "pathways": [
      "cgas-sting",
      "mitophagy"
    ],
    "pos": [
      9,
      24,
      42
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "ER E3 ligase that puts K11 chains on STING (protecting it early) and organises perinuclear endosomes via p62; temporally opposite effects.",
    "refs": [
      "qin2014",
      "jongsma2016"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0334): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "mul1",
    "label": "MUL1",
    "full": "Mitochondrial E3 ubiquitin protein ligase 1",
    "compartment": "mitochondrion",
    "klass": "enzyme",
    "pathways": [
      "mito",
      "cgas-sting"
    ],
    "pos": [
      45,
      -24,
      24
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Outer-membrane E3/SUMO ligase that SUMOylates DRP1 and ubiquitinates STING.",
    "refs": [
      "ni2017"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0335): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "marchf5",
    "label": "MARCH5",
    "full": "E3 ubiquitin ligase MARCHF5 (MITOL)",
    "compartment": "mitochondrion",
    "klass": "enzyme",
    "pathways": [
      "mito",
      "mitophagy"
    ],
    "pos": [
      59,
      -13,
      31
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Outer-membrane E3 ligase acting on mitofusins, DRP1 and Parkin; tunes fission-fusion and mitophagy depending on stress.",
    "refs": [
      "yonashiro2006",
      "shiiba2021"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0339): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "abin1",
    "label": "ABIN-1",
    "full": "TNFAIP3-interacting protein 1 (TNIP1)",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "nfkb",
      "cgas-sting"
    ],
    "pos": [
      15,
      28,
      36
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Ubiquitin-binding A20 partner that restrains NF-κB and IRF3 signalling; TBK1 phosphorylates it.",
    "refs": [
      "zhou2022",
      "gao2011"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0351): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "trim23",
    "label": "TRIM23",
    "full": "E3 ubiquitin ligase TRIM23 (ARD1)",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "cgas-sting",
      "nfkb"
    ],
    "pos": [
      17,
      20,
      28
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "K27-linked ubiquitin ligase acting on NEMO/TRAF6 and TBK1, needed for TBK1 activation in antiviral autophagy.",
    "refs": [
      "sparrer2017"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0356): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "pin1",
    "label": "PIN1",
    "full": "Peptidyl-prolyl cis-trans isomerase NIMA-interacting 1",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "cgas-sting"
    ],
    "pos": [
      -7,
      10,
      0
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Prolyl isomerase that binds phosphorylated IRF3; reported both to promote IRF3 turnover and to support its activity.",
    "refs": [
      "saitoh2006"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0362): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "trim65",
    "label": "TRIM65",
    "full": "E3 ubiquitin ligase TRIM65",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "rlr-mavs",
      "inflammasome"
    ],
    "pos": [
      25,
      -19,
      36
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "E3 ligase that K63-ubiquitinates MDA5 (activating) and ubiquitinates NLRP3 (restraining); one regulator touching Loop A-adjacent RNA sensing and Loop B.",
    "refs": [
      "lang2016",
      "tang2021"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0368): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "pias1",
    "label": "PIAS1",
    "full": "E3 SUMO-protein ligase PIAS1",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "ifn-jak"
    ],
    "pos": [
      -44,
      30,
      26
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "SUMO ligase that blocks STAT1 DNA binding; IKKα phosphorylation switches it on.",
    "refs": [
      "duong2004",
      "liu2007"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0376): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "calcineurin",
    "label": "Calcineurin",
    "full": "Calcineurin catalytic subunit A-α (PPP3CA)",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "mito",
      "nfkb"
    ],
    "pos": [
      5,
      -6,
      6
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Ca²⁺-activated phosphatase that dephosphorylates DRP1 (Ser637) to drive fission, and shapes IL-6 transcription.",
    "refs": [
      "cereghetti2008"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0391): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  },
  {
    "id": "ddx3x",
    "label": "DDX3X",
    "full": "ATP-dependent RNA helicase DDX3X",
    "compartment": "cytosol",
    "klass": "adaptor",
    "pathways": [
      "cgas-sting",
      "rlr-mavs"
    ],
    "pos": [
      7,
      20,
      16
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "Helicase that scaffolds TBK1/IKKε and is itself a TBK1 substrate; supports IFN-β induction.",
    "refs": [
      "soulat2008"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0400): added after two-family review (Sol, DeepSeek both kept it). Tier from the cited papers' MeSH; a floor.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the lineages of the existing nodes it regulates."
  }
];

export const edges = [
  {
    "from": "jak1",
    "to": "stat3",
    "kind": "phos",
    "label": "JAK1 → STAT3",
    "pathways": [
      "ifn-jak",
      "th17"
    ],
    "evidence": "G",
    "refs": [
      "hemmann1996",
      "lai1996"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0076): reactome,signor row(s), mechanism 'phosphorylation,physical association', PMID 8662795, 8662928. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: JAK1 → STAT3. Reviewer notes: Sol: JAK1-dependent activating STAT3 phosphorylation is established in appropriate cytokine-receptor contexts. DeepSeek: JAK1→STAT3 is canonical (IL-6 family, gp130). Add. |",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "jak2",
    "to": "stat3",
    "kind": "phos",
    "label": "JAK2 → STAT3",
    "pathways": [
      "ifn-jak",
      "th17"
    ],
    "evidence": "G",
    "refs": [
      "hemmann1996",
      "bjrbaek1997"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0077): reactome,signor row(s), mechanism 'phosphorylation,physical association', PMID 8662795, 9405487. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: JAK2 → STAT3. Reviewer notes: Sol: JAK2-dependent activating STAT3 phosphorylation is established but must remain receptor- and cell-context constrained. DeepSeek: JAK2→STAT3 is canonical (G-CSF, IL-6 family). Add. |",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "tyk2",
    "to": "stat3",
    "kind": "phos",
    "label": "TYK2 → STAT3",
    "pathways": [
      "ifn-jak",
      "th17"
    ],
    "evidence": "G",
    "refs": [
      "lai1996",
      "rani1999"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0080): reactome,signor row(s), mechanism 'phosphorylation,physical association', PMID 8662928, 10542297. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TYK2 → STAT3. Reviewer notes: Sol: TYK2 contributes to STAT3 activation in defined cytokine pathways, but direct phosphorylation must be supported separately from receptor-complex dependence. DeepSeek: TYK2→STAT3 is documented (IL-12/IL-23 arm). Add. |",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ifnlr",
    "to": "tyk2",
    "kind": "activate",
    "label": "IL10RB → TYK2",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "finbloom1995",
      "riley1999"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0081): reactome,signor row(s), mechanism 'physical association', PMID 7543512, 10347215. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "protein_protein_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IL10RB → TYK2 (the atlas nodes are IFNLR1/IL10RB → TYK2). Reviewer notes: Sol: IL10RB-associated TYK2 participates in IFN-λ receptor signaling, provided the edge is restricted to the assembled IFN-λ receptor rather than every IL10RB-containing complex. DeepSeek: IFNLR1/IL-10RB recruits TYK2; canonical. Add. |",
    "cell_context": [],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "jak2",
    "to": "stat4",
    "kind": "phos",
    "label": "JAK2 → STAT4",
    "pathways": [
      "ifn-jak",
      "ifn-gamma"
    ],
    "evidence": "G",
    "refs": [
      "naeger1999",
      "yao1999"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0083): reactome,signor row(s), mechanism 'phosphorylation,physical association', PMID 9890938, 10415122. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: JAK2 → STAT4. Reviewer notes: Sol: IL-12R-associated JAK2 contributes to activating STAT4 phosphorylation and fills a kinase-level gap hidden by the current receptor shortcut. DeepSeek: JAK2→STAT4 is the IL-12 arm; canonical. Add. |",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "tyk2",
    "to": "stat1",
    "kind": "phos",
    "label": "TYK2 → STAT1",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "quelle1995",
      "mowen2000"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0084): reactome,signor row(s), mechanism 'phosphorylation,physical association', PMID 7657660, 10982844. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TYK2 → STAT1. Reviewer notes: Sol: TYK2 contributes to STAT1 activation in appropriate cytokine-receptor complexes, without establishing exclusive substrate assignment. DeepSeek: TYK2→STAT1 is secondary to JAK1 but documented; add with a note that JAK1 is the dominant STAT1 kinase. |",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "tyk2",
    "to": "stat4",
    "kind": "phos",
    "label": "TYK2 → STAT4",
    "pathways": [
      "ifn-jak",
      "ifn-gamma"
    ],
    "evidence": "G",
    "refs": [
      "naeger1999",
      "yao1999"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0086): reactome,signor row(s), mechanism 'phosphorylation,physical association', PMID 9890938, 10415122. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TYK2 → STAT4. Reviewer notes: Sol: IL-12R-associated TYK2 contributes to activating STAT4 phosphorylation and complements the JAK2 branch. DeepSeek: TYK2→STAT4 is the IL-12 arm; canonical. Add. |",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "jak1",
    "to": "stat2",
    "kind": "phos",
    "label": "JAK1 → STAT2",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "bluyssen1997",
      "mowen2000"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0087): reactome,signor row(s), mechanism 'phosphorylation,physical association', PMID 9020188, 10982844. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: JAK1 → STAT2. Reviewer notes: Sol: JAK1 contributes to IFN-induced STAT2 phosphorylation, with direct catalysis distinguished from dependence on the intact receptor kinase pair. DeepSeek: JAK1→STAT2 Y690 is the missing ISGF3-assembly edge; canonical. Add — high value. |",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "tak1",
    "to": "ikka",
    "kind": "activate",
    "label": "MAP3K7 → CHUK",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "arch1998",
      "wang2001"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0092): reactome row(s), mechanism 'enzymatic reaction,physical association', PMID 9744859, 11460167. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "protein_protein_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: MAP3K7 → CHUK (the atlas nodes are TAK1 / TAB1-3 → IKKα). Reviewer notes: Sol: TAK1 can activate IKKα within canonical IKK signaling, but this must not automatically activate the distinct NIK-dependent noncanonical pathway. DeepSeek: TAK1 phosphorylates both IKKα and IKKβ; canonical. Add. |",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "socs",
    "to": "jak2",
    "kind": "inhibit",
    "label": "SOCS1 → JAK2",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "sasaki1999",
      "schmitz2000"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0093): reactome,signor row(s), mechanism 'physical association,ubiquitination', PMID 10421843, 10777583. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "ubiquitination_inhibition",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: SOCS1 → JAK2 (the atlas nodes are SOCS1/3 → JAK2). Reviewer notes: Sol: SOCS1 inhibits JAK2 through kinase inhibition and associated turnover mechanisms, with SOCS1 distinguished from SOCS3. DeepSeek: SOCS1 binds JAK2 and inhibits it (KIR + SOCS-box ubiquitination). The proposal's \"sign unknown\" is wrong — the sign is **negative**. Add with sign −. |",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "trif",
    "to": "ripk1",
    "kind": "associate",
    "label": "TICAM1 → RIPK1",
    "pathways": [
      "tlr",
      "celldeath"
    ],
    "evidence": "G",
    "refs": [
      "cussonhermance2005"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0096): reactome,signor row(s), mechanism 'physical association', PMID 16115877. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "physical_association",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, they did not agree on a sign (Sol 'context-dependent', DeepSeek '+'), so it is an unsigned association link (review ruling 2026-11-11). Gene-level row: TICAM1 → RIPK1 (the atlas nodes are TRIF → RIPK1). Reviewer notes: Sol: TRIF recruits RIPK1 through RHIM-dependent machinery, with NF-κB and death outputs determined by complex state. DeepSeek: TRIF RHIM→RIPK1; canonical. Add. |",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ripk1",
    "to": "tak1",
    "kind": "activate",
    "label": "RIPK1 → TAB2",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "kanayama2004",
      "ea2006"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0097): signor row(s), mechanism 'physical association', PMID 15327770, 16603398. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "protein_protein_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: RIPK1 → TAB2 (the atlas nodes are RIPK1 → TAK1 / TAB1-3). Reviewer notes: Sol: Ubiquitinated RIPK1 scaffolds recruit TAB2/3–TAK1 signaling machinery, but TAB2 association must not be mislabeled direct RIPK1 phosphorylation of TAK1. DeepSeek: RIPK1 K63-Ub→TAB2/3→TAK1; canonical. Add. |",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ripk1",
    "to": "nemo",
    "kind": "activate",
    "label": "RIPK1 → IKBKG",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "chaudhary2000",
      "cussonhermance2005"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0098): reactome,signor row(s), mechanism 'physical association', PMID 11002417, 16115877. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "protein_protein_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: RIPK1 → IKBKG (the atlas nodes are RIPK1 → NEMO). Reviewer notes: Sol: Ubiquitinated RIPK1 supports NEMO/IKK recruitment in survival signaling, whereas RIPK1 kinase activity is not synonymous with this scaffold function. DeepSeek: RIPK1 K63-Ub→NEMO; canonical. Add. |",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "traf6",
    "to": "irf7",
    "kind": "ubiq",
    "label": "TRAF6 → IRF7",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "refs": [
      "kawai2004",
      "uematsu2005"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0105): reactome,signor row(s), mechanism 'physical association,ubiquitination', PMID 15361868, 15767370. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "ubiquitination",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TRAF6 → IRF7. Reviewer notes: Sol: TRAF6-dependent ubiquitin signaling supports IRF7 activation in appropriate innate receptor complexes, without substituting for activating phosphorylation. DeepSeek: TRAF6 K63-ubiquitinates IRF7 downstream of TLR7/9; well-documented in pDC biology, PMIDs on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "lck",
    "to": "cd28",
    "kind": "phos",
    "label": "LCK → CD28",
    "pathways": [
      "tcr"
    ],
    "evidence": "G",
    "refs": [
      "king1997",
      "sadra1999"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0106): reactome,signor row(s), mechanism 'phosphorylation,physical association', PMID 8992971, 9973466. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: LCK → CD28 (the atlas nodes are Lck → CD28). Reviewer notes: Sol: Lck can phosphorylate CD28 cytoplasmic signaling motifs, although productive signaling requires receptor engagement and appropriate cellular context. DeepSeek: Lck phosphorylates the CD28 cytoplasmic tail at Y191 to recruit PI3K; PMIDs 8992971/9973466 are the reference papers.",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "a20",
    "to": "traf6",
    "kind": "inhibit",
    "label": "TNFAIP3 → TRAF6",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "boone2004",
      "lin2007"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0108): reactome,signor row(s), mechanism 'deubiquitination,physical association', PMID 15334086, 18164316. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "deubiquitination",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TNFAIP3 → TRAF6 (the atlas nodes are A20 / TNFAIP3 → TRAF6). Reviewer notes: Sol: A20 restrains TRAF6-dependent signaling through ubiquitin-system regulation, although direct substrate deubiquitination is not its only mechanism. DeepSeek: A20 deubiquitinates K63 chains on TRAF6, terminating TLR/IL-1R signaling; PMIDs on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "il23r",
    "to": "jak2",
    "kind": "activate",
    "label": "IL23R → JAK2",
    "pathways": [
      "th17",
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "parham2002",
      "floss2016"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0111): reactome,signor row(s), mechanism 'physical association', PMID 12023369, 27193299. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "protein_protein_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IL23R → JAK2 (the atlas nodes are IL-23R / IL-12Rβ1 → JAK2). Reviewer notes: Sol: Ligated IL-23 receptor complexes activate associated JAK2, but physical association alone is not evidence of kinase activation. DeepSeek: IL-23R–JAK2 physical association is documented; PMIDs 12023369/27193299 on-target.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "il23r",
    "to": "tyk2",
    "kind": "activate",
    "label": "IL23R → TYK2",
    "pathways": [
      "th17",
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "parham2002",
      "floss2016"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0112): reactome,signor row(s), mechanism 'physical association', PMID 12023369, 27193299. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "protein_protein_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IL23R → TYK2 (the atlas nodes are IL-23R / IL-12Rβ1 → TYK2). Reviewer notes: Sol: The complete IL-23 receptor activates TYK2 through its IL12RB1 chain, not through direct attribution to IL23R alone. DeepSeek: IL-23R–TYK2 physical association is documented; same PMIDs as CP-0111.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ikk",
    "to": "cyld",
    "kind": "inhibit",
    "label": "IKBKB → CYLD",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "reiley2005",
      "thein2014"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0114): reactome,signor row(s), mechanism 'enzymatic reaction,phosphorylation', PMID 15870263, 24614225. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "inhibitory_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IKBKB → CYLD (the atlas nodes are IKKβ → CYLD). Reviewer notes: Sol: IKK-dependent phosphorylation can inhibit CYLD deubiquitinase function, so a universally positive phosphorylation edge would invert the effect. DeepSeek: IKKβ phosphorylates CYLD to inactivate its deubiquitinase activity; PMID 15870263 supports the direction.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "shp1",
    "to": "jak2",
    "kind": "inhibit",
    "label": "PTPN6 → JAK2",
    "pathways": [
      "tcr",
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "jiao1996",
      "bone1997"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0115): reactome,signor row(s), mechanism 'dephosphorylation,physical association', PMID 8943354, 9162089. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "dephosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: PTPN6 → JAK2 (the atlas nodes are SHP-1 (PTPN6) → JAK2). Reviewer notes: Sol: SHP-1 negatively regulates JAK2 through dephosphorylation in established cytokine-receptor systems. DeepSeek: SHP-1 dephosphorylates JAK2; PMIDs 8943354/9162089 are on-target.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ikka",
    "to": "ikba",
    "kind": "inhibit",
    "label": "CHUK → NFKBIA",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "li1997",
      "zandi1997"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0117): reactome,signor row(s), mechanism 'enzymatic reaction,phosphorylation', PMID 9315679, 9346241. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "inhibitory_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: CHUK → NFKBIA (the atlas nodes are IKKα → IκBα). Reviewer notes: Sol: IKKα phosphorylation can target IκBα for degradation, decreasing inhibitor abundance rather than positively activating the inhibitor. DeepSeek: IKKα can phosphorylate IκBα at S32/36, licensing its K48-ubiquitination and degradation; PMIDs 9315679/9346241 on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ifng",
    "to": "socs",
    "kind": "activate",
    "label": "IFNG → SOCS1",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "sasaki1999",
      "letourneur2009"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0119): reactome,signor row(s), mechanism 'functional association,physical association', PMID 10421843, 19482358. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IFNG → SOCS1 (the atlas nodes are IFN-γ → SOCS1/3). Reviewer notes: Sol: IFN-γ induces SOCS1 through downstream transcriptional signaling rather than direct cytokine–SOCS1 physical association. DeepSeek: IFN-γ induces SOCS1 via GAS; PMIDs 10421843/19482358 are on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "shp1",
    "to": "lck",
    "kind": "associate",
    "label": "PTPN6 → LCK",
    "pathways": [
      "tcr"
    ],
    "evidence": "G",
    "refs": [
      "chiang2001"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0120): reactome,signor row(s), mechanism 'dephosphorylation,physical association', PMID 11294838. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "dephosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, they did not agree on a sign (Sol 'context-dependent', DeepSeek '-'), so it is an unsigned association link (review ruling 2026-11-11). Gene-level row: PTPN6 → LCK (the atlas nodes are SHP-1 (PTPN6) → Lck). Reviewer notes: Sol: SHP-1 effects on Lck depend on the phosphosite and signaling setting, preventing an unconditional inhibitory sign from dephosphorylation alone. DeepSeek: SHP-1 dephosphorylates Lck at Y394/Y505; PMIDs 11294838/18759926 on-target for T-cell context.",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "mtor",
    "to": "stat3",
    "kind": "associate",
    "label": "MTOR → STAT3",
    "pathways": [
      "mitophagy",
      "th17"
    ],
    "evidence": "G",
    "refs": [],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0127): signor row(s), mechanism 'phosphorylation', PMID . Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, they did not agree on a sign (Sol 'context-dependent', DeepSeek '+'), so it is an unsigned association link (review ruling 2026-11-11). Gene-level row: MTOR → STAT3 (the atlas nodes are mTORC1 → STAT3). Reviewer notes: Sol: mTOR can regulate STAT3 Ser727 phosphorylation, which is distinct from receptor-driven Tyr705 activation and depends on mTOR complex identity. DeepSeek: mTOR phosphorylates STAT3 at S727, boosting its transcriptional activity; PMID 16740698 supports the direction.",
    "cell_context": [],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "stat3",
    "to": "socs",
    "kind": "activate",
    "label": "STAT3 → SOCS3",
    "pathways": [
      "th17",
      "isg"
    ],
    "evidence": "G",
    "refs": [
      "brender2001",
      "he2003"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0128): signor row(s), mechanism 'functional association', PMID 11159537, 12565872. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: STAT3 → SOCS3 (the atlas nodes are STAT3 → SOCS1/3). Reviewer notes: Sol: STAT3 induces SOCS3 transcription as an established cytokine-signaling negative-feedback mechanism. DeepSeek: STAT3 directly transactivates SOCS3; PMID 11159537 is on-target.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "socs",
    "to": "stat3",
    "kind": "inhibit",
    "label": "SOCS3 → STAT3",
    "pathways": [
      "isg",
      "th17"
    ],
    "evidence": "G",
    "refs": [
      "whyte2011",
      "carow2014"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0129): signor row(s), mechanism 'functional association', PMID 21628332, 24600449. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "protein_protein_suppression",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: SOCS3 → STAT3 (the atlas nodes are SOCS1/3 → STAT3). Reviewer notes: Sol: SOCS3 attenuates selected receptor–JAK–STAT3 pathways rather than directly inhibiting STAT3 in every signaling context. DeepSeek: SOCS3 inhibits STAT3 via the receptor–JAK complex; PMID 21628332 is on-target.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "stat1",
    "to": "tbet",
    "kind": "activate",
    "label": "STAT1 → TBX21",
    "pathways": [
      "ifn-jak",
      "ifn-gamma"
    ],
    "evidence": "G",
    "refs": [
      "mendoza2005"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0131): signor row(s), mechanism 'functional association', PMID 16386358. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: STAT1 → TBX21 (the atlas nodes are STAT1 → T-bet (TBX21)). Reviewer notes: Sol: IFN-γ–STAT1 signaling promotes T-bet expression in responder lymphocytes, requiring responder-local STAT1 rather than the macrophage pool. DeepSeek: STAT1 induces TBX21 (T-bet) via GAS elements; this is a genuine Loop C gap-fill not currently on the `ifn-gamma` layer.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "stat1",
    "to": "tlr3",
    "kind": "activate",
    "label": "STAT1 → TLR3",
    "pathways": [
      "ifn-jak",
      "tlr"
    ],
    "evidence": "G",
    "refs": [
      "dai2006"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0133): signor row(s), mechanism 'functional association', PMID 16628196. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: STAT1 → TLR3. Reviewer notes: Sol: Interferon–STAT1-dependent transcription can increase TLR3 expression, although promoter regulation can involve additional transcription factors. DeepSeek: STAT1 drives TLR3 expression via ISRE components in the TLR3 promoter; PMID 16628196 supports the direction but as a transcriptional effect, not an enzymatic one.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ikke",
    "to": "stat1",
    "kind": "phos",
    "label": "IKBKE → STAT1",
    "pathways": [
      "metabolic"
    ],
    "evidence": "G",
    "refs": [
      "schindler2007"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0134): signor row(s), mechanism 'phosphorylation', PMID 17502367. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IKBKE → STAT1 (the atlas nodes are IKKε → STAT1). Reviewer notes: Sol: IKKε phosphorylation of STAT1 Ser708 supports selected interferon responses and must not be conflated with JAK-mediated Tyr701 phosphorylation. DeepSeek: IKKε phosphorylates STAT1 at S708; PMID 17502367 is the reference paper.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "parkin",
    "to": "mfn",
    "kind": "inhibit",
    "label": "PRKN → MFN2",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "refs": [
      "gegg2010"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0136): signor row(s), mechanism 'ubiquitination', PMID 20871098. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "ubiquitination_inhibition",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: PRKN → MFN2 (the atlas nodes are Parkin → MFN1/2). Reviewer notes: Sol: Activated Parkin ubiquitinates MFN2 and can promote its removal or degradation during mitochondrial quality control. DeepSeek: Parkin ubiquitinates MFN2 at K416 under mitophagic stress; PMID 20871098 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "a20",
    "to": "ripk1",
    "kind": "associate",
    "label": "TNFAIP3 → RIPK1",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0137): signor row(s), mechanism 'ubiquitination', PMID . Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "ubiquitination",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, they did not agree on a sign (Sol 'context-dependent', DeepSeek '-'), so it is an unsigned association link (review ruling 2026-11-11). Gene-level row: TNFAIP3 → RIPK1 (the atlas nodes are A20 / TNFAIP3 → RIPK1). Reviewer notes: Sol: A20 edits RIPK1-associated ubiquitin signaling, with different consequences for NF-κB signaling and cell-death competence. DeepSeek: A20 K48-ubiquitinates RIPK1 downstream of TNFR1; PMID 15258597 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "trail-fl",
    "to": "nfkb",
    "kind": "activate",
    "label": "TNFSF10 → NFKB1",
    "pathways": [
      "tcr",
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "wang2013"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0138): signor row(s), mechanism 'functional association', PMID 23647548. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TNFSF10 → NFKB1 (the atlas nodes are TRAIL (full length) → NF-κB p65/p50). Reviewer notes: Sol: Full-length TRAIL can activate NF-κB through death receptors in permissive contexts, unlike a universal response or TRAILshort mechanism. DeepSeek: Full-length TRAIL activates NF-κB (the atlas's own correction note already records this contrast with TRAILshort); PMID 23647548 supports the direction.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "irf1",
    "to": "socs",
    "kind": "activate",
    "label": "IRF1 → SOCS1",
    "pathways": [
      "isg"
    ],
    "evidence": "G",
    "refs": [
      "letourneur2009"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0141): signor row(s), mechanism 'functional association', PMID 19482358. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IRF1 → SOCS1 (the atlas nodes are IRF1 → SOCS1/3). Reviewer notes: Sol: IRF1 can promote SOCS1 transcription, providing a potential interferon-induced feedback branch. DeepSeek: IRF1 transactivates SOCS1 as part of the IFN-γ negative-feedback arm; PMID 19482358 supports it.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "mitf",
    "to": "becn1",
    "kind": "activate",
    "label": "TFEB → BECN1",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "refs": [
      "li2017"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0145): signor row(s), mechanism 'functional association', PMID 28552616. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TFEB → BECN1 (the atlas nodes are MITF / TFEB → BECN1). Reviewer notes: Sol: TFEB promotes autophagy-gene transcription including BECN1, but this is TFEB-specific evidence rather than interchangeable evidence for MITF. DeepSeek: TFEB directly transactivates BECN1 as part of the CLEAR network; PMID 28552616 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "myd88",
    "to": "traf3",
    "kind": "associate",
    "label": "MYD88 → TRAF3",
    "pathways": [
      "tlr"
    ],
    "evidence": "G",
    "refs": [],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0149): signor row(s), mechanism 'physical association', PMID . Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "physical_association",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, they did not agree on a sign (Sol 'context-dependent', DeepSeek '+'), so it is an unsigned association link (review ruling 2026-11-11). Gene-level row: MYD88 → TRAF3 (the atlas nodes are MyD88 → TRAF3). Reviewer notes: Sol: TRAF3 can participate in MyD88-associated signaling complexes, but recruitment does not carry a universal activating sign. DeepSeek: MyD88–TRAF3 physical association upstream of IRF7 in pDCs; PMID 16306937 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "cyld",
    "to": "tak1",
    "kind": "inhibit",
    "label": "CYLD → MAP3K7",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "ji2018"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0156): signor row(s), mechanism 'deubiquitination', PMID 29291351. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "deubiquitination",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: CYLD → MAP3K7 (the atlas nodes are CYLD → TAK1 / TAB1-3). Reviewer notes: Sol: CYLD can restrain TAK1-pathway activation by removing signaling-associated ubiquitin chains, with substrate specificity requiring citation confirmation. DeepSeek: CYLD deubiquitinates TAK1 K63 chains, terminating signaling; PMID 29291351 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "tnfa",
    "to": "il6",
    "kind": "activate",
    "label": "TNF → IL6",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "coperchini2020"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0157): signor row(s), mechanism 'functional association', PMID 32446778. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TNF → IL6 (the atlas nodes are TNF-α → IL-6). Reviewer notes: Sol: TNF induces IL6 transcription through receptor-driven inflammatory signaling, making this an indirect regulatory edge. DeepSeek: TNF-α transcriptionally induces IL-6 through NF-κB; PMID 32446778 supports the functional association.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "tbk1",
    "to": "ripk1",
    "kind": "inhibit",
    "label": "TBK1 → RIPK1",
    "pathways": [
      "cgas-sting",
      "celldeath"
    ],
    "evidence": "G",
    "refs": [
      "xu2018"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0159): signor row(s), mechanism 'phosphorylation', PMID 30146158. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "inhibitory_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TBK1 → RIPK1. Reviewer notes: Sol: TBK1 phosphorylation restrains RIPK1 kinase-dependent cell death, not necessarily RIPK1's NF-κB scaffolding function. DeepSeek: TBK1 phosphorylates RIPK1 at T189 to block necroptotic RHIM assembly; PMID 30146158 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "mitf",
    "to": "lc3",
    "kind": "activate",
    "label": "TFEB → MAP1LC3B",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "refs": [
      "li2017"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0165): signor row(s), mechanism 'functional association', PMID 28552616. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TFEB → MAP1LC3B (the atlas nodes are MITF / TFEB → LC3-II). Reviewer notes: Sol: TFEB induces MAP1LC3B transcription, but increased LC3 expression does not establish increased LC3-II or completed autophagic flux. DeepSeek: TFEB transactivates MAP1LC3B in the CLEAR network; PMID 28552616 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ifna",
    "to": "ifnar2",
    "kind": "activate",
    "label": "IFNA1 → IFNAR2",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "cutrone2001"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0171): signor row(s), mechanism 'physical association', PMID 11278538. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "protein_protein_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IFNA1 → IFNAR2 (the atlas nodes are IFN-α (13 subtypes) → IFNAR2). Reviewer notes: Sol: IFN-α binds IFNAR2 as part of the IFNAR1/2 signaling receptor, filling a missing ligand–receptor binding edge. DeepSeek: IFN-α binds IFNAR2 as its high-affinity subunit; PMID 11278538 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "tbk1",
    "to": "p62",
    "kind": "phos",
    "label": "TBK1 → SQSTM1",
    "pathways": [
      "cgas-sting",
      "mitophagy"
    ],
    "evidence": "G",
    "refs": [
      "pilli2012"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0174): signor row(s), mechanism 'phosphorylation', PMID 22921120. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TBK1 → SQSTM1 (the atlas nodes are TBK1 → p62 / SQSTM1). Reviewer notes: Sol: TBK1 phosphorylation can enhance p62 ubiquitin-cargo recognition, providing a mechanistic selective-autophagy link. DeepSeek: TBK1 phosphorylates p62/SQSTM1 at S403 to enhance cargo recognition; PMID 22921120 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "cyld",
    "to": "traf6",
    "kind": "inhibit",
    "label": "CYLD → TRAF6",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "trompouki2003"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0175): reactome,signor row(s), mechanism 'deubiquitination,physical association', PMID 12917689. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "deubiquitination",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: CYLD → TRAF6. Reviewer notes: Sol: CYLD removes activating ubiquitin chains from TRAF6 and restrains downstream inflammatory signaling. DeepSeek: CYLD deubiquitinates TRAF6 K63 chains, terminating NF-κB activation; PMID 12917689 is the reference paper.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "shp1",
    "to": "cd3z",
    "kind": "inhibit",
    "label": "PTPN6 → CD247",
    "pathways": [
      "tcr"
    ],
    "evidence": "G",
    "refs": [
      "fife2008"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0176): reactome row(s), mechanism 'dephosphorylation', PMID 18759926. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "dephosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: PTPN6 → CD247 (the atlas nodes are SHP-1 (PTPN6) → CD3ζ). Reviewer notes: Sol: SHP-1 can dephosphorylate CD3ζ signaling motifs and reduce productive proximal T-cell receptor signaling. DeepSeek: SHP-1 dephosphorylates CD3ζ ITAMs; PMID 18759926 supports the direction.",
    "cell_context": [
      "cd4_tcell",
      "cd8_tcell",
      "nk_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ikke",
    "to": "act1",
    "kind": "phos",
    "label": "IKBKE → TRAF3IP2",
    "pathways": [
      "cgas-sting",
      "th17"
    ],
    "evidence": "G",
    "refs": [
      "bulek2011"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0188): signor row(s), mechanism 'phosphorylation', PMID 21822257. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IKBKE → TRAF3IP2 (the atlas nodes are IKKε → ACT1 (TRAF3IP2)). Reviewer notes: Sol: IKKε phosphorylation of ACT1 supports an IL-17-induced post-transcriptional signaling branch rather than simply duplicating canonical NF-κB activation. DeepSeek: IKKε phosphorylates ACT1 (TRAF3IP2), coupling IL-17 signaling to IKKε activity; PMID 21822257 is on-target.",
    "cell_context": [],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ikke",
    "to": "cyld",
    "kind": "inhibit",
    "label": "IKBKE → CYLD",
    "pathways": [
      "cgas-sting",
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "hutti2009"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0193): signor row(s), mechanism 'phosphorylation', PMID 19481526. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "inhibitory_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: IKBKE → CYLD (the atlas nodes are IKKε → CYLD). Reviewer notes: Sol: IKKε phosphorylation can inhibit CYLD tumor-suppressive deubiquitinase activity, requiring an inhibitory modification-aware representation. DeepSeek: IKKε phosphorylates CYLD; PMID 19481526 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "mavs",
    "to": "ifnb",
    "kind": "activate",
    "label": "MAVS → IFNB1",
    "pathways": [
      "rlr-mavs",
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "kondo2012"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0200): signor row(s), mechanism 'functional association', PMID 22588174. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: MAVS → IFNB1 (the atlas nodes are MAVS → IFN-β). Reviewer notes: Sol: MAVS induces IFNB1 through downstream kinase and transcription-factor pathways, making this a supported but already mechanistically represented shortcut. DeepSeek: MAVS drives IFNB1 transcription via the RIG-I/MDA5–MAVS–TBK1–IRF3 axis; PMID 22588174 is on-target.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "tlr7",
    "to": "tnfa",
    "kind": "activate",
    "label": "TLR8 → TNF",
    "pathways": [
      "tlr",
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "gorden2005"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0205): signor row(s), mechanism 'functional association', PMID 15661881. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "functional_activation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: TLR8 → TNF (the atlas nodes are TLR7/8 → TNF-α). Reviewer notes: Sol: TLR8 activation induces TNF production in responsive human myeloid cells, but the existing tlr7 node explicitly combines TLR7 and TLR8 and must retain that distinction. DeepSeek: TLR7/8→TNF via MyD88–NF-κB is textbook; redundant with `tlr7→myd88→nfkb` but harmless as a shortcut.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "shp1",
    "to": "stat3",
    "kind": "inhibit",
    "label": "PTPN6 → STAT3",
    "pathways": [
      "tcr",
      "th17"
    ],
    "evidence": "G",
    "refs": [
      "xu2008"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0210): signor row(s), mechanism 'dephosphorylation', PMID 18508557. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "dephosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '-'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: PTPN6 → STAT3 (the atlas nodes are SHP-1 (PTPN6) → STAT3). Reviewer notes: Sol: SHP-1 can dephosphorylate and inhibit activated STAT3, subject to confirmation that the cited study establishes the relevant substrate relationship. DeepSeek: SHP-1 dephosphorylates STAT3; fits `shp1` node and would extend its reach past `zap70`.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "ikka",
    "to": "irf7",
    "kind": "phos",
    "label": "CHUK → IRF7",
    "pathways": [
      "nfkb",
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "hoshino2006"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0222): signor row(s), mechanism 'phosphorylation', PMID 16612387. Tier from the cited papers' MeSH (cell/animal system => L3 floor; otherwise L1).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "Added from SIGNOR (direction curated) after two-family review (Sol, DeepSeek): both kept it, both gave sign '+'. The SIGNOR copy used here has no effect column, so the sign is the reviewers' agreed reading, not a curated field. Gene-level row: CHUK → IRF7 (the atlas nodes are IKKα → IRF7). Reviewer notes: Sol: IKKα supports IRF7 activation in the TLR7/9-driven plasmacytoid-dendritic-cell interferon pathway rather than representing a universal noncanonical NF-κB step. DeepSeek: IKKα (CHUK)→IRF7 phosphorylation (PMID 16612387) is real and adds a second IRF7 kinase beyond `ikke`.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: intersection of the two endpoint nodes' cell_context."
  },
  {
    "from": "rnf5",
    "to": "sting",
    "kind": "degrade",
    "label": "RNF5 K48-ubiquitinates STING",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "zhong2009"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0336): PMID 19285439. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination_degradation",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "rnf5",
    "to": "mavs",
    "kind": "degrade",
    "label": "RNF5 ubiquitinates MAVS",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "G",
    "refs": [
      "zhong2010"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0336): PMID 20483786. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination_degradation",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "msk1",
    "to": "nfkb",
    "kind": "phos",
    "label": "MSK1 phosphorylates p65 Ser276",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "vermeulen2003"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0344): PMID 12628924. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "kinase_phosphorylation",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "ptpn2",
    "to": "jak1",
    "kind": "inhibit",
    "label": "TC-PTP dephosphorylates JAK1",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "simoncic2002",
      "bourdeau2005"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0347): PMID 11909529, 15780598. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "dephosphorylation",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "ptpn2",
    "to": "stat1",
    "kind": "inhibit",
    "label": "TC-PTP dephosphorylates STAT1",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "tenhoeve2002",
      "bourdeau2005"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0347): PMID 12138178, 15780598. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "dephosphorylation",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "ptpn2",
    "to": "stat3",
    "kind": "inhibit",
    "label": "TC-PTP dephosphorylates STAT3",
    "pathways": [
      "th17"
    ],
    "evidence": "G",
    "refs": [
      "tenhoeve2002",
      "bourdeau2005"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0347): PMID 12138178, 15780598. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "dephosphorylation",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "il1rn",
    "to": "il1r",
    "kind": "inhibit",
    "label": "IL-1Ra blocks IL-1R1",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "G",
    "refs": [
      "hannum1990",
      "eisenberg1990"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0380): PMID 2137200, 2137201. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "receptor_antagonism",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons. SIGNOR cited PMID 2876877, an unrelated 1986 cerebrospinal-fluid paper; replaced with the two 1990 IL-1Ra discovery papers.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "il1r2",
    "to": "il1b",
    "kind": "inhibit",
    "label": "IL-1R2 sequesters IL-1β",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "G",
    "refs": [
      "colotta1993"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0388): PMID 8332913. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "decoy_sequestration",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons. Direction inverted from the SIGNOR row (IL1B → IL1R2 binding): both reviewers read the decoy as a brake on IL-1β.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "cxcl9-11",
    "to": "cxcr3",
    "kind": "activate",
    "label": "CXCL9/10/11 → CXCR3",
    "pathways": [
      "ifn-gamma",
      "isg"
    ],
    "evidence": "G",
    "refs": [
      "smit2003"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0394): PMID 12750173. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ligand_receptor",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons.",
    "cell_context": [],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "trim21",
    "to": "irf7",
    "kind": "degrade",
    "label": "TRIM21 ubiquitinates IRF7",
    "pathways": [
      "cgas-sting",
      "tlr"
    ],
    "evidence": "G",
    "refs": [
      "higgs2010"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0396): PMID 20668674. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination_degradation",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "trim21",
    "to": "p62",
    "kind": "inhibit",
    "label": "TRIM21 ubiquitinates p62, blocking oligomerisation",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "pan2016"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0396): PMID 26942676. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination_inhibition",
    "detail": "New node agreed by both reviewer families. Sign: the reviewers agreed on the node's direction of effect; this edge's kind was written per anchor from the SIGNOR row and their reasons.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "tax1bp1",
    "to": "a20",
    "kind": "associate",
    "label": "TAX1BP1 · A20",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "devalck1999"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0303): PMID 10435631. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "physical_association",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "ikka",
    "to": "tax1bp1",
    "kind": "associate",
    "label": "IKKα phosphorylates TAX1BP1",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "shembade2011"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0303): PMID 21765415. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "phosphorylation",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "tax1bp1",
    "to": "traf3",
    "kind": "associate",
    "label": "TAX1BP1 · TRAF3",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "gao2011"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0303): PMID 21885437. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "physical_association",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "gr",
    "to": "ikba",
    "kind": "associate",
    "label": "GR → IκBα induction",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "scheinman1995"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0307): PMID 7569975. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "transcriptional_regulation",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "gr",
    "to": "nfkb",
    "kind": "associate",
    "label": "GR · NF-κB",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "cato1996"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0307): PMID 8639160. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "transrepression",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "gr",
    "to": "lck",
    "kind": "associate",
    "label": "GR · LCK",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "lowenberg2006"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0307): PMID 16888650. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "physical_association",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "mst1",
    "to": "becn1",
    "kind": "associate",
    "label": "MST1 phosphorylates Beclin-1",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "refs": [
      "maejima2013"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0323): PMID 24141421. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "phosphorylation",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "rnf26",
    "to": "sting",
    "kind": "associate",
    "label": "RNF26 K11-ubiquitinates STING",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "qin2014"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0334): PMID 25254379. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "rnf26",
    "to": "p62",
    "kind": "associate",
    "label": "RNF26 ubiquitinates p62",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "refs": [
      "jongsma2016"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0334): PMID 27368102. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "mul1",
    "to": "sting",
    "kind": "associate",
    "label": "MUL1 ubiquitinates STING",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "ni2017"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0335): PMID 28763789. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "marchf5",
    "to": "drp1",
    "kind": "associate",
    "label": "MARCH5 · DRP1",
    "pathways": [
      "mito",
      "mitophagy"
    ],
    "evidence": "G",
    "refs": [
      "yonashiro2006"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0339): PMID 16874301. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "functional_association",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "marchf5",
    "to": "parkin",
    "kind": "associate",
    "label": "MARCH5 ubiquitinates Parkin",
    "pathways": [
      "mitophagy"
    ],
    "evidence": "G",
    "refs": [
      "shiiba2021"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0339): PMID 33565245. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "ipsc"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "tbk1",
    "to": "abin1",
    "kind": "associate",
    "label": "TBK1 phosphorylates ABIN-1",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "zhou2022"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0351): PMID 36574265. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "phosphorylation",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "abin1",
    "to": "traf3",
    "kind": "associate",
    "label": "ABIN-1 · TRAF3",
    "pathways": [
      "nfkb"
    ],
    "evidence": "G",
    "refs": [
      "gao2011"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0351): PMID 21885437. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "physical_association",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "trim23",
    "to": "tbk1",
    "kind": "associate",
    "label": "TRIM23 · TBK1",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "sparrer2017"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0356): PMID 28871090. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "physical_association",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "pin1",
    "to": "irf3",
    "kind": "associate",
    "label": "PIN1 · IRF3",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "saitoh2006"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0362): PMID 16699525. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "prolyl_isomerisation",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "pin1",
    "to": "ifnb",
    "kind": "associate",
    "label": "PIN1 → IFN-β output",
    "pathways": [
      "cgas-sting"
    ],
    "evidence": "G",
    "refs": [
      "saitoh2006"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0362): PMID 16699525. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "functional_association",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "trim65",
    "to": "mda5",
    "kind": "associate",
    "label": "TRIM65 K63-ubiquitinates MDA5",
    "pathways": [
      "rlr-mavs"
    ],
    "evidence": "G",
    "refs": [
      "lang2016"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0368): PMID 28031478. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "trim65",
    "to": "nlrp3",
    "kind": "associate",
    "label": "TRIM65 ubiquitinates NLRP3",
    "pathways": [
      "inflammasome"
    ],
    "evidence": "G",
    "refs": [
      "tang2021"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0368): PMID 34512673. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "ubiquitination",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "pias1",
    "to": "stat1",
    "kind": "associate",
    "label": "PIAS1 · STAT1",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "duong2004"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0376): PMID 14699505. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "physical_association",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned. Second SIGNOR PMID 23663276 is an IL-6 myokine review with no PIAS1 content; dropped.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "ikka",
    "to": "pias1",
    "kind": "associate",
    "label": "IKKα phosphorylates PIAS1",
    "pathways": [
      "ifn-jak"
    ],
    "evidence": "G",
    "refs": [
      "liu2007"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0376): PMID 17540171. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "phosphorylation",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "calcineurin",
    "to": "drp1",
    "kind": "associate",
    "label": "Calcineurin dephosphorylates DRP1",
    "pathways": [
      "mito"
    ],
    "evidence": "G",
    "refs": [
      "cereghetti2008"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0391): PMID 18838687. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "dephosphorylation",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  },
  {
    "from": "tbk1",
    "to": "ddx3x",
    "kind": "associate",
    "label": "TBK1 phosphorylates DDX3X",
    "pathways": [
      "cgas-sting",
      "rlr-mavs"
    ],
    "evidence": "G",
    "refs": [
      "soulat2008"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Curated-database fill 2026-11-11 (CP-0400): PMID 18583960. Tier from the cited papers' MeSH (cell/animal system => L3 floor).",
    "interaction_type": "phosphorylation",
    "detail": "New node agreed by both reviewer families. The reviewers did not agree on this node's sign, so its links are unsigned.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "dendritic_cell",
      "cd4_tcell"
    ],
    "cellContextNote": "Curated-database fill 2026-11-11: the new node's cell_context intersected with the existing endpoint's."
  }
];
