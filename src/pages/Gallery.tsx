import { useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageHero from "../components/PageHero";
import { Search, Calendar, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Mock data for the gallery events
interface GalleryEvent {
  id: string;
  title: string;
  date: string; // ISO date for sorting
  description: string;
  images: { src: string; alt: string }[];
}

const mockEvents: GalleryEvent[] = [
  {
    id: "act-awards-2024",
    title: "ACT Awards Night 2024",
    date: "2024-09-15",
    description: "Annual award ceremony celebrating the best in Trivandrum advertising.",
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
    images: [
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-12.jpg", alt: "Event 12" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-13.jpg", alt: "Event 13" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-14.jpg", alt: "Event 14" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-15.jpg", alt: "Event 15" },
      { src: "https://act-pull-zone.b-cdn.net/gallery/gallery-16.jpg", alt: "Event 16" },
    ]
  }
];

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredEvents = useMemo(() => {
    return mockEvents
      .filter(event => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery]);

  useGSAP(
    () => {
      // Parallax background elements
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-fast", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hero Text Stagger Intro
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.1,
        },
      );
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="min-h-screen bg-[#F8F9FA] text-black overflow-x-hidden font-body selection:bg-yellow selection:text-black pt-20"
    >
      {/* ── 1. HERO HEADER ── */}
      <PageHero
        title={
          <>
            <span className="hero-text block">Gallery</span>
          </>
        }
      />

      {/* ── 2. SEARCH BAR ── */}
      <section className="px-6 md:px-16 py-12 md:py-20 bg-white border-b border-black/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-black/30 group-focus-within:text-purple transition-colors">
              <Search className="w-6 h-6" />
            </div>
            <input
              type="text"
              placeholder="Search past events, workshops, and celebrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-6 rounded-full border-2 border-black/10 bg-[#F8F9FA] text-black font-display text-lg md:text-xl placeholder:text-black/30 focus:outline-none focus:border-purple focus:bg-white focus:ring-4 focus:ring-purple/10 transition-all shadow-sm hover:shadow-md"
            />
          </div>
          <p className="mt-6 text-black/50 font-medium text-sm tracking-widest uppercase">
            {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'} Found
          </p>
        </div>
      </section>

      {/* ── 3. EVENT GALLERY FEED ── */}
      <section className="px-6 md:px-16 py-16 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, i) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                  className="flex flex-col gap-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5"
                >
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/5 pb-8">
                    <div className="flex flex-col gap-3 max-w-2xl">
                      <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-black leading-none">
                        {event.title}
                      </h2>
                      <p className="font-body text-black/60 text-lg md:text-xl">
                        {event.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 text-black/40 font-body font-bold text-sm tracking-widest uppercase shrink-0">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-yellow" />
                        {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-purple" />
                        {event.images.length} Photos
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
                    {event.images.map((img, imgIndex) => {
                      // Editorial grid pattern
                      let sizeClasses = "col-span-1 row-span-1";
                      if (imgIndex % 6 === 0) {
                        sizeClasses = "col-span-2 row-span-2"; // Large feature
                      } else if (imgIndex % 6 === 3) {
                        sizeClasses = "col-span-1 row-span-2"; // Tall portrait
                      } else if (imgIndex % 6 === 4) {
                        sizeClasses = "col-span-2 row-span-1"; // Wide landscape
                      }

                      return (
                        <div 
                          key={`${event.id}-${imgIndex}`}
                          className={`${sizeClasses} rounded-[2rem] overflow-hidden cursor-pointer group bg-[#F8F9FA] relative transform transition-all duration-700 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:z-10 border border-black/5`}
                          onClick={() => setSelectedImage(img.src)}
                        >
                          {/* Aesthetic film-grain / overlay on hover */}
                          <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
                          <img 
                            src={img.src} 
                            alt={img.alt} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03] filter grayscale-[15%] group-hover:grayscale-0"
                          />
                          {/* Elegant hover expand icon */}
                          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-black shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="py-32 flex flex-col items-center text-center gap-6"
              >
                <div className="w-24 h-24 rounded-full bg-black/5 flex items-center justify-center text-black/20">
                  <Search className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight text-black mb-2">
                    No Events Found
                  </h3>
                  <p className="font-body text-black/50 text-lg">
                    We couldn't find any events matching "{searchQuery}".
                  </p>
                </div>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-purple hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
