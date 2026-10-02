// Public data contracts for the small production-oriented component layer.
// Preview catalogue variants are intentionally not part of this API.
export interface LinkAction { label: string; href: string }
export interface FeatureItem { title: string; description: string; icon?: string }
export interface BlogPost { title: string; excerpt: string; date: string; image: string; imageAlt: string; href?: string }
export interface PricingPlan { name: string; price: string; description: string; features: string[]; featured?: boolean; action?: LinkAction }
export interface TestimonialItem { quote: string; name: string; role: string }
export interface FooterLink { label: string; href: string }
export interface HeaderLink { label: string; href: string }

// A showcase is explicitly inert. A real submission requires a configured POST endpoint.
export type ContactFormMode =
  | { mode: 'demo'; action?: never }
  | { mode: 'submit'; action: string };
