export interface CommitteeMember {
  name: string;
  role: string;
  company: string;
  image?: string;
  group: "Office Bearers" | "Managing Committee" | "Advisory Board";
}

export interface MembershipTier {
  id: string;
  name: string;
  fee: string;
  eligibility: string;
  perks: string[];
}

export const committee: CommitteeMember[] = [
  { name: "Laj Salam", role: "President", company: "PlainSpeak", image: "/images/Laj.jpeg", group: "Office Bearers" },
  { name: "B. Sunil", role: "Vice President", company: "Kairali TV", image: "/images/Sunil.jpeg", group: "Office Bearers" },
  { name: "Vishnu Vijay", role: "Secretary", company: "Mathrubhumi Daily", image: "/images/Vishnu.jpeg", group: "Office Bearers" },
  { name: "Manikantan R. K.", role: "Treasurer", company: "Mangalam Daily", image: "/images/Manikandan.jpeg", group: "Office Bearers" },
  { name: "Thomas George", role: "Joint Secretary", company: "Stark Communications", image: "/images/Thomas.jpeg", group: "Office Bearers" },

  { name: "Krishnanunni M. R.", role: "Member", company: "The Hindu", image: "/images/Unni.jpeg", group: "Managing Committee" },
  { name: "Krishna Kumar R.", role: "Member", company: "Malayala Manorama Daily", image: "/images/Krishnakumar.jpeg", group: "Managing Committee" },
  { name: "Santhosh Kumar G.", role: "Member", company: "Mathrubhumi News TV", image: "/images/Santhosh.jpeg", group: "Managing Committee" },
  { name: "Pradeep Prabhakar", role: "Member", company: "News Malayalam 24x7", image: "/images/Pradeep.jpeg", group: "Managing Committee" },
  { name: "Geetha G. Nair", role: "Member", company: "Hues Advertising & Marketing", image: "/images/Geetha.jpeg", group: "Managing Committee" },
  { name: "Thanseer T. J.", role: "Member", company: "Adworld Advertising", image: "/images/Thanseer.jpeg", group: "Managing Committee" },
  { name: "Pratheesh S. S.", role: "Member", company: "Club FM 94.3", image: "/images/Pratheesh.jpeg", group: "Managing Committee" },

  { name: "Koshy Abraham", role: "Member", company: "Malayala Manorama", image: "/images/Koshy.jpeg", group: "Advisory Board" },
  { name: "K. K. Joshy", role: "Member", company: "The Hindu", image: "/images/Joshy.jpeg", group: "Advisory Board" },
  { name: "R. Reghunath", role: "Member", company: "MediaMate", image: "/images/Reghunath.jpeg", group: "Advisory Board" },
  { name: "Roy V. Mathew", role: "Member", company: "Stark Communications", image: "/images/Roy.jpeg", group: "Advisory Board" },
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
