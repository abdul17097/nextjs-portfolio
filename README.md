# Abdul Musavir - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a sleek dark theme with animated backgrounds, smooth transitions, and a professional layout showcasing experience, education, skills, and projects.

## 🚀 Live Demo

[View Live Portfolio](https://preview--polished-code-folio.lovable.app/)

## ✨ Features

### Design & User Experience
- **Modern Dark Theme** with animated gradient backgrounds
- **Fully Responsive Design** that works seamlessly on all devices
- **Smooth Animations** powered by Framer Motion
- **Glass Morphism Effects** on cards and components
- **Interactive Hover Effects** and transitions throughout

### Professional Sections
- **Hero Section** with animated background and introduction
- **About Section** with professional summary
- **Experience & Education Timeline** with detailed work history
- **Skills Showcase** categorized by technology type
- **Project Portfolio** with filterable tabs (All, Full Stack, Frontend, Backend)
- **Contact Form** with social media integration
- **Professional Footer** with navigation links

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Shadcn UI** - Modern component library
- **Lucide React** - Beautiful icons
- **React Icons** - Additional icon library

### State Management & Routing
- **React Router DOM** - Client-side routing
- **TanStack React Query** - Server state management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variant utilities

## 📂 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn UI components
│   ├── projects/        # Project-related components
│   ├── Navigation.tsx   # Main navigation component
│   ├── Header.tsx       # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Experience & education
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Projects section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── data/                # Static data files
│   └── projectsData.ts  # Project information
├── pages/               # Page components
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 page
└── lib/                 # Utility functions
```

## 🎨 Key Features

### Responsive Navigation
- **Desktop**: Horizontal navigation with centered links
- **Mobile**: Hamburger menu with smooth dropdown animation
- **Logo**: "CodeCraft Studio" with gradient styling
- **GitHub Button**: Direct link to profile with icon

### Project Portfolio
- **Filterable Tabs**: View projects by category
- **Project Categories**:
  - All Projects
  - Full Stack Development
  - Frontend Development
  - Backend Development
- **Interactive Cards** with hover effects and project details

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdulmusavir/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Hamburger menu, single column layout
- **Tablet**: 768px - 1024px - Responsive grid layouts
- **Desktop**: > 1024px - Full navigation, multi-column layouts

