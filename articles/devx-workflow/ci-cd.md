---
slug: ci-cd
name: CI/CD
category: devx-workflow
heat: 80
status: blazing
born: "~2000s"
related:
  - feature-flag
  - canary-deployment
  - linting
tags:
  - devops
  - workflow
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> continuous integration / delivery — the pipeline that runs your tests so you don't have to remember to.

## real talk

CI (Continuous Integration) means every code change automatically gets built and tested the moment it's pushed, catching bugs and conflicts before they ever reach a human reviewer. CD (Continuous Delivery/Deployment) extends that automation all the way to actually shipping the code to production, either automatically or with a single approval click.

Before CI/CD, deploying was a manual, often dreaded ritual — someone running scripts by hand at midnight, hoping nothing breaks. Now, a green checkmark on your PR usually means tests passed, linting passed, and the build succeeded, all without a human lifting a finger beyond writing the code and clicking merge.

## used in the wild

> "don't merge yet, the CI pipeline is still red. tests are failing on the staging build."
>
> — literally every PR thread on every team, daily

## why it matters

Without CI/CD, every deploy is a manual, error-prone, anxiety-inducing event. With it, shipping becomes routine and boring — which is exactly what you want from infrastructure.

## related terms

- [feature-flag](/article/feature-flag) — often used alongside CD to control what's actually live
- [canary-deployment](/article/canary-deployment) — a deployment strategy built on top of CD
- [linting](/article/linting) — usually one of the first steps in a CI pipeline
