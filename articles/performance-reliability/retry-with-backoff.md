---
slug: retry-with-backoff
name: Retry with Backoff
category: performance-reliability
difficulty: m
difficulty_label: "M — Mid"
heat: 64
status: solid
born: "~1990s (networking)"
related:
  - idempotent
  - circuit-breaker
  - rate-limiting
tags:
  - reliability
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> try again, but wait a bit longer each time — exponential backoff is the fancy version everyone name-drops.

## real talk

When a request fails — a timeout, a temporary network blip, a 503 from an overloaded server — the naive response is to immediately retry. The problem: if everyone retries immediately and simultaneously, you create a thundering herd that makes the overloaded server even worse. Retry with backoff means you wait progressively longer between attempts: 1 second, then 2, then 4, then 8 (exponential backoff), often with some random jitter added so retries from different clients don't all land at the exact same moment.

This is standard practice in any client calling an external API and is built into most good HTTP client libraries and cloud SDKs by default, though plenty of homegrown retry loops skip it entirely and just hammer the failing endpoint repeatedly.

## used in the wild

> "the retry loop has no backoff, it's hitting the failing API 10 times a second with zero delay. that's not retrying gracefully, that's a self-inflicted DDoS."
>
> — on-call engineer, fixing the actual cause of an outage their own client made worse

## why it matters

Retrying without backoff during an outage can turn a temporary blip into a sustained outage by overwhelming an already-struggling service right when it's trying to recover.

## related terms

- [idempotent](../apis-communication/idempotent.md) — required for retries to be safe at all
- [circuit-breaker](./circuit-breaker.md) — the next level of protection when retries aren't enough
