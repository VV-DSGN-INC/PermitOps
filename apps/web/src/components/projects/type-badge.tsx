import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import type { ProjectType } from "@/lib/mock-data"

const typeStyles: Record<ProjectType, string> = {
  Commercial:
    "bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300",
  Residential:
    "bg-purple-100 text-purple-800 dark:bg-purple-500/15 dark:text-purple-300",
  Signage:
    "bg-teal-100 text-teal-800 dark:bg-teal-500/15 dark:text-teal-300",
  "General Improvements":
    "bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300",
  Industrial:
    "bg-slate-200 text-slate-800 dark:bg-slate-500/20 dark:text-slate-300",
}

export function ProjectTypeBadge({ type }: { type: ProjectType }) {
  return (
    <Badge
      variant="secondary"
      className={cn("border-0 font-medium", typeStyles[type])}
    >
      {type}
    </Badge>
  )
}
