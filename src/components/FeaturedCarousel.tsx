"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/data/products";

const AUTOPLAY_DELAY_MS = 4500;

// A single-row, four-up (two-up on mobile) horizontally scrolling shelf —
// keeps the homepage's "one clean row" look while letting more than four
// pieces live in it. Auto-advances by one screen-width at a time, pausing
// on hover, and loops back to the start once it reaches the end. No manual
// controls — it's a passive, ambient showcase, not a navigable carousel.
//
// Uses the browser's native smooth scroll (compositor-driven, so it stays
// smooth even in a backgrounded/throttled tab, unlike a hand-rolled
// requestAnimationFrame tween). This row deliberately has no CSS scroll-snap
// — snap points fight a native smooth scroll mid-flight and make it look
// like it's jumping between positions instead of gliding.
export function FeaturedCarousel({ products }: { products: Product[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  function page(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (direction === 1 && el.scrollLeft >= maxScroll - 4) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction === -1 && el.scrollLeft <= 4) {
      el.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  }

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => page(1), AUTOPLAY_DELAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={scrollerRef}
        className="scrollbar-none flex scroll-smooth gap-8 overflow-x-auto pb-2"
      >
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group block w-[calc(50%-1rem)] shrink-0 sm:w-[calc(25%-1.5rem)]"
          >
            <div className="mb-3 aspect-[4/5] overflow-hidden bg-[var(--paper-2)]">
              <Image
                src={product.images[0]}
                alt={product.romanized}
                width={800}
                height={1000}
                unoptimized
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-lg">‖ {product.displayName} ‖</p>
            {product.romanized !== product.displayName && (
              <p className="font-sans-ui text-xs tracking-[0.15em] text-[var(--ash)] uppercase">
                {product.romanized}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
