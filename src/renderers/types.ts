import type { ComponentType } from "react";
import type { Entry } from "@/content/schema";

export interface Renderer<E extends Entry = Entry> {
  /** Interactive, client-side. */
  Live: ComponentType<{ entry: E }>;
  /** Static, prints in grayscale. */
  Print: ComponentType<{ entry: E }>;
  /** Card thumbnail on index grids. */
  Thumb?: ComponentType<{ entry: E }>;
}
