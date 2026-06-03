# Booga Agents — Pitch Deck Build Instruction (for Replit)

> **Use:** Paste this file into Replit **together with** the seven source files (`pitch-deck-brief.md`, `pitch-deck-copy.md`, `teaser-deck-brief.md`, `teaser-deck-copy.md`, `pricing-leave-behind-brief.md`, `pricing-leave-behind-copy.md`, `plans-and-pricing-brief.md`).
> This document is the **wrapper**: it tells Replit what to build, the non-negotiable brand/naming/voice rules, the content that is forbidden, and the normalisations to apply on top of the source copy. **Where this instruction and a source file disagree, this instruction wins** — except for pricing numbers, where `plans-and-pricing-brief.md` is the source of truth.
> Owner: Mario Baburić, Founder & CEO, Booga Enterprise. Built by RZLT.

---

## 0. Objective & definition of done

Build a **Booga Agents enterprise sales deck** that Dr. Mario Baburić presents live to enterprise prospects.

**Primary deliverable:** the **in-person pitch deck** (`pitch-deck-copy.md` + `pitch-deck-brief.md`), ~14 core slides + an on-request appendix.

**Optional secondary deliverables** (build only if requested — see §7): the **email teaser deck** and the **confidential plans & pricing leave-behind**.

**Done means:**
- Every slide renders the **exact approved copy** from the copy files, with the **naming, compliance, and placeholder normalisations in §2–§4 applied**.
- The deck is **on-brand** using the supplied brand tokens (§3) — not invented colours.
- It runs **full-screen, presenter-ready** (keyboard navigation, a speaker-notes view, PDF export). See §5.
- **No forbidden content** (§2.3) appears anywhere.
- All `[bracketed]` items render as **clearly-styled, editable placeholders** — never invented values.
- The QA checklist in §8 passes.

---

## 1. What it is, who it's for

- **Product:** Booga Agents — *Enterprise AI Automation & Analytics Platform.*
- **Company / publisher / owner:** Booga Enterprise (the umbrella company). Mario speaks *for* the company and *about* the product.
- **Audience:** senior **business** decision-makers at enterprise prospects (managing partners, COOs, heads of operations) — **not** a technical audience. Sell value and outcome; technical depth is on tap via the appendix, not on display.
- **Tagline (use verbatim):** *"Autonomous workflows. Enterprise control. Built for scale."*
- **Deck spine (the recurring motif):** **Connect → Understand → Act**, all wrapped in **Trust**. Reuse this triad as a progress indicator on section dividers.
- **Lead example:** a **law firm**, labelled `[legal example]` on the relevant slides. The platform story is universal; the legal firm is the concrete illustration and is **swappable per vertical**. Keep `[legal example]` slides clearly editable.

---

## 2. Hard rules — read before generating anything

### 2.1 Naming (non-negotiable)

Booga ships **three names that must never be interchanged**:

| Name | Use it for |
|---|---|
| **Booga Enterprise** | The company. Legal entity, copyright/footer, Mario's byline, "owned by." |
| **Booga Agents** | **This product.** All product features, capabilities, the pitch itself. |
| **Booga One** | The individuals product. Appears here only in the single "start small, scale up" line. |

**Never** write **"Buga"** (any context). **Never** write **"Booga" alone** — always one of the three full names.

**Normalisation to apply to the source copy (the copy files use "Booga" alone throughout — fix it):**
- Standalone **"Booga"** referring to the product → **"Booga Agents"** on first mention in a slide, then **"Booga Agents"** or **"the platform"** thereafter.
- When the sentence refers to the *individual things that run* (not the product), use lowercase **"agents" / "an agent"** — do **not** write "Booga agents" as a product name. e.g. *"Agents do real, repeatable work…"*
- Company / legal / footer / byline / copyright contexts → **"Booga Enterprise"** (e.g. "© Booga Enterprise", "Dr. Mario Baburić, Founder & CEO, Booga Enterprise").

Representative fixes (apply the rule globally, not just these):
- "Connect **Booga** to SharePoint" → "Connect **Booga Agents** to SharePoint"
- "**Booga** keeps a read-only mirror" → "**Booga Agents** keeps a read-only mirror" (or "the platform keeps…")
- "Point **Booga** at your document estate" → "Point **Booga Agents** at your document estate"
- "**Booga** reads every file" → "**Booga Agents** reads every file"
- "**Booga's** Intelligence Layer" → "**Booga Agents'** Intelligence Layer" (or "the platform's Intelligence Layer")
- "Most software forgets you… **Booga** doesn't" → "…**Booga Agents** doesn't"
- "One week at a law firm, with **Booga**" → "…with **Booga Agents**"
- "Why **Booga**" → "Why **Booga Agents**"
- Speaker note "talk to the **Booga** column" → "the **Booga Agents** column"
- Cheat-sheet "**Booga** puts AI to work…" → "**Booga Agents** puts AI to work on your knowledge, inside your own walls."

### 2.2 Voice & vocabulary

- **Voice:** confident, technical, grown-up. Outcomes in headlines, features in bullets. Contrast pattern *"Most software does X. Booga Agents does Y."* Three-noun pattern (the tagline). **No buzzword soup** ("synergize", "leverage", "AI-powered solutions"). **No emojis.** No hype, no filler.
- **Vocabulary (forward-only):** **agent** (not bot — "Bots" is reserved for the customer-facing Bots plugin) · **workflow** (not flow/process/pipeline) · **plugin** (not module) · **stack** (not environment) · **tenant** (not customer, in technical copy) · **Intelligence Layer** (not "memory feature") · **Audit / Compliance / Governance** (not "logging").

### 2.3 Forbidden content — must NOT appear anywhere

- **Compliance:** do **not** print **"SOC"**. Approved framework set is **SOX, GDPR, HIPAA, ISO 27001, PCI DSS**. Frame as **"compliance reporting for…"** / **"supports compliance with…"** — never "certified" (unless a confirmed certification is supplied). Replace any "SOC" wordmark with the approved set, or with the subset the slide needs (GDPR · ISO 27001 · HIPAA).
- **No financial vertical:** no FinSight, EngageIQ, Booga Finance, Earnings Copilot, Valuation Assistant, "US Stocks data spine", or named financial-data connectors (Bloomberg / Alpha Vantage / FMP / Polygon). *(The source copy is already clean here — keep it that way.)*
- **No company internals:** no funding amount, runway, team size, solo-founder framing, ARR/revenue projections, or internal targets.
- **No predecessor entity:** no "Booga App Ltd" or "booga.online".
- **No competitor attacks:** do not name Microsoft, Google, or any competitor as a target. Position **alongside**, not against. Keep the Slide-11 comparison to the honest generic alternatives ("Generic AI copilots", "Build it yourself", "Point tools") — **do not** substitute real brand names.
- **No invented anything:** no fabricated customers, logos, metrics, quotes, numbers, regions, providers, or capabilities beyond what the source briefs state.

### 2.4 Content status — resolved vs still open

The client files (the seven pitch docs + the Brand Guidelines) now resolve most of what was previously gated. **Fill these in — do not leave them as placeholders:**

- **Brand tokens** — RESOLVED. Use the palette, type, and logo rules in §3. The logo **SVG file** is being supplied separately by the marketing manager; drop it in when received (everything else logo-related — colour rules, clear space, lockup — is specified in §3).
- **Pricing** (leave-behind only) — RESOLVED. Use the figures from `plans-and-pricing-brief.md`: **Team $149 / Business $249 / Enterprise $499** per seat/month; minimums **10 / 25 / 25**; annual = 10× monthly (≈ two months free). These are the client's authoritative numbers (grounded in `product_master.json`). Keep them **only** in the confidential leave-behind; the live deck and teaser stay price-free.
- **Compliance frameworks** — RESOLVED. Use **SOX, GDPR, HIPAA, ISO 27001, PCI DSS** (the client's own citable-facts list, in `pitch-deck-brief.md` §0). **Drop "SOC"** — it is a copy inconsistency on two trust strips, not an approved claim. Frame as *"compliance reporting for…"*, never "certified."
- **Presenter byline** — RESOLVED. Presenter/owner is **Dr. Mario Baburić, Founder & CEO, Booga Enterprise**. Use that byline on the cover and close.

**Still genuinely open — render as a clearly-editable placeholder (the client files themselves flag these as pending or per-prospect):**

- **Design-partner reference** (Slide 12) — default to the anonymised wording the copy already permits ("a leading law firm"). A named credit or partner logo needs **written permission** (`pitch-deck-brief.md` open item #1). Do not add a name/logo until supplied.
- **Verified outcome metric** (Slide 12) — none exists in the files. **Omit** rather than invent; leave a styled slot if a verified number is later supplied.
- **Connector wording** (Slide 5 / A2) — use the copy as written; the client flags (`pitch-deck-brief.md` open item #6) that exact SharePoint/M365 and Salesforce/NetSuite wording must be confirmed with the product team **before printing**. Pre-print check, not a build blocker.
- **Data-residency line** (Slide 10) and **named languages** (Slide 6) — per prospect by design. Default to generic ("your languages"; no specific region); the legal example may name Croatian + English. Swap per prospect.
- **Date, contact email, booking link** — `[FILL per meeting]`.

---

## 3. Brand system (from Booga Enterprise Brand Guidelines, 2026)

Apply these exactly. The brand is **light-first** — *"white space as the continent,"* green used with restraint. Do **not** use any colour, font, or logo treatment outside this system.

### 3.1 Colour palette (use these hex values; do not invent shades)

| Token | Name | HEX | Role |
|---|---|---|---|
| 01 | **Light** | `#F6F6F6` | Default slide/background base. The dominant surface — keep it generous. |
| 02 | **Stone** | `#BEBEBE` | Neutral grey: secondary text, dividers, table gridlines, muted UI. |
| 03 | **Blackout** | `#121212` | Primary headline/body text on light. Also the dark-section background — used **sparingly** for one high-contrast moment. |
| 04 | **Light Green** | `#74E4B0` | Soft green: gradient light end, subtle fills, highlight panels, "yes/✓" greens. |
| 05 | **Vibrant Pop** | `#00AA5B` | **The accent.** Reserve for the one word/number that matters, CTAs, the highlighted comparison column, key icons. Used sparingly — *"moments of support, assurance, delight, calls to action."* |
| 06 | **Deep Base** | `#145738` | Deep green: logo wordmark on light, heading accents, deep-green panels, the dark gradient end. |

**Brand gradient** (secondary palette, for hero/cover/section-divider backgrounds and illustration fills only): Deep Base → Vibrant Pop → Light Green → near-white. Per the guide, gradients are *"background imagery for core marketing graphics"* — not for body text areas.

### 3.2 Typography

- **Inter** for everything (print + digital). Weights available: **Light, Regular, Medium, Bold.**
- Headlines: Inter **Bold** (large display titles may also be Light/Regular for the calm look on hero slides — see brandbook applications). Body/bullets: **Regular**. Labels, stats, table headers: **Medium**.
- An accent word inside a headline may be set in **Vibrant Pop green** (e.g. the brandbook's *"Agentic AI Companies:"* in green). One accent per headline, max.
- **Do not use any other font.**

### 3.3 Logo (Booga Enterprise corporate lockup)

- The deck carries the **Booga Enterprise** logo (the company is the publisher/owner). "Booga Agents" is the product name, set **typographically in copy** — there is no separate Booga Agents logo in the brandbook, so do not invent one.
- Lockup = the 2×2 icon (three rounded squares + one solid circle, bottom-right) + the "Booga Enterprise" wordmark. Single-line lockup is the default.
- **Colour rules:** brand/green or black logo on light backgrounds; **white** logo on dark or green backgrounds. (Guide: *white on darker backgrounds, black on lighter backgrounds.*)
- **Clear space:** equal to the cap-height of the logo squares on all sides — nothing intrudes.
- **Never:** stretch/manipulate the logo, recolour it outside the palette, or change its font.
- **SVG file:** supplied separately by the marketing manager — drop into the cover (top-left or top-centre, per brandbook applications) and the close.

### 3.4 Imagery & motion

- **Signature look:** translucent 3D **green glass** forms, stacked glass panels, soft green gradient fields — green-and-white, premium, calm. This is the brand's real aesthetic (brandbook moodboard, page 011).
- Illustrations should **either** carry the brand gradient **or** be green-and-white, for consistency.
- **No** photos of people, **no** robots, **no** glowing brains, **no** handshakes, **no** generic stock. Explanatory visuals (Connect → Understand → Act diagram, comparison table, timeline) are clean and typographic with a single green accent; hero/cover/section backgrounds may use the green-glass / gradient motif.
- **Canonical reference:** brandbook page 013 ("Applications") shows exactly how a finished Booga content cover looks — light textured background, logo, green accent word, Blackout headline, glass imagery on one side. Match that.
- **Motion** (for the web deck): *"Calm. Continuous. Intelligent."* Subtle fades/cross-dissolves between slides; an optional slow gradient drift on the cover/section dividers. Nothing bouncy or flashy.

### 3.5 Brandbook stat-graphic caution

The brandbook's illustration examples (page 012) are **visual-style references only**. If you recreate that stat/callout style, use **canonical facts**, not the illustration's placeholder numbers: **11 plugins** (not "12 modules"), and the word **plugins** (not "modules"); **600+ endpoints** is correct. The *"$1B"* figure refers to **Mario's track record at Infobip** (citable as founder background) — it is **not** Booga's own funding, which must never appear.

---

## 4. Slide map — in-person deck (verbatim copy from `pitch-deck-copy.md`, normalised per §2)

Use the headline/subhead/bullets exactly as written in `pitch-deck-copy.md`, with §2 applied. Speaker `NOTE:` text goes into the **speaker-notes view only — never on the slide.** Each slide's art direction and AI image prompt are in `pitch-deck-brief.md`.

1. **Cover / hook** — *"Put your firm's knowledge to work — without it ever leaving your control."* Sub: *Booga Agents — Enterprise AI Automation & Analytics Platform.* Footer: **Dr. Mario Baburić, Founder & CEO, Booga Enterprise** · `[date]` · Confidential. Booga Enterprise logo top-left/top-centre. Light textured background with a faint document-grid-to-nodes / green-glass motif (per brandbook page 013).
2. **Why now** — *"AI is finally good enough to do the work. Most enterprises still can't use it."* Capability-vs-adoption gap diagram.
3. **The problem** — *"Your knowledge is your edge. Today it's trapped."* Three cards: Trapped / Expensive / Risky.
4. **Meet Booga Agents** — *"Booga Agents puts AI to work on your knowledge — inside your own walls."* Hero diagram: **Connect → Understand → Act** inside a **Trust** border.
5. **Connect** — *"We come to your data. Your data doesn't come to us."* One-way, read-only SharePoint/M365 mirror. *(Apply naming fix; gate connector specificity per §2.4.)*
6. **Understand** — *"Thousands of documents become organized, searchable knowledge — on their own."* Reads everything (scanned/legacy/email/multi-language); organises itself; stays current. Before/after visual.
7. **Act** — *"Now your knowledge works for you."* Agents draft replies, draft from precedents, bring in outside data. Stress **human-in-the-loop** (agents draft, professionals decide).
8. **A day in the life** `[legal example]` — *"One week at a law firm, with Booga Agents."* 9:02 → 9:15 timeline; bridge to the live demo.
9. **It remembers** — *"Most software forgets you the moment you log out. Booga Agents doesn't."* Intelligence Layer; value compounds. The moat.
10. **Built on trust** — *"Your data. Your stack. Your rules."* Four pillars: isolation / one-way read-only / audited end-to-end / governed access. **Compliance strip = approved set only (no SOC)**; framed as reporting, not certification.
11. **Why Booga Agents vs. the alternatives** — *"The build-vs-buy-vs-risk decision — settled."* 4-row comparison table; Booga Agents column highlighted. **Generic alternatives only — no named competitors.**
12. **Proof / outcomes** — *"What changes when the knowledge works for you."* Outcome statements. `[CONFIRM: design-partner reference + logo permission]`; one verified metric only if available.
13. **How you start** — *"Start where you are. Scale when you're ready."* Three-step ladder cards (Team → Business → Enterprise) — **no prices on the live deck.** "Detailed plans & pricing available on request."
14. **Close / CTA** — *"See it on your own data."* 30-minute walkthrough on a sample of their documents. Tagline + `[contact]` + `[booking link]`.

**Appendix (separate; pull up only on request):** A1 Security & isolation · A2 Integrations (`[CONFIRM connectors]`) · A3 How agents are built (plain-English → workflow) · A4 Document pipeline · A5 FAQ (*Booga to supply approved answers* — do not invent). Style lighter than the core deck.

**Citable facts available** (use only where the brief calls for them; don't pad): 600+ documented REST endpoints; compliance reporting for SOX/GDPR/HIPAA/ISO 27001/PCI DSS; 7-year default audit retention; tenant-isolated infrastructure (own database, own vector index, own region); multilingual document extraction.

---

## 5. Technical / output spec

- **Format:** a self-contained **web slide deck** (e.g. reveal.js or a React + Tailwind slide app). One project; no external login required to present.
- **Present mode:** full-screen, **keyboard/arrow navigation**, slide counter, section progress showing the Connect → Understand → Act position.
- **Speaker-notes view:** the `NOTE:` copy must be available to the presenter (e.g. reveal.js speaker view), **never printed on the slide**.
- **Export:** must export cleanly to **PDF** (for the leave-behind and email use). Keep exported file sizes email-friendly (target < 5 MB for the teaser).
- **Placeholders:** render every `[bracket]` as a visually distinct, editable field/token so Mario or the agency can fill it without touching code.
- **Responsive:** legible both projected full-screen and as inline images in an email (relevant to the teaser).
- **No browser storage APIs** if built as an artifact-style single file. Keep all state in memory.
- **Accessibility:** real text (not text baked into images), sufficient contrast, logical heading order.

---

## 6. Image generation (if Replit generates slide art)

Follow the brand imagery rules in **§3.4** and the per-slide **AI image prompts** in the brief files. Where a brief prompt says "dark calm palette," override to the brand's **light-first** system (Light `#F6F6F6` base, Vibrant Pop `#00AA5B` accent, green-glass/gradient motif) — keep Blackout dark sections to one sparing moment. Constraints: clean enterprise infographics / diagrams / typographic slides, or the green-glass/gradient hero motif; **no photos of people, no robots, no glowing brains, no handshakes**; one green accent per slide; generous whitespace. Generated art must never embed claims, numbers, customers, or logos that aren't approved.

---

## 7. Optional: teaser deck & leave-behind

Build these only if requested. Same brand system, same §2 rules.

- **Email teaser deck** — `teaser-deck-copy.md` + `teaser-deck-brief.md`. 5–6 slides, hard cap 7. Must be understandable **in silence in under 60 seconds** (no presenter). Compresses the spine to one slide. **No pricing.** Same naming/compliance fixes (incl. **no SOC** on the trust strip). Ships as an email-friendly PDF.
- **Plans & pricing leave-behind** — `pricing-leave-behind-copy.md` + `pricing-leave-behind-brief.md`. **Confidential — mark every page "Confidential."** 6–9 pages. **All pricing numbers come from `plans-and-pricing-brief.md`** and are now filled, not gated: **Team $149 / Business $249 / Enterprise $499** per seat/month; seat minimums **10 / 25 / 25**; annual = 10× monthly (≈ two months free); OCR/memory limits and the at-a-glance table exactly as in that brief. **Do not invent or alter figures**; if any number is ever changed, reconcile against `product_master.json` first (that brief wins). Lead with the value/ROI frame; never frame the entry tier as "cheap/basic"; never promise Enterprise-only features (SSO, customer-managed keys, dedicated CSM, multi-cloud) at lower tiers; present OCR/memory limits as "scales with you / metered overage," not hard ceilings; Team/Business are Azure-only, multi-cloud is Enterprise-only. Pricing stays in this confidential document only — never on the live deck or teaser.

---

## 8. QA checklist — must pass before delivery

- [ ] No standalone **"Booga"** anywhere; no **"Buga"** anywhere.
- [ ] Product = **Booga Agents**; company/byline/footer = **Booga Enterprise**; Booga One only in the one "scale up" line.
- [ ] **No "SOC"**; compliance shown as reporting/support for the approved set; nothing claimed as "certified" without confirmation.
- [ ] No financial vertical, Booga Finance, FinSight, EngageIQ, or financial-data connectors.
- [ ] No funding/runway/ARR/team-size/solo-founder; no predecessor entity.
- [ ] No named competitors; comparison uses generic alternatives only.
- [ ] **Pricing appears only in the confidential leave-behind** — not on the live deck or teaser — using the client source-of-truth figures (no invented numbers).
- [ ] No invented customers, metrics, quotes, logos, regions, or capabilities; open items render as visible placeholders.
- [ ] Brand system from §3 applied (Light base, Inter, Vibrant Pop accent used sparingly, green-glass/gradient imagery); logo SVG dropped in when supplied; no "12 modules" — 11 plugins.
- [ ] Speaker notes present in presenter view, absent from slides.
- [ ] Full-screen present mode + clean PDF export both work.

---

## 9. Before running

**Resolved from the client files — nothing to confirm:** brand tokens (§3), pricing (§7, leave-behind only), compliance framework set (§2.4), presenter byline (§2.4).

**Two build decisions for the marketing manager:**
1. **Output scope:** in-person deck only, or all three documents in one project?
2. **Output format:** web deck to present live, an editable/exportable deck, or PDFs to send — or all of these?

**Drop-in / per-prospect (not blockers):**
3. **Logo SVG** — marketing manager to supply; drop into cover + close.
4. **Design-partner proof** — keep anonymised by default; add a name/logo only with written permission; add a metric only if verified.
5. **Connector wording** — client's own pre-print check with the product team (Slide 5 / A2).
6. **Per-prospect fills** — vertical (if not legal), data-residency line, named languages; and the per-meeting date, contact email, booking link.

---

*Prepared by RZLT for Booga Enterprise. Sources: the seven client-supplied pitch files + the Booga Enterprise Brand Guidelines (2026). This wrapper enforces the Booga voice & naming convention, the brand system, and the Phase-1 public/non-public content rules.*
