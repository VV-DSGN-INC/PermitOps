import { useMemo } from "react"
import { Filter, Plus } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { BoardColumn } from "@/components/board/board-column"
import { STATUSES, useTasks } from "@/lib/tasks-store"
import type { Task, TaskStatus } from "@/components/tasks/task-types"

// Group every task by status, then order each column by priority (high first)
// and due date so the busiest, most urgent work floats to the top.
const PRIORITY_RANK: Record<Task["priority"], number> = {
  high: 0,
  medium: 1,
  low: 2,
}

function groupByStatus(tasks: Task[]): Record<TaskStatus, Task[]> {
  const groups = {
    backlog: [],
    todo: [],
    in_progress: [],
    in_review: [],
    done: [],
  } as Record<TaskStatus, Task[]>

  for (const task of tasks) groups[task.status].push(task)

  for (const status of Object.keys(groups) as TaskStatus[]) {
    groups[status].sort((a, b) => {
      const byPriority = PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority]
      if (byPriority !== 0) return byPriority
      return a.dueDate.localeCompare(b.dueDate)
    })
  }

  return groups
}

export function BoardPage() {
  const allTasks = useTasks()
  const grouped = useMemo(() => groupByStatus(allTasks), [allTasks])

  return (
    <div className="flex flex-col gap-6">
      {/* Header — mirrors pages/tasks.tsx */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Tasks
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            The whole team&apos;s work, by stage.
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

      {/* Board — scrolls horizontally when the columns overflow */}
      <div className="-mx-1 overflow-x-auto px-1 pb-2">
        <div className="flex min-w-max items-start gap-4">
          {STATUSES.map((column) => (
            <BoardColumn
              key={column.id}
              status={column.id}
              label={column.label}
              tasks={grouped[column.id]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
