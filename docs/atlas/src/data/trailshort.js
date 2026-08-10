/**
 * data/trailshort.js — the TRAILshort → DR5 → SHP-1 → ZAP-70 arm.
 *
 * Jalali S et al. "TRAIL splice variant TRAILshort disrupts T cell receptor
 * signaling and promotes immune tolerance in vivo." J Clin Invest 2026;136(15):
 * e194449. DOI: 10.1172/JCI194449.
 *
 * ── Where this attaches, and why NOT at NF-κB ────────────────────────────
 * The obvious guess is that a TNF-superfamily ligand hitting a death receptor
 * signals through NF-κB, and for FULL-LENGTH TRAIL that is correct — trimerised
 * TRAIL clusters DR4/DR5, assembles a DISC, and can activate NF-κB and/or NFAT.
 * TRAILshort is the dominant negative of exactly that. It lacks cysteine 230,
 * so it cannot trimerise, and Figure 4 of the paper is a set of negative
 * results establishing what it therefore does NOT do: no FADD or caspase-8
 * recruitment, no DISC assembly, no RIPK1/MLKL phosphorylation, no apoptosis,
 * no necroptosis, and — measured directly by reporter assay in primary CD3+
 * T cells (Figure 4C) — NO NF-κB ACTIVATION. NFAT activity falls slightly.
 *
 * So NF-κB is not the junction. The mechanism is a phosphatase acting on
 * proximal TCR signalling: TRAILshort binds DR5, recruits SHP-1 (PTPN6),
 * SHP-1 autophosphorylates at Y536 and dephosphorylates ZAP-70 at Y319, the
 * ZAP-70–CD3ζ association is disrupted, and p-LAT and p-PLCγ1 fall behind it.
 * The T cell goes hyporesponsive without dying.
 *
 * ── Why it belongs in the RESPONDER compartment ──────────────────────────
 * This atlas is innate and single-cell, with one exception: Loop C is paracrine
 * and needs a second cell to make IFN-γ. That responder cell is a Th1
 * lymphocyte — the exact cell type TRAILshort silences. TRAILshort is carried on
 * extracellular vesicles and acts on bystander cells, so it reaches this
 * compartment without any need for the affected cell to produce it.
 *
 * ── Polarity, and letting the sign arithmetic do the work ────────────────
 * Every edge below is signed individually and honestly. The chain
 *   trailshort → dr5 (+) → shp1 (+) ⊣ zap70 (−) → lat (+) → plcg1 (+)
 *   → responder-cell (+) → ifng (+)
 * multiplies out to −1, so the cascade navigator derives "TRAILshort LOWERS
 * IFN-γ" rather than being told it. That is the point of the signed model, and
 * it means the Loop C damping falls out of the graph instead of being asserted.
 *
 * ── Evidence grading ─────────────────────────────────────────────────────
 * Everything here is 'G': established in the primary literature (human T cells,
 * humanised mice, patient samples) and imported. NOTHING in this module has
 * been shown in a SAMHD1 system, and no link between SAMHD1 and TRAILshort
 * expression is claimed by the paper or by this atlas.
 */

export const nodes = [
  // ── Inputs: how a T cell is SUPPOSED to be activated ─────────────────
  // Canonical proximal TCR biology, present so the arm shows the pathway
  // being suppressed and not only the suppression. These four nodes are
  // standard immunology rather than findings from Jalali 2026, so they carry
  // their own review citations — Rudolph 2006 for pMHC–TCR recognition,
  // Courtney 2018 for the CD3/ITAM/Lck/ZAP-70 cascade, Esensten 2016 for CD28
  // costimulation — and NOT jalali2026, which would misattribute them.
  {
    id: 'apc-antigen', label: 'peptide–MHC', full: 'Antigen-presenting cell displaying peptide on MHC',
    // 'complex', not 'ligand' — same trap as TRAILshort: the ligand class means
    // NUCLEIC-ACID ligand in this atlas, and a peptide sitting in an MHC groove
    // is genuinely a multiprotein complex.
    compartment: 'extracellular', klass: 'complex', pathways: ['tcr'],
    pos: [-128, 124, 20], lod: 2, evidence: 'G',
    summary: 'The physiological input. Everything in this arm is a response to an antigen a T cell has recognised.',
    detail: 'The paper drives this arm two ways — tetanus toxoid–loaded antigen-presenting cells, and EBV gp350 — ' +
      'in addition to the antibody-bead shortcut of CD3/CD28 ligation. That matters for interpretation: TRAILshort ' +
      'suppresses responses to REAL antigen, not only to artificial receptor crosslinking.',
    refs: ['rudolph2006', 'jalali2026'],
  },
  {
    id: 'tcr-cd3', label: 'TCR–CD3', full: 'T cell receptor αβ heterodimer in complex with CD3γε/δε/ζζ',
    compartment: 'responder', klass: 'receptor', pathways: ['tcr'],
    pos: [-118, 112, 36], lod: 1, evidence: 'G', key: true,
    summary: 'The antigen receptor itself. It has no catalytic activity of its own — all its signalling is borrowed from associated kinases.',
    detail: 'The αβ heterodimer does the recognising but carries no enzymatic function; the signalling is done by ' +
      'the CD3 chains bolted to it, whose cytoplasmic tails hold the ITAMs. This is why the pathway can be ' +
      'switched off by a phosphatase without the receptor being blocked, removed, or its antigen displaced — which ' +
      'is exactly what TRAILshort does.',
    refs: ['courtney2018', 'rudolph2006'],
  },
  {
    id: 'lck', label: 'Lck', full: 'Lymphocyte-specific protein tyrosine kinase',
    compartment: 'responder', klass: 'kinase', pathways: ['tcr'],
    pos: [-128, 110, 34], lod: 2, evidence: 'G',
    summary: 'The Src-family kinase that phosphorylates the CD3ζ ITAMs — the first catalytic event of the cascade.',
    detail: 'Lck writes the phosphates that ZAP-70 later reads. Because SHP-1 is a phosphatase, the TRAILshort ' +
      'lesion is best understood as an ERASER acting on what Lck WRITES: the two enzymes contest the same residues, ' +
      'and the balance between them sets whether the receptor signals at all.',
    refs: ['courtney2018'],
  },
  {
    id: 'cd28', label: 'CD28', full: 'CD28 costimulatory receptor',
    compartment: 'responder', klass: 'receptor', pathways: ['tcr'],
    pos: [-112, 116, 30], lod: 2, evidence: 'G',
    summary: 'Signal 2. Antigen recognition alone drives anergy; costimulation is what makes it activation.',
    detail: 'The two-signal requirement is the T-cell analogue of the priming/activation split that governs NLRP3 ' +
      'in Loop B — a recurring shape in immunology, where a dangerous effector programme needs two independent ' +
      'permissions. Every CD3/CD28 bead experiment in this paper is supplying both.',
    refs: ['esensten2016'],
  },
  {
    id: 'trail-fl', label: 'TRAIL (full length)', full: 'TNFSF10 — the trimerising parent ligand',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['tcr'],
    pos: [-144, 104, 24], lod: 2, evidence: 'G',
    summary: 'The functional counterpart. It trimerises DR4/DR5 and kills; TRAILshort occupies the same receptor and does not.',
    detail: 'Full-length TRAIL is expressed on activated T and NK cells and used to kill virally infected and ' +
      'transformed targets while sparing healthy tissue. Trimerised, it clusters death receptors, recruits FADD ' +
      'and pro-caspase-8 into a DISC, and drives apoptosis — and can additionally signal necroptosis via ' +
      'RIPK1/RIPK3, or non-apoptotic NF-κB and MAPK/p38 in TRAIL-resistant tumour cells. THAT is the route to ' +
      'NF-κB in this arm, and it belongs to the parent ligand, not to TRAILshort. TRAILshort is the dominant ' +
      'negative of all of it.',
    refs: ['jalali2026'],
  },

  {
    id: 'trailshort', label: 'TRAILshort', full: 'TRAIL splice variant lacking cysteine 230 — dominant-negative, non-trimerising',
    // 'cytokine' rather than 'ligand': the ligand class is for NUCLEIC-ACID
    // ligands (mtDNA, cGAMP, dsRNA). TRAILshort is a TNF-superfamily protein
    // ligand, so it belongs with the secreted-mediator class.
    compartment: 'extracellular', klass: 'cytokine', pathways: ['tcr'],
    pos: [-136, 112, 30], lod: 1, evidence: 'G', key: true,
    summary: 'A non-trimerising TRAIL splice variant that silences T cells by phosphatase recruitment rather than by killing them.',
    detail: 'TRAILshort lacks Cys230 and therefore cannot form the trimer that clusters death receptors. It is ' +
      'presented on cell surfaces AND packaged into extracellular vesicles, which is what lets it act on bystander ' +
      'cells rather than only on the cell that made it — the reason it appears in this compartment at all. ' +
      'Unbiased GEO enrichment finds TRAILshort RNA elevated across COVID-19, Zika, tuberculosis, myelofibrosis, ' +
      'multiple neoplasms, Crohn disease and SLE; prior work adds HIV. The common thread across that list is ' +
      'immune dysfunction, which is the observation the mechanistic work set out to explain.',
    samhd1: 'NO established SAMHD1 link. This arm is imported context for the T-cell attrition phenotype, not a ' +
      'consequence of A565T. Treat it as a candidate modifier to be tested, not as part of the variant cascade.',
    refs: ['jalali2026'],
  },
  {
    id: 'dr5', label: 'DR5 (TRAIL-R2)', full: 'TNFRSF10B — death receptor 5',
    compartment: 'responder', klass: 'receptor', pathways: ['tcr'],
    pos: [-120, 104, 44], lod: 1, evidence: 'G',
    summary: 'The receptor TRAILshort binds preferentially. Engaged WITHOUT clustering, it becomes a phosphatase-docking site instead of a death platform.',
    detail: 'Full-length TRAIL trimerises DR5, recruits FADD and pro-caspase-8 into a DISC, and drives apoptosis, ' +
      'necroptosis or NF-κB. TRAILshort occupies the same receptor and does none of that: DR5 pull-downs after ' +
      'TRAILshort treatment show no FADD, no caspase-8 and no RIPK1, whereas super-killer TRAIL shows all three. ' +
      'The receptor is the same; the signal is entirely different. DR5-KO abolishes TRAILshort signalling, which ' +
      'is what makes DR5 the required junction rather than an incidental binding partner.',
    refs: ['jalali2026'],
  },
  {
    id: 'shp1', label: 'SHP-1 (PTPN6)', full: 'Src homology region 2 domain–containing phosphatase 1',
    compartment: 'responder', klass: 'enzyme', pathways: ['tcr'],
    pos: [-126, 96, 38], lod: 1, evidence: 'G', key: true,
    summary: 'The actual effector. Recruited to TRAILshort-bound DR5, autophosphorylated at Y536, and it switches the TCR off from the inside.',
    detail: 'SHP-1 sits autoinhibited at rest through an intramolecular N-terminal SH2–phosphatase interaction, and ' +
      'is released on engagement by ITIM- or ITSM-bearing receptors, autophosphorylating at Y536. TNFR-family ' +
      'receptors including Fas were already known to recruit it; this paper establishes DR5 doing so in human ' +
      'T cells. Mass spectrometry of TRAILshort-Fc pull-downs identified ZAP-70, CD3ζ and SHP-1 as uniquely ' +
      'TRAILshort-interacting. Both TRAILshort peptide and TRAILshort EVs induce SHP-1 pY536.',
    drugs: ['nsc87877'],
    refs: ['jalali2026'],
  },
  {
    id: 'cd3z', label: 'CD3ζ', full: 'CD247 — the TCR ζ-chain carrying the ITAMs',
    compartment: 'responder', klass: 'adaptor', pathways: ['tcr'],
    pos: [-108, 108, 40], lod: 2, evidence: 'G',
    summary: 'The ITAM platform ZAP-70 docks onto. TRAILshort does not remove it — it breaks the association.',
    detail: 'Lck phosphorylates the CD3ζ ITAMs on TCR engagement, and the doubly phosphorylated ITAM is what the ' +
      'ZAP-70 tandem SH2 module binds. Because SHP-1 strips the activating phosphates, the ZAP-70–CD3ζ interaction ' +
      'is lost rather than the components being degraded — which is why the effect is reversible on SHP-1 removal.',
    refs: ['jalali2026', 'courtney2018'],
  },
  {
    id: 'zap70', label: 'ZAP-70', full: 'Zeta-chain-associated protein kinase 70',
    compartment: 'responder', klass: 'kinase', pathways: ['tcr'],
    pos: [-114, 98, 46], lod: 1, evidence: 'G', key: true,
    summary: 'The dephosphorylation target (Y319). Everything downstream in the TCR cascade falls behind it.',
    detail: 'ZAP-70 is the first kinase of the TCR cascade proper, and pY319 is the site the paper tracks by both ' +
      'immunoblot and flow cytometry. CD3/CD28 ligation normally raises p–ZAP-70, p-LAT and p-PLCγ together; ' +
      'TRAILshort pretreatment diminishes all three. TRAILshort alone, without CD3/CD28 stimulation, does nothing ' +
      '— this is a brake on activation, not a stimulus in its own right.',
    refs: ['jalali2026', 'courtney2018'],
  },
  {
    id: 'lat', label: 'LAT', full: 'Linker for activation of T cells',
    compartment: 'responder', klass: 'adaptor', pathways: ['tcr'],
    pos: [-108, 90, 48], lod: 2, evidence: 'G',
    summary: 'The scaffold ZAP-70 phosphorylates at Y191/Y220, and the point where one lost phosphosite becomes a whole lost programme.',
    refs: ['jalali2026', 'courtney2018'],
  },
  {
    id: 'plcg1', label: 'PLCγ1', full: 'Phospholipase C gamma 1',
    compartment: 'responder', klass: 'enzyme', pathways: ['tcr'],
    pos: [-107, 80, 40], lod: 2, evidence: 'G',
    summary: 'Recruited to phospho-LAT and activated at Y783. Its output is the calcium and DAG arm that licenses the effector programme.',
    detail: 'PLCγ1 is where reduced proximal phosphorylation turns into reduced function: less IP3/DAG means less ' +
      'calcium flux and less PKCθ activity, and downstream the paper measures exactly that as fewer CD69+CD40L+ ' +
      'cells, less proliferation, and less IFN-γ. Note that NFAT — the classic calcium-dependent readout — falls ' +
      'only SLIGHTLY, which is why the authors locate the lesion proximally rather than at the transcription factor.',
    refs: ['jalali2026'],
  },

  // ── Outputs: what the paper actually measures ────────────────────────
  // Every readout below is a real assay in Jalali 2026, not a plausible
  // downstream guess. That is deliberate — the arm should be falsifiable at
  // the same points the paper is.
  {
    id: 'cd69', label: 'CD69', full: 'Early T-cell activation marker',
    compartment: 'responder', klass: 'effector', pathways: ['tcr'],
    pos: [-94, 86, 36], lod: 2, evidence: 'G',
    summary: 'The earliest surface readout of successful activation — up within hours, and reduced by TRAILshort.',
    detail: 'Measured by flow cytometry as the CD69+CD40L+CD4+ fraction responding to EBV gp350. TRAILshort EVs ' +
      'reduce it; SHP-1 inhibition raises it back. As an early marker it reports on the proximal block directly, ' +
      'without the confound of the days-long proliferation readouts.',
    refs: ['jalali2026'],
  },
  {
    id: 'cd40l', label: 'CD40L', full: 'CD154 — T-cell help delivered to B cells and APCs',
    compartment: 'responder', klass: 'effector', pathways: ['tcr'],
    pos: [-88, 98, 36], lod: 2, evidence: 'G',
    summary: 'The molecule by which an activated T cell licenses B cells and dendritic cells. Losing it silences help, not just killing.',
    detail: 'This is the output that makes TRAILshort a TOLERANCE mechanism rather than merely a cytotoxicity ' +
      'block. A T cell that cannot express CD40L cannot license the antigen-presenting cell that activated it, so ' +
      'the suppression propagates outward into the humoral and dendritic compartments as well.',
    refs: ['jalali2026'],
  },
  {
    id: 'tcell-prolif', label: 'clonal proliferation', full: 'Antigen-driven T-cell expansion',
    compartment: 'responder', klass: 'effector', pathways: ['tcr'],
    pos: [-98, 106, 36], lod: 2, evidence: 'G',
    summary: 'Measured by CFSE dilution. Suppressed by TRAILshort EVs across a Transwell, and restored by SHP-1 inhibition.',
    detail: 'The Transwell design is the load-bearing control: TRAILshort-expressing MEFs suppress proliferation ' +
      'of T cells they never touch. That establishes the effect as EV-mediated and soluble, which is what licenses ' +
      'placing TRAILshort in the extracellular compartment acting on a bystander cell.',
    refs: ['jalali2026'],
  },

  // ── Interventions ────────────────────────────────────────────────────
  {
    id: 'car-t', label: 'CD19 CAR-T', full: 'CD19-directed chimeric antigen receptor T cells',
    compartment: 'extracellular', klass: 'drug', pathways: ['tcr', 'drugs'],
    pos: [-158, 104, 28], lod: 2, evidence: 'G',
    summary: 'A therapy this arm predicts will underperform in a TRAILshort-high tumour — and did, in humanised mice.',
    detail: 'CAR-T cells signal through the same CD3ζ ITAMs as a native TCR, which is precisely why they are ' +
      'vulnerable here: the CAR changes what the cell recognises, not how it transduces. TRAILshort MEFs impaired ' +
      'CD19 CAR-T–mediated control of lymphoma in vivo. If that generalises, TRAILshort level is a candidate ' +
      'predictive biomarker for CAR-T failure, and anti-TRAILshort a candidate combination partner.',
    refs: ['jalali2026'],
  },
  {
    id: 'anti-trailshort', label: 'anti-TRAILshort', full: 'TRAILshort-neutralising monoclonal antibody',
    compartment: 'extracellular', klass: 'drug', pathways: ['tcr', 'drugs'],
    pos: [-150, 118, 40], lod: 2, evidence: 'G',
    summary: 'Neutralising the ligand restores T-cell function — the "release the brake" direction.',
    detail: 'In co-cultures of patient T cells with autologous TRAILshort-expressing B cells, anti-TRAILshort ' +
      'antibody raised IFN-γ secretion across marginal zone lymphoma, DLBCL and florid lymphoid hyperplasia ' +
      '(P < 0.05). In humanised mice TRAILshort promoted persistence of transformed MEFs and L428 cells and ' +
      'antagonised CD19-directed CAR-T activity, so neutralisation is the proposed route to restoring it.',
    refs: ['jalali2026'],
  },
  {
    id: 'nsc87877', label: 'NSC-87877', full: 'Small-molecule SHP-1 inhibitor',
    compartment: 'responder', klass: 'drug', pathways: ['tcr', 'drugs'],
    pos: [-140, 92, 44], lod: 2, evidence: 'G',
    summary: 'Blocks the phosphatase rather than the ligand. Works, but only modestly — and the gap is informative.',
    detail: 'SHP-1 inhibition raised CD69+CD40L+CD4+ frequency and IFN-γ in TRAILshort-treated T cells responding ' +
      'to EBV antigen, and restored proliferation against TRAILshort EVs. But pharmacological inhibition reversed ' +
      'the ZAP-70 phosphorylation defect far less completely than CRISPR KO or siRNA knockdown of SHP-1 did. The ' +
      'authors attribute this to the limited potency and specificity of the compound — so read this node as ' +
      'validating the TARGET, not as endorsing this molecule.',
    refs: ['jalali2026'],
  },
];

export const edges = [
  // ── The normal activation path ───────────────────────────────────────
  { from: 'apc-antigen', to: 'tcr-cd3', kind: 'bind',
    label: 'peptide–MHC engagement — signal 1',
    pathways: ['tcr'], evidence: 'G', refs: ['rudolph2006', 'jalali2026'] },

  { from: 'tcr-cd3', to: 'lck', kind: 'activate',
    label: 'receptor engagement brings Lck to the CD3 tails',
    pathways: ['tcr'], evidence: 'G', refs: ['courtney2018'] },

  { from: 'lck', to: 'cd3z', kind: 'phos',
    label: 'phosphorylates the CD3ζ ITAMs — the phosphates SHP-1 later removes',
    pathways: ['tcr'], evidence: 'G', refs: ['courtney2018'] },

  { from: 'cd28', to: 'tcell-prolif', kind: 'activate',
    label: 'signal 2 — without costimulation, antigen recognition drives anergy rather than activation',
    pathways: ['tcr'], evidence: 'G', bend: 0.28, refs: ['esensten2016'] },

  // ── The parent ligand, and what TRAILshort takes away ────────────────
  { from: 'trail-fl', to: 'dr5', kind: 'bind',
    label: 'trimerises DR5 → DISC → apoptosis, necroptosis, or non-apoptotic NF-κB/p38',
    pathways: ['tcr'], evidence: 'G',
    detail: 'The signalling TRAILshort displaces. Both ligands occupy the same receptor; only this one clusters it.',
    refs: ['jalali2026'] },

  { from: 'trailshort', to: 'trail-fl', kind: 'inhibit',
    label: 'dominant negative — blocks TRAIL-mediated apoptosis in producing AND bystander cells',
    pathways: ['tcr'], evidence: 'G', bend: 0.26, refs: ['jalali2026'] },

  { from: 'trailshort', to: 'dr5', kind: 'bind',
    label: 'binds DR5 preferentially — but cannot trimerise, so the receptor never clusters',
    pathways: ['tcr'], evidence: 'G',
    detail: 'DR5-KO cells lose TRAILshort signalling entirely, establishing this as the required junction. The ' +
      'absence of clustering is the whole mechanism: an occupied but unclustered DR5 recruits a phosphatase ' +
      'instead of a death-inducing signalling complex.',
    refs: ['jalali2026'] },

  { from: 'dr5', to: 'shp1', kind: 'activate',
    label: 'recruits SHP-1 and drives autophosphorylation at Y536',
    pathways: ['tcr'], evidence: 'G', refs: ['jalali2026'] },

  { from: 'cd3z', to: 'zap70', kind: 'bind',
    label: 'phospho-ITAMs dock the ZAP-70 tandem SH2 module — the association TRAILshort disrupts',
    pathways: ['tcr'], evidence: 'G', refs: ['jalali2026'] },

  { from: 'shp1', to: 'zap70', kind: 'inhibit',
    label: 'dephosphorylates ZAP-70 at Y319',
    pathways: ['tcr'], evidence: 'G', bend: 0.22,
    detail: 'The sign-negative step, and the one the whole arm turns on. CRISPR KO or siRNA of SHP-1 reverses it ' +
      'cleanly; the small-molecule inhibitor only partially.',
    refs: ['jalali2026'] },

  { from: 'zap70', to: 'lat', kind: 'phos',
    label: 'phosphorylates LAT at Y191/Y220',
    pathways: ['tcr'], evidence: 'G', refs: ['jalali2026'] },

  { from: 'lat', to: 'plcg1', kind: 'activate',
    label: 'phospho-LAT recruits and activates PLCγ1 (pY783)',
    pathways: ['tcr'], evidence: 'G', refs: ['jalali2026'] },

  { from: 'plcg1', to: 'responder-cell', kind: 'activate',
    label: 'proximal TCR output — CD69/CD40L upregulation, proliferation, cytokine production',
    pathways: ['tcr', 'ifn-gamma'], evidence: 'G', bend: 0.2,
    detail: 'This is the edge that joins the TCR arm to Loop C. Follow the signs from TRAILshort and the product ' +
      'is negative: the atlas therefore DERIVES a damping of the paracrine IFN-γ source rather than asserting it.',
    refs: ['jalali2026'] },

  // ── The measured outputs ─────────────────────────────────────────────
  { from: 'plcg1', to: 'cd69', kind: 'activate',
    label: 'early activation marker — CD69+CD40L+CD4+ fraction falls under TRAILshort',
    pathways: ['tcr'], evidence: 'G', refs: ['jalali2026'] },

  { from: 'plcg1', to: 'cd40l', kind: 'activate',
    label: 'T-cell help — the output that makes this tolerance rather than only cytotoxicity loss',
    pathways: ['tcr'], evidence: 'G', refs: ['jalali2026'] },

  { from: 'plcg1', to: 'tcell-prolif', kind: 'activate',
    label: 'clonal expansion, by CFSE dilution — suppressed across a Transwell by TRAILshort EVs',
    pathways: ['tcr'], evidence: 'G', refs: ['jalali2026'] },

  { from: 'trailshort', to: 'car-t', kind: 'inhibit',
    label: 'antagonises CD19-directed CAR-T control of lymphoma in humanised mice',
    pathways: ['tcr', 'drugs'], evidence: 'G', bend: 0.3,
    detail: 'CAR-T cells transduce through the same CD3ζ ITAMs as a native TCR, so a phosphatase lesion at ZAP-70 ' +
      'reaches them unchanged. The CAR alters recognition, not transduction.',
    refs: ['jalali2026'] },

  { from: 'trailshort', to: 'immunodef', kind: 'drive',
    label: 'T-cell hyporesponsiveness → impaired viral and tumour control',
    pathways: ['tcr', 'clinical'], evidence: 'G', bend: 0.3,
    detail: 'The in vivo arm: TRAILshort-knockin promoted persistence of transformed MEFs and L428 lymphoma in ' +
      'humanised mice and antagonised CD19 CAR-T control, while the human association data span chronic viral ' +
      'infection, malignancy and autoimmunity.',
    refs: ['jalali2026'] },

  { from: 'anti-trailshort', to: 'trailshort', kind: 'inhibit',
    label: 'neutralises the ligand — restores IFN-γ in patient B-cell malignancy co-cultures',
    pathways: ['tcr', 'drugs'], evidence: 'G', refs: ['jalali2026'] },

  { from: 'nsc87877', to: 'shp1', kind: 'inhibit',
    label: 'SHP-1 inhibition — partial rescue of p–ZAP-70, fuller rescue of CD69/CD40L and IFN-γ',
    pathways: ['tcr', 'drugs'], evidence: 'G', refs: ['jalali2026'] },
];
