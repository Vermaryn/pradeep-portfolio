export default function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium mb-5" style={{ border: "1px solid rgba(129,140,248,0.3)", background: "rgba(129,140,248,0.08)", color: "#a5b4fc" }}>
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#818cf8" }} />
      {children}
    </span>
  );
}