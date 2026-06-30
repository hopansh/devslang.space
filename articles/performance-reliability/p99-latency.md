---
slug: p99-latency
name: P99 Latency
category: performance-reliability
difficulty: s
difficulty_label: "S — Senior"
heat: 61
status: solid
born: "~2000s"
related:
  - cold-start
tags:
  - performance
  - metrics
  - observability
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> the 99th percentile response time — the slow tail real users actually experience, not the comforting average.

## real talk

If you measure average response time, you can have a system that's "fast on average" while a meaningful chunk of real users are having a genuinely bad time. Averages hide outliers. P99 latency tells you: 99% of requests are faster than this number, meaning 1% are slower — and at any real scale, 1% is a lot of actual people having a bad experience.

This is why serious systems track p50 (median), p95, and p99 instead of just averages. A system with 100ms average but 5-second p99 has a real problem hiding behind a comforting-looking dashboard number. Engineers who only look at averages are often missing the exact users complaining the loudest.

## used in the wild

> "the average response time looks fine at 80ms, but the p99 is 4.2 seconds. that's not noise, that's a real subset of requests timing out something downstream."
>
> — SRE, pointing at the metric that actually matters

## why it matters

Optimizing for average latency while ignoring the tail means you can ship something that looks great on a dashboard while real users in the tail are having a miserable, slow experience that the average completely hides.

## related terms

- [cold-start](./cold-start.md) — a common cause of bad tail latency in serverless systems
