import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { sessions } from "../data/livingroom";
import SectionTag from "../components/SectionTag";

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const livingRoomDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

export default function LivingRoom() {
  const upcoming = sessions.find((s) => s.status === "upcoming");
  const past = sessions.filter((s) => s.status === "past");
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax background elements
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-fast", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hero Text Stagger Intro
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.1,
        },
      );
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="min-h-screen bg-white text-black overflow-x-hidden font-body selection:bg-yellow selection:text-black pt-20"
    >
      {/* ── 1. HERO HEADER ── */}
      <section className="hero-section min-h-screen px-6 md:px-16 pt-32 pb-24 relative flex flex-col items-center justify-center text-center">
        {/* Wavy lines / Grid Backgrounds from Figma */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <svg
            viewBox="0 0 1440 100"
            className="parallax-bg absolute top-20 left-0 w-full h-auto opacity-[0.15] stroke-black fill-none"
            preserveAspectRatio="none"
            style={{ strokeWidth: "1.5px" }}
          >
            <path d="M0,30 Q180,-10 360,30 T720,30 T1080,30 T1440,30" />
            <path d="M0,50 Q180,10 360,50 T720,50 T1080,50 T1440,50" />
            <path d="M0,70 Q180,30 360,70 T720,70 T1080,70 T1440,70" />
          </svg>

          {/* Left Grid */}
          <img
            src="/SVG/grid.svg"
            alt=""
            className="parallax-fast absolute top-4 left-0 h-[60%] md:h-[70%] object-contain -ml-[5%] lg:-ml-[10%]"
          />
          {/* Right Grid */}
          <img
            src="/SVG/grid-2.svg"
            alt=""
            className="parallax-fast absolute top-4 right-0 h-[40%] md:h-[50%] object-contain -mr-[5%] lg:-mr-[10%]"
          />
          {/* Bottom Right Grid */}
          <img
            src="/SVG/grid-3.svg"
            alt=""
            className="parallax-fast absolute bottom-0 right-0 h-[40%] md:h-[50%] object-contain -mr-[5%] lg:-mr-[10%]"
          />
        </div>

        <div className="relative z-10 max-w-5xl flex flex-col items-center gap-8">
          <div className="hero-text inline-block border-2 border-black/20 rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest text-black/60 shadow-sm">
            Flagship Programme
          </div>

          <h1 className="hero-text font-display font-bold text-[clamp(3.5rem,8.5vw,6rem)] leading-[0.9] tracking-tight uppercase">
            The Living <br />
            <span className="text-yellow">Room</span>
          </h1>

          <p className="hero-text font-body text-xl md:text-2xl text-black/70 max-w-2xl leading-relaxed mt-4">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
