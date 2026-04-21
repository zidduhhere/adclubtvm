import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id) ?? events[0];

  const galleryImages = event.images ?? Array.from({ length: 8 }, (_, i) =>
    `https://picsum.photos/seed/gal-${event.id}-${i}/600/800`
  );

  return (
    <main className="pt-16 min-h-screen bg-surface">

      {/* ── BREADCRUMB ─────────────────────────────────────────── */}
      <div className="flex justify-center pt-8 pb-2 px-6">
        <Link to="/events"
          className="inline-flex items-center gap-2 border border-(--color-muted) text-bg-warm/60 text-xs font-body font-medium tracking-wide px-4 py-2 rounded-full hover:border-purple hover:text-purple transition-colors">
          <span>←</span>
          <span>{event.title}</span>
        </Link>
      </div>

      {/* ── HERO IMAGE ─────────────────────────────────────────── */}
      <section className="px-6 md:px-16 pt-6">
        <div className="w-full h-[200px] md:h-[280px] rounded-3xl overflow-hidden shadow-md bg-muted">
          <img src={galleryImages[0] ?? `https://picsum.photos/seed/${event.id}-hero/1400/500`}
            alt={event.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* ── TITLE BAR ──────────────────────────────────────────── */}
      <section className="px-6 md:px-16 mt-6">
        <div className="w-full rounded-2xl px-8 py-5 bg-white border border-(--color-muted)">
          <h1 className="font-display font-bold text-bg-warm text-[clamp(1.6rem,4vw,3rem)] tracking-tight uppercase">
            {event.title}
          </h1>
          <p className="font-body text-xs text-purple mt-1 tracking-wide font-medium">
            {event.date} · {event.type}
          </p>
        </div>
      </section>

      {/* ── DESCRIPTION ────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-14 border-b border-(--color-muted)">
        <div className="max-w-3xl flex flex-col gap-5">
          {[
            event.description,
            "This milestone event brought together leading voices from across Kerala's advertising and media industry. Professionals, creatives, strategists, and brand managers gathered to celebrate the founding of a new chapter in Trivandrum's advertising story.",
            "The evening featured inspiring addresses, live unveilings, and a preview of the ambitious programs ACT plans to run — from networking evenings and industry seminars to the prestigious LOA Awards recognising creative excellence.",
          ].map((text, i) => (
            <p key={i} className="font-body text-base text-bg-warm/70 leading-relaxed">{text}</p>
          ))}
        </div>
      </section>

      {/* ── SPEAKER DETAILS ────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 py-20 border-b border-(--color-muted) overflow-hidden">
        <img src="/Vector.svg" alt="" aria-hidden="true"
          className="absolute right-0 top-0 w-40 opacity-10 pointer-events-none select-none" />

        <h2 className="font-body italic text-purple text-xl mb-10 tracking-wide">
          Speaker Details
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
          {/* Portrait */}
          <div className="w-full md:w-48 shrink-0 h-[200px] md:h-[240px] rounded-2xl overflow-hidden shadow-sm bg-muted">
            <img src={`https://picsum.photos/seed/speaker-${event.id}/400/600`} alt="Speaker"
              className="w-full h-full object-cover" />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="w-full rounded-xl px-6 py-4 bg-white border border-(--color-muted)">
              <p className="font-display font-bold text-bg-warm text-2xl tracking-tight">Mohanlal</p>
              <p className="font-body text-xs text-purple mt-1 tracking-wide font-medium">
                Chief Guest · Actor &amp; Cultural Icon
              </p>
            </div>
            <p className="font-body text-base text-bg-warm/70 leading-relaxed">
              One of the most celebrated figures in Indian cinema, Mohanlal graced the ACT launch as chief guest — lending the event an iconic moment and signalling the broader cultural significance of advertising and creative communication in Kerala's society.
            </p>
            <p className="font-body text-base text-bg-warm/70 leading-relaxed">
              His presence underscored the vision behind ACT: to connect advertising not just as a trade, but as a cultural force that shapes how stories are told in contemporary Kerala.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {[{ label: "IG" }, { label: "in" }, { label: "X" }].map(({ label }) => (
                <a key={label} href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-(--color-muted) text-xs font-body font-bold text-bg-warm/60 hover:border-purple hover:text-purple transition-colors bg-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT GALLERY ──────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
        <h2 className="font-body italic text-purple text-xl mb-10 tracking-wide">
          Event Gallery
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {/* Row 1: tall | stacked-2 | tall */}
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-sm" style={{ height: "280px", backgroundColor: "var(--color-muted)" }}>
            <img src={galleryImages[0]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: "135px", backgroundColor: "var(--color-muted)" }}>
            <img src={galleryImages[1]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-sm" style={{ height: "280px", backgroundColor: "var(--color-muted)" }}>
            <img src={galleryImages[2]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: "135px", backgroundColor: "var(--color-muted)" }}>
            <img src={galleryImages[3]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Row 2: tall | stacked-2 | tall */}
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-sm" style={{ height: "280px", backgroundColor: "var(--color-muted)" }}>
            <img src={galleryImages[4]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: "135px", backgroundColor: "var(--color-muted)" }}>
            <img src={galleryImages[5]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-sm" style={{ height: "280px", backgroundColor: "var(--color-muted)" }}>
            <img src={galleryImages[6]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: "135px", backgroundColor: "var(--color-muted)" }}>
            <img src={galleryImages[7] ?? galleryImages[0]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* ── ADDONS ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="font-body italic text-purple text-xl mb-10 tracking-wide">
          Addons
        </h2>

        <div className="flex flex-col gap-4">
          {[
            { label: "Event Brochure", sub: "Download PDF · 2.4 MB" },
            { label: "Press Release", sub: "Full coverage · Kerala Media" },
            { label: "Photo Album", sub: "Full gallery · 120 photos" },
          ].map((item) => (
            <div key={item.label}
              className="w-full flex items-center justify-between px-6 py-5 rounded-xl bg-white border border-(--color-muted) cursor-pointer hover:border-purple hover:shadow-sm transition-all">
              <div>
                <p className="font-display font-bold text-bg-warm text-base tracking-tight">{item.label}</p>
                <p className="font-body text-xs text-bg-warm/50 mt-0.5">{item.sub}</p>
              </div>
              <span className="text-purple text-sm font-bold">↓</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
