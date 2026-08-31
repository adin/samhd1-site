---
date: 2026-08-30
slug: iterative-genetic-testing-identifies-samhd1-deficiency-caused-by
categories:
  - Paper Spotlight
  - cGAS-STING
  - JAK-STAT
  - AGS-spectrum
  - dNTPase
  - clinical-phenotype
tags:
  - Sonnet 5
---

# Iterative genetic testing identifies [SAMHD1](/viz/innate-immune-3d/#node=samhd1) deficiency caused by a homozygous balanced translocation

## The finding
This case report describes a patient with clinical features overlapping familial chilblain lupus—perniosis, acral autoamputation, small joint arthritis—alongside a type I interferon transcriptomic signature. Using a stepwise combination of exome sequencing, transcriptomics, and long-read genome sequencing, the authors identified a homozygous, balanced, reciprocal translocation disrupting the [SAMHD1](/viz/innate-immune-3d/#node=samhd1) locus (chr20q11.23) and joining it to chr17p11.2, with RNA-seq showing transcript coverage limited to SAMHD1's first four exons. This is reported as the first inborn error of immunity attributed to a homozygous balanced translocation.

## Where it fits
This paper is a complete loss-of-function case, not a partial one — structurally, it sits far upstream of the SAMHD1 p.[A565T](/viz/innate-immune-3d/#node=a565t) model. Where [A565T](/viz/innate-immune-3d/#node=a565t) leaves ~40-60% residual dNTPase activity and produces a graded, "smouldering" phenotype, this translocation truncates the transcript after exon 4, effectively eliminating [SAMHD1](/viz/innate-immune-3d/#node=SAMHD1) protein output. The clinical consequence — a strong type I IFN signature — is consistent with unrestrained flux through the root-cause pathway feeding **Loop A**: loss of SAMHD1 control over dNTP pools and mitochondrial DNA release, driving [cGAS](/viz/innate-immune-3d/#node=cgas)–[STING](/viz/innate-immune-3d/#node=sting)–[IRF3](/viz/innate-immune-3d/#node=irf3) signaling and downstream ISG induction. It's a useful boundary case: it shows what happens at the far end of the SAMHD1-dosage spectrum from the heterozygous, partial-function A565T model this project studies, reinforcing the idea that SAMHD1 sits on a dosage continuum from asymptomatic heterozygosity to classical Aicardi-Goutières-like presentations.

## Caveats
- This is a **complete biallelic loss-of-function** (homozygous translocation truncating the gene), fundamentally different from the **heterozygous, partial-activity** A565T variant this project models — mechanisms and severity should not be extrapolated directly.
- **Single case report**: no functional dNTPase assays, no mitochondrial/inflammasome readouts, and no data on [NLRP3](/viz/innate-immune-3d/#node=nlrp3) or [IL-18](/viz/innate-immune-3d/#node=il18) axis involvement — the paper documents an IFN signature by transcriptomics only, not pathway mechanism.
- Co-occurring pathogenic MN1 variant complicates phenotype attribution; the authors themselves separate MN1-driven features (microcephaly, hearing loss) from the SAMHD1-attributable immune phenotype, but overlap/confounding in a single patient can't be fully excluded.

## What to watch
Whether functional follow-up (e.g., IFN signature reversal with JAK inhibition, or dNTP pool measurement) is pursued in this patient, and whether this translocation mechanism is found in other undiagnosed interferonopathy cases where standard exome sequencing missed structural variants entirely.

---
*Source: [Iterative genetic testing identifies SAMHD1 deficiency caused by a homozygous balanced translocation.](https://pubmed.ncbi.nlm.nih.gov/42657394/) — Journal of human immunity 2026.*
