# Overview

This is a professional mentorship and career development platform built with React and Express. The application connects mentees with experienced mentors across various industries, providing structured career roadmaps, learning resources, and progress tracking capabilities. The platform enables users to discover mentors, follow personalized career paths, access curated learning content, and monitor their professional growth through an intuitive dashboard interface.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 using TypeScript and Vite as the build tool. The application follows a component-based architecture with:

- **UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both light and dark modes
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Development**: Vite with HMR and development error overlays for enhanced developer experience

The application uses a page-based structure with shared layout components (Header, Sidebar) and follows modern React patterns with hooks and functional components.

## Backend Architecture
The backend uses Express.js with TypeScript in ESM format, providing a RESTful API structure:

- **Server Framework**: Express.js with middleware for JSON parsing, URL encoding, and request logging
- **Development Setup**: Hot reloading with tsx and custom Vite integration for development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be easily replaced with database implementations
- **API Structure**: Centralized route registration with /api prefix for all endpoints
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
The application uses a dual approach for data persistence:

- **Development Storage**: In-memory storage implementation for rapid development and testing
- **Production Ready**: Drizzle ORM configuration with PostgreSQL support via Neon Database
- **Schema Management**: Centralized database schema definition in TypeScript with Zod validation
- **Migration Support**: Drizzle Kit for database migrations and schema management

The database schema includes tables for users, mentors, skills, mentorships, roadmaps, and progress tracking with proper relationships and constraints.

## Authentication and Authorization
Currently implemented as a placeholder system with:

- **User Management**: Basic user CRUD operations through the storage interface
- **Session Handling**: Express session support with PostgreSQL session store (connect-pg-simple)
- **Role-Based Access**: User roles (mentee/mentor) defined in the schema for future authorization implementation

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query for frontend state management
- **Express.js**: Server framework with TypeScript support
- **Vite**: Build tool and development server with React plugin and runtime error overlay

### UI and Styling
- **shadcn/ui**: Complete UI component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Accessible component primitives for complex UI components
- **Lucide React**: Icon library for consistent iconography

### Database and ORM
- **Neon Database**: PostgreSQL-compatible serverless database (@neondatabase/serverless)
- **Drizzle ORM**: TypeScript ORM with Zod integration for type safety
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Tools
- **TypeScript**: Static type checking across the entire stack
- **Zod**: Runtime type validation and schema definition
- **ESBuild**: Fast bundling for production builds
- **Replit Integration**: Development environment support with cartographer and error modal plugins

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx & class-variance-authority**: Conditional CSS class management
- **nanoid**: Unique ID generation
- **wouter**: Lightweight router for React applications