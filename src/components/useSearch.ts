"use client";
import { useEffect, useState } from "react";
import { createSearch } from "@/lib/search/engine";
import type { SearchDoc } from "@/lib/search/docs";

type Engine = ReturnType<typeof createSearch>;
let cached: Promise<Engine> | null = null;

/** Loads the build-time search index once (cached by the service worker later). */
export function loadSearch(): Promise<Engine> {
  cached ??= fetch("/api/search-index")
    .then((r) => r.json() as Promise<SearchDoc[]>)
    .then(createSearch);
  return cached;
}

export function useSearchEngine(enabled = true) {
  const [engine, setEngine] = useState<Engine | null>(null);
  useEffect(() => {
    if (enabled) loadSearch().then(setEngine);
  }, [enabled]);
  return engine;
}
