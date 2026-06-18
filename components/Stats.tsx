"use client";

import React from "react";
import { motion } from "motion/react";
import { ThemeType } from "@/types/portfolio";
interface StatsProps {
    isDark: boolean;
    T: ThemeType;
    STATS: {
        icon: React.ElementType;
        number: string;
        label: string;
    }[];
}

export default function Stats({ T,
    isDark,
    STATS,
}: StatsProps) {
    return (
        <>
            <div style={{ borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, background: isDark ? "rgba(255,255,255,0.015)" : "rgba(99,102,241,0.03)" }}>
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                                <s.icon size={18} style={{ color: "#818cf8" }} />
                            </div>
                            <div className="text-3xl font-bold mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>{s.number}</div>
                            <div className="text-sm" style={{ color: T.fg4 }}>{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}