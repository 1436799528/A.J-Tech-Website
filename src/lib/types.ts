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
  Icon: LucideIcon | ((props: any) => JSX.Element);
  gallery: string[];
};

export type TeamMember = {
  name:string;
  role: string;
  bio: string;
  image: string;
};
