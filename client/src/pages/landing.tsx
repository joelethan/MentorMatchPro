import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  BookOpen, 
  TrendingUp, 
  Star, 
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  MessageSquare
} from "lucide-react";
import { RegistrationModal } from "@/components/registration-modal";
import { Link } from "wouter";

export default function LandingPage() {
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Connect with industry professionals from top companies worldwide"
    },
    {
      icon: Target,
      title: "Personalized Roadmaps",
      description: "Get custom career paths tailored to your goals and skill level"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access curated content and courses to accelerate your growth"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your development with detailed analytics and insights"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content: "CareerConnect helped me transition from junior to senior developer in just 18 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Netflix",
      content: "The mentorship I received was invaluable for my career growth and leadership skills.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Figma",
      content: "Found my mentor here and landed my dream job. The platform is game-changing!",
      rating: 5
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Mentees" },
    { value: "2K+", label: "Expert Mentors" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Industries" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary" data-testid="landing-logo">
                CareerConnect
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Success Stories
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" data-testid="button-sign-in">
                  Sign In
                </Button>
              </Link>
              <Button 
                onClick={() => setRegistrationModalOpen(true)}
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6" data-testid="hero-badge">
            🚀 Join 10,000+ professionals accelerating their careers
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight" data-testid="hero-title">
            Connect with
            <span className="text-primary"> Expert Mentors</span>
            <br />
            Transform Your Career
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-description">
            Get personalized guidance from industry leaders, follow structured career roadmaps, 
            and accelerate your professional growth with AI-powered matching.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => setRegistrationModalOpen(true)}
              data-testid="button-start-journey"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              data-testid="button-explore"
            >
              <Link href="/mentors">
                Explore Mentors
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-accent/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} data-testid={`stat-${index}`}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="features-title">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="features-description">
              Our comprehensive platform provides all the tools and guidance you need 
              to accelerate your professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`feature-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from professionals who transformed their careers with CareerConnect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`testimonial-card-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" data-testid="cta-description">
            Join thousands of professionals who are already transforming their careers 
            with expert mentorship and personalized guidance.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => setRegistrationModalOpen(true)}
            data-testid="button-join-now"
          >
            Join CareerConnect Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-primary">CareerConnect</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting ambitious professionals with expert mentors worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Find Mentors</div>
                <div>Career Roadmaps</div>
                <div>Learning Resources</div>
                <div>Progress Tracking</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>About Us</div>
                <div>Careers</div>
                <div>Contact</div>
                <div>Privacy Policy</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Support</div>
                <div>Community</div>
                <div>Blog</div>
                <div>Newsletter</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 CareerConnect. All rights reserved.
          </div>
        </div>
      </footer>

      <RegistrationModal 
        isOpen={registrationModalOpen}
        onClose={() => setRegistrationModalOpen(false)}
      />
    </div>
  );
}