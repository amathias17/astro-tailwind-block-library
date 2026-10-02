# Astro + Tailwind Block Library

A standalone Astro catalogue of reusable website structures. The Pinegrow project at `/srv/Github/PG PROJECT/` is reference-only. Do not modify it when adding catalogue work.

## Current status

The catalogue currently contains **18 block families**, with **15 implemented families** and **185 reviewed variants**:

- Headers: 14
- Heroes: 11
- CTA: 9
- Features & Services: 20
- Content: 20
- Blog Posts: 22
- Counters: 10
- Pricing: 6
- Team: 11
- Testimonials: 10
- Contact: 14
- Footers: 4
- Columns: 20
- Partners: 7
- Forms: 7

Remaining families are Social, Shop and Dividers. Add each as a data file under `src/data/`, a route under `src/pages/<category>/index.astro`, a shared navigation entry, and a home-page category link/count.

## Working conventions

- Working project: `/srv/Github/astro-catalogue/`
- Reference project: `/srv/Github/PG PROJECT/`
- Dev server should bind to `0.0.0.0` for Tailscale access.
- Preserve the shared catalogue shell, numbered preview labels and responsive layout checks.
- Validate every change with:

```sh
npm run astro -- check
npm run build
```

- Browser-check the new route at desktop width and 390px mobile width. Confirm the expected variant count, navigation link and no horizontal overflow.
- Use the existing shared navigation in `src/data/siteNavigation.ts` and category metadata in `src/data/blockCategories.ts`.
- Structural previews are intentionally catalogue examples, not finished production components. Add proper accessible labels when promoting preview forms into real UI.

## Commands

```sh
npm install
npm run dev
npm run build
npm run astro -- check
```
