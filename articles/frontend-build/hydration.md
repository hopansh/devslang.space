---
slug: hydration
name: Hydration
category: frontend-build
heat: 71
status: solid
born: "~2013 (React early SSR efforts)"
related:
  - ssr
  - csr
tags:
  - frontend
  - rendering
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> the moment server-rendered HTML gets wired up with JS — can go badly, weirdly, visibly wrong.

## real talk

When a page is server-rendered, the user gets real HTML immediately — fast, visible, good for SEO. But that HTML is inert. No click handlers, no state, no interactivity. Hydration is the process where your JavaScript framework attaches to that existing HTML, "rehydrating" it with the event listeners and reactive state it needs to actually function as an app.

When it goes wrong, you get a "hydration mismatch" — the server-rendered HTML doesn't exactly match what the client would have rendered, and the framework either throws a console error or, worse, silently produces a flash of incorrect content before snapping into the right state.

## used in the wild

> "there's a hydration mismatch warning in the console because we're rendering `Date.now()` on the server and it doesn't match the client. classic SSR mistake."
>
> — frontend engineer, debugging the most common hydration bug there is

## why it matters

Hydration bugs are uniquely confusing because the page often looks fine — it's a console warning and a brief visual flicker, easy to miss until a user reports something "flashing weirdly" that you can't immediately reproduce.

## related terms

- [ssr](/article/ssr) — hydration only exists because of this
- [csr](/article/csr) — the alternative that skips hydration entirely
