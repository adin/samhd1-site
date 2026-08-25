# SAMHD1 AF3 Ingestion Ledger & Methodology Invariants (v14.5.4+)

This document defines the ground-truth data schema, replication hierarchy, valid vs. invalid comparison matrices, and the comprehensive catalog of 27 known failure modes ($F\text{-}01$ through $F\text{-}27$) established during the Claude Science multi-round audit. It serves as an invariant context prefix for automated red-team QA auditors (DeepSeek, OxAlpha, Claude Sonnet/Opus).

---

## Section 1 — Dataset Schema & Column Semantics

### AF3 Ledger Schema (`af3_metrics_summary_ground_truth.csv`)
Current shape: $\approx 5,255$ rows $\times$ 108 columns (v14.5.4). Schema drifts between ingestion runs—always assert column existence before use.

### Key Columns and Exact Semantics
- `True_Assembly`: `{Monomer, Dimer, Tetramer}` — structural assembly type.
- `True_SAMHD1_WT` / `True_SAMHD1_A565T`: integer count of that subunit in the assembly (0–4).
- `True_Fusion`: `1` = ISG15-SAMHD1 fusion construct. **Filter `True_Fusion == 0` first, always.**
- `Sequence_Offset`: residue offset for non-canonical constructs.
  * *Known Failure Mode (F-01)*: fusion constructs have historically been ingested with `Sequence_Offset = 0`. True offset for 793-aa ISG15 fusions is 167 (alignment-derived, not length-arithmetic).
- `Res565_Name`: residue identity at position 565. Must match declared genotype:
  * `WT` $\rightarrow$ `ALA`, `A565T` $\rightarrow$ `THR`, `A565V` $\rightarrow$ `VAL`, `A565E` $\rightarrow$ `GLU`, `C554S/A` variants $\rightarrow$ `ALA` or `THR`.
  * *Bug Tell*: `Res565_Name == 'GLU'` in a declared WT or A565T row indicates a mis-indexed fusion row. GLU is only legitimate when `Chain_Genotype` explicitly declares `A565E`.
- `SAMHD1_Span_Length`: 626 for canonical full-length.
  * *Warning (F-19)*: `span == 626` has been used as a proxy gate but admits mis-indexed fusion rows by accident. Do NOT use `span == 626` as the sole canonical-construct filter; use `True_Fusion == 0`.
- `Chain_Genotype`: per-chain label. Values: `{WT, A565T, A565V, A565E, A565S, A565I, C554S, C554A, Fusion_WT, Fusion_A565T}`.
  * *Known Failure Mode (F-16)*: older rows carry `Fusion_595`, `Fusion_626`, `Fusion_762`—these encode construct length, collapsing WT and A565T fusion chains into one label. Fusion rows should carry `Fusion_WT` or `Fusion_A565T` (alignment-corrected).
- `Job_Genotype`: job-level label. NULL on 4,205 of 5,255 rows including all fusion rows. Do not rely on this for invariant checks.
- `Dist_565_554_SC`: sidechain–sidechain distance, polar atoms only (`HB_SIDECHAIN` sets).
  * Thr565 $\text{O}\gamma1 \rightarrow \text{Cys554 S}\gamma$, Å. The primary polar latch metric. H-bond occupancy $\le 3.5\text{ \AA}$.
  * *Critical Rule (F-07)*: `HB_SIDECHAIN['ALA'] = set()`. This column is NULL on ALL WT chains by construction (Ala has no H-bond-capable sidechain atom). Block from WT-vs-A565T genotype contrasts. Same applies to `Dist_565_561_SC`, `Hbond_565_561`, `Hbond_565_554`.
- `Dist_565_554_BB`: backbone $\{\text{N, O}\}$ distance minimum, populated in both WT and A565T.
  * Safe for genotype contrasts. Effect size: $+0.139\text{ \AA}$ shift A565T vs WT ($dz = +9.32$ at $n=55$ runs).
  * *Caveat (F-26/N3)*: at $+0.139\text{ \AA}$, shared MSA/template bias is equally plausible as biology. Report as "confidence degradation / hinge loosening, not gross displacement."
- `Dist_CTD_A2_Pocket`: CTD-to-A2-pocket distance, Å — the hinge openness metric.
  * WT $\approx 67\text{ \AA}$, A565T $\approx 44\text{ \AA}$. Between-run SD $\approx 4.16\text{ \AA}$, so effect is $\approx 2.2\times\text{ SD}$, not $42.8\times$.
- `PAE_T592_Inter`: inter-chain PAE at the T592 interface. AF3 confidence proxy for pT592 phosphorylation effect. Survives validation: $+6.58\text{ \AA}$ shift across 19 matched strata.
- `pLDDT_565`: per-residue AF3 confidence at position 565. Populated in both WT and A565T.
  * Safe for genotype contrasts. ICC by run = 0.834 (strongly clustered within run).

### Columns that are A565T-only (Do NOT use in WT-vs-A565T genotype contrasts)
`Dist_565_554_SC`, `Dist_565_561_SC`, `Hbond_565_554`, `Hbond_565_561`

### Column Naming Trap (F-15)
- `_SC` suffix = polar-sidechain-atom minimum (`HB_SIDECHAIN` set).
- `_BB` suffix = backbone $\{\text{N, O}\}$ minimum.
Both named `_565_561_` but measure chemically different atoms. All-heavy-atom reimplementations will differ by $\approx 1.19\text{ \AA}$ until the polar-atom set is matched exactly.

---

## Section 2 — Replication Hierarchy (CRITICAL for Statistics)

### Hierarchy
$$\text{Run } (N \approx 55\text{--}69) \longrightarrow \text{Model (5 seeds per run)} \longrightarrow \text{Chain (up to 4 chains per model)} \approx 20\text{ correlated rows per run}$$

### Intraclass Correlation (ICC by Run)
- `pLDDT_565`: $0.834$ (strong clustering within run)
- `Dist_CTD_A2_Pocket`: $0.702$
- `Dist_565_561_BB`: $0.541$

### Statistical Invariants
1. **The Primary Independent Unit is the RUN ($n \approx 55\text{--}69$)**, NOT chain ($n \approx 1,280$) or model ($n \approx 360$).
   * Per-chain $p$-values inflate significance by hundreds of orders of magnitude relative to run-level.
   * Example: `Dist_565_554_BB` WT-vs-A565T: per-chain $p < 10^{-300}$, per-model $p = 3.5 \times 10^{-259}$, per-run $p = 5.8 \times 10^{-58}$ (the defensible unit).
2. **Denominator Rule (F-06/F-18)**:
   * $\text{between\_run\_sd}() \approx 4.16\text{ \AA}$ is the correct denominator for a run-level contrast.
   * $\text{seed\_noise\_sd}() \approx 0.21\text{ \AA}$ measures algorithmic seed reproducibility only and vastly overstates SNR as a contrast denominator ($42.8\times$ vs true $2.2\times$).
3. **Saturated $p$-value Trap (F-24)**:
   * At $n=55$, `scipy.stats.wilcoxon` normal approximation floors at $p \approx 1.107 \times 10^{-10}$ when all differences share sign.
   * Multiple biologically unrelated metrics reporting $p \approx 1.10 \times 10^{-10}$ signals test saturation, not identical physical evidence. Rank by standardized effect size $|dz|$ and sign unanimity rather than saturated $p$.

---

## Section 3 — Known Failure Mode Catalog (F-01 through F-27)

### F-CLASS: RESIDUE INDEXING (F-01, F-16)
Non-canonical constructs require sequence-alignment-derived offsets. Never use `Sequence_Offset = 0` for constructs where `SAMHD1_Span_Length != 626`.
- *Tell*: `Res565_Name == 'GLU'` in a declared WT or A565T row = mis-index.
- *Tell*: `Chain_Genotype` encodes a number (`Fusion_595`, `Fusion_762`) = length heuristic.
- *Check*: `pd.crosstab(Chain_Genotype, Res565_Name)` on fusion rows must be diagonal.

### F-CLASS: PSEUDOREPLICATION (F-05)
Seeds and chains are NOT independent. Always aggregate to run level before applying statistical tests.
- *Red Flag*: Any $N > 200$ in a WT vs A565T comparison = chain-level, not run-level.
- *Red Flag*: $p < 10^{-100}$ on a WT vs A565T contrast = almost certainly pseudoreplicated.
- *Fix*: `assert_run_level(df)` — refuse to test any frame with $> 1$ row per run.

### F-CLASS: WRONG DENOMINATOR (F-06, F-18)
$\text{between\_run\_sd}()$ is the correct denominator for a run-level effect. $\text{seed\_noise\_sd}()$ measures within-run reproducibility only and overstates SNR.

### F-CLASS: STRUCTURALLY UNCOMPUTABLE COMPARISONS (F-07)
Ala565 (WT) has no H-bond-capable sidechain atom. Any WT-vs-A565T contrast on `_SC` or `Hbond_` columns has an empty WT arm BY CONSTRUCTION. Always check column non-null counts by genotype before interpreting any WT-vs-A565T delta.

### F-CLASS: VACUOUS INVARIANT GATES (F-20, F-21, C8, N1)
Gates reporting 100% pass that cannot possibly fail on real data:
- `C11/Angle_565_561_Is_Ideal`: observed range 152.7–171.8° inside 140–180° window.
- `C12`: checks `len(df.columns) == 108`, not column population.
- Old `C8/N1`: absolute floor gates far below actual row count.
- *Probe Pattern*: For any gate, ask "what data would make this fail?"

### F-CLASS: CLAIM NOT SUPPORTED BY THE LEDGER (F-02, F-03, F-04)
- **F-02**: Thr565 $\text{O}\gamma1 \rightarrow \text{Ser561}$ sidechain at $2.71\text{ \AA}$. Ledger range: 6.03–8.40 Å. Zero rows below 3.5 Å. The $2.71\text{ \AA}$ figure is the backbone $i, i+4$ helical H-bond common to both genotypes—not A565T-specific.
- **F-03**: "Blunted PTM sensitivity" fails a direct matched test. Paired $p = 0.99$, informative null (80% power to detect $> 0.71\text{ \AA}$). Not an AF3 finding.
- **F-04**: $N = 74$ in Finding C2 unreproducible. Actual $n = 69$ independent runs.

### F-CLASS: SCHEMA DRIFT (F-09, F-12, F-15)
Ledger schema drifts between ingest runs. Always assert column existence before use and check null patterns against `Archive_Source`. Use a schema-hash gate.

### F-CLASS: STALE BRIEFING / NUMBER CARRY-OVER (F-22, F-23)
Numbers from a previous ledger version carried into a new briefing without recomputation.
- *Tell*: A briefing cites $N$ or a specific Å value that doesn't reproduce from the current ledger.
- *Rule*: Every briefing must state the ledger checksum and clean population count ($n=4045$) it was generated from.

### F-CLASS: H-BOND IDEALITY MISAPPLICATION (F-26/N3)
The `is_ideal` flag must be distance-gated ($\le 3.5\text{ \AA}$) first. Applying it to non-H-bonded pairs returns a structurally meaningless angle label.
- `Dist_565_554_BB` median $7.71\text{ \AA}$ — three helical turns apart, no H-bond possible.
- The angle (49.1–63.8°) is a real quantity (backbone orientation) but NOT an H-bond angle.

### F-CLASS: COLLIDER BIAS (F-27/N4)
pLDDT tail-gating (blanking at $\text{pLDDT} < 50$) is a collider for CTD metrics:
- $\text{Spearman}(\text{pLDDT\_616}, \text{Dist\_565\_616\_CA\_raw}) = -0.324, p = 7 \times 10^{-128}$.
- Kept ($\text{pLDDT} \ge 50$) median $23.58\text{ \AA}$ vs blanked median $34.95\text{ \AA}$ ($\Delta -11.37\text{ \AA}$).
- Retention differs by genotype: A565T $3.39\%$ vs WT $2.32\%$.
- *Rule*: Never contrast a genotype or PTM on a gated tail column. Use `_raw` instead.

### F-CLASS: MULTIPLICITY (F-10)
56 numeric candidate metrics tested without FDR correction. Bonferroni $\alpha = 8.9 \times 10^{-4}$. Any $p < 0.05$ finding not surviving Benjamini-Hochberg is preliminary.

### F-CLASS: INTERPRETATION OVERSTEP (F-17, N3 caveat)
- **F-17**: C554S substitution LENGTHENS the 565–554 contact ($3.06 \rightarrow 3.13\text{ \AA}$), opposite of a distance-optimized H-bond ($\text{O}\cdots\text{O}$ optimum $\sim 2.7\text{ \AA} < \text{O}\cdots\text{S} \sim 3.3\text{ \AA}$). Require angular criterion before claiming a load-bearing H-bond.
- **N3 caveat**: `Dist_565_554_BB` shift is $+0.139\text{ \AA}$ ($dz = +9.32$ from $SD = 0.015\text{ \AA}$). Correct framing: "confidence degradation / localized hinge loosening" ($\text{pLDDT} -4.9, \text{PAE} +0.9\text{--}1.1\text{ \AA}$), not physical displacement.

### F-CLASS: DUPLICATE FILES / PHANTOM SCRIPTS (F-08)
Five byte-identical copies (same md5) exist under two filenames. `samhd1_af3_fixes.py` is cited in prose but never imported by any code.
- *Check*: `md5 scripts/*.py` — flag any two files sharing a hash.

### F-CLASS: INHERITANCE / CLINICAL CLAIMS (#49, #61)
"Autosomal dominant" and "de novo" are unsupported. SAMHD1 disease alleles are classically recessive (AGS). Incomplete penetrance and variable expressivity in heterozygous pedigrees are consistent with haploinsufficiency + environmental/genetic modifiers, not dominant-negative poisoning.
- *Rule*: No inheritance mode should be asserted without a pedigree with genotyped, phenotyped family members.

### F-CLASS: STRUCTURAL RESCUE WITHOUT INDEPENDENT PREDICTION (#51, #54)
C554A and C554S "rescue" structures were in-place sidechain atom deletions (10,130 of 10,134 atoms byte-identical, $\text{C}\beta\text{--OG1}$ identical in both files). No independent AF3 prediction was run.
- *Rule*: Any structural claim about a hypothetical construct requires an independent AF3 prediction with fresh seeds. Distance values from in-place edits are arithmetic artifacts.

---

## Section 4 — Experimental Gaps (Unresolvable by AF3 Alone)

### GPU Only (No Wet Lab Needed)
1. **Seed-replication control**: WT vs WT under different seeds ($\approx 20$ runs). If WT-vs-WT gives a comparable unanimous sub-0.2 Å offset in `Dist_565_554_BB`, the metric is an algorithmic artifact.
2. **Substitution specificity**: A565S/V/I at $\ge 40$ paired runs each. A565V and A565I show *larger* marginal shifts than A565T—if the effect is not Thr-specific, the polar latch framing requires revision.
3. **T592E mimetic depth**: Only 1 matched-stratum run currently. Need $\ge 20$ tetramer+GTP T592E runs.
4. **Monomer baseline**: Need $\ge 20$ paired monomer runs per genotype.

### OpenMM ($\ge 500\text{ ns}$ Explicit Solvent)
5. **Thr565–Cys554 H-bond occupancy**: $\text{distance} < 3.5\text{ \AA}$ AND $\text{angle} > 120^\circ$ as % of frames. If $<50\%$, the bond is transient, not a constitutive latch.
6. **Tail-ensemble MD**: $R_g$ of residues 565–626, tail–core contact frequency, A2-pocket visits, WT vs A565T $\pm$ pT592.

### Wet Lab Roadmap
7. **Priority 1 (Purified Protein Panel)**: WT, A565T, T592E, T592A, A565T/T592E double mutant. SEC-MALS / AUC tetramer $K_d \pm \text{GTP/dGTP}$ titration. Steady-state dNTPase kinetics ($k_{\text{cat}}, K_{\text{act}}$, Hill coefficient). **Defined mixing series ($3:1, 2:2, 1:3$ WT:A565T) with native MS composition measurement and dNTPase comparison against binomial mixture expectation.**
8. **Priority 2 (HDX-MS)**: Loop 550–570 and C-terminal latch across $\{\pm\text{phosphorylation}\} \times \{\pm\text{nucleotide saturation}\}$.
9. **Priority 3 (Isogenic CRISPR Knock-in)**: THP-1 / iPSC-macrophage LC-MS/MS dNTP pools, targeted-MS pT592 quantification, and CtIP/MRE11 recruitment.
10. **Priority 4 (Covalent Target Engagement)**: isoTOP-ABPP ranking of Cys554 reactivity; iodoacetamide alkylation + thermal shift; cell viability $\pm$ Cys554 covalent ligand.
