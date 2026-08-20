import { Link } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { upcoming } from "../data/events";

gsap.registerPlugin(ScrollTrigger);

function FadeUp({ children = null, className = "", delay = 0 }: { children?: React.ReactNode; delay?: number; className?: string }) {
  const comp = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
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
        }
      }
    );
  }, { scope: comp });

  return (
    <div ref={comp} className={className}>
      {children}
    </div>
  );
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax background elements
    gsap.to(".parallax-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    gsap.to(".parallax-fast", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".parallax-mid", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".mid-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Hero Text Stagger Intro
    gsap.fromTo(".hero-text", 
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.1 }
    );
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-white text-black overflow-x-hidden font-body selection:bg-yellow selection:text-black pt-20">
      
      {/* ── 1. HERO HEADER ── */}
      <section className="hero-section min-h-screen px-6 md:px-16 pt-32 pb-24 relative flex flex-col items-center justify-center text-center">
        {/* Wavy lines / Grid Backgrounds from Figma */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          
          {/* Top Subtle Wavy Lines Accent */}
          <svg viewBox="0 0 1440 100" className="parallax-bg absolute top-20 left-0 w-full h-auto opacity-[0.15] stroke-black fill-none" preserveAspectRatio="none" style={{ strokeWidth: "1.5px" }}>
            <path d="M0,30 Q180,-10 360,30 T720,30 T1080,30 T1440,30" />
            <path d="M0,50 Q180,10 360,50 T720,50 T1080,50 T1440,50" />
            <path d="M0,70 Q180,30 360,70 T720,70 T1080,70 T1440,70" />
          </svg>

          {/* Left Grid */}
          <img src="/SVG/grid.svg" alt="" className="parallax-fast absolute top-4 left-0 h-[60%] md:h-[70%] object-contain -ml-[5%] lg:-ml-[10%]" />
          {/* Right Grid */}
          <img src="/SVG/grid-2.svg" alt="" className="parallax-fast absolute top-4 right-0 h-[40%] md:h-[50%] object-contain -mr-[5%] lg:-mr-[10%]" />
          {/* Bottom Right Grid */}
          <img src="/SVG/grid-3.svg" alt="" className="parallax-bg absolute bottom-32 right-0 h-[30%] md:h-[40%] object-contain -mr-[5%] lg:-mr-[10%]" />
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10 w-full">
          <div className="relative w-full flex justify-center">
            {/* Love Hero Background Graphic */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90%] md:h-[110%] flex items-center justify-center pointer-events-none -z-10">
              <img 
                src="/SVG/love-hero.svg" 
                alt="" 
                className="parallax-bg h-full w-auto max-w-none object-contain opacity-90" 
              />
            </div>
            <h1 className="font-display font-bold leading-[1.1] tracking-tighter w-full" style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}>
              <span className="hero-text inline-block">For the</span> <br />
              <span className="hero-text text-purple inline-block">Love of</span> <br />
              <span className="hero-text inline-block">Advertising.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── 2. HIGHLIGHT CARD (LOA AWARDS) ── */}
      <section className="mid-section relative z-0 px-4 md:px-16 pb-24">
        {/* Background Grid 4 behind the highlight card */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[80%] flex items-center justify-start pointer-events-none z-0">
          <img src="/SVG/grid-4.svg" alt="" className="parallax-mid h-full max-w-none object-contain" />
        </div>
        
        <FadeUp delay={0.1} className="relative z-10">
          <div className="max-w-7xl mx-auto bg-yellow text-black rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="flex flex-col gap-4 relative z-10 w-full md:w-1/2">
              <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] tracking-tight uppercase">
                Keep it <br />
                <span className="text-purple-deep">Simple</span> <br />
                Silly.
              </h2>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="https://loaawards.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black/80 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-3"
                >
                  Explore More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
              <div className="w-64 h-64 bg-coral rounded-full flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group">
                <span className="font-display font-bold text-black text-2xl rotate-[-15deg] group-hover:scale-110 transition-transform cursor-pointer">LOA AWARDS 2025</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 px-6 flex justify-between items-center text-xs md:text-sm font-bold uppercase tracking-widest">
              <span>Applications Open</span>
              <span className="text-yellow">Submit your best work</span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── 3. INTRODUCTION PARAGRAPH ── */}
      <section className="px-6 md:px-16 py-20">
        <FadeUp className="max-w-5xl mx-auto">
          <p className="font-display font-medium text-2xl md:text-4xl leading-snug tracking-tight text-black/90">
            <span className="text-purple font-bold">Advertising Club Trivandrum (ACT)</span> is an exclusive platform established to bring together professionals from the advertising and media industries in Kerala's capital city. We foster <span className="text-magenta font-bold">innovation, collaboration, and professional excellence.</span>
          </p>
        </FadeUp>
      </section>

      {/* ── 4. WHO WE ARE (DNA) ── */}
      <section className="px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          <FadeUp className="w-full md:w-1/2 h-[400px] md:h-[600px] rounded-3xl overflow-hidden relative" delay={0.1}>
            <img 
              src="https://placehold.co/800x1200/F0EBE3/000000?text=ACT+Community" 
              alt="ACT Community" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </FadeUp>
          <FadeUp className="w-full md:w-1/2 bg-[#F8F9FA] border border-black/5 p-10 md:p-16 rounded-3xl flex flex-col justify-center" delay={0.2}>
            <h3 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-8">
              Advertising <span className="text-purple">DNA</span>
            </h3>
            <div className="space-y-6 text-black/80 font-body text-lg leading-relaxed">
              <p>
                Our advertising and creative community in Trivandrum powers through a year-round calendar of marketing and advertising events, setting the standard for what's next globally.
              </p>
              <p>
                We connect creatives, strategists, and media professionals to elevate the standards of advertising across Kerala through <span className="text-magenta font-bold">events, awards, and shared ambition.</span>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 5. WHAT WE DO (CAREER DRIVEN) ── */}
      <section className="px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-6">
          <FadeUp className="w-full md:w-1/2 bg-[#F8F9FA] border border-black/5 p-10 md:p-16 rounded-3xl flex flex-col justify-center" delay={0.1}>
            <h3 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-8">
              <span className="text-purple">Career-Driven</span> <br />
              Advertising <br />
              Education <br />
              For Tomorrow's <br />
              Trailblazers
            </h3>
            <p className="text-black/80 font-body text-lg leading-relaxed mb-10">
              Through our <span className="text-magenta font-bold">Living Room dialogue series</span>, professionals can upskill, sharpen expertise, and stay ahead of industry trends. We make advertising future-focussed education in Kerala more accessible and impactful.
            </p>
            <Link 
              to="/living-room" 
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black/80 transition-colors self-start"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
          <FadeUp className="w-full md:w-1/2 h-[400px] md:h-[auto] rounded-3xl overflow-hidden relative" delay={0.2}>
            <img 
              src="https://placehold.co/800x1200/CDC7D3/000000?text=Living+Room+Series" 
              alt="Living Room" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── 6. WHY ACT? (MANIFESTO) ── */}
      <section className="px-6 md:px-16 py-32 text-center flex flex-col items-center justify-center">
        <FadeUp className="max-w-4xl flex flex-col items-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-4">
            <span className="text-purple">Why</span> ACT?
          </h2>
          <p className="font-body text-xl font-bold uppercase tracking-widest text-black/60 mb-12">
            Don't just attend events, join the movement.
          </p>
          <p className="font-body text-xl md:text-2xl leading-relaxed text-black/90">
            Be part of a community that defines advertising in India, right here in Trivandrum, where creativity thrives, careers accelerate, and bold ideas find their stage. This is more than a calendar of events; it's a movement that keeps the pulse of advertising alive and future-ready.
          </p>
        </FadeUp>
      </section>

      {/* ── 7. SCROLLING MARQUEE ── */}
      <section className="py-6 bg-yellow text-black border-y-4 border-black overflow-hidden flex whitespace-nowrap relative">
        <div className="animate-marquee flex items-center font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter">
          <span className="mx-6">✦ EDUCATE </span>
          <span className="mx-6">✦ ENGAGE </span>
          <span className="mx-6">✦ LOA AWARDS 2025 </span>
          <span className="mx-6">✦ INSPIRE </span>
          <span className="mx-6">✦ EDUCATE </span>
          <span className="mx-6">✦ ENGAGE </span>
          <span className="mx-6">✦ LOA AWARDS 2025 </span>
          <span className="mx-6">✦ INSPIRE </span>
        </div>
      </section>

      {/* ── 8. MEMBERSHIP CTA ── */}
      <section className="px-6 md:px-16 py-12">
        <FadeUp>
          <div className="max-w-7xl mx-auto bg-[#F8F9FA] border border-black/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/10">
              <div className="inline-block border border-black/20 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-8 self-start text-black/60">
                Membership
              </div>
              <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight leading-[1.05] mb-8">
                Don't Just Disrupt, <br />
                <span className="text-purple">Do it with Distinction.</span>
              </h2>
              <p className="font-body text-black/70 leading-relaxed mb-10">
                Because this is where Kerala's advertising story is written every day. At ACT, you don't just watch the industry evolve, you're part of the movement that drives it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/membership" className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black/80 transition-colors flex items-center justify-center gap-3 text-center">
                  Become a Member <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/about" className="bg-transparent border-2 border-black/20 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black/5 transition-colors flex items-center justify-center gap-3 text-center">
                  Begin Your Journey <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img 
                src="https://placehold.co/800x1000/F0EBE3/000000?text=ACT+Members" 
                alt="ACT Members" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── 9. UPCOMING EVENTS ── */}
      <section className="px-6 md:px-16 pt-24 pb-32">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight">
              Stay Ahead of the Curve By <br />
              Participating In Our <br />
              <span className="text-purple-light italic border-b-4 border-yellow pb-2 inline-block mt-2">Upcoming Events</span>
            </h2>
          </FadeUp>
          
          <div className="flex flex-col border-t border-black/10">
            {upcoming.map((u, idx) => (
              <FadeUp key={u.id} delay={idx * 0.1}>
                <Link to="/events" className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-black/10 group hover:bg-black/5 transition-colors px-4 -mx-4 rounded-lg">
                  <div className="flex gap-8 items-center w-full md:w-auto">
                    <div className="bg-black text-white p-4 text-center rounded w-24 shrink-0">
                      <span className="block text-[10px] font-bold tracking-widest uppercase mb-1">{u.date.split(" ")[0]}</span>
                      <span className="block font-display font-bold text-3xl">{u.date.split(" ")[1]}</span>
                      <span className="block text-[10px] font-bold tracking-widest uppercase mt-1">{u.date.split(" ")[2]}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl md:text-2xl group-hover:text-purple transition-colors max-w-2xl">
                        {u.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-6 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                    <span className="border border-black/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-black/60">
                      {u.type}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-yellow text-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
