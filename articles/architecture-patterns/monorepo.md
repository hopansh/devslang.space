---
slug: monorepo
name: Monorepo
category: architecture-patterns
heat: 74
status: solid
born: "~2010s (popularised by Google/Meta)"
related:
  - polyrepo
  - ci-cd
  - microservices
tags:
  - architecture
  - devx
  - tooling
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> one git repo for everything — frontend, backend, packages, infra. sounds simple. is not.

## real talk

Instead of separate repos for your frontend, backend, and shared libraries, you jam everything into one. Google does this. Meta does this. Your startup does this because someone watched a Turborepo talk and got excited.

Upside: one PR can change frontend and backend together. Shared code is actually shared. No version mismatch hell between packages.

Downside: CI gets slow. Git gets heavy. You'll spend a week configuring tooling just to get back to where you were. Then someone will suggest splitting into a polyrepo and the cycle restarts.

## used in the wild

> "we're migrating to a monorepo. yes i know it's going to take two sprints. yes it'll be worth it. no i haven't done this before."
>
> — tech lead, Slack message, 10pm

## why it matters

At small scale it doesn't matter. At medium scale, polyrepos create version drift and coordination hell. At large scale, monorepos have tooling overhead but atomic changes across services become possible.

## related terms

- [polyrepo](/article/polyrepo) — the other side of the debate
- [ci-cd](/article/ci-cd) — monorepos make CI interesting
