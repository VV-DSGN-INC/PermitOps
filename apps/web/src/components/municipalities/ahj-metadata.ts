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
  "vancouver-city": {
    submissionMethod: "Online portal",
    submissionChannels: [
      "City of Vancouver — Permit Hub portal",
      "In-person counter (515 W 10th Ave)",
      "Mail-in for over-the-counter corrections",
    ],
    averageReviewDays: 22,
    reviewNote: "Plan-check queues run longer Jan–Mar; expect 28–35 days for full Building submittals.",
    lastFiled: "2026-05-24",
    phone: "+1 (604) 555-0142",
    email: "permits@vancouver.demo",
    website: "https://vancouver.demo/permits",
    notes:
      "Requires Energy Step Code (BCBC §9.36) compliance on every residential submittal. Resubmissions accepted electronically once the permit number is issued.",
  },
  "surrey-city": {
    submissionMethod: "Online portal",
    submissionChannels: ["Surrey MyCity portal", "Email for revisions only"],
    averageReviewDays: 16,
    reviewNote: "Most roofing and signage scopes are reviewed within 12 business days.",
    lastFiled: "2026-04-12",
    phone: "+1 (604) 555-0188",
    email: "permits@surrey.demo",
    website: "https://mycity.surrey.demo",
    notes:
      "Portal locks the submission once paid — corrections require a new revision package. License verification runs automatically against the BC business registry.",
  },
  "burnaby-city": {
    submissionMethod: "Online portal",
    submissionChannels: ["Burnaby ePermits portal", "In-person counter (4949 Canada Way)"],
    averageReviewDays: 15,
    reviewNote: "Trades-only permits typically clear in under two weeks.",
    lastFiled: "2026-03-18",
    phone: "+1 (604) 555-0167",
    email: "epermits@burnaby.demo",
    website: "https://epermits.burnaby.demo",
    notes:
      "Recently migrated to a new ePermits platform — older case numbers may need a portal lookup before resubmittal.",
  },
  "metrovan-rd": {
    submissionMethod: "Counter / Drop-off",
    submissionChannels: [
      "Metro Vancouver permitting counter (4730 Kingsway, Burnaby)",
      "Limited online intake for utility tie-in permits",
    ],
    averageReviewDays: 24,
    reviewNote: "Regional review includes utility, fire, and Liquid Waste concurrency — plan for parallel queues.",
    lastFiled: "2026-05-02",
    phone: "+1 (604) 555-0123",
    email: "permits@metrovancouver.demo",
    website: "https://metrovancouver.demo/permits",
    notes:
      "Concurrent reviewers across multiple departments. Status updates land in email — keep the case number handy for portal lookups.",
  },
  "victoria-city": {
    submissionMethod: "Online portal",
    submissionChannels: [
      "City of Victoria ePermits portal",
      "In-person counter (1 Centennial Square)",
    ],
    averageReviewDays: 18,
    reviewNote: "Heritage Conservation Area scopes route through Heritage Advisory and add 3–4 weeks.",
    lastFiled: "2026-05-08",
    phone: "+1 (250) 555-0119",
    email: "epermits@victoria.demo",
    website: "https://epermits.victoria.demo",
    notes:
      "Short-form permits require a long-form schedule for any structural change. Drive-thru sites trigger transportation review.",
  },
  "northvan-city": {
    submissionMethod: "Counter / Drop-off",
    submissionChannels: [
      "City Hall counter (141 W 14th St)",
      "Email for status updates only",
    ],
    averageReviewDays: 12,
    reviewNote: "Small jurisdiction; one plan reviewer on staff. Schedules slip during high season.",
    lastFiled: "2026-05-02",
    phone: "+1 (604) 555-0102",
    email: "permits@cnv.demo",
    website: "https://cnv.demo/permits",
    notes:
      "Sign permits require Architectural Review sign-off before filing. Bring two paper sets to the counter.",
  },
  "richmond-city": {
    submissionMethod: "Online portal",
    submissionChannels: [
      "Richmond MyRichmond portal",
      "Counter at 6911 No. 3 Rd for over-the-counter trades",
    ],
    averageReviewDays: 13,
    reviewNote: "Solar electrical reviews are fast-tracked under the city's clean-energy program.",
    lastFiled: "2026-04-30",
    phone: "+1 (604) 555-0145",
    email: "permits@richmond.demo",
    website: "https://myrichmond.demo/permits",
    notes:
      "Flood Construction Level applies to most projects — confirm minimum FCL at intake. Reviewer comments arrive in the portal — no email notifications.",
  },
  "coquitlam-city": {
    submissionMethod: "Counter / Drop-off",
    submissionChannels: [
      "City Hall counter (3000 Guildford Way)",
      "Mail-in accepted for revisions",
    ],
    averageReviewDays: 9,
    reviewNote: "Lower filing volume keeps turnaround quick; complex projects still take 2–3 weeks.",
    lastFiled: "2026-03-04",
    phone: "+1 (604) 555-0166",
    email: "permits@coquitlam.demo",
    website: "https://coquitlam.demo/building",
    notes:
      "Paper-first jurisdiction — bring stamped originals. PDFs accepted for revisions only.",
  },
  "mapleridge-city": {
    submissionMethod: "Email",
    submissionChannels: [
      "Email submission to permits@mapleridge.demo",
      "Counter pickup for issued permits",
    ],
    averageReviewDays: 7,
    reviewNote: "Very small jurisdiction; reviewer responds personally within a few days.",
    lastFiled: "2026-02-20",
    phone: "+1 (604) 555-0178",
    email: "permits@mapleridge.demo",
    website: "https://mapleridge.demo",
    notes:
      "No online portal. Combine the application, plans, and license docs into a single PDF and email the building department.",
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
