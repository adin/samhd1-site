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
    id: 'z-rna', label: 'Z-form nucleic acid', full: 'Z-RNA / Z-DNA — left-handed duplex from repeat and ERV transcripts',
    compartment: 'cytosol', klass: 'ligand', pathways: ['celldeath', 'retro'],
    pos: [-18, -40, 46], lod: 1, evidence: 'G', key: true,
    summary: 'Left-handed duplex conformation favoured by alternating purine-pyrimidine repeats — abundant in ERV and SINE transcripts.',
    detail: 'Z-form is a conformation, not a sequence: the same molecule flips between B and Z depending on ' +
      'torsional strain, salt and sequence. That is why it works as a danger signal at all — the cell is reading ' +
      'a physical state that accumulates when repeat transcription runs unchecked, rather than a motif a virus ' +
      'could simply mutate away.',
    samhd1: 'The substrate pool for this sensor is exactly what SAMHD1 haploinsufficiency raises. HERV and LINE-1 ' +
      'de-repression is already modelled in the retroelement layer; this is where those transcripts acquire a ' +
      'second way to be dangerous, independent of MDA5.',
    refs: ['jiao2020', 'zhang2022adar'],
  },
  {
    id: 'zbp1', label: 'ZBP1', full: 'Z-DNA binding protein 1 (DAI / DLM-1) — Zα-domain nucleic-acid sensor',
    compartment: 'cytosol', klass: 'sensor', pathways: ['celldeath', 'retro'],
    pos: [-8, -46, 36], lod: 1, evidence: 'G', key: true,
    summary: 'Two Zα domains read Z-form nucleic acid; two RHIM domains hand the signal to RIPK3. Itself an interferon-stimulated gene.',
    detail: 'ZBP1 is the only sensor in this atlas whose ligand is a CONFORMATION. Being an ISG makes it ' +
      'self-amplifying in an interferon-high state: the more interferon, the more sensor, and the sensor detects ' +
      'something the same interferon programme is failing to suppress.',
    samhd1: 'Untested in SAMHD1 systems. The prediction is straightforward and worth measuring: ZBP1 protein should ' +
      'be elevated in A565T cells simply because it is an ISG, at the same time as its Z-form substrate rises from ' +
      'retroelement de-repression. If both are true, necroptotic priming is a phenotype nobody has looked for here.',
    refs: ['jiao2020', 'upton2012', 'zhang2022adar'],
  },
  {
    id: 'ripk3', label: 'RIPK3', full: 'Receptor-interacting serine/threonine kinase 3',
    compartment: 'cytosol', klass: 'kinase', pathways: ['celldeath'],
    pos: [12, -56, 22], lod: 1, evidence: 'G',
    summary: 'RHIM-dependent amyloid-like assembly with ZBP1 or RIPK1; phosphorylates MLKL. The commitment step.',
    detail: 'RHIM–RHIM interaction builds a genuine amyloid core, which is why necroptotic commitment is so hard to ' +
      'reverse once made — the same all-or-nothing polymer logic as MAVS filaments and ASC specks. This graph now ' +
      'has three of them.',
    refs: ['upton2012', 'sun2012mlkl'],
  },
  {
    id: 'ripk1', label: 'RIPK1', full: 'Receptor-interacting serine/threonine kinase 1',
    compartment: 'cytosol', klass: 'kinase', pathways: ['celldeath', 'nfkb'],
    pos: [2, -52, 28], lod: 2, evidence: 'G',
    summary: 'The three-way switch: scaffold for NF-κB survival signalling, or substrate for caspase-8, or RHIM partner for necroptosis.',
    detail: 'Which of the three happens is decided by ubiquitin editing — the same LUBAC/A20/CYLD machinery already ' +
      'in the NF-κB module. That makes RIPK1 a direct link between this arm and the ubiquitin control layer.',
  },
  {
    id: 'mlkl', label: 'MLKL', full: 'Mixed lineage kinase domain-like pseudokinase — the necroptotic executioner',
    compartment: 'cytosol', klass: 'effector', pathways: ['celldeath'],
    pos: [22, -58, 15], lod: 1, evidence: 'G',
    summary: 'Phosphorylated by RIPK3, then oligomerises and permeabilises the plasma membrane directly.',
    detail: 'A pseudokinase with no catalytic activity of its own — it is a pore, not an enzyme. Sub-lytic MLKL ' +
      'activity causes K⁺ efflux without killing the cell, which is enough to license NLRP3.',
    refs: ['sun2012mlkl', 'conos2017'],
  },
  {
    id: 'casp8', label: 'caspase-8 / FADD', full: 'Caspase-8 with FADD — the necroptosis brake',
    compartment: 'cytosol', klass: 'enzyme', pathways: ['celldeath'],
    pos: [0, -62, 12], lod: 1, evidence: 'G',
    summary: 'Cleaves RIPK1 and RIPK3 to suppress necroptosis. Losing it does not stop death — it switches the mode.',
    detail: 'Caspase-8-null mice die embryonically, and deleting RIPK3 rescues them completely. The apoptotic ' +
      'machinery is not only an executioner; it is the thing holding the lytic pathway shut. That inversion is why ' +
      'blocking apoptosis pharmacologically can convert a silent death into an inflammatory one.',
    refs: ['kaiser2011'],
  },
  {
    id: 'necroptosis', label: 'necroptosis', full: 'Caspase-independent lytic programmed cell death',
    compartment: 'cytosol', klass: 'outcome', pathways: ['celldeath'],
    pos: [32, -60, 8], lod: 1, evidence: 'G', key: true,
    summary: 'Membrane rupture with the cytosol intact — maximally immunogenic, and invisible to every caspase inhibitor.',
    samhd1: 'The framework has a caspase-1 lytic route (pyroptosis) and now a caspase-INDEPENDENT one. Nothing in ' +
      'the ten-arm design touches this axis: MCC950 blocks NLRP3, IMSB301 blocks cGAS, and neither has any effect ' +
      'on RIPK3–MLKL. If necroptosis contributes to the mtDNA released into the extracellular space, it is an ' +
      'unmeasured source of the ligand that keeps Loop A supplied.',
    refs: ['sun2012mlkl'],
  },
  {
    id: 'panoptosome', label: 'PANoptosome', full: 'ZBP1-nucleated complex converging pyroptosis, apoptosis and necroptosis',
    compartment: 'cytosol', klass: 'complex', pathways: ['celldeath', 'inflammasome'],
    pos: [20, -44, 6], lod: 2, evidence: 'G',
    summary: 'ZBP1 scaffolds NLRP3, ASC, caspase-1, caspase-8 and RIPK3 into one complex — the three death modes stop being separate.',
    detail: 'The practical consequence for this atlas is that the tidy separation between Loop B and the cell-death ' +
      'arm is a modelling convenience. Where a PANoptosome forms, ASC specks and RIPK3 filaments are the same event, ' +
      'and blocking one output redistributes flux to the others rather than stopping it.',
    refs: ['malireddi2019'],
  },
];

export const edges = [
  // ── Substrate supply — the retroelement layer feeding a second sensor
  { from: 'herv-rna', to: 'z-rna', kind: 'produce', label: 'ERV transcripts are the major endogenous Z-form source', pathways: ['celldeath', 'retro'], evidence: 'G', refs: ['zhang2022adar'] },
  { from: 'alu-dsrna', to: 'z-rna', kind: 'produce', label: 'alternating purine-pyrimidine repeats flip to Z under torsional strain', pathways: ['celldeath', 'retro'], evidence: 'G' },
  { from: 'l1-mrna', to: 'z-rna', kind: 'produce', pathways: ['celldeath', 'retro'], evidence: 'I' },

  // ── The missing branch: ADAR1's OTHER job
  { from: 'adar1', to: 'z-rna', kind: 'inhibit', label: 'THE MISSING BRANCH — the Zα domain competes with ZBP1 for Z-form, a job separate from A-to-I editing', pathways: ['celldeath', 'retro'], evidence: 'G', bend: 0.3, refs: ['dereuver2022', 'zhang2022adar'] },
  { from: 'adar1', to: 'zbp1', kind: 'inhibit', label: 'ADAR1 Zα mutants cause ZBP1-dependent disease rescued by deleting ZBP1, not MDA5', pathways: ['celldeath'], evidence: 'G', refs: ['dereuver2022'] },

  // ── Sensing → commitment → execution
  { from: 'z-rna', to: 'zbp1', kind: 'sense', label: 'Zα domains read the left-handed conformation', pathways: ['celldeath'], evidence: 'G', refs: ['jiao2020'] },
  { from: 'zbp1', to: 'ripk3', kind: 'activate', label: 'RHIM–RHIM amyloid-like nucleation', pathways: ['celldeath'], evidence: 'G', refs: ['upton2012'] },
  { from: 'zbp1', to: 'ripk1', kind: 'activate', label: 'RHIM engagement — the branch point between survival and death', pathways: ['celldeath'], evidence: 'G' },
  { from: 'ripk1', to: 'ripk3', kind: 'activate', pathways: ['celldeath'], evidence: 'G' },
  { from: 'ripk1', to: 'nfkb', kind: 'activate', label: 'the survival branch — ubiquitin editing decides which one runs', pathways: ['celldeath', 'nfkb'], evidence: 'G' },
  { from: 'lubac', to: 'ripk1', kind: 'ubiq', label: 'M1 chains push RIPK1 toward survival signalling', pathways: ['celldeath', 'nfkb'], evidence: 'G' },
  { from: 'ripk3', to: 'mlkl', kind: 'phos', label: 'activation-loop phosphorylation → oligomerisation', pathways: ['celldeath'], evidence: 'G', refs: ['sun2012mlkl'] },
  { from: 'mlkl', to: 'necroptosis', kind: 'drive', label: 'direct plasma-membrane permeabilisation', pathways: ['celldeath'], evidence: 'G' },

  // ── The brake, and what happens when it is lost
  { from: 'casp8', to: 'ripk3', kind: 'degrade', label: 'cleaves RIPK1/RIPK3 — losing this switches death mode rather than preventing death', pathways: ['celldeath'], evidence: 'G', refs: ['kaiser2011'] },
  { from: 'casp8', to: 'ripk1', kind: 'degrade', pathways: ['celldeath'], evidence: 'G' },

  // ── Cross-links into loops the atlas already models
  { from: 'mlkl', to: 'nlrp3', kind: 'activate', label: 'sub-lytic MLKL pores drive K⁺ efflux — a second, caspase-1-independent route to ASC specks', pathways: ['celldeath', 'inflammasome'], evidence: 'G', loop: 'B', refs: ['conos2017'] },
  { from: 'necroptosis', to: 'mtdna-frag', kind: 'release', label: 'lytic death spills mtDNA — the same cross-link pyroptosis makes, by a route no caspase inhibitor blocks', pathways: ['celldeath', 'cgas-sting'], evidence: 'G', bend: 0.45, loop: 'A' },
  { from: 'zbp1', to: 'panoptosome', kind: 'activate', pathways: ['celldeath'], evidence: 'G' },
  { from: 'nlrp3', to: 'panoptosome', kind: 'bind', pathways: ['celldeath', 'inflammasome'], evidence: 'G' },
  { from: 'ripk3', to: 'panoptosome', kind: 'bind', pathways: ['celldeath'], evidence: 'G' },
  { from: 'casp8', to: 'panoptosome', kind: 'bind', pathways: ['celldeath'], evidence: 'G' },
  { from: 'panoptosome', to: 'casp1', kind: 'activate', label: 'the three death modes stop being separable here', pathways: ['celldeath', 'inflammasome'], evidence: 'G', refs: ['malireddi2019'] },
  { from: 'zbp1', to: 'tbk1', kind: 'activate', label: 'ZBP1 was first described as a cytosolic DNA sensor driving IRF3', pathways: ['celldeath', 'cgas-sting'], evidence: 'G' },

  // ── The interferon state builds its own sensor
  { from: 'isg-set', to: 'zbp1', kind: 'produce', label: 'ZBP1 is an ISG — the interferon state raises the sensor while retroelement de-repression raises the ligand', pathways: ['isg', 'celldeath'], evidence: 'G', bend: 0.35 },
  { from: 'necroptosis', to: 'mecfs', kind: 'drive', label: 'candidate contributor — untested', pathways: ['clinical'], evidence: 'I' },
];
