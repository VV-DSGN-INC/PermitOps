import { useMemo, useState } from "react"
import { Filter, ListChecks, Plus } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { TaskStatStrip } from "@/components/tasks/task-stat-strip"
import { TaskRow } from "@/components/tasks/task-row"
import type { Task } from "@/components/tasks/task-types"

const TODAY_ISO = "2026-05-26"
const DAY_MS = 1000 * 60 * 60 * 24
const TODAY = new Date(TODAY_ISO + "T12:00:00Z")

function daysFromToday(iso: string): number {
  const date = new Date(iso + "T12:00:00Z")
  return Math.floor((date.getTime() - TODAY.getTime()) / DAY_MS)
}

// Mock data — ~14 tasks for Jasmine Diaz spanning overdue, today, upcoming,
// and recently completed. Related to real Permit/Project IDs in mock-data.
const INITIAL_TASKS: Task[] = [
  {
    id: "t1",
    title: "Address reviewer comments on B2026-7841",
    description:
      "Linda Ruiz flagged two egress widths on sheet A-201. Coordinate with Marcus before resubmit.",
    priority: "high",
    dueDate: "2026-05-22",
    assignedById: "u6",
    relatedPermitId: "pm5",
    completed: false,
  },
  {
    id: "t2",
    title: "Pay permit fee for B2026-1122",
    description:
      "$2,840 owed to SF DBI before the application moves out of preparing.",
    priority: "high",
    dueDate: "2026-05-23",
    assignedById: "u2",
    relatedPermitId: "pm1",
    completed: false,
  },
  {
    id: "t3",
    title: "Upload revised electrical plan for Solar Permit",
    description:
      "Norfolk asked for an updated single-line diagram with conductor sizing called out.",
    priority: "high",
    dueDate: "2026-05-24",
    assignedById: "u3",
    relatedPermitId: "pm7",
    completed: false,
  },
  {
    id: "t4",
    title: "Confirm jurisdiction for Beacon Hill Drive-thru Remodel",
    description:
      "Address sits on the Boston / Cambridge boundary — verify with Boston ISD before filing.",
    priority: "medium",
    dueDate: "2026-05-25",
    assignedById: "u3",
    relatedProjectId: "p4",
    completed: false,
  },
  {
    id: "t5",
    title: "Approve sign permit response narrative",
    description:
      "Sam drafted the corrections reply for S-2026-118 — needs your sign-off before submission.",
    priority: "high",
    dueDate: TODAY_ISO,
    assignedById: "u2",
    relatedPermitId: "pm6",
    completed: false,
  },
  {
    id: "t6",
    title: "Coordinate inspection slot for Roofing Permit",
    description:
      "Atlanta wants a 48-hour window. Pick a date that lines up with Leo's field crew.",
    priority: "medium",
    dueDate: TODAY_ISO,
    assignedById: "u5",
    relatedPermitId: "pm3",
    completed: false,
  },
  {
    id: "t7",
    title: "Sign Owner Authorization Letter for P-2026-991",
    description:
      "Hill Architects sent the executed scope. Counter-sign and attach to the plumbing application packet.",
    priority: "medium",
    dueDate: TODAY_ISO,
    assignedById: "u1",
    relatedPermitId: "pm8",
    completed: false,
  },
  {
    id: "t8",
    title: "Review Holden Manufacturing requirements list",
    description:
      "Research agent surfaced 14 items for the CTI — needs a human pass before sharing with the client.",
    priority: "medium",
    dueDate: "2026-05-28",
    assignedById: "u4",
    relatedProjectId: "p6",
    completed: false,
  },
  {
    id: "t9",
    title: "Schedule pre-submittal call with Bal Harbour planner",
    description:
      "Get ahead of the signage objection that came up on the last permit cycle.",
    priority: "low",
    dueDate: "2026-05-29",
    assignedById: "u1",
    relatedProjectId: "p5",
    completed: false,
  },
  {
    id: "t10",
    title: "Forward weekly status to Mission District client",
    description:
      "Pull the shareable status link from the permit side panel and add a two-line note.",
    priority: "low",
    dueDate: "2026-06-01",
    assignedById: "u4",
    relatedProjectId: "p1",
    completed: false,
  },
  {
    id: "t11",
    title: "Renew expired ENG19-DC9E4 before next inspection",
    description:
      "Permit lapsed in December. Decide whether to renew or close out before Leo gets on site.",
    priority: "high",
    dueDate: "2026-06-03",
    assignedById: "u5",
    relatedPermitId: "pm9",
    completed: false,
  },
  {
    id: "t12",
    title: "Archive closed Bayside Remodel paperwork",
    description:
      "Closeout packet is ready — move scans to the project archive and notify the owner.",
    priority: "low",
    dueDate: "2026-06-05",
    assignedById: "u1",
    relatedPermitId: "pm10",
    completed: false,
  },
  {
    id: "t13",
    title: "Submit Plan Set Index Form 3/8 for C12AB",
    description:
      "Last form blocking Marcus from moving the Roastery permit out of preparing.",
    priority: "medium",
    dueDate: "2026-05-21",
    assignedById: "u4",
    relatedPermitId: "pm2",
    completed: true,
    completedAt: "2026-05-22",
  },
  {
    id: "t14",
    title: "File extension request for Brickell electrical inspection",
    description:
      "Inspector rescheduled — got the new slot pinned to next Tuesday.",
    priority: "medium",
    dueDate: "2026-05-20",
    assignedById: "u4",
    relatedPermitId: "pm4",
    completed: true,
    completedAt: "2026-05-23",
  },
]

type TaskTab = "all" | "today" | "upcoming" | "completed"

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS)
  const [tab, setTab] = useState<TaskTab>("all")

  function handleToggle(id: string) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task
        const nextCompleted = !task.completed
        return {
          ...task,
          completed: nextCompleted,
          completedAt: nextCompleted ? TODAY_ISO : undefined,
        }
      })
    )
  }

  const counts = useMemo(() => {
    let overdue = 0
    let today = 0
    let upcoming = 0
    let completedThisWeek = 0
    for (const task of tasks) {
      const diff = daysFromToday(task.dueDate)
      if (task.completed) {
        const completedDiff = task.completedAt
          ? Math.abs(daysFromToday(task.completedAt))
          : 0
        if (completedDiff <= 7) completedThisWeek += 1
        continue
      }
      if (diff < 0) overdue += 1
      else if (diff === 0) today += 1
      else upcoming += 1
    }
    return { overdue, today, upcoming, completedThisWeek }
  }, [tasks])

  const visibleByTab = useMemo(() => {
    const all = tasks.filter((t) => !t.completed)
    const today = tasks.filter((t) => !t.completed && daysFromToday(t.dueDate) <= 0)
    const upcoming = tasks.filter(
      (t) => !t.completed && daysFromToday(t.dueDate) > 0
    )
    const completed = tasks.filter((t) => t.completed)
    return { all, today, upcoming, completed }
  }, [tasks])

  function sortTasks(list: Task[]): Task[] {
    return [...list].sort((a, b) => {
      // Completed always last
      if (a.completed !== b.completed) return a.completed ? 1 : -1
      // Then by due date ascending
      return a.dueDate.localeCompare(b.dueDate)
    })
  }

  const tabConfig: { value: TaskTab; label: string; tasks: Task[] }[] = [
    { value: "all", label: "All", tasks: visibleByTab.all },
    { value: "today", label: "Today", tasks: visibleByTab.today },
    { value: "upcoming", label: "Upcoming", tasks: visibleByTab.upcoming },
    { value: "completed", label: "Completed", tasks: visibleByTab.completed },
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            My Tasks
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Things needing your attention across every project.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter />
            Filter
          </Button>
          <Button>
            <Plus />
            New task
          </Button>
        </div>
      </div>

      {/* Stat strip */}
      <TaskStatStrip
        overdue={counts.overdue}
        today={counts.today}
        upcoming={counts.upcoming}
        completedThisWeek={counts.completedThisWeek}
      />

      {/* Tabs + list */}
      <Tabs
        value={tab}
        onValueChange={(value) => setTab(value as TaskTab)}
        className="gap-4"
      >
        <TabsList>
          {tabConfig.map((entry) => (
            <TabsTrigger key={entry.value} value={entry.value}>
              {entry.label}
              <span className="ml-1.5 rounded-full bg-muted px-1.5 text-xs text-muted-foreground tabular-nums">
                {entry.tasks.length}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabConfig.map((entry) => {
          const sorted = sortTasks(entry.tasks)
          return (
            <TabsContent key={entry.value} value={entry.value} className="mt-1">
              <Card size="sm" className="gap-0 py-0">
                {sorted.length === 0 ? (
                  <div className="flex flex-col items-center gap-2 px-4 py-12 text-center">
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <ListChecks className="size-4" />
                    </span>
                    <p className="text-sm font-medium text-foreground">
                      {emptyTitle(entry.value)}
                    </p>
                    <p className="max-w-sm text-xs text-muted-foreground">
                      {emptyHint(entry.value)}
                    </p>
                  </div>
                ) : (
                  <ul className="flex flex-col">
                    {sorted.map((task, idx) => (
                      <TaskRow
                        key={task.id}
                        task={task}
                        onToggle={handleToggle}
                        isLast={idx === sorted.length - 1}
                      />
                    ))}
                  </ul>
                )}
              </Card>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

function emptyTitle(tab: TaskTab): string {
  switch (tab) {
    case "today":
      return "Nothing due today"
    case "upcoming":
      return "No upcoming tasks"
    case "completed":
      return "No completed tasks yet"
    default:
      return "Inbox zero"
  }
}

function emptyHint(tab: TaskTab): string {
  switch (tab) {
    case "today":
      return "When something gets assigned to you or a permit hits a deadline, it'll show up here."
    case "upcoming":
      return "Future deadlines and follow-ups will appear here as they're scheduled."
    case "completed":
      return "Tasks you mark done will collect here for the week."
    default:
      return "You're all caught up across every project. Nice."
  }
}
