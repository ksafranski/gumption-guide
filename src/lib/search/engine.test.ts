import { describe, expect, it } from "vitest";
import { getSearchIndex } from "@/lib/content";
import { createSearch, groupByCategory } from "./engine";

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
    expect(ids("use:steering")).toEqual(["rack-pinion"]);
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
});
