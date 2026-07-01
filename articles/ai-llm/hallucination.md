---
slug: hallucination
name: Hallucination
category: ai-llm
heat: 88
status: blazing
born: "~2020s"
related:
  - rag
  - grounding
tags:
  - ai
  - llm
  - genai
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> when the AI confidently makes stuff up — not a bug exactly, more of an inherent feature everyone's trying to manage.

## real talk

An LLM hallucination is when the model generates information that's plausible-sounding, grammatically perfect, confidently stated — and completely false. It'll cite a court case that doesn't exist, describe an API method that was never real, or give you a detailed, wrong answer with the exact same fluent confidence as a correct one. The model has no internal sense of "I don't actually know this" — it just predicts the next most statistically likely words, whether or not they're true.

This is genuinely one of the hardest unsolved problems in applying LLMs to anything that requires factual accuracy. Techniques like RAG, fine-tuning, and careful prompting reduce it but don't eliminate it. The model will always sound exactly as confident when it's wrong as when it's right, which is the actual dangerous part.

## used in the wild

> "the AI cited a legal precedent that literally doesn't exist, and it sounded completely authoritative while doing it. classic hallucination, always double-check anything that sounds like a citation."
>
> — engineer, after a very public and embarrassing AI mistake involving a real lawyer

## why it matters

Hallucination is the central reason you can't blindly trust an LLM's output for anything where being wrong has real consequences — legal advice, medical information, financial figures. It's a fundamental property of how these models work, not a bug that'll just get patched out.

## related terms

- [rag](./rag.md) — one of the main mitigation strategies
- [grounding](./grounding.md) — the broader fix this falls under
