import { useState } from "react";
import { Link } from "react-router-dom";


const teamMembers = [
  { name: "Arjun Menon", role: "President", linkedin: "#", instagram: "#" },
  { name: "Priya Nair", role: "Vice President", linkedin: "#", instagram: "#" },
  { name: "Rohit Krishnan", role: "Creative Director", linkedin: "#", instagram: "#" },
  { name: "Sneha Pillai", role: "Head of Events", linkedin: "#", instagram: "#" },
  { name: "Anil Kumar", role: "Communications Lead", linkedin: "#", instagram: "#" },
  { name: "Divya Raj", role: "Design Lead", linkedin: "#", instagram: "#" },
];

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
    <main className="pt-16 min-h-screen bg-surface">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 pt-16 pb-20 border-b border-(--color-muted) overflow-hidden">
        <img src="/eye-balls.svg" alt="" aria-hidden="true"
          className="absolute right-0 top-0 w-40 md:w-56 opacity-10 pointer-events-none select-none" />

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          {/* Left */}
          <div className="flex-55 flex flex-col gap-6">
            <span className="font-body italic text-purple text-sm tracking-wide">About</span>
            <h1 className="font-display font-bold text-bg-warm leading-[1.05] text-[clamp(2.4rem,6vw,4.5rem)] tracking-tight">
              Advertisement{" "}
              <span className="text-coral">Club TVM</span>
            </h1>
            <p className="font-body text-base text-bg-warm/70 leading-relaxed max-w-md">
              A vibrant community of advertising and media professionals in Kerala's capital — fostering innovation, collaboration, and professional excellence.
            </p>
            <Link to="/about"
              className="self-start inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium tracking-wide text-white bg-coral rounded-full transition-opacity hover:opacity-85">
              Join with Us
            </Link>
          </div>

          {/* Right */}
          <div className="flex-45 w-full">
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-md bg-muted">
              <img src="https://placehold.co/800x700/1a1a2e/ffffff?text=About+ACT" alt="About ACT"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
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
            <div key={seed} className="aspect-video rounded-2xl overflow-hidden shadow-sm bg-muted">
              <img src="https://placehold.co/700x525/2d1b69/ffffff?text=Photo" alt=""
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <div key={member.name}
              className="flex items-start gap-4 border border-(--color-muted) rounded-2xl p-4 bg-white hover:shadow-md transition-shadow">
              {/* Photo */}
              <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-muted">
                <img src="https://placehold.co/200x200/2d1b69/ffffff?text=Photo"
                  alt={member.name} className="w-full h-full object-cover" />
              </div>
              {/* Info */}
              <div className="flex flex-col justify-between h-full gap-2 py-0.5">
                <div className="flex flex-col gap-1 text-xs font-body">
                  <a href={member.linkedin} className="text-purple hover:underline">LinkedIn</a>
                  <a href={member.instagram} className="text-purple hover:underline">Instagram</a>
                  <span className="text-bg-warm/50">{member.role}</span>
                </div>
                <p className="font-display font-bold text-bg-warm text-sm tracking-tight">{member.name}</p>
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
