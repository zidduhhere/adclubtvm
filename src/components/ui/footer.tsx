import { Link } from "react-router-dom";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

interface FooterProps {
  brandName: string;
  displayText: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  columns: FooterColumn[];
  copyright: {
    text: string;
    subtitle?: string;
  };
}

export function Footer({
  brandName,
  displayText,
  socialLinks,
  columns,
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-[var(--color-bg)] text-white">
      {/* Giant display text */}
      <div className="px-6 md:px-10 pt-20 pb-16 border-b border-white/10">
        <p
          className="font-display font-800 uppercase leading-[0.85] text-[clamp(4rem,14vw,11rem)] tracking-[-0.03em] text-white select-none"
          aria-hidden="true"
        >
          {displayText}
        </p>
      </div>

      {/* Main footer content */}
      <div className="px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          {/* Left — brand + socials */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-flex items-center gap-2" aria-label={brandName}>
              <span className="font-display font-800 text-white text-lg tracking-widest">
                ACT
              </span>
              <span className="font-display font-700 tracking-[0.2em] uppercase text-white/60 text-sm">
                {brandName}
              </span>
            </Link>

            <ul className="flex list-none gap-3">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white/70 hover:bg-white hover:text-black transition-colors"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-xs tracking-[0.25em] uppercase font-body text-white/40 mb-4">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-2.5 list-none">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="text-sm font-body text-white/70 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-body text-white/70 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="px-6 md:px-10 py-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs font-body text-white/40">{copyright.text}</p>
          {copyright.subtitle && (
            <p className="text-xs font-body text-white/30">{copyright.subtitle}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
