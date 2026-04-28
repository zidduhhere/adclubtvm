export interface AwardCategory {
  id: string;
  name: string;
}

export interface AwardGroup {
  id: string;
  name: string;
  categories: AwardCategory[];
}

export interface AwardEdition {
  year: number;
  theme: string;
  date: string;
  venue: string;
  status: "upcoming" | "past";
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Judge {
  name: string;
  discipline: string;
  role: string;
  company: string;
  isChair?: boolean;
}

export const awardGroups: AwardGroup[] = [
  {
    id: "traditional",
    name: "Traditional & Broadcast Advertising",
    categories: [
      { id: "t1", name: "Print Ad – Single" },
      { id: "t2", name: "Print Ad – Campaign" },
      { id: "t3", name: "Outdoor – Hoarding – Single" },
      { id: "t4", name: "Outdoor – Hoarding – Campaign" },
      { id: "t5", name: "Outdoor – Banner" },
      { id: "t6", name: "Outdoor – Ambient / POP" },
      { id: "t7", name: "Radio – Single" },
      { id: "t8", name: "Radio – Campaign" },
      { id: "t9", name: "Radio – RJ Branded Content" },
      { id: "t10", name: "TVC – Single" },
      { id: "t11", name: "TVC – Campaign" },
      { id: "t12", name: "Integrated Campaign" },
    ],
  },
  {
    id: "craft",
    name: "Craft in Communication",
    categories: [
      { id: "c1", name: "Craft – Art Direction" },
      { id: "c2", name: "Craft – Copywriting" },
      { id: "c3", name: "Craft – Typography" },
      { id: "c4", name: "Craft – Illustration" },
      { id: "c5", name: "Craft – Photography" },
    ],
  },
  {
    id: "design",
    name: "Design Craft & Collateral",
    categories: [
      { id: "d1", name: "Design – Logo" },
      { id: "d2", name: "Design – Film Poster" },
      { id: "d3", name: "Design – Brochure" },
      { id: "d4", name: "Design – Calendar" },
      { id: "d5", name: "Design – Packaging" },
    ],
  },
  {
    id: "ai",
    name: "AI-Led Creativity",
    categories: [
      { id: "ai1", name: "Best AI in Social Media Static" },
      { id: "ai2", name: "Best AI in TVC" },
      { id: "ai3", name: "Best AI in Digital Film" },
      { id: "ai4", name: "Best Use of Generative AI (Visual / Film)" },
      { id: "ai5", name: "Best AI-Led Campaign" },
      { id: "ai6", name: "Best Use of AI in Content Creation" },
      { id: "ai7", name: "Best Use of AI for a Social Cause" },
      { id: "ai8", name: "Best AI-Based Brand Experience (installations, website experiences, interactive ideas)" },
    ],
  },
  {
    id: "creator",
    name: "Creator-Led & Branded Content",
    categories: [
      { id: "cr1", name: "Best Short-Form Branded Content" },
      { id: "cr2", name: "Best Long-Form Branded Content" },
      { id: "cr3", name: "Best Creator-Led Advertiser Collaboration" },
      { id: "cr4", name: "Best Content-Driven / Generated Content" },
      { id: "cr5", name: "Best Use of User-Generated Content" },
      { id: "cr6", name: "Best Influencer Campaign" },
      { id: "cr7", name: "Best Use of Influencers" },
      { id: "cr8", name: "Content Creator of the Year" },
    ],
  },
  {
    id: "digital",
    name: "Digital Experiences & Social Engagement",
    categories: [
      { id: "de1", name: "Digital – Microsite" },
      { id: "de2", name: "Digital – Website" },
      { id: "de3", name: "Digital – Social-Led Content" },
      { id: "de4", name: "Social Media – Static – Single" },
      { id: "de5", name: "Social Media – Static – Campaign" },
      { id: "de6", name: "Social Media – Film – Single" },
      { id: "de7", name: "Social Media – Film – Campaign" },
      { id: "de8", name: "Social Media – Memes" },
      { id: "de9", name: "Social Media – Reel / Content" },
      { id: "de10", name: "Social Media – Activation / Contests" },
      { id: "de11", name: "Social Media – Moment Marketing" },
    ],
  },
  {
    id: "av",
    name: "Audio-Visual Craft & Innovation",
    categories: [
      { id: "av1", name: "Direction" },
      { id: "av2", name: "Casting" },
      { id: "av3", name: "Editing" },
      { id: "av4", name: "Music" },
      { id: "av5", name: "Special Effects" },
      { id: "av6", name: "AI Integration" },
      { id: "av7", name: "Sound Design" },
    ],
  },
  {
    id: "special",
    name: "Special Categories",
    categories: [
      { id: "sp1", name: "Open Category – Unpublished Works (any category)" },
      { id: "sp2", name: "Emerging Creators – Student Open (any category)" },
      { id: "sp3", name: "Independent Creative Excellence" },
    ],
  },
];

export const jury: Judge[] = [
  { name: "Bobby Pawar", discipline: "Copy", role: "Former Chairman", company: "Havas", isChair: true },
  { name: "Senthil Kumar", discipline: "Copy", role: "CCO", company: "VML" },
  { name: "PK Anil Kumar", discipline: "Copy", role: "Director – Creative Excellence", company: "McCann" },
  { name: "Sagar Jadhav", discipline: "Art", role: "ECD", company: "Ogilvy" },
  { name: "Krishnanunni", discipline: "Creative", role: "Creative Head", company: "Ather" },
  { name: "Swarup BR", discipline: "Copy & Strategy", role: "Creative Director", company: "Stark" },
  { name: "Pooja Manek", discipline: "Copy", role: "Founding Member", company: "Talented" },
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

export const loaFAQ: FAQ[] = [
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
