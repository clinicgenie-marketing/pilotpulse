# PilotPulse — Landing Page

A premium, dark, enterprise-grade marketing site for **PilotPulse**, a Singapore-based
AI implementation partner. Built to convert operational businesses into qualified demo /
consultation requests.

- **Content source of truth:** [`docs/content.md`](docs/content.md) (British English, hedged subsidy claim)
- **Design source of truth:** the dark design reference (`landing dark.pdf`)
- **Section order:** [`docs/sitemap.md`](docs/sitemap.md)

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (token-driven light theme) |
| Icons | lucide-react (outline, 1.75–2px stroke) |
| Fonts | Orbit headings + Inter body via `next/font` |
| Animation | Lightweight `IntersectionObserver` scroll reveals + CSS (respects `prefers-reduced-motion`) |

No heavy runtime dependencies — workflow visuals, icons and motion stay lightweight.

## Run locally

> Requires **Node.js 18.17+** (tested on Node 24).

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, SEO metadata, Open Graph, JSON-LD
│   ├── page.tsx            # landing page — composes all sections in sitemap order
│   ├── globals.css         # design tokens + button/card/type layer
│   ├── contact/page.tsx    # /contact — destination for every CTA (demo/consultation form)
│   ├── not-found.tsx       # on-brand 404
│   ├── icon.svg            # favicon
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── layout/             # Header (sticky surface nav + mobile menu), Footer
│   ├── ui/                 # Surface cards, CTAButton, Reveal, SectionHeading, Eyebrow,
│   │                       # GradientText, Logo, Icons
│   ├── visuals/            # HeroOrb (pure CSS/SVG hero visual)
│   └── sections/           # HeroSection, CredibilityBanner, PainPointsSection,
│                           # PositioningSection, WorkflowCards, ImplementationCards,
│                           # RoiSection, ServicesSection, WhyPilotPulse, ValuesSection,
│                           # ProcessSection, TestimonialsSection, FinalCTA, ContactForm
└── lib/
    └── content.ts          # all copy, typed — mirrors docs/content.md verbatim
```

All copy lives in `src/lib/content.ts`. Edit `docs/content.md` and mirror changes there.

## Design system

Defined by [`docs/style-guide.md`](docs/style-guide.md) and tokens in `tailwind.config.ts` + `src/app/globals.css`:

- **Background:** grey-purple white (`#F7F6FB`) with `#F1EFF7` alternate bands and white surfaces
- **Primary / accent:** PilotPulse Purple (`#4638F5`) and Electric Blue (`#1447E6`)
- **Cards:** white, 16px radius, lavender-grey border, soft purple glow on interactive hover
- **Typography:** Orbit headings, Inter for body and UI, one coloured phrase for emphasis
- **Motion:** short ease-out hovers and scroll reveals — disabled under `prefers-reduced-motion`

## Accessibility & SEO

- One `<h1>` (the hero); semantic `<h2>`/`<h3>` hierarchy throughout
- Skip-to-content link, focus-visible rings, `aria-label`led nav/buttons, reduced-motion support
- Body/secondary text meets WCAG AA contrast on the light page background
- Title/meta description, Open Graph + Twitter cards, canonical URLs, `Organization` JSON-LD, robots + sitemap

## Wiring before launch (intentional placeholders)

These are stubbed so nothing 404s, and are clearly marked in code:

1. **Contact form** (`src/components/sections/ContactForm.tsx`) captures input and shows a
   confirmation. Connect `handleSubmit` to your CRM webhook / form handler.
2. **Blog** is an external link — set `BLOG_HREF` in `src/lib/content.ts`. Every
   "View case study" link points there.
3. **Terms & Conditions / Privacy** footer links are `#` placeholders — point them at the
   real pages when built.
4. **Partner lockups** (IMDA · Singtel) render as text wordmarks. Swap in official logo
   assets if/when licensed for use.
5. Update `SITE_URL` in `layout.tsx`, `robots.ts` and `sitemap.ts` to the production domain.

## Content guardrails (per the brief)

- Subsidy wording stays hedged ("may access", "up to 50%", "subject to programme terms and eligibility")
- Only substantiated metrics are shown (Pick Network ≤ one-third support cost; Henderson up to
  25 min/candidate; Connect Energy Services up to 5× CVs). No invented numbers or pricing.
- Dark theme only.
