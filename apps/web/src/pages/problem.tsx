import {
  AlertCircle,
  ClipboardList,
  Eye,
  HandCoins,
  HelpCircle,
  Layers,
  ShieldCheck,
  Target,
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
    id: "opacity",
    icon: Eye,
    accent: "blue",
    title: "The process is a black box",
    today:
      "Homeowners search 'do I need a permit for X' and get four contradictory answers from four random blog posts. Municipal websites are written for contractors. There's no single trustworthy source that tells you what you actually need, how much it'll cost, or how long it'll take.",
    fix: "One conversational prompt and a plain-English answer. We pull the rules for the homeowner's specific city, translate them into language they can act on, and cite the sources so the answer is verifiable — not just confident-sounding.",
    target: "Target: clear answer in under 5 minutes, no signup required",
  },
  {
    id: "cost-of-wrong",
    icon: ShieldCheck,
    accent: "red",
    title: "The cost of being wrong is brutal",
    today:
      "Skip the permit accidentally and you face fines ($500+/day in many municipalities), forced demolition, insurance gaps, and unsellable additions. Most homeowners don't know which side of the line their project sits on — so they either skip a permit they needed, or pay for one they didn't.",
    fix: "We treat 'do I even need a permit?' as a first-class question and answer it directly. If the answer is no, we tell them so and let them go. If yes, we explain why with citations and lay out the path.",
    target: "Target: zero permit-status guesswork",
  },
  {
    id: "multi-project",
    icon: Layers,
    accent: "violet",
    title: "Renovations come in bundles, but tools handle them one-by-one",
    today:
      "A homeowner doesn't think 'I want to file a Building Permit.' They think 'I want a shed, a garage, and eventually a laneway house.' Every existing tool makes them tackle these as separate, sequential, isolated tickets — losing context, repeating themselves, and missing dependencies.",
    fix: "Project-scoped, not permit-scoped. Describe everything you want to do in the next 12–18 months; we sequence the work, surface dependencies, and route the over-complex pieces to a general contractor (we don't try to be one).",
    target: "Target: one project bundle, not three disconnected applications",
  },
  {
    id: "pre-submission-blindness",
    icon: AlertCircle,
    accent: "amber",
    title: "Submitting blind is the default",
    today:
      "Homeowner spends hours assembling forms, sends them in, hears nothing for weeks, then gets a rejection citing a missing checkbox or wrong-version form. They lose months waiting for the city to come back with what could have been caught upfront.",
    fix: "Pre-submission validation is non-negotiable. Every form, every dependency, every common-rejection trigger is checked before anything goes to the city. If something's missing, we surface it in plain English with a path to fix it.",
    target: "Target: first-pass approval rate above industry baseline",
  },
  {
    id: "no-transparency",
    icon: HelpCircle,
    accent: "cyan",
    title: "Once it's submitted, you're in the dark",
    today:
      "After submission, the homeowner has no idea what's happening. Are they next in line? Stuck behind 200 applications? Did the reviewer flag something? Most cities provide a number that maps to nothing the homeowner can interpret.",
    fix: "Coordination agent watches the city portal and email. Every update — even a silent one — gets translated and timestamped on the homeowner's status page. When the reviewer asks for corrections, we translate the request and stage the fix.",
    target: "Target: status update lag from 'days' to 'within the hour'",
  },
  {
    id: "trust-then-pay",
    icon: HandCoins,
    accent: "emerald",
    title: "Service tools demand payment before proving value",
    today:
      "Most permit-service companies hide all the answers behind a paywall, then charge per submission. Homeowners don't know what they're paying for until they've already paid. The bar for trust is high; the proof is low.",
    fix: "Everything information-based is free, forever. The discovery flow, the cost estimate, the form templates — all free. We only charge when the homeowner explicitly wants us to file and manage the permit on their behalf.",
    target: "Target: 100% of discovery flows complete without a payment gate",
  },
]

const outOfScope = [
  { label: "Acting as the general contractor", alt: "We surface the handoff, we don't replace the GC" },
  { label: "Renovation cost-estimation / bid management", alt: "Houzz, HomeStars (find a pro)" },
  { label: "Project management of the construction itself", alt: "Buildertrend, CoConstruct" },
  { label: "Material procurement & ordering", alt: "Home Depot Pro, Lowe's for Pros" },
  { label: "Insurance and financing for the project", alt: "Banks, contractor insurance carriers" },
  { label: "Inspection scheduling on the homeowner's behalf", alt: "Municipal portals (for now)" },
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
            Why residential permitting is broken for homeowners and small contractors today
            &mdash; and what PermitOps is built to fix.
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
          Getting a permit shouldn&rsquo;t take longer than the actual project. For most
          homeowners today, it does &mdash; because the process is opaque, the rules are
          buried, and nobody is on their side.
        </h2>
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground/85">
          <p>
            Every homeowner trying to renovate hits the same wall: they don&rsquo;t know
            if they need a permit, what it&rsquo;ll cost, how long it&rsquo;ll take, or
            what happens if they get it wrong. Municipal websites are written for
            contractors. AI chatbots make confident guesses with no sources. Google sends
            them to four contradictory blog posts. The result is people skipping permits
            they needed, paying for ones they didn&rsquo;t, or stalling out entirely.
          </p>
          <p>
            PermitOps is the trustworthy front door to the permit process for residential
            homeowners and the contractors who serve them. The information layer is free
            and complete &mdash; what you need, how much it costs, how long it takes,
            citations to the source. When the homeowner wants us to file and manage the
            permit on their behalf, the service kicks in. Trust first; transact second.
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
            addresses it. Surfaced from Paul&rsquo;s own renovation experience plus
            homeowner research; validated in the discovery call 2026-05-27.
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
