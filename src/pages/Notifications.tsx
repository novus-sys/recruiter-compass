import { Bell, Check } from "lucide-react";

export default function Notifications() {
  const notifications = [
    { id: 1, title: "Interview completed", message: "Priya Sharma completed AI interview for Backend Engineer", time: "4 min ago", read: false },
    { id: 2, title: "Reschedule request", message: "Ankit Patel requested to reschedule interview", time: "12 min ago", read: false },
    { id: 3, title: "New application", message: "5 new applications for Frontend Developer role", time: "1 hour ago", read: true },
    { id: 4, title: "Decision pending", message: "4 candidates awaiting final decision", time: "2 hours ago", read: true },
    { id: 5, title: "Report ready", message: "Weekly hiring report is ready for review", time: "3 hours ago", read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Notifications</h1>
          <p className="text-sm text-muted-foreground">{unreadCount} unread</p>
        </div>
        <button className="text-sm text-muted-foreground hover:text-foreground">
          Mark all as read
        </button>
      </div>

      <div className="border border-border">
        {notifications.map((notification, idx) => (
          <div 
            key={notification.id} 
            className={`flex items-start gap-3 px-4 py-3 ${!notification.read ? 'bg-accent/30' : ''} ${idx !== notifications.length - 1 ? 'border-b border-border' : ''}`}
          >
            <div className="mt-0.5">
              {notification.read ? (
                <Check className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              ) : (
                <Bell className="h-4 w-4" strokeWidth={1.5} />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium">{notification.title}</p>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
