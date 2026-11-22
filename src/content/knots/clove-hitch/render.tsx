import type { KnotRender } from "@/renderers/knot/types";
import { Post } from "@/renderers/knot/parts";

// Front view, vertical post. Standing part enters from the left; the end exits right.
const render: KnotRender = {
  base: <Post />,
  segs: [
    { d: "M 12 88 L 176 88 C 190 88 192 72 182 68" },
    { d: "M 182 68 L 142 56 C 130 54 128 66 138 68", back: true },
    { d: "M 138 68 C 144 66 148 72 150 78 L 172 150 C 175 160 188 160 184 150", z: 9 },
    { d: "M 184 150 L 142 134 C 130 130 128 142 138 142", back: true },
    { d: "M 138 142 L 300 142", z: 5 },
  ],
  steps: [{ show: 2 }, { show: 3 }, { show: 4 }, { show: 5 }],
};
export default render;
