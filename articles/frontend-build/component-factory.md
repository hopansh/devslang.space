---
slug: component-factory
name: Component Factory
category: frontend-build
heat: 38
status: deep-lore
born: "~2015 (React patterns era)"
related:
  - hexagonal-architecture
tags:
  - frontend
  - patterns
  - react
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> a function that returns components — useful for abstraction, confusing for everyone reading the code six months later.

## real talk

A component factory is a function (or higher-order function) that generates and returns UI components dynamically, often based on configuration rather than hardcoded JSX. Instead of writing 10 nearly-identical button components by hand, you write one factory function that takes config and produces the right variant. Think of it as the "factory pattern" from classic OOP, just applied to React/Vue components instead of classes.

It's powerful for genuinely repetitive, config-driven UI — form builders, design systems with dozens of button variants, dashboard widgets generated from a schema. It's also easy to overuse, creating a layer of indirection where you have to mentally trace through the factory to understand what component will actually render, which is exactly the kind of abstraction YAGNI warns against when there's no real repetition to justify it.

## used in the wild

> "why does this button go through three factory functions before it renders? there's only ever one variant being used. this is solving a problem we don't have."
>
> — senior engineer, untangling unnecessary abstraction in review

## why it matters

Component factories are a legitimate, powerful pattern when you actually have config-driven variation at scale. They're over-engineering when applied preemptively to UI that's never going to need that flexibility.

## related terms

- [hexagonal-architecture](/article/hexagonal-architecture) — similar instinct toward abstraction, different layer
