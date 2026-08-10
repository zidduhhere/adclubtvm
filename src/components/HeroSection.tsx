import { Link } from "react-router-dom";

const marqueeText = "EVENTS · AWARDS · NETWORKING · SEMINARS · TRIVANDRUM · KERALA · CREATIVITY · ADVERTISING · ";

export default function HeroSection() {
  return (
    <section
      className="w-full bg-white border-b border-muted relative overflow-hidden bg-grid-pattern"
      style={{ minHeight: "92svh", display: "flex", flexDirection: "column" }}
    >
      {/* Floating assets */}
      <img src="/aseset-5-starburst.svg" alt="" aria-hidden="true" 
        className="absolute top-12 left-10 w-24 md:w-32 opacity-80 animate-[spin_30s_linear_infinite] pointer-events-none" />
      <img src="/eye-balls.svg" alt="" aria-hidden="true" 
        className="absolute bottom-32 right-12 w-28 md:w-40 opacity-70 pointer-events-none" />

      {/* Centered content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-16">
        <div className="max-w-3xl w-full py-20 md:py-0 flex flex-col items-center text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-purple mb-10 bg-white/80 px-4 py-1.5 rounded-full border border-purple/20">
            Advertising Club Trivandrum
          </p>
          <div className="relative inline-block text-left my-4">
            <img
              src="/love-asset-4.svg"
              alt=""
              className="absolute z-0 pointer-events-none"
              style={{
                width: "50%",
                maxWidth: "none",
                top: "50%",
                left: "45%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <h1
              className="font-display font-bold text-purple leading-[1] tracking-tight relative z-10"
              style={{ fontSize: "clamp(3.5rem, 6vw, 6.5rem)" }}
            >
              <div className="block">For</div>
              <div className="block">the</div>
              <div className="block">Love of</div>
              <div className="block">Advertising.</div>
            </h1>
          </div>
          <p className="font-body text-base text-bg-warm/50 mt-8 max-w-sm leading-relaxed text-center">
            Kerala's premier community for advertising and media professionals — based in Trivandrum.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="https://loaawards.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-medium text-white bg-purple hover:opacity-85 transition-opacity"
            >
              Apply for Awards →
            </a>
            <Link
              to="/about"
              className="text-sm font-body text-bg-warm/45 hover:text-bg-warm transition-colors"
            >
              About ACT
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-muted overflow-hidden py-4">
        <div className="flex whitespace-nowrap">
          <span className="marquee-track inline-flex gap-0 font-display font-bold text-sm tracking-[0.2em] text-purple uppercase">
            {marqueeText.repeat(6)}
          </span>
        </div>
      </div>
    </section>
  );
}
