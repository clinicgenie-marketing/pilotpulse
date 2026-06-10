# design.md — PilotPulse Website Revamp

Visual direction is derived from the dark design reference. Keep it: premium, dark, enterprise-grade, slightly Apple-inspired. Confident and minimal — not playful, not hype-driven, not a generic chatbot site.

## Brand guidelines

Personality: confident, strategic, clear, outcome-focused, human-first.

Tone of voice:
- Direct and operational. Short paragraphs. Strong headings.
- British English spelling throughout.
- Use "AI agents", "AI-supported execution", "workflows" and "operations" consistently.
- Avoid: "revolutionary", "game-changing", "seamless", "cutting-edge", generic chatbot language, guaranteed outcomes, unsupported metrics, overpromised cost savings.
- Headline device: white text with one gradient-filled keyword (e.g. "Real-World **Impact**").

Do:
- Lead with proof and a low-risk first step.
- Keep the subsidy claim hedged ("may access", "up to", "subject to programme terms and eligibility").

Don't:
- Switch to a light theme.
- Use cartoon AI imagery or overuse icons.
- Make layouts text-heavy.

## Colour

| Token | Value (approx.) | Use |
|---|---|---|
| `--bg-base` | `#0A0B1E` → `#0D1030` | Page background, near-black navy |
| `--bg-panel` | `#11132E` | Lifted bands, alternating sections |
| `--surface-card` | `rgba(22,26,58,0.70)` | Glassmorphism card fill |
| `--border-hairline` | `rgba(120,140,255,0.18)` | 1px card borders |
| `--brand-blue` | `#3B82F6` / `#2563EB` | Primary CTAs, key accents |
| `--brand-violet` | `#7C3AED` / `#A855F7` | Gradient partner to blue |
| `--gradient-signature` | `linear-gradient(120deg,#2563EB,#7C3AED)` | Headline keyword, primary buttons, glow rings |
| `--text-primary` | `#F4F6FF` | Headlines and body on dark |
| `--text-secondary` | `#A6ADCB` | Sub-copy, descriptions |
| `--glow` | radial blue/violet, low opacity | Behind hero orb, section headings, final CTA |

Accent tints for industry differentiation (subtle, optional): logistics = blue, healthcare = teal-blue, recruitment/HR = violet, catering/sales = warm violet.

Contrast: keep body text at or above WCAG AA on the navy base (secondary text no lighter than `#A6ADCB`).

## Typography

- **Headings:** geometric sans (e.g. General Sans, Satoshi, or Inter Tight), medium-to-semibold, tight tracking. Two-tone treatment (white + gradient keyword).
- **Body:** same family, regular weight, line-height ~1.6, secondary colour.
- **Eyebrows / labels:** uppercase, letter-spaced (~0.08em), small, blue accent.

Scale (desktop, rem):

| Style | Size | Weight |
|---|---|---|
| H1 / hero | 3.5–4 | 600 |
| H2 / section | 2.25–2.75 | 600 |
| H3 / card title | 1.25–1.5 | 600 |
| Body | 1–1.125 | 400 |
| Eyebrow | 0.8125 | 600, uppercase |

Mobile: scale H1 down to ~2.25rem; maintain generous line-height.

## Layout system

- Max content width ~1200px, centred, with comfortable gutters.
- 12-column grid; cards snap to 4/3/2/1-up by breakpoint.
- Section rhythm: centred heading + one-line sub-heading, then content. Vertical spacing 96–128px between sections (64–80px on mobile).
- Alternating bands: occasional full-width tinted (violet wash) band to break rhythm — used behind the capability cards and the "Why PilotPulse" block.
- Hero and final CTA bookend the page with matching radial glow.

Breakpoints: mobile < 640, tablet 640–1024, desktop > 1024.

## Component styling

Cards (glass):
- Radius 16–20px, fill `--surface-card`, 1px `--border-hairline`, subtle top inner highlight, soft drop shadow.
- Hover: border brightens to blue/violet, faint glow lifts, 1–2px rise.
- Equal heights within a row.

Buttons:
- Primary: gradient fill (`--gradient-signature`), white text, rounded-full, slight glow on hover.
- Secondary: transparent, 1px hairline border, white text, rounded-full.
- Persistent header CTA mirrors the primary style.

Icons: thin-line, low-saturation blue/violet, one per card maximum, consistent weight across a set.

Pills / labels: small rounded pills for industry tags on case-study cards.

Numerals (process): large, gradient-filled step numbers.

Testimonials: glass cards with a soft gradient quotation-mark glyph; name · role · company beneath the quote.

## Animation direction

Light touch only:
- Fade-and-rise on cards as they enter the viewport.
- Slow drift / subtle parallax on the hero orb.
- Border-glow brighten on card and button hover.
- Optional: a thin line that "flows" from the manual column to the automated column in the tension section, and a faint connecting path along the 5-step process.

No bounce, no confetti, no aggressive motion. Respect `prefers-reduced-motion`.
