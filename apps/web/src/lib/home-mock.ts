// Mock data for "PermitOps Home" — the homeowner edition.
// Single renovation, plain language, AI-led. Today is 2026-05-26.

export type HomePermitStatus =
  | "not_started"
  | "preparing"
  | "submitted"
  | "in_review"
  | "needs_info"
  | "approved"
  | "inspections"
  | "closed"

export type HomePermit = {
  id: string
  /** Friendly name shown everywhere */
  name: string
  /** One-line plain-language explanation of what this covers */
  whatItCovers: string
  status: HomePermitStatus
  /** Optional municipal number once submitted */
  permitNumber?: string
  applicationDate?: string
  /** Days until next municipality milestone (positive = future) */
  expectedReviewDays?: number
  /** Estimated fee in USD */
  fee?: number
  /** Whether the contractor pulls this one */
  pulledBy: "contractor" | "you"
  /** Items needed before submission */
  requirements: HomeRequirement[]
  /** Inspections that will happen after approval */
  inspections?: HomeInspection[]
}

export type HomeRequirement = {
  id: string
  label: string
  /** A friendly hint about what this is */
  helper: string
  status: "done" | "in_progress" | "todo" | "ai_can_help"
  /** If the AI can do/draft this for you */
  aiAssist?: string
  /** Optional uploaded filename */
  fileName?: string
}

export type HomeInspection = {
  id: string
  name: string
  whatTheyCheck: string
  /** Calendar date if scheduled */
  scheduledDate?: string
  status: "not_yet" | "scheduled" | "passed" | "failed"
}

export type HomeRenovation = {
  ownerName: string
  ownerInitials: string
  /** Address shown in chrome */
  address: string
  city: string
  state: string
  zip: string
  /** The renovation title */
  projectName: string
  /** Plain-language one-liner */
  projectSummary: string
  /** Renovation type chip */
  projectType: string
  /** Total budget, USD */
  budget: number
  startedOn: string
  /** Estimated finish date */
  targetFinishDate: string
  /** Overall progress 0-100 */
  progress: number
  /** Stage label */
  stage: "Planning" | "Permitting" | "Building" | "Inspections" | "Done"
  /** Contractor on the job */
  contractor: HomeContact
  /** Municipality reviewer (humanized) */
  municipalityHandler?: HomeContact
}

export type HomeContact = {
  name: string
  role: string
  initials: string
  phone?: string
  email?: string
  // Tailwind hue token used for the avatar background
  avatarTone: "indigo" | "amber" | "emerald" | "rose" | "slate"
}

export type AiSuggestion = {
  id: string
  /** Short headline, e.g. "Berkeley wants more detail on the gas line" */
  headline: string
  /** One short sentence explaining the situation */
  body: string
  /** What the user can do */
  primaryAction: string
  /** Optional secondary text */
  secondaryAction?: string
  /** Affinity to a permit/requirement */
  relatedPermitId?: string
  severity: "info" | "action" | "blocker"
}

export type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
  /** Optional inline references */
  references?: { label: string; permitId?: string }[]
  /** Optional follow-up chips shown after assistant message */
  followUps?: string[]
}

// ---- The renovation ---------------------------------------------------------

export const renovation: HomeRenovation = {
  ownerName: "Sarah Chen",
  ownerInitials: "SC",
  address: "1247 Larkspur Lane",
  city: "Berkeley",
  state: "CA",
  zip: "94703",
  projectName: "Kitchen remodel",
  projectSummary:
    "Open up the wall between the kitchen and dining room, move the sink, replace cabinets and appliances.",
  projectType: "Kitchen remodel",
  budget: 78_000,
  startedOn: "2026-04-08",
  targetFinishDate: "2026-08-15",
  progress: 38,
  stage: "Permitting",
  contractor: {
    name: "Lopez Construction",
    role: "General contractor",
    initials: "LC",
    phone: "(510) 555-0162",
    email: "miguel@lopezbuilds.com",
    avatarTone: "amber",
  },
  municipalityHandler: {
    name: "Berkeley Permit Service Center",
    role: "Plan reviewer",
    initials: "BP",
    email: "permits@berkeleyca.gov",
    avatarTone: "slate",
  },
}

// ---- Permits ----------------------------------------------------------------

export const permits: HomePermit[] = [
  {
    id: "building",
    name: "Building Permit",
    whatItCovers:
      "The structural changes — taking down the wall between the kitchen and dining room counts as structural, so Berkeley needs to sign off.",
    status: "in_review",
    permitNumber: "B2026-4471",
    applicationDate: "2026-05-04",
    expectedReviewDays: 9,
    fee: 1_840,
    pulledBy: "contractor",
    requirements: [
      {
        id: "site-plan",
        label: "Site plan",
        helper: "A drawing showing your lot and where the house sits.",
        status: "done",
        fileName: "1247-larkspur-site-plan.pdf",
      },
      {
        id: "floor-plan",
        label: "Floor plan (existing + proposed)",
        helper: "Two drawings: how the kitchen is today, and how it'll be after.",
        status: "done",
        fileName: "kitchen-floorplan-v3.pdf",
      },
      {
        id: "structural-letter",
        label: "Structural engineer letter",
        helper: "Because you're removing a wall. The engineer certifies it's safe.",
        status: "done",
        fileName: "vargas-engineering-stamp.pdf",
      },
      {
        id: "contractor-license",
        label: "Contractor's license proof",
        helper: "Lopez Construction's CSLB license, currently active.",
        status: "done",
        fileName: "lopez-cslb-current.pdf",
      },
      {
        id: "energy-form",
        label: "Title 24 energy compliance",
        helper: "California requires this for any room with new lighting or windows.",
        status: "ai_can_help",
        aiAssist: "I can fill this out from your plans. Takes about 2 minutes.",
      },
    ],
    inspections: [
      {
        id: "rough-frame",
        name: "Rough framing",
        whatTheyCheck:
          "After the wall comes down and new framing is up — before drywall.",
        status: "not_yet",
      },
      {
        id: "final",
        name: "Final inspection",
        whatTheyCheck:
          "Everything done: finishes, fixtures, the works. The sign-off.",
        status: "not_yet",
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical Permit",
    whatItCovers:
      "New circuits for the island outlets, the range, and recessed lighting. Pulled by your electrician under Lopez's umbrella.",
    status: "preparing",
    fee: 280,
    pulledBy: "contractor",
    requirements: [
      {
        id: "load-calc",
        label: "Load calculation",
        helper: "Shows your panel can handle the new circuits.",
        status: "in_progress",
      },
      {
        id: "one-line",
        label: "One-line diagram",
        helper: "A simple wiring map. Your electrician draws this.",
        status: "todo",
      },
    ],
    inspections: [
      {
        id: "elec-rough",
        name: "Electrical rough-in",
        whatTheyCheck: "Wiring in walls before they close up.",
        status: "not_yet",
      },
      {
        id: "elec-final",
        name: "Electrical final",
        whatTheyCheck: "Outlets, switches, and fixtures all working.",
        status: "not_yet",
      },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing Permit",
    whatItCovers: "Moving the sink and the dishwasher line.",
    status: "preparing",
    fee: 240,
    pulledBy: "contractor",
    requirements: [
      {
        id: "fixture-count",
        label: "Fixture count form",
        helper: "Just a count of sinks, dishwashers, etc. Quick form.",
        status: "ai_can_help",
        aiAssist: "I can fill this out — only one new sink, one dishwasher.",
      },
    ],
  },
  {
    id: "mechanical",
    name: "Mechanical Permit",
    whatItCovers:
      "The new range hood vent through the exterior wall. Needed because it changes the building envelope.",
    status: "not_started",
    fee: 175,
    pulledBy: "contractor",
    requirements: [
      {
        id: "vent-spec",
        label: "Vent specification",
        helper: "Which hood + how it vents outside.",
        status: "todo",
      },
    ],
  },
]

// ---- AI suggestions on the dashboard ----------------------------------------

export const aiSuggestions: AiSuggestion[] = [
  {
    id: "ai-1",
    headline: "Berkeley left a comment on your Building Permit",
    body:
      "They want a section drawing showing the new header above the removed wall. Your engineer (Vargas) already has this — I drafted a quick email asking him to send it directly to the city.",
    primaryAction: "Review draft email",
    secondaryAction: "Mark as handled",
    relatedPermitId: "building",
    severity: "action",
  },
  {
    id: "ai-2",
    headline: "I can finish your Title 24 energy form",
    body:
      "It needs the same window dimensions and recessed-light counts that are already on your floor plan. I'll fill it out and you just approve.",
    primaryAction: "Fill it out for me",
    relatedPermitId: "building",
    severity: "info",
  },
  {
    id: "ai-3",
    headline: "Heads up: Mechanical permit hasn't been started",
    body:
      "Lopez usually pulls this last, but it'll be needed before the range-hood install. No action today — just a watch item for late June.",
    primaryAction: "Remind me June 20",
    relatedPermitId: "mechanical",
    severity: "info",
  },
]

// ---- Pre-baked AI chat transcript -------------------------------------------

export const chatTranscript: ChatMessage[] = [
  {
    id: "m1",
    role: "user",
    content:
      "Why do I need a permit to take down a wall in my own house? It's not even a load-bearing one.",
  },
  {
    id: "m2",
    role: "assistant",
    content:
      "Berkeley requires a permit any time you change the footprint of a room — even non-bearing walls. It's about two things: (1) making sure no electrical or plumbing is hidden in the wall, and (2) keeping your home's insurance and resale clean. If a future buyer finds an un-permitted change, it can hold up a sale.\n\nThe good news: this is a small permit, and yours is already in review.",
    references: [{ label: "Your Building Permit", permitId: "building" }],
    followUps: [
      "How long will the review take?",
      "What happens if they ask for changes?",
      "Can I start demo before approval?",
    ],
  },
  {
    id: "m3",
    role: "user",
    content: "Can I start demo before approval?",
  },
  {
    id: "m4",
    role: "assistant",
    content:
      "Short answer: no, not the wall. Berkeley's policy is that any work covered by a permit-in-review can't begin until the permit is issued. If an inspector drives by and sees the wall down, they can red-tag the site, which means everything stops.\n\nWhat you *can* start: cabinet demo, appliance disconnect, and floor protection — none of that needs a permit. I'd hold off on the wall and electrical until you're approved (about 9 more days based on Berkeley's current queue).",
    followUps: [
      "What does red-tagged mean?",
      "Email Lopez to confirm the schedule",
    ],
  },
]

export const suggestedPrompts: string[] = [
  "How long until my permit is approved?",
  "What do I do during the inspection?",
  "Walk me through what happens next",
  "Did Lopez send everything they were supposed to?",
]

// ---- Helpers ----------------------------------------------------------------

export function getPermit(id: string): HomePermit | undefined {
  return permits.find((p) => p.id === id)
}

export const homeStatusLabel: Record<HomePermitStatus, string> = {
  not_started: "Not started",
  preparing: "Getting ready",
  submitted: "Submitted",
  in_review: "Berkeley is reviewing",
  needs_info: "Needs your input",
  approved: "Approved",
  inspections: "Inspections",
  closed: "Done",
}

/** A short human "what stage are we in" label for the dashboard */
export const homeStatusBlurb: Record<HomePermitStatus, string> = {
  not_started: "Hasn't been started yet",
  preparing: "Lopez is putting the paperwork together",
  submitted: "Berkeley has the application",
  in_review: "Berkeley is reading through your plans",
  needs_info: "Berkeley needs something from you",
  approved: "Cleared to start work",
  inspections: "Inspectors checking the work",
  closed: "Finished and filed",
}

/** Format a USD amount as $1,840 */
export function formatMoney(n: number): string {
  return `$${n.toLocaleString("en-US")}`
}

/** Format a YYYY-MM-DD as "May 4" */
export function formatShortDate(iso: string): string {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}
