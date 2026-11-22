import { describe, expect, it } from "vitest";
import { generated } from "./_generated/entries";
import { renders } from "./_generated/renders";

// Every card shows a drawing, so every entry needs a render.tsx (live diagram or static SVG).
describe("content coverage", () => {
  it("every entry has a render module", () => {
    const missing = generated.map((g) => g.folder).filter((id) => !renders[id]);
    expect(missing).toEqual([]);
  });
});
