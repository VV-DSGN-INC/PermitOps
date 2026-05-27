import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { projectStatusLabel } from "@/lib/mock-data"
import type { ProjectStatus } from "@/lib/mock-data"

const statusStyles: Record<ProjectStatus, string> = {
  permit_pending:
    "bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300",
  permit_issued:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  in_construction:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-300",
  intake:
    "bg-slate-100 text-slate-700 dark:bg-slate-500/15 dark:text-slate-300",
  inactive:
    "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
}

const statusDotStyles: Record<ProjectStatus, string> = {
  permit_pending: "bg-blue-500",
  permit_issued: "bg-emerald-500",
  in_construction: "bg-indigo-500",
  intake: "bg-slate-400",
  inactive: "bg-amber-500",
}

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <Badge
      variant="secondary"
      className={cn("gap-1.5 border-0 font-medium", statusStyles[status])}
    >
      <span
        className={cn("size-1.5 rounded-full", statusDotStyles[status])}
        aria-hidden
      />
      {projectStatusLabel[status]}
    </Badge>
  )
}
