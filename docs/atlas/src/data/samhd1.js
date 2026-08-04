/**
 * samhd1.js — the hub. SAMHD1 itself, the A565T variant, the dNTP pool, and the
 * genome-stability arm (forks, R-loops, HR, ssDNA fragments).
 *
 * SAMHD1 is a brake on four independent systems at once. That is the whole
 * reason a single heterozygous substitution produces a multi-system phenotype
 * rather than one organ's disease:
 *
 *   1. dNTP homeostasis      — obligate homotetrameric dNTP triphosphohydrolase
 *   2. Genome stability      — CtIP-dependent end resection, MRE11 fork protection, R-loops
 *   3. Innate immune restraint — IRF7 inhibitory domain, NF-κB, MAVS/IKKε, dsRNA LLPS
 *   4. Mitochondrial integrity — VDAC1 interaction, ΔΨm, BIK, autophagy-lysosomal flux
 *
 * Edges FROM samhd1 are almost all `inhibit`, because in health this protein's
 * job is to hold things down. Every one of those brakes is what fails here.
 */

export const nodes = [
  {
    id: 'samhd1', label: 'SAMHD1', full: 'SAM and HD domain-containing deoxynucleoside triphosphate triphosphohydrolase 1',
    compartment: 'cytosol', klass: 'restrict', pathways: ['samhd1'],
    pos: [4, 2, 22], lod: 1, evidence: 'S', key: true,
    summary: 'Obligate homotetramer. dNTPase, replication-fork guardian, retroelement restrictor, innate-immune brake, mitochondrial stabiliser.',
    detail: 'The enzyme is allosterically gated: GTP/dGTP occupy allosteric site 1, the substrate dNTP occupies site 2, ' +
      'and only the fully loaded tetramer hydrolyses. Activity is further switched by CDK1/2–cyclin A phosphorylation ' +
      'at Thr592 — phospho-SAMHD1 retains the genome-stability functions while the dephospho form carries the dNTPase ' +
      'restriction activity. That split is why any therapy that changes total SAMHD1 protein must be evaluated for ' +
      'BOTH functions, not just the one being targeted.',
    samhd1: 'Highly conserved down to zebrafish. Nuclear-predominant, but with functionally required cytosolic and ' +
      'mitochondrial pools.',
    refs: ['ji2014', 'bester2025', 'franzolin2013', 'daddacha2017'],
  },
  {
    id: 'a565t', label: 'p.A565T', full: 'SAMHD1 c.1693G>A (p.Ala565Thr), NM_015474.3 — rs779491090',
    compartment: 'cytosol', klass: 'outcome', pathways: ['samhd1'],
    pos: [-6, 10, 30], lod: 1, evidence: 'S', key: true,
    summary: 'Heterozygous missense at the extreme C-terminal boundary of the phosphohydrolase HD domain — 27 residues from the T592 regulatory hinge.',
    detail: 'Introducing a polar, hydroxyl-bearing threonine at 565 warps the allosteric pocket walls of site 2 and ' +
      'destabilises the C-terminal regulatory lobe. The only direct functional data — Schneider, LMU Munich 2022 — ' +
      'showed 2.4× reduced protein stability at equal mRNA in LN-18 and THP-1, but ONLY in homozygous/complete-loss ' +
      'models. Heterozygous cells were never tested. gnomAD v4 AF ≈ 1.1×10⁻⁵.',
    samhd1: 'The interpretive constraint is clinical, and it is the honest part of this framework: the observed ' +
      'course is survival to middle age without AGS, with symptomatic improvement during acute viral illness. ' +
      'Both are inconsistent with complete dNTPase loss and consistent with ~40–60% residual activity — one ' +
      'functional allele. Enough to prevent AGS5, not enough to prevent a sustained low-grade interferonopathy. ' +
      'Because SAMHD1 is an obligate homotetramer, HD-domain missense variants can additionally poison wild-type ' +
      'tetramers, so real activity may sit below 50%.',
    refs: ['schneider2022', 'rentoft2016', 'docSiege', 'doc10arm'],
  },
  {
    id: 'samhd1-t592', label: 'p-SAMHD1 (T592)', full: 'Thr592-phosphorylated SAMHD1 — CDK1/2–cyclin A substrate',
    compartment: 'nucleus', klass: 'restrict', pathways: ['samhd1', 'genome'],
    pos: [-26, 16, -18], lod: 1, evidence: 'S',
    summary: 'The phospho-switch that partitions SAMHD1 between its dNTPase and its genome-stability roles.',
    detail: 'Phosphorylation at T592 also regulates LINE-1 restriction, tying the retroelement and genome-stability ' +
      'arms to the same residue.',
    samhd1: 'The p-T592/total-SAMHD1 RATIO — not total protein — is proposed as a therapeutic monitoring biomarker. ' +
      'It is the readout that would catch amlexanox starving the genome-stability arm while it improves inflammation.',
    refs: ['herrmann2018', 'doc10arm'],
  },
  {
    id: 'samhd1-mito', label: 'SAMHD1 (mitochondrial pool)', full: 'Mitochondrion-localised SAMHD1',
    compartment: 'mitochondrion', klass: 'restrict', pathways: ['samhd1', 'mito'],
    pos: [40, 12, 36], lod: 1, evidence: 'S',
    summary: 'Diaz-Griffero\'s group showed SAMHD1 must be present INSIDE the mitochondrial compartment to prevent ΔΨm collapse and mtDNA release.',
    detail: 'This finding matters because it makes the mitochondrial arm a direct, local SAMHD1 function rather than ' +
      'a downstream consequence of cytosolic dNTP excess.',
    refs: ['rabinowitz2025', 'xu2023vdac1'],
  },

  // ── The dNTP pool ────────────────────────────────────────────────────
  {
    id: 'dntp-pool', label: 'cytosolic dNTP pool', full: 'Cytosolic deoxynucleoside triphosphate pool (dATP, dCTP, dGTP, dTTP)',
    compartment: 'cytosol', klass: 'metabolite', pathways: ['samhd1', 'metabolic', 'genome', 'retro'],
    pos: [18, 10, 44], lod: 1, evidence: 'S', key: true,
    summary: 'Elevated 40–60% by dNTPase failure, with a disproportionate dGTP skew. The single upstream quantity from which four streams descend.',
    detail: 'Four streams descend from this one number:\n' +
      '  PURPLE — PNC1/PNC2 overload → POLG stalling → ox-mtDNA → NLRP3 (Loop B)\n' +
      '  BLUE   — mtDNA escape via VDAC1 → cGAS (Loop A bridge)\n' +
      '  RED    — IFN-I → JAK-STAT → ISGs → mitophagy block, ETC suppression\n' +
      '  GOLD   — dG catabolism → uric acid → MSU crystals → NLRP3 (second Loop B input)',
    samhd1: 'Measured by LC-MS/MS. This is the first-line Arm 1 readout, and the cheapest decisive experiment in the ' +
      'programme: a 40–60% elevation in primary heterozygous cells would establish that haploinsufficiency alone ' +
      'perturbs the pool, which no published work has yet shown.',
    refs: ['franzolin2013', 'docSiege', 'doc10arm'],
  },

  // ── Genome stability arm ─────────────────────────────────────────────
  {
    id: 'fork', label: 'stalled replication fork', full: 'Stalled or reversed DNA replication fork',
    compartment: 'nucleus', klass: 'structure', pathways: ['genome'],
    pos: [-44, -12, -24], lod: 1, evidence: 'S', key: true,
    summary: 'SAMHD1 acts at stalled forks to prevent interferon induction — a nuclear, dNTPase-independent function.',
    detail: 'Coquel et al. showed SAMHD1 recruits MRE11 to degrade nascent DNA at stalled forks in a controlled way. ' +
      'Without it, the fork collapses instead, and the resulting single-stranded DNA fragments are released into the ' +
      'cytosol where cGAS binds them. This is interferon induction with no mitochondrion and no retroelement involved.',
    refs: ['coquel2018', 'park2021'],
  },
  {
    id: 'mre11', label: 'MRE11', full: 'Meiotic recombination 11 — MRN complex nuclease',
    compartment: 'nucleus', klass: 'enzyme', pathways: ['genome'],
    pos: [-58, -14, -22], lod: 2, evidence: 'S',
    summary: 'Recruited by SAMHD1 for controlled nascent-strand degradation at stalled forks.',
    refs: ['coquel2018'],
  },
  {
    id: 'ctip', label: 'CtIP', full: 'CtBP-interacting protein (RBBP8) — end-resection initiator',
    compartment: 'nucleus', klass: 'enzyme', pathways: ['genome'],
    pos: [-52, -6, -30], lod: 1, evidence: 'S',
    summary: 'SAMHD1 recruits CtIP to double-strand breaks to initiate resection for homologous recombination.',
    detail: 'This is a scaffolding function entirely independent of dNTPase activity — which is why the genome-stability ' +
      'arm can fail even when residual enzymatic activity looks adequate.',
    refs: ['daddacha2017'],
  },
  {
    id: 'dsb', label: 'DNA double-strand break', full: 'DSB requiring homologous recombination or NHEJ',
    compartment: 'nucleus', klass: 'structure', pathways: ['genome'],
    pos: [-48, -20, -18], lod: 2, evidence: 'S',
    summary: 'Repair choice here determines whether the cell keeps its genome or accumulates rearrangements.',
  },
  {
    id: 'rloop', label: 'R-loops', full: 'RNA:DNA hybrid with a displaced single DNA strand',
    compartment: 'nucleus', klass: 'structure', pathways: ['genome', 'retro'],
    pos: [-38, -18, -16], lod: 1, evidence: 'S',
    summary: 'SAMHD1 prevents R-loop formation; accumulation drives transcription–replication conflict and breaks.',
    detail: 'Quantified by S9.6 immunofluorescence — a primary readout in the study and a safety signal in Arm 5, where ' +
      'amlexanox may worsen it by suppressing IRF3-driven SAMHD1 transcription.',
    refs: ['park2021', 'doc10arm'],
  },
  {
    id: 'ssdna', label: 'cytosolic ssDNA fragments', full: 'Single-stranded DNA released from collapsed forks and resected breaks',
    compartment: 'cytosol', klass: 'ligand', pathways: ['genome', 'cgas-sting'],
    pos: [-24, -16, 12], lod: 1, evidence: 'S',
    summary: 'The genomic contribution to the cGAS ligand pool — parallel to the mitochondrial and retroelement routes.',
    detail: 'The Arm 7 vs Arm 8 comparison is designed to size this stream: if cGAS inhibition (Arm 8) suppresses ISGs ' +
      'more deeply than VDAC1 blockade (Arm 7), a non-mitochondrial DNA source — this one — is contributing ' +
      'meaningfully.',
    refs: ['coquel2018', 'doc10arm'],
  },
  {
    id: 'genomic-instability', label: 'genomic instability', full: 'Cumulative replication error, HR failure and retroelement mutagenesis',
    compartment: 'nucleus', klass: 'outcome', pathways: ['genome', 'clinical'],
    pos: [-34, -30, -24], lod: 1, evidence: 'S',
    summary: 'Three converging pressures: elevated dNTP replication error load, impaired HR, and retroelement insertion burden.',
    samhd1: 'Translates into a cancer-surveillance rationale rather than a claim of present malignancy: prostate ' +
      '(BIK + SAMHD1 co-segregating susceptibility), colorectal (heterozygous SAMHD1 mutations), and haematological ' +
      'risk from SAMHD1\'s canonical tumour-suppressor role in myeloid and lymphoid lineages. It is also the reason ' +
      'the framework treats amlexanox as a tradeoff rather than a free anti-inflammatory.',
    refs: ['pavlovich2025', 'daddacha2017', 'docConcept'],
  },
];

export const edges = [
  // ── The variant
  { from: 'a565t', to: 'samhd1', kind: 'inhibit', label: '2.4× reduced protein stability; ~40–60% residual dNTPase (one functional allele)', pathways: ['samhd1'], evidence: 'S', refs: ['schneider2022', 'rentoft2016'] },
  { from: 'samhd1', to: 'samhd1-t592', kind: 'phos', label: 'CDK1/2–cyclin A phospho-switch', pathways: ['samhd1', 'genome'], evidence: 'S', refs: ['herrmann2018'] },
  { from: 'samhd1', to: 'samhd1-mito', kind: 'translocate', label: 'mitochondrial pool — required in situ', pathways: ['samhd1', 'mito'], evidence: 'S', refs: ['rabinowitz2025'] },

  // ── Brake 0: the dNTP pool itself
  { from: 'samhd1', to: 'dntp-pool', kind: 'inhibit', label: 'dNTP triphosphohydrolase — the primary restriction', pathways: ['samhd1', 'metabolic'], evidence: 'S', refs: ['franzolin2013', 'ji2014'] },
  { from: 'dntp-pool', to: 'pnc1', kind: 'drive', label: 'cytosolic excess floods the inner-membrane carriers', pathways: ['samhd1', 'mito', 'metabolic'], evidence: 'I', refs: ['dolce2001', 'liu2026nlrp3'] },
  { from: 'dntp-pool', to: 'pnc2', kind: 'drive', pathways: ['mito'], evidence: 'I' },
  { from: 'dntp-pool', to: 'urate', kind: 'produce', label: 'GOLD stream — dG catabolism → purine degradation → urate retention', pathways: ['inflammasome', 'metabolic'], evidence: 'I', loop: 'B', refs: ['martinon2006'] },
  { from: 'dntp-pool', to: 'fork', kind: 'drive', label: 'unbalanced pools raise replication error rate', pathways: ['genome'], evidence: 'S' },

  // ── Brake 1: IRF7 (the first failed brake)
  { from: 'samhd1', to: 'irf7', kind: 'inhibit', label: 'BRAKE 1 — occupies the IRF7 inhibitory domain, blocking IKKε phosphorylation', pathways: ['samhd1', 'cgas-sting'], evidence: 'S', refs: ['espada2023'] },

  // ── Brake 2/3: NF-κB and MAVS
  { from: 'samhd1', to: 'nfkb', kind: 'inhibit', label: 'BRAKE 4 — direct suppression of the NF-κB pathway', pathways: ['samhd1', 'nfkb'], evidence: 'S', refs: ['wang2018'] },
  { from: 'samhd1', to: 'mavs', kind: 'inhibit', label: 'impairs IFN-I induction through the MAVS–IKKε–IRF3/7 axis', pathways: ['samhd1', 'rlr-mavs'], evidence: 'S', refs: ['espada2023'] },
  { from: 'samhd1', to: 'ikke', kind: 'inhibit', pathways: ['samhd1'], evidence: 'S', refs: ['espada2023'] },

  // ── Mitochondrial brake
  { from: 'samhd1-mito', to: 'vdac1', kind: 'bind', label: 'physical interaction on the outer membrane', pathways: ['samhd1', 'mito'], evidence: 'S', refs: ['xu2023vdac1'] },
  // The binding above is a FACT; this edge is the FUNCTION. Modelling the
  // restraint only as `bind` made the variant trace as CLOSING the macropore
  // (bind is positive), inverting the framework's central mitochondrial claim.
  { from: 'samhd1-mito', to: 'vdac1-oligo', kind: 'inhibit', label: 'the interaction RESTRAINS oligomerisation — losing it is what opens the macropore', pathways: ['samhd1', 'mito', 'cgas-sting'], evidence: 'S', loop: 'A', refs: ['xu2023vdac1', 'rabinowitz2025'] },
  { from: 'samhd1-mito', to: 'deltapsi', kind: 'activate', label: 'presence in the compartment preserves ΔΨm', pathways: ['samhd1', 'mito'], evidence: 'S', refs: ['rabinowitz2025'] },
  { from: 'samhd1', to: 'bik', kind: 'activate', label: 'SAMHD1 directly upregulates BIK in THP-1 cells', pathways: ['samhd1', 'mito'], evidence: 'S', refs: ['yang2025bik'] },
  { from: 'samhd1', to: 'mtor', kind: 'inhibit', label: 'SAMHD1 → mTOR → MITF → CTSD autophagy-lysosomal axis', pathways: ['samhd1', 'mitophagy'], evidence: 'I', refs: ['yaxian2025'] },

  // ── Genome-stability arm
  { from: 'samhd1-t592', to: 'ctip', kind: 'activate', label: 'recruits CtIP for end resection → homologous recombination', pathways: ['samhd1', 'genome'], evidence: 'S', refs: ['daddacha2017'] },
  { from: 'samhd1-t592', to: 'mre11', kind: 'activate', label: 'controlled nascent-strand degradation at stalled forks', pathways: ['samhd1', 'genome'], evidence: 'S', refs: ['coquel2018'] },
  { from: 'samhd1-t592', to: 'rloop', kind: 'inhibit', label: 'prevents R-loop formation', pathways: ['samhd1', 'genome'], evidence: 'S', refs: ['park2021'] },
  { from: 'ctip', to: 'dsb', kind: 'inhibit', label: 'resection commits the break to homologous recombination — i.e. resolves it', pathways: ['genome'], evidence: 'S' },
  { from: 'mre11', to: 'fork', kind: 'inhibit', label: 'fork protection — controlled resection prevents collapse', pathways: ['genome'], evidence: 'S' },
  { from: 'fork', to: 'ssdna', kind: 'produce', label: 'collapse → immunogenic ssDNA fragments into the cytosol', pathways: ['genome', 'cgas-sting'], evidence: 'S', refs: ['coquel2018'] },
  { from: 'rloop', to: 'dsb', kind: 'drive', label: 'transcription–replication conflict', pathways: ['genome'], evidence: 'S' },
  { from: 'dsb', to: 'genomic-instability', kind: 'drive', pathways: ['genome'], evidence: 'S' },
  { from: 'l1-insertion', to: 'genomic-instability', kind: 'drive', label: 'retroelement mutagenic burden', pathways: ['genome', 'retro'], evidence: 'I' },
  { from: 'dntp-pool', to: 'genomic-instability', kind: 'drive', label: 'replication error load', pathways: ['genome'], evidence: 'S' },
  { from: 'ssdna', to: 'cgas', kind: 'sense', label: 'genomic contribution to the cGAS ligand pool', pathways: ['genome', 'cgas-sting'], evidence: 'S', loop: 'A' },
  { from: 'dsb', to: 'micronucleus', kind: 'produce', pathways: ['genome'], evidence: 'G' },

  // ── The one protective loop, and why it fails
  { from: 'irf3', to: 'samhd1', kind: 'produce', label: 'IRF3 induces SAMHD1 transcription — the "upward" therapeutic direction (Arms 3–4)', pathways: ['samhd1', 'cgas-sting'], evidence: 'S', bend: 0.4, refs: ['yang2016irf3'] },
];
