import { Link } from "react-router-dom";
import { ArrowRight, Clock, AlertCircle, Calendar, CheckCircle } from "lucide-react";

// Mock data
const attentionItems = [
  { label: "candidates waiting review", count: 7, href: "/candidates?status=pending" },
  { label: "interviews completed today", count: 3, href: "/interviews?status=completed" },
  { label: "reschedule requests", count: 2, href: "/interviews?status=reschedule" },
  { label: "pending decisions", count: 4, href: "/candidates?status=decision" },
];

const todaysInterviews = [
  { id: 1, candidate: "Priya Sharma", role: "Backend Engineer", stage: "Technical", status: "Scheduled", time: "10:00 AM", action: "Join" },
  { id: 2, candidate: "Rahul Verma", role: "Frontend Developer", stage: "AI Round", status: "In Progress", time: "11:30 AM", action: "View" },
  { id: 3, candidate: "Ankit Patel", role: "Backend Engineer", stage: "HR Round", status: "Completed", time: "2:00 PM", action: "Review" },
  { id: 4, candidate: "Sneha Gupta", role: "Product Manager", stage: "Technical", status: "Scheduled", time: "4:30 PM", action: "Join" },
];

const pipelineData = [
  { id: 1, role: "Backend Engineer", applied: 182, screened: 96, aiRound: 34, human: 9, offer: 2 },
  { id: 2, role: "Frontend Developer", applied: 124, screened: 67, aiRound: 28, human: 6, offer: 1 },
  { id: 3, role: "Product Manager", applied: 89, screened: 45, aiRound: 18, human: 4, offer: 0 },
];

const recentActivity = [
  { id: 1, text: "AI interview completed — Backend Engineer", time: "4 min ago" },
  { id: 2, text: "Rahul moved candidate to Human Interview", time: "12 min ago" },
  { id: 3, text: "Report generated — Priya Sharma", time: "18 min ago" },
  { id: 4, text: "New application received — Frontend Developer", time: "23 min ago" },
  { id: 5, text: "Interview scheduled — Ankit Patel", time: "45 min ago" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">What needs your attention today</p>
      </div>

      {/* Attention Required */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Attention Required
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {attentionItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group border border-border bg-card p-4 transition-colors hover:bg-accent"
            >
              <div className="text-3xl font-semibold tracking-tight">{item.count}</div>
              <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
              <ArrowRight className="mt-3 h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={1.5} />
            </Link>
          ))}
        </div>
      </section>

      {/* Today's Interviews */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Today's Interviews
        </h2>
        <div className="overflow-hidden border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Candidate</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Stage</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Time</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {todaysInterviews.map((interview) => (
                <tr key={interview.id} className="border-b border-border last:border-0 hover:bg-accent/50">
                  <td className="px-4 py-3 font-medium">{interview.candidate}</td>
                  <td className="px-4 py-3 text-muted-foreground">{interview.role}</td>
                  <td className="px-4 py-3 text-muted-foreground">{interview.stage}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      {interview.status === "In Progress" && <Clock className="h-3 w-3" />}
                      {interview.status === "Completed" && <CheckCircle className="h-3 w-3" />}
                      {interview.status === "Scheduled" && <Calendar className="h-3 w-3" />}
                      {interview.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{interview.time}</td>
                  <td className="px-4 py-3">
                    <button className="text-foreground underline underline-offset-2 hover:no-underline">
                      {interview.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Two Column Layout */}
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Hiring Pipeline Snapshot */}
        <section className="lg:col-span-3">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Hiring Pipeline Snapshot
          </h2>
          <div className="space-y-3">
            {pipelineData.map((job) => (
              <Link
                key={job.id}
                to={`/jobs/${job.id}`}
                className="block border border-border p-4 transition-colors hover:bg-accent/50"
              >
                <div className="mb-3 font-medium">{job.role}</div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Applied <span className="font-medium text-foreground">{job.applied}</span></span>
                  <span>Screened <span className="font-medium text-foreground">{job.screened}</span></span>
                  <span>AI Round <span className="font-medium text-foreground">{job.aiRound}</span></span>
                  <span>Human <span className="font-medium text-foreground">{job.human}</span></span>
                  <span>Offer <span className="font-medium text-foreground">{job.offer}</span></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="lg:col-span-2">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Recent Activity
          </h2>
          <div className="border border-border">
            {recentActivity.map((activity, idx) => (
              <div
                key={activity.id}
                className={`px-4 py-3 ${idx !== recentActivity.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="text-sm">{activity.text}</div>
                <div className="mt-1 text-xs text-muted-foreground">{activity.time}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
