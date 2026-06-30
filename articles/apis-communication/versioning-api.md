---
slug: versioning-api
name: API Versioning
category: apis-communication
difficulty: m
difficulty_label: "M — Mid"
heat: 61
status: solid
born: "~2000s"
related:
  - breaking-change
  - api-contract
  - backward-compatible
tags:
  - apis
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> /v1/, /v2/ — how you avoid breaking everyone when you change things.

## real talk

Versioning is the escape hatch for breaking changes. Instead of changing an endpoint and hoping nobody notices, you create a new version (`/v2/users` alongside the still-running `/v1/users`) and let clients migrate on their own schedule. Old clients keep hitting v1 until you formally deprecate and shut it down.

There's a whole religious debate about how to version: URL path (`/v2/`), header-based (`Accept-Version: 2`), or query param. Nobody fully agrees, and most companies just pick one and move on with their lives.

## used in the wild

> "don't modify the v1 response shape. cut a v2 endpoint instead and we'll sunset v1 in six months with proper notice."
>
> — API team lead, setting the rules everyone will half-follow

## why it matters

Without versioning, every change to a public or widely-consumed API is a gamble. With it, you get a controlled migration path instead of an emergency.

## related terms

- [breaking-change](./breaking-change.md) — the thing versioning protects against
- [backward-compatible](./backward-compatible.md) — versioning is one way to maintain this
