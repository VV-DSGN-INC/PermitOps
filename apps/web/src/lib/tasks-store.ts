import { useSyncExternalStore } from "react"
import type { Task, TaskStatus } from "@/components/tasks/task-types"

// The signed-in person for "My tasks". Demo app — no real auth.
export const CURRENT_USER_ID = "u1"

// Pinned "today" so relative due-date labels stay stable across the demo.
export const TODAY_ISO = "2026-05-26"

// Column order for the board, left to right.
export const STATUSES: { id: TaskStatus; label: string }[] = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "To do" },
  { id: "in_progress", label: "In progress" },
  { id: "in_review", label: "In review" },
  { id: "done", label: "Done" },
]

export const STATUS_LABEL: Record<TaskStatus, string> = {
  backlog: "Backlog",
  todo: "To do",
  in_progress: "In progress",
  in_review: "In review",
  done: "Done",
}

// Seed tasks for the TeamHQ demo — product-team work spread across the six
// demo people (u1–u6) and all five statuses. Titles are plausible filler,
// not real work items. Due dates sit around TODAY_ISO (2026-05-26).
const SEED_TASKS: Task[] = [
  // Backlog
  {
    id: "tk-01",
    title: "Pricing page copy pass",
    description:
      "Draft plain-language copy for the three tiers. Lead with the free tier, keep it jargon-free.",
    priority: "low",
    dueDate: "2026-06-30",
    status: "backlog",
    assigneeId: "u2",
    assignedById: "u1",
  },
  {
    id: "tk-02",
    title: "Competitor teardown",
    description:
      "Short written teardown of the two closest tools — where we win, where we don't, pricing anchors.",
    priority: "low",
    dueDate: "2026-06-25",
    status: "backlog",
    assigneeId: "u4",
    assignedById: "u1",
  },
  {
    id: "tk-03",
    title: "Onboarding empty states",
    description:
      "Every list/board needs a first-run empty state. Inventory them, then design a consistent pattern.",
    priority: "medium",
    dueDate: "2026-06-30",
    status: "backlog",
    assigneeId: "u1",
    assignedById: "u1",
  },
  {
    id: "tk-04",
    title: "Mobile board layout exploration",
    description:
      "How does the five-column board collapse on a phone? Sketch a couple of options.",
    priority: "low",
    dueDate: "2026-07-05",
    status: "backlog",
    assigneeId: "u2",
    assignedById: "u1",
  },
  // To do
  {
    id: "tk-05",
    title: "Kanban drag-and-drop",
    description:
      "Cards drag between columns and update status. Native HTML5 DnD, no new dependency.",
    priority: "high",
    dueDate: "2026-06-20",
    status: "todo",
    assigneeId: "u5",
    assignedById: "u1",
  },
  {
    id: "tk-06",
    title: "Members page",
    description:
      "Card grid of the team with live active / in-review counts pulled from the task store.",
    priority: "medium",
    dueDate: "2026-06-22",
    status: "todo",
    assigneeId: "u3",
    assignedById: "u1",
  },
  {
    id: "tk-07",
    title: "Approve board interaction spec",
    description:
      "Sign off on drag behaviour, keyboard fallback, and the move-to menu before build starts.",
    priority: "high",
    dueDate: "2026-05-22",
    status: "todo",
    assigneeId: "u1",
    assignedById: "u6",
  },
  {
    id: "tk-08",
    title: "Define role taxonomy",
    description:
      "Settle the canonical product-team roles so Members and assignment stay consistent.",
    priority: "low",
    dueDate: "2026-06-24",
    status: "todo",
    assigneeId: "u4",
    assignedById: "u1",
  },
  // In progress
  {
    id: "tk-09",
    title: "Nav restructure → TeamHQ",
    description:
      "Three groups: To do, Team, Design notes. Remove the old contractor pages and rebrand the shell.",
    priority: "high",
    dueDate: "2026-05-26",
    status: "in_progress",
    assigneeId: "u1",
    assignedById: "u1",
  },
  {
    id: "tk-10",
    title: "Timeline polish",
    description:
      "Tighten spacing and labels on the timeline now that it lives under the Team group.",
    priority: "medium",
    dueDate: "2026-06-21",
    status: "in_progress",
    assigneeId: "u5",
    assignedById: "u1",
  },
  {
    id: "tk-11",
    title: "Sidebar + breadcrumbs cleanup",
    description:
      "Update the route→label map and drop the dead permit entries after the nav change.",
    priority: "medium",
    dueDate: "2026-06-20",
    status: "in_progress",
    assigneeId: "u2",
    assignedById: "u1",
  },
  // In review
  {
    id: "tk-12",
    title: "Persona refresh",
    description:
      "Update the three personas to reflect the micro-team framing. Ready for a review pass.",
    priority: "medium",
    dueDate: "2026-06-19",
    status: "in_review",
    assigneeId: "u2",
    assignedById: "u1",
  },
  {
    id: "tk-13",
    title: "Remove permit data safely",
    description:
      "Delete projects/permits/municipalities data without breaking the notes pages that still import people.",
    priority: "high",
    dueDate: "2026-06-18",
    status: "in_review",
    assigneeId: "u3",
    assignedById: "u6",
  },
  {
    id: "tk-14",
    title: "Shared task store",
    description:
      "Single in-memory source of truth so My tasks, the board, and Members stay in sync.",
    priority: "high",
    dueDate: "2026-06-19",
    status: "in_review",
    assigneeId: "u3",
    assignedById: "u1",
  },
  // Done
  {
    id: "tk-15",
    title: "Sitemap v2",
    description: "Reworked the sitemap to match the new three-group information architecture.",
    priority: "medium",
    dueDate: "2026-05-21",
    status: "done",
    assigneeId: "u3",
    assignedById: "u1",
    completedAt: "2026-05-22",
  },
  {
    id: "tk-16",
    title: "AI patterns doc",
    description: "Wrote up the citation + attribution patterns for the assistant surfaces.",
    priority: "medium",
    dueDate: "2026-05-21",
    status: "done",
    assigneeId: "u1",
    assignedById: "u1",
    completedAt: "2026-05-23",
  },
  {
    id: "tk-17",
    title: "Design tokens audit",
    description: "Confirmed the shared UI package tokens cover the new board and members surfaces.",
    priority: "low",
    dueDate: "2026-05-20",
    status: "done",
    assigneeId: "u2",
    assignedById: "u1",
    completedAt: "2026-05-24",
  },
  {
    id: "tk-18",
    title: "Spec sign-off",
    description: "Reviewed and approved the TeamHQ design spec before implementation kicked off.",
    priority: "high",
    dueDate: "2026-05-25",
    status: "done",
    assigneeId: "u1",
    assignedById: "u6",
    completedAt: "2026-05-25",
  },
]

// --- Minimal reactive store over a module-level array ---------------------

let tasks: Task[] = SEED_TASKS
const listeners = new Set<() => void>()

function emit() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot(): Task[] {
  return tasks
}

/** All tasks, reactive. */
export function useTasks(): Task[] {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

/** Move a task to a new status. Stamps completedAt when entering "done". */
export function setTaskStatus(id: string, status: TaskStatus): void {
  tasks = tasks.map((task) => {
    if (task.id !== id) return task
    return {
      ...task,
      status,
      completedAt: status === "done" ? TODAY_ISO : undefined,
    }
  })
  emit()
}
