import {
  AlertTriangle,
  Bot,
  Check,
  ChevronDown,
  CornerDownLeft,
  FileText,
  MessageCircleQuestion,
  Pencil,
  Play,
  RotateCcw,
  Sparkles,
  Undo2,
  X,
} from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

/**
 * Small, semantic UI fragments — not pixel-perfect mockups.
 *
 * Each mini-example renders inside a `bg-muted/40 rounded-md p-3` frame
 * (provided by the parent card), and targets ~80–120px in height. They use
 * real shadcn / Tailwind primitives so the catalogue reads as actual UI,
 * not screenshots.
 */

const frameClass =
  "rounded-md border border-border/60 bg-card text-card-foreground shadow-xs"

/* 01 — Agent attribution chip */
export function AttributionExample() {
  return (
    <div className={cn(frameClass, "p-3")}>
      <div className="mb-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        Issuing AHJ
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-foreground">
          North Vancouver, BC
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/12 px-1.5 py-0.5 text-[10px] font-medium text-violet-700 dark:text-violet-300">
          <Sparkles className="size-2.5" aria-hidden />
          Research agent
        </span>
      </div>
    </div>
  )
}

/* 02 — Confidence indicator + override */
export function ConfidenceExample() {
  return (
    <div className={cn(frameClass, "p-3 space-y-2")}>
      <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        Suggested assignee
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-foreground">
          Priya Shah
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/12 px-2 py-0.5 text-[10px] font-medium text-emerald-700 tabular-nums dark:text-emerald-300">
          92% match
          <ChevronDown className="size-2.5" aria-hidden />
        </span>
      </div>
      <div className="text-[10px] text-muted-foreground">
        2 alternates · pick another
      </div>
    </div>
  )
}

/* 03 — Human-in-the-loop staging */
export function StagingExample() {
  return (
    <div className={cn(frameClass, "p-3 space-y-2")}>
      <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        Ready to submit · 1 change
      </div>
      <div className="space-y-1 rounded-sm border border-border/60 bg-muted/50 p-1.5 text-[11px]">
        <div className="flex items-baseline gap-1.5 line-through opacity-60">
          <span className="text-red-600 dark:text-red-300">—</span>
          <span>Scope: tenant fit-out</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-emerald-600 dark:text-emerald-300">+</span>
          <span>Scope: tenant improvement — 2nd floor</span>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-0.5">
        <span className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-[10px] font-medium text-primary-foreground">
          <Check className="size-2.5" aria-hidden />
          Approve & submit
        </span>
        <span className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[10px] font-medium text-foreground">
          Discard
        </span>
      </div>
    </div>
  )
}

/* 04 — Uncertainty disclosure */
export function UncertaintyExample() {
  return (
    <div className={cn(frameClass, "p-3")}>
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-500/12 text-amber-700 dark:text-amber-300">
          <MessageCircleQuestion className="size-3.5" aria-hidden />
        </span>
        <div className="space-y-1">
          <div className="text-xs font-medium text-foreground">
            Fee not in corpus
          </div>
          <p className="text-[11px] leading-snug text-muted-foreground">
            Couldn&rsquo;t determine the plan-review fee for this jurisdiction.{" "}
            <a className="font-medium text-primary underline-offset-2 hover:underline">
              Look it up at the source &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

/* 05 — Provenance / citation */
export function ProvenanceExample() {
  return (
    <div className={cn(frameClass, "p-3 space-y-2")}>
      <p className="text-[11px] leading-relaxed text-foreground/85">
        Plan review averages 38 business days for TI projects under 10,000
        sq ft
        <sup className="ml-0.5 font-medium text-primary">1</sup>; fee is
        $0.27/sq ft
        <sup className="ml-0.5 font-medium text-primary">2</sup>.
      </p>
      <div className="border-t border-border/60 pt-1.5 text-[10px] text-muted-foreground">
        <div className="flex items-start gap-1.5">
          <span className="font-medium text-foreground">1</span>
          <FileText className="size-2.5 mt-0.5 shrink-0" aria-hidden />
          <span>City of Vancouver · Past 24 mo review log</span>
        </div>
      </div>
    </div>
  )
}

/* 06 — Reversibility */
export function ReversibilityExample() {
  return (
    <div
      className={cn(
        frameClass,
        "p-3 flex items-center justify-between gap-3 border-emerald-500/30",
      )}
    >
      <div className="flex items-center gap-2">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300">
          <Check className="size-3.5" aria-hidden />
        </span>
        <div>
          <div className="text-xs font-medium text-foreground">
            Submitted Building Permit B2026-1122
          </div>
          <div className="text-[10px] text-muted-foreground">
            to North Vancouver, BC
          </div>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[10px] font-medium text-foreground"
      >
        <Undo2 className="size-2.5" aria-hidden />
        Undo
        <span className="text-muted-foreground tabular-nums">29s</span>
      </button>
    </div>
  )
}

/* 07 — Prompted vs autonomous */
export function PromptedVsAutonomousExample() {
  return (
    <div className={cn(frameClass, "p-3 space-y-2")}>
      <div className="flex items-center justify-between gap-2 rounded-sm bg-muted/50 px-2 py-1.5">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
          <span className="text-[11px] font-medium text-foreground">
            Coordination agent
          </span>
        </div>
        <span className="text-[10px] text-muted-foreground">Always on</span>
      </div>
      <div className="flex items-center justify-between gap-2 rounded-sm bg-muted/50 px-2 py-1.5">
        <div className="flex items-center gap-1.5">
          <Bot className="size-3 text-foreground/70" aria-hidden />
          <span className="text-[11px] font-medium text-foreground">
            Research agent
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground">
          <Play className="size-2.5" aria-hidden />
          Run
        </span>
      </div>
    </div>
  )
}

/* 08 — Inline correction → learning */
export function InlineCorrectionExample() {
  return (
    <div className={cn(frameClass, "p-3 space-y-2")}>
      <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        Route to
      </div>
      <div className="flex items-center justify-between gap-2 rounded-sm border border-border/60 bg-muted/50 px-2 py-1.5">
        <div className="flex items-center gap-1.5 text-[11px]">
          <span className="text-foreground">Structural reviewer</span>
          <CornerDownLeft className="size-2.5 text-muted-foreground" aria-hidden />
          <span className="font-medium text-foreground">MEP reviewer</span>
        </div>
        <Pencil className="size-3 text-muted-foreground" aria-hidden />
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
        <Sparkles className="size-2.5 text-violet-500" aria-hidden />
        Got it — I&rsquo;ll apply this pattern next time
      </div>
    </div>
  )
}

/* 09 — Chat as fallback */
export function ChatFallbackExample() {
  return (
    <div className={cn(frameClass, "relative h-[88px] overflow-hidden")}>
      {/* Faint pre-built view */}
      <div className="absolute inset-0 p-2.5">
        <div className="h-2 w-16 rounded-sm bg-muted-foreground/25" />
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="h-6 rounded-sm bg-muted-foreground/15" />
          <div className="h-6 rounded-sm bg-muted-foreground/15" />
          <div className="h-6 rounded-sm bg-muted-foreground/15" />
        </div>
        <div className="mt-1.5 h-2 w-24 rounded-sm bg-muted-foreground/15" />
      </div>
      {/* Floating chat affordance */}
      <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium text-primary-foreground shadow-sm">
        <Sparkles className="size-2.5" aria-hidden />
        Ask about your portfolio
      </div>
    </div>
  )
}

/* 11 — Pre-submission validation */
export function PreSubmissionValidationExample() {
  return (
    <div className={cn(frameClass, "p-3 space-y-2")}>
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Validation · 8 checks
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/12 px-1.5 py-0.5 text-[10px] font-medium text-amber-700 dark:text-amber-300">
          <AlertTriangle className="size-2.5" aria-hidden />
          1 to fix
        </span>
      </div>
      <div className="space-y-1 text-[11px]">
        <div className="flex items-center gap-1.5 text-foreground/80">
          <Check className="size-3 text-emerald-600 dark:text-emerald-400" aria-hidden />
          Owner authorization letter present
        </div>
        <div className="flex items-center gap-1.5 text-foreground/80">
          <Check className="size-3 text-emerald-600 dark:text-emerald-400" aria-hidden />
          Step Code compliance form on file
        </div>
        <div className="flex items-start gap-1.5 text-amber-700 dark:text-amber-300">
          <AlertTriangle className="size-3 shrink-0 mt-0.5" aria-hidden />
          <span>Plan set index is v2.3 — Burnaby requires v2.5+</span>
        </div>
      </div>
    </div>
  )
}

/* 10 — Agent activity timeline */
export function ActivityTimelineExample() {
  const rows = [
    {
      who: "Coordination agent",
      what: "Logged new reviewer comment",
      target: "Permit B2026-1109",
      Icon: Sparkles,
    },
    {
      who: "Submission agent",
      what: "Staged renewal packet",
      target: "Permit B2025-0044",
      Icon: RotateCcw,
    },
    {
      who: "Daniela Vega",
      what: "Approved & submitted",
      target: "Permit B2026-1122",
      Icon: X,
      human: true,
    },
  ] as const
  return (
    <div className={cn(frameClass, "p-2.5 space-y-1.5")}>
      {rows.slice(0, 2).map((r) => (
        <div key={r.who + r.what} className="flex items-start gap-2">
          <span
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              r.who.endsWith("agent")
                ? "bg-violet-500/12 text-violet-700 dark:text-violet-300"
                : "bg-muted text-foreground/70",
            )}
          >
            <r.Icon className="size-2.5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1 text-[11px] leading-snug">
            <span className="font-medium text-foreground">{r.who}</span>{" "}
            <span className="text-muted-foreground">{r.what}</span>{" "}
            <span className="text-foreground/80">{r.target}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
