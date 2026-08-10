import { useState } from "react";
import { Link } from "react-router-dom";
import { events, upcoming } from "../data/events";

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

  const displayCards = filter === "past"
    ? allCards.filter((c) => c.real)
    : filter === "upcoming"
    ? allCards.filter((c) => !c.real)
    : allCards;

  return (
    <main className="pt-16 min-h-screen bg-white">

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section
        className="w-full bg-white border-b border-(--color-muted) relative overflow-hidden bg-grid-pattern"
        style={{ minHeight: "92svh", display: "flex", flexDirection: "column" }}
      >
        <img src="/spiral-asset-1.svg" alt="" aria-hidden="true" 
          className="absolute -right-20 -top-20 w-96 opacity-10 pointer-events-none rotate-12" />
        <img src="/spiral-asset-1.svg" alt="" aria-hidden="true" 
          className="absolute -left-32 -bottom-32 w-[30rem] opacity-5 pointer-events-none -rotate-45" />

        <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-16">
          <div className="max-w-3xl w-full py-16 flex flex-col items-center text-center gap-5">
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-purple bg-white/80 px-4 py-1.5 rounded-full border border-purple/20">ACT</span>
            <h1 className="font-display font-bold text-bg-warm text-[clamp(3.5rem,8.5vw,6rem)] leading-[1.02] tracking-tight">
              Events
            </h1>
            <p className="font-body text-sm text-bg-warm/55 max-w-md">
              Landmark moments that bring Kerala's advertising community together.
            </p>
          </div>
        </div>
        <div className="border-t border-(--color-muted) overflow-hidden py-4">
          <div className="flex whitespace-nowrap">
            <span className="marquee-track inline-flex gap-0 font-display font-bold text-sm tracking-[0.2em] text-purple uppercase">
              {"EVENTS · AWARDS · NETWORKING · SEMINARS · TRIVANDRUM · KERALA · CREATIVITY · ADVERTISING · ".repeat(6)}
            </span>
          </div>
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
            <Link
              key={card.id}
              to={card.real ? `/events/${card.id}` : "#"}
              className="group flex flex-col rounded-2xl overflow-hidden border border-(--color-muted) bg-white hover:shadow-md transition-shadow"
            >
              {/* Image — 4:3 landscape */}
              <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "4/3" }}>
                {card.image && (
                  <img src={card.image} alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <p className="font-display font-bold text-bg-warm text-base uppercase tracking-tight leading-snug group-hover:text-purple transition-colors">
                  {card.title}
                </p>
                <p className="font-body text-xs font-medium text-purple">
                  Advertising Club Trivandrum
                </p>
                <p className="font-body text-xs text-bg-warm/50">
                  {card.date} · {card.type}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
