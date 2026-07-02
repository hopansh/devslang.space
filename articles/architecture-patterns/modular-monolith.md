---
slug: modular-monolith
name: Modular Monolith
category: architecture-patterns
heat: 58
status: rising
born: "~2018 (rediscovered)"
related:
  - monolith
  - microservices
  - hexagonal-architecture
tags:
  - architecture
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> a monolith with enforced internal boundaries — the middle path nobody picks first but everyone ends up at.

## real talk

Same single deployment as a monolith, but code is divided into modules with strict rules about what can call what. The user module doesn't reach into the payment module's database. Contracts are explicit.

You get the operational simplicity of a monolith (one deploy, no network latency between modules) plus most of the organisational benefits of microservices (team ownership, clear boundaries). It's also the right architecture if you're planning to extract microservices later — the module becomes the service.

## used in the wild

> "we don't need microservices yet. let's do a modular monolith, define the boundaries, then split when we actually need to scale that part."
>
> — senior engineer who has been burned by premature microservices before

## why it matters

Big-bang migrations from monolith to microservices fail often. A modular monolith is the responsible intermediate step that forces you to find the seams before you pay the cost of network boundaries.

## related terms

- [monolith](/article/monolith) — where you start
- [microservices](/article/microservices) — where you might end up
- [hexagonal-architecture](/article/hexagonal-architecture) — pairs well here
