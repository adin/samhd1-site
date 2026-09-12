/**
 * refs.js — citation registry.
 * Keys are referenced from node.refs / edge.refs. Keep keys stable.
 * `doc` marks claims that come from the project's own manuscripts rather than
 * from external literature, so the inspector can label them honestly.
 */

export const REFS_SCHEMA_VERSION = 2;
export const REFS = {
  // ── Project manuscripts (internal) ──────────────────────────────────
  docSiege:   { bibliography: { text: 'The Mitochondrion Under Siege — extended figure legend & citation guide (this project)', doc: true }, atlas: {} },
  doc10arm:   { bibliography: { text: 'SAMHD1 Haploinsufficiency in Familial ME/CFS — 10-arm ex vivo study proposal (this project)', doc: true }, atlas: {} },
  docConcept: { bibliography: { text: 'SAMHD1 A565T concept note — NACI framework (this project)', doc: true }, atlas: {} },
  docGlass:   { bibliography: { text: 'The Glass Cannon Foundation — executive prospectus (this project)', doc: true }, atlas: {} },

  // ── SAMHD1: variant, structure, dNTPase ─────────────────────────────
  schneider2022:  { bibliography: { text: 'Schneider A. Functional characterisation of SAMHD1 variants in glioblastoma and monocytic cell lines. LMU München doctoral dissertation, 2022.', doi: '10.5282/edoc.30871' }, atlas: {} },
  rentoft2016:    { bibliography: { text: 'Rentoft M et al. Heterozygous colon cancer-associated mutations of SAMHD1 have functional significance. PNAS 2016;113(17):4723–8.', doi: '10.1073/pnas.1519128113' }, atlas: {} },
  franzolin2013:  { bibliography: { text: 'Franzolin E et al. The deoxynucleotide triphosphohydrolase SAMHD1 is a major regulator of DNA precursor pools in mammalian cells. PNAS 2013;110(35):14272–7.' }, atlas: {} },
  ji2014:         { bibliography: { text: 'Ji X et al. Structural basis of cellular dNTP regulation by SAMHD1. PNAS 2014;111(41):E4305–14.' }, atlas: {} },
  bester2025:     { bibliography: { text: 'Bester AC et al. SAMHD1 shapes dNTP homeostasis by allosteric regulation in resting cells. Nat Commun 2025.', doi: '10.1038/s41467-025-56208-y' }, atlas: {} },
  rice2009:       { bibliography: { text: 'Rice GI et al. Mutations in SAMHD1 cause Aicardi-Goutières syndrome at the AGS5 locus. Nat Genet 2009;41:829–32.' }, atlas: {} },

  // ── SAMHD1: genome stability ────────────────────────────────────────
  daddacha2017:   { bibliography: { text: 'Daddacha W et al. SAMHD1 promotes DNA end resection to facilitate DNA repair by homologous recombination. Cell Rep 2017;20(8):1921–35.' }, atlas: {} },
  park2021:       { bibliography: { text: 'Park K et al. AGS-associated gene SAMHD1 preserves genome integrity by preventing R-loop formation. PLoS Genet 2021;17:e1009523.' }, atlas: {} },
  coquel2018:     { bibliography: { text: 'Coquel F et al. SAMHD1 acts at stalled replication forks to prevent interferon induction. Nature 2018;557:57–61.', doi: '10.1038/s41586-018-0050-1' }, atlas: {} },
  teodorocastro2026: { bibliography: { text: 'Teodoro-Castro B et al. A toxic STING-SAMHD1 axis drives replication stress in progeria and cancer cells. Nucleic Acids Res 2026;54(11):gkag614. Inducible progerin human dermal fibroblasts, U2OS STING-null reconstitution, DNA fiber assays, SIRF-PLA, subcellular fractionation, LC-MS dNTP metabolomics. Replication stress drives STING into the nucleus/chromatin WITHOUT cGAMP elevation or TBK1/IRF3 activation; nuclear STING limits dNTPs (fork slowing) and facilitates MRE11-mediated nascent DNA degradation (NDD) once stalled — both mediated by SAMHD1. SAMHD1 depletion phenocopies STING abrogation and rescues fork speed/stability. The pathological mirror of Coquel 2018’s protective SAMHD1-MRE11 resection — same machinery, opposite outcome, dose/context-dependent.', doi: '10.1093/nar/gkag614', pmid: '42306943' }, atlas: {} },

  // ── SAMHD1: innate immune suppression ───────────────────────────────
  espada2023:     { bibliography: { text: 'Espada CE et al. SAMHD1 impairs type I interferon induction through the MAVS, IKKε, IRF3/7 signalling axis. J Biol Chem 2023;299:104925.', doi: '10.1016/j.jbc.2023.104925' }, atlas: {} },
  schumann2023:   { bibliography: { text: 'Schumann T et al. Deficiency for SAMHD1 activates MDA5 in a cGAS/STING-independent manner. J Exp Med 2023;220(1):e20220829.' }, atlas: {} },
  wang2018:       { bibliography: { text: 'Wang D et al. SAMHD1 suppresses innate immune responses to viral infections and inflammatory stimuli by inhibiting the NF-κB and interferon pathways. PNAS 2018;115(16):E3798–807.' }, atlas: {} },
  mlcochova2020:  { bibliography: { text: 'Mlcochova P et al. TLR4-mediated pathway triggers interferon-independent G0 arrest and SAMHD1-dependent dNTP depletion. EMBO Rep 2020;21(3):e49420.' }, atlas: {} },
  yang2016irf3:   { bibliography: { text: 'Yang S et al. IRF3 is a key regulation factor for inducing SAMHD1 expression in antiviral innate immunity. Sci Rep 2016;6:29665.' }, atlas: {} },

  // ── ANKIB1 / K11 ubiquitin ──────────────────────────────────────────
  betrancourt2026:{ bibliography: { text: 'Betrancourt A, … Rieser E, Walczak H et al. Lysine-11 ubiquitination drives type-I/III interferon induction by cGAS–STING and TLR3/4 via ANKIB1. Nat Cell Biol 2026;28:608–21.', doi: '10.1038/s41556-026-01886-z', pmid: '41792265' }, atlas: {} },

  // ── SAMHD1 balanced translocation / STING-HAQ modifier (added 2026-09-12,
  // not yet cited by any node -- pending Stage-B review before wiring) ──
  baker2026:      { bibliography: { text: 'Baker PJ et al. Iterative genetic testing identifies SAMHD1 deficiency caused by a homozygous balanced translocation. J Hum Immun 2026;2(6):e20260044. 13yo male, complete SAMHD1 protein loss via t(17;20)(p11.2;q11.23); FCL-like phenotype (perniosis/autoamputation, small-joint arthritis) WITHOUT AGS neurological features or cerebral calcification -- patient is heterozygous for the STING HAQ allele, proposed by the authors as a partial explanation. Treated with tofacitinib (JAK1/3i): 6-gene ISG panel, joint count (14->0), NK cells, and switched memory B cells all normalized.', doi: '10.70962/jhi.20260044', pmid: '42657394' }, atlas: {} },
  simchoni2025haq:{ bibliography: { text: 'Simchoni N et al. The common HAQ STING allele prevents clinical penetrance of COPA syndrome. J Exp Med 2025;222(4):e20242179. HAQ STING acts dominantly to dampen COPA-dependent STING signaling; co-segregates with clinical nonpenetrance in unaffected carriers. Cited directly by Baker et al. 2026 as the precedent for their own patient\'s STING-HAQ genotype.', doi: '10.1084/jem.20242179', pmid: '40014299' }, atlas: {} },

  // ── cGAS–STING ──────────────────────────────────────────────────────
  west2015:       { bibliography: { text: 'West AP et al. Mitochondrial DNA stress primes the antiviral innate immune response. Nature 2015;520:553–7.', doi: '10.1038/nature14156', pmid: '25642965' }, atlas: {} },
  rabinowitz2025: { bibliography: { text: 'Rabinowitz J / Diaz-Griffero F et al. SAMHD1 mitochondrial localisation and the ability to prevent mtDNA release. J Biol Chem 2025.' }, atlas: {} },
  han2026:        { bibliography: { text: 'Han et al. IMSB301 (cGAS inhibitor) normalises IFN/ISG signature in SAMHD1-AGS PBMCs by scRNA-seq. Clin Transl Immunol 2026.' }, atlas: {} },
  ablasser2013:   { bibliography: { text: 'Ablasser A et al. cGAS produces a 2′-5′-linked cyclic dinucleotide second messenger that activates STING. Nature 2013;498:380–4.' }, atlas: {} },
  ng2024:         { bibliography: { text: 'Sun X et al. Targeting STING in dendritic cells alleviates psoriatic inflammation. Cell Mol Immunol 2024;21:738–51.' }, atlas: {} },

  // ── Mitochondrial injury ────────────────────────────────────────────
  xu2023vdac1:    { bibliography: { text: 'Xu B et al. SAMHD1–VDAC1 interaction; Samhd1-KO impairs ΔΨm and drives M1 skewing. Int J Mol Sci 2023;24:7888.', doi: '10.3390/ijms24097888', pmid: '37175593' }, atlas: {} },
  shoshan2020:    { bibliography: { text: 'Shoshan-Barmatz V et al. VDAC1 as a central mediator of mitochondria-driven apoptosis and metabolism. Front Oncol 2020.' }, atlas: {} },
  dolce2001:      { bibliography: { text: 'Dolce V et al. PNC1/SLC25A33 as mitochondrial pyrimidine nucleotide carrier. J Biol Chem 2001;276:6742.', pmid: null }, atlas: { flag: 'unresolved', note: 'OPEN 2026-09-12: the stored PMID (11110787) resolves to an unrelated 2001 J Biol Chem paper on cAMP-dependent protein kinase subunits, not this citation -- confirmed via PubMed. A candidate replacement exists (PMID 11226231, Dolce V, Fiermonte G, Runswick MJ, Palmieri F, Walker JE. "The human mitochondrial deoxynucleotide carrier and its role in the toxicity of nucleoside antivirals." PNAS 2001;98(5):2284-2288, doi:10.1073/pnas.031430998) but its journal/volume/page (PNAS 98:2284) do not match the stated "J Biol Chem 2001;276:6742" and it does not use the PNC1/SLC25A33 name -- that nomenclature may trace to a later paper (Floyd et al. 2007). Needs a human to confirm the correct source before restoring a pmid; a visible gap beats a wrong one.' } },
  lunetti2016:    { bibliography: { text: 'Lunetti P et al. Characterisation of human SLC25A36 (PNC2) as a mitochondrial pyrimidine nucleotide carrier. J Biol Chem 2016;291:12241.', pmid: '27129270' }, atlas: {} },
  kim2025:        { bibliography: { text: 'Kim D, Jin J, Lee Y-R et al. SLC25A33-mediated mitochondrial DNA synthesis plays a critical role in the inflammatory response of M1 macrophages by contributing to mitochondrial ROS and VDAC oligomerization. Int J Biol Sci 2025;21(7):2935–51.', doi: '10.7150/ijbs.96563', pmid: '40384854' }, atlas: {} },
  dinoia2014:     { bibliography: { text: 'Di Noia MA, Todisco S, Cirigliano A et al. The human SLC25A33 and SLC25A36 genes of solute carrier family 25 encode two mitochondrial pyrimidine nucleotide transporters. J Biol Chem 2014;289(48):33137–48. Both carriers also transport GUANINE (deoxy)nucleotides but not adenine — the biochemical basis for routing a dGTP-skewed pool through carriers named for pyrimidines.', doi: '10.1074/jbc.M114.610808', pmid: '25320081' }, atlas: {} },

  // ── SAMHD1 and NK cells: context-dependent, NOT a single signed relation ──
  // Two tumour-microenvironment studies and one retroviral-infection study
  // point in OPPOSITE directions. See the note on the samhd1 node.
  sun2025nk:      { bibliography: { text: 'Sun J et al. Selective depletion of tumor-associated SAMHD1 enhances chemotherapeutic efficacy and antitumor immune responses. Signal Transduct Target Ther 2025;10:e02523. Depleting SAMHD1 in TUMOUR cells triggers innate immune responses and IMPROVES NK-mediated killing — a negative-direction relation.', doi: '10.1038/s41392-025-02523-1' }, atlas: {} },
  gutierrez2024:  { bibliography: { text: 'Gutiérrez-Chamorro L et al. SAMHD1 expression is a surrogate marker of immune infiltration and determines prognosis after neoadjuvant chemotherapy in early breast cancer. Cell Oncol 2024;47(1):189–208. SAMHD1-EXPRESSING tumours showed shorter time-to-progression and overall survival, via downregulated IL-12 signalling.', doi: '10.1007/s13402-023-00862-1' }, atlas: {} },
  barrett2022:    { bibliography: { text: 'Barrett BS, Nguyen DH, Xu J et al. SAMHD1 promotes the antiretroviral adaptive immune response in mice exposed to lipopolysaccharide. J Immunol 2022;208(2):444–53. Samhd1-KO gave WEAKER NK, CD4+ and CD8+ responses by 14 dpi in Friend retrovirus infection — the opposite direction to the tumour data, and observed in MALE mice only.', doi: '10.4049/jimmunol.2001389', pmid: '34893529' }, atlas: {} },

  // ── TRPM3 / NK calcium: imported ME/CFS context, no established SAMHD1 link ──
  magawa2026:     { bibliography: { text: 'Magawa CT, Eaton-Fitch N, … Marshall-Gradisnik S. Deficient TRPM3-linked mitochondrial Ca²⁺ influx in natural killer cells associated with myalgic encephalomyelitis/chronic fatigue syndrome. BMC Immunol 2026. Fluo-8 AM / Rhod-2 AM live-cell imaging, N=10 ME/CFS vs N=10 HC. Direction is split WITHIN the paper — see the note in data/cytokines.js.', doi: '10.1186/s12865-026-00849-1' }, atlas: {} },
  sasso2026:      { bibliography: { text: 'Sasso EM, Er TS, Eaton-Fitch N, Hool L, Muraki K, Marshall-Gradisnik S. Large-scale investigation confirms TRPM3 ion channel dysfunction in myalgic encephalomyelitis/chronic fatigue syndrome. Front Med 2026;12:1703924. Whole-cell patch clamp, n=36 ME/CFS vs 42 HC, split across two sites (Griffith NCNED 26/33; UWA 10/9) with no significant site effect.', doi: '10.3389/fmed.2025.1703924' }, atlas: {} },
  elpeleg2008:    { bibliography: { text: 'Elpeleg O et al. POLG and mtDNA depletion/deletion syndromes. Hum Mol Genet 2008.' }, atlas: {} },
  gudz1997:       { bibliography: { text: 'Gudz TI et al. Direct inhibition of mitochondrial respiratory chain complex III by ceramide. J Biol Chem 1997;272:24154.', doi: '10.1074/jbc.272.39.24154', pmid: '9305864' }, atlas: {} },
  yang2025bik:    { bibliography: { text: 'Yang H, Cheung PH, Wu L. SAMHD1 enhances HIV-1-induced apoptosis in monocytic cells via the mitochondrial pathway. mBio 2025;16(7):e00425-25.', doi: '10.1128/mbio.00425-25' }, atlas: {} },
  luo2012:        { bibliography: { text: 'Luo S et al. BIM inhibits autophagy by recruiting Beclin 1 to microtubules. Mol Cell 2012;47:359–70.', doi: '10.1016/j.molcel.2012.05.040', pmid: '22742832' }, atlas: {} },
  tannahill2013:  { bibliography: { text: 'Tannahill GM et al. Succinate is an inflammatory signal that induces IL-1β through HIF-1α. Nature 2013;496:238–42.', doi: '10.1038/nature11986' }, atlas: {} },

  // ── Mitophagy / lysosome ────────────────────────────────────────────
  deng2024:       { bibliography: { text: 'Deng Z et al. IRF1→PARP12→ISG15→MFN1/2 ISGylation blocks PINK1/Parkin mitophagy. Bone Research 2024;12:63. (Replaces retracted Sliter 2018.)', doi: '10.1038/s41413-024-00363-3', pmid: '39465252' }, atlas: {} },
  xu2015becn1:    { bibliography: { text: 'Xu D et al. Modification of BECN1 by ISG15 plays a crucial role in autophagy regulation. Autophagy 2015;11(4):617–28.', doi: '10.1080/15548627.2015.1023982', pmid: '25906440' }, atlas: {} },
  yaxian2025:     { bibliography: { text: 'Yaxian L et al. SAMHD1 deficiency disrupts macrophage autophagy-lysosomal homeostasis via the mTOR–MITF–CTSD axis. Int J Biol Macromol 2025;327:147188.', doi: '10.1016/j.ijbiomac.2025.147188', pmid: '40886983' }, atlas: {} },
  napolitano2020: { bibliography: { text: 'Napolitano G et al. A substrate-specific mTORC1 pathway underlies Birt-Hogg-Dubé syndrome. Nature 2020;585:597–602.', doi: '10.1038/s41586-020-2444-0', pmid: '32612235' }, atlas: {} },

  // ── NLRP3 inflammasome ──────────────────────────────────────────────
  liu2026nlrp3:   { bibliography: { text: 'Liu D, Zhou C, Wang X, Luo Z, Xu R, … Hancks DC, Chen EH, Liang S, Zhong Z. Nucleotide metabolic rewiring enables NLRP3 inflammasome hyperactivation in obesity. Science 2026;391(6782):eadq9006. Myeloid-conditional Samhd1ΔMye KO AND pharmacologic dNTP-transport blockade, in cells from zebrafish, mice and humans.', doi: '10.1126/science.adq9006', pmid: '41538457' }, atlas: {} },
  swanson2019:    { bibliography: { text: 'Swanson KV, Deng M, Ting JP-Y. The NLRP3 inflammasome: molecular activation and regulation to therapeutics. Nat Rev Immunol 2019;19:477–89.', doi: '10.1038/s41577-019-0165-0', pmid: '31036962' }, atlas: {} },
  martinon2006:   { bibliography: { text: 'Martinon F et al. Gout-associated uric acid crystals activate the NALP3 inflammasome. Nature 2006;440:237–41.', doi: '10.1038/nature04516', pmid: '16407889' }, atlas: {} },
  coll2019:       { bibliography: { text: 'Coll RC et al. MCC950 directly targets the NLRP3 ATP-hydrolysis motif for inflammasome inhibition. Nat Commun 2019;10:2986.', doi: '10.1038/s41467-019-10702-2' }, atlas: {} },
  shi2015gsdmd:   { bibliography: { text: 'Shi J et al. Cleavage of GSDMD by inflammatory caspases determines pyroptotic cell death. Nature 2015;526:660–5.' }, atlas: {} },

  // ── IFN / JAK / STAT / ISG ──────────────────────────────────────────
  zhang2015isg15: { bibliography: { text: 'Zhang X et al. Human intracellular ISG15 prevents interferon-α/β over-amplification and auto-inflammation. Nature 2015;517:89–93.', doi: '10.1038/nature13801' }, atlas: {} },
  bhimavarapu2015:{ bibliography: { text: 'Bhimavarapu et al. STAT1 represses PGC-1α; STAT1-KO hepatocytes show more mitochondria and higher mtDNA. PLoS One 2015.' }, atlas: {} },
  mihaylova2024:  { bibliography: { text: 'Mihaylova et al. JAK inhibitors improve mitochondrial ATP, coupling and reduce proton leak in PBMCs. Rheumatol Int 2024.', pmid: '37985499' }, atlas: {} },
  fremond2023:    { bibliography: { text: 'Frémond ML et al. JAK inhibition in monogenic interferonopathies. J Clin Immunol 2023.', pmid: '36763178' }, atlas: {} },
  rodriguez2023:  { bibliography: { text: 'Rodríguez-García E et al. Homozygous SAMHD1 AGS; divergent phenotypes; JAK inhibitors effective. JIMD 2023.' }, atlas: {} },
  tesser2025:     { bibliography: { text: 'Tesser A et al. Type I interferon signature: a quantitative standardised method for assessment in interferonopathies. Clin Exp Immunol 2025;219(1):uxaf018.' }, atlas: {} },

  // ── Retroelement biology ────────────────────────────────────────────
  crow2006trex1:  { bibliography: { text: 'Crow YJ et al. Mutations in the gene encoding the 3′-5′ DNA exonuclease TREX1 cause Aicardi-Goutières syndrome at the AGS1 locus. Nat Genet 2006;38:917–20.' }, atlas: {} },
  stetson2008:    { bibliography: { text: 'Stetson DB et al. Trex1 prevents cell-intrinsic initiation of autoimmunity. Cell 2008;134:587–98.' }, atlas: {} },
  crow2006rnaseh2:{ bibliography: { text: 'Crow YJ et al. Mutations in genes encoding ribonuclease H2 subunits cause Aicardi-Goutières syndrome. Nat Genet 2006;38:910–6.' }, atlas: {} },
  ricemda5:       { bibliography: { text: 'Rice GI et al. Gain-of-function mutations in IFIH1 cause a spectrum of human disease phenotypes associated with upregulated type I interferon signalling. Nat Genet 2014;46:503–9.' }, atlas: {} },
  riceadar:       { bibliography: { text: 'Rice GI et al. Mutations in ADAR1 cause Aicardi-Goutières syndrome associated with a type I interferon signature. Nat Genet 2012;44:1243–8.' }, atlas: {} },
  ahmad2018:      { bibliography: { text: 'Ahmad S et al. Breaching self-tolerance to Alu duplex RNA underlies MDA5-mediated inflammation. Cell 2018;172:797–810.' }, atlas: {} },
  liddicoat2015:  { bibliography: { text: 'Liddicoat BJ et al. RNA editing by ADAR1 prevents MDA5 sensing of endogenous dsRNA as nonself. Science 2015;349:1115–20.' }, atlas: {} },
  zhao2013samhd1: { bibliography: { text: 'Zhao K et al. Modulation of LINE-1 and Alu/SVA retrotransposition by Aicardi-Goutières syndrome-related SAMHD1. Cell Rep 2013;4:1108–15.' }, atlas: {} },
  herrmann2018:   { bibliography: { text: 'Herrmann A et al. The SAMHD1-mediated block of LINE-1 retroelements is regulated by phosphorylation. Mob DNA 2018;9:11.' }, atlas: {} },
  hu2015samhd1:   { bibliography: { text: 'Hu S et al. SAMHD1 inhibits LINE-1 retrotransposition by promoting stress granule formation. PLoS Genet 2015;11:e1005367.' }, atlas: {} },
  liu2018hush:    { bibliography: { text: 'Liu N et al. Selective silencing of euchromatic L1s revealed by genome-wide screens for L1 regulators. Nature 2018;553:228–32.' }, atlas: {} },
  tchasovnikarova2015: { bibliography: { text: 'Tchasovnikarova IA et al. Epigenetic silencing by the HUSH complex mediates position-effect variegation in human cells. Science 2015;348:1481–5.' }, atlas: {} },
  rowe2010:       { bibliography: { text: 'Rowe HM et al. KAP1 controls endogenous retroviruses in embryonic stem cells. Nature 2010;463:237–40.' }, atlas: {} },
  richardson2014: { bibliography: { text: 'Richardson SR et al. The influence of LINE-1 and SINE retrotransposons on mammalian genomes. Microbiol Spectr 2014;3:MDNA3-0061.' }, atlas: {} },
  goodier2016:    { bibliography: { text: 'Goodier JL. Restricting retrotransposons: a review. Mob DNA 2016;7:16.' }, atlas: {} },
  moldovan2015:   { bibliography: { text: 'Moldovan JB, Moran JV. The zinc-finger antiviral protein ZAP inhibits LINE and Alu retrotransposition. PLoS Genet 2015;11:e1005121.' }, atlas: {} },
  richardson2018: { bibliography: { text: 'Richardson SR et al. Heritable L1 retrotransposition in the mouse primordial germline and early embryo. Genome Res 2017;27:1395–405.' }, atlas: {} },
  demarco2021:    { bibliography: { text: 'De Cecco M et al. L1 drives IFN in senescent cells and promotes age-associated inflammation. Nature 2019;566:73–8.' }, atlas: {} },
  thomas2017:     { bibliography: { text: 'Thomas CA et al. Modeling of TREX1-dependent autoimmune disease using human stem cells highlights L1 accumulation as a source of neuroinflammation. Cell Stem Cell 2017;21:319–31.' }, atlas: {} },
  zhang2024l1cgas:{ bibliography: { text: 'Reviews of L1 cDNA as a cGAS ligand and the retroelement origin of sterile interferon. (Composite anchor — see Goodier 2016, De Cecco 2019, Thomas 2017.)' }, atlas: {} },

  // ── E1: ZBP1 / Z-nucleic acid / necroptosis ─────────────────────────
  jiao2020:       { bibliography: { text: 'Jiao H, Wachsmuth L, Kumari S et al. Z-nucleic-acid sensing triggers ZBP1-dependent necroptosis and inflammation. Nature 2020;580:391–395.', doi: '10.1038/s41586-020-2129-8' }, atlas: {} },
  zhang2022adar:  { bibliography: { text: 'Zhang T, Yin C, Fedorov A et al. ADAR1 masks the cancer immunotherapeutic promise of ZBP1-driven necroptosis. Nature 2022;606:594–602.', doi: '10.1038/s41586-022-04753-7' }, atlas: {} },
  dereuver2022:   { bibliography: { text: 'de Reuver R, Verdonck S, Dierick E et al. ADAR1 prevents autoinflammation by suppressing spontaneous ZBP1 activation. Nature 2022;607:784–789.', doi: '10.1038/s41586-022-04974-w' }, atlas: {} },
  upton2012:      { bibliography: { text: 'Upton JW, Kaiser WJ, Mocarski ES. DAI/ZBP1/DLM-1 complexes with RIP3 to mediate virus-induced programmed necrosis. Cell Host Microbe 2012;11:290–297.', doi: '10.1016/j.chom.2012.01.016' }, atlas: {} },
  sun2012mlkl:    { bibliography: { text: 'Sun L, Wang H, Wang Z et al. Mixed lineage kinase domain-like protein mediates necrosis signaling downstream of RIP3 kinase. Cell 2012;148:213–227.', doi: '10.1016/j.cell.2011.11.031' }, atlas: {} },
  kaiser2011:     { bibliography: { text: 'Kaiser WJ, Upton JW, Long AB et al. RIP3 mediates the embryonic lethality of caspase-8-deficient mice. Nature 2011;471:368–372.', doi: '10.1038/nature09857' }, atlas: {} },
  conos2017:      { bibliography: { text: 'Conos SA, Chen KW, De Nardo D et al. Active MLKL triggers the NLRP3 inflammasome in a cell-intrinsic manner. PNAS 2017;114:E961–E969.', doi: '10.1073/pnas.1613305114' }, atlas: {} },
  malireddi2019:  { bibliography: { text: 'Malireddi RKS, Kesavardhana S, Kanneganti T-D. ZBP1 and PANoptosis. Front Cell Infect Microbiol 2019;9:406.', doi: '10.3389/fcimb.2019.00406' }, atlas: {} },

  // ── E2: DNase II / DNASE1L3 ─────────────────────────────────────────
  kawane2006:     { bibliography: { text: 'Kawane K, Ohtani M, Miwa K et al. Chronic polyarthritis caused by mammalian DNA that escapes from degradation in macrophages. Nature 2006;443:998–1002.', doi: '10.1038/nature05245' }, atlas: {} },
  rodero2017:     { bibliography: { text: 'Rodero MP, Tesser A, Bartok E et al. Type I interferon-mediated autoinflammation due to DNASE2 deficiency. Nat Commun 2017;8:2176.', doi: '10.1038/s41467-017-01932-3' }, atlas: {} },
  lan2014:        { bibliography: { text: 'Lan YY, Londoño D, Bouley R, Rooney MS, Hacohen N. Dnase2a deficiency uncovers lysosomal clearance of damaged nuclear DNA via autophagy. Cell Rep 2014;9:180–192.', doi: '10.1016/j.celrep.2014.08.074' }, atlas: {} },
  almayouf2011:   { bibliography: { text: 'Al-Mayouf SM, Sunker A, Abdwani R et al. Loss-of-function variant in DNASE1L3 causes a familial form of systemic lupus erythematosus. Nat Genet 2011;43:1186–1188.', doi: '10.1038/ng.975' }, atlas: {} },
  sisirak2016:    { bibliography: { text: 'Sisirak V, Sally B, D\'Agati V et al. Digestion of chromatin in apoptotic cell microparticles prevents autoimmunity. Cell 2016;166:88–101.', doi: '10.1016/j.cell.2016.05.034' }, atlas: {} },

  // ── E3: AIM2 / IFI16 (the ALR family) ───────────────────────────────
  hornung2009aim2:  { bibliography: { text: 'Hornung V, Ablasser A, Charrel-Dennis M et al. AIM2 recognizes cytosolic dsDNA and forms a caspase-1-activating inflammasome with ASC. Nature 2009;458:514–518.', doi: '10.1038/nature07725', pmid: '19158675' }, atlas: {} },
  fernandes2009aim2:{ bibliography: { text: 'Fernandes-Alnemri T, Yu J-W, Datta P, Wu J, Alnemri ES. AIM2 activates the inflammasome and cell death in response to cytoplasmic DNA. Nature 2009;458:509–513.', doi: '10.1038/nature07710' }, atlas: {} },
  unterholzner2010: { bibliography: { text: 'Unterholzner L, Keating SE, Baran M et al. IFI16 is an innate immune sensor for intracellular DNA. Nat Immunol 2010;11:997–1004.', doi: '10.1038/ni.1932' }, atlas: {} },
  jonsson2017:      { bibliography: { text: 'Jønsson KL, Laustsen A, Krapp C et al. IFI16 is required for DNA sensing in human macrophages by promoting production and function of cGAMP. Nat Commun 2017;8:14391.', doi: '10.1038/ncomms14391' }, atlas: {} },
  dombrowski2011:   { bibliography: { text: 'Dombrowski Y, Peric M, Koglin S et al. Cytosolic DNA triggers inflammasome activation in keratinocytes in psoriatic lesions. Sci Transl Med 2011;3:82ra38.', doi: '10.1126/scitranslmed.3002001' }, atlas: {} },

  // ── Metabolic / clinical ────────────────────────────────────────────
  kuroda2020:     { bibliography: { text: 'Kuroda M et al. IRF7 mediates obesity-associated MCP-1 transcription in adipocytes. PLOS ONE 2020;15(5):e0233390.' }, atlas: {} },
  ghazarian2017:  { bibliography: { text: 'Ghazarian M et al. Type I interferon responses drive intrahepatic T cells to promote metabolic syndrome. Sci Immunol 2017;2(10):eaai7616.' }, atlas: {} },
  li2013irf7:     { bibliography: { text: 'Li H et al. IRF7 deficiency prevents diet-induced obesity and insulin resistance. Am J Physiol Endocrinol Metab 2013;305(4):E485–95.' }, atlas: {} },
  reilly2013:     { bibliography: { text: 'Reilly SM et al. An inhibitor of the protein kinases TBK1/IKKε improves obesity-related metabolic dysfunctions. Nat Med 2013;19(3):313–21.', doi: '10.1038/nm.3082' }, atlas: {} },
  bjork2025:      { bibliography: { text: 'Björk A et al. Amlexanox inhibits production of type I interferon and suppresses B cell differentiation in vitro. RMD Open 2025;11:e005351.', doi: '10.1136/rmdopen-2024-005351' }, atlas: {} },
  che2025:        { bibliography: { text: 'Che X, Hornig M, Bateman L, Klimas N, Komaroff AL, Lipkin WI et al. Heightened innate immunity may trigger chronic inflammation, fatigue and post-exertional malaise in ME/CFS. npj Metab Health Dis 2025;3:5.', doi: '10.1038/s44324-025-00079-w' }, atlas: {} },
  verrecchia2004: { bibliography: { text: 'Verrecchia F, Mauviel A. TGF-β and IFN-γ: ultimate antagonists of extracellular matrix remodelling. Cell Signal 2004;16(11):1309–16.' }, atlas: {} },
  fragoulis2023:  { bibliography: { text: 'Fragoulis GE et al. Type-I interferon pathway and DNA damage accumulation in psoriatic arthritis. Front Immunol 2023;14:1274060.' }, atlas: {} },
  wirth2021:      { bibliography: { text: 'Wirth K, Scheibenbogen C. A unifying hypothesis of ME/CFS pathophysiology: oxidative stress, neuroimmunological impairment, autoantibodies and neuroinflammation affecting small fibre nerves. Free Radic Biol Med 2021;167:154–65.' }, atlas: {} },
  pavlovich2025:  { bibliography: { text: 'Pavlovich CP et al. Confirmation of BIK and SAMHD1 as prostate cancer susceptibility genes. The Prostate 2025;85(16):1556–61.', doi: '10.1002/pros.70037' }, atlas: {} },
  weischenfeldt2026: { bibliography: { text: 'Weischenfeldt J, Macintyre G, Reimand J et al. Integrated signatures define mutational processes in prostate cancer. Nature 2026 (9 Sept). International consortium (Copenhagen/CNIO/OICR/Sanger). Eight integrated mutational footprints (IMFs) across 959 donors explain 85% of primary prostate cancer genomes; four IMFs (37% of primary tumours), including replication-stress-driven and HR-deficiency signatures, associate with shorter time to metastasis. Signature-level population corroboration of the genomic-instability mechanism CLASS — does not name or assay SAMHD1 specifically.', doi: '10.1038/s41586-026-10468-w', pmid: '42717097' }, atlas: {} },
  vbit4mem2025:   { bibliography: { text: 'VBIT-4 produces VDAC1-independent membrane disruption above ~10 µM — dose ceiling rationale. (2025)' }, atlas: {} },
  immunesensor:   { bibliography: { text: 'ImmuneSensor Therapeutics — IMSB301 oral cGAS inhibitor, Phase 1 in AGS, chilblain lupus 1 and COPA syndrome.' }, atlas: {} },
  jochem2026:     { bibliography: { text: 'Jochem M et al. Ubiquitination of glycogen and metabolites in cells and tissues. Nature 2026.', doi: '10.1038/s41586-026-10548-x' }, atlas: {} },
  jalali2026:     { bibliography: { text: 'Jalali S, Natesampillai S, Nie Z, … Billadeau DD, Badley AD. TRAIL splice variant TRAILshort disrupts T cell receptor signaling and promotes immune tolerance in vivo. J Clin Invest 2026;136(15):e194449.', doi: '10.1172/JCI194449' }, atlas: {} },

  // ── Canonical TCR signalling (imported, not SAMHD1-derived) ─────────
  courtney2018:   { bibliography: { text: 'Courtney AH, Lo W-L, Weiss A. TCR signaling: mechanisms of initiation and propagation. Trends Biochem Sci 2018;43(2):108–23.', doi: '10.1016/j.tibs.2017.11.008', pmid: '29269020' }, atlas: {} },
  esensten2016:   { bibliography: { text: 'Esensten JH, Helou YA, Chopra G, Weiss A, Bluestone JA. CD28 costimulation: from mechanism to therapy. Immunity 2016;44(5):973–88.', doi: '10.1016/j.immuni.2016.04.020', pmid: '27192564' }, atlas: {} },
  rudolph2006:    { bibliography: { text: 'Rudolph MG, Stanfield RL, Wilson IA. How TCRs bind MHCs, peptides, and coreceptors. Annu Rev Immunol 2006;24:419–66.', doi: '10.1146/annurev.immunol.23.021704.115658', pmid: '16551255' }, atlas: {} },

  // ── E4: plasmacytoid dendritic cells and the IFN-α burst ────────────
  // Imported cell biology, not SAMHD1 data — everything citing these is G.
  siegal1999:     { bibliography: { text: 'Siegal FP, Kadowaki N, Shodell M, Fitzgerald-Bocarsly PA, Shah K, Ho S, Antonenko S, Liu Y-J. The nature of the principal type 1 interferon-producing cells in human blood. Science 1999;284(5421):1835–7.', doi: '10.1126/science.284.5421.1835', pmid: '10364556' }, atlas: {} },
  uematsu2005:    { bibliography: { text: 'Uematsu S, Sato S, Yamamoto M, Hirotani T, Kato H, Takeshita F, Matsuda M, Coban C, Ishii KJ, Kawai T, Takeuchi O, Akira S. Interleukin-1 receptor-associated kinase-1 plays an essential role for Toll-like receptor (TLR)7- and TLR9-mediated interferon-α induction. J Exp Med 2005;201(6):915–23.', doi: '10.1084/jem.20042372', pmid: '15767370' }, atlas: {} },
  honda2005:      { bibliography: { text: 'Honda K, Yanai H, Negishi H, Asagiri M, Sato M, Mizutani T, Shimada N, Ohba Y, Takaoka A, Yoshida N, Taniguchi T. IRF-7 is the master regulator of type-I interferon-dependent immune responses. Nature 2005;434(7034):772–7.', doi: '10.1038/nature03464', pmid: '15800576' }, atlas: {} },

  // ── E7: LL-37 + self-DNA → TLR9 (the psoriasis conversion step) ─────
  // Human pDCs and psoriatic skin, not SAMHD1 systems — everything citing
  // these is G. See the four held items in data/sensing.js.
  lande2007:      { bibliography: { text: 'Lande R, Gregorio J, Facchinetti V, Chatterjee B, Wang Y-H, Homey B, Cao W, Su B, Nestle FO, Zal T, Mellman I, Schröder J-M, Liu Y-J, Gilliet M. Plasmacytoid dendritic cells sense self-DNA coupled with antimicrobial peptide. Nature 2007;449(7162):564–9. LL-37 condenses self-DNA into aggregates retained in the pDC early endosome that trigger TLR9; self-DNA alone does not.', doi: '10.1038/nature06116', pmid: '17873860' }, atlas: {} },
  ganguly2009:    { bibliography: { text: 'Ganguly D, Chamilos G, Lande R, Gregorio J, Meller S, Facchinetti V, Homey B, Barrat FJ, Zal T, Gilliet M. Self-RNA–antimicrobial peptide complexes activate human dendritic cells through TLR7 and TLR8. J Exp Med 2009;206(9):1983–94. The TLR7/8 companion to Lande 2007 — cited as context on the ll37 node; the RNA arm itself is deliberately NOT drawn.', doi: '10.1084/jem.20090480', pmid: '19703986' }, atlas: {} },

  // ── 2026 Literature Extensions (Replicating & Extending 3-Loop Model) ──
  meng2026:       { bibliography: { text: 'Meng X, Zhou Q, Zhu Z, Qiao W, Geng B. Modeling calcific aortic valve disease with engineered human valve tissues identifies SAMHD1 as a therapeutic target. Biomaterials 2026;308:124432.', doi: '10.1016/j.biomaterials.2026.124432' }, atlas: {} },
  thomsen2026:    { bibliography: { text: 'Thomsen EA, Zhao J, Narita R, Davis LJ, Olagnier D. A genome-wide map of the genetic network in monocytes that regulates type I interferon induction by the cGAS-STING pathway. Sci Signal 2026;19(898):eadx3808.', doi: '10.1126/scisignal.adx3808' }, atlas: {} },
  plazag2026:     { bibliography: { text: 'Plaza-G AI, Miguez-Amil S, Hayes AM, Ciesielski GL, Feinstein P. Structural and single-molecule insights into the core human mitochondrial DNA replisome. Biochem J 2026;483(15):BCJ20260373.', doi: '10.1042/BCJ20260373' }, atlas: {} },
  zhang2026ra:    { bibliography: { text: 'Zhang R, Song Z, Xin Q, Xing W, Zhang W. The mitochondrial DNA signal in rheumatoid arthritis: From metabolic victim to inflammatory driver. Biochem Biophys Res Commun 2026;710:154304.', doi: '10.1016/j.bbrc.2026.154304' }, atlas: {} },
  cobb2026:       { bibliography: { text: 'Cobb L, Kumar J, Roy A, Walsh S, Sheerin U-M. Case of Aicardi-Goutières syndrome diagnosed in adulthood on whole-genome sequencing. BMJ Neurol Open 2026;8(1):e001407.', doi: '10.1136/bmjno-2025-001407' }, atlas: {} },
  mohanty2026:    { bibliography: { text: 'Mohanty S, Suklabaidya S, Mnatsakanyan N, Jacobson S, Harhaj EW. HTLV-1 Tax induces PINK1-PRKN/parkin-dependent mitophagy to mitigate activation of the CGAS-STING1 pathway. Autophagy 2026;22(7):1–18.', doi: '10.1080/15548627.2026.2707897' }, atlas: {} },
  gurbuz2026:     { bibliography: { text: 'Gürbüz N, Ismayilova S, Ahmadova G, Çiftçi R, Aksu G. Type I Interferonopathies in the Differential Diagnosis of Vasculitis: A Comprehensive Review. J Vis Exp 2026;209:e71286.', doi: '10.3791/71286' }, atlas: {} },
  lu2026micro:    { bibliography: { text: 'Lu X, Sun W, Zhang D, Hou B, Tai H. Emerging microbiome–mitochondria crosstalk in host defense and infectious diseases: mechanistic insights into NLRP3 inflammasome activation and mtDNA-mediated immunomodulation. Front Cell Infect Microbiol 2026;16:1866924.', doi: '10.3389/fcimb.2026.1866924' }, atlas: {} },
  xiao2026fih:    { bibliography: { text: 'Xiao T, Liu Y, He Z, Yang A, Li J. Engineered Exosome-Mediated FIH-1 Delivery for Targeted Therapy of Hyperuricemic Nephropathy by Inhibiting NF-κB/NLRP3 Inflammasome Signaling and Restoring Autophagic Homeostasis. Adv Healthc Mater 2026;15(14):e2501602.', doi: '10.1002/adhm.71602' }, atlas: {} },
  zuo2026:        { bibliography: { text: 'Zuo Y, Wang Q, Tian W, Wang X, Zheng Z et al. Pyruvate is a natural suppressor of interferon signaling by inducing STAT1 protein pyruvilation. Cell 2026;189(8):1975–1989.e19.', doi: '10.1016/j.cell.2026.01.023' }, atlas: {} },
  marcucci2026:   { bibliography: { text: 'Marcucci F, Rumio C. The consequences of mitochondrial dysfunction and upregulated glycolysis on innate and adaptive immune responses. Cell Signal Inflamm Dis 2026;1(1):5.', doi: '10.1186/s44505-026-00005-x' }, atlas: {} },
  ziogas2025:     { bibliography: { text: 'Ziogas A, Novakovic B, Ventriglia L, Galang N, Tran KA et al. Long-term histone lactylation connects metabolic and epigenetic rewiring in innate immune memory. Cell 2025;188(11):2992–3012.e16.', doi: '10.1016/j.cell.2025.03.048' }, atlas: {} },
  certo2025:      { bibliography: { text: 'Certo M, Pontarini E, Gilbert SG, Schmidt R, Turner JD et al. Lactate signalling leads to aggregation of immune-inflammatory hotspots and SLC5A12 blockade promotes their resolution. Nat Metab 2025;7(10):1663–1680.', doi: '10.1038/s42255-025-01331-9' }, atlas: {} },
  schneider2017:  { bibliography: { text: 'Schneider C, Oellerich T, Baldauf HM et al. SAMHD1 is a biomarker for cytarabine response and a therapeutic target in acute myeloid leukemia. Nat Med 2017;23(2):250–255.', doi: '10.1038/nm.4255' }, atlas: {} },
  herold2017:     { bibliography: { text: 'Herold N, Rudd SG, Ljungblad L et al. Targeting SAMHD1 with the Vpx protein to improve cytarabine therapy for hematological malignancies. Nat Med 2017;23(2):256–263.', doi: '10.1038/nm.4265' }, atlas: {} },
};

