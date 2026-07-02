---
slug: semantic-versioning
name: Semantic Versioning
category: devx-workflow
heat: 63
status: solid
born: "~2010 (Tom Preston-Werner)"
related:
  - breaking-change
  - backward-compatible
tags:
  - devx
  - versioning
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> major.minor.patch — breaking changes bump major. "it's just a patch" are famous last words.

## real talk

Semantic versioning (semver) is the convention `MAJOR.MINOR.PATCH` (like `2.4.1`) where each number means something specific: increment MAJOR for breaking changes, MINOR for new backward-compatible features, PATCH for backward-compatible bug fixes. In theory, this lets anyone glance at a version bump and immediately know whether upgrading is safe to do blindly or needs careful review.

In practice, semver is more of an honor system than an enforced law. Plenty of "patch" releases accidentally include a breaking change because someone underestimated the blast radius, and plenty of package maintainers bump major versions inconsistently. It's still genuinely useful as a signal, just not a guarantee you should bet production on without reading the changelog.

## used in the wild

> "the changelog says this was a patch release but it actually changed the default behavior of a function. that should've been a major bump, not a patch."
>
> — engineer, debugging a production incident caused by trusting semver blindly

## why it matters

Semantic versioning is the entire dependency ecosystem's shared language for "is it safe to upgrade." When it's followed correctly, automated dependency updates are mostly safe. When it's not, every upgrade is a small gamble.

## related terms

- [breaking-change](/article/breaking-change) — what triggers a major version bump
- [backward-compatible](/article/backward-compatible) — what minor and patch bumps are supposed to preserve
