export interface BlockCategory {
  label: string;
  description: string;
  href?: string;
  count?: number;
  accent: string;
}

export const blockCategories: BlockCategory[] = [
  { label: 'Headers', description: 'Navigation systems, utility bars and site chrome.', href: '/headers/', count: 14, accent: 'sky' },
  { label: 'Hero blocks', description: 'Opening compositions for the first impression.', href: '/heroes/', count: 11, accent: 'violet' },
  { label: 'Call to action', description: 'Focused prompts that move visitors forward.', href: '/cta/', count: 9, accent: 'amber' },
  { label: 'Features & Services', description: 'Ways to explain capability, value and offer.', href: '/features/', count: 20, accent: 'emerald' },
  { label: 'Content', description: 'Flexible sections for narrative and information.', href: '/content/', count: 20, accent: 'rose' },
  { label: 'Blog posts', description: 'Editorial layouts for articles and updates.', href: '/blogposts/', count: 22, accent: 'orange' },
  { label: 'Counters', description: 'Metrics, milestones and proof points.', href: '/counters/', count: 10, accent: 'cyan' },
  { label: 'Pricing', description: 'Plans, packages and comparison structures.', href: '/pricing/', count: 6, accent: 'lime' },
  { label: 'Team', description: 'People, roles and profile presentations.', href: '/team/', count: 11, accent: 'pink' },
  { label: 'Testimonials', description: 'Customer voices and social proof.', href: '/testimonials/', count: 10, accent: 'indigo' },
  { label: 'Contacts', description: 'Contact details, forms and location blocks.', href: '/contact/', count: 14, accent: 'teal' },
  { label: 'Footers', description: 'Closing navigation and site information.', href: '/footers/', count: 4, accent: 'slate' },
  { label: 'Columns', description: 'Reusable grid and column arrangements.', href: '/columns/', count: 20, accent: 'blue' },
  { label: 'Partners', description: 'Logos, affiliations and trusted-by sections.', href: '/partners/', count: 7, accent: 'yellow' },
  { label: 'Forms', description: 'Inputs, sign-up flows and enquiry layouts.', href: '/forms/', count: 7, accent: 'green' },
];
