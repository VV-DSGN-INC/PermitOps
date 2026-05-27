// Per-AHJ operational metadata invented for the prototype.
// Real data would come from a curated jurisdiction database.

import { municipalities, permits } from "@/lib/mock-data"
import type { Municipality } from "@/lib/mock-data"

export type SubmissionMethod = "Online portal" | "Counter / Drop-off" | "Email"

export type AhjMeta = {
  submissionMethod: SubmissionMethod
  submissionChannels: string[]
  averageReviewDays: number
  reviewNote: string
  lastFiled: string
  phone: string
  email: string
  website: string
  notes: string
}

export const ahjMetadata: Record<string, AhjMeta> = {
  "sf-city": {
    submissionMethod: "Online portal",
    submissionChannels: [
      "DBI Permit & Project Tracking portal",
      "In-person counter (1660 Mission St, 1st floor)",
      "Mail-in for over-the-counter corrections",
    ],
    averageReviewDays: 18,
    reviewNote: "Plan-check queues run longer in Q1; expect 22–28 days for full Building submittals.",
    lastFiled: "2026-05-24",
    phone: "+1 (415) 555-0142",
    email: "permits@sfdbi.demo",
    website: "https://sfdbi.demo/permits",
    notes:
      "Requires energy compliance form T-24 on every commercial submittal. Resubmissions accepted electronically once the case number is issued.",
  },
  "atl-city": {
    submissionMethod: "Online portal",
    submissionChannels: ["Atlanta Citizen Self Service (ACSS)", "Email for revisions only"],
    averageReviewDays: 14,
    reviewNote: "Most roofing and signage scopes are reviewed within 10 business days.",
    lastFiled: "2026-04-12",
    phone: "+1 (404) 555-0188",
    email: "buildingpermits@atlantaga.demo",
    website: "https://acss.atlantaga.demo",
    notes:
      "Portal locks the submission once paid — corrections require a new revision package. License verification is automated.",
  },
  "miami-city": {
    submissionMethod: "Online portal",
    submissionChannels: ["iBuild Miami portal", "In-person counter (Riverside Center)"],
    averageReviewDays: 12,
    reviewNote: "Trades-only permits typically clear in under a week.",
    lastFiled: "2026-03-18",
    phone: "+1 (305) 555-0167",
    email: "ibuild@miamigov.demo",
    website: "https://ibuild.miamigov.demo",
    notes:
      "Recently migrated to iBuild — older case numbers may need a portal lookup before resubmittal.",
  },
  "miami-county": {
    submissionMethod: "Counter / Drop-off",
    submissionChannels: [
      "Permitting & Inspection Center counter (11805 SW 26th St)",
      "Limited online intake for trade permits",
    ],
    averageReviewDays: 21,
    reviewNote: "County review includes zoning, fire, and DERM concurrency — plan for parallel queues.",
    lastFiled: "2026-05-02",
    phone: "+1 (786) 555-0123",
    email: "rer-permits@miamidade.demo",
    website: "https://miamidade.demo/permits",
    notes:
      "Concurrent reviewers across multiple departments. Status updates land in email — keep the case number handy for portal lookups.",
  },
  "boston-city": {
    submissionMethod: "Online portal",
    submissionChannels: [
      "ISD ePLAN portal",
      "In-person counter (1010 Massachusetts Ave)",
    ],
    averageReviewDays: 16,
    reviewNote: "Historic district scopes route through BLC and add 2–3 weeks.",
    lastFiled: "2026-05-08",
    phone: "+1 (617) 555-0119",
    email: "isd-permits@boston.demo",
    website: "https://isd.boston.demo/eplan",
    notes:
      "Short-form permits require a long-form Schedule for any structural change. Drive-thru sites trigger transportation review.",
  },
  "balharbour-city": {
    submissionMethod: "Counter / Drop-off",
    submissionChannels: [
      "Village Hall counter (655 96th St)",
      "Email for status updates only",
    ],
    averageReviewDays: 9,
    reviewNote: "Small jurisdiction; one plan reviewer on staff. Schedules slip during high season.",
    lastFiled: "2026-05-02",
    phone: "+1 (305) 555-0102",
    email: "building@balharbourvillage.demo",
    website: "https://balharbourvillage.demo/building",
    notes:
      "Sign permits require Architectural Review Board sign-off before filing. Bring two paper sets to the counter.",
  },
  "norfolk-city": {
    submissionMethod: "Online portal",
    submissionChannels: [
      "Norfolk Permits & Inspections portal",
      "Counter at 810 Union St for over-the-counter trades",
    ],
    averageReviewDays: 11,
    reviewNote: "Solar electrical reviews are fast-tracked under the city's renewable energy program.",
    lastFiled: "2026-04-30",
    phone: "+1 (757) 555-0145",
    email: "permits@norfolkva.demo",
    website: "https://norfolkva.demo/permits",
    notes:
      "Coastal flood zone projects require an elevation certificate at intake. Reviewer comments arrive in the portal — no email notifications.",
  },
  "adelanto-city": {
    submissionMethod: "Counter / Drop-off",
    submissionChannels: [
      "City Hall building counter (11600 Air Expressway)",
      "Mail-in accepted for revisions",
    ],
    averageReviewDays: 7,
    reviewNote: "Low filing volume keeps turnaround quick; complex projects still take 2–3 weeks.",
    lastFiled: "2026-03-04",
    phone: "+1 (760) 555-0166",
    email: "building@adelantoca.demo",
    website: "https://adelantoca.demo/building",
    notes:
      "Paper-first jurisdiction — bring stamped originals. PDFs are accepted for revisions only.",
  },
  "caryville-city": {
    submissionMethod: "Email",
    submissionChannels: [
      "Email submission to building@caryville.demo",
      "Counter pickup for issued permits",
    ],
    averageReviewDays: 5,
    reviewNote: "Very small jurisdiction; reviewer responds personally within a few days.",
    lastFiled: "2026-02-20",
    phone: "+1 (850) 555-0178",
    email: "building@caryville.demo",
    website: "https://caryville.demo",
    notes:
      "No online portal. Combine the application, plans, and license docs into a single PDF and email the building official.",
  },
}

export function getAhjMeta(id: string): AhjMeta | undefined {
  return ahjMetadata[id]
}

export function permitsForMunicipality(id: string) {
  return permits.filter((p) => p.issuingMunicipalityId === id)
}

export function permitCountFor(id: string): number {
  return permitsForMunicipality(id).length
}

export type MunicipalityRow = Municipality & {
  permitsFiled: number
  meta: AhjMeta
}

export function buildMunicipalityRows(): MunicipalityRow[] {
  return municipalities.map((m) => ({
    ...m,
    permitsFiled: permitCountFor(m.id),
    meta: ahjMetadata[m.id] ?? {
      submissionMethod: "Online portal" as SubmissionMethod,
      submissionChannels: ["Online portal"],
      averageReviewDays: 14,
      reviewNote: "Standard review window.",
      lastFiled: "2026-01-01",
      phone: "+1 (000) 555-0100",
      email: `permits@${m.id}.demo`,
      website: `https://${m.id}.demo`,
      notes: "",
    },
  }))
}
