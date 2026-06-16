# PDF-exact design spec (measured from `landing dark.pdf`)

Canvas: 1728px wide · content from x=200 to x≈1530 (**~1330px content width**).
All values below are measured at the 1728px reference.

## Colours (sampled)

| Token | Value | Use |
|---|---|---|
| bg | `#05002B` | page background (deep violet-navy) |
| white | `#FFFFFF` | headings |
| body | `#C6C8D3` | body/sub copy |
| gradient | `90deg: #0DA4D5 → #1F89FF → #4633FF` | headline keywords, primary buttons |
| nav pill | `#28224B` | header pill fill |
| card (capability) | `#090C3F` | capability cards |
| why panel | `#262064 → transparent` | violet wash band |
| why card | `#27234A` | 2×2 approach cards |
| process card | `#1B163F` | step text cards |
| logo tile | `#2B2555` | client logo chips |
| blue accent | `#3D7DFF` (approx) | IMDA-Approved line, step numbers, blue bold lines |

## Type (Mulish ≈ Avenir; Type3 vectorised in PDF)

| Style | Size / line | Notes |
|---|---|---|
| H1 hero | 64px / 80px | bold; line 2 gradient |
| H2 section | 44px / 55px | bold; one gradient phrase |
| CTA heading | ~56px | "AI Workflow" gradient |
| Sub/lead | 19px / 28px | `#C6C8D3` |
| Body | 16–17px / 24px | `#C6C8D3` |
| Card title | 24px / 35px | bold white |
| Quote | 22px / 34px | centred |
| Nav/buttons | 15px / 18px | semibold |
| Footer heads | 16px · items 14px | heads white bold, items grey |

## Section order & anatomy (case-study section dropped per client)

1. **Header** — compact left-aligned pill (x200, w≈617, h≈69, fully rounded), logo img + links Home (blue/active) · Contact Us · About Us. No CTA button. Static (not sticky).
2. **Hero** — left text col (~680px): H1 two-tone (no eyebrow), grey sub (3 lines), primary + secondary pill buttons (h≈48). Right: `hero-orb-hand.png` bleeding off the right edge (bbox x531→1987, y55→868).
3. **IMDA** — left: `imda-phone.png` (459×943) overlapping ~128px into the next band. Right: H2 blue line "IMDA-Approved" + white line, 2 paragraphs, white `logo-imda.png` + `logo-singtel.png` row, small primary pill button.
4. **Operations panel** — full-width slightly-lighter band (y1951–3055), rounded bottom corners, purple bottom glow. Centred H2 + sub; left "label + 4 dot-bullets" (icon `icon-dot-bullet.png`), right video card `video-thumb.png` (872×490 display) with carousel arrows; 2 bold white statements below bullets.
5. **Capabilities** — centred H2 (gradient tail) + sub; 3 cards (~420px, gap 30, bg `#090C3F`, r≈24): icon img (~100px), title 24px (card 1 line 1 is gradient "Conversation AI:"), grey body. No bullet lists.
6. **Why / Not just demos** — full-width violet wash band (y5489–6729). Centred H2: white + gradient phrase + white "— not just AI demos". Sub line 2 ends with gradient phrase. Small "Our approach combines:" label. 2×2 cards (~630×250, bg `#27234A`): 44px icon img + title inline, body below.
7. **Values** — full-bleed photo `values-bg.png` (945px tall). Left: gradient H2 + white sub. Right column (x877→1530): stacked items: icon img, 24px white title, bold-white first sentence, grey rest; hairline dividers. Icons: human=`icon-conversation.png`, outcomes=`icon-process-1.png`, trust=`icon-trust-shield.png`.
8. **Process** — centred white H2 + sub. 3-col staggered (middle col pushed ~200px down): lavender tiles (~360×150, r24) holding 3D icon imgs `icon-process-{1..5}` (+`icon-decision`=magnifier for step 2), text blocks with 28px blue number circle + 24px title + body. Col1: tile,1,tile,2 · Col2: 3,tile · Col3: tile,4,tile,5.
9. **Logo wall** — 3 centred rows (9/10/9), 134px tiles r≈28 bg `#2B2555` thin border, logo imgs `client-01..28`. No heading.
10. **Testimonials** — centred H2 "What our clients say"; ONE wide card (1335×431, slightly lighter + border, r≈24): centred 22px quote, bold name, logo chip + grey role. Carousel dots (active = wide pill). Chips: Roger=client-17, Wayne=client-09, Adeline=client-11.
11. **Final CTA** — centred `glyph-dolphin.png` (136px), ~56px heading with gradient phrase, blue bold one-liner, grey body, primary+secondary buttons. Radial purple glow behind/below.
12. **Footer** — 4 centred columns (Location / Contact / Opening Hours / Sitelinks), all text centre-aligned per column; tiny centred copyright.

Reference crops for diffing: `/tmp/ppdesign/crops/ref-01..10*.png`.
