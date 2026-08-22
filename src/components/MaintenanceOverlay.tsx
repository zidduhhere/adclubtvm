// import { Construction } from "lucide-react";
import loaPoster from "../assets/loa-poster.jpg";

export default function MaintenanceOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center gap-10 bg-bg px-6 py-12 text-center overflow-y-auto">
      <a
        href="https://loaawards.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-[400px] w-full transition-transform hover:scale-[1.02] active:scale-95"
      >
        <img
          src={loaPoster}
          alt="Love of Advertising Awards"
          className="w-full h-auto rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10"
        />
      </a>

      <img
        src="/logo.svg"
        alt="Advertising Club Trivandrum"
        className="h-16 w-auto sm:h-20 shrink-0"
      />

      <div className="flex flex-col gap-2">
        <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">
          We'll be right back
        </h1>
        <p className="max-w-md font-body text-sm text-muted sm:text-base">
          Advertising Club Trivandrum is currently undergoing maintenance.
          Please check back soon.
        </p>
      </div>
    </div>
  );
}
