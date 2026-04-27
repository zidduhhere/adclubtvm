export interface Event {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
  tags: string[];
  images?: string[];
}

export const events: Event[] = [
  {
    id: "01",
    title: "LOGO LAUNCH",
    date: "February 8, 2025",
    type: "Launch Event",
    description:
      "The official logo launch of Advertising Club Trivandrum, unveiled by Shri. Mohanlal — marking the public founding of Kerala's capital city's premier advertising professional network.",
    tags: ["Launch", "Branding", "Milestone"],
    images: [
      "https://placehold.co/800x600/1a1a2e/ffffff?text=Event+Photo+1",
      "https://placehold.co/800x600/1a1a2e/ffffff?text=Event+Photo+2",
      "https://placehold.co/800x600/1a1a2e/ffffff?text=Event+Photo+3",
      "https://placehold.co/800x600/1a1a2e/ffffff?text=Event+Photo+4",
      "https://placehold.co/800x600/1a1a2e/ffffff?text=Event+Photo+5",
      "https://placehold.co/800x600/1a1a2e/ffffff?text=Event+Photo+6",
      "https://placehold.co/800x600/1a1a2e/ffffff?text=Event+Photo+7",
      "https://placehold.co/800x600/1a1a2e/ffffff?text=Event+Photo+8",
    ],
  },
];

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
