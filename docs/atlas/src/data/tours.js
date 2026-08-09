/**
 * tours.js — guided walkthroughs.
 *
 * A step frames a set of nodes, enables a set of layers, and shows a caption.
 * `focus` is a compartment key (camera enters that compartment and its lod-2
 * detail becomes visible); omit it to frame the listed nodes instead.
 */

export const TOURS = [
  {
    id: 'loop-a',
    title: 'Loop A — the cGAS–STING loop that cannot close',
    blurb: 'Mitochondrial DNA out, interferon in, mitophagy blocked, more DNA out.',
    steps: [
      {
        title: 'A brake comes off',
        text: 'SAMHD1 p.A565T leaves roughly 40–60% residual dNTPase activity — enough to prevent AGS, not enough to ' +
              'hold the system down. The cytosolic dNTP pool rises 40–60%, with a disproportionate dGTP skew.',
        nodes: ['a565t', 'samhd1', 'dntp-pool'], layers: ['samhd1', 'metabolic'],
      },
      {
        title: 'The macropore opens',
        text: 'SAMHD1 physically interacts with VDAC1 on the outer mitochondrial membrane. Losing that interaction — ' +
              'and the mtROS rising underneath it — drives VDAC1 into oligomers wide enough to pass DNA.',
        focus: 'mitochondrion',
        nodes: ['samhd1-mito', 'vdac1', 'vdac1-oligo', 'mtros'], layers: ['samhd1', 'mito', 'cgas-sting'],
      },
      {
        title: 'DNA where DNA should not be',
        text: 'Unoxidised or mixed mtDNA fragments reach the cytosol. Note the species: these are NOT ox-mtDNA. ' +
              'VBIT-4 prevents their release and fully abolishes the spontaneous ISG response.',
        nodes: ['mtdna', 'mtdna-frag', 'vdac1-oligo', 'cgas'], layers: ['mito', 'cgas-sting'],
      },
      {
        title: 'cGAS does not ask where it came from',
        text: 'cGAS binds cytosolic dsDNA and makes 2′3′-cGAMP. STING traffics ER → ERGIC → Golgi, recruits TBK1, ' +
              'and TBK1 phosphorylates IRF3. IMSB301 (cGAS inhibitor) normalises the ISG signature in AGS PBMCs — ' +
              'so this route is cGAS-dependent, not oxidation-dependent.',
        nodes: ['cgas', 'cgamp', 'sting', 'tbk1', 'irf3'], layers: ['cgas-sting'],
      },
      {
        title: 'Interferon out, interferon back in',
        text: 'IRF3 drives IFN-β. IFN-β returns to IFNAR1/2, activating JAK1 and TYK2, then STAT1/STAT2/IRF9 as ISGF3, ' +
              'then several hundred ISGs. This is the step upadacitinib blocks.',
        nodes: ['ifnb1-gene', 'ifnb', 'ifnar1', 'ifnar2', 'jak1', 'tyk2', 'stat1', 'isgf3', 'isg-set'],
        layers: ['cgas-sting', 'ifn-jak', 'isg'],
      },
      {
        title: 'And the loop closes',
        text: 'ISG15 rises. It ISGylates MFN1/2, blocking PINK1/Parkin mitophagy, and ISGylates BECN1, blocking ' +
              'autophagy flux by a second independent route. Damaged mitochondria are flagged and never cleared — ' +
              'so they keep leaking DNA. Once running, the loop needs no new dNTP input at all.',
        nodes: ['isg15', 'mfn', 'becn1', 'pink1', 'parkin', 'mtdna-frag'],
        layers: ['isg', 'mitophagy', 'mito', 'cgas-sting'],
      },
    ],
  },

  {
    id: 'loop-b',
    title: 'Loop B — the JAK-resistant NLRP3 loop',
    blurb: 'Why JAK inhibition clears the inflammation and leaves the fatigue behind.',
    steps: [
      {
        title: 'A different route out of the same organelle',
        text: 'Excess cytosolic dNTPs flood PNC1/PNC2 on the INNER membrane. The matrix pool is perturbed, POLG loses ' +
              'fidelity and stalls, and uncontrolled mtDNA neosynthesis yields an oxidised product.',
        focus: 'mitochondrion',
        nodes: ['dntp-pool', 'pnc1', 'pnc2', 'mito-dntp', 'polg'], layers: ['mito', 'metabolic', 'samhd1'],
      },
      {
        title: 'ox-mtDNA is a different ligand',
        text: 'This is the correction at the centre of the mitochondrial manuscript. ox-mtDNA activates NLRP3, not cGAS. ' +
              'The unoxidised fragments escaping through VDAC1 activate cGAS, not NLRP3. Same organelle, different ' +
              'oxidation state, different sensor, different loop, different rescue point.',
        nodes: ['oxmtdna', 'mtdna-frag', 'nlrp3', 'cgas'], layers: ['mito', 'inflammasome', 'cgas-sting'],
      },
      {
        title: 'A second input from the same lesion',
        text: 'The GOLD feedforward: excess dGTP is catabolised to uric acid, and humans have no uricase. MSU crystals ' +
              'form in the cytosol and hit an NLRP3 already primed by NF-κB. One genetic lesion, driving one sensor ' +
              'from two directions.',
        nodes: ['dntp-pool', 'urate', 'msu', 'nlrp3'], layers: ['inflammasome', 'metabolic'],
      },
      {
        title: 'Assembly and output',
        text: 'NLRP3 nucleates a single ASC speck. Caspase-1 autoprocesses on it and cleaves pro-IL-1β, pro-IL-18 and ' +
              'GSDMD. ASC specks and caspase-1 p20 are countable, binary readouts — which is why they are primary in Arm 1.',
        nodes: ['nlrp3', 'asc', 'casp1', 'il1b', 'il18', 'gsdmd'], layers: ['inflammasome'],
      },
      {
        title: 'The therapeutic gap',
        text: 'Neither upadacitinib nor amlexanox touches any node in this loop. Arms 2 and 5 are explicitly predicted ' +
              'to leave IL-1β and ASC speck burden elevated. That persistence is the formal proof that Loop B is an ' +
              'independent, currently unaddressed therapeutic axis — and it is the mechanistic explanation for the ' +
              'clinical pattern where JAK inhibition clears the inflammatory domains and barely moves the fatigue.',
        nodes: ['il1b', 'upadacitinib', 'amlexanox', 'mcc950', 'atp', 'steatosis'],
        layers: ['inflammasome', 'drugs', 'clinical', 'metabolic'],
      },
      {
        title: 'And it hands Loop A fresh ligand',
        text: 'Above the lytic threshold, GSDMD pores kill the cell. Pyroptosis spills cytosolic contents — including ' +
              'mtDNA — into the extracellular space, re-arming cGAS in the neighbours. The two loops are parallel, ' +
              'but they are not isolated.',
        nodes: ['gsdmd-pore', 'pyroptosis', 'mtdna-frag', 'cgas'], layers: ['inflammasome', 'cgas-sting'],
      },
    ],
  },

  {
    id: 'mito',
    title: 'Inside the mitochondrion',
    blurb: 'Eight stressors, three membranes, and the keystone that makes damage permanent.',
    steps: [
      {
        title: 'The convergence point',
        text: 'Every arm of this framework ends here. Enter the organelle and the sub-detail appears: outer membrane ' +
              'porins and apoptotic machinery, inner-membrane carriers and respiratory complexes, and the matrix ' +
              'nucleoid with its replisome.',
        focus: 'mitochondrion',
        nodes: ['vdac1', 'pnc1', 'mtdna', 'polg', 'deltapsi'], layers: ['mito', 'metabolic'],
      },
      {
        title: 'The inner membrane: supply and respiration',
        text: 'PNC1/PNC2 import nucleotides; Complexes I, III, IV pump protons; Complex V spends the gradient on ATP. ' +
              'Sustained STAT1/2 signalling suppresses Complexes I and III, and ceramide — made downstream of IL-1β — ' +
              'inhibits Complex III directly while permeabilising the membrane.',
        focus: 'mitochondrion',
        nodes: ['pnc1', 'etc-i', 'etc-iii', 'etc-iv', 'etc-v', 'ceramide', 'stat1'],
        layers: ['mito', 'metabolic', 'ifn-jak'],
      },
      {
        title: 'ΔΨm is the master variable',
        text: 'Membrane potential sets ATP output, protein import, PINK1 stability and the mPTP threshold at once. ' +
              'Samhd1-KO causes measurable ΔΨm collapse and M1 macrophage skewing. Collapse is not a symptom here — ' +
              'it re-enters the loop by stopping PINK1 import and opening mPTP.',
        focus: 'mitochondrion',
        nodes: ['deltapsi', 'atp', 'pink1', 'mptp', 'tom20'], layers: ['mito', 'mitophagy'],
      },
      {
        title: 'The keystone: mitophagy flagged and jammed',
        text: 'PINK1 accumulates, Parkin builds a ubiquitin coat, OPTN and p62 read it, LC3 arrives — and then nothing ' +
              'happens. ISG15 ISGylates MFN1/2 and BECN1; BIK sequesters BECN1; mTORC1 keeps MITF cytoplasmic so ' +
              'cathepsin D is under-produced. The project manuscript calls the ISG15–BECN1 block the KEYSTONE ' +
              'stressor: it is what converts transient damage into permanent accumulation.',
        nodes: ['pink1', 'parkin', 'optn', 'becn1', 'isg15', 'bik', 'mtor', 'mitf', 'ctsd'],
        layers: ['mitophagy', 'isg', 'mito'],
      },
      {
        title: 'The bill',
        text: 'ATP failure and post-exertional malaise, ROS-driven lipid peroxidation, chronic sublethal cytochrome-c ' +
              'leak, succinate-driven normoxic HIF-1α stabilisation and a Warburg shift. This is the arm JAK ' +
              'inhibition did not fix.',
        nodes: ['atp', 'mtros', 'cytc', 'succinate', 'hif1a', 'gdf15', 'pem'],
        layers: ['mito', 'metabolic', 'clinical'],
      },
    ],
  },

  {
    id: 'retro',
    title: 'Retroelement defence and the AGS family',
    blurb: 'Why SAMHD1 belongs in the Aicardi-Goutières gene family at all.',
    steps: [
      {
        title: 'The permanent threat',
        text: 'About 45% of the human genome is retroelement-derived. LINE-1 is the only autonomous element left: ' +
              '~500 000 copies, ~100 still competent, each carrying its own promoter, RNA chaperone and reverse ' +
              'transcriptase. Alu and SVA have no ORFs and hijack L1 machinery in trans. This threat is endogenous ' +
              'and is never cleared — it can only be contained.',
        focus: 'nucleus',
        nodes: ['l1-locus', 'alu-locus', 'herv-locus'], layers: ['retro'],
      },
      {
        title: 'Layer 1 — never let it be transcribed',
        text: 'DNMT1/UHRF1 maintain CpG methylation on the L1 promoter. The HUSH complex (TASOR, MPP8, PPHLN1) ' +
              'recognises young, intronless, long transcription units — the structural signature of a recent ' +
              'insertion — and recruits MORC2 to compact chromatin and SETDB1 to deposit H3K9me3. TRIM28/KAP1 with ' +
              'KRAB zinc-fingers does the same job for HERV LTRs.',
        focus: 'nucleus',
        nodes: ['dnmt1', 'hush', 'morc2', 'setdb1', 'h3k9me3', 'trim28'], layers: ['retro'],
      },
      {
        title: 'Layer 2 — destroy the RNA and the RNP',
        text: 'If transcription happens anyway: ZAP reads the CpG-rich composition retroelement RNAs share with ' +
              'viruses and routes them to the exosome; OAS/RNase L cleaves ssRNA; MOV10 unwinds the L1 RNP. And ' +
              'SAMHD1 promotes the stress granules that physically sequester L1 RNPs out of circulation.',
        nodes: ['zap', 'oas', 'rnasel', 'mov10', 'l1-rnp', 'orf1p', 'samhd1'], layers: ['retro', 'samhd1'],
      },
      {
        title: 'Layer 3 — starve the reverse transcriptase',
        text: 'ORF2p reverse transcriptase needs dNTPs. In health SAMHD1 keeps the pool low enough to make reverse ' +
              'transcription inefficient — the same mechanism by which it restricts HIV-1 in myeloid cells. ' +
              'In A565T the pool goes UP 40–60%, so this brake fails in the WRONG direction: it does not merely ' +
              'stop restricting, it actively fuels the enzyme it was supposed to starve.',
        nodes: ['samhd1', 'dntp-pool', 'orf2p', 'l1-cdna'], layers: ['retro', 'samhd1'],
      },
      {
        title: 'Layer 4 — clear what got made',
        text: 'TREX1 (AGS1) is the dominant cytosolic 3′→5′ ssDNA exonuclease and destroys L1 cDNA before cGAS finds ' +
              'it. APOBEC3A/B hypermutate nascent cDNA. RNase H2 (AGS2/3/4) resolves the RNA:DNA hybrid intermediates. ' +
              'Trex1-null disease is fully rescued by deleting cGAS or STING — proof that this layer exists to keep ' +
              'retroelement products away from a DNA sensor.',
        nodes: ['trex1', 'apobec3', 'rnaseh2', 'l1-cdna', 'cgas'], layers: ['retro', 'cgas-sting'],
      },
      {
        title: 'Layer 5 — mark the self RNA as self',
        text: 'Inverted Alu pairs in 3′UTRs fold into long duplex RNA that is structurally indistinguishable from a ' +
              'viral replication intermediate. The cell has no way to tell them apart — so it marks its own. ADAR1 ' +
              'p150 edits adenosine to inosine, creating I:U mismatches that destabilise the duplex below the MDA5 ' +
              'filament-nucleation threshold. ADAR1 loss is AGS6; MDA5 gain-of-function is AGS7. Deleting MDA5 ' +
              'rescues ADAR1-null mice completely.',
        nodes: ['alu-dsrna', 'adar1', 'mda5', 'mavs'], layers: ['retro', 'rlr-mavs'],
      },
      {
        title: 'Read the AGS family as one map',
        text: 'TREX1 clears the cDNA. RNase H2 clears the hybrids. SAMHD1 starves the reverse transcriptase and ' +
              'sequesters the RNP. ADAR1 marks the duplex RNA as self. MDA5 is the sensor that reads the mark. ' +
              'Every classical AGS gene guards a different stage of the same life cycle — and mutating any one of ' +
              'them produces the same interferon signature. That is why a heterozygous SAMHD1 variant should be ' +
              'expected to produce an attenuated version of this syndrome rather than something unrelated to it.',
        focus: 'nucleus',
        nodes: ['ags-family', 'trex1', 'rnaseh2', 'samhd1', 'adar1', 'mda5'], layers: ['retro', 'samhd1'],
      },
      {
        title: 'And the interferon it causes reinforces the defence',
        text: 'APOBEC3, MOV10, ZAP, OAS, ADAR1 p150 and SAMHD1 itself are all interferon-stimulated genes. The system ' +
              'tries to fix itself: interferon upregulates every restriction factor including SAMHD1. But in a ' +
              'haploinsufficient cell it can only double a broken allele\'s output. The compensation is real, ' +
              'measurable, and permanently insufficient.',
        nodes: ['isg-set', 'samhd1', 'apobec3', 'mov10', 'zap', 'adar1'], layers: ['isg', 'retro', 'samhd1'],
      },
    ],
  },

  {
    id: 'ankib1',
    title: 'The ANKIB1 K11-Ub gain-control node',
    blurb: 'Why the interferon is tonic and moderate rather than acute and surging.',
    steps: [
      {
        title: 'A threshold, not a switch',
        text: 'K11-linked ubiquitin is the linkage that drives type-I/III interferon induction downstream of both ' +
              'cGAS–STING and TLR3/4. ANKIB1 assembles those chains. It is not a terminal effector — it sets the ' +
              'threshold at which TBK1/IRF3 scaffolds assemble.',
        nodes: ['ankib1', 'k11ub', 'tbk1', 'irf3'], layers: ['ankib1'],
      },
      {
        title: 'Five substrates, primed at once',
        text: 'STING, TRIF, NEMO, OPTN — and ANKIB1 itself. SAMHD1 loss primes all of them simultaneously: dNTPase ' +
              'failure primes STING via cGAS, reduced negative feedback primes TRIF, reduced NF-κB suppression ' +
              'primes NEMO. A lowered threshold on every input at once gives moderate-amplitude unrelenting output ' +
              'rather than discrete surges.',
        nodes: ['k11ub', 'sting', 'trif', 'nemo', 'optn', 'ankib1'], layers: ['ankib1', 'cgas-sting', 'tlr', 'nfkb'],
      },
      {
        title: 'The regulator destroys itself',
        text: 'ANKIB1 auto-ubiquitinates during activation and is degraded by the proteasome. The master negative ' +
              'regulator is consumed exactly when it is needed most — a self-terminating feedback controller that ' +
              'cannot hold homeostasis under chronic drive. Prediction: ANKIB1 protein REDUCED at baseline in A565T ' +
              'cells, with accelerated degradation on cycloheximide chase and MG132 rescue.',
        nodes: ['ankib1', 'k11ub'], layers: ['ankib1'],
      },
      {
        title: 'Why this is testable, and pharmacologically decisive',
        text: 'Amlexanox (Arms 5–6) reduces TBK1-dependent activation signals, so ANKIB1 should accumulate instead of ' +
              'self-destructing. Upadacitinib (Arm 2) acts downstream at JAK1, so ANKIB1 should stay low even as ' +
              'cytokine readouts improve. That differential validates the axis as accessible via TBK1/IKKε and not ' +
              'via JAK–STAT — and makes ANKIB1 protein restoration a candidate durable-response biomarker. ' +
              'p-TBK1(Ser172), unaffected by JAK1 inhibition, is the clean pharmacologic separator.',
        nodes: ['ankib1', 'tbk1', 'amlexanox', 'upadacitinib', 'jak1'], layers: ['ankib1', 'drugs', 'ifn-jak'],
      },
    ],
  },

  {
    id: 'brakes',
    title: 'Four brakes that failed',
    blurb: 'The loop cannot close because every terminating mechanism is impaired at once.',
    steps: [
      {
        title: 'Brake 1 — IRF7 restraint',
        text: 'SAMHD1 physically occupies IRF7\'s inhibitory domain, preventing IKKε from phosphorylating it. ' +
              'Haploinsufficiency removes the block, so IRF7 is constitutively active and drives second-wave IFN-α. ' +
              'IRF7 is itself an ISG, so the amplifier amplifies itself.',
        nodes: ['samhd1', 'irf7', 'ikke', 'ifna', 'isg-set'], layers: ['samhd1', 'cgas-sting', 'ifn-jak'],
      },
      {
        title: 'Brake 2 — the USP18/ISG15 receptor brake',
        text: 'Tonic interferon upregulates ISG15, which stabilises USP18, which sterically displaces JAK1 from ' +
              'IFNAR2. The brake is present, engaged, and losing — because it acts on the receptor while the drive ' +
              'is genetic and upstream. Worse, the same ISG15 ISGylates BECN1 and blocks autophagy.',
        nodes: ['isg15', 'usp18', 'ifnar2', 'becn1'], layers: ['isg', 'ifn-jak', 'mitophagy'],
      },
      {
        title: 'Brake 3 — mitochondrial containment',
        text: 'Two routes out, and both are open: the VDAC1 macropore (constitutive, drives cGAS/Loop A) and ' +
              'POLG-generated ox-mtDNA (drives NLRP3/Loop B). The NLRP3 route is entirely JAK-resistant.',
        focus: 'mitochondrion',
        nodes: ['vdac1-oligo', 'mtdna-frag', 'oxmtdna', 'nlrp3', 'polg'], layers: ['mito', 'inflammasome', 'cgas-sting'],
      },
      {
        title: 'Brake 4 — NF-κB shutoff',
        text: 'SAMHD1 directly suppresses the NF-κB pathway. De-suppressed IKK gives IL-1β and IL-23, and IL-23 gives ' +
              'Th17 and the psoriatic arthritis axis. IκBα is an NF-κB target gene, so the pathway normally ' +
              'oscillates — under constitutive drive that oscillation flattens into a plateau.',
        nodes: ['samhd1', 'nfkb', 'ikba', 'il23', 'il17a', 'psa'], layers: ['samhd1', 'nfkb', 'clinical'],
      },
      {
        title: 'No endogenous off-switch',
        text: 'Once initiated, the state is self-renewing: second-wave interferon, mitochondrial damage and ' +
              'inflammasome feedback all recreate the ligands that started it. That is the mechanistic definition of ' +
              'non-acute chronicity — and the reason the concept note names the pattern NACI rather than filing it ' +
              'under the flare-remit interferonopathies.',
        nodes: ['naci', 'ankib1', 'isg-set', 'nlrp3', 'atp'], layers: ['clinical', 'ankib1', 'isg', 'inflammasome'],
      },
    ],
  },

  {
    id: 'tcr',
    title: 'The T cell receptor, and how TRAILshort switches it off',
    blurb: 'Adaptive immunity from first principles — then a splice variant that silences a T cell without killing it.',
    steps: [
      {
        title: 'A different kind of immunity',
        text: 'Everything else in this atlas is INNATE: receptors encoded in the germline, recognising broad ' +
              'classes of danger — DNA in the wrong compartment, oxidised mtDNA, crystals. They are the same in ' +
              'every one of your cells and they do not learn. This arm is ADAPTIVE. A T cell carries one receptor ' +
              'specificity, generated by random recombination as it developed, and it responds only to the one ' +
              'antigen that fits. The cell you are looking at is already in the atlas — it is the neighbour that ' +
              'makes IFN-γ in Loop C.',
        focus: 'responder',
        nodes: ['responder-cell', 'tcr-cd3', 'apc-antigen'], layers: ['tcr', 'ifn-gamma'],
      },
      {
        title: 'A receptor that cannot signal',
        text: 'The odd thing about the T cell receptor is that the part which recognises antigen has no way to ' +
              'tell the cell about it. The αβ heterodimer has no enzymatic activity at all. Signalling is done by ' +
              'the CD3 chains bolted alongside it, whose cytoplasmic tails carry ITAMs — short motifs with two ' +
              'tyrosines. When antigen engages, the kinase Lck phosphorylates those tyrosines on CD3ζ. Hold onto ' +
              'that: the entire signal is a set of phosphates on a tail, and phosphates can be removed.',
        nodes: ['apc-antigen', 'tcr-cd3', 'cd3z', 'lck'], layers: ['tcr'],
      },
      {
        title: 'Two signals, not one',
        text: 'Antigen alone is not enough, and deliberately so. A T cell that engages antigen WITHOUT a second, ' +
              'costimulatory signal through CD28 does not activate — it becomes anergic, which is a safety ' +
              'mechanism against attacking self. You have already seen this shape elsewhere in the atlas: it is ' +
              'the same two-key logic as NLRP3, where NF-κB must prime the sensor (signal 1) before a ligand can ' +
              'fire it (signal 2). Dangerous effector programmes require two independent permissions. Every ' +
              '"CD3/CD28" experiment in the TRAILshort paper is supplying both keys at once.',
        nodes: ['tcr-cd3', 'cd28', 'apc-antigen', 'tcell-prolif'], layers: ['tcr'],
      },
      {
        title: 'The relay',
        text: 'Now the cascade proper. ZAP-70 docks onto the phosphorylated CD3ζ ITAMs through its tandem SH2 ' +
              'domains — it READS the phosphates Lck wrote. Activated ZAP-70 then phosphorylates LAT, a scaffold ' +
              'protein that does nothing itself but assembles everything else, and phospho-LAT recruits PLCγ1. ' +
              'PLCγ1 is the executive step: it generates the calcium and DAG signals that commit the cell to an ' +
              'effector programme. Four proteins, in a fixed order, each one reading the last.',
        nodes: ['cd3z', 'zap70', 'lat', 'plcg1'], layers: ['tcr'],
      },
      {
        title: 'What activation looks like',
        text: 'The outputs are what an immunologist actually measures. CD69 appears on the surface within hours. ' +
              'CD40L follows, and it is how the T cell licenses B cells and dendritic cells — this is T cell HELP, ' +
              'not killing. The cell divides, producing a clone of identical specificity. And it secretes ' +
              'cytokines, IFN-γ among them — which is the point at which this arm rejoins Loop C and the rest of ' +
              'the atlas.',
        nodes: ['plcg1', 'cd69', 'cd40l', 'tcell-prolif', 'ifng', 'responder-cell'], layers: ['tcr', 'ifn-gamma'],
      },
      {
        title: 'A ligand that occupies without activating',
        text: 'TRAIL is a killing ligand that activated T and NK cells use against infected and transformed ' +
              'targets. It works by TRIMERISING — three copies clustering DR4 or DR5, which assembles a ' +
              'death-inducing signalling complex and triggers apoptosis, or necroptosis, or NF-κB. TRAILshort is a ' +
              'splice variant missing cysteine 230, and without that cysteine it CANNOT trimerise. It binds DR5 ' +
              'and does none of it: no FADD, no caspase-8, no RIPK1, no DISC, no apoptosis, no necroptosis, and — ' +
              'measured directly by reporter assay — no NF-κB. It is a key that fits the lock and turns nothing.',
        nodes: ['trail-fl', 'trailshort', 'dr5'], layers: ['tcr'],
      },
      {
        title: 'The eraser',
        text: 'What an occupied-but-unclustered DR5 does instead is recruit SHP-1, a phosphatase. SHP-1 sits ' +
              'autoinhibited until engaged, then autophosphorylates at Y536 and goes to work — and what it removes ' +
              'is the phosphate on ZAP-70 at Y319. The ZAP-70–CD3ζ association comes apart, p-LAT falls, p-PLCγ1 ' +
              'falls. Recall step two: the whole signal was a set of phosphates. TRAILshort does not block the ' +
              'receptor, displace the antigen, or damage anything. It brings an eraser to the one place where the ' +
              'signal is written down.',
        nodes: ['dr5', 'shp1', 'zap70', 'cd3z', 'lat', 'plcg1'], layers: ['tcr'],
      },
      {
        title: 'Silence, not death',
        text: 'So every output from step five falls — fewer CD69+CD40L+ cells, less proliferation, less IFN-γ — ' +
              'while the T cell remains perfectly alive. That is what makes this TOLERANCE rather than depletion, ' +
              'and it is why it is so hard to see clinically: nothing is missing, the cells are simply not ' +
              'answering. Note that the atlas DERIVES the consequence rather than asserting it — the signs along ' +
              'the route multiply out negative, so the cascade navigator concludes on its own that TRAILshort ' +
              'lowers Loop C\'s IFN-γ. And because TRAILshort travels in extracellular vesicles, it does this to ' +
              'bystander cells it never touched.',
        nodes: ['trailshort', 'cd69', 'cd40l', 'tcell-prolif', 'ifng', 'responder-cell'], layers: ['tcr', 'ifn-gamma'],
      },
      {
        title: 'Reversing it — and what this arm is not',
        text: 'Two handles, both demonstrated. Neutralising the ligand with anti-TRAILshort antibody restored ' +
              'IFN-γ in co-cultures of patient T cells with their own lymphoma B cells. Removing the phosphatase ' +
              'works too, though CRISPR knockout of SHP-1 rescued p–ZAP-70 far better than the small molecule ' +
              'NSC-87877 did — so read that node as validating the TARGET, not the compound. The in vivo stakes: ' +
              'TRAILshort antagonised CD19 CAR-T control of lymphoma, because a CAR signals through the same CD3ζ ' +
              'ITAMs a native receptor does. FINALLY, AND IMPORTANTLY — nothing in this arm has been shown in a ' +
              'SAMHD1 system, and no link between SAMHD1 and TRAILshort is claimed. Every node here is graded G: ' +
              'established elsewhere, imported. Treat it as a candidate modifier of the T-cell attrition ' +
              'phenotype, to be tested — not as part of the A565T cascade.',
        nodes: ['anti-trailshort', 'nsc87877', 'trailshort', 'shp1', 'car-t', 'immunodef'],
        layers: ['tcr', 'drugs', 'clinical'],
      },
    ],
  },

  {
    id: 'arms',
    title: 'Ten arms — where each scalpel cuts',
    blurb: 'The study design, read as anatomy rather than as a table.',
    steps: [
      {
        title: 'Axis 1 — the oncologic "upward" direction',
        text: 'Arm 3 drives TLR3 with poly-ICLC so IRF3 INDUCES more SAMHD1 protein — rescuing genome stability at ' +
              'the cost of an interferon surge. Arm 4 adds upadacitinib to test whether the gain can be uncoupled ' +
              'from the surge.',
        nodes: ['polyiclc', 'tlr3', 'trif', 'irf3', 'samhd1', 'upadacitinib'], layers: ['drugs', 'tlr', 'samhd1'],
      },
      {
        title: 'Axis 2 — the immuno-metabolic "downward" direction',
        text: 'Arm 2 blocks JAK1 (reception). Arm 5 blocks TBK1/IKKε (production at source), carrying the ' +
              'genome-stability tradeoff. Arm 6 combines them. p-TBK1(Ser172) separates the two cleanly, because ' +
              'JAK1 inhibition does not touch it.',
        nodes: ['upadacitinib', 'jak1', 'amlexanox', 'tbk1', 'ikke', 'samhd1'], layers: ['drugs', 'ifn-jak', 'ankib1'],
      },
      {
        title: 'Axis 3 — four scalpels at four depths',
        text: 'Arm 7 VBIT-4 at the outer membrane. Arm 8 IMSB301 at the cytosolic DNA sensor. Arm 9 MCC950 at the ' +
              'cytosolic inflammasome. Arm 10 PLP/B6 at the inner membrane — the only arm upstream of both NLRP3 ' +
              'and VDAC1. Four anatomically distinct positions in one cascade.',
        focus: 'mitochondrion',
        nodes: ['vbit4', 'vdac1-oligo', 'imsb301', 'cgas', 'mcc950', 'nlrp3', 'plp', 'pnc1'],
        layers: ['drugs', 'mito', 'inflammasome', 'cgas-sting'],
      },
      {
        title: 'The independence matrix',
        text: 'Arm 8 should give ISG↓ with IL-1β unchanged. Arm 9 should give IL-1β↓ with ISG unchanged. Those two ' +
              'mirror-image profiles together are the definitive test of Loop A/B independence in primary human ' +
              'heterozygous cells, and the single highest-value output of the study.',
        nodes: ['imsb301', 'isg-set', 'mcc950', 'il1b', 'cgas', 'nlrp3'],
        layers: ['drugs', 'cgas-sting', 'inflammasome', 'isg'],
      },
      {
        title: 'And the bifurcating arm',
        text: 'Arm 10 is the one whose every possible result is informative. Loop B only → the loops are ' +
              'independently gated. Both → PNC1-driven mtROS dominates VDAC1 oligomerisation and the target ' +
              'hierarchy shifts inward. Neither → heterozygous dNTP excess is below the SLC25A33 overload ' +
              'threshold, which defines the haploinsufficiency floor for this node.',
        focus: 'mitochondrion',
        nodes: ['plp', 'pnc1', 'polg', 'oxmtdna', 'vdac1-oligo', 'mtros'], layers: ['drugs', 'mito', 'inflammasome'],
      },
    ],
  },
];

// ── Cascade path presets ──────────────────────────────────────────────────
// Starting points for the step-through navigator. Unlike TOURS these are not
// authored narratives — the routes are enumerated from the graph at runtime,
// so a preset stays correct (and gains new routes) as the atlas grows. Any
// node can also be traced to from its own inspector.
export const PATH_PRESETS = [
  {
    id: 'ifn-induction',
    title: 'Every way A565T induces type-I interferon',
    blurb: 'The question the whole framework turns on.',
    from: 'a565t', to: 'ifnb',
  },
  {
    id: 'il1b',
    title: 'Every way A565T drives IL-1β',
    blurb: 'Loop B, the GOLD feedforward, and the routes JAK inhibition misses.',
    from: 'a565t', to: 'il1b',
  },
  {
    id: 'ifng',
    title: 'Every way A565T drives IFN-γ',
    blurb: 'Loop C — the paracrine arm that needs a second cell.',
    from: 'a565t', to: 'ifng',
  },
  {
    id: 'atp',
    title: 'Every way A565T reaches ATP failure',
    blurb: 'The JAK-refractory bioenergetic residual.',
    from: 'a565t', to: 'atp',
  },
  {
    id: 'isg',
    title: 'Every way A565T reaches the ISG programme',
    blurb: 'What the interferon score is actually measuring.',
    from: 'a565t', to: 'isg-set',
  },
  {
    id: 'clinical',
    title: 'A565T → every clinical endpoint',
    blurb: 'Variant to diagnosis, one reaction at a time.',
    from: 'a565t',
    to: ['mecfs', 'psa', 'steatosis', 'naci', 'connective', 'immunodef', 'dysautonomia', 'cancer-risk', 'pem'],
  },
  {
    id: 'mtdna-ifn',
    title: 'mtDNA escape → interferon',
    blurb: 'The BLUE→RED bridge on its own, without the upstream nucleotide chemistry.',
    from: 'mtdna', to: 'ifnb',
  },
  {
    id: 'dntp-nlrp3',
    title: 'dNTP pool → NLRP3',
    blurb: 'Both inputs — POLG/ox-mtDNA and the dG catabolism route.',
    from: 'dntp-pool', to: 'nlrp3',
  },
];
