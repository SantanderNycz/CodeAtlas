import Layout from "@/components/Layout";
import RoadmapNode from "@/components/RoadmapNode";
import RoadmapPath from "@/components/RoadmapPath";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { Card } from "@/components/ui/card";

const Backend = () => {
  const roadmapNodes = [
    {
      id: 1,
      title: "Programming Basics",
      description: "Choose a language (Node.js/Python)",
      level: "beginner" as const,
      topics: [
        "Variables & Data Types",
        "Control Flow (if/else, loops)",
        "Functions & Modules",
        "Error Handling",
        "Object-Oriented Programming",
      ],
      position: { x: 150, y: 50 },
      completed: false,
    },
    {
      id: 2,
      title: "HTTP & APIs",
      description: "Web fundamentals",
      level: "beginner" as const,
      topics: [
        "HTTP Methods (GET, POST, PUT, DELETE)",
        "Status Codes",
        "REST API Principles",
        "Request/Response Cycle",
        "JSON & Data Formats",
      ],
      position: { x: 150, y: 350 },
      completed: false,
    },
    {
      id: 3,
      title: "Node.js & Express",
      description: "Backend framework",
      level: "beginner" as const,
      topics: [
        "Setting up Express Server",
        "Routing & Middleware",
        "Request/Response Handling",
        "Environment Variables",
        "Basic Error Handling",
      ],
      position: { x: 500, y: 200 },
      completed: false,
    },
    {
      id: 4,
      title: "Databases - SQL",
      description: "Relational databases",
      level: "intermediate" as const,
      topics: [
        "SQL Syntax & Queries",
        "PostgreSQL/MySQL Setup",
        "Table Design & Relationships",
        "Joins & Aggregations",
        "Indexes & Query Optimization",
      ],
      position: { x: 150, y: 650 },
      completed: false,
    },
    {
      id: 5,
      title: "Authentication & Security",
      description: "Secure your APIs",
      level: "intermediate" as const,
      topics: [
        "JWT & Session Management",
        "Password Hashing (bcrypt)",
        "OAuth 2.0",
        "CORS & Security Headers",
        "Input Validation & Sanitization",
      ],
      position: { x: 500, y: 500 },
      completed: false,
    },
    {
      id: 6,
      title: "ORM & Database Tools",
      description: "Prisma, TypeORM, Sequelize",
      level: "intermediate" as const,
      topics: [
        "ORM Setup & Configuration",
        "Schema Design & Migrations",
        "CRUD Operations",
        "Relations & Eager Loading",
        "Transaction Management",
      ],
      position: { x: 150, y: 950 },
      completed: false,
    },
    {
      id: 7,
      title: "Caching & Performance",
      description: "Redis & optimization",
      level: "advanced" as const,
      topics: [
        "Redis Setup & Key-Value Storage",
        "Cache Strategies",
        "Session Storage",
        "Rate Limiting",
        "Background Jobs (Bull/Bee Queue)",
      ],
      position: { x: 500, y: 800 },
      completed: false,
    },
    {
      id: 8,
      title: "Microservices",
      description: "Distributed architecture",
      level: "advanced" as const,
      topics: [
        "Service-Oriented Architecture",
        "API Gateway Pattern",
        "Inter-Service Communication",
        "Message Queues (RabbitMQ)",
        "Service Discovery",
      ],
      position: { x: 150, y: 1250 },
      completed: false,
    },
    {
      id: 9,
      title: "Testing & Quality",
      description: "Reliable backend code",
      level: "advanced" as const,
      topics: [
        "Unit Testing (Jest, Mocha)",
        "Integration Testing",
        "API Testing (Supertest)",
        "Test Coverage",
        "Continuous Integration",
      ],
      position: { x: 500, y: 1100 },
      completed: false,
    },
    {
      id: 10,
      title: "DevOps & Deployment",
      description: "Production deployment",
      level: "advanced" as const,
      topics: [
        "Docker Containerization",
        "CI/CD Pipelines",
        "Cloud Platforms (AWS, GCP, Azure)",
        "Monitoring & Logging",
        "Load Balancing & Scaling",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Backend Development Roadmap
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Master server-side development from basic APIs to scalable microservices. Click on nodes
            to explore topics.
          </p>
          
          <Card className="p-4 bg-card/50 border-secondary/30">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
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
            <RoadmapPath key={idx} from={path.from} to={path.to} color="hsl(var(--secondary))" index={idx} />
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
            <Card className="p-6 hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-2">Node.js Docs</h3>
              <p className="text-muted-foreground mb-4">
                Official Node.js documentation with guides and API reference
              </p>
              <Button variant="outline" size="sm">
                Visit Site
              </Button>
            </Card>
            <Card className="p-6 hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-2">PostgreSQL Tutorial</h3>
              <p className="text-muted-foreground mb-4">
                Learn SQL and database design with interactive exercises
              </p>
              <Button variant="outline" size="sm">
                Visit Site
              </Button>
            </Card>
            <Card className="p-6 hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-2">System Design Primer</h3>
              <p className="text-muted-foreground mb-4">
                Learn how to design large-scale systems with real examples
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

export default Backend;
