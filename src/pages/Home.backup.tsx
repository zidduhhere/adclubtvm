import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { events, upcoming } from "../data/events";
import SectionTag from "../components/SectionTag";
import { StackedCardsInteraction } from "../components/ui/stacked-cards-interaction";
import HeroSection from "../components/HeroSection";




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
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── CLUB INTRO ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <SectionTag>Who We Are</SectionTag>
            <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.1]">
              Kerala's premier<br />
              <span className="text-purple">advertising community</span>
            </h2>
            <p className="font-body text-base text-bg-warm/65 leading-relaxed max-w-md">
              Advertising Club Trivandrum (ACT) is an exclusive platform established to bring together professionals from the advertising and media industries in Kerala's capital city — fostering innovation, collaboration, and professional excellence.
            </p>
            <Link
              to="/about"
              className="self-start inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium text-white bg-purple rounded-full transition-opacity hover:opacity-85"
            >
              Learn More About ACT →
            </Link>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-3">
            {[
              { value: "50+", label: "Members" },
              { value: "2024", label: "Founded" },
              { value: "3+", label: "Events" },
              { value: "1", label: "Flagship Award" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl border border-(--color-muted) bg-white text-center">
                <p className="font-display font-bold text-bg-warm text-4xl tracking-tight">{stat.value}</p>
                <p className="font-body text-xs text-purple uppercase tracking-[0.15em] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted) bg-white">
        <SectionTag>Explore ACT</SectionTag>
        <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12">
          What we do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              title: "About Us",
              desc: "Learn about our mission, story, and the team driving Kerala's advertising community.",
              href: "/about",
              cta: "Our Story",
              bg: "bg-purple",
              textColor: "text-white",
            },
            {
              title: "Membership",
              desc: "Join ACT and connect with Trivandrum's top advertising and media professionals.",
              href: "/membership",
              cta: "Join Now",
              bg: "bg-yellow",
              textColor: "text-bg-warm",
            },
            {
              title: "LOA Awards",
              desc: "Kerala's first dedicated advertising awards. Submit your best work for recognition.",
              href: "https://loaawards.com",
              cta: "Apply Now",
              bg: "bg-white border border-muted",
              textColor: "text-bg-warm",
            },
            {
              title: "Living Room",
              desc: "Monthly dialogue series where industry veterans share unfiltered insights.",
              href: "/living-room",
              cta: "Learn More",
              bg: "bg-white border border-muted",
              textColor: "text-bg-warm",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`flex flex-col justify-between gap-8 p-7 rounded-2xl ${card.bg} min-h-[220px]`}
            >
              <div className="flex flex-col gap-3">
                <p className={`font-display font-bold text-xl tracking-tight ${card.textColor}`}>{card.title}</p>
                <p className={`font-body text-sm leading-relaxed ${card.textColor} opacity-75`}>{card.desc}</p>
              </div>
              {card.href.startsWith("http") ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`self-start text-sm font-body font-medium ${card.textColor} opacity-85 hover:opacity-100 transition-opacity`}
                >
                  {card.cta} →
                </a>
              ) : (
                <Link
                  to={card.href}
                  className={`self-start text-sm font-body font-medium ${card.textColor} opacity-85 hover:opacity-100 transition-opacity`}
                >
                  {card.cta} →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── UPCOMING EVENT TEASER ── */}
      <section className="px-6 md:px-16 py-16 border-b border-(--color-muted) bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <SectionTag>What's Next</SectionTag>
            <h2 className="font-display font-bold text-bg-warm text-[clamp(1.4rem,3.5vw,2.5rem)] tracking-tight mt-2">
              LOA Awards 2025 — <span className="text-purple">Applications Open</span>
            </h2>
            <p className="font-body text-sm text-bg-warm/60 max-w-lg leading-relaxed">
              Kerala's first dedicated advertising awards are now accepting entries across nine categories — film, digital, print, design, and more. Open to all agencies and brands that worked in the Kerala market.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="https://loaawards.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-bg-warm bg-yellow rounded-full transition-opacity hover:opacity-85 whitespace-nowrap"
            >
              Submit Entry →
            </a>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-bg-warm border border-muted rounded-full transition-colors hover:border-purple whitespace-nowrap"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section className="border-b border-muted">

        {/* ── MANIFESTO ZONE ── */}
        <div className="bg-white">

          {/* Two-column: text left, stacked cards right */}
          <div className="px-6 md:px-16 pt-20 pb-14 flex flex-col md:flex-row gap-16 md:gap-10 items-center">

            {/* Left — manifesto + body */}
            <FadeUp className="flex-1 flex flex-col gap-7 md:max-w-[48%]">
              <p className="font-body text-[10px] font-semibold text-bg-warm/35 tracking-[0.3em] uppercase">
                Est. 2025 · Trivandrum, Kerala
              </p>
              <h2
                className="font-display font-bold text-bg-warm leading-[1.04] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                A gathering place for Kerala's advertising minds.
              </h2>
              <p className="font-body text-base text-bg-warm/55 leading-relaxed">
                Advertising Club Trivandrum was born from a collective vision — a permanent home for the capital city's creative community, where craft meets connection and ambition finds its people.
              </p>
              <p className="font-body text-sm text-bg-warm/40 leading-relaxed">
                We connect creatives, strategists, and media professionals to elevate the standards of advertising across Kerala through events, awards, and shared ambition.
              </p>
              <Link
                to="/about"
                className="self-start inline-flex items-center gap-2 font-body text-sm font-medium text-purple hover:text-purple/70 transition-colors"
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
              <div className="flex gap-10 border-t border-muted pt-6 w-full justify-center">
                {[
                  { num: "2025", label: "Founded" },
                  { num: "3", label: "Programmes" },
                  { num: "TVM", label: "Home City" },
                ].map(({ num, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <p className="font-display font-bold text-bg-warm text-xl">{num}</p>
                    <p className="font-body text-[9px] text-bg-warm/35 tracking-[0.2em] uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Who's in the room */}
          <div className="border-t border-muted px-6 md:px-16 py-7">
            <FadeUp className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-14">
              <p className="font-body text-[9px] font-semibold text-bg-warm/25 tracking-[0.28em] uppercase shrink-0">
                Who's in the room
              </p>
              <div className="flex flex-wrap gap-y-1.5">
                {[
                  "Creative Directors", "Brand Strategists", "Media Planners",
                  "Copywriters", "Art Directors", "Digital Marketers",
                  "Photographers", "PR Professionals", "Campaign Managers",
                ].map((role, i, arr) => (
                  <span key={role} className="font-body text-sm text-bg-warm/50 font-medium">
                    {role}
                    {i < arr.length - 1 && (
                      <span className="text-purple/25 mx-2.5">·</span>
                    )}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
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
          <a
            href="https://loaawards.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-body font-bold tracking-wide text-bg-warm bg-yellow rounded-full hover:bg-yellow/90 transition-colors shrink-0"
          >
            Apply Now →
          </a>
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
