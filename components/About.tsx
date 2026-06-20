"use client";
import { motion } from "motion/react";

import {
    Code2,
    Zap,
    GitBranch,
    MessageSquare,
} from "lucide-react";

import SectionBadge from "./SectionBadge";
import GradientText from "./GradientText";
import { ThemeType } from "@/types/portfolio";

interface AboutProps {
    T: ThemeType;
    divider: React.CSSProperties;
}
export default function About({
    T,
    divider,
}: AboutProps) {
    return (
        <>
            <section id="about" className="relative py-28" style={divider}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <SectionBadge>About Me</SectionBadge>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-7" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>
                                The Developer <GradientText>Behind the Code</GradientText>
                            </h2>
                            <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: T.fg3 }}>
                                <p>I&apos;m <strong style={{ color: T.fg }}>Pradeep Verma</strong>, a Full Stack Developer with a passion for building web applications that are not just functional — but fast, accessible, and genuinely enjoyable to use.</p>
                                <p>My journey started with curiosity about how the web works. That curiosity became a career when I realized I could combine technical problem-solving with visual design to create products that make a real difference.</p>
                                <p>I specialize in the <strong style={{ color: "#c7d2fe" }}>MERN stack and Next.js</strong>, writing clean, maintainable code whether it&apos;s an AI-powered chatbot, a travel booking platform, or a nonprofit website.</p>
                                <p>Currently open to <strong style={{ color: "#818cf8" }}>remote full-time roles, freelance projects, and startup opportunities</strong> where I can contribute meaningfully from day one.</p>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-2.5">
                                {["Problem Solver", "Continuous Learner", "Detail Oriented", "Remote Ready"].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 rounded-lg text-sm font-mono" style={{ background: T.card, border: `1px solid ${T.borderMd}`, color: T.fg3 }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Code2, label: "Code Quality", value: "Always Clean", color: "#818cf8" },
                                { icon: Zap, label: "Performance", value: "Fast Loading", color: "#22d3ee" },
                                { icon: GitBranch, label: "Version Control", value: "Git Workflow", color: "#a78bfa" },
                                { icon: MessageSquare, label: "Communication", value: "Async Friendly", color: "#34d399" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-5 rounded-2xl transition-all"
                                    style={{ border: `1px solid ${T.border}`, background: T.card }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = T.cardHov)}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = T.card)}
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                                        <item.icon size={18} style={{ color: item.color }} />
                                    </div>
                                    <p className="text-xs mb-1" style={{ color: T.fg5 }}>{item.label}</p>
                                    <p className="text-sm font-semibold" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>{item.value}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}