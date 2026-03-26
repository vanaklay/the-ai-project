# Work log — AI Workflow Directory Platform

Date: 2026-03-26  
Branch: `feat/workflow-directory`

## Summary
- Implemented a documentation-style workflow directory with:
  - Fixed left sidebar (responsive with mobile hamburger)
  - Landing page at `/` listing workflows
  - Dynamic workflow pages at `/workflows/[slug]` (pre-rendered via `generateStaticParams`)
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
- Added a global layout with fixed sidebar and scrollable main content area.

## Routing / SSG
- Added `/workflows/[slug]` dynamic route.
- Implemented `generateStaticParams()` using the local workflow dataset for SSG.

## Data model
- Added `src/data/workflows.ts` as the local “database”
  - `Workflow` interface matching the PRD
  - `workflows: Workflow[]` with 2 fully-filled example workflows
  - Helpers:
    - `getAllWorkflowSlugs()`
    - `getWorkflowBySlug(slug)`

## Components added (major)
- **App shell**
  - `src/components/app/Sidebar.tsx`
- **Workflow page**
  - `src/components/workflow/WorkflowPageClient.tsx` (tabs + animated transitions)
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
- `app/page.tsx`

### Added
- `app/workflows/[slug]/page.tsx`
- `src/data/workflows.ts`
- `src/components/app/Sidebar.tsx`
- `src/components/workflow/WorkflowPageClient.tsx`
- `src/components/workflow/PromptCard.tsx`
- `src/components/workflow-sections/OverviewSection.tsx`
- `src/components/workflow-sections/UseCasesSection.tsx`
- `src/components/workflow-sections/SetupSection.tsx`
- `src/components/workflow-sections/PromptsSection.tsx`
- `src/components/workflow-sections/DeploymentSection.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/accordion.tsx`
- `src/components/ui/tabs.tsx`
- `src/lib/utils.ts`
- `src/lib/workflowTheme.ts`

