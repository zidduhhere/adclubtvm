import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { membershipTiers, committee } from "../data/members";
import SectionTag from "../components/SectionTag";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: "🤝", title: "Networking", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
  { icon: "🎓", title: "Skill Development", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
  { icon: "🏆", title: "LOA Awards", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { icon: "📰", title: "Industry Intel", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const } }),
};

export default function Membership() {
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
            Membership
          </div>

          <h1 className="hero-text font-display font-bold text-[clamp(3.5rem,8.5vw,6rem)] leading-[0.9] tracking-tight uppercase">
            Join Kerala's <br />
            <span className="text-yellow">Ad Fraternity</span>
          </h1>

          <p className="hero-text font-body text-xl md:text-2xl text-black/70 max-w-2xl leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <a
            href="mailto:adclubtrivandrum@gmail.com?subject=Membership%20Application"
            className="hero-text mt-6 inline-flex items-center gap-3 bg-purple text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            Apply for Membership →
          </a>
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
        <SectionTag>Why Join ACT</SectionTag>
        <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12">
          What membership gives you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-3 p-6 rounded-2xl border border-(--color-muted) bg-white hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">{b.icon}</span>
              <p className="font-display font-bold text-bg-warm text-base tracking-tight">{b.title}</p>
              <p className="font-body text-sm text-bg-warm/65 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MEMBERSHIP TIERS ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
        <SectionTag>Membership Categories</SectionTag>
        <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12">
          Find the right membership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {membershipTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-4 p-7 rounded-2xl border border-(--color-muted) bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-display font-bold text-bg-warm text-xl tracking-tight">{tier.name}</p>
                <span className="shrink-0 font-body font-medium text-sm text-purple bg-purple/10 px-3 py-1 rounded-full">
                  {tier.fee}
                </span>
              </div>
              <p className="font-body text-sm text-bg-warm/60 leading-relaxed">{tier.eligibility}</p>
              <ul className="flex flex-col gap-2 mt-1">
                {tier.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-body text-sm text-bg-warm/75">
                    <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-yellow/20 flex items-center justify-center text-[10px]">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:adclubtrivandrum@gmail.com?subject=Membership%20Application%20-%20${tier.name}`}
                className="self-start mt-2 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-body font-medium text-white bg-purple rounded-full transition-opacity hover:opacity-85"
              >
                Apply →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW TO JOIN ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted) bg-bg-warm">
        <SectionTag color="coral">How to Join</SectionTag>
        <h2 className="font-display font-bold text-white text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12">
          Three simple steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Email Us", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore." },
            { step: "02", title: "Review", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
            { step: "03", title: "Welcome!", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-3 p-7 rounded-2xl border border-white/10 bg-white/5"
            >
              <span className="font-display font-bold text-yellow text-4xl leading-none">{s.step}</span>
              <p className="font-display font-bold text-white text-lg tracking-tight">{s.title}</p>
              <p className="font-body text-sm text-white/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="mailto:adclubtrivandrum@gmail.com?subject=Membership%20Application"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-bg-warm bg-yellow rounded-full transition-opacity hover:opacity-85"
          >
            Email Us to Apply →
          </a>
        </div>
      </section>

      {/* ── COMMITTEE ── */}
      <section className="px-6 md:px-16 py-20">
        <SectionTag>Committee</SectionTag>
        <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12 text-center">
          The people behind ACT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {committee.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-4 border border-(--color-muted) rounded-2xl p-4 bg-white hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display text-bg-warm/30 uppercase text-[8px] tracking-widest font-bold text-center px-1">
                    Photo
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 py-0.5">
                <p className="font-display font-bold text-bg-warm text-sm tracking-tight">{member.name}</p>
                {member.role !== "Member" && (
                  <span className="text-[11px] font-body text-purple font-medium tracking-wide uppercase">{member.role}</span>
                )}
                <span className="text-[12px] font-body text-bg-warm/60 leading-snug">{member.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
