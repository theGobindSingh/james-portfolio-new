---
name: Swiss Press
description: Swiss structure, editorial skin, one ink, and a press run's worth of restraint.
colors: refer src/styles/globals.css
---

<!-- SEED: established before implementation. Re-run a scan-mode documentation pass once
there is real code, to capture actual tokens and component behavior. -->

## Brand & Style

The persona is a **brand director with a printer's hands**: systems thinking delivered on
paper. The system reads like a well-run press studio — a strict grid, hairline rules, mono
production labels, and one saturated ink — not like a designer's showreel and not like a
generic agency template. The subject leads at the intersection of brand strategy, art
direction, and corporate identity; the site has to prove that a visual system can stay
coherent under pressure by _being_ one.

Audience is senior commercial leadership (CMOs, hiring execs), not creative peers. That
sets the register: the work is presented as **evidence of judgment**, not as a mood board.
Every screen should be scannable by someone with two minutes, and rewarding to someone with
twenty.

Brand personality: **composed, deliberate, warm-under-discipline.** Swiss bones, editorial
skin. This applies everywhere — landing, index, long-form, and utility surfaces should read
as one language.

**Key stylistic pillars:**

- **Grid as the argument** — a strict multi-column grid with left-aligned content is the
  default. Structure is visible and honest. Centered composition is a deliberate, rationed
  exception (see Layout).
- **Editorial typography carrying Swiss structure** — a high-contrast display serif does the
  monumental work, a neutral sans does the reading, mono does the production labels. The
  tension between the serif's warmth and the grid's rigor _is_ the identity.
- **Paper, not screen** — a cream ground, hairline rules, and print-shop residue (registration
  marks, process dots, a torn edge) instead of shadows, cards, and glass.
- **One accent, used as ink** — a single saturated hue carries all emphasis. Everything else
  is neutral. Restraint here is the whole point; a director who can't hold one color back
  can't hold a brand system together.

**Explicitly rejected:** soft drop shadows, glassmorphism, rounded card stacks, multi-stop
gradients, hero stock photography, emoji as UI, icon-plus-heading feature grids, anything
that reads as "SaaS-lite."

### Differentiation guard

Read this before building anything. Cream ground, high-contrast display serif, and hairline
broadsheet rules are, right now, the most common default output of any design tool asked for
"editorial minimalism." They are in this system because the client's references pin them
down, not because they are distinctive. **They are the floor, not the achievement.**

So: the palette and type direction are settled and must not be relitigated, but every surface
must earn **at least one move that could not have come from a generic prompt** — a structural
decision, a treatment of imagery, an interaction, a piece of copy that only makes sense for a
brand director's portfolio. If a finished surface could be relabelled for a photographer, an
architecture studio, or a newsletter and still work unchanged, it has not earned its keep.

Named drifts to avoid, since they arrive uninvited:

- Terracotta or warm-clay accents. This system's accent is a process ink; it is not that.
- Dense newspaper columns used as decoration rather than because the content is dense.
- A three-across "services" or "capabilities" grid with an icon and a heading in each cell.
- Statistic tiles with a big number and a small label, when the number carries no argument.
- Numbered markers applied to content that is not actually a sequence (see Structure below).

### Named rules

**The Evidence Rule.** Every surface argues that he can run a system under pressure. If a
screen shows taste but no judgment, it is decoration and it gets cut.

**The Floor Rule.** Cream, serif, and hairlines are the starting floor, never the
achievement. Each surface owes one move that a generic prompt would not have produced.

**The Relabel Rule.** If a finished screen could be handed to a photographer or an
architecture studio unchanged, it has not earned its identity.

## Colors

Token source: `src/styles/globals.css`. Seven ramp families, each with 11 stops (`50`–`950`)
stored as a raw HSL triplet (`--color-<family>-<stop>-base`) resolved to a usable color
(`--color-<family>-<stop>: hsl(var(--color-<family>-<stop>-base))`). **No color values live
in this document.** If a hue needs to change, it changes in `globals.css` and nowhere else.

- **`grey`** — the primary neutral ramp; backs most text/background/border tokens. The light
  end of this ramp is a warm cream, not white; that warmth is load-bearing and must not be
  flattened toward pure white in component code.
- **`primary`** / **`secondary`** — near-desaturated neutrals. Functionally monochrome; use
  for secondary tonal variation, not as "brand hues."
- **`accent`** — the one saturated color in the system: a print-ink hue reserved for
  interactive and emphasis moments (focus rings, links, the live indicator dot, a single
  emphasized word in a headline). Never a background fill for large areas.
- **`success` / `caution` / `info` / `error`** — semantic ramps for status only (form
  validation and submission state). Never decoration, never a "category color."

**Semantic aliases** (build on the ramps, use these before reaching for a raw ramp stop):
`--color-bg`, `--color-surface`, `--color-surface-raised`, `--color-text`,
`--color-text-muted`, `--color-text-subtle`, `--color-text-inverse`, `--color-border`
(hairline, alpha-blended), `--color-border-strong` (solid), `--color-grid-line`,
`--color-crosshair`, `--color-overlay`, `--color-focus` (= accent).

**Cream and white are two roles, not two moods.** `--color-bg` is the warm ground and is the
default for essentially everything. The cooler/lighter surface tokens are for _inset_
moments — a bordered box, a form field, an image mat — where a step away from the ground
carries meaning. Alternating whole sections cream/white as visual variety is not a pattern
in this system; vary rhythm with space and rules instead.

**Process-color (c/m/y/k) is a motif, not a palette.** It appears only as small dots in the
handful of places specified under Signature techniques. Cyan, magenta and the rest are never
used for text, backgrounds, borders, or state.

**Dark mode:** not in scope for now. The `.dark` class hook and the `-base` triplet structure
exist so it can be switched on later; keep components theme-agnostic (never branch on theme
in component logic) so that stays true.

### Named rules

**The One Ink Rule.** The accent covers no more than about 10% of any screen. Its rarity is
the entire point; a director who cannot hold one color back cannot hold a brand system back.

**The Token Rule.** No inline hex or HSL, and no raw Tailwind color utilities
(`text-orange-600` and friends) in component code. Consume the semantic alias first, then a
ramp stop, and only introduce a `--_`-prefixed local variable for a genuine one-off variant.

**The Process Rule.** Cyan, magenta, yellow and black as process colors are a mark, never a
palette. They never appear as text, background, border, or state.

**The Warm Ground Rule.** The light end of the neutral ramp is cream, not white, and that
warmth is load-bearing. Never flatten a surface toward pure white to "clean it up."

## Typography

Five font families, all loaded via `next/font/google` in the root layout, each mapped to a
CSS variable and given a role. **No self-hosted or licensed faces** — if a role needs a
different family, swap it in the loader; nothing downstream changes.

- **`--ff-display` (Gloock)** — the high-contrast editorial serif. Owns the monumental
  register: the primary page statement and top-level section headers. It is the single loudest
  element on any given screen, so there is at most one true display moment per viewport.
- **`--ff-sans` (DM Sans)** — the workhorse body/UI face. Default for everything that isn't
  display, meta, quote, or annotation. Navigation and buttons live here, lowercase for nav.
- **`--ff-mono` (DM Mono)** — production and meta text: section numbering, dates, role and
  discipline tags, field labels, index numbers, caption credits. Uppercase, with open letter
  spacing. This is the "press sheet" voice of the system and does a lot of the Swiss work.
- **`--ff-serif` (Newsreader)** — editorial long-form emphasis: pull quotes and testimonial
  copy. Distinct from the display serif; use it where text is meant to be _read_ at size, not
  _seen_ at size.
- **`--ff-cursive` (Reenie Beanie)** — a rationed hand-annotation touch, in the spirit of a
  marked-up proof: a signature, a margin note, a circled remark. Never for body copy, never
  more than one instance per page, and it must always look like human residue on a printed
  page rather than decoration.

**Type scale — use `--fs-*` only.** `globals.css` defines a UI/body tier (`--fs-4xs` through
`--fs-4xl`, shrinking under the small-screen media query) and a monumental display tier
(`--fs-display-section`, `--fs-display-hero`, with `--leading-display` / `--tracking-display`).
Unlike a system where the display tier is dead code, **here it is live and reserved**: only
`--ff-display` text may use it, and only for the primary statement and top-level section
headers. Everything else — including large sans headings — sizes from the `--fs-*` UI tier.
If a non-display element wants to be bigger than `--fs-4xl`, that's a signal the hierarchy is
wrong, not a licence to reach for the display tier.

**Rules:**

- Mono labels are uppercase and letter-spaced; numbering is conditional, not automatic (see
  Signature techniques).
- Display serif runs tight: negative tracking and sub-1 leading at large sizes, per the
  display tokens. Never letter-space the display serif open.
- Body paragraphs stay in a comfortable ~65–75 character measure regardless of container
  width.
- No raw px font sizes or arbitrary Tailwind size values (`text-[Npx]`) anywhere.
- Sentence case for headings and lowercase for navigation; avoid all-caps outside the mono
  label role.

### Named rules

**The One Monument Rule.** One display moment per viewport. If two things on a screen are
competing to be the biggest, neither is.

**The Reserved Tier Rule.** The monumental display tokens belong to the display serif alone.
A non-display element that wants to exceed the UI scale is a hierarchy problem, not a
licence to reach for the display tier.

**The Read vs Seen Rule.** The display serif is for type that is _seen_ at size; the
editorial serif is for type that is _read_ at size. Never swap them to save a font load.

## Layout & Spacing

**The grid is the system.** Content sits on a consistent multi-column grid with a shared
gutter, and elements declare their column span explicitly rather than being centered by
default. A reader should be able to sense the column edges without seeing them.

- **Containment is a primitive, not a per-section decision.** One wrapper component owns
  max-width, centering, and gutters (`--container-max`, `--content-max`, `--gutter`); every
  section renders through it. Never hand-roll `max-w-* mx-auto px-*` in a section.
- **Left-aligned is the default.** Centered composition is permitted for exactly two kinds of
  moment: the primary page statement, and a single quote/testimonial beat. Everything else
  aligns to the grid.
- **Whitespace is the material.** Vertical section rhythm comes from `--section-pad-y`, and it
  should feel almost uncomfortably generous. When a layout feels cramped, remove content
  before reducing space. Asymmetric whitespace — a wide empty column beside dense content — is
  preferred to symmetric padding.
- **Internal rhythm** uses Tailwind's default spacing scale (`gap-*`, `py-*`, `p-*`) for
  padding, gaps, and margins within a section. The `--space-*` tokens exist for CSS-authored
  values; don't mix approaches within one component.
- **Mobile follows desktop unless space forbids it.** The intent is the same composition,
  reflowed — not a separate design. Multi-column grids collapse to single column, hover-only
  affordances get a persistent equivalent, and display type steps down via the scale's
  small-screen tier. Anything that exists _only_ on mobile needs a reason.

### Named rules

**The Sensed Grid Rule.** A reader should be able to feel the column edges without seeing
them. Elements declare their span; nothing floats free of the grid.

**The Remove First Rule.** When a layout feels cramped, remove content before reducing space.
Whitespace is the material, not the leftover.

**The One Wrapper Rule.** Width, centering, and gutters are owned by a single containment
primitive. Hand-rolling `max-w-* mx-auto px-*` inside a section is a bug.

**The Two Centers Rule.** Centered composition is permitted for exactly two moments: the
primary statement, and a single quote beat. Everything else aligns left to the grid.

## Shape & Elevation

Flat and structural — depth comes from borders, tonal shift, and grid position, never from
shadows or blur.

- **Radius is tokenized, and the default is _softened_, not sharp.** Interactive and contained
  elements — buttons, inputs, bordered boxes, image containment, the floating nav shell —
  carry a barely-there radius (`--radius-sm`, in the 4–6px range) so edges read as cut paper
  rather than as a hard vector corner. `--radius-none` is reserved for genuinely structural
  lines: rules, dividers, full-bleed bands, grid decoration. `--radius-pill` is only for
  elements whose shape _is_ a pill (a status chip). Pick by role; never mix a sharp and a
  softened corner on the same element.
- **Borders as depth:** the hairline border for section dividers and quiet separation; the
  strong border where a boundary must read clearly. A horizontal rule is a legitimate,
  encouraged design element in this system.
- **No shadows, no glassmorphism, no gradients.** If an element must stand out, shift its
  background token, add a border, or give it more space.
- **Accent as indicator, not fill:** the accent is for small marks and interactive states.
  **One sanctioned exception:** a closing call-to-action band may take an accent fill, at most
  once per page, and only as the page's final beat.
- **Imagery is treated like print.** Images sit inside the grid with hairline containment, not
  bleeding rounded cards. A greyscale or low-saturation default with color on interaction is
  the house treatment, so that imagery never competes with the single accent.

### Named rules

**The Cut Paper Rule.** Contained and interactive elements carry a barely-there radius so
edges read as cut paper, not as a hard vector corner. Sharp corners are reserved for
structural lines.

**The Border Depth Rule.** Depth comes from a border, a tonal step, or position on the grid.
If the instinct is to add a shadow, the element needs space or a rule instead.

**The Indicator Rule.** The accent marks; it does not fill. The single exception is a closing
call-to-action band, once per page, as the final beat.

## The signature

A system can have a kit of techniques but it can only have **one signature** — the single
element the site is remembered by. Here it is the **process-dot registration system**.

Four small process dots (c/m/y/k) act as the site's maker's mark and its only piece of
persistent identity furniture. They anchor the navigation shell, and one of them — the dot
matching the accent ink — is _live_: it carries the site's only ambient motion, a slow pulse,
like a press still running. Where a page needs a mark rather than a rule, it gets a
registration mark drawn from the same family. The dots are the through-line that makes the
site feel like output from a single press run rather than a set of nicely typeset pages.

This is where the boldness is spent. **Everything else in the kit below is supporting
texture and must stay quieter than the dots.** If a new idea competes with the signature for
attention, the new idea loses. If a surface has no room for the signature, it doesn't get a
substitute mark invented for it.

### Named rules

**The Press Run Rule.** The process dots are the through-line that makes every surface read
as output from one press, not as a set of nicely typeset pages. They appear on every surface
or the site loses its spine.

**The Single Signature Rule.** A system may have a kit of techniques but only one signature.
Nothing else is allowed to become memorable at the dots' expense.

**The Live Dot Rule.** Exactly one dot is alive. The pulse is slow, low-contrast, and the
site's only ambient motion. A second animated mark kills the first.

## The opening statement

The primary statement on any surface is a **thesis, not a nameplate**. A name alone is a
missed opportunity in front of an audience deciding whether to hire someone.

- It states a claim the reader can evaluate: what he does, what it protects or produces, and
  under what conditions. Sourced from his own positioning language, not written fresh in
  marketing voice.
- It is set in the display serif, occupying the monumental tier, and it is the only display
  moment on that screen.
- Identity (name, role) sits beneath or beside it in the mono or sans register, as
  attribution — not as the headline.
- No tagline stacking. One statement, one supporting line at most, one action.

### Named rules

**The Thesis Rule.** The primary statement is a claim the reader can evaluate, not a
nameplate. A name alone in front of a hiring decision is a wasted viewport.

**The Attribution Rule.** Name and role sit beneath or beside the statement in the mono or
sans register, as attribution. They never become the headline.

## Signature techniques

The atmospheric and structural kit. Reuse these rather than inventing new ornament; each one
is rationed on purpose, and the rationing is what keeps the system from turning into pastiche.
All of it sits below the signature in the hierarchy of attention.

- **Process dots (c/m/y/k)** — the signature; see above for intent. Placement rules: the
  navigation shell always, plus at most one further quiet appearance per page. They are never
  a legend, never a color key, never a category system, and never expand into a palette.
- **Torn paper edge** — a delicacy. **At most one per page, and not on every page.** It marks
  a genuine change of ground (the transition out of the opening statement, or into a closing
  band), implemented as a masked/SVG edge rather than an image asset. Two on a page, or one on
  every page, kills it.
- **Grid decoration** — faint vertical column lines and small crosshair/registration marks
  drawn from `--color-grid-line` and `--color-crosshair`, sitting behind content on the
  `--z-grid` layer. Deployed selectively: opening statements and index/grid surfaces, not
  behind long-form reading. It must sit at the threshold of perception — if a viewer notices
  it as a graphic rather than as texture, it's too strong.
- **Mono production labels** — section-level headings carry a mono meta line whose weight
  scales with importance. Establish one prefix convention in code and hold it everywhere;
  don't mix forms at the same level. **Structure must be honest:** a numbered prefix is only
  permitted where order genuinely carries information the reader needs — a real process, a
  dated timeline, an explicitly ranked set. Applying `01 / 02 / 03` to a set of unordered
  sections is decoration pretending to be structure, and it is the most common tell of a
  templated layout. Unordered groups get an unnumbered label. When in doubt, drop the number.
- **Scroll reveal** — a single shared reveal primitive built on `IntersectionObserver`.
  Content must render fully visible in server markup and only become hidden after mount, so
  no-JS and reduced-motion visitors never see an empty page. One primitive, reused; do not
  write a second observer.
- **Contracting navigation** — navigation begins flush and full-width at the top of a page,
  then on scroll contracts into a floating, self-contained shell that reads as a small object
  laid on the paper. Lowercase links, mono or sans, with the process dots anchoring one end,
  separated by a plain `|` pipe character (not a hairline rule — the pipe reads as a typeset
  mark, in keeping with the mono/sans nav voice). The transition is a single continuous state
  change, not two separate components swapping.
- **Index rows over card grids** — collections of work are presented as typographic rows
  (identifier, title, discipline tags) with imagery revealed on interaction, rather than as a
  grid of image cards. This keeps the type doing the work and the page quiet at rest. On
  mobile, where hover doesn't exist, rows resolve to a simple stacked list with the image
  shown persistently.
- **Editorial quote beat** — testimonial and pull-quote content appears as a large centered
  serif statement with a mono attribution line, one at a time. It is a full breathing section,
  not a card, and never a wall of three quotes side by side.

### Named rules

**The Delicacy Rule.** The torn edge appears at most once per page and not on every page. Two
on a page, or one on every page, turns a signature move into wallpaper.

**The Honest Structure Rule.** A number, rule, or divider must encode something true. Numbers
mark real sequences; rules mark real boundaries. Structure-shaped decoration is the most
common tell of a templated layout.

**The Threshold Rule.** Grid decoration sits at the threshold of perception. If a viewer
notices it as a graphic rather than as texture, it is too strong.

**The One Observer Rule.** There is a single shared reveal primitive. A second scroll
observer written by hand is a bug, not a variation.

## Motion

Subtle, physical, and reversible. Motion exists to make the page feel _considered_, not to
demonstrate that motion is possible. Nothing should ever delay reading.

- **Lenis is the only motion dependency.** Smooth scroll is provided app-wide by a single
  provider. **No framer-motion, GSAP, or react-spring** — don't add one without discussing it
  first. Everything else is CSS transitions and `IntersectionObserver`.
- **Duration and easing come from tokens** (`--dur-fast`, `--dur-base`, `--dur-slow`,
  `--dur-reveal`, `--ease-out`, `--ease-inout`). No ad-hoc durations or bezier curves in
  component code. Interaction feedback is fast; entrances are slow and eased out.
- **Sanctioned motion moments:** the entrance of the primary page statement, section reveals
  on scroll, the navigation contraction, image treatment shifts on interaction, the accent dot
  pulse, and standard hover/focus feedback on interactive elements. That list is deliberately
  short.
- **Never:** parallax layers, scroll-jacked section snapping, looping background animation,
  animated counters, text that types itself, or entrance animations on body copy.
- **`prefers-reduced-motion` must be respected everywhere animation happens**, including
  smooth scroll and hover transitions. A component that animates without a reduced-motion
  no-op is a bug, not a pattern to copy.

### Named rules

**The Never Delay Rule.** Motion makes a page feel considered; it never makes a reader wait.
Nothing gates content behind an animation.

**The One Library Rule.** Lenis is the only motion dependency. No framer-motion, GSAP, or
react-spring without discussing it first. Everything else is CSS transitions and an
`IntersectionObserver`.

**The Token Timing Rule.** Durations and easing come from tokens. An ad-hoc bezier curve in
component code is drift.

## Component principles

There is a global kit and there are page-local compositions, and the split is enforced.

- **Global kit** — anything reused across surfaces: the interaction primitive (button/link,
  with color set through typed props resolved to CSS variables, never raw color values), the
  width-containment wrapper, the section shell that renders a mono label plus content, the
  navigation shell, the reveal primitive, and structured-data output. These live in the shared
  components directory and are the first place to look before writing anything new.
- **Page-local** — one-off compositions specific to a single surface. They stay next to that
  surface. **Never import a page-local component across surface boundaries;** if a second
  surface needs it, promote it into the global kit at that moment.
- **Focus states are not optional.** A visible focus ring built on `--color-focus` is baked
  into the interaction primitive so every button and link inherits it. Never remove it.
- **Semantics before styling.** Real headings in order, real lists, real buttons versus links,
  labelled form fields. The Swiss look depends on typographic hierarchy that matches the
  document outline anyway, so the two goals never conflict here.

### Named rules

**The Promotion Rule.** A page-local component is never imported across surface boundaries.
The moment a second surface needs it, it is promoted into the global kit.

**The Inherited Focus Rule.** The focus ring lives in the interaction primitive so every
button and link inherits it. It is never removed and never styled invisible on a light
ground.

**The Outline Rule.** Real headings in document order, real lists, real buttons versus links,
labelled fields. The typographic hierarchy and the document outline are the same thing here.

## Voice & copy

Copy is design material, and it is the fastest way for a portfolio to read as generated.
The reader is a commercial decision-maker, so the register is **a senior operator writing
plainly to a peer** — specific, unhurried, no pitch.

- **Specific beats clever.** Name the actual problem, the actual constraint, the actual
  outcome. "Unified 14 sub-brands onto one identity system" earns attention; "crafting
  unforgettable brand experiences" loses it.
- **No agency filler.** Banned in every register: passionate, elevate, bespoke, curated,
  seamless, unlock, journey, storytelling, synergy, "we believe," "let's create something
  amazing together."
- **Active voice, plain verbs, sentence case.** An action keeps the same name across the whole
  flow: a control that says "Send message" produces confirmation that says "Message sent."
- **Labels label, examples demonstrate.** No element quietly does two jobs. A mono label is a
  label, not a slogan set small.
- **Placeholder copy is written, not lorem.** Stand-in content still follows every rule above,
  because placeholder voice tends to survive into production.
- **Empty and failure states are direction, not mood.** Say what happened and what to do next,
  in the interface's voice. Errors don't apologize and are never vague.
- **Never invent credentials.** No fabricated client names, metrics, awards, or testimonial
  quotes. If a real value isn't available, the copy says so plainly or the element waits.

### Named rules

**The Specific Rule.** Name the actual problem, constraint, and outcome. "Unified 14
sub-brands onto one identity system" earns attention; "crafting unforgettable brand
experiences" loses it.

**The Same Name Rule.** An action keeps its name through the whole flow. A control that says
"Send message" produces confirmation that says "Message sent."

**The One Job Rule.** A label labels, an example demonstrates. Nothing quietly does double
duty, and no slogan hides inside a mono label.

**The No Invention Rule.** Never fabricate a client, metric, award, or quote. Placeholder
content still obeys every rule above, because placeholder voice survives into production.

## Quality floor

Non-negotiable on every surface, and never announced in the UI:

- **Contrast:** body and UI text meets WCAG AA against its own background token. The muted and
  subtle text tokens are for hierarchy, not for making required information hard to read, and
  they are never used for body copy on a tinted surface without checking.
- **Keyboard:** every interactive element is reachable and operable by keyboard, in a logical
  order, with a visible focus ring built on `--color-focus`. Focus is never removed, and never
  styled to be invisible on a light ground.
- **Reduced motion:** `prefers-reduced-motion` no-ops all animation including smooth scroll,
  reveals, and the signature pulse.
- **No-JS and pre-hydration:** content is present and readable in server-rendered markup.
  Nothing is hidden by default and revealed by script.
- **Responsive floor:** works down to a 320px viewport with no horizontal scroll and no
  clipped display type.
- **Images:** meaningful alt text; decorative marks and grid lines are `aria-hidden`.
- **Motion safety:** nothing flashes, strobes, or moves fast enough to distract while reading.
  The signature pulse is slow and low-contrast by design.

### Named rules

**The Silent Floor Rule.** The quality floor is met on every surface and announced on none.
No accessibility badges, no "optimized for" copy.

**The Server First Rule.** Content is present and readable in server-rendered markup. Nothing
is hidden by default and revealed by script, so reveals must start visible and hide only
after mount.

**The Muted Is Not Faint Rule.** The muted and subtle text tokens exist for hierarchy, not
for making required information hard to read. Body copy on a tinted surface gets checked.

## Pre-ship critique

Before calling any surface done, run this. It is a design review, not a lint pass.

1. **The relabel test.** Could this screen be handed to a photographer or an architecture
   studio unchanged? If yes, it hasn't earned its identity.
2. **The default test.** Which single element here could not have come from a generic
   "editorial minimal portfolio" prompt? If the answer is none, fix that before shipping.
3. **The signature test.** Is the process-dot system still the loudest identity element, or
   has something started competing with it?
4. **The audience test.** Reading only the headings and mono labels, would a CMO with two
   minutes understand what he does and why it's worth money?
5. **The honesty test.** Does every number, rule, divider, and label encode something true, or
   is some of it structure-shaped decoration?
6. **The space test.** Is anything crowded? If so, remove content before reducing space.
7. **The Chanel rule.** Name one element to remove, then remove it. There is almost always
   one.

## Golden rules

1. One display moment per viewport, one accent, one torn edge per page, one quote at a time,
   one signature for the whole site.
2. If a value could be a token, it is a token — colors, sizes, spacing, duration, easing,
   radius, z-index.
3. Left-aligned to the grid unless the moment is one of the two sanctioned centered cases.
4. Structure must encode something true. Number only real sequences; rule only real
   boundaries.
5. Cream, serif, and hairlines are the floor. Every surface owes one move that isn't a
   default.
6. Copy is design. Specific and plain beats polished and empty, every time.
7. When something feels unfinished, the answer is more space or better type, not more
   ornament.
8. Restraint is the portfolio's actual argument. Anything added must survive the question:
   _does this make the system look more disciplined, or just more decorated?_
