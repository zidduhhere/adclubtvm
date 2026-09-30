import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
          <div className="hero-text inline-block border-2 border-black/20 rounded-full px-6 py-2 text-xs font-bold  tracking-widest text-black/60 shadow-sm">
            About Us
          </div>

          <h1 className="hero-text font-display font-bold text-[clamp(3.5rem,8.5vw,6rem)] leading-[0.9] tracking-tight ">
            Advertising
            <br />
            <span className="text-yellow">Club TVM</span>
          </h1>

          <p className="hero-text font-body text-xl md:text-2xl text-black/70 max-w-2xl leading-relaxed mt-4">
            Advertising Club Trivandrum was born from the collective vision of
            like-minded professionals passionate about elevating the standards
            of advertising and communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              to="/membership"
              className="hero-text inline-flex items-center justify-center gap-3 bg-purple text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              Join the Club
            </Link>
            <a
              href="#contact"
              className="hero-text inline-flex items-center justify-center gap-3 bg-transparent border-2 border-black/20 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:border-black transition-all"
            >
              Contact Us ↓
            </a>
          </div>
        </div>
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
              Community
            </span>
            <p className="font-display font-bold text-black text-[clamp(4rem,10vw,7rem)] leading-none tracking-tight">
              50<span className="text-purple">+</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR OBJECTIVES ── */}
      <section className="px-6 md:px-16 py-32 bg-white border-b border-black/5 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow/5 rounded-full blur-[120px] -mr-[200px] -mt-[200px] pointer-events-none" />

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
                    ? "bg-[#3A1D5A] text-white"
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
                            : "bg-[#3A1D5A]"
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

      {/* ── BYLAW SECTION (Editorial Layout) ── */}
      <section className="px-6 md:px-16 py-24 md:py-32 bg-white border-b border-black/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-5/12 flex flex-col items-start relative">
            <div className="text-[12rem] lg:text-[18rem] font-display font-bold text-black/[0.03] leading-none absolute -top-12 -left-8 md:-left-12 pointer-events-none select-none">
              §
            </div>
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight text-black relative z-10 leading-[0.9]">
              Our <br/><span className="text-purple">Bylaw</span>
            </h2>
            <div className="w-24 h-1 bg-yellow mt-10"></div>
          </div>
          
          <div className="w-full md:w-7/12 flex flex-col items-start md:border-l-2 md:border-black/10 md:pl-16 py-4 mt-8 md:mt-0">
            <p className="font-display text-2xl md:text-3xl leading-snug text-black/80 font-medium mb-10">
              Advertising Club Trivandrum’s Bylaw serve as a roadmap for the organization's actions and also contain the fundamental principles of the association.
            </p>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-black/40 mb-6">
               To view the Bylaw, click on the link below
            </p>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-4 bg-white border-2 border-black/90 text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300"
            >
              Read The Bylaw
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
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
            {(
              [
                "Office Bearers",
                "Advisory Board",
              ] as const
            ).map((group) => {
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
                        <div className="w-full aspect-[4/5] bg-[#F8F9FA] relative overflow-hidden flex items-center justify-center border-b border-black/5 rounded-t-[2.5rem] [transform:translateZ(0)]">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                          ) : (
                            <span className="font-display text-black/20 uppercase text-xs tracking-widest font-bold text-center px-4">
                              Photo Unavailable
                            </span>
                          )}
                          <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/10 transition-colors duration-500 mix-blend-multiply pointer-events-none" />
                        </div>
                        <div className="flex flex-col gap-2 p-8 bg-white flex-grow">
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
                  className="mt-4 self-start inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-purple hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
