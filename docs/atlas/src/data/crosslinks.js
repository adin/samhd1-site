/**
 * data/crosslinks.js — GENERATED, do not edit by hand.
 *
 *   node viz/samhd1-functions-3d/tools/check_crosslinks.mjs --emit
 *
 * The reverse of viz/samhd1-functions-3d/src/data/crosslinks.js, which is the
 * single source of truth for how the two atlases correspond. It is duplicated
 * here rather than imported because tools/export_public.py copies only this
 * atlas's own directories — a cross-directory import would work locally and
 * 404 in the published build, which is the worst of both.
 *
 * Both atlases are published, so these links are live in the public build as
 * well. They were private-build-only while the SAMHD1 atlas was unpublished —
 * if it is ever withdrawn, re-gate them on IS_PRIVATE_BUILD in ./index.js
 * rather than leaving links that promise a page which no longer exists.
 */

export const SIBLING = {
  name: 'SAMHD1 Function Atlas',
  publishedBase: '/function-atlas/',
  devBase: 'http://localhost:8124/',
  ownDevPort: '8123',
};

export const CROSSLINK_KINDS = {
  "same": {
    "label": "the same claim",
    "glyph": "="
  },
  "acts-on": {
    "label": "acts on",
    "glyph": "→"
  },
  "feeds": {
    "label": "feeds the pathway at",
    "glyph": "⇉"
  }
};

/** immune atlas node id -> the SAMHD1-atlas claims that correspond to it. */
export const CROSSLINKS = {
  "a565t": [{"to":"samhd1","kind":"feeds","note":"The variant node. Everything the immune atlas traces downstream starts there."}],
  "arac": [{"to":"chemo-hydrolysis","kind":"acts-on","note":"Hydrolysis and inactivation of cytarabine triphosphate (Ara-CTP)."}],
  "autolysosome": [{"to":"autophagy","kind":"acts-on"}],
  "baxbak": [{"to":"apoptosis","kind":"acts-on"}],
  "becn1": [{"to":"bik","kind":"feeds"}],
  "bik": [{"to":"bik","kind":"same","note":"SAMHD1 upregulates BIK, which sequesters BECN1 — the first of the three brakes on mitophagy in the TEAL stream."}],
  "cgas": [{"to":"mtdna-ifn","kind":"feeds","note":"The sensor that reads escaped mtDNA as infection. This is the exact junction where the two atlases meet."},{"to":"cgas-sting","kind":"acts-on","note":"The sensor held down by denying it ligand rather than by inhibiting it directly."}],
  "ctsd": [{"to":"autophagy","kind":"feeds","note":"Cathepsin D — the mTOR–MITF–CTSD arm where lysosomal failure becomes cGAS ligand supply."}],
  "cxcl9-11": [{"to":"ip10","kind":"acts-on","note":"IP-10 is CXCL10, modelled there with CXCL9 and CXCL11 as one ISG chemokine set."}],
  "cytc": [{"to":"cytc","kind":"same"}],
  "deltapsi": [{"to":"deltapsi","kind":"same"}],
  "dntp-pool": [{"to":"dntpase","kind":"acts-on","note":"The pool this enzyme sets. In the immune atlas it is the head of the PURPLE stream."}],
  "dsrna-cyt": [{"to":"dsrna-seq","kind":"acts-on"}],
  "fork": [{"to":"fork","kind":"acts-on"}],
  "gemcitabine": [{"to":"chemo-hydrolysis","kind":"acts-on","note":"Inactivation of gemcitabine triphosphate (dFdCTP)."}],
  "genomic-instability": [{"to":"senescence","kind":"feeds"},{"to":"checkpoint","kind":"feeds"}],
  "ifnb": [{"to":"mtdna-ifn","kind":"feeds"},{"to":"ifn-i","kind":"acts-on"}],
  "il17a": [{"to":"bladder","kind":"feeds","note":"The IL-23/Th17/IL-17A axis that drives enthesitis at tendon–bone insertions in psoriatic arthritis. The same axis acting on a different insertion site is a structural analogy, not a demonstrated mechanism — no citation places IL-17A at the bladder specifically."}],
  "isg-set": [{"to":"ifn-i","kind":"feeds"}],
  "l1-insertion": [{"to":"line1","kind":"feeds"}],
  "l1-locus": [{"to":"line1","kind":"acts-on"}],
  "l1-rnp": [{"to":"line1","kind":"acts-on","note":"The ribonucleoprotein particle held out of circulation in stress granules."},{"to":"stress-granule","kind":"acts-on"},{"to":"llps","kind":"feeds"}],
  "m1": [{"to":"m1m2","kind":"acts-on"}],
  "micronucleus": [{"to":"dna-resection","kind":"feeds"}],
  "mito-dntp": [{"to":"dntpase","kind":"feeds"}],
  "mre11": [{"to":"dna-resection","kind":"acts-on"}],
  "mtdna-frag": [{"to":"mtdna-leak","kind":"feeds","note":"The cytosolic mtDNA fragments this function is supposed to prevent — the BLUE stream’s ligand supply."}],
  "mtdsrna": [{"to":"dsrna-seq","kind":"acts-on"}],
  "nfkb": [{"to":"nfkb","kind":"acts-on"}],
  "orf1p": [{"to":"stress-granule","kind":"acts-on"}],
  "psa": [{"to":"bladder","kind":"feeds","note":"Psoriatic arthritis is the outcome this axis is modelled against. Genitourinary enthesitis sits on the same spectrum but is not the same claim as joint disease."}],
  "rloop": [{"to":"rloop","kind":"acts-on"}],
  "samhd1": [{"to":"samhd1","kind":"same","note":"The same protein, seen from the other side: there it is one node in a pathway, here it is the whole subject."}],
  "samhd1-mito": [{"to":"vdac1","kind":"same","note":"The mitochondrial SAMHD1 pool that performs this interaction."}],
  "sting": [{"to":"cgas-sting","kind":"acts-on"}],
  "tlr4": [{"to":"tlr4","kind":"acts-on"}],
  "vdac1": [{"to":"vdac1","kind":"acts-on","note":"The channel this function acts on. Note the immune atlas splits the physical interaction from its functional consequence — a bind edge cannot carry a brake."}],
  "vdac1-oligo": [{"to":"vdac1","kind":"feeds","note":"The macropore. Losing the interaction is what lets VDAC1 oligomerise wide enough to pass DNA."},{"to":"mtdna-leak","kind":"acts-on"}],
};

/**
 * Both atlases are published now, so these links are live in the public build
 * too. Resolve from the origin rather than assuming: served from a site root
 * the sibling is at /samhd1/, served from the local dev server it is on its own
 * port, and guessing wrong produces a dead link.
 */
export function siblingUrl(nodeId) {
  // Discriminate on the PORT, not the hostname: a `mkdocs serve` preview runs
  // on localhost but has the published layout, so a hostname test would send
  // every cross-link to a dev server that is probably not running.
  const dev = location.port === SIBLING.ownDevPort;
  const base = dev ? SIBLING.devBase : SIBLING.publishedBase;
  return `${base}#node=${encodeURIComponent(nodeId)}`;
}
