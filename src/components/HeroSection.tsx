import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

gsap.registerPlugin();

// ── Interactive eyeballs (pupils follow cursor) ───────────────────────────
// Exact positions extracted from eye-balls.svg (viewBox 0 0 171 177)
const EYES = [
  { scleraR: 33.6, cx: 53.4, cy: 53.4, fill: "#EEE8E0" },
  { scleraR: 38.4, cx: 53.4, cy: 131.3, fill: "#EEE8E0" },
  { scleraR: 39.0, cx: 131.3, cy: 131.3, fill: "#EEE8E0" },
  { scleraR: 39.0, cx: 131.3, cy: 53.4, fill: "#EEE8E0" },
];
const PUPIL_R = 19;

function InteractiveEyeballs({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const pupilRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const SVG_W = 171;
    const SVG_H = 177;

    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();

      // Scale from screen px to SVG units
      const scaleX = SVG_W / rect.width;
      const scaleY = SVG_H / rect.height;

      // Cursor in SVG coordinate space
      const cursorSvgX = (e.clientX - rect.left) * scaleX;
      const cursorSvgY = (e.clientY - rect.top) * scaleY;

      EYES.forEach((eye, i) => {
        const pupil = pupilRefs.current[i];
        if (!pupil) return;

        const dx = cursorSvgX - eye.cx;
        const dy = cursorSvgY - eye.cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        // Max the pupil can travel inside the sclera
        const maxMove = eye.scleraR - PUPIL_R - 3;
        const travel = Math.min(dist, maxMove * 4) / (maxMove * 4) * maxMove;

        gsap.to(pupil, {
          attr: {
            cx: eye.cx + (dx / dist) * travel,
            cy: eye.cy + (dy / dist) * travel,
          },
          duration: 0.2,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 171 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Yellow background to match original */}
      <rect x="14.39" y="14.39" width="155.91" height="155.91" fill="#FEC812" />

      {EYES.map((eye, i) => (
        <g key={i}>
          <circle cx={eye.cx} cy={eye.cy} r={eye.scleraR} fill={eye.fill} />
          <circle
            ref={(el) => { pupilRefs.current[i] = el; }}
            cx={eye.cx}
            cy={eye.cy}
            r={PUPIL_R}
            fill="#8552A1"
          />
        </g>
      ))}
    </svg>
  );
}


// ── Decorative circle cluster (pink card) ─────────────────────────────────
function CircleCluster() {
  return (
    <svg width="310" height="310" viewBox="0 0 310 310" fill="none">
      <circle cx="155" cy="155" r="152" stroke="#6B308E" strokeWidth="1.5" />
      <circle cx="155" cy="155" r="105" stroke="#6B308E" strokeWidth="1.5" />
      <circle cx="155" cy="155" r="75" stroke="#FEC812" strokeWidth="2" />
      <circle cx="155" cy="155" r="42" fill="#6B308E" />
      <circle cx="230" cy="155" r="19" fill="#FEC812" />
      <circle cx="80" cy="155" r="19" stroke="#6B308E" strokeWidth="1.5" />
      <circle cx="155" cy="80" r="25" stroke="#FEC812" strokeWidth="1.5" />
      <circle cx="155" cy="230" r="19" stroke="#6B308E" strokeWidth="1.5" />
    </svg>
  );
}

// ── Main hero section ─────────────────────────────────────────────────────
export default function HeroSection() {
  const eyeContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        className="w-full bg-white px-5 md:px-8 pt-20 md:pt-24 pb-8"
        style={{ minHeight: "100svh" }}
      >
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row gap-3 md:gap-4"
          style={{ minHeight: "calc(100svh - 7rem)" }}
        >
          {/* ── LEFT YELLOW CARD ── */}
          <div
            className="relative md:flex-[1.85] rounded-3xl overflow-hidden flex flex-col justify-start py-14 md:py-24"
            style={{ background: "#FEC812", minHeight: "min(62svh, 480px)" }}
          >
            {/* Headline + button */}
            <div className="px-8 md:px-10 flex flex-col gap-4 relative z-10">
              <h1
                className="font-display font-semibold text-white leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 6vw, 6rem)", letterSpacing: "-0.04em" }}
              >
                For the{" "}
                <img
                  src="/heart-vector.svg"
                  alt="love"
                  className="inline-block"
                  style={{ height: "0.78em", width: "0.86em", verticalAlign: "middle", marginTop: "-0.08em", objectFit: "contain" }}
                />
                {" "}of
                <br />
                Advertising
              </h1>

              <div>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] text-sm font-display font-bold text-white  hover:opacity-90 active:scale-95 cursor-pointer "
                  style={{ background: "#6B308E", letterSpacing: "-0.02em" }}
                >
                  Apply Awards
                </Link>
              </div>
            </div>

            {/* Interactive eyeballs — responsive size */}
            <div
              ref={eyeContainerRef}
              className="absolute bottom-0 right-0 rounded-br-3xl overflow-hidden"
              style={{ width: "min(416px, 58vw)", height: "min(416px, 58vw)" }}
            >
              <InteractiveEyeballs containerRef={eyeContainerRef} />
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-row md:flex-col gap-3 md:gap-4 md:flex-1">

            {/* Top — purple "Our Events" card */}
            <div
              className="relative flex-1 rounded-3xl overflow-hidden flex flex-col justify-end p-5 md:p-8"
              style={{ background: "#6B308E", minHeight: 160 }}
            >
              <img
                src="/aseset-5-starburst.svg"
                alt=""
                className="absolute -top-6 -right-3 w-32 h-32 md:w-60 md:h-60 object-contain"
              />
              <p
                className="font-display font-bold leading-[1.05]"
                style={{ fontSize: "clamp(1.8rem, 3.2vw, 3rem)", letterSpacing: "-0.05em", color: "#FEC812" }}
              >
                Our<br />Events
              </p>
            </div>

            {/* Bottom — pink card */}
            <div
              className="relative flex-1 rounded-3xl overflow-hidden flex items-end p-5 md:p-8"
              style={{ background: "#DD85B7", minHeight: 140 }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                <CircleCluster />
              </div>
              <Link
                to="/events"
                className="relative z-10 text-white font-display font-bold text-sm hover:opacity-70 transition-opacity"
                style={{ letterSpacing: "-0.01em" }}
              >
                View All →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
