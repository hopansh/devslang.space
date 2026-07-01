---
slug: cyclomatic-complexity
name: Cyclomatic Complexity
category: code-quality
heat: 45
status: solid
born: "~1976 (Thomas McCabe)"
related:
  - code-smell
  - refactoring
tags:
  - code-quality
  - metrics
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> how many distinct paths through your function — high number means your reviewer is internally screaming.

## real talk

Cyclomatic complexity is a number that measures how many independent paths exist through a piece of code, based on branching: if statements, loops, switch cases, each adds to the count. A function with no branches has complexity 1. A function with ten nested conditionals might have complexity 15+, meaning there are 15 distinct ways execution could flow through it — and 15 distinct scenarios you'd need to test to cover them all.

Most linters will flag a function once it crosses a threshold (often 10) and suggest breaking it up. It's not a perfect metric — it doesn't capture readability directly — but a high number reliably correlates with "this is going to be hard to test and hard to change safely."

## used in the wild

> "the linter flagged this function at complexity 23. that's not a code review comment, that's a cry for help."
>
> — engineer, opening a function nobody wants to touch

## why it matters

High cyclomatic complexity means more bugs hide more easily and more test cases are needed to actually cover the logic. It's one of the few code quality metrics you can actually automate and enforce in CI.

## related terms

- [code-smell](./code-smell.md) — high complexity is a textbook smell
- [refactoring](./refactoring.md) — the usual fix
