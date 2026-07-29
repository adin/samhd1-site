# SAMHD1 p.A565T — the science

## The enzyme

**SAMHD1** (SAM domain and HD domain–containing protein 1) sits at a critical
evolutionary intersection of nucleotide metabolism, DNA repair, and innate
immunity. It is not a single-job protein; it is a hub with at least seven
documented functions:

- **dNTPase** — hydrolyzes the DNA building blocks (dNTPs) to keep cytoplasmic
  nucleotide pools low. This is its best-known role and the primary way it
  restricts retroviruses (including HIV-1) and mobile genetic elements.
- **3′→5′ exonuclease** — degrades stray single-stranded DNA before it can
  trip innate-immune DNA sensors.
- **Condensate formation (LLPS)** — sequesters cytoplasmic nucleic acids away
  from the sensors MDA5 and TLR3.
- **DNA-repair scaffold** — supports homologous recombination and stabilizes
  stalled replication forks.
- **Transcriptional co-repressor** — restrains a second wave of type I
  interferon by occupying an inhibitory site on IRF7.
- **Mitochondrial guardian** — interacts with VDAC1 to stabilize the
  mitochondrial membrane and limit leakage of mitochondrial DNA into the
  cytosol.
- **Cell-cycle–gated switch** — its dNTPase activity is turned off by
  phosphorylation at residue T592 during DNA synthesis.

The enzyme is deeply conserved across vertebrates, which tells us this
checkpoint matters.

## The variant

| Field | Value |
|---|---|
| Genomic | NM_015474.3 **c.1693G>A** |
| Protein | **p.Ala565Thr** (rs779491090) |
| Population frequency | ≈ 1.1 × 10⁻⁵ (gnomAD v4) — very rare |
| Location | extreme C-terminal edge of the HD phosphohydrolase domain, 27 residues from the T592 regulatory hinge |

Swapping a small alanine for a bulkier, hydroxyl-bearing threonine at position
565 is predicted to distort the C-terminal regulatory lobe of the enzyme — the
"latch" that gates its activity.

**What the lab work shows (established):** In cell-line work from a 2022
doctoral dissertation (LMU München), A565T reduced protein stability roughly
2.4-fold and caused near-complete loss of dNTPase activity. That is cell-line
data; it has not yet been confirmed in primary human cells from a heterozygous
carrier.

**Haploinsufficiency vs. dominant-negative (open question):** We currently
model the variant as acting through **haploinsufficiency** — one good copy is
not enough for full function. Whether the impaired copy actively *poisons* the
healthy protein (a dominant-negative effect on the four-unit SAMHD1 complex)
rather than simply dropping out of the pool is an unresolved structural
question, and it matters for how any future gene therapy is designed. Structural
modeling to test this is ongoing.

## The mechanism: one root cause, four streams

The working model is that reduced SAMHD1 function lifts several brakes at
once. ~40–60% residual dNTPase activity leaves the cytosolic dNTP pool
running high, and that single upstream event branches into **four
color-coded streams** — two converging on the NLRP3 inflammasome, two on a
chronic, moderate-amplitude type I interferon tone the body cannot switch
off. The full breakdown, with a diagram and citations for each link, lives on
the [pathway map](pathways.md); the clinically relevant summary is below.

### 🔵🔴 Blue → red — the interferon / JAK-STAT axis *(partly treatable today)*

Loss of the SAMHD1–VDAC1 interaction (**blue stream**) opens a route for
mitochondrial DNA to escape into the cytosol, where cGAS-STING signaling
produces type I interferon. That interferon then drives sustained JAK-STAT
signaling (**red stream**), which upregulates ISG15 and blocks mitophagy —
so damaged mitochondria pile up instead of being cleared, feeding back into
more mitochondrial damage.

Because this axis runs through **JAK-STAT**, JAK inhibitors can suppress it —
which matches the clinical observation that a JAK inhibitor rapidly clears
most inflammatory features, and that they relapse within 24–48 hours of
stopping (consistent with a re-priming node that resets on that same
timescale).

### 🟣🟡 Purple + gold — the nucleotide / NLRP3 metabolic axis *(JAK-resistant)*

In parallel, the same excess dNTPs overload mitochondrial nucleotide import
(**purple stream**), stalling replication and releasing oxidized mtDNA — a
direct NLRP3 ligand — while also being catabolized to uric acid and MSU
crystals (**gold stream**), a second, independent NLRP3 activator. A 2026
*Science* study (Liu et al.) showed SAMHD1 loss drives insulin resistance and
steatohepatitis *at normal body weight* — a diet-independent metabolic
disease mechanism running through this same NLRP3 route. This axis does
**not** respond to JAK inhibition, which likely explains the residual
fatigue and metabolic floor that persists even when the interferon axis is
well controlled.

!!! info "Two mechanistically independent axes → why one drug isn't enough"
    The clearest clinical prediction of this model is that a JAK inhibitor
    resolves the interferon-driven features almost completely but leaves a
    hard floor of fatigue and metabolic dysfunction untouched — because that
    floor is generated by a parallel, JAK-resistant axis. Treating the whole
    syndrome therefore requires hitting the upstream nucleotide/NLRP3 axis
    too. See the [pathway map](pathways.md) for how each stream is scored
    and cited individually.

## What we don't yet know

- Whether A565T acts purely by haploinsufficiency, or partly dominant-negative.
- Confirmation of the purple/gold NLRP3 streams in primary cells from a
  heterozygous carrier (the strongest data so far is from knockout, not
  heterozygous, systems) — see the [pathway map](pathways.md#gold) for the
  gold stream's evidence caveat specifically.
- Structural predictions of the C-terminal latch have not yet been folded into
  the formal concept papers and are kept strictly separate from established
  biochemistry.

---

*Primary references informing this model include Liu et al. (Science, 2026) on
the dNTP→NLRP3 metabolic mechanism and Rieser/Walczak et al. (Nat Cell Biol,
2026) on the interferon gain-control node. The [research blog](blog/index.md)
tracks new evidence weekly.*
