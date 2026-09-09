"use client";

import { useRef } from "react";
import type { ElementType, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useIsomorphicLayoutEffect } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText);

type RevealTextProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  start?: string;
};

// A dedicated reveal for headings and short statements: splits the text
// into lines, masks each line under `overflow: hidden`, and rises them
// into place with a slight stagger — the "editorial" typography motion
// used by e.g. monks.com, rather than a plain fade. Falls back to static
// text under `prefers-reduced-motion`, and if SplitText can't measure the
// element for any reason (e.g. it's briefly unmounted).
export function RevealText({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  start = "top 90%",
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "reveal-line",
      });

      gsap.set(split.lines, { yPercent: 110, opacity: 0 });
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () =>
          gsap.to(split.lines, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.08,
            delay,
          }),
      });

      return () => split.revert();
    }, el);

    return () => ctx.revert();
  }, [delay, start]);

  const Component = Tag as ElementType;
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
