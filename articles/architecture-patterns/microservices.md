---
slug: microservices
name: Microservices
category: architecture-patterns
heat: 77
status: solid
born: "~2010s"
related:
  - monolith
  - polyrepo
  - strangler-fig-pattern
  - saga-pattern
tags:
  - architecture
  - backend
  - distributed-systems
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> split the app into tiny independent services — then spend six months figuring out how they talk to each other.

## real talk

Instead of one big application, you break functionality into small services that each do one thing. User service. Payment service. Notification service. Each deploys independently. Each has its own database.

The pitch: resilience, independent scaling, team autonomy. The reality: distributed systems are hard. Network latency, partial failures, distributed transactions, and service discovery are now your daily life.

Half the companies that went microservices are quietly going back to a modular monolith. The other half haven't admitted it yet.

## used in the wild

> "auth is down because the user service can't reach the token service which depends on the session service. microservices all the way down."
>
> — on-call engineer, 3am

## why it matters

At massive scale with large teams, microservices enable independent deployments and clear ownership. For a 5-person startup, it's premature complexity that will slow you down for a year.

## related terms

- [monolith](./monolith.md) — where most things should start
- [strangler-fig-pattern](./strangler-fig-pattern.md) — how you migrate from a monolith
- [saga-pattern](./saga-pattern.md) — what you need when transactions span services
