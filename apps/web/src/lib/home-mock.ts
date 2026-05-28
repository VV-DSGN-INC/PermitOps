// Mock data for "PermitOps Home" — the homeowner edition.
// One owner with several projects in different stages, plain language, AI-led.
// Today is 2026-05-26.

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
  /** Document preview metadata — rendered as a small thumbnail tile. */
  preview?: {
    /** Title shown large on the preview (usually the doc type) */
    title: string
    /** Optional small subtitle (e.g. the project name or version) */
    subtitle?: string
    /** Color tint for the tile background — tailwind hue (defaults to slate). */
    tint?: "slate" | "indigo" | "amber" | "emerald" | "rose"
  }
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
  stage: "Planning" | "Permitting" | "Building" | "Inspections" | "Done" | string
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

export type ProjectPhotoKind = "progress" | "reference" | "inspiration" | "existing"

export type ProjectPhoto = {
  id: string
  kind: ProjectPhotoKind
  /** Image URL — use a deterministic placeholder strategy that works offline. */
  url: string
  /** Optional caption shown on hover / under the image */
  caption?: string
  /** Optional dominant color for skeleton/placeholder background, css hex */
  color?: string
}

export type AiSuggestion = {
  id: string
  /** Short headline, e.g. "Burnaby wants more detail on the gas line" */
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

// ---- Owner + projects -------------------------------------------------------

export type Owner = {
  name: string
  initials: string
  address: string
  city: string
  state: string
  zip: string
}

export type ProjectStatus = "planning" | "active" | "completed"
export type ProjectKind = "renovation" | "addition" | "new_build" | "outdoor"

export type HomeProject = {
  id: string
  name: string
  summary: string
  kind: ProjectKind
  status: ProjectStatus
  /** Exactly one project is featured on the dashboard */
  featured: boolean
  /** Lucide icon name, resolved client-side */
  icon: string
  budget: number
  startedOn?: string
  targetFinishDate?: string
  progress?: number
  stage: string
  contractor?: HomeContact
  municipalityHandler?: HomeContact
  permits: HomePermit[]
  /** Photos for the project — progress shots, references, inspiration, etc. */
  photos?: ProjectPhoto[]
}

export const owner: Owner = {
  name: "Sarah Chen",
  initials: "SC",
  address: "1247 Larkspur Lane",
  city: "Burnaby",
  state: "BC",
  zip: "V5A 3M2",
}

// Contacts reused across projects.
const lopezConstruction: HomeContact = {
  name: "Lopez Construction",
  role: "General contractor",
  initials: "LC",
  phone: "(604) 555-0162",
  email: "miguel@lopezbuilds.ca",
  avatarTone: "amber",
}

const burnabyPermitCenter: HomeContact = {
  name: "Burnaby Permit Service Center",
  role: "Plan reviewer",
  initials: "BP",
  email: "permits@burnaby.ca",
  avatarTone: "slate",
}

// Permits belonging to the featured kitchen project — kept as a local const so
// `renovation` and `permits` derivations stay aligned with the project entry.
const kitchenPermits: HomePermit[] = [
  {
    id: "building",
    name: "Building Permit",
    whatItCovers:
      "The structural changes — taking down the wall between the kitchen and dining room counts as structural, so Burnaby needs to sign off.",
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
        preview: {
          title: "Site plan",
          subtitle: "1247 Larkspur Lane",
          tint: "slate",
        },
      },
      {
        id: "floor-plan",
        label: "Floor plan (existing + proposed)",
        helper: "Two drawings: how the kitchen is today, and how it'll be after.",
        status: "done",
        fileName: "kitchen-floorplan-v3.pdf",
        preview: {
          title: "Floor plan",
          subtitle: "Kitchen · v3",
          tint: "indigo",
        },
      },
      {
        id: "structural-letter",
        label: "Structural engineer letter",
        helper: "Because you're removing a wall. The engineer certifies it's safe.",
        status: "done",
        fileName: "vargas-engineering-stamp.pdf",
        preview: {
          title: "Engineer letter",
          subtitle: "Vargas Engineering",
          tint: "amber",
        },
      },
      {
        id: "contractor-license",
        label: "Contractor's license proof",
        helper: "Lopez Construction's BC business licence, currently active.",
        status: "done",
        fileName: "lopez-bc-licence-current.pdf",
        preview: {
          title: "BC business licence",
          subtitle: "Lopez Construction",
          tint: "emerald",
        },
      },
      {
        id: "energy-form",
        label: "Energy Step Code compliance (BCBC §9.36)",
        helper: "BC requires this for any room with new lighting, insulation, or windows.",
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

// ---- Projects (display order = declaration order) ---------------------------

// Photo URLs point to curated Unsplash photos served via the
// `images.unsplash.com` CDN. The query string crops + compresses on the fly so
// every project tile stays a consistent 640×480.

export const projects: HomeProject[] = [
  {
    id: "kitchen",
    name: "Kitchen remodel",
    summary:
      "Open up the wall between the kitchen and dining room, move the sink, replace cabinets and appliances.",
    kind: "renovation",
    status: "active",
    featured: true,
    icon: "ChefHat",
    budget: 78_000,
    startedOn: "2026-04-08",
    targetFinishDate: "2026-08-15",
    progress: 38,
    stage: "Permitting",
    contractor: lopezConstruction,
    municipalityHandler: burnabyPermitCenter,
    permits: kitchenPermits,
    photos: [
      {
        id: "kitchen-before",
        kind: "existing",
        url: "https://images.unsplash.com/photo-1661458079058-dff4d487c7f0?w=640&h=480&fit=crop&q=80",
        caption: "The kitchen as it stands today — small galley with the old stove and tired cabinets.",
        color: "#c9bfae",
      },
      {
        id: "kitchen-demo",
        kind: "progress",
        url: "https://images.unsplash.com/photo-1768321901750-f7b96d774456?w=640&h=480&fit=crop&q=80",
        caption: "Wall down, studs exposed. The moment before everything gets closed up again.",
        color: "#a89e8a",
      },
      {
        id: "kitchen-prog-1",
        kind: "progress",
        url: "https://images.unsplash.com/photo-1768321910296-004afb7228cd?w=640&h=480&fit=crop&q=80",
        caption: "Framing and rough work in around the new opening.",
        color: "#b8b1a3",
      },
      {
        id: "kitchen-target",
        kind: "inspiration",
        url: "https://images.unsplash.com/photo-1682888813789-c39fe30921e2?w=640&h=480&fit=crop&q=80",
        caption: "Target look — bright island, white cabinets, open to the dining room.",
        color: "#d4cab6",
      },
      {
        id: "kitchen-inspo",
        kind: "inspiration",
        url: "https://images.unsplash.com/photo-1682888813913-e13f18692019?w=640&h=480&fit=crop&q=80",
        caption: "Stone-topped island with pendants — the vibe we're after.",
        color: "#9ea99e",
      },
    ],
  },
  {
    id: "bathroom",
    name: "Main bathroom refresh",
    summary:
      "Replace the vanity, retile the floor and shower surround, swap lighting and the toilet. Considering moving the linen closet.",
    kind: "renovation",
    status: "planning",
    featured: false,
    icon: "Bath",
    budget: 22_000,
    stage: "Scoping",
    permits: [],
    photos: [
      {
        id: "bath-current",
        kind: "existing",
        url: "https://images.unsplash.com/photo-1650315534102-3ca1e51d41c5?w=640&h=480&fit=crop&q=80",
        caption: "Bathroom today — original toilet and builder vanity, ready for a refresh.",
        color: "#cfc6b6",
      },
      {
        id: "bath-inspo-1",
        kind: "inspiration",
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=640&h=480&fit=crop&q=80",
        caption: "Walk-in shower and clean vanity — the direction we like.",
        color: "#aebac1",
      },
      {
        id: "bath-inspo-2",
        kind: "inspiration",
        url: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?w=640&h=480&fit=crop&q=80",
        caption: "Big tub next to a glass walk-in shower — light and airy.",
        color: "#8d9aa0",
      },
    ],
  },
  {
    id: "shed",
    name: "Backyard shed",
    summary:
      "8×10 storage shed off the back fence. Probably under the Burnaby permit threshold but want to confirm.",
    kind: "outdoor",
    status: "planning",
    featured: false,
    icon: "Warehouse",
    budget: 8_000,
    stage: "Planning",
    permits: [],
    photos: [
      {
        id: "shed-1",
        kind: "reference",
        url: "https://images.unsplash.com/photo-1636481778186-ec8533c45749?w=640&h=480&fit=crop&q=80",
        caption: "Simple gable shed with a single door and window — similar footprint to ours.",
        color: "#a8a797",
      },
      {
        id: "shed-2",
        kind: "reference",
        url: "https://images.unsplash.com/photo-1760634533837-b9022d12dc47?w=640&h=480&fit=crop&q=80",
        caption: "Weathered wood-clad shed with the doors thrown open — character we like.",
        color: "#7e8a78",
      },
      {
        id: "shed-3",
        kind: "reference",
        url: "https://images.unsplash.com/photo-1573033370655-f6e3887c575d?w=640&h=480&fit=crop&q=80",
        caption: "Classic shingle shed with painted siding — proves the small footprint works.",
        color: "#9e9683",
      },
    ],
  },
  {
    id: "deck",
    name: "Backyard deck addition",
    summary:
      "12×16 deck off the kitchen sliding door. Over 24\" off grade so definitely a permit.",
    kind: "addition",
    status: "planning",
    featured: false,
    icon: "TreeDeciduous",
    budget: 15_000,
    stage: "Planning",
    permits: [],
    photos: [
      {
        id: "deck-back-yard",
        kind: "existing",
        url: "https://images.unsplash.com/photo-1729058015948-592a8e4a1772?w=640&h=480&fit=crop&q=80",
        caption: "Backyard before the deck — grass running out to the fence.",
        color: "#8a957d",
      },
      {
        id: "deck-ref-1",
        kind: "reference",
        url: "https://images.unsplash.com/photo-1773979638724-c6ffed7fe0de?w=640&h=480&fit=crop&q=80",
        caption: "Cedar deck stepping down to a grassy yard — close to what we want off the kitchen.",
        color: "#a89a82",
      },
      {
        id: "deck-ref-2",
        kind: "reference",
        url: "https://images.unsplash.com/photo-1695550056778-de79c8cd909e?w=640&h=480&fit=crop&q=80",
        caption: "Composite deck with a table and umbrella — easy upkeep.",
        color: "#8e94a0",
      },
      {
        id: "deck-ref-3",
        kind: "reference",
        url: "https://images.unsplash.com/photo-1759693449990-09064d363638?w=640&h=480&fit=crop&q=80",
        caption: "Built-in bench seating along the perimeter — saves on patio furniture.",
        color: "#9a8c75",
      },
    ],
  },
]

// ---- Backward-compatible derivations ----------------------------------------
// Other pages (home-permit-detail, home-welcome, home-shell) still import
// `renovation` and `permits`. Derive them from the featured project so we don't
// have to change those files.

const featuredProject = projects.find((p) => p.featured)!

export const renovation: HomeRenovation = {
  ownerName: owner.name,
  ownerInitials: owner.initials,
  address: owner.address,
  city: owner.city,
  state: owner.state,
  zip: owner.zip,
  projectName: featuredProject.name,
  projectSummary: featuredProject.summary,
  projectType: featuredProject.name,
  budget: featuredProject.budget,
  startedOn: featuredProject.startedOn!,
  targetFinishDate: featuredProject.targetFinishDate!,
  progress: featuredProject.progress!,
  stage: featuredProject.stage,
  contractor: featuredProject.contractor!,
  municipalityHandler: featuredProject.municipalityHandler,
}

export const permits: HomePermit[] = featuredProject.permits

// ---- AI suggestions on the dashboard ----------------------------------------

export const aiSuggestions: AiSuggestion[] = [
  {
    id: "ai-1",
    headline: "Burnaby left a comment on your Building Permit",
    body:
      "They want a section drawing showing the new header above the removed wall. Your engineer (Vargas) already has this — I drafted a quick email asking him to send it directly to the city.",
    primaryAction: "Review draft email",
    secondaryAction: "Mark as handled",
    relatedPermitId: "building",
    severity: "action",
  },
  {
    id: "ai-2",
    headline: "I can finish your Energy Step Code form",
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
      "Burnaby requires a permit any time you change the footprint of a room — even non-bearing walls. It's about two things: (1) making sure no electrical or plumbing is hidden in the wall, and (2) keeping your home's insurance and resale clean. If a future buyer finds an un-permitted change, it can hold up a sale.\n\nThe good news: this is a small permit, and yours is already in review.",
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
      "Short answer: no, not the wall. Burnaby's policy is that any work covered by a permit-in-review can't begin until the permit is issued. If an inspector drives by and sees the wall down, they can red-tag the site, which means everything stops.\n\nWhat you *can* start: cabinet demo, appliance disconnect, and floor protection — none of that needs a permit. I'd hold off on the wall and electrical until you're approved (about 9 more days based on Burnaby's current queue).",
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
  // Search across every project so a future caller can request any permit by id.
  for (const project of projects) {
    const match = project.permits.find((p) => p.id === id)
    if (match) return match
  }
  return undefined
}

export const homeStatusLabel: Record<HomePermitStatus, string> = {
  not_started: "Not started",
  preparing: "Getting ready",
  submitted: "Submitted",
  in_review: "Burnaby is reviewing",
  needs_info: "Needs your input",
  approved: "Approved",
  inspections: "Inspections",
  closed: "Done",
}

/** A short human "what stage are we in" label for the dashboard */
export const homeStatusBlurb: Record<HomePermitStatus, string> = {
  not_started: "Hasn't been started yet",
  preparing: "Lopez is putting the paperwork together",
  submitted: "Burnaby has the application",
  in_review: "Burnaby is reading through your plans",
  needs_info: "Burnaby needs something from you",
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

// ---- Calendar -------------------------------------------------------------
// Agenda events derived from the projects + AI suggestions. Today is fixed at
// 2026-05-26 so the schedule renders deterministically in the demo.

export type CalendarEventKind = "milestone" | "inspection" | "todo"

export type CalendarEvent = {
  id: string
  /** ISO yyyy-mm-dd */
  date: string
  projectId: string
  permitId?: string
  kind: CalendarEventKind
  title: string
  note?: string
}

const TODAY_ISO = "2026-05-26"

/** Add `days` to a yyyy-mm-dd string and return the resulting yyyy-mm-dd. */
function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T12:00:00Z")
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

/**
 * Build the agenda. Pulls events from three sources:
 *   - permit milestones (submitted / decision / approved / target submission)
 *   - inspections (scheduled or projected from permit timing)
 *   - to-dos synthesized from `aiSuggestions` (action + blocker only)
 * Plus a small hand-authored set for the planning-stage projects so the
 * calendar feels alive even before their permits exist.
 */
export function getCalendarEvents(): CalendarEvent[] {
  const events: CalendarEvent[] = []

  for (const project of projects) {
    for (const permit of project.permits) {
      // 1a. Submission milestone
      if (permit.applicationDate) {
        events.push({
          id: `m-${project.id}-${permit.id}-submitted`,
          date: permit.applicationDate,
          projectId: project.id,
          permitId: permit.id,
          kind: "milestone",
          title: `${permit.name} submitted to Burnaby`,
          note: permit.permitNumber
            ? `Filed as #${permit.permitNumber}.`
            : "Application package sent off.",
        })
      }

      // 1b. In-review → expected decision
      if (permit.status === "in_review" && permit.expectedReviewDays) {
        events.push({
          id: `m-${project.id}-${permit.id}-decision`,
          date: addDays(TODAY_ISO, permit.expectedReviewDays),
          projectId: project.id,
          permitId: permit.id,
          kind: "milestone",
          title: `Expected decision on ${permit.name}`,
          note: "Burnaby's queue usually moves on this timeline.",
        })
      }

      // 1c. Approved → milestone roughly 30 days after submission
      if (permit.status === "approved" && permit.applicationDate) {
        events.push({
          id: `m-${project.id}-${permit.id}-approved`,
          date: addDays(permit.applicationDate, 30),
          projectId: project.id,
          permitId: permit.id,
          kind: "milestone",
          title: `${permit.name} approved`,
          note: "Cleared to start work.",
        })
      }

      // 1d. Preparing → target submission in ~10 days
      if (permit.status === "preparing") {
        events.push({
          id: `m-${project.id}-${permit.id}-target`,
          date: addDays(TODAY_ISO, 10),
          projectId: project.id,
          permitId: permit.id,
          kind: "milestone",
          title: `Target: submit ${permit.name}`,
          note: "Lopez is finishing the paperwork.",
        })
      }

      // 2. Inspections — use scheduled date if present, else project from review
      const inspections = permit.inspections ?? []
      const baseISO =
        permit.status === "in_review" && permit.expectedReviewDays
          ? addDays(TODAY_ISO, permit.expectedReviewDays)
          : permit.applicationDate
            ? addDays(permit.applicationDate, 14)
            : addDays(TODAY_ISO, 21)

      inspections.forEach((insp, idx) => {
        // The inspection names already read like inspection labels ("Rough
        // framing", "Final inspection") — don't append " inspection" again.
        if (insp.status === "scheduled" && insp.scheduledDate) {
          events.push({
            id: `i-${project.id}-${permit.id}-${insp.id}`,
            date: insp.scheduledDate,
            projectId: project.id,
            permitId: permit.id,
            kind: "inspection",
            title: insp.name,
            note: insp.whatTheyCheck,
          })
        } else if (insp.status === "not_yet") {
          // Stagger: first inspection ~6 weeks out, second ~12 weeks out.
          const offset = idx === 0 ? 42 : 84
          events.push({
            id: `i-${project.id}-${permit.id}-${insp.id}`,
            date: addDays(baseISO, offset),
            projectId: project.id,
            permitId: permit.id,
            kind: "inspection",
            title: `${insp.name} (projected)`,
            note: insp.whatTheyCheck,
          })
        }
      })
    }
  }

  // 3. To-dos from AI suggestions
  for (const s of aiSuggestions) {
    if (s.severity !== "action" && s.severity !== "blocker") continue
    const days = s.severity === "blocker" ? 1 : 3
    // Find which project owns the related permit, if any.
    let projectId = projects[0]!.id
    if (s.relatedPermitId) {
      for (const p of projects) {
        if (p.permits.some((perm) => perm.id === s.relatedPermitId)) {
          projectId = p.id
          break
        }
      }
    }
    events.push({
      id: `t-${s.id}`,
      date: addDays(TODAY_ISO, days),
      projectId,
      permitId: s.relatedPermitId,
      kind: "todo",
      title: s.headline,
      note: s.primaryAction,
    })
  }

  // 4. Hand-authored items for planning-stage projects so the agenda isn't
  //    dominated by kitchen events.
  events.push(
    {
      id: "t-bathroom-scope",
      date: addDays(TODAY_ISO, 7),
      projectId: "bathroom",
      kind: "todo",
      title: "Scope your bathroom refresh with the AI",
      note: "I'll walk you through the choices that drive cost and permits.",
    },
    {
      id: "m-shed-research",
      date: addDays(TODAY_ISO, 5),
      projectId: "shed",
      kind: "milestone",
      title: "Confirm shed permit threshold",
      note: "Burnaby exempts sheds under 10 m². Yours is right at the line.",
    },
    {
      id: "m-deck-consult",
      date: addDays(TODAY_ISO, 14),
      projectId: "deck",
      kind: "milestone",
      title: "Permit consultation booked for the deck",
      note: "Burnaby pre-application call — confirm setbacks and guardrail spec.",
    },
    {
      id: "t-deck-contractor",
      date: addDays(TODAY_ISO, 21),
      projectId: "deck",
      kind: "todo",
      title: "Pick a contractor for the deck",
      note: "I'll shortlist three local builders with deck experience.",
    },
    {
      id: "m-bathroom-budget",
      date: addDays(TODAY_ISO, 28),
      projectId: "bathroom",
      kind: "milestone",
      title: "Finalize bathroom budget + scope",
      note: "Decision point: vanity-only refresh vs. moving the linen closet.",
    },
  )

  // Sort ascending by date, then by kind for stable ordering on the same day.
  const KIND_ORDER: Record<CalendarEventKind, number> = {
    milestone: 0,
    inspection: 1,
    todo: 2,
  }
  events.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? -1 : 1
    return KIND_ORDER[a.kind] - KIND_ORDER[b.kind]
  })

  return events
}

/** Today as a yyyy-mm-dd, exposed so the calendar page can compare cleanly. */
export const HOME_TODAY_ISO = TODAY_ISO

/** Format a yyyy-mm-dd as e.g. "Wed · May 28". */
export function formatAgendaDay(iso: string): string {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
}
