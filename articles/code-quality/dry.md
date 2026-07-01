---
slug: dry
name: DRY
category: code-quality
heat: 71
status: classic
born: "~1999 (The Pragmatic Programmer)"
related:
  - yagni
  - code-smell
tags:
  - code-quality
  - practices
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> don't repeat yourself — your reviewer will comment this on every PR with duplicate logic, whether it actually applies or not.

## real talk

DRY says every piece of knowledge in your system should exist in exactly one place. If the same business rule is written in three different files, you've got three places to remember to update when it changes — and you will forget one of them, guaranteed.

The catch nobody mentions in the original book: DRY is about knowledge, not about text that merely looks similar. Two functions that happen to have similar code but represent genuinely different concepts shouldn't be merged just because they look alike — that's premature abstraction, and it's arguably worse than the duplication it was trying to avoid.

## used in the wild

> "this validation logic is copy-pasted in four places. DRY this up before it diverges and nobody notices."
>
> — reviewer, leaving the most common comment in software history

## why it matters

Violating DRY means bugs get fixed in one place and silently persist in the copies everyone forgot about. But over-applying DRY to unrelated code creates tangled abstractions that are harder to change than the duplication ever was.

## related terms

- [yagni](./yagni.md) — the principle that keeps DRY from going too far
- [code-smell](./code-smell.md) — duplication is one of the most common smells
