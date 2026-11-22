// Scaffold an entry folder: pnpm new <category> <id>
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [category, id] = process.argv.slice(2);
const CATS = [
  "mechanisms",
  "knots",
  "units",
  "fieldcraft",
  "first-aid",
  "building",
  "garden",
  "home",
  "workshop",
];
if (!category || !id || !CATS.includes(category) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
  console.error(`usage: pnpm new <${CATS.join("|")}> <kebab-id>`);
  process.exit(1);
}
const dir = join(import.meta.dirname, "..", "src", "content", category, id);
if (existsSync(dir)) {
  console.error(`${dir} already exists`);
  process.exit(1);
}
const title = id.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());

const extra: Record<string, string> = {
  mechanisms: `  motion: "rot-rot",\n  family: "gears",\n  outLabel: "Output angle",\n`,
  knots: `  kind: "hitch",\n  steps: [{ caption: "TODO" }],\n`,
  units: `  quantity: "TODO",\n  units: [\n    { id: "a", name: "A", symbol: "a", toBase: 1 },\n    { id: "b", name: "B", symbol: "b", toBase: 1 },\n  ],\n`,
  fieldcraft: `  difficulty: "easy",\n  steps: [{ caption: "TODO" }],\n  safety: [],\n`,
  "first-aid": `  steps: [{ caption: "TODO" }],\n  getHelp: ["TODO"],\n`,
  building: `  kind: "fastener",\n  reference: [],\n`,
  garden: `  kind: "care",\n  reference: [],\n`,
  home: `  kind: "repair",\n  reference: [],\n`,
  workshop: `  kind: "joinery",\n  reference: [],\n`,
};

const entry = `import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "${id}",
  category: "${category}",
  title: "${title}",
  summary: "TODO: one plain sentence.",
  key: "TODO: the rule of thumb.",
  tags: [],
  related: [],
  status: "draft",
${extra[category]}});
`;

const renders: Record<string, [string, string] | undefined> = {
  mechanisms: [
    "render.ts",
    `import type { MechanismRender } from "@/renderers/mechanism/types";

const render: MechanismRender = {
  draw(d, t) {
    d.gear(200, 150, 16, 8, t, d.IN());
  },
  output: (t) => t,
};
export default render;
`,
  ],
  knots: [
    "render.tsx",
    `import type { KnotRender } from "@/renderers/knot/types";
import { Rope, Spar } from "@/renderers/knot/parts";

const render: KnotRender = {
  frames: [
    <g key="1">
      <Spar />
      <Rope d="M60 200 C 120 200, 160 120, 200 120" end />
    </g>,
  ],
};
export default render;
`,
  ],
};

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.ts"), entry);
const r = renders[category];
if (r) writeFileSync(join(dir, r[0]), r[1]);
console.log(`created ${dir}`);
