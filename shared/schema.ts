import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  role: text("role").notNull(), // 'mentee' or 'mentor'
  title: text("title"),
  company: text("company"),
  bio: text("bio"),
  location: text("location"),
  experience: text("experience"),
  industry: text("industry"),
  profileImage: text("profile_image"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const mentors = pgTable("mentors", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  rating: integer("rating").default(0),
  totalMentees: integer("total_mentees").default(0),
  isVerified: boolean("is_verified").default(false),
  hourlyRate: integer("hourly_rate"),
  availability: text("availability"),
  expertise: text("expertise").array(),
  yearsExperience: integer("years_experience"),
});

export const skills = pgTable("skills", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  category: text("category").notNull(),
});

export const userSkills = pgTable("user_skills", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  skillId: varchar("skill_id").references(() => skills.id).notNull(),
  proficiency: integer("proficiency").default(0), // 0-100
});

export const mentorships = pgTable("mentorships", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  mentorId: varchar("mentor_id").references(() => mentors.id).notNull(),
  menteeId: varchar("mentee_id").references(() => users.id).notNull(),
  status: text("status").notNull().default("pending"), // pending, active, completed
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const careerRoadmaps = pgTable("career_roadmaps", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  industry: text("industry").notNull(),
  steps: text("steps").array(),
  estimatedDuration: text("estimated_duration"),
});

export const userProgress = pgTable("user_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  roadmapId: varchar("roadmap_id").references(() => careerRoadmaps.id).notNull(),
  currentStep: integer("current_step").default(0),
  progress: integer("progress").default(0), // 0-100
  startedAt: timestamp("started_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertMentorSchema = createInsertSchema(mentors).omit({
  id: true,
});

export const insertMentorshipSchema = createInsertSchema(mentorships).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertMentor = z.infer<typeof insertMentorSchema>;
export type Mentor = typeof mentors.$inferSelect;
export type InsertMentorship = z.infer<typeof insertMentorshipSchema>;
export type Mentorship = typeof mentorships.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type UserSkill = typeof userSkills.$inferSelect;
export type CareerRoadmap = typeof careerRoadmaps.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
