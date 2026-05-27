import { Sparkles, MapPin } from "lucide-react"
import { flows } from "@/lib/mock-data"
import { FlowCard } from "@/components/flows/flow-card"

export function FlowsPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 pb-16">
      <header className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Design Notes
          </span>
          <h1 className="font-heading text-3xl leading-tight font-semibold text-foreground sm:text-4xl">
            Key Flows
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            The three journeys this MVP optimizes for.
          </p>
        </div>

        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Each flow is mapped to a persona and a measurable outcome; surfaces
          (where in the product the step happens) are annotated under each step,
          alongside the agent that owns the work when AI is involved.
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden />
            Surface chip
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="size-3.5" aria-hidden />
            Agent attribution
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LegendDot className="bg-blue-500" />
            Intake
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LegendDot className="bg-violet-500" />
            Research
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LegendDot className="bg-emerald-500" />
            Submission
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LegendDot className="bg-amber-500" />
            Coordination
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-8">
        {flows.map((flow, index) => (
          <FlowCard key={flow.id} flow={flow} index={index} />
        ))}
      </div>
    </div>
  )
}

function LegendDot({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-2 rounded-full ${className}`}
    />
  )
}
