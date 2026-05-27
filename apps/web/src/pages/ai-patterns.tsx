import {
  Activity,
  Bot,
  Cpu,
  Eye,
  Gauge,
  MessageCircleQuestion,
  Pencil,
  Quote,
  ShieldCheck,
  Sparkles,
  Undo2,
  Wand2,
} from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { PatternCard, type Pattern } from "@/components/ai-patterns/pattern-card"
import {
  ActivityTimelineExample,
  AttributionExample,
  ChatFallbackExample,
  ConfidenceExample,
  InlineCorrectionExample,
  ProvenanceExample,
  PromptedVsAutonomousExample,
  ReversibilityExample,
  StagingExample,
  UncertaintyExample,
} from "@/components/ai-patterns/mini-examples"

/**
 * AI Interaction Patterns — design notes catalogue.
 *
 * Companion to Problem Statement / Personas / Assumptions. Documents the
 * rules every AI-driven surface in PermitOps follows, so the agents feel
 * trustworthy and recoverable instead of magical.
 */

const patterns: Pattern[] = [
  {
    number: "01",
    title: "Agent attribution chip",
    description: "Every AI-touched field shows who did it.",
    icon: Sparkles,
    accent: "violet",
    when:
      "Anywhere AI populated, modified, or proposed a value. The chip is small but always present — users should never wonder whether they typed something or the agent did.",
    example: <AttributionExample />,
    usedOn: [
      "Project Requirements → AHJ resolution",
      "Permit Detail → pre-filled forms",
    ],
  },
  {
    number: "02",
    title: "Confidence indicator + override",
    description: "When AI guesses, show the confidence and let the user correct.",
    icon: Gauge,
    accent: "emerald",
    when:
      "Classification, extraction, or matching where the model isn't certain. Confidence is shown as a single pill that expands to alternatives — never hidden behind a tooltip the user has to find.",
    example: <ConfidenceExample />,
    usedOn: ["Comment triage → suggested assignee", "Intake → extracted address"],
  },
  {
    number: "03",
    title: "Human-in-the-loop staging",
    description: "Critical actions queue for explicit approval before firing.",
    icon: ShieldCheck,
    accent: "blue",
    when:
      "Irreversible or visible-to-AHJ actions — submissions, payments, renewals. A diff preview shows what will change, and approval is a deliberate click. No auto-fire on critical paths.",
    example: <StagingExample />,
    usedOn: ["Submission agent → permit filing", "Renewal staging"],
  },
  {
    number: "04",
    title: "Uncertainty disclosure",
    description: '"I don\'t know" is a first-class state, not a hallucination.',
    icon: MessageCircleQuestion,
    accent: "amber",
    when:
      "Requested information isn't in the corpus, or sources contradict each other. We render an empty state with a path forward — never a confident guess that turns out to be invented.",
    example: <UncertaintyExample />,
    usedOn: ["Bid jurisdiction lookup", "Requirements summarizer"],
  },
  {
    number: "05",
    title: "Provenance / citation",
    description: "Every AI claim links to its source.",
    icon: Quote,
    accent: "cyan",
    when:
      "Any factual output the user should be able to verify — fees, timelines, requirements, comment context. Citations live inline as superscripts and resolve to a source list at the bottom of the card.",
    example: <ProvenanceExample />,
    usedOn: ["Requirements summary", "Bid intelligence", "Comment context"],
  },
  {
    number: "06",
    title: "Reversibility",
    description: "Every AI action is one-click undoable.",
    icon: Undo2,
    accent: "red",
    when:
      "Any AI-applied change that the user might not have seen yet. A countdown banner makes undo discoverable for ~30 seconds; after that the action is logged but still reversible from the activity feed.",
    example: <ReversibilityExample />,
    usedOn: ["Form pre-fill", "Renewal staging", "Agent-suggested edits"],
  },
  {
    number: "07",
    title: "Prompted vs autonomous distinction",
    description: "Background agents and on-demand agents look different.",
    icon: Bot,
    accent: "slate",
    when:
      "Any AI surface — orient the user on whether the agent is always running or waiting to be triggered. Autonomous agents get a live dot; on-demand agents get a Run button. Never the same affordance for both.",
    example: <PromptedVsAutonomousExample />,
    usedOn: ["Agent activity timeline", "Bid jurisdiction lookup (on-demand)"],
  },
  {
    number: "08",
    title: "Inline correction → learning",
    description:
      "User fixes AI output in place; the correction informs future suggestions.",
    icon: Pencil,
    accent: "violet",
    when:
      "Extraction, classification, or routing the user does often. Correcting the agent is the same gesture as editing any field — and we acknowledge it, so the user knows the model has noticed.",
    example: <InlineCorrectionExample />,
    usedOn: ["Comment triage routing", "Form auto-fill corrections"],
  },
  {
    number: "09",
    title: "Chat as fallback, not front door",
    description:
      "Pre-built views serve 90%; chat is the escape hatch for the long tail.",
    icon: Wand2,
    accent: "amber",
    when:
      "The user has a question the existing views don't answer — cross-portfolio queries, ad-hoc reporting. A floating affordance opens chat; the homepage stays a dashboard, not a prompt box.",
    example: <ChatFallbackExample />,
    usedOn: ["Cross-portfolio queries", "Ad-hoc reporting"],
  },
  {
    number: "10",
    title: "Agent activity timeline",
    description:
      'A separate "what the agents did today" log alongside human activity.',
    icon: Activity,
    accent: "emerald",
    when:
      "Orienting the user on background work they didn't witness. Each entry shows the agent, the action, what it touched, and a deep link — so trust is auditable rather than implicit.",
    example: <ActivityTimelineExample />,
    usedOn: ["Project Detail → Activity tab", "Daily digest"],
  },
]

export function AIPatternsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 pb-12">
      {/* Page header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 font-medium text-muted-foreground">
            <Cpu className="size-3" aria-hidden />
            Design notes
          </Badge>
          <span className="text-xs text-muted-foreground">
            v0.1 &middot; how AI shows up in the UI
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground">
            AI Interaction Patterns
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            How AI shows up in the product &mdash; the design rules we use so it feels
            trustworthy, recoverable, and never magical.
          </p>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-foreground/85">
          These patterns sit underneath every AI feature in PermitOps. They keep the
          experience honest about uncertainty, attribution, and what&rsquo;s automated
          vs. on-demand. The orientation is Permitflow&rsquo;s &ldquo;AI workforce&rdquo;
          framing: agents are coworkers with bounded responsibilities, not an oracle in
          a chat box.
        </p>
      </header>

      <Separator />

      {/* Pattern grid */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              The ten patterns
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Each pattern names a behaviour, when it applies, a small example of the
              surface, and where it lives in PermitOps today.
            </p>
          </div>
          <Badge variant="secondary" className="hidden font-medium sm:inline-flex">
            {patterns.length} patterns
          </Badge>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {patterns.map((p) => (
            <PatternCard key={p.number} pattern={p} />
          ))}
        </div>
      </section>

      {/* Closing note */}
      <section className="rounded-2xl border border-border/70 bg-muted/30 p-5">
        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-background text-muted-foreground">
            <Eye className="size-4" aria-hidden />
          </span>
          <div className="space-y-1.5">
            <h3 className="font-heading text-sm font-semibold text-foreground">
              How we&rsquo;ll know these are working
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Coordinators should be able to point at any AI-touched value and say who
              did it, how confident the model was, and how to fix it &mdash; without
              hunting through a side panel. If a usability session ever turns up the
              phrase &ldquo;wait, did I do that or did the agent?&rdquo;, the relevant
              pattern is missing or too quiet.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
