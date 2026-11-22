import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "pruning-cuts",
  category: "garden",
  title: "Pruning cuts",
  aka: ["How to prune", "Branch collar", "Thinning cut", "Heading cut", "Three-cut method"],
  kind: "care",
  season: "Most plants late winter; spring bloomers right after flowering",
  summary:
    "Cut in the right place and the plant seals the wound; cut wrong and you invite rot and messy regrowth.",
  key: "Cut just outside the branch collar. Never leave a stub, never cut flush.",
  body: [
    "Start with the three Ds: dead, diseased and damaged wood. Then crossing or rubbing branches. Only then shape.",
    "Timing: most trees and shrubs are pruned when dormant in late winter. Shrubs that flower in spring bloom on last year's wood, so prune them just after they flower or you cut off next year's flowers.",
    "Don't remove more than about a quarter of a plant's living canopy in one year.",
  ],
  reference: [
    {
      term: "Thinning cut",
      detail:
        "Removes a branch back to where it joins a larger one. Opens the plant up with little regrowth.",
    },
    {
      term: "Heading cut",
      detail:
        "Shortens a stem back to a bud. Makes the plant bushier at that point; lots of new shoots.",
    },
    {
      term: "Bud cut",
      detail:
        "About ¼ in above an outward-facing bud, sloping away from it, so new growth heads outward.",
    },
    {
      term: "Branch collar",
      detail:
        "The swollen ring where a branch meets the trunk. It holds the tissue that seals the wound; leave it intact.",
    },
  ],
  gear: [
    "Bypass pruners for live wood up to finger thickness",
    "Loppers",
    "Pruning saw",
    "Rubbing alcohol to clean blades between diseased plants",
  ],
  steps: [
    {
      caption:
        "For large limbs, use three cuts: an undercut a foot out from the trunk, a top cut just beyond it to drop the limb, then a final cut just outside the collar.",
    },
    { caption: "Keep tools sharp; ragged cuts heal slowly." },
    { caption: "Skip wound paint. Clean cuts in the right place seal themselves." },
  ],
  safety: [
    "Anything near power lines, or needing a chainsaw overhead or a ladder, is a job for an arborist.",
    "Eye protection when cutting overhead.",
  ],
  uses: ["Fruit trees", "Shrubs", "Roses", "Storm damage"],
  tags: ["care"],
  related: ["planting-trees-shrubs", "sharpen-a-knife", "garden-pests"],
  status: "draft",
  order: 12,
});
