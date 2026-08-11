# PRODUCT.md

Product spec and source of truth for James Loder's portfolio. Pairs with DESIGN.md (how it
looks) and, once code exists, AGENTS.md (how it is built). This file defines what the site
is, who it is for, what it must achieve, and what content and structure deliver that. Agents
read this before deciding information architecture, copy, pages, or SEO.

<!-- SEED: written before implementation. Section 8's content model is provisional — once
Payload CMS schema exists, update it here to match, don't let the two silently diverge. -->

---

## 1. What this is

A personal portfolio for an Art Director and Brand Manager. It is evidence of judgment, not
a services page: no packages, no pricing, no client-acquisition funnel. It proves he can run
a creative system under pressure, then makes it effortless for the right person to reach him
about a role.

One line: "Art Director and Brand Manager who builds creative systems that stay coherent
under pressure. See the work, then get in touch."

## 2. Audience (one reader, two moments)

**CMOs and hiring executives**, evaluating him for a full-time Art Director / Brand Manager
role. Two moments, same reader:

1. **The skim (two minutes).** Scanning for seniority signal, category of work, and whether
   the positioning matches an open role. Headings, case-study titles, and role tags carry
   this weight; if the skim fails, nothing else gets read.
2. **The read (twenty minutes).** Evaluating actual judgment: how he frames a problem, what
   trade-offs he made, whether outcomes are real. Case-study depth and testimonials carry
   this weight.

Creative peers may visit, but the site is not written for them; if a decision serves a peer
audience over a hiring exec, the hiring exec wins.

## 3. Goals and success signals

Primary goal: get contacted for full-time roles, by email or LinkedIn.
Secondary goals: communicate range across brand strategy, art direction, and corporate
identity; build trust fast enough to survive a two-minute skim; rank for his name and role
terms; give a hiring manager everything they need without a call.

Success signals to design toward (instrument later): email/LinkedIn contact-outs, resume
downloads, case-study read-through and time on `/work/[slug]`, returning visits from search,
and indexable pages ranking for name + role terms.

## 4. Positioning and voice

Composed, deliberate, specific. Show, don't sell. No agency filler (see DESIGN.md's Voice &
copy for the banned-word list). Outcomes and scope first, discipline second. Plain verbs,
sentence case, active voice. First person, in his own register: "I lead," "I build," "I
unify," drawn from his own positioning language, not written fresh in marketing voice. Source
lines to anchor from:

- "I lead at the intersection of brand strategy, art direction, and corporate identity,
  unifying visual systems to protect enterprise equity and drive long-term commercial value."
- "I build creative systems that stay coherent under pressure."

## 5. Conversion model

There is no booking flow and no lead-gen form funnel. The site is a credibility instrument
for a job search, not a sales instrument for freelance work.

- **Primary path:** direct contact, by email and LinkedIn. Both are persistent (nav and
  footer) and repeated on `/contact`.
- **Secondary path:** resume download, linked in the nav (`/resume`) and again in the
  `/contact` closing band.
- **Tertiary path:** a short contact form on `/contact` (name, email, message) for people who
  prefer not to leave the site. No budget/timeline fields; there is no engagement to scope.

No embedded scheduler, no "book a call." If that ever changes (e.g. he starts consulting on
the side), update this section rather than letting build drift from spec.

## 6. Information architecture

A small, real-route site. No single-page funnel: a hiring exec arrives from a specific case
study or a LinkedIn link as often as from the home page, so every page has to stand alone.

Sitemap:

- `/` Home — the opening statement (thesis, not nameplate; see DESIGN.md), a short approach
  paragraph, selected work, testimonials, and a closing contact band.
- `/work` Work index — all case studies as index rows (see DESIGN.md's Index rows pattern),
  placeholders until real projects are added.
- `/work/[slug]` Case study — the full write-up for one project.
- `/about` — bio, approach, and a stack/discipline summary. No dedicated career timeline
  component; keep career narrative prose-driven, add a timeline only if the bio outgrows
  prose.
- `/contact` — email, LinkedIn, resume link, and the short form.
- `/resume` — redirects to or serves the current resume PDF.
- Utility: `sitemap.xml`, `robots.txt`, custom 404.
- **Not in scope for launch:** `/blog`. Vague future-proofing sense only; do not build routes,
  RSS, or content models for it now. If it gets scheduled, add it here as its own section
  first.

Global nav: Work, About, Contact, plus a persistent resume link. Lowercase per DESIGN.md's
navigation convention.

## 7. Page specs (purpose + must-have content)

- **Home.** The opening statement carries the thesis (his own positioning line, not just his
  name). A short approach paragraph follows. Then selected work: a handful of case studies,
  linking to `/work/[slug]`, not the full index. One testimonial beat. One closing contact
  band. Nothing else competes with the opening statement for attention.
- **/work index.** Case studies as index rows: identifier, title, role/discipline tags,
  timeframe. No filter UI at launch; the set is small enough to scan unfiltered. Add a filter
  only once there are enough case studies that unfiltered scanning breaks down, and treat that
  as a spec change, not a silent addition.
- **/work/[slug] case study.** Problem, approach, decisions made and why, outcome, and where
  real, a metric or a testimonial tied to that project. Real screenshots/gallery. No
  placeholder metrics; if a number isn't real, the section is omitted, not filled with a
  vague claim.
- **/about.** Portrait or a considered alternative, an intro statement, an approach paragraph,
  and a stack/discipline summary (the tools and systems he actually works in: brand
  guidelines, design systems, production pipelines). Closing CTA band: resume, email,
  LinkedIn.
- **/contact.** Email and LinkedIn as the lead options, resume link, and the short 3-field
  form with idle/submitting/success/error states. No availability-clock gimmick unless it's
  true and worth maintaining.

## 8. Content model (fields agents should assume)

**Provisional.** No Payload CMS schema exists yet. This is the shape to build toward when the
schema is created; once it exists, this section gets updated to match the real schema, not
the other way around.

- **Case study:** title, slug, client/context (real or "confidential" if under NDA, never
  fabricated), discipline/role tags (e.g. brand strategy, art direction, identity), timeframe,
  summary (1-2 lines), problem, approach, outcome, metrics[] (only where real), testimonial
  ref, gallery[], cover image, featured (bool), order, SEO {title, description, ogImage}.
- **Testimonial:** quote, author name, role/company, related case study (optional), featured
  (bool).
- **Profile/site config:** name, role title, location, social links (LinkedIn, email),
  resume URL.

Content should be data-driven from Payload so adding a case study never requires touching
layout or component code.

## 9. SEO requirements

Technical:

- Server-render or statically generate every page (Next.js App Router, SSG/ISR). No
  client-only content for anything that should rank.
- Per-page unique `<title>` and meta description; canonical URLs; Open Graph + Twitter cards
  with per-case-study OG images.
- `sitemap.xml`, `robots.txt`, clean human-readable slugs.
- One `<h1>` per page; logical heading order; descriptive `alt` on every image; descriptive
  link text.
- Core Web Vitals as a feature: optimized images (next/image, AVIF/WebP, sized), lazy-load
  below the fold, preload the display font, minimal JS, fast LCP.

Structured data (JSON-LD):

- `Person` on home/about.
- `BreadcrumbList` on `/work/[slug]`.
- `CreativeWork` (optional) on case studies.

On-page:

- Target queries: his name, "Art Director," "Brand Manager," and the specific disciplines
  (brand strategy, corporate identity, visual systems). Work these naturally into titles,
  headings, and copy; never keyword-stuff.
- Internal linking: home to case studies to contact.

Accessibility doubles as SEO: semantic HTML, labeled controls, sufficient contrast (see
DESIGN.md's Quality floor).

## 10. Trust and proof

Testimonials placed near the case studies and the closing contact band they support. Resume
download for hiring managers who want the traditional artifact. Real screenshots, named
outcomes, and specific scope language beat adjectives, every time. If a client or employer
can't be named, say "confidential" rather than inventing a placeholder name.

## 11. Non-goals

No pricing, packages, or freelance-style service menu. No lead-gen gating or email wall. No
popups or aggressive capture. Not a blog-first site; writing is out of scope at launch. No
fabricated metrics, clients, or testimonials; if a number or quote isn't real, it's omitted.
No booking scheduler unless the conversion model in §5 changes.

## 12. Build expectations

Next.js (App Router) + TypeScript + Tailwind, Payload CMS for case studies and testimonials
(schema TBD, see §8), token-driven styling per DESIGN.md, Lenis for smooth scroll per
DESIGN.md's Motion section. Everything responsive to mobile per DESIGN.md's mobile-follows-
desktop rule, and reduced-motion safe. Dark mode not in scope (DESIGN.md keeps the token
structure toggle-ready; no UI work required now).

## 13. Launch checklist

- All pages render server-side with unique metadata and OG images.
- Sitemap, robots, canonicals, 404 in place.
- Lighthouse: strong Performance, Accessibility, Best Practices, SEO scores; Core Web Vitals
  green on mobile.
- Email, LinkedIn, resume link, and the contact form all work; form has success/error states.
- At least 3 real case studies and 2-3 real testimonials before calling it launched.
  Placeholders do not ship as final content.
- Structured data validates; social previews render correctly.
- Keyboard and screen-reader pass on nav, the contact form, and case studies.
