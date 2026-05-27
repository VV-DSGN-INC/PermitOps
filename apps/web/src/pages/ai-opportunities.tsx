import {
  Bot,
  CalendarClock,
  ClipboardCheck,
  FileSearch,
  FileText,
  Filter,
  MapPinned,
  MessageSquare,
  Search,
  Sparkles,
  TrendingUp,
  Wand2,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

/* ────────────────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────────────── */

type AgentName = "Intake" | "Research" | "Submission" | "Coordination" | "Issuance" | "Cross-cutting"

type Opportunity = {
  id: number
  title: string
  description: string
  icon: LucideIcon
  agent: AgentName
  persona: string
  feasibility: 1 | 2 | 3 | 4 | 5
  value: 1 | 2 | 3 | 4 | 5
}

const opportunities: Opportunity[] = [
  {
    id: 1,
    title: "Contract PDF → project intake",
    description:
      "Drop the executed contract; project shell, address, scope, and parties auto-populate.",
    icon: FileText,
    agent: "Intake",
    persona: "Coordinator",
    feasibility: 5,
    value: 4,
  },
  {
    id: 2,
    title: "Jurisdiction identification",
    description:
      "Geocode the address, resolve the AHJ, and surface the applicable permit set.",
    icon: MapPinned,
    agent: "Research",
    persona: "Coordinator · Architect",
    feasibility: 5,
    value: 4,
  },
  {
    id: 3,
    title: "Per-AHJ form auto-fill",
    description:
      "Pre-populate every jurisdiction's form set from one central project record. Kills the multi-jurisdiction tax.",
    icon: Wand2,
    agent: "Submission",
    persona: "Coordinator",
    feasibility: 4,
    value: 5,
  },
  {
    id: 4,
    title: "Reviewer comment triage",
    description:
      "Classify incoming comments, suggest assignee, draft a response. Comments stop disappearing into email.",
    icon: MessageSquare,
    agent: "Coordination",
    persona: "Coordinator · PM",
    feasibility: 4,
    value: 5,
  },
  {
    id: 5,
    title: "Renewal staging",
    description:
      "Pre-build renewal packets 30 days before expiration; route to the original submitter.",
    icon: CalendarClock,
    agent: "Coordination",
    persona: "PM · Coordinator",
    feasibility: 4,
    value: 5,
  },
  {
    id: 6,
    title: "Status briefing",
    description:
      "Daily/weekly digest of at-risk permits, recent decisions, and inspection schedule.",
    icon: ClipboardCheck,
    agent: "Coordination",
    persona: "PM · Ops VP",
    feasibility: 5,
    value: 4,
  },
  {
    id: 7,
    title: "Bid jurisdiction lookup",
    description:
      "Pre-bid intelligence for an unfamiliar AHJ — typical fees, review days, required forms.",
    icon: Search,
    agent: "Research",
    persona: "Architect · PM",
    feasibility: 4,
    value: 5,
  },
  {
    id: 8,
    title: "Requirements summarizer",
    description:
      "Plain-English 'what you'll need' for a specific permit type in a specific AHJ.",
    icon: FileSearch,
    agent: "Research",
    persona: "Architect · Coordinator",
    feasibility: 4,
    value: 4,
  },
  {
    id: 9,
    title: "Chat with your portfolio",
    description:
      "Conversational query across every project, permit, and AHJ — for the long tail not covered by pre-built views.",
    icon: Bot,
    agent: "Cross-cutting",
    persona: "PM · Ops VP",
    feasibility: 4,
    value: 4,
  },
  {
    id: 10,
    title: "Permit risk scoring",
    description:
      "Predict which permits will slip based on AHJ history, days-in-stage, and comment volume.",
    icon: TrendingUp,
    agent: "Coordination",
    persona: "PM · Ops VP",
    feasibility: 3,
    value: 5,
  },
  {
    id: 11,
    title: "Plan-set pre-flight check",
    description:
      "Vision-validate the uploaded plan set against AHJ requirements before submission.",
    icon: Filter,
    agent: "Submission",
    persona: "Coordinator",
    feasibility: 3,
    value: 4,
  },
  {
    id: 12,
    title: "Inspection slot booking",
    description:
      "Book inspections through AHJ portals or hotlines based on field-crew availability.",
    icon: Wrench,
    agent: "Issuance",
    persona: "Field Supervisor · Ops VP",
    feasibility: 2,
    value: 4,
  },
]

const AGENT_TONE: Record<AgentName, { bg: string; text: string }> = {
  Intake: { bg: "bg-blue-100 dark:bg-blue-500/15", text: "text-blue-800 dark:text-blue-300" },
  Research: { bg: "bg-violet-100 dark:bg-violet-500/15", text: "text-violet-800 dark:text-violet-300" },
  Submission: { bg: "bg-emerald-100 dark:bg-emerald-500/15", text: "text-emerald-800 dark:text-emerald-300" },
  Coordination: { bg: "bg-amber-100 dark:bg-amber-500/15", text: "text-amber-800 dark:text-amber-300" },
  Issuance: { bg: "bg-cyan-100 dark:bg-cyan-500/15", text: "text-cyan-800 dark:text-cyan-300" },
  "Cross-cutting": { bg: "bg-slate-100 dark:bg-slate-500/20", text: "text-slate-800 dark:text-slate-200" },
}

type QuadrantId = "ship" | "invest" | "quick" | "skip"

function quadrantFor(opp: Opportunity): QuadrantId {
  const highV = opp.value >= 4
  const highF = opp.feasibility >= 4
  if (highV && highF) return "ship"
  if (highV && !highF) return "invest"
  if (!highV && highF) return "quick"
  return "skip"
}

const QUADRANT_META: Record<
  QuadrantId,
  { label: string; subtitle: string; accent: string; ring: string; chipBg: string; chipText: string }
> = {
  ship: {
    label: "Ship first",
    subtitle: "High value, high feasibility — start here",
    accent: "var(--color-emerald-500)",
    ring: "ring-emerald-500/30",
    chipBg: "bg-emerald-100 dark:bg-emerald-500/15",
    chipText: "text-emerald-800 dark:text-emerald-300",
  },
  invest: {
    label: "Invest in",
    subtitle: "Worth doing but technically harder",
    accent: "var(--color-violet-500)",
    ring: "ring-violet-500/30",
    chipBg: "bg-violet-100 dark:bg-violet-500/15",
    chipText: "text-violet-800 dark:text-violet-300",
  },
  quick: {
    label: "Quick wins",
    subtitle: "Easy to build, modest upside",
    accent: "var(--color-blue-500)",
    ring: "ring-blue-500/30",
    chipBg: "bg-blue-100 dark:bg-blue-500/15",
    chipText: "text-blue-800 dark:text-blue-300",
  },
  skip: {
    label: "Skip / monitor",
    subtitle: "Low value, low feasibility — revisit later",
    accent: "var(--color-slate-400)",
    ring: "ring-slate-400/30",
    chipBg: "bg-slate-100 dark:bg-slate-500/20",
    chipText: "text-slate-700 dark:text-slate-300",
  },
}

/* ────────────────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────────────── */

export function AIOpportunitiesPage() {
  const sorted = [...opportunities].sort((a, b) => {
    const sa = a.value + a.feasibility
    const sb = b.value + b.feasibility
    return sb - sa
  })

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 pb-12">
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 font-medium text-muted-foreground">
            <Sparkles className="size-3" aria-hidden />
            Design notes
          </Badge>
          <span className="text-xs text-muted-foreground">
            v0.1 · where AI earns its keep
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="font-heading text-3xl leading-tight font-semibold tracking-tight">
            AI Opportunities
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Twelve places AI delivers measurable value in PermitOps — plotted by how
            valuable each one is and how feasible it is to ship.
          </p>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-foreground/85">
          Each opportunity is mapped to one of the five agents (Intake / Research /
          Submission / Coordination / Issuance) so the work ties back to a single owner.
          The matrix is a planning view; the cards below are the working detail.
        </p>
      </header>

      <Separator />

      <section className="space-y-5">
        <div className="space-y-1.5">
          <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Matrix
          </div>
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Value × Feasibility
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground">
            The top-right quadrant is the next quarter of investment. The top-left is
            where we make a longer-term bet. The bottom-left is parked.
          </p>
        </div>
        <Matrix items={opportunities} />
      </section>

      <section className="space-y-5">
        <div className="space-y-1.5">
          <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Detail
          </div>
          <h2 className="font-heading text-xl font-semibold text-foreground">
            All 12 opportunities
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Sorted by value + feasibility combined. Numbers match the matrix dots.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sorted.map((opp) => (
            <OpportunityCard key={opp.id} opp={opp} />
          ))}
        </div>
      </section>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   2×2 Matrix (SVG)
   ──────────────────────────────────────────────────────────────────────── */

const VB_W = 1040
const VB_H = 600
const PAD_L = 80
const PAD_R = 40
const PAD_T = 60
const PAD_B = 80
const INNER_W = VB_W - PAD_L - PAD_R
const INNER_H = VB_H - PAD_T - PAD_B

function xForF(f: number): number {
  return PAD_L + INNER_W * ((f - 1) / 4)
}
function yForV(v: number): number {
  return PAD_T + INNER_H - INNER_H * ((v - 1) / 4)
}

function jitter(id: number): [number, number] {
  // Deterministic small offset to separate overlapping dots
  const a = (id * 9301 + 49297) % 233280
  const b = (a * 9301 + 49297) % 233280
  return [(a / 233280 - 0.5) * 36, (b / 233280 - 0.5) * 36]
}

function Matrix({ items }: { items: Opportunity[] }) {
  const midX = (xForF(1) + xForF(5)) / 2
  const midY = (yForV(1) + yForV(5)) / 2

  // Pre-compute dot positions (with jitter for overlap)
  const placed = items.map((opp) => {
    const [dx, dy] = jitter(opp.id)
    return {
      opp,
      cx: xForF(opp.feasibility) + dx,
      cy: yForV(opp.value) + dy,
    }
  })

  // Cluster opps by quadrant for the side legend
  const byQuadrant: Record<QuadrantId, Opportunity[]> = {
    ship: [],
    invest: [],
    quick: [],
    skip: [],
  }
  for (const opp of items) {
    byQuadrant[quadrantFor(opp)].push(opp)
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
      {/* SVG chart */}
      <div className="overflow-hidden rounded-2xl border bg-card p-4 sm:p-5">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="h-auto w-full"
          role="img"
          aria-labelledby="ai-matrix-title"
        >
          <title id="ai-matrix-title">AI opportunity matrix — value by feasibility</title>

          {/* Quadrant tints */}
          <rect
            x={midX}
            y={PAD_T}
            width={xForF(5) - midX}
            height={midY - PAD_T}
            fill="var(--color-emerald-500)"
            fillOpacity={0.06}
          />
          <rect
            x={PAD_L}
            y={PAD_T}
            width={midX - PAD_L}
            height={midY - PAD_T}
            fill="var(--color-violet-500)"
            fillOpacity={0.05}
          />
          <rect
            x={midX}
            y={midY}
            width={xForF(5) - midX}
            height={yForV(1) - midY}
            fill="var(--color-blue-500)"
            fillOpacity={0.04}
          />
          <rect
            x={PAD_L}
            y={midY}
            width={midX - PAD_L}
            height={yForV(1) - midY}
            fill="var(--color-slate-400)"
            fillOpacity={0.04}
          />

          {/* Axis frame */}
          <rect
            x={PAD_L}
            y={PAD_T}
            width={INNER_W}
            height={INNER_H}
            fill="none"
            stroke="var(--border)"
            strokeWidth={1}
          />

          {/* Quadrant dividers */}
          <line
            x1={midX}
            y1={PAD_T}
            x2={midX}
            y2={PAD_T + INNER_H}
            stroke="var(--border)"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
          <line
            x1={PAD_L}
            y1={midY}
            x2={PAD_L + INNER_W}
            y2={midY}
            stroke="var(--border)"
            strokeWidth={1}
            strokeDasharray="4 4"
          />

          {/* Quadrant labels (corners) */}
          <QuadrantLabel
            x={xForF(5) - 12}
            y={PAD_T + 8}
            anchor="end"
            label={QUADRANT_META.ship.label}
            sublabel={QUADRANT_META.ship.subtitle}
          />
          <QuadrantLabel
            x={PAD_L + 12}
            y={PAD_T + 8}
            anchor="start"
            label={QUADRANT_META.invest.label}
            sublabel={QUADRANT_META.invest.subtitle}
          />
          <QuadrantLabel
            x={xForF(5) - 12}
            y={yForV(1) - 12 - 18}
            anchor="end"
            label={QUADRANT_META.quick.label}
            sublabel={QUADRANT_META.quick.subtitle}
          />
          <QuadrantLabel
            x={PAD_L + 12}
            y={yForV(1) - 12 - 18}
            anchor="start"
            label={QUADRANT_META.skip.label}
            sublabel={QUADRANT_META.skip.subtitle}
          />

          {/* Axis labels */}
          <text
            x={PAD_L + INNER_W / 2}
            y={VB_H - 28}
            textAnchor="middle"
            fontSize={12}
            fontWeight={600}
            fill="var(--foreground)"
            style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            Feasibility →
          </text>
          <text
            x={PAD_L + INNER_W / 2}
            y={VB_H - 12}
            textAnchor="middle"
            fontSize={10}
            fill="var(--muted-foreground)"
          >
            Harder · ·   Easier
          </text>
          <text
            transform={`translate(24, ${PAD_T + INNER_H / 2}) rotate(-90)`}
            textAnchor="middle"
            fontSize={12}
            fontWeight={600}
            fill="var(--foreground)"
            style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            ← Value
          </text>
          <text
            transform={`translate(44, ${PAD_T + INNER_H / 2}) rotate(-90)`}
            textAnchor="middle"
            fontSize={10}
            fill="var(--muted-foreground)"
          >
            Low · · High
          </text>

          {/* Tick labels (1-5 scale) */}
          {[1, 2, 3, 4, 5].map((n) => (
            <g key={`xt-${n}`}>
              <line
                x1={xForF(n)}
                y1={PAD_T + INNER_H}
                x2={xForF(n)}
                y2={PAD_T + INNER_H + 4}
                stroke="var(--border)"
              />
              <text
                x={xForF(n)}
                y={PAD_T + INNER_H + 18}
                textAnchor="middle"
                fontSize={10}
                fill="var(--muted-foreground)"
              >
                {n}
              </text>
            </g>
          ))}
          {[1, 2, 3, 4, 5].map((n) => (
            <g key={`yt-${n}`}>
              <line
                x1={PAD_L - 4}
                y1={yForV(n)}
                x2={PAD_L}
                y2={yForV(n)}
                stroke="var(--border)"
              />
              <text
                x={PAD_L - 8}
                y={yForV(n) + 3}
                textAnchor="end"
                fontSize={10}
                fill="var(--muted-foreground)"
              >
                {n}
              </text>
            </g>
          ))}

          {/* Dots */}
          {placed.map(({ opp, cx, cy }) => {
            const qm = QUADRANT_META[quadrantFor(opp)]
            return (
              <g key={opp.id}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={18}
                  fill={qm.accent}
                  fillOpacity={0.15}
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r={12}
                  fill={qm.accent}
                  stroke="var(--background)"
                  strokeWidth={2}
                />
                <text
                  x={cx}
                  y={cy + 4}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={700}
                  fill="white"
                >
                  {opp.id}
                </text>
                <title>
                  {opp.id}. {opp.title} (V {opp.value} / F {opp.feasibility})
                </title>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Quadrant legend */}
      <div className="space-y-3">
        {(Object.keys(QUADRANT_META) as QuadrantId[]).map((q) => (
          <QuadrantLegendCard key={q} q={q} items={byQuadrant[q]} />
        ))}
      </div>
    </div>
  )
}

function QuadrantLabel({
  x,
  y,
  anchor,
  label,
  sublabel,
}: {
  x: number
  y: number
  anchor: "start" | "middle" | "end"
  label: string
  sublabel: string
}) {
  return (
    <g>
      <text
        x={x}
        y={y + 12}
        textAnchor={anchor}
        fontSize={11}
        fontWeight={700}
        fill="var(--foreground)"
        style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
      >
        {label}
      </text>
      <text
        x={x}
        y={y + 28}
        textAnchor={anchor}
        fontSize={10}
        fill="var(--muted-foreground)"
      >
        {sublabel}
      </text>
    </g>
  )
}

function QuadrantLegendCard({
  q,
  items,
}: {
  q: QuadrantId
  items: Opportunity[]
}) {
  const meta = QUADRANT_META[q]
  return (
    <div className={cn("rounded-xl border bg-card p-3 ring-1", meta.ring)}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className="inline-block size-2.5 rounded-full"
            style={{ background: meta.accent }}
          />
          <h4 className="text-sm font-semibold text-foreground">{meta.label}</h4>
        </div>
        <span className={cn("rounded-full px-1.5 text-xs font-medium tabular-nums", meta.chipBg, meta.chipText)}>
          {items.length}
        </span>
      </div>
      {items.length === 0 ? (
        <p className="text-xs text-muted-foreground">None in this quadrant.</p>
      ) : (
        <ul className="space-y-1.5 text-xs text-foreground/85">
          {items.map((opp) => (
            <li key={opp.id} className="flex items-start gap-2">
              <span
                className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ background: meta.accent }}
              >
                {opp.id}
              </span>
              <span className="leading-snug">{opp.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Opportunity card
   Uses the gradient-stripe accent (per buttonschool.com/blog/awkward-borders).
   ──────────────────────────────────────────────────────────────────────── */

function OpportunityCard({ opp }: { opp: Opportunity }) {
  const Icon = opp.icon
  const meta = QUADRANT_META[quadrantFor(opp)]
  const agentTone = AGENT_TONE[opp.agent]
  return (
    <article
      className="relative rounded-2xl shadow-xs ring-1 ring-border/80"
      style={{
        backgroundImage: `linear-gradient(to right, ${meta.accent} 4px, transparent 4px)`,
      }}
    >
      <div className="p-5 pl-6">
        <div className="flex items-start gap-3">
          <span className="font-heading text-2xl font-semibold tabular-nums text-muted-foreground/60">
            {String(opp.id).padStart(2, "0")}
          </span>
          <div className={cn("flex size-9 shrink-0 items-center justify-center rounded-lg", agentTone.bg)}>
            <Icon className={cn("size-4.5", agentTone.text)} aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-base leading-snug font-semibold text-foreground">
              {opp.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80">
              {opp.description}
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <Meter label="Value" value={opp.value} color="var(--color-emerald-500)" />
          <Meter
            label="Feasibility"
            value={opp.feasibility}
            color="var(--color-blue-500)"
          />
          <div className="ml-auto flex flex-wrap items-center gap-1.5">
            <span className={cn("rounded-md px-2 py-0.5 text-[11px] font-medium", agentTone.bg, agentTone.text)}>
              {opp.agent}
            </span>
            <span className={cn("rounded-md px-2 py-0.5 text-[11px] font-medium", meta.chipBg, meta.chipText)}>
              {meta.label}
            </span>
          </div>
        </div>

        <div className="mt-3 text-[11px] text-muted-foreground">
          <span className="font-medium tracking-wide uppercase">Persona served:</span>{" "}
          {opp.persona}
        </div>
      </div>
    </article>
  )
}

function Meter({
  label,
  value,
  color,
}: {
  label: string
  value: number
  color: string
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className="size-2 rounded-full"
            style={{ background: n <= value ? color : "var(--muted)" }}
          />
        ))}
      </div>
    </div>
  )
}
