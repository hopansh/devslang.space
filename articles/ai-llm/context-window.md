---
slug: context-window
name: Context Window
category: ai-llm
heat: 78
status: solid
born: "~2020s"
related:
  - rag
tags:
  - ai
  - llm
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> how much the LLM can "see" at once — fill it with junk and it forgets the beginning.

## real talk

The context window is the maximum amount of text (measured in tokens, roughly chunks of words) an LLM can process in a single request — your prompt, any retrieved documents, conversation history, and its own response all have to fit within this limit. Models have grown context windows dramatically, from a few thousand tokens to hundreds of thousands or even millions, but it's still a hard ceiling.

The practical problem isn't just hitting the limit and getting an error — it's that even within the limit, models can get measurably worse at recalling specific details from the middle or beginning of a very long context, a phenomenon sometimes called "lost in the middle." More context isn't automatically better context; relevance still matters.

## used in the wild

> "we're stuffing the entire 200-page document into the context window and the model still gets confused about something mentioned on page 4. just because it fits doesn't mean it's actually using it well."
>
> — engineer, learning that bigger context windows don't fully solve relevance

## why it matters

Understanding context window limits (and their practical, not just theoretical, behavior) is essential for building anything that processes long documents or maintains long conversations with an LLM.

## related terms

- [rag](/article/rag) — a strategy for working within context limits by retrieving only what's relevant
