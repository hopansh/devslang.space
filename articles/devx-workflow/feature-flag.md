---
slug: feature-flag
name: Feature Flag
category: devx-workflow
heat: 70
status: solid
born: "~2010s"
related:
  - canary-deployment
  - ci-cd
tags:
  - devops
  - workflow
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> ship code but keep it switched off with a toggle — turn it on for 1% of users first, see what happens.

## real talk

A feature flag is a runtime toggle that controls whether a piece of code is actually active, separate from whether it's deployed. You can merge and deploy a half-finished feature to production with its flag turned off — the code exists, it's just not running for anyone. When it's ready, you flip the flag, often gradually: 1% of users, then 10%, then everyone, watching metrics the whole way.

This decouples deployment from release, which is a genuinely powerful idea. You can deploy constantly (low risk, small changes) while controlling exactly when and to whom a feature actually becomes visible (separate, careful decision).

## used in the wild

> "the new checkout flow is already deployed, it's just behind a feature flag at 0% right now. we'll ramp it up gradually next week once QA signs off."
>
> — engineer, explaining why "deployed" doesn't mean "live for everyone"

## why it matters

Feature flags let you de-risk launches by controlling exposure gradually, and they give you an instant kill switch if something goes wrong — flip the flag off instead of doing an emergency rollback deploy.

## related terms

- [canary-deployment](/article/canary-deployment) — a similar gradual-rollout idea, at the infrastructure level instead of code level
- [ci-cd](/article/ci-cd) — feature flags are commonly paired with continuous deployment
