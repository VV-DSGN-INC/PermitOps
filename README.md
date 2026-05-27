# PermitOps — interview demo

A construction-permit management product designed end-to-end as an interview deliverable. The brief: come back with a working prototype plus a clear point of view on the problem, the users, and how AI fits into the experience. **Permitflow** ([permitflow.com](https://permitflow.com)) is the competitive reference.

> **Live demo:** https://permit-demo.vercel.app

## What's in here

The app has two parallel surfaces, both reachable from the sidebar:

| **Workspace** (the product) | **Design Notes** (the thinking) |
| --- | --- |
| Projects (with detail page) | Problem Statement |
| My Tasks | Personas |
| Permits (with side-panel detail) | Key Flows |
| Project Requirements | Sitemap (IA + entity model) |
| Municipalities | AI Opportunities (value × feasibility matrix) |
| Directory | AI Patterns (interaction catalogue) |
|  | Assumptions |

The workspace pages are a working Permitflow-style product. The design notes pages document the strategy, IA, and design rigor behind the work — they live inside the app so they can be walked through alongside the screens they describe.

## Recommended walkthrough (15–20 min)

1. **/notes/problem** — frame the *why*
2. **/notes/personas** — frame the *who*
3. **/notes/flows** — frame the journey
4. **/notes/ai-opportunities** — the POV on what AI does (2×2 matrix is the hero)
5. **/notes/ai-patterns** — the POV on how AI shows up in the UI
6. **/notes/sitemap** — IA + entity model
7. **/projects → click a project → /permits → /requirements** — the product itself
8. **/notes/assumptions** — close with rigor, invite challenge

## Stack

- **Build:** Vite 7 + Turborepo monorepo
- **UI:** React 19 + TypeScript (strict, `verbatimModuleSyntax`)
- **Styling:** Tailwind 4 + shadcn/ui (Radix base)
- **Routing:** React Router 7
- **Icons / type:** Lucide + Geist Variable
- **Theme:** custom token set applied to `globals.css` (indigo primary, warm-neutral grays)
- **Deploy:** Vercel (SPA rewrite)

## Local development

```bash
# from the project root
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build
npm run typecheck  # tsc --noEmit across all workspaces
```

The monorepo has two workspaces:
- `apps/web` — the Vite app
- `packages/ui` — shared shadcn components + global CSS

## Project structure (relevant parts)

```
apps/web/src/
├── App.tsx                  # Routes
├── main.tsx                 # BrowserRouter + ThemeProvider
├── components/
│   ├── app-shell.tsx        # SidebarProvider + Outlet + top bar
│   ├── app-sidebar.tsx      # Workspace + Design Notes nav
│   ├── breadcrumbs.tsx
│   ├── projects/            # per-page sub-components
│   ├── permits/
│   ├── requirements/
│   ├── municipalities/
│   ├── directory/
│   ├── tasks/
│   ├── personas/
│   ├── flows/
│   ├── assumptions/
│   └── ai-patterns/
├── lib/
│   └── mock-data.ts         # Single source of truth for all sample data
└── pages/
    ├── projects.tsx
    ├── project-detail.tsx
    ├── permits.tsx
    ├── requirements.tsx
    ├── tasks.tsx
    ├── municipalities.tsx
    ├── directory.tsx
    ├── problem.tsx
    ├── personas.tsx
    ├── flows.tsx
    ├── sitemap.tsx
    ├── ai-opportunities.tsx
    ├── ai-patterns.tsx
    └── assumptions.tsx

packages/ui/src/
├── components/              # shadcn components (sidebar, table, sheet, etc.)
└── styles/globals.css       # theme tokens
```

## Design decisions and shortcuts

- **All data is mock.** No backend, no API, no persistence. Interactive state (switches, completed checkboxes, side-panel selections) is wired to `useState` so the demo *feels* alive without faking infrastructure.
- **"Today" is pinned to 2026-05-26** so relative dates ("3 days ago", "due in 12 days") read consistently regardless of when the demo is opened.
- **AI features are documented, not implemented.** The Design Notes pages establish the POV (12 opportunities ranked by value × feasibility, 10 interaction patterns with mini-mockups). The product surface shows agent attribution and activity feeds as static UI rather than live model calls.
- **One workspace, one team.** "Westline Builders" with a small team keeps the demo coherent. Branching the data into multiple workspaces would have added confusion without showing more design.
- **Card accent technique.** Where cards have a colored left accent (Personas quotes, Flows outcome, Problem cards, AI opportunity cards), the accent is drawn with a hard-stop `linear-gradient` background — not `border-left`. Borders curve into rounded corners and look cropped; gradients stay sharp inside the same radius. Lesson from [buttonschool.com/blog/awkward-borders](https://buttonschool.com/blog/awkward-borders).
- **Routing.** Standard SPA routes; the `vercel.json` rewrite at the project root makes any deep link survive a hard refresh.

## Personas (fictional)

The five personas referenced throughout the design notes are invented:
1. **Marcus Hill** — Senior PM at a mid-size GC (lives in spreadsheets)
2. **Priya Shah** — Permit Coordinator (power user, files daily)
3. **Dana Okafor** — Founding architect (handles her own permits)
4. **Reggie Vance** — Ops VP at a residential services company (volume game)
5. **Linda Ruiz** — Senior plan reviewer at a municipal building department (counter-persona — she doesn't use the product, but its quality affects her queue)

## Credits

- [shadcn/ui](https://ui.shadcn.com) — component library and theming system
- Theme tokens applied from a [tweakcn](https://tweakcn.com) preset
- [Permitflow](https://permitflow.com) — competitive reference for the brief; nothing copied from their UI
- [buttonschool.com — awkward borders](https://buttonschool.com/blog/awkward-borders) — the rounded-corner accent technique

---

Built end-to-end with the help of Claude Code as a pair-designer + IDE. Roughly a half-day of focused work for the product surface, design notes, and deploy.
