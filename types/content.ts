import type { LucideIcon } from 'lucide-react';

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type Outreach = {
  id: string;
  community: string;
  state: string;
  date: string;
  image: string;
  summary: string;
  peopleReached: number;
  referrals: number;
  services: string[];
  highlight: string;
  story: string;
};

export type UpcomingOutreach = {
  id: string;
  day: string;
  month: string;
  weekday: string;
  community: string;
  state: string;
  focus: string;
  volunteersNeeded: number;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type FieldStory = {
  image: string;
  title: string;
  quote: string;
  name: string;
  role: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  x: string;
};

export type Milestone = {
  date: string;
  title: string;
  text: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type IconItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};