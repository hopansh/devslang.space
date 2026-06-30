---
slug: api-contract
name: API Contract
category: apis-communication
difficulty: m
difficulty_label: "M — Mid"
heat: 64
status: solid
born: "~2000s"
related:
  - breaking-change
  - versioning-api
tags:
  - apis
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> the agreed shape of your API — violating it is treated as a small war crime on some teams, and rightly so.

## real talk

The API contract is the implicit or explicit agreement about what an endpoint accepts and returns: field names, types, required vs optional, status codes, error shapes. "Implicit" is the dangerous one — if it's not written down in an OpenAPI spec or similar, the contract is whatever the current behavior happens to be, and someone is depending on that exact behavior whether you intended it or not.

Teams that take this seriously version their contracts formally (OpenAPI, GraphQL schemas, protobuf definitions) and run contract tests in CI that fail the build if the shape changes unexpectedly.

## used in the wild

> "i know the field was never officially documented as required, but three services depend on it always being present. that's the contract now, intended or not."
>
> — platform engineer, explaining why "it wasn't in the docs" isn't a valid excuse

## why it matters

Without a clear contract, every API consumer is guessing. Contract-first development (writing the OpenAPI spec before the code) avoids entire categories of integration bugs.

## related terms

- [breaking-change](./breaking-change.md) — what happens when the contract is violated
- [versioning-api](./versioning-api.md) — how contracts evolve safely
