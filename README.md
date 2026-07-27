# Lokeshkumar D — Portfolio (React)

A rich, premium portfolio for a Full-Stack .NET Developer, rebuilt from the original static
HTML/CSS/JS site into React + Vite. Design direction: **"The Ledger"** — an enterprise
audit-ledger aesthetic (ink-navy surfaces, brass/gold "approval seal" accents, a verified-teal
signal color) that mirrors the approval-workflow systems described in the resume, with a
light/dark theme toggle and categorized tech-stack icons (react-icons).

## Stack

- **React 19** + **Vite** — build tooling
- **react-router-dom** — routing (`/` home, `/projects/:slug` case-study pages)
- **react-icons** — technology icons (Simple Icons + Tabler Icons sets)
- Plain CSS with a token system (`src/styles/tokens.css`) — no CSS framework, so the visual
  identity stays fully custom and easy to restyle

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/     Navbar, Hero, About, Experience, TechStack, Projects, Credentials, Contact, Footer
  pages/          Home.jsx (assembles all sections), ProjectDetail.jsx (case-study route)
  data/           techStack.js, experience.js, projects.js — all real content, edit here
  hooks/          useTheme (light/dark), useReveal (scroll animations), useCountUp (stat counters)
  styles/         tokens.css (design tokens/colors), base.css (reset + shared utilities)
```

## Editing content

All copy lives in `src/data/*.js` — no need to touch component code to update your experience,
projects, or tech stack. Images live in `src/assets/images/`.

## Contact form

The contact form posts to the same Formspree endpoint as the original site
(`https://formspree.io/f/meobragp`). Swap the `FORM_ACTION` constant in
`src/components/Contact.jsx` if you set up your own Formspree (or other) endpoint.

## Deploying

This is a client-side routed SPA, so your host needs to fall back to `index.html` for unknown
paths (e.g. `/projects/capex-revex` on a hard refresh):

- **Netlify** — `public/_redirects` is already included.
- **Vercel** — `vercel.json` rewrite rule is already included.
- **GitHub Pages** — GitHub Pages doesn't support SPA fallback natively. Either switch
  `BrowserRouter` to `HashRouter` in `src/App.jsx`, or add the standard 404.html redirect trick.

Build output goes to `dist/` — upload that folder, or connect the repo to Netlify/Vercel for
automatic builds (`npm run build`, publish directory `dist`).
