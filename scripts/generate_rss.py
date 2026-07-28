#!/usr/bin/env python3
"""Generate feed_rss_created.xml from blog post front-matter.

Replaces mkdocs-rss-plugin, which Zensical does not yet support.
Reads docs/blog/posts/*.md, extracts date + title + categories from
YAML front-matter, and writes an RSS 2.0 feed into site/.

Usage (from the public-site root, after `zensical build`):
    python scripts/generate_rss.py
"""

from __future__ import annotations

import re
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import format_datetime
from pathlib import Path

POSTS_DIR = Path("docs/blog/posts")
OUTPUT = Path("site/feed_rss_created.xml")

SITE_URL = "https://glasscannonfoundation.org"
FEED_TITLE = "The Glass Cannon Project"
FEED_DESC = (
    "A patient-and-family-led research effort to characterize heterozygous "
    "SAMHD1 p.A565T — mechanism, kindred, objectives, and weekly literature "
    "surveillance."
)
LOGO_URL = f"{SITE_URL}/assets/logo.svg"

FRONT_MATTER_RE = re.compile(r"^---\n(.+?)\n---\n", re.DOTALL)
DATE_RE = re.compile(r"^date:\s*(\S+)", re.MULTILINE)
CAT_RE = re.compile(r"^  - (.+)$", re.MULTILINE)
TITLE_RE = re.compile(r"^#\s+(.+)$", re.MULTILINE)


def parse_post(path: Path) -> dict | None:
    text = path.read_text(encoding="utf-8")
    fm_match = FRONT_MATTER_RE.match(text)
    if not fm_match:
        return None
    fm = fm_match.group(1)

    date_match = DATE_RE.search(fm)
    if not date_match:
        return None

    date_str = date_match.group(1)
    try:
        dt = datetime.strptime(date_str, "%Y-%m-%d").replace(tzinfo=timezone.utc)
    except ValueError:
        return None

    cats_block = fm[fm.find("categories:"):] if "categories:" in fm else ""
    categories = CAT_RE.findall(cats_block)

    body = text[fm_match.end():]
    title_match = TITLE_RE.search(body)
    title = title_match.group(1).strip() if title_match else path.stem

    slug = re.sub(r"[^\w-]", "-", title.lower()).strip("-")
    slug = re.sub(r"-+", "-", slug)
    link = f"{SITE_URL}/blog/{date_str.replace('-', '/')}/{slug}/"

    return {
        "title": title,
        "link": link,
        "date": dt,
        "categories": categories,
        "description": body[:300].strip().replace("\n", " "),
    }


def build_feed(posts: list[dict]) -> str:
    ET.register_namespace("atom", "http://www.w3.org/2005/Atom")
    rss = ET.Element("rss", version="2.0")
    channel = ET.SubElement(rss, "channel")
    ET.SubElement(channel, "title").text = FEED_TITLE
    ET.SubElement(channel, "link").text = SITE_URL
    ET.SubElement(channel, "description").text = FEED_DESC

    now = format_datetime(datetime.now(timezone.utc))
    ET.SubElement(channel, "lastBuildDate").text = now

    image = ET.SubElement(channel, "image")
    ET.SubElement(image, "url").text = LOGO_URL
    ET.SubElement(image, "title").text = FEED_TITLE
    ET.SubElement(image, "link").text = SITE_URL

    atom_link = ET.SubElement(channel, "{http://www.w3.org/2005/Atom}link")
    atom_link.set("href", f"{SITE_URL}/feed_rss_created.xml")
    atom_link.set("rel", "self")
    atom_link.set("type", "application/rss+xml")

    for post in sorted(posts, key=lambda p: p["date"], reverse=True):
        item = ET.SubElement(channel, "item")
        ET.SubElement(item, "title").text = post["title"]
        ET.SubElement(item, "link").text = post["link"]
        ET.SubElement(item, "pubDate").text = format_datetime(post["date"])
        ET.SubElement(item, "description").text = post["description"]
        for cat in post["categories"]:
            ET.SubElement(item, "category").text = cat

    ET.indent(rss)
    return '<?xml version="1.0" encoding="utf-8"?>\n' + ET.tostring(
        rss, encoding="unicode"
    )


def main() -> int:
    if not POSTS_DIR.exists():
        print("generate_rss: no posts directory — skipping feed generation")
        return 0

    posts = []
    for md in sorted(POSTS_DIR.glob("*.md")):
        parsed = parse_post(md)
        if parsed:
            posts.append(parsed)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(build_feed(posts), encoding="utf-8")
    print(f"generate_rss: wrote {len(posts)} items to {OUTPUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
