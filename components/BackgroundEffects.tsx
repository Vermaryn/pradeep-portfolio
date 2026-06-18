"use client";

interface GradientOrbProps {
  className: string;
  color: string;
}

function GradientOrb({ className, color }: GradientOrbProps) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
      style={{ background: color }}
    />
  );
}

interface BackgroundEffectsProps {
  T: {
    orbOp: string;
    gridOp: string;
  };
}

export default function BackgroundEffects({
  T,
}: BackgroundEffectsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <GradientOrb
        className="w-[700px] h-[700px] -top-64 -left-48"
        color={`rgba(99,102,241,${T.orbOp})`}
      />

      <GradientOrb
        className="w-[600px] h-[600px] top-1/3 -right-48"
        color={`rgba(139,92,246,${T.orbOp})`}
      />

      <GradientOrb
        className="w-[500px] h-[500px] bottom-1/4 left-1/3"
        color={`rgba(34,211,238,${T.orbOp})`}
      />

      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "44px 44px",
          opacity: T.gridOp,
        }}
      />
    </div>
  );
}