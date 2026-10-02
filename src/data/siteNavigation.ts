export interface SiteNavItem {
  label: string;
  href: string;
}

/** Add every new public catalogue page here when its route is created. */
export const siteNavigation: SiteNavItem[] = [
  { label: 'Headers', href: '/headers/' },
  { label: 'Heroes', href: '/heroes/' },
  { label: 'CTA', href: '/cta/' },
  { label: 'Features', href: '/features/' },
  { label: 'Content', href: '/content/' },
  { label: 'Blog Posts', href: '/blogposts/' },
  { label: 'Counters', href: '/counters/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Team', href: '/team/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Footers', href: '/footers/' },
  { label: 'Columns', href: '/columns/' },
  { label: 'Partners', href: '/partners/' },
  { label: 'Forms', href: '/forms/' },
  { label: 'Components', href: '/components/' },
];

export const siteNavCta = {
  label: 'Home',
  href: '/',
};
