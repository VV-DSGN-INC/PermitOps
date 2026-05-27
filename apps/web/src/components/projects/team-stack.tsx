import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { getPerson } from "@/lib/mock-data"

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

export function TeamStack({ team }: { team: string[] }) {
  if (team.length === 0) {
    return <span className="text-muted-foreground">—</span>
  }

  return (
    <AvatarGroup>
      {team.slice(0, 3).map((id) => {
        const person = getPerson(id)
        const initials = person?.initials ?? "??"
        const name = person?.name ?? "Unassigned"
        return (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <Avatar size="sm">
                <AvatarFallback className={toneFor(id)}>
                  {initials}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
          </Tooltip>
        )
      })}
      {team.length > 3 ? (
        <Avatar size="sm">
          <AvatarFallback className="bg-muted text-[10px]">
            +{team.length - 3}
          </AvatarFallback>
        </Avatar>
      ) : null}
    </AvatarGroup>
  )
}
