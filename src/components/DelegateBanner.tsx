import { useEffect, useRef, useState } from "react";
import { Ticket, ArrowRight, X } from "lucide-react";

const DELEGATE_FORM_URL = "https://forms.gle/7TPSFbBCbVJcx71f7";

interface DelegateBannerProps {
  onDismiss?: () => void;
}

export default function DelegateBanner({ onDismiss }: DelegateBannerProps) {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem("act_loa_delegate_banner_dismissed") !== "true";
    } catch {
      return true;
    }
  });

  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) {
      document.documentElement.style.setProperty("--banner-h", "0px");
      return;
    }

    const updateBannerHeight = () => {
      if (bannerRef.current) {
        const height = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--banner-h", `${height}px`);
      }
    };

    updateBannerHeight();

    const observer = new ResizeObserver(() => {
      updateBannerHeight();
    });

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    window.addEventListener("resize", updateBannerHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateBannerHeight);
      document.documentElement.style.setProperty("--banner-h", "0px");
    };
  }, [visible]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(false);
    try {
      sessionStorage.setItem("act_loa_delegate_banner_dismissed", "true");
    } catch {}
    onDismiss?.();
  };

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      className="relative w-full overflow-hidden border-b border-white/15 bg-gradient-to-r from-[#2c1347] via-[#6B308E] to-[#2c1347] text-white shadow-md transition-all duration-300"
    >
      {/* Background grid pattern matching ACT theme */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay bg-grid-pattern-dark"
        aria-hidden="true"
      />

      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 w-80 h-16 bg-[#FEC812]/15 rounded-full blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex items-center justify-between gap-3 px-4 py-2 sm:px-8 sm:py-2.5 max-w-7xl">
        {/* Main Clickable Announcement */}
        <a
          href={DELEGATE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-1 items-center justify-center sm:justify-start gap-2.5 sm:gap-3.5 min-w-0 no-underline cursor-pointer"
          aria-label="Register for LOA Awards 2025 Delegate Pass"
        >
          {/* LOA Badge with pulsing live beacon */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow px-2.5 py-0.5 text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-wider text-black shadow-xs shrink-0">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple" />
            </span>
            <Ticket className="w-3 h-3 hidden sm:inline-block text-black" />
            <span>LOA 2025</span>
          </span>

          {/* Copy text */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-body truncate">
            <span className="font-medium text-white/95 truncate">
              <span className="font-bold text-yellow sm:text-white">Delegate Pass Registration</span>
              <span className="hidden md:inline text-white/85">
                {" "}— Reserve your seat for Kerala&apos;s biggest advertising celebration!
              </span>
              <span className="inline md:hidden text-white/85"> is now live!</span>
            </span>
          </div>

          {/* Call to action pill button */}
          <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-yellow px-3 py-1 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-display font-bold uppercase tracking-wider text-black transition-all duration-200 group-hover:bg-white group-hover:text-purple group-hover:shadow-[0_2px_12px_rgba(254,200,18,0.4)] shrink-0">
            <span>Get Pass</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </a>

        {/* Close Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
          aria-label="Dismiss banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
