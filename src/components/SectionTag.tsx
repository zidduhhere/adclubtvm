interface SectionTagProps {
  children: React.ReactNode;
  color?: "purple" | "coral" | "yellow";
}

export default function SectionTag({ children, color = "purple" }: SectionTagProps) {
  const cls =
    color === "coral"
      ? "border-coral text-coral"
      : color === "yellow"
      ? "border-yellow text-yellow"
      : "border-purple text-purple";
  return (
    <span
      className={`inline-flex items-center w-fit border ${cls} text-xs tracking-[0.2em] uppercase font-body font-medium px-4 py-1.5 rounded-full`}
    >
      {children}
    </span>
  );
}
