import { Sparkles } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

type AgentTone = {
  bg: string
  text: string
  ring: string
  iconText: string
}

const tones: Record<string, AgentTone> = {
  Intake: {
    bg: "bg-blue-50 dark:bg-blue-950/40",
    text: "text-blue-700 dark:text-blue-300",
    ring: "ring-blue-200/70 dark:ring-blue-900/60",
    iconText: "text-blue-500 dark:text-blue-400",
  },
  Research: {
    bg: "bg-violet-50 dark:bg-violet-950/40",
    text: "text-violet-700 dark:text-violet-300",
    ring: "ring-violet-200/70 dark:ring-violet-900/60",
    iconText: "text-violet-500 dark:text-violet-400",
  },
  Submission: {
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    text: "text-emerald-700 dark:text-emerald-300",
    ring: "ring-emerald-200/70 dark:ring-emerald-900/60",
    iconText: "text-emerald-500 dark:text-emerald-400",
  },
  Coordination: {
    bg: "bg-amber-50 dark:bg-amber-950/40",
    text: "text-amber-800 dark:text-amber-300",
    ring: "ring-amber-200/70 dark:ring-amber-900/60",
    iconText: "text-amber-500 dark:text-amber-400",
  },
}

const fallbackTone: AgentTone = {
  bg: "bg-muted",
  text: "text-muted-foreground",
  ring: "ring-border",
  iconText: "text-muted-foreground",
}

export function AgentBadge({
  agent,
  className,
}: {
  agent: string
  className?: string
}) {
  const tone = tones[agent] ?? fallbackTone
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-transparent ring-1 ring-inset",
        tone.bg,
        tone.text,
        tone.ring,
        className,
      )}
    >
      <Sparkles className={cn("size-3", tone.iconText)} aria-hidden />
      <span className="font-medium">{agent}</span>
      <span className="text-[10px] font-normal opacity-70">agent</span>
    </Badge>
  )
}
