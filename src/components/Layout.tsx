import { Link, useLocation } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const roadmaps = [
    { name: "Frontend", path: "/frontend" },
    { name: "Backend", path: "/backend" },
    { name: "DevOps", path: "/devops" },
    { name: "Data Science", path: "/datascience" },
    { name: "Cybersecurity", path: "/cybersecurity" },
    { name: "Mobile", path: "/mobile" },
    { name: "UI/UX", path: "/uiux" },
    { name: "Game Dev", path: "/gamedev" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <Code2 className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CodeAtlas
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1">
                {roadmaps.map((roadmap) => (
                  <Link
                    key={roadmap.path}
                    to={roadmap.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(roadmap.path)
                        ? "text-primary bg-card"
                        : "text-muted-foreground hover:text-foreground hover:bg-card"
                    }`}
                  >
                    {roadmap.name}
                  </Link>
                ))}
              </div>
              <Link to="/resources">
                <Button variant={isActive("/resources") ? "default" : "outline"} size="sm">
                  Resources
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {roadmaps.map((roadmap) => (
                <Link
                  key={roadmap.path}
                  to={roadmap.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(roadmap.path)
                      ? "text-primary bg-card"
                      : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {roadmap.name}
                </Link>
              ))}
              <Link
                to="/resources"
                className="block"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant={isActive("/resources") ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                >
                  Resources
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main>{children}</main>

      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CodeAtlas</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your guide to becoming a better developer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
