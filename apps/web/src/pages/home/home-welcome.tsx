import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Hammer,
  MapPin,
  Sparkles,
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"
import { useT } from "@/lib/home-i18n"

/**
 * Onboarding intake. Conversational entry, not a multi-step wizard.
 * The user describes the renovation in natural language; AI parses and proposes
 * a starting plan. The third step is purely confirmation.
 */
export function HomeWelcomePage() {
  const t = useT()
  const [step, setStep] = useState<"intro" | "review">("intro")
  const [address, setAddress] = useState("1247 Larkspur Lane, Burnaby, BC V5A 3M2")
  const [description, setDescription] = useState(
    "We want to open up the wall between our kitchen and dining room, move the sink, and put in all new cabinets and appliances. Hiring Lopez Construction.",
  )

  return (
    <div className="mx-auto flex max-w-3xl flex-col px-6 pt-10 pb-24 sm:pt-16">
      <div className="mb-10 flex items-center gap-2 text-[13px] font-medium tracking-wide text-muted-foreground uppercase">
        <Sparkles className="size-3.5 text-home-accent" />
        {t("welcome.eyebrow")}
      </div>

      {step === "intro" ? (
        <IntroStep
          address={address}
          setAddress={setAddress}
          description={description}
          setDescription={setDescription}
          onContinue={() => setStep("review")}
        />
      ) : (
        <ReviewStep
          address={address}
          description={description}
          onBack={() => setStep("intro")}
        />
      )}
    </div>
  )
}

function IntroStep({
  address,
  setAddress,
  description,
  setDescription,
  onContinue,
}: {
  address: string
  setAddress: (v: string) => void
  description: string
  setDescription: (v: string) => void
  onContinue: () => void
}) {
  const t = useT()
  return (
    <>
      <h1 className="text-foreground/95 max-w-2xl text-[44px] leading-[1.1] font-semibold tracking-[-0.02em] sm:text-[56px]">
        {t("welcome.h1")}
      </h1>
      <p className="text-muted-foreground mt-4 max-w-xl text-[18px] leading-relaxed">
        {t("welcome.sub")}
      </p>

      <div className="mt-12 space-y-7">
        <Field
          icon={<MapPin className="size-4 text-home-accent" />}
          label={t("welcome.where.label")}
          helper={t("welcome.where.helper")}
        >
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street, city, state"
            className="h-12 rounded-xl border-home-border bg-card text-[16px] shadow-none"
          />
        </Field>

        <Field
          icon={<Hammer className="size-4 text-home-accent" />}
          label={t("welcome.what.label")}
          helper={t("welcome.what.helper")}
        >
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="rounded-xl border-home-border bg-card text-[16px] leading-relaxed shadow-none"
          />
        </Field>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <p className="text-muted-foreground text-[14px]">
          {t("welcome.takes_about")}
        </p>
        <Button
          size="lg"
          onClick={onContinue}
          className="bg-foreground text-background hover:bg-foreground/90 h-12 gap-2 rounded-full px-6 text-[14px] font-medium"
        >
          {t("welcome.cta")}
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <Examples />
    </>
  )
}

function ReviewStep({
  address,
  description,
  onBack,
}: {
  address: string
  description: string
  onBack: () => void
}) {
  const t = useT()
  return (
    <>
      <h1 className="text-foreground/95 max-w-2xl text-[44px] leading-[1.1] font-semibold tracking-[-0.02em] sm:text-[52px]">
        {t("welcome.review.h1")}
      </h1>
      <p className="text-muted-foreground mt-4 max-w-xl text-[18px]">
        {t("welcome.review.sub_lead")}
        <strong className="text-foreground">
          {t("welcome.review.sub_type")}
        </strong>
        {t("welcome.review.sub_tail")}
      </p>

      <div className="border-home-border bg-card mt-12 overflow-hidden rounded-2xl border shadow-[0_1px_0_rgb(0_0_0_/_0.02)]">
        <div className="border-home-border/70 border-b p-6">
          <div className="text-muted-foreground text-[12px] font-semibold tracking-[0.08em] uppercase">
            {t("welcome.review.what_i_heard")}
          </div>
          <p className="text-foreground mt-2 max-w-xl text-[16px] leading-relaxed">
            <MapPin className="text-muted-foreground -mt-0.5 mr-1.5 inline size-3.5" />
            {address}
          </p>
          <p className="text-muted-foreground mt-3 max-w-xl text-[15px] leading-relaxed italic">
            &ldquo;{description}&rdquo;
          </p>
        </div>

        <div className="p-6">
          <div className="text-muted-foreground text-[12px] font-semibold tracking-[0.08em] uppercase">
            {t("welcome.review.permits_label")}
          </div>
          <ul className="mt-4 space-y-3">
            <ReviewPermit
              name="Building Permit"
              why="Because you&rsquo;re removing a wall — even non-bearing counts in Burnaby."
              fee="~$1,800"
            />
            <ReviewPermit
              name="Electrical Permit"
              why="New circuits for the island and recessed lighting."
              fee="~$280"
            />
            <ReviewPermit
              name="Plumbing Permit"
              why="Moving the sink and dishwasher line."
              fee="~$240"
            />
            <ReviewPermit
              name="Mechanical Permit"
              why="New range-hood vent through the exterior wall."
              fee="~$175"
            />
          </ul>
        </div>

        <div className="border-home-border/70 bg-home-accent-soft/70 flex items-start gap-3 border-t px-6 py-4">
          <Sparkles className="text-home-accent mt-0.5 size-4 shrink-0" />
          <p className="text-foreground/90 text-[14.5px] leading-relaxed">
            {t("welcome.review.contractor_note")}
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground rounded-full text-[14px]"
        >
          {t("welcome.review.change")}
        </Button>
        <Button
          asChild
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90 h-12 gap-2 rounded-full px-6 text-[14px] font-medium"
        >
          <Link to="/home">
            {t("welcome.review.open")}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </>
  )
}

function Field({
  icon,
  label,
  helper,
  children,
}: {
  icon: React.ReactNode
  label: string
  helper: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <span className="text-foreground text-[15px] font-medium">{label}</span>
      </div>
      {children}
      <p className="text-muted-foreground mt-2 text-[13.5px]">{helper}</p>
    </div>
  )
}

function ReviewPermit({
  name,
  why,
  fee,
}: {
  name: string
  why: string
  fee: string
}) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="text-home-accent mt-0.5 size-[18px] shrink-0" />
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-foreground text-[16px] font-medium">
            {name}
          </span>
          <span className="text-muted-foreground text-[13.5px] font-medium tabular-nums">
            {fee}
          </span>
        </div>
        <p className="text-muted-foreground mt-0.5 text-[14px] leading-snug">
          {why}
        </p>
      </div>
    </li>
  )
}

function Examples() {
  const t = useT()
  const samples = [
    t("welcome.examples.deck"),
    t("welcome.examples.basement"),
    t("welcome.examples.adu"),
  ]
  return (
    <div className="border-home-border/70 mt-16 border-t pt-8">
      <div className="text-muted-foreground text-[12px] font-semibold tracking-[0.08em] uppercase">
        {t("welcome.examples.label")}
      </div>
      <ul className="mt-3 space-y-1">
        {samples.map((s) => (
          <li
            key={s}
            className={cn(
              "group hover:bg-foreground/[0.03] -mx-2 flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-[15px]",
            )}
          >
            <span className="flex-1 text-foreground/85 group-hover:text-foreground">
              {s}
            </span>
            <ChevronRight className="text-muted-foreground/70 group-hover:text-foreground size-3.5 transition" />
          </li>
        ))}
      </ul>
    </div>
  )
}
