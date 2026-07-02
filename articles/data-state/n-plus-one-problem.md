---
slug: n-plus-one-problem
name: N+1 Problem
category: data-state
heat: 75
status: solid
born: "~2000s (ORM era)"
related:
  - pagination
  - normalization
tags:
  - databases
  - performance
  - orm
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> fetch 1 list, then N extra queries for each item — the ORM's favorite gift to you, completely free of charge.

## real talk

You fetch a list of 50 blog posts (1 query). Then, for each post, you fetch its author (50 more queries). Congratulations, you just ran 51 queries to display one page, when a single JOIN could've fetched everything in one. This is the N+1 problem, and it's one of the most common performance bugs in any app using an ORM.

It's invisible in development because your test database has 5 rows and nobody notices 6 queries firing instead of 1. It becomes a five-second page load the moment production has real data volume. The fix is usually eager loading — telling your ORM upfront "also fetch the related author data in the same query" instead of letting it lazily fetch one row at a time.

## used in the wild

> "the dashboard takes 8 seconds to load because we're doing an N+1 — fetching all orders then querying the customer for each one separately. eager load it."
>
> — backend engineer, finding the obvious cause of a slow endpoint

## why it matters

N+1 queries are nearly invisible until you have real data volume, and then they're one of the single most common causes of "why is this page so slow" tickets in any backend system using an ORM.

## related terms

- [pagination](/article/pagination) — doesn't fix N+1, but limits its blast radius
- [normalization](/article/normalization) — the database design choice that makes joins necessary in the first place
