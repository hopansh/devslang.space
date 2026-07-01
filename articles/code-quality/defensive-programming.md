---
slug: defensive-programming
name: Defensive Programming
category: code-quality
heat: 52
status: solid
born: "~1970s"
related:
  - graceful-degradation
  - race-condition
tags:
  - code-quality
  - practices
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> assume everything will fail, handle it anyway — paranoia as a design philosophy.

## real talk

Defensive programming means writing code that anticipates things going wrong: null inputs, malformed data, network calls that time out, users who somehow find a way to submit a form with negative quantities. Instead of assuming the happy path, you guard against the unhappy ones — validating inputs, checking for null before dereferencing, handling exceptions explicitly instead of letting them crash the whole process.

It's a spectrum. Too little defensive code and your app crashes the first time reality deviates from your assumptions. Too much and every function is buried under so many guard clauses that the actual logic is hard to find. Senior engineers tend to be defensive at system boundaries (user input, external APIs, network calls) and trusting internally, where invariants are already enforced.

## used in the wild

> "what happens if this API returns null instead of an empty array? did we handle that? no? add a guard clause before this ships."
>
> — reviewer, asking the question that prevents a production crash

## why it matters

Production traffic finds every edge case you didn't think of, eventually. Defensive programming is how you survive contact with real users instead of getting paged at 2am for a null pointer exception.

## related terms

- [graceful-degradation](../performance-reliability/graceful-degradation.md) — defensive programming applied to system-wide failure
- [race-condition](../data-state/race-condition.md) — one of the things defensive code should account for
