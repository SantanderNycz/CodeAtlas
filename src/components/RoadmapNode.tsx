import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Lock } from "lucide-react";
import { useState } from "react";

interface RoadmapNodeProps {
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  topics: string[];
  position: { x: number; y: number };
  locked?: boolean;
  completed?: boolean;
}

const RoadmapNode = ({
  title,
  description,
  level,
  topics,
  locked = false,
  completed = false,
}: RoadmapNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const levelColors = {
    beginner: "bg-accent border-accent",
    intermediate: "bg-primary border-primary",
    advanced: "bg-secondary border-secondary",
  };

  const levelBadgeColors = {
    beginner: "bg-accent text-accent-foreground",
    intermediate: "bg-primary text-primary-foreground",
    advanced: "bg-secondary text-secondary-foreground",
  };

  return (
    <Card
      className={`relative w-72 cursor-pointer transition-all duration-300 hover:scale-105 ${
        locked ? "opacity-50" : ""
      } ${completed ? "border-2 border-accent" : "border-2"} ${
        isExpanded ? "scale-105 z-10" : ""
      } hover:shadow-glow-cyan`}
      onClick={() => !locked && setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className={levelBadgeColors[level]}>{level}</Badge>
          {locked && <Lock className="h-4 w-4 text-muted-foreground" />}
          {completed && <Check className="h-5 w-5 text-accent" />}
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div
          className={`transition-all duration-300 ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="pt-4 border-t border-border">
            <p className="text-sm font-semibold mb-2">Topics to learn:</p>
            <ul className="space-y-2">
              {topics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className={`mt-1 w-2 h-2 rounded-full ${levelColors[level]}`}></span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {!isExpanded && (
          <p className="text-xs text-muted-foreground mt-2">Click to expand</p>
        )}
      </div>
    </Card>
  );
};

export default RoadmapNode;
