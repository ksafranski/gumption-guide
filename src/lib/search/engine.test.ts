import { describe, expect, it } from "vitest";
import { getSearchIndex } from "@/lib/content";
import { createSearch, groupByCategory, preferCategory } from "./engine";

const { run } = createSearch(getSearchIndex());
const ids = (q: string) => run(q)!.results.map((r) => r.doc.id);

describe("search", () => {
  it("matches word prefixes", () => {
    expect(ids("bowl")[0]).toBe("bowline");
    expect(ids("diff wind")[0]).toBe("differential-windlass");
  });
  it("corrects typos", () => {
    const r = run("bowlnie")!;
    expect(r.corrected).toBeTruthy();
    expect(r.results[0].doc.id).toBe("bowline");
  });
  it("expands synonyms", () => {
    expect(ids("cog")).toContain("spur-gears");
    expect(ids("leverage")).toContain("truckers-hitch");
  });
  it("supports field: queries", () => {
    expect(ids("use:steering")).toEqual(expect.arrayContaining(["rack-pinion", "worm-gear"]));
    expect(ids("use:steering")).not.toContain("spur-gears");
    expect(
      ids("category:knots").every(
        (id) =>
          run("category:knots")!.results.find((r) => r.doc.id === id)!.doc.category === "knots",
      ),
    ).toBe(true);
    expect(ids("tag:mechanical-advantage")).toEqual(
      expect.arrayContaining(["truckers-hitch", "differential-windlass", "block-tackle", "force"]),
    );
    expect(ids("category:units tag:mechanical-advantage")).toEqual(["force"]);
  });
  it("supports /regex/", () => {
    expect(ids("/^tim/")).toContain("timber-hitch");
    expect(run("/(/")!.error).toBeTruthy();
  });
  it("groups results by category", () => {
    const groups = groupByCategory(run("tag:mechanical-advantage")!.results).map((g) => g.id);
    expect(new Set(groups)).toEqual(new Set(["mechanisms", "knots", "units"]));
  });
  it("puts the preferred category first", () => {
    const res = run("tag:mechanical-advantage")!.results;
    const out = preferCategory(res, "units");
    expect(out).toHaveLength(res.length);
    expect(out[0].doc.category).toBe("units");
    expect(groupByCategory(out)[0].id).toBe("units");
    expect(preferCategory(res, null)).toBe(res);
  });
});
