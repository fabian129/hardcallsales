/**
 * Hard Call Sales (HCS) - Shared TypeScript Type Definitions
 */

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isButton?: boolean;
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc?: string;
  kicker: string;
  icon: string;
  isDarkFeatured?: boolean;
  isPurpleFeatured?: boolean;
  statNumber?: string;
  statLabel?: string;
  methodology?: string;
  deliverables?: string[];
  tools?: string[];
  targetPersona?: string;
}

export interface PilotStep {
  step: string; // e.g. "01"
  title: string;
  subtitle?: string;
  points: string[];
  layoutSide: "left" | "right";
}

export interface CaseStudy {
  id: string;
  client: string;
  category?: "Enterprise" | "SaaS" | "Consulting" | "Tech";
  industry: string;
  metric: string;
  metricLabel: string;
  stats?: { label: string; value: string }[];
  challenge: string;
  solution: string;
  outcome: string;
  keyDeliverables?: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
    company?: string;
  };
  badge?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  category: "Enterprise" | "SaaS" | "Tech" | "Consulting" | "Fintech";
  industry?: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  highlightText?: string;
  author: string;
  role: string;
  company: string;
  category?: "Enterprise" | "SaaS" | "Consulting" | "Tech";
  metricImpact?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  roleTitle: string;
  cardKicker: string;
  description: string;
  bio?: string;
  expertise?: string[];
  hub: "Stockholm" | "Malta (Sliema)" | "Stockholm & Malta" | string;
  linkedinUrl?: string;
  imagePlaceholder?: string;
  isLeadership?: boolean;
}

export interface CoreValue {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  bulletPoints: string[];
}

export interface HubInfo {
  id: string;
  city: string;
  country: string;
  title: string;
  address: string;
  description: string;
  badge: string;
  roleFocus: string;
  features: string[];
  email: string;
  phone: string;
  operatingHours: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: "Pilotmodellen" | "Tjänster" | "Teknik & Integration" | "Allmänt";
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface BookingFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  meetingGoal: string;
  message?: string;
}

export interface JobApplicationFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  location: string;
  linkedin?: string;
  message: string;
}
