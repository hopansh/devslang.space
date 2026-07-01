---
slug: hot-reload
name: Hot Reload
category: devx-workflow
heat: 62
status: classic
born: "~2010s"
related:
  - scaffolding
tags:
  - devx
  - tooling
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> see your changes instantly without refreshing — modern devs take this completely for granted.

## real talk

Hot reload means your dev server detects file changes and updates the running app instantly, without you manually refreshing the page or restarting the process — and ideally, without losing your current app state (you were three steps deep in a form, and hot reload preserves that instead of resetting you to the homepage).

This sounds minor until you remember what development looked like before it was standard: save file, manually refresh browser, navigate back to where you were, repeat hundreds of times a day. Tools like Vite, webpack-dev-server, and most modern frameworks made this the silent, invisible default that nobody thinks about until it breaks.

## used in the wild

> "wait, hot reload isn't working, i have to manually refresh now? what year is this, 2014?"
>
> — developer, mildly offended that a basic convenience briefly stopped working

## why it matters

Hot reload is one of those invisible productivity multipliers — easy to take for granted, genuinely painful to lose, and a quiet quality bar that separates good tooling from frustrating tooling.

## related terms

- [scaffolding](./scaffolding.md) — another DevX convenience from the same era of tooling improvements
