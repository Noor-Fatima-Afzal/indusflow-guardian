import { Link, useLocation } from "react-router-dom";
import { Waves, BarChart3, Map, Users, Shield, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Waves },
    { name: "Dashboard", path: "/dashboard", icon: Map },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Decision Support", path: "/decision", icon: Shield },
    { name: "Community", path: "/community", icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Waves className="h-6 w-6 sm:h-8 sm:w-8 text-accent group-hover:text-secondary transition-colors" />
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-foreground">IndusTwin</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">Digital Twin Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300",
                    isActive
                      ? "bg-accent/20 text-accent font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/dashboard"
            className="hidden lg:flex items-center px-6 py-2 bg-gradient-primary rounded-lg text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm font-medium">View Live Data</span>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-md transition-all duration-300",
                    isActive
                      ? "bg-accent/20 text-accent font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link to="/dashboard" className="block mt-2">
              <Button variant="hero" className="w-full">
                View Live Data
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
