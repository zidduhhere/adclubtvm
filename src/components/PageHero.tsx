import { type ReactNode } from "react";

interface PageHeroProps {
  title: ReactNode;
}

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className="hero-section h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Assets */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Left Graphic */}
        <img
          src="/SVG/assets-main-2.svg"
          alt=""
          className="parallax-fast absolute left-0 top-0 h-[90vh] w-auto object-cover object-left"
        />
        {/* Right Graphic */}
        <img
          src="/SVG/assets-main-1.svg"
          alt=""
          className="parallax-fast absolute right-0 top-0 h-[90vh] w-auto object-cover object-right"
        />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center relative z-10 w-full px-12 md:px-6 h-full">
        <div className="relative flex flex-col items-start justify-center w-fit">
          {/* Love Hero Background Graphic */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[55%] -translate-y-[60%] w-[130%] md:w-[140%] h-[130%] md:h-[140%] flex items-center justify-center pointer-events-none -z-10">
            <img
              src="/SVG/love-hero.svg"
              alt=""
              className="parallax-bg h-30 md:h-120 w-full object-contain opacity-90"
            />
          </div>

          {/* Typography */}
          <h1
            className="font-display font-bold leading-[1.05] tracking-tighter text-[#642B8F]"
            style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)" }}
          >
            {title}
          </h1>

          {/* Logo */}
          <img
            src="/logo.svg"
            alt="Advertising Club Trivandrum"
            className="mt-6 md:mt-8 h-10 md:h-[3.85rem] w-auto hero-text"
          />
        </div>
      </div>
    </section>
  );
}
