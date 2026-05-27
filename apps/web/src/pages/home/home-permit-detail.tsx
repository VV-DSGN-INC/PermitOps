import { Link, Navigate, useParams } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  CircleDashed,
  Clock4,
  FileCheck2,
  HelpCircle,
  MessageCircle,
  Paperclip,
  Sparkles,
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import {
  formatMoney,
  formatShortDate,
  getPermit,
  homeStatusBlurb,
  homeStatusLabel,
  permits,
  renovation,
  type HomeRequirement,
} from "@/lib/home-mock"

/**
 * Single permit, one full lifecycle. Order on the page mirrors what a homeowner
 * actually wants to know in order: what is this, where is it now, what does it
 * need, what comes after.
 */
export function HomePermitDetailPage() {
  const { id } = useParams<{ id: string }>()
  const permit = id ? getPermit(id) : undefined
  if (!permit) {
    return <Navigate to="/home" replace />
  }

  const reqDone = permit.requirements.filter((r) => r.status === "done").length
  const reqTotal = permit.requirements.length
  const reqPct = reqTotal === 0 ? 0 : Math.round((reqDone / reqTotal) * 100)

  return (
    <div className="mx-auto max-w-3xl px-6 pt-8 pb-24">
      <div className="mb-6 flex items-center gap-2 text-[13px]">
        <Link
          to="/home"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="size-3.5" />
          Back to your renovation
        </Link>
      </div>

      {/* Title + status hero */}
      <div className="border-home-border/70 bg-card overflow-hidden rounded-3xl border">
        <div className="px-7 py-7 sm:px-9 sm:py-8">
          <div className="text-muted-foreground text-[12px] font-medium tracking-wide uppercase">
            Permit
          </div>
          <h1 className="text-foreground/95 mt-1.5 text-[30px] leading-tight font-semibold tracking-[-0.015em] sm:text-[36px]">
            {permit.name}
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl text-[15px] leading-relaxed">
            {permit.whatItCovers}
          </p>

          <div className="border-home-border/60 mt-7 grid gap-5 border-t pt-6 sm:grid-cols-3">
            <Stat
              label="Where it is now"
              value={homeStatusLabel[permit.status]}
              hint={homeStatusBlurb[permit.status]}
            />
            <Stat
              label="Pulled by"
              value={
                permit.pulledBy === "contractor"
                  ? renovation.contractor.name
                  : renovation.ownerName
              }
              hint={permit.permitNumber ? `#${permit.permitNumber}` : undefined}
            />
            <Stat
              label="City fee"
              value={permit.fee ? formatMoney(permit.fee) : "—"}
              hint={
                permit.applicationDate
                  ? `Filed ${formatShortDate(permit.applicationDate)}`
                  : undefined
              }
            />
          </div>
        </div>

        {permit.status === "in_review" && permit.expectedReviewDays ? (
          <div className="border-home-border/60 bg-home-accent-soft/60 flex items-start gap-3 border-t px-7 py-4 sm:px-9">
            <Clock4 className="text-home-accent mt-0.5 size-4 shrink-0" />
            <p className="text-foreground/90 text-[13.5px] leading-relaxed">
              Berkeley&rsquo;s building queue is about{" "}
              <strong className="text-foreground">
                {permit.expectedReviewDays} business days
              </strong>{" "}
              right now. I&rsquo;ll let you know the moment anything moves.
            </p>
          </div>
        ) : null}
      </div>

      {/* AI nudge specific to this permit */}
      <AiAssistCallout permitId={permit.id} />

      {/* Requirements checklist */}
      <Section
        eyebrow="What it needs"
        title={
          <span>
            Documents{" "}
            <span className="text-muted-foreground text-[14px] font-normal">
              · {reqDone} of {reqTotal} done
            </span>
          </span>
        }
      >
        <div className="mb-4">
          <div className="bg-border/70 h-1.5 w-full overflow-hidden rounded-full">
            <div
              className="bg-home-accent h-full rounded-full transition-all"
              style={{ width: `${reqPct}%` }}
            />
          </div>
        </div>

        <ul className="border-home-border/70 bg-card divide-home-border/60 divide-y rounded-2xl border">
          {permit.requirements.map((r) => (
            <RequirementRow key={r.id} requirement={r} />
          ))}
        </ul>
      </Section>

      {/* Inspections preview */}
      {permit.inspections && permit.inspections.length > 0 ? (
        <Section
          eyebrow="What comes next"
          title="Inspections after approval"
          hint="Berkeley sends someone out to verify the work. I&rsquo;ll walk you through each one."
        >
          <ul className="space-y-3">
            {permit.inspections.map((insp) => (
              <li
                key={insp.id}
                className="border-home-border/70 bg-card flex items-start gap-4 rounded-2xl border p-4"
              >
                <span className="bg-home-canvas border-home-border/70 inline-flex size-9 shrink-0 items-center justify-center rounded-full border">
                  <CalendarCheck className="text-muted-foreground size-4" />
                </span>
                <div className="flex-1">
                  <div className="text-foreground text-[14.5px] font-semibold tracking-tight">
                    {insp.name}
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-[13px] leading-snug">
                    {insp.whatTheyCheck}
                  </p>
                </div>
                <span className="text-muted-foreground text-[12px]">
                  {insp.status === "not_yet" ? "Not yet" : insp.status}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <NextPermitNav currentId={permit.id} />
    </div>
  )
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint?: string
}) {
  return (
    <div>
      <div className="text-muted-foreground text-[11.5px] font-medium tracking-wide uppercase">
        {label}
      </div>
      <div className="text-foreground mt-1.5 text-[16px] font-semibold tracking-tight">
        {value}
      </div>
      {hint ? (
        <div className="text-muted-foreground mt-0.5 text-[12.5px]">{hint}</div>
      ) : null}
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
  title: React.ReactNode
  hint?: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-10">
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

function RequirementRow({ requirement }: { requirement: HomeRequirement }) {
  const status = requirement.status

  const icon =
    status === "done" ? (
      <span className="bg-home-accent/15 text-home-accent inline-flex size-7 items-center justify-center rounded-full">
        <Check className="size-4" strokeWidth={2.4} />
      </span>
    ) : status === "ai_can_help" ? (
      <span className="bg-foreground text-background inline-flex size-7 items-center justify-center rounded-full">
        <Sparkles className="size-3.5" />
      </span>
    ) : status === "in_progress" ? (
      <span className="bg-amber-100 text-amber-700 inline-flex size-7 items-center justify-center rounded-full">
        <Clock4 className="size-3.5" />
      </span>
    ) : (
      <span className="border-home-border bg-card text-muted-foreground inline-flex size-7 items-center justify-center rounded-full border">
        <CircleDashed className="size-3.5" />
      </span>
    )

  return (
    <li className="flex items-start gap-4 px-5 py-4">
      {icon}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-foreground text-[14.5px] font-medium tracking-tight">
            {requirement.label}
          </span>
          {requirement.fileName ? (
            <span className="text-muted-foreground inline-flex items-center gap-1 text-[12px]">
              <Paperclip className="size-3" />
              {requirement.fileName}
            </span>
          ) : null}
        </div>
        <p className="text-muted-foreground mt-0.5 text-[13px] leading-snug">
          {requirement.helper}
        </p>
        {status === "ai_can_help" && requirement.aiAssist ? (
          <div className="bg-home-accent-soft/70 mt-3 flex items-start gap-2.5 rounded-xl px-3 py-2.5">
            <Sparkles className="text-home-accent mt-0.5 size-3.5 shrink-0" />
            <div className="flex-1 text-[13px]">
              <div className="text-foreground/90">{requirement.aiAssist}</div>
              <div className="mt-2 flex gap-2">
                <Button
                  size="sm"
                  className="bg-foreground text-background hover:bg-foreground/90 h-7 rounded-full px-3 text-[12px]"
                >
                  Yes, fill it out
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground h-7 rounded-full px-2 text-[12px]"
                >
                  I&rsquo;ll do it
                </Button>
              </div>
            </div>
          </div>
        ) : null}
        {status === "in_progress" ? (
          <div className="text-muted-foreground mt-2 text-[12.5px] italic">
            Lopez is working on this.
          </div>
        ) : null}
      </div>
    </li>
  )
}

function AiAssistCallout({ permitId }: { permitId: string }) {
  // Static demo content keyed to the in-review building permit.
  if (permitId !== "building") return null
  return (
    <div className="border-home-border/70 bg-card mt-6 flex flex-col gap-3 rounded-2xl border p-5 sm:flex-row sm:items-center">
      <div className="flex items-start gap-3">
        <span className="bg-foreground text-background mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full">
          <MessageCircle className="size-4" />
        </span>
        <div>
          <div className="text-foreground text-[14.5px] font-semibold tracking-tight">
            Berkeley left one comment on this permit
          </div>
          <p className="text-muted-foreground text-[13px] leading-snug">
            They want a section drawing of the new wall header. I drafted an
            email to your engineer.
          </p>
        </div>
      </div>
      <div className="sm:ml-auto">
        <Button
          asChild
          className="bg-home-accent text-background hover:bg-home-accent/90 h-9 gap-1.5 rounded-full px-4 text-[13px] font-medium"
        >
          <Link to="/home/ask">
            See the draft
            <ArrowRight className="size-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function NextPermitNav({ currentId }: { currentId: string }) {
  const idx = permits.findIndex((p) => p.id === currentId)
  const next = permits[(idx + 1) % permits.length]
  if (!next) return null
  return (
    <div className="border-home-border/70 mt-12 flex items-center justify-between border-t pt-6">
      <div className="text-muted-foreground inline-flex items-center gap-2 text-[12.5px]">
        <HelpCircle className="size-3.5" />
        Have a question about this?{" "}
        <Link
          to="/home/ask"
          className="text-foreground underline-offset-4 hover:underline"
        >
          Ask AI
        </Link>
      </div>
      <Link
        to={`/home/permit/${next.id}`}
        className="text-foreground inline-flex items-center gap-1.5 text-[13px] font-medium hover:gap-2 transition-all"
      >
        <FileCheck2 className="text-muted-foreground size-4" />
        Next: {next.name}
        <ArrowRight className="size-3.5" />
      </Link>
    </div>
  )
}
