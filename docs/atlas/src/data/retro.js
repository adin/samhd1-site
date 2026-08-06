/**
 * retro.js — retroelement defence.
 *
 * This is the arm that is absent from every existing figure in the project, and
 * it is arguably the one that explains why SAMHD1 sits in the Aicardi-Goutières
 * gene family at all.
 *
 * The unifying observation: EVERY classical AGS gene is a nucleic-acid
 * metabolism gene guarding a different stage of the retroelement life cycle.
 *
 *   AGS1  TREX1     — degrades cytosolic ssDNA, including L1 cDNA
 *   AGS2  RNASEH2B  ┐
 *   AGS3  RNASEH2C  ├ removes ribonucleotides and RNA:DNA hybrids
 *   AGS4  RNASEH2A  ┘
 *   AGS5  SAMHD1    — starves reverse transcriptase of dNTPs; sequesters L1 RNP
 *   AGS6  ADAR1     — edits Alu duplex RNA so MDA5 does not read it as viral
 *   AGS7  IFIH1     — MDA5 itself (gain-of-function)
 *   AGS8  LSM11/RNU7-1 — histone pre-mRNA processing; nucleosome supply
 *
 * Interferonopathy is what happens when the cell loses the ability to tell its
 * own retroelements apart from an infection. Approximately 45% of the human
 * genome is retroelement-derived; roughly 100 L1 loci remain retrotransposition
 * competent. The threat is permanent, endogenous, and never cleared.
 */

export const nodes = [
  // ── The elements ─────────────────────────────────────────────────────
  {
    id: 'l1-locus', label: 'LINE-1 locus', full: 'Long interspersed nuclear element 1 (L1HS) — the only autonomous human retrotransposon',
    compartment: 'nucleus', klass: 'retro', pathways: ['retro', 'genome'],
    pos: [-46, 24, -32], lod: 1, evidence: 'G', key: true,
    summary: '~500 000 copies, ~17% of the genome, ~100 still retrotransposition-competent. 6 kb bicistronic unit with its own internal promoter.',
    detail: 'L1 encodes everything it needs: a 5′UTR promoter, ORF1p (an RNA chaperone) and ORF2p (endonuclease + ' +
      'reverse transcriptase). Alu and SVA elements have no ORFs at all and hijack ORF2p in trans — which means ' +
      'silencing L1 silences the whole mobile fraction of the genome, and de-silencing it releases all of it.',
    refs: ['richardson2014', 'goodier2016'],
  },
  {
    id: 'alu-locus', label: 'Alu / SINE loci', full: 'Alu short interspersed nuclear elements',
    compartment: 'nucleus', klass: 'retro', pathways: ['retro', 'rlr-mavs'],
    pos: [-38, -2, -38], lod: 1, evidence: 'G',
    summary: '~1.1 million copies, ~11% of the genome. Non-autonomous — mobilised in trans by L1 ORF2p.',
    detail: 'Alus matter here for a reason unrelated to mobility: inverted Alu pairs in 3′UTRs fold into long duplex ' +
      'RNA. That duplex is the endogenous MDA5 ligand the cell must continuously suppress by editing.',
    refs: ['ahmad2018'],
  },
  {
    id: 'herv-locus', label: 'HERV loci', full: 'Human endogenous retroviruses — LTR retroelements',
    compartment: 'nucleus', klass: 'retro', pathways: ['retro'],
    pos: [-24, 28, -34], lod: 2, evidence: 'G',
    summary: '~8% of the genome. Mostly ORF-dead, but transcriptionally reactivatable and immunogenic.',
    detail: 'HERV-K and HERV-W envelope proteins are direct TLR4 agonists, and HERV transcripts feed both TLR7/8 and ' +
      'the cytosolic dsRNA pool. Silenced by TRIM28/KAP1 with KRAB zinc-finger proteins rather than by HUSH.',
    refs: ['rowe2010'],
  },

  // ── L1 life cycle ────────────────────────────────────────────────────
  {
    id: 'l1-mrna', label: 'L1 mRNA', full: 'Bicistronic L1 transcript (ORF1 + ORF2)',
    compartment: 'nucleus', klass: 'ligand', pathways: ['retro'],
    pos: [-28, 8, -34], lod: 2, evidence: 'G',
    summary: 'RNA Pol II transcript from the internal 5′UTR promoter; exported and translated in the cytoplasm.',
  },
  {
    id: 'orf1p', label: 'ORF1p', full: 'L1 ORF1 protein — trimeric nucleic-acid chaperone',
    compartment: 'granule', klass: 'retro', pathways: ['retro'],
    pos: [-58, -27, 30], lod: 2, evidence: 'G',
    summary: 'Coats L1 RNA in a strong cis preference, so an L1 mRNA is mobilised by the proteins it encoded.',
  },
  {
    id: 'orf2p', label: 'ORF2p', full: 'L1 ORF2 protein — endonuclease + reverse transcriptase',
    compartment: 'cytosol', klass: 'retro', pathways: ['retro', 'genome'],
    pos: [-50, -36, 26], lod: 1, evidence: 'S', key: true,
    summary: 'The business end: an APE-like endonuclease that nicks genomic DNA and an RT that copies L1 RNA into it.',
    detail: 'ORF2p is translated at very low efficiency by an unconventional mechanism — the cell keeps it scarce ' +
      'because it is genuinely dangerous. Its reverse transcriptase is dNTP-dependent, which is exactly where SAMHD1 ' +
      'intervenes.',
    samhd1: 'SAMHD1 restricts L1 by two routes at once: it starves ORF2p reverse transcriptase of dNTPs, and it ' +
      'promotes stress-granule formation that sequesters the L1 ribonucleoprotein. Both routes are lost together in ' +
      'haploinsufficiency — and the dNTP route is lost in the WRONG direction, because the pool goes UP by 40–60%.',
    refs: ['zhao2013samhd1', 'hu2015samhd1', 'herrmann2018'],
  },
  {
    id: 'l1-rnp', label: 'L1 RNP', full: 'L1 ribonucleoprotein particle (L1 RNA + ORF1p + ORF2p)',
    compartment: 'granule', klass: 'retro', pathways: ['retro'],
    pos: [-62, -19, 28], lod: 1, evidence: 'S',
    summary: 'The transposition-competent intermediate. Must reach the nucleus to insert.',
    samhd1: 'SAMHD1 promotes stress-granule formation that traps L1 RNPs out of circulation. This is a physical, ' +
      'non-enzymatic restriction mechanism — and it is regulated by SAMHD1 T592 phosphorylation, meaning the same ' +
      'phospho-switch that governs genome stability also governs retroelement restriction.',
    refs: ['hu2015samhd1', 'herrmann2018'],
  },
  {
    id: 'tprt', label: 'TPRT', full: 'Target-primed reverse transcription',
    compartment: 'nucleus', klass: 'retro', pathways: ['retro', 'genome'],
    pos: [-40, -22, -30], lod: 2, evidence: 'G',
    summary: 'ORF2p nicks genomic DNA at a TTAAAA-like consensus; the freed 3′-OH primes reverse transcription in situ.',
    detail: 'The mechanism is the reason retrotransposition is inseparable from DNA damage: every insertion attempt ' +
      'begins with a deliberate nick in the genome, and most attempts abort, leaving the break behind.',
  },
  {
    id: 'l1-insertion', label: 'new L1 insertion', full: 'De novo retrotransposition event',
    compartment: 'nucleus', klass: 'retro', pathways: ['retro', 'genome'],
    pos: [-30, -22, -28], lod: 2, evidence: 'I',
    summary: 'Usually 5′-truncated and inert; occasionally disruptive, and always a source of structural variation.',
    samhd1: 'Elevated dNTP pools support L1 reverse transcription, so retroelement mutagenic burden is one of the ' +
      'three pressures in the genomic-instability block alongside replication-error load and impaired homologous ' +
      'recombination.',
    refs: ['docConcept', 'zhao2013samhd1'],
  },
  {
    id: 'l1-cdna', label: 'L1 cDNA', full: 'Cytosolic L1 reverse-transcription product (ssDNA / RNA:DNA hybrid)',
    compartment: 'cytosol', klass: 'ligand', pathways: ['retro', 'cgas-sting'],
    pos: [-38, -24, 18], lod: 1, evidence: 'G', key: true,
    summary: 'Aborted or cytoplasmic reverse transcription leaves DNA where DNA should not be — and cGAS reads it.',
    detail: 'This is the mechanistic bridge from retroelement biology to interferonopathy. In TREX1-deficient models, ' +
      'L1 cDNA accumulation is a demonstrated source of neuroinflammation; in senescence, L1 de-repression drives the ' +
      'age-associated interferon response. The same ligand class, three different diseases.',
    refs: ['thomas2017', 'demarco2021', 'stetson2008'],
  },
  {
    id: 'alu-dsrna', label: 'Alu inverted-repeat dsRNA', full: 'Duplex RNA formed by inverted Alu pairs in 3′UTRs',
    compartment: 'cytosol', klass: 'ligand', pathways: ['retro', 'rlr-mavs'],
    pos: [-26, -22, 44], lod: 1, evidence: 'G', key: true,
    summary: 'The endogenous MDA5 ligand. Long, perfectly duplexed, abundant — and entirely self.',
    detail: 'The cell has no structural way to distinguish this from viral dsRNA. Its only defence is to chemically ' +
      'mark it: ADAR1 p150 deaminates adenosine to inosine, creating I:U mismatches that destabilise the duplex below ' +
      'the MDA5 filament-nucleation threshold. Lose the editing and self RNA becomes non-self.',
    refs: ['ahmad2018', 'liddicoat2015', 'riceadar'],
  },
  {
    id: 'herv-rna', label: 'HERV transcripts', full: 'Endogenous retroviral RNA and Env protein',
    compartment: 'cytosol', klass: 'ligand', pathways: ['retro', 'tlr'],
    pos: [-14, -34, 42], lod: 2, evidence: 'G',
    summary: 'Feeds the cytosolic dsRNA pool, TLR7/8 in endosomes, and TLR4 via Env protein.',
  },

  // ── Layer 1: transcriptional silencing ───────────────────────────────
  {
    id: 'hush', label: 'HUSH complex', full: 'Human silencing hub — TASOR + MPP8 + PPHLN1',
    compartment: 'nucleus', klass: 'restrict', pathways: ['retro'],
    pos: [-54, 18, -28], lod: 1, evidence: 'G', key: true,
    summary: 'Recognises young, intronless, long transcription units — the structural signature of a recent L1 insertion.',
    detail: 'HUSH is remarkable because it identifies retroelements by the SHAPE of the transcription unit rather than ' +
      'by sequence, which lets it silence insertions the genome has never seen before. It recruits MORC2 for chromatin ' +
      'compaction and SETDB1 to deposit H3K9me3.',
    refs: ['tchasovnikarova2015', 'liu2018hush'],
  },
  {
    id: 'morc2', label: 'MORC2', full: 'MORC family CW-type zinc finger 2 — ATP-dependent chromatin compactor',
    compartment: 'nucleus', klass: 'restrict', pathways: ['retro'],
    pos: [-48, 30, -24], lod: 2, evidence: 'G',
    summary: 'The effector arm of HUSH: physically compacts chromatin over the target locus.',
  },
  {
    id: 'setdb1', label: 'SETDB1', full: 'SET domain bifurcated histone lysine methyltransferase 1',
    compartment: 'nucleus', klass: 'restrict', pathways: ['retro'],
    pos: [-58, 10, -32], lod: 2, evidence: 'G',
    summary: 'Deposits H3K9me3, the repressive mark that keeps L1 and HERV loci heterochromatic.',
  },
  {
    id: 'h3k9me3', label: 'H3K9me3', full: 'Trimethylated histone H3 lysine 9 — the repressive mark',
    compartment: 'nucleus', klass: 'structure', pathways: ['retro'],
    pos: [-52, 24, -36], lod: 2, evidence: 'G',
    summary: 'Read by HP1, propagated across the locus. The physical substrate of retroelement silence.',
  },
  {
    id: 'dnmt1', label: 'DNMT1 / UHRF1', full: 'Maintenance DNA methyltransferase and its targeting partner',
    compartment: 'nucleus', klass: 'restrict', pathways: ['retro'],
    pos: [-60, 20, -18], lod: 2, evidence: 'G',
    summary: 'Maintains CpG methylation of the L1 5′UTR promoter through replication — the oldest defence layer.',
    detail: 'Global hypomethylation in cancer and in ageing de-represses L1 by exactly this route, which is why ' +
      'retroelement activity and genomic instability track together across so many conditions.',
  },
  {
    id: 'trim28', label: 'TRIM28 / KAP1', full: 'Tripartite motif 28 with KRAB zinc-finger proteins',
    compartment: 'nucleus', klass: 'restrict', pathways: ['retro'],
    pos: [-30, 30, -34], lod: 2, evidence: 'G',
    summary: 'The LTR/HERV silencing arm: KRAB-ZFPs supply sequence specificity, TRIM28 recruits SETDB1.',
    refs: ['rowe2010'],
  },

  // ── Layer 2: RNA-level restriction ───────────────────────────────────
  {
    id: 'zap', label: 'ZAP / ZC3HAV1', full: 'Zinc-finger antiviral protein',
    compartment: 'cytosol', klass: 'restrict', pathways: ['retro'],
    pos: [-66, -18, 22], lod: 2, evidence: 'G',
    summary: 'Binds CpG-dinucleotide-rich RNA and routes it to the exosome. Inhibits both L1 and Alu retrotransposition.',
    detail: 'ZAP works because the human genome is CpG-depleted while retroelement and viral RNAs are not — a ' +
      'compositional tell rather than a sequence motif.',
    refs: ['moldovan2015'],
  },
  {
    id: 'mov10', label: 'MOV10', full: 'Moloney leukaemia virus 10 — RNA helicase',
    compartment: 'granule', klass: 'restrict', pathways: ['retro'],
    pos: [-66, -27, 26], lod: 2, evidence: 'G',
    summary: 'Associates with L1 RNP and unwinds/destabilises it; an ISG, so interferon reinforces this layer.',
  },
  {
    id: 'oas', label: 'OAS1-3', full: '2′-5′-oligoadenylate synthetases',
    compartment: 'cytosol', klass: 'effector', pathways: ['isg', 'retro'],
    pos: [-46, -30, 40], lod: 2, evidence: 'G',
    summary: 'dsRNA-activated; makes 2-5A to switch on RNase L. A parallel dsRNA-sensing arm to MDA5.',
  },
  {
    id: 'rnasel', label: 'RNase L', full: 'Ribonuclease L',
    compartment: 'cytosol', klass: 'effector', pathways: ['isg', 'retro'],
    pos: [-40, -38, 36], lod: 2, evidence: 'G',
    summary: 'Cleaves single-stranded RNA indiscriminately once activated — including L1 and Alu transcripts.',
  },
  {
    id: 'adar1', label: 'ADAR1 p150', full: 'Adenosine deaminase acting on RNA 1, interferon-inducible isoform',
    compartment: 'cytosol', klass: 'restrict', pathways: ['retro', 'rlr-mavs', 'isg'],
    pos: [-12, -26, 46], lod: 1, evidence: 'G', key: true,
    summary: 'A-to-I edits Alu duplex RNA, creating I:U mismatches that keep MDA5 below its activation threshold.',
    detail: 'ADAR1 is the reason self dsRNA is tolerated. Loss of ADAR1 editing is AGS6, and the resulting disease is ' +
      'entirely MDA5-dependent: deleting MDA5 rescues ADAR1-null mice. It is the cleanest demonstration in immunology ' +
      'that an autoinflammatory disease can be a failure of self-marking rather than a failure of sensing.',
    refs: ['liddicoat2015', 'riceadar', 'ahmad2018'],
  },
  {
    id: 'apobec3', label: 'APOBEC3A/B', full: 'Apolipoprotein B mRNA editing enzyme catalytic subunits 3A/3B',
    compartment: 'cytosol', klass: 'restrict', pathways: ['retro', 'genome'],
    pos: [-52, -12, 34], lod: 2, evidence: 'G',
    summary: 'Cytidine deaminases that hypermutate L1 cDNA (C→U, read as G→A) before it can integrate.',
    detail: 'The same enzymes are a major endogenous mutagen in cancer genomes — restriction and mutagenesis are the ' +
      'same activity pointed at different substrates.',
  },

  // ── Layer 3: cDNA and hybrid clearance ───────────────────────────────
  {
    id: 'trex1', label: 'TREX1', full: 'Three-prime repair exonuclease 1 (DNase III) — AGS1',
    compartment: 'cytosol', klass: 'restrict', pathways: ['retro', 'cgas-sting'],
    pos: [-40, 10, 44], lod: 1, evidence: 'G', key: true,
    summary: 'The dominant cytosolic 3′→5′ ssDNA exonuclease. Its job is to destroy L1 cDNA and other cytosolic DNA before cGAS finds it.',
    detail: 'TREX1 is the cleanest possible control experiment for this entire framework: remove one cytosolic ' +
      'DNA-clearing enzyme and you get lethal cGAS-driven autoimmunity in mice, and AGS1 in humans. Trex1-null disease ' +
      'is fully rescued by cGAS or STING deletion. SAMHD1 haploinsufficiency is the same logic applied one step ' +
      'upstream — instead of failing to clear the DNA, the cell fails to stop making it.',
    refs: ['crow2006trex1', 'stetson2008', 'thomas2017'],
  },
  {
    id: 'rnaseh2', label: 'RNase H2 (A/B/C)', full: 'Ribonuclease H2 heterotrimer — AGS2, AGS3, AGS4',
    compartment: 'nucleus', klass: 'restrict', pathways: ['retro', 'genome'],
    pos: [-28, -26, -18], lod: 1, evidence: 'G',
    summary: 'Removes ribonucleotides misincorporated into DNA and resolves RNA:DNA hybrids — including L1 TPRT intermediates.',
    detail: 'Three of the eight AGS loci are RNase H2 subunits. Their loss produces genome-embedded ribonucleotides, ' +
      'replication stress, and DNA fragments that reach the cytosol — arriving at cGAS by a different road than TREX1 ' +
      'loss but ending in the same interferon signature.',
    refs: ['crow2006rnaseh2'],
  },

  // ── The AGS family summary node ──────────────────────────────────────
  {
    id: 'ags-family', label: 'AGS gene family', full: 'Aicardi-Goutières syndrome loci AGS1–AGS8',
    compartment: 'nucleus', klass: 'complex', pathways: ['retro'],
    pos: [-16, 26, -30], lod: 1, evidence: 'G', key: true,
    summary: 'TREX1 · RNASEH2A/B/C · SAMHD1 · ADAR1 · IFIH1 · LSM11/RNU7-1 — every one a nucleic-acid metabolism gene.',
    detail: 'Read as a set, the AGS genes are a map of retroelement containment. TREX1 clears the cDNA; RNase H2 clears ' +
      'the hybrids; SAMHD1 starves the reverse transcriptase and sequesters the RNP; ADAR1 marks the duplex RNA as ' +
      'self; MDA5 is the sensor that reads the mark. Mutate any one and the same interferon signature appears. ' +
      'This is why SAMHD1 belongs in this family, and why a heterozygous SAMHD1 variant should be expected to produce ' +
      'an attenuated version of the same syndrome rather than something unrelated to it.',
    samhd1: 'The heterozygous phenotype is the attenuated version: survival-compatible, adult-onset, ' +
      'moderate-amplitude, chronic rather than catastrophic — what the concept note names NACI.',
    refs: ['rice2009', 'crow2006trex1', 'crow2006rnaseh2', 'riceadar', 'ricemda5', 'docConcept'],
  },
  {
    id: 'micronucleus', label: 'micronuclei', full: 'Micronuclei from mis-segregated or damaged chromatin',
    compartment: 'nucleus', klass: 'ligand', pathways: ['genome', 'cgas-sting'],
    pos: [-18, 34, -22], lod: 2, evidence: 'G',
    summary: 'Rupture-prone envelopes that expose genomic DNA to cGAS — a nuclear source of Loop A ligand.',
  },
];

export const edges = [
  // ── L1 life cycle
  { from: 'l1-locus', to: 'l1-mrna', kind: 'produce', label: 'Pol II from the internal 5′UTR promoter', pathways: ['retro'], evidence: 'G' },
  { from: 'l1-mrna', to: 'orf1p', kind: 'produce', label: 'cap-dependent translation', pathways: ['retro'], evidence: 'G' },
  { from: 'l1-mrna', to: 'orf2p', kind: 'produce', label: 'unconventional, very low efficiency', pathways: ['retro'], evidence: 'G' },
  { from: 'orf1p', to: 'l1-rnp', kind: 'bind', label: 'cis-preferential RNP assembly', pathways: ['retro'], evidence: 'G' },
  { from: 'orf2p', to: 'l1-rnp', kind: 'bind', pathways: ['retro'], evidence: 'G' },
  { from: 'l1-rnp', to: 'tprt', kind: 'translocate', label: 'nuclear import of the RNP', pathways: ['retro'], evidence: 'G' },
  { from: 'orf2p', to: 'tprt', kind: 'activate', label: 'endonuclease nicks at TTAAAA; 3′-OH primes RT', pathways: ['retro', 'genome'], evidence: 'G' },
  { from: 'tprt', to: 'l1-insertion', kind: 'produce', label: 'de novo insertion (usually 5′-truncated)', pathways: ['retro', 'genome'], evidence: 'I' },
  { from: 'tprt', to: 'l1-cdna', kind: 'produce', label: 'aborted / cytoplasmic RT leaves free cDNA', pathways: ['retro', 'cgas-sting'], evidence: 'G' },
  { from: 'orf2p', to: 'l1-cdna', kind: 'produce', label: 'reverse transcription — dNTP-dependent', pathways: ['retro'], evidence: 'G' },
  { from: 'tprt', to: 'dsb', kind: 'produce', label: 'every insertion attempt starts with a deliberate nick', pathways: ['genome', 'retro'], evidence: 'G' },
  { from: 'l1-insertion', to: 'l1-locus', kind: 'produce', label: 'new copies are new substrate — the pool only grows', pathways: ['retro'], evidence: 'I', bend: 0.5 },

  // ── Alu and HERV
  { from: 'orf2p', to: 'alu-locus', kind: 'activate', label: 'Alu and SVA hijack ORF2p in trans', pathways: ['retro'], evidence: 'G' },
  { from: 'alu-locus', to: 'alu-dsrna', kind: 'produce', label: 'inverted pairs in 3′UTRs fold into long duplex', pathways: ['retro', 'rlr-mavs'], evidence: 'G' },
  { from: 'herv-locus', to: 'herv-rna', kind: 'produce', pathways: ['retro'], evidence: 'G' },
  { from: 'herv-rna', to: 'dsrna-cyt', kind: 'produce', pathways: ['retro', 'rlr-mavs'], evidence: 'G' },
  { from: 'herv-rna', to: 'tlr7', kind: 'sense', label: 'GU-rich ssRNA in endosomes', pathways: ['retro', 'tlr'], evidence: 'G' },
  { from: 'herv-rna', to: 'tlr4', kind: 'sense', label: 'HERV-K/W Env protein is a TLR4 agonist', pathways: ['retro', 'tlr'], evidence: 'G' },
  { from: 'alu-dsrna', to: 'dsrna-cyt', kind: 'produce', pathways: ['retro', 'rlr-mavs'], evidence: 'G' },
  { from: 'alu-dsrna', to: 'mda5', kind: 'sense', label: 'THE endogenous MDA5 ligand — self RNA read as viral', pathways: ['retro', 'rlr-mavs'], evidence: 'G', refs: ['ahmad2018'] },

  // ── Layer 1: transcriptional silencing
  { from: 'hush', to: 'setdb1', kind: 'activate', label: 'recruits the methyltransferase', pathways: ['retro'], evidence: 'G' },
  { from: 'hush', to: 'morc2', kind: 'activate', label: 'ATP-dependent chromatin compaction', pathways: ['retro'], evidence: 'G' },
  { from: 'setdb1', to: 'h3k9me3', kind: 'produce', pathways: ['retro'], evidence: 'G' },
  { from: 'h3k9me3', to: 'l1-locus', kind: 'inhibit', label: 'heterochromatic silencing of young L1s', pathways: ['retro'], evidence: 'G', refs: ['liu2018hush'] },
  { from: 'morc2', to: 'l1-locus', kind: 'inhibit', pathways: ['retro'], evidence: 'G' },
  { from: 'dnmt1', to: 'l1-locus', kind: 'inhibit', label: 'CpG methylation of the 5′UTR promoter', pathways: ['retro'], evidence: 'G' },
  { from: 'trim28', to: 'herv-locus', kind: 'inhibit', label: 'KRAB-ZFP-directed LTR silencing', pathways: ['retro'], evidence: 'G', refs: ['rowe2010'] },
  { from: 'trim28', to: 'setdb1', kind: 'activate', pathways: ['retro'], evidence: 'G' },

  // ── Layer 2: RNA restriction
  { from: 'zap', to: 'l1-mrna', kind: 'degrade', label: 'CpG-rich RNA → exosome', pathways: ['retro'], evidence: 'G', refs: ['moldovan2015'] },
  { from: 'mov10', to: 'l1-rnp', kind: 'inhibit', label: 'helicase destabilises the RNP', pathways: ['retro'], evidence: 'G' },
  { from: 'dsrna-cyt', to: 'oas', kind: 'activate', pathways: ['retro', 'isg'], evidence: 'G' },
  { from: 'oas', to: 'rnasel', kind: 'activate', label: '2-5A second messenger', pathways: ['retro', 'isg'], evidence: 'G' },
  { from: 'rnasel', to: 'l1-mrna', kind: 'degrade', pathways: ['retro'], evidence: 'G' },
  { from: 'adar1', to: 'alu-dsrna', kind: 'inhibit', label: 'A-to-I editing → I:U mismatches destabilise the duplex below the MDA5 threshold', pathways: ['retro', 'rlr-mavs'], evidence: 'G', refs: ['liddicoat2015'] },
  { from: 'apobec3', to: 'l1-cdna', kind: 'degrade', label: 'C→U hypermutation of nascent cDNA', pathways: ['retro'], evidence: 'G' },

  // ── Layer 3: cDNA / hybrid clearance
  { from: 'trex1', to: 'l1-cdna', kind: 'degrade', label: '3′→5′ exonucleolytic destruction before cGAS can bind', pathways: ['retro', 'cgas-sting'], evidence: 'G', refs: ['stetson2008'] },
  { from: 'trex1', to: 'ssdna', kind: 'degrade', label: 'clears cytosolic ssDNA generally', pathways: ['retro', 'genome'], evidence: 'G' },
  { from: 'rnaseh2', to: 'rloop', kind: 'degrade', label: 'resolves RNA:DNA hybrids', pathways: ['retro', 'genome'], evidence: 'G' },
  { from: 'rnaseh2', to: 'tprt', kind: 'inhibit', label: 'removes the hybrid intermediate of retrotransposition', pathways: ['retro'], evidence: 'G' },

  // ── SAMHD1's two restriction routes
  { from: 'samhd1', to: 'orf2p', kind: 'inhibit', label: 'dNTP starvation of the L1 reverse transcriptase', pathways: ['retro', 'samhd1'], evidence: 'S', refs: ['zhao2013samhd1'] },
  { from: 'samhd1', to: 'l1-rnp', kind: 'inhibit', label: 'promotes stress-granule sequestration of the RNP', pathways: ['retro', 'samhd1'], evidence: 'S', refs: ['hu2015samhd1'] },
  { from: 'samhd1', to: 'dsrna-cyt', kind: 'inhibit', label: 'sequesters immunostimulatory dsRNA in LLPS condensates', pathways: ['retro', 'samhd1', 'rlr-mavs'], evidence: 'S', refs: ['schumann2023'] },
  { from: 'dntp-pool', to: 'orf2p', kind: 'activate', label: 'elevated dNTPs FUEL reverse transcription — restriction fails in the wrong direction', pathways: ['retro', 'samhd1'], evidence: 'S', refs: ['zhao2013samhd1', 'docConcept'] },

  // ── Escapees reach the sensors
  { from: 'l1-cdna', to: 'cgas', kind: 'sense', label: 'retroelement cDNA is a cGAS ligand', pathways: ['retro', 'cgas-sting'], evidence: 'G', loop: 'A', refs: ['thomas2017', 'demarco2021'] },
  { from: 'micronucleus', to: 'cgas', kind: 'sense', label: 'envelope rupture exposes genomic DNA', pathways: ['genome', 'cgas-sting'], evidence: 'G', loop: 'A' },

  // ── AGS family membership (conceptual links, drawn as bindings)
  { from: 'trex1', to: 'ags-family', kind: 'bind', label: 'AGS1', pathways: ['retro'], evidence: 'G' },
  { from: 'rnaseh2', to: 'ags-family', kind: 'bind', label: 'AGS2/3/4', pathways: ['retro'], evidence: 'G' },
  { from: 'samhd1', to: 'ags-family', kind: 'bind', label: 'AGS5 — this family', pathways: ['retro', 'samhd1'], evidence: 'S' },
  { from: 'adar1', to: 'ags-family', kind: 'bind', label: 'AGS6', pathways: ['retro'], evidence: 'G' },
  { from: 'mda5', to: 'ags-family', kind: 'bind', label: 'AGS7 (IFIH1 gain-of-function)', pathways: ['retro'], evidence: 'G' },

  // ── ISGs reinforce the restriction layer (the loop's one useful output)
  { from: 'isg-set', to: 'apobec3', kind: 'produce', pathways: ['isg', 'retro'], evidence: 'G' },
  { from: 'isg-set', to: 'mov10', kind: 'produce', pathways: ['isg', 'retro'], evidence: 'G' },
  { from: 'isg-set', to: 'zap', kind: 'produce', pathways: ['isg', 'retro'], evidence: 'G' },
  { from: 'isg-set', to: 'adar1', kind: 'produce', label: 'ADAR1 p150 is itself interferon-induced', pathways: ['isg', 'retro'], evidence: 'G' },
  { from: 'isg-set', to: 'oas', kind: 'produce', pathways: ['isg', 'retro'], evidence: 'G' },
  { from: 'isg-set', to: 'samhd1', kind: 'produce', label: 'SAMHD1 is an ISG — the pathway tries to fix itself and cannot', pathways: ['isg', 'samhd1'], evidence: 'S', bend: 0.4, refs: ['yang2016irf3'] },
];
