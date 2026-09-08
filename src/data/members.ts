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
  { name: "Laj Salam", role: "President", company: "Founder & CEO, PlainSpeak", image: "/images/Laj.jpeg", group: "Office Bearers" },
  { name: "B. Sunil", role: "Vice President", company: "General Manager, Kairali TV", image: "/images/Sunil.jpeg", group: "Office Bearers" },
  { name: "Vishnu Vijay", role: "Secretary", company: "Sr. Manager - Print, Mathrubhumi", image: "/images/Vishnu.jpeg", group: "Office Bearers" },
  { name: "Manikandan K R", role: "Treasurer", company: "Sr. Advertising Manager, Mangalam", image: "/images/Manikandan.jpeg", group: "Office Bearers" },
  { name: "Thomas George", role: "Joint Secretary", company: "Account Director, Stark Communications", image: "/images/Thomas.jpeg", group: "Office Bearers" },

  { name: "Krishnanunni", role: "Member", company: "Sr. Manager – Advertising, The Hindu", image: "/images/Unni.jpeg", group: "Managing Committee" },
  { name: "Krishnakumar", role: "Member", company: "Dy. General Manager, Malayala Manorama", image: "/images/Krishnakumar.jpeg", group: "Managing Committee" },
  { name: "Santosh Kumar", role: "Member", company: "Asst. General Manager, Mathrubhumi TV", image: "/images/Santhosh.jpeg", group: "Managing Committee" },
  { name: "Pradeep Prabhakar", role: "Member", company: "Chief Manager Advertising, News Malayalam", image: "/images/Pradeep.jpeg", group: "Managing Committee" },
  { name: "Geetha G. Nair", role: "Member", company: "CEO, Hues Advertising", image: "/images/Geetha.jpeg", group: "Managing Committee" },
  { name: "Thanseer", role: "Member", company: "CEO, Adworld", image: "/images/Thanseer.jpeg", group: "Managing Committee" },
  { name: "Pratheesh S. S.", role: "Member", company: "Asst. Advertising Manager, Club FM", image: "/images/Pratheesh.jpeg", group: "Managing Committee" },

  { name: "Koshy Abraham", role: "Member", company: "General Manager, Malayala Manorama", image: "/images/Koshy.jpeg", group: "Advisory Board" },
  { name: "K. K. Joshy", role: "Member", company: "Vice President- Kerala, The Hindu", image: "/images/Joshy.jpeg", group: "Advisory Board" },
  { name: "R. Raghunath", role: "Member", company: "CEO, Mediamate", image: "/images/Reghunath.jpeg", group: "Advisory Board" },
  { name: "Roy Mathew", role: "Member", company: "CEO, Stark Communications", image: "/images/Roy.jpeg", group: "Advisory Board" },
  { name: "Deepu S.", role: "Member", company: "Kerala Head, Asianet Star TV", group: "Advisory Board" },
];

export const membershipTiers: MembershipTier[] = [
  {
    id: "individual",
    name: "Individual",
    fee: "₹2,000 / year",
    eligibility: "Any individual of good standing in the advertising community who believes in and subscribes to the objectives of the club and who is professionally engaged in advertising or media for a minimum of 1 year in Trivandrum District.",
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
    fee: "₹25,000 / year (for 5 members)",
    eligibility: "Advertising Agencies and mainline Media Houses engaged in the business of advertising and mass communication in print and electronic media.",
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
    fee: "₹10,000 / year (for 1 member)",
    eligibility: "Central/State Govt. Organisations, PSU's, Organisations of Govt Undertaking and Boards, Public Sector Banks represented by the professionals in the field of communication & public relations of these organisations.",
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
    eligibility: "Aspiring students below 25 years whose curriculum is related to advertising/media/communication.",
    perks: [
      "Discounted entry to all ACT events",
      "Student-only workshops and mentorship",
      "Access to industry networking evenings",
      "Certificate of ACT membership",
    ],
  },
];
