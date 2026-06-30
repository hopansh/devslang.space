---
slug: saga-pattern
name: Saga Pattern
category: architecture-patterns
difficulty: x
difficulty_label: "X — 10x"
heat: 39
status: deep-lore
born: "~1987 (paper) / ~2015 (microservices context)"
related:
  - event-sourcing
  - microservices
tags:
  - architecture
  - distributed-systems
  - patterns
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> managing distributed transactions without a global lock — it's as fun as it sounds.

## real talk

In a monolith, transactions are easy — one database, ACID, done. In microservices, a "transaction" spans five services with no global lock. A saga is a sequence of local transactions, each publishing an event that triggers the next. If something fails, compensating transactions run in reverse to undo the damage.

Two flavours: choreography (services react to events independently) and orchestration (a central saga orchestrator directs each step). Orchestration is easier to reason about. Choreography is easier to scale.

## used in the wild

> "payment went through but inventory reservation failed. we need a compensating transaction to refund. welcome to saga hell."
>
> — senior engineer, incident channel

## why it matters

If you're in microservices and money moves between services, you need a strategy for partial failures. Saga is the dominant pattern. Understand it before you're debugging a half-completed order at 2am.

## related terms

- [event-sourcing](./event-sourcing.md) — sagas are often event-driven
- [microservices](./microservices.md) — where sagas become necessary
