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
 * Fixed 2026-09-20 (bottom-up Laya decision shakedown & literature audit):
 * 1. Resolved Option A ontology alignment across both atlases: intermediate
 *    signaling, transcription factor, and chemokine cascades (tlr4->nfkb,
 *    nfkb->sterile-inflam, ifn-i->ip10, nfkb->ip10, ifn-i->cd8, ifn-i->m1m2,
 *    ip10->cytokine-storm, sterile-inflam->cytokine-storm, sterile-inflam->
 *    prostatitis, sterile-inflam->bladder, nfkb->psa-phenotype, aging->
 *    prostate-ca) flipped from copy-pasted 'prevents' to forward 'drives' (+1).
 * 2. Checkpoint and DNA repair edges (checkpoint->cll/breast/colon/lung,
 *    senescence->prostate-ca, rad51-brca2->breast-ca) retain tumor suppressive
 *    'prevents' (-1) but interaction_type corrected from 'allosteric_suppression'
 *    to 'tumor_suppression' / 'homologous_recombination'.
 * 3. Resolved the dntpase->cgas-sting ligand conflation: clarified that
 *    unoxidized mtDNA fragments / nuclear debris activate cGAS (Loop A), whereas
 *    oxidized mtDNA specifically engages the parallel NLRP3 inflammasome (Loop B;
 *    Liu et al. 2026, Science).
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
    "detail": "SAMHD1 dNTPase activity restrains the cytosolic dNTP pool, preventing mitochondrial nucleotide overload, VDAC1 oligomerization, and replication fork collapse that release unoxidized mtDNA fragments and nuclear DNA debris into the cytosol to activate cGAS. (Note: degraded POLG fidelity and oxidized mtDNA specifically feed the parallel NLRP3 inflammasome axis, not cGAS; see Liu et al. 2026, Science).",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "metabolic_pool_restriction",
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
    "kind": "drives",
    "evidence": "S",
    "detail": "Cytosolic mtDNA fragments escaped from permeabilized mitochondria engage cytosolic nucleic acid sensors to drive type-I interferon expression and downstream ISG transcription.",
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
    "kind": "drives",
    "evidence": "S",
    "detail": "NF-κB nuclear translocation transactivates pro-inflammatory cytokines (IL-1β, TNF-α, IL-6) and primes NLRP3 inflammasome expression during sterile tissue injury.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "transcriptional_activation",
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
    "kind": "drives",
    "evidence": "G",
    "detail": "NF-κB (p65/RelA) binds twin κB elements in the CXCL10 promoter and cooperates with ISGF3 to drive maximal chemokine induction.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "transcriptional_activation",
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
    "kind": "drives",
    "evidence": "G",
    "detail": "TLR4 engages MyD88/TRAF6/TAK1 to activate the IKK complex, inducing IκBα phosphorylation and degradation to license canonical NF-κB nuclear translocation.",
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
    "from": "ifn-i",
    "to": "ip10",
    "kind": "drives",
    "evidence": "S",
    "detail": "Type I IFN signaling via IFNAR1/2 and ISGF3 (STAT1/STAT2/IRF9) directly transactivates the CXCL10 (IP-10) promoter; principal clinical biomarker of the interferon signature.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "transcriptional_activation",
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
    "kind": "drives",
    "evidence": "S",
    "detail": "Type I IFNs signal via STAT1 to drive classical pro-inflammatory M1 macrophage polarization while actively suppressing alternative M2 tissue repair programs.",
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
    "kind": "drives",
    "evidence": "I",
    "detail": "Unchecked sterile inflammation and bystander pyroptotic/necroptotic cell death escalate into systemic hypercytokinemia and cytokine release syndrome.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "systemic_escalation",
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
    "kind": "drives",
    "evidence": "I",
    "detail": "CXCL10 (IP-10) engages CXCR3 to recruit effector T cells and NK cells, establishing positive feedback loops that amplify systemic cytokine storm cascades.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "chemotaxis",
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
    "kind": "drives",
    "evidence": "G",
    "detail": "Type I IFNs provide Signal 3 to license CD8+ T cell clonal expansion, cytotoxic effector differentiation, and autoimmune tissue infiltration in interferonopathies.",
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
    "to": "prostatitis",
    "kind": "drives",
    "evidence": "I",
    "detail": "Sterile DAMP sensing, mast cell degranulation, and macrophage cytokine release in the prostatic stroma drive chronic non-infectious prostatitis and pelvic pain.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "tissue_pathogenesis",
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
    "kind": "drives",
    "evidence": "I",
    "detail": "Pelvic sterile inflammation and viscero-visceral dorsal root cross-sensitization activate bladder sensory C-fibers, driving detrusor hyperreflexia and neurogenic cystitis.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "neurogenic_inflammation",
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
    "detail": "Intact DNA damage checkpoint arrest prevents replication of aberrant B-lymphocytes; haploinsufficiency relieves this brake, permitting CLL leukemogenesis.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "tumor_suppression",
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
    "detail": "Cell cycle checkpoint surveillance halts replication at damaged forks, preventing genomic instability and malignant breast transformation.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "tumor_suppression",
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
    "detail": "DNA damage checkpoint enforcement restrains mutational escalation in high-turnover intestinal crypt stem cells.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "tumor_suppression",
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
    "detail": "Checkpoint gating halts the division of cells harboring replication-associated lesions, suppressing lung adenocarcinoma progression.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "tumor_suppression",
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
    "detail": "Intact cellular senescence functions as a tumor-suppressive barrier, halting replication of damaged pre-malignant prostate epithelial cells.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "tumor_suppression",
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
    "kind": "drives",
    "evidence": "I",
    "detail": "Premature cellular aging, telomere attrition, and the accumulation of senescent stromal SASP directly promote prostate adenocarcinoma progression.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "oncogenic_niche",
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
    "detail": "High-fidelity homologous recombination repair mediated by RAD51 and BRCA2 prevents loss of heterozygosity and hereditary breast carcinogenesis.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "homologous_recombination",
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
    "kind": "drives",
    "evidence": "G",
    "detail": "Active NF-\u03baB transactivates TNF-\u03b1, IL-23, and IL-6, driving Th17-mediated synovial inflammation, periarticular bone erosion, and enthesitis.",
    "evidence_tier": "L1_in_silico",
    "interaction_type": "synovial_pathogenesis",
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
    "detail": "Phosphorylated SAMHD1 preserves replication fork protection during DNA synthesis; asymmetric latch uncoupling in modeled heterozygous A565T complexes is hypothesized to impair fork stability via dominant-negative kinetics",
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
