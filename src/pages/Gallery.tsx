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
      <section
        className="w-full bg-white px-6 md:px-16 border-b border-muted"
        style={{ minHeight: "92svh", display: "flex", flexDirection: "column" }}
      >
        <div className="flex-1 flex items-center justify-center px-6 md:px-16">
          <div className="max-w-3xl w-full py-16 flex flex-col items-center text-center gap-5">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-purple">
            Visual Archive
          </p>
          <h1 className="font-display font-bold text-bg-warm text-[clamp(3.5rem,8.5vw,6rem)] leading-[1.02] tracking-tight">
            Gallery
          </h1>
          <p className="font-body text-sm text-bg-warm/55">
            {allPhotos.length} photographs across {events.length}{" "}
            {events.length === 1 ? "event" : "events"}
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

      {/* ── DOME GALLERY ─────────────────────────────────────── */}
      <DomeGallery photos={allPhotos} />
    </main>
  );
}
