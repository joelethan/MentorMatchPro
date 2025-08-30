import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";
import { SkillTag } from "./skill-tag";
import type { MentorProfile } from "@/lib/mock-data";

interface MentorCardProps {
  mentor: MentorProfile;
  onConnect?: (mentorId: string) => void;
}

export function MentorCard({ mentor, onConnect }: MentorCardProps) {
  return (
    <Card className="overflow-hidden mentor-card" data-testid={`mentor-card-${mentor.id}`}>
      <img 
        src={mentor.profileImage} 
        alt={`${mentor.name} profile`} 
        className="w-full h-48 object-cover"
        data-testid={`mentor-image-${mentor.id}`}
      />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground" data-testid={`mentor-name-${mentor.id}`}>
            {mentor.name}
          </h3>
          <div className="flex items-center text-primary">
            <Star className="w-4 h-4 mr-1 fill-current" />
            <span className="font-medium" data-testid={`mentor-rating-${mentor.id}`}>
              {mentor.rating}
            </span>
          </div>
        </div>
        
        <p className="text-primary font-medium mb-2" data-testid={`mentor-title-${mentor.id}`}>
          {mentor.title}
        </p>
        <p className="text-muted-foreground text-sm mb-4" data-testid={`mentor-company-${mentor.id}`}>
          {mentor.company} • {mentor.experience}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.skills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span data-testid={`mentor-mentees-${mentor.id}`}>
              {mentor.totalMentees} mentees
            </span>
          </div>
          <Button 
            onClick={() => onConnect?.(mentor.id)}
            data-testid={`button-connect-${mentor.id}`}
          >
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
