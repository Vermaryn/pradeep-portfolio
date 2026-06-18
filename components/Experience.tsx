"use client";
import React from "react";
import { motion } from "motion/react";
import { Briefcase, Clock, ChevronRight } from "lucide-react";

import SectionBadge from "./SectionBadge";
import GradientText from "./GradientText";
import { ThemeType } from "@/types/portfolio";

interface ExperienceProps {
  T: ThemeType;
  divider: React.CSSProperties;
}
export default function Experience({
    T,
    divider,
}:ExperienceProps) {
    return (
        <>
                    <section id="experience" className="relative py-28" style={divider}>
                      <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                          <SectionBadge>Experience</SectionBadge>
                          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>
                            Professional <GradientText>Journey</GradientText>
                          </h2>
                        </div>
                        <div className="relative">
                          <div className="absolute left-6 top-4 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(139,92,246,0.2), transparent)" }} />
                          <motion.div initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-20">
                            <div className="absolute left-0 top-1 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                              <Briefcase size={18} style={{ color: "#818cf8" }} />
                            </div>
                            <div className="rounded-2xl p-8 transition-all" style={{ border: `1px solid ${T.border}`, background: T.card }}>
                              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                <div>
                                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>Project-Based Web Developer</h3>
                                  <p className="font-semibold" style={{ color: "#818cf8" }}>HariOm Enterprises</p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: T.card, border: `1px solid ${T.borderMd}` }}>
                                  <Clock size={12} style={{ color: T.fg5 }} />
                                  <span className="text-xs font-mono" style={{ color: T.fg3 }}>2023 – Present</span>
                                </div>
                              </div>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                  "Website development & UI implementation",
                                  "Client project delivery & stakeholder communication",
                                  "Modern frontend development with React & Next.js",
                                  "API integration & backend development",
                                  "Responsive design implementation",
                                  "Code review & performance optimization",
                                ].map((r) => (
                                  <div key={r} className="flex items-start gap-2.5">
                                    <ChevronRight size={14} style={{ color: "#818cf8", marginTop: "3px", flexShrink: 0 }} />
                                    <span className="text-sm" style={{ color: T.fg3 }}>{r}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </section>
        </>
    )
}