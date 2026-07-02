---
slug: yagni
name: YAGNI
category: code-quality
heat: 57
status: solid
born: "~1999 (Extreme Programming)"
related:
  - dry
  - mvp
tags:
  - code-quality
  - practices
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> you aren't gonna need it — stop building features and abstractions nobody asked for. yet.

## real talk

YAGNI is the discipline of not building speculative functionality "just in case we need it someday." That configurable plugin system for a feature you might add in two years? You aren't gonna need it. That extra abstraction layer in case you switch databases someday? You aren't gonna need it.

It's the natural counterweight to over-engineering. Developers love building flexible, general systems — it's intellectually satisfying. YAGNI is the reminder that flexibility you don't use is just complexity you have to maintain for no benefit.

## used in the wild

> "why does this have three layers of abstraction for one API call? YAGNI. we have one client. build for one client."
>
> — senior engineer, simplifying a PR back down to earth

## why it matters

Premature generalization is one of the most common ways engineers waste time and add unnecessary complexity. YAGNI is permission to build the simple thing now and generalize later, if and when you actually need to.

## related terms

- [dry](/article/dry) — DRY and YAGNI pull in opposite directions and both are right sometimes
- [mvp](/article/mvp) — YAGNI is the engineering version of MVP thinking
