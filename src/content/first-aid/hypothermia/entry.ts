import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "hypothermia",
  category: "first-aid",
  title: "Hypothermia",
  aka: ["Getting too cold", "Exposure", "The umbles"],
  summary: "The body losing heat faster than it makes it. Stop the loss, then warm the core.",
  key: "Watch for the umbles: stumbles, mumbles, fumbles and grumbles.",
  gear: ["Dry clothes", "Sleeping bag, blankets or coats", "Ground pad", "Warm sweet drinks"],
  steps: [
    { caption: "Get out of wind and wet: a tent, a vehicle, a building, or the lee of a rock." },
    { caption: "Swap wet clothes for dry ones. Cut them off if you need to." },
    { caption: "Insulate underneath as well as on top. The ground steals heat fast." },
    {
      caption: "Wrap them up, head and neck too. Share body heat inside a sleeping bag if needed.",
    },
    { caption: "If they're alert and can swallow, give warm sweet drinks and food. No alcohol." },
    { caption: "Handle gently. Don't rub their arms and legs, and don't put them in a hot bath." },
  ],
  getHelp: [
    "Shivering stops while they're still cold.",
    "They're confused, slurring, very drowsy, or can't walk straight.",
    "Breathing is slow or shallow, or they're unresponsive. Call emergency services.",
  ],
  tags: ["first-aid", "cold-weather"],
  related: ["dress-in-layers", "heat-exhaustion", "temperature"],
  status: "draft",
  order: 5,
});
