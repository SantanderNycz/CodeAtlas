import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileCode, Wrench, ExternalLink } from "lucide-react";

const Resources = () => {
  const courses = [
    {
      title: "CS50 - Introduction to Computer Science",
      platform: "Harvard",
      link: "#",
      description: "Learn how to think algorithmically and solve problems efficiently",
      free: true,
    },
    {
      title: "The Odin Project",
      platform: "Free",
      link: "#",
      description: "Full-stack curriculum for learning web development",
      free: true,
    },
    {
      title: "FreeCodeCamp",
      platform: "Free",
      link: "#",
      description: "Learn to code with interactive lessons and projects",
      free: true,
    },
  ];

  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      link: "#",
      description: "A handbook of agile software craftsmanship",
      category: "Best Practices",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      link: "#",
      description: "Your journey to mastery in software development",
      category: "Career",
    },
    {
      title: "Structure and Interpretation of Computer Programs",
      author: "Harold Abelson & Gerald Jay Sussman",
      link: "#",
      description: "Classic text on programming concepts and theory",
      category: "Fundamentals",
    },
  ];

  const blogs = [
    {
      name: "Dev.to",
      link: "#",
      description: "Community of software developers sharing knowledge",
    },
    {
      name: "Medium - Programming",
      link: "#",
      description: "Articles and tutorials from developers worldwide",
    },
    {
      name: "CSS-Tricks",
      link: "#",
      description: "Tips, tricks, and techniques on web design",
    },
    {
      name: "Smashing Magazine",
      link: "#",
      description: "For web designers and developers",
    },
  ];

  const tools = [
    {
      name: "Visual Studio Code",
      category: "IDE",
      link: "#",
      description: "Free, powerful code editor with extensive extensions",
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      link: "#",
      description: "Essential tools for version control and collaboration",
    },
    {
      name: "Docker",
      category: "DevOps",
      link: "#",
      description: "Platform for building, shipping, and running applications",
    },
    {
      name: "Postman",
      category: "API Testing",
      link: "#",
      description: "Powerful tool for API development and testing",
    },
    {
      name: "Figma",
      category: "Design",
      link: "#",
      description: "Collaborative interface design tool",
    },
    {
      name: "Chrome DevTools",
      category: "Debugging",
      link: "#",
      description: "Built-in browser tools for web development",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Developer Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A curated collection of courses, books, blogs, and tools to accelerate your learning
            journey and boost your productivity.
          </p>
        </div>

        {/* Courses Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Video className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">General Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.title} className="p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Badge>{course.platform}</Badge>
                  {course.free && <Badge variant="outline" className="text-accent border-accent">Free</Badge>}
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    Access Course <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-secondary" />
            <h2 className="text-3xl font-bold">Must-Read Books</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <Card key={book.title} className="p-6 hover:border-secondary transition-colors">
                <Badge variant="outline" className="mb-3">
                  {book.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-sm text-secondary mb-2">by {book.author}</p>
                <p className="text-muted-foreground mb-4">{book.description}</p>
                <Button variant="secondary" size="sm" asChild>
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FileCode className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold">Blogs & Communities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <Card key={blog.name} className="p-6 hover:border-accent transition-colors">
                <h3 className="text-xl font-semibold mb-2">{blog.name}</h3>
                <p className="text-muted-foreground mb-4">{blog.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    Visit Blog <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Essential Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.name} className="p-6 hover:border-primary transition-colors">
                <Badge className="mb-3">{tool.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <Button variant="default" size="sm" asChild>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    Get Tool <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;
