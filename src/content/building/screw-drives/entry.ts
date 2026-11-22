import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "screw-drives",
  category: "building",
  title: "Screw heads & drives",
  aka: [
    "Phillips",
    "Square drive",
    "Robertson",
    "Torx",
    "Star drive",
    "Flat head",
    "Pan head",
    "Countersunk",
  ],
  kind: "fastener",
  summary:
    "The head shape decides how the screw sits; the drive recess decides how well the bit grips.",
  key: "Match the bit size exactly. A worn or wrong-size bit strips more screws than anything else.",
  body: [
    "Head shapes: flat (countersunk) heads sit flush in a cone-shaped recess; pan, truss and washer heads sit on top and spread the load; bugle heads curve so they don't tear paper on drywall.",
    "Phillips bits are designed to slip out (cam out) when torque gets high. Square and star drives don't, which is why most construction screws use them.",
  ],
  reference: [
    {
      term: "Phillips",
      detail:
        "Cross recess, everywhere. Cams out under high torque; press hard and use the right size (#2 is the most common).",
    },
    {
      term: "Square (Robertson)",
      detail: "Square recess. Grips the bit well, easy one-handed. #1 small, #2 common, #3 large.",
    },
    {
      term: "Star (Torx)",
      detail:
        "Six-lobed recess. Best grip and highest torque; standard on deck and structural screws. Sized T10–T40.",
    },
    {
      term: "Slotted",
      detail:
        "Single slot. Traditional look, poor grip. Use a bit that fills the slot's full width.",
    },
    { term: "Hex socket (Allen)", detail: "Internal hex. Machine screws and furniture hardware." },
    {
      term: "Hex head",
      detail: "External hex driven with a socket or wrench. Lag screws, tek screws, bolts.",
    },
    {
      term: "Flat / countersunk head",
      detail: "Cone underneath, sits flush. Needs a countersink in hardwood or metal.",
    },
    {
      term: "Pan / truss / washer head",
      detail: "Flat underside sits on the surface. Sheet metal, brackets, soft materials.",
    },
  ],
  uses: ["Picking bits for a driver", "Stripped screws", "Hinges and hardware"],
  tags: ["fasteners", "tools"],
  related: ["screw-types", "pilot-holes", "torque"],
  status: "draft",
  order: 2,
});
