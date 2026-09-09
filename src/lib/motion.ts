"use client";

import { useEffect, useLayoutEffect, useState } from "react";

// useLayoutEffect fires synchronously before paint (needed so reveal
// components can set their hidden starting state before the browser ever
// shows the "final" pose), but React warns when it's used in code that
// runs during SSR. Every motion component here is a client component with
// no server-rendered visual dependency on the effect, so on the server this
// just falls back to a no-op-until-hydration useEffect instead.
export const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

// Shared helpers for the site's motion system (Lenis + GSAP). Kept in one
// place so every motion component agrees on what "reduced motion" and
// "desktop" mean, instead of re-deriving it ad hoc.

/** True once mounted on a client that asked for less motion. SSR-safe:
 * starts false so the server-rendered markup matches the first client
 * paint, then flips (if needed) a tick later. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Desktop-grade pointer: a mouse/trackpad, not a touchscreen. Cursor
 * effects and magnetic buttons only make sense here — on touch, "hover"
 * never really ends, so these interactions would get stuck. */
export function useIsFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFine(mq.matches);
    const onChange = () => setFine(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return fine;
}

// The current Lenis scroll velocity, updated every frame by SmoothScroll and
// read by anything that wants scroll-speed-reactive motion (the marquees).
// A plain mutable ref rather than React state/context: it changes every
// frame, and nothing here needs to re-render off it — consumers read it
// inside their own rAF loops.
export const scrollVelocity = { current: 0 };
