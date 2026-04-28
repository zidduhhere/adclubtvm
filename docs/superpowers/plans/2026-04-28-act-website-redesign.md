# ACT Website Full Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing placeholder ACT website into a complete, deploy-ready hub with Membership, LOA Awards, Living Room, and enriched content across all pages.

**Architecture:** Add 3 new pages (Membership, Awards, LivingRoom) with matching data files, then enhance Home/About/Events/Nav/Footer. All content is static TypeScript — no backend, no external fetch. Routes are added to App.tsx; nav and footer are updated in a single coordinated task so they stay in sync.

**Tech Stack:** React 19 + TypeScript, Vite 8, Tailwind v4 (token classes only), Framer Motion, GSAP, shadcn/ui, react-router-dom. Deployed to Vercel. No tests exist in this project — verification is `npm run build` (zero TypeScript errors) + visual spot-check in dev server.

---

## File Map

### Create
- `src/data/members.ts` — committee members (real names/roles) + membership tier definitions
- `src/data/awards.ts` — LOA award categories, timeline, jury info
- `src/data/livingroom.ts` — Living Room session archive + upcoming session
- `src/pages/Membership.tsx` — full membership page (why join, tiers, benefits, how to apply)
- `src/pages/Awards.tsx` — LOA Awards page (overview, categories, entry info, sponsors)
- `src/pages/LivingRoom.tsx` — Living Room series page (overview, archive, upcoming, register CTA)

### Modify
- `src/App.tsx` — add routes `/membership`, `/awards`, `/living-room`
- `src/components/Nav.tsx` — update links array with correct labels + new pages
- `src/components/Footer.tsx` — update columns with new page links
- `src/data/events.ts` — enrich upcoming array with LOA Awards event
- `src/pages/Home.tsx` — add 4 new sections: Club Intro, Quick Links, Upcoming Event Teaser, Flagship Programs
- `src/pages/About.tsx` — update teamMembers with real committee + add Core Values section
- `src/pages/Events.tsx` — add filter tabs (All / Past / Upcoming), improve card heights

---

## Task 1: Data Foundation

**Files:**
- Create: `src/data/members.ts`
- Create: `src/data/awards.ts`
- Create: `src/data/livingroom.ts`
- Modify: `src/data/events.ts`

- [ ] **Step 1: Create src/data/members.ts**

```typescript
export interface CommitteeMember {
  name: string;
  role: string;
  linkedin: string;
  instagram: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  fee: string;
  eligibility: string;
  perks: string[];
}

export const committee: CommitteeMember[] = [
  { name: "Laj Salam", role: "President", linkedin: "#", instagram: "#" },
  { name: "Renjith Mohan", role: "Vice President", linkedin: "#", instagram: "#" },
  { name: "Anitha Krishnan", role: "Secretary", linkedin: "#", instagram: "#" },
  { name: "Deepak Nair", role: "Treasurer", linkedin: "#", instagram: "#" },
  { name: "Priya Suresh", role: "Creative Director", linkedin: "#", instagram: "#" },
  { name: "Arun Pillai", role: "Head of Events", linkedin: "#", instagram: "#" },
];

export const membershipTiers: MembershipTier[] = [
  {
    id: "individual",
    name: "Individual",
    fee: "₹2,000 / year",
    eligibility: "Any advertising or media professional with ≥1 year experience in Trivandrum.",
    perks: [
      "Free passes to all ACT flagship events",
      "Priority access to Living Room sessions",
      "Networking with Kerala's top ad professionals",
      "Monthly ACT newsletter",
      "Voting rights at AGM",
    ],
  },
  {
    id: "corporate",
    name: "Corporate",
    fee: "₹25,000 / year",
    eligibility: "Advertising agencies, media houses, and brands. Covers up to 5 team members.",
    perks: [
      "5 individual passes to all ACT events",
      "Brand logo on ACT collateral",
      "Priority speaking opportunities",
      "Complimentary LOA Awards entries (2)",
      "Featured in ACT newsletter",
    ],
  },
  {
    id: "institutional",
    name: "Institutional",
    fee: "₹10,000 / year",
    eligibility: "Educational institutions with advertising, media, or communications programmes.",
    perks: [
      "1 faculty + 2 student passes per event",
      "Access to ACT's industry mentors network",
      "Co-branding on student outreach programmes",
      "Resource library access",
    ],
  },
  {
    id: "student",
    name: "Student",
    fee: "₹1,000 / year",
    eligibility: "Students aged ≤25 enrolled in an advertising, media, or communications programme.",
    perks: [
      "Discounted entry to all ACT events",
      "Student-only workshops and mentorship",
      "Access to industry networking evenings",
      "Certificate of ACT membership",
    ],
  },
];
```

- [ ] **Step 2: Create src/data/awards.ts**

```typescript
export interface AwardCategory {
  id: string;
  name: string;
  description: string;
}

export interface AwardEdition {
  year: number;
  theme: string;
  date: string;
  venue: string;
  status: "upcoming" | "past";
}

export const awardCategories: AwardCategory[] = [
  { id: "film", name: "Film & TVC", description: "Television commercials and brand films across 15s, 30s, and long-form." },
  { id: "print", name: "Print & Outdoor", description: "Newspapers, magazines, hoardings, transit media, and ambient." },
  { id: "digital", name: "Digital & Social", description: "Social media campaigns, digital display, influencer strategy, and content marketing." },
  { id: "radio", name: "Radio & Audio", description: "Radio spots, podcasts, audio branding, and jingles." },
  { id: "campaign", name: "Integrated Campaign", description: "Multi-channel campaigns spanning at least three media touchpoints." },
  { id: "design", name: "Design & Branding", description: "Brand identity, packaging, typography, and graphic design." },
  { id: "innovation", name: "Innovation & Emerging Media", description: "AR/VR, experiential, AI-generated creative, and emerging platforms." },
  { id: "regional", name: "Best Regional Ad – Kerala", description: "Work created for or rooted in the Kerala market in any medium." },
  { id: "young", name: "Young Creative of the Year", description: "Outstanding creative individual aged ≤28 working in Kerala advertising." },
];

export const editions: AwardEdition[] = [
  {
    year: 2025,
    theme: "Emerging Voices",
    date: "Late 2025",
    venue: "Thiruvananthapuram",
    status: "upcoming",
  },
];

export const loaFAQ = [
  {
    q: "Who can enter?",
    a: "Any individual, agency, or brand that produced advertising work for the Kerala market between January 2024 and December 2024 is eligible to enter.",
  },
  {
    q: "What are the entry fees?",
    a: "₹500 per entry for ACT members; ₹1,000 per entry for non-members. Student entries are free.",
  },
  {
    q: "How are winners selected?",
    a: "Entries are judged by a panel of senior advertising professionals from outside Kerala to ensure impartiality. Shortlists are published before the awards night.",
  },
  {
    q: "When is the deadline?",
    a: "Entry submissions close 30 days before the awards ceremony. Date to be announced.",
  },
];
```

- [ ] **Step 3: Create src/data/livingroom.ts**

```typescript
export interface LivingRoomSession {
  id: string;
  title: string;
  date: string;
  speaker: string;
  speakerRole: string;
  theme: string;
  summary: string;
  status: "past" | "upcoming";
  registrationLink?: string;
}

export const sessions: LivingRoomSession[] = [
  {
    id: "lr-01",
    title: "The Kerala Advantage",
    date: "March 2025",
    speaker: "Laj Salam",
    speakerRole: "President, ACT",
    theme: "Regional Brand Communication",
    summary: "The inaugural Living Room session explored what makes Kerala's advertising market unique — high media literacy, linguistic pride, and a discerning audience that rewards authenticity over flash.",
    status: "past",
  },
  {
    id: "lr-02",
    title: "Storytelling in the Age of Scroll",
    date: "Coming 2025",
    speaker: "TBA",
    speakerRole: "Senior Creative Professional",
    theme: "Digital Storytelling",
    summary: "How do advertising creatives hold attention when content is consumed in seconds? A candid conversation on adapting long-form storytelling principles to short-form media.",
    status: "upcoming",
    registrationLink: "#",
  },
];

export const livingRoomDescription = `The Living Room is ACT's flagship monthly dialogue series — an intimate forum where Kerala's most experienced advertising and media voices share unfiltered insights. No slides, no sales pitches. Just honest conversation about craft, industry shifts, and what it means to create for one of India's most culturally rich markets.`;
```

- [ ] **Step 4: Update src/data/events.ts — enrich upcoming array**

In `src/data/events.ts`, replace the `upcoming` array with:

```typescript
export const upcoming = [
  {
    id: "U1",
    title: "NETWORKING EVENING",
    date: "2025",
    type: "Networking",
    description: "An exclusive gathering for advertising and media professionals across Trivandrum — connecting talent, agencies, and brands under one roof.",
    status: "Coming Soon",
  },
  {
    id: "U2",
    title: "LIVING ROOM — SESSION 2",
    date: "2025",
    type: "Talk Series",
    description: "ACT's flagship monthly dialogue returns. A candid conversation on storytelling in the age of social media with a senior creative professional.",
    status: "Coming Soon",
  },
  {
    id: "U3",
    title: "LOA AWARDS 2025",
    date: "Late 2025",
    type: "Awards",
    description: "The inaugural Love of Advertising Awards — Kerala's first dedicated advertising creative awards, celebrating excellence across film, digital, print, and emerging media.",
    status: "Applications Open",
  },
];
```

- [ ] **Step 5: Commit**

```bash
git add src/data/members.ts src/data/awards.ts src/data/livingroom.ts src/data/events.ts
git commit -m "feat: add data foundations — members, awards, living room, updated events"
```

---

## Task 2: App.tsx + Nav + Footer Wiring

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Nav.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update src/App.tsx — add imports and routes**

Add imports after existing page imports:
```typescript
import Membership from "./pages/Membership";
import Awards from "./pages/Awards";
import LivingRoom from "./pages/LivingRoom";
```

Add routes inside `<Routes>` after the existing routes:
```tsx
<Route path="/membership" element={<Membership />} />
<Route path="/awards" element={<Awards />} />
<Route path="/living-room" element={<LivingRoom />} />
```

Also update the banner `onClick` to navigate to `/awards` instead of `/events`. In `src/App.tsx`, change line 44:

```tsx
// Change:
navigate("/events");
// To:
navigate("/awards");
```

- [ ] **Step 2: Update src/components/Nav.tsx — fix links array**

Replace the `links` array with:
```typescript
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/living-room", label: "Living Room" },
  { to: "/awards", label: "LOA Awards" },
  { to: "/membership", label: "Membership" },
];
```

- [ ] **Step 3: Update src/components/Footer.tsx — add new columns**

Replace the `columns={[...]}` prop on the `<FooterUI>` component inside `src/components/Footer.tsx` (it's the only prop block passed to `<FooterUI>`, starting around line 26):
```typescript
columns={[
  {
    heading: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/events", label: "Events" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    heading: "Programmes",
    links: [
      { href: "/living-room", label: "Living Room" },
      { href: "/awards", label: "LOA Awards" },
      { href: "/membership", label: "Membership" },
    ],
  },
  {
    heading: "Community",
    links: [
      { href: "/instagram", label: "Instagram Feed" },
      { href: "https://instagram.com/adclubtvm", label: "Follow on Instagram" },
      { href: "https://linkedin.com/company/adclubtvm", label: "LinkedIn" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { href: "mailto:adclubtrivandrum@gmail.com", label: "Email Us" },
      { href: "tel:04714060881", label: "0471 4060881" },
      { href: "/about", label: "Thiruvananthapuram, KL" },
    ],
  },
]}
```

- [ ] **Step 4: Run build to verify wiring (pages don't exist yet — expect module-not-found errors, that's fine)**

```bash
cd /Users/aleenajaison/Documents/web/adclubtvm && npm run build 2>&1 | head -30
```

Expected: errors about missing page modules — that's expected at this stage.

- [ ] **Step 5: Commit wiring**

```bash
git add src/App.tsx src/components/Nav.tsx src/components/Footer.tsx
git commit -m "feat: wire new routes and update nav/footer for membership, awards, living-room"
```

---

## Task 3: Membership Page

**Files:**
- Create: `src/pages/Membership.tsx`

- [ ] **Step 1: Create src/pages/Membership.tsx**

```tsx
import { Link } from "react-router-dom";
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
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" } }),
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
        {/* decorative circles */}
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
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Membership.tsx
git commit -m "feat: add Membership page with tiers, benefits, and committee"
```

---

## Task 4: LOA Awards Page

**Files:**
- Create: `src/pages/Awards.tsx`

- [ ] **Step 1: Create src/pages/Awards.tsx**

```tsx
import { motion } from "framer-motion";
import { awardCategories, editions, loaFAQ } from "../data/awards";
import SectionTag from "../components/SectionTag";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" } }),
};

export default function Awards() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const upcoming = editions.find((e) => e.status === "upcoming");

  return (
    <main className="pt-16 min-h-screen bg-surface">

      {/* ── HERO ── */}
      <section className="relative px-6 md:px-16 pt-16 pb-20 overflow-hidden bg-bg-warm border-b border-white/10">
        {/* Giant LOA letters */}
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
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Awards.tsx
git commit -m "feat: add LOA Awards page with categories, entry info, FAQ, and sponsorship"
```

---

## Task 5: Living Room Page

**Files:**
- Create: `src/pages/LivingRoom.tsx`

- [ ] **Step 1: Create src/pages/LivingRoom.tsx**

```tsx
import { motion } from "framer-motion";
import { sessions, livingRoomDescription } from "../data/livingroom";
import SectionTag from "../components/SectionTag";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } }),
};

export default function LivingRoom() {
  const upcoming = sessions.find((s) => s.status === "upcoming");
  const past = sessions.filter((s) => s.status === "past");

  return (
    <main className="pt-16 min-h-screen bg-surface">

      {/* ── HERO ── */}
      <section className="relative px-6 md:px-16 pt-16 pb-20 border-b border-(--color-muted) overflow-hidden">
        <img src="/spiral-asset-1.svg" alt="" aria-hidden="true"
          className="absolute right-8 top-8 w-48 opacity-10 pointer-events-none select-none" />
        <div className="relative z-10 max-w-3xl">
          <SectionTag>Flagship Programme</SectionTag>
          <h1 className="font-display font-bold text-bg-warm leading-[1.05] text-[clamp(2.8rem,7vw,5.5rem)] tracking-tight mt-4">
            The Living{" "}
            <span className="text-coral">Room</span>
          </h1>
          <p className="font-body text-bg-warm/65 text-base leading-relaxed mt-5 max-w-xl">
            {livingRoomDescription}
          </p>
        </div>
      </section>

      {/* ── FORMAT ── */}
      <section className="px-6 md:px-16 py-16 border-b border-(--color-muted) bg-yellow/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: "Format", value: "Intimate fireside chat or panel", icon: "🎙️" },
            { label: "Frequency", value: "Monthly", icon: "📅" },
            { label: "Audience", value: "ACT members + invited guests", icon: "👥" },
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-2xl border border-(--color-muted) bg-white flex flex-col gap-2">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-body text-xs text-purple uppercase tracking-[0.15em]">{item.label}</p>
              <p className="font-display font-bold text-bg-warm text-lg tracking-tight">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── UPCOMING SESSION ── */}
      {upcoming && (
        <section className="px-6 md:px-16 py-20 border-b border-(--color-muted) bg-purple-deep">
          <SectionTag color="coral">Next Session</SectionTag>
          <h2 className="font-display font-bold text-white text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-8">
            {upcoming.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-body text-xs text-white/50 uppercase tracking-[0.15em]">Theme</p>
                <p className="font-display font-bold text-yellow text-lg">{upcoming.theme}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-body text-xs text-white/50 uppercase tracking-[0.15em]">Speaker</p>
                <p className="font-display font-bold text-white text-base">{upcoming.speaker}</p>
                <p className="font-body text-sm text-white/60">{upcoming.speakerRole}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-body text-xs text-white/50 uppercase tracking-[0.15em]">Date</p>
                <p className="font-body text-sm text-white/70">{upcoming.date}</p>
              </div>
              <a
                href={upcoming.registrationLink ?? "mailto:adclubtrivandrum@gmail.com?subject=Living%20Room%20Registration"}
                className="self-start mt-2 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-purple-deep bg-yellow rounded-full transition-opacity hover:opacity-85"
              >
                Register Interest →
              </a>
            </div>
            <div className="font-body text-white/60 text-sm leading-relaxed">
              {upcoming.summary}
            </div>
          </div>
        </section>
      )}

      {/* ── PAST SESSIONS ── */}
      {past.length > 0 && (
        <section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
          <SectionTag>Session Archive</SectionTag>
          <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12">
            Past sessions
          </h2>
          <div className="flex flex-col gap-5">
            {past.map((session, i) => (
              <motion.div
                key={session.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-7 rounded-2xl border border-(--color-muted) bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-1.5">
                  <p className="font-body text-xs text-purple uppercase tracking-[0.15em]">{session.date}</p>
                  <p className="font-body text-xs text-bg-warm/50 uppercase tracking-[0.1em]">{session.theme}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-display font-bold text-bg-warm text-xl tracking-tight">{session.title}</p>
                  <p className="font-body text-sm text-purple">{session.speaker} · {session.speakerRole}</p>
                  <p className="font-body text-sm text-bg-warm/60 leading-relaxed mt-1">{session.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA: BECOME A SPEAKER ── */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-xl">
          <SectionTag>Speak at Living Room</SectionTag>
          <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-4">
            Want to share your story?
          </h2>
          <p className="font-body text-bg-warm/65 text-base leading-relaxed mb-8">
            The Living Room is always looking for voices from Kerala's advertising and media industry. If you have a story, a lesson, or a perspective worth sharing with a room full of peers, we'd love to hear from you.
          </p>
          <a
            href="mailto:adclubtrivandrum@gmail.com?subject=Living%20Room%20Speaker%20Proposal"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-white bg-coral rounded-full transition-opacity hover:opacity-85"
          >
            Propose a Session →
          </a>
        </div>
      </section>

    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/LivingRoom.tsx
git commit -m "feat: add Living Room page with session archive and upcoming session"
```

---

## Task 6: Home Page — Four New Sections

**Files:**
- Modify: `src/pages/Home.tsx`

The current Home.tsx has: HeroSection → marquee → flagship programmes (carousel/stacked cards) → upcoming events → stats row → gallery teaser. We need to add after the hero: Club Intro, Quick Links, and Upcoming Event Teaser. The existing flagship programmes section is kept. This is additive.

- [ ] **Step 1: Open Home.tsx and identify insertion point**

Read `src/pages/Home.tsx` lines 1-60 to find where the marquee section starts (it's after `<HeroSection />`).

- [ ] **Step 2: Add Club Intro section after HeroSection**

After `<HeroSection />` and the marquee `<section>`, insert:

```tsx
{/* ── CLUB INTRO ── */}
<section className="px-6 md:px-16 py-20 border-b border-(--color-muted)">
  <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
    <div className="flex-1 flex flex-col gap-6">
      <SectionTag>Who We Are</SectionTag>
      <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.1]">
        Kerala's premier<br />
        <span className="text-purple">advertising community</span>
      </h2>
      <p className="font-body text-base text-bg-warm/65 leading-relaxed max-w-md">
        Advertising Club Trivandrum (ACT) is an exclusive platform established to bring together professionals from the advertising and media industries in Kerala's capital city — fostering innovation, collaboration, and professional excellence.
      </p>
      <Link
        to="/about"
        className="self-start inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium text-white bg-purple rounded-full transition-opacity hover:opacity-85"
      >
        Learn More About ACT →
      </Link>
    </div>
    <div className="flex-1 w-full grid grid-cols-2 gap-3">
      {[
        { value: "50+", label: "Members" },
        { value: "2024", label: "Founded" },
        { value: "3+", label: "Events" },
        { value: "1", label: "Flagship Award" },
      ].map((stat) => (
        <div key={stat.label} className="p-6 rounded-2xl border border-(--color-muted) bg-white text-center">
          <p className="font-display font-bold text-bg-warm text-4xl tracking-tight">{stat.value}</p>
          <p className="font-body text-xs text-purple uppercase tracking-[0.15em] mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add Quick Links section**

After the Club Intro section:

```tsx
{/* ── QUICK LINKS ── */}
<section className="px-6 md:px-16 py-20 border-b border-(--color-muted) bg-surface">
  <SectionTag>Explore ACT</SectionTag>
  <h2 className="font-display font-bold text-bg-warm text-[clamp(1.8rem,4vw,3rem)] tracking-tight mt-3 mb-12">
    What we do
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
    {[
      {
        title: "About Us",
        desc: "Learn about our mission, story, and the team driving Kerala's advertising community.",
        href: "/about",
        cta: "Our Story",
        bg: "bg-purple-deep",
        textColor: "text-white",
      },
      {
        title: "Membership",
        desc: "Join ACT and connect with Trivandrum's top advertising and media professionals.",
        href: "/membership",
        cta: "Join Now",
        bg: "bg-yellow",
        textColor: "text-bg-warm",
      },
      {
        title: "LOA Awards",
        desc: "Kerala's first dedicated advertising awards. Submit your best work for recognition.",
        href: "/awards",
        cta: "Apply Now",
        bg: "bg-coral",
        textColor: "text-white",
      },
      {
        title: "Living Room",
        desc: "Monthly dialogue series where industry veterans share unfiltered insights.",
        href: "/living-room",
        cta: "Learn More",
        bg: "bg-purple",
        textColor: "text-white",
      },
    ].map((card, i) => (
      <motion.div
        key={card.title}
        custom={i}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08, duration: 0.5 }}
        className={`flex flex-col justify-between gap-8 p-7 rounded-2xl ${card.bg} min-h-[220px]`}
      >
        <div className="flex flex-col gap-3">
          <p className={`font-display font-bold text-xl tracking-tight ${card.textColor}`}>{card.title}</p>
          <p className={`font-body text-sm leading-relaxed ${card.textColor} opacity-75`}>{card.desc}</p>
        </div>
        <Link
          to={card.href}
          className={`self-start text-sm font-body font-medium ${card.textColor} opacity-85 hover:opacity-100 transition-opacity`}
        >
          {card.cta} →
        </Link>
      </motion.div>
    ))}
  </div>
</section>
```

- [ ] **Step 4: Add Upcoming Event Teaser section**

After Quick Links, before the existing flagship programmes section:

```tsx
{/* ── UPCOMING EVENT TEASER ── */}
<section className="px-6 md:px-16 py-16 border-b border-(--color-muted) bg-bg-warm">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex flex-col gap-2">
      <SectionTag color="coral">What's Next</SectionTag>
      <h2 className="font-display font-bold text-white text-[clamp(1.4rem,3.5vw,2.5rem)] tracking-tight mt-2">
        LOA Awards 2025 — <span className="text-yellow">Applications Open</span>
      </h2>
      <p className="font-body text-sm text-white/60 max-w-lg leading-relaxed">
        Kerala's first dedicated advertising awards are now accepting entries across nine categories — film, digital, print, design, and more. Open to all agencies and brands that worked in the Kerala market.
      </p>
    </div>
    <div className="flex flex-col gap-3 shrink-0">
      <Link
        to="/awards"
        className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-bg-warm bg-yellow rounded-full transition-opacity hover:opacity-85 whitespace-nowrap"
      >
        Submit Entry →
      </Link>
      <Link
        to="/events"
        className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-body font-medium text-white border border-white/25 rounded-full transition-colors hover:border-white/50 whitespace-nowrap"
      >
        View All Events
      </Link>
    </div>
  </div>
</section>
```

- [ ] **Step 5: Ensure motion import is present in Home.tsx**

`motion` from framer-motion is already imported in Home.tsx. Confirm `Link` from react-router-dom and `SectionTag` are also imported (they already are).

- [ ] **Step 6: Run dev server and visually check home page**

```bash
cd /Users/aleenajaison/Documents/web/adclubtvm && npm run dev
```

Open `http://localhost:5173` and verify: Club Intro → Quick Links → Event Teaser all render correctly below the hero.

- [ ] **Step 7: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: add Club Intro, Quick Links, and Event Teaser sections to Home page"
```

---

## Task 7: About Page — Real Team + Core Values

**Files:**
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Update teamMembers import to use committee data**

At the top of `src/pages/About.tsx`, remove the local `teamMembers` array and instead import from data:

```typescript
import { committee } from "../data/members";
```

Then replace all references to `teamMembers` with `committee` in the JSX.

- [ ] **Step 2: Add Core Values section**

After the "Our Objective" section (before "Members Stat"), insert:

```tsx
{/* ── CORE VALUES ── */}
<section className="px-6 md:px-16 py-20 border-b border-(--color-muted) bg-purple-deep">
  <h2 className="font-display font-bold text-white text-[clamp(1.8rem,4vw,3rem)] tracking-tight mb-12">
    Core Values
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    {[
      { title: "Creativity", desc: "We celebrate and elevate creative thinking as the lifeblood of advertising." },
      { title: "Integrity", desc: "Honest, transparent, and ethical practice in everything ACT does." },
      { title: "Collaboration", desc: "The best ideas emerge when diverse professionals work together." },
      { title: "Excellence", desc: "We hold our community's work to the highest standard through recognition and critique." },
      { title: "Inclusion", desc: "ACT is open to all — students, veterans, agencies, brands, and freelancers." },
      { title: "Growth", desc: "Continuous learning and professional development for every member." },
    ].map((val, i) => (
      <div key={val.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col gap-2">
        <p className="font-display font-bold text-yellow text-base tracking-tight">{val.title}</p>
        <p className="font-body text-sm text-white/60 leading-relaxed">{val.desc}</p>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/About.tsx
git commit -m "feat: use real committee data and add Core Values section to About page"
```

---

## Task 8: Events Page — Filter Tabs

**Files:**
- Modify: `src/pages/Events.tsx`

- [ ] **Step 1: Add useState for filter, import at top**

Add `import { useState } from "react";` (if not already present). Add filter state:
```tsx
const [filter, setFilter] = useState<"all" | "past" | "upcoming">("all");
```

- [ ] **Step 2: Remove dead padded/PLACEHOLDER_COUNT code**

Delete these lines from `src/pages/Events.tsx`:
```tsx
const PLACEHOLDER_COUNT = 9;
// ...and the while loop:
const padded = [...allCards];
while (padded.length < PLACEHOLDER_COUNT) {
  const i = padded.length;
  padded.push({ ... });
}
```

- [ ] **Step 3: Add filtered display array**

Replace the removed padded logic with:
```tsx
const displayCards = filter === "past"
  ? allCards.filter((c) => c.real)
  : filter === "upcoming"
  ? allCards.filter((c) => !c.real)
  : allCards;
```

- [ ] **Step 4: Add filter tabs UI above the grid**

Between the header section and events grid section, insert:
```tsx
<div className="px-6 md:px-16 py-6 border-b border-(--color-muted) flex gap-3">
  {(["all", "past", "upcoming"] as const).map((f) => (
    <button
      key={f}
      onClick={() => setFilter(f)}
      className={`px-5 py-2 rounded-full text-sm font-body font-medium capitalize transition-colors ${
        filter === f
          ? "bg-purple text-white"
          : "border border-(--color-muted) text-bg-warm/60 hover:text-bg-warm"
      }`}
    >
      {f === "all" ? "All Events" : f === "past" ? "Past" : "Upcoming"}
    </button>
  ))}
</div>
```

- [ ] **Step 5: Update grid to use displayCards**

Replace `padded.map(...)` with `displayCards.map(...)`.

- [ ] **Step 6: Commit**

```bash
git add src/pages/Events.tsx
git commit -m "feat: add All/Past/Upcoming filter tabs to Events page"
```

---

## Task 9: Final Build Verification

- [ ] **Step 1: Run full TypeScript build**

```bash
cd /Users/aleenajaison/Documents/web/adclubtvm && npm run build
```

Expected: zero TypeScript errors, successful Vite bundle output.

- [ ] **Step 2: Run dev server and spot-check all pages**

```bash
npm run dev
```

Check each route:
- `/` — Home: hero → marquee → club intro → quick links → event teaser → flagship programmes → upcoming events
- `/membership` — Membership page renders with tiers and committee
- `/awards` — LOA Awards page renders with categories and FAQ
- `/living-room` — Living Room page renders with upcoming session
- `/about` — About page renders with real committee names and core values
- `/events` — Events page renders with filter tabs
- `/gallery` — Gallery page (unchanged, still works)
- Nav links: Home, About, Events, Living Room, LOA Awards, Membership — all correct

- [ ] **Step 3: Check banner CTA links to /awards**

In App.tsx, confirm the banner action navigates to `/awards` (not `/events`).

- [ ] **Step 4: Final commit**

```bash
git add src/App.tsx src/components/Nav.tsx src/components/Footer.tsx src/data/ src/pages/
git commit -m "feat: complete ACT website redesign — membership, awards, living room, enhanced home/about/events"
```

---

## Quick Reference

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | Enhanced with 4 new sections |
| About | `/about` | Real team + core values |
| Events | `/events` | Filter tabs added |
| Gallery | `/gallery` | Unchanged |
| Membership | `/membership` | NEW |
| LOA Awards | `/awards` | NEW |
| Living Room | `/living-room` | NEW |
| Instagram | `/instagram` | Unchanged |

## Design Token Cheatsheet

Only use these Tailwind token classes (never `var(--color-*)` in class strings):

| Token | Class |
|-------|-------|
| #000000 | `bg-bg` / `text-bg` |
| #231F20 | `bg-bg-warm` / `text-bg-warm` |
| #3A1D5A | `bg-purple-deep` / `text-purple-deep` |
| #6B308E | `bg-purple` / `text-purple` |
| #8552A1 | `bg-purple-light` / `text-purple-light` |
| #FEC812 | `bg-yellow` / `text-yellow` |
| #A4238B | `bg-magenta` / `text-magenta` |
| #DD86B8 | `bg-pink` / `text-pink` |
| #F05069 | `bg-coral` / `text-coral` |
| #CDC7D3 | `bg-muted` / `text-muted` |
| #FFFFFF | `bg-surface` / `bg-white` |
