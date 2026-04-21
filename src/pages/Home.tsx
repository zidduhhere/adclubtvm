import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { events, upcoming } from "../data/events";
import SectionTag from "../components/SectionTag";
import CircularText from "../components/CircularText";
import { StackedCardsInteraction } from "../components/ui/stacked-cards-interaction";

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
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=900&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=900&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop",
    isApply: true,
  },
];

const contacts = [
  { label: "Instagram", value: "@adclubtvm", href: "https://instagram.com/adclubtvm" },
  { label: "LinkedIn", value: "Advertising Club Trivandrum", href: "https://linkedin.com/company/adclubtvm" },
  { label: "Email", value: "adclubtrivandrum@gmail.com", href: "mailto:adclubtrivandrum@gmail.com" },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [activeFlagship, setActiveFlagship] = useState<number>(2);

  return (
    <main className="pt-16 min-h-screen bg-surface overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 border-b border-muted"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div
          className="flex flex-col md:flex-row gap-12 md:gap-16 items-center"
          style={{ minHeight: "inherit" }}
        >
          {/* Left */}
          <div className="flex-1 flex flex-col gap-7 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionTag>Advertising Club · Trivandrum</SectionTag>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-bg-warm leading-[1.04] tracking-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
            >
              For the Love<br />
              of <span className="text-purple">Advertising</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-body text-base text-bg-warm/65 leading-relaxed max-w-sm"
            >
              A vibrant community of advertising and media professionals in
              Kerala's capital — fostering innovation, collaboration, and
              professional excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/events"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-body font-medium tracking-wide text-white bg-purple rounded-full hover:bg-purple-light transition-colors"
              >
                Explore Events <span>→</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-body font-medium tracking-wide text-purple border border-purple rounded-full hover:bg-purple/8 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right — SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full self-stretch flex items-center justify-center py-10 relative"
          >
            <img
              src="/SVG/asset-4.svg"
              alt="Advertising Club Trivandrum"
              className="w-full max-h-[65vh] object-contain"
            />
            <div
              className="absolute top-6 right-6"
              style={{ transform: "scale(0.6)", transformOrigin: "top right" }}
            >
              <CircularText
                text="ACT CLUB · ACT CLUB · ACT CLUB · "
                spinDuration={18}
                onHover="speedUp"
                className="text-purple"
              />
            </div>
          </motion.div>
        </div>
      </section>

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
                    image: events[0]?.images?.[0] ?? "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
                    title: "Logo Launch — Feb 2025",
                    description: "The founding moment, unveiled by Mohanlal.",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
                    title: "Creative Conversations",
                    description: "Where advertising minds come together.",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1528741254566-d718e868201f?q=80&w=800&auto=format&fit=crop",
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
      <section className="px-6 md:px-16 py-24 border-b border-muted">
        <FadeUp className="flex flex-col gap-3 mb-14">
          <SectionTag>Events</SectionTag>
          <h2
            className="font-display font-bold text-bg-warm leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Major Events
          </h2>
          <p className="font-body text-sm text-bg-warm/50">
            Landmark moments that bring the advertising community together.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Featured — spans 2 cols */}
          <FadeUp className="md:col-span-2" delay={0}>
            <Link to={`/events/${events[0]?.id ?? "01"}`} className="block group">
              <article className="relative rounded-2xl overflow-hidden bg-muted shadow-sm hover:shadow-md transition-shadow h-72 md:h-96">
                <img
                  src={events[0]?.images?.[0] ?? "https://picsum.photos/seed/ev0/800/500"}
                  alt={events[0]?.title ?? "Event"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg-warm/90 via-bg-warm/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="font-body text-xs text-white/60 mb-1 tracking-[0.15em] uppercase">
                    {events[0]?.type} · {events[0]?.date}
                  </p>
                  <p className="font-display font-bold text-white text-xl md:text-2xl tracking-tight">
                    {events[0]?.title ?? "LOGO LAUNCH"}
                  </p>
                </div>
              </article>
            </Link>
          </FadeUp>

          {/* Upcoming stacked */}
          <FadeUp className="flex flex-col gap-5" delay={0.12}>
            {upcoming.slice(0, 2).map((ev) => (
              <article
                key={ev.id}
                className="flex-1 rounded-2xl overflow-hidden border border-muted bg-white shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-2"
              >
                <p className="font-body text-[10px] font-medium text-purple tracking-[0.18em] uppercase">
                  {ev.type} · {ev.status}
                </p>
                <p className="font-display font-bold text-bg-warm text-base tracking-tight">
                  {ev.title}
                </p>
                <p className="font-body text-xs text-bg-warm/50 leading-relaxed line-clamp-3">
                  {ev.description}
                </p>
              </article>
            ))}
          </FadeUp>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 border border-purple text-purple text-xs font-body font-medium tracking-[0.15em] uppercase px-6 py-3 rounded-full hover:bg-purple hover:text-white transition-colors"
          >
            View All Events →
          </Link>
        </div>
      </section>

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
