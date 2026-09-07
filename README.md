# jhansipallapothu.github.io

Personal portfolio site for Jhansi Sreeja Pallapothu — Embedded Systems & Firmware Engineer.

Built with React + Vite, deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
it to GitHub Pages. In the repo settings, under **Settings → Pages**, set the source to
**GitHub Actions**.

## Content

Edit [src/data.js](src/data.js) to update profile info, experience, skills, projects, and
education. Fill in the `linkedin` and `github` URLs in `profile`.
