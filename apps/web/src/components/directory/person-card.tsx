import { MessageSquare, UserRound } from "lucide-react"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"
import type { Person } from "@/lib/mock-data"
import { getAccent } from "./data"

type PersonCardProps = {
  person: Person
  company: string
  activeProjects: number
}

export function PersonCard({ person, company, activeProjects }: PersonCardProps) {
  const accent = getAccent(person.id)

  return (
    <Card size="sm" className={cn("gap-3 transition-shadow hover:ring-foreground/20", accent.ring)}>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <Avatar size="lg" className="size-12 shrink-0">
            <AvatarFallback
              className={cn("text-sm font-semibold tracking-tight", accent.bg, accent.text)}
            >
              {person.initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-base leading-tight font-semibold text-foreground">
              {person.name}
            </h3>
            <p className="mt-0.5 text-sm text-foreground/80">{person.role}</p>
            <p className="text-xs text-muted-foreground">{company}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-mono text-[0.72rem] text-muted-foreground">
            {person.email}
          </span>
          <Badge variant="secondary" className="shrink-0 font-medium">
            Active on {activeProjects} {activeProjects === 1 ? "project" : "projects"}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <MessageSquare data-icon="inline-start" />
            Message
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <UserRound data-icon="inline-start" />
            View profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
