import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageHero from "../components/PageHero";
import { events, upcoming } from "../data/events";

gsap.registerPlugin(ScrollTrigger);

const allCards = [
  ...events.map((e) => ({
    id: e.id,
    title: e.title,
    date: e.date,
    type: e.type,
    image: e.images?.[0] ?? "",
    description: e.description,
    real: true,
  })),
  ...upcoming.map((u) => ({
    id: u.id,
    title: u.title,
    date: u.date,
    type: u.type,
    image: "",
    description: u.description,
    real: false,
  })),
];

export default function Events() {
  const [filter, setFilter] = useState<"all" | "past" | "upcoming">("all");
  const [selectedEvent, setSelectedEvent] = useState<typeof allCards[0] | null>(null);
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
      <PageHero
        title={
          <>
            <span className="hero-text block">Our</span>
            <span className="hero-text block">Events</span>
          </>
        }
      />

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
              onClick={() => { if (card.real) setSelectedEvent(card); }}
              className={`group flex flex-col rounded-2xl overflow-hidden border border-(--color-muted) bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ${card.real ? "cursor-pointer" : ""}`}
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

      {/* ── EVENT OVERLAY MODAL ── */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="fixed top-0 right-0 z-[101] w-full max-w-2xl h-full bg-white border-l border-black/5 shadow-2xl overflow-y-auto flex flex-col"
            >
              <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 px-8 py-6 border-b border-black/5 flex justify-between items-center">
                <span className="font-display font-bold uppercase tracking-widest text-xs text-black/40">Event Details</span>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group"
                  aria-label="Close modal"
                >
                  <span className="font-body font-bold text-xl leading-none group-hover:-rotate-90 transition-transform duration-300">×</span>
                </button>
              </div>

              <div className="p-8 md:p-14 flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="font-body text-purple text-xs font-bold tracking-widest uppercase inline-block border border-purple/20 px-3 py-1 rounded-full self-start">
                      {selectedEvent.type}
                    </span>
                    <p className="font-body text-black/50 text-sm font-medium tracking-wide uppercase mt-2">
                      {selectedEvent.date}
                    </p>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] text-black">
                    {selectedEvent.title}
                  </h2>
                </div>

                {selectedEvent.image && (
                  <div className="w-full aspect-[16/9] relative overflow-hidden bg-black/5 rounded-xl">
                    <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="font-body text-lg md:text-xl text-black/80 leading-relaxed flex flex-col gap-6">
                  {selectedEvent.description?.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
