"use client";

import { useEffect, useRef, useState } from "react";

// Browsers block audio autoplay-with-sound without a genuine user gesture.
// The manual toggle below is the fallback for that. But "Enter the Studio"
// (in IntroLoader) *is* a real gesture — it fires a "srs-start-audio" event
// synchronously within that click, which this component listens for to
// start music automatically on first entry, no second click needed.
export function SoundToggle({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    function startFromGesture() {
      const audio = audioRef.current;
      if (!audio || !audio.paused) return;
      audio.volume = 0.5;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Autoplay was refused (e.g. no active gesture) — leave the
          // manual toggle as the fallback.
        });
    }
    window.addEventListener("srs-start-audio", startFromGesture);
    return () => window.removeEventListener("srs-start-audio", startFromGesture);
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }
    setPlaying((v) => !v);
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        className="font-sans-ui absolute bottom-8 right-6 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur transition hover:bg-black/40"
      >
        <span className="flex h-3 items-end gap-0.5">
          <span
            className={`w-0.5 bg-white transition-all ${playing ? "h-3 animate-pulse" : "h-1.5"}`}
          />
          <span
            className={`w-0.5 bg-white transition-all ${playing ? "h-2 animate-pulse" : "h-2.5"}`}
          />
          <span
            className={`w-0.5 bg-white transition-all ${playing ? "h-3 animate-pulse" : "h-1"}`}
          />
        </span>
        {playing ? "Sound On" : "Sound Off"}
      </button>
    </>
  );
}
