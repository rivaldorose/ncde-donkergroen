# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NCDE Donkergroen is a Dutch-language static website for "Nederlands Collectief Duurzame Energie" — a sustainable energy information platform for the Netherlands. Built by Rose Vibes Studio.

## Commands

- **Dev server:** `npm run dev` (Next.js on port 3000)
- **Build:** `npm run build`
- **Start production:** `npm run start`
- **Lint:** `npm run lint`

No test framework is configured.

## Tech Stack

- Next.js 16 with App Router
- React 19, TypeScript
- Tailwind CSS v4 (uses `@theme` directive in globals.css, not tailwind.config.js)
- Deployed on Vercel

## Architecture

### Routing

All pages live under `app/` using Next.js App Router file-based routing. Key route groups:
- `/oplossingen/*` — energy solutions (warmtepompen, etc.)
- `/regelingen/*` — regulations (seeh, thuisbatterijen)
- `/portaal/*` — user portal with registration flow (`registratie/` → `registratie/succes/`)
- `/contact/` → `/contact/bedankt/` — contact form flow
- Legal pages: `/privacy`, `/juridisch`, `/cookies`, `/disclaimer`

### Layout & Components

- `app/layout.tsx` — root layout wrapping all pages with `Header` and `Footer`
- `components/` — shared UI: `Header.tsx` (sticky with mobile hamburger nav), `Footer.tsx`, `InfoCard.tsx`, `PartnerLogos.tsx`, `StatsBar.tsx`
- Pages export metadata via Next.js Metadata API

### Styling

- Tailwind theme variables defined in `app/globals.css` under `@theme`:
  - `--color-primary: #1a421f` (dark green), `--color-accent: #40916C`, `--color-sage: #D8F3DC`
  - Font: Inter (via Google Fonts)
- Icons: Material Symbols Outlined (loaded from Google Fonts in root layout)
- Custom CSS utilities for scroll animations and grid patterns in globals.css

### Data

All content is hardcoded — no CMS, database, or API integrations. Forms exist on contact and registration pages but have no backend handlers (action="#").

### Images

Static images in `public/images/` with subdirectories: `logo/`, `partners/`, `makers logo/`. Some filenames contain spaces (e.g., `warmte pomp.jpg`, `normaal logo.png`).

## Key Conventions

- All user-facing text is in Dutch (html lang="nl")
- Path alias `@/*` maps to project root (tsconfig)
- TypeScript strict mode enabled
