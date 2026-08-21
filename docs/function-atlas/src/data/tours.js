/**
 * data/tours.js — guided walkthroughs.
 *
 * A tour is a sequence of {title, body, nodes, focus?, state?}. `nodes` are
 * spotlit and framed; `focus` enters a compartment; `state` switches the
 * WT/A565T comparison mid-tour, which is what lets a tour make an argument
 * rather than just point at things.
 *
 * These are deliberately few. The sibling atlas has seven tours over 217 nodes;
 * this one is meant to be readable in a sitting.
 */

export const TOURS = [
  {
    id: 'what-it-does',
    title: 'What SAMHD1 actually does',
    blurb: 'The four tiers, and why the distinction matters',
    steps: [
      {
        title: 'One protein, four kinds of claim',
        nodes: ['samhd1'],
        body: 'Published summaries list around fifty SAMHD1 "functions" as a flat set. That ' +
              'flattening is the problem: it files an enzyme activity, a modification made ' +
              'to the protein, and an organism-level disease association as if they were ' +
              'the same kind of statement. They are not. This atlas separates them by ' +
              'distance from the protein.',
      },
      {
        title: 'Tier 1 — what controls it',
        nodes: ['p-t592', 'ac-k580', 'ub-k421', 'sumo-k469'],
        body: 'These arrows point INWARD. Phosphorylation at T592 by CDK1/2 is the best ' +
              'characterised: it does not abolish the dNTPase, it switches off restriction. ' +
              'That is why a cycling cell loses protection a resting cell has — the same ' +
              'protein, regulated into a different job.',
      },
      {
        title: 'Tier 2 — what it does',
        nodes: ['dntpase', 'dna-resection', 'rloop', 'llps', 'vdac1'],
        body: 'The molecular activities. A triphosphohydrolase that sets the dNTP pool, a ' +
              'nuclease cofactor at resected DNA ends, a resolver of R-loops, a ' +
              'phase-separating scaffold, and a mitochondrial membrane interactor. These ' +
              'are the claims closest to the biochemistry.',
      },
      {
        title: 'Tier 3 — what changes in the cell',
        nodes: ['cgas-sting', 'ifn-i', 'deltapsi', 'checkpoint'],
        body: 'One inferential step out. Nothing here is a job SAMHD1 performs — each is ' +
              'something that goes wrong when a tier-2 function is impaired.',
      },
      {
        title: 'Tier 4 — what happens to the person',
        focus: 'clinical',
        nodes: ['cytokine-storm', 'cll', 'breast-ca', 'bladder'],
        body: 'These sit outside the cell on purpose. The distance on screen is the distance ' +
              'in the argument: every one of them is several steps of inference from the ' +
              'protein, and most are graded I. An atlas that drew them adjacent to the ' +
              'dNTPase would be making a claim it cannot support.',
      },
    ],
  },

  {
    id: 'tetramer',
    title: 'Why half a gene is not half a function',
    blurb: 'The tetramer, and the shape of haploinsufficiency',
    steps: [
      {
        title: 'The obligate tetramer',
        nodes: ['samhd1'],
        state: 'wt',
        body: 'SAMHD1 is only active as a tetramer, assembled and held together by GTP/dGTP ' +
              'binding at allosteric sites. This one structural fact governs everything ' +
              'below it.',
      },
      {
        title: 'What a heterozygote actually assembles',
        nodes: ['samhd1', 'dntpase'],
        state: 'a565t',
        body: 'With one variant allele the cell does not make half as many working ' +
              'tetramers — it makes tetramers of mixed composition. If an activity needs ' +
              'all four subunits intact, then on binomial assembly only about one in ' +
              'sixteen tetramers is fully wild type. That is why the losses in this atlas ' +
              'are not uniformly 50%.',
      },
      {
        title: 'The activities that fall hardest',
        nodes: ['dntpase', 'dna-resection', 'rloop', 'fork', 'lentivirus', 'dna-virus'],
        state: 'a565t',
        body: 'The tetramer-dependent ones: the dNTPase and everything that runs on it. ' +
              'The 2026 analysis puts these above 75% loss — far past the 50% a naive ' +
              'dosage argument predicts, and the reason this variant is not silent.',
      },
      {
        title: 'And the ones that barely move',
        nodes: ['oglc-s93', 'transcription', 'mrna-deg'],
        state: 'a565t',
        body: 'Activities that do not require the full tetramer track gene dosage much more ' +
              'closely, landing at 30–40%. The spread between these two groups is the ' +
              'signature of a tetramer defect, and it is what distinguishes this from a ' +
              'simple loss-of-expression variant.',
      },
    ],
  },

  {
    id: 'genome',
    title: 'The genome maintenance arm',
    blurb: 'dNTP pool, resection, R-loops, and cancer risk',
    steps: [
      { title: 'It starts with the pool', nodes: ['dntpase', 'sphase'], focus: 'cytosol',
        body: 'The dNTP pool is replication\'s substrate supply, and SAMHD1 holds it in the ' +
              'narrow band S phase needs. Excess is as mutagenic as scarcity — an ' +
              'unbalanced pool degrades polymerase fidelity directly.' },
      { title: 'Repair needs it too', nodes: ['dna-resection', 'rloop', 'fork'], focus: 'nucleus',
        body: 'Three nuclear functions that are really one continuous piece of genome ' +
              'maintenance: resect the break, resolve the hybrid, protect the stalled fork.' },
      { title: 'The checkpoint absorbs the damage', nodes: ['checkpoint', 'senescence'],
        body: 'Cells with failing maintenance either arrest or accumulate damage. Both show ' +
              'up here.' },
      { title: 'And four cancers, from one lesion', focus: 'clinical',
        nodes: ['cll', 'breast-ca', 'colon-ca', 'lung-ca'],
        body: 'The source list files these as four separate SAMHD1 "functions". They are ' +
              'not — they are one genome-maintenance lesion observed in four tissues, which ' +
              'is why this atlas draws all four from the same upstream node instead of ' +
              'giving the protein four independent anticancer jobs.' },
    ],
  },

  {
    id: 'mito',
    title: 'The mitochondrial arm',
    blurb: 'VDAC1, membrane potential, and mtDNA as an interferon ligand',
    steps: [
      { title: 'A physical interaction', nodes: ['vdac1'], focus: 'mitochondrion',
        body: 'SAMHD1 binds VDAC1 on the outer membrane. This is a smaller literature than ' +
              'the nuclear work, but it is what makes the mitochondrial phenotype a direct ' +
              'SAMHD1 function rather than a downstream consequence of dNTP excess.' },
      { title: 'Potential is the master variable', nodes: ['deltapsi', 'cytc', 'bik'],
        body: 'Membrane potential sets ATP output, protein import, and the apoptotic ' +
              'threshold simultaneously. Losing it is not one symptom, it is several at once.' },
      { title: 'And the leak feeds the immune system', nodes: ['mtdna-leak', 'mtdna-ifn', 'ifn-i'],
        body: 'mtDNA that escapes the organelle is read by cGAS as infection. This is where ' +
              'the mitochondrial arm and the interferon arm turn out to be the same arm — ' +
              'and the point of contact with the innate immune atlas.' },
    ],
  },

  {
    id: 'thin-ice',
    title: 'Where the evidence is thin',
    blurb: 'The inferred claims, shown deliberately',
    steps: [
      {
        title: 'Not all of this is equally solid',
        nodes: ['rnp-sequestration', 'cytokine-storm', 'bladder', 'prostatitis'],
        body: 'Every node and arrow here carries a grade. These are the I-graded ones: ' +
              'mechanistically reasonable, not demonstrated. Whether SAMHD1 has intrinsic ' +
              'RNase activity is actively contested — several groups attribute the observed ' +
              'degradation to a co-purifying nuclease.',
      },
      {
        title: 'Two routes to the same outcome, neither one cited',
        focus: 'clinical',
        nodes: ['prostatitis', 'bladder'],
        body: '"Bladder Dysfunction Prevention" is listed in the source workbook as a ' +
              'SAMHD1 function with Critical criticality. It is not a function — it is a ' +
              'phenotype at the end of a chain of inference. Two independent routes converge ' +
              'on it: sterile inflammation, modelled here, and the IL-23/Th17/IL-17A axis ' +
              'that drives enthesitis in psoriatic arthritis, modelled in the immune atlas and ' +
              'reachable from this node’s cross-links. Neither route has a citation placing it ' +
              'at the bladder specifically — the atlas shows two plausible mechanisms, not one ' +
              'demonstrated claim, and grades both I.',
      },
      {
        title: 'And a claim with no route at all',
        nodes: ['cytokine-storm'],
        body: 'Cytokine Storm Prevention sits on weaker ground still: no cytokine-storm event ' +
              'has been documented in this variant, and unlike the urological claims above it ' +
              'has no second mechanism to fall back on. Shown, but graded honestly.',
      },
      {
        title: 'And the citations behind them',
        nodes: ['rnp-sequestration', 'cytokine-storm'],
        body: 'Ten of the 48 sources are flagged: two duplicates cited under different IDs, ' +
              'six where the "author" is a publisher or a vendor — the signature of a ' +
              'reference that was never resolved to a real paper — three unrefereed ' +
              'preprints and a press release. Open any node\'s sources to see the flags.',
      },
    ],
  },

  {
    id: 'exception',
    title: 'The exception that keeps it honest',
    blurb: 'Where losing SAMHD1 helps',
    steps: [
      {
        title: 'Renal clear cell carcinoma',
        focus: 'clinical',
        nodes: ['rcc', 'metabolic'],
        state: 'a565t',
        body: 'In renal clear cell carcinoma SAMHD1 behaves as an oncogene — it supports ' +
              'progression rather than restraining it. Haploinsufficiency is therefore ' +
              'PROTECTIVE here, the only node in the atlas where that is true. It is kept ' +
              'visible because an atlas that showed only harms would be an advocacy ' +
              'document rather than a model, and because it is a genuine caution against ' +
              'reasoning about SAMHD1 as uniformly protective.',
      },
    ],
  },
];
