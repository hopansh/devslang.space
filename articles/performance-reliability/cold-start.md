---
slug: cold-start
name: Cold Start
category: performance-reliability
heat: 67
status: solid
born: "~2015 (serverless/Lambda era)"
related:
  - lazy-loading
tags:
  - infrastructure
  - serverless
  - performance
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> the first request to a serverless function is slow because it had to wake up first — fun to discover in production.

## real talk

Serverless functions (AWS Lambda, Cloudflare Workers, etc.) aren't running constantly in the background waiting for requests — they spin up on demand. If a function hasn't been called recently, the platform needs to provision a fresh execution environment before it can run your code, which adds noticeable latency (anywhere from tens of milliseconds to several seconds, depending on the runtime and package size). This is the "cold start." Once it's running, subsequent requests reuse that warm environment and are fast — until the platform decides to spin it down from inactivity, and the cycle repeats.

This is the classic serverless tradeoff: you don't pay for idle compute, but you occasionally pay for it in latency on the first request after a quiet period.

## used in the wild

> "the API is fast 95% of the time but occasionally takes 3 seconds for no obvious reason. that's a cold start — the function had been idle and needed to spin back up."
>
> — backend engineer, explaining intermittent latency that confused everyone at first

## why it matters

If your serverless functions handle latency-sensitive traffic, cold starts can cause real, visible delays for unlucky users. Strategies like "provisioned concurrency" or scheduled warm-up pings exist specifically to fight this.

## related terms

- [lazy-loading](../frontend-build/lazy-loading.md) — a different domain, same "wakes up slowly" theme
