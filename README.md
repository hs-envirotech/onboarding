# Onboarding

Internal onboarding pages for HRSB / Envirotech, styled in the ENVY design
system. A Next.js 16 (App Router) site, fully static — no backend, no
database, everything runs in the browser.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:3000/onboarding/anne in your browser.

## Build

```
npm run build
```

Outputs a static site to `out/`, ready to deploy anywhere that serves plain
HTML/CSS/JS (Cloudflare Pages, Netlify, GitHub Pages, etc.). `wrangler.jsonc`
is set up for Cloudflare Workers static-assets deployment via `wrangler deploy`.

## Pages

- `/onboarding/anne` — Corporate Services onboarding companion for Anne
