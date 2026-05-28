import { useMemo, useState } from "react"
import { Search, UserPlus } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { Card, CardContent } from "@workspace/ui/components/card"
import { people, projects } from "@/lib/mock-data"
import type { Person } from "@/lib/mock-data"
import { CompanyCard } from "@/components/directory/company-card"
import { PersonCard } from "@/components/directory/person-card"
import { ReviewersTable } from "@/components/directory/reviewers-table"
import type { ReviewerRow } from "@/components/directory/reviewers-table"
import { StatStrip } from "@/components/directory/stat-strip"
import { companies, extraReviewers } from "@/components/directory/data"

const REVIEWER_ROLE = "Municipal Reviewer"
const WORKSPACE_FIRM = "Westline Builders"

type Tab = "people" | "companies" | "reviewers"

// Pin teammates to the workspace firm; reviewers belong to their AHJ; everyone
// else gets bucketed under a small lookup. Keeps things explicit without forcing
// us to expand the mock-data shape.
function companyForPerson(person: Person): string {
  if (person.role === REVIEWER_ROLE) {
    return "City of Vancouver — Permits"
  }
  return WORKSPACE_FIRM
}

// "Active on X projects" — derived from the projects mock data so the count
// matches reality where possible, then capped so the pill doesn't lie when
// someone's on a long list.
function activeProjectsFor(personId: string): number {
  const real = projects.filter((p) => p.team.includes(personId)).length
  // Fallback to a tiny number for people not on any project's team list so the
  // card still tells a story; keep it small so it reads as plausible.
  const fallback = Math.min(5, Math.max(1, (personId.charCodeAt(1) % 4) + 1))
  return Math.min(5, real > 0 ? real : fallback)
}

export function DirectoryPage() {
  const [tab, setTab] = useState<Tab>("people")
  const [query, setQuery] = useState("")

  const teammates = useMemo(
    () => people.filter((p) => p.role !== REVIEWER_ROLE),
    []
  )

  const teammateRows = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return teammates
    return teammates.filter((p) =>
      [p.name, p.role, p.email].join(" ").toLowerCase().includes(needle)
    )
  }, [teammates, query])

  const filteredCompanies = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return companies
    return companies.filter((c) =>
      [c.name, c.type, c.industry].join(" ").toLowerCase().includes(needle)
    )
  }, [query])

  const reviewerRows: ReviewerRow[] = useMemo(() => {
    const fromPeople: ReviewerRow[] = people
      .filter((p) => p.role === REVIEWER_ROLE)
      .map((p) => ({
        id: p.id,
        name: p.name,
        initials: p.initials,
        municipalityId: "vancouver-city",
        turnaroundDays: 10,
        permitsReviewed: 6,
      }))
    const combined = [...fromPeople, ...extraReviewers]
    const needle = query.trim().toLowerCase()
    if (!needle) return combined
    return combined.filter((r) => r.name.toLowerCase().includes(needle))
  }, [query])

  const stats = useMemo(() => {
    const customerCount = companies.filter((c) => c.type === "Customer").length
    return {
      teammates: teammates.length,
      customers: customerCount,
      reviewers: people.filter((p) => p.role === REVIEWER_ROLE).length + extraReviewers.length,
      companies: companies.length,
    }
  }, [teammates.length])

  const searchPlaceholder: Record<Tab, string> = {
    people: "Search teammates by name, role, or email",
    companies: "Search companies by name, type, or industry",
    reviewers: "Search reviewers by name",
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            Directory
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Everyone in your network — teammates, customers, reviewers, and partners.
          </p>
        </div>
        <Button>
          <UserPlus data-icon="inline-start" />
          Invite person
        </Button>
      </div>

      <StatStrip
        teammates={stats.teammates}
        customers={stats.customers}
        reviewers={stats.reviewers}
        companies={stats.companies}
      />

      <Tabs
        value={tab}
        onValueChange={(value) => {
          setTab(value as Tab)
          setQuery("")
        }}
        className="gap-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <TabsList>
            <TabsTrigger value="people">People</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="reviewers">Reviewers</TabsTrigger>
          </TabsList>
          <div className="relative w-full sm:w-80">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder[tab]}
              className="h-9 pl-9"
            />
          </div>
        </div>

        <TabsContent value="people" className="mt-0">
          {teammateRows.length === 0 ? (
            <EmptyState
              title="No teammates match your search"
              hint="Try a different name, role, or email."
            />
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {teammateRows.map((person) => (
                <PersonCard
                  key={person.id}
                  person={person}
                  company={companyForPerson(person)}
                  activeProjects={activeProjectsFor(person.id)}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="companies" className="mt-0">
          {filteredCompanies.length === 0 ? (
            <EmptyState
              title="No companies match your search"
              hint="Try a different name, industry, or type."
            />
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="reviewers" className="mt-0">
          <ReviewersTable rows={reviewerRows} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function EmptyState({ title, hint }: { title: string; hint: string }) {
  return (
    <Card size="sm">
      <CardContent className="flex flex-col items-center justify-center gap-1 py-12 text-center">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  )
}
