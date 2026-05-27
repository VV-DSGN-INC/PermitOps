import {
  AlertCircle,
  Banknote,
  CalendarClock,
  ClipboardList,
  Compass,
  Eye,
  Layers,
  Target,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

type AccentTone = "blue" | "amber" | "violet" | "red" | "cyan" | "emerald"

type Problem = {
  id: string
  icon: LucideIcon
  accent: AccentTone
  title: string
  today: string
  fix: string
  target: string
}

const problems: Problem[] = [
  {
    id: "multi-jurisdiction",
    icon: Layers,
    accent: "blue",
    title: "The multi-jurisdiction tax",
    today:
      "A team filing in ten cities learns ten portals, ten form sets, and ten quirky submission processes. Coordinators re-key the same project data five times per permit and twenty-plus times per project.",
    fix: "One project record auto-populates every jurisdiction's form set. The Submission agent handles the per-AHJ peculiarities; the coordinator only fills the gaps that need human judgment.",
    target: "Target: re-key project data once, not five times",
  },
  {
    id: "invisible-status",
    icon: Eye,
    accent: "amber",
    title: "Permit status disappears into email",
    today:
      "Reviewer comments arrive in someone's inbox. Updates go missing for days. The project manager finds out a permit is stuck only when the field crew can't start work.",
    fix: "The Coordination agent watches every AHJ portal and reviewer inbox. Comments surface as assignable threads on the permit's side panel, with the responsible person attached.",
    target: "Target: zero permits sit > 7 days without action or visibility",
  },
  {
    id: "no-predictability",
    icon: Compass,
    accent: "violet",
    title: "No way to quote work in unfamiliar jurisdictions",
    today:
      "Architects and PMs win bids in cities they've never worked in, then discover the AHJ takes 11 weeks to review a tenant improvement. Margin disappears into unpriced administrative time.",
    fix: "The Research agent pulls requirements, fees, and historical review times for any jurisdiction before the bid is finalized. Decisions get made with eyes open.",
    target: "Target: jurisdiction-level fee + timeline lookup in under 2 minutes",
  },
  {
    id: "expiration-blindness",
    icon: CalendarClock,
    accent: "red",
    title: "Permits expire mid-project",
    today:
      "Expirations and continuing-education deadlines aren't tracked centrally. A permit lapses, inspections get blocked, and the schedule slips by weeks while the team refiles.",
    fix: "Smart alerts watch every expiration window. Renewal packets stage themselves 30 days out and route to whoever owned the original filing.",
    target: "Target: 100% on-time renewal rate across the portfolio",
  },
  {
    id: "inspection-friction",
    icon: Wrench,
    accent: "cyan",
    title: "Inspection scheduling is manual and lossy",
    today:
      "Field supervisors call municipal hotlines to book inspections. Appointments get missed, rescheduled, or never confirmed. No one has visibility into inspector availability when planning the job.",
    fix: "The Scheduling agent books inspections through AHJ portals where available and surfaces inspector availability when the work is being planned, not the morning of.",
    target: "Target: no field calls to a municipal hotline",
  },
  {
    id: "margin-tax",
    icon: Banknote,
    accent: "emerald",
    title: "Permit work isn't billable",
    today:
      "Hours spent on permit admin show up as overhead, not revenue. Margin gets eaten by coordinator labor that scales linearly with project count.",
    fix: "Automating the per-jurisdiction grunt work means each coordinator can run roughly 3× the permit volume. Same headcount, more revenue, lower per-permit cost.",
    target: "Target: 3× permit throughput per coordinator FTE",
  },
]

const outOfScope = [
  { label: "Estimating + bid management", alt: "Procore, B2W, STACK" },
  { label: "Field execution / punch lists", alt: "Fieldwire, PlanGrid" },
  { label: "AP / payment management", alt: "Stampli, AvidPay" },
  { label: "Plan markup + redlines", alt: "Bluebeam Revu" },
  { label: "Subcontractor procurement", alt: "BuildingConnected" },
  { label: "Document control + RFI", alt: "Procore, Autodesk Construction Cloud" },
]

export function ProblemPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 pb-12">
      {/* Page header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 font-medium text-muted-foreground">
            <Target className="size-3" aria-hidden />
            Design notes
          </Badge>
          <span className="text-xs text-muted-foreground">
            v0.1 · why this product exists
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="font-heading text-3xl leading-tight font-semibold tracking-tight">
            Problem Statement
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Why construction permitting is broken today, and what PermitOps is built to fix.
          </p>
        </div>
      </header>

      <Separator />

      {/* Hero problem */}
      <section className="space-y-4">
        <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <AlertCircle className="size-4" aria-hidden />
          The problem
        </div>
        <h2 className="font-heading text-2xl leading-snug font-semibold text-foreground sm:text-[28px]">
          Permit work is a tax on every construction project — paid by the people least
          able to defend their time.
        </h2>
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground/85">
          <p>
            Every permit a builder files crosses a fragmented landscape of 7,000+ municipal
            jurisdictions, each with its own forms, fees, portals, and review queues.
            Coordinators re-key the same project data five times per permit. Reviewer
            comments arrive by email and get lost. Status meetings burn the project
            manager's week. And none of this time is billable — it eats directly into
            project margin.
          </p>
          <p>
            PermitOps replaces the manual choreography with an AI workforce that handles
            the per-jurisdiction grunt work, surfaces status proactively, and keeps the
            human in the loop only where their judgment matters.
          </p>
        </div>
      </section>

      {/* Key problems grid */}
      <section className="space-y-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <ClipboardList className="size-4" aria-hidden />
            What we solve
          </div>
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Key problems we solve
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Six concrete failures of the status quo, each paired with how PermitOps
            addresses it. Ranked by frequency in coordinator and PM conversations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <ProblemCard key={p.id} problem={p} />
          ))}
        </div>
      </section>

      {/* Out of scope */}
      <section className="space-y-3">
        <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Scope discipline
        </div>
        <h2 className="font-heading text-xl font-semibold text-foreground">
          What we're <em className="not-italic underline decoration-muted-foreground/40 decoration-2 underline-offset-4">not</em> solving
        </h2>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Adjacent problems we'll consciously leave to other tools so we can be the best
          in the world at one thing.
        </p>
        <ul className="grid grid-cols-1 gap-2.5 pt-2 md:grid-cols-2">
          {outOfScope.map((o) => (
            <li
              key={o.label}
              className="flex items-start gap-2.5 text-sm text-foreground/85"
            >
              <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
              <span>
                <span className="font-medium">{o.label}</span>
                <span className="text-muted-foreground"> — {o.alt}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

/* ───────────────────────────────────────────────────────────────────────────
   ProblemCard
   Uses a gradient background to draw a hard accent stripe on the left, instead
   of border-left. Borders curve into rounded corners and look cropped at large
   radii; a linear-gradient stop stays geometrically sharp inside the same
   rounded corner. (Source: buttonschool.com/blog/awkward-borders)
   ─────────────────────────────────────────────────────────────────────── */

const STRIPE_W = 6 // px — proportional to rounded-2xl (16px radius). Larger radius → thicker stripe.

const tones: Record<
  AccentTone,
  { stripeVar: string; iconBg: string; iconFg: string; pillBg: string; pillFg: string }
> = {
  blue: {
    stripeVar: "var(--color-blue-500)",
    iconBg: "bg-blue-50 dark:bg-blue-500/15",
    iconFg: "text-blue-600 dark:text-blue-300",
    pillBg: "bg-blue-50 dark:bg-blue-500/15",
    pillFg: "text-blue-800 dark:text-blue-200",
  },
  amber: {
    stripeVar: "var(--color-amber-500)",
    iconBg: "bg-amber-50 dark:bg-amber-500/15",
    iconFg: "text-amber-600 dark:text-amber-300",
    pillBg: "bg-amber-50 dark:bg-amber-500/15",
    pillFg: "text-amber-800 dark:text-amber-200",
  },
  violet: {
    stripeVar: "var(--color-violet-500)",
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconFg: "text-violet-600 dark:text-violet-300",
    pillBg: "bg-violet-50 dark:bg-violet-500/15",
    pillFg: "text-violet-800 dark:text-violet-200",
  },
  red: {
    stripeVar: "var(--color-red-500)",
    iconBg: "bg-red-50 dark:bg-red-500/15",
    iconFg: "text-red-600 dark:text-red-300",
    pillBg: "bg-red-50 dark:bg-red-500/15",
    pillFg: "text-red-800 dark:text-red-200",
  },
  cyan: {
    stripeVar: "var(--color-cyan-500)",
    iconBg: "bg-cyan-50 dark:bg-cyan-500/15",
    iconFg: "text-cyan-700 dark:text-cyan-300",
    pillBg: "bg-cyan-50 dark:bg-cyan-500/15",
    pillFg: "text-cyan-800 dark:text-cyan-200",
  },
  emerald: {
    stripeVar: "var(--color-emerald-500)",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconFg: "text-emerald-600 dark:text-emerald-300",
    pillBg: "bg-emerald-50 dark:bg-emerald-500/15",
    pillFg: "text-emerald-800 dark:text-emerald-200",
  },
}

function ProblemCard({ problem }: { problem: Problem }) {
  const t = tones[problem.accent]
  const Icon = problem.icon
  return (
    <article
      className="relative rounded-2xl shadow-xs ring-1 ring-border/80 transition-shadow hover:shadow-sm"
      style={{
        // Hard color stop instead of border-left — stays sharp inside the rounded corner.
        background: `linear-gradient(to right, ${t.stripeVar} ${STRIPE_W}px, var(--card) ${STRIPE_W}px)`,
      }}
    >
      <div className="flex flex-col gap-4 p-5" style={{ paddingLeft: `calc(1.25rem + ${STRIPE_W}px)` }}>
        <div className="flex items-start gap-3">
          <div className={cn("flex size-9 shrink-0 items-center justify-center rounded-lg", t.iconBg)}>
            <Icon className={cn("size-4.5", t.iconFg)} aria-hidden />
          </div>
          <h3 className="mt-1 font-heading text-base leading-snug font-semibold text-foreground">
            {problem.title}
          </h3>
        </div>

        <div className="space-y-3 text-sm leading-relaxed">
          <p className="text-foreground/85">
            <span className="font-semibold text-foreground">Today.</span>{" "}
            {problem.today}
          </p>
          <p className="text-foreground/85">
            <span className="font-semibold text-primary">PermitOps.</span>{" "}
            {problem.fix}
          </p>
        </div>

        <div className="pt-1">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium",
              t.pillBg,
              t.pillFg,
            )}
          >
            <Target className="size-3" aria-hidden />
            {problem.target}
          </span>
        </div>
      </div>
    </article>
  )
}
