"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let start = 0;
    const DURATION = 400;
    const tick = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / DURATION, 1);
      setPct(Math.round(p * 100));
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(onDone, 180);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [onDone]);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-200 flex flex-col items-center justify-center"
      style={{ background: "#07071a" }}
    >
      {/* Bg orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-125500px] -top-32 -left-32 rounded-full blur-[130px]" style={{ background: "#6366f1", opacity: 0.18 }} />
        <div className="absolute w-100 h-100 -bottom-32 -right-32 rounded-full blur-[130px]" style={{ background: "#8b5cf6", opacity: 0.14 }} />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-7 relative"
      >
        {/* Logo mark */}
        <div className="w-22 h-22 rounded-2xl p-0.5" style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)" }}>
          <div className="w-full h-full rounded-[14px] flex items-center justify-center" style={{ background: "#0d0d24" }}>
            <span className="text-3xl font-black select-none" style={{ fontFamily: "'Outfit', sans-serif", backgroundImage: "linear-gradient(135deg, #818cf8, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              PV
            </span>
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-2xl font-bold mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: "#f1f5f9" }}>
            Pradeep Verma
          </p>
          <p className="text-sm font-mono" style={{ color: "#64748b" }}>
            Full Stack Developer
          </p>
        </motion.div>

        {/* Percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs font-mono tabular-nums"
          style={{ color: "#475569" }}
        >
          {pct}%
        </motion.p>
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-52">
        <div className="h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            className="h-full rounded-full transition-none"
            style={{ width: `${pct}%`, background: "linear-gradient(90deg, #6366f1, #a78bfa, #22d3ee)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}