import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "washer-types",
  category: "building",
  title: "Washer types",
  aka: ["Flat washer", "Fender washer", "Lock washer", "Split washer", "Sealing washer"],
  kind: "fastener",
  summary:
    'Washers spread a load, bridge an oversized hole, or seal. Most "locking" washers lock less than people think.',
  key: "Always put a washer under a nut or bolt head bearing on wood.",
  reference: [
    {
      term: "Flat washer",
      detail: "Spreads the clamping load and protects the surface. The default.",
    },
    {
      term: "Fender washer",
      detail: "Large outside diameter, small hole. Soft materials, thin sheet, oversized holes.",
    },
    {
      term: "Split lock washer",
      detail:
        "Common, but testing shows it does little to stop vibration loosening. Prefer a lock nut or thread locker.",
    },
    {
      term: "Tooth (star) washer",
      detail: "Teeth bite into both surfaces. Electrical grounding connections.",
    },
    {
      term: "Sealing (bonded) washer",
      detail: "Rubber bonded to metal. Roofing screws and anything that must keep water out.",
    },
    {
      term: "Structural / plate washer",
      detail: "Thick, wide washers for timber bolts, so the nut can't crush into the wood.",
    },
  ],
  uses: ["Bolting into wood", "Metal roofing", "Electrical grounds"],
  tags: ["fasteners", "metal"],
  related: ["bolt-types", "nut-types"],
  status: "draft",
  order: 6,
});
