"use client";

import { useEffect, useRef, useState } from "react";
import { css } from "@/lib/css";

const FAQ_ITEMS: [string, string][] = [
  [
    "You're based in Mumbai. Can you run UAE campaigns?",
    "Yes. Campaigns, reporting and reviews run remotely. Mumbai is 1.5 hours ahead of the UAE, so we work inside your business day.",
  ],
  [
    "How is this different from my current agency?",
    "They report leads. We're accountable for enrollments, and we run our own academy on the same system.",
  ],
  [
    "My counselors say the leads are junk. How do you fix that?",
    "Instant WhatsApp response so leads are reached before they cool, and counselor-accepted filtering so a lead only counts when your team marks it real.",
  ],
  [
    "What if it doesn't work?",
    "The Full-Batch Guarantee: 80–120+ paid enrollments in 90 days, or we keep working free until you get them, as long as the agreed process is followed.",
  ],
  [
    "How much does it cost?",
    "Pricing is in AED and depends on intake size and goals. We walk through it on the call. No obligation, no lock-in.",
  ],
];

function FlowArrow() {
  return (
    <div className="flow-arrow">
      <svg width="40" height="24" viewBox="0 0 40 24" aria-hidden="true">
        <path
          d="M2 12h32M24 3l10 9-10 9"
          fill="none"
          stroke="#ffc619"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function LandingPage() {
  const [open, setOpen] = useState(0);
  const [k, setK] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let fallback = 0;
    let ran = false;

    const run = () => {
      if (ran) return;
      ran = true;
      const t0 = performance.now();
      const dur = 1800;
      const step = (now: number) => {
        const x = Math.min(1, (now - t0) / dur);
        setK(1 - Math.pow(1 - x, 3));
        if (x < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    if (el && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) run();
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
    }

    fallback = window.setTimeout(run, 2500);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, []);

  const playVideo = () => {
    setStarted(true);
    const video = videoRef.current;
    if (!video) return;
    const pending = video.play();
    if (pending && pending.catch) pending.catch(() => {});
  };

  const showPlay = !playing && !started;
  const s1 = `AED ${Math.round(19 * k)}M+`;
  const s2 = `AED ${Math.round(187 * k)}M+`;
  const s3 = `${Math.round(300 * k)}+`;
  const s4 = String(Math.round(14 * k));

  return (
    <div
      style={css(
        "background: #05070d; color: #ffffff; font-family: Inter, system-ui, sans-serif; font-size: 17px; line-height: 1.6; overflow-x: hidden",
      )}
    >
      <header
        style={css(
          "max-width: 1200px; margin: 0 auto; padding: 18px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px",
        )}
      >
        <img src="/assets/f6ec0b519826a8ccfb1273d8df1b763c.png" alt="Adsmagnify" style={css("height: 36px; width: auto")} />
        <a
          href="/book"
          className="cta hdr-cta"
          style={css(
            "background: #ffc619; color: #05070d; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 15px; text-decoration: none; min-height: 44px; box-sizing: border-box; display: inline-flex; align-items: center; gap: 8px",
          )}
        >
          Get My Free Enrollment Plan <span className="arw">→</span>
        </a>
      </header>

      <section
        style={css(
          "max-width: 1200px; margin: 0 auto; padding: 32px 24px 56px; display: flex; flex-wrap: wrap; gap: 40px; align-items: center",
        )}
      >
        <div style={css("flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 22px")}>
          <div
            style={css(
              "align-self: flex-start; border: 1px solid #384057; border-radius: 999px; padding: 8px 16px; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; color: #ffc619",
            )}
          >
            FOR UAE EDUCATION INSTITUTES · DUBAI · ABU DHABI · SHARJAH
          </div>
          <h1
            style={css(
              "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(36px, 5vw, 58px); line-height: 1.06; letter-spacing: -0.02em; text-transform: uppercase",
            )}
          >
            80–120+ paid enrollments in 90 days. <span style={css("color: #338bff")}>Or we work free until you get them.</span>
          </h1>
          <p style={css("margin: 0; font-size: 20px; color: #ffffff; font-weight: 600; max-width: 620px")}>
            After 90 days, you stop asking <span style={css("color: #ffc619")}>“where is my next student coming from?”</span>
          </p>
          <p style={css("margin: 0; font-size: 18px; color: #c9cfdc; max-width: 600px")}>
            We run the done-for-you Student Acquisition Funnel so enrollments keep coming for every intake, batch or 1:1 coaching programme. You focus on teaching and closing admissions.
          </p>
          <div style={css("display: flex; flex-direction: column; gap: 10px")}>
            <div style={css("display: flex; gap: 10px; align-items: flex-start")}>
              <span style={css("color: #ffc619; font-weight: 800")}>✓</span>
              <span style={css("color: #e3e7ef")}>
                <strong>No junk-lead risk.</strong> A lead only counts when your counselor marks it real.
              </span>
            </div>
            <div style={css("display: flex; gap: 10px; align-items: flex-start")}>
              <span style={css("color: #ffc619; font-weight: 800")}>✓</span>
              <span style={css("color: #e3e7ef")}>
                <strong>No lock-in.</strong> Free 45-minute 1:1 strategy call first. No pitch deck.
              </span>
            </div>
            <div style={css("display: flex; gap: 10px; align-items: flex-start")}>
              <span style={css("color: #ffc619; font-weight: 800")}>✓</span>
              <span style={css("color: #e3e7ef")}>
                <strong>The risk sits with us.</strong> Miss the target, we keep working free.*
              </span>
            </div>
          </div>
          <div style={css("display: flex; flex-wrap: wrap; gap: 8px 18px; align-items: flex-start")}>
            <div style={css("display: flex; flex-direction: column; align-items: flex-start; gap: 8px; max-width: 100%")}>
              <a
                href="/book"
                className="cta"
                style={css(
                  "background: #ffc619; color: #05070d; padding: 18px 32px; border-radius: 12px; font-weight: 800; font-size: 18px; text-decoration: none; min-height: 52px; box-sizing: border-box; display: inline-flex; align-items: center; gap: 10px",
                )}
              >
                Show Me How to Fill My Next Batch <span className="arw">→</span>
              </a>
              <span style={css("font-size: 13px; color: #b6bdd0")}>Free 1:1 call · No pitch deck · No lock-in · No strings attached</span>
            </div>
            <a
              href="#results"
              style={css(
                "color: #ffffff; font-weight: 600; text-decoration: underline; min-height: 52px; display: inline-flex; align-items: center",
              )}
            >
              See the results
            </a>
          </div>
        </div>
        <div style={css("flex: 1 1 420px; min-width: 0; position: relative; display: flex; justify-content: center")}>
          <div
            className="burj-wrap"
            style={css(
              "position: relative; width: 100%; max-width: 440px; aspect-ratio: 420 / 640; display: flex; align-items: flex-end; justify-content: center",
            )}
          >
            <div
              className="burj-glow"
              aria-hidden="true"
              style={css(
                "position: absolute; left: 50%; top: 52%; width: 120%; height: 95%; transform: translate(-50%, -50%); border-radius: 50%; background: radial-gradient(ellipse at center, rgba(0,74,173,.9) 0%, rgba(10,15,31,.55) 55%, rgba(5,7,13,0) 75%)",
              )}
            />
            <div
              className="burj-beam"
              aria-hidden="true"
              style={css(
                "position: absolute; left: 50%; bottom: 3%; width: 2px; height: 0; transform: translateX(-50%); background: linear-gradient(to top, #ffc619, rgba(255,198,25,0))",
              )}
            />
            <img
              className="burj-img"
              src="/assets/c40cfb394aa036abe930784cd1c2eb01.webp"
              alt="Burj Khalifa, Dubai"
              style={css(
                "position: relative; height: 98%; width: auto; max-width: 100%; display: block; object-fit: contain; filter: drop-shadow(0 0 28px rgba(51,139,255,.45))",
              )}
            />
            <div
              className="burj-tip"
              aria-hidden="true"
              style={css(
                "position: absolute; left: 50%; top: 0.5%; width: 34px; height: 34px; transform: translateX(-50%); border-radius: 999px; background: radial-gradient(circle, #ffc619 0%, rgba(255,198,25,0) 70%)",
              )}
            />
            <div
              aria-hidden="true"
              style={css("position: absolute; left: 6%; right: 6%; bottom: 1.5%; height: 2px; background: #ffc619; opacity: .7")}
            />
          </div>
          <div
            style={css(
              "position: absolute; left: 0; bottom: 6%; width: 42%; max-width: 190px; background: #0a0f1f; border: 1px solid #338bff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,.5)",
            )}
          >
            <img
              src="/assets/87bdbc98d5bbb5f72ea0f46ffce29749.jpg"
              alt="Vinay Hankare, founder of Adsmagnify"
              style={css("width: 100%; height: auto; display: block")}
            />
            <div style={css("padding: 10px 12px; font-size: 12px; line-height: 1.4")}>
              <strong>Vinay Hankare</strong>
              <br />
              <span style={css("color: #b6bdd0")}>Founder, Adsmagnify and Adsmagnify Academy</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="vsl"
        style={css(
          "max-width: 1000px; margin: 0 auto; padding: 8px 24px 64px; display: flex; flex-direction: column; gap: 20px; align-items: center; text-align: center",
        )}
      >
        <div style={css("font-size: 13px; font-weight: 700; letter-spacing: 0.14em; color: #ffc619")}>WATCH FIRST · 2 MINUTES</div>
        <h2
          style={css(
            "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(24px, 3.4vw, 36px); line-height: 1.15; text-transform: uppercase",
          )}
        >
          Why your enrollments are stuck,{" "}
          <span style={css("color: #338bff")}>and how to get consistent students every intake, batch or 1:1 programme</span>
        </h2>
        <div
          style={css(
            "position: relative; width: 100%; border-radius: 18px; overflow: hidden; border: 2px solid #338bff; box-shadow: 0 0 60px rgba(51,139,255,.35); background: #0a0f1f",
          )}
        >
          <video
            ref={videoRef}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            src="/assets/8797876173599b0bc90b8ab0288b88eb.mp4"
            poster="/assets/cac7d83236566e15b3b6169f656557e8.jpg"
            controls={started}
            playsInline
            preload="metadata"
            style={css("width: 100%; height: auto; aspect-ratio: 1280 / 674; display: block; background: #000000")}
            aria-label="Vinay explains the Student Acquisition Funnel"
          />
          {showPlay ? (
            <button
              type="button"
              className="vplay"
              onClick={playVideo}
              aria-label="Play video"
              style={css(
                "position: absolute; inset: 0; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; background: rgba(5,7,13,.35); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px",
              )}
            >
              <span
                className="vplay-ring"
                style={css(
                  "position: relative; width: clamp(72px, 12vw, 104px); height: clamp(72px, 12vw, 104px); border-radius: 999px; background: #ffc619; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 40px rgba(255,198,25,.45)",
                )}
              >
                <svg width="38%" height="38%" viewBox="0 0 24 24" aria-hidden="true" style={css("margin-left: 8%")}>
                  <path d="M6 3.5v17l14-8.5z" fill="#05070d" />
                </svg>
              </span>
              <span
                style={css(
                  "background: rgba(5,7,13,.75); color: #ffffff; font-family: Inter, sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.08em; padding: 8px 14px; border-radius: 999px",
                )}
              >
                WATCH THE 2-MIN VIDEO
              </span>
            </button>
          ) : null}
        </div>
        <div style={css("display: flex; flex-direction: column; align-items: center; gap: 8px")}>
          <a
            href="/book"
            className="cta"
            style={css(
              "background: #ffc619; color: #05070d; padding: 18px 32px; border-radius: 12px; font-weight: 800; font-size: 18px; text-decoration: none; min-height: 52px; box-sizing: border-box; display: inline-flex; align-items: center; gap: 10px",
            )}
          >
            I Want This for My Institute <span className="arw">→</span>
          </a>
          <span style={css("font-size: 13px; color: #b6bdd0")}>Free 1:1 call. We map your funnel live. No strings attached.</span>
        </div>
      </section>

      <section ref={statsRef} style={css("border-top: 1px solid #1c2236; border-bottom: 1px solid #1c2236; background: #0a0f1f")}>
        <div
          style={css(
            "max-width: 1200px; margin: 0 auto; padding: 36px 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; text-align: center",
          )}
        >
          <div>
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(32px, 4vw, 44px); color: #338bff")}>{s1}</div>
            <div style={css("font-size: 14px; color: #b6bdd0")}>Ad spend managed</div>
          </div>
          <div>
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(32px, 4vw, 44px); color: #ffc619")}>{s2}</div>
            <div style={css("font-size: 14px; color: #b6bdd0")}>Revenue generated for clients</div>
          </div>
          <div>
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(32px, 4vw, 44px); color: #338bff")}>{s3}</div>
            <div style={css("font-size: 14px; color: #b6bdd0")}>Clients across India and the UAE</div>
          </div>
          <div>
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(32px, 4vw, 44px); color: #338bff")}>{s4}</div>
            <div style={css("font-size: 14px; color: #b6bdd0")}>Academy batches graduated</div>
          </div>
        </div>
      </section>

      <section style={css("padding: 48px 0 24px; display: flex; flex-direction: column; gap: 18px")}>
        <div style={css("text-align: center; font-size: 13px; font-weight: 700; letter-spacing: 0.14em; color: #b6bdd0; padding: 0 24px")}>
          TRUSTED BY 300+ CLIENTS ACROSS INDIA AND THE UAE
        </div>
        <div className="mq">
          <div className="mq-track">
            <img src="/assets/72121b715579293ee6e5eef0868b182e.png" alt="Adsmagnify client logos" />
            <img src="/assets/72121b715579293ee6e5eef0868b182e.png" alt="" />
          </div>
        </div>
        <div className="mq">
          <div className="mq-track rev">
            <img src="/assets/1cf6713e779a7f8a23157672d0b9df66.png" alt="More Adsmagnify client logos" />
            <img src="/assets/1cf6713e779a7f8a23157672d0b9df66.png" alt="" />
          </div>
        </div>
      </section>

      <section
        style={css(
          "max-width: 1200px; margin: 0 auto; padding: 72px 24px; display: flex; flex-direction: column; gap: 36px; align-items: center; text-align: center",
        )}
      >
        <h2
          style={css(
            "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(28px, 4vw, 42px); line-height: 1.12; text-transform: uppercase; max-width: 900px",
          )}
        >
          Every institute&apos;s enrollment runs on <span style={css("color: #338bff")}>four things.</span> Most get one right.
        </h2>
        <p style={css("margin: 0; color: #c9cfdc; max-width: 720px")}>
          If one link breaks, your batch starts half empty. We build all four as one connected flow.
        </p>
        <div className="flow" style={css("width: 100%; text-align: left")}>
          <div
            className="flow-step"
            style={css(
              "background: #0a0f1f; border: 1px solid #1c2236; border-top: 3px solid #338bff; border-radius: 14px; padding: 22px; display: flex; flex-direction: column; gap: 8px",
            )}
          >
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 30px; color: #338bff")}>01</div>
            <h3 style={css("margin: 0; font-size: 17px; text-transform: uppercase; letter-spacing: 0.04em")}>The Ads</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>Intake-timed Meta and Google campaigns on the One Campaign Method.</p>
          </div>
          <FlowArrow />
          <div
            className="flow-step"
            style={css(
              "background: #0a0f1f; border: 1px solid #1c2236; border-top: 3px solid #338bff; border-radius: 14px; padding: 22px; display: flex; flex-direction: column; gap: 8px",
            )}
          >
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 30px; color: #338bff")}>02</div>
            <h3 style={css("margin: 0; font-size: 17px; text-transform: uppercase; letter-spacing: 0.04em")}>The Response</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>Every lead reached on WhatsApp in minutes, before it goes cold.</p>
          </div>
          <FlowArrow />
          <div
            className="flow-step"
            style={css(
              "background: #0a0f1f; border: 1px solid #1c2236; border-top: 3px solid #338bff; border-radius: 14px; padding: 22px; display: flex; flex-direction: column; gap: 8px",
            )}
          >
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 30px; color: #338bff")}>03</div>
            <h3 style={css("margin: 0; font-size: 17px; text-transform: uppercase; letter-spacing: 0.04em")}>The Filter</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>A lead counts only when your counselor marks it real.</p>
          </div>
          <FlowArrow />
          <div
            className="flow-step"
            style={css(
              "background: #0a0f1f; border: 1px solid #338bff; border-top: 3px solid #ffc619; border-radius: 14px; padding: 22px; display: flex; flex-direction: column; gap: 8px",
            )}
          >
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 30px; color: #ffc619")}>04</div>
            <h3 style={css("margin: 0; font-size: 17px; text-transform: uppercase; letter-spacing: 0.04em")}>The Enrollment</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>Nurture plus Nirikshan reporting on cost per enrollment in AED.</p>
          </div>
        </div>
      </section>

      <section
        style={css(
          "max-width: 1200px; margin: 0 auto; padding: 56px 24px 72px; display: flex; flex-direction: column; gap: 36px; align-items: center; text-align: center",
        )}
      >
        <h2
          style={css(
            "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(28px, 4vw, 42px); line-height: 1.12; text-transform: uppercase; max-width: 900px",
          )}
        >
          Why UAE institutes with real results <span style={css("color: #338bff")}>start intakes half empty</span>
        </h2>
        <div style={css("width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; text-align: left")}>
          <div style={css("background: #0a0f1f; border: 1px solid #1c2236; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 8px")}>
            <h3 style={css("margin: 0; font-size: 19px")}>Leads come in, admissions don&apos;t</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>Your agency celebrates cost per lead. A hundred leads that never enroll don&apos;t fill a batch.</p>
          </div>
          <div style={css("background: #0a0f1f; border: 1px solid #1c2236; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 8px")}>
            <h3 style={css("margin: 0; font-size: 19px")}>WhatsApp enquiries go cold</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>Parents expect a reply in minutes. A next-day callback means they&apos;ve enrolled elsewhere.</p>
          </div>
          <div style={css("background: #0a0f1f; border: 1px solid #1c2236; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 8px")}>
            <h3 style={css("margin: 0; font-size: 19px")}>One ad for a multilingual market</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>Emirati, Arab expat, South Asian and Western families decide differently.</p>
          </div>
          <div style={css("background: #0a0f1f; border: 1px solid #1c2236; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 8px")}>
            <h3 style={css("margin: 0; font-size: 19px")}>Spend ignores the UAE calendar</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>Intakes, exam dates, Ramadan and summer travel shift demand. Flat spend peaks too late.</p>
          </div>
          <div style={css("background: #0a0f1f; border: 1px solid #1c2236; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 8px")}>
            <h3 style={css("margin: 0; font-size: 19px")}>No system, just spend</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>Boosted posts and a retainer aren&apos;t a pipeline. When the season ends, enrollments drop.</p>
          </div>
          <div style={css("background: #0a0f1f; border: 1px solid #1c2236; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 8px")}>
            <h3 style={css("margin: 0; font-size: 19px")}>Nobody owns the enrollment number</h3>
            <p style={css("margin: 0; color: #b6bdd0; font-size: 15px")}>Marketing blames counselors, counselors blame leads. Nobody is accountable for a paid seat.</p>
          </div>
        </div>
        <div style={css("display: flex; flex-direction: column; align-items: center; gap: 8px")}>
          <a
            href="/book"
            className="cta"
            style={css(
              "background: #ffc619; color: #05070d; padding: 16px 30px; border-radius: 12px; font-weight: 800; text-decoration: none; min-height: 50px; box-sizing: border-box; display: inline-flex; align-items: center; gap: 10px",
            )}
          >
            Find My Admission Leaks <span className="arw">→</span>
          </a>
          <span style={css("font-size: 13px; color: #b6bdd0")}>Free 1:1 audit. We show where students drop off. No strings attached.</span>
        </div>
      </section>

      <section id="results" style={css("background: #0a0f1f; border-top: 1px solid #1c2236; border-bottom: 1px solid #1c2236")}>
        <div
          style={css(
            "max-width: 1200px; margin: 0 auto; padding: 80px 24px; display: flex; flex-direction: column; gap: 36px; align-items: center; text-align: center",
          )}
        >
          <h2
            style={css(
              "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(28px, 4vw, 42px); line-height: 1.12; text-transform: uppercase; max-width: 900px",
            )}
          >
            Live dashboards. <span style={css("color: #338bff")}>Real enrollments.</span>
          </h2>
          <div style={css("width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; text-align: left")}>
            <a href="https://lp.adsmagnify.com/case-studies/whistling-woods" style={css("text-decoration: none; color: #ffffff; background: #05070d; border: 1px solid #1c2236; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column")}>
              <img src="/assets/549b1ea70e72cf4fcc41cf15d8dd2ebb.jpg" alt="Whistling Woods International campaign dashboard" style={css("width: 100%; aspect-ratio: 16 / 7; object-fit: cover; object-position: top; display: block; background: #ffffff")} />
              <div style={css("padding: 20px; display: flex; flex-direction: column; gap: 6px")}>
                <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: #338bff")}>CREATIVE EDUCATION · INDIA</div>
                <h3 style={css("margin: 0; font-family: Sora, sans-serif; font-size: 19px")}>Whistling Woods International</h3>
                <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 26px; color: #ffc619")}>378 admissions</div>
                <p style={css("margin: 0; color: #b6bdd0; font-size: 14px")}>2,000+ leads · Meta + Google · AED 40M+ reported revenue</p>
              </div>
            </a>
            <a href="https://lp.adsmagnify.com/case-studies/mirage-spa" style={css("text-decoration: none; color: #ffffff; background: #05070d; border: 1px solid #1c2236; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column")}>
              <img src="/assets/4b28f796e694f4c71ca95003e65919a2.jpg" alt="Mirage Spa Google Ads dashboard" style={css("width: 100%; aspect-ratio: 16 / 7; object-fit: cover; object-position: top; display: block; background: #ffffff")} />
              <div style={css("padding: 20px; display: flex; flex-direction: column; gap: 6px")}>
                <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: #338bff")}>BEAUTY EDUCATION · CANADA</div>
                <h3 style={css("margin: 0; font-family: Sora, sans-serif; font-size: 19px")}>Mirage Spa</h3>
                <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 26px; color: #ffc619")}>+25% registrations</div>
                <p style={css("margin: 0; color: #b6bdd0; font-size: 14px")}>40 → 50 annual · 1,020 conversions and leads · Google Search</p>
              </div>
            </a>
            <a href="https://lp.adsmagnify.com/case-studies/jeevan-sparsh" style={css("text-decoration: none; color: #ffffff; background: #05070d; border: 1px solid #1c2236; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column")}>
              <img src="/assets/7345785c970d3d76f8eed7045e605044.jpg" alt="Jeevan Sparsh Meta Ads dashboard" style={css("width: 100%; aspect-ratio: 16 / 7; object-fit: cover; object-position: top; display: block; background: #ffffff")} />
              <div style={css("padding: 20px; display: flex; flex-direction: column; gap: 6px")}>
                <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: #338bff")}>COURSE TRAINING · INDIA</div>
                <h3 style={css("margin: 0; font-family: Sora, sans-serif; font-size: 19px")}>Jeevan Sparsh</h3>
                <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 26px; color: #ffc619")}>15.85x ROAS</div>
                <p style={css("margin: 0; color: #b6bdd0; font-size: 14px")}>678 enquiries · 80 students · 4 completed batches</p>
              </div>
            </a>
            <a href="https://lp.adsmagnify.com/case-studies/adsmagnify-academy" style={css("text-decoration: none; color: #ffffff; background: #05070d; border: 1px solid #1c2236; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column")}>
              <img src="/assets/f696b8c65347a903d6ed1345bde23ff3.jpg" alt="Adsmagnify Academy Meta Ads dashboard" style={css("width: 100%; aspect-ratio: 16 / 7; object-fit: cover; object-position: top; display: block; background: #ffffff")} />
              <div style={css("padding: 20px; display: flex; flex-direction: column; gap: 6px")}>
                <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: #338bff")}>OUR OWN ACADEMY · INDIA</div>
                <h3 style={css("margin: 0; font-family: Sora, sans-serif; font-size: 19px")}>Adsmagnify Academy</h3>
                <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 26px; color: #ffc619")}>39.70x–45.37x ROAS</div>
                <p style={css("margin: 0; color: #b6bdd0; font-size: 14px")}>533 leads · 70–80 students · 10 batches from one funnel</p>
              </div>
            </a>
          </div>
          <div style={css("width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; text-align: left")}>
            <div style={css("border: 1px solid #1c2236; border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 4px")}>
              <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.08em; color: #338bff")}>PROFESSIONAL EDUCATION</div>
              <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 22px")}>320+ enrollments</div>
              <div style={css("color: #b6bdd0; font-size: 14px")}>-42% cost per enrolled student</div>
            </div>
            <div style={css("border: 1px solid #1c2236; border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 4px")}>
              <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.08em; color: #338bff")}>GHAT TRAVELS</div>
              <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 22px")}>17.16x ROAS</div>
              <div style={css("color: #b6bdd0; font-size: 14px")}>2,744 leads · 290 tickets</div>
            </div>
            <div style={css("border: 1px solid #1c2236; border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 4px")}>
              <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.08em; color: #338bff")}>UMI MATCHA</div>
              <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 22px")}>22.7x test ROAS</div>
              <div style={css("color: #b6bdd0; font-size: 14px")}>Paid social, SEO and funnel repair</div>
            </div>
            <div style={css("border: 1px solid #1c2236; border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 4px")}>
              <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.08em; color: #338bff")}>D2C APPAREL</div>
              <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 22px")}>+2,640% revenue</div>
              <div style={css("color: #b6bdd0; font-size: 14px")}>+541% add-to-cart growth</div>
            </div>
            <div style={css("border: 1px solid #1c2236; border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 4px")}>
              <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.08em; color: #338bff")}>COTTONKING</div>
              <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 22px")}>+400% sales</div>
              <div style={css("color: #b6bdd0; font-size: 14px")}>300K+ people reached</div>
            </div>
            <div style={css("border: 1px solid #1c2236; border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 4px")}>
              <div style={css("font-size: 12px; font-weight: 700; letter-spacing: 0.08em; color: #338bff")}>SUNACT CANCER CARE</div>
              <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 22px")}>374 conversions</div>
              <div style={css("color: #b6bdd0; font-size: 14px")}>693K+ search impressions</div>
            </div>
          </div>
          <div style={css("display: flex; flex-direction: column; align-items: center; gap: 8px")}>
            <a
              href="/book"
              className="cta"
              style={css(
                "background: #ffc619; color: #05070d; padding: 16px 30px; border-radius: 12px; font-weight: 800; text-decoration: none; min-height: 50px; box-sizing: border-box; display: inline-flex; align-items: center; gap: 10px",
              )}
            >
              Build My Student Funnel <span className="arw">→</span>
            </a>
            <span style={css("font-size: 13px; color: #b6bdd0")}>The same system, built for your next intake. No strings attached.</span>
          </div>
        </div>
      </section>

      <section style={css("max-width: 1200px; margin: 0 auto; padding: 88px 24px; display: flex; flex-direction: column; gap: 36px")}>
        <div style={css("display: flex; flex-direction: column; gap: 14px; align-items: center; text-align: center")}>
          <div style={css("font-size: 13px; font-weight: 700; letter-spacing: 0.14em; color: #ffc619")}>A PROMISE FROM AN ACADEMY OWNER</div>
          <h2
            style={css(
              "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(28px, 4vw, 42px); line-height: 1.12; text-transform: uppercase; max-width: 960px",
            )}
          >
            Most agency owners have never had to fill a batch. <span style={css("color: #338bff")}>I fill mine every intake.</span>
          </h2>
        </div>
        <div style={css("display: flex; flex-wrap: wrap; gap: 36px; align-items: center")}>
          <div style={css("flex: 1 1 460px; min-width: 0; display: flex; flex-direction: column; gap: 16px")}>
            <p style={css("margin: 0; color: #e3e7ef; font-size: 19px")}>
              &quot;I run Adsmagnify Academy. In 1.5 years we&apos;ve graduated 14 batches. So I know your problems from the inside: the demo no-shows, the parents who ask the fee and disappear, the counselor chasing cold numbers, the empty seats a week before the batch starts.
            </p>
            <p style={css("margin: 0; color: #e3e7ef; font-size: 19px")}>
              I&apos;m not guessing at your pain points. I live them every intake. That&apos;s why I&apos;ll put enrollments on the line for you, not just leads.&quot;
            </p>
            <div style={css("display: flex; align-items: center; gap: 14px")}>
              <img
                src="/assets/87bdbc98d5bbb5f72ea0f46ffce29749.jpg"
                alt="Vinay Hankare"
                style={css("width: 64px; height: 64px; border-radius: 999px; object-fit: cover; object-position: top; border: 2px solid #338bff")}
              />
              <div>
                <div style={css("font-weight: 700")}>Vinay Hankare</div>
                <div style={css("color: #b6bdd0; font-size: 14px")}>Founder, Adsmagnify and Adsmagnify Academy · In performance marketing since 2016</div>
              </div>
            </div>
          </div>
          <div style={css("flex: 1 1 460px; min-width: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px")}>
            <img src="/assets/0c9ce23d133a7915d2fa52330d390fc9.jpg" alt="Graduating batch with certificates at Adsmagnify Academy" style={css("grid-column: span 2; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 14px; display: block")} />
            <img src="/assets/325d770c7bc3215c645bef90e85347e9.jpg" alt="Live class at Adsmagnify Academy" style={css("width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 14px; display: block")} />
            <img src="/assets/5bf95c38abf3d0959ffce361b6f09c1d.jpg" alt="Students reviewing ad creatives" style={css("width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 14px; display: block")} />
            <img src="/assets/3670278da676ce8804206059fca8096d.jpg" alt="Batch celebration at Adsmagnify Academy" style={css("width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 14px; display: block")} />
            <img src="/assets/106a18a3d68237a2cab7c906016dba9a.jpg" alt="One-on-one guidance with a student" style={css("width: 100%; aspect-ratio: 4 / 3; object-fit: cover; object-position: top; border-radius: 14px; display: block")} />
          </div>
        </div>
      </section>

      <section style={css("background: #0a0f1f; border-top: 1px solid #1c2236; border-bottom: 1px solid #1c2236")}>
        <div
          style={css(
            "max-width: 1100px; margin: 0 auto; padding: 80px 24px; display: flex; flex-direction: column; gap: 28px; align-items: center; text-align: center",
          )}
        >
          <h2
            style={css(
              "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(28px, 4vw, 42px); line-height: 1.12; text-transform: uppercase; color: #338bff",
            )}
          >
            Be careful when you apply.
          </h2>
          <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(20px, 3vw, 28px); text-transform: uppercase; line-height: 1.2")}>
            This system changes how you run admissions.
          </div>
          <div style={css("width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px; text-align: left")}>
            <div style={css("display: flex; flex-direction: column; gap: 12px")}>
              <div style={css("font-size: 13px; font-weight: 700; letter-spacing: 0.1em")}>THIS IS FOR YOU IF</div>
              <div style={css("display: flex; gap: 10px")}>
                <span style={css("color: #338bff; font-weight: 700")}>✓</span>
                <span style={css("color: #c9cfdc")}>You have real student outcomes: admits, band scores, certifications.</span>
              </div>
              <div style={css("display: flex; gap: 10px")}>
                <span style={css("color: #338bff; font-weight: 700")}>✓</span>
                <span style={css("color: #c9cfdc")}>Your counselors can respond to leads the same day.</span>
              </div>
              <div style={css("display: flex; gap: 10px")}>
                <span style={css("color: #338bff; font-weight: 700")}>✓</span>
                <span style={css("color: #c9cfdc")}>You&apos;re ready to invest in ads tied to enrollments.</span>
              </div>
            </div>
            <div style={css("display: flex; flex-direction: column; gap: 12px")}>
              <div style={css("font-size: 13px; font-weight: 700; letter-spacing: 0.1em")}>IT&apos;S NOT FOR YOU IF</div>
              <div style={css("display: flex; gap: 10px")}>
                <span style={css("color: #ffc619; font-weight: 700")}>✕</span>
                <span style={css("color: #c9cfdc")}>You want the cheapest leads, whatever their quality.</span>
              </div>
              <div style={css("display: flex; gap: 10px")}>
                <span style={css("color: #ffc619; font-weight: 700")}>✕</span>
                <span style={css("color: #c9cfdc")}>Nobody on your team can follow up quickly.</span>
              </div>
              <div style={css("display: flex; gap: 10px")}>
                <span style={css("color: #ffc619; font-weight: 700")}>✕</span>
                <span style={css("color: #c9cfdc")}>You expect results without changing how admissions run.</span>
              </div>
            </div>
          </div>
          <div
            style={css(
              "width: 100%; border: 1px solid #ffc619; border-radius: 18px; padding: 28px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px",
            )}
          >
            <div style={css("font-size: 13px; font-weight: 700; letter-spacing: 0.1em; color: #ffc619")}>THE FULL-BATCH GUARANTEE</div>
            <div style={css("font-family: Sora, sans-serif; font-weight: 700; font-size: clamp(19px, 2.4vw, 24px)")}>
              80–120+ paid enrollments in 90 days, or we keep working free until you get them.
            </div>
            <div style={css("color: #b6bdd0; font-size: 14px")}>
              *Applies where the institute follows the agreed process: agreed ad budget, lead response time and counselor status updates. Ad spend paid to Meta and Google is not covered.
            </div>
          </div>
        </div>
      </section>

      <section
        style={css(
          "max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: flex; flex-direction: column; gap: 32px; align-items: center; text-align: center",
        )}
      >
        <h2
          style={css(
            "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(28px, 4vw, 42px); line-height: 1.12; text-transform: uppercase",
          )}
        >
          Book the call, <span style={css("color: #338bff")}>we build the rest.</span>
        </h2>
        <div style={css("width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 22px")}>
          <div style={css("display: flex; flex-direction: column; gap: 6px")}>
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 40px; color: #338bff")}>1</div>
            <div style={css("font-weight: 700")}>Strategy call</div>
            <div style={css("color: #b6bdd0; font-size: 14px")}>45 minutes. We show where admissions leak.</div>
          </div>
          <div style={css("display: flex; flex-direction: column; gap: 6px")}>
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 40px; color: #338bff")}>2</div>
            <div style={css("font-weight: 700")}>Target agreed</div>
            <div style={css("color: #b6bdd0; font-size: 14px")}>Enrollment target set for your budget and intake.</div>
          </div>
          <div style={css("display: flex; flex-direction: column; gap: 6px")}>
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 40px; color: #338bff")}>3</div>
            <div style={css("font-weight: 700")}>Funnel build</div>
            <div style={css("color: #b6bdd0; font-size: 14px")}>Ads, landing page, WhatsApp flow, tracking.</div>
          </div>
          <div style={css("display: flex; flex-direction: column; gap: 6px")}>
            <div style={css("font-family: Sora, sans-serif; font-weight: 800; font-size: 40px; color: #ffc619")}>4</div>
            <div style={css("font-weight: 700")}>Full batch</div>
            <div style={css("color: #b6bdd0; font-size: 14px")}>Spend peaks before your intake closes.</div>
          </div>
        </div>
      </section>

      <section id="faq" style={css("max-width: 760px; margin: 0 auto; padding: 40px 24px 80px; display: flex; flex-direction: column; gap: 24px")}>
        <h2
          style={css(
            "margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: clamp(28px, 4vw, 42px); text-transform: uppercase; text-align: center",
          )}
        >
          Questions
        </h2>
        <div style={css("display: flex; flex-direction: column; border-top: 1px solid #1c2236")}>
          {FAQ_ITEMS.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div key={question} style={css("border-bottom: 1px solid #1c2236")}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  style={css(
                    "width: 100%; background: transparent; border: 0; color: #ffffff; padding: 20px 0; display: flex; justify-content: space-between; align-items: center; gap: 16px; font-family: Inter, sans-serif; font-size: 17px; font-weight: 600; text-align: left; cursor: pointer; min-height: 44px",
                  )}
                >
                  {question}
                  <span style={css("color: #338bff; font-size: 22px")}>{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen ? <p style={css("margin: 0 0 20px; color: #b6bdd0; font-size: 15px")}>{answer}</p> : null}
              </div>
            );
          })}
        </div>
      </section>

      <section id="book" style={css("border-top: 1px solid #1c2236; background: #0a0f1f")}>
        <div
          style={css(
            "max-width: 1200px; margin: 0 auto; padding: 88px 24px; display: flex; flex-direction: column; gap: 26px; align-items: center; text-align: center",
          )}
        >
          <div style={css("font-size: 13px; font-weight: 700; letter-spacing: 0.14em; color: #338bff")}>
            NOW ONBOARDING UAE INSTITUTES · LIMITED SPOTS PER INTAKE
          </div>
          <div
            style={css(
              "font-family: Sora, sans-serif; font-weight: 800; font-style: italic; font-size: clamp(48px, 9vw, 112px); line-height: 0.95; letter-spacing: -0.03em; text-transform: uppercase",
            )}
          >
            Fill Every <span style={css("color: #338bff")}>Batch</span>
          </div>
          <p style={css("margin: 0; color: #c9cfdc; max-width: 640px")}>
            In 90 days, “where is my next student coming from?” is no longer your problem. You focus on delivery and sales. We keep the enrollments coming.
          </p>
          <div style={css("display: flex; flex-wrap: wrap; gap: 14px; justify-content: center")}>
            <div style={css("display: flex; flex-direction: column; align-items: center; gap: 8px")}>
              <a
                href="/book"
                className="cta"
                style={css(
                  "background: #ffc619; color: #05070d; padding: 20px 36px; border-radius: 14px; font-weight: 800; font-size: 19px; text-decoration: none; min-height: 56px; box-sizing: border-box; display: inline-flex; align-items: center; gap: 10px",
                )}
              >
                Book My Free 1:1 Strategy Call <span className="arw">→</span>
              </a>
              <span style={css("font-size: 13px; color: #b6bdd0")}>80–120+ enrollments in 90 days, or we work free. No strings attached.</span>
            </div>
            <a
              href="tel:+917700090236"
              style={css(
                "border: 1px solid #338bff; color: #ffffff; padding: 20px 28px; border-radius: 14px; font-weight: 700; text-decoration: none; min-height: 56px; box-sizing: border-box; display: inline-flex; align-items: center",
              )}
            >
              Call +91 77000 90236
            </a>
          </div>
          <p style={css("margin: 0; font-size: 14px; color: #b6bdd0")}>45-minute 1:1 call · No pitch deck · No lock-in</p>
        </div>
      </section>

      <footer style={css("border-top: 1px solid #1c2236")}>
        <div
          style={css(
            "max-width: 1200px; margin: 0 auto; padding: 32px 24px; display: flex; flex-wrap: wrap; gap: 14px 28px; justify-content: center; align-items: center; font-size: 14px",
          )}
        >
          <img src="/assets/f6ec0b519826a8ccfb1273d8df1b763c.png" alt="Adsmagnify" style={css("height: 30px; width: auto")} />
          <a href="mailto:adsmagnify@gmail.com" style={css("color: #b6bdd0")}>
            adsmagnify@gmail.com
          </a>
          <a href="https://wa.me/917700090236" target="_blank" rel="noopener" style={css("color: #b6bdd0")}>
            WhatsApp +91 7700090236
          </a>
        </div>
        <div style={css("max-width: 1000px; margin: 0 auto; padding: 0 24px 40px; font-size: 12px; color: #8a92a8; text-align: center")}>
          Adsmagnify Digital Solutions LLP · G12, Pil Court, Near GST Bhavan, Churchgate, Mumbai 400020. AED figures converted from INR and USD for reference. Results depend on your programme, follow-up capacity and market. © 2026
        </div>
      </footer>

      <div className="mbar-space" aria-hidden="true" />
      <div
        className="mbar"
        style={css(
          "position: fixed; left: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5,7,13,.94); border-top: 1px solid #1c2236; padding: 10px 14px calc(10px + env(safe-area-inset-bottom, 0px)); gap: 10px; align-items: center",
        )}
      >
        <a
          href="/book"
          className="cta"
          style={css(
            "flex: 1 1 auto; background: #ffc619; color: #05070d; padding: 14px 16px; border-radius: 12px; font-weight: 800; font-size: 16px; text-decoration: none; min-height: 50px; box-sizing: border-box; display: inline-flex; align-items: center; gap: 8px",
          )}
        >
          Book My Free 1:1 Call <span className="arw">→</span>
        </a>
        <a
          href="tel:+917700090236"
          aria-label="Call Adsmagnify"
          style={css(
            "flex: 0 0 50px; height: 50px; border: 1px solid #338bff; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center",
          )}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
