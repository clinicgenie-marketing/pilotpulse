# tasks.md — PilotPulse Website Revamp

Build tasks in delivery order. Check off as completed. Each phase ends in a reviewable state.

## Phase 0 — Setup
- [ ] Confirm content lock from `content.md` (esp. metrics, named clients, subsidy wording)
- [ ] Verify final facts with client: IMDA partner year, subsidy eligibility text, address, partner logos, consent to name Pick Network / SkinScape / Bijan / Henderson / CES / SuperWorld
- [ ] Initialise repo (Next.js + Tailwind), configure tokens from `design.md`
- [ ] Set up hosting + CI/CD with preview deploys
- [ ] Add base layout, fonts, colour tokens, dark theme

## Phase 1 — Design system
- [ ] Implement colour tokens and gradients
- [ ] Type scale and heading two-tone (white + gradient keyword) utility
- [ ] Glass card component (radius, border, hover glow, equal heights)
- [ ] Primary / secondary button components (rounded-full, gradient / hairline)
- [ ] Eyebrow, pill/label, section-heading components
- [ ] Icon set (thin-line blue/violet, consistent weight)
- [ ] Motion primitives (fade-and-rise, hover glow) honouring `prefers-reduced-motion`

## Phase 2 — Homepage sections (in page order)
- [ ] Sticky header + nav + persistent Request a Demo CTA (mobile hamburger)
- [ ] Hero — two-column, orb visual, dual CTAs, micro trust line
- [ ] IMDA credibility band — device still, hedged subsidy copy, partner lockups
- [ ] Reality & tension — two-column contrast + emphasised closing line
- [ ] Core positioning — problem panels, method list, set-apart human-first block
- [ ] Capability cards — 4-up on violet-wash band, micro-bullets
- [ ] Proven implementations — 6 distinct named cards, industry pills, outcomes, pattern strip
- [ ] Smart design for ROI — Clarity / Focus / Momentum
- [ ] Three service tiers — progression layout, "discuss starting point" CTA
- [ ] Why PilotPulse — 4 cards on lifted panel
- [ ] Values — band (warmer violet wash), 4 values
- [ ] Process — 5 numbered steps with connecting path
- [ ] Testimonials — 3 glass cards or slow carousel
- [ ] Final CTA — full-width glow band, dual CTAs, large closing line
- [ ] Footer — multi-column, hairline divider, ©2026 (remove "Powered by Clinic Genie"); links: Home · About Us · Blog · Contact Us · Terms & Conditions · Privacy

## Phase 3 — Conversion & forms
- [ ] "Identify your first AI workflow" form (primary path)
- [ ] Demo / consultation form
- [ ] Route submissions to CRM / inbox + confirmation state
- [ ] Wire all CTAs to correct destinations

## Phase 4 — Supporting pages
- [ ] About Us page
- [ ] Contact Us page (forms, location, hours)
- [ ] Terms & Conditions page
- [ ] Privacy page (fix unfinished privacy retention clause flagged in research)
- [ ] Error 404 page (on-brand dark theme, links back to Home + Contact)
- [ ] Wire Blog as an external link in nav and footer ("View case study" links point to the separate blog)

## Phase 5 — SEO & metadata
- [ ] Title tag + meta description from `content.md`
- [ ] Semantic headings (single H1), alt text, Open Graph / Twitter cards
- [ ] Sitemap.xml + robots.txt
- [ ] Structured data (Organization, LocalBusiness)

## Phase 6 — QA & launch
- [ ] Responsive pass (mobile / tablet / desktop)
- [ ] Accessibility: contrast on dark theme, keyboard nav, focus states, reduced-motion
- [ ] Performance: image optimisation, Core Web Vitals
- [ ] Cross-browser check
- [ ] Analytics + conversion events (form submits, scroll depth, case-study clicks)
- [ ] Final content proofread (British English, no banned hype words, hedged subsidy)
- [ ] Stakeholder sign-off → launch

## Cleanup carried from old site
- [ ] Remove repeated placeholder "Logistics Customer Support" cards
- [ ] Remove "Powered by Clinic Genie" footer line
- [ ] Replace vague single-line case descriptions with structured problem/workflow/outcome
- [ ] Remove duplicated/legacy WordPress placeholder posts ("Hello world!", lorem ipsum)
- [ ] Reconcile address and copyright year across all pages
