import { useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { awardGroups, editions, loaFAQ, jury } from "../data/awards";
import SectionTag from "../components/SectionTag";
import { ChevronDown, Search } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Awards() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const upcoming = editions.find((e) => e.status === "upcoming");
  const container = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? awardGroups
        .map((g) => ({
          ...g,
          categories: g.categories.filter((c) =>
            c.name.toLowerCase().includes(query.toLowerCase()) ||
            g.name.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((g) => g.categories.length > 0)
    : awardGroups;

  const totalCategories = awardGroups.reduce((s, g) => s + g.categories.length, 0);

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
            LOA Awards 2025
          </div>

          <h1 className="hero-text font-display font-bold text-[clamp(3.5rem,8.5vw,6rem)] leading-[0.9] tracking-tight uppercase">
            Love of <br />
            <span className="text-yellow">Advertising</span> Awards
          </h1>

          <p className="hero-text font-body text-xl md:text-2xl text-black/70 max-w-2xl leading-relaxed mt-4">
            Kerala's first dedicated advertising creative awards — recognising emerging formats and evolving forms of communication. Judged by senior professionals from outside Kerala for complete impartiality.
          </p>

          <div className="hero-text mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://loaawards.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Submit Entry →
            </a>
            <a
              href="mailto:adclubtrivandrum@gmail.com?subject=LOA%20Awards%20Sponsorship"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-black/20 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black/5 hover:-translate-y-1 transition-all"
            >
              Sponsor an Award
            </a>
          </div>
        </div>
      </section>

      {/* ── EDITION BANNER ── */}
      {upcoming && (
        <section className="px-6 md:px-16 py-10 bg-yellow border-b border-(--color-muted)">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold text-bg-warm text-xl tracking-tight">
                LOA Awards {upcoming.year} — <span className="text-purple">{upcoming.theme}</span>
              </p>
              <p className="font-body text-sm text-bg-warm/70 mt-1">
                {upcoming.date} · {upcoming.venue}
              </p>
            </div>
            <a
              href="https://loaawards.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium text-white bg-purple rounded-full transition-opacity hover:opacity-85"
            >
              Applications Open — Enter Now →
            </a>
          </div>
        </section>
      )}

      {/* ── CATEGORIES ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <SectionTag>Award Categories</SectionTag>
            <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3">
              {totalCategories} categories across {awardGroups.length} disciplines
            </h2>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-bg-warm/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories…"
              className="w-full pl-11 pr-4 py-3 rounded-full border border-(--color-muted) bg-white text-sm font-body text-bg-warm placeholder:text-bg-warm/35 focus:outline-none focus:border-purple transition-colors"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="font-body text-sm text-bg-warm/50 py-10 text-center">No categories match "{query}".</p>
        ) : (
          <div className="flex flex-col gap-10">
            {filtered.map((group) => (
              <div key={group.id}>
                <h3 className="font-display font-bold text-bg-warm text-base tracking-tight mb-4 flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-yellow inline-block" />
                  {group.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {group.categories.map((cat) => (
                    <div
                      key={cat.id}
                      className="px-4 py-3 rounded-xl border border-(--color-muted) bg-white text-sm font-body text-bg-warm/80 hover:border-purple hover:text-bg-warm transition-colors"
                    >
                      {cat.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── JURY ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted) bg-white">
        {/* Header row */}
        <div className="flex items-end justify-between mb-14">
          <div className="flex flex-col gap-3">
            <SectionTag>The Jury</SectionTag>
            <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight">
              Confirmed judges
            </h2>
          </div>
          <p className="hidden md:block font-body text-xs text-bg-warm/30 tracking-[0.2em] uppercase tabular-nums">
            {jury.length} members
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-12">
          {jury.map((judge, i) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col gap-0 cursor-default"
            >
              {/* Photo wrapper with yellow accent bar */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "1/1", maxWidth: "300px" }}>
                <img
                  src={judge.photo ?? `https://placehold.co/300x300/2d1b69/ffffff?text=${judge.name.charAt(0)}`}
                  alt={judge.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                {/* Yellow accent bar slides up on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"
                />
                {/* Discipline tag fades in on hover */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-body text-[9px] font-semibold tracking-[0.2em] uppercase bg-white/90 text-purple px-2.5 py-1">
                    {judge.discipline}
                  </span>
                </div>
              </div>

              {/* Info — slides up 4px on hover */}
              <div className="mt-3 flex flex-col gap-0.5 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-display font-bold text-bg-warm text-sm tracking-tight transition-colors duration-200 group-hover:text-purple">
                    {judge.name}
                  </p>
                  {judge.isChair && (
                    <span className="font-body text-[9px] font-semibold tracking-[0.15em] uppercase text-bg-warm bg-yellow px-2 py-0.5 shrink-0">
                      Chair
                    </span>
                  )}
                </div>
                <p className="font-body italic text-xs text-bg-warm/45 leading-snug">
                  {judge.role}, {judge.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW TO ENTER ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
        <SectionTag>How to Enter</SectionTag>
        <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12">
          Entry details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Entry Fee (Members)", value: "₹500 / entry" },
            { label: "Entry Fee (Non-members)", value: "₹1,000 / entry" },
            { label: "Student Entries", value: "Free" },
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-2xl border border-(--color-muted) bg-white text-center">
              <p className="font-display font-bold text-bg-warm text-3xl tracking-tight">{item.value}</p>
              <p className="font-body text-sm text-bg-warm/50 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-bg-warm/60 max-w-xl leading-relaxed">
          Entries must be for advertising work produced for the Kerala market between January 2024 and December 2024. Multiple entries per category are permitted. Deadline to be announced.
        </p>
        <a
          href="https://loaawards.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 text-sm font-body font-medium text-white bg-purple rounded-full transition-opacity hover:opacity-85"
        >
          Submit Your Entry →
        </a>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
        <SectionTag>FAQ</SectionTag>
        <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-10">
          Common questions
        </h2>
        <div className="max-w-2xl flex flex-col gap-3">
          {loaFAQ.map((item, i) => (
            <div key={i} className="border border-(--color-muted) rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-display font-bold text-bg-warm text-sm tracking-tight">{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-purple shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 font-body text-sm text-bg-warm/65 leading-relaxed border-t border-(--color-muted)">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── SPONSORSHIP ── */}
      <section className="px-6 md:px-16 py-20 bg-purple-deep">
        <div className="max-w-2xl">
          <SectionTag color="coral">Sponsors &amp; Partners</SectionTag>
          <h2 className="font-display font-bold text-white text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-4">
            Associate your brand with creative excellence
          </h2>
          <p className="font-body text-white/65 text-base leading-relaxed mb-8">
            Sponsoring the LOA Awards puts your brand at the heart of Kerala's advertising industry. Reach decision-makers, creatives, and media professionals in one room. Sponsorship packages available for category sponsors, trophy sponsors, and evening partners.
          </p>
          <a
            href="mailto:adclubtrivandrum@gmail.com?subject=LOA%20Awards%20Sponsorship%20Enquiry"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-purple-deep bg-yellow rounded-full transition-opacity hover:opacity-85"
          >
            Enquire About Sponsorship →
          </a>
        </div>
      </section>

    </main>
  );
}
