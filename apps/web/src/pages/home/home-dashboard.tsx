import { Link } from "react-router-dom"
import {
  ArrowRight,
  Bath,
  Bell,
  Calendar,
  ChefHat,
  ChevronRight,
  Clock4,
  Hammer,
  type LucideIcon,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  TreeDeciduous,
  Warehouse,
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import {
  aiSuggestions,
  formatMoney,
  formatShortDate,
  homeStatusBlurb,
  homeStatusLabel,
  owner,
  projects,
  type HomeContact,
  type HomePermitStatus,
  type HomeProject,
} from "@/lib/home-mock"
import { useT } from "@/lib/home-i18n"

const STAGE_ORDER: HomePermitStatus[] = [
  "not_started",
  "preparing",
  "submitted",
  "in_review",
  "approved",
  "inspections",
  "closed",
]

// Resolve a lucide icon by its string name. Keeping this local so the mock
// data stays plain JSON-ish and the import surface here is explicit.
const ICONS: Record<string, LucideIcon> = {
  ChefHat,
  Bath,
  Warehouse,
  TreeDeciduous,
}

function getProjectIcon(name: string): LucideIcon {
  return ICONS[name] ?? ChefHat
}

const KIND_LABEL: Record<HomeProject["kind"], string> = {
  renovation: "Renovation",
  addition: "Addition",
  new_build: "New build",
  outdoor: "Outdoor",
}

/**
 * The home page for a homeowner with several projects in different stages.
 * Sequenced top-down: who/where they are → the featured project's current
 * situation → AI suggestions → permits → other projects → contacts → numbers.
 */
export function HomeDashboardPage() {
  const t = useT()
  const featured = projects.find((p) => p.featured) ?? projects[0]!
  const otherProjects = projects.filter((p) => p.id !== featured.id)
  const featuredPermits = featured.permits
  const inReview = featuredPermits.find((p) => p.status === "in_review")
  const totalFees = featuredPermits.reduce(
    (sum, p) => sum + (p.fee ?? 0),
    0,
  )

  return (
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-24">
      {/* Owner address chip */}
      <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
        <MapPin className="size-3.5" />
        {owner.address} · {owner.city}, {owner.state}
      </div>

      {/* Featured project header */}
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-foreground/95 text-[34px] leading-[1.05] font-semibold tracking-[-0.018em] sm:text-[40px]">
            {t("home.featured.heading").replace(
              "{name}",
              t(`data.project.${featured.id}.name`, featured.name).toLowerCase(),
            )}
          </h1>
          <p className="text-muted-foreground mt-2 max-w-xl text-[16px] leading-relaxed">
            {t(`data.project.${featured.id}.summary`, featured.summary)}
          </p>
        </div>
        <div className="border-home-border/70 bg-card flex items-center gap-3 rounded-full border px-4 py-1.5 text-[13px]">
          <span className="bg-home-accent inline-block size-1.5 rounded-full" />
          <span className="text-foreground font-medium">{featured.stage}</span>
          {featured.targetFinishDate ? (
            <span className="text-muted-foreground">
              {t("home.featured.target_prefix").replace(
                "{date}",
                formatShortDate(featured.targetFinishDate),
              )}
            </span>
          ) : null}
        </div>
      </div>

      {/* What's happening hero (featured project) */}
      {inReview ? (
        <div className="border-home-border/70 bg-card relative mt-10 overflow-hidden rounded-3xl border shadow-[0_1px_0_rgb(0_0_0_/_0.02)]">
          <div className="from-home-accent-soft/70 via-home-canvas/0 to-home-canvas/0 pointer-events-none absolute inset-0 bg-gradient-to-br" />
          <div className="relative px-8 py-9 sm:px-10 sm:py-10">
            <div className="text-home-accent inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-[0.1em] uppercase">
              <Sparkles className="size-3.5" />
              {t("home.whats_happening")}
            </div>
            <h2 className="text-foreground mt-3 max-w-2xl text-[30px] leading-[1.15] font-semibold tracking-[-0.015em] sm:text-[36px]">
              {t("home.hero.title")}
              <span className="text-muted-foreground">
                {t("home.hero.days_tail")}
              </span>
            </h2>
            <p className="text-foreground/80 mt-3 max-w-2xl text-[16px] leading-relaxed">
              {t("home.hero.sub")}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 gap-2 rounded-full text-[14px]"
              >
                <Link to={`/home/permit/${inReview.id}`}>
                  {t("home.hero.see_review")}
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-foreground hover:bg-foreground/[0.04] rounded-full text-[14px]"
              >
                <Link to="/home/ask">{t("home.hero.ask")}</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {/* AI suggestions */}
      <Section
        eyebrow={t("home.suggestions.eyebrow")}
        title={t("home.suggestions.title")}
        hint={t("home.suggestions.hint")}
      >
        <div className="space-y-3">
          {aiSuggestions.map((s) => (
            <SuggestionCard key={s.id} suggestion={s} />
          ))}
        </div>
      </Section>

      {/* The four permits — featured project */}
      <Section
        eyebrow={t("home.permits.eyebrow")}
        title={t("home.permits.title")}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {featuredPermits.map((p) => (
            <Link
              key={p.id}
              to={`/home/permit/${p.id}`}
              className="border-home-border/70 bg-card hover:border-home-accent/50 hover:shadow-[0_4px_24px_-12px_rgb(0_0_0_/_0.1)] group block rounded-2xl border p-5 transition"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-foreground text-[16px] font-semibold tracking-tight">
                    {t(`data.permit.${p.id}.name`, p.name)}
                  </div>
                  <StageDots current={p.status} className="mt-2" />
                </div>
                <ChevronRight className="text-muted-foreground/60 group-hover:text-foreground mt-1 size-4 transition" />
              </div>
              <p className="text-muted-foreground mt-3 line-clamp-2 text-[14px] leading-snug">
                {t(`data.status.${p.status}.blurb`, homeStatusBlurb[p.status])}
                {p.permitNumber ? ` · #${p.permitNumber}` : ""}
              </p>
              <div className="border-home-border/60 mt-4 flex items-center justify-between border-t pt-3">
                <span className="text-muted-foreground text-[13px]">
                  {p.pulledBy === "contractor"
                    ? t("home.permits.pulled_by_contractor")
                    : t("home.permits.pulled_by_you")}
                </span>
                {p.fee ? (
                  <span className="text-foreground text-[13px] font-medium tabular-nums">
                    {formatMoney(p.fee)}
                  </span>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* What else you're planning */}
      {otherProjects.length > 0 ? (
        <Section
          eyebrow={t("home.projects.eyebrow")}
          title={t("home.projects.title")}
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {otherProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </Section>
      ) : null}

      {/* Side rail: contacts + numbers */}
      <Section eyebrow={t("home.team.eyebrow")} title={t("home.team.title")}>
        <div className="grid gap-3 sm:grid-cols-2">
          {featured.contractor ? (
            <ContactCard
              contact={featured.contractor}
              footer={
                featured.startedOn
                  ? t("home.team.contractor_since").replace(
                      "{date}",
                      formatShortDate(featured.startedOn),
                    )
                  : t("home.team.contractor_pending")
              }
            />
          ) : null}
          {featured.municipalityHandler ? (
            <ContactCard
              contact={featured.municipalityHandler}
              footer={t("home.team.reviewer_footer")}
            />
          ) : null}
        </div>
      </Section>

      <Section
        eyebrow={t("home.numbers.eyebrow")}
        title={t("home.numbers.title")}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat
            icon={<Hammer className="size-4" />}
            label={t("home.numbers.budget")}
            value={formatMoney(featured.budget)}
          />
          <Stat
            icon={<Bell className="size-4" />}
            label={t("home.numbers.permit_fees")}
            value={formatMoney(totalFees)}
          />
          <Stat
            icon={<Clock4 className="size-4" />}
            label={t("home.numbers.started")}
            value={
              featured.startedOn
                ? formatShortDate(featured.startedOn)
                : t("home.numbers.empty")
            }
          />
          <Stat
            icon={<Calendar className="size-4" />}
            label={t("home.numbers.target_finish")}
            value={
              featured.targetFinishDate
                ? formatShortDate(featured.targetFinishDate)
                : t("home.numbers.empty")
            }
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
      <div className="text-muted-foreground text-[12px] font-semibold tracking-[0.1em] uppercase">
        {eyebrow}
      </div>
      <h3 className="text-foreground mt-1.5 text-[22px] font-semibold tracking-tight">
        {title}
      </h3>
      {hint ? (
        <p className="text-muted-foreground mt-1 text-[14px]">{hint}</p>
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
  const t = useT()
  const tone =
    suggestion.severity === "action"
      ? "bg-home-accent-soft/60 border-home-accent/30"
      : suggestion.severity === "blocker"
        ? "bg-destructive/5 border-destructive/30"
        : "bg-card border-home-border/70"

  return (
    <div className={cn("rounded-2xl border p-5 transition", tone)}>
      <div className="flex items-start gap-4">
        <span className="bg-home-accent/15 text-home-accent mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full">
          <Sparkles className="size-4" />
        </span>
        <div className="flex-1">
          <div className="text-foreground text-[16px] font-semibold tracking-tight">
            {t(`data.suggestion.${suggestion.id}.headline`, suggestion.headline)}
          </div>
          <p className="text-foreground/80 mt-1 text-[14px] leading-relaxed">
            {t(`data.suggestion.${suggestion.id}.body`, suggestion.body)}
          </p>
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 h-8 gap-1.5 rounded-full px-3 text-[13.5px]"
            >
              {t(
                `data.suggestion.${suggestion.id}.primary`,
                suggestion.primaryAction,
              )}
              <ArrowRight className="size-3" />
            </Button>
            {suggestion.secondaryAction ? (
              <Button
                size="sm"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground h-8 rounded-full px-2 text-[13.5px]"
              >
                {t(
                  `data.suggestion.${suggestion.id}.secondary`,
                  suggestion.secondaryAction,
                )}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: HomeProject }) {
  const t = useT()
  const Icon = getProjectIcon(project.icon)
  return (
    <div className="border-home-border/70 bg-card flex h-full flex-col rounded-2xl border p-5">
      <span className="bg-home-accent/15 text-home-accent inline-flex size-10 items-center justify-center rounded-xl">
        <Icon className="size-5" />
      </span>
      <div className="mt-4">
        <div className="text-foreground text-[17px] font-semibold tracking-tight">
          {t(`data.project.${project.id}.name`, project.name)}
        </div>
        <div className="text-muted-foreground mt-1 text-[12.5px] font-medium tracking-[0.04em] uppercase">
          {t(`data.kind.${project.kind}`, KIND_LABEL[project.kind])}
        </div>
        <p className="text-muted-foreground mt-2 line-clamp-2 text-[14px] leading-snug">
          {t(`data.project.${project.id}.summary`, project.summary)}
        </p>
      </div>
      <div className="border-home-border/60 mt-4 flex items-center justify-between gap-2 border-t pt-3">
        <span className="text-foreground text-[14px] font-medium tabular-nums">
          {formatMoney(project.budget)}
        </span>
        <Button
          asChild
          size="sm"
          variant="ghost"
          className="text-foreground hover:bg-foreground/[0.04] h-8 gap-1 rounded-full px-3 text-[13.5px]"
        >
          <Link to={`/home/project/${project.id}`}>
            {t("home.projects.open")}
            <ArrowRight className="size-3" />
          </Link>
        </Button>
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
  const t = useT()
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
              <span className="text-foreground ml-1 text-[12.5px] font-medium">
                {t(`data.status.${current}.label`, homeStatusLabel[current])}
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
  contact: HomeContact
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
          "inline-flex size-11 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold tracking-tight",
          toneMap[contact.avatarTone],
        )}
      >
        {contact.initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-foreground text-[16px] font-semibold tracking-tight">
          {contact.name}
        </div>
        <div className="text-muted-foreground text-[13.5px]">{contact.role}</div>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[13.5px]">
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
        <div className="text-muted-foreground mt-2.5 text-[13px]">{footer}</div>
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
      <div className="text-muted-foreground flex items-center gap-2 text-[13px]">
        <span className="text-home-accent">{icon}</span>
        {label}
      </div>
      <div className="text-foreground mt-2 text-[22px] font-semibold tracking-tight tabular-nums">
        {value}
      </div>
    </div>
  )
}
