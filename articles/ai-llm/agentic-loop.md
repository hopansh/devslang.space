---
slug: agentic-loop
name: Agentic Loop
category: ai-llm
heat: 85
status: blazing
born: "~2023"
related:
  - context-window
  - prompt-injection
tags:
  - ai
  - llm
  - agents
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> AI plans, acts, observes, repeats — autonomous, occasionally terrifying, often genuinely useful.

## real talk

A single LLM call is a one-shot question and answer. An agentic loop is what happens when you let the model run repeatedly in a cycle: it plans what to do, takes an action (calling a tool, running code, searching the web), observes the result, and decides what to do next — looping through this cycle multiple times, autonomously, until it decides the task is done or hits some limit.

This is the architecture behind coding agents that write, run, and debug their own code in a loop, or research agents that search, read, and synthesize across many sources without a human approving each individual step. It's powerful because the agent can adapt based on what it discovers mid-task, instead of following a fixed script. It's also genuinely risky if the loop runs unsupervised on something with real-world consequences and goes wrong in a way nobody catches until several steps later.

## used in the wild

> "the coding agent ran for 40 minutes in an agentic loop, wrote the feature, ran the tests, saw them fail, fixed the bug, and ran them again. nobody touched the keyboard."
>
> — developer, describing a workflow that didn't exist two years ago

## why it matters

Agentic loops are the architecture behind the current wave of AI agents doing genuinely autonomous multi-step work. Understanding the loop — plan, act, observe, repeat — is the baseline for working with or building any agent-based AI system.

## related terms

- [context-window](/article/context-window) — a real constraint on how long an agentic loop can run before losing track of earlier steps
- [prompt-injection](/article/prompt-injection) — a more dangerous risk once an agent has real tool access
