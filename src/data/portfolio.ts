import {
  AtSign,
  Phone,
  MapPin,
  Code2,
  Gauge,
  ShieldCheck,
  LayoutPanelTop,
  FileCheck2,
  Wrench,
  Sparkles,
} from "lucide-react";

import HtmlLogo from "../../public/skills/html-logo.webp";
import CssLogo from "../../public/skills/css-logo.webp";
import JavascriptLogo from "../../public/skills/javascript-logo.webp";
import TypescriptLogo from "../../public/skills/typescript-logo.webp";
import ReactLogo from "../../public/skills/react-logo.webp";
import NextLogo from "../../public/skills/next-logo.svg";
import MaterialUILogo from "../../public/skills/material-ui-logo.webp";
import GitLogo from "../../public/skills/git-logo.webp";
import Github from "../../public/social-media/github.png";
import Linkedin from "../../public/social-media/linkedin.png";

import type {
  AboutHighlight,
  AboutStat,
  Certification,
  ContactDetail,
  Education,
  Experience,
  NavLink,
  Project,
  SkillGroup,
  SkillLogo,
  SocialLink,
} from "@/types";

export const EMAIL_ID = "guptayash02.work@gmail.com";

export const site = {
  name: "Yash Gupta",
  role: "Frontend Software Engineer",
  url: "https://yashgupta.dev",
  email: EMAIL_ID,
  location: "Delhi, India",
  tagline:
    "I build fast, accessible, and scalable web applications with React.js, Next.js, and TypeScript.",
  description:
    "Frontend Software Engineer specializing in React.js, Next.js, and TypeScript — building fast, accessible, and scalable web applications with a focus on performance, UX, and secure authentication.",
} as const;

export const availability = {
  open: true,
  label: "Available for new opportunities",
} as const;

export const NavBarLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm a Frontend Software Engineer who turns complex problems into clean, intuitive interfaces. I specialize in React.js and Next.js, building scalable web applications with a strong focus on performance, accessibility, and developer experience.",
    "I've shipped production features for a high-traffic platform — from secure authentication flows to dynamic, schema-validated forms — collaborating closely with designers and backend teams to bring polished products to life.",
  ],
  highlights: [
    {
      icon: Code2,
      title: "React & Next.js Specialist",
      description:
        "Component-driven UIs with the App Router, server components, and TypeScript end to end.",
    },
    {
      icon: Gauge,
      title: "Performance & SEO",
      description:
        "SSR/SSG, dynamic meta tags, and semantic markup for fast, discoverable pages.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description:
        "NextAuth, JWT, and OAuth flows with role-based access and protected routes.",
    },
    {
      icon: LayoutPanelTop,
      title: "Modern Frontend Architecture",
      description:
        "Scalable state management, reusable components, and maintainable codebases.",
    },
  ] satisfies AboutHighlight[],
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "20+", label: "Technologies" },
    { value: "100%", label: "Responsive" },
  ] satisfies AboutStat[],
  currentFocus: [
    "Design systems & reusable component libraries",
    "App Router, server components & streaming",
    "Web performance & Core Web Vitals",
    "Accessible, motion-aware interfaces",
  ],
};

export const experiences: Experience[] = [
  {
    company: "Hoodlive Internet (Knot.dating)",
    role: "Software Engineer",
    period: "April 2024 — Present",
    location: "Gurugram, Haryana",
    tools: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "NextAuth",
      "JWT",
      "React Hook Form",
      "Zod",
      "Context API",
    ],
    points: [
      "Spearheaded end-to-end development of responsive, high-performance web applications, ensuring seamless user experiences across devices.",
      "Integrated NextAuth and JWT for secure authentication and role-based access, safeguarding sensitive user data and controlling feature access.",
      "Optimized platform SEO using Next.js SSR and SSG, along with dynamic meta tags and semantic HTML to improve organic search rankings.",
      "Improved application performance and minimized unnecessary DOM re-renders using Context API for efficient global state management.",
      "Built complex dynamic forms using React Hook Form and Zod for strict schema validation, reducing client-side errors and improving data integrity.",
      "Collaborated closely with UI/UX designers and backend developers to transform Figma designs into intuitive, production-ready web applications.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Building accessible, component-driven interfaces.",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
    ],
  },
  {
    category: "Authentication",
    description: "Secure, role-based access control.",
    icon: ShieldCheck,
    skills: ["NextAuth", "JWT", "OAuth"],
  },
  {
    category: "Forms & Validation",
    description: "Type-safe forms with schema validation.",
    icon: FileCheck2,
    skills: ["React Hook Form", "Zod"],
  },
  {
    category: "Tools",
    description: "Daily drivers for shipping and collaboration.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Bitbucket", "Postman"],
  },
  {
    category: "Concepts",
    description: "The patterns behind fast, scalable apps.",
    icon: Sparkles,
    skills: [
      "SSR",
      "SSG",
      "REST APIs",
      "State Management",
      "Responsive Design",
      "Secure Authentication",
    ],
  },
];

export const SkillsLogos: SkillLogo[] = [
  { image: HtmlLogo, name: "HTML" },
  { image: CssLogo, name: "CSS" },
  { image: JavascriptLogo, name: "JavaScript" },
  { image: TypescriptLogo, name: "TypeScript" },
  { image: ReactLogo, name: "React" },
  { image: NextLogo, name: "Next.js" },
  { image: MaterialUILogo, name: "Material UI" },
  { image: GitLogo, name: "Git" },
];

export const projects: Project[] = [
  {
    name: "Knot.dating",
    description:
      "A premium matchmaking platform built for India's top 1% singles, featuring intelligent matching, real-time chat, and a seamless onboarding experience.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "NextAuth",
      "JWT",
      "React Hook Form",
      "Zod",
      "Context API",
      "Tailwind CSS",
    ],
    highlights: [
      "Secure auth with NextAuth + JWT",
      "SSR / SSG for SEO and speed",
      "Dynamic, schema-validated forms",
    ],
    liveUrl: "https://knot.dating",
    sourceUrl: "",
    gradient: "from-indigo-500/30 via-violet-500/20 to-cyan-500/20",
  },
  {
    name: "Dev Portfolio",
    description:
      "A modern dark-themed portfolio website showcasing projects and experience, built with Next.js, Tailwind CSS v4, and shadcn/ui components.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    highlights: [
      "Next.js App Router + server components",
      "Premium dark design system",
      "Tuned for Core Web Vitals",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/yashgupta",
    gradient: "from-violet-500/30 via-indigo-500/20 to-cyan-500/15",
  },
  {
    name: "Project Three",
    description:
      "A full-stack web application with a focus on performance and developer experience. Add your project description here.",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    highlights: [
      "Full-stack MERN architecture",
      "REST API integration",
      "Optimized data layer",
    ],
    liveUrl: "",
    sourceUrl: "",
    gradient: "from-cyan-500/25 via-indigo-500/20 to-violet-500/20",
  },
];

export const education: Education[] = [
  {
    institution: "Guru Gobind Singh Indraprastha University",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2021 — 2024",
    location: "Delhi, India",
    cgpa: "7.8",
    points: [
      "Graduated with a strong foundation in data structures, algorithms, and software engineering principles.",
      "Developed multiple full-stack projects covering web development, databases, and system design.",
      "Actively participated in coding competitions and technical workshops, strengthening problem-solving skills.",
    ],
  },
];

export const certifications: Certification[] = [
  { name: "MERN Stack Development", issuer: "Full-Stack Certification" },
];

export const contactDetails: ContactDetail[] = [
  { icon: AtSign, label: "Email", value: EMAIL_ID },
  { icon: Phone, label: "Phone", value: "+91 98111 45237" },
  { icon: MapPin, label: "Location", value: "Delhi, India" },
];

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/yashgupta", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yashgupta129/",
    label: "LinkedIn",
  },
];
