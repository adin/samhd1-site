# Hand-written blog posts

Drop your own posts here — Foundation updates, announcements, or deep-dive
paper breakdowns. Everything in this folder (except this README and files
starting with `_`) is copied into the blog on the next publish, **without being
overwritten** by the automated digests.

## How to add a post

1. Create a new file here named `YYYY-MM-DD-short-slug.md`
   (e.g. `2026-07-10-ankib1-breakdown.md`). The date in the filename is just for
   your own ordering — the **real** date comes from the front-matter below.
2. Start the file with front-matter, then write normal Markdown:

```markdown
---
date: 2026-07-10
categories:
  - Foundation Update
---

# Your post title

Your content here. Standard Markdown — headings, **bold**, lists, [links](https://example.org),
and admonitions like:

!!! note
    Callout boxes work too.
```

3. Commit and push to `main`. The publish pipeline runs the PII guard, then
   deploys. Live in a couple of minutes.

## Required / recommended front-matter

- `date:` — **required.** `YYYY-MM-DD`. The build fails without it.
- `categories:` — optional but recommended. Any text works; suggested values:
  - `Foundation Update` — news, announcements, milestones
  - `Paper Spotlight` — a breakdown of one important paper
  - a pathway name (`cGAS-STING`, `NLRP3`, `JAK-STAT`, `gene-editing`, …) to
    thread it alongside the auto-digests

## Two reminders

- **The PII guard still runs.** No names, DOBs, or record IDs — the deploy fails
  closed if it finds any (check the Actions log for the file and line).
- **Draft a paper spotlight without a computer:** Med-docs → **Actions** →
  **Draft paper spotlight** → **Run workflow**, enter a DOI or PMID. It runs on
  GitHub using the repo's `ANTHROPIC_API_KEY` secret and commits a draft
  (`_`-prefixed) here for you to edit. (Or run `python scripts/spotlight.py
  --doi 10.xxxx/xxxxx` locally if you prefer.)

Files beginning with `_` (e.g. `_template.md`) are ignored by the build — use
that prefix for drafts you are not ready to publish.
