# Astro + Tailwind Block Library

A starter for building websites with Astro and Tailwind CSS 4. It has two deliberately separate layers:

- **Reference catalogue:** 15 families and 185 visual block examples under routes such as `/heroes/`, `/features/` and `/forms/`. These are previews for choosing a composition, not production-ready components.
- **Reusable components:** a smaller, typed set under `src/components/blocks/` and `src/components/primitives/`, demonstrated at `/components/`. Build sites from these and adapt them to the project.

Use GitHub's **Use this template** button to make a new repository, then run:

```sh
npm ci
npm run dev
npm run check
npm run build
npm test
```

Requires Node.js **22.12 or newer**. `npm run dev` serves the site locally; `npm run build` produces static output in `dist/`. `npm test` checks the built component showcase. GitHub Actions runs the install, check, build and test steps on pushes and pull requests. Deploy `dist/` to a static host, or use an Astro adapter if you later need server functionality.

## Make a page

Import a few blocks into an Astro page. Their required props are checked by Astro:

```astro
---
import FeatureGrid from '../components/blocks/FeatureGrid.astro';
import CallToAction from '../components/blocks/CallToAction.astro';

const features = [
  { title: 'Fast', description: 'A concise benefit, written for your audience.' },
  { title: 'Flexible', description: 'The section adapts to your own content.' },
];
---
<FeatureGrid title="What we do" items={features} columns={2} />
<CallToAction title="Talk to us" label="Get in touch" href="/contact/" />
```

`/components/` demonstrates eight blocks: `FeatureGrid`, `ContentSplit`, `BlogGrid`, `PricingTable`, `Testimonials`, `ContactForm`, `CallToAction`, and `SiteFooter`. The three primitives are `Container`, `SectionHeading`, and `Button`. Read the [component API guide](docs/components.md) for props, usage examples and form limitations. The showcase contains sample copy, pricing and remote images. Replace them in a real site.

## Customise the visual system

Edit the semantic Tailwind 4 `@theme` values in `src/styles/global.css`: `brand`, `brand-hover`, `brand-strong`, `brand-soft`, `surface`, `surface-muted`, `surface-dark`, `ink`, `body`, `border`, `font-display`, `font-body`, `spacing-section`, `radius-ui`, and `shadow-panel`. Reusable blocks use these utilities (`bg-brand`, `text-ink`, `py-section`, and so on). The catalogue previews retain their original reference styling intentionally, so changing theme tokens affects the production components but not every preview.

`src/data/siteNavigation.ts` controls the catalogue navigation; `src/data/blockCategories.ts` controls home-page categories and counts. Do not mistake these catalogue-specific items for a finished client-site navigation system.

## Before using the components in production

- `ContactForm mode="demo"` is visibly disabled and cannot submit. `mode="submit"` requires an endpoint, but **does not implement delivery**. Integrate a real backend or form service and verify success/error handling before publishing it.
- Links, footer content and image descriptions must be supplied by each real site. No placeholder destination or contact details are emitted by the reusable components by default.
- Replace the remote showcase photos with appropriately licensed project imagery. Test the finished page with keyboard and assistive technologies; component-level checks do not certify a complete site as accessible.

## Catalogue and provenance

The catalogue arose from studying Pinegrow's Tailwind block library. The local Pinegrow reference project is **not part of this repository**. This project does not require Pinegrow at runtime. Social, Shop and Dividers are deliberately outside this template's scope. When promoting a reference layout into a reusable component, document which variant inspired it, rather than copying all examples into the API.

The [MIT licence](LICENSE) covers original code and documentation contributed to this repository. It does not grant rights to third-party trademarks, photographs, or any underlying third-party material. Confirm applicable rights before redistributing or using external reference designs or images in a client project.
