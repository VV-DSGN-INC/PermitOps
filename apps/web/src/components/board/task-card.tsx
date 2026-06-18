import { MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"
import { getPerson } from "@/lib/mock-data"
import { STATUSES, setTaskStatus } from "@/lib/tasks-store"
import type { Task, TaskPriority } from "@/components/tasks/task-types"

// Priority dot tones — mirrors components/tasks/task-row.tsx so the board and
// the list read the same.
const priorityTones: Record<TaskPriority, { dot: string; label: string }> = {
  high: { dot: "bg-red-500", label: "High priority" },
  medium: { dot: "bg-amber-500", label: "Medium priority" },
  low: { dot: "bg-slate-400", label: "Low priority" },
}

// Hashed avatar tones — same palette + hashing as task-row.tsx so a given
// person keeps a stable colour across surfaces.
const avatarTones = [
  "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-200",
  "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
  "bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-200",
  "bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200",
  "bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200",
  "bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-200",
]

function toneFor(id: string) {
  let sum = 0
  for (let i = 0; i < id.length; i += 1) sum += id.charCodeAt(i)
  return avatarTones[sum % avatarTones.length]
}

// Short, board-friendly due label, e.g. "Jun 20".
function shortDue(iso: string): string {
  const date = new Date(iso + "T12:00:00Z")
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

export const TASK_DRAG_TYPE = "application/x-teamhq-task"

export function TaskCard({ task }: { task: Task }) {
  const priority = priorityTones[task.priority]
  const assignee = getPerson(task.assigneeId)
  const due = shortDue(task.dueDate)
  const otherStatuses = STATUSES.filter((s) => s.id !== task.status)

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData(TASK_DRAG_TYPE, task.id)
    // text/plain fallback for environments that ignore the custom type.
    event.dataTransfer.setData("text/plain", task.id)
    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={cn(
        "group/card-item flex cursor-grab flex-col gap-2.5 rounded-lg border border-border bg-card p-3 text-left shadow-xs ring-1 ring-transparent transition-colors hover:border-foreground/20 hover:bg-muted/30 active:cursor-grabbing"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-start gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                className={cn(
                  "mt-1 size-2 shrink-0 rounded-full",
                  priority.dot
                )}
                aria-label={priority.label}
              />
            </TooltipTrigger>
            <TooltipContent>{priority.label}</TooltipContent>
          </Tooltip>
          <p className="line-clamp-2 text-sm font-medium text-foreground">
            {task.title}
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="-mr-1 -mt-1 size-6 shrink-0 opacity-0 transition-opacity group-focus-within/card-item:opacity-100 group-hover/card-item:opacity-100 data-[state=open]:opacity-100"
              aria-label={`Move task "${task.title}" to another column`}
            >
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuLabel>Move to…</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {otherStatuses.map((status) => (
              <DropdownMenuItem
                key={status.id}
                onSelect={() => setTaskStatus(task.id, status.id)}
              >
                {status.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center justify-between gap-2 pl-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar size="sm">
              <AvatarFallback className={toneFor(task.assigneeId)}>
                {assignee?.initials ?? "??"}
              </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>{assignee?.name ?? "Unassigned"}</TooltipContent>
        </Tooltip>
        <span className="text-xs tabular-nums text-muted-foreground">
          {due}
        </span>
      </div>
    </div>
  )
}
