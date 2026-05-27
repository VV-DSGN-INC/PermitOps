import { NavLink } from "react-router-dom"
import {
  Briefcase,
  Building2,
  CalendarClock,
  CheckSquare,
  ChevronsUpDown,
  Cpu,
  FileText,
  Folder,
  HelpCircle,
  Lightbulb,
  Map,
  Sparkles,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { Button } from "@workspace/ui/components/button"
import { navigation } from "@/lib/mock-data"

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  CheckSquare,
  FileText,
  Building2,
  Folder,
  Users,
  Workflow,
  Lightbulb,
  Map,
  Target,
  Sparkles,
  Cpu,
  CalendarClock,
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Building2 className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">PermitOps</span>
                <span className="truncate text-xs text-muted-foreground">
                  Westline Builders
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 opacity-60" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.workspace.map((item) => {
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
                    {"badge" in item && item.badge ? (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    ) : null}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Design Notes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.notes.map((item) => {
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
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="rounded-lg border bg-sidebar-accent/50 p-3 text-xs">
              <div className="mb-2 flex items-center gap-2 font-medium">
                <HelpCircle className="size-3.5" />
                Need help?
              </div>
              <Button size="sm" className="w-full">
                Contact Us
              </Button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
