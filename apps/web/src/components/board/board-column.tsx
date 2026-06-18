import { useState } from "react"
import { cn } from "@workspace/ui/lib/utils"
import { setTaskStatus } from "@/lib/tasks-store"
import type { Task, TaskStatus } from "@/components/tasks/task-types"
import { TASK_DRAG_TYPE, TaskCard } from "./task-card"

export function BoardColumn({
  status,
  label,
  tasks,
}: {
  status: TaskStatus
  label: string
  tasks: Task[]
}) {
  const [isOver, setIsOver] = useState(false)

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    // Allow the drop and show the column as a target.
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
    if (!isOver) setIsOver(true)
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    // Ignore bubbling from children re-entering the column.
    if (event.currentTarget.contains(event.relatedTarget as Node | null)) return
    setIsOver(false)
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    setIsOver(false)
    const id =
      event.dataTransfer.getData(TASK_DRAG_TYPE) ||
      event.dataTransfer.getData("text/plain")
    if (id) setTaskStatus(id, status)
  }

  return (
    <div className="flex w-[260px] shrink-0 flex-col">
      <div className="mb-2 flex items-center gap-2 px-1">
        <h2 className="text-sm font-medium text-foreground">{label}</h2>
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-muted px-1.5 text-xs font-medium text-muted-foreground tabular-nums">
          {tasks.length}
        </span>
      </div>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "flex min-h-32 flex-1 flex-col gap-2 rounded-xl border border-transparent bg-muted/40 p-2 transition-colors",
          isOver && "border-dashed border-foreground/30 bg-accent/60"
        )}
      >
        {tasks.length === 0 ? (
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-border/60 px-3 py-8 text-center text-xs text-muted-foreground/70">
            Nothing here
          </div>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  )
}
