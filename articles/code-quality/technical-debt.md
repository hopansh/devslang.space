---
slug: technical-debt
name: Technical Debt
category: code-quality
heat: 78
status: blazing
born: "~1992 (Ward Cunningham)"
related:
  - refactoring
  - mvp
  - code-smell
tags:
  - code-quality
  - culture
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> shortcuts taken now that make future you miserable — always described as "temporary."

## real talk

Technical debt is the implied cost of shipping the fast-but-not-ideal solution instead of the slower-but-correct one. Like financial debt, you eventually pay interest: every future change in that area takes longer because of the shortcut. Sometimes that's a fine trade — ship now, fix later. Sometimes "later" never comes and the codebase quietly becomes unmaintainable.

The phrase gets overused as a catch-all excuse for anything messy, which dilutes its actual meaning. Real technical debt is a conscious tradeoff someone made under time pressure. Code that's just bad because nobody cared isn't debt, it's negligence with better PR.

## used in the wild

> "we'll just hardcode this for the demo, it's technical debt, we'll fix it after launch."
>
> — every team, before every demo, never fixed after launch

## why it matters

Unmanaged technical debt compounds. A codebase with too much of it becomes slow to work in, scares away new hires, and eventually requires the dreaded full rewrite — which has its own well-documented failure rate.

## related terms

- [refactoring](/article/refactoring) — how you pay debt down
- [mvp](/article/mvp) — often the origin of intentional debt
