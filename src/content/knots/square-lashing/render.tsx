import type { KnotRender, Seg } from "@/renderers/knot/types";
import { CLOVE, mapSegs } from "@/renderers/knot/geometry";
import { Post, Spar } from "@/renderers/knot/parts";

// Front view: upright (x 145–175) behind, crosspiece (y 95–125) in front.
const base = (
  <g>
    <Post x={145} w={30} />
    <Spar y={95} h={30} />
  </g>
);

// 1. Clove hitch on the upright, below the crosspiece. Its end becomes the running line.
const start = mapSegs(CLOVE.slice(0, 4), (x, y) => [
  x < 40 ? 40 : 145 + (x - 140) * 0.75,
  160 + (y - 56) * 0.52,
]);
start.push({ d: "M 143.5 204.7 L 198 204.7 C 212 204.7 190 170 186 142", z: 5 });

// 2. Wraps: up the front of the crosspiece right of the upright, behind the upright,
//    down the front left of it, behind the upright again. Three rounds, side by side.
const TOP = 84;
const BOT = 136;
const wraps: Seg[] = [];
for (let i = 0; i < 3; i++) {
  const xr = 186 + 11 * i;
  const xl = 134 - 11 * i;
  wraps.push(
    {
      d: `M ${xr} ${i === 0 ? 142 : BOT} L ${xr} ${TOP + 6} C ${xr} ${TOP} ${xr - 4} ${TOP} ${xr - 10} ${TOP}`,
      z: 3,
    },
    { d: `M ${xr - 10} ${TOP} L ${xl + 10} ${TOP}`, back: true },
    {
      d: `M ${xl + 10} ${TOP} C ${xl + 4} ${TOP} ${xl} ${TOP} ${xl} ${TOP + 6} L ${xl} ${BOT} C ${xl} ${BOT + 6} ${xl + 4} ${BOT + 6} ${xl + 10} ${BOT + 6}`,
      z: 3,
    },
  );
  if (i < 2) {
    const nx = xr + 11;
    wraps.push({
      d: `M ${xl + 10} ${BOT + 6} L ${nx - 10} ${BOT + 6} C ${nx - 2} ${BOT + 6} ${nx} ${BOT + 4} ${nx} ${BOT}`,
      back: true,
    });
  }
}

// 3. Frapping: turns between the poles, pulled tight around the wraps above and below the crosspiece.
const frap: Seg[] = [
  { d: "M 122 142 C 110 142 100 150 108 152 L 214 152 C 224 152 226 146 218 144", z: 8 },
  { d: "M 218 144 L 106 74", back: true },
  { d: "M 106 74 C 98 72 100 68 108 68 L 216 68", z: 8 },
];

// 4. Clove hitch on the crosspiece, right of the wraps.
const finish = mapSegs(CLOVE, (x, y) => [228 + (y - 56) * 0.42, 95 + (x - 140) * 0.75]).map(
  (s, i) => {
    if (i === 0)
      return {
        ...s,
        d: s.d.replace(/^M [\d.-]+ [\d.-]+ L/, "M 216 68 C 230 68 241.4 60 241.4 70 L"),
      };
    if (i === 4) return { ...s, d: s.d.replace(/L [\d.-]+ [\d.-]+$/, "L 264.1 206") };
    return s;
  },
);

const segs = [
  ...start,
  ...wraps,
  ...frap,
  ...finish.map((s) => (s.back ? s : { ...s, z: (s.z ?? 0) + 20 })),
];
const a = start.length;
const b = a + wraps.length;
const c = b + frap.length;

const render: KnotRender = {
  base,
  segs,
  steps: [{ show: a }, { show: b }, { show: c }, { show: segs.length }],
};
export default render;
