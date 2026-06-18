import { Mail } from "lucide-react"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Card } from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"
import type { Person } from "@/lib/mock-data"

// Hashed avatar tones — replicated locally from components/tasks/task-row.tsx so
// a person's initials always render in the same colour across surfaces.
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

function StatTile({ count, label }: { count: number; label: string }) {
  return (
    <div className="flex flex-col gap-0.5 rounded-lg bg-muted/50 px-3 py-2.5 ring-1 ring-foreground/5">
      <span className="font-heading text-2xl font-semibold tabular-nums text-foreground">
        {count}
      </span>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  )
}

export function MemberCard({
  person,
  active,
  inReview,
}: {
  person: Person
  active: number
  inReview: number
}) {
  return (
    <Card className="gap-4 p-5">
      <div className="flex items-start gap-3">
        <Avatar size="lg">
          <AvatarFallback className={cn("font-medium", toneFor(person.id))}>
            {person.initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-heading font-medium leading-snug text-foreground">
            {person.name}
          </span>
          <span className="truncate text-sm text-muted-foreground">
            {person.role}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Mail className="size-4 shrink-0" aria-hidden />
        <span className="truncate">{person.email}</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <StatTile count={active} label="Active" />
        <StatTile count={inReview} label="In review" />
      </div>
    </Card>
  )
}
