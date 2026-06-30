---
slug: rubber-duck-debugging
name: Rubber Duck Debugging
category: code-quality
difficulty: n
difficulty_label: "N — Newbie"
heat: 69
status: classic
born: "~1999 (The Pragmatic Programmer)"
related:
  - bikeshedding
tags:
  - code-quality
  - culture
  - debugging
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> explain the bug to an inanimate object — it works, and nobody fully understands why.

## real talk

Rubber duck debugging means explaining your code, line by line, out loud, to an inanimate object (traditionally a literal rubber duck, but a wall, a pet, or an unfortunately-positioned coworker also work). Halfway through explaining the logic, you suddenly spot the bug yourself, before the duck says a single word — because it never does.

The mechanism is real: explaining code forces you to articulate assumptions you've been silently making, and bugs usually live in those silent assumptions. The duck is just a prop that gives you permission to talk through it without feeling like you're bothering a real person.

## used in the wild

> "i spent two hours stuck, then explained the bug to my rubber duck and found it in 90 seconds. the duck didn't even say anything. classic."
>
> — developer, every team's Slack channel, regularly

## why it matters

It's a genuinely effective debugging technique that costs nothing and requires no tools. Many companies' on-call engineers use a real or metaphorical version of this before escalating — explaining the problem out loud to anyone (or anything) often reveals the answer mid-sentence.

## related terms

- [bikeshedding](../culture-career/bikeshedding.md) — a different kind of talking-it-out, less productive
