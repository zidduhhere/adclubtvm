import { useState } from "react";

export interface DomePhoto {
  src: string;
  event: string;
  date: string;
  type: string;
  key: string;
}

interface DomeGalleryProps {
  photos: DomePhoto[];
}

const RADIUS = 480;
const SPREAD_DEG = 156;
const IMG_W = 152;
const IMG_H = 108;

export function DomeGallery({ photos }: DomeGalleryProps) {
  const [selected, setSelected] = useState<DomePhoto | null>(null);
  const N = photos.length;

  function toggle(photo: DomePhoto) {
    setSelected((prev) => (prev?.key === photo.key ? null : photo));
  }

  return (
    <div className="relative bg-ink select-none">

      {/* ── Arc container ───────────────────────── */}
      <div
        className="relative mx-auto overflow-visible"
        style={{
          height: RADIUS + IMG_H + 40,
          maxWidth: 2 * RADIUS + IMG_W,
        }}
      >
        {/* SVG arc guide — subtle dome curve */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 w-full"
          style={{ height: RADIUS + IMG_H }}
          viewBox={`${-(RADIUS + IMG_W / 2)} ${-(RADIUS + IMG_H / 2)} ${
            2 * (RADIUS + IMG_W / 2)
          } ${RADIUS + IMG_H}`}
          preserveAspectRatio="xMidYMax meet"
        >
          <circle
            cx={0}
            cy={0}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        </svg>

        {/* Photos on the arc */}
        {photos.map((photo, i) => {
          const angleDeg =
            N > 1 ? -SPREAD_DEG / 2 + i * (SPREAD_DEG / (N - 1)) : 0;
          const angleRad = angleDeg * (Math.PI / 180);
          const cx = RADIUS * Math.sin(angleRad);
          const cy = RADIUS * Math.cos(angleRad);
          const isSelected = selected?.key === photo.key;
          const isDimmed = selected !== null && !isSelected;

          return (
            <button
              key={photo.key}
              aria-label={`View photo from ${photo.event}`}
              aria-pressed={isSelected}
              onClick={() => toggle(photo)}
              className="absolute focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
              style={{
                width: IMG_W,
                height: IMG_H,
                left: `calc(50% + ${cx}px - ${IMG_W / 2}px)`,
                bottom: cy - IMG_H / 2,
                transform: `rotate(${angleDeg}deg) scale(${isSelected ? 1.14 : 1})`,
                transformOrigin: "center center",
                transition:
                  "transform 0.45s cubic-bezier(0.25,1,0.5,1), opacity 0.35s ease",
                opacity: isDimmed ? 0.18 : 1,
                zIndex: isSelected ? 20 : N - i,
              }}
            >
              <img
                src={photo.src}
                alt={photo.event}
                className="w-full h-full object-cover block rounded-sm"
                style={{
                  filter: isSelected ? "none" : "grayscale(100%)",
                  transition: "filter 0.45s ease",
                  outline: isSelected
                    ? "2px solid rgba(255,255,255,0.75)"
                    : "none",
                  outlineOffset: "3px",
                }}
                loading="lazy"
              />
            </button>
          );
        })}

        {/* Horizon rule at base of dome */}
        <div
          className="absolute left-0 right-0 h-px bg-white/10"
          style={{ bottom: 0 }}
        />
      </div>

      {/* ── Caption — slides open on selection ──── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: selected ? "1fr" : "0fr",
          transition: "grid-template-rows 0.5s cubic-bezier(0.25,1,0.5,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="border-t border-white/10 px-6 md:px-10 pt-10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="block text-xs tracking-[0.35em] uppercase font-body text-white/35 mb-3">
                {selected?.type}
              </span>
              <h2
                className="font-display font-800 uppercase leading-[0.88] tracking-[-0.02em] text-paper"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                {selected?.event}
              </h2>
              <p className="mt-4 text-sm font-body font-300 text-white/35 tracking-wide">
                {selected?.date}
              </p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="self-start md:self-end shrink-0 text-xs tracking-[0.25em] uppercase font-body text-white/35 hover:text-white/70 transition-colors duration-200 border border-white/15 hover:border-white/35 px-4 py-2"
              aria-label="Deselect photo"
            >
              Close ×
            </button>
          </div>
        </div>
      </div>

      {/* ── Instruction hint (shown when nothing selected) ── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: selected ? "0fr" : "1fr",
          transition: "grid-template-rows 0.4s cubic-bezier(0.25,1,0.5,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p className="text-center py-6 text-xs tracking-[0.25em] uppercase font-body text-white/20">
            Select a photograph
          </p>
        </div>
      </div>
    </div>
  );
}
