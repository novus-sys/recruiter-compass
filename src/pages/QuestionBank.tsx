export default function QuestionBank() {
  const categories = [
    { name: "Technical", count: 45 },
    { name: "Behavioral", count: 28 },
    { name: "Situational", count: 19 },
    { name: "Culture Fit", count: 12 },
  ];

  const questions = [
    { id: 1, text: "Explain your experience with distributed systems", category: "Technical", usedIn: 12 },
    { id: 2, text: "Describe a challenging project you led", category: "Behavioral", usedIn: 18 },
    { id: 3, text: "How do you handle conflicting priorities?", category: "Situational", usedIn: 15 },
    { id: 4, text: "What motivates you in your work?", category: "Culture Fit", usedIn: 22 },
    { id: 5, text: "Walk me through your approach to debugging", category: "Technical", usedIn: 8 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Question Bank</h1>
        <p className="text-sm text-muted-foreground">Standard interview questions</p>
      </div>

      {/* Categories */}
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button key={cat.name} className="border border-border px-3 py-1.5 text-sm hover:bg-accent/50">
            {cat.name} <span className="text-muted-foreground">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="border border-border">
        {questions.map((question, idx) => (
          <div 
            key={question.id} 
            className={`px-4 py-3 hover:bg-accent/50 cursor-pointer ${idx !== questions.length - 1 ? 'border-b border-border' : ''}`}
          >
            <p className="text-sm">{question.text}</p>
            <div className="mt-1 flex gap-4 text-xs text-muted-foreground">
              <span>{question.category}</span>
              <span>Used in {question.usedIn} interviews</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
