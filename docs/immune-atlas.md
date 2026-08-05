---
title: The Immune Atlas
description: >-
  An interactive 3D map of innate immune signalling under SAMHD1 p.A565T —
  compartments you can enter, pathways you can isolate, and cascades you can
  step through one reaction at a time.
tags:
  - cGAS-STING
  - NLRP3
  - VDAC1
  - JAK-STAT
---

# The Immune Atlas

<div markdown style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;margin:1.5rem 0">
[**Open the atlas →**](/atlas/){ .md-button .md-button--primary target="_blank" }
<span>Best on a desktop browser. Drag to orbit, scroll to zoom, click any molecule.</span>
</div>

The [pathway map](pathways.md) explains the four colour-coded streams of the
working disease model as a flowchart. This is the same model as a **cell you can
fly around inside**: 217 molecules and 380 interactions across eleven
compartments, from the nucleus and the mitochondrion down to a neighbouring
lymphocyte.

<iframe src="/atlas/" title="Innate Immune Atlas 3D" loading="lazy"
        style="width:100%;height:min(70vh,620px);border:1px solid var(--md-default-fg-color--lightest);border-radius:6px;background:#05070c"></iframe>

<small>The embedded view above is fully interactive, but the atlas is designed
for a full window — use the button for the real thing.</small>

## What you can do with it

**Enter a compartment.** Double-click the mitochondrion and the camera flies
inside, revealing detail that stays hidden at the whole-cell level: the VDAC1
macropore, the PNC1/PNC2 nucleotide carriers on the inner membrane, POLG at the
mtDNA nucleoid, the respiratory complexes, and the mitophagy machinery that gets
flagged and then jammed.

**Isolate one arm.** Turn every pathway layer off, then turn a single one back
on. cGAS–STING alone is legible in a way it never is in a diagram with
everything drawn at once.

**Trace the coloured streams.** The PURPLE, BLUE, RED, GOLD, ORANGE, TEAL and
GREEN streams are the ones from *The Mitochondrion Under Siege*, carrying their
original names and attack-vector numbers, so the atlas and the figure can be
read side by side. Click one and it lights its whole chain, marking what feeds
it and what it hands on.

**Step through a cascade.** This is the part that is hard to do on paper. Ask
for *every* way the variant induces type-I interferon and the atlas enumerates
the routes through the graph — 379 of them, within sixteen steps — then walks
you along one reaction at a time, forwards and backwards, with the mechanism and
its citation at each step.

Each route carries three things worth knowing:

- **Net effect**, the product of the polarities along it. `A565T ⊣ SAMHD1 ⊣
  NF-κB` is a double negative: losing a brake *on a brake* raises NF-κB. Some
  routes come out negative, and those are real negative feedback — the ones
  through IκBα, USP18 and A20 genuinely suppress their endpoint.
- **Evidence grade**, taken from the *weakest* link on the route, because a
  chain is only as defensible as its softest step.
- **Which feedback loops** it passes through.

## Send someone the exact view

Every view in the atlas is a URL. Set something up — a tour paused on the step
that matters, a single traced route, one compartment with one layer left on —
and the address bar already says so. **⧉ Copy link to this view** in the left
rail puts it on your clipboard, and the tour and cascade HUDs carry the same
button so you can send the step you are looking at without leaving it.

Opening that link puts the reader exactly where you were. It is a few hundred
bytes instead of a screen recording, it stays legible if they want to see what
it does before clicking, and unlike a video they can carry on exploring from
where you left them.

The grammar is plain enough to write by hand:

| Link | Opens on |
|---|---|
| [`#tour=loop-a`](/atlas/#tour=loop-a){ target="_blank" } | the Loop A tour, from the start |
| [`#tour=loop-b&step=5`](/atlas/#tour=loop-b&step=5){ target="_blank" } | Loop B, step 5 — the therapeutic gap |
| [`#node=vdac1`](/atlas/#node=vdac1){ target="_blank" } | VDAC1, inspector open |
| [`#stream=blue`](/atlas/#stream=blue){ target="_blank" } | the BLUE mtDNA-escape stream, whole chain lit |
| [`#all`](/atlas/#all){ target="_blank" } | every downstream consequence of p.A565T |
| [`#path=il1b`](/atlas/#path=il1b){ target="_blank" } | every route from the variant to IL-1β |
| [`#from=a565t&to=pem`](/atlas/#from=a565t&to=pem){ target="_blank" } | a trace between any two molecules you name |
| [`#focus=mitochondrion&layers=mito.mitophagy`](/atlas/#focus=mitochondrion&layers=mito.mitophagy){ target="_blank" } | inside the mitochondrion, two layers on |
| [`#ev=S`](/atlas/#ev=S){ target="_blank" } | the whole map filtered to demonstrated evidence only |

(All relative to `/atlas/` — the full link is
`https://glasscannonfoundation.org/atlas/#tour=loop-a` and so on.)

A shared **route** carries its full chain of molecules rather than a position in
the route list, so the link keeps meaning the same argument as the atlas grows.
If a route is ever edited out from under a link, the atlas says so and shows the
route list instead of quietly opening a different one.

Two things worth knowing before you send one to a patient or a colleague:
the links contain no identifiers of any kind, and **Pin the exact camera angle**
is off by default — tick it only if the specific angle is part of what you are
trying to show, since each view already frames itself on arrival.

## How confident is any of this?

Every molecule and every arrow carries an evidence grade, and the atlas will
filter to show you only what survives at each level:

| | meaning |
|---|---|
| **S** | demonstrated in SAMHD1-deficient cells, animals, or AGS patients |
| **G** | well established in another immune or mitochondrial system, imported here |
| **I** | mechanistically consistent extrapolation, **not** yet tested in SAMHD1 models |

This is the same key used throughout the project's working documents. It is
there to be used: set the evidence filter to **S only** and most of the picture
disappears. What remains is the part that can be argued from directly. The rest
is a hypothesis with its reasoning shown, which is the honest way to present a
model that has not been tested yet.

## What it is not

It is a **qualitative map**, not a simulation. An arrow means "acts on", not
"acts on with magnitude *x*". There are no rate constants, no stoichiometry and
no time axis, so it can tell you that a route exists and which direction it
pushes — but not how much, or how fast, or which route dominates in a real cell.

It is also a **model of one variant's predicted biology**, assembled from
published mechanism. Nothing in it is a clinical finding, and nothing in it is
medical advice.

## Colophon

Built with [three.js](https://threejs.org). No tracking, no analytics, no
external requests — the page loads its own code and nothing else. Source and the
full citation registry are in the project repository.
