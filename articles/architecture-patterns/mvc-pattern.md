---
slug: mvc-pattern
name: MVC Pattern
category: architecture-patterns
heat: 68
status: classic
born: "~1970s (mainstream web ~2000s)"
related:
  - monolith
  - mvp
tags:
  - architecture
  - backend
  - frontend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> model, view, controller — the holy trinity nobody draws correctly on a whiteboard.

## real talk

Three boxes. Model handles data and business logic. View is what the user sees. Controller sits in the middle taking orders from the view and telling the model what to do.

Every framework tutorial starts here. Rails, Django, Laravel, Spring — all MVC at heart. You'll also hear MVC used loosely to describe anything with "separation of concerns" even when it's not technically MVC. Don't correct them in the meeting.

## used in the wild

> "this component is doing too much. model logic doesn't belong in the view."
>
> — senior dev, your first PR review, probably

## why it matters

If you don't understand MVC, you'll write controllers that are 800 lines long and call the database directly from the view. Learn the pattern before a senior dev rewrites your work and you feel bad.

## related terms

- [monolith](./monolith.md) — MVC apps are often monolithic
- [mvp](./mvp.md) — different kind of MVP, but you'll confuse them once
