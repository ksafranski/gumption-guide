# TODO / needs a human

## Content to verify
- **Knot diagrams** (`src/content/knots/*/render.tsx`) were redrawn with checked over/under crossings, but they're still schematic. Tie each one along with the steps before flipping it to `reviewed`. Known simplifications: the trucker's-hitch loop is drawn as a crossed loop (any fixed loop works); square-lashing frapping is shown as turns just above and below the crosspiece, since the real turns sit between the poles where a front view can't see them.
- **Knot text**: security/strength notes are general guidance, not ratings. Review before flipping any knot to `reviewed`.
- **ABOK numbers**: only `bowline` → 1010 is set. Clove hitch, timber hitch, trucker's hitch and square lashing are left out until confirmed.
- **Brown numbers** (`refs.brown`): none set for any of the 35 ported mechanisms. Need the movement numbers from the 1868 book.
- **Fieldcraft**: fire safety and find-north steps need a review pass. Units rules of thumb are approximations (marked ≈) and also need a look.

## Not built yet (from SETUP.md phases)
- Seed knots not yet done: two half hitches, taut-line hitch, sheet bend, square knot, diagonal lashing, shear lashing.
- Units: mass/weight, volume, "Lumber: nominal vs actual".
- Fieldcraft: Leave No Trace basics.
- PWA offline (Serwist), cache version from build id.
- `/book`: Paged.js running heads, page numbers and "→ Bowline (p. 42)" page refs. Print colors for canvas renderers (they read screen colors at mount).
- Playwright smoke test; Vercel project + domain.
- `/mechanisms/progress` page (1–507 grid).

## Decisions to confirm
- Mechanism tags (`gearing`, `linkage`, `cam`, `pulley`, `screw`, `indexing`, `rotary-to-linear`, `intermittent`, `straight-line`, `mechanical-advantage`, `speed-ratio`, ...) were assigned by family/motion plus a hand list; worth a skim.
- Fonts: swapped Instrument Serif for **Barlow Condensed** (headings) + **JetBrains Mono** (labels/specs) for the workbench feel; Inter kept for body.
- Units entries are marked `draft` too (not safety-critical; flip once checked).
