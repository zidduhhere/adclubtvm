import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { committee } from "../data/members";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const container = useRef<HTMLDivElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  }

  useGSAP(
    () => {
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
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <svg
            viewBox="0 0 1440 100"
            className="parallax-bg absolute top-20 left-0 w-full h-auto opacity-[0.15] stroke-black fill-none"
            preserveAspectRatio="none"
            style={{ strokeWidth: "1.5px" }}
          >
            <path d="M0,30 Q180,-10 360,30 T720,30 T1080,30 T1440,30" />
            <path d="M0,50 Q180,10 360,50 T720,50 T1080,50 T1440,50" />
            <path d="M0,70 Q180,30 360,70 T720,70 T1080,70 T1440,70" />
          </svg>

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
            About
          </div>

          <h1 className="hero-text font-display font-bold text-[clamp(3.5rem,8.5vw,6rem)] leading-[0.9] tracking-tight uppercase">
            Advertising <br />
            <span className="text-yellow">Club TVM</span>
          </h1>

          <p className="hero-text font-body text-xl md:text-2xl text-black/70 max-w-2xl leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <Link
            to="/membership"
            className="hero-text mt-6 inline-flex items-center gap-3 bg-purple text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            Join with Us
          </Link>
        </div>
      </section>

      {/* ── FOUNDED STAT ─────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted) text-center">
        <span className="block font-body italic text-purple text-lg mb-2 tracking-wide">
          Started In
        </span>
        <p className="font-display font-bold text-bg-warm text-[clamp(5rem,18vw,11rem)] leading-none tracking-tight">
          2024
        </p>
      </section>

      {/* ── 3-COLUMN IMAGE ROW ───────────────────────────────── */}
      <section className="px-6 md:px-16 py-16 border-b border-(--color-muted)">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {["about-a", "about-b", "about-c"].map((seed) => (
            <div key={seed} className="rounded-2xl overflow-hidden shadow-sm bg-muted" style={{ width: "400px", height: "400px", maxWidth: "100%" }}>
              <img src="https://placehold.co/400x400/2d1b69/ffffff?text=Photo" alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR OBJECTIVE ────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 py-20 border-b border-(--color-muted) overflow-hidden">
        <img src="/spiral-asset-1.svg" alt="" aria-hidden="true"
          className="absolute right-8 top-8 w-28 opacity-20 pointer-events-none select-none" />
        <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mb-8">
          Our Objective
        </h2>
        <div className="max-w-3xl flex flex-col gap-5">
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
            "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.",
            "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
          ].map((text, i) => (
            <p key={i} className="font-body text-base text-bg-warm/70 leading-relaxed">{text}</p>
          ))}
        </div>
      </section>

      {/* ── MEMBERS STAT ─────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted) text-center">
        <span className="block font-body italic text-purple text-lg mb-2 tracking-wide">
          With more than
        </span>
        <p className="font-display font-bold text-bg-warm text-[clamp(3.5rem,14vw,9rem)] leading-none tracking-tight">
          50+ members
        </p>
      </section>

      {/* ── FULL-WIDTH IMAGE ─────────────────────────────────── */}
      <section className="px-6 md:px-16 py-16 border-b border-(--color-muted)">
        <div className="w-full h-[180px] md:h-[220px] rounded-3xl overflow-hidden shadow-md bg-muted">
          <img src="https://placehold.co/1400x400/1a1a2e/ffffff?text=ACT+Community" alt="ACT community"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
        <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mb-8">
          Our Story
        </h2>
        <div className="max-w-3xl flex flex-col gap-5">
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
            "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.",
            "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
          ].map((text, i) => (
            <p key={i} className="font-body text-base text-bg-warm/70 leading-relaxed">{text}</p>
          ))}
        </div>
      </section>

      {/* ── CORE TEAM ────────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 py-20 border-b border-(--color-muted) overflow-hidden">
        <img src="/love-asset-3.svg" alt="" aria-hidden="true"
          className="absolute left-0 bottom-10 w-20 opacity-10 pointer-events-none select-none" />

        <h2 className="font-display font-bold text-bg-warm text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-center mb-14">
          Core Team
        </h2>

        <div className="flex flex-col gap-20">
          {(["Office Bearers", "Managing Committee", "Advisory Board"] as const).map((group) => {
            const groupMembers = committee.filter((m) => m.group === group);
            if (groupMembers.length === 0) return null;

            return (
              <div key={group} className="flex flex-col gap-8">
                <h3 className="font-display font-bold text-purple text-[clamp(1.5rem,3vw,2rem)] border-b border-muted pb-3">
                  {group}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {groupMembers.map((member) => (
                    <div key={member.name} className="flex flex-col gap-3 group">
                      {/* Photo */}
                      <div className="bg-muted flex items-center justify-center overflow-hidden w-full aspect-square relative">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                        ) : (
                          <span className="font-display text-bg-warm/30 uppercase text-[10px] tracking-widest font-bold text-center px-4">
                            Photo Unavailable
                          </span>
                        )}
                        <div className="absolute inset-0 bg-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      {/* Info */}
                      <div className="flex flex-col gap-0.5">
                        <p className="font-display font-bold text-bg-warm text-lg tracking-tight">{member.name}</p>
                        {member.role !== "Member" && (
                          <p className="font-body text-sm font-semibold text-purple tracking-wide">{member.role}</p>
                        )}
                        <p className="font-body text-sm text-bg-warm/60 leading-snug">{member.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CONTACT US ───────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="font-display font-bold text-bg-warm text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-center mb-12">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto border border-(--color-muted) rounded-2xl p-8 bg-white">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[
              { name: "name", label: "Name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label className="text-xs font-body font-medium text-purple tracking-[0.15em] uppercase">
                  {field.label}
                </label>
                <input type={field.type} name={field.name}
                  value={(form as Record<string, string>)[field.name]}
                  onChange={handleChange} required placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-(--color-muted) bg-surface text-bg-warm text-sm font-body placeholder:text-bg-warm/30 focus:outline-none focus:border-purple transition-colors" />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-body font-medium text-purple tracking-[0.15em] uppercase">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-(--color-muted) bg-surface text-bg-warm text-sm font-body placeholder:text-bg-warm/30 focus:outline-none focus:border-purple transition-colors resize-none" />
            </div>

            <button type="submit"
              className="self-end inline-flex items-center gap-2 px-7 py-3 text-sm font-body font-medium tracking-wide text-white bg-coral rounded-full transition-opacity hover:opacity-85">
              Send Message →
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
