export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryEvent {
  id: string;
  slug?: string;
  title: string;
  date: string;
  displayDate?: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
}

export const galleryEvents: GalleryEvent[] = [
  {
    id: "14",
    slug: "double-engine",
    title: "Living Room by ACT: Double Engine. Double Power.",
    date: "2026-07-30",
    displayDate: "30 July 2026",
    description: "The latest edition of Living Room by ACT featured Kenney Jacob, Digital Specialist at Stark Communications, who explored how social media and AI are reshaping advertising and media with practical applications.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/double-engine.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/double-engine.jpg", alt: "Living Room by ACT: Double Engine. Double Power." },
    ],
  },
  {
    id: "13",
    slug: "senthil-kumar",
    title: "Living Room by ACT: Senthil Kumar",
    date: "2026-06-27",
    displayDate: "27 June 2026",
    description: "Living Room by ACT welcomed Senthil Kumar, one of India's most celebrated advertising professionals, for an inspiring session on storytelling, creativity, and the power of ideas in brand building.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/senthil-living-room.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/senthil-living-room.jpg", alt: "Living Room by ACT: Senthil Kumar" },
    ],
  },
  {
    id: "12",
    slug: "badminton-tournament",
    title: "SPORTS ACT: Badminton Tournament",
    date: "2026-06-05",
    displayDate: "5–6 June 2026",
    description: "As part of SPORTS ACT 2026, ACT hosted a badminton tournament that brought members together for two days of spirited competition, sportsmanship, and camaraderie.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/badminton-image.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/badminton-image.jpg", alt: "SPORTS ACT: Badminton Tournament" },
    ],
  },
  {
    id: "11",
    slug: "first-act-on-stage",
    title: "FIRST ACT ON STAGE",
    date: "2026-03-14",
    displayDate: "14 March 2026",
    description: "FIRST ACT ON STAGE marked the first anniversary of ACT, inaugurated by Dr. Shashi Tharoor, MP, and featured an engaging conversation with Navaneet VL, CEO of The Hindu Group.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/first-act.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/first-act.jpg", alt: "FIRST ACT ON STAGE - 1st Anniversary Celebration" },
    ],
  },
  {
    id: "10",
    slug: "vizhinjam-visit",
    title: "Vizhinjam International Seaport Visit",
    date: "2026-03-12",
    displayDate: "12 March 2026",
    description: "ACT members visited Vizhinjam International Seaport for an exclusive behind-the-scenes tour of India's first deep-water transshipment port with Adani Group leadership.",
    coverImage: "https://act-pull-zone.b-cdn.net/gallery/gallery-4.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-4.jpg", alt: "Vizhinjam International Seaport Visit" },
    ],
  },
  {
    id: "09",
    slug: "honouring-piyush-pandey",
    title: "Honouring Piyush Pandey",
    date: "2025-11-14",
    displayDate: "14 November 2025",
    description: "Special tribute celebrating Piyush Pandey's remarkable contribution to Indian advertising through an engaging conversation featuring Sneha Iype and Swarup B. R.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/living-home-2.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/living-home-2.jpg", alt: "Honouring Piyush Pandey - Stage Session" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-6.jpg", alt: "Honouring Piyush Pandey - Tribute Gathering" },
    ],
  },
  {
    id: "08",
    slug: "like-father-like-son",
    title: "Like Father. Like Son.",
    date: "2025-08-08",
    displayDate: "8 August 2025",
    description: "Living Room conversation featuring Reghunath R. and Gautham Reghunath, moderated by Shelton Pinheiro, exploring two generations of advertising leaders.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/like-father-like-son.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/like-father-like-son.jpg", alt: "Like Father. Like Son. - Panel Conversation" },
    ],
  },
  {
    id: "07",
    slug: "sports-act-2025",
    title: "SPORTS ACT 2025",
    date: "2025-07-19",
    displayDate: "19 July 2025",
    description: "SPORTS ACT 2025 brought together ACT members for a day of friendly competition, teamwork, and camaraderie featuring cricket, football, and badminton.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/sports-act.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/sports-act.jpg", alt: "SPORTS ACT 2025 - Tournament Day" },
    ],
  },
  {
    id: "06",
    slug: "anil-nair",
    title: "Living Room by ACT: Anil Nair",
    date: "2025-05-02",
    displayDate: "2 May 2025",
    description: "The inaugural edition of Living Room by ACT featured Anil Nair, former CEO of L&K Saatchi & Saatchi, discussing changing consumer behavior and the evolving role of creativity.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/living-room-anil-nair.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/living-room-anil-nair.jpg", alt: "Living Room by ACT: Anil Nair" },
    ],
  },
  {
    id: "05",
    slug: "next-gen-talent",
    title: "Recognising the Next Generation of Creative Talent",
    date: "2025-04-02",
    displayDate: "2 April 2025",
    description: "Certificate presentation ceremony recognizing DCSMAT MBA student volunteers who contributed enthusiastically during the club's inaugural launch event.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/recognising-the-next-gen.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/recognising-the-next-gen.jpg", alt: "Recognising the Next Generation of Creative Talent" },
    ],
  },
  {
    id: "04",
    slug: "inaugural-launch",
    title: "The Inaugural Launch of Advertising Club Trivandrum",
    date: "2025-02-14",
    displayDate: "14 February 2025",
    description: "Official inauguration with Chief Guest R. Balki, Guest of Honour Prathap Suthan, video message from Piyush Pandey, and panel discussions on regional advertising.",
    coverImage: "https://act-pull-zone.b-cdn.net/gallery/gallery-9.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-9.jpg", alt: "Inaugural Launch - Stage Lighting & Guests" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-10.jpg", alt: "Chief Guest R. Balki & Guests of Honour" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-11.jpg", alt: "Panel Discussion on Regional Advertising" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-12.jpg", alt: "Kerala Advertising Fraternity Audience" },
    ],
  },
  {
    id: "03",
    slug: "launch-poster",
    title: "Launch Poster Unveiled by Dr. Shashi Tharoor",
    date: "2025-01-15",
    displayDate: "January 2025",
    description: "The official launch poster for Advertising Club Trivandrum (ACT) was unveiled by Dr. Shashi Tharoor, Member of Parliament, announcing the club's formal launch.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/launch-poster.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/launch-poster.jpg", alt: "Launch Poster Unveiled by Dr. Shashi Tharoor" },
    ],
  },
  {
    id: "02",
    slug: "beginning-of-act",
    title: "The Beginning of ACT",
    date: "2024-12-02",
    displayDate: "2 December 2024",
    description: "ACT officially began its journey with its first general body meeting, electing first office bearers and forming the founding team of the club.",
    coverImage: "https://act-pull-zone.b-cdn.net/events/beginning-og-act.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/events/beginning-og-act.jpg", alt: "The Beginning of ACT - First General Body" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-1.jpg", alt: "Founding Members Meet" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-2.jpg", alt: "General Body Gathering" },
    ],
  },
  {
    id: "01",
    slug: "logo-launch",
    title: "A New Identity for ACT",
    date: "2025-02-08",
    displayDate: "8 February 2025",
    description: "The official logo of Advertising Club Trivandrum (ACT) was unveiled by legendary actor Mohanlal, setting a bold visual identity for the fraternity.",
    coverImage: "https://act-pull-zone.b-cdn.net/logo-reveal.jpeg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/logo-reveal.jpeg", alt: "Official Logo Unveiled by Mohanlal" },
    ],
  },
];
