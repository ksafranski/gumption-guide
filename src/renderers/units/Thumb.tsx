"use client";
import type { UnitsEntry } from "@/content/schema";
import { IllustrationThumb } from "../illustration/Illustration";

export function UnitsThumb({ entry }: { entry: UnitsEntry }) {
  return <IllustrationThumb id={entry.id} />;
}
