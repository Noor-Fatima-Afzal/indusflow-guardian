import { Link, useLocation } from "react-router-dom";
import { Waves, BarChart3, Map, Users, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Waves },
    { name: "Dashboard", path: "/dashboard", icon: Map },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Decision Support", path: "/decision", icon: Shield },
    { name: "Community", path: "/community", icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Waves className="h-8 w-8 text-accent group-hover:text-secondary transition-colors" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">IndusTwin</span>
              <span className="text-xs text-muted-foreground">Digital Twin Platform</span>
            </div>
          </Link>

          {/* Navigation Links */}
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

          {/* CTA Button */}
          <Link
            to="/dashboard"
            className="hidden lg:flex items-center px-6 py-2 bg-gradient-primary rounded-lg text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm font-medium">View Live Data</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
