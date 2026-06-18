import { NavLink } from "react-router-dom"
import {
  CalendarClock,
  CheckSquare,
  ChevronsUpDown,
  Cpu,
  ListChecks,
  Map,
  Sparkles,
  SquareKanban,
  Target,
  User,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { navigation } from "@/lib/mock-data"

const iconMap: Record<string, LucideIcon> = {
  ListChecks,
  SquareKanban,
  CheckSquare,
  CalendarClock,
  Users,
  Target,
  User,
  Workflow,
  Map,
  Cpu,
  Sparkles,
}

type NavItem = { label: string; icon: string; to: string }

const groups: { label: string; items: readonly NavItem[] }[] = [
  { label: "To do", items: navigation.todo },
  { label: "Team", items: navigation.team },
  { label: "Design notes", items: navigation.notes },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <SquareKanban className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">TeamHQ</span>
                <span className="truncate text-xs text-muted-foreground">
                  Product workspace
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 opacity-60" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const Icon = iconMap[item.icon]
                  return (
                    <SidebarMenuItem key={item.to}>
                      <NavLink to={item.to}>
                        {({ isActive }) => (
                          <SidebarMenuButton isActive={isActive} tooltip={item.label}>
                            {Icon ? <Icon /> : null}
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        )}
                      </NavLink>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
