export default function PipelineTemplates() {
  const templates = [
    { id: 1, name: "Standard Engineering", stages: 5, jobs: 8 },
    { id: 2, name: "Executive Hiring", stages: 7, jobs: 2 },
    { id: 3, name: "Intern Pipeline", stages: 3, jobs: 4 },
    { id: 4, name: "Sales & BD", stages: 4, jobs: 6 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Pipeline Templates</h1>
        <p className="text-sm text-muted-foreground">Reusable hiring workflows</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div key={template.id} className="border border-border p-4 hover:bg-accent/50 transition-colors cursor-pointer">
            <h3 className="font-medium">{template.name}</h3>
            <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
              <span>{template.stages} stages</span>
              <span>{template.jobs} jobs using</span>
            </div>
          </div>
        ))}
        <button className="border border-dashed border-border p-4 text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
          + Create Template
        </button>
      </div>
    </div>
  );
}
