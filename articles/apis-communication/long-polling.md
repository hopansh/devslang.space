---
slug: long-polling
name: Long Polling
category: apis-communication
heat: 49
status: legacy
born: "~2006"
related:
  - polling
  - webhook
tags:
  - apis
  - backend
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> ask, then wait — the server holds your request open until something happens. old-school "real-time" before WebSockets were everywhere.

## real talk

Long polling is regular polling's smarter cousin. Instead of asking "anything new?" and getting an instant "no" every two seconds, the client asks once and the server just... holds the connection open until there's actually something to report (or a timeout hits, then the client asks again). It feels like push, but it's still technically pull underneath.

This was the standard real-time trick before WebSockets had good browser support. You'll still find it in older systems, and it's occasionally the pragmatic choice today when WebSockets feel like overkill for infrequent updates.

## used in the wild

> "this chat feature was built on long polling back in 2015 and nobody's touched it since. it works. don't ask why we haven't moved to WebSockets."
>
> — engineer, reading ancient but functional code

## why it matters

It's a clever historical workaround, and recognizing it in a legacy codebase saves you from "fixing" something that was actually a deliberate, working design choice from a different era.

## related terms

- [polling](./polling.md) — the simpler, more wasteful version
- [webhook](./webhook.md) — what eventually displaced it for most use cases
