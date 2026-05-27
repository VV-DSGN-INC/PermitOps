import { Link } from "react-router-dom"
import {
  ArrowRight,
  Bell,
  Calendar,
  ChevronRight,
  Clock4,
  Hammer,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import {
  aiSuggestions,
  formatMoney,
  formatShortDate,
  homeStatusBlurb,
  homeStatusLabel,
  permits,
  renovation,
  type HomePermitStatus,
} from "@/lib/home-mock"

const STAGE_ORDER: HomePermitStatus[] = [
  "not_started",
  "preparing",
  "submitted",
  "in_review",
  "approved",
  "inspections",
  "closed",
]

/**
 * The single-renovation home page. Sequenced top-down so the user lands on
 * "what's the situation right now" and then sees individual permits.
 */
export function HomeDashboardPage() {
  const inReview = permits.find((p) => p.status === "in_review")
  const totalFees = permits.reduce((sum, p) => sum + (p.fee ?? 0), 0)

  return (
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-24">
      {/* Project header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <MapPin className="size-3.5" />
            {renovation.address} · {renovation.city}, {renovation.state}
          </div>
          <h1 className="text-foreground/95 mt-2 text-[34px] leading-[1.05] font-semibold tracking-[-0.018em] sm:text-[40px]">
            Your {renovation.projectName.toLowerCase()}
          </h1>
          <p className="text-muted-foreground mt-2 max-w-xl text-[15px] leading-relaxed">
            {renovation.projectSummary}
          </p>
        </div>
        <div className="border-home-border/70 bg-card flex items-center gap-3 rounded-full border px-4 py-1.5 text-[12px]">
          <span className="bg-home-accent inline-block size-1.5 rounded-full" />
          <span className="text-foreground font-medium">{renovation.stage}</span>
          <span className="text-muted-foreground">
            · target {formatShortDate(renovation.targetFinishDate)}
          </span>
        </div>
      </div>

      {/* What's next hero */}
      {inReview ? (
        <div className="border-home-border/70 bg-card relative mt-10 overflow-hidden rounded-3xl border shadow-[0_1px_0_rgb(0_0_0_/_0.02)]">
          <div className="from-home-accent-soft/70 via-home-canvas/0 to-home-canvas/0 pointer-events-none absolute inset-0 bg-gradient-to-br" />
          <div className="relative px-8 py-9 sm:px-10 sm:py-10">
            <div className="text-home-accent inline-flex items-center gap-1.5 text-[11.5px] font-semibold tracking-[0.1em] uppercase">
              <Sparkles className="size-3.5" />
              What&rsquo;s happening
            </div>
            <h2 className="text-foreground mt-3 max-w-2xl text-[28px] leading-[1.15] font-semibold tracking-[-0.015em] sm:text-[32px]">
              Berkeley is reviewing your plans.
              <span className="text-muted-foreground"> About 9 more days.</span>
            </h2>
            <p className="text-foreground/80 mt-3 max-w-2xl text-[15px] leading-relaxed">
              Lopez sent everything Tuesday. Nothing for you to do today —
              I&rsquo;ll ping you if they ask for anything.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 gap-2 rounded-full text-[13px]"
              >
                <Link to={`/home/permit/${inReview.id}`}>
                  See the review
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-foreground hover:bg-foreground/[0.04] rounded-full text-[13px]"
              >
                <Link to="/home/ask">Ask AI a question</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {/* AI suggestions */}
      <Section
        eyebrow="From your AI"
        title="Three things I noticed"
        hint="None of these are urgent — just keeping you in the loop."
      >
        <div className="space-y-3">
          {aiSuggestions.map((s) => (
            <SuggestionCard key={s.id} suggestion={s} />
          ))}
        </div>
      </Section>

      {/* Permits grid */}
      <Section
        eyebrow="The four permits"
        title="Where each one stands"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {permits.map((p) => (
            <Link
              key={p.id}
              to={`/home/permit/${p.id}`}
              className="border-home-border/70 bg-card hover:border-home-accent/50 hover:shadow-[0_4px_24px_-12px_rgb(0_0_0_/_0.1)] group block rounded-2xl border p-5 transition"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-foreground text-[15px] font-semibold tracking-tight">
                    {p.name}
                  </div>
                  <StageDots current={p.status} className="mt-2" />
                </div>
                <ChevronRight className="text-muted-foreground/60 group-hover:text-foreground mt-1 size-4 transition" />
              </div>
              <p className="text-muted-foreground mt-3 line-clamp-2 text-[13px] leading-snug">
                {homeStatusBlurb[p.status]}
                {p.permitNumber ? ` · #${p.permitNumber}` : ""}
              </p>
              <div className="border-home-border/60 mt-4 flex items-center justify-between border-t pt-3">
                <span className="text-muted-foreground text-[12px]">
                  {p.pulledBy === "contractor" ? "Lopez pulls this" : "You pull this"}
                </span>
                {p.fee ? (
                  <span className="text-foreground text-[12px] font-medium tabular-nums">
                    {formatMoney(p.fee)}
                  </span>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Side rail: contacts + numbers */}
      <Section eyebrow="The team" title="Who&rsquo;s helping">
        <div className="grid gap-3 sm:grid-cols-2">
          <ContactCard
            contact={renovation.contractor}
            footer={`On the project since ${formatShortDate(renovation.startedOn)}`}
          />
          {renovation.municipalityHandler ? (
            <ContactCard
              contact={renovation.municipalityHandler}
              footer="Reviews your applications"
            />
          ) : null}
        </div>
      </Section>

      <Section eyebrow="At a glance" title="The numbers">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat
            icon={<Hammer className="size-4" />}
            label="Budget"
            value={formatMoney(renovation.budget)}
          />
          <Stat
            icon={<Bell className="size-4" />}
            label="Permit fees"
            value={formatMoney(totalFees)}
          />
          <Stat
            icon={<Clock4 className="size-4" />}
            label="Started"
            value={formatShortDate(renovation.startedOn)}
          />
          <Stat
            icon={<Calendar className="size-4" />}
            label="Target finish"
            value={formatShortDate(renovation.targetFinishDate)}
          />
        </div>
      </Section>
    </div>
  )
}

function Section({
  eyebrow,
  title,
  hint,
  children,
}: {
  eyebrow: string
  title: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <div className="text-muted-foreground text-[11px] font-semibold tracking-[0.1em] uppercase">
        {eyebrow}
      </div>
      <h3 className="text-foreground mt-1.5 text-[20px] font-semibold tracking-tight">
        {title}
      </h3>
      {hint ? (
        <p className="text-muted-foreground mt-1 text-[13.5px]">{hint}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  )
}

function SuggestionCard({
  suggestion,
}: {
  suggestion: (typeof aiSuggestions)[number]
}) {
  const tone =
    suggestion.severity === "action"
      ? "bg-home-accent-soft/60 border-home-accent/30"
      : suggestion.severity === "blocker"
        ? "bg-destructive/5 border-destructive/30"
        : "bg-card border-home-border/70"

  return (
    <div
      className={cn(
        "rounded-2xl border p-5 transition",
        tone,
      )}
    >
      <div className="flex items-start gap-4">
        <span className="bg-home-accent/15 text-home-accent mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full">
          <Sparkles className="size-4" />
        </span>
        <div className="flex-1">
          <div className="text-foreground text-[14.5px] font-semibold tracking-tight">
            {suggestion.headline}
          </div>
          <p className="text-foreground/80 mt-1 text-[13.5px] leading-relaxed">
            {suggestion.body}
          </p>
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 h-8 gap-1.5 rounded-full px-3 text-[12.5px]"
            >
              {suggestion.primaryAction}
              <ArrowRight className="size-3" />
            </Button>
            {suggestion.secondaryAction ? (
              <Button
                size="sm"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground h-8 rounded-full px-2 text-[12.5px]"
              >
                {suggestion.secondaryAction}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

function StageDots({
  current,
  className,
}: {
  current: HomePermitStatus
  className?: string
}) {
  const currentIdx = STAGE_ORDER.indexOf(current)
  const labels: { key: HomePermitStatus; short: string }[] = [
    { key: "preparing", short: "Prep" },
    { key: "submitted", short: "Sent" },
    { key: "in_review", short: "Review" },
    { key: "approved", short: "Approved" },
    { key: "inspections", short: "Inspect" },
    { key: "closed", short: "Done" },
  ]
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {labels.map((l) => {
        const idx = STAGE_ORDER.indexOf(l.key)
        const active = idx === currentIdx
        const past = idx < currentIdx
        return (
          <div key={l.key} className="flex items-center gap-1">
            <span
              className={cn(
                "size-1.5 rounded-full transition",
                past && "bg-home-accent/80",
                active && "bg-foreground ring-foreground/15 size-2 ring-4",
                !past && !active && "bg-border",
              )}
            />
            {active ? (
              <span className="text-foreground ml-1 text-[11.5px] font-medium">
                {homeStatusLabel[current]}
              </span>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

function ContactCard({
  contact,
  footer,
}: {
  contact: (typeof renovation)["contractor"]
  footer: string
}) {
  const toneMap = {
    indigo: "bg-indigo-100 text-indigo-700",
    amber: "bg-amber-100 text-amber-700",
    emerald: "bg-emerald-100 text-emerald-700",
    rose: "bg-rose-100 text-rose-700",
    slate: "bg-slate-200 text-slate-700",
  } as const
  return (
    <div className="border-home-border/70 bg-card flex items-start gap-4 rounded-2xl border p-5">
      <span
        className={cn(
          "inline-flex size-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold tracking-tight",
          toneMap[contact.avatarTone],
        )}
      >
        {contact.initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-foreground text-[14.5px] font-semibold tracking-tight">
          {contact.name}
        </div>
        <div className="text-muted-foreground text-[12.5px]">{contact.role}</div>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[12.5px]">
          {contact.phone ? (
            <span className="text-foreground/80 inline-flex items-center gap-1.5">
              <Phone className="text-muted-foreground size-3" />
              {contact.phone}
            </span>
          ) : null}
          {contact.email ? (
            <span className="text-foreground/80 inline-flex items-center gap-1.5">
              <Mail className="text-muted-foreground size-3" />
              {contact.email}
            </span>
          ) : null}
        </div>
        <div className="text-muted-foreground mt-2.5 text-[12px]">{footer}</div>
      </div>
    </div>
  )
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="border-home-border/70 bg-card rounded-2xl border p-4">
      <div className="text-muted-foreground flex items-center gap-2 text-[12px]">
        <span className="text-home-accent">{icon}</span>
        {label}
      </div>
      <div className="text-foreground mt-2 text-[20px] font-semibold tracking-tight tabular-nums">
        {value}
      </div>
    </div>
  )
}
