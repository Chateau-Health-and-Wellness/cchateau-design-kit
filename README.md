# Chateau Health & Wellness — Design System

**Brand:** Chateau Health & Wellness  
**Website:** [chateaurecovery.com](https://chateaurecovery.com)  
**Platform:** Wix Studio (redesign, April 2026)  
**Location:** Oakley, Utah (Wasatch Mountains)  
**Specialization:** Trauma-informed residential treatment — first responders, veterans, professionals 26+

---

## Sources

| Resource | Path / Link | Notes |
|----------|------------|-------|
| Website Brief | `April 2026 Website Brief/research/03-build-brief.md` | Master spec — all design decisions flow from this |
| Client Brand Extraction | `April 2026 Website Brief/research/01-client-brand.md` | Colors from Wix CSS + Figma, typography, logo details |
| Competitive Analysis (MD) | `April 2026 Website Brief/research/02-competitor-analysis.md` | 5 competitors analyzed |
| Competitive Analysis (HTML) | `April 2026 Website Brief/competitive-analysis.html` | Rendered visual report |
| Hero Overlay Test | `April 2026 Website Brief/hero-overlay-test.html` | 6 overlay options tested; client selected Option D |
| Logo PNG | `assets/logo-dark.png` | Official logo — mountain + CHATEAU wordmark |
| Facility Photography | `assets/facility-*.webp` | 8 facility images (lobby, commons, bedroom, hallway, etc.) |
| Team Photography | `assets/team-*.webp` | 4 team/group photos |

> **Note:** The Wix Studio platform is not directly accessible in this design system. Color variables were extracted from the live site's CSS. No Figma file was directly shared — Figma design direction was summarized in the brand extraction document.

---

## File Index

```
/
├── README.md                    ← This file (manifest + brand guide)
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← All CSS design tokens + base styles
├── assets/
│   ├── logo-dark.png            ← Primary logo (dark text, white bg)
│   ├── facility-commons.webp    ← Great hero candidate: vaulted-ceiling commons
│   ├── facility-bedroom.webp    ← Bedroom with leather chair + plaid
│   ├── facility-entrance.webp   ← Entry foyer
│   ├── facility-hallway.webp    ← West wing hallway
│   ├── facility-reception.webp  ← Front desk with wall logo
│   ├── facility-lobby-logo.webp ← Lobby with 3D wall-mounted logo
│   ├── facility-therapy-office.webp
│   ├── facility-exterior.webp
│   ├── facility-room2.webp
│   ├── facility-activity.webp
│   ├── facility-outdoor.webp
│   ├── team-group.webp          ← Staff group portrait
│   ├── team-outdoor.webp        ← Staff on lawn
│   ├── team-client-staff.webp   ← Clients + staff
│   └── team-with-dog.webp       ← Clients + staff + therapy dogs
├── preview/
│   ├── colors-brand.html        ← Brand color swatches
│   ├── colors-neutral.html      ← Neutral + bg system
│   ├── colors-semantic.html     ← Overlay treatments
│   ├── type-headings.html       ← Serif heading scale
│   ├── type-body.html           ← Body + label scale
│   ├── type-editorial.html      ← Editorial + pull quote
│   ├── spacing-tokens.html      ← Space + radius + shadow tokens
│   ├── buttons.html             ← All button variants
│   ├── cards.html               ← Card components
│   └── overlays.html            ← Image overlay treatments
└── ui_kits/
    └── website/
        ├── README.md            ← Website UI kit notes
        ├── index.html           ← Interactive homepage prototype
        ├── Nav.jsx              ← Sticky navigation
        ├── Hero.jsx             ← Hero section (Option D cinematic)
        ├── TrustBar.jsx         ← Accreditation trust strip
        ├── ProgramCards.jsx     ← Program overview grid
        ├── FRSpotlight.jsx      ← First Responder spotlight section
        ├── StatsSection.jsx     ← Animated outcome counters
        ├── InsuranceBar.jsx     ← Insurance / admissions dark section
        └── Footer.jsx           ← Footer with navigation
```

---

## Brand Snapshot

| Attribute | Value |
|-----------|-------|
| Primary Color | `#2C4A67` Deep Steel Blue |
| Secondary Color | `#50717A` Muted Teal |
| **KEY ACCENT** | **`#D17400` Burnt Orange** |
| Heading Font | EB Garamond (Google Fonts, serif) |
| Body Font | Arial (system sans-serif) |
| Tone | Warm, clinical, exclusive, nature-connected |
| Core Message | "Trauma-Informed Residential Treatment in a Serene Mountain Setting" |
| Phone | (435) 222-5225 |
| Address | Oakley, Utah |
| Rating | 4.8/5 Google (154 reviews) |
| Accreditations | Joint Commission, FOP Approved Wellness Provider |
| Founded | 2012 |
| Audience | Adults 26+, first responders, veterans, professionals |

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Warm, not clinical.** Copy reads like it was written by someone who cares, not a healthcare institution. Avoid jargon.
- **Specific, not vague.** "Since 2012, 12+ years of excellence" beats "decades of experience." Named credentials beat implied expertise.
- **Empathy-first, action-second.** Lead with understanding the reader's situation, then offer the solution.
- **Authoritative without being cold.** Clinical credibility (Joint Commission, FOP Approved, Master's Level Clinicians) is always present but never the *opening* line.
- **Confidentiality-conscious.** For first responders especially, copy must acknowledge career implications. "100% confidential" and "career-preservation focus" appear frequently.

### Casing & Formatting
- **Sentence case** for all headlines and body copy (not title case)
- **ALL CAPS** only for section labels / eyebrow tags (e.g. "OUR APPROACH", "FIRST RESPONDERS")
- **No Oxford comma** in running copy (matches existing site style)
- **Em-dashes** (—) used for asides; no en-dashes or double-hyphens
- Numbers under 10 are spelled out in narrative copy; statistics always use numerals ("94%", "154 reviews", "12+ years")
- **No emoji** in any context — brand is premium and professional

### Perspective
- Copy speaks **directly to the reader** ("you", "your recovery")
- When addressing first responders: acknowledge the role identity strongly ("You've carried the weight of others for years")
- Avoid third-person distance ("patients" → "clients" or "you")
- "We" for the organization, never "Chateau" in first-person prose

### Headline Examples (from brief)
> "Where First Responders and Professionals Reclaim Their Lives"  
> "Don't Let Insurance Be a Barrier"  
> "Your recovery is one conversation away."  
> "Healing Begins in the Mountains"  
> "Take the First Step Today"

### Section Label Examples
> OUR APPROACH · WHY CHATEAU · FIRST RESPONDERS · RESULTS · ADMISSIONS · FROM OUR BLOG

### Key Phrases / Vocabulary
- "Trauma-informed" (not "trauma-focused" or "trauma-based")
- "Residential treatment" (not "rehab" or "inpatient")  
- "Boutique / intimate setting" (14-bed facility — use as differentiator)
- "Wasatch Mountains" or "Utah's Wasatch Mountains" (always name the place)
- "Evidence-based" (used often; always credible, never preachy)
- "Whole-person treatment" or "holistic healing"
- "First responders" (two words, no hyphen)
- "Peer support" (not "peer counseling")
- "Return to duty" (for FR, not "return to work")

---

## VISUAL FOUNDATIONS

### Color System
**Primary Palette:**
- `#2C4A67` — Deep Steel Blue: navigation, footer, structural elements, dark section backgrounds
- `#50717A` — Muted Teal: icon containers, secondary buttons, tag backgrounds, hover depth
- `#354B51` — Dark Teal: hover states on secondary elements

**The Accent:**
- `#D17400` — Burnt Orange: THE defining visual element. Appears as: primary CTAs, eyebrow labels, accent bars (4px), underline accents, hover highlights, stat counter labels. Every page has at least one prominent burnt orange element above the fold.
- `#E17100` — Bright Orange: hover/active variant

**Neutral Warmth:** The neutral system has warm undertones (not cool gray). Background is `#FAFAF9` — close to white but with warmth. Cards use `#FEFBF6` (warm cream). Sections alternate with `#F8F6F3` (warm off-white).

### Typography
- **Headings:** EB Garamond (serif). Always 400 weight for H1–H3; 500 for H4 if using serif. Creates the editorial, premium magazine feel. Used for: all headlines, editorial body sections, pull quotes.
- **Body / UI:** Arial (system sans). All body copy, nav items, buttons, form labels, cards, captions. Workhorse font — kept purposely plain to let the serif headings breathe.
- **Section Labels:** Arial Bold, 14px, 0.12em letter-spacing, ALL CAPS, burnt orange. Always appear above H2s.
- **Pull Quotes:** EB Garamond Italic, 28px, burnt orange color.
- **Editorial Body:** EB Garamond 24px, for About sections, mission statements, long-form narrative.

### Photography & Imagery
**Subject:** Facility interiors (the "chateau" brand — residential, warm, non-clinical), Wasatch mountain landscapes, contemplative adults 30–55.

**Visual feel from actual facility photos:**
- Dark wood trim and exposed beams against cream/off-white walls
- Leather furniture (cognac/saddle brown, dark espresso)
- Vaulted ceilings with large grid windows
- Natural light — warm and golden
- Residential, lodge-like — NOT clinical or institutional
- Art on walls (black-framed, landscape photography)
- Natural materials: stone tile floors, wood counters, iron fixtures

**Overlay Treatments:**
1. **Hero (Option D — selected by client):** Near-black cinematic gradient left→right `rgba(24,26,33,0.92)→transparent`. Plus 4px burnt orange accent bar at top. Text left-aligned in white.
2. **Inner CTAs / FR Spotlight:** Burnt orange + steel blue gradient `rgba(209,116,0,0.65)→rgba(44,74,103,0.80)`. Creates a warm, action-focused feeling.
3. **Split Sections:** Steel blue horizontal fade, text on left, image reveals right.
4. **Warm Wash:** 8% orange tint via `background-blend-mode: multiply`. Adds warmth to testimonial/stat sections.
5. **Duotone (sparingly):** Steel blue monochrome. Team hover states, decorative elements.

**Photography rules:** No stock clichés, no clinical imagery, no minors, no crisis/distress. Adults appear contemplative, purposeful, or quietly hopeful — never suffering or celebrating dramatically.

### Backgrounds
- Default: `#FAFAF9` warm white
- Section alternation: `#F8F6F3` warm off-white
- Full-bleed image sections with gradient overlays — used for hero, FR spotlight, and final CTA
- Dark structural sections: `#2C4A67` for admissions/insurance block; `#181A21` for footer
- `#F8F6F3` for stat/testimonial sections

### Spacing & Layout
- Generous whitespace — luxury/premium feel
- Max content width: 900px (editorial) / 1200px (wide grids)
- Section padding: 80–96px vertical on desktop, 48px on mobile
- Cards use consistent 8px radius and `box-shadow: 0 2px 8px rgba(44,74,103,0.08)` — subtle lift, not dramatic
- Grid layouts: 4-column for small cards (Who We Serve, stats), 3-column for program cards and blog posts, 2-column for larger value proposition cards

### Borders & Radius
- Cards: `border-radius: 8px`
- Buttons: `border-radius: 9999px` (pill shape — defined style)
- Left-border accents on quote/info blocks: `4px solid #D17400`
- Divider lines: `--neutral-300` (`#C2C5D0`)
- NO heavy border treatments — borders are used only as subtle structural hints

### Shadow System
- Cards: `0 2px 8px rgba(44,74,103,0.08)` (teal-tinted, not pure black)
- Card hover: `0 8px 28px rgba(44,74,103,0.14)`
- Elevated surfaces (dropdowns, modals): `0 8px 32px rgba(0,0,0,0.10)`
- No inner shadows used anywhere

### Animation & Motion
- **Scroll-triggered:** Sections fade up 20px on viewport entry (600ms ease-out). Cards stagger 100ms apart.
- **Stat counters:** Count-up animation on viewport entry (1200ms ease-in-out)
- **Accent lines:** Width expands from 0 (800ms ease-out)
- **Hover buttons:** 200ms ease — color + scale(1.02) for primary; color only for others
- **Card hover:** translateY(-4px) + shadow increase (250ms)
- **Parallax:** Background images only, 0.3x speed. Never on text.
- **Page transitions:** Simple 300ms fade only
- **Max animation duration:** 1200ms. Respects `prefers-reduced-motion`.

### Hover & Press States
- **Primary CTA:** `#D17400` → `#E17100` + `scale(1.02)` + orange glow shadow
- **Cards:** `translateY(-4px)` + deeper box-shadow
- **Nav items:** 3px burnt orange left-border slides in (150ms)
- **Team photos:** `scale(1.05)` + slight darken overlay
- **Text links:** Underline slides in from left (200ms)
- **Press/active:** All interactive elements `scale(0.98)`

### UI Patterns to Avoid
- Carousel/slider hero sections
- Auto-playing video backgrounds
- Entry pop-up modals
- Wall-of-text sections
- Generic blue gradients
- Pure white backgrounds (always use `#FAFAF9`)
- Dark/cold/moody color schemes

---

## ICONOGRAPHY

**No dedicated icon font or custom icon set is part of the current brand.** Chateau's existing site (Wix) uses Wix's built-in UI and inline SVG icons for basic UI elements.

**Recommended approach for the redesign:**
- Use **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest`) — clean, 2px stroke, professional, not decorative. Matches the brand's understated quality.
- Icon style: 24px, 2px stroke, `currentColor` — inherits surrounding text color
- Icon containers: `--brand-secondary` (#50717A) teal background, white icon, circle or soft-square shape (8px radius)
- Icons are used as UI helpers (navigation, features, modalities), never as decorative illustrations
- No emoji in any context
- No hand-drawn or illustrated icons

**Common icon usages:**
- Program/modality cards: small icons in teal containers
- Trust bar: badge icons for accreditations
- Contact/footer: phone, map-pin, mail icons (Lucide)
- CTA buttons: optional arrow-right icon

**Icon substitution note:** Lucide is specified as the closest matching CDN-available icon set to what Wix Studio provides. If the client provides a custom icon set, replace Lucide references.

---

## UI Kits

| Kit | Path | Design Width | Description |
|-----|------|-------------|-------------|
| Website (chateaurecovery.com) | `ui_kits/website/index.html` | 1440px | Full homepage prototype with interactive navigation, hero, trust bar, programs, FR spotlight, stats, insurance CTA, footer |
