"use client";
import { useId, useState } from "react";
import type { UnitsEntry } from "@/content/schema";
import { convert, fmt } from "@/lib/units";
import s from "./units.module.css";

export function UnitsLive({ entry }: { entry: UnitsEntry }) {
  const u = entry.units;
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState(u[0].id);
  const [to, setTo] = useState(u[1].id);
  const id = useId();
  const f = u.find((x) => x.id === from)!;
  const t = u.find((x) => x.id === to)!;
  const v = parseFloat(value);
  const out = Number.isFinite(v) ? convert(v, f, t) : NaN;

  return (
    <div className={s.live}>
      <div className={s.converter}>
        <label className={s.field} htmlFor={`${id}-v`}>
          <span>Value</span>
          <input
            id={`${id}-v`}
            inputMode="decimal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <label className={s.field}>
          <span>From</span>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {u.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name} ({x.symbol})
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className={s.swap}
          aria-label="Swap units"
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 5h9l-3-3M12 11H3l3 3" />
          </svg>
        </button>
        <label className={s.field}>
          <span>To</span>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {u.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name} ({x.symbol})
              </option>
            ))}
          </select>
        </label>
      </div>
      <output className={s.result} aria-live="polite">
        <span className={s.lhs}>
          {Number.isFinite(v) ? fmt(v) : "?"} {f.symbol} =
        </span>
        <span className={s.rhs}>
          {fmt(out)} <small>{t.symbol}</small>
        </span>
      </output>
      <table className={s.all}>
        <caption>
          {Number.isFinite(v) ? fmt(v) : "?"} {f.name.toLowerCase()} is…
        </caption>
        <tbody>
          {u
            .filter((x) => x.id !== from)
            .map((x) => (
              <tr key={x.id} className={x.id === to ? s.hot : undefined}>
                <td>{fmt(Number.isFinite(v) ? convert(v, f, x) : NaN)}</td>
                <th scope="row">
                  {x.name} <span>{x.symbol}</span>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
