import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Activity" },
  { to: "/gallery", label: "Living Room" },
  { to: "/instagram", label: "Awards" },
];

export default function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-aware background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP entrance
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 z-50 transition-all duration-300"
      style={{
        top: "var(--banner-h, 0px)",
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <nav className="relative flex items-center px-6 md:px-10 h-14">
        {/* Logo — left */}
        <NavLink to="/" className="flex items-center hover:opacity-75 transition-opacity">
          <img src="/logo.svg" alt="Advertising Club Trivandrum" className="h-7 w-auto" />
        </NavLink>

        {/* Centered nav links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-[15px] font-display font-medium tracking-[-0.03em] transition-colors duration-200 ${
                  isActive ? "text-[#6B308E]" : "text-[#b0b0b0] hover:text-[#231F20]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile links — right */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
          {links.slice(0, 3).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-xs font-display font-medium tracking-[-0.01em] transition-colors ${
                  isActive ? "text-[#6B308E]" : "text-[#b0b0b0] hover:text-[#231F20]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
