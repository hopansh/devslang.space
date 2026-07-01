---
slug: fine-tuning
name: Fine-tuning
category: ai-llm
heat: 67
status: solid
born: "~2018"
related:
  - rag
tags:
  - ai
  - llm
  - ml
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> training a pre-built model further on your own data — expensive, often unnecessary, and everyone wants it anyway.

## real talk

Fine-tuning means taking an already-trained model and continuing to train it on a smaller, specific dataset to adapt its behavior — making it speak in a particular tone, specialize in a narrow domain, or follow a specific output format more reliably. This is different from RAG, which gives the model new information at query time without changing the model itself. Fine-tuning actually changes the model's weights.

The common mistake is reaching for fine-tuning when RAG or just better prompting would solve the problem faster, cheaper, and with an easier path to updating the information later (RAG just requires updating documents; fine-tuning requires retraining). Fine-tuning genuinely shines when you need a specific style, format, or behavior baked in deeply, not just new facts available.

## used in the wild

> "before we spend three weeks and a real budget fine-tuning a model, have we actually tried just improving the prompt and adding RAG first? half the time that's enough."
>
> — ML engineer, the voice of reason in a planning meeting

## why it matters

Fine-tuning is a powerful but heavier, more expensive tool than most teams initially realize. Knowing when you actually need it (versus when RAG or prompt engineering would solve the same problem) saves real time and budget.

## related terms

- [rag](./rag.md) — often the better, cheaper first option for the same underlying problem
