import { Target, UserRound } from "lucide-react"
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import type { Flow } from "@/lib/mock-data"
import { FlowStepper } from "@/components/flows/flow-stepper"

export function FlowCard({ flow, index }: { flow: Flow; index: number }) {
  return (
    <Card className="gap-6 p-6 sm:p-8">
      <CardHeader className="gap-4 px-0">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <span
              aria-hidden
              className="flex size-5 items-center justify-center rounded-md bg-muted text-[10px] font-semibold text-foreground/70"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            Flow
          </div>
          <h2 className="font-heading text-2xl leading-tight font-semibold text-foreground sm:text-3xl">
            {flow.name}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <UserRound className="size-4 text-muted-foreground" aria-hidden />
            <span className="font-medium text-muted-foreground">Persona</span>
            <span className="text-foreground">{flow.persona}</span>
          </div>

          {/*
            Gradient-stripe accent instead of border-left — borders curve into rounded
            corners and look cropped; a hard-stop linear-gradient stays sharp inside the
            same rounded card. (Source: buttonschool.com/blog/awkward-borders)
          */}
          <div
            className="flex items-start gap-3 rounded-md bg-primary/5 py-3 pr-4 pl-5"
            style={{
              backgroundImage: `linear-gradient(to right, var(--primary) 4px, transparent 4px)`,
            }}
          >
            <Target
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden
            />
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-semibold tracking-wide text-primary uppercase">
                Outcome
              </span>
              <p className="text-sm leading-relaxed text-foreground italic">
                {flow.outcome}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-6 px-0">
        <FlowStepper steps={flow.steps} />

        <Separator />

        <section
          aria-label="Step details"
          className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2"
        >
          {flow.steps.map((step, stepIndex) => (
            <div
              key={`${step.title}-${stepIndex}-detail`}
              className="flex gap-3"
            >
              <span
                aria-hidden
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-semibold text-indigo-700 ring-1 ring-indigo-200/70 dark:bg-indigo-950/40 dark:text-indigo-300 dark:ring-indigo-900/60"
              >
                {stepIndex + 1}
              </span>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-foreground">
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </CardContent>
    </Card>
  )
}
