---
slug: forward-compatible
name: Forward Compatible
category: apis-communication
difficulty: s
difficulty_label: "S — Senior"
heat: 48
status: solid
born: "~1990s"
related:
  - backward-compatible
  - breaking-change
tags:
  - apis
  - versioning
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> old code can handle future inputs gracefully — harder than backward, and most teams don't even try.

## real talk

Backward compatibility is "new server, old client still works." Forward compatibility is the reverse and much harder: "old client encounters something from a newer version and doesn't fall over." Think of an old app receiving an API response with fields it's never seen — does it crash, or does it just ignore the unknown fields and carry on?

Designing for forward compatibility usually means: ignore unknown fields instead of validating strictly against a fixed schema, use feature flags instead of hard version checks, and never assume the data shape will stay exactly as documented.

## used in the wild

> "the old mobile app version crashed when we added a new field to the response. it should have just ignored it. that's a forward compatibility bug."
>
> — backend engineer, explaining a production incident to the mobile team

## why it matters

You can't force every user to update instantly. Old clients exist in the wild for years. If your old code can't handle the slightest evolution of the API gracefully, every new feature becomes a landmine for old installs.

## related terms

- [backward-compatible](./backward-compatible.md) — the more common and easier direction
- [breaking-change](./breaking-change.md) — usually a forward-compatibility failure
