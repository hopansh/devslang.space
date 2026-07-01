---
slug: rag
name: RAG
category: ai-llm
heat: 91
status: blazing
born: "~2020 (paper) / ~2023 (mainstream adoption)"
related:
  - hallucination
  - context-window
  - grounding
tags:
  - ai
  - llm
  - genai
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> retrieval-augmented generation — give the LLM your actual docs so it stops confidently making things up.

## real talk

RAG means, instead of asking an LLM a question and hoping it remembers the right answer from training data, you first retrieve relevant documents from your own knowledge base (via a vector database, typically) and stuff them into the prompt alongside the question. The model then answers based on the actual retrieved content, not just whatever it half-remembers from training.

This is the standard pattern for "chat with your docs" products, customer support bots that need to know your specific product, and basically anything where you need the LLM to be accurate about information it wasn't trained on or that's changed since training. It doesn't eliminate hallucination entirely, but it dramatically grounds the model in real, current, relevant information.

## used in the wild

> "the support bot kept hallucinating pricing that hasn't existed in two years. we set up RAG so it actually retrieves the current pricing doc before answering instead of relying on training data."
>
> — engineer, fixing an embarrassing but common AI product mistake

## why it matters

Without RAG, an LLM's knowledge is frozen at training time and entirely generic. With it, you can make a general-purpose model answer accurately about your specific, current, private data — which is most of what makes AI products actually useful in a real business context.

## related terms

- [hallucination](./hallucination.md) — the problem RAG is designed to reduce
- [context-window](./context-window.md) — the constraint on how much retrieved content you can actually use
- [grounding](./grounding.md) — the broader concept RAG is one implementation of
