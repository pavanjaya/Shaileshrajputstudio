"use client";

import { useEffect } from "react";

// Every film grid (Panch Bhuta, each story collection, /films) renders
// plain <video controls> elements — nothing stops a visitor from starting
// a second one while the first is still playing, and their audio then
// overlaps. This listens for any video starting playback anywhere on the
// page and pauses every other one, so only one ever plays at a time.
//
// The native "play" event doesn't bubble, so this has to listen in the
// capture phase on document rather than attaching to each <video> — which
// also means it works for videos added to the page later (e.g. tab
// switches) without any per-page wiring.
export function SingleVideoPlayback() {
  useEffect(() => {
    function handlePlay(event: Event) {
      const target = event.target;
      if (!(target instanceof HTMLVideoElement)) return;
      document.querySelectorAll("video").forEach((video) => {
        if (video !== target && !video.paused) video.pause();
      });
    }
    document.addEventListener("play", handlePlay, true);
    return () => document.removeEventListener("play", handlePlay, true);
  }, []);

  return null;
}
