/**
 * sensing.js — cytosolic and endosomal nucleic-acid sensing, the ANKIB1 K11-Ub
 * gain-control node, the TBK1/IRF3/IRF7 scaffold, and NF-κB.
 *
 * This is Loop A's upstream half plus the shared signalling spine that every
 * other module plugs into.
 */

export const nodes = [
  // ── Cytosolic DNA sensing ────────────────────────────────────────────
  {
    id: 'cgas', label: 'cGAS', full: 'Cyclic GMP-AMP synthase (MB21D1)',
    compartment: 'cytosol', klass: 'sensor', pathways: ['cgas-sting'],
    pos: [26, 6, 48], lod: 1, evidence: 'S', key: true,
    summary: 'Length-dependent cytosolic dsDNA sensor. Binds DNA as a 2:2 ladder and switches on its nucleotidyl-transferase activity.',
    detail: 'cGAS does not care where the DNA came from — only that it is double-stranded and in the cytosol. ' +
      'In SAMHD1-deficient cells the cytosolic DNA is overwhelmingly mitochondrial, and the entire ISG signature ' +
      'is cGAS-dependent: double knockout of SAMHD1 + cGAS abolishes ISGs, and IMSB301 normalises the ISG signature ' +
      'in AGS PBMCs.',
    samhd1: 'A565T haploinsufficiency supplies cGAS with three ligand streams at once: mtDNA fragments through the ' +
      'VDAC1 macropore, ssDNA fragments from collapsed replication forks, and LINE-1 cDNA that escaped restriction. ' +
      'This is the entry point of Loop A.',
    drugs: ['imsb301'], refs: ['west2015', 'han2026', 'rabinowitz2025', 'coquel2018'],
  },
  {
    id: 'cgamp', label: '2′3′-cGAMP', full: 'Cyclic GMP-AMP, the cGAS second messenger',
    compartment: 'cytosol', klass: 'metabolite', pathways: ['cgas-sting'],
    pos: [16, 16, 42], lod: 1, evidence: 'G',
    summary: 'Non-canonical 2′-5′/3′-5′ cyclic dinucleotide; the highest-affinity endogenous STING agonist known.',
    detail: 'cGAMP also passes to neighbouring cells through gap junctions and via SLC19A1 import, which is how one ' +
      'stressed cell can raise the interferon tone of a whole tissue field.',
    refs: ['ablasser2013'],
  },
  {
    id: 'sting', label: 'STING', full: 'Stimulator of interferon genes (TMEM173 / STING1)',
    compartment: 'er', klass: 'adaptor', pathways: ['cgas-sting', 'ankib1'],
    pos: [4, 30, 36], lod: 1, evidence: 'S', key: true,
    summary: 'ER-resident dimer. cGAMP binding closes its ligand-binding lid, triggering polymerisation and ER exit.',
    detail: 'Activated STING traffics ER → ERGIC → Golgi. Only after it reaches the ERGIC does its C-terminal tail ' +
      'recruit TBK1 in a way that permits IRF3 phosphorylation — trafficking is part of the switch, not incidental to it.',
    samhd1: 'STING is one of the five ANKIB1 K11-Ub substrates held constitutively primed by SAMHD1 loss. Primed STING ' +
      'lowers the threshold for TBK1/IRF3 scaffold assembly, producing tonic rather than pulsatile interferon.',
    refs: ['betrancourt2026', 'ng2024'],
  },
  {
    id: 'sting-golgi', label: 'STING°(Golgi)', full: 'Palmitoylated STING at the ERGIC/Golgi — the signalling-competent pool',
    compartment: 'er', klass: 'adaptor', pathways: ['cgas-sting'],
    pos: [18, 36, 26], lod: 2, evidence: 'G',
    summary: 'Palmitoylation at Cys88/91 clusters STING into signalling-competent microdomains on Golgi membranes.',
    detail: 'This step is where the covalent-inhibitor class (H-151, nitrofurans) acts, and it is the reason STING ' +
      'signalling is terminated by lysosomal degradation rather than by dephosphorylation.',
  },

  // ── Cytosolic RNA sensing ────────────────────────────────────────────
  {
    id: 'rigi', label: 'RIG-I', full: 'Retinoic acid-inducible gene I (DDX58)',
    compartment: 'cytosol', klass: 'sensor', pathways: ['rlr-mavs'],
    pos: [-6, -22, 54], lod: 1, evidence: 'G',
    summary: 'Senses short 5′-triphosphate blunt-ended dsRNA — the signature of viral replication intermediates.',
    detail: 'ATP-driven translocation along duplex RNA releases the CARD domains from autorepression; the freed CARDs ' +
      'nucleate MAVS filaments in a prion-like manner.',
    refs: ['espada2023'],
  },
  {
    id: 'mda5', label: 'MDA5', full: 'Melanoma differentiation-associated protein 5 (IFIH1)',
    compartment: 'cytosol', klass: 'sensor', pathways: ['rlr-mavs', 'retro'],
    pos: [8, -18, 56], lod: 1, evidence: 'S', key: true,
    summary: 'Senses long duplex RNA by cooperative filament assembly. The retroelement sensor of the RLR family.',
    detail: 'MDA5 has no end-recognition mechanism — it polymerises along the length of a duplex, so it reads duplex ' +
      'LENGTH as the danger signal. Its physiological self-antigen problem is Alu inverted-repeat dsRNA in 3′UTRs, ' +
      'which ADAR1 p150 must continuously edit to keep below the MDA5 threshold. IFIH1 gain-of-function is AGS7; ' +
      'ADAR1 loss is AGS6. Both converge on this node.',
    samhd1: 'SAMHD1 deficiency activates MDA5 in a cGAS/STING-INDEPENDENT manner — a genuinely separate arm from ' +
      'Loop A. SAMHD1 normally sequesters immunostimulatory dsRNA in LLPS condensates; losing that sequestration ' +
      'exposes duplex RNA that MDA5 reads as viral.',
    refs: ['schumann2023', 'ahmad2018', 'liddicoat2015', 'ricemda5'],
  },
  {
    id: 'lgp2', label: 'LGP2', full: 'Laboratory of genetics and physiology 2 (DHX58)',
    compartment: 'cytosol', klass: 'sensor', pathways: ['rlr-mavs'],
    pos: [16, -26, 52], lod: 2, evidence: 'G',
    summary: 'CARD-less RLR that tunes MDA5 filament nucleation — accelerates it at low levels, caps it at high levels.',
  },
  {
    id: 'dsrna-cyt', label: 'cytosolic dsRNA', full: 'Immunostimulatory cytosolic double-stranded RNA',
    compartment: 'cytosol', klass: 'ligand', pathways: ['rlr-mavs', 'retro'],
    pos: [0, -12, 62], lod: 1, evidence: 'S',
    summary: 'Mixed pool: Alu inverted repeats, mitochondrial bidirectional transcripts, HERV transcripts, viral replication intermediates.',
    samhd1: 'SAMHD1 normally holds this pool inside LLPS condensates. Haploinsufficiency releases it into free solution ' +
      'where MDA5 can polymerise on it.',
    refs: ['schumann2023', 'ahmad2018'],
  },
  {
    id: 'mtdsrna', label: 'mito dsRNA', full: 'Mitochondrial bidirectional-transcription double-stranded RNA',
    compartment: 'mitochondrion', klass: 'ligand', pathways: ['rlr-mavs', 'mito'],
    pos: [44, 8, 34], lod: 2, evidence: 'I',
    summary: 'Both mtDNA strands are transcribed fully; the resulting complementary RNAs form duplexes that PNPASE and SUV3 normally degrade.',
    detail: 'When mitochondrial RNA-degradosome capacity is exceeded, mito-dsRNA escapes to the cytosol and is read by ' +
      'MDA5 — stressor S5 in the Convergent Mitochondrial Catastrophe figure.',
    refs: ['docSiege'],
  },

  // ── MAVS platforms ───────────────────────────────────────────────────
  {
    id: 'mavs', label: 'MAVS', full: 'Mitochondrial antiviral-signalling protein (IPS-1 / VISA / Cardif)',
    compartment: 'mitochondrion', klass: 'adaptor', pathways: ['rlr-mavs', 'mito'],
    pos: [38, 14, 32], lod: 1, evidence: 'S', key: true,
    summary: 'Tail-anchored in the outer mitochondrial membrane. RLR CARDs seed self-propagating MAVS prion-like filaments.',
    detail: 'MAVS is why RNA sensing is a mitochondrial event. Filament assembly is all-or-nothing and requires an intact ' +
      'membrane potential — which links ΔΨm collapse directly to signalling competence.',
    samhd1: 'SAMHD1 impairs type I IFN induction through the MAVS–IKKε–IRF3/7 axis; losing it de-represses this platform ' +
      'at the same time as the mitochondrion beneath it is being damaged.',
    refs: ['espada2023'],
  },
  {
    id: 'mavs-perox', label: 'MAVS (peroxisomal)', full: 'Peroxisomal MAVS pool',
    compartment: 'peroxisome', klass: 'adaptor', pathways: ['rlr-mavs'],
    pos: [58, 36, -34], lod: 1, evidence: 'G',
    summary: 'Drives rapid, IFN-independent ISG expression; the mitochondrial pool supplies the slower type-I IFN amplitude.',
    detail: 'Two platforms, two kinetics: peroxisomal MAVS gives an immediate local antiviral state, mitochondrial MAVS ' +
      'gives the systemic interferon wave. Only the mitochondrial pool is degraded by mitochondrial injury.',
  },
  {
    id: 'traf3', label: 'TRAF3', full: 'TNF receptor-associated factor 3',
    compartment: 'cytosol', klass: 'adaptor', pathways: ['rlr-mavs', 'tlr'],
    pos: [30, 20, 40], lod: 2, evidence: 'G',
    summary: 'K63-Ub ligase that couples MAVS and TRIF to the TBK1/IKKε arm (IRF branch).',
  },
  {
    id: 'traf6', label: 'TRAF6', full: 'TNF receptor-associated factor 6',
    compartment: 'cytosol', klass: 'adaptor', pathways: ['rlr-mavs', 'tlr', 'nfkb'],
    pos: [38, -12, 44], lod: 2, evidence: 'G',
    summary: 'K63-Ub ligase that couples MAVS/MyD88 to the IKK complex (NF-κB branch).',
  },

  // ── Endosomal TLRs ───────────────────────────────────────────────────
  {
    id: 'tlr3', label: 'TLR3', full: 'Toll-like receptor 3',
    compartment: 'endosome', klass: 'receptor', pathways: ['tlr'],
    pos: [-26, -32, 52], lod: 1, evidence: 'S', key: true,
    summary: 'Endosomal dsRNA receptor. The only TLR that signals exclusively through TRIF.',
    detail: 'TLR3 → TRIF → TBK1 → IRF3 is also the arm that INDUCES SAMHD1 transcription. That makes it the ' +
      '“upward” therapeutic direction: poly-ICLC agonism raises SAMHD1 protein in a haploinsufficient cell.',
    samhd1: 'A two-phase onset — prodromal immune fragility, then a full phenotype precipitated by acute viral ' +
      'infection — is read as the TLR3→IRF3→SAMHD1 loop failing to terminate the innate response after viral ' +
      'clearance. Losing the induction arm means the response has no scheduled end.',
    drugs: ['polyiclc'], refs: ['yang2016irf3', 'doc10arm', 'che2025'],
  },
  {
    id: 'tlr7', label: 'TLR7/8', full: 'Toll-like receptors 7 and 8 — endosomal ssRNA sensors',
    compartment: 'endosome', klass: 'receptor', pathways: ['tlr', 'retro'],
    pos: [-38, -42, 46], lod: 2, evidence: 'G',
    summary: 'Sense GU-rich ssRNA including HERV and LINE-1 transcripts delivered by autophagy or phagocytosis.',
  },
  {
    id: 'tlr9', label: 'TLR9', full: 'Toll-like receptor 9 — endosomal unmethylated CpG DNA sensor',
    compartment: 'endosome', klass: 'receptor', pathways: ['tlr'],
    pos: [-24, -48, 44], lod: 2, evidence: 'G',
    summary: 'Senses hypomethylated CpG DNA — including mtDNA, which is bacterially hypomethylated by ancestry.',
    detail: 'Mitochondrial DNA released from dying cells is a TLR9 agonist as well as a cGAS ligand: the same molecule ' +
      'drives two receptors in two compartments.',
  },
  {
    id: 'tlr4', label: 'TLR4', full: 'Toll-like receptor 4 (LPS / DAMP receptor)',
    compartment: 'membrane', klass: 'receptor', pathways: ['tlr', 'nfkb'],
    pos: [8, 64, 36], lod: 1, evidence: 'S',
    summary: 'Surface receptor using both MyD88 (NF-κB) and, after endocytosis, TRIF (IRF3). The canonical NLRP3 priming signal.',
    samhd1: 'TLR4 engagement triggers interferon-independent G0 arrest with SAMHD1-dependent dNTP depletion — a normal ' +
      'response that a haploinsufficient cell cannot execute properly.',
    refs: ['mlcochova2020', 'betrancourt2026'],
  },
  {
    id: 'trif', label: 'TRIF', full: 'TIR-domain-containing adapter-inducing IFN-β (TICAM1)',
    compartment: 'endosome', klass: 'adaptor', pathways: ['tlr', 'ankib1'],
    pos: [-18, -28, 56], lod: 1, evidence: 'S',
    summary: 'The IRF3-directing TLR adaptor; also a bona fide ANKIB1 K11-Ub substrate.',
    samhd1: 'Reduced SAMHD1-mediated negative feedback leaves TRIF constitutively K11-primed — one of the five substrates ' +
      'that lowers the TBK1/IRF3 assembly threshold.',
    refs: ['betrancourt2026'],
  },
  {
    id: 'myd88', label: 'MyD88', full: 'Myeloid differentiation primary response 88',
    compartment: 'endosome', klass: 'adaptor', pathways: ['tlr', 'nfkb'],
    pos: [-40, -34, 40], lod: 2, evidence: 'G',
    summary: 'Assembles the Myddosome with IRAK4/IRAK1 → TRAF6 → NF-κB, and in pDCs → IRF7 directly.',
  },
  {
    id: 'irak14', label: 'IRAK4/1', full: 'Interleukin-1 receptor-associated kinases 4 and 1',
    compartment: 'endosome', klass: 'kinase', pathways: ['tlr', 'nfkb'],
    pos: [-46, -40, 36], lod: 2, evidence: 'G',
    summary: 'Myddosome kinases; IRAK1 phosphorylates IRF7 directly in the plasmacytoid dendritic-cell IFN burst.',
  },

  // ── ANKIB1 K11-ubiquitin gain-control node ───────────────────────────
  {
    id: 'ankib1', label: 'ANKIB1', full: 'Ankyrin repeat and IBR domain-containing 1 — K11-Ub E3 ligase',
    compartment: 'cytosol', klass: 'enzyme', pathways: ['ankib1', 'cgas-sting', 'tlr'],
    pos: [6, 22, 8], lod: 1, evidence: 'G', key: true,
    summary: 'Assembles K11-linked ubiquitin chains on STING, TRIF, NEMO, OPTN — and on itself. The gain-control knob of the whole system.',
    detail: 'Betrancourt/Rieser/Walczak (Nat Cell Biol 2026) established K11 ubiquitination as the linkage that drives ' +
      'type-I/III interferon induction downstream of both cGAS–STING and TLR3/4. ANKIB1 is not a terminal effector — it ' +
      'sets the THRESHOLD at which TBK1/IRF3 scaffolds assemble. That is why the resulting phenotype is a moderate, ' +
      'unrelenting tonic interferon output rather than discrete cytokine surges.',
    samhd1: 'This is the framework\'s central gain-control claim. SAMHD1 loss primes all five substrates at once: dNTPase ' +
      'failure primes STING via cGAS, reduced negative feedback primes TRIF, reduced NF-κB suppression primes NEMO. ' +
      'Worse, ANKIB1 AUTO-ubiquitinates during activation and is degraded by the proteasome — so the master negative ' +
      'regulator destroys itself exactly when it is needed most. A self-terminating feedback controller cannot hold ' +
      'homeostasis under chronic drive. Predicted readout: ANKIB1 protein REDUCED at baseline in A565T cells, restored ' +
      'by amlexanox (Arms 5–6) but NOT by upadacitinib (Arm 2).',
    refs: ['betrancourt2026', 'doc10arm', 'docConcept'],
  },
  {
    id: 'k11ub', label: 'K11-Ub chains', full: 'Lysine-11-linked polyubiquitin — the interferon-permissive linkage',
    compartment: 'cytosol', klass: 'metabolite', pathways: ['ankib1'],
    pos: [12, 28, 2], lod: 1, evidence: 'G',
    summary: 'Distinct from K48 (degradation) and K63 (canonical signalling). K11 loading on the five substrates lowers scaffold-assembly threshold.',
    detail: 'Measurable with linkage-specific antibodies (clone 2A3/2E6) or K11-TUBE reagents — which is what makes ' +
      'K11-Ub/STING loading a candidate patient-stratification biomarker rather than a purely theoretical node.',
    refs: ['betrancourt2026', 'doc10arm'],
  },
  {
    id: 'optn', label: 'OPTN', full: 'Optineurin — TBK1 scaffold recruiter and mitophagy receptor',
    compartment: 'cytosol', klass: 'adaptor', pathways: ['ankib1', 'mitophagy'],
    pos: [18, 34, 12], lod: 1, evidence: 'G',
    summary: 'Dual role: recruits TBK1 into signalling scaffolds, and acts as an autophagy receptor on ubiquitinated mitochondria.',
    detail: 'OPTN sits at the exact junction where this disease turns on itself — the same protein that amplifies ' +
      'interferon signalling is the one needed to clear the damaged mitochondria producing the ligands.',
    refs: ['betrancourt2026'],
  },
  {
    id: 'nemo', label: 'NEMO', full: 'NF-κB essential modulator (IKKγ)',
    compartment: 'cytosol', klass: 'adaptor', pathways: ['nfkb', 'ankib1'],
    pos: [-2, -10, 26], lod: 1, evidence: 'G',
    summary: 'Regulatory subunit of the IKK complex; ubiquitin-chain receptor and ANKIB1 K11-Ub substrate.',
    samhd1: 'Loss of SAMHD1\'s NF-κB-suppressive function leaves NEMO constitutively primed — the third of the five ' +
      'ANKIB1 substrates.',
    refs: ['wang2018', 'betrancourt2026'],
  },

  // ── The TBK1 / IRF axis ──────────────────────────────────────────────
  {
    id: 'tbk1', label: 'TBK1', full: 'TANK-binding kinase 1',
    compartment: 'cytosol', klass: 'kinase', pathways: ['cgas-sting', 'rlr-mavs', 'tlr', 'ankib1'],
    pos: [12, 26, 22], lod: 1, evidence: 'S', key: true,
    summary: 'The master switch linking every upstream sensor to IRF3/IRF7 transactivation. Trans-autophosphorylates at Ser172.',
    detail: 'TBK1 activation requires clustering on a scaffold, not simple ligand binding — which is precisely why ' +
      'K11-Ub priming of the scaffold components is a gain-control mechanism rather than an on/off switch.',
    samhd1: 'p-TBK1(Ser172) is unaffected by JAK1 inhibition, making it the cleanest pharmacologic separator across the ' +
      'study arms: it moves with amlexanox (Arms 5–6) and not with upadacitinib (Arm 2).',
    drugs: ['amlexanox'], refs: ['betrancourt2026', 'doc10arm', 'reilly2013'],
  },
  {
    id: 'ikke', label: 'IKKε', full: 'Inhibitor of κB kinase ε (IKBKE)',
    compartment: 'cytosol', klass: 'kinase', pathways: ['cgas-sting', 'rlr-mavs', 'ankib1', 'metabolic'],
    pos: [24, 28, 16], lod: 1, evidence: 'S',
    summary: 'TBK1 paralogue; the dominant IRF7 kinase and an independent driver of metabolic inflammation.',
    detail: 'Reilly et al. showed TBK1/IKKε inhibition improves obesity-related metabolic dysfunction — which is why ' +
      'amlexanox lands on both the interferon and the metabolic arms of this phenotype at once.',
    samhd1: 'SAMHD1 occupies IRF7\'s inhibitory domain and physically prevents IKKε-mediated phosphorylation. ' +
      'Haploinsufficiency removes that block, so IKKε phosphorylates IRF7 constitutively.',
    drugs: ['amlexanox'], refs: ['espada2023', 'reilly2013', 'bjork2025'],
  },
  {
    id: 'irf3', label: 'IRF3', full: 'Interferon regulatory factor 3',
    compartment: 'cytosol', klass: 'tf', pathways: ['cgas-sting', 'rlr-mavs', 'tlr'],
    pos: [-2, 16, 6], lod: 1, evidence: 'S', key: true,
    summary: 'Constitutively expressed first-wave IFN transcription factor. Phosphorylation → dimerisation → nuclear import.',
    detail: 'IRF3 drives IFN-β (IFNB1) and a subset of ISGs directly, without needing new protein synthesis — it is the ' +
      'immediate response. It also drives SAMHD1 transcription, closing a normally protective loop.',
    samhd1: 'The IRF3→SAMHD1 induction arm is the therapeutic "upward" direction (Arms 3–4). It is also the reason ' +
      'amlexanox carries a genome-stability tradeoff: suppressing IRF3 lowers SAMHD1 transcription in a cell that is ' +
      'already haploinsufficient.',
    refs: ['yang2016irf3', 'doc10arm'],
  },
  {
    id: 'irf7', label: 'IRF7', full: 'Interferon regulatory factor 7 — the amplification-loop factor',
    compartment: 'cytosol', klass: 'tf', pathways: ['cgas-sting', 'tlr', 'metabolic'],
    pos: [-10, 4, 16], lod: 1, evidence: 'S', key: true,
    summary: 'The second-wave amplifier: itself an ISG, so once interferon starts, IRF7 rises and drives more interferon.',
    detail: 'IRF7 is the master regulator of the IFN-α subtypes. Because IRF7 is interferon-inducible, IRF3 → IFN-β → ' +
      'IFNAR → IRF7 → IFN-α is a positive-feedback amplifier with no intrinsic ceiling except its brakes.',
    samhd1: 'SAMHD1 physically occupies IRF7\'s inhibitory domain. This is Brake 1 of the four failed brakes: ' +
      'haploinsufficiency removes IRF7 restraint, giving constitutive second-wave interferon. IRF7 also transactivates ' +
      'MCP-1 SPECIFICALLY in visceral adipocytes — the mechanistic link from an immune gene to android-pattern ' +
      'adiposity and diet-refractory steatosis.',
    refs: ['espada2023', 'kuroda2020', 'li2013irf7', 'docConcept'],
  },

  // ── NF-κB arm ────────────────────────────────────────────────────────
  {
    id: 'ikk', label: 'IKKβ', full: 'Inhibitor of κB kinase beta (IKBKB) — the canonical catalytic subunit',
    compartment: 'cytosol', klass: 'kinase', pathways: ['nfkb'],
    pos: [-8, -14, 22], lod: 1, evidence: 'G',
    summary: 'Phosphorylates IκBα on Ser32/36, marking it for K48-Ub and proteasomal destruction. The canonical arm runs through here; IKKα carries the non-canonical one.',
  },
  {
    id: 'ikba', label: 'IκBα', full: 'Nuclear factor of κB inhibitor alpha (NFKBIA)',
    compartment: 'cytosol', klass: 'structure', pathways: ['nfkb'],
    pos: [-16, -10, 18], lod: 2, evidence: 'G',
    summary: 'Masks the NF-κB nuclear localisation signal. Its degradation is the licensing step for NF-κB nuclear entry.',
    detail: 'IκBα is itself an NF-κB target gene, giving the pathway its classic oscillatory negative feedback — ' +
      'oscillation that a constitutively driven system flattens into a plateau.',
  },
  {
    id: 'nfkb', label: 'NF-κB p65/p50', full: 'Nuclear factor κB — RelA/p50 heterodimer',
    compartment: 'cytosol', klass: 'tf', pathways: ['nfkb', 'inflammasome'],
    pos: [-20, -18, 12], lod: 1, evidence: 'S', key: true,
    summary: 'Drives the NLRP3 priming signal (NLRP3 + pro-IL-1β transcription), IL-6, IL-23, TNF-α and IκBα.',
    detail: 'NF-κB is signal 1 of the two-signal inflammasome model. Without it, NLRP3 and pro-IL-1β are not present in ' +
      'sufficient quantity for signal 2 to matter.',
    samhd1: 'SAMHD1 suppresses innate immune responses by inhibiting the NF-κB pathway directly. Its loss is Brake 4 ' +
      'of the four failed brakes — de-suppressed IKK gives IL-1β/IL-23 → Th17 → the psoriatic arthritis axis.',
    refs: ['wang2018', 'swanson2019', 'docConcept'],
  },
];

export const edges = [
  // cGAS–STING core
  { from: 'cgas', to: 'cgamp', kind: 'produce', label: 'ATP + GTP → 2′3′-cGAMP', pathways: ['cgas-sting'], evidence: 'G', loop: 'A', refs: ['ablasser2013'] },
  { from: 'cgamp', to: 'sting', kind: 'activate', label: 'binds CDN pocket, closes lid', pathways: ['cgas-sting'], evidence: 'G', loop: 'A' },
  { from: 'sting', to: 'sting-golgi', kind: 'translocate', label: 'ER → ERGIC → Golgi trafficking', pathways: ['cgas-sting'], evidence: 'G' },
  { from: 'sting-golgi', to: 'tbk1', kind: 'activate', label: 'CTT recruits TBK1', pathways: ['cgas-sting'], evidence: 'G', loop: 'A' },
  { from: 'sting', to: 'tbk1', kind: 'activate', label: 'STING–TBK1 scaffold', pathways: ['cgas-sting'], evidence: 'S', loop: 'A' },
  { from: 'sting', to: 'nemo', kind: 'activate', label: 'STING → NF-κB branch', pathways: ['cgas-sting', 'nfkb'], evidence: 'G' },

  // RLR–MAVS
  { from: 'dsrna-cyt', to: 'mda5', kind: 'sense', label: 'long duplex → cooperative filament', pathways: ['rlr-mavs', 'retro'], evidence: 'S', refs: ['schumann2023'] },
  { from: 'dsrna-cyt', to: 'rigi', kind: 'sense', label: '5′ppp blunt end', pathways: ['rlr-mavs'], evidence: 'G' },
  { from: 'mtdsrna', to: 'mda5', kind: 'sense', label: 'mito dsRNA escape (stressor S5)', pathways: ['rlr-mavs', 'mito'], evidence: 'I', refs: ['docSiege'] },
  { from: 'lgp2', to: 'mda5', kind: 'activate', label: 'tunes filament nucleation', pathways: ['rlr-mavs'], evidence: 'G' },
  { from: 'mda5', to: 'mavs', kind: 'activate', label: 'CARD–CARD prion-like seeding', pathways: ['rlr-mavs'], evidence: 'S', refs: ['espada2023'] },
  { from: 'rigi', to: 'mavs', kind: 'activate', label: 'CARD–CARD seeding', pathways: ['rlr-mavs'], evidence: 'G' },
  { from: 'mda5', to: 'mavs-perox', kind: 'activate', label: 'peroxisomal platform — fast, IFN-independent ISGs', pathways: ['rlr-mavs'], evidence: 'G' },
  { from: 'mavs', to: 'traf3', kind: 'activate', pathways: ['rlr-mavs'], evidence: 'G' },
  { from: 'mavs', to: 'traf6', kind: 'activate', pathways: ['rlr-mavs', 'nfkb'], evidence: 'G' },
  { from: 'mavs-perox', to: 'traf3', kind: 'activate', pathways: ['rlr-mavs'], evidence: 'G' },
  { from: 'traf3', to: 'tbk1', kind: 'activate', label: 'K63-Ub scaffolding', pathways: ['rlr-mavs', 'tlr'], evidence: 'G' },
  { from: 'traf3', to: 'ikke', kind: 'activate', pathways: ['rlr-mavs'], evidence: 'S', refs: ['espada2023'] },
  { from: 'traf6', to: 'ikk', kind: 'activate', label: 'K63-Ub → TAK1 → IKK', pathways: ['nfkb'], evidence: 'G' },

  // TLR arm
  { from: 'tlr3', to: 'trif', kind: 'activate', label: 'TIR–TIR, TRIF-exclusive', pathways: ['tlr'], evidence: 'S' },
  { from: 'tlr4', to: 'trif', kind: 'activate', label: 'after endocytosis (TRAM-dependent)', pathways: ['tlr'], evidence: 'G' },
  { from: 'tlr4', to: 'myd88', kind: 'activate', label: 'surface, MAL-dependent', pathways: ['tlr', 'nfkb'], evidence: 'G' },
  { from: 'tlr7', to: 'myd88', kind: 'activate', pathways: ['tlr'], evidence: 'G' },
  { from: 'tlr9', to: 'myd88', kind: 'activate', pathways: ['tlr'], evidence: 'G' },
  { from: 'myd88', to: 'irak14', kind: 'activate', label: 'Myddosome assembly', pathways: ['tlr'], evidence: 'G' },
  { from: 'irak14', to: 'traf6', kind: 'activate', pathways: ['tlr', 'nfkb'], evidence: 'G' },
  { from: 'irak14', to: 'irf7', kind: 'phos', label: 'IRAK1 → IRF7 (pDC burst)', pathways: ['tlr'], evidence: 'G' },
  { from: 'trif', to: 'traf3', kind: 'activate', pathways: ['tlr'], evidence: 'G' },
  { from: 'trif', to: 'traf6', kind: 'activate', pathways: ['tlr', 'nfkb'], evidence: 'G' },

  // ANKIB1 K11-Ub node — the five substrates
  { from: 'ankib1', to: 'k11ub', kind: 'produce', label: 'assembles K11-linked chains', pathways: ['ankib1'], evidence: 'G', loop: 'ankib1', refs: ['betrancourt2026'] },
  { from: 'k11ub', to: 'sting', kind: 'ubiq', label: 'substrate 1 — primes STING', pathways: ['ankib1'], evidence: 'G', loop: 'ankib1' },
  { from: 'k11ub', to: 'trif', kind: 'ubiq', label: 'substrate 2 — primes TRIF', pathways: ['ankib1'], evidence: 'G', loop: 'ankib1' },
  { from: 'k11ub', to: 'nemo', kind: 'ubiq', label: 'substrate 3 — primes NEMO', pathways: ['ankib1'], evidence: 'G', loop: 'ankib1' },
  { from: 'k11ub', to: 'optn', kind: 'ubiq', label: 'substrate 4 — primes OPTN', pathways: ['ankib1'], evidence: 'G', loop: 'ankib1' },
  { from: 'k11ub', to: 'ankib1', kind: 'ubiq', label: 'substrate 5 — AUTO-ubiquitination → proteasomal self-destruction', pathways: ['ankib1'], evidence: 'G', loop: 'ankib1', bend: 0.4, refs: ['betrancourt2026', 'doc10arm'] },
  { from: 'optn', to: 'tbk1', kind: 'activate', label: 'OPTN recruits TBK1 to the scaffold', pathways: ['ankib1'], evidence: 'G', loop: 'ankib1' },

  // TBK1 → IRF
  { from: 'tbk1', to: 'irf3', kind: 'phos', label: 'Ser386/396 → dimerisation', pathways: ['cgas-sting', 'rlr-mavs', 'tlr'], evidence: 'S', loop: 'A' },
  { from: 'tbk1', to: 'irf7', kind: 'phos', pathways: ['cgas-sting', 'tlr'], evidence: 'S' },
  { from: 'ikke', to: 'irf7', kind: 'phos', label: 'dominant IRF7 kinase — blocked by SAMHD1 in health', pathways: ['cgas-sting', 'metabolic'], evidence: 'S', loop: 'irf7', refs: ['espada2023'] },
  { from: 'ikke', to: 'irf3', kind: 'phos', pathways: ['rlr-mavs'], evidence: 'G' },

  // NF-κB arm
  { from: 'nemo', to: 'ikk', kind: 'activate', label: 'ubiquitin-chain-dependent IKK activation', pathways: ['nfkb'], evidence: 'G' },
  { from: 'ikk', to: 'ikba', kind: 'phos', label: 'Ser32/36 → K48-Ub → proteasome', pathways: ['nfkb'], evidence: 'G' },
  { from: 'ikba', to: 'nfkb', kind: 'inhibit', label: 'masks NLS until degraded', pathways: ['nfkb'], evidence: 'G' },
  { from: 'ikk', to: 'nfkb', kind: 'activate', label: 'releases p65/p50', pathways: ['nfkb'], evidence: 'G' },
];
