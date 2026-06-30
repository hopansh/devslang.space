---
slug: canary-deployment
name: Canary Deployment
category: devx-workflow
difficulty: s
difficulty_label: "S — Senior"
heat: 60
status: solid
born: "~2010s"
related:
  - feature-flag
  - blue-green-deployment
tags:
  - devops
  - deployment
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> roll out to a small percentage of traffic first — if the canary dies, you find out before everyone else does.

## real talk

Named after canaries used in coal mines as an early warning system for toxic gas — if the canary stopped singing, miners knew to get out before it was too late. Same idea in deployment: instead of rolling a new version out to 100% of servers or users at once, you route a small slice of traffic (often 1–5%) to the new version first, while everyone else stays on the stable version.

You watch error rates, latency, and key metrics on that small slice. If something's wrong, you catch it while only a small percentage of users were affected, and you roll back instantly. If it looks healthy, you gradually increase the percentage until the new version handles all traffic.

## used in the wild

> "we're canarying the new payment service at 5% of traffic for the next hour before we go to 100%. watching error rates closely."
>
> — SRE, during a deployment that's being done carefully on purpose

## why it matters

A canary deployment turns "deploy and hope" into "deploy and verify," limiting the blast radius of a bad release to a small fraction of users instead of everyone simultaneously.

## related terms

- [feature-flag](./feature-flag.md) — a code-level version of the same gradual-rollout philosophy
- [blue-green-deployment](./blue-green-deployment.md) — a different, instant-switch deployment strategy
