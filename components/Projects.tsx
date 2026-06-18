"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Github,
  ExternalLink,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import GradientText from "@/components/GradientText"
import { ThemeType, Project } from "@/types/portfolio";
interface ProjectsProps {
  T: ThemeType;
  isDark: boolean;

  PROJECTS: Project[];

  activeProject: number;
  setActiveProject: React.Dispatch<React.SetStateAction<number>>;

  getTab: (projectId: number) => string;
  setTab: (projectId: number, tab: string) => void;
}
export default function Projects({
  T,
  isDark,
  PROJECTS,
  activeProject,
  setActiveProject,
  getTab,
  setTab,
}: ProjectsProps) {
    return(
        <>
                    <section id="work" className="relative py-28">
                      <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16 text-center">
                          <SectionBadge>Featured Work</SectionBadge>
                          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>
                            Projects That <GradientText>Deliver Results</GradientText>
                          </h2>
                          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: T.fg4 }}>
                            Production-grade applications with measurable impact — not side projects, but real solutions solving genuine problems.
                          </p>
                        </div>
            
                        {/* Project selector */}
                        <div className="flex flex-wrap gap-2 justify-center mb-10">
                          {PROJECTS.map((p, i) => (
                            <button
                              key={p.id}
                              onClick={() => setActiveProject(i)}
                              className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                              style={
                                activeProject === i
                                  ? { color: "#c7d2fe", border: "1px solid rgba(99,102,241,0.45)", background: "rgba(99,102,241,0.13)" }
                                  : { color: T.fg4, border: `1px solid ${T.border}`, background: T.card }
                              }
                            >
                              {p.title}
                            </button>
                          ))}
                        </div>
            
                        {/* Active project card */}
                        {PROJECTS.map(
                          (project, i) =>
                            i === activeProject && (
                              <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                className="rounded-2xl overflow-hidden"
                                style={{ border: `1px solid ${T.border}`, background: T.card, backdropFilter: "blur(16px)", boxShadow: T.cardShadow }}
                              >
                                <div className="h-0.75 w-full" style={{ background: `linear-gradient(90deg, ${project.gradFrom}, ${project.gradTo})` }} />
                                <div className="p-8 md:p-12">
                                  <div className="flex flex-wrap items-start justify-between gap-5 mb-8">
                                    <div>
                                      <span className="text-xs font-mono mb-2 block" style={{ color: T.fg5 }}>{project.category}</span>
                                      <h3 className="text-3xl font-bold mb-1.5" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>{project.title}</h3>
                                      <p style={{ color: T.fg3 }}>{project.tagline}</p>
                                    </div>
                                    <div className="flex gap-2 shrink-0">
                                      <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all" style={{ color: T.fg3, border: `1px solid ${T.borderLg}`, background: T.card }}>
                                        <Github size={14} /> Code
                                      </a>
                                      <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all" style={{ color: "#c7d2fe", border: `1px solid ${project.accent}40`, background: `${project.accent}12` }}>
                                        <ExternalLink size={14} /> Live Demo
                                      </a>
                                    </div>
                                  </div>
            
                                  {/* Tabs */}
                                  <div className="flex gap-0 mb-8 border-b" style={{ borderColor: T.border }}>
                                    {["overview", "features", "results"].map((tab) => (
                                      <button
                                        key={tab}
                                        onClick={() => setTab(project.id, tab)}
                                        className="px-5 py-2.5 text-sm font-medium capitalize transition-all border-b-2 -mb-px"
                                        style={
                                          getTab(project.id) === tab
                                            ? { borderColor: project.accent, color: project.accent }
                                            : { borderColor: "transparent", color: T.fg5 }
                                        }
                                      >
                                        {tab}
                                      </button>
                                    ))}
                                  </div>
            
                                  {getTab(project.id) === "overview" && (
                                    <div className="grid md:grid-cols-2 gap-10">
                                      <div>
                                        <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: T.fg5 }}>Problem</p>
                                        <p className="leading-relaxed mb-7" style={{ color: T.fg3 }}>{project.problem}</p>
                                        <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: T.fg5 }}>Solution</p>
                                        <p className="leading-relaxed" style={{ color: T.fg3 }}>{project.solution}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: T.fg5 }}>Tech Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                          {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono font-medium" style={{ border: `1px solid ${T.borderMd}`, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(99,102,241,0.06)", color: T.fg2 }}>
                                              {t}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  )}
            
                                  {getTab(project.id) === "features" && (
                                    <div className="grid sm:grid-cols-2 gap-3">
                                      {project.features.map((f) => (
                                        <div key={f} className="flex items-center gap-3 p-3.5 rounded-xl transition-all" style={{ border: `1px solid ${T.border}`, background: isDark ? "rgba(255,255,255,0.025)" : "rgba(99,102,241,0.04)" }}>
                                          <CheckCircle size={15} style={{ color: project.accent, flexShrink: 0 }} />
                                          <span className="text-sm" style={{ color: T.fg2 }}>{f}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
            
                                  {getTab(project.id) === "results" && (
                                    <div className="grid sm:grid-cols-3 gap-4">
                                      {project.results.map((r) => (
                                        <div key={r} className="p-5 rounded-xl text-center" style={{ border: `1px solid ${project.accent}25`, background: `${project.accent}08` }}>
                                          <TrendingUp size={22} style={{ color: project.accent, margin: "0 auto 10px" }} />
                                          <p className="text-sm font-semibold" style={{ color: T.fg }}>{r}</p>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )
                        )}
                      </div>
                    </section>
        </>
    )
}