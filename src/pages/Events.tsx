import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { events, upcoming } from "../data/events";

gsap.registerPlugin(ScrollTrigger);

const allCards = [
  ...events.map((e) => ({
    id: e.id,
    title: e.title,
    date: e.date,
    type: e.type,
    image: e.images?.[0] ?? "",
    real: true,
  })),
  ...upcoming.map((u) => ({
    id: u.id,
    title: u.title,
    date: u.date,
    type: u.type,
    image: "",
    real: false,
  })),
];

export default function Events() {
  const [filter, setFilter] = useState<"all" | "past" | "upcoming">("all");
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Parallax background elements
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-fast", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hero Text Stagger Intro
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.1,
        },
      );
    },
    { scope: container },
  );

  const displayCards =
    filter === "past"
      ? allCards.filter((c) => c.real)
      : filter === "upcoming"
        ? allCards.filter((c) => !c.real)
        : allCards;

  return (
    <main
      ref={container}
      className="min-h-screen bg-white text-black overflow-x-hidden font-body selection:bg-yellow selection:text-black pt-20"
    >
      {/* ── 1. HERO HEADER ── */}
      <section className="hero-section min-h-screen px-6 md:px-16 pt-32 pb-24 relative flex flex-col items-center justify-center text-center">
        {/* Wavy lines / Grid Backgrounds from Figma */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {/* Top Subtle Wavy Lines Accent */}
          <svg
            viewBox="0 0 1440 100"
            className="parallax-bg absolute top-20 left-0 w-full h-auto opacity-[0.15] stroke-black fill-none"
            preserveAspectRatio="none"
            style={{ strokeWidth: "1.5px" }}
          >
            <path d="M0,30 Q180,-10 360,30 T720,30 T1080,30 T1440,30" />
            <path d="M0,50 Q180,10 360,50 T720,50 T1080,50 T1440,50" />
            <path d="M0,70 Q180,30 360,70 T720,70 T1080,70 T1440,70" />
          </svg>

          {/* Left Grid */}
          <img
            src="/SVG/grid.svg"
            alt=""
            className="parallax-fast absolute top-4 left-0 h-[60%] md:h-[70%] object-contain -ml-[5%] lg:-ml-[10%]"
          />
          {/* Right Grid */}
          <img
            src="/SVG/grid-2.svg"
            alt=""
            className="parallax-fast absolute top-4 right-0 h-[40%] md:h-[50%] object-contain -mr-[5%] lg:-mr-[10%]"
          />
          {/* Bottom Right Grid */}
          <img
            src="/SVG/grid-3.svg"
            alt=""
            className="parallax-bg absolute bottom-32 right-0 h-[30%] md:h-[40%] object-contain -mr-[5%] lg:-mr-[10%]"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10 w-full">
          <div className="relative w-full flex justify-center">
            <h1
              className="font-display font-bold leading-[1.1] tracking-tighter w-full"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              <span className="hero-text inline-block">Our</span> <br />
              <span className="hero-text text-purple inline-block">
                Events
              </span>{" "}
            </h1>
          </div>
          <p className="hero-text font-body text-xl md:text-2xl text-black/60 max-w-2xl mx-auto mt-6">
            Landmark moments that bring Kerala's advertising community together.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="px-6 md:px-16 py-6 border-b border-(--color-muted) flex gap-3">
        {(["all", "past", "upcoming"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-body font-medium capitalize transition-colors ${
              filter === f
                ? "bg-purple text-white"
                : "border border-(--color-muted) text-bg-warm/60 hover:text-bg-warm"
            }`}
          >
            {f === "all" ? "All Events" : f === "past" ? "Past" : "Upcoming"}
          </button>
        ))}
      </div>

      {/* ── EVENTS GRID ────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {displayCards.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-(--color-muted) bg-white hover:shadow-md transition-shadow"
            >
              {/* Image — 4:3 landscape */}
              <div
                className="relative overflow-hidden bg-muted"
                style={{ aspectRatio: "4/3" }}
              >
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {!card.real && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/20">
                    <span className="text-xs font-body font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-purple text-purple bg-white/80">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-1.5">
                <p className="font-display font-bold text-bg-warm text-base uppercase tracking-tight leading-snug transition-colors">
                  {card.title}
                </p>
                <p className="font-body text-xs font-medium text-purple">
                  Advertising Club Trivandrum
                </p>
                <p className="font-body text-xs text-bg-warm/50">
                  {card.date} · {card.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
