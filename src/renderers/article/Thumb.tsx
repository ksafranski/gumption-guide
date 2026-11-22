"use client";
import type { ArticleEntry } from "./types";
import { IllustrationThumb } from "../illustration/Illustration";

export function ArticleThumb({ entry }: { entry: ArticleEntry }) {
  return <IllustrationThumb id={entry.id} />;
}
