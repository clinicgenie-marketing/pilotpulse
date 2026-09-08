# PilotPulse Website Style Guide

## 1. Brand Direction

PilotPulse should feel intelligent, practical and enterprise-ready. The website should communicate advanced AI capability without relying on a dark, futuristic or overly generated-looking aesthetic.

The visual direction is:

- Light, clean and product-led
- Confident rather than overly futuristic
- Precise, structured and easy to scan
- Distinctive through typography, colour and workflow-based visuals
- Grounded in real business operations

Avoid excessive gradients, glassmorphism, neon effects, decorative AI imagery and repeated card layouts.

---

## 2. Colour Palette

### The 60 / 30 / 10 palette

Neutrals carry most of the page. Primary is the identity layer. Accent is used sparingly for calls to action.

| Share | Role | Use |
| --- | --- | --- |
| **60% Neutral** | Ground, surface, line, text | Page background, cards, nav, forms, body copy |
| **30% Primary** | Brand identity | Logo, secondary buttons, full-width bands |
| **10% Accent** | Action | Main call-to-action only |

#### Neutral (60%)

| Token | Hex | Usage |
| --- | --- | --- |
| Ground | `#FAFAFA` | Page background |
| Surface | `#FFFFFF` | Cards, navigation, forms |
| Line | `#E7E6EA` | Borders and dividers |
| Text | `#1D1C21` | Body copy and headings |
| Muted text | `#646374` | Captions and helper text |

#### Primary (30%)

| Token | Hex | Usage |
| --- | --- | --- |
| Primary | `#4638F5` | Logo, secondary buttons, bands |
| Primary hover | `#1F0EF5` | Pressed and hover states, darker bands |
| Primary soft | `#E5E3FE` | Icon tiles and highlights |
| Primary as text | `#4638F5` | Links and heading accents |
| Secondary | `#A236F2` | Tags, illustrations, soft sections |

#### Accent (10%)

| Token | Hex | Usage |
| --- | --- | --- |
| Accent | `#3686F2` | Main call-to-action fill |
| Accent hover | `#1372F1` | CTA hover |
| Text on accent | `#1D1C21` | Labels on the accent button |
| Accent as text | `#0F6DEB` | Eyebrows and badges — not raw `#3686F2` |

### Text contrast, light site

WCAG 2.2: body text needs **4.5:1** for AA and **7:1** for AAA. Larger text (24px+ or bold 19px+) needs **3:1**.

| Pairing | Colours | Ratio | Body text | Notes |
| --- | --- | --- | --- | --- |
| Body text on page | `#1D1C21` on `#FAFAFA` | 16.22:1 | AAA | Paragraphs, nav, form labels |
| Body text on cards | `#1D1C21` on `#FFFFFF` | 16.93:1 | AAA | Cards, forms, panels |
| Muted text on page | `#646374` on `#FAFAFA` | 5.62:1 | AA | Captions, helper text, timestamps |
| Primary as text | `#4638F5` on `#FFFFFF` | 6.4:1 | AA | Headings, links, active nav |
| Text on primary fill | `#FFFFFF` on `#4638F5` | 6.68:1 | AA | Secondary buttons, full-width bands |
| Text on accent fill | `#1D1C21` on `#3686F2` | 4.72:1 | AA | The call-to-action button |
| Accent as text | `#0F6DEB` on `#FFFFFF` | 4.56:1 | AA | Raw `#3686F2` is 3.44:1 — use `#0F6DEB` |
| Text on secondary fill | `#FFFFFF` on `#A236F2` | 4.83:1 | AA | Tags, chips, soft sections |
| Primary on primary-soft | `#4638F5` on `#E5E3FE` | 5.33:1 | AA | Icon tiles, highlighted rows |

---

## 3. Typography

### Font Families

| Role | Typeface | Fallback |
| --- | --- | --- |
| Headings | Orbit | `Arial, sans-serif` |
| Body and Interface | Inter | `Arial, sans-serif` |

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbit&display=swap');
```

### Font Usage

#### Orbit

Use Orbit for:

- Hero headlines
- H1, H2 and H3 headings
- Large statistics when a more branded treatment is required
- Short, high-impact statements

Avoid using Orbit for paragraphs, navigation labels, buttons or small interface copy.

#### Inter

Use Inter for:

- Body copy
- Navigation
- Buttons
- Form fields
- Labels and tags
- Captions
- Metrics and interface content

### Recommended Type Scale

| Style | Desktop | Mobile | Line Height | Font |
| --- | --- | --- | --- | --- |
| Hero | `64px` | `40px` | `1.05` | Orbit |
| H1 | `56px` | `38px` | `1.08` | Orbit |
| H2 | `42px` | `32px` | `1.12` | Orbit |
| H3 | `28px` | `24px` | `1.20` | Orbit |
| H4 | `20px` | `18px` | `1.30` | Inter, 600 |
| Large Body | `18px` | `17px` | `1.60` | Inter |
| Body | `16px` | `16px` | `1.60` | Inter |
| Small | `14px` | `14px` | `1.50` | Inter |
| Eyebrow | `12px` | `12px` | `1.40` | Inter, 600 |

### Heading Rules

- Use sentence case rather than title case.
- Keep homepage headings concise, ideally below 12 words.
- Use a maximum text width of approximately 18 characters for large hero headlines and 26 characters for section headings.
- Avoid applying gradients to full headings. Colour one short phrase only when emphasis is needed.
- Use `#333333` for standard headings. PilotPulse Purple or Electric Blue may highlight selected words.

### Body Rules

- Use `#55535B` for all body copy, including lead paragraphs and section introductions.
- Do not use `#333333` or `#6B6875` for body text. Charcoal is for headings; muted grey is for captions, metadata and placeholders.

---

## 4. Buttons

### Primary Button

- Background: `#4638F5`
- Text: `#FFFFFF`
- Font: Inter, 600
- Border: none
- Corner radius: `10px`
- Minimum height: `48px`
- Horizontal padding: `24px`

```css
.button-primary {
  background: #4638F5;
  color: #FFFFFF;
  border: 1px solid transparent;
  border-radius: 10px;
  min-height: 48px;
  padding: 0 24px;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 600;
  transition: transform 180ms ease, background-color 180ms ease,
    box-shadow 180ms ease;
}

.button-primary:hover {
  background: #372BCF;
  transform: translateY(-1px);
  box-shadow: 0 0 0 1px rgba(70, 56, 245, 0.18),
    0 8px 24px rgba(70, 56, 245, 0.26);
}
```

### Accent Button

- Background: `#1447E6`
- Text: `#FFFFFF`
- Font: Inter, 600
- Corner radius: `10px`
- Use for secondary conversion actions, feature actions and selected interface controls.

```css
.button-accent {
  background: #1447E6;
  color: #FFFFFF;
  border: 1px solid transparent;
  border-radius: 10px;
  min-height: 48px;
  padding: 0 24px;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 600;
  transition: transform 180ms ease, background-color 180ms ease,
    box-shadow 180ms ease;
}

.button-accent:hover {
  background: #1039BC;
  transform: translateY(-1px);
  box-shadow: 0 0 0 1px rgba(20, 71, 230, 0.18),
    0 8px 24px rgba(20, 71, 230, 0.24);
}
```

### Secondary Outline Button

- Background: transparent or white
- Text: `#4638F5`
- Border: `1px solid #BDB7FA`
- Use beside a primary button, never as the strongest action.

### Button Behaviour

- Add a slight glow on hover, not a large neon aura.
- Move the button upwards by no more than `1px` on hover.
- Do not use continuous glowing or pulsing animations.
- Keep button labels short and action-led.
- Provide a visible keyboard focus ring separate from the hover state.
- Disable lift and unnecessary animation when reduced motion is requested.

---

## 5. Cards, Boxes and Containers

### Default Container

- Background: `#FFFFFF`
- Border: `1px solid #DEDCE8`
- Corner radius: `16px`
- Shadow: minimal or none by default
- Internal padding: `24px` to `32px`

### Hover State

All interactive cards, boxes and containers should receive a slight purple or blue glow on hover.

```css
.interactive-card {
  background: #FFFFFF;
  border: 1px solid #DEDCE8;
  border-radius: 16px;
  transition: transform 200ms ease, border-color 200ms ease,
    box-shadow 200ms ease;
}

.interactive-card:hover {
  border-color: rgba(70, 56, 245, 0.38);
  transform: translateY(-2px);
  box-shadow: 0 0 0 1px rgba(70, 56, 245, 0.08),
    0 12px 32px rgba(70, 56, 245, 0.12);
}
```

For boxes associated with blue actions, use a blue glow instead:

```css
box-shadow: 0 0 0 1px rgba(20, 71, 230, 0.08),
  0 12px 32px rgba(20, 71, 230, 0.12);
```

### Container Rules

- Apply glow only to interactive or intentionally highlighted containers.
- Do not make every static content box appear clickable.
- Keep shadows soft and diffuse.
- Avoid heavy dark drop shadows.
- Use one main card radius across the website.
- Use subtle surface changes to group content instead of placing every item inside a card.

---

## 6. Links and Interactive States

### Text Links

- Default: `#4638F5`
- Hover: `#372BCF`
- Underline on hover or when the link appears within body copy

### Focus State

All buttons, links, cards, tabs and form controls must have a visible keyboard focus state.

```css
:focus-visible {
  outline: 3px solid rgba(20, 71, 230, 0.35);
  outline-offset: 3px;
}
```

### Motion

- Standard duration: `180ms` to `220ms`
- Standard easing: `ease-out`
- Hover lift: maximum `2px` for cards and `1px` for buttons
- Avoid abrupt scaling and exaggerated movement
- Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

---

## 7. Layout and Spacing

### Content Width

- Maximum content width: `1320px`
- Desktop horizontal padding: `32px`
- Tablet horizontal padding: `24px`
- Mobile horizontal padding: `20px`

### Section Spacing

| Breakpoint | Vertical Section Padding |
| --- | --- |
| Desktop | `96px` to `120px` |
| Tablet | `72px` to `88px` |
| Mobile | `56px` to `72px` |

### Spacing System

Use an 8-point spacing system:

`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`, `96px`, `120px`

### Layout Rules

- Prioritise one main message per section.
- Keep body copy to a comfortable reading width of approximately 55 to 70 characters.
- Use two-column layouts for explanations paired with product demonstrations.
- Use three-column grids for solution cards, results and partnerships.
- Stack all grids into a single column on small mobile screens.
- Use clear whitespace instead of unnecessary dividers.

---

## 8. Section Styling

### Hero

- Use the grey-purple white background or a very subtle purple wash.
- Use Orbit for the headline and Inter for the supporting content.
- Highlight only one rotating phrase or important term with colour.
- Keep the primary CTA purple and the secondary action outlined.

### Product Demonstrations

- Use white surfaces over the grey-purple page background.
- Use purple to represent the AI worker.
- Use blue for system actions, active tabs and connected tools.
- Use neutral greys for customer messages and inactive states.
- Keep workflow visuals structured, legible and operational.

### Results

- Use large Orbit numerals or short Orbit statements.
- Use Inter for units, context and supporting explanations.
- Avoid oversized statistics without a clear source or context.

### Partnerships

- Use a three-column grid on desktop and one column on mobile.
- Keep featured partner cards larger than the supporting ecosystem cards.
- Partner names may use their approved brand colours.
- Retain consistent white surfaces, borders and hover glow behaviour.

### Final Call to Action

- Use a soft purple background or solid PilotPulse Purple panel.
- If the panel is purple, use white text and a white or blue accent button.
- Keep the CTA focused on one action.

---

## 9. Icons and Interface Graphics

- Use clean outline icons with a consistent `1.75px` to `2px` stroke.
- Default icon colour: PilotPulse Purple.
- Supporting system and integration icons may use Electric Blue.
- Place icons on pale purple or pale blue backgrounds where separation is needed.
- Avoid mixing filled, outlined, three-dimensional and illustrated icon styles.
- Do not use generic robot heads, brains, circuit boards or humanoid AI characters.

---

## 10. Forms

- Input background: `#FFFFFF`
- Input text: `#333333`
- Border: `#DEDCE8`
- Corner radius: `10px`
- Minimum field height: `48px`
- Focus border: `#1447E6`
- Focus glow: `0 0 0 3px rgba(20, 71, 230, 0.14)`
- Error messages must use clear text and an accessible error colour, not colour alone.

---

## 11. Design Tokens

```css
:root {
  /* Neutral 60% */
  --pp-ground: #FAFAFA;
  --pp-background: #FAFAFA;
  --pp-surface: #FFFFFF;
  --pp-line: #E7E6EA;
  --pp-text: #1D1C21;
  --pp-text-muted: #646374;

  /* Primary 30% */
  --pp-primary: #4638F5;
  --pp-primary-hover: #1F0EF5;
  --pp-primary-soft: #E5E3FE;
  --pp-secondary: #A236F2;

  /* Accent 10% */
  --pp-accent: #3686F2;
  --pp-accent-hover: #1372F1;
  --pp-accent-on: #1D1C21;
  --pp-accent-text: #0F6DEB;

  --pp-white: #FFFFFF;

  --pp-font-heading: 'Orbit', Arial, sans-serif;
  --pp-font-body: 'Inter', Arial, sans-serif;

  --pp-radius-button: 10px;
  --pp-radius-card: 16px;

  --pp-glow-purple: 0 0 0 1px rgba(70, 56, 245, 0.08),
    0 12px 32px rgba(70, 56, 245, 0.12);
  --pp-glow-blue: 0 0 0 1px rgba(20, 71, 230, 0.08),
    0 12px 32px rgba(20, 71, 230, 0.12);
}
```

---

## 12. Quick Usage Summary

### Do

- Use `#FAFAFA` as the main background and white for cards.
- Use primary `#4638F5` for identity: logo, secondary buttons and bands.
- Reserve accent `#3686F2` for the main call-to-action, with `#1D1C21` on the button.
- Use `#0F6DEB` for eyebrows, not raw accent.
- Use Orbit for headings and Inter for all functional text.
- Add a soft glow to interactive cards and buttons on hover.
- Keep layouts light, structured and easy to scan.
- Show AI through workflows, system actions and measurable outcomes.

### Do Not

- Use pure white for every section.
- Use purple and blue with equal visual priority.
- Apply strong glows to static content.
- Use Orbit for body copy or small interface labels.
- Overuse gradients, glassmorphism or neon effects.
- Make every section a grid of identical cards.
- Rely on generic AI imagery to explain the product.

