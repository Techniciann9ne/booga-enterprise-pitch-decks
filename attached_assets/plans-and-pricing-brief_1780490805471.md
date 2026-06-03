# Booga Agents — Plans & Pricing Brief (for the pitch document)

> A single, authoritative reference for the **"Available Plans"** section of the corporate pitch deck. This document is written for our marketing agency: it gives you the tiers, what each one includes, who it's for, the price points, and the messaging guidance to present them well. Lift the tables and tier write-ups directly; adapt the prose to the deck's tone.
>
> **Scope:** This brief covers the corporate product, **Booga Agents** (the three enterprise tiers). A short note on **Booga One** (the individuals product) is included at the end for the "start small, scale up" narrative.

**How to use this**
- The **at-a-glance table** is the spine of the plans slide. The **tier deep-dives** feed the per-tier columns/cards and speaker notes.
- All figures here are grounded in the live product configuration (`backend/product_master.json`). If a number in the deck disagrees with this brief, this brief wins — flag it to us.
- Keep the brand voice: confident, technical, grown-up. See the *Messaging guidance* section and the **Brand Voice cheat sheet** in `marketing-content-pack.md`.

---

## 1. The product framing

**Booga Agents** — _Enterprise AI Automation & Analytics Platform._ Tagline: _"Autonomous workflows. Enterprise control. Built for scale."_

Booga Agents comes in **three tiers** built around **three distinct value steps** — so each price increase has its own clear reason to exist:

1. **Team** — dedicated **data plane** (your own storage + vector database), on shared compute.
2. **Business** — adds dedicated, properly-sized **compute** for heavy workloads and operational scale.
3. **Enterprise** — adds enterprise **identity, security, and governance** (SSO/SCIM, customer-managed keys, private networking, contractual SLA, dedicated CSM, multi-cloud).

> **One-line ladder:** _Team = your data, isolated. Business = your data **and** your compute. Enterprise = your data, your compute, **and** the identity/security/governance bundle that procurement signs off on._

---

## 2. Plans at a glance

| | **Team** | **Business** | **Enterprise** |
|---|---|---|---|
| **Headline value** | Dedicated data plane, shared compute | + Dedicated compute | + Enterprise identity, security & governance |
| **Best for** | Teams adopting agentic AI on isolated data | Departments running heavy, always-on workloads | Regulated orgs with security & residency requirements |
| **Price (USD / seat / month)** | **$149** | **$249** | **$499** |
| **Annual (USD / seat / year)*** | $1,490 | $2,490 | $4,990 |
| **Minimum seats** | **10** | **25** | **25** |
| Dedicated storage + vector database | Yes | Yes | Yes |
| Compute | Shared pool | **Dedicated workers** | **Dedicated, memory-optimized** |
| Heavy-document OCR | Auto-routed to premium OCR | Runs on dedicated workers | Runs on dedicated workers |
| Cloud providers | Azure | Azure | **Azure · AWS · GCP** |
| Deployment regions | 2 (EU + US) | 6 (Azure) | **21 (multi-cloud, mirrored)** |
| Agents, Knowledge, Analytics, Scheduler | Yes | Yes | Yes |
| Multi-org, enterprise reporting & scheduling | Yes | Yes | Yes |
| Compliance monitoring + advanced analytics | — | Yes | Yes |
| Integrations | Core | Full catalog | Full catalog |
| Intelligence memory (stored memories) | 50,000 | 250,000 | 1,000,000 |
| Included premium OCR pages / month** | 2,000 | 10,000 | 50,000 |
| Embeddable bots | up to 10 | up to 25 | up to 100 |
| Resource stacks | up to 5 | up to 10 | up to 50 |
| SSO / SCIM | — | — | **Yes** |
| Customer-managed keys · private networking · VPC peering | — | — | **Yes** |
| Custom domain | — | — | **Yes** |
| Contractual SLA uptime | — | — | **Yes** |
| Support | Standard | Priority | Priority + SLA |
| Dedicated Customer Success Manager | — | — | **Yes** |

<sub>* Annual billing is priced at 10× the monthly seat rate (≈ **two months free**). &nbsp; ** Premium OCR pages are included **per provider** (Mistral OCR and Azure Document Intelligence); usage beyond the included allowance is metered per page. All prices are current list pricing in USD and may be customized for Enterprise.</sub>

---

## 3. Tier deep-dives

### Team — _Your data, isolated. Your agents, working._

**Who it's for:** Teams that want to put agentic AI to work on their **own, isolated data** without committing to dedicated infrastructure on day one.

**What you get**
- A **dedicated data plane**: your own storage and your own vector database — not a shared table with a tenant column.
- The full agent and intelligence experience: build agents in plain English, a personal Intelligence Layer (up to **50,000** stored memories), knowledge, analytics, scheduler, multi-org, and enterprise reporting.
- **Heavy documents are handled for you.** Large or scan-heavy PDFs are automatically routed to premium external OCR, so quality stays high without you paying for dedicated compute.
- **2,000** premium OCR pages included per month, per provider.
- Azure deployment (EU + US regions), up to 10 embeddable bots, core integrations, standard support.

**The reason to be here:** isolation and capability at an accessible entry point. **$149/seat/month, 10-seat minimum.**

---

### Business — _Add your own compute. Run it all day._

**Who it's for:** Departments with **heavy, always-on** document and automation workloads that warrant their own dedicated, properly-sized compute.

**Everything in Team, plus**
- **Dedicated workers**, sized for heavy document and OCR workloads — heavy files are processed on your own infrastructure rather than deflected.
- **Operational scale**: more regions (six Azure regions), more resource stacks (up to 10), more bots (up to 25), and a **larger intelligence memory budget (250,000)**.
- **Compliance monitoring, advanced analytics, and custom dashboards.**
- **Full integrations catalog** and managed connectors.
- **10,000** premium OCR pages included per month, per provider.
- **Priority support.**

**The reason to upgrade:** you stop sharing compute. Throughput, control, and scale step up together. **$249/seat/month, 25-seat minimum.**

---

### Enterprise — _The plan procurement and security sign off on._

**Who it's for:** Regulated and security-conscious organizations with **identity, encryption, networking, residency, and SLA** requirements.

**Everything in Business, plus**
- **Enterprise identity:** SSO (SAML/OIDC) and **SCIM** user provisioning.
- **Enterprise security:** customer-managed encryption keys, private networking, and VPC peering.
- **Multi-cloud & residency:** deploy on **Azure, AWS, or GCP** across **21 mirrored regions** worldwide — pin workloads to the region your data-residency policy requires.
- **Dedicated, memory-optimized compute** for the largest workloads.
- **Contractual SLA uptime**, extended audit retention, a **custom domain**, and the highest limits (up to 50 resource stacks, 100 bots, **1,000,000** intelligence memories, **50,000** included OCR pages/month/provider — metered beyond).
- A **dedicated Customer Success Manager.**

**The reason to upgrade:** everything a security review and a procurement team gate the purchase on — delivered, not promised. **$499/seat/month, 25-seat minimum** (Enterprise terms can be customized).

---

## 4. What every Booga Agents tier includes (sell the platform, not just the tier)

Use these as the "all plans include" footer or a capability band beneath the pricing. Every corporate tier is built on the same platform:

- **Agents as the operating layer.** Describe a workflow in plain English; Booga drafts, previews, and deploys it. One agent can reach every plugin you've enabled.
- **An Intelligence Layer that remembers.** Insights, decisions, and entities are captured, connected in a knowledge graph, and surfaced back proactively — the platform compounds with use.
- **Tenant isolation by architecture.** Your own data plane (storage + vector index), scoped audit and events — separation by design, not by middleware.
- **Enterprise integration surface.** 600+ documented REST endpoints, signed webhooks, a transactional event bus, and first-party connectors (Salesforce, NetSuite, Microsoft 365, Slack).
- **Governance built in.** Audit and compliance tooling, multi-org management, enterprise reporting and scheduling — included across all corporate tiers.
- **Embeddable, branded bots.** Publish customer-facing assistants grounded in your own knowledge.

---

## 5. Pricing & terms (for the deck and speaker notes)

- **Per-seat, per-month**, billed monthly or annually. **Annual = ≈ two months free** (10× the monthly rate).
- **Seat minimums:** Team 10 · Business 25 · Enterprise 25. (Used to frame contract value, not a hard usage cap.)
- **Included premium OCR** is per provider, per month; overage is **metered per page** — present this as "scales with you," not a surprise cost.
- **Enterprise is customizable** — present its list price as a starting point and direct enterprise prospects to **"Talk to sales."**
- Currency shown is **USD**; localized pricing/currencies can be added on request.

---

## 6. Messaging guidance

**Emphasize**
- The **three-step value ladder** (data → compute → governance). It makes the price jumps feel earned and logical.
- **"Isolated by architecture"** and **multi-cloud / region pinning** (Enterprise) — these resonate with security and procurement audiences.
- **Heavy-document handling**: Team customers still get high-quality extraction on big files (auto-routed to premium OCR); Business/Enterprise run it on their own dedicated compute.
- **One continuous platform** — what a team builds on Team runs unchanged on Enterprise; upgrades are entitlement changes, not migrations.

**Avoid**
- Don't call the entry tier "cheap/basic" — it's the **isolation + capability** tier. Frame Standard support as "Standard," not "limited."
- Don't promise features above a tier (SSO, customer-managed keys, dedicated CSM, multi-cloud are **Enterprise-only**).
- Don't present included OCR/memory limits as hard ceilings without the "scales with you / metered overage" framing.
- Don't invent regions or providers beyond those listed (Team/Business are **Azure-only**; multi-cloud is **Enterprise-only**).
- No buzzword soup, and no emojis in deck copy.

---

## 7. Booga One (context for the "start small, scale up" story)

If the pitch references the broader journey: **Booga One** is the individuals product — _AI Automation & Analytics Platform For Individuals_ — with a **Free** tier and a **Pro** tier. It runs the same agent runtime and intelligence layer as Booga Agents, so individual builders can start free and graduate to the corporate tiers with **no re-platforming**. Keep One in a single supporting line on a corporate deck; the corporate story is **Agents**.

---

## 8. Source of truth & contacts

- **Plan configuration (authoritative):** `backend/product_master.json`
- **Voice, terminology, citable numbers:** `docs-legacy/marketing/marketing-content-pack.md`
- **Strategy rationale (internal):** `docs-legacy/strategy/agents-plans-and-ocr-routing-revision.md`
- Questions on any figure, or to confirm Enterprise customization options, contact the Booga product team before publishing.
