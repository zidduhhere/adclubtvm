import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { upcoming } from "../data/events";

gsap.registerPlugin(ScrollTrigger);

function FadeUp({
  children = null,
  className = "",
  delay = 0,
}: {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const comp = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        comp.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: comp.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: comp },
  );

  return (
    <div ref={comp} className={className}>
      {children}
    </div>
  );
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
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
        gsap.to(".parallax-mid", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".mid-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
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
      className="min-h-screen bg-white text-black overflow-x-hidden font-body selection:bg-yellow selection:text-black pt-20"
    >
      {/* ── 1. HERO HEADER ── */}
      <section className="hero-section min-h-screen px-6 md:px-16 pt-32 pb-24 relative flex flex-col items-center justify-center text-center">
        {/* Wavy lines / Grid Backgrounds from Figma */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {/* Top Subtle Wavy Lines Accent */}
          {/* <svg
            viewBox="0 0 1440 100"
            className="parallax-bg absolute top-20 left-0 w-full h-auto opacity-[0.15] stroke-black fill-none"
            preserveAspectRatio="none"
            style={{ strokeWidth: "1.5px" }}
          >
            <path d="M0,30 Q180,-10 360,30 T720,30 T1080,30 T1440,30" />
            <path d="M0,50 Q180,10 360,50 T720,50 T1080,50 T1440,50" />
            <path d="M0,70 Q180,30 360,70 T720,70 T1080,70 T1440,70" />
          </svg> */}

          {/* Left Grid */}
          <img
            src="/SVG/grid.svg"
            alt=""
            className="parallax-fast absolute top-4 left-0 h-[60%] md:h-[70%] object-contain -ml-[5%] lg:-ml-[10%]"
          />
          {/* Right Grid */}
          <img
            src="/SVG/grid-2.svg"
            alt=""
            className="parallax-fast absolute top-4 right-0 h-[40%] md:h-[50%] object-contain -mr-[5%] lg:-mr-[10%]"
          />
          {/* Bottom Right Grid */}
          <img
            src="/SVG/grid-3.svg"
            alt=""
            className="parallax-bg absolute bottom-0 right-0 h-[30%] md:h-[40%] object-contain "
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10 w-full">
          <div className="relative w-full flex justify-center">
            {/* Love Hero Background Graphic */}
            <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] md:h-[110%] items-center justify-center pointer-events-none -z-10">
              <img
                src="/SVG/love-hero.svg"
                alt=""
                className="parallax-bg h-full w-auto max-w-none object-contain opacity-90"
              />
            </div>
            <h1
              className="font-display font-bold leading-[1.1] tracking-tighter w-full"
              style={{ fontSize: "clamp(3rem, 7vw, 8rem)" }}
            >
              <span className="hero-text inline-block">For The</span> <br />
              <span className="hero-text text-purple inline-block">
                Love Of
              </span>{" "}
              <br />
              <span className="hero-text inline-block">Advertising.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── 2. INTRODUCTION & BACKGROUND GRID ── */}
      <section className="mid-section relative z-0 px-6 md:px-16 py-32 md:py-48 flex items-center justify-end">
        {/* Background Grid 4 */}
        <div className="flex absolute top-1/2 left-0 -translate-y-1/2 w-full h-[75%] items-center justify-start pointer-events-none z-0">
          <img
            src="/SVG/grid-4.svg"
            alt=""
            className="parallax-mid h-full max-w-none object-contain"
          />
        </div>

        {/* Introduction Paragraph */}
        <FadeUp className="max-w-4xl ml-auto relative z-10">
          <p className="font-display font-medium text-2xl md:text-4xl leading-snug tracking-tight text-black/90">
            <span className="text-purple font-bold">
              Advertising Club Trivandrum (ACT)
            </span>{" "}
            is an exclusive platform established to bring together professionals
            from the advertising and media industries in Kerala's capital city.
            This initiative aims to foster{" "}
            <span className="text-magenta font-bold">
              innovation, collaboration, and professional excellence
            </span>{" "}
            within the region's dynamic creative economy.
          </p>
        </FadeUp>
      </section>

      {/* ── 4. WHO WE ARE (DNA) ── */}
      <section className="px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          <FadeUp
            className="w-full md:w-3/5 rounded-3xl overflow-hidden relative flex items-center"
            delay={0.1}
          >
            <img
              src="https://act-pull-zone.b-cdn.net/logo-reveal.jpeg"
              alt="ACT Logo Reveal"
              className="w-full h-auto aspect-video object-cover transition-all duration-700 rounded-3xl"
            />
          </FadeUp>
          <FadeUp
            className="w-full md:w-2/5 bg-[#F8F9FA] border border-black/5 p-10 md:p-12 rounded-3xl flex flex-col justify-center"
            delay={0.2}
          >
            <h3 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-8">
              Advertising <span className="text-purple">Club Trivandrum</span>
            </h3>
            <div className="space-y-6 text-black/80 font-body text-lg leading-relaxed">
              <p>
                The Club, formed with the active participation of professionals
                across various domains of advertising and media, aims to serve
                as a hub for knowledge-sharing, networking, and nurturing talent
                in the region.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 5. WHAT WE DO (CAREER DRIVEN) ── */}
      <section className="px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-6 items-center">
          <FadeUp
            className="w-full md:w-1/2 bg-[#F8F9FA] border border-black/5 p-8 md:p-12 rounded-3xl flex flex-col justify-center"
            delay={0.1}
          >
            <h3 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-8">
              Living Room <br />
              <span className="text-purple">Series</span>
            </h3>
            <div className="space-y-6 text-black/80 font-body text-md  leading-relaxed mb-10">
              <p>
                An exclusive knowledge-sharing series by ACT, featuring intimate
                conversations with advertising industry leaders, offering
                members a platform to learn from some of the brightest minds in
                advertising.
              </p>
            </div>
            <Link
              to="/living-room"
              className="inline-flex items-center gap-3 bg-purple/10 text-purple px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-purple hover:text-white transition-colors self-start"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
          <FadeUp className="w-full md:w-1/2 flex flex-col gap-4" delay={0.2}>
            <img
              src="https://act-pull-zone.b-cdn.net/gallery/gallery-7.jpg"
              alt="Living Room 1"
              className="w-full aspect-video object-cover rounded-3xl transition-all duration-700"
            />
            <img
              src="https://act-pull-zone.b-cdn.net/gallery/gallery-10.jpg"
              alt="Living Room 2"
              className="w-full aspect-video object-cover rounded-3xl transition-all duration-700"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── 6. WHY ACT? (MANIFESTO) ── */}
      {/*
      <section className="px-6 md:px-16 py-32 text-center flex flex-col items-center justify-center">
        <FadeUp className="max-w-4xl flex flex-col items-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-4">
            <span className="text-purple">Why</span> ACT?
          </h2>
          <p className="font-body text-xl font-bold uppercase tracking-widest text-black/60 mb-12">
            Don't just attend events, join the movement.
          </p>
          <p className="font-body text-xl md:text-2xl leading-relaxed text-black/90">
            Be part of a thriving community where creativity meets
            collaboration. Network with industry professionals, access learning
            opportunities, and shape the future of advertising in Trivandrum.
          </p>
        </FadeUp>
      </section>
      */}

      {/* ── 7. SCROLLING MARQUEE ── */}
      {/*
      <section className="py-20 bg-white overflow-hidden relative flex flex-col justify-center">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
          <div className="w-[120%] h-40 bg-purple/5 blur-[80px] rounded-full"></div>
        </div>

        <div className="w-[110%] -ml-[5%] -rotate-2 bg-gradient-to-r from-purple/5 via-purple/10 to-purple/5 py-8 border-y border-purple/10 flex whitespace-nowrap shadow-sm backdrop-blur-sm relative">
          <div className="animate-marquee flex items-center font-display font-medium italic text-4xl md:text-5xl tracking-wide text-purple">
            <span className="mx-8 flex items-center gap-8">
              For the Love of Advertising{" "}
              <span className="text-yellow text-3xl not-italic opacity-80">
                ♥
              </span>
            </span>
            <span className="mx-8 flex items-center gap-8">
              For the Love of Advertising{" "}
              <span className="text-yellow text-3xl not-italic opacity-80">
                ♥
              </span>
            </span>
            <span className="mx-8 flex items-center gap-8">
              For the Love of Advertising{" "}
              <span className="text-yellow text-3xl not-italic opacity-80">
                ♥
              </span>
            </span>
            <span className="mx-8 flex items-center gap-8">
              For the Love of Advertising{" "}
              <span className="text-yellow text-3xl not-italic opacity-80">
                ♥
              </span>
            </span>
            <span className="mx-8 flex items-center gap-8">
              For the Love of Advertising{" "}
              <span className="text-yellow text-3xl not-italic opacity-80">
                ♥
              </span>
            </span>
            <span className="mx-8 flex items-center gap-8">
              For the Love of Advertising{" "}
              <span className="text-yellow text-3xl not-italic opacity-80">
                ♥
              </span>
            </span>
            <span className="mx-8 flex items-center gap-8">
              For the Love of Advertising{" "}
              <span className="text-yellow text-3xl not-italic opacity-80">
                ♥
              </span>
            </span>
            <span className="mx-8 flex items-center gap-8">
              Lorem{" "}
              <span className="text-yellow text-3xl not-italic opacity-80">
                ♥
              </span>
            </span>
          </div>
        </div>
      </section>
      */}

      {/* ── 8. MEMBERSHIP CTA ── */}
      <section className="px-6 md:px-16 py-12">
        <FadeUp>
          <div className="max-w-7xl mx-auto relative rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[500px] flex items-end justify-center pb-12">
            {/* Background Image */}
            <img
              src="https://act-pull-zone.b-cdn.net/gallery/gallery-2.jpg"
              alt="ACT Members"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            />
            {/* Black Filter Backdrop */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none transition-all duration-700 group-hover:bg-black/50"></div>

            {/* CTA Button */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 px-6 w-full max-w-sm">
              <Link
                to="/membership"
                className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 text-center w-full"
              >
                Join the Club <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── 9. UPCOMING EVENTS ── */}
      <section className="px-6 md:px-16 pt-24 pb-32 bg-[#F8F9FA] relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeUp>
            <div className="bg-white rounded-[2rem] shadow-xl shadow-purple/5 p-8 md:p-12 border border-black/5">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-black/5 pb-6 gap-4">
                <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-none text-black/90">
                  Upcoming <br />
                  <span className="text-purple">Events</span>
                </h2>
                <Link
                  to="/events"
                  className="inline-flex bg-purple/10 text-purple px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-purple hover:text-white transition-colors self-start md:self-auto"
                >
                  View All Events
                </Link>
              </div>

              <div className="flex flex-col">
                {upcoming.map((u) => (
                  <Link
                    key={u.id}
                    to="/events"
                    className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-black/5 last:border-0 hover:bg-purple/5 -mx-4 px-4 rounded-2xl transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="bg-purple/10 text-purple group-hover:bg-purple group-hover:text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shrink-0 transition-colors">
                        <span className="text-[10px] font-bold uppercase leading-none">
                          {u.date.split(" ")[0]}
                        </span>
                        <span className="font-display font-bold text-2xl leading-none mt-1">
                          {u.date.split(" ")[1]}
                        </span>
                        <span className="text-[10px] font-bold uppercase leading-none mt-1">
                          {u.date.split(" ")[2]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl md:text-2xl group-hover:text-purple transition-colors text-black/90">
                          {u.title}
                        </h3>
                        <p className="font-body text-sm font-medium text-black/50 mt-1 uppercase tracking-widest">
                          {u.type}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex mt-4 md:mt-0 w-10 h-10 rounded-full bg-white text-purple items-center justify-center group-hover:bg-yellow group-hover:text-black shadow-sm transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
