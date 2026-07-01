---
slug: tree-shaking
name: Tree Shaking
category: frontend-build
heat: 56
status: solid
born: "~2015 (popularized by Rollup)"
related:
  - bundler
  - code-splitting
tags:
  - frontend
  - build
  - performance
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> delete the code you imported but never used — bundlers do this automatically now, mostly.

## real talk

Tree shaking is your bundler analyzing your import statements and eliminating any code that's imported but never actually called or referenced — "dead code elimination" with a more memorable name. Import a utility library but only use 2 of its 50 functions? Tree shaking strips out the other 48 from your final bundle.

It only works reliably with ES modules (`import`/`export`), because static analysis needs to know at build time exactly what's used. Older CommonJS (`require`) code is much harder to tree-shake effectively, which is one reason ESM adoption matters more than it sounds like it should.

## used in the wild

> "our bundle is huge because this library uses CommonJS exports. tree shaking can't touch it. we're importing the whole thing whether we use 2 functions or 200."
>
> — frontend engineer, investigating bundle size, mildly cursed

## why it matters

Without effective tree shaking, your bundle ships dead weight — code your users download and parse but never actually execute. At scale, that's real load time you're wasting for no benefit.

## related terms

- [bundler](./bundler.md) — where tree shaking happens
- [code-splitting](./code-splitting.md) — a complementary optimization
