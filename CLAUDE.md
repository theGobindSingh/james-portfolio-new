# AGENTS.md

Entry point for any agent (Claude Code, skills, MCP tools) working on this repo. Read this
first. It is short on purpose: it routes you to the detailed docs and states the rules that
are non-negotiable.

---

## Project

Personal portfolio for an Art Director / Brand Manager. Evidence of judgment, not a services
page: prove he can run a creative system under pressure through real case studies and clear
writing, then make it effortless for a hiring exec to reach him about a full-time role. SEO
and performance are first-class features.

Stack: Next.js (App Router) + TypeScript + Tailwind, pnpm, `src/` directory, Payload CMS
(Postgres) for case studies and testimonials — no `.md` content files, no static content
layer.

## Owner context (use this for copy, content scaffolding, and SEO)

**⚠️ Everything below marked `[PLACEHOLDER]` is fake, invented for scaffolding only, and must
never be treated as real.** No real bio, experience, metrics, or contact info has been
supplied yet. Use these only to give components and copy something to render; replace with
real content before anything ships, and never let a placeholder value survive into a commit
that claims to be launch-ready.

**James Loder** `[PLACEHOLDER]` — Art Director & Brand Manager. Leads at the intersection of
brand strategy, art direction, and corporate identity; unifies visual systems to protect
enterprise equity and drive long-term commercial value. Currently exploring full-time roles.

**Positioning:** builds creative systems that stay coherent under pressure — strategic
direction, identity governance, and operational design, so teams move faster without diluting
brand quality. (This line is his own language, captured in PRODUCT.md §4 — treat it as real
and reuse it verbatim; it is the one piece of "owner context" here that is _not_ a
placeholder.)

**Experience** `[PLACEHOLDER — structure only, every row is invented]`:

| Period  | Role          | Company            | Key work                                |
| ------- | ------------- | ------------------ | --------------------------------------- |
| `[TBD]` | Art Director  | `[PLACEHOLDER CO]` | `[TBD — no fabricated scope or metric]` |
| `[TBD]` | Brand Manager | `[PLACEHOLDER CO]` | `[TBD — no fabricated scope or metric]` |

**Verified metrics:** none exist yet. **Do not invent a number for any case study, stat, or
outcome.** If a placeholder needs to gesture at an outcome, write it in voice without a
number — "cut review cycles" not "cut review cycles by 40%" — or mark it `[metric TBD]`
outright. A specific-sounding fake number is worse than an honest placeholder because it's
more likely to survive an editing pass unnoticed.

**Case studies/projects:** none exist yet. Build placeholder case studies structurally (real
sections: problem, approach, decisions, outcome) with placeholder _language_, not placeholder
_facts_. Follow DESIGN.md's Voice & copy: placeholder copy still obeys every copy rule,
because placeholder voice tends to survive into production. Never fabricate a client name; use
`[Client TBD]` or "confidential" rather than inventing one.

**Education:** `[TBD]`

**Contact:** `[TBD — email]`, `[TBD — LinkedIn]`. Do not invent working links; use `#` or a
clearly non-functional placeholder until real ones are supplied.

**Resume:** `[TBD — /public/resume.pdf not yet supplied]`.

**Copy rules:** never fabricate a metric, quote, client, or outcome in real content — this is
a hard rule from PRODUCT.md §11 and DESIGN.md's No Invention Rule, and it overrides any
instinct to "fill the page." Placeholders are the one sanctioned exception, and only when
clearly marked as shown above. First person ("I lead," "I build"). Plain, direct language, no
hype words. Outcomes before discipline labels, where outcomes are real.

## Claude Code automations (`.claude/`)

`ponytail` (github.com/DietrichGebert/ponytail) is installed as a project-scoped plugin (see
`.claude/settings.json`'s `enabledPlugins`). **Whenever you write, edit, or refactor a code
file, use the `ponytail` skill/mode** — it forces the leanest solution that actually works
(YAGNI, reuse before new code, stdlib/native before a dependency) and keeps diffs matched to
this doc's Simplicity first / Surgical changes rules. It does not relax the Golden rules below
(tokens, kebab-case, 150 LOC, a11y, no fabricated content) — those still win on conflict.

Beyond that plugin and the `impeccable` skill (see "Skill source of truth" below), no other
hooks or subagents are set up yet. Don't assume any auto-formatting, auto-linting, or
auto-audit is happening in the background — run `pnpm lint` and `pnpm build` yourself when the
Definition of Done calls for it.

If automations get added later (a formatting hook, a perf-check skill, a content-rules skill
mirroring DESIGN.md's Voice & copy section), update this section to document them the same way
the reference project does — don't let this doc go stale once they exist.

### Skill source of truth

Even though no skills exist yet, the convention still applies once any get added:
**`.agents/skills/`** is the source of truth for every skill (native ones and portable
packages like `impeccable`). `.claude/skills` is **not** a real directory — it's a symlink to
`.agents/skills`, generated by a setup script on `pnpm install` (wired into the `prepare`
script, once that script exists in this repo). This makes skills discoverable by tools that
only look under `.claude/skills`, without duplicating the files.

**New skills always go into `.agents/skills/<name>/`, never into `.claude/skills/`** — the
latter is a generated symlink and gets recreated on next install. If `.claude/skills` is ever
missing or stale, relink it via the setup script (add one, mirroring `scripts/skills.js` from
the reference project, if this repo doesn't have it yet).

---

## Read these before acting (in `/docs`)

- **`docs/PRODUCT.md`** what the site is, audience, goals, IA/sitemap, page specs, conversion
  model, content model, SEO requirements. Read for any decision about pages, content, or copy.
- **`docs/DESIGN.md`** the design language: token architecture, color/type conventions,
  layout, motion, the signature technique (process dots, torn paper), and voice/copy rules.
  Read before building or styling any UI, and before writing any copy.
- **`docs/CONVENTIONS.md`** how code is structured and written: naming, folders, modularity,
  imports, components, styling, TypeScript, lint, tooling. **Not written yet.** Until it
  exists, the Golden rules below are the baseline; don't invent conflicting conventions, and
  flag to the owner that this doc is missing rather than silently deciding structure alone.
- **`src/styles/globals.css`** (no need to read the whole file) the literal source of truth
  for color/type values and atmospheric layers.
- **`docs/reference/`** (if present) reference HTML and/or screenshots (the anbui.co-style
  reference, the torn-paper/CMYK sketches). Treat it as the fidelity target for layout,
  structure, and motion. Match the patterns, but use _this_ project's palette (warm cream +
  one print-ink-yellow accent, per DESIGN.md) and fonts (Gloock / DM Sans / DM Mono /
  Newsreader / Reenie Beanie), not the reference's colors or type.

Precedence if anything conflicts: the owner's direct instruction > these docs > defaults.
Among docs, each owns its domain (PRODUCT = what, DESIGN = look, this file = how to operate).

## Working agreement (how the owner wants you to operate)

These bias toward caution over speed. For genuinely trivial edits, use judgment rather than
running the full ritual below.

- **Propose before building.** For anything non-trivial, give a concise list of proposed
  changes and wait for approval before implementing. Do not dump a full implementation upfront.
- **One step at a time.** For multi-step work, do a step, confirm it is resolved, then move on.
- **Be concise.** Short, direct updates. Detailed explanation only when asked or when truly
  important.
- **Fix lint before calling anything done.** ESLint is configured; keep it green.
- **Ask when unsure** rather than guessing on product or design intent — and always ask rather
  than fabricate when a real fact (metric, client, quote) is missing.

### Think before coding

Don't assume, don't hide confusion, surface tradeoffs.

- State assumptions explicitly before implementing. If genuinely uncertain, ask instead of
  guessing.
- If multiple reasonable interpretations exist, present them — don't silently pick one.
- If a simpler approach exists than what was asked for, say so. Push back when warranted.
- If something is unclear, stop, name what's confusing, and ask — don't plow ahead on a guess.

### Simplicity first

Minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked, no abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for scenarios that can't happen.
- If a change could be a fraction of its current size without losing correctness, cut it down.
- Test: would a senior engineer call this overcomplicated? If yes, simplify.

### Surgical changes

Touch only what the task requires. Clean up only your own mess.

- Don't "improve" adjacent code, comments, or formatting while you're in a file for another
  reason.
- Don't refactor things that aren't broken as a side effect of an unrelated task.
- Match existing style/conventions even where you'd personally do it differently.
- If you notice unrelated dead code or a pre-existing bug, mention it — don't fix or delete it
  unasked.
- Remove imports/variables/functions that your own change made unused; leave pre-existing dead
  code alone unless asked to remove it.
- Test: every changed line should trace directly back to the request being handled.

### Goal-driven execution

Turn tasks into verifiable success criteria, then loop against them instead of guessing when
done.

- "Add validation" → write cases for invalid input, then make them pass.
- "Fix the bug" → reproduce it first (test, script, or manual repro), then make it pass.
- "Refactor X" → confirm behavior/tests match before and after.
- For multi-step work, state a brief plan with a verification per step, e.g.:

  ```
  1. [Step] → verify: [check]
  2. [Step] → verify: [check]
  ```

- Strong success criteria (a failing test, a reproduced bug, a passing build) let you work
  independently without constant check-ins. Weak criteria ("make it work") force guessing —
  push back and ask for a concrete check instead.

These guidelines are working if diffs shrink to what was asked, fewer rewrites happen due to
overcomplication, and clarifying questions land before implementation rather than after a
mistake.

## Database changes (Payload/Postgres): Drizzle auto-push

There are no migrations in this project — `src/payload.config.ts` uses Drizzle's dev-mode
`push` (the `push: false` option is intentionally omitted). Any change to a collection/global's
fields — add, rename, remove, retype — is picked up automatically:

1. Edit the collection/global config.
2. **Make sure `pnpm dev` is running.** Push only happens when the dev server initializes
   Payload — it is not triggered by editing files alone, by `pnpm build`, or by anything else.
   If the dev server isn't up when you make a schema change, start it (or restart it) before
   the change takes effect against the database.
3. Hit any route that touches Payload (or just watch the dev server log) — you'll see
   `Pulling schema from database...` while it reconciles. For a straightforward add/remove
   this finishes on its own with no prompt.
4. If it does ask for interactive confirmation (this can happen for an ambiguous change like a
   rename, which push can't distinguish from "drop + create"), stop and check with the owner
   before answering — an autoconfirmed prompt on a rename can silently drop a column's data.

Never hand-edit the database schema directly (no ad hoc `ALTER TABLE`). Trust push for
additive/removal changes; only pause for confirmation on renames or anything that could lose
data.

**Once the Payload schema for case studies/testimonials is actually created, update
`docs/PRODUCT.md` §8 (Content model) to match the real fields — it's currently a provisional
sketch, not the schema.**

## Commands (pnpm)

Assumed standard scripts (adjust to match `package.json` once it exists):

- `pnpm install` install deps
- `pnpm dev` local dev server
- `pnpm build` production build
- `pnpm start` run the build
- `pnpm lint` / `pnpm lint --fix` lint and auto-fix

**Dev server: never kill and restart one that's already running.** The owner usually has
`pnpm dev` running in their own terminal while working alongside an agent. Before starting a
dev server to verify a change, check whether one is already up (e.g. `curl -sf
http://localhost:3000 >/dev/null` or check for a listener on the port) and reuse it. Only start
a new one if none is running, and don't kill an existing process to "get a clean start" unless
the owner asks.

## Golden rules (distilled, do not violate)

1. **Tokens only.** Style through the tokens in `globals.css` / DESIGN.md. No inline hex/HSL,
   no raw px font sizes, no magic numbers, no `dark:` color literals (rely on ramp inversion).
2. **Kebab-case filenames.** Every file and folder is lower kebab-case. (Component identifiers
   and TS types stay PascalCase in code; that is language, not filenames.)
3. **Folders with `index`.** A unit is a kebab folder with `index.tsx` + optional `types.ts`,
   not a loose file. Import by folder via the `@` alias.
4. **150 LOC split rule.** Any file past ~150 lines must be split by responsibility. Applies to
   all files, not just components.
5. **`@` path aliases** over relative imports (relative only for true siblings).
6. **Server components by default.** Add `"use client"` only at the smallest leaf that needs
   it.
7. **SSR/SSG everything indexable.** Per-page metadata + OG images, JSON-LD, sitemap, robots,
   canonicals. Performance (Core Web Vitals) is a feature.
8. **Accessibility + reduced motion** always: semantic HTML, visible focus, AA contrast, and
   every animation no-ops under `prefers-reduced-motion`.
9. **Reuse the kit.** The process-dot signature and the rest of DESIGN.md's component
   catalog are the whole vocabulary; do not invent parallel ornament.
10. **Never fabricate real content.** No invented metrics, clients, quotes, or credentials in
    anything that isn't explicitly marked `[PLACEHOLDER]`. See Owner context above.
11. **Drizzle auto-push for DB schema changes, dev server must be running.** Never hand-edit
    the database; see "Database changes" above.

## Definition of done

- Matches PRODUCT intent, DESIGN patterns/tokens, and (once written) CONVENTIONS structure.
- Files are kebab, modular (Less than ~150 LOC), folder+index where they are units.
- ESLint green; TypeScript strict, no `any`.
- Server-rendered with correct metadata where it should rank; images optimized.
- Responsive to mobile, reduced-motion safe, keyboard accessible. (Dark mode: token-ready per
  DESIGN.md, not shipped — no UI work required.)
- Any placeholder content is clearly marked as such, not left to look like real content.

## Do not

- Implement large changes without a proposed change list and approval.
- Inline colors/sizes or add `dark:` literals.
- Leave ESLint red or disable rules to silence them without a clear reason.
- Create monolithic files, bare component files, or deep relative imports.
- Add pricing, packages, a booking scheduler, popups, or gated content (out of scope per
  PRODUCT.md).
- Fabricate a metric, client, quote, or credential anywhere that isn't explicitly marked
  `[PLACEHOLDER]`.
- Edit the Postgres schema directly, or blindly accept an interactive schema-push prompt on a
  rename/destructive change without checking with the owner first (see "Database changes"
  above).
