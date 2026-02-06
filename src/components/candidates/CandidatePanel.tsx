import { useState } from "react";
import { X, FileText, Video, BarChart2, Clock, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface CandidatePanelProps {
  candidate: {
    id: number;
    name: string;
    experience: string;
    score: number;
    stage: string;
    lastActivity: string;
  };
  onClose: () => void;
}

const tabs = [
  { id: "summary", label: "Summary", icon: FileText },
  { id: "interview", label: "Interview", icon: Video },
  { id: "evaluation", label: "Evaluation", icon: BarChart2 },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "notes", label: "Notes", icon: MessageSquare },
];

export function CandidatePanel({ candidate, onClose }: CandidatePanelProps) {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="w-96 flex-shrink-0 border-l border-border bg-background">
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <h2 className="font-medium">{candidate.name}</h2>
          <p className="text-sm text-muted-foreground">{candidate.experience} experience</p>
        </div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 px-3 py-2.5 text-xs font-medium transition-colors",
              activeTab === tab.id
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="overflow-y-auto p-4" style={{ height: "calc(100% - 8rem)" }}>
        {activeTab === "summary" && <SummaryTab candidate={candidate} />}
        {activeTab === "interview" && <InterviewTab />}
        {activeTab === "evaluation" && <EvaluationTab candidate={candidate} />}
        {activeTab === "timeline" && <TimelineTab />}
        {activeTab === "notes" && <NotesTab />}
      </div>
    </div>
  );
}

function SummaryTab({ candidate }: { candidate: { name: string; experience: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium">Professional Info</h3>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Name</dt>
            <dd className="font-medium">{candidate.name}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Experience</dt>
            <dd>{candidate.experience}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Location</dt>
            <dd>Bangalore</dd>
          </div>
        </dl>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["Node.js", "PostgreSQL", "REST APIs", "TypeScript", "Docker"].map((skill) => (
            <span key={skill} className="border border-border px-2 py-1 text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Education</h3>
        <p className="text-sm">B.Tech Computer Science</p>
        <p className="text-sm text-muted-foreground">IIT Delhi, 2018</p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Resume</h3>
        <button className="w-full border border-border p-4 text-center text-sm text-muted-foreground hover:bg-accent/50">
          View Resume PDF
        </button>
      </div>
    </div>
  );
}

function InterviewTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium">Recording</h3>
        <div className="aspect-video border border-border bg-secondary flex items-center justify-center">
          <span className="text-sm text-muted-foreground">Interview Recording</span>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Transcript</h3>
        <div className="space-y-3 text-sm">
          <div className="border-l-2 border-border pl-3">
            <p className="text-muted-foreground">00:12</p>
            <p>Can you explain your experience with distributed systems?</p>
          </div>
          <div className="border-l-2 border-muted-foreground pl-3">
            <p className="text-muted-foreground">00:45</p>
            <p>I've worked extensively with microservices architecture at my previous role...</p>
          </div>
          <div className="border-l-2 border-border pl-3">
            <p className="text-muted-foreground">02:30</p>
            <p>How do you handle database scaling challenges?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EvaluationTab({ candidate }: { candidate: { score: number } }) {
  const criteria = [
    { name: "Technical Understanding", score: 85 },
    { name: "Problem Solving", score: 78 },
    { name: "Communication", score: 82 },
    { name: "Behavioral Indicators", score: 88 },
    { name: "Risk Signals", score: 92 },
  ];

  return (
    <div className="space-y-6">
      <div className="border border-border p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Recommendation</span>
          <span className="font-medium">Strong Yes</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Confidence</span>
          <span className="font-medium">High</span>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-medium">Structured Breakdown</h3>
        <div className="space-y-4">
          {criteria.map((item) => (
            <div key={item.name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>{item.name}</span>
                <span className="text-muted-foreground">{item.score}</span>
              </div>
              <div className="h-1.5 bg-secondary">
                <div 
                  className="h-full bg-foreground" 
                  style={{ width: `${item.score}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineTab() {
  const events = [
    { action: "Applied", date: "Jan 15, 2024", time: "10:30 AM" },
    { action: "Passed pre-screen", date: "Jan 16, 2024", time: "2:15 PM" },
    { action: "Completed AI interview", date: "Jan 18, 2024", time: "11:00 AM" },
    { action: "Moved to Review by Ankit", date: "Jan 18, 2024", time: "4:30 PM" },
  ];

  return (
    <div className="space-y-4">
      {events.map((event, idx) => (
        <div key={idx} className="flex gap-3">
          <div className="relative flex flex-col items-center">
            <div className="h-2 w-2 rounded-full bg-foreground" />
            {idx < events.length - 1 && (
              <div className="absolute top-2 h-full w-px bg-border" />
            )}
          </div>
          <div className="pb-4">
            <p className="text-sm font-medium">{event.action}</p>
            <p className="text-xs text-muted-foreground">{event.date} • {event.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function NotesTab() {
  return (
    <div className="space-y-4">
      <textarea
        className="w-full border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        rows={6}
        placeholder="Add a note about this candidate..."
      />
      <button className="w-full border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90">
        Save Note
      </button>

      <div className="space-y-3 pt-4">
        <div className="border border-border p-3">
          <p className="text-sm">Strong problem-solving skills demonstrated during technical discussion.</p>
          <p className="mt-2 text-xs text-muted-foreground">Added by John D. • Jan 18, 2024</p>
        </div>
        <div className="border border-border p-3">
          <p className="text-sm">Good cultural fit, aligned with team values.</p>
          <p className="mt-2 text-xs text-muted-foreground">Added by Sarah M. • Jan 17, 2024</p>
        </div>
      </div>
    </div>
  );
}
