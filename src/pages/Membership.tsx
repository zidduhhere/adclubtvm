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
    <main className="pt-16 min-h-screen bg-surface">

      {/* ── HERO ── */}
      <section className="relative px-6 md:px-16 pt-16 pb-20 border-b border-(--color-muted) overflow-hidden bg-purple-deep">
        <div className="relative z-10 max-w-3xl">
          <SectionTag color="coral">Membership</SectionTag>
          <h1 className="font-display font-bold text-white leading-[1.05] text-[clamp(2.6rem,6vw,5rem)] tracking-tight mt-4">
            Join Kerala's{" "}
            <span className="text-yellow">Ad Fraternity</span>
          </h1>
          <p className="font-body text-white/70 text-base leading-relaxed mt-5 max-w-xl">
            ACT membership is an invitation to be part of a growing community of advertising professionals — from seasoned creatives to emerging talent — united by a passion for the craft.
          </p>
          <a
            href="mailto:adclubtrivandrum@gmail.com?subject=Membership%20Application"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 text-sm font-body font-medium tracking-wide text-purple-deep bg-yellow rounded-full transition-opacity hover:opacity-85"
          >
            Apply for Membership →
          </a>
        </div>
        <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-purple/30 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute right-24 bottom-0 w-40 h-40 rounded-full bg-yellow/10 translate-y-1/2 pointer-events-none" />
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
              <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-muted">
                <img
                  src="https://placehold.co/200x200/6B308E/ffffff?text=Photo"
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5 py-0.5">
                <p className="font-display font-bold text-bg-warm text-sm tracking-tight">{member.name}</p>
                <span className="text-xs font-body text-purple">{member.role}</span>
                <div className="flex gap-3 text-xs font-body mt-1">
                  <a href={member.linkedin} className="text-purple/70 hover:text-purple transition-colors">LinkedIn</a>
                  <a href={member.instagram} className="text-purple/70 hover:text-purple transition-colors">Instagram</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
