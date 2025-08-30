export interface MentorProfile {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: string;
  rating: number;
  totalMentees: number;
  skills: string[];
  profileImage: string;
  bio: string;
  industry: string;
  availability: string;
}

export interface SkillProgress {
  name: string;
  progress: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  completedAt?: string;
  isCompleted: boolean;
  icon: string;
}

export interface LearningResource {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'article' | 'webinar';
  duration?: string;
  rating?: number;
  reviews?: number;
  author?: string;
  date?: string;
  image?: string;
}

export const mockMentors: MentorProfile[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Software Engineer",
    company: "Google",
    experience: "8 years experience",
    rating: 4.9,
    totalMentees: 24,
    skills: ["React", "Node.js", "AWS"],
    profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Experienced software engineer passionate about mentoring the next generation of developers.",
    industry: "Technology",
    availability: "Weekends"
  },
  {
    id: "2",
    name: "Jessica Rodriguez",
    title: "Marketing Director",
    company: "HubSpot",
    experience: "6 years experience",
    rating: 4.8,
    totalMentees: 18,
    skills: ["Digital Marketing", "SEO", "Analytics"],
    profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Marketing professional focused on data-driven growth strategies and team development.",
    industry: "Marketing",
    availability: "Evenings"
  },
  {
    id: "3",
    name: "Michael Thompson",
    title: "Design Lead",
    company: "Figma",
    experience: "7 years experience",
    rating: 4.9,
    totalMentees: 31,
    skills: ["UI/UX Design", "Figma", "Design Systems"],
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Design leader with expertise in building scalable design systems and user experiences.",
    industry: "Design",
    availability: "Flexible"
  },
  {
    id: "4",
    name: "David Kim",
    title: "Product Manager",
    company: "Spotify",
    experience: "9 years experience",
    rating: 4.7,
    totalMentees: 22,
    skills: ["Product Strategy", "Agile", "User Research"],
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Product manager passionate about building user-centered products that scale.",
    industry: "Technology",
    availability: "Weekdays"
  },
  {
    id: "5",
    name: "Emily Watson",
    title: "Data Scientist",
    company: "Netflix",
    experience: "5 years experience",
    rating: 4.8,
    totalMentees: 16,
    skills: ["Python", "Machine Learning", "SQL"],
    profileImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Data scientist specializing in recommendation systems and machine learning applications.",
    industry: "Technology",
    availability: "Weekends"
  },
  {
    id: "6",
    name: "Robert Garcia",
    title: "Finance Director",
    company: "Goldman Sachs",
    experience: "12 years experience",
    rating: 4.9,
    totalMentees: 28,
    skills: ["Financial Analysis", "Investment", "Risk Management"],
    profileImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Finance executive with deep expertise in investment banking and portfolio management.",
    industry: "Finance",
    availability: "Evenings"
  }
];

export const mockSkillProgress: SkillProgress[] = [
  { name: "React Development", progress: 85 },
  { name: "Node.js", progress: 72 },
  { name: "AWS Cloud", progress: 58 },
  { name: "Leadership", progress: 43 },
  { name: "Python", progress: 67 },
  { name: "TypeScript", progress: 78 }
];

export const mockAchievements: Achievement[] = [
  {
    id: "1",
    title: "Full-Stack Certification",
    description: "Completed React & Node.js specialization",
    completedAt: "Dec 10",
    isCompleted: true,
    icon: "trophy"
  },
  {
    id: "2",
    title: "AWS Certification",
    description: "Target: Solutions Architect Associate",
    isCompleted: false,
    icon: "target"
  },
  {
    id: "3",
    title: "Team Lead Role",
    description: "Transition to leadership position",
    completedAt: "Q2 2024",
    isCompleted: false,
    icon: "users"
  }
];

export const mockLearningResources: LearningResource[] = [
  {
    id: "1",
    title: "Advanced React Development",
    description: "Master advanced React patterns, hooks, and performance optimization techniques.",
    type: "course",
    duration: "8 hours",
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200"
  },
  {
    id: "2",
    title: "Building Effective Mentor Relationships",
    description: "Learn how to maximize the value of your mentorship connections and accelerate your career growth.",
    type: "article",
    duration: "5 min read",
    author: "Sarah Mitchell"
  },
  {
    id: "3",
    title: "Career Transition Strategies",
    description: "Join industry experts discussing successful career transition approaches and networking strategies.",
    type: "webinar",
    date: "Dec 15, 2:00 PM"
  }
];

export const mockCareerRoadmaps = [
  {
    id: "1",
    title: "Software Development",
    status: "In Progress",
    progress: 65,
    steps: [
      {
        title: "Programming Fundamentals",
        description: "JavaScript, Python, Git",
        status: "completed"
      },
      {
        title: "Frontend Development",
        description: "React, HTML, CSS, TypeScript",
        status: "completed"
      },
      {
        title: "Backend Development",
        description: "Node.js, Databases, APIs",
        status: "current"
      },
      {
        title: "DevOps & Cloud",
        description: "AWS, Docker, CI/CD",
        status: "upcoming"
      }
    ]
  },
  {
    id: "2",
    title: "Digital Marketing",
    status: "Not Started",
    progress: 0,
    steps: [
      {
        title: "Marketing Fundamentals",
        description: "Consumer Psychology, Market Research",
        status: "upcoming"
      },
      {
        title: "Content Marketing",
        description: "Content Strategy, SEO, Copywriting",
        status: "upcoming"
      },
      {
        title: "Paid Advertising",
        description: "Google Ads, Facebook Ads, Analytics",
        status: "upcoming"
      }
    ]
  }
];

export const mockIndustryTrends = [
  {
    name: "AI/Machine Learning",
    growth: "45%",
    description: "Growing demand for AI specialists across industries"
  },
  {
    name: "Remote Work Skills",
    growth: "32%",
    description: "Essential skills for distributed team collaboration"
  },
  {
    name: "Data Analysis",
    growth: "28%",
    description: "Data-driven decision making becoming standard"
  }
];

export const mockUserProfile = {
  id: "1",
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  title: "Software Developer",
  company: "Tech Startup",
  location: "San Francisco, CA",
  bio: "Passionate software developer with 3 years of experience in full-stack web development. Eager to learn from experienced mentors and grow in leadership roles.",
  skills: ["JavaScript", "React", "Node.js", "Python"],
  careerGoals: "Transition to a senior developer role within 2 years and eventually move into technical leadership positions.",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
  profileCompletion: 85
};

export const mockDashboardStats = {
  activeMentorships: 3,
  skillsDeveloped: 12,
  learningHours: 47,
  careerProgress: 68
};
