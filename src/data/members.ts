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
