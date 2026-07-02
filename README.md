# David Ketchum — Portfolio

Personal portfolio site for David Ketchum, UX Designer / Strategist. Showcases consulting
case studies (white-labeled) and personal projects, with a light/dark/"mint mode" theme
toggle and animated scroll interactions.

Live reference (current site, being rebuilt from): https://www.davidketchumwork.com/

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation and scroll effects
- Deployed on [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- Node.js (LTS) installed
- Git installed and configured
- GitHub CLI (`gh`) authenticated
- Vercel CLI installed and authenticated

### Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
/app                  → Next.js App Router pages
/components           → Reusable UI components (Nav, ProjectCard, ThemeToggle, etc.)
/content/projects     → One JSON/MDX file per case study or personal project
/public/images        → Project images, cover photos, gallery images
/styles               → Global styles, Tailwind config, theme CSS variables
PLAN.md                → Full project plan, design direction, and content model
README.md              → This file
```

---

## Adding a New Project

1. Create a new file in `/content/projects/your-project-slug.json`
2. Follow the content model documented in `PLAN.md` (Section 7)
3. Add any images to `/public/images/projects/`
4. Run locally (`npm run dev`) to preview
5. Commit and push — Vercel auto-deploys on push to `main`

```bash
git add .
git commit -m "Add [project name] case study"
git push
```

---

## Theming

The site supports three themes, toggled from the nav and persisted in `localStorage`:

- **Light** — default, clean and professional
- **Dark** — high contrast, minimal
- **Mint Mode** — playful mint green + orange creative theme

See `PLAN.md` (Section 4) for the full theme spec.

---

## Deployment

This project deploys automatically via Vercel on every push to the `main` branch on GitHub.
No manual deploy steps required once the GitHub repo is connected to the Vercel project.

To deploy manually via CLI:

```bash
vercel --prod
```

---

## Content Guidelines

- All **consulting/client work** must remain white-labeled (industry + engagement type only,
  no real client names) — see `PLAN.md` Section 7 and 8 for the approved list.
- **Personal projects** (Brixli, Icebreakr, Ketch Co) may use real names and links.