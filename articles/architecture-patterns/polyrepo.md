---
slug: polyrepo
name: Polyrepo
category: architecture-patterns
heat: 52
status: solid
born: "~2000s"
related:
  - monorepo
  - microservices
tags:
  - architecture
  - devx
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> one repo per service — simple to start, painful to coordinate at scale.

## real talk

Each service or app lives in its own repository. The default for most teams because GitHub makes it easy and CI is simple per repo.

Then you need to update a shared interface across five services and you're opening five PRs, coordinating five merges, and praying they all deploy in the right order.

## used in the wild

> "the problem is we're in a polyrepo so changing the auth interface means touching six repos. been at it for three days."
>
> — backend dev, standup, visibly tired

## why it matters

Polyrepo isn't wrong — it's a tradeoff. Small teams with clear service boundaries do fine. The pain shows when services need to evolve together frequently.

## related terms

- [monorepo](/article/monorepo) — the alternative that sounds better until you configure it
- [microservices](/article/microservices) — often paired with polyrepo
