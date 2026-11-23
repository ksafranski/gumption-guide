import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "hand-saws",
  category: "workshop",
  title: "Hand saws",
  aka: ["Rip saw", "Crosscut saw", "Backsaw", "Pull saw", "Japanese saw", "TPI", "Kerf"],
  kind: "joinery",
  difficulty: "easy",
  summary:
    "Rip teeth chisel along the grain, crosscut teeth slice across it. Let the saw's weight do the work.",
  key: "Saw on the waste side of the line, and start with a few light strokes pulling back toward you.",
  body: [
    "The kerf is the slot the saw removes. Cut beside your line, not on it, or the piece comes out short by half a kerf.",
    "More teeth per inch (TPI) cut slower and smoother; fewer cut faster and rougher. Western saws cut on the push, Japanese saws on the pull, with thinner blades and a finer kerf.",
    "If the saw binds, the cut is closing behind it: wedge the kerf open, or check that you're not twisting the blade.",
  ],
  reference: [
    {
      term: "Rip saw",
      detail: "Few large teeth filed square, like little chisels. Cutting along the grain.",
    },
    {
      term: "Crosscut saw",
      detail: "Teeth filed to knife points. Across the grain; cleaner edges.",
    },
    {
      term: "Backsaw (tenon, dovetail)",
      detail: "Stiffened spine, fine teeth. Accurate joinery cuts.",
    },
    {
      term: "Japanese pull saw (ryoba, dozuki)",
      detail:
        "Thin blade cuts on the pull. A ryoba has rip teeth on one edge, crosscut on the other.",
    },
    {
      term: "Coping saw",
      detail: "Thin blade in a frame. Curves and removing waste between dovetails.",
    },
  ],
  steps: [
    { caption: "Mark the line all the way round, with the waste side shown by an X." },
    {
      caption:
        "Set the blade beside the line, steadied by your thumb knuckle, and draw it back a few times to start a notch.",
    },
    {
      caption:
        "Use long, relaxed strokes with your arm, shoulder and saw in one line. Don't force it down.",
    },
    { caption: "Support the offcut near the end so it doesn't break away and splinter." },
  ],
  safety: ["Clamp the work. Keep your guiding hand well clear once the cut is started."],
  uses: ["Crosscutting boards", "Joinery", "Trimming in place"],
  tags: ["tools", "wood"],
  related: ["measuring-and-marking", "dovetail-joint", "mortise-and-tenon"],
  status: "draft",
  order: 52,
});
