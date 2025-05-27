
import { FaReact, FaNodeJs, FaShoppingCart, FaLock, FaGlobe, FaStore } from 'react-icons/fa';
import { MdInventory, MdDesktopMac } from 'react-icons/md';
import { BiCode } from 'react-icons/bi';
import { IconType } from 'react-icons';

export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: IconType;
    mockupImage: string;
    liveLink: string;
    codeLink: string;
    category: string;
    featured: boolean;
}

export const projectCategories: Record<string, Project[]> = {
    all: [
        // Full Stack Projects
        {
            title: "E-Commerce Platform",
            description: "A comprehensive e-commerce solution with advanced features including user authentication, product management, shopping cart, secure payment processing with Stripe, order tracking, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
            image: FaShoppingCart,
            mockupImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
            liveLink: "https://ecommerce-demo.example.com",
            codeLink: "https://github.com/abdulmusavir/ecommerce-platform",
            category: "Full Stack",
            featured: true
        },
        {
            title: "POS & Inventory Management System",
            description: "Enterprise-level Point of Sale and Inventory management system designed for retail businesses. Features real-time inventory tracking, sales analytics, employee management, multi-location support, and comprehensive reporting dashboard.",
            tech: ["React", "Node.js", "PostgreSQL", "Express", "Chart.js", "Socket.io"],
            image: MdInventory,
            mockupImage: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop",
            liveLink: "https://pos-system-demo.example.com",
            codeLink: "https://github.com/abdulmusavir/pos-inventory-system",
            category: "Full Stack",
            featured: true
        },
        {
            title: "ATARM Web Application",
            description: "Advanced web application built with React and modern UI principles. Features dynamic content management, responsive design, user authentication, and seamless integration with backend services. Optimized for performance and accessibility.",
            tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
            image: FaGlobe,
            mockupImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
            liveLink: "https://atarm-demo.example.com",
            codeLink: "https://github.com/abdulmusavir/atarm-project",
            category: "Full Stack",
            featured: true
        },
        // Frontend Projects
        {
            title: "AI Art Generation Desktop App",
            description: "Innovative desktop application built with Electron.js for AI-powered art generation. Features intuitive UI/UX design, real-time preview, multiple art styles, batch processing, and local file management with cloud sync capabilities.",
            tech: ["Electron.js", "React", "TypeScript", "AI APIs", "Node.js"],
            image: MdDesktopMac,
            mockupImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
            liveLink: "https://ai-art-app.example.com",
            codeLink: "https://github.com/abdulmusavir/ai-art-generator",
            category: "Frontend",
            featured: false
        },
        {
            title: "Modern E-Commerce Frontend",
            description: "Cutting-edge e-commerce frontend showcasing modern design principles. Features responsive layouts, smooth animations, product filtering, wishlist functionality, and optimized user experience across all devices.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query"],
            image: FaStore,
            mockupImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
            liveLink: "https://modern-shop-frontend.example.com",
            codeLink: "https://github.com/abdulmusavir/modern-ecommerce-ui",
            category: "Frontend",
            featured: false
        },
        // Backend Projects
        {
            title: "RESTful API for POS System",
            description: "Robust RESTful API backend for Point of Sale systems with comprehensive features including inventory management, user authentication, role-based access control, real-time data synchronization, and extensive documentation.",
            tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Socket.io"],
            image: BiCode,
            mockupImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
            liveLink: "https://api-docs.pos-system.example.com",
            codeLink: "https://github.com/abdulmusavir/pos-api-system",
            category: "Backend",
            featured: false
        },
        {
            title: "Microservices Authentication System",
            description: "Scalable authentication microservice with enterprise-grade security features. Implements JWT tokens, OAuth integration, role-based permissions, session management, and comprehensive audit logging for secure applications.",
            tech: ["Node.js", "PostgreSQL", "Prisma", "JWT", "OAuth", "Redis"],
            image: FaLock,
            mockupImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
            liveLink: "https://auth-service-docs.example.com",
            codeLink: "https://github.com/abdulmusavir/auth-microservice",
            category: "Backend",
            featured: false
        }
    ],
    fullstack: [
        {
            title: "E-Commerce Platform",
            description: "A comprehensive e-commerce solution with advanced features including user authentication, product management, shopping cart, secure payment processing with Stripe, order tracking, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
            image: FaShoppingCart,
            mockupImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
            liveLink: "https://ecommerce-demo.example.com",
            codeLink: "https://github.com/abdulmusavir/ecommerce-platform",
            category: "Full Stack",
            featured: true
        },
        {
            title: "POS & Inventory Management System",
            description: "Enterprise-level Point of Sale and Inventory management system designed for retail businesses. Features real-time inventory tracking, sales analytics, employee management, multi-location support, and comprehensive reporting dashboard.",
            tech: ["React", "Node.js", "PostgreSQL", "Express", "Chart.js", "Socket.io"],
            image: MdInventory,
            mockupImage: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop",
            liveLink: "https://pos-system-demo.example.com",
            codeLink: "https://github.com/abdulmusavir/pos-inventory-system",
            category: "Full Stack",
            featured: true
        },
        {
            title: "ATARM Web Application",
            description: "Advanced web application built with React and modern UI principles. Features dynamic content management, responsive design, user authentication, and seamless integration with backend services. Optimized for performance and accessibility.",
            tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
            image: FaGlobe,
            mockupImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
            liveLink: "https://atarm-demo.example.com",
            codeLink: "https://github.com/abdulmusavir/atarm-project",
            category: "Full Stack",
            featured: true
        }
    ],
    frontend: [
        {
            title: "AI Art Generation Desktop App",
            description: "Innovative desktop application built with Electron.js for AI-powered art generation. Features intuitive UI/UX design, real-time preview, multiple art styles, batch processing, and local file management with cloud sync capabilities.",
            tech: ["Electron.js", "React", "TypeScript", "AI APIs", "Node.js"],
            image: MdDesktopMac,
            mockupImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
            liveLink: "https://ai-art-app.example.com",
            codeLink: "https://github.com/abdulmusavir/ai-art-generator",
            category: "Frontend",
            featured: false
        },
        {
            title: "Modern E-Commerce Frontend",
            description: "Cutting-edge e-commerce frontend showcasing modern design principles. Features responsive layouts, smooth animations, product filtering, wishlist functionality, and optimized user experience across all devices.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query"],
            image: FaStore,
            mockupImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
            liveLink: "https://modern-shop-frontend.example.com",
            codeLink: "https://github.com/abdulmusavir/modern-ecommerce-ui",
            category: "Frontend",
            featured: false
        }
    ],
    backend: [
        {
            title: "RESTful API for POS System",
            description: "Robust RESTful API backend for Point of Sale systems with comprehensive features including inventory management, user authentication, role-based access control, real-time data synchronization, and extensive documentation.",
            tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Socket.io"],
            image: BiCode,
            mockupImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
            liveLink: "https://api-docs.pos-system.example.com",
            codeLink: "https://github.com/abdulmusavir/pos-api-system",
            category: "Backend",
            featured: false
        },
        {
            title: "Microservices Authentication System",
            description: "Scalable authentication microservice with enterprise-grade security features. Implements JWT tokens, OAuth integration, role-based permissions, session management, and comprehensive audit logging for secure applications.",
            tech: ["Node.js", "PostgreSQL", "Prisma", "JWT", "OAuth", "Redis"],
            image: FaLock,
            mockupImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
            liveLink: "https://auth-service-docs.example.com",
            codeLink: "https://github.com/abdulmusavir/auth-microservice",
            category: "Backend",
            featured: false
        }
    ]
};
