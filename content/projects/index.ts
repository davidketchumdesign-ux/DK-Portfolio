import shopify from './shopify.json';

export interface Project {
  slug: string;
  title: string;
  industry: string;
  category: 'consultant' | 'personal';
  tags: string[];
  summary: string;
  coverImage: string;
}

export interface CaseStudyData extends Project {
  hero: {
    subtitle: string;
    description: string;
  };
  meta: {
    role: string;
    timeline: string;
    platform: string;
    tools: string;
  };
  phases: Array<{
    number: number;
    title: string;
    description: string;
    chips?: string[];
    hmw?: string;
    gallery?: Array<{
      label: string;
      gradient: string;
      twoCol?: boolean;
    }>;
  }>;
  outcomes: Array<{
    number: string;
    label: string;
  }>;
  nextSlug: string;
  nextTitle: string;
}

// Grid projects (for homepage)
export const gridProjects: Project[] = [
  {
    slug: 'shopify',
    title: 'Shopify Design System & IA Redesign',
    industry: 'E-Commerce',
    category: 'consultant',
    tags: ['Design System', 'Website Redesign'],
    summary: 'Mobile-first redesign with a custom atomic design system, new IA, and a bespoke product configurator.',
    coverImage: '/images/projects/shopify-cover.jpg',
  },
  {
    slug: 'restaurant-service-design',
    title: 'Customer-Led Service Design',
    industry: 'Restaurant',
    category: 'consultant',
    tags: ['Service Design', 'User Research'],
    summary: 'User journey flows, heuristic audits, and hi-fi wireframes for a full Quick Service Restaurant experience.',
    coverImage: '/images/projects/restaurant-cover.jpg',
  },
  {
    slug: 'insurance-crm-email',
    title: 'Salesforce CRM & Email Design System',
    industry: 'Insurance',
    category: 'consultant',
    tags: ['CRM', 'Design System', 'Email'],
    summary: 'Led design for a call-deflection initiative spanning Salesforce CRM screens and a new email design system.',
    coverImage: '/images/projects/insurance-cover.jpg',
  },
];

export const personalProjects: Project[] = [
  {
    slug: 'brixli',
    title: 'Brixli',
    industry: 'Personal',
    category: 'personal',
    tags: ['Product Design', 'Branding'],
    summary: '[Short description of what Brixli is and your role — swap in your real copy here.]',
    coverImage: '/images/projects/brixli-cover.jpg',
  },
  {
    slug: 'icebreakr',
    title: 'Icebreakr',
    industry: 'Personal',
    category: 'personal',
    tags: ['Product Design', 'App Design'],
    summary: '[Short description of what Icebreakr is and your role — swap in your real copy here.]',
    coverImage: '/images/projects/icebreakr-cover.jpg',
  },
  {
    slug: 'bet-sync',
    title: 'Bet Sync',
    industry: 'Personal',
    category: 'personal',
    tags: ['Product Design', 'Mobile App'],
    summary: '[Short description of the betting sync app and your role — swap in your real copy here.]',
    coverImage: '/images/projects/bet-sync-cover.jpg',
  },
];

// Case study lookup
export const caseStudies: Record<string, CaseStudyData> = {
  shopify: shopify as CaseStudyData,
};

export function getProjectBySlug(slug: string): Project | undefined {
  return [...gridProjects, ...personalProjects].find((p) => p.slug === slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudies[slug];
}
