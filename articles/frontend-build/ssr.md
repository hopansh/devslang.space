---
slug: ssr
name: SSR
category: frontend-build
heat: 74
status: solid
born: "~2010s (mainstream revival)"
related:
  - csr
  - hydration
tags:
  - frontend
  - rendering
contributors:
  - devslang-team
last_updated: "2025-01-01"
---

> server-side rendering — HTML arrives pre-built. SEO loves it. devs argue about it constantly.

## real talk

SSR means the server renders your full page into HTML before sending it to the browser, rather than sending a near-empty HTML shell and letting JavaScript build the page client-side. The user sees content immediately, search engine crawlers can read the page without executing JS, and perceived load time improves, especially on slow connections.

The cost: more work for your server on every request, and a hydration step needed afterward to make the page interactive. Frameworks like Next.js made SSR the default expectation for modern React apps, which sparked years of debate about whether every page actually needs it or whether it's complexity for complexity's sake.

## used in the wild

> "this is a logged-in dashboard, nobody's googling their way into it. why are we paying the SSR cost here? CSR would be simpler and just as fast for this page."
>
> — senior engineer, questioning a default that got applied everywhere without thinking

## why it matters

SSR is genuinely valuable for public, SEO-sensitive pages and meaningfully overkill for internal dashboards behind a login. Knowing which page needs which rendering strategy is a real architectural decision, not a framework default to accept blindly.

## related terms

- [csr](/article/csr) — the alternative approach
- [hydration](/article/hydration) — the step that follows SSR
