"use client";

import { useRef, useState } from "react";
import { siteConfig } from "../../lib/site";

export function ProductDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  function finishDemo() {
    setEnded(true);
    // Native fullscreen shows only the video, not the HTML signup link.
    // Return to the page at the end so the clickable end card is visible.
    if (document.fullscreenElement === videoRef.current) {
      void document.exitFullscreen().catch(() => {});
    }
    const video = videoRef.current as (HTMLVideoElement & {
      webkitDisplayingFullscreen?: boolean;
      webkitExitFullscreen?: () => void;
    }) | null;
    if (video?.webkitDisplayingFullscreen) video.webkitExitFullscreen?.();
  }

  function replay() {
    const video = videoRef.current;
    if (!video) return;
    setEnded(false);
    video.currentTime = 0;
    void video.play().catch(() => {
      // Leave the native controls available if playback needs another gesture.
    });
    video.focus();
  }

  return (
    <>
      <div className={`relative aspect-video bg-ink ${ended ? "min-h-48" : ""}`}>
        <video
          ref={videoRef}
          aria-label="ISO Assistant product demo video"
          className="aspect-video w-full max-w-full object-contain"
          controls={!ended}
          tabIndex={ended ? -1 : 0}
          playsInline
          poster="/videos/iso-assistant-demo-20260905-poster.jpg"
          preload="metadata"
          onEnded={finishDemo}
          onPlay={() => setEnded(false)}
          onSeeking={() => {
            if (!videoRef.current?.ended) setEnded(false);
          }}
        >
          <source src="/videos/iso-assistant-demo-20260905.mp4" type="video/mp4" />
          Your browser does not support embedded video. You can still start your free trial below.
        </video>
        {ended ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink px-4 text-center text-white sm:gap-4">
            <p role="status" className="text-lg font-semibold sm:text-2xl">
              See how it works with your team.
            </p>
            <a
              href={siteConfig.signupUrl}
              data-cta-location="demo_end_card"
              className="rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start your 30-day free trial
            </a>
            <button
              type="button"
              onClick={replay}
              className="min-h-11 rounded px-3 text-sm text-white underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Watch again
            </button>
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 px-5 py-4">
        <p className="text-sm text-slate">1:49 demo · Captions included</p>
        <a
          href={siteConfig.signupUrl}
          data-cta-location="demo_below_video"
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          Start your 30-day free trial
        </a>
      </div>
    </>
  );
}
