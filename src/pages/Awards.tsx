import { useState } from "react";
import { motion } from "framer-motion";
import { awardCategories, editions, loaFAQ } from "../data/awards";
import SectionTag from "../components/SectionTag";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" as const } }),
};

export default function Awards() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const upcoming = editions.find((e) => e.status === "upcoming");

  return (
    <main className="pt-16 min-h-screen bg-surface">

      {/* ── HERO ── */}
      <section className="relative px-6 md:px-16 pt-16 pb-20 overflow-hidden bg-bg-warm border-b border-white/10">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-display font-bold text-white/[0.04] leading-none"
            style={{ fontSize: "clamp(12rem, 35vw, 28rem)", letterSpacing: "-0.06em" }}
          >
            LOA
          </span>
        </div>

        <div className="relative z-10 max-w-3xl">
          <SectionTag color="coral">LOA Awards 2025</SectionTag>
          <h1 className="font-display font-bold text-white leading-[1.05] text-[clamp(2.6rem,6vw,5rem)] tracking-tight mt-4">
            Love of{" "}
            <span className="text-yellow">Advertising</span>{" "}
            Awards
          </h1>
          <p className="font-body text-white/65 text-base leading-relaxed mt-5 max-w-xl">
            Kerala's first dedicated advertising creative awards — recognising emerging formats and evolving forms of communication. Judged by senior professionals from outside Kerala for complete impartiality.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="mailto:adclubtrivandrum@gmail.com?subject=LOA%20Awards%202025%20Entry"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-bg-warm bg-yellow rounded-full transition-opacity hover:opacity-85"
            >
              Submit Entry →
            </a>
            <a
              href="mailto:adclubtrivandrum@gmail.com?subject=LOA%20Awards%20Sponsorship"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-white border border-white/30 rounded-full transition-colors hover:border-white/60"
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
              href="mailto:adclubtrivandrum@gmail.com?subject=LOA%20Awards%202025%20Entry"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium text-white bg-purple rounded-full transition-opacity hover:opacity-85"
            >
              Applications Open — Enter Now →
            </a>
          </div>
        </section>
      )}

      {/* ── CATEGORIES ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
        <SectionTag>Award Categories</SectionTag>
        <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12">
          Nine categories of excellence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {awardCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-3 p-6 rounded-2xl border border-(--color-muted) bg-white hover:shadow-md transition-shadow group"
            >
              <div className="w-8 h-1 rounded bg-yellow group-hover:w-12 transition-all duration-300" />
              <p className="font-display font-bold text-bg-warm text-base tracking-tight">{cat.name}</p>
              <p className="font-body text-sm text-bg-warm/60 leading-relaxed">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW TO ENTER ── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted) bg-surface">
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
          href="mailto:adclubtrivandrum@gmail.com?subject=LOA%20Awards%202025%20Entry"
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
