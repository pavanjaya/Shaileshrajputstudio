"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollVelocity } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

// Drives smooth (eased) scrolling site-wide and keeps GSAP's ScrollTrigger
// in sync with it — without this, ScrollTrigger would measure the native
// (unsmoothed) scroll position while Lenis renders an eased one a few
// frames behind, and every scroll-linked animation would visibly lag.
//
// Renders nothing; it's pure wiring, mounted once in the root layout.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Respect the OS setting: leave native scrolling in place, and don't
      // even start the rAF loop below.
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      // A touch lighter/faster on touchscreens, where Lenis mainly needs
      // to tame momentum scrolling rather than add eased weight to it.
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", (e: { velocity: number }) => {
      scrollVelocity.current = e.velocity;
      ScrollTrigger.update();
    });

    // ScrollTrigger normally reads/sets the native scrollTop of the
    // scroller it's told to watch. Point it at Lenis's own methods instead,
    // so `pin`/`scrub` triggers move in lockstep with the eased scroll
    // rather than the raw one.
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (typeof value === "number") {
          lenis.scrollTo(value, { immediate: true });
          return;
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    function raf(time: number) {
      lenis.raf(time);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    // Fonts/images finishing loading change document height — refresh once
    // things settle so pin/scrub distances stay accurate.
    window.addEventListener("load", refresh);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("load", refresh);
      lenis.destroy();
    };
  }, []);

  return null;
}
