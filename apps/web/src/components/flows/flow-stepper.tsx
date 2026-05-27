import { Fragment } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import type { FlowStep } from "@/lib/mock-data"
import { AgentBadge } from "@/components/flows/agent-badge"
import { SurfaceChip } from "@/components/flows/surface-chip"

export function FlowStepper({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch lg:gap-0">
      {steps.map((step, index) => (
        <Fragment key={`${step.title}-${index}`}>
          <li className="relative flex-1">
            <StepCard step={step} index={index} />
            {/* Vertical connector for mobile (between rows) */}
            {index < steps.length - 1 ? (
              <span
                aria-hidden
                className="my-1 ml-5 block h-3 w-px bg-border lg:hidden"
              />
            ) : null}
          </li>

          {/* Horizontal connector for desktop */}
          {index < steps.length - 1 ? (
            <li
              aria-hidden
              className="hidden flex-shrink-0 items-center justify-center px-2 lg:flex"
            >
              <ChevronRight className="size-4 text-muted-foreground/60" />
            </li>
          ) : null}
        </Fragment>
      ))}
    </ol>
  )
}

function StepCard({ step, index }: { step: FlowStep; index: number }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-3 rounded-xl border bg-card p-4 ring-1 ring-foreground/5",
        "transition-shadow hover:shadow-sm",
      )}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white shadow-sm ring-2 ring-indigo-100 dark:bg-indigo-500 dark:ring-indigo-900/60",
          )}
        >
          {index + 1}
        </span>
        <h3 className="mt-0.5 text-sm leading-snug font-semibold text-foreground">
          {step.title}
        </h3>
      </div>

      <div className="flex flex-col gap-1.5">
        <SurfaceChip surface={step.surface} />
        {step.agentBehind ? <AgentBadge agent={step.agentBehind} /> : null}
      </div>
    </div>
  )
}
