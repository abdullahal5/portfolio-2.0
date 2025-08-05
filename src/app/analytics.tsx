"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.hostname !== "localhost" &&
      window.gtag
    ) {
      window.gtag("event", "page_view", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
