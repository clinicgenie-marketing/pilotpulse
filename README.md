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
| Styling | Tailwind CSS (token-driven dark theme) |
| Icons | lucide-react (thin-line) |
| Fonts | Inter + Inter Tight via `next/font` (self-hosted, no layout shift) |
| Animation | Lightweight `IntersectionObserver` scroll reveals + CSS (respects `prefers-reduced-motion`) |

No heavy runtime dependencies — the hero "orb", glows and icons are pure CSS/SVG.

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
│   ├── layout.tsx          # fonts, SEO metadata, Open Graph, JSON-LD, ambient background
│   ├── page.tsx            # landing page — composes all sections in sitemap order
│   ├── globals.css         # design tokens + glass/button/eyebrow component layer
│   ├── contact/page.tsx    # /contact — destination for every CTA (demo/consultation form)
│   ├── not-found.tsx       # on-brand dark 404
│   ├── icon.svg            # favicon
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── layout/             # Header (sticky glass nav + mobile menu), Footer
│   ├── ui/                 # GlassCard, CTAButton, Reveal, SectionHeading, Eyebrow,
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

## Design system (from the reference)

Defined as tokens in `tailwind.config.ts` + `src/app/globals.css`:

- **Background:** near-black navy (`#06070F → #0A0B1E`) with fixed blue/violet radial glows
- **Signature gradient:** `linear-gradient(120deg, #2563EB, #7C3AED)` — headline keyword, primary buttons, glow rings
- **Glass cards:** translucent navy fill, hairline border, top inner highlight, hover lift + glow
- **Typography:** Inter Tight headings (white + one gradient keyword), Inter body, uppercase letter-spaced blue eyebrows
- **Motion:** fade-and-rise on scroll, slow hero float, hover border-glow — all disabled under `prefers-reduced-motion`

## Accessibility & SEO

- One `<h1>` (the hero); semantic `<h2>`/`<h3>` hierarchy throughout
- Skip-to-content link, focus-visible rings, `aria-label`led nav/buttons, reduced-motion support
- Body/secondary text meets WCAG AA contrast on the navy base
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
