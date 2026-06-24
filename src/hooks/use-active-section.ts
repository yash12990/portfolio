"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view and returns its id.
 * Uses scroll position with a header offset so the active link updates
 * as soon as a section's top crosses below the sticky header.
 */
export function useActiveSection(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const getActiveId = () => {
      let active = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          active = id;
        }
      }
      return active;
    };

    const onScroll = () => setActiveId(getActiveId());
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
