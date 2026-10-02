# Component API

This is the small **reusable** layer, not a promise to implement every catalogue preview. Import blocks directly from `src/components/blocks/` and data types from `src/components/blocks/types.ts`. Props not marked optional are required; each block renders a semantic `<section>` except `SiteFooter`, which renders `<footer>`.

## Primitives

- `Container`: default slot; optional `class` for outer wrapper.
- `SectionHeading`: required `title`; optional `eyebrow`, `description`, and `align` (`left` or `center`). Renders an `h2`.
- `Button`: **link only**, required `label` and `href`; optional `kind` (`primary`, `secondary`, `light`). For form submission use a real `<button type="submit">` as in `ContactForm`. Do not pass `href="#"` to simulate an action.

## Blocks

- `FeatureGrid`: required `title` and `items: FeatureItem[]` (`title`, `description`, optional `icon`); optional `eyebrow`, `description`, and `columns` (2, 3, or 4). The numeric fallback is a visible marker, not an icon font.
- `ContentSplit`: required `title`, `description`, `image`, and `imageAlt`; optional `eyebrow`, `reverse`, and `action: { label, href }`. Use `imageAlt=""` **only** if the image is truly decorative. No button is rendered without an action.
- `CallToAction`: required `title`, `label`, and `href`; optional `eyebrow`, `description`, and `tone` (`blue`, `dark`, `light`). `blue` uses the semantic brand colour.
- `BlogGrid`: required `title` and `posts: BlogPost[]` (`title`, `excerpt`, `date`, `image`, `imageAlt`, optional `href`); optional `description`. No “Read article” link is rendered for a post without a real route.
- `PricingTable`: required `title` and `plans: PricingPlan[]` (`name`, `price`, `description`, `features`, optional `featured` and `action: { label, href }`); optional section `description`. A plan without an action displays details only.
- `Testimonials`: required `title` and `testimonials: TestimonialItem[]` (`quote`, `name`, `role`); optional `tone` (`light`, `dark`).
- `ContactForm`: required `title` and **explicit `mode`**. `mode="demo"` renders a visibly disabled, non-submitting preview. `mode="submit"` requires `action` and sends a standard POST with `name`, `email`, and `message`. Configure a real server endpoint, validation, spam prevention and a success/error experience before deploying. This component does not send email by itself.
- `SiteFooter`: required `brand`; optional `brandHref` (defaults to `/`), `description`, `links: FooterLink[]`, `contactEmail`, and `copyright`. Unprovided columns and copyright are omitted. Supply only real links/contact details.

## Examples

```astro
---
import ContentSplit from '../components/blocks/ContentSplit.astro';
import ContactForm from '../components/blocks/ContactForm.astro';
import SiteFooter from '../components/blocks/SiteFooter.astro';
---
<ContentSplit
  title="How we work"
  description="We help teams make useful websites."
  image="/images/workshop.jpg"
  imageAlt="Our team planning a website together"
  action={{ label: 'Meet the team', href: '/team/' }}
/>
<ContactForm title="Contact us" mode="demo" />
<SiteFooter brand="Your studio" links={[{ label: 'Home', href: '/' }]} />
```

For a working form, replace `mode="demo"` with `mode="submit" action="/your-working-form-endpoint"` **after** integrating and testing that endpoint. For static hosting, a real third-party form service is one option. Do not confuse a configured URL with a working delivery integration.

## Composition rules

These components intentionally use props for structured text and arrays rather than arbitrary HTML strings. The only current slot is the `Container` content slot. Avoid adding a general-purpose variant or slot before a real website calls for it. Component props and design tokens can change as the first client site is assembled, so update this document and the showcase alongside any API change.
