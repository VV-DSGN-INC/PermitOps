# TeamHQ — Design Spec

- **Date:** 2026-06-17
- **Status:** Approved in brainstorming → ready for implementation plan
- **Surface:** the `AppShell` workspace (`/` routes). The Home edition (`/home/*`) is explicitly out of scope.

## 1. Summary

Transform the PermitOps "Workspace" surface (contractor tools + Design Notes) into **TeamHQ**, a lightweight project-management workspace for a micro product team. Keep the Design Notes pillar, add execution pillars: a personal task list, a 5-column Kanban board, a team timeline, and a members directory. Remove the contractor-specific pages and their data.

This is a reshuffle + extension of an existing Vite + React SPA (shadcn/ui via `@workspace/ui`, all data mocked client-side). No backend.

## 2. Goals / non-goals

**Goals**
- Reframe the workspace surface as **TeamHQ** with a three-group sidebar IA.
- Add a Jira-like **Kanban board** (5 columns, drag-and-drop between columns).
- Add a **Members** page whose per-person counts are derived live from the task store.
- Reuse the existing task list page as **My tasks**, filtered to the current user.
- Move **Timeline** under the Team group.

**Non-goals**
- No backend or real persistence. State stays client-side (in-memory). `localStorage` is an optional, deferred nicety.
- **No changes to the Home edition (`/home/*`).** Verified self-contained (no `mock-data.ts` imports). Left fully intact.
- No auth / real users. "Current user" is a hard-coded demo person.
- No real-time / multi-user behaviour.
- No new runtime dependency for drag-and-drop (use native HTML5 DnD).

## 3. Information architecture

Sidebar groups (data-driven from `navigation` in `mock-data.ts`) and routes:

**To do**
- My tasks → `/tasks` — existing list page, filtered to current user
- Tasks → `/board` — new Kanban board

**Team**
- Timeline → `/team/timeline` — moved from `/notes/timeline`
- Members → `/team/members` — new

**Design notes** (unchanged page content; order as listed)
- Problem statement → `/notes/problem`
- Personas → `/notes/personas`
- Key flows → `/notes/flows`
- Sitemap → `/notes/sitemap`
- AI patterns → `/notes/ai-patterns`
- AI opportunities → `/notes/ai-opportunities`

**Landing:** index route redirects to `/tasks` (My tasks) instead of the removed `/projects`.

## 4. Removals

**Pages + routes:** Projects (`/projects`, `/projects/:id`), Permits (`/permits`), Requirements (`/requirements` — orphan route, not in nav), Municipalities (`/municipalities`), Directory (`/directory`), Assumptions (`/notes/assumptions`).

**Components:** `components/{projects,permits,requirements,municipalities,directory,assumptions}/*`.

**Data + types in `mock-data.ts`:** remove `projects`, `permits`, `municipalities`, `requirements`/required-forms data, `assumptions`, and the now-unused types + label maps (`Project`, `Permit`, `Municipality`, `Requirement`, `Assumption`, `statusLabel`, `projectStatusLabel`, related getters).

**Keep (still used):** `people`, `navigation`, the `Task` type, and all data backing the retained Design Notes — `personas` and `flows` data are imported by kept pages (`components/flows/*`, `components/personas/*`); `people` is used by `tasks/task-row`, Members, and the board. Delete only after confirming no retained module imports the symbol.

**Other:**
- Sidebar footer "Try the Home edition" promo card (`app-sidebar.tsx`).
- Breadcrumb route→label entries for all removed routes (`breadcrumbs.tsx`); relabel `tasks` → "My tasks"; add `board` → "Tasks", `team` → "Team", `members` → "Members".
- Any "PermitOps" / "Westline Builders" strings on this surface → TeamHQ (do **not** touch Home edition branding).

## 5. Data model

Extend the `Task` type (`components/tasks/task-types.ts`):

```ts
export type TaskStatus = "backlog" | "todo" | "in_progress" | "in_review" | "done"

export type Task = {
  id: string
  title: string
  description: string
  priority: "high" | "medium" | "low"
  dueDate: string            // ISO yyyy-mm-dd
  status: TaskStatus         // NEW — drives the board column
  assigneeId: string         // NEW — owner; references people[].id
  assignedById: string       // keep — who delegated it
  completedAt?: string       // keep — for "completed this week" stat
  // REMOVED: relatedPermitId, relatedProjectId, completed (derive completed = status === "done")
}
```

- `completed` boolean is replaced by `status === "done"`. The My-tasks list is updated to read `status` rather than the old boolean.
- **Shared store:** tasks currently live inline in `pages/tasks.tsx` as `INITIAL_TASKS`. Move the seed + a small in-memory store/hook into a shared module (e.g. `lib/tasks-store.ts`) so My tasks, the board, and Members all read/update the same list. Moving a card on the board updates `status`; My tasks and Members reflect it live.
- **Seed data:** expand the seed beyond Jasmine to span all six `people` and all five statuses, so the board and Members look populated.

## 6. Screens

### 6.1 Tasks board — `/board` (NEW)
- Columns: Backlog · To do · In progress · In review · Done. Header per column = name + count pill.
- Card: priority dot (high = danger, medium = warning, low = muted; done = check), title, footer with assignee avatar (initials) + due date.
- Interaction: drag a card to another column → updates `task.status` (native HTML5 DnD, no new dependency). Fallback: a "move to…" menu on each card for keyboard/non-drag use.
- Optional (phase 2): header filter by assignee / priority.
- Files: `pages/board.tsx`, `components/board/{board-column,task-card}.tsx`, small drag helpers.

### 6.2 My tasks — `/tasks` (REUSE)
- Keep the existing sectioned list (overdue / today / upcoming / completed) and stat strip.
- Filter to `assigneeId === currentUserId`. Read from the shared store; use `status` instead of the removed `completed` boolean.

### 6.3 Members — `/team/members` (NEW)
- Card grid of the six `people`: avatar (initials), name, role, email, and two live counts derived from the task store by `assigneeId`:
  - **active** = `status ∈ {todo, in_progress}`
  - **in review** = `status === in_review`
- Retitle `people[].role` from permit roles to product roles, by person id: `u1` Jasmine → Product manager, `u2` Sam → Product designer, `u3` Marcus → Engineer, `u4` Priya → Operations lead, `u5` Leo → Engineer, `u6` Reviewer → QA reviewer.
- Files: `pages/members.tsx`, `components/members/member-card.tsx`.

### 6.4 Timeline — `/team/timeline` (MOVE)
- Same page component; route moves from `/notes/timeline`; nav entry under Team; breadcrumbs updated. (Optional redirect from old path.)

### 6.5 Design notes (KEEP)
- Problem, Personas, Key flows, Sitemap, AI patterns, AI opportunities — content unchanged; nav order per §3; Assumptions removed.

## 7. Branding
- Sidebar header: **TeamHQ** / "Product workspace" (replaces "PermitOps / Westline Builders"), keep the existing logo-tile pattern (swap icon if apt).
- Document `<title>` and on-surface "PermitOps" strings → TeamHQ.
- Remove the footer promo card.

## 8. Decisions (approved)
- **A.** State is in-memory; resets on reload (matches the rest of the mock app). `localStorage` deferred.
- **B.** Current user = **Jasmine Diaz** (`u1`).
- **C.** Landing route = **My tasks** (`/tasks`).
- **D.** **Assumptions** removed from nav **and** its page/components/data deleted.
- **E.** Member roles retitled to product roles.

## 9. Acceptance criteria
- Sidebar shows **TeamHQ** + the three groups exactly; no permit entries, no Home-edition promo.
- All removed routes are gone; no dead imports; `tsc` + build pass clean.
- Board renders seeded tasks in 5 columns; dragging a card changes its column and the change persists for the session; **My tasks** and **Members** reflect it live.
- My tasks shows only the current user's tasks.
- Members shows the six people with correct live active / in-review counts.
- Timeline reachable at `/team/timeline`; `/notes/timeline` no longer in nav.
- **Home edition (`/home/*`) unchanged and still works.**
- Renders correctly in Chrome **and** Safari (per standing rule).

## 10. File touch list
- `apps/web/src/App.tsx` — routes: remove permit/requirements/assumptions; add `/board`, `/team/timeline`, `/team/members`; index → `/tasks`.
- `apps/web/src/lib/mock-data.ts` — restructure `navigation`; retitle roles; delete permit/assumptions data + types.
- `apps/web/src/lib/tasks-store.ts` (NEW) — shared task seed + store/hook; extended `Task`.
- `apps/web/src/components/tasks/task-types.ts` — extend `Task` (or fold into the store module).
- `apps/web/src/components/app-sidebar.tsx` — TeamHQ header, three groups, remove promo.
- `apps/web/src/components/breadcrumbs.tsx` — update route→label map.
- `apps/web/src/pages/tasks.tsx` — filter to current user; read shared store; status-based.
- `apps/web/src/pages/board.tsx` + `components/board/*` (NEW).
- `apps/web/src/pages/members.tsx` + `components/members/*` (NEW).
- Delete: `pages/{projects,project-detail,permits,requirements,municipalities,directory,assumptions}.tsx` and `components/{projects,permits,requirements,municipalities,directory,assumptions}/*`.
- Timeline page: keep component; only its route/nav placement changes.
