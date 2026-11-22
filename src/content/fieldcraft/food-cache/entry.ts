import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "food-cache",
  category: "fieldcraft",
  title: "Placing a food cache",
  aka: ["Resupply cache", "Water cache", "Stash", "Cache drop"],
  difficulty: "moderate",
  summary:
    "Pre-place food or water along a long route in sealed, labeled, animal-proof containers, and always come back for them.",
  key: "Get permission, seal it tight, label it, log the location, retrieve it.",
  gear: [
    "Rodent- and bear-resistant container: lidded bucket with a gasket, ammo can, or bear canister",
    "Zip bags or vacuum bags for each meal set",
    "A waterproof label: your name, phone, trip dates and pickup date",
    "GPS or phone for coordinates and photos",
  ],
  steps: [
    {
      caption:
        "Check the land manager's rules. Caches are banned or time-limited in many wilderness areas and parks.",
    },
    {
      caption:
        "Pack food in sealed bags inside the container. No loose crumbs or wrappers to draw animals.",
    },
    {
      caption:
        "Label the outside: who it belongs to, a contact number, and the date you'll collect it.",
    },
    {
      caption:
        "Place it out of sight of the trail, off the ground or wedged in rocks, not in a wash or streambed.",
    },
    {
      caption:
        "Record coordinates, take photos from the trail and of the spot, and note a landmark.",
    },
    {
      caption:
        "Collect it on schedule, including anything you didn't use. Never leave a cache behind.",
    },
  ],
  safety: [
    "Don't rely on a cache alone. Carry enough to reach the next sure resupply if it's gone.",
    "Leave a copy of the cache locations with someone at home.",
    "Water jugs in desert caches: freeze or shade them, and cap tightly. Heat and sun split thin plastic.",
  ],
  tags: ["camping", "food"],
  related: ["hang-a-food-bag", "leave-no-trace", "purify-water"],
  status: "draft",
  order: 12,
});
