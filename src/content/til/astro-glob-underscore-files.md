---
title: Astro's glob loader doesn't skip underscore files
date: 2026-10-19
tags: [astro]
---

Astro ignores `_`-prefixed files in `src/pages/`, so I assumed content collections did too. They don't: the `glob()` loader picked up `_template.md` and listed it as a post.

The fix is a negated pattern. `pattern` takes an array:

```ts
loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/writing' }),
```
