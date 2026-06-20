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
  Sparkles,
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
  { number: "10+", label: "Projects Completed", icon: Briefcase },
  { number: "15+", label: "Technologies", icon: Code2 },
  { number: "5+", label: "Client Projects", icon: Users },
  { number: "100%", label: "Responsive Designs", icon: Smartphone },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Atharv Travel Platform",
    category: "Full Stack Application",
    tagline: "Travel booking and inquiry management platform",
    github: "https://github.com/Vermaryn/Atharv-travel",
    demo: "https://www.atvtravels.com",

    description:
      "A full-stack travel website built with Next.js, Node.js, Express.js, and MongoDB to manage travel packages, customer inquiries, newsletter subscriptions, and AI-powered customer assistance.",

    features: [
      "Dynamic travel package management",
      "Admin dashboard",
      "AI chatbot integration",
      "Newsletter subscription system",
      "Inquiry and lead management",
      "Mobile responsive design",
    ],

    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
    ],

    highlights: [
      "Admin dashboard development",
      "AI chatbot integration",
      "Cloudinary media management",
      "Responsive user experience",
    ],

    accent: "#22d3ee",
    gradFrom: "#0891b2",
    gradTo: "#0d9488",
  },

  {
    id: 2,
    title: "NGO Website",
    category: "Web Design & Development",
    tagline: "Modern nonprofit website with improved accessibility",
    github: "https://github.com/Vermaryn/pramila-ngo",
    demo: "https://www.pramilaekasha.com/",

    description:
      "A modern NGO website designed and developed to improve accessibility, user engagement, and information delivery across desktop, tablet, and mobile devices.",

    features: [
      "Responsive mobile-first design",
      "Modern user interface",
      "Improved navigation",
      "Accessibility-focused design",
      "SEO-friendly structure",
      "Optimized performance",
    ],

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
      "JavaScript",
    ],

    highlights: [
      "Complete website development",
      "Modern UI/UX implementation",
      "Responsive design",
      "SEO-friendly structure",
    ],

    accent: "#818cf8",
    gradFrom: "#6366f1",
    gradTo: "#4f46e5",
  },

  {
    id: 3,
    title: "Multi-Step Form System",
    category: "Frontend Development",
    tagline: "User-friendly multi-step form experience",
    github: "https://github.com/Vermaryn/Multi-level-form",
    demo: "https://vermaryn.github.io/Multi-level-form/",

    description:
      "A responsive multi-step form application built using HTML, CSS, and JavaScript featuring validation, progress tracking, and a seamless user experience.",

    features: [
      "Multi-step form workflow",
      "Client-side validation",
      "Progress tracking",
      "Responsive design",
      "User-friendly interface",
      "Error handling",
    ],

    tech: ["HTML5", "CSS3", "JavaScript"],

    highlights: [
      "Form validation logic",
      "Progress tracking system",
      "Responsive user experience",
      "Clean UI implementation",
    ],

    accent: "#f472b6",
    gradFrom: "#ec4899",
    gradTo: "#f43f5e",
  },

  {
    id: 4,
    title: "Institute Website",
    category: "Website Development",
    tagline: "Multi-page educational institute website",
    github: "https://github.com/Vermaryn/Institute-Website",
    demo: "https://vermaryn.github.io/Institute-Website/",

    description:
      "A responsive educational institute website developed to showcase courses, faculty information, institute details, and contact information through a clean multi-page architecture.",

    features: [
      "Multi-page website",
      "Course information pages",
      "Faculty and institute details",
      "Responsive layout",
      "Contact and inquiry pages",
      "Bootstrap-based UI",
    ],

    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

    highlights: [
      "Multi-page architecture",
      "Responsive design",
      "Educational content presentation",
      "Professional user interface",
    ],

    accent: "#f59e0b",
    gradFrom: "#f59e0b",
    gradTo: "#ea580c",
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
  Database: [{ name: "MongoDB", level: 78 },
    { name: "Mongoose", level: 70 },
  ],
  Tools: [
    { name: "Git / Github", level: 88 },
    { name: "Cloudinary", level: 75 },
    { name: "Postman", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "Vercel", level: 90 },
    { name: "Render", level: 80 },
  ],
  "AI & Productivity": [
    { name: "ChatGPT", level: 90 },
    { name: "Gemini AI", level: 85 },
    { name: "GitHub Copilot", level: 80 },
    { name: "Claude AI", level: 70 },
    { name: "Figma AI", level: 75 },
  ],
};

export const CAT_META = [
  { icon: Code2, color: "#818cf8" },
  { icon: Server, color: "#22d3ee" },
  { icon: Database, color: "#a78bfa" },
  { icon: Wrench, color: "#34d399" },
  { icon: Sparkles, color: "#f59e0b" },
];

export const SERVICES = [
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "End-to-end web applications built with the modern MERN stack — from database design to polished UI deployment.",
  },
  {
    icon: Zap,
    title: "Next.js Development",
    desc: "Performance-first apps with SSR, SSG, and edge-ready deployment on Vercel for maximum speed and SEO.",
  },
  {
    icon: Server,
    title: "MERN Applications",
    desc: "Scalable full-stack solutions using MongoDB, Express, React, and Node.js with clean API architecture.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect, mobile-first experiences that work flawlessly across all devices and screen sizes.",
  },
  {
    icon: Globe,
    title: "API Integration",
    desc: "Seamless integration of third-party APIs — payment gateways, AI services, cloud storage, and more.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    desc: "Lighthouse-score improvements, bundle optimization, and Core Web Vitals tuning for production apps.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    desc: "Deep dive into your goals, audience, and technical requirements to define scope and success metrics.",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Architecture decisions, tech stack selection, wireframes, and project roadmap with clear milestones.",
  },
  {
    step: "03",
    title: "Design",
    desc: "UI/UX design with component system, responsive layouts, and interactive prototypes for stakeholder alignment.",
  },
  {
    step: "04",
    title: "Development",
    desc: "Clean, documented code with regular commits, code reviews, and sprint-level progress updates.",
  },
  {
    step: "05",
    title: "Testing",
    desc: "Cross-browser testing, performance audits, accessibility checks, and user acceptance testing.",
  },
  {
    step: "06",
    title: "Deployment",
    desc: "CI/CD pipeline setup, production deployment, monitoring configuration, and post-launch support.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sunil Kumar Sahu",
    role: "Founder, Pramila Ekasha Foundation",
    text: "Pradeep developed and redesigned our NGO website with a modern, responsive, and user-friendly approach. The website now represents our organization professionally and provides a much better experience for visitors across all devices.",
    rating: 5,
    initial: "S",
    color: "#818cf8",
  },
  {
    name: "Romish Saini",
    role: "Owner, Atharv Travel",
    text: "Pradeep built our travel platform with excellent attention to detail. From inquiry management and package handling to the admin dashboard and AI chatbot integration, the solution has made our daily operations more organized and efficient.",
    rating: 5,
    initial: "R",
    color: "#22d3ee",
  },
  {
    name: "Ankit Saini",
    role: "Business Owner",
    text: "Professional, reliable, and easy to work with. Pradeep delivered the required website improvements on time, maintained clear communication throughout the project, and ensured everything worked smoothly before delivery.",
    rating: 5,
    initial: "A",
    color: "#a78bfa",
  },
];

export const CODE_LINES = [
  "const portfolio = await buildAwesome(developer);",
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
