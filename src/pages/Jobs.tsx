import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobsData = [
  { id: 1, role: "Backend Engineer", department: "Engineering", activeStage: "AI Interview", candidates: 182, lastActivity: "2 hours ago" },
  { id: 2, role: "Frontend Developer", department: "Engineering", activeStage: "Screening", candidates: 124, lastActivity: "4 hours ago" },
  { id: 3, role: "Product Manager", department: "Product", activeStage: "Human Interview", candidates: 89, lastActivity: "1 day ago" },
  { id: 4, role: "Data Scientist", department: "Data", activeStage: "Applied", candidates: 56, lastActivity: "2 days ago" },
  { id: 5, role: "DevOps Engineer", department: "Engineering", activeStage: "Offer", candidates: 43, lastActivity: "3 days ago" },
];

export default function Jobs() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Jobs</h1>
          <p className="text-sm text-muted-foreground">Manage open positions</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Create Job
        </Button>
      </div>

      {/* Jobs Table */}
      <div className="overflow-hidden border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Department</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Active Stage</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Candidates</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Last Activity</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {jobsData.map((job) => (
              <tr key={job.id} className="border-b border-border last:border-0 hover:bg-accent/50">
                <td className="px-4 py-3">
                  <Link to={`/jobs/${job.id}`} className="font-medium hover:underline">
                    {job.role}
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{job.department}</td>
                <td className="px-4 py-3 text-muted-foreground">{job.activeStage}</td>
                <td className="px-4 py-3 text-muted-foreground">{job.candidates}</td>
                <td className="px-4 py-3 text-muted-foreground">{job.lastActivity}</td>
                <td className="px-4 py-3 text-right">
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
