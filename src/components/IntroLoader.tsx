"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SEEN_KEY = "srs-intro-seen";
const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DURATION = 2400;

export function IntroLoader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const frame = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) {
      setShow(false);
      return;
    }

    const start = performance.now();
    function tick(now: number) {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setReady(true);
      }
    }
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  function enter() {
    if (!ready || leaving) return;
    // "Enter the Studio" is a genuine user gesture, so this is the one
    // moment the browser will allow starting audio with sound on. Fire a
    // DOM event synchronously within the click so SoundToggle (a separate,
    // unrelated component) can start playback under that same gesture.
    window.dispatchEvent(new Event("srs-start-audio"));
    setLeaving(true);
    sessionStorage.setItem(SEEN_KEY, "1");
    window.setTimeout(() => setShow(false), 800);
  }

  if (!show) return null;

  const offset = CIRCUMFERENCE * (1 - progress / 100);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--ink)] transition-all duration-[800ms] ease-in-out ${
        leaving ? "pointer-events-none scale-110 opacity-0" : "opacity-100"
      }`}
      role="button"
      tabIndex={ready ? 0 : -1}
      aria-label="Enter the studio"
      onClick={enter}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") enter();
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,173,33,0.10), transparent 55%)",
        }}
      />

      <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
          <circle
            cx="100"
            cy="100"
            r={RADIUS}
            fill="none"
            stroke="rgba(228,222,215,0.15)"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r={RADIUS}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 60ms linear" }}
          />
        </svg>

        <div className="animate-coil-spin relative h-28 w-24 overflow-hidden opacity-90 sm:h-32 sm:w-28">
          <Image
            src="/brand/srs-logo.png"
            alt=""
            aria-hidden="true"
            fill
            unoptimized
            priority
            style={{ objectFit: "cover", objectPosition: "left center" }}
            className="brightness-0 invert"
          />
        </div>
      </div>

      <div className="font-sans-ui mt-10 h-6 text-center">
        {!ready ? (
          <span className="text-xs tracking-[0.3em] text-[var(--paper)]/50">
            {progress}%
          </span>
        ) : (
          <button
            type="button"
            onClick={enter}
            className="animate-fade-up pointer-events-auto flex cursor-pointer items-center gap-3 text-xs tracking-[0.3em] text-[var(--paper)] uppercase transition hover:text-[var(--accent)]"
          >
            Enter the Studio
            <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
