---
slug: hexagonal-architecture
name: Hexagonal Architecture
category: architecture-patterns
heat: 41
status: deep-lore
born: "~2005 (Alistair Cockburn)"
related:
  - modular-monolith
  - cqrs
tags:
  - architecture
  - patterns
  - advanced
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> ports and adapters — sounds fancy. means "keep your core logic ignorant of the outside world."

## real talk

Your core business logic sits in the middle and knows nothing about HTTP, databases, or message queues. Everything external connects via "ports" (interfaces your core defines) and "adapters" (concrete implementations).

Swap PostgreSQL for DynamoDB? Write a new adapter. Test without a database? Inject a fake adapter. The core doesn't know or care. Also called Ports and Adapters. The hexagon is arbitrary — Cockburn said so himself.

## used in the wild

> "the service layer shouldn't import from the infrastructure layer. that's the whole point of hexagonal — the dependency arrow points inward."
>
> — architect, code review, 40-minute thread

## why it matters

Testability and replaceability. When business logic is decoupled from infrastructure, unit tests run without spinning up a database. External services can be swapped without touching the core.

## related terms

- [modular-monolith](./modular-monolith.md) — a good host for this pattern
- [cqrs](./cqrs.md) — often paired in complex domains
