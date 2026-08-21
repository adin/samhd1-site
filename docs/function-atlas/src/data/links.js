/**
 * SAMHD1 Functional Causal Graph — 3D Atlas Data Layer
 * Primary Authoritative Source of Truth for SAMHD1 causal links,
 * feedback loops, allosteric relays, and mechanistic evidence.
 *
 * Sibling of viz/innate-immune-3d/src/data/links.js
 */

export const LINKS = [
  {
    "from": "dntpase",
    "to": "sphase",
    "kind": "maintains",
    "evidence": "S",
    "detail": "The dNTP pool is the substrate supply for replication; SAMHD1 holds it in the narrow band S phase requires. Excess is as damaging as scarcity."
  },
  {
    "from": "dntpase",
    "to": "g1s",
    "kind": "maintains",
    "evidence": "G"
  },
  {
    "from": "dntpase",
    "to": "checkpoint",
    "kind": "maintains",
    "evidence": "G"
  },
  {
    "from": "dntpase",
    "to": "cgas-sting",
    "kind": "prevents",
    "evidence": "S",
    "detail": "An unrestrained dNTP pool degrades POLG fidelity and yields the damaged mtDNA that becomes a cGAS ligand. The enzymatic defect and the interferon phenotype are the same lesion seen at two removes."
  },
  {
    "from": "dntpase",
    "to": "metabolic",
    "kind": "maintains",
    "evidence": "G"
  },
  {
    "from": "dna-resection",
    "to": "checkpoint",
    "kind": "maintains",
    "evidence": "S"
  },
  {
    "from": "dna-resection",
    "to": "cgas-sting",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Failed resection leaves unrepaired ends and micronuclei — cytosolic DNA that cGAS reads as infection."
  },
  {
    "from": "rloop",
    "to": "fork",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Unresolved DNA–RNA hybrids are a principal source of fork collapse; the two functions are one continuous piece of genome maintenance."
  },
  {
    "from": "rloop",
    "to": "cgas-sting",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "fork",
    "to": "senescence",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "fork",
    "to": "checkpoint",
    "kind": "maintains",
    "evidence": "S"
  },
  {
    "from": "telomere",
    "to": "senescence",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "telomere",
    "to": "aging",
    "kind": "prevents",
    "evidence": "I"
  },
  {
    "from": "ox-dna-bind",
    "to": "senescence",
    "kind": "prevents",
    "evidence": "I",
    "detail": "Oxidation enhances SAMHD1's DNA binding, which reads as a damage-responsive mode. Its consequence for senescence is inference, not demonstration."
  },
  {
    "from": "line1",
    "to": "cgas-sting",
    "kind": "prevents",
    "evidence": "S",
    "detail": "L1 reverse-transcription intermediates are cytosolic DNA. Restriction failure supplies cGAS with ligand continuously rather than episodically."
  },
  {
    "from": "line1",
    "to": "sterile-inflam",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "lentivirus",
    "to": "sterile-inflam",
    "kind": "prevents",
    "evidence": "I",
    "detail": "The antiviral function is well demonstrated; its contribution to STERILE inflammation in an uninfected patient is inference."
  },
  {
    "from": "dna-virus",
    "to": "sterile-inflam",
    "kind": "prevents",
    "evidence": "I"
  },
  {
    "from": "rnp-sequestration",
    "to": "ifn-i",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Non-catalytic RNP sequestration and stress-granule trapping prevent retroelement sensing by cytosolic receptors."
  },
  {
    "from": "chemo-hydrolysis",
    "to": "sphase",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Hydrolysis of nucleoside analogue triphosphates (Ara-CTP, dFdCTP) prevents premature S-phase arrest and cytotoxicity."
  },
  {
    "from": "mrna-deg",
    "to": "transcription",
    "kind": "maintains",
    "evidence": "I"
  },
  {
    "from": "llps",
    "to": "dsrna-seq",
    "kind": "performs",
    "evidence": "S"
  },
  {
    "from": "llps",
    "to": "stress-granule",
    "kind": "performs",
    "evidence": "G"
  },
  {
    "from": "dsrna-seq",
    "to": "ifn-i",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Sequestering immunostimulatory dsRNA in condensates keeps it away from RIG-I and MDA5 — restriction by phase separation rather than by catalysis."
  },
  {
    "from": "stress-granule",
    "to": "line1",
    "kind": "maintains",
    "evidence": "G",
    "detail": "L1 ORF1p ribonucleoprotein particles are held in granules, out of circulation."
  },
  {
    "from": "vdac1",
    "to": "deltapsi",
    "kind": "maintains",
    "evidence": "S",
    "detail": "SAMHD1 interacts physically with VDAC1 and must be present in the mitochondrial compartment to prevent membrane-potential collapse."
  },
  {
    "from": "vdac1",
    "to": "mtdna-leak",
    "kind": "maintains",
    "evidence": "S"
  },
  {
    "from": "mtdna-leak",
    "to": "mtdna-ifn",
    "kind": "maintains",
    "evidence": "S"
  },
  {
    "from": "mtdna-ifn",
    "to": "ifn-i",
    "kind": "prevents",
    "evidence": "S"
  },
  {
    "from": "deltapsi",
    "to": "cytc",
    "kind": "maintains",
    "evidence": "S"
  },
  {
    "from": "deltapsi",
    "to": "metabolic",
    "kind": "maintains",
    "evidence": "G"
  },
  {
    "from": "cytc",
    "to": "apoptosis",
    "kind": "maintains",
    "evidence": "S"
  },
  {
    "from": "bik",
    "to": "apoptosis",
    "kind": "maintains",
    "evidence": "S"
  },
  {
    "from": "bik",
    "to": "autophagy",
    "kind": "prevents",
    "evidence": "S",
    "detail": "BIK — which SAMHD1 itself upregulates — sequesters BECN1, biasing the cell toward apoptosis over mitophagy."
  },
  {
    "from": "autophagy",
    "to": "deltapsi",
    "kind": "maintains",
    "evidence": "G",
    "detail": "Damaged mitochondria that are tagged but not cleared keep degrading the potential of the pool that remains."
  },
  {
    "from": "cgas-sting",
    "to": "ifn-i",
    "kind": "prevents",
    "evidence": "S"
  },
  {
    "from": "cgas-sting",
    "to": "nfkb",
    "kind": "prevents",
    "evidence": "S"
  },
  {
    "from": "nfkb",
    "to": "sterile-inflam",
    "kind": "prevents",
    "evidence": "S"
  },
  {
    "from": "nfkb",
    "to": "ip10",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "tlr4",
    "to": "nfkb",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "ifn-i",
    "to": "ip10",
    "kind": "prevents",
    "evidence": "S",
    "detail": "IP-10/CXCL10 is an ISG; it is the readout by which the interferon arm is measured clinically."
  },
  {
    "from": "ifn-i",
    "to": "m1m2",
    "kind": "prevents",
    "evidence": "S"
  },
  {
    "from": "m1m2",
    "to": "mono-mac",
    "kind": "maintains",
    "evidence": "S"
  },
  {
    "from": "sterile-inflam",
    "to": "cytokine-storm",
    "kind": "prevents",
    "evidence": "I",
    "detail": "The step with the least direct support in the whole atlas. No cytokine-storm event has been documented in this variant; it is a mechanistic extrapolation from the suppression functions, and is graded accordingly."
  },
  {
    "from": "ip10",
    "to": "cytokine-storm",
    "kind": "prevents",
    "evidence": "I"
  },
  {
    "from": "ifn-i",
    "to": "cd8",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "sterile-inflam",
    "to": "prostatitis",
    "kind": "prevents",
    "evidence": "I"
  },
  {
    "from": "prostatitis",
    "to": "bladder",
    "kind": "drives",
    "evidence": "I"
  },
  {
    "from": "sterile-inflam",
    "to": "bladder",
    "kind": "prevents",
    "evidence": "I"
  },
  {
    "from": "checkpoint",
    "to": "cll",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "checkpoint",
    "to": "breast-ca",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "checkpoint",
    "to": "colon-ca",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "checkpoint",
    "to": "lung-ca",
    "kind": "prevents",
    "evidence": "G"
  },
  {
    "from": "senescence",
    "to": "prostate-ca",
    "kind": "prevents",
    "evidence": "I"
  },
  {
    "from": "aging",
    "to": "prostate-ca",
    "kind": "prevents",
    "evidence": "I"
  },
  {
    "from": "metabolic",
    "to": "rcc",
    "kind": "drives",
    "evidence": "G",
    "detail": "The exception that keeps the rest honest: here SAMHD1 supports tumour progression, so having less of it is protective rather than harmful."
  },
  {
    "from": "site1-gtp",
    "to": "tetramer-switch",
    "kind": "drives",
    "evidence": "S",
    "detail": "GTP binding at Site 1 primes dimer-dimer interface"
  },
  {
    "from": "site2-dgtp",
    "to": "tetramer-switch",
    "kind": "drives",
    "evidence": "S",
    "detail": "dNTP binding at Site 2 completes tetramer activation"
  },
  {
    "from": "tetramer-switch",
    "to": "dntpase",
    "kind": "drives",
    "evidence": "S",
    "detail": "Active homotetramer executes dNTP hydrolysis"
  },
  {
    "from": "tetramer-switch",
    "to": "lentivirus",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Tetramer dNTP depletion blocks lentiviral cDNA synthesis"
  },
  {
    "from": "tetramer-switch",
    "to": "dna-virus",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Tetramer dNTP depletion blocks DNA viral replication"
  },
  {
    "from": "tetramer-switch",
    "to": "cytarabine-metab",
    "kind": "drives",
    "evidence": "S",
    "detail": "Tetramer active site dephosphorylates Ara-CTP"
  },
  {
    "from": "cdk1-cdk2",
    "to": "p-t592",
    "kind": "drives",
    "evidence": "S",
    "detail": "CDK1/2 phosphorylates Thr592 in cycling cells"
  },
  {
    "from": "pp2a-b55",
    "to": "p-t592",
    "kind": "prevents",
    "evidence": "G",
    "detail": "PP2A-B55α dephosphorylates Thr592 at mitotic exit"
  },
  {
    "from": "ankib1-ub",
    "to": "sting-gain",
    "kind": "drives",
    "evidence": "S",
    "detail": "K11-ubiquitination creates positive STING gain control"
  },
  {
    "from": "sting-gain",
    "to": "ifn-i",
    "kind": "drives",
    "evidence": "S",
    "detail": "K11-ubiquitinated SAMHD1 stabilizes STING signalosome to potentiate Type I IFN output"
  },
  {
    "from": "dntpase",
    "to": "nlrp3-metab",
    "kind": "prevents",
    "evidence": "S",
    "detail": "SAMHD1 dNTPase depletes dNTP pools that trigger NLRP3"
  },
  {
    "from": "nlrp3-metab",
    "to": "il1b-release",
    "kind": "drives",
    "evidence": "S",
    "detail": "NLRP3 assembly drives caspase-1 cleavage and IL-1β/18 release"
  },
  {
    "from": "il1b-release",
    "to": "sterile-inflam",
    "kind": "drives",
    "evidence": "S",
    "detail": "Mature IL-1β drives chronic sterile tissue inflammation"
  },
  {
    "from": "il1b-release",
    "to": "cytokine-storm",
    "kind": "drives",
    "evidence": "S",
    "detail": "Hyperactive IL-1β/18 release fuels systemic cytokine storm"
  },
  {
    "from": "ctip-interact",
    "to": "dna-resection",
    "kind": "drives",
    "evidence": "S",
    "detail": "CtIP recruitment stimulates 5-3 DNA end resection"
  },
  {
    "from": "mrn-complex",
    "to": "fork",
    "kind": "maintains",
    "evidence": "S",
    "detail": "MRN interaction coordinates MRE11 fork protection"
  },
  {
    "from": "dna-resection",
    "to": "rad51-brca2",
    "kind": "drives",
    "evidence": "S",
    "detail": "Resected ssDNA templates RAD51-BRCA2 filament loading"
  },
  {
    "from": "rad51-brca2",
    "to": "breast-ca",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Homologous recombination suppresses hereditary breast cancer"
  },
  {
    "from": "fork",
    "to": "parp1-axis",
    "kind": "prevents",
    "evidence": "G",
    "detail": "Intact fork protection prevents PARP1 hyperactivation"
  },
  {
    "from": "parp1-axis",
    "to": "cll",
    "kind": "drives",
    "evidence": "G",
    "detail": "Replication stress and PARP1 overload drive genomic instability in CLL"
  },
  {
    "from": "cytarabine-metab",
    "to": "chemo-sensitivity",
    "kind": "prevents",
    "evidence": "S",
    "detail": "SAMHD1 Ara-C hydrolysis prevents clinical hypersensitivity"
  },
  {
    "from": "vpx-degradation",
    "to": "lentivirus",
    "kind": "prevents",
    "evidence": "S",
    "detail": "Vpx degradation destroys SAMHD1 to relieve viral restriction"
  },
  {
    "from": "sterile-inflam",
    "to": "mecfs-phenotype",
    "kind": "drives",
    "evidence": "S",
    "detail": "Sterile innate inflammation drives ME/CFS clinical symptoms"
  },
  {
    "from": "deltapsi",
    "to": "mecfs-phenotype",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Mitochondrial membrane potential collapse triggers post-exertional crashes"
  },
  {
    "from": "ifn-i",
    "to": "interferonopathy-ags",
    "kind": "drives",
    "evidence": "S",
    "detail": "Constitutive Type I IFN elevation causes Aicardi-Goutières syndrome spectrum"
  },
  {
    "from": "nfkb",
    "to": "psa-phenotype",
    "kind": "prevents",
    "evidence": "G",
    "detail": "NF-κB suppression restrains psoriatic synovial inflammation"
  },
  {
    "from": "ifn-i",
    "to": "dntpase",
    "kind": "drives",
    "evidence": "S",
    "detail": "[FEEDBACK LOOP] Type I IFN induces SAMHD1 expression via ISRE promoter"
  },
  {
    "from": "deltapsi",
    "to": "ox-dna-bind",
    "kind": "drives",
    "evidence": "S",
    "detail": "[FEEDBACK LOOP] Mitochondrial ROS oxidizes C522 to lock DNA binding"
  },
  {
    "from": "sphase",
    "to": "cdk1-cdk2",
    "kind": "drives",
    "evidence": "S",
    "detail": "[FEEDBACK LOOP] S-phase entry activates CDK2 kinase"
  },
  {
    "from": "autophagy",
    "to": "mtdna-leak",
    "kind": "prevents",
    "evidence": "S",
    "detail": "[FEEDBACK LOOP] Mitophagy clears damaged mitochondria to block mtDNA escape"
  },
  {
    "from": "p-t592",
    "to": "lentivirus",
    "kind": "prevents",
    "evidence": "S",
    "detail": "T592 phosphorylation in S/G2 phase switches off retroviral restriction"
  },
  {
    "from": "p-t592",
    "to": "fork",
    "kind": "maintains",
    "evidence": "S",
    "detail": "Phosphorylated SAMHD1 preserves replication fork protection during DNA synthesis"
  },
  {
    "from": "dntpase",
    "to": "telomere",
    "kind": "maintains",
    "evidence": "S",
    "detail": "dGTP pool restriction directly regulates telomerase processivity and telomere length"
  }
];
