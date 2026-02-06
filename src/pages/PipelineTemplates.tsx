import { useState } from "react";
import { GripVertical, User, Filter, Zap } from "lucide-react";

type StageType = "manual" | "filter" | "ai";

interface Stage {
  id: string;
  name: string;
  description: string;
  type: StageType;
}

const initialStages: Stage[] = [
  { id: "1", name: "Apply", description: "Candidates submit application", type: "manual" },
  { id: "2", name: "Resume Filter", description: "Automatic resume screening", type: "filter" },
  { id: "3", name: "AI Interview", description: "Automated AI-powered interview", type: "ai" },
  { id: "4", name: "Human Interview", description: "Panel or 1:1 interview", type: "manual" },
  { id: "5", name: "Offer", description: "Final offer stage", type: "manual" },
];

const typeConfig: Record<StageType, { label: string; icon: typeof User }> = {
  manual: { label: "Manual", icon: User },
  filter: { label: "Auto Filter", icon: Filter },
  ai: { label: "AI Automated", icon: Zap },
};

export default function PipelineTemplates() {
  const [stages, setStages] = useState<Stage[]>(initialStages);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newStages = [...stages];
    const draggedStage = newStages[draggedIndex];
    newStages.splice(draggedIndex, 1);
    newStages.splice(index, 0, draggedStage);
    setStages(newStages);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Workflow</h1>
        <div className="mt-1 h-px bg-border" />
      </div>

      <p className="text-sm text-muted-foreground">
        Configure your hiring pipeline stages. Drag to reorder.
      </p>

      <div className="space-y-0">
        {stages.map((stage, index) => {
          const TypeIcon = typeConfig[stage.type].icon;
          return (
            <div
              key={stage.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`flex items-center gap-4 border-b border-border py-5 transition-colors ${
                draggedIndex === index ? "bg-accent/50" : ""
              }`}
            >
              <button className="cursor-grab text-muted-foreground hover:text-foreground">
                <GripVertical className="h-5 w-5" />
              </button>

              <div className="flex h-10 w-10 items-center justify-center border border-border text-sm font-medium">
                {index + 1}
              </div>

              <div className="flex-1">
                <h3 className="font-medium">{stage.name}</h3>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TypeIcon className="h-4 w-4" />
                <span>{typeConfig[stage.type].label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
