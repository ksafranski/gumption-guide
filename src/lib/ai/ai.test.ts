import { describe, expect, it } from "vitest";
import { bodyText } from "@/content/_generated/bodyText";
import { getAllEntries, getEntry } from "@/lib/content";
import { buildCorpus, entryText } from "./corpus";
import { citations, segments } from "./prompt";

describe("ask corpus", () => {
  const corpus = buildCorpus(getAllEntries());

  it("includes every entry once", () => {
    for (const e of getAllEntries()) {
      expect(corpus.split(`<entry id="${e.id}"`).length - 1).toBe(1);
    }
  });

  it("is stable regardless of input order", () => {
    expect(buildCorpus([...getAllEntries()].reverse())).toBe(corpus);
  });

  it("renders steps, summary and draft status", () => {
    const t = entryText(getEntry("bowline")!);
    expect(t).toContain('unreviewed="true"');
    expect(t).toContain("summary: A fixed loop");
    expect(t).toMatch(/steps:\n1\. /);
    expect(t).not.toContain("refs");
  });

  it("includes MDX bodies as plain text", () => {
    const withBodies = buildCorpus(getAllEntries(), bodyText);
    for (const id of Object.keys(bodyText)) {
      const block = withBodies.split(`<entry id="${id}"`)[1].split("</entry>")[0];
      expect(block).toContain(`article:\n${bodyText[id]}`);
    }
    expect(withBodies).toContain("Polaris");
    expect(withBodies).not.toMatch(/^(import|export)\s/m);
  });

  it("stays small enough to cache cheaply", () => {
    // ~4 chars per token; warn well before this becomes expensive.
    expect(corpus.length / 4).toBeLessThan(150_000);
  });
});

describe("answer citations", () => {
  const known = (id: string) => id === "bowline" || id === "clove-hitch";

  it("splits text and known citations, dropping unknown ones", () => {
    expect(segments("Tie a [[bowline]], not a [[granny]].", known)).toEqual([
      { text: "Tie a " },
      { id: "bowline" },
      { text: ", not a " },
      { text: "." },
    ]);
  });

  it("lists distinct citations in order", () => {
    expect(citations("[[clove-hitch]] then [[bowline]] and [[clove-hitch]]", known)).toEqual([
      "clove-hitch",
      "bowline",
    ]);
  });
});
