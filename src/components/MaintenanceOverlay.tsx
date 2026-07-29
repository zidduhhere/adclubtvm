import { Construction } from "lucide-react";

export default function MaintenanceOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center gap-6 bg-bg px-6 text-center">
      <img src="/logo.svg" alt="Advertising Club Trivandrum" className="h-10 w-auto sm:h-12" />

      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow/60 bg-purple/10">
        <Construction className="h-8 w-8 text-yellow" />
      </div>

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
