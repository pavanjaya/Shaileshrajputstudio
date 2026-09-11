"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function PressTabs({
  exhibitions,
  press,
}: {
  exhibitions: ReactNode;
  press: ReactNode;
}) {
  const [tab, setTab] = useState<"exhibitions" | "press">("press");

  return (
    <div>
      <div className="mb-12 flex items-center justify-center gap-8 border-b border-[var(--line)]">
        <button
          type="button"
          onClick={() => setTab("press")}
          className={`font-sans-ui -mb-px border-b-2 pb-4 text-xs tracking-[0.2em] uppercase transition ${
            tab === "press"
              ? "border-[var(--ink)] text-[var(--ink)]"
              : "border-transparent text-[var(--ash)] hover:text-[var(--ink)]"
          }`}
        >
          Press
        </button>
        <button
          type="button"
          onClick={() => setTab("exhibitions")}
          className={`font-sans-ui -mb-px border-b-2 pb-4 text-xs tracking-[0.2em] uppercase transition ${
            tab === "exhibitions"
              ? "border-[var(--ink)] text-[var(--ink)]"
              : "border-transparent text-[var(--ash)] hover:text-[var(--ink)]"
          }`}
        >
          Exhibitions
        </button>
      </div>

      {tab === "exhibitions" ? exhibitions : press}
    </div>
  );
}
