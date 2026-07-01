---
slug: rate-limiting
name: Rate Limiting
category: apis-communication
heat: 73
status: solid
born: "~1990s"
related:
  - circuit-breaker
  - retry-with-backoff
tags:
  - apis
  - reliability
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> slow down callers before they melt your server — 429 Too Many Requests is the polite version of "stop it."

## real talk

Rate limiting caps how many requests a client can make in a given time window. Without it, one buggy script, one aggressive scraper, or one misconfigured retry loop can take down your entire API for everyone. With it, that one bad actor just gets a 429 response and everyone else keeps working fine.

Common strategies: fixed window (reset every minute), sliding window (smoother but more compute), and token bucket (allows bursts but caps sustained rate). Most APIs you use daily — GitHub, Stripe, Twitter — rate limit you and tell you exactly how close you are via response headers.

## used in the wild

> "someone's retry loop hit us 50,000 times in a minute with no backoff. we need rate limiting on this endpoint before it happens again."
>
> — on-call engineer, post-incident, very tired

## why it matters

Without rate limiting, a single misbehaving client can degrade service for every other client. It's a basic defense mechanism, not an optional nice-to-have.

## related terms

- [circuit-breaker](../performance-reliability/circuit-breaker.md) — a related protective pattern
- [retry-with-backoff](../performance-reliability/retry-with-backoff.md) — what well-behaved clients should do when rate limited
