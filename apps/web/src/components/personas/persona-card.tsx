import { AlertCircle, ArrowRight, Quote, Target } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
} from "@workspace/ui/components/card"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"
import type { Persona } from "@/lib/mock-data"
import { getPersonaAccent } from "./persona-accent"
import { TechComfortMeter } from "./tech-comfort"

type PersonaCardProps = {
  persona: Persona
  /** When true, render the visually distinct "counter-persona" treatment. */
  isCounter?: boolean
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

type ListSectionProps = {
  title: string
  items: string[]
  icon: typeof Target
  iconClassName: string
}

function ListSection({ title, items, icon: Icon, iconClassName }: ListSectionProps) {
  return (
    <section className="space-y-2.5">
      <h4 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-snug text-foreground">
            <Icon className={cn("mt-0.5 size-3.5 shrink-0", iconClassName)} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function PersonaCard({ persona, isCounter = false }: PersonaCardProps) {
  const accent = getPersonaAccent(persona.id)
  const initials = getInitials(persona.name)

  return (
    <Card
      className={cn(
        "relative gap-0 overflow-hidden p-0",
        accent.cardRing,
        isCounter && "ring-2 border-dashed"
      )}
    >
      {/* Subtle accent wash anchored to the header */}
      <div
        className={cn("pointer-events-none absolute inset-x-0 top-0 h-40", accent.headerWash)}
        aria-hidden
      />

      <CardHeader className="relative gap-4 px-6 pt-6">
        <div className="flex items-start gap-4">
          <Avatar size="lg" className="size-14">
            <AvatarFallback
              className={cn(
                "text-base font-semibold tracking-tight",
                accent.avatarBg,
                accent.avatarText
              )}
            >
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-heading text-lg leading-tight font-semibold text-foreground">
                {persona.name}
              </h3>
              {isCounter ? (
                <Badge
                  variant="secondary"
                  className={cn("gap-1 border-0 font-medium", accent.badgeBg, accent.badgeText)}
                >
                  <span
                    className={cn("size-1.5 rounded-full", accent.meterFilled)}
                    aria-hidden
                  />
                  Counter-persona
                </Badge>
              ) : (
                <Badge
                  variant="secondary"
                  className={cn("gap-1 border-0 font-medium", accent.badgeBg, accent.badgeText)}
                >
                  <span
                    className={cn("size-1.5 rounded-full", accent.meterFilled)}
                    aria-hidden
                  />
                  Primary persona
                </Badge>
              )}
            </div>
            <p className="text-sm font-medium text-foreground">{persona.role}</p>
            <p className="text-sm text-muted-foreground">{persona.company}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-6 px-6 pt-5 pb-6">
        <p className="text-sm leading-relaxed text-foreground/90">{persona.bio}</p>

        <TechComfortMeter value={persona.techComfort} filledClassName={accent.meterFilled} />

        {/*
          Gradient-stripe accent instead of border-left — borders curve into rounded
          corners and look cropped; a hard-stop linear-gradient stays sharp inside the
          same rounded card. (Source: buttonschool.com/blog/awkward-borders)
        */}
        <figure
          className="relative rounded-md bg-muted/40 py-3 pr-4 pl-6"
          style={{
            backgroundImage: `linear-gradient(to right, ${accent.quoteStripe} 4px, transparent 4px)`,
          }}
        >
          <Quote
            className={cn(
              "absolute -top-1 left-4 size-4 opacity-30",
              accent.badgeText
            )}
            aria-hidden
          />
          <blockquote className="font-heading text-base leading-snug font-medium text-foreground italic">
            &ldquo;{persona.quote}&rdquo;
          </blockquote>
        </figure>

        <Separator />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ListSection
            title="Goals"
            items={persona.goals}
            icon={Target}
            iconClassName="text-green-600 dark:text-green-400"
          />
          <ListSection
            title="Pains"
            items={persona.pains}
            icon={AlertCircle}
            iconClassName="text-red-600 dark:text-red-400"
          />
          <ListSection
            title="Jobs to be done"
            items={persona.jobsToBeDone}
            icon={ArrowRight}
            iconClassName="text-primary"
          />
        </div>
      </CardContent>
    </Card>
  )
}
