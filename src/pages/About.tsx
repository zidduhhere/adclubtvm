import { useState, useRef } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageHero from "../components/PageHero";
import { committee } from "../data/members";

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function About() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const container = useRef<HTMLDivElement>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  }

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

  const objectives = [
    "To create a vibrant network for professionals to exchange ideas, share knowledge, and stay updated on industry trends.",
    "To organize workshops, seminars, and events aimed at enhancing skills and promoting creative excellence.",
    "To recognize and celebrate achievements in advertising and marketing communication.",
    "To inspire and foster new talents to the advertising & media industry in the region.",
  ];

  return (
    <main
      ref={container}
      className="min-h-screen bg-white text-black overflow-x-hidden font-body selection:bg-yellow selection:text-black pt-20"
    >
      {/* ── 1. HERO HEADER ── */}
      <PageHero
        title={
          <>
            <span className="hero-text block">Our</span>
            <span className="hero-text block">Story</span>
          </>
        }
      />

      {/* ── INTRO / MANIFESTO ── */}
      <section className="px-6 md:px-16 pb-24 md:pb-24 bg-white flex justify-end text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="font-display font-medium text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] text-black/80">
            <span className="text-purple font-bold">
              Advertising Club Trivandrum
            </span>{" "}
            was born from the collective vision of like-minded professionals
            passionate about elevating the standards of advertising and
            communication. Established in{" "}
            <span className="text-yellow font-bold">2024</span>, the Club aims
            to connect the advertising fraternity in Trivandrum, foster
            learning, and create impactful collaborations.
          </p>
        </motion.div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="px-6 md:px-16 py-24 bg-[#F8F9FA] border-b border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-center text-center">
          <div>
            <span className="block font-body text-purple font-bold tracking-widest uppercase mb-2">
              Established In
            </span>
            <p className="font-display font-bold text-black text-[clamp(4rem,10vw,7rem)] leading-none tracking-tight">
              2024
            </p>
          </div>
          <div className="w-full md:w-px h-px md:h-32 bg-black/10"></div>
          <div>
            <span className="block font-body text-yellow font-bold tracking-widest uppercase mb-2">
              Members
            </span>
            <p className="font-display font-bold text-black text-[clamp(4rem,10vw,7rem)] leading-none tracking-tight">
              100<span className="text-purple">+</span>
            </p>
          </div>
          <div className="w-full md:w-px h-px md:h-32 bg-black/10"></div>
          <div>
            <span className="block font-body text-purple font-bold tracking-widest uppercase mb-2">
              Organizations
            </span>
            <p className="font-display font-bold text-black text-[clamp(4rem,10vw,7rem)] leading-none tracking-tight">
              50<span className="text-yellow">+</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR OBJECTIVES ── */}
      <section className="px-6 md:px-16 py-32 bg-white border-b border-black/5 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-200 h-200 bg-yellow/5 rounded-full blur-[120px] -mr-50 -mt-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 flex flex-col md:flex-row gap-12 items-end justify-between">
            <div className="max-w-3xl">
              <h2 className="font-display font-bold text-[clamp(3rem,6vw,5.5rem)] uppercase tracking-tight text-black mb-6 leading-none">
                Our <span className="text-purple">Objectives</span>
              </h2>
              <p className="font-body text-xl md:text-2xl text-black/60">
                The core pillars driving our community forward, shaping the
                future of advertising in Trivandrum.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 auto-rows-fr">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`relative flex flex-col justify-between p-10 lg:p-14 rounded-[2.5rem] overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] h-full ${
                  i === 0
                    ? "bg-purple-deep text-white"
                    : i === 1
                      ? "bg-purple text-white"
                      : i === 2
                        ? "bg-[#F8F9FA] text-black border border-black/5"
                        : "bg-yellow text-black"
                }`}
              >
                {/* Massive Number Background */}
                <div
                  className={`absolute -right-4 -bottom-10 text-[10rem] lg:text-[14rem] font-display font-bold leading-none transition-transform duration-700 group-hover:scale-110 pointer-events-none select-none ${
                    i === 0
                      ? "text-white/5"
                      : i === 1
                        ? "text-white/10"
                        : i === 2
                          ? "text-black/5"
                          : "text-black/10"
                  }`}
                >
                  0{i + 1}
                </div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-1 mb-10 transition-all duration-500 group-hover:w-24 ${
                      i === 0
                        ? "bg-yellow"
                        : i === 1
                          ? "bg-yellow"
                          : i === 2
                            ? "bg-purple"
                            : "bg-purple-deep"
                    }`}
                  ></div>

                  <p className="font-display font-bold text-2xl lg:text-3xl uppercase tracking-tight leading-snug">
                    {obj}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANAGING COMMITTEE ── */}
      <section className="px-6 md:px-16 py-24 bg-[#F8F9FA] border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-black mb-4">
              Managing <span className="text-purple">Committee</span>
            </h2>
            <p className="font-body text-xl text-black/60 max-w-2xl mx-auto">
              The people behind Advertising Club Trivandrum.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {(["Office Bearers", "Advisory Board"] as const).map((group) => {
              const groupMembers = committee.filter((m) => m.group === group);
              if (groupMembers.length === 0) return null;

              return (
                <div key={group} className="flex flex-col gap-10">
                  <h3 className="font-display font-bold text-black text-3xl md:text-4xl uppercase tracking-tight border-b border-black/10 pb-4">
                    {group}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {groupMembers.map((member, i) => (
                      <motion.div
                        key={member.name}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex flex-col rounded-[2.5rem] border border-black/10 bg-white overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer isolate"
                      >
                        <div className="w-full aspect-4/5 bg-[#F8F9FA] relative overflow-hidden flex items-center justify-center border-b border-black/5 rounded-t-[2.5rem] [transform:translateZ(0)]">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              loading="lazy"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                          ) : (
                            <span className="font-display text-black/20 uppercase text-xs tracking-widest font-bold text-center px-4">
                              Photo Unavailable
                            </span>
                          )}
                          <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/10 transition-colors duration-500 mix-blend-multiply pointer-events-none" />
                        </div>
                        <div className="flex flex-col gap-2 p-8 bg-white grow">
                          <p className="font-display font-bold text-black text-2xl uppercase tracking-tight leading-none group-hover:text-purple transition-colors duration-300">
                            {member.name}
                          </p>
                          {member.role !== "Member" && (
                            <span className="text-[11px] font-bold text-black/40 tracking-widest uppercase mt-1">
                              {member.role}
                            </span>
                          )}
                          <span className="text-sm font-body text-black/70 mt-auto pt-6 border-t border-black/5 font-medium">
                            {member.company}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT US ── */}
      <section id="contact" className="px-6 md:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 flex flex-col">
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-black mb-8">
              Get In <br />
              <span className="text-yellow">Touch</span>
            </h2>

            <div className="flex flex-col gap-8">
              <div>
                <p className="font-body font-bold text-purple text-sm uppercase tracking-widest mb-3">
                  President's Office
                </p>
                <p className="font-body text-black/70 text-lg leading-relaxed">
                  PLAINSPEAK, TC 15/2008, VRA A18
                  <br />
                  Behind Govt. College for Women
                  <br />
                  Vazhuthacaud, 695014, Kerala, India
                </p>
              </div>

              <div>
                <p className="font-body font-bold text-purple text-sm uppercase tracking-widest mb-3">
                  Contact
                </p>
                <p className="font-body text-black/70 text-lg">
                  T: 0471 4060881
                </p>
                <a
                  href="mailto:adclubtrivandrum@gmail.com"
                  className="font-body text-black/70 text-lg hover:text-purple transition-colors"
                >
                  adclubtrivandrum@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="border border-black/10 rounded-[2.5rem] p-8 md:p-12 bg-[#F8F9FA]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-body font-bold text-black/50 tracking-widest uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black font-body placeholder:text-black/30 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-body font-bold text-black/50 tracking-widest uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black font-body placeholder:text-black/30 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-body font-bold text-black/50 tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white text-black font-body placeholder:text-black/30 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled
                  className="mt-4 self-start inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-black/40 bg-black/5 rounded-full cursor-not-allowed border border-black/10 transition-all"
                >
                  Form Disabled
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
