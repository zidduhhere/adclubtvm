import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
      <section className="hero-section min-h-screen px-6 md:px-16 pt-32 pb-24 relative flex flex-col items-center justify-center text-center">
        {/* Wavy lines / Grid Backgrounds from Figma */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {/* <svg
            viewBox="0 0 1440 100"
            className="parallax-bg absolute top-20 left-0 w-full h-auto opacity-[0.15] stroke-black fill-none"
            preserveAspectRatio="none"
            style={{ strokeWidth: "1.5px" }}
          >
            <path d="M0,30 Q180,-10 360,30 T720,30 T1080,30 T1440,30" />
            <path d="M0,50 Q180,10 360,50 T720,50 T1080,50 T1440,50" />
            <path d="M0,70 Q180,30 360,70 T720,70 T1080,70 T1440,70" />
          </svg> */}

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

          <h1 className="hero-text font-display font-bold text-[clamp(3.5rem,8.5vw,6rem)] leading-[0.9] tracking-tight">
            Join Now <br />
          </h1>

          <p className="hero-text font-body text-xl md:text-2xl text-black/70 max-w-2xl leading-relaxed mt-4">
            Why you should be a member of the Advertising Club Trivandrum
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
      <section className="px-6 md:px-16 py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-black mb-4">
              Why <span className="text-purple">Join</span> ACT?
            </h2>
            <p className="font-body text-xl text-black/60 max-w-2xl">
              Join us to grow, learn, and be a part of a vibrant professional
              community!
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

                <div className="relative z-10 flex flex-col flex-grow">
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
                {tier.id === "institutional" ? (
                  <Link
                    to="/membership/institutional"
                    className="mt-auto inline-flex items-center justify-center gap-3 w-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-purple transition-colors"
                  >
                    Apply Now →
                  </Link>
                ) : tier.id === "student" ? (
                  <Link
                    to="/membership/student"
                    className="mt-auto inline-flex items-center justify-center gap-3 w-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-purple transition-colors"
                  >
                    Apply Now →
                  </Link>
                ) : tier.id === "corporate" ? (
                  <Link
                    to="/membership/corporate"
                    className="mt-auto inline-flex items-center justify-center gap-3 w-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-purple transition-colors"
                  >
                    Apply Now →
                  </Link>
                ) : (
                  <a
                    href={`mailto:adclubtrivandrum@gmail.com?subject=Membership%20Application%20-%20${tier.name}`}
                    className="mt-auto inline-flex items-center justify-center gap-3 w-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-purple transition-colors"
                  >
                    Apply Now →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
