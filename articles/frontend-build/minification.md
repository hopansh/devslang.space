---
slug: minification
name: Minification
category: frontend-build
heat: 58
status: classic
born: "~2000s"
related:
  - bundler
  - source-map
tags:
  - frontend
  - build
  - performance
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> squash all whitespace, rename `totalRevenue` to `a` — all for the sake of file size.

## real talk

Minification strips out everything in your code that the browser doesn't actually need to execute it: whitespace, comments, and shortens variable names from descriptive things like `calculateTotalRevenue` down to single letters like `a`. Your code still runs exactly the same, it's just unreadable to a human looking at it directly in production.

This happens as part of your bundler's build step. The result is smaller files that download and parse faster, which matters a lot on mobile networks. The tradeoff is that if something goes wrong in production, you're staring at minified gibberish in your error logs — which is exactly why source maps exist.

## used in the wild

> "the error log just shows `Cannot read property 'x' of undefined at a.js:1:48291`. we need the source map to actually find this."
>
> — engineer, debugging production, immediately regretting not setting up source maps

## why it matters

Minification is a meaningful performance win for users, especially on slow connections. But shipping it without source maps means your future debugging sessions are pure suffering.

## related terms

- [bundler](./bundler.md) — where minification happens
- [source-map](./source-map.md) — what saves you when minified code breaks
