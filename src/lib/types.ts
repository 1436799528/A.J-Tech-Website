
import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  Icon: LucideIcon;
  gallery: string[];
  color?: string;
};

export type TeamMember = {
  name:string;
  role: string;
  bio: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  image: string;
  video?: string;
};

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type RecentWork = {
  title: string;
  description: string;
  image: string;
};
