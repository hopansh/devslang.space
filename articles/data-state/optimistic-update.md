---
slug: optimistic-update
name: Optimistic Update
category: data-state
heat: 66
status: solid
born: "~2010s"
related:
  - eventual-consistency
  - race-condition
tags:
  - frontend
  - state
  - ux
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> update the UI before the server confirms — hope for the best, roll back if not.

## real talk

An optimistic update means you immediately update the UI to reflect an action — liking a post, adding an item to a cart — before the server has actually confirmed it succeeded. The app assumes success because most of the time, it will succeed. If the request fails, you roll the UI back and (ideally) show an error.

This is why liking a tweet feels instant instead of having a half-second lag while you wait for a network round-trip. The tricky part is handling the failure case gracefully — if you don't roll back properly, the UI shows a like that was never actually recorded server-side, and the user has no idea their action silently failed.

## used in the wild

> "the like button updates instantly but if the request fails we're not rolling back the UI state. users think they liked something that never actually saved."
>
> — frontend engineer, finding a subtle but real bug

## why it matters

Optimistic updates are the difference between an app that feels instant and one that feels laggy, but only if the rollback logic is actually correct. Get it wrong and you create a confusing gap between what the UI shows and what's actually true server-side.

## related terms

- [eventual-consistency](./eventual-consistency.md) — a related "things will catch up" concept
- [race-condition](./race-condition.md) — a risk if multiple optimistic updates overlap
