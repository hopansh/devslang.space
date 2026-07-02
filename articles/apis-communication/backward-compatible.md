---
slug: backward-compatible
name: Backward Compatible
category: apis-communication
heat: 70
status: solid
born: "~1980s"
related:
  - forward-compatible
  - breaking-change
  - semantic-versioning
tags:
  - apis
  - versioning
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> new version doesn't break old clients — the bar is low. we still fail it constantly.

## real talk

A backward compatible change means anyone using the old version of your API, library, or app keeps working fine after you ship the new version. Add a new optional field to a response? Backward compatible. Remove a field someone's frontend depends on? Not backward compatible — you just broke production for everyone still on the old client.

This is the thing PR reviewers ask about constantly: "is this backward compatible?" If the answer is no, you need a migration plan, a deprecation period, or a major version bump — not a silent merge.

## used in the wild

> "you can't just rename that field. there are mobile clients still on the old API version. this needs to be backward compatible or we need a v2."
>
> — staff engineer, PR comment that saved production

## why it matters

Breaking backward compatibility without warning is one of the fastest ways to take down other people's systems that depend on yours — internal teams, external customers, mobile apps that can't force-update instantly.

## related terms

- [forward-compatible](/article/forward-compatible) — the harder, less common cousin
- [breaking-change](/article/breaking-change) — what happens when you fail at this
- [semantic-versioning](/article/semantic-versioning) — how you signal compatibility
