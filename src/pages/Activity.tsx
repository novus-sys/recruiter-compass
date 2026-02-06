export default function Activity() {
  const activities = [
    { id: 1, text: "AI interview completed — Backend Engineer — Priya Sharma", time: "4 min ago", user: "System" },
    { id: 2, text: "Moved candidate to Human Interview", time: "12 min ago", user: "Rahul D." },
    { id: 3, text: "Report generated — Technical Assessment", time: "18 min ago", user: "System" },
    { id: 4, text: "New application received — Frontend Developer", time: "23 min ago", user: "System" },
    { id: 5, text: "Interview scheduled — Ankit Patel", time: "45 min ago", user: "Sarah M." },
    { id: 6, text: "Candidate rejected — Data Scientist role", time: "1 hour ago", user: "John D." },
    { id: 7, text: "Job posting updated — Backend Engineer", time: "2 hours ago", user: "Admin" },
    { id: 8, text: "Bulk resume screening completed", time: "3 hours ago", user: "System" },
    { id: 9, text: "New job created — DevOps Engineer", time: "4 hours ago", user: "Sarah M." },
    { id: 10, text: "Offer extended — Product Manager", time: "5 hours ago", user: "John D." },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Activity</h1>
        <p className="text-sm text-muted-foreground">Recent operations log</p>
      </div>

      <div className="border border-border">
        {activities.map((activity, idx) => (
          <div 
            key={activity.id} 
            className={`px-4 py-3 ${idx !== activities.length - 1 ? 'border-b border-border' : ''}`}
          >
            <div className="flex items-start justify-between">
              <p className="text-sm">{activity.text}</p>
              <span className="flex-shrink-0 text-xs text-muted-foreground">{activity.time}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">by {activity.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
