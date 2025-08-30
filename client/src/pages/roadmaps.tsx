import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Target } from "lucide-react";
import { mockCareerRoadmaps } from "@/lib/mock-data";

export default function Roadmaps() {
  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-primary-foreground" />;
      case "current":
        return <div className="w-3 h-3 bg-primary rounded-full" />;
      default:
        return <div className="w-3 h-3 bg-muted-foreground rounded-full" />;
    }
  };

  const getStepBg = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-primary";
      case "current":
        return "bg-primary/20 border-2 border-primary";
      default:
        return "bg-muted border-2 border-border";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2" data-testid="roadmaps-title">
          Career Roadmaps
        </h1>
        <p className="text-muted-foreground" data-testid="roadmaps-subtitle">
          Explore structured paths for professional growth in your field
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockCareerRoadmaps.map((roadmap) => (
          <Card key={roadmap.id} data-testid={`roadmap-card-${roadmap.id}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground" data-testid={`roadmap-title-${roadmap.id}`}>
                  {roadmap.title}
                </h3>
                <Badge 
                  variant={roadmap.status === "In Progress" ? "default" : "secondary"}
                  data-testid={`roadmap-status-${roadmap.id}`}
                >
                  {roadmap.status}
                </Badge>
              </div>
              
              {/* Roadmap Steps */}
              <div className="space-y-4">
                {roadmap.steps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getStepBg(step.status)}`}>
                      {getStepIcon(step.status)}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${step.status === "upcoming" ? "text-muted-foreground" : "text-foreground"}`}>
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    <span className={`text-sm font-medium ${
                      step.status === "completed" ? "text-primary" : 
                      step.status === "current" ? "text-muted-foreground" : 
                      "text-muted-foreground"
                    }`}>
                      {step.status === "completed" ? "Completed" : 
                       step.status === "current" ? "Current" : "Upcoming"}
                    </span>
                  </div>
                ))}
              </div>
              
              {roadmap.progress > 0 && (
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground" data-testid={`roadmap-progress-${roadmap.id}`}>
                      {roadmap.progress}% Complete
                    </span>
                  </div>
                  <Progress value={roadmap.progress} className="h-2" />
                </div>
              )}
              
              {roadmap.status === "Not Started" ? (
                <Button 
                  className="w-full mt-6"
                  data-testid={`button-start-roadmap-${roadmap.id}`}
                >
                  Start Roadmap
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  className="w-full mt-6"
                  data-testid={`button-continue-roadmap-${roadmap.id}`}
                >
                  Continue Learning
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Create Custom Roadmap */}
      <Card className="border-dashed border-2 border-border">
        <CardContent className="p-12 text-center">
          <Target className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="custom-roadmap-title">
            Create Custom Roadmap
          </h3>
          <p className="text-muted-foreground mb-4" data-testid="custom-roadmap-description">
            Build a personalized career path tailored to your specific goals and interests
          </p>
          <Button data-testid="button-create-roadmap">
            Create Roadmap
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
