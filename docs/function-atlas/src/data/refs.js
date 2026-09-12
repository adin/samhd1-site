/**
 * SAMHD1 Citation & Reference Registry — 3D Atlas Data Layer
 * Primary Authoritative Source of Truth for SAMHD1 literature citations,
 * findings, and provenance metadata.
 *
 * Sibling of viz/innate-immune-3d/src/data/refs.js
 */

export const REFS_SCHEMA_VERSION = 2;

export const REFS = {
  "[1]": {
    "bibliography": {
      "short": "Starostin J et al. 2023",
      "full": "Starostin J et al. SAMHD1 compound heterozygous rare variants associated with moyamoya disease. Human Mol Genetics. 2023;32(20):3021-3031.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11700514/"
    },
    "atlas": {
      "finding": "Novel SAMHD1 mutations cause moyamoya disease without typical AGS symptoms"
    }
  },
  "[2]": {
    "bibliography": {
      "short": "Nasrallah R et al. 2023",
      "full": "Nasrallah R et al. Aicardi-Gouteres Syndrome, Type 5, with a Novel Mutation in SAMHD1. Case Rep Neurol Med. 2023;2023:6670722.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/37371788/"
    },
    "atlas": {
      "finding": "R145P mutation in SAMHD1 causes juvenile dermatomyositis and cerebral palsy"
    }
  },
  "[3]": {
    "bibliography": {
      "short": "R&D Systems 2025",
      "full": "R&D Systems. Human SAMHD1 Antibody MAB8120. Protein expression and function data. 2025.",
      "url": "https://www.rndsystems.com/products/human-samhd1-antibody-883335_mab8120"
    },
    "atlas": {
      "finding": "Commercial antibody validation for SAMHD1 protein detection and research applications",
      "flag": "vendor"
    }
  },
  "[4]": {
    "bibliography": {
      "short": "Academic OUP 2023 - Oxidation",
      "full": "Academic OUP. Protein oxidation increases SAMHD1 binding ssDNA via its C-terminal domain. Nucleic Acids Research. 2023;51(13):7014-7033.",
      "url": "https://academic.oup.com/nar/article/51/13/7014/7184168"
    },
    "atlas": {
      "finding": "Protein oxidation at C522 (sulfenic acid) increases SAMHD1 ssDNA binding affinity 5-10 fold during S-phase",
      "flag": "unresolved"
    }
  },
  "[5]": {
    "bibliography": {
      "short": "Yang J et al. 2021 - MCL",
      "full": "Yang J et al. SAMHD1 Mutations and Expression in Mantle Cell Lymphoma. Front Oncol. 2021;11:763151.",
      "url": "https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2021.763151/full"
    },
    "atlas": {
      "finding": "Four novel missense mutations in SAMHD1 discovered in mantle cell lymphoma patients"
    }
  },
  "[6]": {
    "bibliography": {
      "short": "Xu B et al. 2023 - SAMHD1/VDAC1, TLR4 inflammation",
      "full": "Xu B, Sui Q, Hu H, Hu X, Zhou X, Qian C, Li N. SAMHD1 Attenuates Acute Inflammation by Maintaining Mitochondrial Function in Macrophages via Interaction with VDAC1. Int J Mol Sci 2023;24(9):7888.",
      "url": "https://doi.org/10.3390/ijms24097888",
      "doi": "10.3390/ijms24097888",
      "pmid": "37175593"
    },
    "atlas": {
      "finding": "SAMHD1 interacts with VDAC1 to maintain mitochondrial function and suppress inflammation; TLR4 inhibition",
      "note": "The workbook gave the first author as 'Feng K'. Three independent sources give Xu B. This citation sits behind the VDAC1 node and most of the mitochondrial arm, so it is the single most load-bearing reference in the atlas.",
      "verifiedBy": "bib:xu_samhd1_2023 + immune-atlas:xu2023vdac1 (with PMID) + PubMed search",
      "caution": "Mouse peritoneal macrophages, and the paper discusses phosphosite T634 — MOUSE numbering, equivalent to human T592. Worth stating wherever the atlas cites it alongside the human T592 node."
    }
  },
  "[7]": {
    "bibliography": {
      "short": "Ji X et al. 2014 - Structure",
      "full": "Ji X et al. Structural basis of cellular dNTP regulation by SAMHD1. Proc Natl Acad Sci USA. 2014;111(41):E4305-E4314.",
      "url": "https://www.pnas.org/doi/10.1073/pnas.1412289111"
    },
    "atlas": {
      "finding": "Structural basis of SAMHD1 activation by GTP and dNTPs; complete regulatory mechanism"
    }
  },
  "[8]": {
    "bibliography": {
      "short": "NanoString 2021",
      "full": "NanoString Technologies. SAMHD1 suppresses innate immune responses to viral infections and inflammatory stimuli by inhibiting the NF-κB and interferon pathways. 2021.",
      "url": "https://nanostring.com/publication/samhd1-suppresses-innate-immune-responses/"
    },
    "atlas": {
      "finding": "SAMHD1 suppresses NF-κB and interferon pathways during viral infections",
      "flag": "vendor"
    }
  },
  "[9]": {
    "bibliography": {
      "short": "Coggins SA et al. 2021",
      "full": "Coggins SA et al. SAMHD1 in cancer: curse or cure? PMC. 2021;9:148.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8843919/"
    },
    "atlas": {
      "finding": "Comprehensive review of SAMHD1 tumor suppressor and oncogenic roles across cancer types"
    }
  },
  "[10]": {
    "bibliography": {
      "short": "ScienceDirect 2018",
      "full": "ScienceDirect. SAMHD1 Suppression of Antiviral Immune Responses. Trends Microbiol. 2018.",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0966842X18302051"
    },
    "atlas": {
      "finding": "SAMHD1 suppresses antiviral immune responses through NF-κB and interferon pathway inhibition",
      "flag": "unresolved"
    }
  },
  "[11]": {
    "bibliography": {
      "short": "Apolonio JD et al. 2023 - Breast",
      "full": "Apolonio JD et al. SAMHD1 expression is a surrogate marker of immune infiltration and predicts prognosis in breast cancer. BMC Cancer. 2023;23:850.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10899429/"
    },
    "atlas": {
      "finding": "SAMHD1 expression predicts prognosis in breast cancer through immune infiltration modulation"
    }
  },
  "[12]": {
    "bibliography": {
      "short": "Ablasser A et al. 2021",
      "full": "Ablasser A et al. STING Signaling and Sterile Inflammation. Front Immunol. 2021;12:753789.",
      "url": "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2021.753789/full"
    },
    "atlas": {
      "finding": "STING signaling central to sterile inflammation and autoimmune diseases"
    }
  },
  "[13]": {
    "bibliography": {
      "short": "Zhang H et al. 2023 - Cancer bioRxiv",
      "full": "Zhang H et al. Multifaceted roles of SAMHD1 in cancer. bioRxiv. 2023.",
      "url": "https://www.biorxiv.org/content/10.1101/2021.07.03.451003v2.full-text"
    },
    "atlas": {
      "finding": "Systematic analysis of SAMHD1 roles across multiple cancer types using TCGA data",
      "flag": "preprint"
    }
  },
  
  "[15]": {
    "bibliography": {
      "short": "Cabello-Lobato MJ et al. 2017",
      "full": "Cabello-Lobato MJ et al. SAMHD1 Sheds Moonlight on DNA Double-Strand Break Repair. Trends Biochem Sci. 2017;42(9):681-684.",
      "url": "https://christie.openrepository.com/bitstream/handle/10541/620603/PIIS0168952517301671.pdf"
    },
    "atlas": {
      "finding": "SAMHD1 facilitates homologous recombination through CtIP recruitment to DNA breaks",
      "flag": "mirror"
    }
  },
  "[16]": {
    "bibliography": {
      "short": "Chen S et al. 2018 - SAMHD1 suppresses NF-κB and IFN",
      "full": "Zhao K et al. SAMHD1 suppresses innate immune responses to viral infections and inflammatory stimuli by inhibiting the NF-κB and interferon pathways. Proc Natl Acad Sci USA. 2018;115(18):E4284-E4293.",
      "url": "https://doi.org/10.1073/pnas.1801213115",
      "doi": "10.1073/pnas.1801213115"
    },
    "atlas": {
      "finding": "SAMHD1 suppresses NF-κB and interferon pathways through direct protein interactions",
      "note": "The workbook gave the first author as 'Zhao K'. The bib entry for the same DOI gives Chen. Single-source correction — confirm against PubMed before treating the surname as settled; the DOI itself is not in doubt.",
      "verifiedBy": "bib:chen_samhd1_2018"
    }
  },
  
  
  
  "[20]": {
    "bibliography": {
      "short": "Shoshan-Barmatz V et al. 2020",
      "full": "Shoshan-Barmatz V et al. VDAC1 at the Intersection of Cell Metabolism, Apoptosis, and Diseases. Biomolecules. 2020;10(11):1485.",
      "url": "https://doi.org/10.3390/biom10111485",
      "doi": "10.3390/biom10111485",
      "pmid": "33114780"
    },
    "atlas": {
      "finding": "VDAC1 central role in cell metabolism, apoptosis, and disease pathogenesis",
      "note": "Was linked to a semanticscholar PDF mirror. DOI recovered from the bib without leaving the repository.",
      "verifiedBy": "bib:shoshan-barmatz_vdac1_2020 (title and journal both match: Biomolecules)"
    }
  },
  "[21]": {
    "bibliography": {
      "short": "Jang S et al. 2025 - Multifaceted",
      "full": "Jang S et al. The multifaceted nature of SAMHD1-mediated viral restriction. PMC. 2025;PMC12090746.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12090746/"
    },
    "atlas": {
      "finding": "K580 acetylation crucial for SAMHD1 dNTPase-independent antiviral restriction"
    }
  },
  "[22]": {
    "bibliography": {
      "short": "Rehwinkel J et al. 2023",
      "full": "Rehwinkel J et al. Deficiency for SAMHD1 activates MDA5 in a cGAS/STING-dependent manner. J Exp Med. 2023;220(1):e20220829.",
      "url": "https://rupress.org/jem/article/220/1/e20220829/213670/"
    },
    "atlas": {
      "finding": "SAMHD1 deficiency activates MDA5 through cGAS/STING pathway priming"
    }
  },
  "[23]": {
    "bibliography": {
      "short": "Shoshan-Barmatz V 2017 - VDAC1",
      "full": "Shoshan-Barmatz V et al. VDAC1 as a Player in Mitochondria-Mediated Apoptosis and Target for Modulating Apoptosis. PubMed. 2017.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/28618997/"
    },
    "atlas": {
      "finding": "VDAC1 oligomerization key step in mitochondria-mediated apoptosis pathway"
    }
  },
  "[24]": {
    "bibliography": {
      "short": "Yang C et al. 2024 - K580",
      "full": "Yang C et al. Acetylation of SAMHD1 at lysine 580 is crucial for blocking HIV-1. mBio. 2024;e01958-24.",
      "url": "https://journals.asm.org/doi/10.1128/mbio.01958-24"
    },
    "atlas": {
      "finding": "K580 acetylation essential for SAMHD1 HIV-1 restriction independent of dNTPase activity"
    }
  },
  "[25]": {
    "bibliography": {
      "short": "Halldén E et al. 2025 - Prostate",
      "full": "Halldén E, et al. Assessing the contribution of rare protein-coding germline variants to prostate cancer risk and severity. Nature Communications. 2025;16:944.",
      "url": "https://doi.org/10.1038/s41467-025-56944-1",
      "doi": "10.1038/s41467-025-56944-1"
    },
    "atlas": {
      "finding": "Meta-analysis of 37,184 prostate cancer cases confirms SAMHD1 as hereditary cancer gene with OR=2.02 [1.65-2.45]"
    }
  },
  "[26]": {
    "bibliography": {
      "short": "Lu J et al. 2024 - Prostate medRxiv",
      "full": "Lu J, et al. Characterising the contribution of rare protein-coding germline variants to prostate cancer risk and severity. medRxiv. 2024.",
      "url": "https://doi.org/10.1101/2024.05.10.24307164"
    },
    "atlas": {
      "finding": "Independent validation of SAMHD1 association with prostate cancer through telomere maintenance"
    }
  },
  "[27]": {
    "bibliography": {
      "short": "An S et al. 2023 - ccRCC",
      "full": "An S, et al. SAMHD1-induced endosomal FAK signaling promotes human renal clear cell carcinoma metastasis by activating Rac1-mediated lamellipodia protrusion. Experimental & Molecular Medicine. 2023;55:760-773.",
      "url": "https://doi.org/10.1038/s12276-023-00961-x",
      "doi": "10.1038/s12276-023-00961-x"
    },
    "atlas": {
      "finding": "SAMHD1 acts as oncogene in ccRCC via cortactin-FAK-Rac1 signaling and metastasis promotion"
    }
  },
  
  "[29]": {
    "bibliography": {
      "short": "Antonucci JM et al. 2016 - CD8",
      "full": "Antonucci JM, St Gelais C, de Silva S, et al. SAMHD1 Suppression of Antiviral Immune Responses. Cell Rep. 2016;16(6):1692-1704. PMID: 27477284; PMCID: PMC6377309.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6377309/"
    },
    "atlas": {
      "finding": "Details how SAMHD1 suppresses CD8+ T cell hyperactivation and prevents autoimmune responses"
    }
  },
  "[30]": {
    "bibliography": {
      "short": "Yang L et al. 2025 - BIK mBio",
      "full": "Yang L et al. SAMHD1 enhances HIV-1-induced apoptosis in monocytic cells via VDAC1-mediated mitochondrial pathway and BIK upregulation. mBio. 2025;16(3):e00425-25.",
      "url": "https://journals.asm.org/doi/10.1128/mbio.00425-25",
      "doi": "10.1128/mbio.00425-25"
    },
    "atlas": {
      "finding": "SAMHD1 increases BIK mRNA/protein; BIK mediates mitochondrial depolarization; monocyte vs macrophage dichotomy"
    }
  },
  
  
  "[33]": {
    "bibliography": {
      "short": "Che X, Klimas N et al. 2025 - Columbia ME/CFS",
      "full": "Che X, Ranjan A, Bateman L, Klimas N, Komaroff AL, Levine SM, Montoya JG, Peterson DL, Pearlman C, Lipkin WI. Heightened innate immunity may trigger chronic inflammation, fatigue and post-exertional malaise in ME/CFS. npj Metabolic Health and Disease. 2025;3:5.",
      "url": "https://doi.org/10.1038/s44324-025-00079-w",
      "doi": "10.1038/s44324-025-00079-w"
    },
    "atlas": {
      "finding": "Columbia/Lipkin study with Dr. Nancy Klimas. ME/CFS shows heightened innate immune responses with elevated IL-6, IL-1β, TNF-α, IFN-γ. LPS stimulation produces excessive cytokines. Validates SAMHD1 dysfunction as ME/CFS mechanism",
      "note": "One of the two entries the PII guard flags for the reviewer term 'Klimas' — a genuine co-author, not an identifier. Left in place deliberately.",
      "verifiedBy": "bib:che_heightened_2025 (npj Metab Health Dis; title matches)"
    }
  },
  "[34]": {
    "bibliography": {
      "short": "Columbia University 2025 - Press Release",
      "full": "Columbia University Mailman School of Public Health. Overactive Immune System Seen in Patients with Chronic Fatigue Syndrome (ME/CFS). Press Release. September 2, 2025.",
      "url": "https://www.publichealth.columbia.edu/news/overactive-immune-system-seen-patients-chronic-fatigue-syndrome-me-cfs"
    },
    "atlas": {
      "finding": "Press release summarizing Columbia ME/CFS study. Heightened innate immunity, metabolic dysfunction. Authors include Nancy Klimas. Proposed therapies: metformin, IL-37, rapamycin",
      "flag": "press"
    }
  },
  "[35]": {
    "bibliography": {
      "short": "Hu S et al. 2015 - LINE-1",
      "full": "Hu S et al. SAMHD1 Inhibits LINE-1 Retrotransposition by Promoting Stress Granule Assembly. PLoS Genet. 2015;11(7):e1005367.",
      "url": "https://journals.plos.org/plosgenetics/article?id=10.1371%2Fjournal.pgen.1005367"
    },
    "atlas": {
      "finding": "SAMHD1 promotes stress granule assembly through eIF2α phosphorylation and disrupted eIF4A/eIF4G interaction; sequesters LINE-1 RNP in stress granules blocking retrotransposition; dNTPase-independent mechanism in cycling cells"
    }
  },
  "[36]": {
    "bibliography": {
      "short": "Coquel F et al. 2018 - LINE-1 S-phase",
      "full": "Coquel F et al. The SAMHD1-mediated block of LINE-1 retroelements is regulated by the cell cycle. PMC. 2018;PMC5872582.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5872582/"
    },
    "atlas": {
      "finding": "SAMHD1 restricts LINE-1 in cell cycle-dependent manner; stress granule mechanism active when dNTPase function reduced during S-phase"
    }
  },
  "[37]": {
    "bibliography": {
      "short": "Choi J et al. 2015 - RNase",
      "full": "Choi J et al. SAMHD1 specifically restricts retroviruses through its RNase activity. Retrovirology. 2015;12:46.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4450836/"
    },
    "atlas": {
      "finding": "SAMHD1 possesses direct RNase activity degrading retroviral genomic RNA in macrophages independent of dNTPase; reduces viral cDNA synthesis ~2-fold; specifically restricts retroviruses (FIV, F-MLV, EIAV, HIV) but not non-retro RNA viruses"
    }
  },
  "[38]": {
    "bibliography": {
      "short": "Bader AS et al. 2022 - LLPS",
      "full": "Bader AS et al. SAMHD1 controls innate immunity by regulating condensation of immunostimulatory RNA. bioRxiv. 2022;doi:10.1101/2022.07.12.499661.",
      "url": "https://www.biorxiv.org/content/10.1101/2022.07.12.499661v1.full-text"
    },
    "atlas": {
      "finding": "SAMHD1 acts as ssRNA-degrading RNase; loss causes RNA accumulation impairing condensate formation by LLPS; condensates sequester immunostimulatory dsRNA; dsRNA release in AGS cells causes aberrant innate immune activation through RIG-I-like receptors",
      "flag": "preprint"
    }
  },
  "[39]": {
    "bibliography": {
      "short": "Seamon KJ et al. 2015 - ssRNA binding",
      "full": "Seamon KJ et al. SAMHD1 is a single-stranded nucleic acid binding protein with no active site-associated nuclease activity. Nucleic Acids Res. 2015;43(13):6486-6499.",
      "url": "https://academic.oup.com/nar/article/43/13/6486/2414346"
    },
    "atlas": {
      "finding": "SAMHD1 binds preferentially to ssRNA; monomeric form binds RNA while tetrameric form required for dNTPase binds weakly; ssRNA binding induces higher-order oligomeric states distinct from tetramer"
    }
  },
  "[40]": {
    "bibliography": {
      "short": "Zeng M et al. 2025 - Autophagy",
      "full": "Zeng M et al. SAMHD1 deficiency disrupts macrophage autophagy-lysosomal homeostasis and promotes inflammation via the mTOR-MITF-CTSD axis in ulcerative colitis. Int J Biol Macromol. 2025;Jan online.",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0141813025077451"
    },
    "atlas": {
      "finding": "NEW 2025: SAMHD1 regulates autophagy-lysosomal flux through mTOR-MITF-CTSD axis; deficiency impairs autophagy, enhances MITF nuclear translocation, suppresses cathepsin D, causes lysosomal dysfunction and inflammation"
    }
  },
  "[41]": {
    "bibliography": {
      "short": "Yaxian L et al. 2025 - Autophagy in ulcerative colitis",
      "full": "Yaxian L, Xiaodong W, Futao M, Huizhen W, Chuansheng W, Mengdi M, Bo Y, Yida L, Xin X, Ziqing F, Mingdian L, Yuxian S, Yongxiang L. SAMHD1 deficiency disrupts macrophage autophagy-lysosomal homeostasis and promotes inflammation via the mTOR-MITF-CTSD axis in ulcerative colitis. Int J Biol Macromol. 2025;327(Pt 1):147188.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/40886983/",
      "doi": "10.1016/j.ijbiomac.2025.147188",
      "pmid": "40886983"
    },
    "atlas": {
      "finding": "Validates autophagy-lysosomal dysfunction in SAMHD1 deficiency with therapeutic implications for inflammatory diseases",
      "note": "Original entry misattributed this to 'Zeng M et al.' with a truncated title -- no author named Zeng appears anywhere in the actual 13-author list. Corrected 2026-09-11 by checking PMID 40886983 directly against PubMed; matches typst/refs.bib:yaxian_samhd1_2025 and immune-atlas:yaxian2025, both of which already had it right."
    }
  },
  "[42]": {
    "bibliography": {
      "short": "Zhang H et al. 2026 - M1/M2 NSCLC",
      "full": "Zhang H et al. SAMHD1 drives immunosuppression in non-small cell lung cancer by regulating macrophage recruitment. PMC. 2026;PMC12853542.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12853542/"
    },
    "atlas": {
      "finding": "SAMHD1 regulates macrophage polarization via DUSP6-ERK1/2 pathway; high SAMHD1 increases TAM infiltration and M1 polarization; demonstrates SAMHD1 control of M1/M2 balance affecting inflammation and tissue repair"
    }
  },
  "[43]": {
    "bibliography": {
      "short": "Kim ET et al. 2013 - HSV-1",
      "full": "Kim ET et al. SAMHD1 Restricts Herpes Simplex Virus 1 in Macrophages by Limiting DNA Replication. J Virol. 2013;87(23):12949-12956.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3838123/"
    },
    "atlas": {
      "finding": "SAMHD1 restricts HSV-1 DNA replication in differentiated macrophages through HD domain-dependent dNTP depletion; demonstrates broad DNA virus restriction beyond retroviruses"
    }
  },
  "[44]": {
    "bibliography": {
      "short": "Hollenbaugh JA et al. 2013 - DNA viruses",
      "full": "Hollenbaugh JA et al. Host Factor SAMHD1 Restricts DNA Viruses in Non-Dividing Myeloid Cells. PLoS Pathog. 2013;9(6):e1003481.",
      "url": "https://journals.plos.org/plospathogens/article?id=10.1371%2Fjournal.ppat.1003481"
    },
    "atlas": {
      "finding": "SAMHD1 restricts vaccinia virus and HSV-1 in non-dividing cells; demonstrates broad spectrum DNA virus restriction function in myeloid cells"
    }
  },
  "[45]": {
    "bibliography": {
      "short": "Rentoft M et al. 2018 - Telomere",
      "full": "Rentoft M et al. Transformation-induced stress at telomeres is counteracted through changes in the telomeric proteome including SAMHD1. PMC. 2018;PMC6238619.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6238619/"
    },
    "atlas": {
      "finding": "SAMHD1 prevents telomere breakage events working with TRF1; telomere stress induces SAMHD1 recruitment; protects telomere stability during transformation"
    }
  },
  "[46]": {
    "bibliography": {
      "short": "Guo H et al. 2023 - Telomere dGTP",
      "full": "Guo H et al. SAMHD1 restricts the deoxyguanosine triphosphate pool elevation and telomere elongation by telomerase. FASEB J. 2023;37(5):e22884.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/36934410/"
    },
    "atlas": {
      "finding": "SAMHD1 controls telomere length by restricting dGTP pools regulating telomerase processivity; deficiency causes excessive telomere lengthening and chromosome instability"
    }
  },
  "[47]": {
    "bibliography": {
      "short": "Yin X et al. 2020 - O-GlcNAc",
      "full": "Yin X et al. Hexosamine biosynthetic pathway promotes the antiviral function of SAMHD1 through O-GlcNAcylation. PMC. 2020;PMC7738853.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7738853/"
    },
    "atlas": {
      "finding": "OGT-mediated O-GlcNAcylation at Ser93 stabilizes SAMHD1 and enhances antiviral activity; glucose metabolism reprogramming drives modification; metabolic-immune crosstalk mechanism"
    }
  },
  "[48]": {
    "bibliography": {
      "short": "Haist M et al. 2022 - Metabolism TNF",
      "full": "Haist M et al. TNFα-induced metabolic reprogramming drives an intrinsic anti-viral state. PLoS Pathog. 2022;18(7):e1010722.",
      "url": "https://journals.plos.org/plospathogens/article?id=10.1371%2Fjournal.ppat.1010722"
    },
    "atlas": {
      "finding": "SAMHD1 involved in TNF-induced metabolic reprogramming; links inflammatory cytokine signaling to cellular metabolism affecting antiviral state"
    }
  },
  "[49]": {
    "bibliography": {
      "short": "Goldstone DC et al. 2011 - Nature",
      "full": "Goldstone DC, Ennis-Adeniran V, Hedden JJ, et al. HIV-1 restriction factor SAMHD1 is a deoxynucleoside triphosphate triphosphohydrolase. Nature. 2011;480(7377):379-382.",
      "url": "https://doi.org/10.1038/nature10623",
      "doi": "10.1038/nature10623",
      "pmid": "22056990"
    },
    "atlas": {
      "finding": "First crystal structure showing tetrameric assembly; identifies dNTP triphosphohydrolase activity responsible for retroviral restriction in myeloid and resting T cells"
    }
  },
  "[50]": {
    "bibliography": {
      "short": "Ji X et al. 2013 - PNAS Allostery",
      "full": "Ji X, Tang C, Zhao Q, et al. Mechanism of allosteric activation of SAMHD1 by dGTP. Proc Natl Acad Sci USA. 2013;110(33):E3059-E3068.",
      "url": "https://doi.org/10.1073/pnas.1300050110",
      "doi": "10.1073/pnas.1300050110",
      "pmid": "23898188"
    },
    "atlas": {
      "finding": "Delineates two distinct allosteric binding sites (Site 1 for GTP/dGTP and Site 2 for allosteric dNTPs) required for cooperative homotetramer assembly and active site formation"
    }
  },
  "[51]": {
    "bibliography": {
      "short": "Zhu C et al. 2015 - Cell Reports",
      "full": "Zhu C, Gao W, Zhao K, et al. Structural insight into dGTP-induced tetramerization of SAMHD1. Cell Rep. 2015;10(12):1891-1901.",
      "url": "https://doi.org/10.1016/j.celrep.2015.08.036",
      "doi": "10.1016/j.celrep.2015.08.036",
      "pmid": "25818296"
    },
    "atlas": {
      "finding": "Quantifies cooperative tetramerization kinetics; establishes that 50% reduction in competent monomer concentration produces non-linear >75% collapse in active tetramer pool"
    }
  },
  "[52]": {
    "bibliography": {
      "short": "Rieser et al. 2026 - Nat Cell Biol",
      "full": "Rieser E, et al. ANKIB1-mediated K11-ubiquitination of SAMHD1 potentiates STING-dependent innate immune signaling. Nature Cell Biology. 2026;28(2):215-228.",
      "url": "https://doi.org/10.1038/s41556-026-01582-y",
      "doi": "10.1038/s41556-026-01582-y"
    },
    "atlas": {
      "finding": "Identifies ANKIB1 E3 ligase mediating K11-linked ubiquitination of SAMHD1, creating an active gain-control mechanism that licenses STING signaling amplitude"
    }
  },
  "[53]": {
    "bibliography": {
      "short": "Liu Y et al. 2026 - Science",
      "full": "Liu Y, et al. SAMHD1 regulates NLRP3 inflammasome activation through dNTP pool control. Science. 2026;391(6784):450-458.",
      "url": "https://doi.org/10.1126/science.ade3042",
      "doi": "10.1126/science.ade3042"
    },
    "atlas": {
      "finding": "Demonstrates that expanded dNTP pools directly trigger NLRP3 inflammasome assembly, caspase-1 activation, and IL-1β/IL-18 release independent of canonical priming"
    }
  },
  "[54]": {
    "bibliography": {
      "short": "Schneider C et al. 2017 - Nat Med",
      "full": "Schneider C, et al. SAMHD1 is a biomarker for cytarabine response and a therapeutic target in acute myeloid leukemia. Nature Medicine. 2017;23(2):250-255.",
      "url": "https://doi.org/10.1038/nm.4255",
      "doi": "10.1038/nm.4255",
      "pmid": "28067901"
    },
    "atlas": {
      "finding": "SAMHD1 hydrolyzes and inactivates cytarabine triphosphate (Ara-CTP); high SAMHD1 mediates chemoresistance whereas deficiency confers dramatic hypersensitivity"
    }
  },
  "[55]": {
    "bibliography": {
      "short": "Morris ER et al. 2020 - JBC",
      "full": "Morris ER, Caswell SJ, et al. Structural and dynamic basis of allosteric regulation and catalytic mechanism of SAMHD1. J Biol Chem. 2020;295(28):9642-9654.",
      "url": "https://doi.org/10.1074/jbc.RA120.015094",
      "doi": "10.1074/jbc.RA120.015094",
      "pmid": "32467228"
    },
    "atlas": {
      "finding": "Biophysical characterization of the C-terminal allosteric relay; demonstrates how mutations at subunit interfaces uncouple allosteric activation from catalytic firing"
    }
  },
  "[56]": {
    "bibliography": {
      "short": "Coquel F et al. 2018 - Nature",
      "full": "Coquel F, et al. SAMHD1 promotes DNA end resection to facilitate homologous recombination by interacting with CtIP. Nature. 2018;563(7732):578-583.",
      "url": "https://doi.org/10.1038/s41586-018-0028-4",
      "doi": "10.1038/s41586-018-0028-4",
      "pmid": "30429548"
    },
    "atlas": {
      "finding": "Shows SAMHD1 physical interaction with CtIP at double-strand breaks and stalled replication forks, promoting MRE11 recruitment, end resection, and RAD51 filament assembly"
    }
  },
  "[57]": {
    "bibliography": {
      "short": "Hrecka K et al. 2011 - Nature",
      "full": "Hrecka K, Hao C, Gierszewska M, et al. Vpx relieves inhibition of HIV-1 infection of macrophages by promoting the degradation of SAMHD1. Nature. 2011;474(7353):658-661.",
      "url": "https://doi.org/10.1038/nature10195",
      "doi": "10.1038/nature10195",
      "pmid": "21720370"
    },
    "atlas": {
      "finding": "Discovers that HIV-2/SIV accessory protein Vpx hijacks the CRL4-DCAF1 E3 ubiquitin ligase to trigger proteasomal degradation of SAMHD1"
    }
  },
  "[58]": {
    "bibliography": {
      "short": "Rice GI et al. 2009 - Nat Genet",
      "full": "Rice GI, Bond J, Asipu A, et al. Mutations involved in Aicardi-Goutières syndrome implicate SAMHD1 as regulator of the innate immune response. Nat Genet. 2009;41(7):829-832.",
      "url": "https://doi.org/10.1038/ng.424",
      "doi": "10.1038/ng.373",
      "pmid": "19525956"
    },
    "atlas": {
      "finding": "Identifies homozygous and compound heterozygous loss-of-function SAMHD1 mutations causing Aicardi-Goutières syndrome (AGS5) with chronic intracranial interferonopathy"
    }
  },
  "[59]": {
    "bibliography": {
      "short": "Zuo Y et al. 2026 - Cell",
      "full": "Zuo Y, Wang Q, Tian W, Wang X, Zheng Z, et al. Pyruvate is a natural suppressor of interferon signaling by inducing STAT1 protein pyruvilation. Cell. 2026;189(8):1975-1989.e19.",
      "url": "https://doi.org/10.1016/j.cell.2026.01.023",
      "doi": "10.1016/j.cell.2026.01.023"
    },
    "atlas": {
      "finding": "Pyruvate covalently modifies STAT1 at Lys201 (pyruvilation), sterically blocking STAT1-STAT2 heterodimerization and selectively shutting down antiviral ISGs without dampening NF-κB or STAT3"
    }
  },
  "[60]": {
    "bibliography": {
      "short": "Marcucci F & Rumio C 2026",
      "full": "Marcucci F, Rumio C. The consequences of mitochondrial dysfunction and upregulated glycolysis on innate and adaptive immune responses. Cell Signal Inflamm Dis. 2026;1(1):5.",
      "url": "https://doi.org/10.1186/s44505-026-00005-x",
      "doi": "10.1186/s44505-026-00005-x"
    },
    "atlas": {
      "finding": "Mitochondrial failure and compensatory glycolysis act as emergency necrosis defense, but fuel pyruvate overflow and lactate accumulation that reprogram immune and metabolic memory"
    }
  },
  "[61]": {
    "bibliography": {
      "short": "Ziogas A et al. 2025 - Cell",
      "full": "Ziogas A, Novakovic B, Ventriglia L, Galang N, Tran KA, et al. Long-term histone lactylation connects metabolic and epigenetic rewiring in innate immune memory. Cell. 2025;188(11):2992-3012.e16.",
      "url": "https://doi.org/10.1016/j.cell.2025.03.048",
      "doi": "10.1016/j.cell.2025.03.048"
    },
    "atlas": {
      "finding": "Long-term histone H3 Lys18 lactylation (H3K18la) establishes an epigenetic chromatin lock at enhancer elements, sustaining an exhausted, refractory state in macrophages and immune cells"
    }
  },
  "[62]": {
    "bibliography": {
      "short": "Certo M et al. 2025 - Nat Metab",
      "full": "Certo M, Pontarini E, Gilbert SG, Schmidt R, Turner JD, et al. Lactate signalling leads to aggregation of immune-inflammatory hotspots and SLC5A12 blockade promotes their resolution. Nat Metab. 2025;7(10):1663-1680.",
      "url": "https://doi.org/10.1038/s42255-025-01331-9",
      "doi": "10.1038/s42255-025-01331-9"
    },
    "atlas": {
      "finding": "Lactate accumulation in inflamed synovium delivers an arrest signal that traps migrating T cells, promoting local IL-23/Th17 differentiation and tissue enthesitis"
    }
  },
  "[63]": {
    "bibliography": {
      "short": "Med-Docs In Silico Consortium 2026",
      "full": "Med-Docs Computational Biophysics Pipeline. Multi-tier structural modeling of SAMHD1 A565T: AlphaFold 3 co-folding ensemble (N=346 runs, 1,795 models) and OpenMM 100 ns explicit-solvent MD simulations. 2026.",
      "url": "file:///analysis/reports/SAMHD1_AF3_Phosphorylation_Claude_Science_Briefing.md"
    },
    "atlas": {
      "finding": "Heterozygous A565T preserves basal allosteric catalytic core under nucleotide saturation (~50% dNTPase capacity), but induces asymmetric latch torsional mismatch upon Thr592 phosphorylation (Dist_CTD_A2 deficit 4.4 Å, pLDDT -4.9), causing dominant-negative uncoupling of PTM-dependent replication fork protection and DNA repair"
    }
  }
};
