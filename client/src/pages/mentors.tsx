import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { MentorCard } from "@/components/mentor-card";
import { mockMentors } from "@/lib/mock-data";

export default function Mentors() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedExperience, setSelectedExperience] = useState<string>("");

  const handleConnect = (mentorId: string) => {
    console.log("Connecting with mentor:", mentorId);
    // TODO: Implement actual connection logic
  };

  const filteredMentors = mockMentors.filter(mentor => {
    if (selectedIndustry && mentor.industry !== selectedIndustry) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground" data-testid="mentors-title">
            Discover Mentors
          </h1>
          <p className="text-muted-foreground" data-testid="mentors-subtitle">
            Connect with experienced professionals in your field
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger className="w-48" data-testid="select-industry-filter">
              <SelectValue placeholder="All Industries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Industries</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedExperience} onValueChange={setSelectedExperience}>
            <SelectTrigger className="w-48" data-testid="select-experience-filter">
              <SelectValue placeholder="Experience Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Levels</SelectItem>
              <SelectItem value="5+">5+ Years</SelectItem>
              <SelectItem value="10+">10+ Years</SelectItem>
              <SelectItem value="senior">Senior Executive</SelectItem>
            </SelectContent>
          </Select>
          
          <Button data-testid="button-filter">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>
      
      {/* Skills Matching Banner */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent border border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="matching-title">
                AI-Powered Skills Matching
              </h3>
              <p className="text-muted-foreground" data-testid="matching-description">
                Based on your profile, we've found {filteredMentors.length} highly compatible mentors
              </p>
            </div>
            <Button data-testid="button-view-matches">
              View Matches
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Mentor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <MentorCard 
            key={mentor.id} 
            mentor={mentor} 
            onConnect={handleConnect}
          />
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground" data-testid="no-mentors-message">
              No mentors found matching your criteria. Try adjusting your filters.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
