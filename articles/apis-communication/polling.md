---
slug: polling
name: Polling
category: apis-communication
difficulty: n
difficulty_label: "N — Newbie"
heat: 55
status: classic
born: "~1980s"
related:
  - webhook
  - long-polling
tags:
  - apis
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> keep asking "are we there yet?" until you are — the naive real-time solution everyone reaches for first.

## real talk

Polling means your client repeatedly asks the server "anything new?" on a fixed interval — every 2 seconds, every 5 seconds, whatever. It's the simplest way to get near-real-time updates and the first thing every junior dev builds before learning there's a better way.

The problem: it's wasteful. Most of those requests come back with "nothing new," wasting server resources and battery on mobile. At any real scale, polling becomes the thing your infra team complains about in the architecture review.

## used in the wild

> "why is the dashboard hitting the API every 2 seconds for every single open tab? oh. it's polling. of course it's polling."
>
> — backend engineer, looking at request logs in horror

## why it matters

Polling works fine for a prototype or low-traffic feature. It falls over fast at scale. Knowing when to graduate to webhooks or websockets is a sign of someone who's actually shipped something to production.

## related terms

- [webhook](./webhook.md) — the more efficient alternative
- [long-polling](./long-polling.md) — the middle-ground compromise
