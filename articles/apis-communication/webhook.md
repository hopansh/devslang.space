---
slug: webhook
name: Webhook
category: apis-communication
heat: 75
status: solid
born: "~2007"
related:
  - polling
  - long-polling
tags:
  - apis
  - backend
  - integrations
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> they push, you receive — REST but reversed and slightly spooky the first time you set one up.

## real talk

A webhook is a URL you give to another service, and that service calls your URL whenever something happens on their end. Stripe sends a webhook when a payment succeeds. GitHub sends a webhook when someone pushes code. You're not polling them asking "anything new?" every five seconds — they tell you the moment it happens.

The tricky parts: you need to verify the webhook actually came from who it claims to (signature verification), handle the same webhook arriving twice (because the sender retries on timeout — see idempotent), and respond fast (most webhook senders expect a 200 within a few seconds or they'll consider it failed and retry).

## used in the wild

> "the webhook fired twice for the same payment because our endpoint took 8 seconds to respond and Stripe retried. we need to ack immediately and process async."
>
> — backend engineer, payments incident retro

## why it matters

Webhooks are how most modern integrations work. Get the retry handling and signature verification wrong, and you'll either process events twice or accept forged requests from anyone who finds your URL.

## related terms

- [polling](/article/polling) — the naive alternative webhooks replace
- [long-polling](/article/long-polling) — the in-between option
