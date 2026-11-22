# Gumption Guide

An illustrated field manual for practical know-how: mechanisms, knots and lashings, units and measures, fieldcraft. Short, cross-referenced entries; the principle and the rule of thumb, not the whole recipe.

One source, three outputs: the website, an installable offline app (PWA, in progress) and a printable book (`/book`).

## Run

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # validates all content; fails on bad ids/links/schema
pnpm test         # vitest: content graph, units, search
pnpm lint && pnpm typecheck
```

## Add an entry

```bash
pnpm new knots prusik
```

That scaffolds `src/content/knots/prusik/` with an `entry.ts` (data) and a `render.tsx` (drawing). Fill them in; the folder name must equal the `id`. `pnpm gen` (run automatically by dev/build/test) picks new folders up.

## Layout

| Path | What |
|---|---|
| `src/content/schema.ts` | Zod schema for every entry, plus `defineEntry()` |
| `src/content/categories.ts` | Category registry: title, facets, which renderer |
| `src/content/<category>/<id>/` | `entry.ts` (pure data), optional `render.ts(x)` (client-only drawing), optional `body.mdx` |
| `src/lib/content/` | Content graph: `getEntry`, `getRelated`, `getBacklinks`, `getByTag`… No React. |
| `src/lib/search/` | Search engine (ported from 507 Movements) + index builder. No React. |
| `src/lib/units.ts` | Unit conversion |
| `src/renderers/` | `mechanism` (canvas animation + motion graph), `knot` (SVG step frames), `units` (converter), `article` (steps + safety) |
| `src/app/` | Routes: `/`, `/[category]`, `/[category]/[id]`, `/tags/[tag]`, `/search`, `/book`, `/api/entries`, `/api/entries/[id]`, `/api/search-index` |
| `scripts/` | `gen-content.mts` (import registries), `new-entry.mts` (scaffolder) |

## Deploy

Vercel, framework preset Next.js. Custom domain `gumption.guide` (not yet configured).
