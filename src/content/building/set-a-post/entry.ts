import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "set-a-post",
  category: "building",
  title: "Set a fence or deck post",
  aka: ["Post hole", "Set a post in concrete", "Gravel-set post", "Frost line", "Post depth"],
  kind: "framing",
  difficulty: "moderate",
  summary:
    "A post holds by the soil around it. Dig deep enough, drain the bottom, and keep water from pooling at the wood.",
  key: "A common rule is a third of the post's length in the ground, and below the frost line where the ground freezes. Check local rules for decks.",
  body: [
    "Frost heave lifts posts that don't reach below the frost line, which ranges from a few inches to several feet depending on climate. The local building department publishes the depth.",
    "Concrete holds a post rigidly but can trap water against the wood. Compacted gravel drains and makes a post easy to replace later. Either way, use ground-contact rated lumber and crown the top of the fill so water runs away.",
    "Deck and structural posts usually sit on concrete footings with a metal post base, not buried. Those need a permit and the local code in most places.",
  ],
  gear: [
    "Post-hole digger or auger",
    "Gravel",
    "Concrete mix (optional)",
    "Level",
    "Temporary braces and stakes",
    "String line",
  ],
  steps: [
    { caption: "Call to have underground utilities marked before you dig." },
    {
      caption:
        "Dig the hole about three times the post's width, to depth, with a few inches extra for gravel.",
    },
    { caption: "Put in and tamp gravel at the bottom for drainage." },
    { caption: "Set the post, brace it plumb in both directions, and line it up with a string." },
    {
      caption:
        "Backfill with concrete, or gravel tamped in layers. Crown the top so water sheds away from the post.",
    },
  ],
  safety: [
    "Always get buried utilities marked first (811 in the US).",
    "Load-bearing deck posts and footings are structural: follow local code.",
  ],
  uses: ["Fences", "Mailboxes", "Arbors and pergolas", "Garden structures"],
  tags: ["framing", "outdoor-build", "materials"],
  related: ["concrete-mix", "structural-connectors", "square-level-plumb", "lumber-sizes"],
  status: "draft",
  order: 22,
});
