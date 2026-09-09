"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "@/lib/motion";

// A soft cross-fade on every route change (and on first load, everywhere
// but the homepage — the intro loader already owns that reveal). Opacity
// only, deliberately never a transform: this wrapper sits above every
// page's own `<Nav>`, and a `fixed` nav positions itself relative to the
// nearest ancestor with a transform, not the viewport — animating `y`
// here would misplace it for the length of the transition. Opacity alone
// doesn't create that containing block, so the nav stays put.
export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" });
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
