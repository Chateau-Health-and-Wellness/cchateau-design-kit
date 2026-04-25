# Chateau Website UI Kit

**Product:** chateaurecovery.com (Wix Studio redesign)
**Design Width:** 1440px
**Stack:** React + Babel (inline JSX), Arial + EB Garamond via Google Fonts

## Pages / Screens

| Route | Component | Description |
|-------|-----------|-------------|
| `home` | Full homepage | Hero → Trust Bar → Who We Serve → Why Chateau → Programs → FR Spotlight → Stats → Approach → Insurance → Footer |
| `fr` | First Responder Hub | Hero with orange overlay, profession grid |
| `admissions` | Insurance Verification | 4-step multi-form with progress indicator |
| `programs` | Programs Listing | Grid of 5 program cards |

## Component Files

| File | Component | Notes |
|------|-----------|-------|
| `Nav.jsx` | `SiteNav` | Sticky header, shrinks on scroll, dropdown menus, crisis bar |
| `Hero.jsx` | `SiteHero` | Option D cinematic overlay, 4px orange accent bar |
| `TrustBar.jsx` | `SiteTrustBar` | Joint Commission, FOP, Google rating, Since 2012, Master's Level |
| `ProgramCards.jsx` | `SitePrograms` | 3-column program card grid with facility photos |
| `FRSpotlight.jsx` | `SiteFRSpotlight` | Full-bleed orange+blue overlay section |
| `StatsSection.jsx` | `SiteStats` | Animated count-up stats + testimonial pull quote |
| `InsuranceBar.jsx` | `SiteInsuranceBar` | Dark blue admissions section, carrier tags |
| `Footer.jsx` | `SiteFooter` | Final CTA band, nav columns, crisis hotline |

## Image Dependencies
All facility images are referenced as `../../assets/[name].webp` relative to `ui_kits/website/`.

## Design Notes
- Hero uses **Option D** (near-black cinematic) — client-selected April 2026
- FR Spotlight uses **Treatment 1** (burnt orange + steel blue gradient) — for inner sections
- All CTAs: pill-shaped (`border-radius: 9999px`), uppercase, 0.05em tracking
- Section labels: 13px Arial Bold, ALL CAPS, `#D17400` burnt orange, always above H2s
- Heading font: EB Garamond 400 weight for H1–H3; never bold in headings
