"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { CATEGORIES, categoryById } from "@/content/categories";
import type { CategoryId } from "@/content/schema";
import { groupByCategory, preferCategory } from "@/lib/search/engine";
import { Highlight } from "./Highlight";
import { useSearchEngine } from "./useSearch";
import s from "./SearchBox.module.css";

const LIMIT = 12;

/** The section the reader is in, from the first path segment. */
function useSection() {
  const seg = usePathname().split("/")[1] as CategoryId;
  return categoryById[seg] ?? null;
}

export function SearchBox({ counts }: { counts: Record<string, number> }) {
  const router = useRouter();
  const section = useSection();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(-1);
  const [wanted, setWanted] = useState(false);
  const engine = useSearchEngine(wanted);
  const input = useRef<HTMLInputElement>(null);
  const listId = useId();

  const res = useMemo(() => (engine && q.trim() ? engine.run(q) : null), [engine, q]);
  const flat = useMemo(
    () => preferCategory(res?.results ?? [], section?.id).slice(0, LIMIT),
    [res, section],
  );
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
      else if (q.trim())
        go(`/search?q=${encodeURIComponent(q.trim())}${section ? `&in=${section.id}` : ""}`);
    }
  };

  return (
    <div className={s.search} data-cat={section?.id}>
      <div className={s.field}>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="M13 13l4 4" />
        </svg>
        <input
          ref={input}
          type="search"
          value={q}
          placeholder={
            section ? `Search ${section.title.toLowerCase()} first…` : "Search everything…"
          }
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
      </div>
      <SectionMenu current={section?.id ?? null} counts={counts} />
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

/** Section picker: shows where you are, jumps to another section. */
function SectionMenu({
  current,
  counts,
}: {
  current: CategoryId | null;
  counts: Record<string, number>;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const label = current ? categoryById[current].title : "All sections";

  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => {
      if (
        e instanceof KeyboardEvent ? e.key === "Escape" : !root.current?.contains(e.target as Node)
      )
        setOpen(false);
    };
    addEventListener("pointerdown", close);
    addEventListener("keydown", close);
    return () => {
      removeEventListener("pointerdown", close);
      removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={root} className={s.scope}>
      <button
        type="button"
        className={s.scopeBtn}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Section: ${label}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={s.dot} aria-hidden="true" />
        <span className={s.scopeLabel}>{label}</span>
        <svg viewBox="0 0 10 6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>
      {open && (
        <ul id={menuId} className={s.menu} role="menu">
          <li role="none">
            <Link role="menuitem" href="/" aria-current={!current} onClick={() => setOpen(false)}>
              All sections
            </Link>
          </li>
          {CATEGORIES.map((c) => (
            <li role="none" key={c.id} data-cat={c.id}>
              <Link
                role="menuitem"
                href={`/${c.id}`}
                aria-current={current === c.id}
                onClick={() => setOpen(false)}
              >
                <span className={s.dot} aria-hidden="true" />
                {c.title}
                <span className={s.n}>{counts[c.id] ?? 0}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
