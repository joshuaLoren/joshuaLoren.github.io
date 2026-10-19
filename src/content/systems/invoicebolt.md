---
title: Invoicebolt
tagline: Free client-side invoice generator. No sign-up, no server, no watermark.
status: live
stack: [JavaScript, static build, GitHub Pages]
metric: 40 template pages
url: https://joshualoren.github.io/invoicebolt/
repo: https://github.com/joshuaLoren/invoicebolt
order: 3
---

Everything runs in the browser: the invoice editor and PDF output live client-side, with nothing stored on a server.

## Build

- Static site generator renders the app, 40 profession-specific template pages, and 4 guides, targeting long-tail search.
- `src/public/` passes through to the site root.
- `deploy.sh` builds and publishes `dist/` to the `gh-pages` branch.
