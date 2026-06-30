---
slug: source-map
name: Source Map
category: frontend-build
difficulty: m
difficulty_label: "M — Mid"
heat: 50
status: solid
born: "~2010 (Closure Compiler)"
related:
  - minification
  - bundler
tags:
  - frontend
  - debugging
  - build
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> maps minified gibberish back to your real code — a lifesaver in prod debugging, often forgotten until you need it.

## real talk

A source map is a file that tells the browser (or your error tracking tool) how to translate minified, bundled production code back into the original, readable source you actually wrote. Without one, a production error tells you something happened at `a.js:1:48291` — completely useless. With one, that same error points you to the exact line in your actual `UserProfile.jsx` file.

Source maps are usually generated automatically by your bundler, but teams sometimes disable them in production for two reasons: file size (they add weight if served publicly) and security (they reveal your original source code structure to anyone who looks). The common compromise is generating them but uploading them privately to your error-tracking tool (Sentry, etc.) instead of serving them publicly.

## used in the wild

> "we turned off source maps in prod for security and now every error report is unreadable. let's upload them privately to Sentry instead of serving them publicly."
>
> — engineer, finding the actual right answer after a week of useless stack traces

## why it matters

Debugging production issues without source maps means staring at minified variable names and guessing. With them, your error tracking tool shows you the exact original line, which is the difference between a 5-minute fix and a half-day investigation.

## related terms

- [minification](./minification.md) — the thing source maps exist to undo, for debugging purposes only
- [bundler](./bundler.md) — generates source maps as part of the build
