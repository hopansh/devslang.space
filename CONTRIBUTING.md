# Contributing to devslang-content

This repo is the open content database behind [devslang](https://devslang.dev) —
the place where dev slang and workplace terminology nobody explains gets
written down properly.

There are two ways to contribute:

1. **Submit via the platform** (no GitHub knowledge needed) — write your term
   on devslang.dev, it goes to moderation, and on approval we commit it here
   automatically.
2. **Raise a PR directly** (this doc) — for devs who'd rather just edit the
   markdown themselves.

---

## Before you start

Check `INDEX.md` to make sure the term doesn't already exist. If it does and
you think the existing definition is weak, open a PR editing that file
instead of creating a duplicate.

---

## Adding a new term

1. Fork this repo
2. Copy `TERM_TEMPLATE.md` into the right category folder under `terms/`
3. Rename it to `your-term-slug.md` — lowercase, hyphen-separated, matching
   the `slug` field exactly
4. Fill in the frontmatter (see `SCHEMA.md` for the full field reference)
5. Write the body — see the voice guide below before you write a single word
6. Run the validation script (see below) before opening your PR
7. Open a PR. Use the term name as the PR title, e.g. `Add: Cache Stampede`

---

## The devslang voice

This is the part that actually matters. A correct definition with the wrong
voice will get sent back for a rewrite.

- Write like a senior dev explaining it to a friend at 11pm, not a
  textbook entry
- Contractions are fine. Fragments are fine. Perfect grammar is not the goal
- Dry humor is encouraged. Forced jokes are not
- The `used in the wild` example should feel like a real PR comment, Slack
  message, or standup line — not a sanitized textbook example
- No corporate language. If you wrote "leverage," "synergy," or "seamless,"
  delete it and start that sentence over
- Every term needs an opinion somewhere in the `real talk` section. Flat,
  neutral definitions get rejected — that's what Wikipedia is for

Read 4–5 existing files in `terms/` before writing your first one. Voice
consistency matters more than most contributors expect on the first try.

---

## Choosing a difficulty level

Use the rubric in `SCHEMA.md`. Quick gut check:

- **Newbie** — would a non-technical friend basically get this if you
  explained it for 30 seconds?
- **Mid** — does it require having actually shipped something to a real user?
- **Senior** — does it require having felt the pain this term describes,
  not just heard about it?
- **10x** — would most senior devs need to think for a second before
  explaining it correctly?
- **Lore Master** — would explaining this correctly genuinely earn you
  respect in a room full of senior engineers?

We currently have **zero Lore Master terms**. If you know something
genuinely niche and arcane, that tier needs you specifically.

---

## Validation before you open a PR

From the repo root:

```bash
npm install
npm run validate
```

This checks:
- Frontmatter has all required fields
- `slug` matches the filename
- `difficulty` is one of `n | m | s | x | l`
- `category` matches an existing folder
- `related` slugs actually exist
- Required body sections are present (`real talk`, `used in the wild`)

PRs that fail validation get an automated comment, not a silent rejection —
fix and push again, same PR.

---

## Editing an existing term

Same process, but open the PR against the existing file. Explain in the PR
description why the change improves it — a typo fix needs no explanation, a
full rewrite of `real talk` does.

---

## What gets rejected

- AI-generated definitions with zero personal editing or voice
- Duplicate terms (check `INDEX.md` first)
- Anything that reads like a textbook or a docs site
- Definitions with no opinion, no personality, no `real talk` energy
- Terms that are really just product names or internal company jargon with
  no broader recognition across the industry

---

## Questions

Open a discussion thread on this repo, or ask in the platform's Discord.
