import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Calendar,
  GitBranch,
  HelpCircle,
  Activity,
  Bell,
  ChevronLeft,
  Building2,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const primaryNav = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Candidates", href: "/candidates", icon: Users },
  { name: "Interviews", href: "/interviews", icon: Calendar },
];

const workflowNav = [
  { name: "Pipeline Templates", href: "/pipelines", icon: GitBranch },
  { name: "Question Bank", href: "/questions", icon: HelpCircle },
];

const operationsNav = [
  { name: "Activity", href: "/activity", icon: Activity },
  { name: "Notifications", href: "/notifications", icon: Bell },
];

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation();

  const NavItem = ({ item }: { item: typeof primaryNav[0] }) => {
    const isActive = location.pathname === item.href || 
      (item.href !== "/" && location.pathname.startsWith(item.href));
    
    return (
      <NavLink
        to={item.href}
        className={cn(
          "flex items-center gap-3 px-3 py-2 text-sm transition-colors",
          isActive 
            ? "bg-accent font-medium text-foreground" 
            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
        )}
      >
        <item.icon className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
        {!collapsed && <span>{item.name}</span>}
      </NavLink>
    );
  };

  return (
    <aside 
      className={cn(
        "flex flex-col border-r border-border bg-sidebar transition-all duration-200",
        collapsed ? "w-14" : "w-60"
      )}
    >
      {/* Logo / Brand */}
      <div className="flex h-14 items-center justify-between border-b border-border px-3">
        {!collapsed && (
          <span className="text-sm font-semibold tracking-tight">Recruiter</span>
        )}
        <button
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft 
            className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180"
            )} 
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {/* Primary Work */}
        <div className="mb-6">
          {!collapsed && (
            <h3 className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Primary Work
            </h3>
          )}
          <div className="space-y-0.5">
            {primaryNav.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mb-6">
          {!collapsed && (
            <h3 className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Workflow
            </h3>
          )}
          <div className="space-y-0.5">
            {workflowNav.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Operations */}
        <div>
          {!collapsed && (
            <h3 className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Operations
            </h3>
          )}
          <div className="space-y-0.5">
            {operationsNav.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Section - Workspace + Profile */}
      <div className="border-t border-border p-3">
        {!collapsed ? (
          <div className="space-y-3">
            <button className="flex w-full items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Building2 className="h-4 w-4" strokeWidth={1.5} />
              <span>Acme Corp</span>
            </button>
            <button className="flex w-full items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <User className="h-4 w-4" strokeWidth={1.5} />
              <span>John Doe</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground">
              <Building2 className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground">
              <User className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
