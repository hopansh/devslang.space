---
slug: eventual-consistency
name: Eventual Consistency
category: data-state
difficulty: s
difficulty_label: "S — Senior"
heat: 63
status: solid
born: "~1990s (distributed systems theory)"
related:
  - optimistic-update
  - cache-invalidation
tags:
  - distributed-systems
  - databases
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> data will be consistent… eventually. not now. distributed systems being distributed systems.

## real talk

In a distributed system, if you write data to one node, it takes time to propagate to all the other nodes (replicas, caches, regions). Eventual consistency means the system guarantees that, given enough time with no new writes, all nodes will converge on the same value — but right after a write, different reads might temporarily see different, stale data.

This is the deliberate tradeoff distributed databases make for availability and performance. DynamoDB, Cassandra, and many caching layers work this way by default. The alternative — strong consistency, where every read always sees the latest write — is possible but usually costs you availability or speed.

## used in the wild

> "i wrote the update and immediately read it back and got the old value. that's not a bug, that's eventual consistency. give it a second."
>
> — backend engineer, explaining a confusing but expected behavior to a junior dev

## why it matters

If you don't know your system is eventually consistent, you'll write code that assumes a write is immediately visible everywhere — and then chase a "bug" that's actually just the database working as designed.

## related terms

- [optimistic-update](./optimistic-update.md) — a UI pattern that works around this gap
- [cache-invalidation](./cache-invalidation.md) — a related staleness problem
