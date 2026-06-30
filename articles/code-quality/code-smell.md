---
slug: code-smell
name: Code Smell
category: code-quality
difficulty: m
difficulty_label: "M — Mid"
heat: 62
status: solid
born: "~1990s (Kent Beck)"
related:
  - refactoring
  - cyclomatic-complexity
  - spaghetti-code
tags:
  - code-quality
  - practices
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> not a bug, but something feels deeply wrong — like a function with 400 lines and 12 parameters.

## real talk

A code smell isn't a bug — the code works fine right now. It's a signal that something about how it's structured will cause pain later. Classic smells: a function doing way too much, deeply nested if statements, duplicate logic copy-pasted in five places, a class that knows about every other class in the system.

The term is deliberately vague on purpose — it's a heuristic, not a rule. Two senior devs can disagree on whether something is a smell, and that disagreement is usually a useful conversation, not a problem.

## used in the wild

> "this function has six levels of nested conditionals. it works, but it's a code smell — someone's going to break it trying to add a seventh case."
>
> — reviewer, flagging something that isn't technically wrong, just ominous

## why it matters

Recognizing code smells early lets you fix structural problems before they calcify into something nobody dares touch. Ignoring them is how you end up with spaghetti code.

## related terms

- [refactoring](./refactoring.md) — the cure for a smell
- [cyclomatic-complexity](./cyclomatic-complexity.md) — a way to measure one specific smell
- [spaghetti-code](../culture-career/spaghetti-code.md) — what smells become if ignored long enough
