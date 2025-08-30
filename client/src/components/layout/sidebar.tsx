import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Route, 
  BookOpen, 
  TrendingUp, 
  UserCircle,
  X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/mentors", icon: Users, label: "Find Mentors" },
  { href: "/roadmaps", icon: Route, label: "Career Roadmaps" },
  { href: "/resources", icon: BookOpen, label: "Learning Resources" },
  { href: "/tracking", icon: TrendingUp, label: "Progress Tracking" },
  { href: "/profile", icon: UserCircle, label: "My Profile" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [location] = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
          data-testid="sidebar-overlay"
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "w-64 bg-card shadow-lg border-r border-border sidebar-transition md:translate-x-0 fixed md:static inset-y-0 left-0 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
        data-testid="sidebar"
      >
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary" data-testid="app-title">
                CareerConnect
              </h1>
              <p className="text-sm text-muted-foreground mt-1" data-testid="app-subtitle">
                Professional Mentorship Platform
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={onClose}
              data-testid="button-close-sidebar"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <a 
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg transition-colors w-full",
                    isActive 
                      ? "text-primary bg-accent" 
                      : "text-foreground hover:bg-accent"
                  )}
                  onClick={onClose}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-accent p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2" data-testid="upgrade-title">
              Upgrade to Pro
            </h4>
            <p className="text-sm text-muted-foreground mb-3" data-testid="upgrade-description">
              Get unlimited mentor connections
            </p>
            <Button 
              className="w-full"
              data-testid="button-upgrade"
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
