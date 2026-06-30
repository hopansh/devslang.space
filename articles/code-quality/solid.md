---
slug: solid
name: SOLID
category: code-quality
difficulty: s
difficulty_label: "S — Senior"
heat: 54
status: classic
born: "~2000 (Robert C. Martin)"
related:
  - hexagonal-architecture
  - code-smell
tags:
  - code-quality
  - oop
  - practices
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> five principles — everyone knows the acronym, nobody fully agrees on the application.

## real talk

SOLID is five object-oriented design principles: Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion. Every CS bootcamp teaches the acronym. Far fewer people can explain Liskov substitution correctly without looking it up — including people who've used the term in interviews to sound senior.

In practice, SOLID gets invoked most often as shorthand for "this class is doing too much" (single responsibility) or "stop hardcoding that dependency" (dependency inversion). The other three principles show up far less in day-to-day conversation but matter a lot in framework and library design.

## used in the wild

> "this class handles validation, persistence, and email notifications. that's a single responsibility violation if I've ever seen one."
>
> — senior dev, code review, citing the one SOLID letter everyone actually remembers

## why it matters

SOLID isn't gospel, and rigid adherence to all five letters in every context creates its own kind of over-engineered mess. But understanding the principles gives you vocabulary to explain why some code feels fragile, even when you can't immediately say why.

## related terms

- [hexagonal-architecture](../architecture-patterns/hexagonal-architecture.md) — built on dependency inversion
- [code-smell](./code-smell.md) — SOLID violations often show up as smells
