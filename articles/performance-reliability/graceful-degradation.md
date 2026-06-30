---
slug: graceful-degradation
name: Graceful Degradation
category: performance-reliability
difficulty: m
difficulty_label: "M — Mid"
heat: 59
status: solid
born: "~1990s"
related:
  - circuit-breaker
  - defensive-programming
tags:
  - reliability
  - backend
  - ux
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> when things break, fail in a way that's still useful — the opposite of a blank 500 error page.

## real talk

Graceful degradation means designing your system so that when a component fails, the rest of the app keeps working in a reduced but still useful state, instead of the entire experience collapsing. If your recommendation engine goes down, show the page without recommendations instead of a 500 error for the whole product page. If a non-critical analytics call fails, log it and move on instead of blocking the user's actual checkout.

The opposite — letting one failing dependency take down an entire page or request — is shockingly common, usually because a non-essential feature was wired in without any failure isolation, so its failure becomes everyone's failure.

## used in the wild

> "the entire product page is throwing a 500 because the recommendations widget's API call failed. recommendations aren't essential, wrap that call so it fails silently and the rest of the page still renders."
>
> — engineer, fixing an unnecessary single point of failure

## why it matters

A non-critical feature failing should never take down a critical one. Graceful degradation is the design discipline that prevents minor outages from becoming major ones.

## related terms

- [circuit-breaker](./circuit-breaker.md) — a mechanism that enables graceful degradation
- [defensive-programming](../code-quality/defensive-programming.md) — the broader mindset this fits into
