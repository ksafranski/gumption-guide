"use client";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { groupByCategory } from "@/lib/search/engine";
import { Highlight } from "./Highlight";
import { useSearchEngine } from "./useSearch";
import s from "./SearchBox.module.css";

const LIMIT = 12;

export function SearchBox() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(-1);
  const [wanted, setWanted] = useState(false);
  const engine = useSearchEngine(wanted);
  const input = useRef<HTMLInputElement>(null);
  const listId = useId();

  const res = useMemo(() => (engine && q.trim() ? engine.run(q) : null), [engine, q]);
  const flat = useMemo(() => (res?.results ?? []).slice(0, LIMIT), [res]);
  const groups = useMemo(() => groupByCategory(flat), [flat]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.key === "/" && !/input|textarea|select/i.test(t.tagName)) {
        e.preventDefault();
        input.current?.focus();
      }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setQ("");
    input.current?.blur();
    router.push(href);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setSel((i) => Math.min(flat.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((i) => Math.max(-1, i - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
      input.current?.blur();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (sel >= 0 && flat[sel]) go(flat[sel].doc.href);
      else if (q.trim()) go(`/search?q=${encodeURIComponent(q.trim())}`);
    }
  };

  return (
    <div className={s.search}>
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="8.5" cy="8.5" r="5.5" />
        <path d="M13 13l4 4" />
      </svg>
      <input
        ref={input}
        type="search"
        value={q}
        placeholder="Search knots, gears, units…"
        autoComplete="off"
        spellCheck={false}
        role="combobox"
        aria-expanded={open && !!q}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={sel >= 0 ? `${listId}-${sel}` : undefined}
        aria-label="Search the guide"
        onFocus={() => {
          setWanted(true);
          setOpen(true);
        }}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onChange={(e) => {
          setQ(e.target.value);
          setSel(-1);
          setOpen(true);
        }}
        onKeyDown={onKey}
      />
      <kbd>/</kbd>
      {open && q.trim() && (
        <div id={listId} className={s.suggest} role="listbox">
          {res?.corrected && (
            <div className={s.hint}>
              Showing results for <b>{res.corrected}</b>
            </div>
          )}
          {res?.error && <div className={s.none}>{res.error}</div>}
          {!engine && <div className={s.none}>Loading index…</div>}
          {engine && res && !res.results.length && !res.error && (
            <div className={s.none}>Nothing matches. Try a broader word.</div>
          )}
          {groups.map((g) => (
            <div key={g.id} role="group" aria-label={g.title} data-cat={g.id}>
              <div className={s.group}>{g.title}</div>
              {g.items.map((r) => {
                const i = flat.indexOf(r);
                return (
                  <div
                    key={r.doc.id}
                    id={`${listId}-${i}`}
                    role="option"
                    aria-selected={sel === i}
                    className={s.opt}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      go(r.doc.href);
                    }}
                    onMouseEnter={() => setSel(i)}
                  >
                    <span className={s.label}>
                      <Highlight text={r.label} toks={res?.toks} />
                    </span>
                    {r.kind !== "title" && <span className={s.sub}>{r.doc.title}</span>}
                  </div>
                );
              })}
            </div>
          ))}
          <div className={s.foot}>
            <code>tag:</code> <code>category:</code> <code>use:</code>{" "}
            <code>&quot;phrase&quot;</code> <code>/regex/</code>
            <span>↵ all results</span>
          </div>
        </div>
      )}
    </div>
  );
}
