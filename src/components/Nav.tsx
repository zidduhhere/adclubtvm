import { NavLink } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { to: "/about", label: "About" },
  { to: "/events", label: "Activity" },
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/instagram", label: "Instagram" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <header
      className="fixed left-0 right-0 z-50 bg-[var(--color-surface)] border-b border-[var(--color-muted)]"
      style={{ top: "var(--banner-h, 0px)" }}
    >
      <nav className="relative flex items-center px-6 md:px-10 h-16">
        {/* Wordmark — left */}
        <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img src="/logo.svg" alt="Advertising Club Trivandrum" className="h-8 w-auto" />
        </NavLink>

        {/* Pill nav — absolutely centered in the header */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <div className="relative flex items-center gap-1 border border-[var(--color-muted)] rounded-full px-2 pt-1.5 pb-2.5 bg-white/70 backdrop-blur-sm overflow-hidden">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-xs tracking-[0.15em] uppercase font-body font-medium transition-all ${
                    isActive
                      ? "bg-[var(--color-yellow)] text-[var(--color-bg-warm)]"
                      : "text-[var(--color-bg-warm)]/60 hover:text-[var(--color-bg-warm)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Scroll progress line inside pill, bottom edge */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-purple origin-left rounded-full"
              style={{ scaleX, width: "100%" }}
            />
          </div>
        </div>

        {/* Mobile links — right */}
        <div className="flex md:hidden items-center gap-5 ml-auto">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-xs tracking-[0.12em] uppercase font-body font-medium transition-colors ${
                  isActive ? "text-[var(--color-purple)]" : "text-[var(--color-bg-warm)]/50 hover:text-[var(--color-bg-warm)]"
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
