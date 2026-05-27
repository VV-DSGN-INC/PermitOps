import { Users } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { personas } from "@/lib/mock-data"
import { PersonaCard } from "@/components/personas/persona-card"

const COUNTER_PERSONA_ID = "persona-5"

export function PersonasPage() {
  const primary = personas.filter((p) => p.id !== COUNTER_PERSONA_ID)
  const counter = personas.find((p) => p.id === COUNTER_PERSONA_ID)

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 pb-12">
      {/* Page header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 font-medium text-muted-foreground">
            <Users className="size-3" aria-hidden />
            Design notes
          </Badge>
          <span className="text-xs text-muted-foreground">v0.1 · working hypotheses</span>
        </div>
        <div className="space-y-2">
          <h1 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground">
            Personas
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Who PermitOps is designed for &mdash; and the one we&rsquo;re designing around.
          </p>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-foreground/85">
          These are working hypotheses, not validated research. Three primary personas (the
          people who will actually open the product &mdash; two homeowners and a residential
          contractor) sit alongside one counter-persona &mdash; Linda Ruiz, the municipal reviewer.
          She never logs in, but every design choice ripples to her desk. Designing for her
          quality bar keeps us honest about what &ldquo;done&rdquo; means.
        </p>
      </header>

      <Separator />

      {/* Primary personas */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Primary personas
            </h2>
            <p className="text-sm text-muted-foreground">
              The three roles that drive product decisions, ranked by depth of daily use.
            </p>
          </div>
          <Badge variant="secondary" className="hidden font-medium sm:inline-flex">
            {primary.length} personas
          </Badge>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {primary.map((persona) => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      </section>

      {/* Counter-persona */}
      {counter && (
        <section className="space-y-5">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Counter-persona
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Linda doesn&rsquo;t use PermitOps &mdash; but her review queue is downstream of every
                submission we generate. If she struggles, we&rsquo;ve failed, regardless of how
                slick the interior screens feel.
              </p>
            </div>
          </div>
          <PersonaCard persona={counter} isCounter />
        </section>
      )}
    </div>
  )
}
