@AGENTS.md

# Gumption Guide: working rules

Full brief: `SETUP.md`. Open questions and unverified facts: `TODO.md`.

## Conventions
- Next.js 16 App Router with Cache Components, TypeScript strict, pnpm. Plain CSS (globals + CSS Modules), no Tailwind/UI kit.
- Ask before adding a dependency not already in package.json.
- `entry.ts` is **pure data** (no DOM, no React). `render.*` is **client-only**, loaded via the generated `renders` registry (`useRender(id)`).
- `src/lib/content` and `src/lib/search` must never import React or browser APIs (the API and a future MCP server use them).
- Entry ids are globally unique kebab-case and equal the folder name. URL is `/<category>/<id>`.
- Build fails on: schema violation, duplicate id, `related` pointing at a missing id. Orphans and single-use tags only warn.
- Dynamic route pages read `params` under `<Suspense>` (Cache Components instant navigation).

## Content
- Voice: terse, practical, workbench reference. One-sentence `summary`, one-line `key` (rule of thumb). Principles, not recipes.
- Write original text and original SVGs. Don't copy from ABOK or other modern copyrighted sources; citing `refs.abok` numbers is fine.
- Safety-related entries (fire, load-bearing knots, climbing) stay `status: "draft"` until a human reviews them.
- Don't invent facts or reference numbers. Unsure → leave it out and add it to `TODO.md`.
- Mechanism colors: input = orange (`d.IN()`), output = blue (`d.OUT()`), frame = gray (`d.GND()`), always via CSS variables.

## Checks before committing
`pnpm lint && pnpm typecheck && pnpm test && pnpm build`
