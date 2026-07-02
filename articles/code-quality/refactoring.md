---
slug: refactoring
name: Refactoring
category: code-quality
heat: 60
status: classic
born: "~1990s"
related:
  - technical-debt
  - code-smell
tags:
  - code-quality
  - practices
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> changing how code is written without changing what it does — in theory.

## real talk

Refactoring means restructuring existing code without altering its external behavior. Same inputs, same outputs, but cleaner internals. Extracting a function, renaming a variable to something that actually makes sense, splitting a giant function into smaller ones — all refactoring.

The "in theory" part matters because refactoring without tests is just "changing code and hoping." True refactoring requires a safety net — tests that confirm behavior didn't change — otherwise you're just rewriting blind and calling it cleanup.

## used in the wild

> "this PR says 'refactor' but it also changes the response format. that's not a refactor, that's a feature change with extra steps."
>
> — reviewer, catching scope creep disguised as cleanup

## why it matters

Codebases rot without regular refactoring. But "refactor" is also sometimes used as cover for sneaking in unrelated changes, which makes PRs harder to review and riskier to merge.

## related terms

- [technical-debt](/article/technical-debt) — what refactoring pays down
- [code-smell](/article/code-smell) — the signal that triggers refactoring
