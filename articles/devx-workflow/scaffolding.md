---
slug: scaffolding
name: Scaffolding
category: devx-workflow
difficulty: n
difficulty_label: "N — Newbie"
heat: 54
status: classic
born: "~2000s"
related:
  - hot-reload
tags:
  - devx
  - tooling
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> auto-generated starter code — `create-react-app` was scaffolding. or was, depending on who you ask now.

## real talk

Scaffolding is tooling that generates the boilerplate structure of a new project (or a new feature within one) automatically, so you don't start from a completely blank folder every time. Run `create-react-app my-app` or `rails generate model User` and you get a working file structure, configuration, and starter code instantly instead of manually wiring it all up from scratch.

The term comes from construction — literal scaffolding that supports a building while it's being constructed and gets removed once the structure stands on its own. Software scaffolding works the same way conceptually: temporary structure that gets you started fast, which you then build on top of and eventually modify well beyond its original generated shape.

## used in the wild

> "just scaffold a new component with the CLI, don't write the boilerplate by hand, it'll set up the test file and styles automatically."
>
> — senior dev, saving a junior dev fifteen minutes of typing the same folder structure everyone always types

## why it matters

Scaffolding tools eliminate repetitive setup work and enforce consistent project structure across a team, which matters more than it sounds like until you've worked on a codebase where every feature folder is organized completely differently.

## related terms

- [hot-reload](./hot-reload.md) — another foundational DevX convenience
