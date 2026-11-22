"use client";
import { useState, useSyncExternalStore } from "react";
import type { Entry } from "@/content/schema";
import { EntryCard } from "./EntryCard";
import s from "./RandomPicks.module.css";

// One random seed per page load, read only on the client so server HTML stays stable.
const clientSeed = typeof window === "undefined" ? 0 : Math.floor(Math.random() * 2 ** 31) + 1;
const noop = () => () => {};
const useSeed = () =>
  useSyncExternalStore(
    noop,
    () => clientSeed,
    () => 0,
  );

function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(xs: T[], rand: () => number) {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** A few entries from a few sections, reshuffled on each visit. */
export function RandomPicks({ pools, perSection = 2 }: { pools: Entry[][]; perSection?: number }) {
  const seed = useSeed();
  const [round, setRound] = useState(0);
  const ready = seed !== 0;
  const rand = rng(seed + round * 7919);
  const picks = ready
    ? shuffle(
        pools.flatMap((p) => shuffle(p, rand).slice(0, perSection)),
        rand,
      )
    : pools.flatMap((p) => p.slice(0, perSection));

  return (
    <>
      <div className={s.head}>
        <h2>Browse</h2>
        <button type="button" onClick={() => setRound((r) => r + 1)} disabled={!ready}>
          Shuffle
        </button>
      </div>
      <div className="grid" style={ready ? undefined : { visibility: "hidden" }}>
        {picks.map((e) => (
          <EntryCard key={e.id} entry={e} showCategory />
        ))}
      </div>
    </>
  );
}
