"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AUTOPLAY_DELAY_MS = 4500;

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  function prev() {
    setActive((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setActive((i) => (i + 1) % images.length);
  }

  // Auto-advance through the product's photos, pausing on hover so a
  // visitor can linger on one shot. The timer restarts from `active` on
  // every change — auto or manual — so it always gives a full dwell after
  // whichever photo is currently showing, rather than fighting a click.
  useEffect(() => {
    if (images.length <= 1 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(next, AUTOPLAY_DELAY_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused, images.length]);

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden bg-[var(--paper-2)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — view ${i + 1}`}
          fill
          unoptimized
          priority={i === 0}
          className={`object-contain pointer-events-none transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[var(--ink)] transition hover:bg-white"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[var(--ink)] transition hover:bg-white"
          >
            <ChevronIcon direction="right" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === active ? "h-1.5 w-5 bg-white" : "h-1.5 w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
