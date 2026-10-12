import { useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageHero from "../components/PageHero";
import { Search, ArrowRight, Download, Camera, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { galleryEvents } from "../data/gallery";
import { downloadImage } from "../lib/download";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleQuickDownload = async (url: string, title: string) => {
    setDownloadToast("Downloading image...");
    await downloadImage(url, title);
    setDownloadToast("Image downloaded!");
    setTimeout(() => setDownloadToast(null), 2500);
  };

  const filteredEvents = useMemo(() => {
    return galleryEvents
      .filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()),
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
      <section className="px-6 md:px-16 py-12 border-b border-black/5 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative w-full max-w-2xl group">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-black/30 group-focus-within:text-purple transition-colors">
              <Search className="w-6 h-6" />
            </div>
            <input
              type="text"
              placeholder="Search past events, workshops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-transparent border-b-2 border-black/10 text-black font-display text-2xl md:text-3xl placeholder:text-black/20 focus:outline-none focus:border-purple transition-colors rounded-none"
            />
          </div>
          <div className="shrink-0 font-body text-sm tracking-widest uppercase font-bold text-black/40">
            {filteredEvents.length}{" "}
            {filteredEvents.length === 1 ? "Collection" : "Collections"}
          </div>
        </div>
      </section>

      {/* ── 3. EVENT ALBUMS ── */}
      <section className="px-6 md:px-16 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-24">
                {filteredEvents.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: (i % 2) * 0.1,
                    }}
                  >
                    <Link
                      to={`/gallery/${event.id}`}
                      className="group flex flex-col gap-6"
                    >
                      {/* Album Cover */}
                      <div className="w-full aspect-[4/3] bg-black/5 overflow-hidden relative rounded-2xl">
                        <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay pointer-events-none" />
                        <img
                          src={event.coverImage}
                          alt={event.title}
                          loading="lazy"
                          className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                        />

                        {/* Photo Count Badge */}
                        <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-md">
                          <Camera className="w-3.5 h-3.5 text-yellow" />
                          <span>
                            {event.images.length}{" "}
                            {event.images.length === 1 ? "Photo" : "Photos"}
                          </span>
                        </div>

                        {/* Quick Download Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleQuickDownload(event.coverImage, event.title);
                          }}
                          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-yellow text-black flex items-center justify-center shadow-lg transition-all hover:scale-105"
                          title="Download Cover Image"
                          aria-label="Download Cover Image"
                        >
                          <Download className="w-4 h-4" />
                        </button>

                        {/* Hover reveal button */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-2xl">
                            View Gallery <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Album Info */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-4">
                          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-black group-hover:text-purple transition-colors duration-300">
                            {event.title}
                          </h2>
                          <div className="font-body text-xs font-bold tracking-widest uppercase text-black/50 shrink-0">
                            {event.displayDate ||
                              new Date(event.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                              })}
                          </div>
                        </div>
                        <p className="font-body text-black/60 text-lg leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
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

      {/* Floating Download Toast */}
      <AnimatePresence>
        {downloadToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] bg-black text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2.5 shadow-2xl border border-white/10"
          >
            <Check className="w-4 h-4 text-yellow" />
            <span>{downloadToast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
