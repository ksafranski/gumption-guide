import type { UnitsEntry } from "@/content/schema";
import { convert, fmt } from "@/lib/units";
import s from "./units.module.css";

/** Conversion matrix: 1 of the row unit in each column unit. Temperature gets a reference ladder instead. */
export function UnitsPrint({ entry }: { entry: UnitsEntry }) {
  const u = entry.units;
  const offset = u.some((x) => x.offset);
  if (offset) {
    const ref = u[0];
    const points = [-40, -20, 0, 10, 20, 30, 37, 50, 100, 180, 200, 230];
    return (
      <table className={s.matrix}>
        <thead>
          <tr>
            {u.map((x) => (
              <th key={x.id}>{x.symbol}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {points.map((p) => (
            <tr key={p}>
              {u.map((x) => (
                <td key={x.id}>{fmt(Math.round(convert(p, ref, x) * 10) / 10)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <table className={s.matrix}>
      <thead>
        <tr>
          <th>1 ↓ in →</th>
          {u.map((x) => (
            <th key={x.id}>{x.symbol}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {u.map((r) => (
          <tr key={r.id}>
            <th scope="row">{r.symbol}</th>
            {u.map((c) => (
              <td key={c.id}>{r.id === c.id ? "1" : fmt(convert(1, r, c))}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
