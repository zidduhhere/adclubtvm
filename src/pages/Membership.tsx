import { motion } from "framer-motion";
import { membershipTiers, committee } from "../data/members";
import SectionTag from "../components/SectionTag";

const benefits = [
  { icon: "🤝", title: "Networking", desc: "Connect with Trivandrum's top advertising and media professionals at exclusive ACT events." },
  { icon: "🎓", title: "Skill Development", desc: "Access workshops, seminars, and Living Room sessions led by senior industry practitioners." },
  { icon: "🏆", title: "LOA Awards", desc: "Free or discounted entries to the Love of Advertising Awards for ACT members." },
  { icon: "📰", title: "Industry Intel", desc: "Monthly newsletter with Kerala ad industry news, job postings, and opportunities." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const } }),
};

export default function Membership() {
  return (
    <main className="pt-16 min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="w-full bg-white border-b border-(--color-muted) relative overflow-hidden bg-grid-pattern"
        style={{ minHeight: "92svh", display: "flex", flexDirection: "column" }}
      >
        <img src="/love-asset-3.svg" alt="" aria-hidden="true" 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[40rem] opacity-[0.03] pointer-events-none translate-x-1/4" />
        
        <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-16">
          <div className="max-w-3xl w-full py-20 md:py-16 flex flex-col items-center text-center gap-6">
          <SectionTag>Membership</SectionTag>
          <h1 className="font-display font-bold text-bg-warm leading-[1.02] tracking-tight text-[clamp(3.5rem,8.5vw,6rem)]">
            Join Kerala's{" "}
            <span style={{ color: "#FEC812" }}>Ad Fraternity</span>
          </h1>
          <p className="font-body text-bg-warm/60 text-base leading-relaxed max-w-xl">
            ACT membership is an invitation to be part of a growing community of advertising professionals — from seasoned creatives to emerging talent — united by a passion for the craft.
          </p>
          <a
            href="mailto:adclubtrivandrum@gmail.com?subject=Membership%20Application"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium tracking-wide text-white bg-purple rounded-full transition-opacity hover:opacity-85"
          >
            Apply for Membership →
          </a>
        </div>
        </div>
        <div className="border-t border-(--color-muted) overflow-hidden py-4">
          <div className="flex whitespace-nowrap">
            <span className="marquee-track inline-flex gap-0 font-display font-bold text-sm tracking-[0.2em] text-purple uppercase">
              {"EVENTS · AWARDS · NETWORKING · SEMINARS · TRIVANDRUM · KERALA · CREATIVITY · ADVERTISING · ".repeat(6)}
            </span>
          </div>
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
            { step: "01", title: "Email Us", desc: "Send your application to adclubtrivandrum@gmail.com with your name, role, company, and membership category." },
            { step: "02", title: "Review", desc: "The ACT committee reviews applications within 5 working days. You may be invited for a brief introductory call." },
            { step: "03", title: "Welcome!", desc: "Once approved, you'll receive your membership confirmation and details on your first ACT event." },
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
