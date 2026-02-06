import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Edit, Pause, MapPin, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CandidatePanel } from "@/components/candidates/CandidatePanel";
import { AppShell } from "@/components/layout/AppShell";

const stages = ["Applied", "Pre-Screen", "AI Interview", "Review", "Final"];

// Mock candidates data
const candidatesData = [
  { id: 1, name: "Priya Sharma", experience: "4.2 yrs", score: 87, stage: "AI Interview", lastActivity: "2 hours ago" },
  { id: 2, name: "Rahul Verma", experience: "3.8 yrs", score: 82, stage: "AI Interview", lastActivity: "4 hours ago" },
  { id: 3, name: "Ankit Patel", experience: "5.1 yrs", score: 79, stage: "Review", lastActivity: "1 day ago" },
  { id: 4, name: "Sneha Gupta", experience: "2.5 yrs", score: 75, stage: "Pre-Screen", lastActivity: "2 days ago" },
  { id: 5, name: "Vikram Singh", experience: "6.0 yrs", score: 91, stage: "Final", lastActivity: "3 hours ago" },
  { id: 6, name: "Neha Reddy", experience: "3.2 yrs", score: 68, stage: "Applied", lastActivity: "5 hours ago" },
  { id: 7, name: "Amit Kumar", experience: "4.0 yrs", score: 84, stage: "AI Interview", lastActivity: "6 hours ago" },
  { id: 8, name: "Kavita Nair", experience: "2.8 yrs", score: 72, stage: "Applied", lastActivity: "1 day ago" },
  { id: 9, name: "Sanjay Mehta", experience: "5.5 yrs", score: 88, stage: "Review", lastActivity: "2 days ago" },
  { id: 10, name: "Deepa Joshi", experience: "3.5 yrs", score: 76, stage: "Pre-Screen", lastActivity: "3 days ago" },
];

export default function JobWorkspace() {
  const { id } = useParams();
  const [selectedCandidate, setSelectedCandidate] = useState<typeof candidatesData[0] | null>(null);

  const getCandidatesByStage = (stage: string) => {
    return candidatesData.filter(c => c.stage === stage);
  };

  return (
    <AppShell>
      <div className="-m-6 flex h-[calc(100vh-3.5rem)] flex-col">
        {/* Job Header */}
        <div className="border-b border-border bg-background px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <Link to="/jobs" className="mb-2 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-3 w-3" />
                Back to Jobs
              </Link>
              <h1 className="text-xl font-semibold tracking-tight">Backend Engineer</h1>
              <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Remote
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 2–4 yrs
                </span>
                <span className="inline-flex items-center gap-1">
                  <Briefcase className="h-3 w-3" /> Full Time
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Share2 className="h-3.5 w-3.5" />
                Share Apply Link
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5">
                <Edit className="h-3.5 w-3.5" />
                Edit
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5">
                <Pause className="h-3.5 w-3.5" />
                Pause Hiring
              </Button>
            </div>
          </div>
        </div>

        {/* Pipeline Board */}
        <div className="flex flex-1 overflow-hidden">
          <div className={cn(
            "flex-1 overflow-x-auto p-6 transition-all",
            selectedCandidate && "pr-0"
          )}>
            <div className="flex h-full gap-4">
              {stages.map((stage) => {
                const stageCandidates = getCandidatesByStage(stage);
                return (
                  <div key={stage} className="flex w-64 flex-shrink-0 flex-col">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-medium">{stage}</h3>
                      <span className="text-sm text-muted-foreground">{stageCandidates.length}</span>
                    </div>
                    <div className="flex-1 space-y-2 overflow-y-auto">
                      {stageCandidates.map((candidate) => (
                        <button
                          key={candidate.id}
                          onClick={() => setSelectedCandidate(candidate)}
                          className={cn(
                            "w-full border border-border bg-card p-3 text-left transition-colors hover:bg-accent/50",
                            selectedCandidate?.id === candidate.id && "border-foreground bg-accent"
                          )}
                        >
                          <div className="font-medium">{candidate.name}</div>
                          <div className="mt-1 text-sm text-muted-foreground">{candidate.experience}</div>
                          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                            <span>Score {candidate.score}</span>
                            <span>{candidate.lastActivity}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Context Panel */}
          {selectedCandidate && (
            <CandidatePanel 
              candidate={selectedCandidate} 
              onClose={() => setSelectedCandidate(null)} 
            />
          )}
        </div>
      </div>
    </AppShell>
  );
}
