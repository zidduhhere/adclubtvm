export interface Event {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
  tags: string[];
  images?: string[];
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
  status: string;
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
    images: ["/images/logo-reveal.jpeg"],
  },
];

export const upcoming: UpcomingEvent[] = [];
