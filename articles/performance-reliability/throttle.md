---
slug: throttle
name: Throttle
category: performance-reliability
heat: 68
status: solid
born: "~2000s"
related:
  - debounce
  - rate-limiting
tags:
  - frontend
  - performance
  - javascript
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> max once every N ms, no matter how many times you call it — scroll handlers love this one specifically.

## real talk

Throttling caps how often a function can run, regardless of how many times it's triggered. Unlike debouncing (which waits for quiet before firing once), throttling fires regularly, at most once per defined interval, even during continuous activity. Attach a function to a `scroll` event without throttling and it might fire hundreds of times per second as the user scrolls — throttle it to 100ms and it fires at most 10 times per second, no matter how fast they scroll.

The mental model that trips people up: debounce waits for the action to stop. Throttle keeps things running but at a controlled, capped rate. Different problems, often confused in interviews.

## used in the wild

> "the scroll handler is recalculating layout on every single scroll event, that's hundreds of times a second. throttle it, we don't need that resolution."
>
> — frontend engineer, fixing a janky scrolling experience

## why it matters

Without throttling, high-frequency events (scroll, resize, mousemove) can fire a function so often it overwhelms the main thread and makes the UI feel laggy or unresponsive.

## related terms

- [debounce](./debounce.md) — the related but distinctly different technique
- [rate-limiting](../apis-communication/rate-limiting.md) — the server-side equivalent idea
