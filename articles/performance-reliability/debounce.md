---
slug: debounce
name: Debounce
category: performance-reliability
heat: 72
status: solid
born: "~2000s"
related:
  - throttle
tags:
  - frontend
  - performance
  - javascript
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> wait until the user stops typing before firing — search boxes everywhere depend on this.

## real talk

Debouncing delays a function call until a certain amount of time has passed since the last time it was triggered. Type "h-e-l-l-o" into a search box, and without debouncing, you'd fire an API call on every single keystroke — 5 calls for one word. With debouncing (say, 300ms), the function only fires once, 300ms after you've stopped typing entirely.

Every time you reset the timer on a new keystroke, the previous pending call gets cancelled. The function only actually executes once things go quiet. This is the standard fix for search-as-you-type, autosave, and any input that triggers expensive work.

## used in the wild

> "the search is hitting the API on every keystroke. just debounce it by 300ms, nobody needs results mid-typing."
>
> — frontend engineer, fixing an unnecessarily chatty search box

## why it matters

Without debouncing, rapid user input can flood your backend with redundant requests, waste API quota, and create flickering, out-of-order results as multiple in-flight requests race each other.

## related terms

- [throttle](./throttle.md) — the closely related but functionally different cousin
