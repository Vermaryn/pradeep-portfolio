"use client";

import React from "react";
import { motion } from "motion/react";

import SectionBadge from "./SectionBadge";
import GradientText from "./GradientText";
import { ThemeType, ProcessStep } from "@/types/portfolio";

interface ProcessProps {
    T: ThemeType;
    divider: React.CSSProperties;
    isDark: boolean;
    PROCESS: ProcessStep[];
}

export default function Process({
    T,
    divider,
    isDark,
    PROCESS,
}: ProcessProps) {
    return (
        <>
            <section className="relative py-28" style={divider}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <SectionBadge>Development Process</SectionBadge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>
                            How I <GradientText>Work</GradientText>
                        </h2>
                        <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: T.fg4 }}>
                            A proven, transparent workflow — from brief to launch — that keeps every project on track.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {PROCESS.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="relative p-6 rounded-2xl overflow-hidden transition-all"
                                style={{ border: `1px solid ${T.border}`, background: T.card }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = T.cardHov)}
                                onMouseLeave={(e) => (e.currentTarget.style.background = T.card)}
                            >
                                <span className="absolute top-4 right-5 text-7xl font-black font-mono select-none" style={{ color: isDark ? "rgba(255,255,255,0.025)" : "rgba(99,102,241,0.07)" }}>
                                    {p.step}
                                </span>
                                <span className="inline-block px-2 py-0.5 rounded text-xs font-mono mb-4" style={{ background: "rgba(99,102,241,0.1)", color: "#818cf8" }}>
                                    {p.step}
                                </span>
                                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>{p.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: T.fg4 }}>{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}