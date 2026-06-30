---
slug: cache-invalidation
name: Cache Invalidation
category: performance-reliability
difficulty: s
difficulty_label: "S — Senior"
heat: 73
status: blazing
born: "~1980s"
related:
  - eventual-consistency
tags:
  - performance
  - databases
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> one of the two genuinely hard things in computer science — knowing when to clear stale cache, always wrong at least once.

## real talk

Caching is easy: store a copy of something expensive to compute so you don't have to recompute it every time. Cache invalidation is the hard part: knowing exactly when that cached value is no longer accurate and needs to be refreshed or removed. Cache it too aggressively and users see stale, outdated data. Invalidate too eagerly and you lose the entire performance benefit of caching in the first place.

There's a well-known programmer joke: "there are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors." It's funny because it's true — almost every system that adds caching eventually ships a bug where a user sees old data because something changed and the cache didn't know to update.

## used in the wild

> "the user updated their profile picture but the old one is still showing for some users. that's a cache invalidation bug — the CDN cache wasn't cleared after the update."
>
> — engineer, diagnosing a confusing-looking bug that's actually a classic, well-understood problem

## why it matters

Almost every performance optimization that involves caching eventually creates a corresponding "why is this showing stale data" bug. Understanding invalidation strategies (TTLs, explicit invalidation on write, cache-busting keys) upfront saves a lot of confused debugging later.

## related terms

- [eventual-consistency](../data-state/eventual-consistency.md) — a closely related "staleness is expected" concept
