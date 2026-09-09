"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// A small dot-plus-ring cursor that trails the real pointer and swells over
// anything clickable. Desktop only — mounted unconditionally, but bails out
// (renders nothing, touches nothing) on touch devices and under reduced
// motion, both checked once on mount since pointer capability doesn't
// change mid-session on the devices that matter here.
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(on);
    // Hide the native cursor site-wide only once we know we're rendering
    // the replacement for it — never on touch/reduced-motion, where this
    // component renders nothing and the OS cursor (if any) must stay.
    if (on) document.documentElement.classList.add("custom-cursor-active");
    return () => document.documentElement.classList.remove("custom-cursor-active");
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const ringEl = ring.current;
    const dotEl = dot.current;
    if (!ringEl || !dotEl) return;

    const ringX = gsap.quickTo(ringEl, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ringEl, "y", { duration: 0.5, ease: "power3.out" });
    const dotX = gsap.quickTo(dotEl, "x", { duration: 0.15, ease: "power3.out" });
    const dotY = gsap.quickTo(dotEl, "y", { duration: 0.15, ease: "power3.out" });

    function onMove(e: MouseEvent) {
      ringX(e.clientX);
      ringY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);
    }

    function onOver(e: MouseEvent) {
      const target = (e.target as Element)?.closest?.(
        'a, button, [role="button"], input, textarea',
      );
      gsap.to(ringEl, {
        scale: target ? 2.2 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    function onDown() {
      gsap.to(ringEl, { scale: 0.85, duration: 0.15 });
    }
    function onUp() {
      gsap.to(ringEl, { scale: 1, duration: 0.2 });
    }
    function onLeaveWindow() {
      gsap.to([ringEl, dotEl], { opacity: 0, duration: 0.2 });
    }
    function onEnterWindow() {
      gsap.to([ringEl, dotEl], { opacity: 1, duration: 0.2 });
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[300] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]"
      />
      {/* A solid white circle blended with `difference` reads as an
          inverted ring against any background — dark or light — without
          needing to track section color itself. */}
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[300] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
      />
    </>
  );
}
