---
slug: strangler-fig-pattern
name: Strangler Fig Pattern
category: architecture-patterns
heat: 53
status: solid
born: "~2004 (Martin Fowler)"
related:
  - monolith
  - microservices
tags:
  - architecture
  - migration
  - patterns
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> slowly replace a legacy system by growing new code around it — named after a tree that does exactly this to its host.

## real talk

The strangler fig grows around an existing tree until the host dies and the fig is all that's left. Same idea for software migration. You don't rewrite from scratch. You intercept requests at the edge, route new functionality to new services, and gradually strangle the old system until it's completely replaced.

The old system keeps running while the new one grows. No big-bang cutover. No heroic all-hands weekend migration.

## used in the wild

> "we're not rewriting checkout from scratch. strangler fig — new orders go to the new service, old system stays up the whole time."
>
> — lead architect, quarterly planning

## why it matters

Big-bang rewrites fail more often than they succeed. Strangler fig lets you migrate incrementally and keep the system live throughout. Slower and more boring than a full rewrite. That's why it works.

## related terms

- [monolith](/article/monolith) — typically what's being strangled
- [microservices](/article/microservices) — often what's replacing it
