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
