---
slug: circuit-breaker
name: Circuit Breaker
category: performance-reliability
difficulty: s
difficulty_label: "S — Senior"
heat: 56
status: solid
born: "~2007 (Michael Nygard, Release It!)"
related:
  - rate-limiting
  - graceful-degradation
  - retry-with-backoff
tags:
  - reliability
  - distributed-systems
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> stop calling a failing service before it takes everything else down with it — borrowed directly from electrical engineering.

## real talk

Named after the literal electrical circuit breaker that trips to prevent a power surge from frying your whole house. In software, if Service A keeps calling Service B and Service B is failing or timing out, every one of those calls wastes time and threads waiting on a doomed request. A circuit breaker detects repeated failures and "trips" — stops attempting calls to B entirely for a cooldown period, failing fast instead, then cautiously tests if B has recovered before resuming normal calls.

This prevents a single struggling downstream service from cascading into a system-wide outage, because the calling services stop wasting resources on requests that are statistically very likely to fail anyway.

## used in the wild

> "the payment service is degraded and every checkout request is timing out waiting on it for 30 seconds before failing. we need a circuit breaker so we fail fast instead of stacking up timeouts."
>
> — SRE, during an incident that's about to get worse without intervention

## why it matters

Without a circuit breaker, one slow or failing dependency can exhaust connection pools and threads across your entire system, turning a single service's problem into a cascading, system-wide outage.

## related terms

- [retry-with-backoff](./retry-with-backoff.md) — often paired with circuit breakers
- [graceful-degradation](./graceful-degradation.md) — what happens after the circuit trips
