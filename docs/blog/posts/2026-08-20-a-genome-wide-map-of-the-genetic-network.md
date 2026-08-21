---
date: 2026-08-20
slug: a-genome-wide-map-of-the-genetic-network
categories:
  - Paper Spotlight
  - cGAS-STING
  - treatment-target
  - NF-kB
tags:
  - DeepSeek-V3
---

# A genome-wide map of the genetic network in monocytes that regulates type I interferon induction by the [cGAS](/viz/innate-immune-3d/#node=cgas)-[STING](/viz/innate-immune-3d/#node=sting) pathway

## The finding
Using genome-wide CRISPR screens in THP-1 monocytes, this paper maps the positive and negative regulators of *IFNB1* induction downstream of [cGAS](/viz/innate-immune-3d/#node=cgas)-[STING](/viz/innate-immune-3d/#node=sting), comparing unprimed cells with cells pre-exposed to IFN-α to mimic ongoing inflammation. The screens reveal distinct regulatory networks in each state, including a novel role for the NCoR/SMRT corepressor components TBL1XR1 and HDAC3 in supporting *IFNB1* expression, with HDAC3 promoting [TBK1](/viz/innate-immune-3d/#node=tbk1) activation.

## Where it fits
This study speaks directly to **Loop A** (IFN-I/JAK-STAT) and, importantly, to the **primed state** that characterizes chronic interferonopathy. In [SAMHD1](/viz/innate-immune-3d/#node=samhd1) p.[A565T](/viz/innate-immune-3d/#node=a565t), tonic IFN-I signaling establishes a primed monocyte environment—exactly the condition this screen models with IFN-α pre-treatment. The finding that distinct gene sets regulate *IFNB1* in primed versus unprimed cells is critical: it suggests that the genetic circuitry sustaining chronic IFN-I production differs from that initiating it, which has implications for therapeutic targeting.

The HDAC3/TBL1XR1→[TBK1](/viz/innate-immune-3d/#node=tbk1) axis is particularly relevant. [TBK1](/viz/innate-immune-3d/#node=TBK1) is a nodal kinase in the [cGAS](/viz/innate-immune-3d/#node=cGAS)-[STING](/viz/innate-immune-3d/#node=STING) pathway, and the identification of an epigenetic corepressor complex feeding into its activation opens a new regulatory layer. In the context of [SAMHD1](/viz/innate-immune-3d/#node=samhd1) [A565T](/viz/innate-immune-3d/#node=a565t), where [IRF3](/viz/innate-immune-3d/#node=irf3)/7-driven IFN-I is chronically elevated, this raises the possibility that HDAC3 or TBL1XR1 could be intervention points to dampen—rather than fully block—STING signaling, potentially reducing the smoldering IFN tone without eliminating basal innate immunity.

The resource itself is also valuable: the gene lists provide candidate modifiers for the variable expressivity seen in heterozygous SAMHD1 interferonopathy, where modifier loci may determine whether residual SAMHD1 activity is sufficient to maintain homeostasis.

## Caveats
- The screens were performed in THP-1 cells (a monocytic cell line), not primary monocytes or SAMHD1-mutant cells; the regulatory architecture may differ in primary cells or in the context of SAMHD1 deficiency.
- The readout is *IFNB1* transcription only; it does not capture post-transcriptional regulation, protein-level control, or the full ISG repertoire downstream of IFNAR signaling.
- The study identifies regulators of cGAS-STING-induced IFN, but does not address whether these same genes modulate the [NLRP3](/viz/innate-immune-3d/#node=nlrp3) arm (Loop B) or the paracrine [IFN-γ](/viz/innate-immune-3d/#node=IFNG) feedback (Loop C).

## What to watch
Whether HDAC3/TBL1XR1 inhibition selectively reduces primed-state *IFNB1* induction in SAMHD1-deficient monocytes—and whether that translates to suppression of the broader ISG signature without disrupting the [NLRP3](/viz/innate-immune-3d/#node=nlrp3) axis.

---
*Source: [A genome-wide map of the genetic network in monocytes that regulates type I interferon induction by the cGAS-STING pathway](https://doi.org/10.1126/scisignal.adx3808) — Science Signaling 2026.*
