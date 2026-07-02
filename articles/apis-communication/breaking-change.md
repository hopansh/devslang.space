---
slug: breaking-change
name: Breaking Change
category: apis-communication
heat: 72
status: solid
born: "~1990s"
related:
  - backward-compatible
  - semantic-versioning
  - api-contract
tags:
  - apis
  - versioning
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> a change that breaks existing callers — usually discovered after deploy, never before.

## real talk

A breaking change is anything that makes existing code stop working: renaming a field, removing an endpoint, changing a response type from a string to a number, tightening validation that used to be lenient. The defining feature of a breaking change is that it's invisible until something downstream — a frontend, a mobile app, another team's service — actually breaks.

This is why "is this a breaking change?" is one of the most important questions in a PR review. Get it wrong and you find out from an angry Slack message, not from your test suite.

## used in the wild

> "wait, you removed the `email` field from the user response? that's a breaking change. half the dashboard is reading from that field."
>
> — frontend lead, discovering this in production, not in review

## why it matters

Breaking changes done carelessly erode trust in your API and create firefighting work for every team downstream. Done deliberately — with a version bump, a deprecation notice, and a migration window — they're just normal software evolution.

## related terms

- [backward-compatible](/article/backward-compatible) — the thing a breaking change violates
- [semantic-versioning](/article/semantic-versioning) — how you're supposed to signal these
- [api-contract](/article/api-contract) — what gets violated
