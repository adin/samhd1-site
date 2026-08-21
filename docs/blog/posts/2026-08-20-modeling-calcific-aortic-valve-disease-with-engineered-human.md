---
date: 2026-08-20
slug: modeling-calcific-aortic-valve-disease-with-engineered-human
categories:
  - Paper Spotlight
  - treatment-target
  - clinical-phenotype
tags:
  - DeepSeek-V3
---

# Modeling calcific aortic valve disease with engineered human valve tissues identifies [SAMHD1](/viz/innate-immune-3d/#node=samhd1) as a therapeutic target

## The finding

This paper reports the first engineered valvular tissues (EVTs) built from human iPSC-derived valvular interstitial cells in a 3D fibrinogen/Matrigel/collagen I hydrogel, assembled with hiPSC-derived cardiomyocytes to create a self-contracting, mechanically loaded valve model. Using time-series transcriptomics and WGCNA, the authors identify [SAMHD1](/viz/innate-immune-3d/#node=samhd1) as a core regulator of calcification, and show that recombinant SAMHD1 protein reduces calcification, restores tissue elasticity, and attenuates dysfunction under both static and cyclic mechanical stress.

## Where it fits

This speaks directly to the **mitochondrial/NLRP3 arm (Loop B)** of the SAMHD1 p.[A565T](/viz/innate-immune-3d/#node=a565t) model — and, by extension, to the systemic vascular spectrum of SAMHD1 dysfunction. The paper demonstrates that SAMHD1 acts as a gatekeeper in valve calcification via an inflammatory pathway, which is consistent with the model's claim that reduced SAMHD1 function permits chronic innate-immune tone. The engineered myocardium-valve composite is particularly relevant: it validates that mechanical stress exacerbates calcification, a finding that maps onto the model's Loop C (paracrine/NF-κB/IFN-γ feedback), where tissue-scale mechanical and inflammatory signals converge. For the [A565T](/viz/innate-immune-3d/#node=a565t) variant specifically, this raises the possibility that partial loss of SAMHD1 function — sufficient to avoid Aicardi-Goutières syndrome but not to hold the system down — could contribute to a smoldering, non-acute inflammatory state in vascular tissues, with calcification as a downstream clinical outcome. The identification of SAMHD1 as a *therapeutic target* (rather than just a disease gene) aligns with the model's central claim that the loops are parallel and independently druggable.

## Caveats

- This is a **wild-type SAMHD1** study in engineered tissues, not a study of the **p.A565T heterozygous variant**; the relevance to the specific hypomorphic allele is inferred, not demonstrated.
- The model uses **hiPSC-derived VICs**, not primary patient cells, and the "inflammatory signal pathway" is identified via WGCNA correlation plus small-molecule inhibition — association, not direct mechanistic proof of SAMHD1's enzymatic role.
- Recombinant SAMHD1 protein was added exogenously; the paper does not show whether this rescues via dNTPase activity, protein-protein interactions, or an off-target effect.

## What to watch

Does recombinant SAMHD1 rescue calcification in the A565T heterozygous background, and does that rescue track with normalization of [dNTP pools](/viz/innate-immune-3d/#node=dNTP) and [NLRP3](/viz/innate-immune-3d/#node=nlrp3) licensing? If so, this engineered tissue platform could become the first scalable, mechanically active assay for screening SAMHD1-rescue therapies across the vascular spectrum.

---
*Source: [Modeling calcific aortic valve disease with engineered human valve tissues identifies SAMHD1 as a therapeutic target](https://doi.org/10.1016/j.biomaterials.2026.124432) —  2026.*
