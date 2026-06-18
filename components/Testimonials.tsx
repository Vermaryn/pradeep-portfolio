"use client";

import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

import SectionBadge from "./SectionBadge";
import GradientText from "./GradientText";
import { ThemeType, Testimonial } from "@/types/portfolio";

interface TestimonialsProps {
  T: ThemeType;
  divider: React.CSSProperties;
  TESTIMONIALS: Testimonial[];
}

export default function Testimonials({
  T,
  divider,
  TESTIMONIALS,
}: TestimonialsProps){
    return (
        <>
                    <section className="relative py-28" style={divider}>
                      <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16 text-center">
                          <SectionBadge>Testimonials</SectionBadge>
                          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>
                            What Clients <GradientText>Say</GradientText>
                          </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {TESTIMONIALS.map((t, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 22 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="relative p-6 rounded-2xl transition-all"
                              style={{ border: `1px solid ${T.borderMd}`, background: T.card, backdropFilter: "blur(16px)" }}
                              onMouseEnter={(e) => (e.currentTarget.style.background = T.cardHov)}
                              onMouseLeave={(e) => (e.currentTarget.style.background = T.card)}
                            >
                              <div className="flex gap-1 mb-5">
                                {Array(t.rating).fill(0).map((_, j) => (
                                  <Star key={j} size={13} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                                ))}
                              </div>
                              <p className="text-sm leading-relaxed mb-7" style={{ color: T.fg3 }}>&quot;{t.text}&quot;</p>
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: `linear-gradient(135deg, ${t.color}cc, ${t.color}66)`, border: `1px solid ${t.color}40` }}>
                                  {t.initial}
                                </div>
                                <div>
                                  <p className="text-sm font-semibold" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>{t.name}</p>
                                  <p className="text-xs" style={{ color: T.fg5 }}>{t.role}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </section>
        </>
    )
}