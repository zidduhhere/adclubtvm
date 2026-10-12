import { useRef, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, Expand, Download, X, Check, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryEvents } from "../data/gallery";
import { downloadImage } from "../lib/download";

export default function EventGallery() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const event = galleryEvents.find(
    (e) => e.id === eventId || e.slug === eventId,
  );

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
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power4.out" },
      );
    },
    { scope: container, dependencies: [event] },
  );

  if (!event) return null;

  const handleDownload = async (src: string, customName?: string) => {
    setDownloadToast("Downloading photo...");
    await downloadImage(src, customName || event.title);
    setDownloadToast("Photo downloaded!");
    setTimeout(() => setDownloadToast(null), 2500);
  };

  const handleDownloadAll = async () => {
    if (downloading || !event.images.length) return;
    setDownloading(true);

    for (let idx = 0; idx < event.images.length; idx++) {
      const img = event.images[idx];
      setDownloadToast(`Downloading ${idx + 1} of ${event.images.length}...`);
      await downloadImage(img.src, `${event.title}-${idx + 1}`);
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    setDownloadToast("All photos downloaded!");
    setDownloading(false);
    setTimeout(() => setDownloadToast(null), 3000);
  };

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
            <h1 className="fade-up-header font-display font-bold text-4xl md:text-7xl uppercase tracking-tight text-black leading-none">
              {event.title}
            </h1>
            <div className="fade-up-header flex flex-wrap items-center gap-4 text-black/50 font-bold uppercase tracking-widest text-sm">
              <span>
                {event.displayDate ||
                  new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-purple">
                <Camera className="w-4 h-4" />
                {event.images.length}{" "}
                {event.images.length === 1 ? "Photo" : "Photos"}
              </span>
            </div>
            <p className="fade-up-header text-lg md:text-xl text-black/70 mt-2 leading-relaxed max-w-2xl">
              {event.description}
            </p>
          </div>

          {/* Download Action Bar */}
          <div className="fade-up-header flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={handleDownloadAll}
              disabled={downloading}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-purple text-white hover:bg-black font-bold uppercase tracking-widest text-xs transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              <span>
                {downloading
                  ? "Downloading..."
                  : `Download ${event.images.length > 1 ? "All Photos" : "Photo"}`}
              </span>
            </button>
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
              transition={{
                duration: 0.6,
                delay: (i % 5) * 0.1,
                ease: "easeOut",
              }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl bg-[#F8F9FA] border border-black/5 shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500 pointer-events-none" />

              {/* Desktop Hover Action Buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(img.src);
                  }}
                  className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-black shadow-xl hover:bg-yellow hover:scale-110 transition-all"
                  title="Expand view"
                  aria-label="Expand view"
                >
                  <Expand className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(img.src, `${event.title}-${i + 1}`);
                  }}
                  className="px-5 h-12 rounded-full bg-black/90 backdrop-blur-md text-white shadow-xl hover:bg-purple hover:scale-105 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                  title="Download photo"
                  aria-label="Download photo"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>

              {/* Mobile quick download button visible on small devices */}
              <div className="md:hidden absolute bottom-3 right-3 z-10 pointer-events-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(img.src, `${event.title}-${i + 1}`);
                  }}
                  className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                  aria-label="Download photo"
                >
                  <Download className="w-4 h-4" />
                </button>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            {/* Top Bar with Download & Close */}
            <div
              className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-3 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() =>
                  handleDownload(selectedImage, `${event.title}-expanded`)
                }
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-yellow hover:text-black font-bold uppercase tracking-widest text-xs shadow-2xl transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download Photo</span>
              </button>
              <button
                type="button"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
