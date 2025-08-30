import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Menu, Search } from "lucide-react";
import { mockUserProfile } from "@/lib/mock-data";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-card shadow-sm border-b border-border p-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={onMenuClick}
            data-testid="button-menu"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="hidden md:block">
            <h2 className="text-xl font-semibold text-foreground" data-testid="welcome-message">
              Welcome back, {mockUserProfile.name}!
            </h2>
            <p className="text-sm text-muted-foreground" data-testid="welcome-subtitle">
              Continue your professional growth journey
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Input
              type="search"
              placeholder="Search mentors, skills..."
              className="pl-10 pr-4 py-2 w-80"
              data-testid="input-search"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="relative"
            data-testid="button-notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              3
            </span>
          </Button>
          
          <div className="flex items-center space-x-3">
            <img 
              src={mockUserProfile.profileImage} 
              alt="User profile picture" 
              className="w-10 h-10 rounded-full border-2 border-border"
              data-testid="user-avatar"
            />
            <div className="hidden sm:block">
              <p className="font-medium text-foreground" data-testid="user-name">
                {mockUserProfile.name}
              </p>
              <p className="text-sm text-muted-foreground" data-testid="user-title">
                {mockUserProfile.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
