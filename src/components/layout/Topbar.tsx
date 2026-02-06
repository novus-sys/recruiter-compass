import { Menu, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TopbarProps {
  onMenuToggle: () => void;
}

export function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-background px-4">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
          <Input 
            type="search"
            placeholder="Search candidates, jobs..."
            className="w-80 border-border bg-secondary pl-9 text-sm placeholder:text-muted-foreground focus:bg-background"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative flex h-9 w-9 items-center justify-center text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" strokeWidth={1.5} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-foreground" />
        </button>
      </div>
    </header>
  );
}
