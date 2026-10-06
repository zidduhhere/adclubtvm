import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageHero from "../components/PageHero";
import { membershipTiers } from "../data/members";

gsap.registerPlugin(ScrollTrigger);

import { Users, GraduationCap, Globe, Star } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Networking Opportunities",
    desc: "Connect and exchange ideas with professionals from advertising, media, and related industries.",
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    desc: "Enhance your creative and business acumen through workshops and seminars led by top industry experts.",
  },
  {
    icon: Globe,
    title: "Industry Exposure",
    desc: "Gain insights from nationally acclaimed speakers across diverse fields such as advertising, media, communications, and PR.",
  },
  {
    icon: Star,
    title: "Exclusive Benefits",
    desc: "Enjoy FREE or discounted access to Ad Club events, seminars, and activities.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Membership() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
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
      <PageHero
        title={
          <>
            <span className="hero-text block">Join</span>
            <span className="hero-text block">Now</span>
          </>
        }
      />

      {/* ── WHY JOIN ── */}
      <section className="px-6 md:px-16 py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-black mb-4">
              Why <span className="text-purple">Join</span> ACT?
            </h2>
            <p className="font-body text-xl text-black/60 max-w-2xl">
              Be part of a thriving community where creativity meets
              collaboration. Network with industry professionals, access
              learning opportunities, and shape the future of advertising in
              Trivandrum..
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col p-10 rounded-[2rem] border border-black/5 bg-[#F8F9FA] hover:bg-white hover:border-purple/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Decorative corner shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-125" />

                <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 text-purple flex items-center justify-center mb-8 relative z-10 group-hover:bg-purple group-hover:text-yellow group-hover:border-purple transition-colors duration-500 shadow-sm">
                  <b.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                <div className="relative z-10 flex flex-col grow">
                  <h3 className="font-display font-bold text-black text-2xl uppercase tracking-tight mb-4 group-hover:text-purple transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="font-body text-black/60 leading-relaxed mt-auto">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP TIERS ── */}
      <section className="px-6 md:px-16 py-24 bg-[#F8F9FA] border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-black mb-4">
              Membership <span className="text-purple">Categories</span>
            </h2>
            <p className="font-body text-xl text-black/60 max-w-2xl">
              Find the right fit for your professional journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col p-10 md:p-12 rounded-[2.5rem] border border-black/10 bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-4 mb-8 pb-8 border-b border-black/5">
                  <h3 className="font-display font-bold text-black text-3xl md:text-4xl uppercase tracking-tight">
                    {tier.name}
                  </h3>
                  <span className="font-body font-bold text-sm md:text-base text-purple bg-purple/10 px-5 py-2 rounded-full uppercase tracking-widest text-left">
                    {tier.fee}
                  </span>
                </div>
                <p className="font-body text-lg text-black/70 leading-relaxed mb-8">
                  {tier.eligibility}
                </p>
                <ul className="flex flex-col gap-4 mb-12 flex-grow">
                  {tier.perks.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-4 font-body text-black/80"
                    >
                      <span className="shrink-0 w-6 h-6 rounded-full bg-yellow text-black flex items-center justify-center text-xs mt-0.5">
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  disabled
                  className="mt-auto inline-flex items-center justify-center gap-3 w-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-black/40 bg-black/5 rounded-full cursor-not-allowed border border-black/10"
                >
                  Applications Closed
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
