import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CandidatePanel } from "@/components/candidates/CandidatePanel";
import { cn } from "@/lib/utils";

const candidatesData = [
  { id: 1, name: "Priya Sharma", job: "Backend Engineer", stage: "AI Interview", score: 87, lastActivity: "2 hours ago", experience: "4.2 yrs" },
  { id: 2, name: "Rahul Verma", job: "Frontend Developer", stage: "Screening", score: 82, lastActivity: "4 hours ago", experience: "3.8 yrs" },
  { id: 3, name: "Ankit Patel", job: "Backend Engineer", stage: "Review", score: 79, lastActivity: "1 day ago", experience: "5.1 yrs" },
  { id: 4, name: "Sneha Gupta", job: "Product Manager", stage: "Human Interview", score: 75, lastActivity: "2 days ago", experience: "2.5 yrs" },
  { id: 5, name: "Vikram Singh", job: "Backend Engineer", stage: "Final", score: 91, lastActivity: "3 hours ago", experience: "6.0 yrs" },
  { id: 6, name: "Neha Reddy", job: "Data Scientist", stage: "Applied", score: 68, lastActivity: "5 hours ago", experience: "3.2 yrs" },
  { id: 7, name: "Amit Kumar", job: "Frontend Developer", stage: "AI Interview", score: 84, lastActivity: "6 hours ago", experience: "4.0 yrs" },
  { id: 8, name: "Kavita Nair", job: "DevOps Engineer", stage: "Pre-Screen", score: 72, lastActivity: "1 day ago", experience: "2.8 yrs" },
];

const filters = ["Role", "Stage", "Score", "Date", "Source"];

export default function Candidates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<typeof candidatesData[0] | null>(null);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      <div className={cn("flex-1 space-y-6 p-6", selectedCandidate && "pr-0")}>
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Candidates</h1>
          <p className="text-sm text-muted-foreground">Search across all jobs</p>
        </div>

        {/* Search & Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
            <Input 
              type="search"
              placeholder="Search by name, skills, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={cn(
                  "border px-3 py-1.5 text-sm transition-colors",
                  activeFilters.includes(filter)
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Candidates Table */}
        <div className="overflow-hidden border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Candidate</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Job</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Stage</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Score</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Last Activity</th>
              </tr>
            </thead>
            <tbody>
              {candidatesData.map((candidate) => (
                <tr 
                  key={candidate.id} 
                  onClick={() => setSelectedCandidate(candidate)}
                  className={cn(
                    "cursor-pointer border-b border-border last:border-0 hover:bg-accent/50",
                    selectedCandidate?.id === candidate.id && "bg-accent"
                  )}
                >
                  <td className="px-4 py-3 font-medium">{candidate.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{candidate.job}</td>
                  <td className="px-4 py-3 text-muted-foreground">{candidate.stage}</td>
                  <td className="px-4 py-3 text-muted-foreground">{candidate.score}</td>
                  <td className="px-4 py-3 text-muted-foreground">{candidate.lastActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Side Panel */}
      {selectedCandidate && (
        <CandidatePanel 
          candidate={selectedCandidate} 
          onClose={() => setSelectedCandidate(null)} 
        />
      )}
    </div>
  );
}
