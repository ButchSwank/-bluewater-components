# Blue Water Components

Modern, professional website for Blue Water Components — Florida's electronics manufacturing services and components distributor.

**Live preview:** Open `index.html` or run the Next.js dev server.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons
- Fully static-friendly (can be exported)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key Features

- Clean industrial design (deep navy + electric blue + silver)
- Fully responsive (mobile-first)
- Fast loading with optimized images and minimal JS
- Interactive product catalog with category filters + live search
- Fully functional contact/quote form (demo + easy Formspree integration)
- Rich SEO: metadata, OpenGraph, JSON-LD structured data, sitemap, robots.txt
- Accessible (keyboard nav, focus states, semantic markup)

## Customization

**Update content:**
- `lib/data.ts` — services, products, company info
- `app/page.tsx` — hero copy, additional sections
- `components/ContactForm.tsx` — connect real backend (Formspree, Resend, etc.)

**Images:**
- All custom images live in `/public/images/`
- Replace with real photography when available

**Colors:**
- Defined in `tailwind.config.ts` (navy, blue, silver scale)

## Deployment

Deploy instantly to Vercel, Netlify, or Cloudflare Pages.

```bash
npm run build
```

For pure static export, add `output: 'export'` in `next.config.mjs`.

## Form Integration (Recommended)

The contact form is ready for production. Replace the simulated submit with:

1. **Formspree** (easiest): Add your form ID and uncomment fetch in ContactForm.
2. **Resend + Server Action** (Next.js native)
3. **Netlify / Vercel Forms**

## License

Proprietary — Blue Water Components, LLC.
