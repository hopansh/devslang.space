---
slug: pagination
name: Pagination
category: apis-communication
difficulty: n
difficulty_label: "N — Newbie"
heat: 66
status: classic
born: "~1990s"
related:
  - n-plus-one-problem
tags:
  - apis
  - backend
  - databases
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> don't return all 10 million rows at once — cursor vs offset is a whole religious debate.

## real talk

Pagination breaks a large result set into pages so your API doesn't try to serialize a million rows into one JSON response and crash everything involved, including the client trying to render it.

Offset pagination (`?page=3&limit=20`) is simple but gets slow and inconsistent on large, frequently-changing datasets — rows shift while you're paging through them. Cursor pagination (`?after=abc123`) is more complex to implement but stays consistent and fast at scale, which is why every serious API (Stripe, GitHub, Twitter) uses cursors instead of page numbers.

## used in the wild

> "we're using offset pagination and the dashboard is timing out on page 400. switch to cursor-based, it'll actually scale."
>
> — backend engineer, three months into realizing offset doesn't scale

## why it matters

Get pagination wrong and your API either falls over under load or returns inconsistent results when data changes mid-scroll. It's an unglamorous decision that quietly determines whether your API survives production traffic.

## related terms

- [n-plus-one-problem](../data-state/n-plus-one-problem.md) — another data-fetching trap
