"use client";

import { motion } from "motion/react";
import {
    ArrowRight,
    Download,
    Calendar,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Award,
    CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import GradientText from "./GradientText";
import { ThemeType } from "@/types/portfolio";
interface HeroProps {
    loading: boolean;
    T: ThemeType;
    scrollTo: (href: string) => void;
    isDark: boolean;
    visibleLines: string[];
    lineOffset: number;
}
export default function Hero({
    loading,
    T,
    scrollTo,
    isDark,
    visibleLines,
    lineOffset,
}: HeroProps) {
    return (
        <>
            <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20">
                <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-14 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: loading ? 0 : 0 }}
                    >
                        {/* Badge row */}
                        <div className="flex flex-wrap items-center gap-3 mb-7">
                            <span
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                                style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)", color: "#34d399" }}
                            >
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#34d399" }} />
                                Open to Work
                            </span>
                            <span
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                                style={{ background: `${T.card}`, border: `1px solid ${T.borderMd}`, color: T.fg4 }}
                            >
                                <Calendar size={11} style={{ color: "#818cf8" }} />
                                2+ Years Experience
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.05] mb-6"
                            style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}
                        >
                            Building Modern
                            <br />
                            Web Applications
                            <br />
                            <GradientText>with MERN &amp; Next.js</GradientText>
                        </h1>

                        <p className="text-lg leading-relaxed mb-9" style={{ color: T.fg3, maxWidth: "480px" }}>
                            Full Stack Developer creating{" "}
                            <strong style={{ color: T.fg2 }}>scalable, responsive</strong> and{" "}
                            <strong style={{ color: T.fg2 }}>performance-focused</strong> web experiences
                            that solve real business problems.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            <button
                                onClick={() => scrollTo("#work")}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 4px 20px rgba(99,102,241,0.35)" }}
                            >
                                View Projects <ArrowRight size={15} />
                            </button>
                            <a
                                href="/resume/Pradeep_Web_Dev.pdf"
                                target="_blank"
                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.03]"
                                style={{ color: T.fg2, border: `1px solid ${T.borderLg}`, background: T.card }}
                            >
                                <Download size={15} /> Download Resume
                            </a>
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.03] cursor-pointer"
                                style={{ color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)", background: "rgba(34,211,238,0.05)" }}
                            >
                                Contact Me
                            </button>
                        </div>

                        <div className="flex items-center gap-5">
                            {[
                                { Icon: Github, href: "https://github.com/Vermaryn" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/pradeep-verma-7b1b63122/" },
                                { Icon: Twitter, href: "https://x.com/Pradeepver58490" },
                                { Icon: Mail, href: "mailto:pradeep.222v@gmail.com" },
                                {
                                    Icon: FaWhatsapp,
                                    href: "https://wa.me/918630275340",
                                },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="transition-colors duration-200"
                                    style={{ color: T.fg5 }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = T.fg)}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = T.fg5)}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex flex-col items-center gap-6"
                    >
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-44 h-44 rounded-full p-[2.5px]" style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)" }}>
                                <div
                                    className="w-full h-full rounded-full flex items-center justify-center"
                                    style={{ background: isDark ? "#0d0d24" : "#eff1ff" }}
                                >
                                    <span
                                        className="text-5xl font-black select-none"
                                        style={{ fontFamily: "'Outfit', sans-serif", backgroundImage: "linear-gradient(135deg, #818cf8, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                                    >
                                        PV
                                    </span>
                                </div>
                            </div>
                            <div
                                className="absolute -bottom-2 -right-3 px-3 py-1 rounded-full text-xs font-mono font-medium"
                                style={{ background: isDark ? "#0d0d24" : "#fff", border: "1px solid rgba(129,140,248,0.3)", color: "#a5b4fc" }}
                            >
                                Full Stack Dev
                            </div>
                        </div>

                        {/* Code terminal */}
                        <div
                            className="w-full rounded-2xl overflow-hidden"
                            style={{ border: `1px solid ${T.borderMd}`, background: T.termBg, backdropFilter: "blur(24px)", boxShadow: T.cardShadow }}
                        >
                            <div
                                className="flex items-center gap-2 px-4 py-3 border-b"
                                style={{ borderColor: T.border, background: T.termHead }}
                            >
                                <div className="w-3 h-3 rounded-full" style={{ background: "rgba(239,68,68,0.7)" }} />
                                <div className="w-3 h-3 rounded-full" style={{ background: "rgba(234,179,8,0.7)" }} />
                                <div className="w-3 h-3 rounded-full" style={{ background: "rgba(34,197,94,0.7)" }} />
                                <span className="ml-3 text-xs font-mono" style={{ color: T.fg5 }}>portfolio.tsx</span>
                            </div>
                            <div className="p-5 font-mono text-sm min-h-43.5">
                                {visibleLines.map((line, i) => {
                                    const isActive = i === visibleLines.length - 1;
                                    return (
                                        <div
                                            key={lineOffset + i}
                                            className="flex gap-3 leading-7 transition-all duration-500"
                                            style={{ color: isActive ? T.codeOn : T.codeOff }}
                                        >
                                            <span className="select-none w-5 text-right shrink-0" style={{ color: T.codeNum }}>
                                                {lineOffset + i + 1}
                                            </span>
                                            <span>{line}</span>
                                        </div>
                                    );
                                })}
                                <div className="flex gap-3 leading-7">
                                    <span className="select-none w-5 text-right shrink-0" style={{ color: T.codeNum }}>
                                        {visibleLines.length + lineOffset + 1}
                                    </span>
                                    <span
                                        className="inline-block w-2.25 h-4.5 rounded-sm animate-pulse"
                                        style={{ background: "#818cf8" }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        {[
                            { label: "10+ Projects", icon: <Award size={14} style={{ color: "#fbbf24" }} />, pos: "-left-8 top-[38%]" },
                            { label: "Available Now", icon: <CheckCircle size={14} style={{ color: "#34d399" }} />, pos: "-right-8 top-[70%]" },
                        ].map(({ label, icon, pos }) => (
                            <div
                                key={label}
                                className={`absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl ${pos}`}
                                style={{ background: T.termBg, border: `1px solid ${T.borderMd}`, backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
                            >
                                {icon}
                                <span className="text-xs font-medium" style={{ color: T.fg2 }}>{label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}