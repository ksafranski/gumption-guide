"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { groupByCategory, preferCategory } from "@/lib/search/engine";
import { Highlight } from "./Highlight";
import { useSearchEngine } from "./useSearch";
import s from "./SearchPage.module.css";

export function SearchPage() {
  const params = useSearchParams();
  const router = useRouter();
  const urlQ = params.get("q") ?? "";
  const [q, setQ] = useState(urlQ);
  const [lastUrlQ, setLastUrlQ] = useState(urlQ);
  if (urlQ !== lastUrlQ) {
    // URL changed from outside (e.g. header search): adopt it.
    setLastUrlQ(urlQ);
    setQ(urlQ);
  }
  const engine = useSearchEngine();
  const res = engine && q.trim() ? engine.run(q) : null;
  const prefer = params.get("in");
  const groups = res ? groupByCategory(preferCategory(res.results, prefer)) : [];

  return (
    <div>
      <input
        className={s.input}
        type="search"
        value={q}
        autoFocus
        aria-label="Search query"
        placeholder="e.g. tag:mechanical-advantage"
        onChange={(e) => {
          setQ(e.target.value);
          const inParam = prefer ? `&in=${encodeURIComponent(prefer)}` : "";
          router.replace(`/search?q=${encodeURIComponent(e.target.value)}${inParam}`, {
            scroll: false,
          });
        }}
      />
      {res?.corrected && (
        <p className={s.note}>
          Showing results for <b>{res.corrected}</b>
        </p>
      )}
      {res?.error && <p className={s.note}>{res.error}</p>}
      {res && !res.results.length && !res.error && <p className={s.note}>Nothing matches.</p>}
      {res && res.results.length > 0 && (
        <p className={s.note}>
          {res.results.length} result{res.results.length > 1 ? "s" : ""}
        </p>
      )}
      {groups.map((g) => (
        <section key={g.id} data-cat={g.id} className={s.group}>
          <h2>{g.title}</h2>
          <ul>
            {g.items.map((r) => (
              <li key={r.doc.id}>
                <Link href={r.doc.href}>
                  <b>
                    <Highlight text={r.doc.title} toks={res?.toks} />
                  </b>
                  {r.kind !== "title" && (
                    <span className={s.via}>
                      via “<Highlight text={r.label} toks={res?.toks} />”
                    </span>
                  )}
                  <span className={s.sum}>
                    <Highlight text={r.doc.summary} toks={res?.toks} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
