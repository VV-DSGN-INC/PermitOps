// Invented directory data for the Companies and Reviewers tabs.
// Kept inline-adjacent to the page rather than in mock-data.ts so it stays
// scoped to the Directory feature.

export type CompanyType =
  | "Customer"
  | "Architect"
  | "Engineer"
  | "Consultant"
  | "Vendor"
  | "Workspace"

export type DirectoryCompany = {
  id: string
  name: string
  initials: string
  type: CompanyType
  industry: string
  activeProjects: number
  peopleInWorkspace: number
}

export type DirectoryReviewer = {
  id: string
  name: string
  initials: string
  municipalityId: string
  turnaroundDays: number
  permitsReviewed: number
}

export const companies: DirectoryCompany[] = [
  {
    id: "co-westline",
    name: "Westline Builders",
    initials: "WB",
    type: "Workspace",
    industry: "General contractor — commercial fit-outs",
    activeProjects: 10,
    peopleInWorkspace: 5,
  },
  {
    id: "co-hill",
    name: "Hill Architects",
    initials: "HA",
    type: "Architect",
    industry: "Residential & mixed-use design studio",
    activeProjects: 3,
    peopleInWorkspace: 1,
  },
  {
    id: "co-bayside",
    name: "Bayside Builders",
    initials: "BB",
    type: "Customer",
    industry: "Boutique GC — Bay Area remodels",
    activeProjects: 2,
    peopleInWorkspace: 1,
  },
  {
    id: "co-coastal",
    name: "Coastal Engineering Group",
    initials: "CE",
    type: "Engineer",
    industry: "Structural & MEP consulting",
    activeProjects: 4,
    peopleInWorkspace: 2,
  },
  {
    id: "co-northwest",
    name: "Northwest Consulting",
    initials: "NW",
    type: "Consultant",
    industry: "Code compliance & expediting",
    activeProjects: 2,
    peopleInWorkspace: 1,
  },
  {
    id: "co-sierra",
    name: "Sierra Supply Co",
    initials: "SS",
    type: "Vendor",
    industry: "Building materials & finishes",
    activeProjects: 5,
    peopleInWorkspace: 0,
  },
  {
    id: "co-granite",
    name: "Granite Construction Partners",
    initials: "GC",
    type: "Customer",
    industry: "Multi-family developer",
    activeProjects: 3,
    peopleInWorkspace: 1,
  },
]

// Extra municipal reviewers beyond Reviewer Bot.
export const extraReviewers: DirectoryReviewer[] = [
  {
    id: "rv-1",
    name: "Linda Ruiz",
    initials: "LR",
    municipalityId: "sf-city",
    turnaroundDays: 12,
    permitsReviewed: 7,
  },
  {
    id: "rv-2",
    name: "Marcus Owens",
    initials: "MO",
    municipalityId: "miami-city",
    turnaroundDays: 9,
    permitsReviewed: 4,
  },
  {
    id: "rv-3",
    name: "Anika Joshi",
    initials: "AJ",
    municipalityId: "atl-city",
    turnaroundDays: 14,
    permitsReviewed: 3,
  },
  {
    id: "rv-4",
    name: "Carter Webb",
    initials: "CW",
    municipalityId: "norfolk-city",
    turnaroundDays: 21,
    permitsReviewed: 2,
  },
  {
    id: "rv-5",
    name: "Sofia Nakamura",
    initials: "SN",
    municipalityId: "boston-city",
    turnaroundDays: 7,
    permitsReviewed: 5,
  },
]

// Accent palette for person/company avatars. Stable hashing keyed on id keeps
// the same person/company tinted consistently across renders.
type Accent = {
  bg: string
  text: string
  ring: string
}

const accents: Accent[] = [
  {
    bg: "bg-indigo-100 dark:bg-indigo-500/20",
    text: "text-indigo-900 dark:text-indigo-200",
    ring: "ring-indigo-500/20",
  },
  {
    bg: "bg-amber-100 dark:bg-amber-500/20",
    text: "text-amber-900 dark:text-amber-200",
    ring: "ring-amber-500/20",
  },
  {
    bg: "bg-emerald-100 dark:bg-emerald-500/20",
    text: "text-emerald-900 dark:text-emerald-200",
    ring: "ring-emerald-500/20",
  },
  {
    bg: "bg-rose-100 dark:bg-rose-500/20",
    text: "text-rose-900 dark:text-rose-200",
    ring: "ring-rose-500/20",
  },
  {
    bg: "bg-violet-100 dark:bg-violet-500/20",
    text: "text-violet-900 dark:text-violet-200",
    ring: "ring-violet-500/20",
  },
  {
    bg: "bg-sky-100 dark:bg-sky-500/20",
    text: "text-sky-900 dark:text-sky-200",
    ring: "ring-sky-500/20",
  },
  {
    bg: "bg-teal-100 dark:bg-teal-500/20",
    text: "text-teal-900 dark:text-teal-200",
    ring: "ring-teal-500/20",
  },
]

export function getAccent(id: string): Accent {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0
  }
  return accents[hash % accents.length]!
}

// Company type badge variants — paired with each CompanyType.
export const companyTypeStyle: Record<CompanyType, string> = {
  Customer: "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-300",
  Architect: "bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-300",
  Engineer: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
  Consultant: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
  Vendor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  Workspace: "bg-slate-200 text-slate-800 dark:bg-slate-500/20 dark:text-slate-200",
}
