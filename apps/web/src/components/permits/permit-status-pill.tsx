import { cn } from "@workspace/ui/lib/utils"
import { statusLabel } from "@/lib/mock-data"
import type { PermitStatus } from "@/lib/mock-data"

type Tone = {
  dot: string
  bg: string
  text: string
  ring: string
}

const tones: Record<PermitStatus, Tone> = {
  preparing: {
    dot: "bg-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/40",
    text: "text-indigo-700 dark:text-indigo-300",
    ring: "ring-indigo-200/70 dark:ring-indigo-900/60",
  },
  submitted: {
    dot: "bg-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    text: "text-blue-700 dark:text-blue-300",
    ring: "ring-blue-200/70 dark:ring-blue-900/60",
  },
  in_review: {
    dot: "bg-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    text: "text-blue-700 dark:text-blue-300",
    ring: "ring-blue-200/70 dark:ring-blue-900/60",
  },
  comments: {
    dot: "bg-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    text: "text-amber-800 dark:text-amber-300",
    ring: "ring-amber-200/70 dark:ring-amber-900/60",
  },
  approved: {
    dot: "bg-green-500",
    bg: "bg-green-50 dark:bg-green-950/40",
    text: "text-green-700 dark:text-green-300",
    ring: "ring-green-200/70 dark:ring-green-900/60",
  },
  issued: {
    dot: "bg-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    text: "text-emerald-700 dark:text-emerald-300",
    ring: "ring-emerald-200/70 dark:ring-emerald-900/60",
  },
  expiring: {
    dot: "bg-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/40",
    text: "text-orange-700 dark:text-orange-300",
    ring: "ring-orange-200/70 dark:ring-orange-900/60",
  },
  expired: {
    dot: "bg-red-500",
    bg: "bg-red-50 dark:bg-red-950/40",
    text: "text-red-700 dark:text-red-300",
    ring: "ring-red-200/70 dark:ring-red-900/60",
  },
  closed: {
    dot: "bg-green-500",
    bg: "bg-muted",
    text: "text-muted-foreground",
    ring: "ring-border",
  },
}

export function PermitStatusPill({
  status,
  size = "sm",
  className,
}: {
  status: PermitStatus
  size?: "sm" | "lg"
  className?: string
}) {
  const tone = tones[status]
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full font-medium ring-1 ring-inset",
        tone.bg,
        tone.text,
        tone.ring,
        size === "sm" ? "h-5 px-2 text-xs" : "h-7 px-2.5 text-sm",
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", tone.dot)} aria-hidden />
      {statusLabel[status]}
    </span>
  )
}

export function statusTone(status: PermitStatus): Tone {
  return tones[status]
}
