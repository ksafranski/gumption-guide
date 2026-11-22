import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "screw-types",
  category: "building",
  title: "Screw types",
  aka: ["Wood screws", "Deck screws", "Drywall screws", "Structural screws", "Which screw to use"],
  kind: "fastener",
  summary:
    "Screws are made for one material and one job. Matching the screw to both is most of the battle.",
  key: "Drywall screws are for drywall. Outdoors or in treated lumber, use coated or stainless screws.",
  body: [
    "A screw holds by its threads gripping the material it's driven into. The top piece should slide over the unthreaded shank (or a clearance hole) so the screw pulls the two pieces tight together instead of jacking them apart.",
    "Screws resist pulling out far better than nails, but most are hardened and snap rather than bend under a sideways load. That's why framing is nailed unless a screw is specifically rated for structure.",
  ],
  reference: [
    {
      term: "Wood screw",
      detail:
        "Tapered with a smooth upper shank. General joinery: furniture, cabinets, hinges. Drill a pilot hole in hardwood.",
    },
    {
      term: "Deck / exterior screw",
      detail:
        "Coated or stainless, coarse thread, often a self-drilling tip. Decking, fences, anything outdoors or in treated lumber.",
    },
    {
      term: "Drywall screw",
      detail:
        "Black, brittle, bugle head. Hanging drywall only. Snaps under shear and rusts outdoors.",
    },
    {
      term: "Structural screw",
      detail:
        "Thick, heat-treated, rated by the maker to replace lag screws or bolts in specific connections. Follow its spec sheet.",
    },
    {
      term: "Pocket-hole screw",
      detail:
        "Flat washer head that bottoms out in the pocket. Coarse thread for softwood and plywood, fine for hardwood.",
    },
    {
      term: "Sheet-metal screw",
      detail: "Fully threaded and sharp. Thin metal to metal, or metal to wood.",
    },
    {
      term: 'Self-drilling ("tek") screw',
      detail: "Drill-bit tip cuts its own hole in steel. Metal roofing, steel studs, brackets.",
    },
    {
      term: "Masonry screw",
      detail:
        "Hardened, blue or silver, high-low thread. Concrete and brick, into a hole drilled with the exact masonry bit size on the box.",
    },
    {
      term: "Machine screw",
      detail: "Blunt end, even thread. Goes into a nut or a tapped hole, not into wood.",
    },
    {
      term: "Lag screw",
      detail:
        "Big hex-head wood screw for heavy timber connections. Needs a pilot hole and a wrench or impact driver.",
    },
  ],
  uses: ["Choosing hardware at the store", "Outdoor builds", "Cabinet and furniture repair"],
  tags: ["fasteners", "wood"],
  related: ["screw-drives", "pilot-holes", "nail-types", "bolt-types", "thread-sizes"],
  status: "draft",
  order: 1,
});
