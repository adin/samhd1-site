---
date: 2026-08-20
slug: htlv-1-tax-induces-pink1-prkn-parkin-dependent
categories:
  - Paper Spotlight
  - cGAS-STING
  - ISG15-mitophagy
  - NF-kB
  - treatment-target
tags:
  - DeepSeek-V3
---

# HTLV-1 Tax induces [PINK1](/viz/innate-immune-3d/#node=pink1)-PRKN/parkin-dependent mitophagy to mitigate activation of the [CGAS](/viz/innate-immune-3d/#node=cgas)-STING1 pathway

## The finding

This paper shows that the HTLV-1 Tax protein hijacks the [PINK1](/viz/innate-immune-3d/#node=pink1)–[Parkin](/viz/innate-immune-3d/#node=parkin) mitophagy pathway to clear damaged mitochondria and suppress [cGAS](/viz/innate-immune-3d/#node=cgas)–[STING](/viz/innate-immune-3d/#node=sting) activation. Tax induces mitochondrial ROS and membrane-potential disruption, then recruits the autophagy receptors CALCOCO2/NDP52 and SQSTM1/p62 to drive mitophagic clearance. Critically, Tax requires PRKN to limit cGAS-STING1 activation and type I interferon induction — a viral immune-evasion strategy that also sustains viral gene expression and cell survival.

## Where it fits

This speaks directly to **Loop A** (IFN-I/JAK-STAT) and the mitochondrial quality-control node that the [SAMHD1](/viz/innate-immune-3d/#node=samhd1) [A565T](/viz/innate-immune-3d/#node=a565t) model predicts is corrupted. In the [SAMHD1](/viz/innate-immune-3d/#node=samhd1) model, [ISG15](/viz/innate-immune-3d/#node=isg15) ISGylates [MFN1/2](/viz/innate-immune-3d/#node=mfn1) and [BECN1](/viz/innate-immune-3d/#node=becn1), blocking mitophagy so damaged mitochondria persist and keep leaking mtDNA to cGAS-[STING](/viz/innate-immune-3d/#node=sting). This paper provides the mechanistic counterexample: when PINK1-[Parkin](/viz/innate-immune-3d/#node=parkin) mitophagy *works*, it clears damaged mitochondria and prevents cGAS-STING activation. That is exactly the clearance step the SAMHD1 model predicts is disabled — and it confirms that mitophagy is a genuine checkpoint for tonic IFN-I, not just a downstream consequence of mitochondrial stress.

The paper also reinforces the model's claim that mtDNA release is the key ligand for cGAS: Tax's suppression of IFN depends on removing the mitochondria that would otherwise release mtDNA, not on directly inhibiting cGAS itself.

## Caveats

- This is a viral system (HTLV-1 Tax), not a SAMHD1 model — the relevance is mechanistic analogy, not direct demonstration in [A565T](/viz/innate-immune-3d/#node=a565t) cells.
- The experiments use overexpression and viral-transformed cell lines, not primary cells from SAMHD1 patients; the mitophagy-cGAS link is established here, but the specific failure mode in A565T remains inferred.
- The paper shows Tax *requires* PRKN to suppress cGAS-STING, but does not address whether partial loss of mitophagy (as predicted in SAMHD1 A565T) produces a graded, smouldering IFN response versus an all-or-nothing switch.

## What to watch

Does restoring PINK1-Parkin activity in SAMHD1 A565T cells — for example, by blocking [ISG15](/viz/innate-immune-3d/#node=isg15)-mediated inhibition of mitophagy — phenocopy Tax's suppression of cGAS-STING? That would be the direct test of whether the model's Loop A is truly self-sustaining via mitophagy blockade.

---
*Source: [HTLV-1 Tax induces PINK1-PRKN/parkin-dependent mitophagy to mitigate activation of the CGAS-STING1 pathway](https://doi.org/10.1080/15548627.2026.2707897) —  2026.*
