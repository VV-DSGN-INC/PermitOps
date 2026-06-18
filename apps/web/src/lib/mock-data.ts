// Shared mock data for the TeamHQ demo.
// All values are made up for the prototype; no real PII.

export type Person = {
  id: string
  name: string
  initials: string
  role: string
  email: string
}

export type Persona = {
  id: string
  name: string
  role: string
  company: string
  avatarSeed: string
  bio: string
  goals: string[]
  pains: string[]
  jobsToBeDone: string[]
  techComfort: 1 | 2 | 3 | 4 | 5
  quote: string
}

export type FlowStep = {
  title: string
  description: string
  surface: string
  agentBehind?: string
}

export type Flow = {
  id: string
  name: string
  persona: string
  outcome: string
  steps: FlowStep[]
}

export const people: Person[] = [
  { id: "u1", name: "Jasmine Diaz", initials: "JD", role: "Product manager", email: "jasmine@teamhq.app" },
  { id: "u2", name: "Sam Tran", initials: "ST", role: "Product designer", email: "sam@teamhq.app" },
  { id: "u3", name: "Marcus Hill", initials: "MH", role: "Engineer", email: "marcus@teamhq.app" },
  { id: "u4", name: "Priya Shah", initials: "PS", role: "Operations lead", email: "priya@teamhq.app" },
  { id: "u5", name: "Leo Park", initials: "LP", role: "Engineer", email: "leo@teamhq.app" },
  { id: "u6", name: "Reviewer", initials: "PO", role: "QA reviewer", email: "qa@teamhq.app" },
]

export const personas: Persona[] = [
  {
    id: "persona-1",
    name: "Sarah Chen",
    role: "Homeowner — first-time renovator",
    company: "Vancouver, BC · East Van bungalow",
    avatarSeed: "sarah-chen",
    bio:
      "Bought her first house two years ago. Wants to finish her attic into a home office plus guest room. Googled 'do I need a permit for an attic conversion in Vancouver' four times this month and got four different answers.",
    goals: [
      "Get a clear, accurate answer on what her project actually needs",
      "Know the real cost and timeline before she commits to anything",
      "Avoid expensive mistakes — fines, redo-work, insurance issues",
    ],
    pains: [
      "Municipal websites are written for contractors, not her — full of jargon she doesn't know",
      "Online answers contradict each other and feel unsafe to rely on",
      "Doesn't know what she doesn't know — terrified of missing something obvious",
    ],
    jobsToBeDone: [
      "Describe my project in plain language, get a plain-language answer back",
      "Decide confidently whether I can DIY this or need to hire help",
      "Hand the paperwork off so I can focus on my actual project",
    ],
    techComfort: 4,
    quote:
      "I don't need fancy. I need someone to tell me, in plain English, what I actually need to do — and to not be wrong.",
  },
  {
    id: "persona-2",
    name: "Miguel Reyes",
    role: "Homeowner — multi-project, immigrant family",
    company: "Surrey, BC · 1960s bungalow, three generations under one roof",
    avatarSeed: "miguel-reyes",
    bio:
      "Moved to Canada eight years ago. Just bought a place with his wife and parents. Wants to build a backyard shed, a detached garage, and a laneway house — eventually. English is his second language. He'll absolutely follow the rules — he just needs to know what they are.",
    goals: [
      "Do everything by the book — no fines, no inspector showing up unannounced",
      "Sequence three projects sensibly so he doesn't waste money or time",
      "Understand the forms without needing his daughter to translate every line",
    ],
    pains: [
      "Form language is hard even with a translator app",
      "Doesn't know which projects need permits and which don't — and Google is a coin flip",
      "Three separate projects feel like three separate problems; nobody scopes them together",
    ],
    jobsToBeDone: [
      "Tell the system what I want to build over the next 18 months and let it order things",
      "Get forms pre-filled with the info I already gave once",
      "Have someone smarter than me check my submission before it goes to the city",
    ],
    techComfort: 3,
    quote:
      "I just want to do this right. Tell me what's required and I'll do it. Don't make me guess.",
  },
  {
    id: "persona-3",
    name: "Tom Bryce",
    role: "Residential General Contractor",
    company: "Bryce Renovations — 5-person crew, North Vancouver",
    avatarSeed: "tom-bryce",
    bio:
      "Runs a small residential contracting business. 15–20 projects a year across the North Shore and Burnaby. Permit work is the worst part of his job — unbillable, slow, and a constant source of client friction.",
    goals: [
      "Cut the time he spends on permits per project from days to hours",
      "Stop fielding client phone calls asking 'is the permit done yet?'",
      "Quote new jurisdictions accurately without losing margin to admin",
    ],
    pains: [
      "Every municipality has its own quirks — no consistent process across his service area",
      "Clients ask for status three times a week; he doesn't have an easy way to share it",
      "When a submission gets rejected for a missing form, he eats the schedule slip",
    ],
    jobsToBeDone: [
      "File a permit for a known job type in under 30 minutes",
      "Give clients a read-only status page so they stop calling him",
      "Pre-validate every submission so he doesn't get bounced back",
    ],
    techComfort: 3,
    quote:
      "I'm a builder. I don't want to log into another portal. Just tell me what's missing and I'll fix it.",
  },
  {
    id: "persona-5",
    name: "Linda Ruiz",
    role: "Senior Plan Reviewer (counter-persona)",
    company: "City of Vancouver — Building Permits Office",
    avatarSeed: "linda-ruiz",
    bio:
      "20 years reviewing plan sets. Sees PermitOps users from the other side of the counter. Doesn't use the product directly but its quality affects her queue.",
    goals: [
      "Receive clean, complete submissions she can review on first pass",
      "Spend less time on incomplete applications from confused homeowners",
      "Communicate corrections in writing so they don't get lost in translation",
    ],
    pains: [
      "Most homeowner-filed applications have at least one missing form",
      "Applicants don't know which version of a form is current",
      "Corrections sent back get re-asked weeks later — applicant didn't understand",
    ],
    jobsToBeDone: [
      "Reject incomplete submissions before they hit her queue",
      "Confirm she's looking at the latest plan set",
      "Track which corrections an applicant has actually addressed",
    ],
    techComfort: 3,
    quote:
      "Half of what I do is tell people what they forgot. If the software caught it, I could review twice as many plans.",
  },
]

export const flows: Flow[] = [
  {
    id: "flow-discover",
    name: "Tell us what you want to renovate → know exactly what you need",
    persona: "Sarah Chen (Homeowner)",
    outcome:
      "Homeowner gets clear, plain-language answers — what permits are required, how much it'll cost, how long it'll take, what comes next — without giving up an email address. Free, fast, and trustworthy. Under 5 minutes.",
    steps: [
      {
        title: "First prompt: what are you renovating?",
        description:
          "No signup, no 'get started.' Single conversational prompt: 'What are you looking to renovate?' Sarah types 'I want to finish my attic into a bedroom and office.'",
        surface: "Landing → first-prompt input",
        agentBehind: "Intake",
      },
      {
        title: "Confirm location",
        description:
          "System detects city by geo-IP and confirms with Sarah ('Looks like you're in Vancouver, BC — yes?'). She corrects to Burnaby. Project anchors to the right AHJ.",
        surface: "Intake → location confirm",
        agentBehind: "Intake",
      },
      {
        title: "Clarify scope (2–3 questions max)",
        description:
          "Research agent asks only what changes the answer: 'Will the new bedroom be a separate suite (with kitchen)?' 'Will there be new plumbing?' Two questions, max. Not a 20-field form.",
        surface: "Intake → clarifying questions",
        agentBehind: "Research",
      },
      {
        title: "Show the answer in plain language",
        description:
          "Single page: 'For your attic conversion in Burnaby, you'll need a Building Permit plus an Electrical Permit. Estimated city fee: $1,400. Expected timeline: 8–12 weeks. Here's why, and here's what we'd need from you.' Citations link to the BC Building Code and the Burnaby bylaw.",
        surface: "Results page",
        agentBehind: "Research",
      },
      {
        title: "Decide: DIY or let us handle it",
        description:
          "Two clear paths. 'I want to file this myself' (downloads pre-filled forms + checklist, completely free). 'You handle it for me' (paid service, starts the engagement flow). No dark patterns nudging toward the paid path — Paul's explicit direction.",
        surface: "Results page → decision",
      },
    ],
  },
  {
    id: "flow-service",
    name: "Engage the service → permit in hand",
    persona: "Sarah Chen (Homeowner)",
    outcome:
      "Homeowner pays the service fee and hands the permit work off. We prepare submissions, validate before sending, submit to the city, manage correspondence, surface status, and deliver the approved permit. Hands-off real, with full transparency.",
    steps: [
      {
        title: "Confirm scope + service agreement",
        description:
          "Sarah reviews what we'll file on her behalf, confirms the project scope, signs a one-page service agreement. Service fee is shown upfront — no surprise charges.",
        surface: "Service intake → agreement",
        agentBehind: "Intake",
      },
      {
        title: "AI prepares the application",
        description:
          "Submission agent pre-fills every form from the project data Sarah already gave. Each field has an attribution chip and a source. Sarah reviews and approves; nothing fires without her confirmation.",
        surface: "Application → review",
        agentBehind: "Submission",
      },
      {
        title: "Pre-submission validation",
        description:
          "Before anything goes to the city, we check for missing forms, contradictions, version mismatches, common rejection triggers. Anything ambiguous gets flagged for Sarah with a plain-English explanation.",
        surface: "Application → validate step",
        agentBehind: "Submission",
      },
      {
        title: "Submit + track in real time",
        description:
          "We submit on Sarah's behalf. Status flips to 'With the City.' Coordination agent watches the AHJ portal and emails — every update surfaces in Sarah's status view with a timestamp and what it means.",
        surface: "Project status",
        agentBehind: "Coordination",
      },
      {
        title: "Translate reviewer comments → next action",
        description:
          "When the reviewer requests corrections, the agent translates the comment into plain English ('They need a sketch showing the new wall location') and drafts a response. Sarah confirms; we resubmit.",
        surface: "Status → comments thread",
        agentBehind: "Coordination",
      },
      {
        title: "Approved permit delivered",
        description:
          "Permit issued. Sarah gets a single email with the approved permit, what to post on-site, and what to expect from inspections. Done.",
        surface: "Status → completed",
        agentBehind: "Coordination",
      },
    ],
  },
  {
    id: "flow-multi-project",
    name: "Multi-project scoping → smart sequencing (and the GC handoff)",
    persona: "Miguel Reyes (Multi-project homeowner)",
    outcome:
      "Homeowner describes everything they want to do over the next 12–18 months. System scopes the projects together, surfaces dependencies, sequences them sensibly, and — when complexity crosses a threshold — suggests a general contractor instead of trying to be one.",
    steps: [
      {
        title: "Tell us everything you want to build",
        description:
          "Miguel describes three projects in one go: a backyard shed, a detached garage, and (eventually) a laneway house. System captures all three as a project bundle, not three isolated tickets.",
        surface: "Intake → multi-project drawer",
        agentBehind: "Intake",
      },
      {
        title: "Scope them together",
        description:
          "Research agent looks at all three projects against Miguel's address and surfaces what's possible: shed is permit-free under 100 sq ft, garage needs a Building Permit, laneway house needs rezoning + full submission. Dependencies surfaced visually.",
        surface: "Project bundle → scope view",
        agentBehind: "Research",
      },
      {
        title: "Sequence with reasons",
        description:
          "System proposes an order: shed first (no permit, fast win), garage second (needs setbacks confirmed), laneway last (needs rezoning, 12+ month process). Miguel can override; the agent explains why the order matters.",
        surface: "Project bundle → sequence",
        agentBehind: "Research",
      },
      {
        title: "Detect when it gets too big",
        description:
          "Laneway-house scope crosses the complexity threshold: rezoning, full architectural drawings, structural review, multiple trades. Agent surfaces a recommendation: 'For this one, you really want a general contractor to organize it. We can help you find one — we won't try to be one.'",
        surface: "Project bundle → GC handoff",
        agentBehind: "Research",
      },
      {
        title: "Hand off cleanly, keep tracking",
        description:
          "If Miguel chooses to engage a GC, we share the scope, sequence, and any submitted permits with the GC. Miguel still sees status on his dashboard — but the GC owns the filing.",
        surface: "Project bundle → GC link",
        agentBehind: "Coordination",
      },
    ],
  },
]
export const navigation = {
  todo: [
    { label: "My tasks", icon: "ListChecks", to: "/tasks" },
    { label: "Tasks", icon: "SquareKanban", to: "/board" },
  ],
  team: [
    { label: "Timeline", icon: "CalendarClock", to: "/team/timeline" },
    { label: "Members", icon: "Users", to: "/team/members" },
  ],
  notes: [
    { label: "Problem statement", icon: "Target", to: "/notes/problem" },
    { label: "Personas", icon: "User", to: "/notes/personas" },
    { label: "Key flows", icon: "Workflow", to: "/notes/flows" },
    { label: "Sitemap", icon: "Map", to: "/notes/sitemap" },
    { label: "AI patterns", icon: "Cpu", to: "/notes/ai-patterns" },
    { label: "AI opportunities", icon: "Sparkles", to: "/notes/ai-opportunities" },
  ],
} as const

export function getPerson(id: string): Person | undefined {
  return people.find((p) => p.id === id)
}
