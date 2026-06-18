"use client"
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack"
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact"
import Footer from "@/components/Footer";
import {
  NAV_LINKS,
  STATS,
  PROJECTS,
  TECH_STACK,
  CAT_META,
  SERVICES,
  PROCESS,
  TESTIMONIALS,
  CODE_LINES,
} from "@/data/portfolio";
import { DARK, LIGHT } from "@/constants/theme";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundEffects from "@/components/BackgroundEffects";

// ─── App ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [projectTabs, setProjectTabs] = useState<Record<number, string>>({});
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [codeIdx, setCodeIdx] = useState(0);

  const T = isDark ? DARK : LIGHT;
  const onDone = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCodeIdx((i) => (i + 1) % CODE_LINES.length), 2300);
    return () => clearInterval(t);
  }, []);

  const getTab = (id: number) => projectTabs[id] ?? "overview";
  const setTab = (id: number, tab: string) =>
    setProjectTabs((p) => ({ ...p, [id]: tab }));

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const visibleLines = CODE_LINES.slice(Math.max(0, codeIdx - 4), codeIdx + 1);
  const lineOffset = Math.max(0, codeIdx - 4);

  // section divider style
  const divider = { borderTop: `1px solid ${T.border}` };

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen onDone={onDone} />}</AnimatePresence>

      <div
        className="min-h-screen overflow-x-hidden"
        style={{
          background: T.bg,
          color: T.fg,
          fontFamily: "'Inter', 'Outfit', sans-serif",
          transition: "background-color 0.4s ease, color 0.4s ease",
        }}
      >
        <BackgroundEffects T={T} />
        <Navbar
          scrolled={scrolled}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isDark={isDark}
          setIsDark={setIsDark}
          scrollTo={scrollTo}
          T={T}
          NAV_LINKS={NAV_LINKS}
        />
        <Hero
          loading={loading}
          T={T}
          scrollTo={scrollTo}
          isDark={isDark}
          visibleLines={visibleLines}
          lineOffset={lineOffset}
        />
        <Stats
          T={T}
          isDark={isDark}
          STATS={STATS}
        />
      {/* ── Featured Work ── */}
        <Projects
          T={T}
          isDark={isDark}
          PROJECTS={PROJECTS}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          getTab={getTab}
          setTab={setTab}
        />
        {/* ── Tech Stack ── */}

        <TechStack
          T={T}
          isDark={isDark}
          divider={divider}
          TECH_STACK={TECH_STACK}
          CAT_META={CAT_META}
        />
        {/* ── Experience ── */}
        <Experience
          T={T}
          divider={divider}
        />

        {/* ── Services ── */}
        <Services
          T={T}
          divider={divider}
          SERVICES={SERVICES}
        />

        {/* ── About ── */}
        <About
          T={T}
          divider={divider}
        />

        {/* ── Process ── */}
        <Process
          T={T}
          divider={divider}
          isDark={isDark}
          PROCESS={PROCESS}
        />

        {/* ── Testimonials ── */}
        <Testimonials
          T={T}
          divider={divider}
          TESTIMONIALS={TESTIMONIALS}
        />

        {/* ── Contact ── */}
        <Contact
          T={T}
          divider={divider}
          isDark={isDark}
          submitted={submitted}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />

        {/* ── Footer ── */}
        <Footer
          T={T}
          divider={divider}
        />
      </div>
    </>
  );
}
