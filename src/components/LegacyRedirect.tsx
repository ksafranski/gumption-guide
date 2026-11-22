"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Old 507 Movements links looked like /#/m/spur-gears. */
export function LegacyRedirect() {
  const router = useRouter();
  useEffect(() => {
    const m = location.hash.match(/^#\/m\/([\w-]+)/);
    if (m) router.replace(`/mechanisms/${m[1]}`);
  }, [router]);
  return null;
}
