---
slug: idempotent
name: Idempotent
category: apis-communication
heat: 79
status: blazing
born: "~1960s (math) / ~2000s (web APIs)"
related:
  - backward-compatible
  - retry-with-backoff
tags:
  - apis
  - backend
  - reliability
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> call it 10 times, get the same result every time — your API should be this. mostly isn't.

## real talk

An idempotent operation produces the same result no matter how many times you run it. `PUT /users/5 {name: "Alex"}` is idempotent — run it once or fifty times, the user named Alex is the result. `POST /orders` is usually not idempotent — run it twice, you've created two orders. Oops.

This matters enormously for retries. Networks fail. Clients retry. If your API isn't idempotent, a retry after a timeout can double-charge a credit card or duplicate an order. The fix is usually an idempotency key — a unique ID the client sends so the server can recognize "I've already processed this exact request."

## used in the wild

> "the payment retried after a timeout and now the customer was charged twice. we need an idempotency key on this endpoint."
>
> — incident report, every payments team eventually

## why it matters

If you don't think about idempotency, retries (which will happen — networks are unreliable) silently cause double-processing bugs. These bugs are rare in testing and devastating in production, usually involving real money.

## related terms

- [backward-compatible](./backward-compatible.md) — another API reliability concern
- [retry-with-backoff](../performance-reliability/retry-with-backoff.md) — the thing that makes idempotency necessary
