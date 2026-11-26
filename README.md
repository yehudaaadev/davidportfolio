# Portfolio - David Yehuda Surbakti

Personal portfolio website re-architected with **Svelte 5** and **SvelteKit 2**, exported to prerendered static HTML via `@sveltejs/adapter-static` for GitHub Pages.

## Architecture & Tech Stack

- **Framework**: SvelteKit 2 (`@sveltejs/kit`) with Svelte 5 Runes (`$state`, `$props`).
- **Adapter**: `@sveltejs/adapter-static` generating 100% prerendered static assets into `build/`.
- **Components**:
  - `src/lib/components/SplashScreen.svelte`: High-impact kinetic preloader with non-linear `00`-`100%` counter and split-curtain reveal.
  - `src/lib/components/Navbar.svelte`: Unified pixel-locked navigation with dynamic active states.
  - `src/lib/components/Footer.svelte`: Sticky bottom footer (*don't be shy*).
- **Routes**:
  - `src/routes/+page.svelte`: Hero landing page with fluid typography.
  - `src/routes/about/+page.svelte`: Narrative story and circular profile portrait.
  - `src/routes/portfolio/+page.svelte`: Live production project showcase with interactive modal lightbox.
  - `src/routes/contact/+page.svelte`: Contact channels (Instagram, WhatsApp, Gmail, GitHub).
- **Deployment**: Automated via GitHub Actions workflow (`.github/workflows/static.yml`).

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Color Palette

- Primary Accent: `#3746D0` (Royal Blue)
- Primary Dark: `#26339E` / Deep Curtain `#1C246B`
- Background Base: `#F5F1EA` (Warm Beige)
- Card Surface: `#FFFFFF`
- Footer Tone: `#E6E1D7` (Harmonized Warm Neutral)

## Typography

- Headings & Display: `Bricolage Grotesque`
- Body Text: `Hanken Grotesk`
- Technical Badges & Counter: `Space Grotesk`
