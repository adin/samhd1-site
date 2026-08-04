/**
 * nfkb.js — the NF-κB machinery in full.
 *
 * sensing.js carries the skeleton (NEMO → IKKβ → IκBα → p65/p50). This module
 * supplies everything the skeleton hides:
 *
 *   · the upstream kinase (TAK1/TAB) and the ubiquitin scaffolding (LUBAC, M1
 *     linear chains) that actually recruits and activates the IKK complex,
 *   · the deubiquitinase brakes (A20, CYLD, OTULIN) that are supposed to shut it
 *     off — the NF-κB analogue of the four failed brakes,
 *   · the NON-canonical arm (NIK → IKKα → p100→p52 : RelB), which is the BAFF /
 *     B-cell-differentiation route amlexanox suppresses,
 *   · the target-gene set, so "NF-κB primes NLRP3" stops being a single arrow.
 *
 * Why this matters here: NF-κB is signal 1 of the inflammasome, the source of
 * IL-23 for the Th17/psoriatic arm, and the transcriptional origin of pro-IL-1β
 * and pro-IL-18 — which means it is upstream of Loop B AND of the IFN-γ loop.
 * LUBAC is also Walczak's own system, the same laboratory that described the
 * ANKIB1 K11 node, so the linear-ubiquitin and K11 arms of this figure come
 * from one body of work.
 */

export const nodes = [
  // ── Upstream activation ──────────────────────────────────────────────
  {
    id: 'tak1', label: 'TAK1 / TAB1-3', full: 'TGF-β-activated kinase 1 (MAP3K7) with its TAB adaptors',
    compartment: 'cytosol', klass: 'kinase', pathways: ['nfkb'],
    pos: [-14, -22, 30], lod: 2, evidence: 'G',
    summary: 'Reads K63-ubiquitin chains through TAB2/3 and phosphorylates IKKβ at Ser177/181.',
    detail: 'TAK1 is the branch point where innate signalling splits between NF-κB and the MAPK arm ' +
      '(p38, JNK → AP-1). Everything upstream — TRAF6, RIP1, MyD88 — converges here before the pathway commits.',
  },
  {
    id: 'lubac', label: 'LUBAC', full: 'Linear ubiquitin chain assembly complex — HOIP / HOIL-1 / SHARPIN',
    compartment: 'cytosol', klass: 'enzyme', pathways: ['nfkb', 'ankib1'],
    pos: [4, -22, 20], lod: 2, evidence: 'G',
    summary: 'The only E3 that builds M1-linear ubiquitin. Conjugates it onto NEMO, stabilising the active IKK complex.',
    detail: 'LUBAC is what converts a transient receptor event into a sustained IKK signal: linear chains on NEMO ' +
      'create a self-reinforcing recruitment surface. It is also the system in which the ANKIB1 K11 work was done — ' +
      'the linear-ubiquitin and K11-ubiquitin arms of this atlas come out of the same laboratory, which is why the ' +
      'gain-control framing transfers cleanly between them.',
    refs: ['betrancourt2026'],
  },
  {
    id: 'm1ub', label: 'M1-linear Ub', full: 'Met1-linked (linear) polyubiquitin',
    compartment: 'cytosol', klass: 'metabolite', pathways: ['nfkb'],
    pos: [-2, -18, 14], lod: 2, evidence: 'G',
    summary: 'Head-to-tail ubiquitin chains — the linkage NEMO binds with highest affinity.',
  },

  // ── The brakes that are supposed to close it ─────────────────────────
  {
    id: 'a20', label: 'A20 / TNFAIP3', full: 'Tumour necrosis factor alpha-induced protein 3',
    compartment: 'cytosol', klass: 'effector', pathways: ['nfkb'],
    pos: [-28, -26, 18], lod: 2, evidence: 'G',
    summary: 'NF-κB target gene and NF-κB terminator: a dual DUB/E3 that strips K63 chains and adds K48.',
    detail: 'A20 is the pathway\'s own off-switch, transcribed by the very signal it exists to end. That negative ' +
      'feedback is why healthy NF-κB signalling oscillates rather than plateaus — and why a constitutive upstream ' +
      'drive produces a fundamentally different waveform, not merely a bigger one.',
  },
  {
    id: 'cyld', label: 'CYLD', full: 'Cylindromatosis lysine 63 deubiquitinase',
    compartment: 'cytosol', klass: 'effector', pathways: ['nfkb'],
    pos: [-34, -20, 24], lod: 2, evidence: 'G',
    summary: 'Removes K63 and M1 chains from NEMO, TRAF2/6 and RIP1. A tumour suppressor, for the obvious reason.',
  },
  {
    id: 'otulin', label: 'OTULIN', full: 'OTU deubiquitinase with linear linkage specificity',
    compartment: 'cytosol', klass: 'effector', pathways: ['nfkb'],
    pos: [-24, -14, 30], lod: 2, evidence: 'G',
    summary: 'Exclusively hydrolyses M1-linear chains, counter-balancing LUBAC. Its loss causes ORAS, an autoinflammatory syndrome.',
    detail: 'OTULIN deficiency is instructive here: losing a single linear-chain-editing enzyme is enough to produce ' +
      'systemic autoinflammation in humans. Ubiquitin-linkage editing is not a detail of this pathway — it is the ' +
      'control system.',
  },

  // ── Non-canonical arm ────────────────────────────────────────────────
  {
    id: 'nik', label: 'NIK', full: 'NF-κB-inducing kinase (MAP3K14)',
    compartment: 'cytosol', klass: 'kinase', pathways: ['nfkb'],
    pos: [-34, -6, 34], lod: 2, evidence: 'G',
    summary: 'Constitutively degraded at rest; stabilised by receptor engagement, then activates IKKα.',
  },
  {
    id: 'ikka', label: 'IKKα', full: 'Inhibitor of κB kinase alpha (CHUK) — the non-canonical catalytic subunit',
    compartment: 'cytosol', klass: 'kinase', pathways: ['nfkb'],
    pos: [-40, -12, 30], lod: 2, evidence: 'G',
    summary: 'Phosphorylates p100 for partial proteasomal processing to p52 — a slower, NEMO-independent arm.',
  },
  {
    id: 'relb', label: 'p52 : RelB', full: 'Non-canonical NF-κB heterodimer',
    compartment: 'nucleus', klass: 'tf', pathways: ['nfkb'],
    pos: [-46, 4, 2], lod: 2, evidence: 'G',
    summary: 'Drives BAFF, CCL19/21 and lymphoid-organisation genes rather than the acute inflammatory set.',
  },
  {
    id: 'baff', label: 'BAFF', full: 'B-cell activating factor (TNFSF13B)',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['nfkb', 'th17'],
    pos: [-64, 88, 26], lod: 2, evidence: 'G',
    summary: 'B-cell survival and differentiation factor; elevated across interferonopathies and autoimmune disease.',
    samhd1: 'Amlexanox suppresses BAFF induction alongside type-I IFN production — one of the reasons the ' +
      'TBK1/IKKε clamp is expected to reach further than JAK1 blockade alone.',
    refs: ['bjork2025'],
  },

  // ── Transcriptional output ───────────────────────────────────────────
  {
    id: 'nfkb-targets', label: 'NF-κB target set', full: 'κB-element gene set — NLRP3, IL1B, IL18, IL6, IL23A, TNF, CXCL8, NFKBIA, TNFAIP3',
    compartment: 'nucleus', klass: 'complex', pathways: ['nfkb', 'inflammasome'],
    pos: [-24, -4, -26], lod: 1, evidence: 'S', key: true,
    summary: 'One transcription factor, the entire priming layer: the inflammasome components, its substrates, the Th17-driving cytokine, and its own brakes.',
    detail: 'Reading the target list explains why "NF-κB primes NLRP3" is doing so much work as a phrase. The same ' +
      'activation event supplies NLRP3 protein, pro-IL-1β AND pro-IL-18 (the two inflammasome substrates), IL-23 ' +
      '(the Th17 driver), IL-6, TNF-α, and both of its own negative regulators. Signal 1 is not a permissive step; ' +
      'it builds the whole downstream apparatus.',
    samhd1: 'SAMHD1 suppresses the NF-κB pathway directly, so haploinsufficiency raises the resting level of every ' +
      'gene on this list at once. That is Brake 4 — and it is why Loop B and the Th17 arm are elevated at baseline ' +
      'rather than only after a trigger.',
    refs: ['wang2018', 'swanson2019'],
  },
  {
    id: 'proil18', label: 'pro-IL-18', full: 'Inactive interleukin-18 precursor',
    compartment: 'cytosol', klass: 'cytokine', pathways: ['inflammasome', 'nfkb', 'ifn-gamma'],
    pos: [36, -22, 2], lod: 2, evidence: 'G',
    summary: 'Unlike pro-IL-1β, it is constitutively present in many cells — so caspase-1 activation alone can release mature IL-18 fast.',
    detail: 'This asymmetry matters for the IFN-γ loop: IL-18 does not have to wait for signal 1, so a purely ' +
      'metabolic NLRP3 trigger can drive IFN-γ induction without any classical priming event.',
  },
  {
    id: 'cxcl8', label: 'CXCL8 / IL-8', full: 'Interleukin-8 — neutrophil chemoattractant',
    compartment: 'extracellular', klass: 'cytokine', pathways: ['nfkb'],
    pos: [-50, 88, 34], lod: 2, evidence: 'G',
    summary: 'Canonical NF-κB output and part of the ME/CFS cytokine panel measured in Arm 1.',
    refs: ['che2025'],
  },
];

export const edges = [
  // Canonical activation
  { from: 'traf6', to: 'tak1', kind: 'activate', label: 'K63 chains read by TAB2/3', pathways: ['nfkb'], evidence: 'G' },
  { from: 'tak1', to: 'ikk', kind: 'phos', label: 'Ser177/181 on the activation loop', pathways: ['nfkb'], evidence: 'G' },
  { from: 'lubac', to: 'm1ub', kind: 'produce', label: 'the only E3 that builds head-to-tail chains', pathways: ['nfkb'], evidence: 'G' },
  { from: 'm1ub', to: 'nemo', kind: 'ubiq', label: 'linear chains on NEMO stabilise the active IKK complex', pathways: ['nfkb'], evidence: 'G' },

  // The brakes
  { from: 'a20', to: 'nemo', kind: 'inhibit', label: 'strips K63, adds K48 — the pathway\'s own off-switch', pathways: ['nfkb'], evidence: 'G', bend: 0.28 },
  { from: 'cyld', to: 'nemo', kind: 'inhibit', label: 'removes K63 and M1 chains', pathways: ['nfkb'], evidence: 'G' },
  { from: 'otulin', to: 'm1ub', kind: 'degrade', label: 'linear-chain-specific hydrolysis, counter-balancing LUBAC', pathways: ['nfkb'], evidence: 'G' },
  { from: 'nfkb-targets', to: 'a20', kind: 'produce', label: 'A20 is an NF-κB target gene — negative feedback', pathways: ['nfkb'], evidence: 'G', bend: 0.3 },

  // Non-canonical arm
  { from: 'nik', to: 'ikka', kind: 'phos', pathways: ['nfkb'], evidence: 'G' },
  { from: 'ikka', to: 'relb', kind: 'activate', label: 'p100 → p52 partial proteasomal processing', pathways: ['nfkb'], evidence: 'G' },
  { from: 'relb', to: 'baff', kind: 'produce', pathways: ['nfkb'], evidence: 'G' },
  { from: 'tbk1', to: 'nik', kind: 'activate', label: 'TBK1/IKKε cross-talk into the non-canonical arm', pathways: ['nfkb', 'ankib1'], evidence: 'I' },

  // Transcriptional output — the priming layer, spelled out
  { from: 'nfkb', to: 'nfkb-targets', kind: 'translocate', label: 'nuclear import → κB elements', pathways: ['nfkb'], evidence: 'S' },
  { from: 'nfkb-targets', to: 'nlrp3', kind: 'produce', label: 'NLRP3 protein — signal 1', pathways: ['nfkb', 'inflammasome'], evidence: 'S', loop: 'B' },
  { from: 'nfkb-targets', to: 'proil1b', kind: 'produce', label: 'pro-IL-1β — inflammasome substrate 1', pathways: ['nfkb', 'inflammasome'], evidence: 'G', loop: 'B' },
  { from: 'nfkb-targets', to: 'proil18', kind: 'produce', label: 'pro-IL-18 — inflammasome substrate 2', pathways: ['nfkb', 'inflammasome', 'ifn-gamma'], evidence: 'G', loop: 'C' },
  { from: 'nfkb-targets', to: 'il23', kind: 'produce', label: 'IL-23p19 — the Th17 driver', pathways: ['nfkb', 'th17'], evidence: 'G' },
  { from: 'nfkb-targets', to: 'il6', kind: 'produce', pathways: ['nfkb'], evidence: 'G' },
  { from: 'nfkb-targets', to: 'tnfa', kind: 'produce', pathways: ['nfkb'], evidence: 'G' },
  { from: 'nfkb-targets', to: 'cxcl8', kind: 'produce', pathways: ['nfkb'], evidence: 'G' },
  { from: 'nfkb-targets', to: 'ikba', kind: 'produce', label: 'its own inhibitor — the oscillator a constitutive drive flattens', pathways: ['nfkb'], evidence: 'G' },
  { from: 'proil18', to: 'il18', kind: 'produce', label: 'caspase-1 cleavage → mature IL-18', pathways: ['inflammasome', 'ifn-gamma'], evidence: 'S', loop: 'C' },
  { from: 'casp1', to: 'proil18', kind: 'activate', label: 'cleaves pro-IL-18', pathways: ['inflammasome', 'ifn-gamma'], evidence: 'S', loop: 'C' },

  // SAMHD1's brake lands on the whole target set, not just the transcription factor
  { from: 'samhd1', to: 'nfkb-targets', kind: 'inhibit', label: 'BRAKE 4 — suppression here lowers the entire priming layer at once', pathways: ['samhd1', 'nfkb'], evidence: 'S', refs: ['wang2018'] },
];
