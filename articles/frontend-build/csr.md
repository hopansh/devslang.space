---
slug: csr
name: CSR
category: frontend-build
heat: 60
status: solid
born: "~2010s (SPA era)"
related:
  - ssr
  - hydration
tags:
  - frontend
  - rendering
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> client-side rendering — blank page, then JS builds everything. fast once loaded, awkward before that.

## real talk

CSR means the server sends a nearly empty HTML page (often just a single `<div id="root">`), and JavaScript downloads, executes, and builds the entire UI in the browser. This was the dominant model during the single-page-application boom — React, Vue, and Angular apps default to this unless explicitly configured otherwise.

The downside is the dreaded "blank white screen" while JS downloads and executes, plus search engine crawlers historically struggled to index content that doesn't exist until JavaScript runs (modern crawlers have improved but it's still a real concern). The upside: once loaded, navigation between pages feels instant because there's no server round-trip rendering HTML each time.

## used in the wild

> "the marketing landing page is CSR and Google isn't indexing half the content properly. we need SSR for anything public-facing and SEO-dependent."
>
> — engineer, explaining to marketing why their traffic dropped

## why it matters

CSR is the right call for internal tools, dashboards, and authenticated apps where SEO doesn't matter and interactivity does. It's the wrong call for your public marketing site, which is exactly where teams sometimes get it backwards.

## related terms

- [ssr](./ssr.md) — the alternative, better for SEO-sensitive pages
- [hydration](./hydration.md) — not needed in pure CSR since there's no server HTML to attach to
