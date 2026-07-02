---
slug: cqrs
name: CQRS
category: architecture-patterns
heat: 44
status: deep-lore
born: "~2010 (Greg Young)"
related:
  - event-sourcing
  - hexagonal-architecture
tags:
  - architecture
  - patterns
  - advanced
  - distributed-systems
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> command query responsibility segregation — separate reads from writes. a mouthful that solves a real problem at scale.

## real talk

Two different models: one for writing (commands) and one for reading (queries). They can use different databases, different schemas, even different services. The write side handles business rules. The read side is optimised for display — denormalised, pre-computed, fast. They sync asynchronously.

Most apps don't need this. When your read load is 1000x your write load, or when your read and write models look completely different, it makes sense. Until then it's over-engineering.

## used in the wild

> "the product query is joining seven tables. with CQRS we'd have a read model that's pre-projected. one query, one table."
>
> — senior engineer, architecture discussion

## why it matters

At scale and in complex domains, mixing read and write concerns creates compromises on both sides. CQRS lets each side be optimal. The cost is eventual consistency and operational complexity.

## related terms

- [event-sourcing](/article/event-sourcing) — commonly paired with CQRS
- [hexagonal-architecture](/article/hexagonal-architecture) — same era of thinking
