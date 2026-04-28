"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Bookings?: {
      inlineEmbed: (opts: { url: string; parent: string; height: string }) => void;
    };
  }
}

const EMBED_URL = "https://termine.od-solution.com/portal-embed#/211207000000081008";
const CONTAINER_ID = "booking-inline-container";

export default function BookingEmbed() {
  const initialized = useRef(false);

  const init = () => {
    if (initialized.current) return;
    if (typeof window === "undefined" || !window.Bookings) return;
    window.Bookings.inlineEmbed({
      url: EMBED_URL,
      parent: `#${CONTAINER_ID}`,
      height: "600px",
    });
    initialized.current = true;
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Script
        src="https://bookings.nimbuspop.com/assets/embed.js"
        strategy="afterInteractive"
        onLoad={init}
      />
      <div id={CONTAINER_ID} className="min-h-[600px] w-full bg-paper" />
    </>
  );
}
