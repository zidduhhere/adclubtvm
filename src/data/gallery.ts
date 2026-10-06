export interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  images: { src: string; alt: string }[];
}

export const galleryEvents: GalleryEvent[] = [
  {
    id: "act-awards-2024",
    title: "ACT Awards Night 2024",
    date: "2024-09-15",
    description: "Annual award ceremony celebrating the best in Trivandrum advertising.",
    coverImage: "https://act-pull-zone.b-cdn.net/gallery/gallery-1.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-1.jpg", alt: "Event 1" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-2.jpg", alt: "Event 2" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-3.jpg", alt: "Event 3" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-4.jpg", alt: "Event 4" },
    ]
  },
  {
    id: "living-room-session-1",
    title: "The Living Room Session 1",
    date: "2024-08-10",
    description: "An intimate fireside chat with industry veterans.",
    coverImage: "https://act-pull-zone.b-cdn.net/gallery/gallery-5.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-5.jpg", alt: "Event 5" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-6.jpg", alt: "Event 6" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-7.jpg", alt: "Event 7" },
    ]
  },
  {
    id: "onam-celebration-2024",
    title: "ACT Onam Celebration 2024",
    date: "2024-09-01",
    description: "A grand get-together for the Onam festival.",
    coverImage: "https://act-pull-zone.b-cdn.net/gallery/gallery-8.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-8.jpg", alt: "Event 8" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-9.jpg", alt: "Event 9" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-10.jpg", alt: "Event 10" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-11.jpg", alt: "Event 11" },
    ]
  },
  {
    id: "creative-workshop-2024",
    title: "Digital Advertising Workshop",
    date: "2024-07-20",
    description: "Workshop on navigating the modern digital landscape.",
    coverImage: "https://act-pull-zone.b-cdn.net/gallery/gallery-12.jpg",
    images: [
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-12.jpg", alt: "Event 12" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-13.jpg", alt: "Event 13" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-14.jpg", alt: "Event 14" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-15.jpg", alt: "Event 15" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-16.jpg", alt: "Event 16" },
    ]
  }
];
