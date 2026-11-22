import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "thread-sizes",
  category: "building",
  title: "Reading thread sizes",
  aka: ["1/4-20", "UNC", "UNF", "Metric thread", "Thread pitch", "Tap drill", "Bolt size"],
  kind: "fastener",
  summary: "How to read a bolt label in inch or metric, and which wrench and drill go with it.",
  key: "1/4-20 × 1 means ¼ in across, 20 threads per inch, 1 in long. M8 × 1.25 × 30 means 8 mm, 1.25 mm pitch, 30 mm long.",
  body: [
    "Length is measured from under the head to the tip, except for countersunk heads, which are measured overall.",
    "Inch threads come in coarse (UNC, the default) and fine (UNF) pitches; metric too, with coarse assumed if no pitch is given. Never force a mismatched nut: an M6 and a ¼-20 look nearly alike and will cross-thread.",
    "To tap a metric hole, a good starting drill is diameter minus pitch: M8 × 1.25 → 6.8 mm drill.",
  ],
  reference: [
    { term: "¼ in bolt", detail: "Usually 20 TPI coarse. 7/16 in wrench." },
    { term: "5/16 in", detail: "18 TPI. ½ in wrench." },
    { term: "⅜ in", detail: "16 TPI. 9/16 in wrench." },
    { term: "½ in", detail: "13 TPI. ¾ in wrench." },
    { term: "M6", detail: "1.0 mm pitch. 10 mm wrench." },
    { term: "M8", detail: "1.25 mm pitch. 13 mm wrench." },
    { term: "M10", detail: "1.5 mm pitch. 16 or 17 mm wrench, depending on the standard." },
    { term: "M12", detail: "1.75 mm pitch. 18 or 19 mm wrench." },
  ],
  gear: ["Thread pitch gauge", "Calipers", "A nut-and-bolt checker board, if you do a lot of it"],
  uses: ["Replacing lost hardware", "Buying the right nut", "Tapping holes in metal"],
  tags: ["fasteners", "measuring", "metal"],
  related: ["bolt-types", "nut-types", "lead-screw", "length", "torque"],
  status: "draft",
  order: 7,
});
