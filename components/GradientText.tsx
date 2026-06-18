export default function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ backgroundImage: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      {children}
    </span>
  );
}