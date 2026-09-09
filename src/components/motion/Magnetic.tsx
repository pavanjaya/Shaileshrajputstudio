"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "@/lib/motion";

type MagneticProps = {
  children: ReactNode;
  /** How far the element travels relative to the cursor offset. 0.3 is a
   * subtle pull; keep it well under 1 or the element will overshoot the
   * cursor itself. */
  strength?: number;
  className?: string;
};

// Wraps a single interactive element (a button/link) and pulls it gently
// toward the cursor while hovered — the "magnetic button" micro-interaction.
// Desktop pointer only: on touch there's no hover to react to, and the
// wrapper would just add a dead extra tap target.
export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    }
    function onLeave() {
      xTo(0);
      yTo(0);
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className ?? "inline-block"}>
      {children}
    </div>
  );
}
