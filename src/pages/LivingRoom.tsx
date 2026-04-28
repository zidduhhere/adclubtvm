import { motion } from "framer-motion";
import { sessions } from "../data/livingroom";
import SectionTag from "../components/SectionTag";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const livingRoomDescription = "An intimate monthly dialogue series where senior advertising professionals from across Kerala share unfiltered stories, hard lessons, and the truths behind their careers — in a living room setting, away from the conference stage.";

export default function LivingRoom() {
  const upcoming = sessions.find((s) => s.status === "upcoming");
  const past = sessions.filter((s) => s.status === "past");

  return (
    <main className="pt-16 min-h-screen bg-surface">

      {/* ── HERO ── */}
      <section className="relative px-6 md:px-16 pt-16 pb-20 border-b border-(--color-muted) overflow-hidden">
        <img src="/spiral-asset-1.svg" alt="" aria-hidden="true"
          className="absolute right-8 top-8 w-48 opacity-10 pointer-events-none select-none" />
        <div className="relative z-10 max-w-3xl">
          <SectionTag>Flagship Programme</SectionTag>
          <h1 className="font-display font-bold text-bg-warm leading-[1.05] text-[clamp(2.8rem,7vw,5.5rem)] tracking-tight mt-4">
            The Living{" "}
            <span className="text-coral">Room</span>
          </h1>
          <p className="font-body text-bg-warm/65 text-base leading-relaxed mt-5 max-w-xl">
            {livingRoomDescription}
          </p>
        </div>
      </section>

      {/* ── FORMAT ── */}
      <section className="px-6 md:px-16 py-16 border-b border-(--color-muted) bg-yellow/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: "Format", value: "Intimate fireside chat or panel", icon: "🎙️" },
            { label: "Frequency", value: "Monthly", icon: "📅" },
            { label: "Audience", value: "ACT members + invited guests", icon: "👥" },
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-2xl border border-(--color-muted) bg-white flex flex-col gap-2">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-body text-xs text-purple uppercase tracking-[0.15em]">{item.label}</p>
              <p className="font-display font-bold text-bg-warm text-lg tracking-tight">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── UPCOMING SESSION ── */}
      {upcoming && (
        <section className="px-6 md:px-16 py-20 border-b border-(--color-muted) bg-purple-deep">
          <SectionTag color="coral">Next Session</SectionTag>
          <h2 className="font-display font-bold text-white text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-8">
            {upcoming.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-body text-xs text-white/50 uppercase tracking-[0.15em]">Theme</p>
                <p className="font-display font-bold text-yellow text-lg">{upcoming.theme}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-body text-xs text-white/50 uppercase tracking-[0.15em]">Speaker</p>
                <p className="font-display font-bold text-white text-base">{upcoming.speaker}</p>
                <p className="font-body text-sm text-white/60">{upcoming.speakerRole}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-body text-xs text-white/50 uppercase tracking-[0.15em]">Date</p>
                <p className="font-body text-sm text-white/70">{upcoming.date}</p>
              </div>
              <a
                href={upcoming.registrationLink ?? "mailto:adclubtrivandrum@gmail.com?subject=Living%20Room%20Registration"}
                className="self-start mt-2 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-purple-deep bg-yellow rounded-full transition-opacity hover:opacity-85"
              >
                Register Interest →
              </a>
            </div>
            <div className="font-body text-white/60 text-sm leading-relaxed">
              {upcoming.summary}
            </div>
          </div>
        </section>
      )}

      {/* ── PAST SESSIONS ── */}
      {past.length > 0 && (
        <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
          <SectionTag>Session Archive</SectionTag>
          <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12">
            Past sessions
          </h2>
          <div className="flex flex-col gap-5">
            {past.map((session, i) => (
              <motion.div
                key={session.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-7 rounded-2xl border border-(--color-muted) bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-1.5">
                  <p className="font-body text-xs text-purple uppercase tracking-[0.15em]">{session.date}</p>
                  <p className="font-body text-xs text-bg-warm/50 uppercase tracking-[0.1em]">{session.theme}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-display font-bold text-bg-warm text-xl tracking-tight">{session.title}</p>
                  <p className="font-body text-sm text-purple">{session.speaker} · {session.speakerRole}</p>
                  <p className="font-body text-sm text-bg-warm/60 leading-relaxed mt-1">{session.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA: BECOME A SPEAKER ── */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-xl">
          <SectionTag>Speak at Living Room</SectionTag>
          <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-4">
            Want to share your story?
          </h2>
          <p className="font-body text-bg-warm/65 text-base leading-relaxed mb-8">
            The Living Room is always looking for voices from Kerala's advertising and media industry. If you have a story, a lesson, or a perspective worth sharing with a room full of peers, we'd love to hear from you.
          </p>
          <a
            href="mailto:adclubtrivandrum@gmail.com?subject=Living%20Room%20Speaker%20Proposal"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-white bg-coral rounded-full transition-opacity hover:opacity-85"
          >
            Propose a Session →
          </a>
        </div>
      </section>

    </main>
  );
}
