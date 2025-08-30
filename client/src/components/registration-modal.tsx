import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const menteeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  currentRole: z.string().optional(),
  industryInterest: z.string().optional(),
  careerGoals: z.string().optional(),
});

const mentorSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  currentPosition: z.string().min(1, "Current position is required"),
  company: z.string().min(1, "Company is required"),
  yearsExperience: z.string().min(1, "Experience level is required"),
  expertiseAreas: z.string().min(1, "Expertise areas are required"),
  motivation: z.string().optional(),
});

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [activeTab, setActiveTab] = useState("mentee");

  const menteeForm = useForm<z.infer<typeof menteeSchema>>({
    resolver: zodResolver(menteeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      currentRole: "",
      industryInterest: "",
      careerGoals: "",
    },
  });

  const mentorForm = useForm<z.infer<typeof mentorSchema>>({
    resolver: zodResolver(mentorSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      currentPosition: "",
      company: "",
      yearsExperience: "",
      expertiseAreas: "",
      motivation: "",
    },
  });

  const onMenteeSubmit = (values: z.infer<typeof menteeSchema>) => {
    console.log("Mentee registration:", values);
    // TODO: Implement actual registration logic
    onClose();
  };

  const onMentorSubmit = (values: z.infer<typeof mentorSchema>) => {
    console.log("Mentor registration:", values);
    // TODO: Implement actual registration logic
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto" data-testid="registration-modal">
        <DialogHeader>
          <DialogTitle data-testid="modal-title">Join CareerConnect</DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mentee" data-testid="tab-mentee">As Mentee</TabsTrigger>
            <TabsTrigger value="mentor" data-testid="tab-mentor">As Mentor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mentee" className="mt-6">
            <Form {...menteeForm}>
              <form onSubmit={menteeForm.handleSubmit(onMenteeSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={menteeForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-first-name-mentee" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={menteeForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-last-name-mentee" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={menteeForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} data-testid="input-email-mentee" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={menteeForm.control}
                  name="currentRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Role</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Student, Junior Developer" {...field} data-testid="input-current-role" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={menteeForm.control}
                  name="industryInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-industry">
                            <SelectValue placeholder="Select Industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={menteeForm.control}
                  name="careerGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Career Goals</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your career aspirations..." 
                          rows={3} 
                          {...field} 
                          data-testid="textarea-career-goals"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" data-testid="button-register-mentee">
                  Create Mentee Account
                </Button>
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="mentor" className="mt-6">
            <Form {...mentorForm}>
              <form onSubmit={mentorForm.handleSubmit(onMentorSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={mentorForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-first-name-mentor" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={mentorForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-last-name-mentor" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={mentorForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} data-testid="input-email-mentor" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={mentorForm.control}
                  name="currentPosition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Position *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Senior Software Engineer" {...field} data-testid="input-current-position" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={mentorForm.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company *</FormLabel>
                      <FormControl>
                        <Input {...field} data-testid="input-company" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={mentorForm.control}
                  name="yearsExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-experience">
                            <SelectValue placeholder="Select Experience" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                          <SelectItem value="15+">15+ years</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={mentorForm.control}
                  name="expertiseAreas"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expertise Areas *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., JavaScript, React, Leadership" {...field} data-testid="input-expertise" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={mentorForm.control}
                  name="motivation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to mentor?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share your motivation for mentoring..." 
                          rows={3} 
                          {...field} 
                          data-testid="textarea-motivation"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" data-testid="button-register-mentor">
                  Apply as Mentor
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
