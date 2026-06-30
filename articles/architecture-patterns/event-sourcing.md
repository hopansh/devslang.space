---
slug: event-sourcing
name: Event Sourcing
category: architecture-patterns
difficulty: x
difficulty_label: "X — 10x"
heat: 47
status: deep-lore
born: "~2010s"
related:
  - cqrs
  - saga-pattern
tags:
  - architecture
  - patterns
  - advanced
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> store events not state — your DB is an append-only log. good luck writing a migration.

## real talk

Instead of storing current state, you store every event that led to it. An order isn't a row — it's a sequence: OrderCreated, ItemAdded, PaymentProcessed, OrderShipped. Current state is computed by replaying events.

Full audit log built-in. Time-travel queries. The downside: querying is non-trivial. Schema evolution is a puzzle. You can't just UPDATE a row. Your mental model needs a complete rewrite.

## used in the wild

> "the bug happened three days ago. with event sourcing we just replay from before that point and see exactly what went wrong."
>
> — engineer showing off at post-mortem

## why it matters

For domains where history matters (finance, healthcare, legal), event sourcing is natural. For a CRUD app, it's a complexity tax you don't need to pay.

## related terms

- [cqrs](./cqrs.md) — almost always paired together
- [saga-pattern](./saga-pattern.md) — for managing distributed events
