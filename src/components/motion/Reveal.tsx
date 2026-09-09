"use client";

import { useRef } from "react";
import type { ElementType, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  /** The wrapper tag. Defaults to a plain div; use "span" inline, or match
   * whatever semantic tag the content actually needs (e.g. a <ul>). */
  as?: ElementType;
  /** "up": fade + rise — the default, works for almost anything.
   * "image": a soft scale-down-to-rest, meant for photos/video frames. */
  variant?: "up" | "image";
  /** Animate the wrapper's own direct children one-by-one instead of the
   * wrapper as a single block — for icon grids, card rows, nav items. */
  staggerChildren?: boolean;
  stagger?: number;
  delay?: number;
  duration?: number;
  /** ScrollTrigger `start`. Default fires a little before the section is
   * fully in view, which reads as anticipatory rather than late. */
  start?: string;
  className?: string;
};

// The workhorse of the site's scroll-reveal system: fades/rises content
// into place the first time it scrolls into view. Degrades gracefully —
// under `prefers-reduced-motion` (checked once, at mount) it does nothing
// and renders children exactly as given.
export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  staggerChildren = false,
  stagger = 0.12,
  delay = 0,
  duration = 0.9,
  start = "top 88%",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = staggerChildren ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      const from =
        variant === "image"
          ? { opacity: 0, scale: 1.06 }
          : { opacity: 0, y: 28 };
      const to =
        variant === "image"
          ? { opacity: 1, scale: 1, duration: duration + 0.3, ease: "power2.out" }
          : { opacity: 1, y: 0, duration, ease: "power3.out" };

      gsap.set(targets, from);
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () =>
          gsap.to(targets, {
            ...to,
            delay,
            stagger: staggerChildren ? stagger : 0,
          }),
      });
    }, el);

    return () => ctx.revert();
  }, [variant, staggerChildren, stagger, delay, duration, start]);

  const Component = Tag as ElementType;
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
