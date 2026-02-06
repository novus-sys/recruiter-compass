import { useState } from "react";
import { Clock, CheckCircle, Play, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const interviewsData = [
  { id: 1, candidate: "Priya Sharma", job: "Backend Engineer", status: "In Progress", duration: "23 min", result: "-" },
  { id: 2, candidate: "Rahul Verma", job: "Frontend Developer", status: "Completed", duration: "45 min", result: "Strong Yes" },
  { id: 3, candidate: "Ankit Patel", job: "Backend Engineer", status: "Completed", duration: "42 min", result: "Yes" },
  { id: 4, candidate: "Sneha Gupta", job: "Product Manager", status: "Scheduled", duration: "-", result: "-" },
  { id: 5, candidate: "Vikram Singh", job: "Backend Engineer", status: "Completed", duration: "38 min", result: "Strong Yes" },
  { id: 6, candidate: "Neha Reddy", job: "Data Scientist", status: "In Progress", duration: "15 min", result: "-" },
  { id: 7, candidate: "Amit Kumar", job: "Frontend Developer", status: "Completed", duration: "41 min", result: "Maybe" },
  { id: 8, candidate: "Kavita Nair", job: "DevOps Engineer", status: "Failed", duration: "5 min", result: "Technical Error" },
];

const statusFilters = ["All", "In Progress", "Completed", "Scheduled", "Failed"];

export default function Interviews() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredInterviews = activeFilter === "All" 
    ? interviewsData 
    : interviewsData.filter(i => i.status === activeFilter);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Play className="h-3 w-3" />;
      case "Completed":
        return <CheckCircle className="h-3 w-3" />;
      case "Scheduled":
        return <Clock className="h-3 w-3" />;
      case "Failed":
        return <AlertCircle className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Interviews</h1>
        <p className="text-sm text-muted-foreground">Monitor running and completed sessions</p>
      </div>

      {/* Status Filters */}
      <div className="flex items-center gap-2">
        {statusFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "border px-3 py-1.5 text-sm transition-colors",
              activeFilter === filter
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Interviews Table */}
      <div className="overflow-hidden border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Candidate</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Job</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Duration</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Result</th>
            </tr>
          </thead>
          <tbody>
            {filteredInterviews.map((interview) => (
              <tr key={interview.id} className="border-b border-border last:border-0 hover:bg-accent/50">
                <td className="px-4 py-3 font-medium">{interview.candidate}</td>
                <td className="px-4 py-3 text-muted-foreground">{interview.job}</td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "inline-flex items-center gap-1.5",
                    interview.status === "In Progress" && "text-foreground",
                    interview.status === "Completed" && "text-muted-foreground",
                    interview.status === "Scheduled" && "text-muted-foreground",
                    interview.status === "Failed" && "text-destructive"
                  )}>
                    {getStatusIcon(interview.status)}
                    {interview.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{interview.duration}</td>
                <td className="px-4 py-3 text-muted-foreground">{interview.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
