# devslang-content — schema reference

Every article lives as a single `.md` file inside the `articles/` directory,
nested under its category folder.

---

## File naming

```
articles/<category>/<slug>.md
```

The `slug` must be lowercase, hyphen-separated, and match the filename exactly.

Example: `articles/culture-career/yak-shaving.md`

---

## Frontmatter fields

```yaml
---
slug: string          # url-safe, unique, matches filename
name: string          # display name of the term
category: enum        # see category list below
difficulty: enum      # n | m | s | x | l
difficulty_label: string  # human label (see below)
heat: integer         # 0–100, community hype score
status: enum          # see status list below
born: string          # approx when the term started circulating
related:
  - slug-1            # list of related term slugs
  - slug-2
tags:
  - tag-1             # free-form tags for search
contributors:
  - username          # github usernames of contributors
last_updated: string  # ISO date YYYY-MM-DD
---
```

---

## Difficulty levels

| value | label            | meaning |
|-------|------------------|---------|
| `n`   | N — Newbie       | Anyone who googled "how to code" once gets this |
| `m`   | M — Mid          | You've shipped something. This makes sense. |
| `s`   | S — Senior       | Needs real-world experience to fully land |
| `x`   | X — 10x          | Deep technical or cultural knowledge required |
| `l`   | L — Lore Master  | Niche, specialist, arcane. Respect is earned. |

---

## Categories

| value                    | display name              |
|--------------------------|---------------------------|
| `architecture-patterns`  | Architecture & Patterns   |
| `apis-communication`     | APIs & Communication      |
| `code-quality`           | Code Quality & Practices  |
| `frontend-build`         | Frontend & Build          |
| `data-state`             | Data & State              |
| `performance-reliability`| Performance & Reliability |
| `devx-workflow`          | DevX & Workflow           |
| `ai-llm`                 | AI / LLM                  |
| `culture-career`         | Culture & Career          |

---

## Status tags

| value          | meaning |
|----------------|---------|
| `blazing`      | Heat score ≥ 85, trending upward |
| `just-dropped` | Submitted in last 7 days, gaining traction |
| `rising`       | Heat score growing week-over-week |
| `solid`        | Established, stable heat score 40–70 |
| `classic`      | Timeless, widely known |
| `legacy`       | Older, still relevant but declining |
| `deep-lore`    | Niche, specialist knowledge |
| `cringe`       | Flagged as overused / corporate |
| `overused`     | Once good, now meaningless |

---

## Body sections (in order)

1. **blockquote at top** — the tldr. one sentence. brutal.
2. `## real talk` — the community definition. voice and soul of devslang.
3. `## used in the wild` — a real-feeling usage example in a blockquote.
4. `## why it matters` — practical consequence for a dev.
5. `## related terms` — links to other term files.

---

## Contributing

See `CONTRIBUTING.md` for how to raise a PR or submit via the platform.
