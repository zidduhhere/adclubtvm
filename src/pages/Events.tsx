import { Link } from "react-router-dom";
import { events, upcoming } from "../data/events";

const PLACEHOLDER_COUNT = 9;

const allCards = [
  ...events.map((e) => ({
    id: e.id,
    title: e.title,
    date: e.date,
    type: e.type,
    image: e.images?.[0] ?? `https://picsum.photos/seed/ev-${e.id}/600/800`,
    real: true,
  })),
  ...upcoming.map((u) => ({
    id: u.id,
    title: u.title,
    date: u.date,
    type: u.type,
    image: `https://picsum.photos/seed/up-${u.id}/600/800`,
    real: false,
  })),
];

const padded = [...allCards];
while (padded.length < PLACEHOLDER_COUNT) {
  const i = padded.length;
  padded.push({
    id: `PH${i}`,
    title: `Upcoming Event`,
    date: "2025",
    type: "Coming Soon",
    image: `https://picsum.photos/seed/ph${i}/600/800`,
    real: false,
  });
}

export default function Events() {
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

      {/* ── EVENTS GRID ────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {padded.map((card) => (
            <Link
              key={card.id}
              to={card.real ? `/events/${card.id}` : "#"}
              className="group flex flex-col rounded-2xl overflow-hidden border border-(--color-muted) bg-white hover:shadow-md transition-shadow"
            >
              {/* Image — tall portrait */}
              <div className="relative overflow-hidden h-[180px] md:h-[200px]"
                className="bg-(--color-muted)">
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
