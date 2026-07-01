---
slug: lazy-loading
name: Lazy Loading
category: frontend-build
heat: 64
status: classic
born: "~2010s"
related:
  - code-splitting
  - cold-start
tags:
  - frontend
  - performance
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> don't load it until you need it — great for performance, confusing the one time you actually need it immediately.

## real talk

Lazy loading defers loading a resource — an image, a component, a route's JavaScript bundle — until the moment it's actually needed, rather than loading everything upfront. An image below the fold doesn't load until the user scrolls near it. A modal's code doesn't download until the user actually opens the modal.

This is a genuinely simple, high-impact performance win for most apps. The one time it backfires is when something is lazy-loaded that the user needs instantly — a flash of missing content, a brief loading spinner where there shouldn't be one — because the thing that should've been ready upfront was deferred for the sake of following a pattern everywhere.

## used in the wild

> "the modal flickers for half a second before showing because we lazy-loaded a component that opens immediately on page load. this is the one case where we shouldn't lazy load."
>
> — frontend engineer, fixing a self-inflicted UX bug

## why it matters

Used well, lazy loading meaningfully improves initial load time. Used carelessly on things users need right away, it introduces visible delay exactly where you don't want any.

## related terms

- [code-splitting](./code-splitting.md) — the bundler-level version of this idea
- [cold-start](../performance-reliability/cold-start.md) — a related "wakes up slowly" problem in serverless
