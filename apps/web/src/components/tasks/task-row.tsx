import { Bell, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"
import { getPerson, getProject, permits } from "@/lib/mock-data"
import type { Task, TaskPriority } from "./task-types"

const priorityTones: Record<
  TaskPriority,
  { dot: string; label: string }
> = {
  high: { dot: "bg-red-500", label: "High priority" },
  medium: { dot: "bg-amber-500", label: "Medium priority" },
  low: { dot: "bg-slate-400", label: "Low priority" },
}

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

const DAY_MS = 1000 * 60 * 60 * 24
const TODAY = new Date("2026-05-26T12:00:00Z")

function dueLabel(iso: string): {
  label: string
  overdue: boolean
  isToday: boolean
} {
  const date = new Date(iso + "T12:00:00Z")
  const diff = Math.floor((date.getTime() - TODAY.getTime()) / DAY_MS)
  const overdue = diff < 0
  const isToday = diff === 0
  if (isToday) return { label: "Today", overdue: false, isToday: true }
  if (diff === 1) return { label: "Tomorrow", overdue: false, isToday: false }
  if (diff === -1) return { label: "Yesterday", overdue: true, isToday: false }
  if (overdue && diff > -7)
    return { label: `${Math.abs(diff)} days late`, overdue: true, isToday: false }
  if (diff > 0 && diff < 7)
    return { label: `In ${diff} days`, overdue: false, isToday: false }
  const label = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
  return { label, overdue, isToday: false }
}

function getPermit(id: string) {
  return permits.find((p) => p.id === id)
}

export function TaskRow({
  task,
  onToggle,
  isLast,
}: {
  task: Task
  onToggle: (id: string) => void
  isLast?: boolean
}) {
  const priority = priorityTones[task.priority]
  const due = dueLabel(task.dueDate)
  const assignedBy = getPerson(task.assignedById)
  const permit = task.relatedPermitId ? getPermit(task.relatedPermitId) : undefined
  const project = task.relatedProjectId
    ? getProject(task.relatedProjectId)
    : permit
      ? getProject(permit.projectId)
      : undefined
  const completed = task.completed

  return (
    <li
      className={cn(
        "group flex items-start gap-3 px-4 py-3.5 transition-colors hover:bg-muted/40",
        !isLast && "border-b border-border/60",
        completed && "bg-muted/20"
      )}
    >
      <div className="mt-0.5 flex items-center gap-2.5">
        <Checkbox
          checked={completed}
          onCheckedChange={() => onToggle(task.id)}
          aria-label={completed ? "Mark task as incomplete" : "Mark task as complete"}
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <span
              className={cn("size-2 shrink-0 rounded-full", priority.dot)}
              aria-label={priority.label}
            />
          </TooltipTrigger>
          <TooltipContent>{priority.label}</TooltipContent>
        </Tooltip>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
          <span
            className={cn(
              "font-medium text-foreground",
              completed && "text-muted-foreground line-through"
            )}
          >
            {task.title}
          </span>
        </div>
        <p
          className={cn(
            "line-clamp-1 text-sm text-muted-foreground",
            completed && "line-through opacity-70"
          )}
        >
          {task.description}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {permit ? (
            <button
              type="button"
              className="inline-flex h-5 items-center gap-1 rounded-full bg-indigo-50 px-2 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200/70 transition-colors hover:bg-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300 dark:ring-indigo-900/60 dark:hover:bg-indigo-950/60"
            >
              <span className="size-1.5 rounded-full bg-indigo-500" aria-hidden />
              {permit.permitNumber}
            </button>
          ) : null}
          {project && !permit ? (
            <button
              type="button"
              className="inline-flex h-5 items-center gap-1 rounded-full bg-violet-50 px-2 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-200/70 transition-colors hover:bg-violet-100 dark:bg-violet-950/40 dark:text-violet-300 dark:ring-violet-900/60 dark:hover:bg-violet-950/60"
            >
              <span className="size-1.5 rounded-full bg-violet-500" aria-hidden />
              {project.name}
            </button>
          ) : null}
          {project && permit ? (
            <span className="text-xs text-muted-foreground">
              {project.name}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4 pl-2">
        <div className="hidden flex-col items-end text-right md:flex">
          <span
            className={cn(
              "text-xs tabular-nums",
              completed
                ? "text-muted-foreground line-through"
                : due.overdue
                  ? "font-semibold text-destructive"
                  : due.isToday
                    ? "font-semibold text-amber-700 dark:text-amber-300"
                    : "text-foreground"
            )}
          >
            {due.label}
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
            Due
          </span>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar size="sm">
                <AvatarFallback className={toneFor(task.assignedById)}>
                  {assignedBy?.initials ?? "??"}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              Assigned by {assignedBy?.name ?? "Unknown"}
            </TooltipContent>
          </Tooltip>
          <div className="flex flex-col text-xs leading-tight">
            <span className="text-foreground">{assignedBy?.name ?? "Unknown"}</span>
            <span className="text-muted-foreground">Assigned by</span>
          </div>
        </div>

        <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Snooze task: ${task.title}`}
              >
                <Bell />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Snooze</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Open task: ${task.title}`}
              >
                <ChevronRight />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Open</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </li>
  )
}
