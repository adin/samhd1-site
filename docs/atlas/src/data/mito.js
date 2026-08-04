/**
 * mito.js — the mitochondrion in full: outer membrane, inner membrane, matrix,
 * the two mtDNA escape routes, mitophagy failure, and bioenergetic collapse.
 *
 * This module encodes the eight stressors of the "Convergent Mitochondrial
 * Catastrophe" figure and the two-species / two-sensor / two-loop distinction
 * that is the sharpest claim in the project's mitochondrial manuscript:
 *
 *   ox-mtDNA (oxidised, POLG/dNTP route)      → NLRP3 → Loop B
 *   mtDNA fragments (VDAC1 macropore / mPTP)  → cGAS  → Loop A
 *
 * These are PARALLEL, not sequential. Blocking cGAS does not abolish NLRP3;
 * blocking NLRP3 does not suppress the ISG signature.
 *
 * Mitochondrion is centred at [52, -6, 24], long axis along +X, half-length 31,
 * radius 19. Sub-organelle nodes are lod:2 — they appear when you enter it.
 */

export const nodes = [
  // ── Outer mitochondrial membrane ─────────────────────────────────────
  {
    id: 'vdac1', label: 'VDAC1', full: 'Voltage-dependent anion channel 1 — outer-membrane porin',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito', 'cgas-sting'],
    pos: [58, 14, 26], lod: 1, evidence: 'S', key: true,
    summary: 'The most abundant outer-membrane protein and the gatekeeper of metabolite flux — and, when it oligomerises, of DNA escape.',
    detail: 'Monomeric VDAC1 passes ATP/ADP, NAD⁺ and Ca²⁺. Oligomeric VDAC1 forms a large-conductance macropore wide ' +
      'enough to pass mtDNA fragments into the cytosol. The switch between the two states is the single most ' +
      'therapeutically addressable event in this figure.',
    samhd1: 'SAMHD1 physically interacts with VDAC1 on the outer membrane, and Diaz-Griffero\'s group showed SAMHD1 ' +
      'must be present INSIDE the mitochondrial compartment to prevent ΔΨm collapse and mtDNA release. Losing that ' +
      'interaction opens the macropore. VBIT-4 in SAMHD1-KO monocytes prevents cytosolic mtDNA release and FULLY ' +
      'abolishes the spontaneous ISG response — which is the strongest single piece of evidence that Loop A is ' +
      'VDAC1-gated rather than oxidation-dependent.',
    drugs: ['vbit4'], refs: ['xu2023vdac1', 'rabinowitz2025', 'shoshan2020'],
  },
  {
    id: 'vdac1-oligo', label: 'VDAC1 macropore', full: 'Oligomerised VDAC1 — the large-conductance DNA-permissive pore',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito', 'cgas-sting'],
    pos: [70, 10, 30], lod: 1, evidence: 'S',
    summary: 'The primary constitutive mtDNA-fragment escape route in SAMHD1 haploinsufficiency.',
    detail: 'Driven by mtROS and amplified by SLC25A33 (PNC1) upregulation. Distinct from mPTP: this route operates ' +
      'without ΔΨm collapse, which is why it can run constitutively in a cell that is still alive and dividing.',
    drugs: ['vbit4'], refs: ['xu2023vdac1', 'kim2025', 'rabinowitz2025'],
  },
  {
    id: 'mptp', label: 'mPTP', full: 'Mitochondrial permeability transition pore (ANT/CypD/ATP-synthase dimer)',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito'],
    pos: [64, -16, 18], lod: 2, evidence: 'G',
    summary: 'Second mtDNA escape route, opening downstream of ΔΨm collapse and Ca²⁺/ROS overload.',
    detail: 'TNF-α drives sublethal chronic mPTP opening via ROS, producing a persistent cytochrome-c leak rather than ' +
      'a lethal burst — stressor S8, and the reason apoptotic priming here is chronic rather than executioner.',
    refs: ['shoshan2020', 'docSiege'],
  },
  {
    id: 'bik', label: 'BIK', full: 'BCL2-interacting killer — BH3-only apoptotic primer',
    compartment: 'mitochondrion', klass: 'effector', pathways: ['mito', 'mitophagy'],
    pos: [38, -22, 14], lod: 2, evidence: 'S',
    summary: 'Directly upregulated by SAMHD1; sequesters BECN1, biasing the cell toward apoptosis over mitophagy.',
    detail: 'BIK knockdown blunts apoptosis and cytochrome-c release in THP-1 cells. Germline BIK + SAMHD1 variants ' +
      'co-segregate as prostate cancer susceptibility genes — a rare instance where the mitochondrial arm and the ' +
      'oncologic arm of this framework touch the same two genes.',
    refs: ['yang2025bik', 'luo2012', 'pavlovich2025'],
  },
  {
    id: 'baxbak', label: 'BAX / BAK', full: 'Pro-apoptotic effectors — MOMP pore formers',
    compartment: 'mitochondrion', klass: 'effector', pathways: ['mito'],
    pos: [46, -24, 20], lod: 2, evidence: 'G',
    summary: 'Macropore formation for cytochrome-c release; sublethal ("minority") MOMP also permits mtDNA herniation.',
  },
  {
    id: 'cytc', label: 'cytochrome c', full: 'Cytochrome c — ETC electron shuttle and apoptotic signal',
    compartment: 'mitochondrion', klass: 'metabolite', pathways: ['mito'],
    pos: [50, -20, 28], lod: 2, evidence: 'S',
    summary: 'Its release is simultaneously a bioenergetic loss (Complex III→IV gap) and an apoptotic signal.',
    refs: ['yang2025bik'],
  },
  {
    id: 'drp1', label: 'DRP1', full: 'Dynamin-related protein 1 — fission GTPase',
    compartment: 'mitochondrion', klass: 'enzyme', pathways: ['mito', 'mitophagy'],
    pos: [30, -16, 36], lod: 2, evidence: 'I',
    summary: 'STING activation drives DRP1-mediated fission far in excess of fusion, fragmenting the network.',
    detail: 'Fragmentation raises surface-to-volume ratio, raises mtROS, and multiplies the number of VDAC1 ' +
      'oligomerisation sites — the geometry itself becomes part of the feedback loop.',
    refs: ['docSiege'],
  },
  {
    id: 'mfn', label: 'MFN1/2', full: 'Mitofusins 1 and 2 — outer-membrane fusion GTPases',
    compartment: 'mitochondrion', klass: 'enzyme', pathways: ['mito', 'mitophagy', 'isg'],
    pos: [74, -14, 20], lod: 2, evidence: 'S',
    summary: 'ISGylated by ISG15, which blocks the PINK1/Parkin mitophagy programme downstream of them.',
    detail: 'The IRF1 → PARP12 → ISG15 → MFN1/2 ISGylation axis is the replacement anchor for the retracted Sliter 2018 ' +
      'paper. ISG15 knockdown restores mitophagic flux, ΔΨm and ATP.',
    refs: ['deng2024'],
  },
  {
    id: 'pink1', label: 'PINK1', full: 'PTEN-induced kinase 1 — depolarisation sensor',
    compartment: 'mitochondrion', klass: 'kinase', pathways: ['mitophagy', 'mito'],
    pos: [66, -20, 32], lod: 2, evidence: 'S',
    summary: 'Accumulates on the outer membrane only when import fails — i.e. only on depolarised mitochondria.',
    detail: 'In a healthy mitochondrion PINK1 is imported and cleaved by PARL. ΔΨm collapse stops import, so PINK1 ' +
      'stabilises on the surface and phosphorylates ubiquitin at Ser65, recruiting Parkin. This is the sensor that ' +
      'is supposed to flag exactly the mitochondria this disease creates.',
    refs: ['deng2024'],
  },
  {
    id: 'parkin', label: 'Parkin', full: 'Parkin RBR E3 ubiquitin ligase (PRKN)',
    compartment: 'mitochondrion', klass: 'enzyme', pathways: ['mitophagy'],
    pos: [76, -20, 36], lod: 2, evidence: 'S',
    summary: 'Amplifies the pS65-Ub signal into a dense ubiquitin coat that autophagy receptors read.',
    samhd1: 'The pathway is intact but jammed downstream: ISGylated MFN1/2 and ISGylated BECN1 both block flux, so ' +
      'damaged mitochondria are flagged and then never cleared.',
    refs: ['deng2024', 'xu2015becn1'],
  },
  {
    id: 'tom20', label: 'TOM/TIM', full: 'Translocases of the outer and inner membranes',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito'],
    pos: [28, 6, 34], lod: 2, evidence: 'G',
    summary: 'Protein import machinery. ΔΨm-dependent: when the potential collapses, import stops and PINK1 accumulates.',
  },

  // ── Inner membrane ───────────────────────────────────────────────────
  {
    id: 'pnc1', label: 'PNC1 (SLC25A33)', full: 'Pyrimidine nucleotide carrier 1 — inner-membrane dNTP importer',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito', 'metabolic'],
    pos: [42, 8, 18], lod: 1, evidence: 'I', key: true,
    summary: 'Imports cytosolic (deoxy)nucleotides across the inner membrane into the matrix.',
    detail: 'PNC1 sits at the intersection of BOTH loops: it feeds the matrix dNTP pool that stalls POLG (→ ox-mtDNA ' +
      '→ NLRP3, Loop B), and its upregulation independently drives mtDNA synthesis and VDAC1 oligomerisation via mtROS ' +
      '(→ cGAS, Loop A). That makes it the only node in the study upstream of both NLRP3 and VDAC1.',
    samhd1: 'Cytosolic dNTP excess from dNTPase failure floods PNC1/PNC2. Arm 10 tests this with PLP (vitamin B6), ' +
      'which inhibits SLC25A33 transport and is clinically trivial to obtain. The bifurcating prediction is the ' +
      'sharpest experiment in the study: suppress Loop B only → the loops are independently gated; suppress both → ' +
      'PNC1-driven mtROS is the dominant driver of VDAC1 oligomerisation.',
    drugs: ['plp'], refs: ['dolce2001', 'kim2025', 'doc10arm', 'liu2026nlrp3'],
  },
  {
    id: 'pnc2', label: 'PNC2 (SLC25A36)', full: 'Pyrimidine nucleotide carrier 2',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito', 'metabolic'],
    pos: [48, 10, 15], lod: 2, evidence: 'I',
    summary: 'Second inner-membrane pyrimidine nucleotide carrier; shares the overload with PNC1.',
    refs: ['lunetti2016'],
  },
  {
    id: 'etc-i', label: 'Complex I', full: 'NADH:ubiquinone oxidoreductase',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito', 'metabolic'],
    pos: [34, -8, 16], lod: 2, evidence: 'S',
    summary: 'Suppressed by sustained STAT1/2 signalling; also the dominant site of reverse-electron-transport ROS.',
    refs: ['mihaylova2024', 'docSiege'],
  },
  {
    id: 'etc-iii', label: 'Complex III', full: 'Cytochrome bc1 complex',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito', 'metabolic'],
    pos: [45, -10, 14], lod: 2, evidence: 'S',
    summary: 'Directly inhibited by ceramide, and suppressed by ISG-driven transcriptional programmes.',
    detail: 'The IL-1β/NF-κB axis drives ceramide synthesis, and ceramide inhibits Complex III directly while ' +
      'permeabilising the inner membrane and raising mPTP propensity. One cytokine, three simultaneous injuries.',
    refs: ['gudz1997', 'mihaylova2024'],
  },
  {
    id: 'etc-iv', label: 'Complex IV', full: 'Cytochrome c oxidase',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito', 'metabolic'],
    pos: [56, -10, 14], lod: 2, evidence: 'G',
    summary: 'Terminal oxidase; its activity falls with cytochrome-c leak and with mtDNA-encoded subunit loss.',
  },
  {
    id: 'etc-v', label: 'ATP synthase', full: 'Complex V — F1F0 ATP synthase',
    compartment: 'mitochondrion', klass: 'structure', pathways: ['mito', 'metabolic'],
    pos: [66, -8, 16], lod: 2, evidence: 'G',
    summary: 'Uses the proton-motive force to make ATP; runs in reverse to defend ΔΨm when the ETC fails, burning ATP.',
  },
  {
    id: 'deltapsi', label: 'ΔΨm', full: 'Mitochondrial inner-membrane potential',
    compartment: 'mitochondrion', klass: 'metabolite', pathways: ['mito', 'metabolic'],
    pos: [52, -18, 30], lod: 1, evidence: 'S', key: true,
    summary: 'The master state variable of the organelle: sets ATP output, protein import, PINK1 stability and mPTP threshold.',
    samhd1: 'Samhd1-KO causes measurable ΔΨm collapse and M1 macrophage skewing. Collapse here is not a downstream ' +
      'symptom — it re-enters the loop by stopping PINK1 import and opening mPTP.',
    refs: ['xu2023vdac1'],
  },
  {
    id: 'cardiolipin', label: 'cardiolipin', full: 'Cardiolipin — inner-membrane signature phospholipid',
    compartment: 'mitochondrion', klass: 'metabolite', pathways: ['mito', 'mitophagy'],
    pos: [40, -16, 26], lod: 2, evidence: 'G',
    summary: 'Externalised cardiolipin is itself a mitophagy "eat-me" signal and an NLRP3-binding surface.',
  },
  {
    id: 'ceramide', label: 'ceramide', full: 'Ceramide — sphingolipid second messenger',
    compartment: 'er', klass: 'metabolite', pathways: ['mito', 'inflammasome'],
    pos: [-4, 34, 42], lod: 2, evidence: 'G',
    summary: 'Synthesised downstream of IL-1β/NF-κB; inhibits Complex III and permeabilises the inner membrane.',
    refs: ['gudz1997'],
  },

  // ── Matrix ───────────────────────────────────────────────────────────
  {
    id: 'mtdna', label: 'mtDNA nucleoid', full: 'Mitochondrial DNA packaged with TFAM into nucleoids',
    compartment: 'mitochondrion', klass: 'ligand', pathways: ['mito', 'cgas-sting'],
    pos: [52, 0, 24], lod: 1, evidence: 'S', key: true,
    summary: '~16.6 kb circular genome at 100–1000 copies per cell. Hypomethylated, unprotected by histones, adjacent to the ROS source.',
    detail: 'mtDNA is the perfect autoantigen: bacterial in ancestry, CpG-hypomethylated, chemically damaged by its own ' +
      'neighbourhood, and present in high copy number. Everything the innate immune system evolved to treat as foreign.',
    refs: ['west2015'],
  },
  {
    id: 'polg', label: 'POLG', full: 'DNA polymerase gamma — the only mtDNA replicase',
    compartment: 'mitochondrion', klass: 'enzyme', pathways: ['mito', 'metabolic'],
    pos: [45, 2, 27], lod: 1, evidence: 'I',
    summary: 'Fidelity and processivity both degrade when the matrix dNTP pool is skewed, especially by excess dGTP.',
    detail: 'POLG stalling produces mtDNA strand breaks, and the uncontrolled neosynthesis that follows yields the ' +
      'OXIDISED product — ox-mtDNA — which is the NLRP3 ligand. This is the purple stream.',
    refs: ['elpeleg2008', 'liu2026nlrp3', 'docSiege'],
  },
  {
    id: 'tfam', label: 'TFAM', full: 'Mitochondrial transcription factor A — nucleoid packaging protein',
    compartment: 'mitochondrion', klass: 'tf', pathways: ['mito', 'metabolic'],
    pos: [59, 2, 22], lod: 2, evidence: 'G',
    summary: 'Compacts and protects mtDNA. TFAM insufficiency alone is enough to release mtDNA and prime cGAS.',
    detail: 'West et al. 2015 showed that mtDNA stress from TFAM depletion primes the antiviral interferon response — ' +
      'the foundational demonstration that the mitochondrion can start an interferon reaction with no pathogen present.',
    refs: ['west2015'],
  },
  {
    id: 'twnk', label: 'TWNK / mtSSB', full: 'Twinkle helicase and mitochondrial single-strand binding protein',
    compartment: 'mitochondrion', klass: 'enzyme', pathways: ['mito'],
    pos: [63, 5, 27], lod: 2, evidence: 'G',
    summary: 'The rest of the mtDNA replisome; stalls with POLG when nucleotide supply is unbalanced.',
  },
  {
    id: 'mito-dntp', label: 'matrix dNTP pool', full: 'Mitochondrial deoxynucleotide pool',
    compartment: 'mitochondrion', klass: 'metabolite', pathways: ['mito', 'metabolic'],
    pos: [44, 2, 21], lod: 1, evidence: 'I',
    summary: 'Independently maintained from the cytosolic pool — but only as long as PNC1/PNC2 import is balanced.',
    samhd1: 'The perturbation here is qualitative as well as quantitative: it is the dGTP skew, not just total ' +
      'concentration, that impairs POLG fidelity.',
    refs: ['dolce2001', 'liu2026nlrp3'],
  },
  {
    id: 'mtros', label: 'mtROS', full: 'Mitochondrial reactive oxygen species',
    compartment: 'mitochondrion', klass: 'metabolite', pathways: ['mito', 'inflammasome'],
    pos: [50, -6, 31], lod: 1, evidence: 'S', key: true,
    summary: 'The hub metabolite: oxidises mtDNA, drives VDAC1 oligomerisation, primes NLRP3, and damages the ETC that made it.',
    refs: ['docSiege', 'kim2025', 'swanson2019'],
  },
  {
    id: 'oxmtdna', label: 'ox-mtDNA', full: 'Oxidised mitochondrial DNA — the NLRP3 ligand',
    compartment: 'cytosol', klass: 'ligand', pathways: ['mito', 'inflammasome'],
    pos: [46, -18, 32], lod: 1, evidence: 'S', key: true,
    summary: 'Product of dNTP overload → POLG stalling → uncontrolled mtDNA neosynthesis, oxidised in situ. Activates NLRP3, NOT cGAS.',
    detail: 'This species distinction is the correction at the heart of the project\'s mitochondrial manuscript. ' +
      'ox-mtDNA is the direct NLRP3 ligand demonstrated in SAMHD1-null and obese macrophages (Loop B). It is NOT the ' +
      'species that drives the ISG signature — that is the unoxidised/mixed fragment pool escaping through VDAC1 (Loop A). ' +
      'Same organelle, different oxidation state, different sensor, different loop, different rescue point.',
    refs: ['liu2026nlrp3', 'docSiege'],
  },
  {
    id: 'mtdna-frag', label: 'cytosolic mtDNA fragments', full: 'Unoxidised / mixed mtDNA fragments in the cytosol — the cGAS ligand',
    compartment: 'cytosol', klass: 'ligand', pathways: ['mito', 'cgas-sting'],
    pos: [40, 6, 40], lod: 1, evidence: 'S', key: true,
    summary: 'Escapes via the VDAC1 macropore (primary, constitutive) and mPTP (secondary). Bound by cGAS → Loop A.',
    detail: 'The proof is pharmacological and clean: VBIT-4 prevents release and abolishes the spontaneous ISG response; ' +
      'IMSB301 (cGAS inhibitor) normalises the ISG signature in AGS PBMCs. Both confirm the route is cGAS-dependent and ' +
      'VDAC1-gated rather than oxidation-dependent.',
    refs: ['rabinowitz2025', 'xu2023vdac1', 'han2026', 'west2015'],
  },
  {
    id: 'succinate', label: 'succinate', full: 'Succinate — TCA-cycle inflammatory signal',
    compartment: 'mitochondrion', klass: 'metabolite', pathways: ['mito', 'metabolic'],
    pos: [48, -12, 32], lod: 2, evidence: 'G',
    summary: 'Accumulates in M1 macrophages, inhibits prolyl hydroxylases, stabilises HIF-1α under normoxia.',
    refs: ['tannahill2013'],
  },
  {
    id: 'hif1a', label: 'HIF-1α', full: 'Hypoxia-inducible factor 1-alpha',
    compartment: 'cytosol', klass: 'tf', pathways: ['metabolic', 'inflammasome'],
    pos: [30, -6, 52], lod: 2, evidence: 'G',
    summary: 'Stabilised normoxically by succinate → aerobic glycolysis (Warburg shift) and IL-1β transcription.',
    refs: ['tannahill2013'],
  },
  {
    id: 'atp', label: 'ATP output', full: 'Cellular ATP production capacity',
    compartment: 'mitochondrion', klass: 'metabolite', pathways: ['mito', 'metabolic'],
    pos: [72, -4, 22], lod: 1, evidence: 'G', key: true,
    summary: 'The bottom line of the whole mitochondrial arm — and the readout that JAK inhibition did NOT rescue.',
    samhd1: 'This node is the JAK-refractory residual. When JAK1 inhibition clears the inflammatory arm and the ' +
      'fatigue and metabolic dysfunction stay, what is left is bioenergetic — Loop B and the direct mitochondrial ' +
      'injuries, both of which run independently of JAK–STAT.',
    refs: ['mihaylova2024', 'che2025', 'doc10arm'],
  },

  // ── Mitophagy / lysosomal arm ────────────────────────────────────────
  {
    id: 'becn1', label: 'BECN1', full: 'Beclin-1 — autophagy initiation scaffold',
    compartment: 'cytosol', klass: 'adaptor', pathways: ['mitophagy', 'isg'],
    pos: [6, -36, -28], lod: 1, evidence: 'S',
    summary: 'ISGylated by ISG15, which competes with the activating K63-Ub mark and independently blocks autophagic flux.',
    detail: 'This is the second, ISG15-dependent brake — distinct from the MFN1/2 block and additive to it. The project ' +
      'manuscript calls the ISG15–BECN1 block the KEYSTONE stressor (S6): it is what converts transient mitochondrial ' +
      'damage into permanent accumulation.',
    refs: ['xu2015becn1', 'luo2012', 'docSiege'],
  },
  {
    id: 'lc3', label: 'LC3-II', full: 'Microtubule-associated protein 1 light chain 3, lipidated form',
    compartment: 'cytosol', klass: 'effector', pathways: ['mitophagy'],
    pos: [0, -30, -22], lod: 2, evidence: 'G',
    summary: 'Autophagosome membrane marker; LC3-II/I ratio with p62 is the standard flux readout in Arm 1.',
  },
  {
    id: 'p62', label: 'p62 / SQSTM1', full: 'Sequestosome-1 — ubiquitin-binding autophagy receptor',
    compartment: 'cytosol', klass: 'adaptor', pathways: ['mitophagy'],
    pos: [-6, -38, -30], lod: 2, evidence: 'G',
    summary: 'Accumulates when flux is blocked — the readout that separates "more autophagosomes" from "working autophagy".',
  },
  {
    id: 'mtor', label: 'mTORC1', full: 'Mechanistic target of rapamycin complex 1',
    compartment: 'lysosome', klass: 'kinase', pathways: ['mitophagy', 'metabolic'],
    pos: [26, -38, -32], lod: 2, evidence: 'I',
    summary: 'Constitutively active under chronic inflammation; retains MITF/TFEB in the cytoplasm.',
    refs: ['yaxian2025', 'napolitano2020'],
  },
  {
    id: 'mitf', label: 'MITF / TFEB', full: 'Lysosomal biogenesis transcription factors',
    compartment: 'lysosome', klass: 'tf', pathways: ['mitophagy'],
    pos: [32, -46, -44], lod: 2, evidence: 'I',
    summary: 'Cytoplasmically retained by mTORC1 → lysosomal hydrolase genes under-transcribed.',
    refs: ['yaxian2025', 'napolitano2020'],
  },
  {
    id: 'ctsd', label: 'Cathepsin D', full: 'CTSD — principal lysosomal aspartyl protease',
    compartment: 'lysosome', klass: 'enzyme', pathways: ['mitophagy'],
    pos: [16, -46, -40], lod: 1, evidence: 'I',
    summary: 'Under-produced when MITF is retained; autolysosomes fail to degrade their cargo.',
    samhd1: 'The SAMHD1 → mTOR → MITF → CTSD axis was described in macrophage autophagy-lysosomal failure. Damaged ' +
      'mitochondria stay trapped upstream of a non-functional lysosome, amplifying mtROS.',
    refs: ['yaxian2025'],
  },
  {
    id: 'dnase2', label: 'DNase II', full: 'Deoxyribonuclease II alpha (DNASE2) — the lysosomal acid DNase',
    compartment: 'lysosome', klass: 'enzyme', pathways: ['mitophagy', 'cgas-sting', 'retro'],
    pos: [12, -50, -44], lod: 1, evidence: 'G', key: true,
    summary: 'The terminal step of DNA disposal: whatever autophagy and phagocytosis deliver, DNase II is what actually destroys it.',
    detail: 'DNase II is acid-dependent and lysosome-restricted, so it only works in a compartment that has been ' +
      'properly acidified and properly stocked. Human DNASE2 deficiency is a type-I interferonopathy, and in mice ' +
      'Dnase2 loss is embryonically lethal from interferon — rescued by deleting the interferon receptor, and by ' +
      'deleting cGAS or STING. Undigested DNA in a failing lysosome is sufficient, by itself, to drive the exact ' +
      'signature this whole framework is about.',
    samhd1: 'This is a missing EDGE between two arms the atlas already had, not a new subgraph. The ' +
      'mTOR→MITF→CTSD axis is already modelled as under-producing lysosomal hydrolases — and DNase II is one of ' +
      'them. So the same lysosomal failure that traps damaged mitochondria upstream also stops the cell degrading ' +
      'the mtDNA it did manage to engulf. Mitophagy failure and cGAS ligand supply turn out to be the same lesion ' +
      'seen from two directions.',
    refs: ['kawane2006', 'rodero2017', 'lan2014'],
  },
  {
    id: 'dnase1l3', label: 'DNASE1L3', full: 'Deoxyribonuclease 1-like 3 — the secreted chromatin nuclease',
    compartment: 'extracellular', klass: 'enzyme', pathways: ['cgas-sting'],
    pos: [-6, 86, -22], lod: 2, evidence: 'G',
    summary: 'The only nuclease that digests chromatin inside apoptotic microparticles. Loss-of-function causes familial SLE.',
    detail: 'It handles the extracellular half of the same problem: DNA that leaves a dying cell packaged in ' +
      'membrane, where soluble DNase I cannot reach it. Relevant here because the framework already posits ' +
      'continuous sub-lethal and lytic death — pyroptosis, and now necroptosis — as ongoing sources of extracellular DNA.',
    refs: ['almayouf2011', 'sisirak2016'],
  },
  {
    id: 'autolysosome', label: 'autolysosome', full: 'Autophagosome–lysosome fusion product',
    compartment: 'lysosome', klass: 'structure', pathways: ['mitophagy'],
    pos: [8, -44, -36], lod: 2, evidence: 'G',
    summary: 'Where mitophagy should terminate. In this disease the cargo arrives and is not destroyed.',
  },
];

export const edges = [
  // ── PURPLE stream: dNTPase failure → PNC1/2 → POLG → ox-mtDNA → NLRP3
  { from: 'pnc1', to: 'mito-dntp', kind: 'transport', label: 'imports cytosolic dNTPs across the inner membrane', pathways: ['mito', 'metabolic'], evidence: 'I', refs: ['dolce2001'] },
  { from: 'pnc2', to: 'mito-dntp', kind: 'transport', pathways: ['mito'], evidence: 'I', refs: ['lunetti2016'] },
  { from: 'mito-dntp', to: 'polg', kind: 'inhibit', label: 'dGTP skew impairs fidelity + processivity', pathways: ['mito'], evidence: 'I', refs: ['elpeleg2008'] },
  { from: 'polg', to: 'mtdna', kind: 'degrade', label: 'stalling → strand breaks', pathways: ['mito'], evidence: 'I' },
  { from: 'polg', to: 'oxmtdna', kind: 'produce', label: 'uncontrolled neosynthesis → oxidised product', pathways: ['mito', 'inflammasome'], evidence: 'S', loop: 'B', refs: ['liu2026nlrp3'] },
  { from: 'mtros', to: 'oxmtdna', kind: 'produce', label: 'oxidises nascent mtDNA in situ', pathways: ['mito', 'inflammasome'], evidence: 'S', loop: 'B' },
  { from: 'pnc1', to: 'mtros', kind: 'drive', label: 'SLC25A33 upregulation → mtDNA synthesis → mtROS', pathways: ['mito'], evidence: 'I', refs: ['kim2025'] },

  // ── BLUE stream: VDAC1 macropore → cytosolic mtDNA fragments → cGAS
  { from: 'vdac1', to: 'vdac1-oligo', kind: 'activate', label: 'oligomerisation (loss of SAMHD1 restraint + mtROS)', pathways: ['mito', 'cgas-sting'], evidence: 'S', loop: 'A', refs: ['xu2023vdac1'] },
  { from: 'mtros', to: 'vdac1-oligo', kind: 'drive', label: 'mtROS drives oligomerisation', pathways: ['mito'], evidence: 'S', loop: 'A', refs: ['kim2025'] },
  { from: 'mtdna', to: 'mtdna-frag', kind: 'release', label: 'escape through the macropore', pathways: ['mito', 'cgas-sting'], evidence: 'S', loop: 'A' },
  { from: 'vdac1-oligo', to: 'mtdna-frag', kind: 'release', label: 'primary constitutive escape route', pathways: ['mito', 'cgas-sting'], evidence: 'S', loop: 'A', refs: ['rabinowitz2025', 'xu2023vdac1'] },
  { from: 'mptp', to: 'mtdna-frag', kind: 'release', label: 'secondary route, downstream of ΔΨm collapse', pathways: ['mito'], evidence: 'G', loop: 'A' },
  { from: 'mtdna-frag', to: 'cgas', kind: 'sense', label: 'cGAS binds cytosolic dsDNA → Loop A initiation', pathways: ['mito', 'cgas-sting'], evidence: 'S', loop: 'A', refs: ['west2015', 'han2026'] },
  { from: 'oxmtdna', to: 'nlrp3', kind: 'activate', label: 'direct NLRP3 ligand → Loop B initiation', pathways: ['mito', 'inflammasome'], evidence: 'S', loop: 'B', refs: ['liu2026nlrp3'] },

  // ── Membrane potential and bioenergetics
  { from: 'vdac1-oligo', to: 'deltapsi', kind: 'inhibit', label: 'ΔΨm collapse', pathways: ['mito'], evidence: 'S', refs: ['xu2023vdac1'] },
  { from: 'deltapsi', to: 'mptp', kind: 'inhibit', label: 'intact potential holds the pore shut — collapse is what lowers the threshold', pathways: ['mito'], evidence: 'G' },
  { from: 'deltapsi', to: 'atp', kind: 'activate', label: 'proton-motive force drives Complex V', pathways: ['mito', 'metabolic'], evidence: 'G' },
  { from: 'deltapsi', to: 'tom20', kind: 'activate', label: 'import is ΔΨm-dependent', pathways: ['mito'], evidence: 'G' },
  { from: 'tom20', to: 'pink1', kind: 'degrade', label: 'healthy import → PARL cleavage of PINK1', pathways: ['mitophagy'], evidence: 'G' },
  { from: 'etc-i', to: 'mtros', kind: 'produce', label: 'reverse electron transport', pathways: ['mito'], evidence: 'G' },
  { from: 'etc-i', to: 'deltapsi', kind: 'activate', pathways: ['mito', 'metabolic'], evidence: 'G' },
  { from: 'etc-iii', to: 'deltapsi', kind: 'activate', pathways: ['mito', 'metabolic'], evidence: 'G' },
  { from: 'etc-iii', to: 'mtros', kind: 'produce', pathways: ['mito'], evidence: 'G' },
  { from: 'etc-iv', to: 'deltapsi', kind: 'activate', pathways: ['mito'], evidence: 'G' },
  { from: 'etc-v', to: 'atp', kind: 'produce', pathways: ['mito', 'metabolic'], evidence: 'G' },
  { from: 'ceramide', to: 'etc-iii', kind: 'inhibit', label: 'direct Complex III inhibition + inner-membrane permeabilisation', pathways: ['mito'], evidence: 'G', refs: ['gudz1997'] },
  { from: 'ceramide', to: 'mptp', kind: 'activate', label: 'raises mPTP propensity', pathways: ['mito'], evidence: 'G' },
  { from: 'succinate', to: 'hif1a', kind: 'activate', label: 'inhibits PHD → normoxic HIF-1α stabilisation', pathways: ['metabolic'], evidence: 'G', refs: ['tannahill2013'] },
  { from: 'etc-iii', to: 'succinate', kind: 'produce', label: 'TCA remodelling in M1 skewing', pathways: ['metabolic'], evidence: 'G' },

  // ── Apoptotic priming
  { from: 'bik', to: 'baxbak', kind: 'activate', label: 'BH3-only priming', pathways: ['mito'], evidence: 'S', refs: ['yang2025bik'] },
  { from: 'baxbak', to: 'cytc', kind: 'release', label: 'sublethal / minority MOMP', pathways: ['mito'], evidence: 'S' },
  { from: 'mptp', to: 'cytc', kind: 'release', label: 'chronic sublethal leak (TNF-α/ROS driven)', pathways: ['mito'], evidence: 'G' },
  { from: 'cytc', to: 'etc-iv', kind: 'inhibit', label: 'losing the shuttle breaks III→IV', pathways: ['mito', 'metabolic'], evidence: 'G' },
  { from: 'bik', to: 'becn1', kind: 'inhibit', label: 'BH3-only proteins sequester BECN1 → apoptosis bias over mitophagy', pathways: ['mitophagy'], evidence: 'S', refs: ['luo2012', 'yang2025bik'] },

  // ── Mitophagy: flagged then jammed
  { from: 'deltapsi', to: 'pink1', kind: 'inhibit', label: 'intact potential imports and destroys PINK1 — collapse is what stabilises it', pathways: ['mitophagy'], evidence: 'G' },
  { from: 'pink1', to: 'parkin', kind: 'phos', label: 'pSer65-Ub recruits and activates Parkin', pathways: ['mitophagy'], evidence: 'G' },
  { from: 'parkin', to: 'optn', kind: 'activate', label: 'Ub coat read by OPTN/p62 receptors', pathways: ['mitophagy'], evidence: 'G' },
  { from: 'optn', to: 'lc3', kind: 'bind', label: 'LIR-motif engagement of the phagophore', pathways: ['mitophagy'], evidence: 'G' },
  { from: 'p62', to: 'lc3', kind: 'bind', pathways: ['mitophagy'], evidence: 'G' },
  { from: 'becn1', to: 'lc3', kind: 'activate', label: 'PI3KC3 initiation', pathways: ['mitophagy'], evidence: 'G' },
  { from: 'lc3', to: 'autolysosome', kind: 'translocate', label: 'autophagosome–lysosome fusion', pathways: ['mitophagy'], evidence: 'G' },
  { from: 'ctsd', to: 'autolysosome', kind: 'activate', label: 'hydrolytic degradation of cargo', pathways: ['mitophagy'], evidence: 'I' },
  { from: 'mtor', to: 'mitf', kind: 'inhibit', label: 'phosphorylation → cytoplasmic retention', pathways: ['mitophagy'], evidence: 'I', refs: ['napolitano2020'] },
  { from: 'mitf', to: 'ctsd', kind: 'produce', label: 'transcribes lysosomal hydrolases', pathways: ['mitophagy'], evidence: 'I', refs: ['yaxian2025'] },
  { from: 'mitf', to: 'dnase2', kind: 'produce', label: 'DNase II is a MITF/TFEB lysosomal target gene — the same failure hits it', pathways: ['mitophagy', 'cgas-sting'], evidence: 'I', refs: ['yaxian2025', 'rodero2017'] },
  { from: 'autolysosome', to: 'dnase2', kind: 'activate', label: 'acidified compartment licenses the nuclease', pathways: ['mitophagy'], evidence: 'G' },
  { from: 'dnase2', to: 'mtdna-frag', kind: 'degrade', label: 'THE MISSING EDGE — destroys engulfed mtDNA before it can reach cGAS', pathways: ['mitophagy', 'cgas-sting'], evidence: 'G', loop: 'A', refs: ['lan2014', 'kawane2006'] },
  { from: 'dnase2', to: 'l1-cdna', kind: 'degrade', label: 'lysosomal disposal of retroelement DNA', pathways: ['retro'], evidence: 'I' },
  { from: 'dnase1l3', to: 'ssdna', kind: 'degrade', label: 'digests chromatin inside apoptotic microparticles', pathways: ['cgas-sting'], evidence: 'G', refs: ['sisirak2016'] },

  // ── Fission / fusion geometry
  { from: 'drp1', to: 'mtros', kind: 'drive', label: 'fragmentation raises surface-to-volume → more mtROS', pathways: ['mito'], evidence: 'I', loop: 'sting-fission' },
  { from: 'mfn', to: 'drp1', kind: 'inhibit', label: 'fusion opposes fission', pathways: ['mito'], evidence: 'G' },
  { from: 'mfn', to: 'pink1', kind: 'bind', label: 'MFN2 is a Parkin substrate on the mitophagy path', pathways: ['mitophagy'], evidence: 'G' },

  // ── mito dsRNA
  { from: 'mtdna', to: 'mtdsrna', kind: 'produce', label: 'bidirectional transcription → complementary duplexes', pathways: ['rlr-mavs', 'mito'], evidence: 'I' },
];
