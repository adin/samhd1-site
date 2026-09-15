/**
 * celldeath.js — E1. ZBP1, Z-form nucleic acid, necroptosis, and PANoptosis.
 *
 * ── Why this is the largest single gap ────────────────────────────────────
 * ADAR1 p150 was already in the atlas as AGS6, modelled for its MDA5-facing
 * job: A-to-I editing that keeps Alu duplex RNA below the MDA5 threshold. But
 * ADAR1 p150 has a SECOND, mechanistically separate job, and it is the one its
 * Zα domain exists for — competing with ZBP1 for Z-form nucleic acid.
 *
 * The endogenous Z-form substrate is transcribed from repeat elements and ERVs.
 * Those are in the atlas. ADAR1 is in the atlas. The branch between them was
 * not, which meant the atlas modelled ADAR1 loss as producing interferon and
 * could not model it producing DEATH.
 *
 * The two arms are genetically separable in a way that settles the argument:
 * ADAR1 Zα-domain point mutants (which leave deaminase activity intact) drive
 * disease that is rescued by deleting ZBP1, not by deleting MDA5. Conversely
 * full ADAR1 loss is rescued by deleting MDA5. Same protein, two domains, two
 * sensors, two diseases.
 *
 * ── Why it matters HERE ───────────────────────────────────────────────────
 * SAMHD1 haploinsufficiency pushes both sides of that balance the wrong way at
 * once: retroelement de-repression raises the Z-form substrate pool, while
 * tonic interferon upregulates ZBP1 itself (it is an ISG). More ligand, more
 * sensor, and an ADAR1 pool that is induced but working against a rising tide —
 * the same "present, engaged, overwhelmed" shape as USP18 and IL-18BP.
 *
 * It also supplies something the framework was missing: a LYTIC death route.
 * Loop B already ends in pyroptosis, but necroptosis is caspase-independent, so
 * it is not blocked by anything in the current study design — and MLKL pores
 * drive K⁺ efflux into NLRP3, which is a second way to get ASC specks that
 * MCC950 would suppress but a caspase-1 inhibitor would not.
 *
 * Evidence note: every mechanism here is graded `G`. None of it has been tested
 * in a SAMHD1 system. The SAMHD1-facing claims are `I` and say so.
 */

export const nodes = [
  {
    "id": "z-rna",
    "label": "Z-form nucleic acid",
    "full": "Z-RNA / Z-DNA — left-handed duplex from repeat and ERV transcripts",
    "compartment": "cytosol",
    "klass": "ligand",
    "pathways": [
      "celldeath",
      "retro"
    ],
    "pos": [
      -18,
      -40,
      46
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Left-handed duplex conformation favoured by alternating purine-pyrimidine repeats — retroelement transcripts are a candidate endogenous source.",
    "detail": "Z-form is a conformation, not a sequence: the same molecule flips between B and Z depending on torsional strain, salt and sequence. That is why it works as a danger signal at all — the cell is reading a physical state that accumulates when repeat transcription runs unchecked, rather than a motif a virus could simply mutate away.",
    "samhd1": "The substrate pool for this sensor is exactly what SAMHD1 haploinsufficiency raises. HERV and LINE-1 de-repression is already modelled in the retroelement layer; this is where those transcripts acquire a second way to be dangerous, independent of MDA5.",
    "refs": [
      "jiao2020",
      "zhang2022adar"
    ],
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "id": "zbp1",
    "label": "ZBP1",
    "full": "Z-DNA binding protein 1 (DAI / DLM-1) — Zα-domain nucleic-acid sensor",
    "compartment": "cytosol",
    "klass": "sensor",
    "pathways": [
      "celldeath",
      "retro"
    ],
    "pos": [
      -8,
      -46,
      36
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Two Zα domains read Z-form nucleic acid; two RHIM domains hand the signal to RIPK3. Itself an interferon-stimulated gene.",
    "detail": "ZBP1 is the only sensor in this atlas whose ligand is a CONFORMATION. Being an ISG makes it self-amplifying in an interferon-high state: the more interferon, the more sensor, and the sensor detects something the same interferon programme is failing to suppress.",
    "samhd1": "Untested in SAMHD1 systems. The prediction is straightforward and worth measuring: ZBP1 protein should be elevated in A565T cells simply because it is an ISG, at the same time as its Z-form substrate rises from retroelement de-repression. If both are true, necroptotic priming is a phenotype nobody has looked for here.",
    "refs": [
      "jiao2020",
      "upton2012",
      "zhang2022adar"
    ],
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "db_xrefs": {
      "uniprot": "Q9H171",
      "ensembl": "ENSG00000171806",
      "hgnc": "HGNC:30950"
    }
  },
  {
    "id": "ripk3",
    "label": "RIPK3",
    "full": "Receptor-interacting serine/threonine kinase 3",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "celldeath"
    ],
    "pos": [
      12,
      -56,
      22
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "RHIM-dependent amyloid-like assembly with ZBP1 or RIPK1; phosphorylates MLKL. The commitment step.",
    "detail": "RHIM–RHIM interaction builds a genuine amyloid core, which is why necroptotic commitment is so hard to reverse once made — the same all-or-nothing polymer logic as MAVS filaments and ASC specks. This graph now has three of them.",
    "refs": [
      "upton2012",
      "sun2012mlkl"
    ],
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "db_xrefs": {
      "uniprot": "Q9Y572",
      "ensembl": "ENSG00000129465",
      "hgnc": "HGNC:10021"
    }
  },
  {
    "id": "ripk1",
    "label": "RIPK1",
    "full": "Receptor-interacting serine/threonine kinase 1",
    "compartment": "cytosol",
    "klass": "kinase",
    "pathways": [
      "celldeath",
      "nfkb"
    ],
    "pos": [
      2,
      -52,
      28
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "The three-way switch: scaffold for NF-κB survival signalling, or substrate for caspase-8, or RHIM partner for necroptosis.",
    "detail": "Which of the three happens is decided by ubiquitin editing — the same LUBAC/A20/CYLD machinery already in the NF-κB module. That makes RIPK1 a direct link between this arm and the ubiquitin control layer.",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "id": "mlkl",
    "label": "MLKL",
    "full": "Mixed lineage kinase domain-like pseudokinase — the necroptotic executioner",
    "compartment": "cytosol",
    "klass": "effector",
    "pathways": [
      "celldeath"
    ],
    "pos": [
      22,
      -58,
      15
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Phosphorylated by RIPK3, then oligomerises and permeabilises the plasma membrane directly.",
    "detail": "A pseudokinase with no catalytic activity of its own — it is a pore, not an enzyme. Sub-lytic MLKL activity causes K⁺ efflux without killing the cell, which is enough to license NLRP3.",
    "refs": [
      "sun2012mlkl",
      "conos2017"
    ],
    "evidence_tier": "L3_cell_line",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "id": "casp8",
    "label": "caspase-8 / FADD",
    "full": "Caspase-8 with FADD — the necroptosis brake",
    "compartment": "cytosol",
    "klass": "enzyme",
    "pathways": [
      "celldeath"
    ],
    "pos": [
      0,
      -62,
      12
    ],
    "lod": 1,
    "evidence": "G",
    "summary": "Cleaves RIPK1 and RIPK3 to suppress necroptosis. Losing it does not stop death — it switches the mode.",
    "detail": "Caspase-8-null mice die embryonically, and deleting RIPK3 rescues them completely. The apoptotic machinery is not only an executioner; it is the thing holding the lytic pathway shut. That inversion is why blocking apoptosis pharmacologically can convert a silent death into an inflammatory one.",
    "refs": [
      "kaiser2011"
    ],
    "evidence_tier": "L5_animal_in_vivo",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): kaiser2011's claim is mouse embryonic-lethality/RIPK3-rescue in vivo genetics, not a cell-line finding. config.js explicitly warns against forcing an animal finding into L1/L3/L4/L6 when L5_animal_in_vivo fits better; matches the trailshort.js/PR #130 precedent for this atlas's first use of the tier.",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "id": "necroptosis",
    "label": "necroptosis",
    "full": "Caspase-independent lytic programmed cell death",
    "compartment": "cytosol",
    "klass": "outcome",
    "pathways": [
      "celldeath"
    ],
    "pos": [
      32,
      -60,
      8
    ],
    "lod": 1,
    "evidence": "G",
    "key": true,
    "summary": "Membrane rupture with the cytosol intact — maximally immunogenic, and invisible to every caspase inhibitor.",
    "samhd1": "The framework has a caspase-1 lytic route (pyroptosis) and now a caspase-INDEPENDENT one. Nothing in the ten-arm design touches this axis: MCC950 blocks NLRP3, IMSB301 blocks cGAS, and neither has any effect on RIPK3–MLKL. If necroptosis contributes to the mtDNA released into the extracellular space, it is an unmeasured source of the ligand that keeps Loop A supplied.",
    "refs": [
      "sun2012mlkl"
    ],
    "evidence_tier": "L3_cell_line",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): sun2012mlkl is human tumour cell lines plus necrosulfonamide chemistry -- no human clinical data anywhere in this file's 8 citations. Downgraded from the generic L6_human_clinical template; this was also the file's one node/edge tier self-contradiction (its only producing edge, mlkl->necroptosis, is zero-ref L3_cell_line/now L1_in_silico). cell_context stays the systemic array -- the two fields are orthogonal and PR #112's decision on this node is unaffected.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  },
  {
    "id": "panoptosome",
    "label": "PANoptosome",
    "full": "ZBP1-nucleated complex converging pyroptosis, apoptosis and necroptosis",
    "compartment": "cytosol",
    "klass": "complex",
    "pathways": [
      "celldeath",
      "inflammasome"
    ],
    "pos": [
      20,
      -44,
      6
    ],
    "lod": 2,
    "evidence": "G",
    "summary": "ZBP1 scaffolds NLRP3, ASC, caspase-1, caspase-8 and RIPK3 into one complex — the three death modes stop being separate.",
    "detail": "The practical consequence for this atlas is that the tidy separation between Loop B and the cell-death arm is a modelling convenience. Where a PANoptosome forms, ASC specks and RIPK3 filaments are the same event, and blocking one output redistributes flux to the others rather than stopping it.",
    "refs": [
      "malireddi2019"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): malireddi2019 is a review article (Malireddi, Kesavardhana, Kanneganti, Front Cell Infect Microbiol 2019) -- no primary data of its own, so it cannot support a tier above L1_in_silico despite being a real, non-fabricated citation (same class as nfkb.js's betrancourt2026/lubac finding, PR #133). Capped rather than substituting an unverified primary citation.",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  }
];

export const edges = [
  {
    "from": "herv-rna",
    "to": "z-rna",
    "kind": "produce",
    "label": "retroelement/ERV transcripts are a candidate endogenous Z-form source",
    "pathways": [
      "celldeath",
      "retro"
    ],
    "evidence": "G",
    "refs": [
      "jiao2020",
      "zhang2022adar"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): claim-support fix, not a tier fix -- the label previously said ERV transcripts are the MAJOR endogenous Z-form source, sourced only to zhang2022adar. That paper's own Z-form mapping localises endogenous Z-RNA to the 3'UTRs of interferon-stimulated mRNAs, not to ERVs (it discusses EREs only in the general ADAR1/dsRNA-immunogenicity framing) -- it does not support 'major source'. jiao2020 (complementary reads from endogenous retroelements detected in mouse epidermal RNA) is the closer support and is now added, but even that shows association in mouse epidermis, not a 'major source' claim -- label softened to 'candidate' accordingly. Matches the z-rna node's own refs (both jiao2020+zhang2022adar already there); its summary softened in step.",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "alu-dsrna",
    "to": "z-rna",
    "kind": "produce",
    "label": "alternating purine-pyrimidine repeats flip to Z under torsional strain",
    "pathways": [
      "celldeath",
      "retro"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "l1-mrna",
    "to": "z-rna",
    "kind": "produce",
    "pathways": [
      "celldeath",
      "retro"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "adar1",
    "to": "z-rna",
    "kind": "inhibit",
    "label": "THE MISSING BRANCH — the Zα domain competes with ZBP1 for Z-form, a job separate from A-to-I editing",
    "pathways": [
      "celldeath",
      "retro"
    ],
    "evidence": "G",
    "bend": 0.3,
    "refs": [
      "dereuver2022",
      "zhang2022adar"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "adar1",
    "to": "zbp1",
    "kind": "inhibit",
    "label": "ADAR1 Zα mutants cause ZBP1-dependent disease rescued by deleting ZBP1, not MDA5",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "refs": [
      "dereuver2022"
    ],
    "evidence_tier": "L5_animal_in_vivo",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): this edge's own label is a pure mouse-genetics epistasis result (ADAR1 Zalpha mutant phenotype rescued by ZBP1 deletion, not MDA5) -- dereuver2022's claim here is in vivo genetics, not cell-line. Matches the casp8/casp8->ripk3 fix above and the trailshort.js/PR #130 precedent.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "z-rna",
    "to": "zbp1",
    "kind": "sense",
    "label": "Zα domains read the left-handed conformation",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "refs": [
      "jiao2020"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "nucleic_acid_sensing",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "zbp1",
    "to": "ripk3",
    "kind": "activate",
    "label": "RHIM–RHIM amyloid-like nucleation",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "refs": [
      "upton2012"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ],
    "db_scores": {
      "string_combined": 0.998,
      "string_experimental": 0.92,
      "string_database": 0.9
    }
  },
  {
    "from": "zbp1",
    "to": "ripk1",
    "kind": "activate",
    "label": "RHIM engagement — the branch point between survival and death",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "ripk1",
    "to": "ripk3",
    "kind": "activate",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "ripk1",
    "to": "nfkb",
    "kind": "activate",
    "label": "the survival branch — ubiquitin editing decides which one runs",
    "pathways": [
      "celldeath",
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "lubac",
    "to": "ripk1",
    "kind": "ubiq",
    "label": "M1 chains push RIPK1 toward survival signalling",
    "pathways": [
      "celldeath",
      "nfkb"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "ubiquitin_conjugation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "ripk3",
    "to": "mlkl",
    "kind": "phos",
    "label": "activation-loop phosphorylation → oligomerisation",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "refs": [
      "sun2012mlkl"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "kinase_phosphorylation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "mlkl",
    "to": "necroptosis",
    "kind": "drive",
    "label": "direct plasma-membrane permeabilisation",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. DELIBERATE HALF-CROSSING, kept myeloid rather than retagged to necroptosis's own systemic array: MLKL pore formation physically occurs inside the myeloid cell -- retagging systemic would mislabel which cell the step happens in (the config.js topical error), unlike gdf15/immunodef which are secreted/clinical abstractions. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "casp8",
    "to": "ripk3",
    "kind": "degrade",
    "label": "cleaves RIPK1/RIPK3 — losing this switches death mode rather than preventing death",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "refs": [
      "kaiser2011"
    ],
    "evidence_tier": "L5_animal_in_vivo",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): kaiser2011's claim is mouse embryonic-lethality/RIPK3-rescue in vivo genetics, not a cell-line finding. config.js explicitly warns against forcing an animal finding into L1/L3/L4/L6 when L5_animal_in_vivo fits better; matches the trailshort.js/PR #130 precedent for this atlas's first use of the tier.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "casp8",
    "to": "ripk1",
    "kind": "degrade",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_suppression",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "mlkl",
    "to": "nlrp3",
    "kind": "activate",
    "label": "sub-lytic MLKL pores drive K⁺ efflux — a second, caspase-1-independent route to ASC specks",
    "pathways": [
      "celldeath",
      "inflammasome"
    ],
    "evidence": "G",
    "loop": "B",
    "refs": [
      "conos2017"
    ],
    "evidence_tier": "L3_cell_line",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "necroptosis",
    "to": "mtdna-frag",
    "kind": "release",
    "label": "lytic death spills mtDNA — the same cross-link pyroptosis makes, by a route no caspase inhibitor blocks",
    "pathways": [
      "celldeath",
      "cgas-sting"
    ],
    "evidence": "G",
    "bend": 0.45,
    "loop": "A",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "organellar_damage_release",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. DELIBERATE HALF-CROSSING, kept myeloid rather than retagged to necroptosis's own systemic array: mtDNA spilling from a lysing cell physically occurs inside the myeloid cell -- retagging systemic would mislabel which cell the step happens in (the config.js topical error), unlike gdf15/immunodef which are secreted/clinical abstractions. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "zbp1",
    "to": "panoptosome",
    "kind": "activate",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "nlrp3",
    "to": "panoptosome",
    "kind": "bind",
    "pathways": [
      "celldeath",
      "inflammasome"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "ripk3",
    "to": "panoptosome",
    "kind": "bind",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "casp8",
    "to": "panoptosome",
    "kind": "bind",
    "pathways": [
      "celldeath"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "allosteric_binding",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "panoptosome",
    "to": "casp1",
    "kind": "activate",
    "label": "the three death modes stop being separable here",
    "pathways": [
      "celldeath",
      "inflammasome"
    ],
    "evidence": "G",
    "refs": [
      "malireddi2019"
    ],
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): malireddi2019 is a review article (Malireddi, Kesavardhana, Kanneganti, Front Cell Infect Microbiol 2019) -- no primary data of its own, so it cannot support a tier above L1_in_silico despite being a real, non-fabricated citation (same class as nfkb.js's betrancourt2026/lubac finding, PR #133). Capped rather than substituting an unverified primary citation.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "zbp1",
    "to": "tbk1",
    "kind": "activate",
    "label": "ZBP1 was first described as a cytosolic DNA sensor driving IRF3",
    "pathways": [
      "celldeath",
      "cgas-sting"
    ],
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "isg-set",
    "to": "zbp1",
    "kind": "produce",
    "label": "ZBP1 is an ISG — the interferon state raises the sensor while retroelement de-repression raises the ligand",
    "pathways": [
      "isg",
      "celldeath"
    ],
    "evidence": "G",
    "bend": 0.35,
    "evidence_tier": "L1_in_silico",
    "evidenceTierNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): zero refs -- config.js caps a zero-refs entry at L1_in_silico.",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-14 (cell_context topical-fit literature audit): cd4_tcell dropped -- none of this file's 8 citations (conos2017, dereuver2022, jiao2020, kaiser2011, malireddi2019, sun2012mlkl, upton2012, zhang2022adar) resolve a T-cell-intrinsic finding for the ZBP1/RIPK1/RIPK3/MLKL necroptosis-PANoptosis axis this file models. No ipsc basis to swap in either (no stem-cell citation here). Honest caveat: only conos2017 (BMDM) is myeloid-native primary data; the rest are keratinocyte/intestinal-epithelium/fibroblast/tumour-line/whole-mouse systems -- a borrowed-mechanism pattern (the pgc1a precedent), not a topical mismatch, since this file's own header scopes it explicitly to the atlas's myeloid disease population (retroelement de-repression + tonic IFN raising ZBP1 as an ISG). dendritic_cell intentionally NOT added despite the post-audit convention elsewhere (retro.js/sensing.js/ifn.js/nfkb.js) -- no citation here supports it and this file had no pre-existing occurrence to converge from. See analysis/handoffs/HANDOFF_2026-09-12_cell_context_topical_fit_audit.md.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia"
    ]
  },
  {
    "from": "necroptosis",
    "to": "mecfs",
    "kind": "drive",
    "label": "candidate contributor — untested",
    "pathways": [
      "clinical"
    ],
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "catalytic_activation",
    "cellContextNote": "Fixed 2026-09-12 (cell_context topical-fit re-audit): both endpoints (necroptosis, mecfs) are systemic clinical-outcome nodes tagged with the systemic array, but this edge carried the generic myeloid template -- a clean node/edge mismatch. Matched the edge to its endpoints.",
    "cell_context": [
      "systemic_immune",
      "cns_neuro",
      "cardiovascular",
      "hepatic",
      "musculoskeletal"
    ]
  }
];

