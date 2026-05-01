# Chateau Website UI Kit

**Product:** chateaurecovery.com (Wix Studio redesign)
**Design Width:** 1440px
**Stack:** React + Babel (inline JSX), Arial + EB Garamond via Google Fonts

## Pages / Screens

| Route | Component | Description |
|-------|-----------|-------------|
| `home` | Full homepage | Hero → Trust Bar → Who We Serve → Why Chateau → Programs → FR Spotlight → Stats → Approach → Insurance → Footer |
| `fr` | First Responder Hub | Cinematic near-black hero (small orange rule above H1), profession grid |
| `admissions` | Insurance Verification | 4-step multi-form with progress indicator |
| `programs` | Programs Listing | Grid of 5 program cards |

## Component Files

| File | Component | Notes |
|------|-----------|-------|
| `Nav.jsx` | `SiteNav` | Sticky header, shrinks on scroll, dropdown menus, crisis bar |
| `Hero.jsx` | `SiteHero` | Option D cinematic overlay, small orange rule directly above H1 (no section-top bar) |
| `TrustBar.jsx` | `SiteTrustBar` | Joint Commission, FOP, Google rating, Since 2012, Master's Level |
| `ProgramCards.jsx` | `SitePrograms` | 3-column program card grid with facility photos |
| `FRSpotlight.jsx` | `SiteFRSpotlight` | Full-bleed near-black cinematic + steel-blue gradient (orange overlay retired) |
| `StatsSection.jsx` | `SiteStats` | Animated count-up stats + testimonial pull quote |
| `InsuranceBar.jsx` | `SiteInsuranceBar` | Dark blue admissions section, carrier tags |
| `Footer.jsx` | `SiteFooter` | Final CTA band, nav columns, crisis hotline |

## Image Dependencies
All facility images are referenced as `../../assets/[name].webp` relative to `ui_kits/website/`.

## Design Notes
- Hero uses **Option D** (near-black cinematic) — client-selected April 2026
- FR Spotlight uses **near-black cinematic + steel-blue gradient** (orange overlays retired)
- All CTAs: pill-shaped (`border-radius: 9999px`), uppercase, 0.05em tracking
- Section labels: **14px** Arial Bold, ALL CAPS, 0.12em tracking — `#D17400` burnt orange on light backgrounds, white (`rgba(255,255,255,0.7)`) on cinematic dark backgrounds. The 14px floor is required to clear WCAG AA "large text" contrast for orange (3.22:1 vs white).
- **Orange usage**: see the `--accent` canonical comment block in `../../colors_and_type.css`. Orange is a brand mark, not a color — appears in micro-accents only (page-top brand rule, small rule above H1, eyebrow labels on light bg, inline links).
- Heading font: EB Garamond 400 weight for H1–H3; never bold in headings
