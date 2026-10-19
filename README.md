# joshualoren.github.io

Engineering log + systems index. Astro, deployed to GitHub Pages on push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321 (drafts visible)
npm run build    # static output in dist/
```

- **Log entry:** copy `src/content/log/_template.md`. `lines` = terse feed summary; body optional.
- **System:** add `src/content/systems/<slug>.md`. Log entries with `system: <slug>` show on its page.
- **whoami / links:** `src/site.ts`.
