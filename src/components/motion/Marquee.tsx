"use client";

import { Fragment, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { scrollVelocity, useIsomorphicLayoutEffect } from "@/lib/motion";

type MarqueeProps<T> = {
  items: T[];
  renderItem: (item: T, indexInTrack: number) => ReactNode;
  keyFor: (item: T, indexInTrack: number) => string;
  /** Baseline drift speed in px/second. */
  speed?: number;
  /** Classes for the flex track itself (gap, alignment) — not the outer
   * clipping wrapper. */
  trackClassName?: string;
};

// A continuously drifting strip (product/photo marquees) driven by GSAP's
// ticker rather than a CSS @keyframes loop, so its speed can react to how
// fast the visitor is scrolling the page — a small "alive" nudge, not a
// literal 1:1 link, giving the whole thing a bit of scroll-speed-based
// motion without being distracting. Renders the item list twice back-to-
// back and wraps the position at the halfway point, so the loop is
// seamless. Pauses on hover; under `prefers-reduced-motion` it renders the
// same doubled track but never starts moving, so content stays reachable
// without motion.
export function Marquee<T>({
  items,
  renderItem,
  keyFor,
  speed = 34,
  trackClassName = "gap-8",
}: MarqueeProps<T>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const track = [...items, ...items];

  useIsomorphicLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const trackEl = trackRef.current;
    if (!wrapper || !trackEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0;
    let paused = false;
    let halfWidth = trackEl.scrollWidth / 2;

    const measure = () => {
      halfWidth = trackEl.scrollWidth / 2;
    };
    const ro = new ResizeObserver(measure);
    ro.observe(trackEl);

    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    wrapper.addEventListener("mouseenter", onEnter);
    wrapper.addEventListener("mouseleave", onLeave);

    const tick = (_time: number, deltaMs: number) => {
      if (paused || halfWidth === 0) return;
      const dt = deltaMs / 1000;
      // A gentle boost from how fast the page is being scrolled right now
      // — capped, so a flick of the wheel doesn't send the strip flying.
      const velocityBoost = Math.min(Math.abs(scrollVelocity.current) * 4, 140);
      x -= (speed + velocityBoost) * dt;
      if (x <= -halfWidth) x += halfWidth;
      gsap.set(trackEl, { x });
    };

    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      ro.disconnect();
      wrapper.removeEventListener("mouseenter", onEnter);
      wrapper.removeEventListener("mouseleave", onLeave);
    };
  }, [speed]);

  return (
    <div ref={wrapperRef} className="marquee-wrapper relative overflow-hidden">
      <div ref={trackRef} className={`flex w-max ${trackClassName}`}>
        {track.map((item, i) => (
          <Fragment key={keyFor(item, i)}>{renderItem(item, i)}</Fragment>
        ))}
      </div>
    </div>
  );
}
