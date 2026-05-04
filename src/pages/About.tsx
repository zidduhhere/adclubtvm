import { useState } from "react";
import { Link } from "react-router-dom";
import { committee } from "../data/members";

export default function About() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="pt-16 min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="w-full bg-white border-b border-(--color-muted)"
        style={{ minHeight: "92svh", display: "flex", flexDirection: "column" }}
      >
        <div className="flex-1 flex items-center justify-center px-6 md:px-16">
          <div className="max-w-3xl w-full py-20 md:py-16 flex flex-col items-center text-center gap-6">
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-purple">About</span>
            <h1 className="font-display font-bold text-bg-warm leading-[1.02] tracking-tight text-[clamp(3.5rem,8.5vw,6rem)]">
              Advertising{" "}
              <span style={{ color: "#FEC812" }}>Club TVM</span>
            </h1>
            <p className="font-body text-base text-bg-warm/60 leading-relaxed max-w-md">
              A vibrant community of advertising and media professionals in Kerala's capital — fostering innovation, collaboration, and professional excellence.
            </p>
            <Link to="/membership"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium tracking-wide text-white bg-purple rounded-full transition-opacity hover:opacity-85">
              Join with Us
            </Link>
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
            "Advertising Club Trivandrum (ACT) was established with the mission of bringing together the most creative and passionate advertising minds in Kerala's capital. We believe that collaboration between professionals, agencies, and brands is the cornerstone of a thriving industry ecosystem.",
            "Our objective is to foster continuous learning and professional growth through curated events, seminars, and networking sessions. We aim to elevate the standards of advertising, marketing communication, and media in Trivandrum and across Kerala.",
            "By building bridges between emerging talent and industry veterans, ACT serves as a platform for mentorship, recognition, and collective advancement — celebrating outstanding creative work through initiatives like the LOA Awards.",
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
            "ACT began as a conversation among a handful of advertising professionals who recognised a gap — Trivandrum, despite its rich creative talent, lacked a dedicated professional network for the advertising industry. That conversation became a movement.",
            "In 2024, Advertising Club Trivandrum was officially launched, with its logo unveiled by none other than Mohanlal — a defining moment that signalled the industry's support for this new community. Since then, we've grown rapidly, with members spanning agencies, brands, digital studios, and media houses.",
            "Our story is still being written — one event, one connection, and one campaign at a time. Every member who joins ACT adds a new chapter to this collective narrative of passion for the craft.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {committee.map((member) => (
            <div key={member.name} className="flex flex-col gap-3">
              {/* Photo — square, no rounded corners */}
              <div className="bg-muted overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img src="https://placehold.co/400x400/2d1b69/ffffff?text=Photo"
                  alt={member.name} className="w-full h-full object-cover" />
              </div>
              {/* Info */}
              <div className="flex flex-col gap-0.5">
                <p className="font-display font-bold text-bg-warm text-base tracking-tight">{member.name}</p>
                <p className="font-body italic text-sm text-bg-warm/55">{member.role}</p>
              </div>
            </div>
          ))}
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
