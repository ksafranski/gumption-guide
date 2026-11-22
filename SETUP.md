# Gumption Guide — Framework Setup Brief

> **For the agent:** This is your build brief. Read it fully before you write any code. Work through the phases in order, commit after each one, and stop at the end of each phase to report back. If something here conflicts with current library docs, go with the docs and mention the deviation in your report.

---

## 1. What we're building

**Gumption Guide** (`gumption.guide`) is an illustrated field manual for practical know-how: mechanisms, knots and lashings, units and measures, outdoor skills and shop skills. It's aimed at the weekend-warrior crowd: campers, woodworkers, tinkerers, fixers.

Core ideas:

- **Categorized, but globally connected.** Every entry belongs to one category, but entries link across categories through `related` and shared `tags`. For example, *Differential windlass* (mechanism), *Trucker's hitch* (knot) and *Force & pressure* (units) all connect through the `mechanical-advantage` tag.
- **Interactive where it helps.** Mechanisms animate, knots tie step by step, and units come with a converter.
- **One source, three outputs:**
  1. A website hosted on Vercel
  2. An installable offline app (PWA)
  3. A printable book (PDF from a `/book` route)
- **Room to grow.** A public JSON API and an MCP server come later, so content access must be plain functions, not tangled up in UI code.

### Seed project

The first category is a port of an existing static app at `../507-mechanical-movements` (a sibling folder). It's an animated companion to Henry T. Brown's *507 Mechanical Movements* (1868, public domain), with 35 of 507 movements done so far. **Do not modify that repo.** Read from it and port into this one.

Key files in the seed project:

| File | What to take |
|---|---|
| `js/movements.js` | 35 entries: `id, title, aka, motion, family, summary, how[], key, uses[], related[], outLabel, draw(d,t), output(t)`, plus the `MOTION` and `FAMILY` lookup tables and helpers (`IN`, `OUT`, `GND`, `pulley`, `meet`) |
| `js/draw.js` | A 2D canvas drawing kit (gears, links, sliders, ground pivots) in a 400×300 space, with theme colors read from CSS variables |
| `js/search.js` | Client-side search: field-weighted prefix matching, synonyms, typo correction, `field:` queries and `/regex/` |
| `js/app.js` | Grid, filters, typeahead, detail view, animation loop, motion graph |
| `styles.css` | Design tokens (light and dark), layout and components. Keep the look. |
| `icons/`, `tools/make-icons.mjs` | Gear logo. Reuse the mark for now; rebranding comes later. |

---

## 2. Tech stack

- **Next.js**, latest stable, with the **App Router**, **TypeScript** in strict mode, and the `src/` directory layout
- **Static first:** every entry page is pre-rendered with `generateStaticParams`. No database.
- **Styling:** plain CSS (global tokens plus CSS Modules), ported from `styles.css`. No Tailwind, no UI kit.
- **Content validation:** `zod`
- **Long-form prose:** MDX via `@next/mdx`, only for entries that need it
- **PWA/offline:** Serwist (`@serwist/next`), or whatever is currently recommended for App Router offline support. Generate the manifest with `app/manifest.ts`.
- **Print:** a print stylesheet plus Paged.js (loaded client-side, on `/book` only)
- **Tests:** Vitest for content and graph logic, plus one Playwright smoke test
- **Lint/format:** ESLint (Next config) and Prettier
- **Package manager:** pnpm
- **Deploy:** Vercel, custom domain `gumption.guide`

Ask before adding any dependency that isn't on this list.

---

## 3. Content model

### 3.1 Global entry schema

Every entry, in every category, satisfies this base schema. Define it in `src/content/schema.ts` with zod and export the inferred TypeScript types.

```ts
type EntryBase = {
  id: string;            // globally unique, kebab-case, e.g. "spur-gears", "bowline"
  category: CategoryId;  // "mechanisms" | "knots" | "units" | "fieldcraft" | ...
  title: string;
  aka?: string[];        // alternate names, used for search
  summary: string;       // one sentence, plain English
  key?: string;          // the one-line takeaway / rule of thumb
  body?: string[];       // short paragraphs ("how it works"); long-form goes in body.mdx
  uses?: string[];       // where you meet it in real life
  tags?: string[];       // cross-category concepts, kebab-case, e.g. "mechanical-advantage"
  related?: string[];    // entry ids in ANY category
  refs?: Record<string, string | number>; // e.g. { brown: 123, abok: 1010 }
  sources?: { title: string; url?: string; note?: string }[];
  status: "draft" | "reviewed"; // human safety/accuracy review gate
  order?: number;        // book/sort order within its category
};
```

Each category extends the base with its own fields:

- **mechanisms:** `motion` (from the existing `MOTION` keys), `family` (from `FAMILY`), `outLabel`
- **knots:** `kind: "knot" | "hitch" | "bend" | "loop" | "lashing"`, `strength?`, `secure?`, `untie?` (easy/hard), `steps: { caption: string }[]`
- **units:** `quantity` ("length", "mass", "force", ...), `units: { id, name, symbol, toBase: number }[]`, `rulesOfThumb?: string[]`
- **fieldcraft:** `difficulty`, `gear?: string[]`, `steps?: { caption: string }[]`, `safety?: string[]`

### 3.2 File layout: one folder per entry

```
src/content/
  schema.ts
  categories.ts              # category registry (see 3.3)
  mechanisms/
    spur-gears/
      entry.ts               # export default defineEntry({...})  (data only)
      render.ts              # draw(d, t) + output(t)  (client-only code)
    rack-pinion/ ...
  knots/
    bowline/
      entry.ts
      render.tsx             # step frames (SVG)
  units/
    length/
      entry.ts
  fieldcraft/
    fire-lay/
      entry.ts
      body.mdx               # optional long-form
```

Rules:

- `entry.ts` is **pure data**: no DOM, no React. Server code, the API and the MCP server will all import it.
- `render.*` is **client-only** and is loaded with `next/dynamic` or a renderer registry, so it never ends up in server bundles.
- `defineEntry()` validates against the zod schema in dev and at build time.

### 3.3 Category registry

`src/content/categories.ts` defines each category once:

```ts
{
  id: "knots",
  title: "Knots & Lashings",
  blurb: "...",
  order: 2,
  facets: [{ field: "kind", label: "Type" }],   // drives index-page filters
  renderer: "knot",                              // which renderer to use
}
```

Adding a new category later should only mean adding a registry entry, a renderer (or reusing one), and a content folder. No routing changes.

### 3.4 Build-time content graph

`src/lib/content/` holds pure functions with no React:

- `getAllEntries()`, `getEntry(id)`, `getByCategory(cat)`, `getByTag(tag)`
- `getBacklinks(id)`: entries whose `related` includes this id
- `getRelated(id)`: explicit `related`, then backlinks, then tag neighbors, deduped and ranked
- `getSearchIndex()`: the serialized index for client search

**Validation must fail the build** when:
- an id is duplicated
- a `related` id doesn't exist
- an entry violates the schema

It should only **warn** for orphan entries (no links in or out) and for single-use tags.

---

## 4. Renderers

Every renderer implements:

```ts
interface Renderer<E> {
  Live: React.ComponentType<{ entry: E }>;   // interactive, client-side
  Print: React.ComponentType<{ entry: E }>;  // static, prints in grayscale, no JS needed after mount
  Thumb?: React.ComponentType<{ entry: E }>; // card thumbnail on index grids
}
```

| Renderer | Live | Print |
|---|---|---|
| `mechanism` | Port `draw.js` to `src/renderers/mechanism/draw.ts` (typed). Canvas animation with play/pause/scrub, plus the motion graph from `output(t)` | 3–4 keyframes (t = 0, π/2, π, 3π/2) drawn as SVG or a canvas snapshot, plus the motion graph |
| `knot` | Step-through SVG frames with prev/next/scrub and captions | All steps in a numbered grid |
| `units` | Converter widget (value + from + to) built from `units[].toBase` | Conversion table plus rules of thumb |
| `article` | Just the MDX body and steps | Same, print-styled |

The mechanism renderer must keep the existing color semantics: **input** is orange, **output** is blue, the **fixed frame** is gray, and colors come from CSS variables so dark mode works.

---

## 5. Routes

```
/                         Home: categories, featured entries, global search
/[category]               Category index: grid + facet filters
/[category]/[id]          Entry detail: renderer Live, text, uses, related (cross-category), backlinks, tags
/tags/[tag]               Everything with a tag, grouped by category
/search                   Full search page (typeahead also lives in the header)
/book                     The whole guide in book order, print-optimized (see §7)
/api/entries              JSON list (id, category, title, summary, tags)
/api/entries/[id]         JSON entry (data only, no render code)
```

The URL uses the entry `id` only, so ids must be globally unique. Add redirects from the old 507 app's hash routes if they're easy to map.

---

## 6. Search

Port `js/search.js` to TypeScript at `src/lib/search/`, keeping its behavior: field weights, prefix matching, synonyms, typo correction, `field:` filters and `/regex/`. Add:

- a `category:` filter
- a `tag:` filter
- results grouped by category in the typeahead

The index is generated at build time and loaded client-side, so search works offline.

---

## 7. Print / book

- `/book` renders, in order: a title page, a table of contents, each category (intro, then entries sorted by `order`, then title), an A–Z index of titles and aka names, and a tag index.
- Each entry uses its renderer's `Print` component. Page breaks go before categories; avoid breaking inside an entry.
- Load the Paged.js polyfill **only** on `/book`, for running headers (category name), page numbers and TOC page references.
- Cross-references render as "→ *Bowline* (p. 42)" in print and as links on screen.
- Target trim size: US Letter, with a CSS variable so it's easy to switch to 6×9 later.
- Acceptance: Chrome → Print → Save as PDF produces a clean book with correct page refs.

---

## 8. PWA / offline

- `app/manifest.ts` with the name "Gumption Guide", short name "Gumption", and icons ported from the seed.
- Precache the app shell, all entry pages and the search index, so the whole guide works offline after the first visit.
- Bump the cache version on deploy (derive it from the build id).

---

## 9. Seed content

| Category | Entries | Notes |
|---|---|---|
| **Mechanisms** | All 35 existing movements, ported | Keep text verbatim. Add `refs.brown` **only if certain**; otherwise leave it out and list it under TODO in the report. Map `motion`/`family` as-is. Add tags (`mechanical-advantage`, `gearing`, `linkage`, `cam`, `pulley`, ...). |
| **Knots & Lashings** | Bowline, clove hitch, two half hitches, taut-line hitch, trucker's hitch, sheet bend, square knot, timber hitch, square lashing, diagonal lashing, shear lashing | 4–8 SVG steps each. Set `status: "draft"` on everything. |
| **Units & Measures** | Length, mass/weight, force, volume, temperature (the converter needs an offset, not just a factor; extend the schema with an optional `offset`), plus a "Lumber: nominal vs actual" card | Include rules of thumb (e.g. a fathom ≈ arm span). |
| **Fieldcraft** | Fire lay (teepee/log cabin), Leave No Trace basics, finding north without a compass | MDX body plus steps plus a `safety` list. `status: "draft"`. |

Cross-links to wire up as proof of the graph:

- `trucker's-hitch` ↔ `differential-windlass` and the pulley/belt mechanisms, plus `force` (tag `mechanical-advantage`)
- `units/length` ↔ any mechanism whose `key` uses circumference/pitch
- `square-lashing` ↔ `timber-hitch` and `clove-hitch` (lashings start with these)

**Content rules:**
- Write original text and original SVGs. Don't copy text or drawings from *The Ashley Book of Knots* or any other modern copyrighted source. Citing ABOK numbers in `refs.abok` is fine.
- Anything safety-related (fire, load-bearing knots, climbing) stays `status: "draft"` until a human reviews it. Draft entries show a small "Unreviewed" badge.
- Don't invent facts or reference numbers. If you're unsure, leave it out and flag it.

---

## 10. Design

- Port the tokens from `styles.css` (`--bg`, `--surface`, `--ink`, `--muted`, `--line`, `--part`, `--ground`, `--input*`, `--output*`, `--serif`, `--sans`) and keep light and dark modes.
- Fonts: Instrument Serif and Inter via `next/font/google`.
- Header: "Gumption Guide" wordmark, search and a category nav. Reuse the gear mark for now (placeholder).
- Give each category an accent color token. Mechanisms keep the existing orange/blue for input/output.
- Accessibility: keyboard-navigable search and step controls, `prefers-reduced-motion` pauses autoplay, alt text and captions on every renderer.

---

## 11. Future-proofing (don't build these yet; just don't block them)

- **API:** `/api/entries*` already exists. Keep responses stable and versionable (`/api/v1/...` aliases are fine).
- **MCP server:** a later route (e.g. `/api/mcp`) exposing tools like `search_entries`, `get_entry`, `get_related` and `convert_units`. These must be thin wrappers over `src/lib/content` and `src/lib/search`. If those modules import React or browser APIs, that's a bug.
- **Native wrapper:** Capacitor or Tauri around the PWA later, so avoid server-only runtime features on content pages.

---

## 12. Phases and acceptance criteria

Commit after each phase with a clear message. At each stop, report what's done, what deviated from this brief and open questions.

### Phase 1 — Scaffold
- Next.js + TypeScript + pnpm + ESLint/Prettier + Vitest set up; `README.md` and `CLAUDE.md` (a condensed version of this brief's conventions)
- Global layout, design tokens and fonts ported; dark mode works
- ✅ `pnpm build`, `pnpm lint`, `pnpm typecheck` and `pnpm test` all pass

### Phase 2 — Content core
- Zod schema, `defineEntry`, category registry, content loader and graph functions with validation
- Two entries per category stubbed so routes have data
- ✅ Unit tests cover: duplicate id fails, bad `related` fails, backlinks are correct, tag grouping is correct

### Phase 3 — Routes and renderers
- All routes from §5; `mechanism` renderer ported with draw kit, animation and motion graph; `knot`, `units` and `article` renderers
- ✅ `spur-gears` looks and animates the same as the seed app; a knot steps through; the converter converts

### Phase 4 — Port the 35 mechanisms + seed content
- All 35 movements ported; seed knots, units and fieldcraft from §9; cross-links wired
- ✅ Build passes validation; every seed entry has ≥1 related or backlink; spot-check 5 animations against the seed app

### Phase 5 — Search
- Ported search with `category:` and `tag:` filters, typeahead in the header and a `/search` page
- ✅ Tests ported or written for prefix, typo, synonym and field queries

### Phase 6 — Book and PWA
- `/book` with TOC, page refs and indexes; PWA offline
- ✅ PDF export looks right; site works offline in Chrome DevTools after the first load; Lighthouse PWA/a11y checks have no red flags

### Phase 7 — Deploy
- Vercel project config, `gumption.guide` domain notes in the README, a Playwright smoke test (home → category → entry → search)
- ✅ Preview deploy green

---

## 13. Working rules for the agent

- Don't touch `../507-mechanical-movements`; read only.
- Keep `entry.ts` files data-only and `render.*` files client-only, with no exceptions.
- Prefer small, boring, readable code over clever abstractions. This repo will grow to 500+ entries, so a new entry should be copy-a-folder easy.
- Add a `scripts/new-entry.ts` generator (`pnpm new knots prusik`) that scaffolds an entry folder.
- Put anything you're unsure about (Brown numbers, knot steps, safety claims) in `TODO.md`. Don't guess.
- Don't buy domains, create accounts, or push to remotes without asking.

---

## 14. After setup (roadmap, for context)

1. Grind the remaining 472 Brown movements in batches of ~20 by family, tracked on a `/mechanisms/progress` page (1–507 grid)
2. Human review pass to flip knots and fieldcraft from `draft` to `reviewed`
3. New categories: **Shop** (joinery, fasteners, drill/tap charts) and **Fixes** (common repairs)
4. Gumption Guide branding: logo, wordmark, OG images
5. Public API docs, then the MCP server
