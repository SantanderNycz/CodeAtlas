import Layout from "@/components/Layout";
import RoadmapNode from "@/components/RoadmapNode";
import RoadmapPath from "@/components/RoadmapPath";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { Card } from "@/components/ui/card";

const DataScience = () => {
  const roadmapNodes = [
    {
      id: 1,
      title: "Python Fundamentals",
      description: "Core programming for data science",
      level: "beginner" as const,
      topics: [
        "Python Syntax & Data Types",
        "Lists, Tuples, Dictionaries",
        "Functions & Modules",
        "File I/O Operations",
        "Exception Handling",
      ],
      position: { x: 150, y: 50 },
    },
    {
      id: 2,
      title: "Math & Statistics",
      description: "Essential mathematical foundations",
      level: "beginner" as const,
      topics: [
        "Linear Algebra Basics",
        "Probability Theory",
        "Descriptive Statistics",
        "Inferential Statistics",
        "Hypothesis Testing",
      ],
      position: { x: 150, y: 350 },
    },
    {
      id: 3,
      title: "NumPy & Pandas",
      description: "Data manipulation libraries",
      level: "beginner" as const,
      topics: [
        "NumPy Arrays & Operations",
        "Pandas DataFrames",
        "Data Cleaning & Preprocessing",
        "Handling Missing Data",
        "Data Aggregation & Grouping",
      ],
      position: { x: 500, y: 200 },
    },
    {
      id: 4,
      title: "Data Visualization",
      description: "Matplotlib, Seaborn, Plotly",
      level: "intermediate" as const,
      topics: [
        "Matplotlib Basics",
        "Seaborn Statistical Plots",
        "Interactive Plotly Charts",
        "Dashboard Creation",
        "Storytelling with Data",
      ],
      position: { x: 150, y: 650 },
    },
    {
      id: 5,
      title: "SQL & Databases",
      description: "Data querying & management",
      level: "intermediate" as const,
      topics: [
        "SQL Queries & Joins",
        "Database Design",
        "Window Functions",
        "Query Optimization",
        "NoSQL Basics (MongoDB)",
      ],
      position: { x: 500, y: 500 },
    },
    {
      id: 6,
      title: "Machine Learning Basics",
      description: "Scikit-learn fundamentals",
      level: "intermediate" as const,
      topics: [
        "Supervised vs Unsupervised Learning",
        "Linear & Logistic Regression",
        "Decision Trees & Random Forests",
        "Model Evaluation Metrics",
        "Cross-Validation",
      ],
      position: { x: 150, y: 950 },
    },
    {
      id: 7,
      title: "Deep Learning",
      description: "Neural networks with TensorFlow/PyTorch",
      level: "advanced" as const,
      topics: [
        "Neural Network Fundamentals",
        "CNNs for Computer Vision",
        "RNNs & LSTMs for Sequences",
        "Transfer Learning",
        "Model Fine-tuning",
      ],
      position: { x: 500, y: 800 },
    },
    {
      id: 8,
      title: "Natural Language Processing",
      description: "Text analysis & processing",
      level: "advanced" as const,
      topics: [
        "Text Preprocessing & Tokenization",
        "TF-IDF & Word Embeddings",
        "Sentiment Analysis",
        "Named Entity Recognition",
        "Transformers & BERT",
      ],
      position: { x: 150, y: 1250 },
    },
    {
      id: 9,
      title: "Big Data Tools",
      description: "Spark, Hadoop, distributed computing",
      level: "advanced" as const,
      topics: [
        "Apache Spark Basics",
        "PySpark DataFrames",
        "Distributed Processing",
        "Spark ML",
        "Data Streaming",
      ],
      position: { x: 500, y: 1100 },
    },
    {
      id: 10,
      title: "MLOps & Deployment",
      description: "Production ML systems",
      level: "advanced" as const,
      topics: [
        "Model Deployment Strategies",
        "Docker for ML Models",
        "API Development (FastAPI)",
        "Model Monitoring & Versioning",
        "CI/CD for ML",
      ],
      position: { x: 150, y: 1550 },
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
            Data Science Roadmap
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Journey from Python basics to advanced machine learning and big data. Click on nodes to
            explore detailed topics.
          </p>
          
          <Card className="p-4 bg-card/50 border-accent/30">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
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
            <RoadmapPath key={idx} from={path.from} to={path.to} color="hsl(var(--accent))" index={idx} />
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
            <Card className="p-6 hover:border-accent transition-colors">
              <h3 className="text-xl font-semibold mb-2">Kaggle Learn</h3>
              <p className="text-muted-foreground mb-4">
                Free micro-courses in Python, ML, and data visualization
              </p>
              <Button variant="outline" size="sm">
                Visit Site
              </Button>
            </Card>
            <Card className="p-6 hover:border-accent transition-colors">
              <h3 className="text-xl font-semibold mb-2">Fast.ai</h3>
              <p className="text-muted-foreground mb-4">
                Practical deep learning course with top-down approach
              </p>
              <Button variant="outline" size="sm">
                Visit Site
              </Button>
            </Card>
            <Card className="p-6 hover:border-accent transition-colors">
              <h3 className="text-xl font-semibold mb-2">Towards Data Science</h3>
              <p className="text-muted-foreground mb-4">
                Medium publication with latest data science articles
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

export default DataScience;
