import { useState } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { RegistrationModal } from "@/components/registration-modal";
import LandingPage from "@/pages/landing";
import Dashboard from "@/pages/dashboard";
import Mentors from "@/pages/mentors";
import Roadmaps from "@/pages/roadmaps";
import Resources from "@/pages/resources";
import Tracking from "@/pages/tracking";
import Profile from "@/pages/profile";
import NotFound from "@/pages/not-found";

function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <main className="flex-1 overflow-auto">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

function DashboardWrapper() {
  return (
    <AppLayout>
      <Dashboard />
    </AppLayout>
  );
}

function MentorsWrapper() {
  return (
    <AppLayout>
      <Mentors />
    </AppLayout>
  );
}

function RoadmapsWrapper() {
  return (
    <AppLayout>
      <Roadmaps />
    </AppLayout>
  );
}

function ResourcesWrapper() {
  return (
    <AppLayout>
      <Resources />
    </AppLayout>
  );
}

function TrackingWrapper() {
  return (
    <AppLayout>
      <Tracking />
    </AppLayout>
  );
}

function ProfileWrapper() {
  return (
    <AppLayout>
      <Profile />
    </AppLayout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/dashboard" component={DashboardWrapper} />
      <Route path="/mentors" component={MentorsWrapper} />
      <Route path="/roadmaps" component={RoadmapsWrapper} />
      <Route path="/resources" component={ResourcesWrapper} />
      <Route path="/tracking" component={TrackingWrapper} />
      <Route path="/profile" component={ProfileWrapper} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        
        <RegistrationModal 
          isOpen={registrationModalOpen}
          onClose={() => setRegistrationModalOpen(false)}
        />
        
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
