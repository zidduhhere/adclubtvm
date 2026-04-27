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
