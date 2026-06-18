import {
  Briefcase,
  Code2,
  Users,
  Smartphone,
  Server,
  Database,
  Wrench,
  Globe,
  Zap,
  Layers,
  TrendingUp,
} from "lucide-react";
export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { number: "25+", label: "Projects Completed", icon: Briefcase },
  { number: "15+", label: "Technologies", icon: Code2 },
  { number: "10+", label: "Client Projects", icon: Users },
  { number: "100%", label: "Responsive Designs", icon: Smartphone },
];

export const PROJECTS = [
  {
    id: 1,
    title: "NGO Website Redesign",
    category: "Web Design & Development",
    tagline: "Transforming nonprofit presence with modern UX",
    problem:
      "The organization's outdated website created friction for donors and volunteers, resulting in poor engagement and missed opportunities for real-world impact.",
    solution:
      "Rebuilt the site with a mobile-first approach, clear CTAs, improved information architecture, and a modern visual identity aligned with the mission.",
    features: [
      "Responsive mobile-first design",
      "Accessibility-compliant UI (WCAG AA)",
      "Optimized Core Web Vitals",
      "Donation flow redesign",
      "CMS integration",
      "SEO-ready structure",
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    results: ["60% increase in mobile engagement", "40% faster page load", "2× donor conversion"],
    accent: "#818cf8",
    gradFrom: "#6366f1",
    gradTo: "#4f46e5",
  },
  {
    id: 2,
    title: "Atharv Travel Platform",
    category: "Full Stack Application",
    tagline: "End-to-end travel booking & management system",
    problem:
      "A travel agency relied on manual processes with no scalable way to manage packages, inquiries, or customer communications.",
    solution:
      "Built a full-stack platform with admin controls, dynamic package management, Cloudinary media handling, and an integrated newsletter system.",
    features: [
      "Dynamic travel packages",
      "Admin dashboard",
      "Cloudinary image management",
      "Newsletter integration",
      "Enquiry & lead management",
      "Mobile responsive design",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
    results: ["100% paperless inquiry flow", "Admin saves 8+ hrs/week", "3× more package listings"],
    accent: "#22d3ee",
    gradFrom: "#0891b2",
    gradTo: "#0d9488",
  },
  {
    id: 3,
    title: "AI Chatbot Integration",
    category: "AI & Full Stack",
    tagline: "Context-aware AI assistant powered by Gemini",
    problem:
      "Businesses needed an affordable, customizable AI assistant without relying on expensive third-party tools with limited brand control.",
    solution:
      "Integrated Gemini API into a custom-built chat interface with conversation history, context management, and real-time streaming.",
    features: [
      "Gemini API integration",
      "Context-aware responses",
      "Conversation history",
      "Real-time token streaming",
      "Modern chat UI",
      "Mobile optimized",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Gemini API", "Tailwind CSS"],
    results: ["Sub-500ms response time", "10k token context window", "99.9% uptime achieved"],
    accent: "#a78bfa",
    gradFrom: "#7c3aed",
    gradTo: "#9333ea",
  },
  {
    id: 4,
    title: "Multi-Step Form System",
    category: "UX Engineering",
    tagline: "Complex form flows made frictionless",
    problem:
      "Long single-page forms caused high abandonment rates. Users were overwhelmed by complexity and lost progress with no recovery path.",
    solution:
      "Designed a step-by-step form architecture with persistent state, inline validation, progress visualization, and conditional branching logic.",
    features: [
      "Step-by-step guided flow",
      "Real-time field validation",
      "Visual progress tracking",
      "Conditional branching logic",
      "Session data persistence",
      "Error recovery UX",
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Node.js"],
    results: ["70% reduction in drop-offs", "98% form completion rate", "Seamless across all devices"],
    accent: "#f472b6",
    gradFrom: "#ec4899",
    gradTo: "#f43f5e",
  },
];

export const TECH_STACK: Record<string, { name: string; level: number }[]> = {
  Frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "HTML / CSS", level: 95 },
  ],
  Backend: [
    { name: "Node.js", level: 82 },
    { name: "Express.js", level: 80 },
  ],
  Database: [{ name: "MongoDB", level: 78 }],
  Tools: [
    { name: "Git / Github", level: 88 },
    { name: "Cloudinary", level: 75 },
    { name: "Postman", level: 80 },
    { name: "VS Code", level: 95 },
  ],
};

export const CAT_META = [
  { icon: Code2, color: "#818cf8" },
  { icon: Server, color: "#22d3ee" },
  { icon: Database, color: "#a78bfa" },
  { icon: Wrench, color: "#34d399" },
];

export const SERVICES = [
  { icon: Layers, title: "Full Stack Development", desc: "End-to-end web applications built with the modern MERN stack — from database design to polished UI deployment." },
  { icon: Zap, title: "Next.js Development", desc: "Performance-first apps with SSR, SSG, and edge-ready deployment on Vercel for maximum speed and SEO." },
  { icon: Server, title: "MERN Applications", desc: "Scalable full-stack solutions using MongoDB, Express, React, and Node.js with clean API architecture." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect, mobile-first experiences that work flawlessly across all devices and screen sizes." },
  { icon: Globe, title: "API Integration", desc: "Seamless integration of third-party APIs — payment gateways, AI services, cloud storage, and more." },
  { icon: TrendingUp, title: "Performance Optimization", desc: "Lighthouse-score improvements, bundle optimization, and Core Web Vitals tuning for production apps." },
];

export const PROCESS = [
  { step: "01", title: "Discovery", desc: "Deep dive into your goals, audience, and technical requirements to define scope and success metrics." },
  { step: "02", title: "Planning", desc: "Architecture decisions, tech stack selection, wireframes, and project roadmap with clear milestones." },
  { step: "03", title: "Design", desc: "UI/UX design with component system, responsive layouts, and interactive prototypes for stakeholder alignment." },
  { step: "04", title: "Development", desc: "Clean, documented code with regular commits, code reviews, and sprint-level progress updates." },
  { step: "05", title: "Testing", desc: "Cross-browser testing, performance audits, accessibility checks, and user acceptance testing." },
  { step: "06", title: "Deployment", desc: "CI/CD pipeline setup, production deployment, monitoring configuration, and post-launch support." },
];

export const TESTIMONIALS = [
  {
    name: "Arun Sharma", role: "Founder, NGO Connect",
    text: "Pradeep redesigned our website beyond our expectations. The modern UI and improved UX significantly increased donor engagement. Professional, timely, and detail-oriented.",
    rating: 5, initial: "A", color: "#818cf8",
  },
  {
    name: "Meera Patel", role: "Owner, Atharv Travel",
    text: "The travel platform Pradeep built has transformed how we manage our business. The admin dashboard alone saves us hours every week. Highly recommend for complex web projects.",
    rating: 5, initial: "M", color: "#22d3ee",
  },
  {
    name: "Vikram Joshi", role: "Tech Lead, StartupHub",
    text: "Excellent full-stack skills and a great eye for UX. Pradeep delivered clean, maintainable code and was proactive throughout. Will definitely work again.",
    rating: 5, initial: "V", color: "#a78bfa",
  },
];

export const CODE_LINES = [
  'const portfolio = await buildAwesome(developer);',
  "import { NextJS, React } from 'modern-stack';",
  "await db.connect({ uri: process.env.MONGO_URI });",
  "app.use('/api', express.Router());",
  "const [state, setState] = useState<T>(null);",
  "export default function Portfolio() { ... }",
  "tailwind.config = { darkMode: 'class' };",
  "git push origin main --force-with-lease",
  "vercel deploy --prod && echo 'Shipped!'",
  "const res = await gemini.generateContent(prompt);",
];
