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
    name: "Marcus Hill",
    role: "Senior Project Manager",
    company: "Westline Commercial Builders (mid-size GC, 220 employees)",
    avatarSeed: "marcus-hill",
    bio:
      "12 years in commercial construction. Runs 8-14 concurrent fit-out projects across three states. Lives in spreadsheets and Outlook; reluctant to add another tool unless it removes weekly status calls.",
    goals: [
      "Know which permits are at risk this week without chasing his team",
      "Hand off cleanly to the field once a permit is issued",
      "Defend schedules to clients with evidence, not vibes",
    ],
    pains: [
      "Each municipality has different rules and his coordinators each track them their own way",
      "Has been burned twice by missed expiration dates causing inspection blockers",
      "Status meetings eat 6 hours a week he could spend on pre-construction planning",
    ],
    jobsToBeDone: [
      "Triage at-risk permits in under 2 minutes each morning",
      "Forward a clean status to the owner's rep without manual cleanup",
      "Answer 'where is permit X' for any project in under 10 seconds",
    ],
    techComfort: 3,
    quote:
      "I don't need fancy AI. I need to know which three permits are going to blow up my schedule this week.",
  },
  {
    id: "persona-2",
    name: "Priya Shah",
    role: "Permit Coordinator",
    company: "Westline Commercial Builders",
    avatarSeed: "priya-shah",
    bio:
      "4 years in the role, runs the day-to-day filing for 30+ active permits. Power user of every municipal portal in her region.",
    goals: [
      "File more permits per week without dropping accuracy",
      "Stop re-keying the same project data into different forms",
      "Get municipal reviewers to respond faster by giving them clean submissions",
    ],
    pains: [
      "Switching contexts between 11 different jurisdiction portals every day",
      "Re-typing the same project details into 5 forms per permit",
      "No central place to see comments coming back from reviewers — they arrive by email",
    ],
    jobsToBeDone: [
      "Auto-populate forms from project data once, not five times",
      "Get a single inbox of municipal responses",
      "Track every form's submission state in one view",
    ],
    techComfort: 5,
    quote:
      "If the tool can pre-fill the forms and tell me what's missing before I submit, I'd save 10 hours a week.",
  },
  {
    id: "persona-3",
    name: "Dana Okafor",
    role: "Founding Architect",
    company: "Okafor + Lane Studio (12-person residential and small commercial)",
    avatarSeed: "dana-okafor",
    bio:
      "Runs a small architecture practice. Handles permitting herself for most projects because there's no one else to do it. Treats permit work as overhead, not craft.",
    goals: [
      "Stop being the bottleneck for her own firm's projects",
      "Know upfront what a jurisdiction will require so she can quote accurately",
      "Keep clients informed without writing weekly emails",
    ],
    pains: [
      "Doesn't know the requirements for new jurisdictions she hasn't worked in before",
      "Clients ping her constantly asking 'is the permit through yet?'",
      "Submitting a permit means a full afternoon she's not designing",
    ],
    jobsToBeDone: [
      "See requirements and fees for a new jurisdiction before quoting",
      "Give clients a read-only link to track permit status",
      "Compress submission prep from half a day to 30 minutes",
    ],
    techComfort: 4,
    quote:
      "Half of every project's profit margin is the time I spend on permits I didn't quote for.",
  },
  {
    id: "persona-4",
    name: "Reggie Vance",
    role: "Operations VP",
    company: "Tier Home Services (HVAC + plumbing, 60 trucks across 4 metros)",
    avatarSeed: "reggie-vance",
    bio:
      "Runs operations for a residential services company doing thousands of small permits a year (HVAC swaps, water heaters, panel upgrades). Volume game.",
    goals: [
      "Cut the per-permit admin cost so techs can finish more jobs",
      "Reduce permit-related callbacks from inspectors",
      "Get visibility into which technicians are causing rework",
    ],
    pains: [
      "Each metro has different rules and the dispatchers learn them the hard way",
      "Paper permits get lost between the truck and the office",
      "No way to forecast inspection availability when scheduling jobs",
    ],
    jobsToBeDone: [
      "Auto-route permits to the right jurisdiction by job address",
      "Surface inspection slot availability when scheduling the job",
      "Roll up permit failures by tech, jurisdiction, and job type",
    ],
    techComfort: 4,
    quote:
      "I don't care which tool — I care that my dispatchers stop calling city hall to ask when an inspector will show up.",
  },
  {
    id: "persona-5",
    name: "Linda Ruiz",
    role: "Senior Plan Reviewer (counter-persona)",
    company: "City of San Francisco — Department of Building Inspection",
    avatarSeed: "linda-ruiz",
    bio:
      "20 years reviewing plan sets. Sees PermitOps users from the other side of the counter. Doesn't use the product directly but its quality affects her queue.",
    goals: [
      "Receive clean, complete submissions she can review on first pass",
      "Spend less time on incomplete applications",
      "Communicate corrections in writing so they don't get lost",
    ],
    pains: [
      "Most applications have at least one missing form",
      "Applicants don't know which version of a form is current",
      "Corrections sent by email get re-asked weeks later",
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
    id: "flow-intake",
    name: "New project intake → first permit filed",
    persona: "Priya Shah (Permit Coordinator)",
    outcome:
      "Project created from a contract PDF, jurisdiction identified, requirements surfaced, first permit application ready for submission — under 30 minutes.",
    steps: [
      {
        title: "Drop contract PDF",
        description:
          "Coordinator drags the executed contract into PermitOps. Project shell is created with address, scope hints, and party data extracted.",
        surface: "Projects → New Project drawer",
        agentBehind: "Intake",
      },
      {
        title: "Confirm jurisdiction",
        description:
          "System geocodes the address and proposes the issuing AHJ. Coordinator confirms or overrides.",
        surface: "Project header → Jurisdiction confirm modal",
        agentBehind: "Research",
      },
      {
        title: "Review requirements",
        description:
          "Requirements page populates with the list of forms, plan sheets, and yes/no project questions specific to the AHJ. Anything ambiguous is flagged for human input.",
        surface: "Project Requirements page",
        agentBehind: "Research",
      },
      {
        title: "Prepare application",
        description:
          "System pre-fills the application form set from project data. Coordinator fills only the gaps and uploads the plan set.",
        surface: "Permit detail → Prepare tab",
        agentBehind: "Submission",
      },
      {
        title: "Submit and track",
        description:
          "Coordinator clicks Submit; the AHJ filing happens (where supported) or a portal-handoff checklist appears. Status flips to Submitted on the Permits dashboard.",
        surface: "Permits dashboard",
        agentBehind: "Submission",
      },
    ],
  },
  {
    id: "flow-comments",
    name: "Reviewer comment → corrected resubmission",
    persona: "Priya Shah, with Marcus Hill notified",
    outcome:
      "Municipal corrections surface in PermitOps the day they arrive, are addressed by the responsible person, and resubmitted with an audit trail.",
    steps: [
      {
        title: "Comment received",
        description:
          "Coordination agent watches the AHJ portal and email. New corrections become a thread on the permit's side panel with the original quote.",
        surface: "Permit side panel → Activity",
        agentBehind: "Coordination",
      },
      {
        title: "Triage",
        description:
          "Each comment is assignable. Auto-assigned to the original submitter unless the comment requires architect or engineer input.",
        surface: "Permit side panel → Comments tab",
      },
      {
        title: "Respond",
        description:
          "Owner uploads revised sheets or replies in-thread. Versioning happens automatically; the prior version remains visible.",
        surface: "Permit detail → Plan sheets",
      },
      {
        title: "Resubmit",
        description:
          "Resubmission packages only the corrected sheets and the response narrative. Status updates and a notification fires to the reviewer.",
        surface: "Permit side panel → Resubmit button",
        agentBehind: "Submission",
      },
    ],
  },
  {
    id: "flow-portfolio",
    name: "Morning triage of the portfolio",
    persona: "Marcus Hill (Project Manager)",
    outcome:
      "PM identifies the at-risk permits across all his projects in under 2 minutes and forwards a clean status to his ops director.",
    steps: [
      {
        title: "Open Permits dashboard",
        description:
          "Status cards across the top show counts by stage; the table is sorted by risk (expiring soonest, longest stuck in comments).",
        surface: "Permits page",
      },
      {
        title: "Scan tags + assignees",
        description:
          "Color-coded status pills and tags let him spot the 3-4 permits that are likely to slip without opening any.",
        surface: "Permits table",
      },
      {
        title: "Open the risky one",
        description:
          "Click a row → side panel slides in with full context, activity stream, and the responsible coordinator's name.",
        surface: "Permit side panel",
      },
      {
        title: "Forward status",
        description:
          "From the side panel he sends a one-click status update to the ops director or owner's rep.",
        surface: "Permit side panel → Share button",
      },
    ],
  },
]

export const assumptions: Assumption[] = [
  {
    id: "a1",
    category: "Market",
    title: "Buyers are mid-market GCs (50–500 employees), not enterprise yet",
    body:
      "Permitflow is signing enterprise GCs (Apple, Amazon, Lennar). We assume our wedge is mid-market — large enough to feel the pain across multiple jurisdictions, small enough that a fast-moving vendor can land and expand.",
    confidence: "Medium",
    evidence:
      "Anecdotal from the brief; verify in interview by asking Paul what their first 10 customers look like.",
  },
  {
    id: "a2",
    category: "Market",
    title: "Multi-jurisdiction is the unlock, not single-municipality permits",
    body:
      "Customers tolerate municipal portals when they only file in one city. Pain explodes when they file across 5+ AHJs. We design for multi-jurisdiction from screen one (Municipalities is a top-level nav item).",
    confidence: "High",
    evidence: "Mirrored across Permitflow's marketing; visible in every screenshot.",
  },
  {
    id: "a3",
    category: "User",
    title: "Two primary personas — coordinator (power user) and PM (consumer)",
    body:
      "Coordinators live in the product daily; PMs glance at it for status. Dashboard density and side-panel detail serve the coordinator; status cards and at-a-glance color coding serve the PM.",
    confidence: "High",
    evidence: "Pattern is universal in B2B ops tools (legal, claims, sales ops).",
  },
  {
    id: "a4",
    category: "User",
    title: "Read-only access for clients is a near-term unlock",
    body:
      "Clients (owners, owner's reps) ping the coordinator constantly to ask 'is the permit through?'. A shareable, read-only status link cuts inbound interruptions and is a low-effort feature.",
    confidence: "Medium",
    evidence: "Surfaced repeatedly in PM/architect persona interviews and present in many competitor tools.",
  },
  {
    id: "a5",
    category: "Technical",
    title: "Most AHJs require human-in-the-loop submission, not direct API",
    body:
      "Only a fraction of AHJs offer machine-readable APIs. The product must elegantly handle the case where submission means filling a municipal web form, with the agent automating as much as possible and the human finishing the last mile.",
    confidence: "High",
    evidence: "Permitflow's own materials describe portal-by-portal coverage growth.",
  },
  {
    id: "a6",
    category: "Technical",
    title: "Authoritative requirements come from a curated database, not live scraping",
    body:
      "Requirements live in a maintained corpus (12M data points equivalent in Permitflow's case). For the demo we treat the corpus as a given; the design only shows the user-facing surface.",
    confidence: "High",
    evidence: "Standard pattern in regulatory data products.",
  },
  {
    id: "a7",
    category: "Design",
    title: "Action-oriented framing beats record-keeping framing",
    body:
      "Permitflow's marketing leads with 'pending action items', not 'permits in the database'. We design every list so the next action is obvious — sort by risk, color-code by stage, surface the responsible person.",
    confidence: "High",
    evidence: "Permitflow marketing illustrations; persona-confirmed.",
  },
  {
    id: "a8",
    category: "Design",
    title: "Density is a feature for the coordinator persona",
    body:
      "Permit coordinators want to see many permits at once. The table is dense by default; whitespace and progressive disclosure live in the side panel, not the table.",
    confidence: "Medium",
    evidence: "Aligns with the screenshots provided; validate with a coordinator in user testing.",
  },
  {
    id: "a9",
    category: "Design",
    title: "AI is invisible labor, not a chat interface",
    body:
      "We don't put a chat bar in the dashboard. Agents do work behind the scenes; the user sees the outcome (a pre-filled form, a surfaced comment) with a small attribution chip. Chat lives in the side panel as a fallback.",
    confidence: "Medium",
    evidence:
      "Permitflow's framing is 'AI workforce' not 'AI assistant'. We carry that through to the UI.",
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
