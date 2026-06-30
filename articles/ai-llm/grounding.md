---
slug: grounding
name: Grounding
category: ai-llm
difficulty: s
difficulty_label: "S — Senior"
heat: 64
status: solid
born: "~2020s"
related:
  - rag
  - hallucination
tags:
  - ai
  - llm
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> connecting LLM output to real, verifiable data — the broader category of fix that prevents confident lies.

## real talk

Grounding is the general concept of tying an LLM's output to actual, verifiable, real-world data instead of letting it generate purely from its internal training-derived sense of what's plausible. RAG is one specific technique for grounding (retrieve real docs, base the answer on them). Citing sources, requiring the model to quote exact text rather than paraphrase from memory, and structured tool calls that fetch live data are all other forms of grounding.

The umbrella idea: an ungrounded model is essentially making an educated guess based on patterns in training data. A grounded model is anchored to something specific and checkable, which is the entire difference between "probably right" and "verifiably right."

## used in the wild

> "we need this response grounded in the actual order data, not the model's general sense of what a typical order looks like. pull the real record and have it reference that directly."
>
> — engineer, designing a system that needs to be factually reliable, not just fluent

## why it matters

Grounding is the broader strategy underlying most serious attempts to make LLM output trustworthy for anything beyond casual conversation. Without it, you're trusting the model's internal pattern-matching, which is impressive but not the same thing as factual accuracy.

## related terms

- [rag](./rag.md) — the most common concrete implementation of grounding
- [hallucination](./hallucination.md) — the problem grounding exists to solve
