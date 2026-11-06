import type { Metadata } from "next";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "You're booked | Adsmagnify UAE",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div
      style={css(
        "background: #05070d; color: #ffffff; font-family: Inter, system-ui, sans-serif; font-size: 16px; line-height: 1.6; min-height: 100vh; display: flex; flex-direction: column",
      )}
    >
      <header
        style={css(
          "max-width: 1200px; margin: 0 auto; padding: 18px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; width: 100%; box-sizing: border-box",
        )}
      >
        <a href="/" style={css("display: inline-flex; align-items: center; min-height: 44px")}>
          <img src="/book/logo.png" alt="Adsmagnify, back to the UAE page" style={css("height: 34px; width: auto")} />
        </a>
        <div
          style={css(
            "font-size: 13px; font-weight: 700; letter-spacing: 0.1em; color: #ffc619; border: 1px solid #384057; border-radius: 999px; padding: 6px 14px",
          )}
        >
          CALL CONFIRMED
        </div>
      </header>

      <main
        style={css(
          "flex: 1; width: 100%; max-width: 760px; margin: 0 auto; padding: 48px 24px 80px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 18px",
        )}
      >
        <div style={css("font-size: 13px; font-weight: 700; letter-spacing: 0.14em; color: #338bff")}>YOU&apos;RE BOOKED</div>
        <h1
          style={css(
            "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(36px, 5vw, 58px); line-height: 1.06; letter-spacing: -0.02em; text-transform: uppercase",
          )}
        >
          Your call is <span style={css("color: #338bff")}>confirmed.</span>
        </h1>
        <p style={css("margin: 0; color: #c9cfdc; font-size: 18px; max-width: 560px")}>
          Your 45-minute strategy call is confirmed. Check your email for the calendar invite. We&apos;ll walk through where your admissions are leaking, and whether we can fill your next batch.
        </p>
        <a
          href="/"
          className="cta"
          style={css(
            "margin-top: 8px; background: #ffc619; color: #05070d; padding: 16px 28px; border-radius: 12px; font-weight: 800; font-size: 16px; text-decoration: none; min-height: 52px; box-sizing: border-box; display: inline-flex; align-items: center; gap: 10px",
          )}
        >
          Back to the UAE page <span className="arw">→</span>
        </a>
        <p style={css("margin: 8px 0 0; font-size: 14px; color: #b6bdd0")}>
          Need to reschedule?{" "}
          <a href="tel:+917700090236" style={css("color: #338bff; font-weight: 700; text-decoration: none")}>
            Call +91 77000 90236
          </a>
          {" · "}
          <a href="https://wa.me/917700090236" target="_blank" rel="noopener" style={css("color: #338bff; font-weight: 700; text-decoration: none")}>
            WhatsApp
          </a>
        </p>
      </main>

      <footer style={css("border-top: 1px solid #1c2236")}>
        <div style={css("max-width: 1000px; margin: 0 auto; padding: 28px 24px 36px; font-size: 12px; color: #8a92a8; text-align: center")}>
          Adsmagnify Digital Solutions LLP · G12, Pil Court, Near GST Bhavan, Churchgate, Mumbai 400020 ·{" "}
          <a href="mailto:adsmagnify@gmail.com" style={css("color: #8a92a8")}>
            adsmagnify@gmail.com
          </a>{" "}
          · Results depend on your programme, follow-up capacity and market. © 2026
        </div>
      </footer>
    </div>
  );
}
