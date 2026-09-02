"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// A floating "Enquire" bar for product pages. The real CTA lives inline at
// the bottom of the page (after photos, story, and spec table) — this bar
// exists so a visitor can start an enquiry without having to scroll all the
// way down to find it. It appears once they've scrolled past the hero/title
// area, and hides whenever the real CTA (id="product-enquire-cta") is on
// screen or already scrolled past (so it never sits over the footer).
//
// Recomputed directly from live geometry on every scroll tick rather than
// via IntersectionObserver's threshold-crossing callbacks — a fast scroll
// (flick, "End" key, drag-to-bottom) can jump straight past the CTA's
// on-screen window between two observer checks and never fire a callback
// for it, which left the bar stuck showing over the footer.
export function StickyEnquire({ slug, label }: { slug: string; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      const target = document.getElementById("product-enquire-cta");
      if (!target) return;
      const pastHero = window.scrollY > 480;
      const ctaStillBelowFold = target.getBoundingClientRect().top > window.innerHeight;
      setVisible(pastHero && ctaStillBelowFold);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`font-sans-ui fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--paper)]/95 px-6 sm:px-10 lg:px-16 py-4 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0 pointer-events-auto" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4">
        <p className="hidden truncate text-sm text-[var(--ink)]/70 sm:block">{label}</p>
        <Link
          href={`/acquire?product=${slug}`}
          tabIndex={visible ? 0 : -1}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent)] hover:text-[var(--ink)] sm:w-auto"
        >
          Enquire
        </Link>
      </div>
    </div>
  );
}
