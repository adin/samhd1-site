---
title: The SAMHD1 Function Atlas
description: >-
  An interactive 3D map of everything SAMHD1 does, where in the cell it does it,
  and what fails when there is only one working copy of the gene.
tags:
  - SAMHD1
  - dNTPase
  - haploinsufficiency
  - VDAC1
---

# The SAMHD1 Function Atlas

<div markdown style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;margin:1.5rem 0">
[**Open the atlas →**](/function-atlas/){ .md-button .md-button--primary target="_blank" }
<span>Best on a desktop browser. Drag to orbit, scroll to zoom, click anything.</span>
</div>

Most descriptions of SAMHD1 are a list. This is the same material as **a cell you
can fly around inside**: 54 functions placed in the compartment where each one
happens, the links between them, and a switch that dims the whole board to what
a single working copy of the gene can still do.

<iframe src="/function-atlas/" title="SAMHD1 Function Atlas 3D" loading="lazy"
        style="width:100%;height:min(70vh,620px);border:1px solid var(--md-default-fg-color--lightest);border-radius:6px;background:#05070c"></iframe>

<small>The embedded view above is fully interactive, but the atlas is designed
for a full window — use the button for the real thing.</small>

## Four kinds of claim, not one list

The thing that makes SAMHD1 hard to describe is that its "functions" are not all
the same *kind* of thing. Published lists put these side by side as equals:

- **dNTPase activity** — an enzyme doing chemistry
- **Phosphorylation at T592** — something done *to* SAMHD1, by another enzyme
- **Bladder dysfunction prevention** — a whole-body outcome, several inferential
  steps away

They are not equals, and flattening them is what makes an otherwise accurate
list feel untrustworthy. The atlas separates them into four tiers and lays the
scene out along that axis, so **distance on screen is distance in the
argument**:

| tier | what it is |
|---|---|
| Regulation | inputs that control SAMHD1 — the modification sites |
| Molecular function | what the protein itself does |
| Cellular consequence | what changes in the cell when a function is impaired |
| Body / clinical outcome | organism-level phenotypes, drawn outside the cell |

## The canonical groupings

Reviews usually group SAMHD1's roles into four domains, and the rail lets you
light up each one: **dNTP balance** (cell metabolism), **genome integrity**
(tumour development), **viral restriction** (intrinsic immunity), and **immune
modulation** (autoimmunity).

There is a fifth in this atlas — **mitochondrial integrity** — and it is marked
as *added here*, because it is genuinely not in the standard figure. That
framing predates most of the mitochondrial work. It is included because it is
load-bearing for this variant: it is where the metabolic arm and the immune arm
turn out to be the same arm.

## Why half a gene is not half a function

The most useful thing the atlas shows is the **WT / A565T** switch, and the
answer it gives is not the obvious one.

SAMHD1 only works as a **tetramer** — four copies assembled together. Someone
with one variant copy does not make half as much working enzyme; they make
tetramers of *mixed composition*. Any activity that needs all four subunits
intact falls much further than gene dosage alone would predict, while activities
that tolerate a mixed tetramer track dosage closely.

You can see that split directly: the dNTPase and the activities that run on it
sit above **75% loss**, while others land at **30–40%**. That spread is the
signature of a tetramer defect, and it is why this variant is not silent.

Two things are deliberately kept off that percentage scale, because they are not
the same kind of measurement — the cancer associations are lifetime
probabilistic risk rather than a per-cell deficit, and **renal clear cell
carcinoma is shown as protective**, the one place where having less SAMHD1
helps. It is kept visible on purpose: an atlas that showed only harms would be
an advocacy document rather than a model.

## How confident is any of this?

Every node carries a grade, and so does every arrow:

- <span style="color:#46d18a">**S**</span> — demonstrated for SAMHD1
- <span style="color:#d1a246">**G**</span> — established elsewhere, imported here
- <span style="color:#e0674f">**I**</span> — inferred; the reasoning, not a measurement

Two limits worth stating plainly rather than burying:

**The nodes are sourced material; the arrows are our reasoning.** The function
list and its citations come from a literature compilation. The *connections*
between functions are not in that source at all — they are authored for this
atlas and each one carries its own grade. The "Where the evidence is thin" tour
walks the weakest of them on purpose.

**The location of each function is assigned, not quoted.** No source we worked
from records which compartment each activity happens in, and placing them is the
entire point of a 3D map. The ring around each node grades *where*, not
*whether*.

**Twelve of the 48 citations are flagged** where they are used — duplicates,
references never resolved to a specific paper, preprints, a press release. They
are shown rather than removed so a reader can judge them; verifying the
remainder against PubMed is still outstanding work.

## See also

The [Immune Atlas](immune-atlas.md) picks up where this one leaves off: the
mitochondrial arm here feeds the cGAS–STING loop there, and matching nodes in
each link across to the other.

Start with the guided tours in the left rail — **"What SAMHD1 actually does"**
is the five-minute version.
