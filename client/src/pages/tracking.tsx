import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Users, Clock } from "lucide-react";
import { mockSkillProgress, mockAchievements } from "@/lib/mock-data";

export default function Tracking() {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return Trophy;
      case "target":
        return Target;
      case "users":
        return Users;
      default:
        return Target;
    }
  };

  // Calculate circumference for progress ring
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const weeklyProgress = 70;
  const strokeDashoffset = circumference - (weeklyProgress / 100) * circumference;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2" data-testid="tracking-title">
          Progress Tracking
        </h1>
        <p className="text-muted-foreground" data-testid="tracking-subtitle">
          Monitor your skill development and professional growth
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Progress */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="skills-progress-title">
              Skills Development
            </h3>
            
            <div className="space-y-4">
              {mockSkillProgress.map((skill, index) => (
                <div key={index} data-testid={`skill-progress-${index}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground" data-testid={`skill-name-${index}`}>
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground" data-testid={`skill-percentage-${index}`}>
                      {skill.progress}%
                    </span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Goals & Achievements */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="achievements-title">
              Goals & Achievements
            </h3>
            
            <div className="space-y-4">
              {mockAchievements.map((achievement) => {
                const Icon = getAchievementIcon(achievement.icon);
                return (
                  <div 
                    key={achievement.id} 
                    className={`flex items-center space-x-4 p-3 rounded-lg ${
                      achievement.isCompleted ? "bg-accent" : "border border-border"
                    }`}
                    data-testid={`achievement-${achievement.id}`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.isCompleted ? "bg-primary" : "bg-muted"
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        achievement.isCompleted ? "text-primary-foreground" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground" data-testid={`achievement-title-${achievement.id}`}>
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`achievement-description-${achievement.id}`}>
                        {achievement.description}
                      </p>
                    </div>
                    <span className={`text-xs font-medium ${
                      achievement.isCompleted ? "text-primary" : "text-muted-foreground"
                    }`} data-testid={`achievement-date-${achievement.id}`}>
                      {achievement.completedAt || "In Progress"}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Learning Analytics */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="analytics-title">
            Learning Analytics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-20 h-20 transform -rotate-90" data-testid="progress-ring">
                  <circle 
                    cx="40" 
                    cy="40" 
                    r={radius} 
                    stroke="currentColor" 
                    strokeWidth="6" 
                    fill="transparent" 
                    className="text-muted" 
                  />
                  <circle 
                    cx="40" 
                    cy="40" 
                    r={radius} 
                    stroke="currentColor" 
                    strokeWidth="6" 
                    fill="transparent" 
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="text-primary progress-ring" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground" data-testid="weekly-goal-percentage">
                    {weeklyProgress}%
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground" data-testid="weekly-goal-label">Weekly Goal</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1" data-testid="monthly-hours">47</div>
              <p className="text-sm text-muted-foreground">Hours This Month</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1" data-testid="courses-completed">12</div>
              <p className="text-sm text-muted-foreground">Courses Completed</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1" data-testid="skill-points">89</div>
              <p className="text-sm text-muted-foreground">Skill Points</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
