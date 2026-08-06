/**
 * data/links.js — how one thing leads to another.
 *
 * ⚠ NOT GENERATED. This is the one file here whose content does not come from
 * the workbooks, because neither workbook contains a single relationship — they
 * are flat lists. Everything joining a molecular function to a cellular
 * consequence, and a cellular consequence to a clinical outcome, is authored
 * here and carries its own evidence grade.
 *
 * That distinction matters when reading the atlas. The NODES are sourced
 * material with citations behind them; the ARROWS are this project's reasoning
 * about how they connect. Where an arrow is doing real inferential work it is
 * graded `I`, and the inspector says so.
 *
 * Two structural links are implicit and generated rather than listed here:
 *   regulation → samhd1   every PTM controls the protein
 *   samhd1 → function     the protein performs every molecular function
 * See data/index.js. Only the downstream reasoning is written out below.
 *
 * `kind` semantics, and the reason `prevents` exists: many of these functions
 * are named as suppressions — "NF-κB Suppression", "Cytokine Storm Prevention".
 * The thing SAMHD1 does is HOLD SOMETHING DOWN, so losing SAMHD1 releases it.
 * Modelling that as a positive edge would make the variant *reduce*
 * inflammation, which is backwards. `prevents` carries sign −1 so the arithmetic
 * reads correctly, exactly as the immune atlas's inhibit/degrade kinds do.
 */

export const LINKS = [
  // ── dNTP pool: the central enzymatic arm ────────────────────────────────
  { from: 'dntpase', to: 'sphase',      kind: 'maintains', evidence: 'S',
    detail: 'The dNTP pool is the substrate supply for replication; SAMHD1 holds it in the ' +
            'narrow band S phase requires. Excess is as damaging as scarcity.' },
  { from: 'dntpase', to: 'g1s',         kind: 'maintains', evidence: 'G' },
  { from: 'dntpase', to: 'checkpoint',  kind: 'maintains', evidence: 'G' },
  { from: 'dntpase', to: 'cgas-sting',  kind: 'prevents',  evidence: 'S',
    detail: 'An unrestrained dNTP pool degrades POLG fidelity and yields the damaged mtDNA ' +
            'that becomes a cGAS ligand. The enzymatic defect and the interferon phenotype ' +
            'are the same lesion seen at two removes.' },
  { from: 'dntpase', to: 'metabolic',   kind: 'maintains', evidence: 'G' },

  // ── Genome maintenance ──────────────────────────────────────────────────
  { from: 'dna-resection', to: 'checkpoint', kind: 'maintains', evidence: 'S' },
  { from: 'dna-resection', to: 'cgas-sting', kind: 'prevents',  evidence: 'S',
    detail: 'Failed resection leaves unrepaired ends and micronuclei — cytosolic DNA that ' +
            'cGAS reads as infection.' },
  { from: 'rloop',    to: 'fork',        kind: 'maintains', evidence: 'S',
    detail: 'Unresolved DNA–RNA hybrids are a principal source of fork collapse; the two ' +
            'functions are one continuous piece of genome maintenance.' },
  { from: 'rloop',    to: 'cgas-sting',  kind: 'prevents',  evidence: 'G' },
  { from: 'fork',     to: 'senescence',  kind: 'prevents',  evidence: 'G' },
  { from: 'fork',     to: 'checkpoint',  kind: 'maintains', evidence: 'S' },
  { from: 'telomere', to: 'senescence',  kind: 'prevents',  evidence: 'G' },
  { from: 'telomere', to: 'aging',       kind: 'prevents',  evidence: 'I' },
  { from: 'ox-dna-bind', to: 'senescence', kind: 'prevents', evidence: 'I',
    detail: 'Oxidation enhances SAMHD1\'s DNA binding, which reads as a damage-responsive ' +
            'mode. Its consequence for senescence is inference, not demonstration.' },

  // ── Retroelement and viral restriction ──────────────────────────────────
  { from: 'line1',      to: 'cgas-sting', kind: 'prevents', evidence: 'S',
    detail: 'L1 reverse-transcription intermediates are cytosolic DNA. Restriction failure ' +
            'supplies cGAS with ligand continuously rather than episodically.' },
  { from: 'line1',      to: 'sterile-inflam', kind: 'prevents', evidence: 'G' },
  { from: 'lentivirus', to: 'sterile-inflam', kind: 'prevents', evidence: 'I',
    detail: 'The antiviral function is well demonstrated; its contribution to STERILE ' +
            'inflammation in an uninfected patient is inference.' },
  { from: 'dna-virus',  to: 'sterile-inflam', kind: 'prevents', evidence: 'I' },
  { from: 'rnase',      to: 'ifn-i',      kind: 'prevents', evidence: 'I',
    detail: 'Whether SAMHD1 has intrinsic RNase activity is contested — several groups ' +
            'attribute the observed degradation to a co-purifying nuclease.' },
  { from: 'mrna-deg',   to: 'transcription', kind: 'maintains', evidence: 'I' },

  // ── Condensates: restriction by sequestration ───────────────────────────
  { from: 'llps',           to: 'dsrna-seq',   kind: 'performs',  evidence: 'S' },
  { from: 'llps',           to: 'stress-granule', kind: 'performs', evidence: 'G' },
  { from: 'dsrna-seq',      to: 'ifn-i',       kind: 'prevents',  evidence: 'S',
    detail: 'Sequestering immunostimulatory dsRNA in condensates keeps it away from RIG-I ' +
            'and MDA5 — restriction by phase separation rather than by catalysis.' },
  { from: 'stress-granule', to: 'line1',       kind: 'maintains', evidence: 'G',
    detail: 'L1 ORF1p ribonucleoprotein particles are held in granules, out of circulation.' },

  // ── Mitochondrial arm ───────────────────────────────────────────────────
  { from: 'vdac1',      to: 'deltapsi',   kind: 'maintains', evidence: 'S',
    detail: 'SAMHD1 interacts physically with VDAC1 and must be present in the ' +
            'mitochondrial compartment to prevent membrane-potential collapse.' },
  { from: 'vdac1',      to: 'mtdna-leak', kind: 'maintains', evidence: 'S' },
  { from: 'mtdna-leak', to: 'mtdna-ifn',  kind: 'maintains', evidence: 'S' },
  { from: 'mtdna-ifn',  to: 'ifn-i',      kind: 'prevents',  evidence: 'S' },
  { from: 'deltapsi',   to: 'cytc',       kind: 'maintains', evidence: 'S' },
  { from: 'deltapsi',   to: 'metabolic',  kind: 'maintains', evidence: 'G' },
  { from: 'cytc',       to: 'apoptosis',  kind: 'maintains', evidence: 'S' },
  { from: 'bik',        to: 'apoptosis',  kind: 'maintains', evidence: 'S' },
  { from: 'bik',        to: 'autophagy',  kind: 'prevents',  evidence: 'S',
    detail: 'BIK — which SAMHD1 itself upregulates — sequesters BECN1, biasing the cell ' +
            'toward apoptosis over mitophagy.' },
  { from: 'autophagy',  to: 'deltapsi',   kind: 'maintains', evidence: 'G',
    detail: 'Damaged mitochondria that are tagged but not cleared keep degrading the ' +
            'potential of the pool that remains.' },

  // ── Innate immune restraint at the cellular level ───────────────────────
  { from: 'cgas-sting', to: 'ifn-i',      kind: 'prevents', evidence: 'S' },
  { from: 'cgas-sting', to: 'nfkb',       kind: 'prevents', evidence: 'S' },
  { from: 'nfkb',       to: 'sterile-inflam', kind: 'prevents', evidence: 'S' },
  { from: 'nfkb',       to: 'ip10',       kind: 'prevents', evidence: 'G' },
  { from: 'tlr4',       to: 'nfkb',       kind: 'prevents', evidence: 'G' },
  { from: 'ifn-i',      to: 'ip10',       kind: 'prevents', evidence: 'S',
    detail: 'IP-10/CXCL10 is an ISG; it is the readout by which the interferon arm is ' +
            'measured clinically.' },
  { from: 'ifn-i',      to: 'm1m2',       kind: 'prevents', evidence: 'S' },
  { from: 'm1m2',       to: 'mono-mac',   kind: 'maintains', evidence: 'S' },

  // ── Cell → body ─────────────────────────────────────────────────────────
  { from: 'sterile-inflam', to: 'cytokine-storm', kind: 'prevents', evidence: 'I',
    detail: 'The step with the least direct support in the whole atlas. No cytokine-storm ' +
            'event has been documented in this variant; it is a mechanistic extrapolation ' +
            'from the suppression functions, and is graded accordingly.' },
  { from: 'ip10',           to: 'cytokine-storm', kind: 'prevents', evidence: 'I' },
  { from: 'ifn-i',          to: 'cd8',            kind: 'prevents', evidence: 'G' },
  { from: 'sterile-inflam', to: 'prostatitis',    kind: 'prevents', evidence: 'I' },
  { from: 'prostatitis',    to: 'bladder',        kind: 'drives',   evidence: 'I' },
  { from: 'sterile-inflam', to: 'bladder',        kind: 'prevents', evidence: 'I' },

  // ── Cell → cancer risk ──────────────────────────────────────────────────
  // All four suppression claims run through the same genome-maintenance
  // lesion. Drawing them from one shared cause rather than as four independent
  // SAMHD1 "functions" is the honest reading: they are one mechanism observed
  // in four tissues, not four jobs.
  { from: 'checkpoint', to: 'cll',         kind: 'prevents', evidence: 'G' },
  { from: 'checkpoint', to: 'breast-ca',   kind: 'prevents', evidence: 'G' },
  { from: 'checkpoint', to: 'colon-ca',    kind: 'prevents', evidence: 'G' },
  { from: 'checkpoint', to: 'lung-ca',     kind: 'prevents', evidence: 'G' },
  { from: 'senescence', to: 'prostate-ca', kind: 'prevents', evidence: 'I' },
  { from: 'aging',      to: 'prostate-ca', kind: 'prevents', evidence: 'I' },

  // The one place losing SAMHD1 HELPS. In renal clear cell carcinoma SAMHD1
  // acts as an oncogene, so haploinsufficiency is protective. Kept visible
  // because an atlas that only showed harms would be an advocacy document.
  { from: 'metabolic', to: 'rcc', kind: 'drives', evidence: 'G',
    detail: 'The exception that keeps the rest honest: here SAMHD1 supports tumour ' +
            'progression, so having less of it is protective rather than harmful.' },
];
