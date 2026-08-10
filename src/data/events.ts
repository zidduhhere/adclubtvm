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
    title: "A New Identity for ACT",
    date: "February 8, 2025",
    type: "Logo Launch",
    description:
      "The official logo of Advertising Club Trivandrum (ACT) was unveiled by legendary actor Mohanlal, marking an important milestone in the club's journey. The unveiling reflected ACT's vision of creating a strong and unified platform for Kerala's advertising and marketing fraternity. The event marked the formal introduction of the club's identity and the beginning of a new chapter dedicated to creativity, collaboration, and professional excellence.",
    tags: ["Launch", "Branding", "Milestone"],
    images: ["/images/logo-reveal.jpeg"],
  },
  {
    id: "02",
    title: "The Beginning of ACT",
    date: "2 December 2024",
    type: "General Body Meeting",
    description:
      "Advertising Club Trivandrum (ACT) officially began its journey with its first general body meeting, bringing together advertising, media, marketing, and creative professionals from across the industry. The meeting marked the election of the club's first office bearers and the formation of its founding team, laying the foundation for a vibrant professional community committed to creativity, collaboration, and industry growth.",
    tags: ["Meeting", "Community"],
  },
  {
    id: "03",
    title: "Launch Poster Unveiled by Dr. Shashi Tharoor",
    date: "January 2025",
    type: "Poster Launch",
    description:
      "The official launch poster for Advertising Club Trivandrum (ACT) was unveiled by Dr. Shashi Tharoor, Member of Parliament, marking the announcement of the club's inaugural event. The unveiling built momentum for ACT's formal launch and reflected the growing support for a platform dedicated to strengthening Kerala's advertising and marketing community.",
    tags: ["Launch", "Milestone"],
  },
  {
    id: "04",
    title: "The Inaugural Launch of Advertising Club Trivandrum",
    date: "14 February 2025",
    type: "Inaugural Event",
    description:
      "Advertising Club Trivandrum (ACT) was officially inaugurated on 14 February 2025, marking the beginning of a new platform for Kerala's advertising and marketing community. The inaugural event featured renowned advertising veteran R. Balki as the Chief Guest and Prathap Suthan as the Guest of Honour, along with a special video message from Piyush Pandey.\n\nA key highlight of the event was a panel discussion on Regional Advertising in the Digital Era, featuring Varghese Chandy, Kamal Krishnan, Naveen Srinivasan, and Anil Ayiroor, who shared valuable perspectives on the evolving advertising landscape. The event set the tone for ACT's journey to foster creativity, collaboration, and professional excellence within the industry.",
    tags: ["Inauguration", "Panel Discussion", "Milestone"],
  },
  {
    id: "05",
    title: "Recognising the Next Generation of Creative Talent",
    date: "2 April 2025",
    type: "Awards & Recognition",
    description:
      "As part of its commitment to nurturing future advertising professionals, Advertising Club Trivandrum (ACT) presented participation certificates to the MBA students of DCSMAT who actively volunteered during the club's inaugural launch event.\n\nThe certificate presentation ceremony was held at Malayala Manorama, recognising the students' valuable contribution and enthusiasm. ACT also acknowledged the support extended by Mr. Koshy Abraham, General Manager – Marketing, Malayala Manorama, for facilitating the event and encouraging young creative minds.",
    tags: ["Recognition", "Students"],
  },
  {
    id: "06",
    title: "Living Room by ACT: Anil Nair",
    date: "2 May 2025",
    type: "Knowledge Sharing",
    description:
      "The inaugural edition of Living Room by ACT, an exclusive knowledge-sharing series, featured Anil Nair, former CEO of L&K Saatchi & Saatchi and one of India's leading advertising professionals. In an engaging session, he shared valuable insights on the future of advertising, changing consumer behaviour, and the evolving role of creativity in a rapidly transforming industry.\n\nThe session marked the beginning of ACT's commitment to creating intimate conversations with industry leaders, offering members a platform to learn from some of the brightest minds in advertising.",
    tags: ["Living Room", "Knowledge Sharing"],
  },
  {
    id: "07",
    title: "SPORTS ACT 2025",
    date: "19 July 2025",
    type: "Sports Event",
    description:
      "SPORTS ACT 2025 brought together ACT members for a day of friendly competition, teamwork, and camaraderie. Featuring cricket, football, and badminton, the event celebrated the spirit of sportsmanship while providing members an opportunity to connect beyond the workplace.\n\nThe event was made possible with the support of Canara Bank, Swayamvara Silks, and SP Wellfort, whose partnership contributed to the success of this memorable day.",
    tags: ["Sports", "Community"],
  },
  {
    id: "08",
    title: "Like Father. Like Son.",
    date: "8 August 2025",
    type: "Knowledge Sharing",
    description:
      "Living Room by ACT hosted a unique conversation - Like Father. Like Son, featuring Reghunath R., Founder & CEO, Mediamate, and Gautham Reghunath, Co-founder & CEO, Talented. Moderated by Shelton Pinheiro, ECD, Stark Communications, the session explored the evolution of advertising through the perspectives of two generations of industry leaders.\n\nBlending personal stories with professional experiences, the conversation offered valuable insights into creativity, leadership, and the changing landscape of advertising, making it an engaging and memorable evening for ACT members.",
    tags: ["Living Room", "Knowledge Sharing", "Panel Discussion"],
  },
  {
    id: "09",
    title: "Honouring Piyush Pandey",
    date: "14 November 2025",
    type: "Tribute",
    description:
      "Advertising Club Trivandrum (ACT) hosted a special tribute to Piyush Pandey, one of India's most influential advertising leaders. The session celebrated his remarkable contribution to Indian advertising through an engaging conversation featuring Sneha Iype, Co-Founder of Nirvana Films, and Swarup B. R., Co-Founder, Stark Communications.\n\nThrough stories, reflections, and personal experiences, the speakers explored Piyush Pandey's enduring influence on creativity, storytelling, and the evolution of Indian advertising, making the evening a fitting tribute to an industry icon.",
    tags: ["Tribute", "Event"],
  },
  {
    id: "10",
    title: "Vizhinjam International Seaport Visit",
    date: "12 March 2026",
    type: "Industrial Visit",
    description:
      "ACT members visited Vizhinjam International Seaport for an exclusive behind-the-scenes tour of India's first deep-water transshipment port. The visit included presentations by Mahesh Guptan of Adani Group and Pradeep Jayaraman, CEO, Adani Ports & SEZ, Vizhinjam, followed by a guided tour of the port's key operational facilities, offering members a first-hand understanding of this landmark infrastructure project.",
    tags: ["Tour", "Community"],
  },
  {
    id: "11",
    title: "FIRST ACT ON STAGE",
    date: "14 March 2026",
    type: "Anniversary Event",
    description:
      "FIRST ACT ON STAGE marked the first anniversary of Advertising Club Trivandrum (ACT), bringing together leaders from advertising, media, and public life for an evening of inspiration and celebration. The event was inaugurated by Dr. Shashi Tharoor, MP, and featured an engaging conversation with Navaneet VL, CEO of The Hindu Group, on The Power of Advertising: From Brands to Public Narratives.\n\nThe celebration also featured a special video message from Prasoon Joshi, along with reflections on ACT's journey over its first year. Bringing together members, industry leaders, partners, and students, the evening marked an important milestone in the club's mission to build a stronger and more vibrant advertising community in Kerala.",
    tags: ["Anniversary", "Milestone", "Celebration"],
  },
  {
    id: "12",
    title: "SPORTS ACT: Badminton Tournament",
    date: "5–6 June 2026",
    type: "Sports Event",
    description:
      "As part of SPORTS ACT 2026, ACT hosted a badminton tournament that brought members together for two days of spirited competition, sportsmanship, and camaraderie. The event witnessed enthusiastic participation across categories, celebrating both competitive excellence and the joy of playing together.",
    tags: ["Sports", "Community"],
  },
  {
    id: "13",
    title: "Living Room by ACT: Senthil Kumar",
    date: "27 June 2026",
    type: "Knowledge Sharing",
    description:
      "Living Room by ACT welcomed Senthil Kumar, one of India's most celebrated advertising professionals, for an inspiring session on storytelling, creativity, and the power of ideas. Drawing from his award-winning career and creative journey, he shared valuable insights into building meaningful brands and enduring campaigns.",
    tags: ["Living Room", "Knowledge Sharing"],
  },
  {
    id: "14",
    title: "Living Room by ACT: Double Engine. Double Power.",
    date: "30 July 2026",
    type: "Knowledge Sharing",
    description:
      "The latest edition of Living Room by ACT featured Kenney Jacob, Digital Specialist at Stark Communications, who explored how social media and AI are reshaping advertising and media. Through practical examples and real-world applications, he demonstrated how creative professionals can use AI to work smarter, improve productivity, and stay ahead in a rapidly evolving industry.",
    tags: ["Living Room", "Knowledge Sharing", "Technology"],
  }
];

export const upcoming: UpcomingEvent[] = [];
