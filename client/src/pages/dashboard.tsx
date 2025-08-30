import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Award, Clock, TrendingUp } from "lucide-react";
import { mockDashboardStats } from "@/lib/mock-data";

export default function Dashboard() {
  const stats = [
    {
      label: "Active Mentorships",
      value: mockDashboardStats.activeMentorships,
      icon: Handshake,
      color: "text-primary"
    },
    {
      label: "Skills Developed",
      value: mockDashboardStats.skillsDeveloped,
      icon: Award,
      color: "text-primary"
    },
    {
      label: "Learning Hours",
      value: mockDashboardStats.learningHours,
      icon: Clock,
      color: "text-primary"
    },
    {
      label: "Career Progress",
      value: `${mockDashboardStats.careerProgress}%`,
      icon: TrendingUp,
      color: "text-primary"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2" data-testid="dashboard-title">
          Dashboard
        </h1>
        <p className="text-muted-foreground" data-testid="dashboard-subtitle">
          Overview of your professional development journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} data-testid={`stat-card-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-foreground" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon className={`${stat.color} w-6 h-6`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4" data-testid="recent-activity-title">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-accent rounded-lg">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Handshake className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground" data-testid="activity-1-title">
                  Connected with Sarah Chen
                </p>
                <p className="text-sm text-muted-foreground" data-testid="activity-1-description">
                  Started mentorship in React Development
                </p>
              </div>
              <span className="text-xs text-muted-foreground" data-testid="activity-1-time">2 days ago</span>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-accent rounded-lg">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground" data-testid="activity-2-title">
                  Completed JavaScript Fundamentals
                </p>
                <p className="text-sm text-muted-foreground" data-testid="activity-2-description">
                  Earned certification in core JavaScript concepts
                </p>
              </div>
              <span className="text-xs text-muted-foreground" data-testid="activity-2-time">1 week ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
