import type { UnitsEntry } from "@/content/schema";
import { convert, fmt } from "@/lib/units";
import s from "./units.module.css";

export function UnitsThumb({ entry }: { entry: UnitsEntry }) {
  const [a, b] = entry.units;
  return (
    <div className={s.thumb} aria-hidden="true">
      <span className={s.thumbQ}>{entry.quantity}</span>
      <span className={s.thumbEq}>
        1 {a.symbol} = {fmt(convert(1, a, b))} {b.symbol}
      </span>
      <span className={s.thumbList}>{entry.units.map((u) => u.symbol).join(" · ")}</span>
    </div>
  );
}
