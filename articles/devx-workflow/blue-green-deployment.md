---
slug: blue-green-deployment
name: Blue-Green Deployment
category: devx-workflow
difficulty: s
difficulty_label: "S — Senior"
heat: 51
status: solid
born: "~2010 (popularized by ThoughtWorks)"
related:
  - canary-deployment
tags:
  - devops
  - deployment
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> two identical production environments — switch traffic between them, get instant rollback for free.

## real talk

You maintain two complete, identical production environments: "blue" (currently live, serving all real traffic) and "green" (idle, where you deploy the new version). You deploy and fully test the new version on green while blue keeps serving real users, completely unaffected. Once green checks out, you flip a router or load balancer to send traffic to green instead of blue. Blue is now idle and becomes your instant rollback target if anything goes wrong with green.

The appeal is the instant, clean switch — no gradual rollout, no in-between state, and rollback is just flipping the switch back, not a re-deploy under pressure. The cost is running two full production environments simultaneously, which isn't cheap.

## used in the wild

> "if the green environment looks healthy after the smoke tests, we flip the router. if anything goes wrong in the first hour, we flip straight back to blue, no redeploy needed."
>
> — platform engineer, explaining the safety net before a release

## why it matters

Blue-green gives you the fastest possible rollback path of any deployment strategy — a router flip instead of a redeploy — at the cost of running double the infrastructure during the transition.

## related terms

- [canary-deployment](./canary-deployment.md) — a gradual alternative to blue-green's instant switch
