# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (exposed on LAN via --host)
npm run build      # Type-check then bundle (tsc -b && vite build)
npm run lint       # ESLint across the project
npm run preview    # Preview the production build locally
```

There are no tests in this project.

## Architecture

**adclubtvm** is the website for Advertising Club Trivandrum — a React 19 + TypeScript SPA built with Vite 8, deployed to Vercel.

### Routing

`App.tsx` wraps everything in `BrowserRouter`. `AppLayout` renders:
1. A fixed dismissible announcement `Banner` (z-index 60, height tracked via CSS var `--banner-h`)
2. `Nav` offset below the banner
3. `Routes` + `Footer` also offset by the banner height

Routes: `/` → `Home`, `/events` → `Events`, `/events/:id` → `EventDetail`, `/gallery` → `Gallery`, `/about` → `About`, `/instagram` → `Instagram`.

Vercel is configured with a catch-all rewrite to `index.html` for client-side routing.

### Data layer

All content is static TypeScript in `src/data/`:
- `events.ts` — exports `Event` interface, `events` array (past events with images), and `upcoming` array (future events with status). To add a new event, append to the appropriate array.
- `instagram.ts` — static Instagram post data.

Images in `events` currently use `picsum.photos` placeholder URLs.

### Styling system

**Tailwind v4** via `@tailwindcss/vite` plugin (no `tailwind.config.js` — config lives entirely in `src/index.css` under `@theme`).

Brand tokens defined in `src/index.css`:
- Colors: `bg`, `bg-warm`, `purple`, `purple-light`, `purple-deep`, `yellow`, `magenta`, `pink`, `coral`, `muted`, `surface`, `white`
- Fonts: `Gotham` (400/500/700) loaded from `/public/fonts/` via `@font-face`; mapped to `--font-display` and `--font-body`

Use token shorthand classes (e.g. `bg-purple`, `text-yellow`) — never use arbitrary `var(--color-*)` values in Tailwind classes.

shadcn/ui is configured (`components.json`) with style `radix-nova`, icon library `lucide`, and aliases: `@/components/ui`, `@/lib/utils`, etc.

### Animation

- **GSAP** (`gsap` + `@gsap/react`) — used in `HeroSection` for the custom Figma-style cursor and entrance animations.
- **Framer Motion / Motion** — used in page components for scroll and interaction animations (e.g. EventRow 3D tilt).
- **`@paper-design/shaders-react`** — used for the animated gradient background in the hero (GrainGradient).
- **`@use-gesture/react`** — drag/gesture interactions.

### Layout conventions

- Every page's `<main>` element uses `pt-14` (or `pt-16`) to clear the fixed navbar, plus `min-h-screen`.
- The `--banner-h` CSS variable is set dynamically on `<html>` when the banner is shown/hidden, and both Nav and content are offset by it via inline `marginTop`.
- Scrollbar is hidden globally via `scrollbar-width: none` and `::-webkit-scrollbar { display: none }`.

### Path alias

`@` resolves to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

### React Compiler

Babel's `react-compiler` preset is active via `@rolldown/plugin-babel`. Avoid manual `useMemo`/`useCallback` — the compiler handles memoization automatically.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `python3 -c "from graphify.watch import _rebuild_code; from pathlib import Path; _rebuild_code(Path('.'))"` to keep the graph current
