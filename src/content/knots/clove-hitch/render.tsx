import type { KnotRender } from "@/renderers/knot/types";
import { CLOVE } from "@/renderers/knot/geometry";
import { Post } from "@/renderers/knot/parts";

// Front view, vertical post. Standing part enters from the left; the end exits right.
const render: KnotRender = {
  base: <Post />,
  segs: CLOVE,
  steps: [{ show: 2 }, { show: 3 }, { show: 4 }, { show: 5 }],
};
export default render;
