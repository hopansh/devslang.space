---
slug: orm
name: ORM
category: data-state
difficulty: n
difficulty_label: "N — Newbie"
heat: 70
status: classic
born: "~1990s"
related:
  - n-plus-one-problem
  - migration
tags:
  - databases
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> talk to your database in code, not SQL — until you hit one weird query and write raw SQL anyway.

## real talk

An ORM (Object-Relational Mapper) lets you interact with your database using your programming language's normal objects and methods instead of writing raw SQL strings. Instead of `SELECT * FROM users WHERE id = 5`, you write `User.find(5)`. Prisma, TypeORM, Sequelize, ActiveRecord — all ORMs.

This is genuinely great for 90% of queries: faster to write, type-safe in many cases, harder to accidentally introduce SQL injection. The other 10% — a complex aggregation, a performance-critical query, something the ORM's query builder just can't express cleanly — and you end up writing raw SQL anyway, often wrapped awkwardly inside the ORM's "escape hatch" for exactly this situation.

## used in the wild

> "i tried for an hour to write this aggregation through the ORM's query builder. giving up, writing raw SQL, it's 4 lines instead of 40 lines of chained methods."
>
> — backend engineer, accepting reality

## why it matters

ORMs dramatically speed up everyday development but can hide what's actually happening at the database level — which is exactly how N+1 problems sneak in unnoticed.

## related terms

- [n-plus-one-problem](./n-plus-one-problem.md) — the classic ORM-induced performance trap
- [migration](./migration.md) — most ORMs also manage your schema migrations
