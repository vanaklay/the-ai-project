# Work log — AI Workflow Directory Platform

Date: 2026-03-26  
Branch: `feat/workflow-directory`

## Summary
- Implemented a documentation-style workflow directory with:
  - Docs sidebar as an on-demand drawer (mobile + desktop “Open workflow sidebar”)
  - Marketing landing page at `/` (high-conversion)
  - Docs workflow pages at `/workflows/[slug]` (pre-rendered via `generateStaticParams`)
  - `/workflows` index listing page (docs experience)
  - Tabbed internal navigation with Framer Motion transitions
  - Prompt library with copy-to-clipboard feedback
  - Premium dark UI styling (glass/neon accents per category)

## Commands run
- **Branch**
  - `git checkout -b feat/workflow-directory`
- **Dependencies**
  - Attempted: `npm i ...` (failed due to npm/arborist error in this repo setup)
  - Installed via pnpm (repo uses `pnpm-lock.yaml`):
    - `pnpm add lucide-react framer-motion @radix-ui/react-tabs @radix-ui/react-accordion @radix-ui/react-slot clsx tailwind-merge class-variance-authority`
- **Checks**
  - `npm run lint`
  - `npx tsc --noEmit`

## Styling / layout changes
- Enforced premium dark background (`#050505`) and glass borders globally.
- Ensured Tailwind scans both `app/` and `src/` via `@source` directives (Tailwind v4 style).
- Root layout is minimal (no sidebar). Sidebar is scoped to the docs route group via `app/(docs)/layout.tsx`.
- Prevented global horizontal overflow on docs pages (mobile <900px case).

## Routing / SSG
- Added docs route-group dynamic route: `app/(docs)/workflows/[slug]/page.tsx`.
- Added docs index route: `app/(docs)/workflows/page.tsx` (`/workflows`).
- Implemented `generateStaticParams()` using the local workflow dataset for SSG.

## Data model
- Added `src/data/workflows.ts` as the local “database”
  - `Workflow` interface extended with fields used by the UI (e.g. `difficulty`, `tools`, `result`, and `titleParts`)
  - `workflows: Workflow[]` with fully-filled example workflows
  - Helpers:
    - `getAllWorkflowSlugs()`
    - `getWorkflowBySlug(slug)`

## Components added (major)
- **App shell**
- `src/components/app/Sidebar.tsx` (docs sidebar drawer on-demand)
- **Marketing site (`/`)**
  - `src/components/marketing/Navbar.tsx`
  - `src/components/marketing/Hero.tsx`
  - `src/components/marketing/Section.tsx`
  - `src/components/marketing/WorkflowCard.tsx`
  - `src/components/marketing/Footer.tsx`
- **Workflow page**
  - `src/components/workflow/WorkflowPageClient.tsx` (tabs + animated transitions)
- **Workflow overview refactor**
  - `src/components/workflow-sections/OverviewSection.tsx` now contains the header + “WORKFLOW SNAPSHOT” + “IMPORTANT TO KNOW”
  - `src/components/workflow/WorkflowSnapshotStepCard.tsx` (extracted step card UI)
- **Workflow sections**
  - `src/components/workflow-sections/OverviewSection.tsx`
  - `src/components/workflow-sections/UseCasesSection.tsx`
  - `src/components/workflow-sections/SetupSection.tsx` (Accordion-based steps)
  - `src/components/workflow-sections/PromptsSection.tsx`
  - `src/components/workflow-sections/DeploymentSection.tsx`
- **Prompt copy**
  - `src/components/workflow/PromptCard.tsx` (Copy → “Copied!” ~1.2s)

## Shadcn-style primitives (minimal)
Added minimal Radix-based wrappers in `src/components/ui/`:
- `src/components/ui/card.tsx`
- `src/components/ui/accordion.tsx`
- `src/components/ui/tabs.tsx`

Utility:
- `src/lib/utils.ts` (`cn()` via `clsx` + `tailwind-merge`)

## Theme helpers
- `src/lib/workflowTheme.ts`
  - `accentByCategory(category)` returns *static* Tailwind class strings (safe for Tailwind extraction)
  - `lucideIconByName(name)` maps string → Lucide component with fallback

## Files changed
### Updated
- `app/layout.tsx`
- `app/globals.css`

### Added
- `app/(docs)/workflows/[slug]/page.tsx`
- `app/(docs)/workflows/page.tsx`
- `app/(docs)/layout.tsx`
- `app/(marketing)/page.tsx`
- `app/(marketing)/about/page.tsx`
- `app/(marketing)/contact/page.tsx`
- `src/data/workflows.ts`
- `src/components/app/Sidebar.tsx`
- `src/components/workflow/WorkflowPageClient.tsx`
- `src/components/workflow/PromptCard.tsx`
- `src/components/workflow/WorkflowSnapshotStepCard.tsx`
- `src/components/workflow-sections/OverviewSection.tsx`
- `src/components/workflow-sections/UseCasesSection.tsx`
- `src/components/workflow-sections/SetupSection.tsx`
- `src/components/workflow-sections/PromptsSection.tsx`
- `src/components/workflow-sections/DeploymentSection.tsx`
- `src/components/marketing/Navbar.tsx`
- `src/components/marketing/Hero.tsx`
- `src/components/marketing/Section.tsx`
- `src/components/marketing/WorkflowCard.tsx`
- `src/components/marketing/Footer.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/accordion.tsx`
- `src/components/ui/tabs.tsx`
- `src/lib/utils.ts`
- `src/lib/workflowTheme.ts`

## Update — 2026-05-26

### Admin auth (route protection)
- Restricted `/admin` to a single password stored in `ADMIN_SECRET` env var
- No new dependencies — uses Web Crypto API (`crypto.subtle`) for HMAC-SHA256 token derivation (required by Next.js Edge Runtime)

#### Files added
- `src/lib/adminAuth.ts` — shared helper: `deriveToken(secret)` + `isValidAdminCookie(cookieValue)`
- `middleware.ts` (root) — redirects `/admin/*` to `/admin/login` if `admin_session` cookie is absent or invalid
- `app/(marketing)/admin/login/page.tsx` — minimal login form (dark UI, consistent with existing style)
- `app/(marketing)/admin/login/action.ts` — server action: verifies password, sets HTTP-only cookie (30-day expiry), redirects to `/admin`

#### Files modified
- `app/(marketing)/admin/actions.ts` — added auth guard at top of `createWorkflow` (double protection beyond middleware)
- `.env.local` — added `ADMIN_SECRET`
- `.env.example` — documented `ADMIN_SECRET`
- `DEPLOYMENT.md` — added `ADMIN_SECRET` to env vars table and updated verification checklist

### Tooling
- `MASTER_PROMPT.md` updated twice:
  - First pass: added missing `titleParts` field, restricted Lucide icons to registered set, added import line, documented category accent values
  - Second pass: changed output format from TypeScript file to labeled fields + JSON block, aligned exactly with `/admin` form inputs

---

## Follow-up updates (after the initial log)
- Split routes with route groups:
  - `app/(marketing)/*`: marketing landing site at `/` (plus `about` + `contact`)
  - `app/(docs)/*`: docs/workflows experience with sidebar drawer (opened only via “Open workflow sidebar”)
- Sidebar visibility:
  - Sidebar is not always visible anymore; it opens on-demand (desktop + mobile) and closes via overlay.
  - Docs layout removes permanent left spacing and disables global horizontal overflow.
- Routing:
  - Added `/workflows` index at `app/(docs)/workflows/page.tsx`
  - Workflow pages moved to `app/(docs)/workflows/[slug]/page.tsx` and still use `generateStaticParams()`
- Workflow UI refactor:
  - Snapshot header (“WORKFLOW SNAPSHOT”), step cards strip, and “IMPORTANT TO KNOW” now live inside `src/components/workflow-sections/OverviewSection.tsx`
  - `src/components/workflow/WorkflowPageClient.tsx` no longer renders that snapshot block
  - Extracted step-card UI into `src/components/workflow/WorkflowSnapshotStepCard.tsx`

