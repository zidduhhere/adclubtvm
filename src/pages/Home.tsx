import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { events, upcoming } from "../data/events";
import SectionTag from "../components/SectionTag";
import { StackedCardsInteraction } from "../components/ui/stacked-cards-interaction";
import HeroSection from "../components/HeroSection";

const marqueeText =
  "EVENTS · AWARDS · NETWORKING · SEMINARS · TRIVANDRUM · KERALA · CREATIVITY · ADVERTISING · ";

const flagships = [
  {
    num: "01",
    title: "Networking Evening",
    tag: "Networking",
    desc: "An exclusive gathering for advertising and media professionals across Trivandrum — connecting talent, agencies, and brands under one roof in an informal, high-energy setting.",
    date: "Coming 2025",
    highlights: [
      "Open to all creative professionals",
      "Curated cross-industry guest list",
      "Informal mixers and panel moments",
    ],
    action: "Learn More",
    href: "/events",
    image: "https://placehold.co/900x506/1a1a2e/ffffff?text=Networking+Evening",
    isApply: false,
  },
  {
    num: "02",
    title: "Industry Seminar",
    tag: "Knowledge",
    desc: "Talks and workshops led by senior practitioners on the evolving landscape of advertising, digital media, and brand communication — grounded in real Kerala market insight.",
    date: "Coming 2025",
    highlights: [
      "Senior industry voices on stage",
      "Live case study breakdowns",
      "Open Q&A and peer discussions",
    ],
    action: "Register Interest",
    href: "/events",
    image: "https://placehold.co/900x506/2d1b69/ffffff?text=Industry+Seminar",
    isApply: false,
  },
  {
    num: "03",
    title: "LOA Awards",
    tag: "Awards",
    desc: "Kerala's premier recognition for advertising excellence — honouring outstanding work across every discipline of advertising and marketing communication, judged by industry veterans.",
    date: "Applications Open",
    highlights: [
      "Open to all Kerala-based agencies and brands",
      "20+ award categories across disciplines",
      "Jury of national and regional industry leaders",
    ],
    action: "Apply Now",
    href: "/events",
    image: "https://placehold.co/900x506/f5c518/1a1a2e?text=LOA+Awards",
    isApply: true,
  },
];

const contacts = [
  { label: "Instagram", value: "@adclubtvm", href: "https://instagram.com/adclubtvm" },
  { label: "LinkedIn", value: "Advertising Club Trivandrum", href: "https://linkedin.com/company/adclubtvm" },
  { label: "Email", value: "adclubtrivandrum@gmail.com", href: "mailto:adclubtrivandrum@gmail.com" },
];

function FadeUp({ children = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  // const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MajorEventsCarousel() {
  const allItems = [
    ...events.map((e) => ({
      id: e.id,
      title: e.title,
      type: e.type,
      date: e.date,
      image: e.images?.[0] ?? null,
      status: null as string | null,
      href: `/events/${e.id}`,
      isPast: true,
    })),
    ...upcoming.map((u) => ({
      id: u.id,
      title: u.title,
      type: u.type,
      date: u.date,
      image: null as string | null,
      status: u.status,
      href: "/events",
      isPast: false,
    })),
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [offset, setOffset] = useState(0);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const GAP = 20;

  const computeOffset = (idx: number) => {
    if (!firstCardRef.current) return 0;
    return idx * (firstCardRef.current.offsetWidth + GAP);
  };

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(allItems.length - 1, idx));
    setActiveIdx(clamped);
    setOffset(computeOffset(clamped));
  };

  useEffect(() => {
    const handleResize = () => setOffset(computeOffset(activeIdx));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIdx]);

  return (
    <section className="bg-white border-b border-muted overflow-hidden pt-14 pb-16">

      {/* ── Header row ── */}
      <div className="flex items-center justify-between px-6 md:px-16 mb-8">
        <div className="flex flex-col gap-2">
          <SectionTag>Events</SectionTag>
          <h2
            className="font-display font-bold text-bg-warm leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.4rem)" }}
          >
            Major Events
          </h2>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <span className="font-body text-[11px] text-bg-warm/30 tracking-[0.22em] tabular-nums mr-1 hidden sm:block">
            {String(activeIdx + 1).padStart(2, "0")} / {String(allItems.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => goTo(activeIdx - 1)}
            disabled={activeIdx === 0}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-muted text-bg-warm/40 flex items-center justify-center
                       hover:border-purple hover:text-purple disabled:opacity-20 disabled:cursor-not-allowed
                       transition-all duration-200 text-sm"
          >
            ←
          </button>
          <button
            onClick={() => goTo(activeIdx + 1)}
            disabled={activeIdx === allItems.length - 1}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-muted text-bg-warm/40 flex items-center justify-center
                       hover:border-purple hover:text-purple disabled:opacity-20 disabled:cursor-not-allowed
                       transition-all duration-200 text-sm"
          >
            →
          </button>
        </div>
      </div>

      {/* ── Carousel track ── */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex pl-6 md:pl-16"
          style={{ gap: GAP }}
          animate={{ x: -offset }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
        >
          {allItems.map((item, i) => (
            <div
              key={item.id}
              ref={i === 0 ? firstCardRef : undefined}
              className="shrink-0 w-[76vw] md:w-[38vw] max-w-[500px] h-[300px] md:h-[400px] relative overflow-hidden rounded-xl group"
            >
              <Link to={item.href} className="absolute inset-0 z-20" aria-label={item.title} />

              {/* Image / tinted bg */}
              <div className="absolute inset-0">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{ background: `linear-gradient(135deg, #4A2470 0%, #2d1b69 100%)` }}
                  />
                )}
              </div>

              {/* Default: dark gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-deep via-purple-deep/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

              {/* Hover: solid purple fill */}
              <div className="absolute inset-0 bg-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="font-body text-[9px] tracking-[0.25em] uppercase mb-2 transition-colors duration-300 text-white/35 group-hover:text-yellow/60">
                  {item.type} · {item.date}
                  {item.status && ` · ${item.status}`}
                </p>
                <h3
                  className="font-display font-bold tracking-tight leading-tight transition-colors duration-300 text-white group-hover:text-yellow"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 1.6rem)" }}
                >
                  {item.title}
                </h3>
                {!item.isPast && (
                  <span className="inline-flex items-center mt-3 text-[9px] font-body font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full transition-all duration-300 bg-yellow/90 text-purple-deep group-hover:bg-white/10 group-hover:text-yellow/70">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* "View all" end card */}
          <Link
            to="/events"
            className="shrink-0 w-[50vw] md:w-[22vw] max-w-[280px] h-[300px] md:h-[400px] flex flex-col items-center justify-center gap-4
                       border border-muted rounded-xl mr-6 md:mr-16
                       hover:border-purple hover:bg-purple/5 transition-all duration-300 group"
          >
            <span className="w-11 h-11 rounded-full border border-muted group-hover:border-purple flex items-center justify-center text-bg-warm/30 group-hover:text-purple text-base transition-all duration-300">
              →
            </span>
            <span className="font-body text-[9px] text-bg-warm/30 group-hover:text-purple tracking-[0.28em] uppercase transition-colors duration-300">
              All Events
            </span>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}

export default function Home() {
  const [activeFlagship, setActiveFlagship] = useState<number>(2);

  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <div className="border-b border-muted overflow-hidden py-4 bg-surface">
        <div className="flex whitespace-nowrap">
          <span className="marquee-track inline-flex gap-0 font-display font-bold text-sm tracking-[0.2em] text-purple uppercase">
            {marqueeText.repeat(6)}
          </span>
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section className="border-b border-muted">

        {/* ── DARK ZONE: deep purple ── */}
        <div className="bg-purple-deep">

          {/* Two-column: text left, stacked cards right */}
          <div className="px-6 md:px-16 pt-20 pb-14 flex flex-col md:flex-row gap-16 md:gap-10 items-center">

            {/* Left — manifesto + body */}
            <FadeUp className="flex-1 flex flex-col gap-7 md:max-w-[48%]">
              <p className="font-body text-[10px] font-semibold text-white/35 tracking-[0.3em] uppercase">
                Est. 2025 · Trivandrum, Kerala
              </p>
              <h2
                className="font-display font-bold text-white leading-[1.04] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                A gathering place for Kerala's advertising minds.
              </h2>
              <p className="font-body text-base text-white/55 leading-relaxed">
                Advertising Club Trivandrum was born from a collective vision — a permanent home for the capital city's creative community, where craft meets connection and ambition finds its people.
              </p>
              <p className="font-body text-sm text-white/35 leading-relaxed">
                We connect creatives, strategists, and media professionals to elevate the standards of advertising across Kerala through events, awards, and shared ambition.
              </p>
              <Link
                to="/about"
                className="self-start inline-flex items-center gap-2 font-body text-sm font-medium text-yellow hover:text-yellow/80 transition-colors"
              >
                Learn more about us →
              </Link>
            </FadeUp>

            {/* Right — stacked cards + stats */}
            <FadeUp className="flex-1 flex flex-col items-center gap-8" delay={0.15}>
              <StackedCardsInteraction
                spreadDistance={45}
                rotationAngle={6}
                cards={[
                  {
                    image: events[0]?.images?.[0] ?? "https://placehold.co/800x600/1a1a2e/ffffff?text=Logo+Launch",
                    title: "Logo Launch — Feb 2025",
                    description: "The founding moment, unveiled by Mohanlal.",
                  },
                  {
                    image: "https://placehold.co/800x600/2d1b69/ffffff?text=Creative+Conversations",
                    title: "Creative Conversations",
                    description: "Where advertising minds come together.",
                  },
                  {
                    image: "https://placehold.co/800x600/1a1a2e/ffffff?text=Building+Community",
                    title: "Building Community",
                    description: "Networking across Kerala's creative industry.",
                  },
                ]}
              />
              {/* Stats anchored below the cards */}
              <div className="flex gap-10 border-t border-white/10 pt-6 w-full justify-center">
                {[
                  { num: "2025", label: "Founded" },
                  { num: "3", label: "Programmes" },
                  { num: "TVM", label: "Home City" },
                ].map(({ num, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <p className="font-display font-bold text-white text-xl">{num}</p>
                    <p className="font-body text-[9px] text-white/35 tracking-[0.2em] uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Who's in the room — still on dark */}
          <div className="border-t border-white/10 px-6 md:px-16 py-7">
            <FadeUp className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-14">
              <p className="font-body text-[9px] font-semibold text-white/25 tracking-[0.28em] uppercase shrink-0">
                Who's in the room
              </p>
              <div className="flex flex-wrap gap-y-1.5">
                {[
                  "Creative Directors", "Brand Strategists", "Media Planners",
                  "Copywriters", "Art Directors", "Digital Marketers",
                  "Photographers", "PR Professionals", "Campaign Managers",
                ].map((role, i, arr) => (
                  <span key={role} className="font-body text-sm text-white/50 font-medium">
                    {role}
                    {i < arr.length - 1 && (
                      <span className="text-yellow/30 mx-2.5">·</span>
                    )}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── CREAM ZONE: three pillars ── */}
        <div className="bg-surface px-6 md:px-16 pt-16 pb-20">
          <p className="font-body text-[9px] font-semibold text-bg-warm/30 tracking-[0.28em] uppercase mb-14">
            What drives us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-muted">
            {[
              {
                num: "01",
                title: "Community",
                desc: "Building lasting connections across Kerala's creative industry — a network that grows stronger with every gathering.",
              },
              {
                num: "02",
                title: "Craft",
                desc: "Elevating advertising standards through shared knowledge, peer critique, and industry-led learning.",
              },
              {
                num: "03",
                title: "Commerce",
                desc: "Bridging great creative work with real business outcomes — because advertising that doesn't sell is just art.",
              },
            ].map(({ num, title, desc }, i) => (
              <FadeUp
                key={num}
                delay={i * 0.09}
                className="relative flex flex-col gap-4 py-10 md:py-0 px-0 md:px-10 first:md:pl-0 last:md:pr-0 overflow-hidden"
              >
                {/* Watermark number */}
                <span
                  className="absolute -top-4 right-0 font-display font-bold text-purple/6 select-none pointer-events-none leading-none"
                  style={{ fontSize: "clamp(6rem, 12vw, 9rem)" }}
                  aria-hidden
                >
                  {num}
                </span>
                <span className="font-body text-[10px] font-medium text-purple tracking-[0.22em] uppercase">{num}</span>
                <h3
                  className="font-display font-bold text-bg-warm tracking-tight leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  {title}
                </h3>
                <p className="font-body text-sm text-bg-warm/50 leading-relaxed">{desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>

      </section>

      {/* ── FLAGSHIP PROGRAMMES ──────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 border-b border-muted">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <SectionTag>Programmes</SectionTag>
            <h2
              className="font-display font-bold text-bg-warm leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Our Flagship Programmes
            </h2>
          </div>
          <p className="font-body text-sm text-bg-warm/45 max-w-xs md:text-right">
            Click any programme to explore details and take action.
          </p>
        </FadeUp>

        <div className="flex flex-col border-t border-muted">
          {flagships.map(({ num, title, tag, desc, date, highlights, action, href, image, isApply }, i) => {
            const isActive = activeFlagship === i;
            return (
              <div key={num} className="border-b border-muted">

                {/* Row header */}
                <button
                  className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                  onClick={() => setActiveFlagship(isActive ? -1 : i)}
                >
                  <div className="flex items-center gap-5 md:gap-8">
                    <span className="font-body text-xs font-medium text-purple/60 tracking-[0.22em] w-6 shrink-0">
                      {num}
                    </span>
                    <h3
                      className={`font-display font-bold tracking-tight leading-tight transition-colors ${
                        isActive ? "text-purple" : "text-bg-warm group-hover:text-purple"
                      }`}
                      style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)" }}
                    >
                      {title}
                    </h3>
                    <span
                      className={`hidden md:inline-flex items-center text-[10px] font-body font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full ${
                        isApply
                          ? "bg-yellow text-bg-warm"
                          : "bg-purple/8 text-purple"
                      }`}
                    >
                      {tag}
                    </span>
                    {isApply && (
                      <span className="hidden md:inline font-body text-[11px] font-medium text-coral tracking-wide">
                        {date}
                      </span>
                    )}
                  </div>

                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`shrink-0 transition-colors ${isActive ? "text-purple" : "text-bg-warm/25 group-hover:text-purple/40"}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Expandable panel */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`pb-10 pt-2 flex flex-col md:flex-row gap-8 md:gap-12 ${
                          isApply ? "rounded-2xl bg-yellow/5 -mx-6 md:-mx-16 px-6 md:px-16" : ""
                        }`}
                      >
                        {/* Left: description + highlights + CTA */}
                        <div className="flex-1 flex flex-col gap-5">
                          <p className="font-body text-base text-bg-warm/65 leading-relaxed max-w-lg">
                            {desc}
                          </p>
                          <ul className="flex flex-col gap-2.5">
                            {highlights.map((h) => (
                              <li key={h} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple shrink-0 mt-[0.4em]" />
                                <span className="font-body text-sm text-bg-warm/55">{h}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-2">
                            <Link
                              to={href}
                              className={`inline-flex items-center gap-2.5 px-7 py-3 text-sm font-body font-medium rounded-full transition-colors ${
                                isApply
                                  ? "bg-purple text-white hover:bg-purple-light"
                                  : "border border-purple text-purple hover:bg-purple hover:text-white"
                              }`}
                            >
                              {action} →
                            </Link>
                          </div>
                        </div>

                        {/* Right: event image */}
                        <div className="flex-1 md:max-w-[44%]">
                          <div className="w-full rounded-2xl overflow-hidden aspect-video bg-muted">
                            <img
                              src={image}
                              alt={title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>
      </section>

      {/* ── MAJOR EVENTS ─────────────────────────────────────────── */}
      <MajorEventsCarousel />

      {/* ── LOA AWARDS CTA ───────────────────────────────────────── */}
      <FadeUp>
        <section className="mx-6 md:mx-16 my-24 rounded-3xl bg-purple px-10 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-lg">
            <p className="font-body text-xs font-medium text-white/60 tracking-[0.2em] uppercase">
              Annual Awards · 2025
            </p>
            <h2
              className="font-display font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              The LOA Awards Are Coming
            </h2>
            <p className="font-body text-base text-white/70 leading-relaxed">
              Recognising outstanding achievement in advertising and marketing
              communication across Kerala's advertising fraternity.
            </p>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-body font-bold tracking-wide text-bg-warm bg-yellow rounded-full hover:bg-yellow/90 transition-colors shrink-0"
          >
            Apply Now →
          </Link>
        </section>
      </FadeUp>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24">
        <FadeUp className="flex flex-col gap-3 mb-12">
          <SectionTag>Get In Touch</SectionTag>
          <h2
            className="font-display font-bold text-bg-warm leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Contact Us
          </h2>
          <p className="font-body text-base text-bg-warm/60 max-w-md leading-relaxed">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </FadeUp>

        <ul className="flex flex-col gap-7">
          {contacts.map(({ label, value, href }, i) => (
            <FadeUp key={label} delay={i * 0.07}>
              <li className="flex items-center gap-5">
                <span className="w-2 h-2 rounded-full bg-purple shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-body font-medium text-purple tracking-[0.15em] uppercase mb-0.5">
                    {label}
                  </p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-bg-warm font-medium hover:text-purple transition-colors"
                  >
                    {value}
                  </a>
                </div>
              </li>
            </FadeUp>
          ))}
        </ul>
      </section>

    </main>
  );
}
