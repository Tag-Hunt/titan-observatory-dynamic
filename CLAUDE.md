# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Titan Observatory is a **Next.js 16 (App Router)** website for a community radio telescope observatory. It features Givebutter donation and newsletter widgets, live Discord presence, interactive radio-astronomy educational content, and accessibility controls.

## Commands

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Start the production server
npm run lint   # Run ESLint
```

No test framework is configured.

## Architecture

### Routing (App Router)

Pages live in `src/app/`. Key routes are `/`, `/team`, `/donate`, `/faq`, `/radio-astronomy`, `/hydrogen-line`, `/telescope-overview`, `/system-architecture`, `/project-updates`, `/privacy`, and `/terms`. `/volunteer` redirects to the external volunteer form.

API routes in `src/app/api/`:

- `GET /api/givebutter-messages` - paginated donor messages (up to 3 pages, max 20)

### Educational Content

- `src/app/radio-astronomy/` contains the radio-astronomy introduction.
- `src/app/hydrogen-line/` contains the interactive hydrogen-line article and its scoped stylesheet.
- `src/components/hydrogen-line/` contains the GSAP and SVG-based educational visualizations.
- `src/lib/dopplerAnimation.ts`, `queueHeroSpectrum.ts`, and `queueSpectrumRaw.ts` provide the visualization math and spectrum data.

### Custom Color System

Colors use CSS variables defined in `src/app/globals.css` under `:root` and `[data-theme="sunrise"]`. Tailwind maps these through `withOpacityValue` in `tailwind.config.js`. Prefer `titan-*` tokens such as `bg-titan-bg`, `text-titan-text-primary`, and `border-titan-border`.

### Accessibility System

- **Animation toggle:** localStorage key `titan:animations-disabled`, custom event `titan-animations-toggle`, CSS class `.animations-disabled`. Managed by `src/lib/animations.ts`.
- **Text-size toggle:** localStorage key `titan:text-size`, custom event `titan-text-size-toggle`, CSS class `.text-size-large`. Managed by `src/lib/text-size.ts`.
- Floating controls are rendered from the root layout through `FloatingAccessibilityControls`.
- `src/lib/useVisibleAnimation.ts` pauses expensive educational animations outside the viewport.

### Server and Client Components

- The root layout and data-fetching pages are Server Components.
- Interactive components use `"use client"`.
- Motion powers shared site animation; GSAP powers the hydrogen-atom visualization.

### Key Shared Utilities

- `src/lib/utils.ts` - `cn()` helper using clsx and tailwind-merge
- `src/lib/site.ts` - canonical site metadata and absolute URL generation
- `src/components/AnimatedSection.tsx` - scroll-triggered section wrapper
- `src/components/ui/` - active shared visual primitives

### Path Alias

`@/*` maps to `./src/*` in `tsconfig.json`.

## Environment Variables

```text
NEXT_PUBLIC_SITE_URL=https://titanobservatory.org
DISCORD_GUILD_ID=
DISCORD_BOT_TOKEN=
GIVEBUTTER_API_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
```

## External Integrations

- **Givebutter:** Donation/newsletter widgets and donor-message API
- **Discord:** Public widget API with a bot-token fallback, accessed server-side
- **Google Analytics:** Route-based tracking through `GoogleAnalytics.tsx`
