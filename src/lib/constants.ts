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
import { AtSign, Phone, MapPin } from "lucide-react";


export const EMAIL_ID = "guptayash02.work@gmail.com";


export const NavBarLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
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

export const projects = [
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
    liveUrl: "https://knot.dating",
    sourceUrl: "",
    gradient: "from-violet-950/60 via-purple-900/30 to-indigo-950/60",
  },
  {
    name: "Dev Portfolio",
    description:
      "A modern dark-themed portfolio website showcasing projects and experience, built with Next.js 15, Tailwind CSS v4, and shadcn/ui components.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "",
    sourceUrl: "https://github.com/yashgupta",
    gradient: "from-slate-900/80 via-violet-950/40 to-slate-950/80",
  },
  {
    name: "Project Three",
    description:
      "A full-stack web application with a focus on performance and developer experience. Add your project description here.",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    liveUrl: "",
    sourceUrl: "",
    gradient: "from-indigo-950/60 via-blue-900/30 to-violet-950/60",
  },
];

export const SkillsLogos = [
  { image: HtmlLogo, name: "HTML" },
  { image: CssLogo, name: "CSS" },
  { image: JavascriptLogo, name: "JavaScript" }, // <-
  { image: TypescriptLogo, name: "TypeScript" },
  { image: ReactLogo, name: "React" },
  { image: NextLogo, name: "Next.js" },
  { image: MaterialUILogo, name: "Material UI" },
  { image: GitLogo, name: "Git" },
];

export const contactDetails = [
  { icon: AtSign, label: "Email", value: EMAIL_ID },
  { icon: Phone, label: "Phone", value: "+91 98111 45237" },
  { icon: MapPin, label: "Location", value: "Delhi, India" },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/yashgupta", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yashgupta129/",
    label: "LinkedIn",
  },
];

