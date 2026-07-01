---
slug: code-splitting
name: Code Splitting
category: frontend-build
heat: 61
status: solid
born: "~2015 (Webpack dynamic imports)"
related:
  - bundler
  - lazy-loading
  - tree-shaking
tags:
  - frontend
  - performance
  - build
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> break one big bundle into smaller chunks loaded on demand — a real performance win, not just a buzzword.

## real talk

Without code splitting, your bundler packages your entire app into one giant JavaScript file, and every user downloads all of it regardless of what page they're actually on. Code splitting breaks that monolith into smaller chunks, loaded only when the route or component that needs them is actually visited.

A user landing on your login page shouldn't have to download the entire admin dashboard's code just because it exists somewhere in your app. Modern frameworks (Next.js, Vite, most modern routers) do route-based code splitting automatically. Component-level splitting (via `lazy()` or dynamic imports) takes more deliberate effort but pays off for big, rarely-used features.

## used in the wild

> "our initial bundle is 4MB because everything's in one chunk. code splitting by route alone would probably cut this by 70%."
>
> — frontend engineer, looking at a bundle analyzer for the first time and immediately regretting it

## why it matters

Code splitting is one of the highest-leverage frontend performance improvements available, and it's often skipped simply because nobody looked at the bundle analyzer until users started complaining about load times.

## related terms

- [bundler](./bundler.md) — where code splitting happens
- [lazy-loading](./lazy-loading.md) — the runtime behavior that code splitting enables
- [tree-shaking](./tree-shaking.md) — a complementary bundle-size optimization
