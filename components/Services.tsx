"use client";

import React from "react";
import { motion } from "motion/react";

import SectionBadge from "./SectionBadge";
import GradientText from "./GradientText";
import { ThemeType } from "@/types/portfolio";
import { Service } from "@/types/portfolio";

interface ServicesProps {
  T: ThemeType;
  divider: React.CSSProperties;
  SERVICES: Service[];
}
export default function Services({
  T,
  divider,
  SERVICES,
}: ServicesProps){

    return(
        <>
                    <section id="services" className="relative py-28" style={divider}>
                      <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16 text-center">
                          <SectionBadge>Services</SectionBadge>
                          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>
                            What I Can <GradientText>Build For You</GradientText>
                          </h2>
                          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: T.fg4 }}>
                            From concept to production — complete web development for businesses, startups, and agencies.
                          </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                          {SERVICES.map((s, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 22 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.08 }}
                              className="group p-6 rounded-2xl cursor-pointer transition-all"
                              style={{ border: `1px solid ${T.border}`, background: T.card }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = T.cardHov;
                                e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = T.card;
                                e.currentTarget.style.borderColor = T.border;
                              }}
                            >
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                                <s.icon size={20} style={{ color: "#818cf8" }} />
                              </div>
                              <h3 className="text-lg font-semibold mb-2.5" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>{s.title}</h3>
                              <p className="text-sm leading-relaxed" style={{ color: T.fg4 }}>{s.desc}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </section>
        </>
    )
}