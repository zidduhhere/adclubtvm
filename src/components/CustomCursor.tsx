import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 44,
        height: 44,
        pointerEvents: "none",
        zIndex: 99999,
        willChange: "transform",
        transform: "translate(-100px, -100px)",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
        <defs>
          <filter id="cur-shadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="2" dy="3" stdDeviation="2.5" floodColor="#00000045" />
          </filter>
        </defs>
        {/* white sticker outline */}
        <path
          d="M6 4 L38 18 L25 24 L19 38 Z"
          fill="white"
          stroke="white"
          strokeWidth="7"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#cur-shadow)"
        />
        {/* dark arrow */}
        <path d="M6 4 L38 18 L25 24 L19 38 Z" fill="#1c1c1c" />
      </svg>
    </div>
  );
}
