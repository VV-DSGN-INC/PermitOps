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
import { CURRENT_USER_ID, useTasks, setTaskStatus } from "@/lib/tasks-store"

const TODAY_ISO = "2026-05-26"
const DAY_MS = 1000 * 60 * 60 * 24
const TODAY = new Date(TODAY_ISO + "T12:00:00Z")

function daysFromToday(iso: string): number {
  const date = new Date(iso + "T12:00:00Z")
  return Math.floor((date.getTime() - TODAY.getTime()) / DAY_MS)
}

function isDone(task: Task): boolean {
  return task.status === "done"
}

type TaskTab = "all" | "today" | "upcoming" | "completed"

export function TasksPage() {
  const allTasks = useTasks()
  const [tab, setTab] = useState<TaskTab>("all")

  // "My tasks" is everything owned by the signed-in person.
  const tasks = useMemo(
    () => allTasks.filter((t) => t.assigneeId === CURRENT_USER_ID),
    [allTasks]
  )

  function handleToggle(id: string) {
    const task = tasks.find((t) => t.id === id)
    if (!task) return
    setTaskStatus(id, isDone(task) ? "todo" : "done")
  }

  const counts = useMemo(() => {
    let overdue = 0
    let today = 0
    let upcoming = 0
    let completedThisWeek = 0
    for (const task of tasks) {
      const diff = daysFromToday(task.dueDate)
      if (isDone(task)) {
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
    const all = tasks.filter((t) => !isDone(t))
    const today = tasks.filter((t) => !isDone(t) && daysFromToday(t.dueDate) <= 0)
    const upcoming = tasks.filter(
      (t) => !isDone(t) && daysFromToday(t.dueDate) > 0
    )
    const completed = tasks.filter((t) => isDone(t))
    return { all, today, upcoming, completed }
  }, [tasks])

  function sortTasks(list: Task[]): Task[] {
    return [...list].sort((a, b) => {
      // Completed always last
      if (isDone(a) !== isDone(b)) return isDone(a) ? 1 : -1
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
            Everything assigned to you across the team.
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
      return "When something gets assigned to you, it'll show up here."
    case "upcoming":
      return "Future deadlines and follow-ups will appear here as they're scheduled."
    case "completed":
      return "Tasks you mark done will collect here for the week."
    default:
      return "You're all caught up. Nice."
  }
}
