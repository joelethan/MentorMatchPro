import { useState } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { RegistrationModal } from "@/components/registration-modal";
import Dashboard from "@/pages/dashboard";
import Mentors from "@/pages/mentors";
import Roadmaps from "@/pages/roadmaps";
import Resources from "@/pages/resources";
import Tracking from "@/pages/tracking";
import Profile from "@/pages/profile";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/mentors" component={Mentors} />
      <Route path="/roadmaps" component={Roadmaps} />
      <Route path="/resources" component={Resources} />
      <Route path="/tracking" component={Tracking} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex h-screen">
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main className="flex-1 overflow-auto">
            <Header onMenuClick={() => setSidebarOpen(true)} />
            
            <div className="p-6">
              <Router />
            </div>
          </main>
        </div>
        
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
