---
slug: yak-shaving
name: Yak Shaving
category: culture-career
difficulty: m
difficulty_label: "M — Mid"
heat: 71
status: solid
born: "~1990s (MIT AI Lab folklore)"
related:
  - bikeshedding
tags:
  - culture
  - productivity
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> doing six unrelated tasks just to get to the original task — we've all been there, usually right before a deadline.

## real talk

Yak shaving describes the experience of trying to do one simple thing, discovering it requires another thing first, which requires another thing, which requires another thing — five steps removed from your original goal, you find yourself doing something that on its own sounds completely absurd, like literally shaving a yak, with zero obvious connection to what you actually set out to do an hour ago.

Classic example: you want to fix a small bug. To test the fix you need to run the app locally. To run it locally you need to update a dependency. Updating that dependency breaks your build tool. Fixing the build tool requires updating Node. Updating Node breaks three other projects. Two hours later, you still haven't touched the original bug.

## used in the wild

> "i just wanted to add a button. to add the button i had to update the design system. to update the design system i had to fix a build error. to fix the build error i had to upgrade webpack. pure yak shaving, send help."
>
> — frontend engineer, four layers deep into a task that started simple

## why it matters

Recognizing you're yak shaving lets you make a conscious decision: push through the chain of prerequisites, or step back and find a shortcut that avoids the rabbit hole entirely. Either is fine — staying unaware you're doing it is what actually wastes the afternoon.

## related terms

- [bikeshedding](./bikeshedding.md) — a related but distinct way time gets lost on tangents
