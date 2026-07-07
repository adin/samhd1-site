# The Glass Cannon Project — public site

This is the **public**, sanitized website for the SAMHD1 p.A565T research
effort. It is built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)
and deployed to GitHub Pages.

> **This directory is the source of truth for a separate PUBLIC repository.**
> It is developed inside the private `Med-docs` repo and pushed to the public
> repo by the `publish_public.yml` workflow, which runs a PII guard first. No
> content is ever served directly from `Med-docs`.

## Contents

| Path | What it is |
|---|---|
| `docs/index.md` | Landing page |
| `docs/samhd1.md` | The science — enzyme, variant, three-arm mechanism |
| `docs/kindred.md` | De-identified five-generation pedigree |
| `docs/objectives.md` | Research objectives |
| `docs/foundation.md` | Glass Cannon Foundation draft |
| `docs/blog/` | Weekly digests + monthly syntheses (generated at publish time) |
| `blog-manual/` | Hand-written posts (Foundation updates, paper spotlights) — see its README |
| `.github/workflows/deploy.yml` | Builds and deploys to Pages (runs in the public repo) |

## Local preview

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open <http://127.0.0.1:8000>. Note the `blog/posts/` folder is empty in a
fresh checkout — posts are generated from the private digests at publish time,
so the local blog will be empty until you copy a few sample posts in.

## How content flows here

1. The weekly monitor writes digests to `weekly-digest/` in `Med-docs`.
2. `scripts/build_blog.py` stamps each digest/rollup with blog front-matter and
   writes it into `docs/blog/posts/`.
3. `scripts/pii_guard.py` scans everything about to be published and fails
   closed on any name, DOB, record ID, or email.
4. `publish_public.yml` pushes this directory to the public repo `main`.
5. This repo's `deploy.yml` builds the site and publishes it to Pages.

## One-time setup in the public repo

- Settings → Pages → Source: **GitHub Actions**.
- No secrets are required in the public repo.
