"use client";

import Script from "next/script";
import { useEffect } from "react";
import { css } from "@/lib/css";

const CALENDLY_URL = "https://calendly.com/adsmagnify_com/student-acquisition-strategy-call";

export default function CalendlyEmbed() {
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const data = event.data as { event?: string } | null;
      if (event.origin === "https://calendly.com" && data?.event === "calendly.event_scheduled") {
        window.location.href = "/uae/thank-you";
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <div className="calendly-inline-widget" data-url={CALENDLY_URL} style={css("min-width: 320px; height: 700px")} />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </>
  );
}
