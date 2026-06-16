# project.md — PilotPulse Website Revamp

## Business overview

PilotPulse is a Singapore-based AI implementation partner. It helps organisations move from manual operations to AI-supported execution by embedding agentic AI agents directly into real operational workflows — not by selling demos or standalone chatbots.

The offer is a bundle, not a single product: use-case discovery, workflow design, AI agent build, system integration, staff enablement and ongoing refinement. The commercial model is sales-led (demo and consultation driven); no public pricing exists.

Positioning, in one line: **PilotPulse builds AI where the work actually happens.**

Brand pillars:
- A trusted AI implementation partner, not a vendor
- A practical workflow automation specialist
- A production-focused agentic AI company
- A business transformation partner for SMEs and operational teams
- A human-first company — AI supports people, it does not replace them

Guiding philosophy: **"small, lovable wins"** — start with one high-impact workflow, prove it, measure it, then scale step by step.

Credibility anchor: 2026 Technology Partner for Singapore IMDA's GenAI for Digital Leaders initiative. Eligible businesses may access up to a 50% government subsidy on approved AI solution suite and customisation services, subject to programme terms and eligibility (always hedged — never stated as guaranteed).

## Target audience

Primary: business leaders and operators at SMEs and mid-market organisations with high communication volume, repetitive workflows and information bottlenecks.

| Segment | Who they are | What they want |
|---|---|---|
| Operations leaders / GMs | Own day-to-day execution and SOPs | Less repetitive workload, more consistent output, no disruption to what works |
| Founders / Group CEOs | Set direction, approve investment | Competitive advantage, measurable ROI, manpower that scales without linear headcount |
| Functional heads | Customer support, recruitment/HR, sales ops | A specific painful workflow handled reliably |
| Industry focus | Logistics, healthcare/aesthetics, recruitment/HR, catering, manufacturing, professional services, trade | Practical automation built around their real operations |

Mindset: pragmatic, slightly sceptical of AI hype, has likely seen AI pilots that never reached production. Convinced by proof and a low-risk first step, not by buzzwords.

## Goals

Primary goal: **generate qualified demo and consultation requests** from operational businesses.

Supporting goals:
1. Make PilotPulse's services and implementation model genuinely easy to understand.
2. Differentiate sharply from AI-demo vendors and generic chatbot tools.
3. Build trust through named, credible client outcomes and clear human-oversight messaging.
4. Guide every visitor toward one low-commitment next step: identify their first AI workflow.
5. Preserve a premium, dark, enterprise-grade aesthetic throughout.

Primary conversion action (consistent across the page): **Identify your first AI workflow**
Secondary actions: **Request a demo** / **See real implementations**

Success signals:
- Demo / consultation form submissions
- Scroll depth to the services and proof sections
- Case-study and blog click-through
- Returning visitors from outbound and partner channels

## Features

Homepage (this build):
- Sticky slim header with persistent primary CTA
- Two-column hero with the signature "AI in hand" orb visual
- IMDA credibility band (hedged subsidy wording)
- Reality vs. automated side-by-side contrast section
- Core positioning + human-first statement
- Capability cards (what AI agents do)
- Proven implementations — named, distinct case-study cards with outcomes
- "Smart design for measurable ROI" (Clarity → Focus → Momentum)
- Three-tier service model (Starter Kit → Workflow Automation → Autonomous Agentic)
- Why PilotPulse (workflow-first, integration, multi-industry, production-ready)
- Values band
- Five-step implementation process
- Testimonial cards
- Final CTA band ("Start with one workflow")
- Multi-column footer

Site-wide:
- Responsive (desktop / tablet / mobile)
- Light scroll animation (fade-and-rise, hover glow, hero parallax)
- Accessible colour contrast on dark theme
- SEO metadata, semantic headings, Open Graph
- "View case study" CTAs link out to the separate blog (hosted separately, not part of this 7-page site)
- Forms routed to a CRM / inbox (demo + consultation)

## Tech stack

Recommended (modern, fast, maintainable):

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (React) | SSR/SSG for SEO, fast loads, easy routing for blog/case studies |
| Styling | Tailwind CSS | Token-driven dark theme, rapid consistent UI |
| Components | shadcn/ui (optional) | Accessible primitives that match the glass/card system |
| Animation | Framer Motion | Restrained scroll and hover motion |
| Content | MDX or headless CMS (e.g. Sanity/Contentful) | Non-dev editing of case studies and blog |
| Forms | Form handler + CRM webhook | Demo/consultation capture |
| Hosting | Vercel (or similar) | CI/CD, edge performance, preview deploys |
| Analytics | GA4 + privacy-respectful event tracking | Conversion and scroll-depth measurement |

If a no-build/CMS route is required instead, a themed Webflow or WordPress build can reproduce the same design system — but the dark glass aesthetic and motion are cleaner in a component framework.
