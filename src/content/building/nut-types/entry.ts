import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "nut-types",
  category: "building",
  title: "Nut types",
  aka: [
    "Nyloc",
    "Lock nut",
    "Jam nut",
    "Wing nut",
    "Castle nut",
    "T-nut",
    "Acorn nut",
    "Coupling nut",
  ],
  kind: "fastener",
  summary:
    "Most nuts are plain hex nuts. The others solve one problem each: vibration, hand-tightening, a blind side, or looks.",
  key: "Use a nylon-insert lock nut where vibration could loosen it. Match its grade to the bolt.",
  reference: [
    { term: "Hex nut", detail: "The standard. Grade should match or exceed the bolt." },
    {
      term: "Nylon-insert lock nut (nyloc)",
      detail:
        "Plastic ring grips the threads so it won't vibrate loose. Best used once; not for high heat.",
    },
    {
      term: "All-metal lock nut",
      detail:
        "Slightly deformed threads give the same grip and tolerate heat. Engines and exhausts.",
    },
    {
      term: "Jam nut",
      detail:
        "A thin nut tightened against a full nut to lock it. Also sets a fixed position on threaded rod.",
    },
    {
      term: "Flange nut",
      detail: "Built-in washer spreads the load; often serrated to resist turning.",
    },
    {
      term: "Castle nut + cotter pin",
      detail:
        "Slots line up with a hole in the bolt for a pin. Axles and steering: positive locking.",
    },
    { term: "Wing nut", detail: "Tightened by hand. Things you take apart often." },
    {
      term: "Acorn (cap) nut",
      detail: "Closed dome covers the bolt end. Neat, and protects shins.",
    },
    { term: "Coupling nut", detail: "Long nut that joins two lengths of threaded rod." },
    {
      term: "T-nut / threaded insert",
      detail:
        "Set into wood from behind or screwed in, giving wood machine-screw threads. Furniture, jigs, climbing holds.",
    },
  ],
  uses: ["Outdoor furniture", "Machinery and trailers", "Jigs and knock-down furniture"],
  tags: ["fasteners", "metal"],
  related: ["bolt-types", "washer-types", "thread-sizes"],
  status: "draft",
  order: 5,
});
