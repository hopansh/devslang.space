---
slug: monolith
name: Monolith
category: architecture-patterns
difficulty: m
difficulty_label: "M — Mid"
heat: 65
status: classic
born: "~1960s"
related:
  - microservices
  - modular-monolith
  - technical-debt
tags:
  - architecture
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> everything in one codebase — "we need to break the monolith" is every CTO's second sentence after hello.

## real talk

One application. One deployment. All the code lives together and runs as a single process. Shopify, Stack Overflow, Basecamp — all monoliths that scaled fine.

"Monolith" is used as an insult more often than it deserves. A well-structured monolith beats a poorly-structured microservices setup every single time. The monolith only becomes a real problem when teams step on each other constantly or when you need to scale specific parts independently.

## used in the wild

> "the monolith is 800k lines. nobody fully understands it. deployment takes 45 minutes. we need to break it apart."
>
> — new CTO, week one, every company

## why it matters

Don't let the word scare you into premature architecture. Most things should start as a monolith. Decompose when you have a real reason, not because a conference talk made microservices sound exciting.

## related terms

- [microservices](./microservices.md) — the thing everyone wants to migrate to
- [modular-monolith](./modular-monolith.md) — the smart middle ground
