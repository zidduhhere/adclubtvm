import { useRef, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, Expand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryEvents } from "../data/gallery";

export default function EventGallery() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const event = galleryEvents.find(e => e.id === eventId);

  useEffect(() => {
    // If event not found, redirect back to gallery
    if (!event) {
      navigate("/gallery");
    }
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [event, navigate]);

  useGSAP(
    () => {
      if (!event) return;

      gsap.fromTo(
        ".fade-up-header",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power4.out" }
      );
    },
    { scope: container, dependencies: [event] }
  );

  if (!event) return null;

  return (
    <main
      ref={container}
      className="min-h-screen bg-white text-black overflow-x-hidden font-body pt-32 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-16">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col gap-8 max-w-4xl">
          <Link 
            to="/gallery"
            className="fade-up-header inline-flex items-center gap-2 text-black/50 hover:text-purple uppercase font-bold tracking-widest text-xs transition-colors self-start"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Collections
          </Link>
          
          <div className="flex flex-col gap-4">
            <h1 className="fade-up-header font-display font-bold text-5xl md:text-7xl uppercase tracking-tight text-black leading-none">
              {event.title}
            </h1>
            <div className="fade-up-header flex items-center gap-4 text-black/50 font-bold uppercase tracking-widest text-sm">
              <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{event.images.length} Photos</span>
            </div>
            <p className="fade-up-header text-xl text-black/70 mt-4 leading-relaxed max-w-2xl">
              {event.description}
            </p>
          </div>
        </div>

        {/* ── MASONRY GRID ── */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {event.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 5) * 0.1, ease: "easeOut" }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl bg-[#F8F9FA]"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-500 ease-out">
                  <Expand className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/5 text-black hover:bg-black hover:text-white transition-colors"
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
