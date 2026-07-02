# David Ketchum Portfolio — Project Plan

## 1. Project Overview

A personal portfolio website for David Ketchum, UX Designer / Strategist, into a custom-coded, animated, multi-theme
experience deployed via GitHub + Vercel.

**Goals**
- Keep the current site's structure and content strategy (intro/stats, consultant case studies,
  personal projects, contact footer)
- Add modern scroll and interaction animations
- Add a three-way theme toggle: Light / Dark / "Mint Mode" (playful mint-green + orange creative theme)
- Fully responsive, mobile-first
- Easy to update: adding a new project or editing text should not require touching design/layout code

## 1. Design reference
- See /design-reference/homepage-prototype.html and /design-reference/case-study-shopify.html in the design-reference folder for the finalized visual design, nav structure, theme system, and case study IA. Build should match these exactly — do not deviate on layout, spacing, or the three-theme system without asking.
---

## 2. Tech Stack

| Layer | Choice | Why |

| Framework | Next.js (App Router) | Zero-config Vercel deploys, great image optimization, file-based routing |
| Styling | Tailwind CSS | Fast iteration, plays well with CSS-variable-based theming |
| Animation | Framer Motion | Scroll reveals, page transitions, hover/tap micro-interactions |
| Smooth scroll | Lenis (or native `scroll-behavior: smooth`) | Buttery scroll feel referenced from Apple/Vercel sites |
| Content | `/content/projects/*.json` or `.mdx` files | Keeps content separate from design code — easy edits |
| Deployment | Vercel (Hobby plan) | Free for personal/non-commercial use, auto-deploys on push |
| Version control | GitHub | Source of truth, triggers Vercel deploys |

---

## 3. Site Structure (matches current site, reorganized for the new build)

```
/                     → Home: hero, stats, featured work, contact
/work                 → Full project grid (consultant + personal)
/work/[slug]          → Individual case study page
/about (optional)     → Extended bio, skills, tools
```

Keep it to a small number of routes — the current site's strength is that it's fast to scan, not
deep. Don't over-architect this into more pages than needed.

---

## 4. Theme System

Three toggle states, switchable from the top nav, persisted in `localStorage` so it's remembered
between visits.

### Light (default)
- Background: white / very light gray
- Text: near-black
- Accent: your existing brand blue
- Feel: clean, professional — matches current site

### Dark
- Background: near-black / deep charcoal
- Text: off-white
- Accent: same brand blue, slightly brightened for contrast
- Feel: Vercel-style — crisp, high contrast, minimal

### Mint Mode (creative/fun)
- Background: soft mint green
- Accent: orange
- Feel: playful — this is where more expressive animation, bouncier easing, and a slightly
  different type treatment can live. Reserved for showing personality without undermining the
  professional read of light/dark.

**Implementation approach:** CSS custom properties (`--bg`, `--text`, `--accent`, `--card-bg`, etc.)
set at the `:root` / `[data-theme]` level, toggled via a `data-theme` attribute on `<html>`.
Framer Motion's `AnimatePresence` can animate the transition between themes smoothly rather than
snapping instantly.

---

## 5. Animation & Scroll Effects

- **Scroll-triggered reveals**: project cards and section headers fade/slide in as they enter the
  viewport (Framer Motion's `whileInView`)
- **Subtle parallax**: hero and case study cover images shift slightly slower than scroll speed
- **Hover micro-interactions**: project cards lift slightly, image zooms subtly on hover (desktop)
- **Page/route transitions**: soft fade or slide between `/work` and individual case studies
- **Smooth scroll**: consistent buttery scroll behavior site-wide
- **Restraint rule**: Light and Dark modes use subtle, professional motion (short duration, ease-out).
  Mint Mode is where animation can be bouncier and more playful — this contrast is intentional and
  reinforces the "professional consultant + creative personal work" duality already present in the
  current site's structure.

---

## 6. Responsive / Mobile Design Direction

- Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`, `xl`)
- Single-column stacked layout on mobile; stat bar and project grid collapse to vertical stacks
- Nav collapses to a simple menu (theme toggle stays visible/accessible on mobile, not buried)
- Large tap targets, no hover-dependent functionality (all hover effects should have a
  non-hover equivalent or simply be omitted on touch devices)
- Images use Next.js `<Image>` for automatic responsive sizing/optimization
- Typography scales fluidly (`clamp()` or Tailwind responsive text classes) rather than jumping
  awkwardly between breakpoints — this is a big part of what makes Apple/Vercel sites feel polished

---

## 7. Content Model — Case Studies

All consultant work is **white-labeled** — no real client names, following the same pattern
already used on the current live site (e.g. "Health Care – Email Design System & Website
Redesign" instead of "Banner Health"). Personal projects (Brixli, Icebreakr, Ketch Co) keep
their real names since they're David's own brands.

Example `content/projects/health-email-design-system.json`:

```json
{
  "slug": "health-email-design-system",
  "title": "Email Design System & Website Redesign",
  "industry": "Health Care",
  "category": "consultant",
  "tags": ["Design System", "Website Redesign"],
  "summary": "Designed and implemented modular email components for a design system,
    supporting marketing initiatives and a broader website redesign.",
  "body": "The client sought to leverage their new design system for creating email template
    lock-ups to support their email marketing initiatives, as well as for a website redesign...",
  "coverImage": "/images/projects/health-cover.jpg",
  "gallery": [
    "/images/projects/health-component-library.jpg",
    "/images/projects/health-current-vs-future.jpg"
  ]
}
```

Personal project example, `content/projects/brixli.json`:

```json
{
  "slug": "brixli",
  "title": "Brixli",
  "category": "personal",
  "tags": ["Product Design", "Branding"],
  "summary": "A short description of what Brixli is and David's role in it.",
  "coverImage": "/images/projects/brixli-cover.jpg",
  "link": "https://brixli-live-link.com"
}
```

---

## 8. Case Studies to Build (from uploaded reference material)

White-labeled per section 7:

1. Health Care – Email Design System & Website Redesign
2. Restaurant – Service Design & User Research
3. Automotive – Design System & Website Redesign
4. Insurance – CRM Salesforce & Email Design System
5. Salesforce / Data – Customer 360 Dashboard
6. Government – Salesforce Discovery
7. E-commerce – Website Redesign & Atomic Design System (Shopify)
8. Health Care – Gen AI Internal Project
9. E-commerce – Email Design System
10. Insurance – Salesforce UX Optimization
11. Publishing E-commerce – MUI Design System & Website Redesign

Plus personal projects: Brixli, Icebreakr, Ketch Co (bring over from current site).

---

## 9. Build Milestones

- [ ] Scaffold Next.js + Tailwind + Framer Motion project
- [ ] Build theme system (Light / Dark / Mint) with toggle in nav
- [ ] Build layout shell: nav, footer, responsive grid
- [ ] Build reusable `ProjectCard` and case study page template
- [ ] Migrate all 11 white-labeled case studies + 3 personal projects into content files
- [ ] Add scroll reveal + hover animations
- [ ] Add smooth scroll
- [ ] Full responsive pass (mobile, tablet, desktop)
- [ ] Push to GitHub, connect to Vercel, confirm auto-deploy
- [ ] Connect custom domain (davidketchumwork.com) in Vercel settings

---

## 10. Out of Scope (for now)

- CMS/dashboard for non-technical editing (content stays as local JSON/MDX files for now)
- Blog
- Contact form backend (mailto link or simple form service is enough initially)