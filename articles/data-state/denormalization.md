---
slug: denormalization
name: Denormalization
category: data-state
heat: 58
status: solid
born: "~1990s"
related:
  - normalization
  - cqrs
tags:
  - databases
  - performance
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> intentionally duplicate data for read speed — senior devs call this "pragmatic," not "wrong."

## real talk

Denormalization means deliberately storing redundant data to avoid expensive joins at read time. Instead of looking up a user's name via a foreign key every time you display a comment, you store the username directly on the comment row too. Yes, that's duplication. Yes, normalization theory says don't do that. And yes, your dashboard query now runs in 50ms instead of 2 seconds.

The cost is consistency risk: if the user changes their name, you now have to update it in every place it was denormalized, or accept that the duplicate copies might drift out of sync temporarily. This is a deliberate, informed tradeoff — not laziness — when done by someone who understands exactly what they're giving up.

## used in the wild

> "yeah we're storing the product name on the order line item too, even though it's duplicated from the products table. if the product gets renamed later, we want the old order to still show what it was called at purchase time. that's intentional denormalization."
>
> — senior engineer, explaining why "duplicate data" was actually the correct call

## why it matters

Denormalization is one of the most reliable ways to fix read performance at scale. The skill is knowing exactly which duplication is safe and useful versus which duplication will quietly corrupt your data over time.

## related terms

- [normalization](/article/normalization) — the principle being deliberately broken
- [cqrs](/article/cqrs) — denormalized read models taken to an architectural extreme
