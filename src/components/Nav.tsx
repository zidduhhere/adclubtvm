import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import StaggeredMenu from "./StaggeredMenu";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/living-room", label: "Living Room" },
  { to: "https://loaawards.com", label: "LOA Awards" },
  { to: "/membership", label: "Membership" },
];

const menuItems = links.map((l) => ({
  label: l.label,
  ariaLabel: l.label,
  link: l.to,
}));

const socialItems = [
  { label: "Instagram", link: "https://instagram.com/adclubtvm" },
  { label: "LinkedIn", link: "https://linkedin.com/company/adclubtvm" },
];

export default function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <header
        ref={headerRef}
        className="hidden md:block fixed left-0 right-0 z-50 transition-all duration-300"
        style={{
          top: "var(--banner-h, 0px)",
          background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <nav className="relative flex items-center justify-between px-6 md:px-10 h-20">
          <NavLink to="/" className="flex items-center hover:opacity-75 transition-opacity">
            <img src="/logo.svg" alt="Advertising Club Trivandrum" className="h-14 w-auto" />
          </NavLink>

          <div className="flex items-center gap-7">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => {
                  if (link.label === "Membership") {
                    return "text-[14px] font-display font-bold uppercase tracking-widest transition-all duration-200 bg-purple text-white px-6 py-2.5 rounded-full hover:bg-black hover:-translate-y-0.5 shadow-sm";
                  }
                  return `text-[15px] font-display font-bold uppercase tracking-widest transition-colors duration-200 ${
                    isActive ? "text-purple" : "text-black/70 hover:text-black"
                  }`;
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* ── MOBILE NAV — StaggeredMenu overlay ── */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: "var(--banner-h, 0px)",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <StaggeredMenu
          isFixed={false}
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          logoUrl="/logo.svg"
          colors={["#E8D5F5", "#6B308E"]}
          accentColor="#FEC812"
          menuButtonColor="#231F20"
          openMenuButtonColor="#231F20"
          changeMenuColorOnOpen={true}
          closeOnClickAway={true}
        />
      </div>
    </>
  );
}
