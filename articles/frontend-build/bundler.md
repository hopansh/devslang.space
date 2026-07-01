---
slug: bundler
name: Bundler
category: frontend-build
heat: 67
status: classic
born: "~2012 (Browserify) / ~2015 (Webpack)"
related:
  - minification
  - tree-shaking
  - code-splitting
tags:
  - frontend
  - tooling
  - build
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> takes 800 files, gives you 1 (or a few) — webpack, vite, esbuild. the magic box nobody questions until it breaks.

## real talk

A bundler takes your sprawling source code — hundreds of separate JS/CSS/asset files importing each other — and packages it into a small number of optimized files that browsers can actually load efficiently. Without one, a browser would need to make hundreds of separate network requests just to load your app, and modern import syntax wouldn't even work natively in older browsers.

Webpack was the dominant choice for years and is famously over-configurable. Vite and esbuild showed up promising blazing-fast builds by leveraging native ES modules during development and only bundling for production. Most new projects in 2025+ default to Vite unless there's a specific reason not to.

## used in the wild

> "the build takes 4 minutes. we should look at switching from webpack to vite, esbuild is just faster at this."
>
> — frontend engineer, every team eventually has this conversation

## why it matters

Nobody ships raw, unbundled source code to production. Understanding what your bundler actually does — and why your build is slow or your bundle is huge — is the difference between guessing at config and actually fixing it.

## related terms

- [minification](./minification.md) — one of the things bundlers do
- [tree-shaking](./tree-shaking.md) — another thing bundlers do
- [code-splitting](./code-splitting.md) — yet another thing bundlers do
