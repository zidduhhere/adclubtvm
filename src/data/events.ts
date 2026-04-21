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
      "https://picsum.photos/seed/ll1/800/600",
      "https://picsum.photos/seed/ll2/800/600",
      "https://picsum.photos/seed/ll3/800/600",
      "https://picsum.photos/seed/ll4/800/600",
      "https://picsum.photos/seed/ll5/800/600",
      "https://picsum.photos/seed/ll6/800/600",
      "https://picsum.photos/seed/ll7/800/600",
      "https://picsum.photos/seed/ll8/800/600",
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
    title: "INDUSTRY SEMINAR",
    date: "2025",
    type: "Seminar",
    description: "Knowledge-sharing sessions led by senior practitioners on the evolving landscape of advertising, digital media, and brand communication.",
    status: "Coming Soon",
  },
  {
    id: "U3",
    title: "CREATIVE AWARDS",
    date: "2025",
    type: "Awards",
    description: "Recognising outstanding achievement in advertising and marketing communication across Kerala's advertising fraternity.",
    status: "Coming Soon",
  },
];
