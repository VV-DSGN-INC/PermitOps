import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import type { Municipality } from "@/lib/mock-data"

const jurisdictionStyles: Record<Municipality["jurisdictionType"], string> = {
  City:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-300",
  "Regional District":
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  "District Municipality":
    "bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-300",
  Province:
    "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
}

export function JurisdictionBadge({
  type,
}: {
  type: Municipality["jurisdictionType"]
}) {
  return (
    <Badge
      variant="secondary"
      className={cn("border-0 font-medium", jurisdictionStyles[type])}
    >
      {type}
    </Badge>
  )
}
