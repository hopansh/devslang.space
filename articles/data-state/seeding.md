---
slug: seeding
name: Seeding
category: data-state
heat: 53
status: classic
born: "~1990s"
related:
  - migration
tags:
  - databases
  - devx
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> populating a database with initial or test data — nothing in development works without seed data, ever.

## real talk

Seeding means running a script to populate your database with a baseline set of data — sample users, test products, default categories — so you have something to actually look at and test against when developing locally. Without seed data, every local environment starts as an empty void where nothing renders, no list has items, and every screen is technically "working" but completely untestable.

Good seed data mimics realistic scenarios: edge cases, varied data shapes, enough volume to actually notice performance problems before production does. Lazy seed data is three rows that all look suspiciously similar and never reveal a single bug that real data eventually will.

## used in the wild

> "i can't test the pagination because the seed script only creates 3 users. we need at least 50 to actually see if this works."
>
> — engineer, discovering the seed data was too sparse to catch an obvious bug

## why it matters

Good seeding catches bugs before they ever reach a real user. Sparse, lazy seeding means your local environment looks fine right up until production reveals the same bug to actual customers.

## related terms

- [migration](./migration.md) — usually runs right before seeding, to create the schema first
