---
slug: bus-factor
name: Bus Factor
category: culture-career
difficulty: m
difficulty_label: "M — Mid"
heat: 68
status: solid
born: "~1990s"
related:
  - 10x-developer
tags:
  - culture
  - risk
  - team
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> how many people need to get hit by a bus before the project completely dies — 1 is very bad, and very common.

## real talk

The bus factor is a dark-humored but genuinely useful way to measure risk: how many key people would need to suddenly disappear (the bus is hypothetical, the point is "unavailable for any reason — quitting, vacation, illness") before critical knowledge is lost and the project or system grinds to a halt. A bus factor of 1 means exactly one person understands how a critical system works, and if they're gone, nobody else can maintain it.

This shows up constantly in smaller teams and in legacy systems where one engineer quietly became the only person who understands a particular service, and everyone else has been politely avoiding touching it for two years.

## used in the wild

> "the billing system has a bus factor of 1. only Sarah understands how it actually works. if she's out for two weeks we are in real trouble."
>
> — engineering manager, identifying a risk nobody wanted to say out loud

## why it matters

A low bus factor is a real organizational risk, not just a joke. Identifying it early lets teams deliberately spread knowledge through documentation, pairing, and code review before the inevitable day someone actually does leave.

## related terms

- [10x-developer](./10x-developer.md) — sometimes the same person creating both immense value and a low bus factor simultaneously
