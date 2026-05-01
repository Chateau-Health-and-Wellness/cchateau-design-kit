# Chateau Health & Wellness — Design System

**Brand:** Chateau Health & Wellness  
**Website:** [chateaurecovery.com](https://chateaurecovery.com)  
**Platform:** Wix Studio (redesign, April 2026)  
**Location:** Oakley, Utah (Wasatch Mountains)  
**Specialization:** Trauma-informed residential treatment — first responders, veterans, professionals 26+

---

## ⚠ How to use this kit (read first)

Before touching anything else, read these three rules:

1. **Orange is a brand mark, not a color.** Treat `#D17400` the way you'd treat a logo — it appears as a *micro-accent* in 1–2 small spots per viewport, never as a fill, button, overlay, or sidebar. The full canonical rule (Approved + Forbidden uses) lives in the `--accent` comment block in [`colors_and_type.css`](colors_and_type.css). If anything in this README ever conflicts with that block, the CSS wins.
2. **Cinematic-overlay sections are for highlights only** — H1, short subhead, 1–2 CTAs. Long explainer copy goes in white-space sections. Don't fill an overlay with paragraphs of body text; it kills the cinematic feel.
3. **Accessibility is enforced, not aspirational.** All buttons clear 44×44px touch targets. All interactive elements have visible focus outlines. Orange (`#D17400`) is 3.22:1 vs white — only AA-safe for large bold uppercase text (≥14px Arial Bold ALL CAPS); never use for body copy or long button labels. See the [Accessibility](#accessibility) section.

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
| Primary Color | `#2C4A67` Deep Steel Blue (primary CTAs, structural) |
| Secondary Color | `#50717A` Muted Teal |
| Brand-mark Accent | `#D17400` Burnt Orange — **micro-accent only** (see Color System) |
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

> **Source of truth:** the `--accent` comment block in [`colors_and_type.css`](colors_and_type.css). This section summarizes; the CSS is authoritative.

**Primary Palette:**
- `#2C4A67` — Deep Steel Blue: navigation, footer, structural elements, dark section backgrounds, primary CTAs on light bg
- `#50717A` — Muted Teal: icon containers, secondary buttons, tag backgrounds, hover depth, eyebrow labels (alternative)
- `#354B51` — Dark Teal: hover states on secondary elements

**The Accent — Burnt Orange (brand mark only):**
- `#D17400` — Burnt Orange (`--accent`)
- `#E17100` — Bright Orange (`--accent-bright`) — hover variant for inline links and dots only

**Approved orange uses (the only ones):**

| # | Use | Spec | Notes |
|---|-----|------|-------|
| 1 | Page-top brand rule | 3px full-width gradient, top edge of page (Nav top) | **Max 1 per page** |
| 2 | Rule above a hero-level title | ~32×3px gradient (`.h1-accent-rule`) directly above an H1 in cinematic-overlay heroes, OR the title of a cinematic / full-bleed mini-hero banner card (Variant 4 scrim) | **Hero-level only** — never above ordinary H2/H3/H4 in white-space sections, and never above titles in non-cinematic card variants (Variants 1–3) |
| 3 | Eyebrow / section labels | Arial Bold, ALL CAPS, **≥14px**, 0.12em tracking | Light backgrounds only — use white on cinematic dark |
| 4 | Inline text links | `var(--accent)` color inside body copy | Within paragraph text |
| 5 | Decorative dots | ≤5px circles | Rare — small trust-signal markers |

**Forbidden orange uses (explicit):**

- ✕ Orange-filled buttons — `.btn-accent` is **retired**
- ✕ Orange-stroked CTAs on white — `.cta-orange-outline` is **retired**
- ✕ Orange decorative bars next to typography samples or body content
- ✕ Orange 4px section-top bar (use Approved #1 page-top rule + Approved #2 above-H1 rule instead)
- ✕ Orange eyebrow / label text *inside* cinematic dark overlays — use white or `rgba(255,255,255,0.7)`
- ✕ Orange overlays, fills, large blocks, backgrounds (use the cinematic near-black family instead)
- ✕ Orange for body text, running copy, or long button labels (fails WCAG AA at 3.22:1 for normal-weight text)
- ✕ Orange left-border accents on quote/info blocks (use `--brand-secondary` teal or `--neutral-300` instead)

**Frequency rule:** Orange should be visible in 1–2 *small* spots per viewport at most. If you can count three orange elements on screen, one is wrong.

**Worked example — homepage hero:**
- Nav: 3px page-top brand rule (Approved #1)
- Hero: cinematic near-black overlay; eyebrow label in white (`rgba(255,255,255,0.7)`); small ~32×3px orange rule directly above H1 (Approved #2); H1 in white serif; subhead in white sans; primary CTA in steel-blue editorial style (`#3B5A66`); secondary CTA as ghost outline. Trust dots may use Approved #5.
- That's *one and a half* orange spots in the entire above-the-fold view: the page-top rule (visible) plus the small above-H1 rule. Nothing else.

**Neutral Warmth:** The neutral system has warm undertones (not cool gray). Default page background is now `#FFFFFF` (warm tones removed in current token set — see CSS). Sections alternate with `#FFFFFF`. `--neutral-500` (`#9295A1`) is **3:1 vs white — restricted to metadata, disabled states, and non-essential labels only**. Never use it for primary or supporting body copy.

### Typography
- **Headings:** EB Garamond (serif). Always 400 weight for H1–H3; 500 for H4 if using serif. Creates the editorial, premium magazine feel. Used for: all headlines, editorial body sections, pull quotes.
- **Body / UI:** Arial (system sans). All body copy, nav items, buttons, form labels, cards, captions. Workhorse font — kept purposely plain to let the serif headings breathe.
- **Section Labels:** Arial Bold, **14px** (do not reduce — required for AA contrast), 0.12em letter-spacing, ALL CAPS. **Burnt orange on light backgrounds only**; on cinematic dark overlays use white (`rgba(255,255,255,0.7)`). Always appear above H2s.
- **Pull Quotes:** EB Garamond Italic, 28px, **steel blue** (`var(--brand-primary)`) — orange retired here for AA compliance on long italic text.
- **Editorial Body:** EB Garamond 24px, for About sections, mission statements, long-form narrative. Use italic *only for short pull quotes* — never for long stretches (hurts readability).
- **Don't mix many EB Garamond weights on one page.** 400 for headings, 400 italic for pull quotes, 500 for select H4 — that's the working set. Adding more weights muddies the editorial feel.

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

**Overlay Treatments (all near-black cinematic — orange overlays retired):**
1. **Hero (Option D — selected by client):** Near-black cinematic gradient left→right `rgba(24,26,33,0.92)→transparent`. **No section-top bar.** A small ~32×3px orange rule (`.h1-accent-rule`) sits directly above the H1; eyebrow label in white. Text left-aligned in white.
2. **Inner / FR Spotlight:** Near-black cinematic + steel-blue gradient (`rgba(18,22,32,0.94)→rgba(27,38,58,0.15)`). Eyebrow in white, H2 in white serif. **No orange overlay** (deprecated).
3. **Split Sections:** Steel blue horizontal fade, text on left, image reveals right.
4. **Center / Testimonial:** Uniform near-black scrim (`rgba(18,22,32,0.78–0.88)`); centered title + body + ghost CTAs.
5. **Subtle / Section Tint:** Near-black at low opacity (`rgba(24,26,33,0.38)`). Replaces the prior orange "warm wash."
6. **Duotone (sparingly):** Steel blue monochrome. Team hover states, decorative elements.

**Cinematic content rule:** These overlay sections are reserved for *highlights* — H1 + short subhead + 1–2 CTAs. Long-form / explainer copy goes on white-space sections. Filling an overlay with paragraphs of body text undermines the cinematic feel and creates contrast / readability problems.

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
- Left-border accents on quote/info blocks: `4px solid var(--brand-secondary)` (teal) or `var(--neutral-300)` — **orange left-borders retired** (was an extra orange spot we don't need)
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
- **Primary CTA on light bg:** `var(--brand-primary)` (`#2C4A67`) → `var(--brand-primary-dark)` (`#1e3349`) + `scale(1.02)` + steel-blue glow shadow. (Orange-glow CTAs retired.)
- **Primary CTA on dark bg:** `.btn-on-dark` white fill → `#f3f4f6` + `scale(1.02)`. Steel-blue-on-dark fails contrast — do not use.
- **Cards:** `translateY(-4px)` + deeper box-shadow
- **Nav items:** 3px brand-primary or accent left-border slides in (150ms) — accent only if eyebrow-style emphasis is wanted, otherwise primary
- **Team photos:** `scale(1.05)` + slight darken overlay
- **Text links:** Underline slides in from left (200ms)
- **Press/active:** All interactive elements `scale(0.98)`
- **Focus-visible (keyboard):** `2px solid var(--brand-primary)` outline with `2px` offset, white outline on dark/cinematic backgrounds. Required for WCAG 2.4.7 — never remove.

### UI Patterns to Avoid
- Carousel/slider hero sections
- Auto-playing video backgrounds
- Entry pop-up modals
- Wall-of-text sections (especially over cinematic overlays — see overlay content rule above)
- Generic blue gradients
- Dark/cold/moody color schemes
- Orange-tinted overlays (use the cinematic near-black family)
- Orange decorative bars next to typography or running text

---

## Accessibility

These rules are enforced, not optional. Designs that don't meet them shouldn't ship.

### Color Contrast (WCAG 2.1 AA)

| Token | Hex | Ratio vs white | Approved use |
|-------|-----|----------------|--------------|
| `--neutral-900` | `#303442` | ~12:1 | Headings, primary body |
| `--neutral-700` | `#626571` | ~5.8:1 | Body copy |
| `--neutral-500` | `#9295A1` | **~3:1 (fails AA for body)** | Metadata, disabled, non-essential labels only |
| `--accent` | `#D17400` | **~3.22:1 (large-text only)** | ≥14px Arial Bold ALL CAPS or ≥18px text — never body or long button labels |
| `--brand-primary` | `#2C4A67` | ~9.2:1 | CTAs on light bg, structural |

**Buttons on dark backgrounds:** Steel-blue-on-dark-blue is ~1.4:1 — fails. Use `.btn-on-dark` (white fill) for primary CTAs on Nav/Footer dark contexts. Use `.btn-ghost` (white outline) on cinematic image backgrounds.

### Touch Targets (WCAG 2.5.5)
All interactive elements clear **44×44 px** minimum. The `.btn` default (14px vertical padding + 16px font line-height + 2px border = 46px) is safe. Never reduce padding to fit a layout — relayout instead.

### Focus Indicators (WCAG 2.4.7)
Every interactive element shows a visible keyboard focus outline. The CSS sets `:focus-visible` globally to `2px solid var(--brand-primary)` with `2px` offset (white on dark). Never `outline: none` without an equivalent visible replacement.

### Typography Spacing
- Body line-height ≥ **1.5** (kit uses 1.625)
- Heading line-height ~ **1.2** (1.15–1.25)
- Paragraph spacing ~ **1em** between paragraphs
- List-item spacing ~ **0.5em** between items

### Reduced Motion
The CSS already respects `prefers-reduced-motion: reduce`. Do not add new animations that bypass this guard.

---

## Photography

- **Color temperature:** Keep the library consistent — warm, golden, natural light. Avoid mixing cool/blue-tinted photos with warm/cognac-tinted photos in the same set.
- **Subject:** Facility interiors (lodge-feel, not clinical), Wasatch landscapes, contemplative adults 30–55. No stock clichés, no clinical imagery, no minors, no crisis/distress.
- **Overlay rule:** Any photo carrying overlaid text gets the near-black cinematic scrim — orange tints are retired. The scrim must keep text contrast ≥ 4.5:1 (≥ 3:1 for ≥18px or ≥14px bold).
- **Alt text:** Informational photos describe the scene meaningfully. Decorative-only photos (background flourishes) get `alt=""`. Never autogenerate filenames as alt text.

---

## Cards

- **One concept per card.** Don't pack multiple programs or unrelated info into a single tile.
- **One primary action per card.** If the whole card is clickable, also expose a visible focusable control (link or button) for screen readers.
- **Excerpts ≤ ~100 characters.** Long descriptions belong on detail pages, not card faces.
- **Hierarchy:** Title (largest), description (mid), CTA / arrow (clear visual affordance).
- **Cards on dark backgrounds:** Add a subtle outline or shadow to keep the click affordance legible.
- **Mobile:** Grids collapse to a single column. Don't squeeze 4 columns into a phone width — reflow.
- **Card titles get no orange decorative rule** — that's reserved for H1 only (see Color System).

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
