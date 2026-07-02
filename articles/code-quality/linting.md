---
slug: linting
name: Linting
category: code-quality
heat: 58
status: classic
born: "~1978 (the original C lint tool)"
related:
  - code-smell
  - ci-cd
tags:
  - code-quality
  - tooling
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> a robot that yells at you for bad style before a human gets the chance to.

## real talk

A linter is a tool that statically analyzes your code and flags style violations, suspicious patterns, and likely bugs — unused variables, missing semicolons, inconsistent naming, code that's technically valid but probably a mistake. ESLint for JavaScript, Pylint for Python, RuboCop for Ruby.

Linting catches the boring stuff so human reviewers can focus on actual logic and architecture instead of arguing about tabs versus spaces in every PR. Most teams run linters automatically in CI, which means your PR fails the build before a human even has to comment on your missing semicolon.

## used in the wild

> "the lint rule caught an unused import that was actually masking a typo in the variable name. small win, but it would've been a silent bug otherwise."
>
> — engineer, grateful to a robot for once

## why it matters

Linting is one of the cheapest forms of automated code quality enforcement. It won't catch logic bugs, but it eliminates an entire category of style debates and small mistakes before they ever reach a human reviewer.

## related terms

- [code-smell](/article/code-smell) — linters catch some smells automatically
- [ci-cd](/article/ci-cd) — where linting usually runs
