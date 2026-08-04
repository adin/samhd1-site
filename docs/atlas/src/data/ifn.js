/**
 * ifn.js — interferon output and the receptor cascade that reads it back.
 *
 * IFN-β/α → IFNAR1/2 → JAK1 + TYK2 → STAT1/STAT2/IRF9 (ISGF3) → ISRE → ISGs.
 * IFN-γ → IFNGR1/2 → JAK1 + JAK2 → STAT1 homodimer (GAF) → GAS.
 * IFN-λ → IFNLR1/IL10RB → same JAK1/TYK2 module, epithelial-restricted.
 *
 * Also holds the ISG effector layer, the two negative-feedback brakes
 * (USP18 and SOCS), and the transcriptional targets in the nucleus.
 */

export const nodes = [
  // ── Secreted interferons and cytokines ───────────────────────────────
  {
    id: 'ifnb', label: 'IFN-β', full: 'Interferon beta-1 (IFNB1)',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['ifn-jak', 'cgas-sting'],
    pos: [-8, 92, 10], lod: 1, evidence: 'S', key: true,
    summary: 'The single-gene first-wave interferon. IRF3-driven, requires no new protein synthesis.',
    samhd1: 'Tonic and moderate-amplitude rather than surging — the signature the concept note names NACI ' +
      '(Non-Acute Chronic Interferonopathy).',
    refs: ['docConcept', 'tesser2025'],
  },
  {
    id: 'ifna', label: 'IFN-α (13 subtypes)', full: 'Interferon alpha family',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['ifn-jak'],
    pos: [10, 94, 4], lod: 1, evidence: 'S',
    summary: 'The second-wave amplifier set, driven by IRF7 rather than IRF3.',
  },
  {
    id: 'ifng', label: 'IFN-γ', full: 'Interferon gamma — the type II interferon',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['ifn-jak', 'clinical'],
    pos: [36, 90, -12], lod: 1, evidence: 'G',
    summary: 'Different receptor, different STAT dimer, overlapping ISG output. Drives the collagen-catabolic arm.',
    detail: 'Tonic IFN-γ suppresses collagen-I transcription via STAT1 antagonism of TGF-β/Smad3 while coordinately ' +
      'upregulating MMP-1 and MMP-3 in dermal fibroblasts — the established mechanism behind the connective-tissue ' +
      'and fascial failure phenotype.',
    refs: ['verrecchia2004'],
  },
  {
    id: 'ifnl', label: 'IFN-λ', full: 'Type III interferon (IL-28/IL-29)',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['ifn-jak', 'ankib1'],
    pos: [-28, 90, -6], lod: 2, evidence: 'G',
    summary: 'Epithelial-restricted receptor, identical downstream JAK module. Also driven by the ANKIB1 K11-Ub node.',
    refs: ['betrancourt2026'],
  },
  {
    id: 'il6', label: 'IL-6', full: 'Interleukin-6',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['nfkb', 'clinical'],
    pos: [-42, 86, 18], lod: 2, evidence: 'G',
    summary: 'NF-κB output; dose-dependently elevated in ME/CFS PBMCs after poly I:C stimulation.',
    refs: ['che2025'],
  },
  {
    id: 'tnfa', label: 'TNF-α', full: 'Tumour necrosis factor alpha',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['nfkb', 'mito'],
    pos: [-16, 88, 34], lod: 2, evidence: 'G',
    summary: 'Drives sublethal chronic mPTP opening via ROS — a persistent cytochrome-c leak rather than an execution signal.',
    refs: ['shoshan2020'],
  },
  {
    id: 'il23', label: 'IL-23', full: 'Interleukin-23',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['nfkb', 'clinical'],
    pos: [2, 86, -30], lod: 2, evidence: 'G',
    summary: 'NF-κB output driving Th17 differentiation — the psoriatic arthritis axis.',
    refs: ['fragoulis2023'],
  },
  {
    id: 'il17a', label: 'IL-17A', full: 'Interleukin-17A — Th17 effector',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['clinical'],
    pos: [18, 84, -36], lod: 2, evidence: 'G',
    summary: 'With TNF-α, drives enthesitis at tendon–bone and fascial insertions.',
    refs: ['fragoulis2023'],
  },
  {
    id: 'mcp1', label: 'MCP-1 / CCL2', full: 'Monocyte chemoattractant protein 1',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['metabolic', 'clinical'],
    pos: [48, 84, 4], lod: 1, evidence: 'S',
    summary: 'IRF7 transactivates MCP-1 specifically in VISCERAL adipocytes, not subcutaneous ones.',
    samhd1: 'This tissue specificity is the mechanistic explanation for android-pattern adiposity with no subcutaneous ' +
      'lower-body accumulation — a metabolic phenotype produced by an immune transcription factor.',
    refs: ['kuroda2020', 'li2013irf7'],
  },
  {
    id: 'gdf15', label: 'GDF15', full: 'Growth differentiation factor 15 — mitochondrial stress cytokine',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['metabolic', 'mito'],
    pos: [-54, 84, -6], lod: 2, evidence: 'G',
    summary: 'The canonical circulating readout of integrated mitochondrial stress; elevated post-exercise in ME/CFS.',
    refs: ['che2025'],
  },

  // ── Receptors and the JAK module ─────────────────────────────────────
  {
    id: 'ifnar1', label: 'IFNAR1', full: 'Interferon alpha/beta receptor subunit 1',
    compartment: 'membrane', klass: 'receptor', pathways: ['ifn-jak'],
    pos: [-16, 64, 16], lod: 1, evidence: 'S', key: true,
    summary: 'Low-affinity subunit, constitutively associated with TYK2. Ligand affinity here sets ISG-response breadth.',
    refs: ['rabinowitz2025'],
  },
  {
    id: 'ifnar2', label: 'IFNAR2', full: 'Interferon alpha/beta receptor subunit 2',
    compartment: 'membrane', klass: 'receptor', pathways: ['ifn-jak', 'isg'],
    pos: [-2, 64, 21], lod: 1, evidence: 'S',
    summary: 'High-affinity subunit bound to JAK1; the docking site for the USP18 negative-feedback brake.',
    samhd1: 'USP18 is stabilised by ISG15 and is the primary IFNAR2 brake. In this disease the brake is present and ' +
      'even upregulated — it is simply overwhelmed by an upstream genetic drive it cannot reach.',
    refs: ['zhang2015isg15'],
  },
  {
    id: 'jak1', label: 'JAK1', full: 'Janus kinase 1',
    compartment: 'cytosol', klass: 'kinase', pathways: ['ifn-jak'],
    pos: [-18, 54, 14], lod: 1, evidence: 'S', key: true,
    summary: 'Shared by type I, type II and type III interferon receptors. The pharmacologic choke point of the whole ISG arm.',
    samhd1: 'JAK1-selective inhibition clears the inflammatory arm of this disease almost completely and the ' +
      'bioenergetic arm barely at all. What it fails to move is therefore a map of everything downstream of the ' +
      'genetic lesion that does not route through JAK–STAT: Loop B, the direct mitochondrial injuries, and the ' +
      'upstream ANKIB1 priming that JAK inhibition never reaches.',
    drugs: ['upadacitinib'], refs: ['doc10arm', 'fremond2023', 'rodriguez2023'],
  },
  {
    id: 'tyk2', label: 'TYK2', full: 'Tyrosine kinase 2',
    compartment: 'cytosol', klass: 'kinase', pathways: ['ifn-jak'],
    pos: [-2, 54, 21], lod: 1, evidence: 'G', key: true,
    summary: 'Partners JAK1 on IFNAR1. Human TYK2 deficiency is well tolerated, which is what makes it a clean drug target.',
    detail: 'TYK2 also serves IL-12 and IL-23, so TYK2 blockade hits the Th17/psoriatic arm as well as the interferon ' +
      'arm — relevant given the confirmed PsA diagnosis.',
    drugs: ['brepocitinib'], refs: ['docGlass'],
  },
  {
    id: 'jak2', label: 'JAK2', full: 'Janus kinase 2',
    compartment: 'cytosol', klass: 'kinase', pathways: ['ifn-jak'],
    pos: [34, 50, -16], lod: 2, evidence: 'G',
    summary: 'Partners JAK1 on IFNGR. Also the erythropoietin/thrombopoietin kinase — the source of JAK-inhibitor cytopenias.',
  },
  {
    id: 'ifngr', label: 'IFNGR1/2', full: 'Interferon gamma receptor',
    compartment: 'membrane', klass: 'receptor', pathways: ['ifn-jak'],
    pos: [36, 60, -16], lod: 2, evidence: 'G',
    summary: 'Uses JAK1 + JAK2 → STAT1 homodimer (GAF) → GAS elements.',
  },
  {
    id: 'ifnlr', label: 'IFNLR1/IL10RB', full: 'Type III interferon receptor',
    compartment: 'membrane', klass: 'receptor', pathways: ['ifn-jak'],
    pos: [-34, 60, -6], lod: 2, evidence: 'G',
    summary: 'Epithelial-restricted; converges on the same JAK1/TYK2 → ISGF3 module.',
  },
  {
    id: 'il1r', label: 'IL-1R1', full: 'Interleukin-1 receptor type 1',
    compartment: 'membrane', klass: 'receptor', pathways: ['inflammasome', 'nfkb'],
    pos: [34, 62, 22], lod: 2, evidence: 'G',
    summary: 'Reads IL-1β back into MyD88 → NF-κB — how Loop B keeps its own priming signal alive.',
  },
  {
    id: 'tnfr', label: 'TNFR1', full: 'Tumour necrosis factor receptor 1',
    compartment: 'membrane', klass: 'receptor', pathways: ['nfkb', 'mito'],
    pos: [-24, 62, 36], lod: 2, evidence: 'G',
    summary: 'NF-κB activation and, via ROS, chronic sublethal mPTP opening.',
  },

  // ── STAT module ──────────────────────────────────────────────────────
  {
    id: 'stat1', label: 'STAT1', full: 'Signal transducer and activator of transcription 1',
    compartment: 'cytosol', klass: 'tf', pathways: ['ifn-jak', 'metabolic'],
    pos: [-26, 42, 20], lod: 1, evidence: 'S', key: true,
    summary: 'Y701-phosphorylated by JAK1/TYK2. Forms ISGF3 with STAT2/IRF9, or GAF homodimers downstream of IFN-γ.',
    samhd1: 'SAMHD1-KO monocytes show persistent JAK–STAT1/2 and ISG activation that JAK inhibition normalises. ' +
      'STAT1 also directly represses PGC-1α transcription, so the interferon arm suppresses mitochondrial biogenesis ' +
      'as a transcriptional side effect.',
    drugs: ['upadacitinib'], refs: ['rabinowitz2025', 'bhimavarapu2015'],
  },
  {
    id: 'stat2', label: 'STAT2', full: 'Signal transducer and activator of transcription 2',
    compartment: 'cytosol', klass: 'tf', pathways: ['ifn-jak'],
    pos: [-16, 44, 24], lod: 2, evidence: 'S',
    summary: 'Type-I-specific; provides the transactivation domain of ISGF3.',
  },
  {
    id: 'irf9', label: 'IRF9', full: 'Interferon regulatory factor 9 (p48)',
    compartment: 'cytosol', klass: 'tf', pathways: ['ifn-jak'],
    pos: [-22, 48, 30], lod: 2, evidence: 'G',
    summary: 'The DNA-binding subunit of ISGF3; supplies ISRE specificity.',
  },
  {
    id: 'isgf3', label: 'ISGF3', full: 'Interferon-stimulated gene factor 3 (STAT1:STAT2:IRF9)',
    compartment: 'nucleus', klass: 'complex', pathways: ['ifn-jak', 'isg'],
    pos: [-40, 30, -2], lod: 1, evidence: 'S',
    summary: 'The type-I interferon transcription complex. Binds ISRE elements across several hundred ISGs.',
  },

  // ── Nuclear elements ─────────────────────────────────────────────────
  {
    id: 'ifnb1-gene', label: 'IFNB1 locus', full: 'IFN-β gene — the enhanceosome',
    compartment: 'nucleus', klass: 'structure', pathways: ['cgas-sting', 'rlr-mavs', 'tlr'],
    pos: [-30, 22, -8], lod: 1, evidence: 'G',
    summary: 'Requires IRF3 dimers (PRDIII-I) AND NF-κB (PRDII) AND ATF2/c-Jun on the same enhanceosome.',
    detail: 'The AND-gate architecture is why interferon induction is normally so hard to trigger — and why priming ' +
      'several inputs at once, as the ANKIB1 node does, changes the output so dramatically.',
  },
  {
    id: 'isre', label: 'ISRE elements', full: 'Interferon-stimulated response elements',
    compartment: 'nucleus', klass: 'structure', pathways: ['ifn-jak', 'isg'],
    pos: [-48, 18, -4], lod: 2, evidence: 'G',
    summary: 'ISGF3 binding sites upstream of several hundred interferon-stimulated genes.',
  },
  {
    id: 'gas', label: 'GAS elements', full: 'Gamma-activated sequences',
    compartment: 'nucleus', klass: 'structure', pathways: ['ifn-jak'],
    pos: [-42, 28, -22], lod: 2, evidence: 'G',
    summary: 'STAT1-homodimer (GAF) binding sites — the type II interferon transcriptional programme.',
  },
  {
    id: 'isg-set', label: 'ISG programme', full: 'Interferon-stimulated gene set (IFIT1, MX1, OAS, IFI27, ISG15, USP18, RSAD2…)',
    compartment: 'nucleus', klass: 'complex', pathways: ['isg', 'ifn-jak'],
    pos: [-54, 8, -12], lod: 1, evidence: 'S', key: true,
    summary: 'Several hundred genes. The quantitative ISG score is the practical clinical biomarker of this disease.',
    samhd1: 'The concept note predicts a SERONEGATIVE profile: standard serum cytokine panels normal, but intracellular ' +
      'ISG expression elevated. Workup should target IFN-α/β, free ISG15, CXCL10 and ISG scoring rather than a ' +
      'conventional cytokine panel.',
    refs: ['tesser2025', 'docConcept'],
  },
  {
    id: 'pgc1a', label: 'PGC-1α', full: 'PPARG coactivator 1-alpha — master mitochondrial biogenesis regulator',
    compartment: 'nucleus', klass: 'tf', pathways: ['metabolic', 'mito'],
    pos: [-16, 12, -34], lod: 1, evidence: 'S',
    summary: 'Directly repressed by IFN-I/STAT1 → mitochondrial biogenesis failure.',
    detail: 'STAT1-knockout hepatocytes show higher mtDNA content and more mitochondria — the clean demonstration that ' +
      'this repression is real and reversible. Stressor #5 of the mitochondrial figure.',
    refs: ['bhimavarapu2015'],
  },

  // ── ISG effectors and brakes ─────────────────────────────────────────
  {
    id: 'isg15', label: 'ISG15', full: 'Interferon-stimulated gene 15 — ubiquitin-like modifier',
    compartment: 'cytosol', klass: 'effector', pathways: ['isg', 'mitophagy'],
    pos: [-42, 22, 30], lod: 1, evidence: 'S', key: true,
    summary: 'The hinge of the whole ISG arm: stabilises the USP18 brake, but also ISGylates MFN1/2 and BECN1 to block mitophagy.',
    detail: 'ISG15 is simultaneously protective and destructive here. Free ISG15 stabilises USP18 (the IFNAR2 brake), ' +
      'while conjugated ISG15 shuts down the two autophagy routes the cell needs to clear the mitochondria that are ' +
      'generating the ligand. Knockdown restores flux, ΔΨm and ATP.',
    refs: ['zhang2015isg15', 'deng2024', 'xu2015becn1'],
  },
  {
    id: 'usp18', label: 'USP18', full: 'Ubiquitin-specific peptidase 18 — the primary IFNAR2 brake',
    compartment: 'cytosol', klass: 'effector', pathways: ['isg', 'ifn-jak'],
    pos: [-32, 46, 12], lod: 1, evidence: 'S',
    summary: 'Sterically displaces JAK1 from IFNAR2. Its protease activity is dispensable for this function.',
    samhd1: 'Tonic IFN upregulates ISG15, which stabilises USP18 — but this compensatory axis is constitutively ' +
      'overwhelmed by the upstream genetic defect. A brake that is fully engaged and still losing.',
    refs: ['zhang2015isg15'],
  },
  {
    id: 'socs', label: 'SOCS1/3', full: 'Suppressor of cytokine signalling 1 and 3',
    compartment: 'cytosol', klass: 'effector', pathways: ['isg', 'ifn-jak'],
    pos: [-38, 50, 22], lod: 2, evidence: 'G',
    summary: 'Second brake layer: direct JAK inhibition plus ElonginBC-Cul2 ubiquitination of receptor complexes.',
  },
  {
    id: 'irf1', label: 'IRF1', full: 'Interferon regulatory factor 1',
    compartment: 'nucleus', klass: 'tf', pathways: ['isg'],
    pos: [-36, 36, -18], lod: 2, evidence: 'S',
    summary: 'Drives PARP12 → ISG15 in the axis that ISGylates MFN1/2 and blocks PINK1/Parkin mitophagy.',
    refs: ['deng2024'],
  },
];

export const edges = [
  // Transcription of interferon
  { from: 'irf3', to: 'ifnb1-gene', kind: 'translocate', label: 'dimer → nuclear import → PRDIII-I', pathways: ['cgas-sting', 'rlr-mavs', 'tlr'], evidence: 'S', loop: 'A' },
  { from: 'nfkb', to: 'ifnb1-gene', kind: 'activate', label: 'PRDII — the AND-gate partner', pathways: ['nfkb'], evidence: 'G' },
  { from: 'ifnb1-gene', to: 'ifnb', kind: 'produce', label: 'IFN-β synthesis and secretion', pathways: ['cgas-sting', 'ifn-jak'], evidence: 'S', loop: 'A' },
  { from: 'irf7', to: 'ifna', kind: 'produce', label: 'second-wave IFN-α subtypes', pathways: ['ifn-jak'], evidence: 'S', loop: 'irf7' },
  { from: 'irf3', to: 'ifnl', kind: 'produce', pathways: ['ankib1', 'ifn-jak'], evidence: 'G', refs: ['betrancourt2026'] },

  // Receptor engagement
  { from: 'ifnb', to: 'ifnar1', kind: 'bind', label: 'autocrine and paracrine', pathways: ['ifn-jak'], evidence: 'S', loop: 'A' },
  { from: 'ifnb', to: 'ifnar2', kind: 'bind', pathways: ['ifn-jak'], evidence: 'S', loop: 'A' },
  { from: 'ifna', to: 'ifnar1', kind: 'bind', pathways: ['ifn-jak'], evidence: 'S', loop: 'irf7' },
  { from: 'ifng', to: 'ifngr', kind: 'bind', pathways: ['ifn-jak'], evidence: 'G' },
  { from: 'ifnl', to: 'ifnlr', kind: 'bind', pathways: ['ifn-jak'], evidence: 'G' },
  { from: 'il1b', to: 'il1r', kind: 'bind', pathways: ['inflammasome'], evidence: 'G', loop: 'B' },
  { from: 'tnfa', to: 'tnfr', kind: 'bind', pathways: ['nfkb'], evidence: 'G' },
  { from: 'il1r', to: 'myd88', kind: 'activate', label: 'TIR-domain recruitment', pathways: ['nfkb', 'inflammasome'], evidence: 'G', loop: 'B' },
  { from: 'tnfr', to: 'ikk', kind: 'activate', pathways: ['nfkb'], evidence: 'G' },
  { from: 'tnfr', to: 'mptp', kind: 'drive', label: 'ROS → chronic sublethal mPTP opening (stressor S8)', pathways: ['mito'], evidence: 'G', refs: ['shoshan2020'] },

  // JAK module
  { from: 'ifnar1', to: 'tyk2', kind: 'activate', label: 'constitutively associated', pathways: ['ifn-jak'], evidence: 'G', loop: 'A' },
  { from: 'ifnar2', to: 'jak1', kind: 'activate', pathways: ['ifn-jak'], evidence: 'S', loop: 'A' },
  { from: 'ifngr', to: 'jak2', kind: 'activate', pathways: ['ifn-jak'], evidence: 'G' },
  { from: 'ifngr', to: 'jak1', kind: 'activate', pathways: ['ifn-jak'], evidence: 'G' },
  { from: 'ifnlr', to: 'jak1', kind: 'activate', pathways: ['ifn-jak'], evidence: 'G' },
  { from: 'jak1', to: 'stat1', kind: 'phos', label: 'Y701', pathways: ['ifn-jak'], evidence: 'S', loop: 'A' },
  { from: 'tyk2', to: 'stat2', kind: 'phos', label: 'Y690', pathways: ['ifn-jak'], evidence: 'S', loop: 'A' },
  { from: 'jak2', to: 'stat1', kind: 'phos', pathways: ['ifn-jak'], evidence: 'G' },
  { from: 'stat1', to: 'isgf3', kind: 'bind', label: 'STAT1:STAT2:IRF9 assembly', pathways: ['ifn-jak'], evidence: 'S', loop: 'A' },
  { from: 'stat2', to: 'isgf3', kind: 'bind', pathways: ['ifn-jak'], evidence: 'S' },
  { from: 'irf9', to: 'isgf3', kind: 'bind', label: 'supplies ISRE DNA-binding specificity', pathways: ['ifn-jak'], evidence: 'G' },
  { from: 'stat1', to: 'gas', kind: 'translocate', label: 'GAF homodimer → GAS', pathways: ['ifn-jak'], evidence: 'G' },

  // Transcriptional output
  { from: 'isgf3', to: 'isre', kind: 'bind', pathways: ['ifn-jak', 'isg'], evidence: 'S', loop: 'A' },
  { from: 'isre', to: 'isg-set', kind: 'produce', label: 'several hundred ISGs', pathways: ['isg'], evidence: 'S', loop: 'A' },
  { from: 'gas', to: 'isg-set', kind: 'produce', pathways: ['isg'], evidence: 'G' },
  { from: 'isg-set', to: 'isg15', kind: 'produce', pathways: ['isg'], evidence: 'S', loop: 'A' },
  { from: 'isg-set', to: 'usp18', kind: 'produce', pathways: ['isg'], evidence: 'S' },
  { from: 'isg-set', to: 'socs', kind: 'produce', pathways: ['isg'], evidence: 'G' },
  { from: 'isg-set', to: 'irf7', kind: 'produce', label: 'IRF7 is itself an ISG — the amplifier is interferon-inducible', pathways: ['isg', 'ifn-jak'], evidence: 'S', loop: 'irf7', bend: 0.35 },
  { from: 'isg-set', to: 'irf1', kind: 'produce', pathways: ['isg'], evidence: 'S' },
  { from: 'stat1', to: 'pgc1a', kind: 'inhibit', label: 'represses PGC-1α → biogenesis failure (stressor #5)', pathways: ['metabolic', 'mito'], evidence: 'S', refs: ['bhimavarapu2015'] },
  { from: 'stat1', to: 'etc-i', kind: 'inhibit', label: 'sustained STAT1/2 suppresses Complexes I and III', pathways: ['metabolic', 'mito'], evidence: 'S', refs: ['mihaylova2024'] },
  { from: 'stat1', to: 'etc-iii', kind: 'inhibit', pathways: ['metabolic', 'mito'], evidence: 'S' },
  { from: 'pgc1a', to: 'tfam', kind: 'produce', label: 'NRF1/NRF2 → TFAM → biogenesis', pathways: ['mito', 'metabolic'], evidence: 'G' },

  // The two brakes
  { from: 'isg15', to: 'usp18', kind: 'activate', label: 'free ISG15 stabilises USP18 against degradation', pathways: ['isg'], evidence: 'S', refs: ['zhang2015isg15'] },
  { from: 'usp18', to: 'ifnar2', kind: 'inhibit', label: 'sterically displaces JAK1 — the primary brake', pathways: ['isg', 'ifn-jak'], evidence: 'S', bend: 0.3 },
  { from: 'socs', to: 'jak1', kind: 'inhibit', pathways: ['isg'], evidence: 'G' },

  // ISG15 as saboteur
  { from: 'irf1', to: 'isg15', kind: 'produce', label: 'IRF1 → PARP12 → ISG15', pathways: ['isg'], evidence: 'S', refs: ['deng2024'] },
  { from: 'isg15', to: 'mfn', kind: 'inhibit', label: 'ISGylation of MFN1/2 blocks PINK1/Parkin mitophagy', pathways: ['isg', 'mitophagy'], evidence: 'S', refs: ['deng2024'] },
  { from: 'isg15', to: 'becn1', kind: 'inhibit', label: 'ISGylates BECN1, competing with activating K63-Ub (KEYSTONE stressor S6)', pathways: ['isg', 'mitophagy'], evidence: 'S', refs: ['xu2015becn1'] },

  // IRF7 metabolic arm
  { from: 'irf7', to: 'mcp1', kind: 'produce', label: 'transactivates MCP-1 in VISCERAL adipocytes only', pathways: ['metabolic'], evidence: 'S', refs: ['kuroda2020'] },
  { from: 'atp', to: 'gdf15', kind: 'produce', label: 'integrated mitochondrial stress response', pathways: ['metabolic', 'mito'], evidence: 'G', refs: ['che2025'] },

  // NF-κB cytokine output
  { from: 'nfkb', to: 'il6', kind: 'produce', pathways: ['nfkb'], evidence: 'G' },
  { from: 'nfkb', to: 'tnfa', kind: 'produce', pathways: ['nfkb'], evidence: 'G' },
  { from: 'nfkb', to: 'il23', kind: 'produce', pathways: ['nfkb'], evidence: 'G' },
  { from: 'nfkb', to: 'ikba', kind: 'produce', label: 'its own inhibitor — the oscillator that a constitutive drive flattens', pathways: ['nfkb'], evidence: 'G', bend: 0.35 },
  { from: 'il23', to: 'il17a', kind: 'drive', label: 'Th17 differentiation', pathways: ['clinical'], evidence: 'G', refs: ['fragoulis2023'] },
];
