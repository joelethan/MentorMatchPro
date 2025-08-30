import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, Star, TrendingUp } from "lucide-react";
import { mockLearningResources, mockIndustryTrends } from "@/lib/mock-data";

export default function Resources() {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "course":
        return "📚";
      case "article":
        return "📰";
      case "webinar":
        return "🎥";
      default:
        return "📄";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2" data-testid="resources-title">
          Learning Resources
        </h1>
        <p className="text-muted-foreground" data-testid="resources-subtitle">
          Curated content to accelerate your professional growth
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockLearningResources.map((resource) => (
          <Card key={resource.id} data-testid={`resource-card-${resource.id}`}>
            {resource.image && (
              <img 
                src={resource.image} 
                alt={resource.title} 
                className="w-full h-48 object-cover"
                data-testid={`resource-image-${resource.id}`}
              />
            )}
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge 
                  variant={resource.type === "course" ? "default" : "secondary"}
                  data-testid={`resource-type-${resource.id}`}
                >
                  {getResourceIcon(resource.type)} {resource.type}
                </Badge>
                {resource.rating && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                    <span data-testid={`resource-rating-${resource.id}`}>
                      {resource.rating} ({resource.reviews})
                    </span>
                  </div>
                )}
                {resource.type === "webinar" && (
                  <span className="text-sm text-primary font-medium" data-testid={`resource-status-${resource.id}`}>
                    Live Tomorrow
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`resource-title-${resource.id}`}>
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4" data-testid={`resource-description-${resource.id}`}>
                {resource.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  {resource.duration && (
                    <>
                      <Clock className="w-4 h-4 mr-1" />
                      <span data-testid={`resource-duration-${resource.id}`}>{resource.duration}</span>
                    </>
                  )}
                  {resource.author && (
                    <>
                      <User className="w-4 h-4 mr-1" />
                      <span data-testid={`resource-author-${resource.id}`}>{resource.author}</span>
                    </>
                  )}
                  {resource.date && (
                    <>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span data-testid={`resource-date-${resource.id}`}>{resource.date}</span>
                    </>
                  )}
                </div>
                <Button 
                  size="sm"
                  data-testid={`button-${resource.type === "course" ? "enroll" : resource.type === "webinar" ? "register" : "read"}-${resource.id}`}
                >
                  {resource.type === "course" ? "Enroll" : 
                   resource.type === "webinar" ? "Register" : "Read More"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Industry Trends Section */}
      <Card className="bg-gradient-to-r from-accent to-primary/5 border border-border">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="trends-title">
            Current Industry Trends
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockIndustryTrends.map((trend, index) => (
              <div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50"
                data-testid={`trend-card-${index}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground" data-testid={`trend-name-${index}`}>
                    {trend.name}
                  </h4>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span data-testid={`trend-growth-${index}`}>{trend.growth}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground" data-testid={`trend-description-${index}`}>
                  {trend.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
