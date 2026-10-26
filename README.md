# Blue Water Components

Modern, professional website for Blue Water Components — Florida's electronics manufacturing services and components distributor.

**Live preview:** Run the Next.js dev server.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons
- Fully static-friendly (can be exported)

## Getting Started

This repo commits `package-lock.json`. Install from that lockfile so local and Vercel builds match (`vercel.json` sets `installCommand` to `npm ci`).

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key Features

- Clean industrial design (deep navy + electric blue + silver)
- Fully responsive (mobile-first)
- Fast loading with optimized images and minimal JS
- Interactive product catalog with category filters + live search
- Quote form drafts an email in your mail app. It is not connected to a server endpoint.
- Rich SEO: metadata, OpenGraph, JSON-LD structured data, sitemap, robots.txt
- Accessible (keyboard nav, focus states, semantic markup)

## Customization

**Update content:**
- `lib/data.ts` — services, products, company info
- `app/page.tsx` — hero copy, additional sections
- `components/ContactForm.tsx` — still unwired; visitors email `sales@bluewatercomponents.com` until a real endpoint is added

**Images:**
- All custom images live in `/public/images/`
- Replace with real photography when available

**Colors:**
- Defined in `tailwind.config.ts` (navy, blue, silver scale)

## Deployment

Deploy to Vercel, Netlify, or Cloudflare Pages. Vercel installs with `npm ci` from `package-lock.json`.

```bash
npm ci
npm run build
```

Security headers are set in `next.config.mjs` (`headers()`) and `vercel.json`, so they apply on Vercel. Azure Static Web Apps reads `staticwebapp.config.json`.

For pure static export, add `output: 'export'` in `next.config.mjs`.

## Form Integration

The quote form does **not** submit anywhere. It tells visitors that, then opens a `mailto:` draft to the sales address. Do not show a “request received” message until a real endpoint exists. When one is added, put its id in an uncommitted env file (`.env*` is gitignored; `.env.example` may be committed). Do not hard-code a placeholder form id.

## License

Proprietary — Blue Water Components, LLC.
