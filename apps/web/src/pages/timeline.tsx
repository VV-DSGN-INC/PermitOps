import {
  CalendarClock,
  CheckCircle2,
  Compass,
  Eye,
  GitBranch,
  Layers,
  PenLine,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

/* ────────────────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────────────── */

type AccentTone = "violet" | "blue" | "emerald" | "amber"

type Phase = {
  id: string
  number: number
  week: number
  name: string
  oneLine: string
  startDay: number // inclusive (1-20)
  endDay: number // inclusive (1-20)
  accent: AccentTone
  icon: LucideIcon
  goals: string[]
  activities: string[]
  deliverable: string
  gate: string
}

const phases: Phase[] = [
  {
    id: "discovery",
    number: 1,
    week: 1,
    name: "Discovery",
    oneLine: "Ground the design in real homeowners, real BC constraints, and Paul's POV.",
    startDay: 1,
    endDay: 5,
    accent: "violet",
    icon: Compass,
    goals: [
      "Hear from real homeowners — what they Google, where they get stuck, what they fear.",
      "Calibrate against Paul's lived experience and the BC permit landscape.",
      "Pick the 3 pain points the MVP will solve (Paul's explicit ask).",
    ],
    activities: [
      "5–7 homeowner interviews (Vancouver / Burnaby / Surrey)",
      "Competitive teardown — Permitflow + 1–2 BC-relevant adjacencies",
      "BC permit-landscape audit: Building Permit Hub, Step Code, laneway-home pathway",
      "Problem statements + hypotheses written for non-tech partners to read",
      "Success-criteria proposal (beyond adoption — conversion, time-to-clarity, trust signals)",
    ],
    deliverable: "3 problem statements + 3 hypotheses + success criteria + research findings doc",
    gate: "Paul + partners align on the 3 pains we're solving for the MVP.",
  },
  {
    id: "flows-ia",
    number: 2,
    week: 2,
    name: "Flows + IA",
    oneLine: "Turn the brief into structure — homeowner flows, surfaces, and the data underneath.",
    startDay: 4,
    endDay: 10,
    accent: "blue",
    icon: GitBranch,
    goals: [
      "Lock the 3 user flows end-to-end (discover, engage service, multi-project scoping).",
      "Design the IA for minimal scrolling — preemptive surfacing per Paul's direction.",
      "Decide the 'visible companion vs. invisible labor' question for the homeowner agent.",
    ],
    activities: [
      "3 priority user flows with surface + AI agent attribution per step",
      "Single-project IA (homeowner) and contractor variant",
      "AI interaction-pattern catalogue v1 (attribution, confidence, provenance, citation)",
      "Conversational first-prompt design — no 'Get Started', no signup gate",
      "Working session with all 3 partners (legible for non-tech audience)",
    ],
    deliverable: "Approved IA + 3 flows + AI patterns v1 + first-prompt concept",
    gate: "Partners aligned on direction; 'what done looks like' agreed for week 4.",
  },
  {
    id: "wireframes",
    number: 3,
    week: 3,
    name: "Wireframes → mid-fi",
    oneLine: "Build the working scaffolding for every priority screen.",
    startDay: 9,
    endDay: 15,
    accent: "amber",
    icon: PenLine,
    goals: [
      "Every priority screen at mid-fi in the chosen direction.",
      "A foundational component set Claude + the future dev team can ship against.",
      "AI patterns wired into the specific screens they live on.",
    ],
    activities: [
      "Wireframes for 10–12 priority screens (discovery flow, service flow, multi-project flow)",
      "Mid-fi designs in the picked direction — Claude + shadcn workflow",
      "Design system kit: typography, color, spacing, components",
      "Empty / error / loading / 'we don't know yet' states for every primary surface",
      "Async critique with Paul (one batched feedback day, per his cadence)",
    ],
    deliverable: "Primary screens at mid-fi + working component set",
    gate: "Sprint review with Paul — confirm direction before hi-fi polish.",
  },
  {
    id: "hifi",
    number: 4,
    week: 4,
    name: "Hi-fi + clickable prototype",
    oneLine: "VC-ready prototype Paul can demo — interactive, Claude-driven, no deck needed.",
    startDay: 14,
    endDay: 20,
    accent: "emerald",
    icon: Rocket,
    goals: [
      "Polished prototype that solves the 3 pain points end-to-end.",
      "Live Claude prompts inside the prototype — VCs can actually try the AI.",
      "Clear story Paul can demo cold to investors.",
    ],
    activities: [
      "Hi-fi polish — type, spacing, color tokens (shadcn theme)",
      "Interactive prototype with Claude prompts working inline",
      "Edge cases: empty / error / loading / GC handoff / multi-project",
      "Accessibility pass — contrast, focus order, keyboard nav",
      "Demo walkthrough script for Paul + partners",
    ],
    deliverable: "Investor-ready interactive prototype + demo script",
    gate: "Paul approves the demo flow; ready to put in front of VCs.",
  },
]

const tones: Record<
  AccentTone,
  { stripe: string; bar: string; iconBg: string; iconFg: string; chipBg: string; chipFg: string }
> = {
  violet: {
    stripe: "var(--color-violet-500)",
    bar: "var(--color-violet-500)",
    iconBg: "bg-violet-100 dark:bg-violet-500/15",
    iconFg: "text-violet-700 dark:text-violet-300",
    chipBg: "bg-violet-100 dark:bg-violet-500/15",
    chipFg: "text-violet-800 dark:text-violet-300",
  },
  blue: {
    stripe: "var(--color-blue-500)",
    bar: "var(--color-blue-500)",
    iconBg: "bg-blue-100 dark:bg-blue-500/15",
    iconFg: "text-blue-700 dark:text-blue-300",
    chipBg: "bg-blue-100 dark:bg-blue-500/15",
    chipFg: "text-blue-800 dark:text-blue-300",
  },
  amber: {
    stripe: "var(--color-amber-500)",
    bar: "var(--color-amber-500)",
    iconBg: "bg-amber-100 dark:bg-amber-500/15",
    iconFg: "text-amber-700 dark:text-amber-300",
    chipBg: "bg-amber-100 dark:bg-amber-500/15",
    chipFg: "text-amber-800 dark:text-amber-300",
  },
  emerald: {
    stripe: "var(--color-emerald-500)",
    bar: "var(--color-emerald-500)",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/15",
    iconFg: "text-emerald-700 dark:text-emerald-300",
    chipBg: "bg-emerald-100 dark:bg-emerald-500/15",
    chipFg: "text-emerald-800 dark:text-emerald-300",
  },
}

const planAssumptions = [
  "Full-time hours (~40 hrs/week) with weekly sprint reviews — Paul's stated cadence.",
  "Slack is the single comms channel; feedback batched (not micro-comments).",
  "Paul + 2 partners available for a weekly sprint review; one of them is non-technical.",
  "Homeowner interviews recruitable inside week 1 (Paul confirmed this is 'not very difficult').",
  "No existing brand — visual direction emerges via Claude + shadcn, deferred until needs.",
  "Mock data + Claude-driven AI prompts are acceptable for the VC prototype.",
]

const afterPhaseFour = [
  {
    label: "Validation (weeks 5–6)",
    body: "Recruit homeowners for user testing per Paul's plan. Run 5–8 unmoderated sessions on the prototype. Synthesize findings; bring fix list to sprint review.",
  },
  {
    label: "Iteration (weeks 6–7)",
    body: "Modify the prototype based on user signal. Sharpen the parts that landed in VC conversations; soften the parts that confused investors. Keep design system docs current.",
  },
  {
    label: "Hi-res production (weeks 7–14)",
    body: "Two months of high-fidelity, full-fledged design. Cover the top three pain points completely. Edge cases, mobile (notifications-only), additional flows. Begin dev handoff once a full-time dev is hired.",
  },
  {
    label: "Mobile companion",
    body: "Per Paul's direction: mobile is a notifications surface, not a project-management tool. Design as a thin companion to the desktop product for the homeowner — permit-status pings, inspector arrival alerts, reviewer-comment notifications.",
  },
  {
    label: "Bridge to dev team",
    body: "Once Paul hires a full-stack dev, transition from solo Claude-driven prototyping to paired delivery. Cover the first 2 weeks of build to answer questions, adjust as constraints surface, lock the design system.",
  },
  {
    label: "Success metrics",
    body: "Track beyond adoption per Paul's ask — time-to-clarity, free-to-paid conversion, pre-submission validation accuracy, AHJ-by-AHJ data-quality scoring, trust signals (return rate, referral mentions).",
  },
]

/* ────────────────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────────────── */

export function TimelinePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 pb-12">
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 font-medium text-muted-foreground">
            <CalendarClock className="size-3" aria-hidden />
            Design notes
          </Badge>
          <span className="text-xs text-muted-foreground">
            v0.2 · post-2026-05-27 call, full engagement arc
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="font-heading text-3xl leading-tight font-semibold tracking-tight">
            Timeline &amp; phased plan
          </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
            Four weeks to a VC-ready prototype, plus a 2-month arc to full-fledged hi-res
            design. Cadence + scope reflect Paul&rsquo;s direction from the 2026-05-27 call.
          </p>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-foreground/85">
          Phases overlap by design — discovery findings keep shaping flows; the design
          system starts in week 3 and continues into week 4. Each phase ends with a
          working artifact and a short decision gate so we don't sleepwalk into the next
          one.
        </p>
      </header>

      <Separator />

      {/* Gantt */}
      <section className="space-y-5">
        <div className="space-y-1.5">
          <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Overview
          </div>
          <h2 className="font-heading text-xl font-semibold text-foreground">
            The four-week plan at a glance
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Bars show the focused time per phase. Vertical markers are decision gates —
            short check-ins with Paul to confirm direction before the next phase opens.
          </p>
        </div>
        <Gantt phases={phases} />
      </section>

      {/* Phase cards */}
      <section className="space-y-5">
        <div className="space-y-1.5">
          <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Detail
          </div>
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Phase by phase
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Goals, the activities to get there, the artifact at the end, and the gate
            that opens the next phase.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {phases.map((p) => (
            <PhaseCard key={p.id} phase={p} />
          ))}
        </div>
      </section>

      {/* Plan assumptions */}
      <section className="space-y-3">
        <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          What I'm assuming
        </div>
        <h2 className="font-heading text-xl font-semibold text-foreground">
          Plan assumptions
        </h2>
        <p className="max-w-3xl text-sm text-muted-foreground">
          If any of these break, the plan shifts. Worth confirming in the kickoff
          conversation.
        </p>
        <ul className="grid grid-cols-1 gap-2.5 pt-2 md:grid-cols-2">
          {planAssumptions.map((a) => (
            <li key={a} className="flex items-start gap-2.5 text-sm text-foreground/85">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* After week 4 */}
      <section className="space-y-3">
        <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Beyond week 4
        </div>
        <h2 className="font-heading text-xl font-semibold text-foreground">
          What I&rsquo;d do next
        </h2>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Week 4 ends with a VC-ready prototype, not a finished product. The next ~10
          weeks follow Paul&rsquo;s plan: 2 weeks of validation, then 2 months of
          high-resolution design alongside the first dev hire.
        </p>
        <div className="grid grid-cols-1 gap-3 pt-1 md:grid-cols-2">
          {afterPhaseFour.map((row) => (
            <div
              key={row.label}
              className="rounded-xl border bg-muted/30 p-4"
            >
              <div className="text-xs font-semibold tracking-wide text-foreground uppercase">
                {row.label}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                {row.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Gantt (SVG)
   ──────────────────────────────────────────────────────────────────────── */

const GANTT_W = 1040
const GANTT_H = 360
const TOTAL_DAYS = 20

function Gantt({ phases: list }: { phases: Phase[] }) {
  const padL = 150 // room for row labels
  const padR = 32
  const padT = 56 // room for week headers
  const padB = 48 // room for day axis
  const innerW = GANTT_W - padL - padR
  const innerH = GANTT_H - padT - padB

  const dayW = innerW / TOTAL_DAYS
  const rowH = innerH / list.length

  function xForDay(d: number): number {
    return padL + dayW * (d - 1)
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-card p-4 sm:p-5">
      <svg
        viewBox={`0 0 ${GANTT_W} ${GANTT_H}`}
        className="h-auto w-full"
        role="img"
        aria-labelledby="gantt-title"
      >
        <title id="gantt-title">Four-week design plan</title>

        {/* Week header strip */}
        {[1, 2, 3, 4].map((w) => {
          const x0 = xForDay((w - 1) * 5 + 1)
          const x1 = xForDay(w * 5) + dayW
          return (
            <g key={`wk-${w}`}>
              <rect
                x={x0}
                y={padT - 36}
                width={x1 - x0}
                height={28}
                fill={w % 2 === 0 ? "var(--muted)" : "var(--background)"}
                fillOpacity={w % 2 === 0 ? 0.4 : 1}
                stroke="var(--border)"
                strokeWidth={0.5}
              />
              <text
                x={(x0 + x1) / 2}
                y={padT - 16}
                textAnchor="middle"
                fontSize={11}
                fontWeight={700}
                fill="var(--foreground)"
                style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Week {w}
              </text>
            </g>
          )
        })}

        {/* Vertical week dividers */}
        {[1, 2, 3, 4].map((w) => (
          <line
            key={`div-${w}`}
            x1={xForDay((w - 1) * 5 + 1)}
            y1={padT - 36}
            x2={xForDay((w - 1) * 5 + 1)}
            y2={padT + innerH + 6}
            stroke="var(--border)"
            strokeWidth={1}
          />
        ))}
        {/* Right edge */}
        <line
          x1={xForDay(TOTAL_DAYS) + dayW}
          y1={padT - 36}
          x2={xForDay(TOTAL_DAYS) + dayW}
          y2={padT + innerH + 6}
          stroke="var(--border)"
          strokeWidth={1}
        />

        {/* Row labels + bars */}
        {list.map((p, i) => {
          const y = padT + rowH * i + rowH / 2
          const barY = y - 14
          const barH = 28
          const x0 = xForDay(p.startDay)
          const x1 = xForDay(p.endDay) + dayW
          const t = tones[p.accent]
          return (
            <g key={p.id}>
              {/* Row label area */}
              <text
                x={padL - 12}
                y={y + 5}
                textAnchor="end"
                fontSize={12}
                fontWeight={600}
                fill="var(--foreground)"
              >
                {p.name}
              </text>
              <text
                x={padL - 12}
                y={y + 19}
                textAnchor="end"
                fontSize={10}
                fill="var(--muted-foreground)"
              >
                Phase {p.number} · Week {p.week}
              </text>

              {/* Faint background row stripe */}
              <rect
                x={padL}
                y={padT + rowH * i + 4}
                width={innerW}
                height={rowH - 8}
                fill={i % 2 === 0 ? "var(--muted)" : "transparent"}
                fillOpacity={i % 2 === 0 ? 0.25 : 0}
              />

              {/* Bar */}
              <rect
                x={x0}
                y={barY}
                width={x1 - x0}
                height={barH}
                rx={6}
                ry={6}
                fill={t.bar}
                fillOpacity={0.15}
                stroke={t.bar}
                strokeOpacity={0.5}
                strokeWidth={1}
              />
              {/* Bar highlight cap on the left edge */}
              <rect
                x={x0}
                y={barY}
                width={6}
                height={barH}
                rx={3}
                fill={t.bar}
              />
              {/* Bar label */}
              <text
                x={x0 + 16}
                y={barY + barH / 2 + 4}
                fontSize={11.5}
                fontWeight={600}
                fill="var(--foreground)"
              >
                {p.oneLine}
              </text>
            </g>
          )
        })}

        {/* Decision-gate markers (between phases) */}
        {list.slice(0, -1).map((p) => {
          const gx = xForDay(p.endDay) + dayW
          return (
            <g key={`gate-${p.id}`}>
              <line
                x1={gx}
                y1={padT - 6}
                x2={gx}
                y2={padT + innerH + 2}
                stroke="var(--muted-foreground)"
                strokeWidth={1}
                strokeDasharray="3 4"
                strokeOpacity={0.6}
              />
              <g transform={`translate(${gx}, ${padT - 4})`}>
                <circle r={6} fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth={1} />
                <text
                  x={0}
                  y={4}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight={700}
                  fill="var(--muted-foreground)"
                >
                  G
                </text>
              </g>
            </g>
          )
        })}

        {/* Day axis */}
        {Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1).map((d) => {
          const x = xForDay(d) + dayW / 2
          return (
            <text
              key={`d-${d}`}
              x={x}
              y={padT + innerH + 22}
              textAnchor="middle"
              fontSize={10}
              fill="var(--muted-foreground)"
            >
              {d}
            </text>
          )
        })}
        <text
          x={padL + innerW / 2}
          y={padT + innerH + 38}
          textAnchor="middle"
          fontSize={10}
          fill="var(--muted-foreground)"
          fontStyle="italic"
        >
          Working day
        </text>

        {/* Legend */}
        <g transform={`translate(${padL}, ${GANTT_H - 12})`}>
          <circle cx={6} cy={-2} r={6} fill="var(--background)" stroke="var(--muted-foreground)" />
          <text
            x={18}
            y={2}
            fontSize={10}
            fill="var(--muted-foreground)"
          >
            G = decision gate (15-min review)
          </text>
        </g>
      </svg>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Phase card
   Uses the gradient-stripe accent (per buttonschool.com/blog/awkward-borders).
   ──────────────────────────────────────────────────────────────────────── */

function PhaseCard({ phase: p }: { phase: Phase }) {
  const t = tones[p.accent]
  const Icon = p.icon
  return (
    <article
      className="relative rounded-2xl shadow-xs ring-1 ring-border/80"
      style={{
        backgroundImage: `linear-gradient(to right, ${t.stripe} 4px, transparent 4px)`,
      }}
    >
      <div className="space-y-4 p-5 pl-6">
        {/* Header */}
        <div className="flex items-start gap-3">
          <span className="font-heading text-2xl font-semibold tabular-nums text-muted-foreground/60">
            {String(p.number).padStart(2, "0")}
          </span>
          <div className={cn("flex size-9 shrink-0 items-center justify-center rounded-lg", t.iconBg)}>
            <Icon className={cn("size-4.5", t.iconFg)} aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-base leading-snug font-semibold text-foreground">
              {p.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80">
              {p.oneLine}
            </p>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium",
              t.chipBg,
              t.chipFg,
            )}
          >
            Week {p.week}
          </span>
        </div>

        <Separator />

        {/* Goals */}
        <div>
          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
            <Eye className="size-3" aria-hidden /> Goals
          </div>
          <ul className="space-y-1.5">
            {p.goals.map((g) => (
              <li
                key={g}
                className="flex items-start gap-2 text-sm leading-snug text-foreground/85"
              >
                <span
                  aria-hidden
                  className="mt-1.5 size-1.5 shrink-0 rounded-full"
                  style={{ background: t.stripe }}
                />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div>
          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
            <Layers className="size-3" aria-hidden /> Activities
          </div>
          <ul className="space-y-1.5">
            {p.activities.map((a) => (
              <li
                key={a}
                className="flex items-start gap-2 text-sm leading-snug text-foreground/80"
              >
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-muted-foreground/60" aria-hidden />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverable + gate */}
        <div className="grid grid-cols-1 gap-3 rounded-lg bg-muted/30 p-3 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
              <Rocket className="size-3" aria-hidden /> Deliverable
            </div>
            <p className="mt-1 text-xs leading-relaxed text-foreground/85">
              {p.deliverable}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
              <Users className="size-3" aria-hidden /> Decision gate
            </div>
            <p className="mt-1 text-xs leading-relaxed text-foreground/85">
              {p.gate}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
