import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { StaticImageData } from "next/image";

/** Any inline SVG mark that inherits `currentColor` (lucide or brand icon). */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type NavLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  tools: string[];
  points: string[];
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  highlights: string[];
  liveUrl: string;
  sourceUrl: string;
  gradient: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpa?: string;
  points: string[];
};

export type SkillGroup = {
  category: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

export type SkillLogo = {
  image: StaticImageData;
  name: string;
};

export type AboutHighlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type AboutStat = {
  value: string;
  label: string;
};

export type ContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export type SocialLink = {
  icon: IconComponent;
  href: string;
  label: string;
};
