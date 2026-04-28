import { useState } from "react";
import { Link } from "react-router-dom";
import { events, upcoming } from "../data/events";

const allCards = [
  ...events.map((e) => ({
    id: e.id,
    title: e.title,
    date: e.date,
    type: e.type,
    image: e.images?.[0] ?? `https://placehold.co/600x800/1a1a2e/ffffff?text=Event`,
    real: true,
  })),
  ...upcoming.map((u) => ({
    id: u.id,
    title: u.title,
    date: u.date,
    type: u.type,
    image: `https://placehold.co/600x800/2d1b69/ffffff?text=Upcoming`,
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
    <main className="pt-16 min-h-screen bg-surface">

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 pt-14 pb-10 border-b border-(--color-muted) overflow-hidden">
        <img src="/Group.svg" alt="" aria-hidden="true"
          className="absolute right-0 top-0 h-full opacity-8 pointer-events-none select-none" />
        <h1 className="font-display font-bold text-bg-warm text-[clamp(3.5rem,10vw,6rem)] leading-none tracking-tight">
          Events
        </h1>
        <p className="font-body text-sm text-bg-warm/60 mt-3 max-w-md">
          Landmark moments that bring Kerala's advertising community together.
        </p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayCards.map((card) => (
            <Link
              key={card.id}
              to={card.real ? `/events/${card.id}` : "#"}
              className="group flex flex-col rounded-2xl overflow-hidden border border-(--color-muted) bg-white hover:shadow-md transition-shadow"
            >
              {/* Image — tall portrait */}
              <div className="relative overflow-hidden h-[180px] md:h-[200px] bg-muted">
                <img src={card.image} alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
