---
slug: race-condition
name: Race Condition
category: data-state
heat: 69
status: solid
born: "~1950s (electronics) / ~1970s (software)"
related:
  - defensive-programming
  - idempotent
  - optimistic-update
tags:
  - concurrency
  - bugs
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> two things happening at the same time, producing a wrong result — impossible to reproduce reliably, always shows up in production.

## real talk

A race condition happens when the correctness of your code depends on the precise timing or ordering of events that aren't actually guaranteed to happen in a particular order. Two requests try to update the same counter at the same time, both read the same starting value, both write back "+1", and one of those increments is silently lost. The code looks correct. It mostly works. Until it doesn't, under just the right (or wrong) timing.

These bugs are notoriously hard to reproduce on purpose because they depend on exact, often microsecond-level timing that's different every run. They show up far more often under real production load (lots of concurrent requests) than in local development (one request at a time, plenty of slack).

## used in the wild

> "the inventory count went negative. it's not a bug in the math, it's a race condition — two checkout requests read the stock count before either one had written the decrement."
>
> — engineer, diagnosing a bug that took three days to even reproduce

## why it matters

Race conditions are some of the hardest bugs to find because they're non-deterministic — the same code, the same inputs, can either work fine or fail catastrophically depending on timing you don't control.

## related terms

- [idempotent](../apis-communication/idempotent.md) — helps mitigate damage from duplicate concurrent requests
- [defensive-programming](../code-quality/defensive-programming.md) — locking and atomic operations are the usual fix
- [optimistic-update](./optimistic-update.md) — a place where race conditions commonly sneak in
