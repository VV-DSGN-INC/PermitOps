// Shared mock data for the PermitOps demo.
// All values are made up for the prototype; no real PII.

export type PermitStatus =
  | "preparing"
  | "submitted"
  | "in_review"
  | "comments"
  | "approved"
  | "issued"
  | "expiring"
  | "expired"
  | "closed"

export type ProjectStatus =
  | "intake"
  | "permit_pending"
  | "permit_issued"
  | "in_construction"
  | "inactive"

export type ProjectType =
  | "Commercial"
  | "Residential"
  | "Signage"
  | "General Improvements"
  | "Industrial"

export type Municipality = {
  id: string
  name: string
  jurisdictionType: "City" | "County" | "City-County" | "State"
  state: string
}

export type Person = {
  id: string
  name: string
  initials: string
  role: string
  email: string
}

export type Project = {
  id: string
  code: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  municipalities: string[]
  types: ProjectType[]
  customer?: string
  team: string[]
  status: ProjectStatus
  createdAt: string
  updatedAt: string
  dueAt?: string
  expiresAt?: string
}

export type Permit = {
  id: string
  permitNumber: string
  name: string
  projectId: string
  status: PermitStatus
  tags: string[]
  issuingMunicipalityId: string
  submitterId: string
  assigneeIds: string[]
  reviewerIds: string[]
  startDate?: string
  applicationDate?: string
  dueDate?: string
  issuedDate?: string
  closeOutDate?: string
  expirationDate?: string
  billDate?: string
  description?: string
}

export type RequiredForm = {
  id: string
  name: string
  submissionRequired: boolean
  externalInputs: boolean
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

export type Assumption = {
  id: string
  category: "Market" | "User" | "Technical" | "Design"
  title: string
  body: string
  confidence: "Low" | "Medium" | "High"
  evidence: string
}

export const municipalities: Municipality[] = [
  { id: "sf-city", name: "San Francisco, CA", jurisdictionType: "City-County", state: "CA" },
  { id: "atl-city", name: "Atlanta, GA", jurisdictionType: "City", state: "GA" },
  { id: "miami-city", name: "Miami, FL", jurisdictionType: "City", state: "FL" },
  { id: "miami-county", name: "Miami-Dade County, FL", jurisdictionType: "County", state: "FL" },
  { id: "boston-city", name: "Boston, MA", jurisdictionType: "City", state: "MA" },
  { id: "balharbour-city", name: "Bal Harbour, FL", jurisdictionType: "City", state: "FL" },
  { id: "norfolk-city", name: "Norfolk, VA", jurisdictionType: "City", state: "VA" },
  { id: "adelanto-city", name: "Adelanto, CA", jurisdictionType: "City", state: "CA" },
  { id: "caryville-city", name: "Caryville, FL", jurisdictionType: "City", state: "FL" },
]

export const people: Person[] = [
  { id: "u1", name: "Jasmine Diaz", initials: "JD", role: "Project Manager", email: "jasmine@permitops.demo" },
  { id: "u2", name: "Sam Tran", initials: "ST", role: "Permit Coordinator", email: "sam@permitops.demo" },
  { id: "u3", name: "Marcus Hill", initials: "MH", role: "Architect", email: "marcus@permitops.demo" },
  { id: "u4", name: "Priya Shah", initials: "PS", role: "Operations Lead", email: "priya@permitops.demo" },
  { id: "u5", name: "Leo Park", initials: "LP", role: "Field Supervisor", email: "leo@permitops.demo" },
  { id: "u6", name: "Reviewer Bot", initials: "PO", role: "Municipal Reviewer", email: "muni@permitops.demo" },
]

export const projects: Project[] = [
  {
    id: "p1",
    code: "3EEC8",
    name: "Mission District Office Fit-Out",
    address: "121 7th Ave",
    city: "San Francisco",
    state: "CA",
    zip: "94532",
    municipalities: ["sf-city"],
    types: ["Commercial"],
    team: ["u1"],
    status: "permit_pending",
    createdAt: "2026-05-22",
    updatedAt: "2026-05-26",
    dueAt: "2026-09-22",
  },
  {
    id: "p2",
    code: "E7742",
    name: "Riverside Cafe Interior Refresh",
    address: "1518 Washington St",
    city: "Atlanta",
    state: "GA",
    zip: "30301",
    municipalities: ["atl-city"],
    types: ["General Improvements"],
    team: [],
    status: "inactive",
    createdAt: "2026-01-12",
    updatedAt: "2026-05-26",
  },
  {
    id: "p3",
    code: "51881",
    name: "Brickell Office Space Upgrade",
    address: "1767 Maple Ave",
    city: "Miami",
    state: "FL",
    zip: "33101",
    municipalities: ["miami-city", "miami-county"],
    types: ["General Improvements"],
    team: ["u4"],
    status: "permit_issued",
    createdAt: "2026-01-22",
    updatedAt: "2026-05-26",
    expiresAt: "2027-05-01",
  },
  {
    id: "p4",
    code: "BA4A5",
    name: "Beacon Hill Drive-thru Remodel",
    address: "137 Park Ave",
    city: "Boston",
    state: "MA",
    zip: "02101",
    municipalities: ["boston-city"],
    types: ["General Improvements"],
    team: ["u3"],
    status: "permit_pending",
    createdAt: "2026-01-25",
    updatedAt: "2026-05-26",
    dueAt: "2026-04-02",
  },
  {
    id: "p5",
    code: "25F31",
    name: "Bal Harbour Commercial Tenant Improvement",
    address: "1510 3rd Ave",
    city: "Bal Harbour",
    state: "FL",
    zip: "23242",
    municipalities: ["balharbour-city", "miami-county"],
    types: ["General Improvements", "Commercial", "Signage"],
    team: ["u1"],
    status: "permit_pending",
    createdAt: "2026-04-22",
    updatedAt: "2026-05-26",
    dueAt: "2026-09-22",
  },
  {
    id: "p6",
    code: "D69DF",
    name: "Holden Manufacturing Facility CTI",
    address: "12 W 19th St",
    city: "San Francisco",
    state: "CA",
    zip: "85302",
    municipalities: ["sf-city"],
    types: ["General Improvements", "Industrial"],
    team: ["u2"],
    status: "permit_pending",
    createdAt: "2026-05-25",
    updatedAt: "2026-05-25",
    dueAt: "2026-12-12",
  },
  {
    id: "p7",
    code: "5D6D1",
    name: "Solar Panel Installation — Norfolk Site",
    address: "361 Pine Dr",
    city: "Norfolk",
    state: "VA",
    zip: "23324",
    municipalities: ["norfolk-city"],
    types: ["Signage"],
    team: ["u1"],
    status: "permit_pending",
    createdAt: "2026-01-26",
    updatedAt: "2026-05-19",
    dueAt: "2026-05-11",
  },
  {
    id: "p8",
    code: "37522",
    name: "John's Roastery Build-out",
    address: "121 7th Ave",
    city: "San Francisco",
    state: "CA",
    zip: "95232",
    municipalities: ["sf-city"],
    types: ["Commercial"],
    team: ["u4"],
    status: "permit_pending",
    createdAt: "2026-05-13",
    updatedAt: "2026-05-19",
    dueAt: "2026-09-22",
  },
  {
    id: "p9",
    code: "E455D",
    name: "Gemma's Residential Remodel",
    address: "121 7th Ave",
    city: "San Francisco",
    state: "CA",
    zip: "92323",
    municipalities: ["sf-city"],
    types: ["Residential"],
    customer: "Hill Architects",
    team: ["u1", "u2"],
    status: "permit_pending",
    createdAt: "2026-05-13",
    updatedAt: "2026-05-19",
    dueAt: "2026-08-22",
  },
  {
    id: "p10",
    code: "39DCB",
    name: "Evan's Bayside Remodel",
    address: "1510 7th Ave",
    city: "San Francisco",
    state: "CA",
    zip: "95045",
    municipalities: ["sf-city"],
    types: ["General Improvements"],
    team: ["u5"],
    status: "permit_pending",
    createdAt: "2026-05-14",
    updatedAt: "2026-05-14",
    dueAt: "2026-09-22",
  },
]

export const permits: Permit[] = [
  {
    id: "pm1",
    permitNumber: "B2026-1122",
    name: "Building Permit",
    projectId: "p1",
    status: "preparing",
    tags: ["Walls"],
    issuingMunicipalityId: "sf-city",
    submitterId: "u1",
    assigneeIds: [],
    reviewerIds: [],
    description:
      "Tenant fit-out for a 12,000 sqft office floor. Includes interior partitions, low-voltage rough-in, and ADA upgrades to two restrooms.",
  },
  {
    id: "pm2",
    permitNumber: "C12AB",
    name: "Commercial Tenant Improvement",
    projectId: "p8",
    status: "preparing",
    tags: ["Electrical"],
    issuingMunicipalityId: "sf-city",
    submitterId: "u4",
    assigneeIds: ["u4"],
    reviewerIds: [],
    description: "Espresso bar and roastery buildout with venting and mechanical scope.",
  },
  {
    id: "pm3",
    permitNumber: "21-3037",
    name: "Roofing Permit",
    projectId: "p2",
    status: "submitted",
    tags: ["Roof"],
    issuingMunicipalityId: "atl-city",
    submitterId: "u4",
    assigneeIds: ["u4"],
    reviewerIds: ["u6"],
    applicationDate: "2026-04-12",
  },
  {
    id: "pm4",
    permitNumber: "1376798",
    name: "Electrical Permit",
    projectId: "p3",
    status: "approved",
    tags: ["Electrical"],
    issuingMunicipalityId: "sf-city",
    submitterId: "u4",
    assigneeIds: ["u4"],
    reviewerIds: ["u6"],
    issuedDate: "2026-03-18",
  },
  {
    id: "pm5",
    permitNumber: "B2026-7841",
    name: "Building Permit",
    projectId: "p5",
    status: "in_review",
    tags: ["Site"],
    issuingMunicipalityId: "balharbour-city",
    submitterId: "u1",
    assigneeIds: ["u1"],
    reviewerIds: ["u6"],
    applicationDate: "2026-05-02",
  },
  {
    id: "pm6",
    permitNumber: "S-2026-118",
    name: "Sign Permit",
    projectId: "p5",
    status: "comments",
    tags: ["Signage"],
    issuingMunicipalityId: "balharbour-city",
    submitterId: "u1",
    assigneeIds: ["u1"],
    reviewerIds: ["u6"],
    applicationDate: "2026-04-18",
  },
  {
    id: "pm7",
    permitNumber: "E-2026-552",
    name: "Solar Electrical Permit",
    projectId: "p7",
    status: "in_review",
    tags: ["Electrical", "Solar"],
    issuingMunicipalityId: "norfolk-city",
    submitterId: "u1",
    assigneeIds: ["u1"],
    reviewerIds: ["u6"],
    applicationDate: "2026-04-30",
    dueDate: "2026-05-11",
  },
  {
    id: "pm8",
    permitNumber: "P-2026-991",
    name: "Plumbing Permit",
    projectId: "p9",
    status: "preparing",
    tags: ["Plumbing"],
    issuingMunicipalityId: "sf-city",
    submitterId: "u1",
    assigneeIds: ["u1", "u2"],
    reviewerIds: [],
  },
  {
    id: "pm9",
    permitNumber: "ENG19-DC9E4",
    name: "Expired Building Permit",
    projectId: "p10",
    status: "expired",
    tags: ["Walls"],
    issuingMunicipalityId: "sf-city",
    submitterId: "u1",
    assigneeIds: [],
    reviewerIds: [],
    expirationDate: "2025-12-30",
    closeOutDate: "2026-01-04",
  },
  {
    id: "pm10",
    permitNumber: "B2026-5D6D1",
    name: "Closed Building Permit",
    projectId: "p10",
    status: "closed",
    tags: ["Walls"],
    issuingMunicipalityId: "sf-city",
    submitterId: "u1",
    assigneeIds: ["u1"],
    reviewerIds: ["u6"],
    issuedDate: "2026-02-14",
    closeOutDate: "2026-04-30",
  },
]

export const requiredForms: RequiredForm[] = [
  { id: "f1", name: "Sign Permit Worksheet 4/7", submissionRequired: true, externalInputs: false },
  { id: "f2", name: "In-House Review Application", submissionRequired: true, externalInputs: false },
  { id: "f3", name: "Licensed Contractor Statement", submissionRequired: true, externalInputs: true },
  { id: "f4", name: "Plan Set Index Form 3/8", submissionRequired: true, externalInputs: false },
  { id: "f5", name: "Owner Authorization Letter", submissionRequired: true, externalInputs: true },
  { id: "f6", name: "Energy Compliance Form T-24", submissionRequired: false, externalInputs: true },
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

export const assumptions: Assumption[] = [
  {
    id: "a1",
    category: "Market",
    title: "Canada-first, BC-primary — not US",
    body:
      "Permitflow is US-based out of New York. Canadian municipalities prefer working with Canadian companies. We start in BC (where the team is closest to the problem) and expand across Canada before considering global. The North American market alone is the runway.",
    confidence: "High",
    evidence:
      "Paul stated this directly in the 2026-05-27 call. 'There's nobody in Canada at this current time doing what we're doing.'",
  },
  {
    id: "a2",
    category: "Market",
    title: "Free upfront info is the wedge — paid submission is the conversion",
    body:
      "Whatever public AI can already give a homeowner for free (timelines, requirements, cost ranges, form templates) we give better and more accurate — for free. The paid moment is when the user wants us to actually submit and manage the permit on their behalf. Trust-builder first, monetize second.",
    confidence: "High",
    evidence:
      "Paul's direct framing: 'Whatever AI is offering out there, we should be offering too for free.' Aligns with classic prosumer trust → conversion patterns (TurboTax, Wealthsimple).",
  },
  {
    id: "a3",
    category: "Market",
    title: "We surface the GC handoff — we don't try to be the GC",
    body:
      "When project complexity crosses a threshold (electrical + plumbing + structural, multi-phase renovation), the product should suggest the user hire a general contractor — and help them find one. We never act as the GC ourselves. Too much liability, wrong business shape.",
    confidence: "High",
    evidence:
      "Paul: 'We could act as a general contractor, but that's not what we want to do. Too much liability.'",
  },
  {
    id: "a4",
    category: "User",
    title: "Two primary buyers: homeowners and residential contractors",
    body:
      "Homeowners are the volume opportunity (millions of one-off projects); residential contractors are the repeat-user opportunity (efficiency multiplier across many homeowners). Both flows surface in the IA; the homeowner flow is v1.",
    confidence: "High",
    evidence:
      "Paul explicit: 'residential contractors and homeowners.' Municipalities are future, not v1.",
  },
  {
    id: "a5",
    category: "User",
    title: "Trust must be built before any payment moment",
    body:
      "Homeowner doesn't pay until they've experienced real value for free. So the early flows are deliberately generous — full plain-English answer, fee estimates, timelines, even pre-filled forms for DIY filers. Conversion to paid is opt-in, not friction-driven.",
    confidence: "High",
    evidence:
      "Paul: 'We want to be focused on building trust with our clients. So whatever AI is offering out there, we should be offering too for free.'",
  },
  {
    id: "a6",
    category: "Technical",
    title: "Pre-submission validation is non-negotiable",
    body:
      "Homeowners don't know what to look for. The system must catch every missing form, contradiction, version mismatch, and known rejection trigger before anything goes to the city. If we let them submit a bad application, we've failed.",
    confidence: "High",
    evidence:
      "Paul: 'We want to make sure they got their t's crossed and their i's dotted before they submit. Not just get it to submit and come back and fail.' Plus Nick's own immigration experience.",
  },
  {
    id: "a7",
    category: "Technical",
    title: "Aggregated user data is the long-term moat — not the static corpus",
    body:
      "Static municipal data anyone can scrape. The defensible asset is the timeline + cost + rejection data we collect from real users moving through the system. After 1,000 → 10,000 users, we predict timelines per AHJ better than any public AI can. That data eventually attracts municipalities themselves as customers.",
    confidence: "Medium",
    evidence:
      "Paul's thesis, not yet validated. He showed a Claude-generated Vancouver data scrape as a directional artifact. Worth validating with first 50 users.",
  },
  {
    id: "a8",
    category: "Design",
    title: "First prompt is conversational, not a signup",
    body:
      "Landing page = single question: 'What are you looking to renovate?' No email gate, no 'Get Started' button (Paul's specific aesthetic objection — feels like signup). User types, we go. The signup moment only appears when they want us to act on their behalf.",
    confidence: "High",
    evidence:
      "Paul direct quote: 'I wouldn't even care if it's the first thing on the website where it's like, tell us what you want.' Anti-pattern: 'Get Started' buttons feel like sign-up commitment.",
  },
  {
    id: "a9",
    category: "Design",
    title: "Hierarchy is preemptive — answers come to the user, not the other way around",
    body:
      "Don't make the homeowner scroll, hunt, or guess. Surface the next action front-and-center. If we know their location, the project type, and the likely permit set — show all three on the same screen with the cost and timeline. Don't pretend not to know.",
    confidence: "High",
    evidence:
      "Paul: 'I don't want them scrolling. I want to basically kinda be right there if we can — preemptive.'",
  },
  {
    id: "a10",
    category: "Design",
    title: "AI as visible companion (for homeowners), not invisible labor",
    body:
      "For contractor SaaS, AI hides — users want work done, not an agent visible. For homeowners doing this for the first time, the opposite: they want to see what the AI is doing, why, and where the answer came from. Citations, attribution chips, plain-language reasoning. The agent is a permit-savvy friend, not a workforce.",
    confidence: "Medium",
    evidence:
      "POV from Nick — diverges from the PermitOps contractor version. Validate with first homeowner user testing. If wrong, fall back to invisible-labor framing.",
  },
]

export const navigation = {
  workspace: [
    { label: "Projects", icon: "Briefcase", to: "/projects", badge: projects.length },
    { label: "My Tasks", icon: "CheckSquare", to: "/tasks", badge: 6 },
    { label: "Permits", icon: "FileText", to: "/permits", badge: permits.length },
    { label: "Municipalities", icon: "Building2", to: "/municipalities" },
    { label: "Directory", icon: "Folder", to: "/directory" },
  ],
  notes: [
    { label: "Problem Statement", icon: "Target", to: "/notes/problem" },
    { label: "Personas", icon: "Users", to: "/notes/personas" },
    { label: "Key Flows", icon: "Workflow", to: "/notes/flows" },
    { label: "Sitemap", icon: "Map", to: "/notes/sitemap" },
    { label: "AI Opportunities", icon: "Sparkles", to: "/notes/ai-opportunities" },
    { label: "AI Patterns", icon: "Cpu", to: "/notes/ai-patterns" },
    { label: "Timeline", icon: "CalendarClock", to: "/notes/timeline" },
    { label: "Assumptions", icon: "Lightbulb", to: "/notes/assumptions" },
  ],
} as const

export const statusLabel: Record<PermitStatus, string> = {
  preparing: "Permit Preparing",
  submitted: "Submitted to AHJ",
  in_review: "In Review",
  comments: "Comments to Address",
  approved: "Permit Approved",
  issued: "Permit Issued",
  expiring: "Expiring Soon",
  expired: "Expired",
  closed: "Permit Closed",
}

export const projectStatusLabel: Record<ProjectStatus, string> = {
  intake: "Intake",
  permit_pending: "Permit Pending",
  permit_issued: "Permit Issued",
  in_construction: "In Construction",
  inactive: "Inactive",
}

export function getMunicipality(id: string): Municipality | undefined {
  return municipalities.find((m) => m.id === id)
}

export function getPerson(id: string): Person | undefined {
  return people.find((p) => p.id === id)
}

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
