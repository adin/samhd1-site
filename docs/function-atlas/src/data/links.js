/**
 * SAMHD1 Functional Causal Graph — 3D Atlas Data Layer
 * Primary Authoritative Source of Truth for SAMHD1 causal links,
 * feedback loops, allosteric relays, interaction classes, and evidence tiers.
 *
 * Sibling of viz/innate-immune-3d/src/data/links.js
 *
 * Fixed 2026-09-13 (literature-agent audit, confirmed via deepseek/deepseek-
 * v4.1-flash redteam pass): all 90 entries carried a specific evidence_tier
 * (L2/L3/L4) with ZERO `refs` anywhere in the file to support it -- no
 * citation exists in this data layer at all. Downgraded every entry to
 * L1_in_silico, the only tier a zero-citation claim can honestly carry (same
 * fix already applied across the sibling innate-immune atlas). Also removed
 * the phantom `vic_cardiac` cell_context value, templated onto all 90
 * entries with no basis (same root cause as the innate-immune atlas's fix --
 * see that atlas's config.js for the full incident writeup).
 *
 * Also fixed: cgas-sting->ifn-i and cgas-sting->nfkb were both graded
 * 'prevents' (sign -1), contradicting this same node's own 4 upstream edges
 * (dntpase/dna-resection/rloop/line1 -> cgas-sting, all 'prevents'), which
 * frame cgas-sting as the ACTIVATION EVENT those SAMHD1 functions prevent --
 * once activated it must DRIVE its downstream targets, not suppress them.
 * Confirmed against this file's own sting-gain->ifn-i edge (already
 * 'drives') and the sibling innate-immune atlas's sensing.js (sting->tbk1/
 * nemo: 'activate'). Flipped to 'drives' (sign +1 in this atlas's own
 * LINK_KINDS) on both edges; see each edge's own sign_fixed_note.
 *
 * NOT yet done: adding real citations to actually earn each edge's tier (a
 * much larger, per-edge literature-verification project). Also not
 * independently verified: whether the dntpase->cgas-sting `detail` text's
 * "damaged mtDNA" wording conflates the oxidized-mtDNA/NLRP3 ligand with the
 * unoxidized-fragment/cGAS ligand the SIBLING innate-immune atlas's mito.js
 * distinguishes (oxmtdna->nlrp3 vs mtdna-frag->cgas) -- this atlas has no
 * equivalent split at all. Flagged by the same redteam pass, plausible but
 * not confirmed, left as an open question rather than guess-edited.
 */

export const LINKS = [
  {
    "from": "dntpase",
    "to": "sphase",
    "kind": "maintains",
    "evidence": "S",
    "detail": "The dNTP pool is the substrate supply for replication; SAMHD1 holds it in the narrow band S phase requires. Excess is as damaging as scarcity.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dntpase",
    "to": "g1s",
    "kind": "maintains",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dntpase",
    "to": "checkpoint",
    "kind": "maintains",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dntpase",
    "to": "cgas-sting",
    "kind": "prevents",
    "evidence": "S",
    "detail": "An unrestrained dNTP pool degrades POLG fidelity and yields the damaged mtDNA that becomes a cGAS ligand. The enzymatic defect and the interferon phenotype are the same lesion seen at two removes.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "metabolic_bypass_flux",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dntpase",
    "to": "metabolic",
    "kind": "maintains",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dna-resection",
    "to": "checkpoint",
    "kind": "maintains",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dna-resection",
    "to": "cgas-sting",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Failed resection leaves unrepaired ends and micronuclei \u2014 cytosolic DNA that cGAS reads as infection.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "rloop",
    "to": "fork",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Unresolved DNA\u2013RNA hybrids are a principal source of fork collapse; the two functions are one continuous piece of genome maintenance.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "rloop",
    "to": "cgas-sting",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "fork",
    "to": "senescence",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "fork",
    "to": "checkpoint",
    "kind": "maintains",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "telomere",
    "to": "senescence",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "telomere",
    "to": "aging",
    "kind": "prevents",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ox-dna-bind",
    "to": "senescence",
    "kind": "prevents",
    "evidence": "I",
    "detail": "Oxidation enhances SAMHD1's DNA binding, which reads as a damage-responsive mode. Its consequence for senescence is inference, not demonstration.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "line1",
    "to": "cgas-sting",
    "kind": "prevents",
    "evidence": "S",
    "detail": "L1 reverse-transcription intermediates are cytosolic DNA. Restriction failure supplies cGAS with ligand continuously rather than episodically.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "line1",
    "to": "sterile-inflam",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "lentivirus",
    "to": "sterile-inflam",
    "kind": "prevents",
    "evidence": "I",
    "detail": "The antiviral function is well demonstrated; its contribution to STERILE inflammation in an uninfected patient is inference.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dna-virus",
    "to": "sterile-inflam",
    "kind": "prevents",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "rnp-sequestration",
    "to": "ifn-i",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Non-catalytic RNP sequestration and stress-granule trapping prevent retroelement sensing by cytosolic receptors.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "chemo-hydrolysis",
    "to": "sphase",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Hydrolysis of nucleoside analogue triphosphates (Ara-CTP, dFdCTP) prevents premature S-phase arrest and cytotoxicity.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "mrna-deg",
    "to": "transcription",
    "kind": "maintains",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "llps",
    "to": "dsrna-seq",
    "kind": "performs",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "llps",
    "to": "stress-granule",
    "kind": "performs",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dsrna-seq",
    "to": "ifn-i",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Sequestering immunostimulatory dsRNA in condensates keeps it away from RIG-I and MDA5 \u2014 restriction by phase separation rather than by catalysis.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "stress-granule",
    "to": "line1",
    "kind": "maintains",
    "evidence": "G",
    "detail": "L1 ORF1p ribonucleoprotein particles are held in granules, out of circulation.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "vdac1",
    "to": "deltapsi",
    "kind": "maintains",
    "evidence": "S",
    "detail": "SAMHD1 interacts physically with VDAC1 and must be present in the mitochondrial compartment to prevent membrane-potential collapse.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "macropore_translocation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "vdac1",
    "to": "mtdna-leak",
    "kind": "maintains",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "macropore_translocation",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "mtdna-leak",
    "to": "mtdna-ifn",
    "kind": "maintains",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "mtdna-ifn",
    "to": "ifn-i",
    "kind": "prevents",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "deltapsi",
    "to": "cytc",
    "kind": "maintains",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "deltapsi",
    "to": "metabolic",
    "kind": "maintains",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "cytc",
    "to": "apoptosis",
    "kind": "maintains",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "bik",
    "to": "apoptosis",
    "kind": "maintains",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "bik",
    "to": "autophagy",
    "kind": "prevents",
    "evidence": "S",
    "detail": "BIK \u2014 which SAMHD1 itself upregulates \u2014 sequesters BECN1, biasing the cell toward apoptosis over mitophagy.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "autophagy",
    "to": "deltapsi",
    "kind": "maintains",
    "evidence": "G",
    "detail": "Damaged mitochondria that are tagged but not cleared keep degrading the potential of the pool that remains.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "cgas-sting",
    "to": "ifn-i",
    "kind": "drives",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "sign_fixed_note": "Fixed 2026-09-13: was 'prevents'/'allosteric_suppression', a sign inversion. This node's own 4 upstream edges (dntpase/dna-resection/rloop/line1 -> cgas-sting, all 'prevents') frame cgas-sting as the ACTIVATION EVENT SAMHD1 functions prevent from happening -- so once activated, it must DRIVE its downstream targets, not suppress them (cGAS-STING activation drives type-I IFN transcription). Confirmed against this file's own sting-gain->ifn-i edge (already 'drives') and the sibling innate-immune atlas's sensing.js (sting->tbk1/nemo: 'activate').",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "cgas-sting",
    "to": "nfkb",
    "kind": "drives",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "sign_fixed_note": "Fixed 2026-09-13: same sign inversion as the cgas-sting->ifn-i edge above -- see that edge's note.",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "nfkb",
    "to": "sterile-inflam",
    "kind": "prevents",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "nfkb",
    "to": "ip10",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "tlr4",
    "to": "nfkb",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifn-i",
    "to": "ip10",
    "kind": "prevents",
    "evidence": "S",
    "detail": "IP-10/CXCL10 is an ISG; it is the readout by which the interferon arm is measured clinically.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifn-i",
    "to": "m1m2",
    "kind": "prevents",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "m1m2",
    "to": "mono-mac",
    "kind": "maintains",
    "evidence": "S",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "sterile-inflam",
    "to": "cytokine-storm",
    "kind": "prevents",
    "evidence": "I",
    "detail": "The step with the least direct support in the whole atlas. No cytokine-storm event has been documented in this variant; it is a mechanistic extrapolation from the suppression functions, and is graded accordingly.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ip10",
    "to": "cytokine-storm",
    "kind": "prevents",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifn-i",
    "to": "cd8",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "sterile-inflam",
    "to": "prostatitis",
    "kind": "prevents",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "prostatitis",
    "to": "bladder",
    "kind": "drives",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "sterile-inflam",
    "to": "bladder",
    "kind": "prevents",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "checkpoint",
    "to": "cll",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "checkpoint",
    "to": "breast-ca",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "checkpoint",
    "to": "colon-ca",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "checkpoint",
    "to": "lung-ca",
    "kind": "prevents",
    "evidence": "G",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "senescence",
    "to": "prostate-ca",
    "kind": "prevents",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "aging",
    "to": "prostate-ca",
    "kind": "prevents",
    "evidence": "I",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "metabolic",
    "to": "rcc",
    "kind": "drives",
    "evidence": "G",
    "detail": "The exception that keeps the rest honest: here SAMHD1 supports tumour progression, so having less of it is protective rather than harmful.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "site1-gtp",
    "to": "tetramer-switch",
    "kind": "drives",
    "evidence": "S",
    "detail": "GTP binding at Site 1 primes dimer-dimer interface",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "site2-dgtp",
    "to": "tetramer-switch",
    "kind": "drives",
    "evidence": "S",
    "detail": "dNTP binding at Site 2 completes tetramer activation",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "tetramer-switch",
    "to": "dntpase",
    "kind": "drives",
    "evidence": "S",
    "detail": "Active homotetramer executes dNTP hydrolysis",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "tetramer-switch",
    "to": "lentivirus",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Tetramer dNTP depletion blocks lentiviral cDNA synthesis",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "tetramer-switch",
    "to": "dna-virus",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Tetramer dNTP depletion blocks DNA viral replication",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "tetramer-switch",
    "to": "cytarabine-metab",
    "kind": "drives",
    "evidence": "S",
    "detail": "Tetramer active site dephosphorylates Ara-CTP",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "cdk1-cdk2",
    "to": "p-t592",
    "kind": "drives",
    "evidence": "S",
    "detail": "CDK1/2 phosphorylates Thr592 in cycling cells",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "pp2a-b55",
    "to": "p-t592",
    "kind": "prevents",
    "evidence": "G",
    "detail": "PP2A-B55\u03b1 dephosphorylates Thr592 at mitotic exit",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ankib1-ub",
    "to": "sting-gain",
    "kind": "drives",
    "evidence": "S",
    "detail": "K11-ubiquitination creates positive STING gain control",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "sting-gain",
    "to": "ifn-i",
    "kind": "drives",
    "evidence": "S",
    "detail": "K11-ubiquitinated SAMHD1 stabilizes STING signalosome to potentiate Type I IFN output",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dntpase",
    "to": "nlrp3-metab",
    "kind": "prevents",
    "evidence": "S",
    "detail": "SAMHD1 dNTPase depletes dNTP pools that trigger NLRP3",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "nlrp3-metab",
    "to": "il1b-release",
    "kind": "drives",
    "evidence": "S",
    "detail": "NLRP3 assembly drives caspase-1 cleavage and IL-1\u03b2/18 release",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "il1b-release",
    "to": "sterile-inflam",
    "kind": "drives",
    "evidence": "S",
    "detail": "Mature IL-1\u03b2 drives chronic sterile tissue inflammation",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "il1b-release",
    "to": "cytokine-storm",
    "kind": "drives",
    "evidence": "S",
    "detail": "Hyperactive IL-1\u03b2/18 release fuels systemic cytokine storm",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ctip-interact",
    "to": "dna-resection",
    "kind": "drives",
    "evidence": "S",
    "detail": "CtIP recruitment stimulates 5-3 DNA end resection",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "mrn-complex",
    "to": "fork",
    "kind": "maintains",
    "evidence": "S",
    "detail": "MRN interaction coordinates MRE11 fork protection",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dna-resection",
    "to": "rad51-brca2",
    "kind": "drives",
    "evidence": "S",
    "detail": "Resected ssDNA templates RAD51-BRCA2 filament loading",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "rad51-brca2",
    "to": "breast-ca",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Homologous recombination suppresses hereditary breast cancer",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "fork",
    "to": "parp1-axis",
    "kind": "prevents",
    "evidence": "G",
    "detail": "Intact fork protection prevents PARP1 hyperactivation",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "parp1-axis",
    "to": "cll",
    "kind": "drives",
    "evidence": "G",
    "detail": "Replication stress and PARP1 overload drive genomic instability in CLL",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "cytarabine-metab",
    "to": "chemo-sensitivity",
    "kind": "prevents",
    "evidence": "S",
    "detail": "SAMHD1 Ara-C hydrolysis prevents clinical hypersensitivity",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "vpx-degradation",
    "to": "lentivirus",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Vpx degradation destroys SAMHD1 to relieve viral restriction",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "sterile-inflam",
    "to": "mecfs-phenotype",
    "kind": "drives",
    "evidence": "S",
    "detail": "Sterile innate inflammation drives ME/CFS clinical symptoms",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "deltapsi",
    "to": "mecfs-phenotype",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Mitochondrial membrane potential collapse triggers post-exertional crashes",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifn-i",
    "to": "interferonopathy-ags",
    "kind": "drives",
    "evidence": "S",
    "detail": "Constitutive Type I IFN elevation causes Aicardi-Gouti\u00e8res syndrome spectrum",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "nfkb",
    "to": "psa-phenotype",
    "kind": "prevents",
    "evidence": "G",
    "detail": "NF-\u03baB suppression restrains psoriatic synovial inflammation",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "ifn-i",
    "to": "dntpase",
    "kind": "drives",
    "evidence": "S",
    "detail": "[FEEDBACK LOOP] Type I IFN induces SAMHD1 expression via ISRE promoter",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "deltapsi",
    "to": "ox-dna-bind",
    "kind": "drives",
    "evidence": "S",
    "detail": "[FEEDBACK LOOP] Mitochondrial ROS oxidizes C522 to lock DNA binding",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "sphase",
    "to": "cdk1-cdk2",
    "kind": "drives",
    "evidence": "S",
    "detail": "[FEEDBACK LOOP] S-phase entry activates CDK2 kinase",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "signal_transduction",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "autophagy",
    "to": "mtdna-leak",
    "kind": "prevents",
    "evidence": "S",
    "detail": "[FEEDBACK LOOP] Mitophagy clears damaged mitochondria to block mtDNA escape",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "p-t592",
    "to": "lentivirus",
    "kind": "prevents",
    "evidence": "S",
    "detail": "T592 phosphorylation in S/G2 phase switches off retroviral restriction",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "allosteric_suppression",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "p-t592",
    "to": "fork",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Phosphorylated SAMHD1 preserves replication fork protection during DNA synthesis; asymmetric latch uncoupling in heterozygous A565T complexes causes dominant-negative fork collapse",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "p-t592",
    "to": "dna-resection",
    "kind": "maintains",
    "evidence": "I",
    "detail": "Symmetric phosphorylation-gated latch transition is required for coordinated CtIP/MRE11 recruitment to DNA double-strand breaks during homologous recombination",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  },
  {
    "from": "dntpase",
    "to": "telomere",
    "kind": "maintains",
    "evidence": "S",
    "detail": "dGTP pool restriction directly regulates telomerase processivity and telomere length",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homeostatic_coupling",
    "cell_context": [
      "monocyte",
      "macrophage",
      "microglia",
      "cd4_tcell"
    ]
  }
];
