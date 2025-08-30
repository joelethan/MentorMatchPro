import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { SkillTag } from "@/components/skill-tag";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { mockUserProfile } from "@/lib/mock-data";

const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  title: z.string().min(1, "Professional title is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  careerGoals: z.string().min(10, "Career goals must be at least 10 characters"),
  newSkill: z.string().optional(),
});

export default function Profile() {
  const [skills, setSkills] = useState(mockUserProfile.skills);
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: mockUserProfile.name.split(" ")[0],
      lastName: mockUserProfile.name.split(" ")[1],
      title: mockUserProfile.title,
      bio: mockUserProfile.bio,
      careerGoals: mockUserProfile.careerGoals,
      newSkill: "",
    },
  });

  const onSubmit = (values: z.infer<typeof profileSchema>) => {
    console.log("Profile updated:", values);
    setIsEditing(false);
    // TODO: Implement actual profile update logic
  };

  const addSkill = () => {
    const newSkill = form.getValues("newSkill");
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      form.setValue("newSkill", "");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2" data-testid="profile-title">
          My Profile
        </h1>
        <p className="text-muted-foreground" data-testid="profile-subtitle">
          Manage your professional profile and preferences
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <img 
                  src={mockUserProfile.profileImage} 
                  alt="Profile photo" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-border"
                  data-testid="profile-image"
                />
                <h3 className="text-xl font-semibold text-foreground" data-testid="profile-name">
                  {mockUserProfile.name}
                </h3>
                <p className="text-muted-foreground" data-testid="profile-title-display">
                  {mockUserProfile.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1" data-testid="profile-location">
                  {mockUserProfile.location}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Profile Completion</span>
                  <span className="text-sm font-medium text-foreground" data-testid="profile-completion">
                    {mockUserProfile.profileCompletion}%
                  </span>
                </div>
                <Progress value={mockUserProfile.profileCompletion} className="h-2" />
              </div>
              
              <Button 
                className="w-full mt-6"
                onClick={() => setIsEditing(!isEditing)}
                data-testid="button-edit-profile"
              >
                {isEditing ? "Cancel Edit" : "Edit Profile"}
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Profile Details Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6" data-testid="profile-info-title">
                Profile Information
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} data-testid="input-first-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} data-testid="input-last-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Title</FormLabel>
                        <FormControl>
                          <Input {...field} disabled={!isEditing} data-testid="input-title" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} disabled={!isEditing} data-testid="textarea-bio" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">Skills</Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {skills.map((skill, index) => (
                        <SkillTag 
                          key={index} 
                          className={isEditing ? "cursor-pointer hover:bg-destructive/20" : ""}
                          onClick={isEditing ? () => removeSkill(skill) : undefined}
                        >
                          {skill} {isEditing && "×"}
                        </SkillTag>
                      ))}
                    </div>
                    {isEditing && (
                      <div className="flex gap-2">
                        <FormField
                          control={form.control}
                          name="newSkill"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input 
                                  placeholder="Add new skill..." 
                                  {...field} 
                                  data-testid="input-new-skill"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="button" 
                          onClick={addSkill}
                          data-testid="button-add-skill"
                        >
                          Add
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="careerGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Career Goals</FormLabel>
                        <FormControl>
                          <Textarea rows={3} {...field} disabled={!isEditing} data-testid="textarea-career-goals" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {isEditing && (
                    <div className="flex justify-end space-x-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                        data-testid="button-cancel"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" data-testid="button-save-profile">
                        Save Changes
                      </Button>
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
