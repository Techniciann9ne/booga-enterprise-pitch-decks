# Booga Enterprise — Pitch Decks

A monorepo of presentation artifacts for Booga Enterprise. The primary deliverable is the **Booga Agents in-person enterprise sales pitch deck** — a full-screen, presenter-ready web slide deck (keyboard navigation + speaker notes) built to the Booga brand system.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

- **Booga Agents Pitch Deck** (`artifacts/booga-agents-pitch-deck`, slug `booga-agents-pitch-deck`): a 19-slide web deck — 14 core slides + 5 appendix slides (A1–A5). Full-screen present mode, arrow/space navigation, `/allslides` overview, and per-slide speaker notes in the manifest. Slides live in `src/pages/slides/*.tsx`; order/notes in `src/data/slides-manifest.json`. Brand tokens in `src/index.css`; shared chrome (logo, Connect→Understand→Act spine) in `src/components/`.
- Editable `[bracket]` placeholders (date, contact, design-partner reference, unverified metrics, approved FAQ answers) render as styled green-dashed tokens so they can be filled per prospect without code.
- **Content governance is strict** — naming, forbidden content, and the brand system are non-negotiable. See `.agents/memory/booga-deck-content-rules.md` before editing any Booga deck copy.
- After editing slides: `pnpm --filter @workspace/booga-agents-pitch-deck run validate-slides`, then restart the `artifacts/booga-agents-pitch-deck: web` workflow.
- **Booga Agents Teaser Deck** (`artifacts/booga-agents-teaser-deck`, slug `booga-agents-teaser-deck`): a short 6-slide email teaser — Cover, Problem (Trapped/Expensive/Risky), Platform (Connect→Understand→Act in a Trust border), One Outcome (9:02→9:15 legal example, with an editable per-vertical token), Built on Trust, Close. Compresses the main deck's spine to earn a meeting; reuses the main deck's exact brand system (`src/index.css` tokens, Inter, `BrandMark`). Same `[bracket]` placeholder convention. After editing: `pnpm --filter @workspace/booga-agents-teaser-deck run validate-slides`, then restart `artifacts/booga-agents-teaser-deck: web`.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
