import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Shield, Smartphone, Palette, Gamepad2, BarChart } from "lucide-react";
import Layout from "@/components/Layout";

const Home = () => {
  const roadmaps = [
    {
      icon: Code2,
      title: "Frontend",
      description: "Master React, Vue, and modern UI frameworks",
      path: "/frontend",
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Backend",
      description: "Build scalable APIs and server architectures",
      path: "/backend",
      color: "text-secondary",
    },
    {
      icon: Cloud,
      title: "DevOps",
      description: "Deploy and manage cloud infrastructure",
      path: "/devops",
      color: "text-accent",
    },
    {
      icon: BarChart,
      title: "Data Science",
      description: "Analyze data and build ML models",
      path: "/datascience",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Secure systems and prevent attacks",
      path: "/cybersecurity",
      color: "text-destructive",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Create native and cross-platform apps",
      path: "/mobile",
      color: "text-secondary",
    },
    {
      icon: Palette,
      title: "UI/UX",
      description: "Design beautiful user experiences",
      path: "/uiux",
      color: "text-accent",
    },
    {
      icon: Gamepad2,
      title: "Game Dev",
      description: "Build games with Unity and Unreal",
      path: "/gamedev",
      color: "text-primary",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMEM2RkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTAtMTAtNC40NzctMTAtMTB6TTAgMTZjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMC0xMC00LjQ3Ny0xMC0xMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Your Developer Roadmap
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Navigate your tech career with curated learning paths, resources, and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/frontend">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Explore Roadmaps
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Browse Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a career path and follow structured learning roadmaps designed by industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmaps.map((roadmap) => {
            const Icon = roadmap.icon;
            return (
              <Link key={roadmap.path} to={roadmap.path}>
                <Card className="p-6 h-full hover:border-primary transition-all hover:shadow-glow-cyan cursor-pointer group">
                  <Icon className={`h-12 w-12 mb-4 ${roadmap.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {roadmap.title}
                  </h3>
                  <p className="text-muted-foreground">{roadmap.description}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Code2 className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Structured Learning</h3>
              <p className="text-muted-foreground">
                Follow step-by-step roadmaps from beginner to advanced levels
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Resources</h3>
              <p className="text-muted-foreground">
                Access handpicked courses, books, and tools for each technology
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center shadow-glow-purple">
                <Shield className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
              <p className="text-muted-foreground">
                Learn from best practices and real-world applications
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
