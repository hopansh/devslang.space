---
slug: migration
name: Migration
category: data-state
heat: 65
status: classic
born: "~1990s"
related:
  - seeding
  - backward-compatible
tags:
  - databases
  - devx
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> a scripted change to your DB schema — run it wrong and lose data, no pressure at all.

## real talk

A database migration is a version-controlled script that makes a structural change to your database: adding a column, creating a table, changing a data type. Migrations let you evolve your schema over time in a way that's tracked, repeatable, and applies the same way across every environment — your laptop, staging, and production.

The dangerous part isn't writing migrations, it's running destructive ones (dropping a column, changing a type in a way that loses precision) against production data with no rollback plan. Good teams always test migrations on a copy of production data first and have a rollback migration ready before running anything irreversible against the real thing.

## used in the wild

> "did the migration run on staging first? no? okay, please don't run that against prod yet, that column drop is irreversible if anything goes wrong."
>
> — DBA or senior engineer, preventing a very bad afternoon

## why it matters

A botched migration is one of the few mistakes in software that can cause genuine, permanent data loss. Treating migrations casually is how "oops" turns into an incident report with executives on the call.

## related terms

- [seeding](./seeding.md) — often run right after a migration to populate test data
- [backward-compatible](../apis-communication/backward-compatible.md) — migrations should ideally preserve this during rollout
