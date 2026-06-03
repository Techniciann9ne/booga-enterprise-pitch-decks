# Booga Agents — Plans & Pricing Leave-Behind Brief (Confidential)

> Production brief for our marketing agency. This is **Document 3 of 3** in the enterprise pitch set:
> 1. **In-person presentation deck** — see `docs-legacy/marketing/pitch-deck-brief.md`.
> 2. **Email teaser deck** — see `docs-legacy/marketing/teaser-deck-brief.md`.
> 3. **Plans & pricing leave-behind** (this document) — a **confidential**, designed document sent to a prospect **on request** after a meeting.
>
> **Confidentiality:** mark every page "Confidential." This is not a public asset and not part of the live presentation. It is a follow-up leave-behind.
> **Product:** Booga Agents — _Enterprise AI Automation & Analytics Platform._
> **Owner:** Mario Baburic (Booga Enterprise)
> **Audience:** the business buyer **plus** the people they forward it to — finance, procurement, and security. It must survive being read without a presenter.
>
> **CRITICAL — single source of truth for all numbers:** `docs-legacy/marketing/plans-and-pricing-brief.md`. That document already contains the authoritative tiers, the at-a-glance table, the per-tier deep-dives, pricing, seat minimums, OCR/memory limits, and messaging guidance — all grounded in `backend/product_master.json`. **Do not restate or re-key those numbers here; lift them from that brief.** This document adds only the three things that brief does not have: (1) a value/ROI framing wrapper, (2) a worked rollout-sizing example, and (3) the designed leave-behind structure.

---

## 0. What this document adds (and why)

The existing `plans-and-pricing-brief.md` gives the agency everything needed for the **plans table and tier write-ups**. But a price list dropped on a buyer with no value context invites a race to the lowest tier. This leave-behind wraps those same numbers in:

1. **A value/ROI frame up front** — so price lands against the cost of expert hours saved, not in a vacuum.
2. **A rollout-sizing example** — so the prospect can self-locate (seats, tier, why) instead of guessing.
3. **Procurement-ready packaging** — the security/governance bundle and terms a buyer's finance and security teams will look for.

### Reusable AI prompt block (paste into your AI design/copy tools)

> You are producing a **confidential plans & pricing leave-behind** (designed PDF) for **Booga Agents**, an enterprise AI platform. Audience: a business buyer plus finance, procurement, and security who read it with no presenter. Voice: confident, technical, grown-up; no buzzword soup; **no emojis**. Frame price against value (expert hours saved), never as "cheap/basic". The pricing story is a three-step ladder: Team = your data isolated; Business = your data + your own compute; Enterprise = your data + compute + enterprise identity/security/governance. All numbers come from the source brief — do not invent or alter figures. Mark every page Confidential.

---

## 1. Document structure (the designed leave-behind)

Target 6–9 pages/sections. Build in this order:

### Section 1 — Cover

- **Title:** _Booga Agents — Plans & Pricing._ Subtitle: _Prepared for [Prospect], [date]._ Footer: **Confidential.**
- **Art direction:** consistent with the pitch deck cover; restrained; "Confidential" watermark or footer on every page.

### Section 2 — The value frame (NEW — the wrapper)

- **Headline:** _Price it against the hours it gives back._
- **Body:** A simple value equation a CFO understands: a single senior professional's loaded hour vs. a Booga seat. If Booga saves even a few expert hours per person per month, the seat pays for itself many times over.
- **Suggested framing (agency to format as a clean infographic — fill bracketed inputs with the prospect's own assumptions during the meeting):**
  - _One senior professional hour ≈ [€X]._
  - _Booga saves ≈ [N] hours / person / month on drafting, search, and review._
  - _Monthly value created ≈ [€X × N]. Booga seat ≈ [tier price]. **Payback: [ratio].**_
- **Art direction:** one clean "value vs. cost" balance/scale graphic. No hard claims we can't support — present as a model the buyer fills in, with conservative defaults.
- **Source of truth:** original framing; seat prices from `plans-and-pricing-brief.md`.

### Section 3 — The three-step ladder (lift from source)

- **Headline:** _Three plans. Three clear reasons to step up._
- **Body:** Reproduce the one-line ladder and the at-a-glance comparison **table** directly from `plans-and-pricing-brief.md` §§ 1–2. Do not re-derive numbers.
- **Art direction:** the comparison table is the spine of this section; highlight the column that matches the prospect's likely tier (see Section 5).
- **Source of truth:** `plans-and-pricing-brief.md` §§ 1–2.

### Section 4 — Tier deep-dives (lift from source)

- **Headline:** _What each plan includes._
- **Body:** Reproduce the **Team / Business / Enterprise** deep-dives from `plans-and-pricing-brief.md` § 3 as three cards/pages. Keep the "reason to be here / reason to upgrade" lines — they carry the ladder logic.
- **Art direction:** three consistent cards; do not label the entry tier "basic" or "cheap" — it's the **isolation + capability** tier.
- **Source of truth:** `plans-and-pricing-brief.md` § 3.

### Section 5 — What a rollout looks like (NEW — the sizing example) _[legal example]_

- **Headline:** _What a firm like yours would actually buy._
- **Body:** A worked example so the buyer self-locates. _[legal example]_ A law firm connecting its SharePoint estate, processing scanned/multi-language archives, and running client-facing drafting agents will care about **data residency, identity, audit, and a contractual SLA** — which points to **Enterprise** (or **Business** if residency/SSO aren't gating). Lay it out as a simple recommendation:
  - **Likely tier:** Enterprise — because: data residency / region pinning, SSO/SCIM, customer-managed keys, contractual SLA, dedicated CSM, and the highest document/memory limits.
  - **Step-down option:** Business — if SSO and customer-managed keys aren't day-one requirements and Azure regions suffice; revisit Enterprise as the rollout scales.
  - **Seats:** start with the core practice group, expand firm-wide — frame seat minimums as contract-value framing, not a usage cap (per source brief § 5).
  - **Heavy documents:** note that scanned/large archives are handled (premium OCR included per tier; metered beyond) — present as "scales with you," not a surprise cost.
- **Art direction:** a "recommended for you" callout card highlighting the Enterprise column, with a one-line rationale per requirement.
- **Source of truth:** `plans-and-pricing-brief.md` §§ 2, 3, 5, 6; legal use case; extraction/residency capabilities from `pitch-deck-brief.md` appendix.

### Section 6 — What every tier includes (lift from source)

- **Headline:** _Every plan is built on the same platform._
- **Body:** Reproduce the "sell the platform, not just the tier" capability band from `plans-and-pricing-brief.md` § 4 (agents, intelligence layer, isolation, integrations, governance, embeddable bots).
- **Art direction:** a capability strip beneath the pricing — reassures that even the entry tier is the full platform.
- **Source of truth:** `plans-and-pricing-brief.md` § 4.

### Section 7 — Pricing, terms & how to buy (lift + light addition)

- **Headline:** _Pricing and terms._
- **Body:** Reproduce the terms from `plans-and-pricing-brief.md` § 5 (per-seat/month, annual ≈ two months free, seat minimums, included OCR per provider with metered overage, Enterprise customizable → "Talk to sales", USD with localized pricing on request). Add a one-line path to contract: _"Enterprise terms, residency, and localized currency are confirmed in a short scoping call."_
- **Art direction:** clean terms block; "Enterprise is a starting point, customizable" callout.
- **Source of truth:** `plans-and-pricing-brief.md` § 5.

### Section 8 — Start small, scale up (optional, one line)

- **Body:** A single supporting line that the same platform runs from individual (Booga One) up through Enterprise with no re-platforming — upgrades are entitlement changes, not migrations. Keep it to one line; the corporate story is **Agents**.
- **Source of truth:** `plans-and-pricing-brief.md` § 7.

### Section 9 — Contact / next step

- **Body:** Who to talk to, and the next action (scoping call to confirm Enterprise terms + residency). Footer: **Confidential.**

---

## 2. Messaging guardrails (carry over from the source brief)

Reproduce and honour the **Emphasize / Avoid** guidance in `plans-and-pricing-brief.md` § 6. Most important for this leave-behind:

- **Emphasize:** the three-step ladder (data → compute → governance); "isolated by architecture"; multi-cloud / region pinning (Enterprise); heavy-document handling; one continuous platform.
- **Avoid:** calling the entry tier "cheap/basic"; promising Enterprise-only features (SSO, customer-managed keys, dedicated CSM, multi-cloud) at lower tiers; presenting included OCR/memory as hard ceilings without the "scales with you / metered overage" framing; inventing regions or providers; buzzword soup; emojis.

---

## 3. Open items to confirm before design

1. **Value-frame inputs (Section 2):** confirm whether to ship with conservative default assumptions filled in, or leave bracketed for the rep to complete live. Get sign-off on any payback ratio shown.
2. **Recommended tier (Section 5):** confirm Enterprise vs. Business as the headline recommendation for this prospect, and the seat-count starting point.
3. **Localized currency:** the source brief is USD — confirm whether to present the prospect's local currency (and at what FX/rounding).
4. **Confidentiality handling:** confirm watermark vs. footer treatment and whether the PDF should be access-controlled / expiring when sent.
5. **Any number disagreement:** if a figure here ever conflicts with `plans-and-pricing-brief.md`, that brief wins — flag it to the Booga product team before publishing (per source brief § 0).

---

_End of brief — Document 3 of 3._
