---
slug: rubber-stamping
name: Rubber Stamping
category: culture-career
difficulty: m
difficulty_label: "M — Mid"
heat: 56
status: solid
born: "~1990s"
related:
  - bikeshedding
  - hippo-effect
tags:
  - culture
  - code-review
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> approving PRs without actually reading them — a code review in name only, a real bug factory in practice.

## real talk

Rubber stamping means clicking "approve" on a pull request without genuinely reviewing the code — skimming the diff for a few seconds, trusting the author, or just wanting to clear the review queue and move on. It looks identical to real review from the outside (there's an approval, the PR merges), but it provides zero actual quality assurance.

This happens for understandable, very human reasons: review fatigue, trusting a colleague's reputation a little too much, time pressure, or reviewing a PR that's genuinely too large to meaningfully evaluate in any reasonable amount of time. The danger is that it creates a false sense of security — everyone assumes code review is catching problems, when in practice it's sometimes catching nothing at all.

## used in the wild

> "the bug shipped straight through a PR with two approvals. turns out both reviewers rubber stamped it, neither actually read past the first file in the diff."
>
> — engineering manager, root-causing a preventable incident

## why it matters

Rubber stamping defeats the entire purpose of code review while looking, on paper, exactly like real review happened. It's a quiet, invisible failure mode until something genuinely bad slips through it.

## related terms

- [bikeshedding](./bikeshedding.md) — the opposite failure mode, too much scrutiny on the wrong thing
- [hippo-effect](./hippo-effect.md) — a related way surface-level agreement substitutes for real evaluation
