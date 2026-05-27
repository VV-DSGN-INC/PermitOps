import { AlertCircle, CalendarClock, CalendarDays, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

type StatTone = {
  border: string
  iconBg: string
  iconText: string
  count: string
}

type StatSpec = {
  key: string
  label: string
  count: number
  icon: LucideIcon
  tone: StatTone
}

const tones: Record<"red" | "amber" | "blue" | "green", StatTone> = {
  red: {
    border: "before:bg-red-500",
    iconBg: "bg-red-50 dark:bg-red-950/40",
    iconText: "text-red-600 dark:text-red-300",
    count: "text-red-700 dark:text-red-300",
  },
  amber: {
    border: "before:bg-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-950/40",
    iconText: "text-amber-700 dark:text-amber-300",
    count: "text-amber-800 dark:text-amber-200",
  },
  blue: {
    border: "before:bg-blue-500",
    iconBg: "bg-blue-50 dark:bg-blue-950/40",
    iconText: "text-blue-600 dark:text-blue-300",
    count: "text-blue-700 dark:text-blue-200",
  },
  green: {
    border: "before:bg-green-500",
    iconBg: "bg-green-50 dark:bg-green-950/40",
    iconText: "text-green-700 dark:text-green-300",
    count: "text-green-700 dark:text-green-300",
  },
}

export function TaskStatStrip({
  overdue,
  today,
  upcoming,
  completedThisWeek,
}: {
  overdue: number
  today: number
  upcoming: number
  completedThisWeek: number
}) {
  const cards: StatSpec[] = [
    {
      key: "overdue",
      label: "Overdue",
      count: overdue,
      icon: AlertCircle,
      tone: tones.red,
    },
    {
      key: "today",
      label: "Due today",
      count: today,
      icon: CalendarClock,
      tone: tones.amber,
    },
    {
      key: "upcoming",
      label: "Upcoming",
      count: upcoming,
      icon: CalendarDays,
      tone: tones.blue,
    },
    {
      key: "completed",
      label: "Completed this week",
      count: completedThisWeek,
      icon: CheckCircle2,
      tone: tones.green,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <div
            key={card.key}
            className={cn(
              "relative overflow-hidden rounded-xl bg-card px-4 py-3.5 ring-1 ring-foreground/10 transition-colors hover:ring-foreground/20",
              "before:absolute before:inset-y-0 before:left-0 before:w-0.5",
              card.tone.border
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-medium text-muted-foreground">
                  {card.label}
                </span>
                <span
                  className={cn(
                    "mt-1.5 font-heading text-3xl font-semibold tabular-nums",
                    card.tone.count
                  )}
                >
                  {card.count}
                </span>
              </div>
              <span
                className={cn(
                  "inline-flex size-7 items-center justify-center rounded-md",
                  card.tone.iconBg,
                  card.tone.iconText
                )}
                aria-hidden
              >
                <Icon className="size-4" />
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
