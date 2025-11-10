import Layout from "@/components/Layout";
import RoadmapNode from "@/components/RoadmapNode";
import RoadmapPath from "@/components/RoadmapPath";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { Card } from "@/components/ui/card";

const Frontend = () => {
  const roadmapNodes = [
    {
      id: 1,
      title: "HTML & CSS Basics",
      description: "Foundation of web development",
      level: "beginner" as const,
      topics: [
        "HTML5 Semantic Elements",
        "CSS Selectors & Box Model",
        "Flexbox & Grid Layouts",
        "Responsive Design Principles",
        "CSS Variables & Custom Properties",
      ],
      position: { x: 150, y: 50 },
      completed: false,
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      description: "Core programming concepts",
      level: "beginner" as const,
      topics: [
        "Variables, Data Types & Operators",
        "Functions & Scope",
        "Arrays & Objects",
        "DOM Manipulation",
        "ES6+ Features (Arrow Functions, Destructuring)",
      ],
      position: { x: 150, y: 350 },
      completed: false,
    },
    {
      id: 3,
      title: "Git & Version Control",
      description: "Essential developer tool",
      level: "beginner" as const,
      topics: [
        "Git Basics (commit, push, pull)",
        "Branching & Merging",
        "GitHub Workflow",
        "Pull Requests & Code Review",
        "Resolving Conflicts",
      ],
      position: { x: 500, y: 200 },
      completed: false,
    },
    {
      id: 4,
      title: "React Fundamentals",
      description: "Modern UI library",
      level: "intermediate" as const,
      topics: [
        "JSX & Components",
        "Props & State Management",
        "React Hooks (useState, useEffect)",
        "Event Handling",
        "Conditional Rendering & Lists",
      ],
      position: { x: 150, y: 650 },
      completed: false,
    },
    {
      id: 5,
      title: "TypeScript",
      description: "Type-safe JavaScript",
      level: "intermediate" as const,
      topics: [
        "Basic Types & Interfaces",
        "Type Inference & Annotations",
        "Generics",
        "Union & Intersection Types",
        "TypeScript with React",
      ],
      position: { x: 500, y: 500 },
      completed: false,
    },
    {
      id: 6,
      title: "Advanced React",
      description: "Complex state & patterns",
      level: "intermediate" as const,
      topics: [
        "Context API & useContext",
        "Custom Hooks",
        "useReducer & Complex State",
        "Performance Optimization (useMemo, useCallback)",
        "React Router",
      ],
      position: { x: 150, y: 950 },
      completed: false,
    },
    {
      id: 7,
      title: "State Management",
      description: "Zustand, Redux, or similar",
      level: "advanced" as const,
      topics: [
        "Global State Patterns",
        "Redux Toolkit",
        "Zustand Store Management",
        "State Persistence",
        "Async State Management",
      ],
      position: { x: 500, y: 800 },
      completed: false,
    },
    {
      id: 8,
      title: "Next.js & SSR",
      description: "Full-stack React framework",
      level: "advanced" as const,
      topics: [
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "API Routes",
        "File-based Routing",
        "Image Optimization",
      ],
      position: { x: 150, y: 1250 },
      completed: false,
    },
    {
      id: 9,
      title: "Testing & Quality",
      description: "Reliable code practices",
      level: "advanced" as const,
      topics: [
        "Unit Testing with Jest",
        "Component Testing (React Testing Library)",
        "E2E Testing with Playwright",
        "Test Coverage & CI/CD",
        "Accessibility Testing",
      ],
      position: { x: 500, y: 1100 },
      completed: false,
    },
    {
      id: 10,
      title: "Performance & Optimization",
      description: "Production-ready apps",
      level: "advanced" as const,
      topics: [
        "Code Splitting & Lazy Loading",
        "Bundle Size Optimization",
        "Web Vitals (LCP, FID, CLS)",
        "Caching Strategies",
        "Progressive Web Apps (PWA)",
      ],
      position: { x: 150, y: 1550 },
      completed: false,
    },
  ];

  const paths = [
    { from: { x: 150, y: 130 }, to: { x: 150, y: 350 } },
    { from: { x: 230, y: 200 }, to: { x: 420, y: 200 } },
    { from: { x: 150, y: 430 }, to: { x: 150, y: 650 } },
    { from: { x: 230, y: 700 }, to: { x: 420, y: 550 } },
    { from: { x: 150, y: 730 }, to: { x: 150, y: 950 } },
    { from: { x: 500, y: 580 }, to: { x: 500, y: 800 } },
    { from: { x: 150, y: 1030 }, to: { x: 150, y: 1250 } },
    { from: { x: 230, y: 1000 }, to: { x: 420, y: 880 } },
    { from: { x: 500, y: 880 }, to: { x: 500, y: 1100 } },
    { from: { x: 150, y: 1330 }, to: { x: 150, y: 1550 } },
    { from: { x: 230, y: 1300 }, to: { x: 420, y: 1180 } },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Frontend Development Roadmap
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Follow this visual path from HTML basics to advanced React patterns. Click on any node to
            see detailed topics.
          </p>
          
          <Card className="p-4 bg-card/50 border-primary/30">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">How to use:</span> Click on any card to expand and view topics.
                  Follow the connected path from top to bottom.
                </p>
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span>Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Roadmap Canvas */}
        <div className="relative bg-gradient-to-b from-background to-card rounded-lg p-8 min-h-[1800px]">
          {/* Connection Lines */}
          {paths.map((path, idx) => (
            <RoadmapPath key={idx} from={path.from} to={path.to} index={idx} />
          ))}

          {/* Roadmap Nodes */}
          <div className="relative z-10">
            {roadmapNodes.map((node) => (
              <div
                key={node.id}
                className="absolute animate-fade-in"
                style={{
                  left: `${node.position.x}px`,
                  top: `${node.position.y}px`,
                }}
              >
                <RoadmapNode
                  title={node.title}
                  description={node.description}
                  level={node.level}
                  topics={node.topics}
                  position={node.position}
                  completed={node.completed}
                />
              </div>
            ))}
          </div>

          {/* Start & End Markers */}
          <div className="absolute left-8 top-2 z-20">
            <div className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
              <div className="w-3 h-3 rounded-full bg-accent-foreground animate-pulse"></div>
              <span className="text-sm font-bold text-accent-foreground">START HERE</span>
            </div>
          </div>

          <div className="absolute left-8 bottom-2 z-20">
            <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full shadow-glow-purple">
              <div className="w-3 h-3 rounded-full bg-secondary-foreground"></div>
              <span className="text-sm font-bold text-secondary-foreground">MASTERY</span>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-2">FreeCodeCamp</h3>
              <p className="text-muted-foreground mb-4">
                Free interactive coding lessons covering HTML, CSS, and JavaScript
              </p>
              <Button variant="outline" size="sm">
                Visit Site
              </Button>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-2">React Documentation</h3>
              <p className="text-muted-foreground mb-4">
                Official React docs with interactive examples and tutorials
              </p>
              <Button variant="outline" size="sm">
                Visit Site
              </Button>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-2">MDN Web Docs</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive resource for web technologies and standards
              </p>
              <Button variant="outline" size="sm">
                Visit Site
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Frontend;
