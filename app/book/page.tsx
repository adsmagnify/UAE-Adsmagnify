import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { css } from "@/lib/css";

export const metadata: Metadata = {
  title: "Book your 1:1 batch filling call | Adsmagnify UAE",
};

export default function BookPage() {
  return (
    <div
      style={css(
        "background: #05070d; color: #ffffff; font-family: Inter, system-ui, sans-serif; font-size: 16px; line-height: 1.6; min-height: 100vh",
      )}
    >
      <header
        style={css(
          "max-width: 1200px; margin: 0 auto; padding: 18px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px",
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
          UAE INSTITUTES ONLY · LIMITED SPOTS PER INTAKE
        </div>
      </header>

      <main
        style={css(
          "max-width: 1200px; margin: 0 auto; padding: 24px 24px 80px; display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start",
        )}
      >
        <div style={css("flex: 1 1 440px; min-width: 0; display: flex; flex-direction: column; gap: 22px")}>
          <div style={css("font-size: 13px; font-weight: 700; letter-spacing: 0.14em; color: #338bff")}>FREE 45-MINUTE 1:1 STRATEGY CALL</div>
          <h1
            style={css(
              "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(34px, 4.6vw, 52px); line-height: 1.06; letter-spacing: -0.02em; text-transform: uppercase",
            )}
          >
            Book your <span style={css("color: #338bff")}>batch filling call.</span>
          </h1>
          <p style={css("margin: 0; color: #c9cfdc; font-size: 18px")}>
            On this call, I&apos;ll show you exactly where you&apos;re losing admissions. If I don&apos;t think I can fill your batch, you still leave with the answer. Free. No pitch. No strings attached.
          </p>
          <div
            style={css(
              "border: 1px solid #ffc619; border-radius: 16px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px; background: #0a0f1f",
            )}
          >
            <div style={css("font-size: 13px; font-weight: 700; letter-spacing: 0.1em; color: #ffc619")}>WHO THIS CALL IS FOR</div>
            <div style={css("display: flex; gap: 10px")}>
              <span style={css("color: #ffc619; font-weight: 800")}>✓</span>
              <span style={css("color: #e3e7ef")}>
                Education institutes based in the <strong>UAE</strong>
              </span>
            </div>
            <div style={css("display: flex; gap: 10px")}>
              <span style={css("color: #ffc619; font-weight: 800")}>✓</span>
              <span style={css("color: #e3e7ef")}>
                Doing <strong>AED 20,000+ per month</strong> in revenue
              </span>
            </div>
            <div style={css("display: flex; gap: 10px")}>
              <span style={css("color: #ffc619; font-weight: 800")}>✓</span>
              <span style={css("color: #e3e7ef")}>
                Ready to invest <strong>at least AED 100 per day</strong> in Meta or TikTok ads
              </span>
            </div>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 14px")}>
              If you&apos;re just checking prices, or you can&apos;t commit that ad budget yet, this call is not the right fit. We take only a few institutes each intake.
            </p>
          </div>
          <div style={css("display: flex; gap: 14px; align-items: center")}>
            <img
              src="/book/vinay.jpg"
              alt="Vinay Hankare"
              style={css("width: 64px; height: 64px; border-radius: 999px; object-fit: cover; object-position: top; border: 2px solid #338bff")}
            />
            <div>
              <div style={css("font-weight: 700")}>Vinay Hankare</div>
              <div style={css("color: #b6bdd0; font-size: 14px")}>Founder, Adsmagnify · 45 min · Phone or video call</div>
            </div>
          </div>
          <div style={css("display: flex; flex-direction: column; gap: 10px")}>
            <div style={css("font-family: Sora, sans-serif; font-weight: 700; font-size: 18px; text-transform: uppercase")}>On the call you&apos;ll get</div>
            <div style={css("display: flex; gap: 10px")}>
              <span style={css("color: #338bff; font-weight: 800")}>01</span>
              <span style={css("color: #c9cfdc")}>Where your admissions are leaking: leads, follow-up or timing</span>
            </div>
            <div style={css("display: flex; gap: 10px")}>
              <span style={css("color: #338bff; font-weight: 800")}>02</span>
              <span style={css("color: #c9cfdc")}>What one admission really costs you, not one lead</span>
            </div>
            <div style={css("display: flex; gap: 10px")}>
              <span style={css("color: #338bff; font-weight: 800")}>03</span>
              <span style={css("color: #c9cfdc")}>When your budget should peak, planned from your intake date</span>
            </div>
            <div style={css("display: flex; gap: 10px")}>
              <span style={css("color: #338bff; font-weight: 800")}>04</span>
              <span style={css("color: #c9cfdc")}>Whether we can deliver 80–120+ paid enrollments in 90 days for you</span>
            </div>
          </div>
          <div
            style={css(
              "display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; border-top: 1px solid #1c2236; padding-top: 18px",
            )}
          >
            <div>
              <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(20px, 2.6vw, 28px); color: #338bff")}>AED 19M+</div>
              <div style={css("font-size: 13px; color: #b6bdd0")}>ad spend managed</div>
            </div>
            <div>
              <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(20px, 2.6vw, 28px); color: #ffc619")}>378</div>
              <div style={css("font-size: 13px; color: #b6bdd0")}>admissions, Whistling Woods</div>
            </div>
            <div>
              <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(20px, 2.6vw, 28px); color: #338bff")}>15.85x</div>
              <div style={css("font-size: 13px; color: #b6bdd0")}>ROAS, Jeevan Sparsh</div>
            </div>
          </div>
        </div>

        <div
          style={css(
            "flex: 1 1 520px; min-width: 0; background: #0a0f1f; border: 1px solid #338bff; border-radius: 20px; overflow: hidden; box-sizing: border-box; box-shadow: 0 0 60px rgba(51,139,255,.18)",
          )}
        >
          <CalendlyEmbed />
        </div>
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
