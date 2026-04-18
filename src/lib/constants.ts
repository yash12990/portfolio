import HtmlLogo from "../../public/skills/html-logo.webp";
import CssLogo from "../../public/skills/css-logo.webp";
import JavascriptLogo from "../../public/skills/javascript-logo.webp";
import TypescriptLogo from "../../public/skills/typescript-logo.webp";
import ReactLogo from "../../public/skills/react-logo.webp";
import NextLogo from "../../public/skills/next-logo.svg";
import MaterialUILogo from "../../public/skills/material-ui-logo.webp";
import GitLogo from "../../public/skills/git-logo.webp";

export const NavBarLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
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
