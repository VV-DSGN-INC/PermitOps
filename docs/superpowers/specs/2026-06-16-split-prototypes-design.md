# Split `permit-demo` into two standalone prototypes

**Date:** 2026-06-16
**Status:** Approved (design)
**Author:** Nick + Claude

## Goal

Extract two clean, standalone, shareable prototypes from the current combined
`permit-demo` app, with all internal material (design notes, assumptions,
personas, flows, meeting-summary content) excluded:

1. **Workspace** — the contractor / GC product (Projects, Permits, Requirements,
   Tasks, Municipalities, Directory).
2. **Home** — the homeowner edition (Welcome, Dashboard, Projects, details,
   Calendar, Ask).

The existing PermitOps repo and `permit-demo.vercel.app` are **left fully
untouched** — they remain the combined design deliverable.

## Context

The current app (`apps/web`) renders three parts, organized as nav groups in
`apps/web/src/components/app-sidebar.tsx`:

| Part | Routes | Disposition |
|---|---|---|
| **Workspace** (contractor product) | `/projects`, `/projects/:id`, `/permits`, `/requirements`, `/tasks`, `/municipalities`, `/directory` | → Prototype 1 |
| **Home edition** (homeowner product) | `/home`, `/home/welcome`, `/home/projects`, `/home/permit/:id`, `/home/project/:id`, `/home/calendar`, `/home/ask` | → Prototype 2 |
| **Design Notes** (internal) | `/notes/problem`, `/notes/personas`, `/notes/flows`, `/notes/sitemap`, `/notes/ai-opportunities`, `/notes/ai-patterns`, `/notes/timeline`, `/notes/assumptions` | → Excluded |

Separation is clean (verified):
- The Home edition imports nothing outside `home/`, `lib/home-mock.ts`,
  `lib/home-i18n/`, and the shared `@workspace/ui` kit.
- Workspace pages reference nothing from the Design Notes.
- `lib/mock-data.ts` is the only file mixing concerns: it holds workspace data
  (`projects`, `permits`, `municipalities`, `people`, `requiredForms`) **and**
  notes-only data (`personas`, `flows`, `assumptions`) plus the `navigation`
  object (`.workspace` + `.notes`).

## Architecture — new monorepo, two apps, shared UI

A **new repository** (the existing one is untouched):

```
permit-prototypes/
├─ apps/
│  ├─ workspace/            # Prototype 1 — contractor/GC product
│  │  ├─ index.html
│  │  ├─ package.json       # name: "workspace"
│  │  ├─ vite.config.ts · tsconfig*.json · eslint.config.js · components.json
│  │  └─ src/ …             # see "App 1" below
│  └─ home/                 # Prototype 2 — homeowner edition
│     ├─ index.html
│     ├─ package.json       # name: "home"
│     ├─ vite.config.ts · tsconfig*.json · eslint.config.js · components.json
│     └─ src/ …             # see "App 2" below
├─ packages/
│  └─ ui/                   # shared @workspace/ui kit, copied verbatim
├─ package.json             # turbo workspaces: ["apps/*", "packages/*"]
├─ turbo.json
├─ tsconfig.json
└─ vercel.json
```

Build scaffolding for each app is copied from the current `apps/web`
(`index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`,
`tsconfig.node.json`, `eslint.config.js`, `components.json`, `package.json`).
Each app keeps the same dependency set as today's `apps/web`
(React 19, react-router-dom 7, lucide-react, `@workspace/ui`, Tailwind v4 via
`@tailwindcss/vite`, Vite 7).

The shared `@workspace/ui` package name is retained as-is. (It is the UI kit's
npm name and is unrelated to the "Workspace" product surface — renaming it would
create needless churn across every import.)

### App 1 — `workspace`

**Routes** (unchanged from today; only the `/home` and `/notes` trees are dropped):
- `/` → redirect to `/projects`
- `/projects`, `/projects/:id`, `/permits`, `/requirements`, `/tasks`,
  `/municipalities`, `/directory`
- `*` → redirect to `/projects`

**Keep (copied from `apps/web/src`):**
- `App.tsx` — rewritten to contain only the workspace routes above.
- `main.tsx`
- `components/app-shell.tsx`
- `components/app-sidebar.tsx` — **modified**: remove the entire **Design Notes**
  `SidebarGroup` and the **"Try the Home edition"** `SidebarFooter` card. Keep only
  the Workspace group.
- `components/breadcrumbs.tsx`
- `components/theme-provider.tsx`
- `pages/projects.tsx`, `pages/project-detail.tsx`, `pages/permits.tsx`,
  `pages/requirements.tsx`, `pages/tasks.tsx`, `pages/municipalities.tsx`,
  `pages/directory.tsx`
- `components/projects/*`, `components/permits/*`, `components/requirements/*`,
  `components/tasks/*`, `components/municipalities/*`, `components/directory/*`
- `lib/mock-data.ts` — **trimmed** (see below).

**Strip (not copied):**
- `pages/problem.tsx`, `pages/personas.tsx`, `pages/flows.tsx`,
  `pages/sitemap.tsx`, `pages/ai-opportunities.tsx`, `pages/ai-patterns.tsx`,
  `pages/timeline.tsx`, `pages/assumptions.tsx`
- `components/assumptions/*`, `components/flows/*`, `components/personas/*`,
  `components/ai-patterns/*`

**`mock-data.ts` trim:** remove the notes-only exports and their types:
- Values: `personas`, `flows`, `assumptions`
- Types: `Persona`, `FlowStep`, `Flow`, `Assumption`
- `navigation` object: remove the `notes` array; keep `navigation.workspace`.
- Keep everything the workspace pages use: `municipalities`, `people`,
  `projects`, `permits`, `requiredForms`, all permit/project types and label
  maps, and the `getMunicipality` / `getPerson` / `getProject` helpers.

### App 2 — `home`

**Routes** (re-rooted: the `/home` prefix is stripped; **Welcome becomes the
landing page** at `/`):

| Today | New (standalone) |
|---|---|
| `/home/welcome` | `/` (index) |
| `/home` (dashboard) | `/dashboard` |
| `/home/projects` | `/projects` |
| `/home/permit/:id` | `/permit/:id` |
| `/home/project/:id` | `/project/:id` |
| `/home/calendar` | `/calendar` |
| `/home/ask` | `/ask` |
| — | `*` → redirect to `/` |

**Keep (copied from `apps/web/src`):**
- `App.tsx` — rewritten to the routes above, wrapping all routes in
  `HomeLocaleProvider` + `HomeShell`.
- `main.tsx`, `components/theme-provider.tsx`
- `components/home/home-shell.tsx`, `components/home/language-switcher.tsx`
- `pages/home/*` (welcome, dashboard, permit-detail, project-detail, projects,
  ask, calendar) — kept under `pages/home/` or flattened to `pages/`; either is
  fine as long as imports resolve.
- `lib/home-mock.ts`
- `lib/home-i18n/*` (index, types, strings: calendar, common, dashboard, permit,
  projects, welcome)

**Link re-rooting (~27 occurrences across the shell, pages, and i18n strings):**
strip the `/home` prefix from every internal path. Specific cases:
- `HomeShell` logo + avatar links currently point to `/home` (dashboard) →
  point to `/dashboard`.
- `HomeShell` nav links: `/home` → `/dashboard`, `/home/projects` → `/projects`,
  `/home/calendar` → `/calendar`, `/home/ask` → `/ask`.
- The `isWelcome` check `location.pathname.endsWith("/welcome")` → `pathname === "/"`.
- Welcome page CTAs that route to `/home` (dashboard) → `/dashboard`.
- Any `/home/permit/...` or `/home/project/...` links → `/permit/...`,
  `/project/...`.
- Audit i18n string files for embedded `/home` paths and rewrite them too.

### Shared — `packages/ui`

Copied verbatim from the current repo: all of `packages/ui/src/components/*`,
`hooks/*`, `lib/*`, and `styles/globals.css`, plus the package's
`package.json` / `tsconfig`. No changes. Both apps depend on `@workspace/ui: "*"`.

## Naming + deployment

| | App dir | Vercel project | URL |
|---|---|---|---|
| Prototype 1 | `apps/workspace` | new `permit-workspace` | `permit-workspace.vercel.app` |
| Prototype 2 | `apps/home` | reuse existing `permit-home` (`prj_gntcJn68TCdWO0LFjLKFi8g3eicC`) | `permit-home.vercel.app` |

Each Vercel project sets its **root directory** to the respective app
(`apps/workspace` / `apps/home`) so both deploy from the one repo.

**Deployment is gated on Nick's explicit go.** Build + verify both apps locally
first (`npm run build` — not just `typecheck`, per the known `tsc -b` vs
`tsc --noEmit` gotcha). Deploy is a separate, later step.

## Out of scope

- **No redesign / no new features.** This is a pure extraction + copy; both
  prototypes look and behave exactly as the corresponding parts do today.
- **No content rewriting** of product copy or mock data (beyond removing
  notes-only data).
- **No changes to the existing PermitOps repo or `permit-demo.vercel.app`.**
- **No deployment** until explicitly approved.
- The shared `@workspace/ui` package is **not** renamed or refactored.

## Acceptance criteria

1. New `permit-prototypes/` monorepo exists with `apps/workspace`, `apps/home`,
   `packages/ui`, and turbo workspace wiring.
2. `npm run build` succeeds for **both** apps with zero TypeScript errors and no
   dead/unresolved imports.
3. **Workspace app:** sidebar shows only the Workspace group (6 items) — no
   Design Notes group, no "Try the Home edition" footer card. All 6 pages render
   with data. No `/notes/*` or `/home/*` routes exist. No source references to
   `personas` / `flows` / `assumptions` / `ai-patterns` remain.
4. **Home app:** root `/` renders the Welcome page; nav (Dashboard, Projects,
   Calendar, Ask) works; permit/project detail links work; language switcher
   works. No `/home` prefix remains in any route or link.
5. Both apps are visually identical to their counterparts in the current app
   (shared UI, same Tailwind tokens).
6. Neither prototype exposes any internal notes / assumptions / meeting-summary
   content.
7. The existing PermitOps repo and live `permit-demo.vercel.app` are unchanged.

## Verification plan

- Run `npm run build` at the monorepo root (builds both apps via turbo).
- Run each app's dev server; confirm criteria 3–4 in the browser (check Chrome
  and Safari per standing rules).
- Capture preview screenshots of both prototypes to share before any deploy.
