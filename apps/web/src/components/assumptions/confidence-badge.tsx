import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import type { Assumption } from "@/lib/mock-data"

export type Confidence = Assumption["confidence"]

export const confidenceStyles: Record<Confidence, string> = {
  High: "bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-300",
  Medium: "bg-amber-100 text-amber-900 dark:bg-amber-500/15 dark:text-amber-300",
  Low: "bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-300",
}

export const confidenceDotStyles: Record<Confidence, string> = {
  High: "bg-green-500",
  Medium: "bg-amber-500",
  Low: "bg-red-500",
}

export function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  return (
    <Badge
      variant="secondary"
      className={cn("gap-1.5 border-0 font-medium", confidenceStyles[confidence])}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          confidenceDotStyles[confidence],
        )}
        aria-hidden
      />
      {confidence} confidence
    </Badge>
  )
}
