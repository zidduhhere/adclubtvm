import { events } from "../data/events";
import { DomeGallery, type DomePhoto } from "../components/ui/dome-gallery";

const allPhotos: DomePhoto[] = events.flatMap((event) =>
  (event.images ?? []).map((src, i) => ({
    src,
    event: event.title,
    date: event.date,
    type: event.type,
    key: `${event.id}-${i}`,
  }))
);

export default function Gallery() {
  return (
    <main className="pt-14 min-h-screen">
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="px-6 md:px-10 pt-16 pb-12 border-b border-rule">
        <p className="text-xs tracking-[0.3em] uppercase font-body text-mid mb-3">
          Visual Archive
        </p>
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-800 uppercase leading-[0.9] tracking-[-0.02em] text-ink">
          Gallery
        </h1>
        <p className="mt-4 text-sm font-body text-mid font-300">
          {allPhotos.length} photographs across {events.length}{" "}
          {events.length === 1 ? "event" : "events"}
        </p>
      </section>

      {/* ── DOME GALLERY ─────────────────────────────────────── */}
      <DomeGallery photos={allPhotos} />
    </main>
  );
}
