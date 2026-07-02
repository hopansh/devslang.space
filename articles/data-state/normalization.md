---
slug: normalization
name: Normalization
category: data-state
heat: 55
status: classic
born: "~1970 (Edgar F. Codd)"
related:
  - denormalization
  - n-plus-one-problem
tags:
  - databases
  - design
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> structuring your database so no data is duplicated — then you denormalize for performance and feel slightly dirty about it.

## real talk

Normalization is the practice of organizing your database schema so each piece of data lives in exactly one place, related via foreign keys instead of being copy-pasted across tables. Store a user's name once in a `users` table, reference it by ID from `orders`, `comments`, wherever it's needed — instead of duplicating the name everywhere it appears.

This keeps data consistent: change the name once, it's correct everywhere. The cost is that reading related data often requires JOINs across multiple tables, which is slower than reading from one denormalized table that already has everything pre-combined. Database courses teach normalization religiously (1NF, 2NF, 3NF) and then real-world performance work often involves deliberately undoing some of it.

## used in the wild

> "the schema is fully normalized to 3NF, which is correct, and also why this dashboard query joins nine tables and takes four seconds. we might need to denormalize part of this."
>
> — backend engineer, hitting the normalization-vs-performance tradeoff directly

## why it matters

Normalization is the right default for data integrity. Knowing when and where to strategically break it for performance is a sign of someone who's actually run a database under real load, not just in a textbook.

## related terms

- [denormalization](/article/denormalization) — the deliberate, pragmatic opposite
- [n-plus-one-problem](/article/n-plus-one-problem) — a common cost of fully normalized schemas
