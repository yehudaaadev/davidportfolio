# Portfolio - David Yehuda Surbakti

Personal static portfolio website built with HTML5, modern CSS, and vanilla JavaScript.

## Architecture

- `common.css`: Shared global design tokens (`:root`), base reset, sticky footer layout, stable scrollbar gutter (`scrollbar-gutter: stable`), and pixel-locked responsive navigation bar.
- `home.html` / `home.css`: Minimalist landing page with responsive fluid typography (`clamp()`).
- `about.html` / `about.css`: Single-screen 2-column layout (story narrative on left, circular profile image on right) fitted to 100vh with zero desktop scroll.
- `portofolio.html` / `portofolio.css` / `portofolio.js`: Live project showcase displaying Bagimu Extra (Eskul Management System) and E-Voting Platform SMK Bagimu Negeriku, with direct URLs and interactive lightbox modal.
- `contact.html` / `contact.css`: Minimalist contact channels (Instagram, WhatsApp, and Gmail: `david75bekasi@gmail.com`) with floating SVG icons and structured persona chips, fitted to single-screen viewport.
- `image/`: Profile photo (`profile.jpeg`) and live application screenshots (`eskul.png`, `evoting.png`).

## Color Palette

- Primary Accent: `#3746D0` (Royal Blue)
- Primary Dark: `#26339E`
- Background Base: `#F5F1EA` (Warm Beige)
- Card Surface: `#FFFFFF`
- Footer Tone: `#E6E1D7` (Harmonized Warm Neutral)

## Typography

- Headings & Display: `Bricolage Grotesque` (Weights 600, 700, 800)
- Body Text: `Hanken Grotesk` (Weights 400, 500, 600, 700)
- Technical Badges & Metrics: `Space Grotesk` (Weights 500, 600, 700)

## Browser Support

Targeted for standard modern evergreen browsers supporting CSS Grid, Flexbox, CSS Custom Properties, and IntersectionObserver.
