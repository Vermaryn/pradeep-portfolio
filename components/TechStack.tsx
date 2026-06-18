"use client";

import React from "react";
import { motion } from "motion/react";
import { ThemeType } from "@/types/portfolio";
import SectionBadge from "@/components/SectionBadge";
import GradientText from "@/components/GradientText";
interface TechStackProps {
    T: ThemeType;
    isDark: boolean;

    divider: React.CSSProperties;

    TECH_STACK: Record<
        string,
        {
            name: string;
            level: number;
        }[]
    >;

    CAT_META: {
        icon: React.ElementType;
        color: string;
    }[];
}
export default function TechStack({
    T,
    isDark,
    divider,
    TECH_STACK,
    CAT_META,
}: TechStackProps) {
    return (
        <>
            <section id="stack" className="relative py-28" style={divider}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center">
                        <SectionBadge>Technology Stack</SectionBadge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>
                            Tools of the <GradientText>Trade</GradientText>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {Object.entries(TECH_STACK).map(([category, items], ci) => {
                            const meta = CAT_META[ci];
                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: ci * 0.1 }}
                                    className="rounded-2xl p-6 transition-all"
                                    style={{ border: `1px solid ${T.border}`, background: T.card }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = T.cardHov)}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = T.card)}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${meta.color}15`, border: `1px solid ${meta.color}30` }}>
                                            <meta.icon size={16} style={{ color: meta.color }} />
                                        </div>
                                        <span className="text-sm font-semibold" style={{ color: T.fg }}>{category}</span>
                                    </div>
                                    <div className="space-y-4">
                                        {items.map((item) => (
                                            <div key={item.name}>
                                                <div className="flex justify-between mb-1.5">
                                                    <span className="text-sm" style={{ color: T.fg3 }}>{item.name}</span>
                                                    <span className="text-xs font-mono" style={{ color: T.fg5 }}>{item.level}%</span>
                                                </div>
                                                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)" }}>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
                                                        className="h-full rounded-full"
                                                        style={{ background: `linear-gradient(90deg, ${meta.color}60, ${meta.color})` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}