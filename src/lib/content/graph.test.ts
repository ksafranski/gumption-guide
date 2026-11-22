import { describe, expect, it } from "vitest";
import { defineEntry, type Entry } from "@/content/schema";
import { buildGraph, queries } from "./graph";
import { getAllEntries, getBacklinks, getRelated } from "./index";

const knot = (id: string, extra: Partial<Entry> = {}) =>
  ({
    id,
    category: "knots",
    title: id,
    summary: "s",
    kind: "hitch",
    steps: [{ caption: "c" }],
    status: "draft",
    ...extra,
  }) as Entry;

describe("buildGraph", () => {
  it("fails on duplicate ids", () => {
    expect(() => buildGraph([knot("a"), knot("a")])).toThrow(/Duplicate id "a"/);
  });

  it("fails on a related id that doesn't exist", () => {
    expect(() => buildGraph([knot("a", { related: ["nope"] })])).toThrow(/missing id "nope"/);
  });

  it("computes backlinks", () => {
    const q = queries(
      buildGraph([knot("a", { related: ["c"] }), knot("b", { related: ["c"] }), knot("c")]),
    );
    expect(q.getBacklinks("c").map((e) => e.id)).toEqual(["a", "b"]);
    expect(q.getBacklinks("a")).toEqual([]);
  });

  it("groups by tag and ranks related: explicit, backlinks, then tag neighbours", () => {
    const g = buildGraph([
      knot("a", { related: ["b"], tags: ["x", "y"] }),
      knot("b", { tags: ["x"] }),
      knot("c", { related: ["a"] }),
      knot("d", { tags: ["x", "y"] }),
      knot("e", { tags: ["y"] }),
    ]);
    const q = queries(g);
    expect(q.getByTag("x").map((e) => e.id)).toEqual(["a", "b", "d"]);
    expect(q.getByTag("y").map((e) => e.id)).toEqual(["a", "d", "e"]);
    expect(q.getRelated("a").map((e) => e.id)).toEqual(["b", "c", "d", "e"]);
  });

  it("warns (not fails) on orphans and single-use tags", () => {
    const g = buildGraph([knot("a", { tags: ["lonely"] })]);
    expect(g.warnings).toContain('orphan entry "a"');
    expect(g.warnings.some((w) => w.includes('single-use tag "lonely"'))).toBe(true);
  });
});

describe("defineEntry", () => {
  it("rejects entries that violate the schema", () => {
    expect(() =>
      defineEntry({
        id: "Bad Id",
        category: "knots",
        title: "x",
        summary: "s",
        kind: "hitch",
        steps: [],
        status: "draft",
      } as never),
    ).toThrow(/Invalid entry/);
  });
});

describe("seed content", () => {
  it("every entry has at least one related link or backlink", () => {
    const lonely = getAllEntries().filter((e) => !e.related?.length && !getBacklinks(e.id).length);
    expect(lonely.map((e) => e.id)).toEqual([]);
  });

  it("wires the mechanical-advantage cross-links", () => {
    expect(getRelated("truckers-hitch").map((e) => e.id)).toEqual(
      expect.arrayContaining(["differential-windlass", "block-tackle", "force"]),
    );
    expect(getBacklinks("clove-hitch").map((e) => e.id)).toContain("square-lashing");
  });
});
