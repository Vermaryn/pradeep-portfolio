"use client";
import React from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { ThemeType } from "@/types/portfolio";


interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  scrollTo: (href: string) => void;
  T: ThemeType;
  NAV_LINKS: { label: string; href: string }[];
}

export default function Navbar({
    scrolled,
  menuOpen,
  setMenuOpen,
  isDark,
  setIsDark,
  scrollTo,
  T,
  NAV_LINKS,
}:NavbarProps){
    return(
                <>
                <nav
                  className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                  style={scrolled ? { background: T.navBg, backdropFilter: "blur(20px)", borderBottom: `1px solid ${T.border}` } : {}}
                >
                  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                      onClick={() => scrollTo("#hero")}
                      className="font-bold text-xl tracking-tight"
                      style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}
                    >
                      Pradeep<span style={{ color: "#818cf8" }}>.</span>
                    </button>
        
                    <div className="hidden md:flex items-center gap-8">
                      {NAV_LINKS.map((l) => (
                        <button
                          key={l.href}
                          onClick={() => scrollTo(l.href)}
                          className="text-sm transition-colors duration-200"
                          style={{ color: T.fg4 }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = T.fg)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = T.fg4)}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
        
                    <div className="hidden md:flex items-center gap-3">
                      {/* Theme toggle */}
                      <button
                        onClick={() => setIsDark((v) => !v)}
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                        style={{ border: `1px solid ${T.border}`, background: T.card, color: T.fg4 }}
                        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                        onMouseEnter={(e) => (e.currentTarget.style.background = T.cardHov)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = T.card)}
                      >
                        {isDark ? <Sun size={15} /> : <Moon size={15} />}
                      </button>
                      <button
                        onClick={() => scrollTo("#contact")}
                        className="px-4 py-2 text-sm font-medium rounded-xl transition-all"
                        style={{ color: "#c7d2fe", border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(99,102,241,0.18)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(99,102,241,0.08)")}
                      >
                        Get in Touch
                      </button>
                    </div>
        
                    {/* Mobile controls */}
                    <div className="flex md:hidden items-center gap-2">
                      <button
                        onClick={() => setIsDark((v) => !v)}
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                        style={{ border: `1px solid ${T.border}`, background: T.card, color: T.fg4 }}
                      >
                        {isDark ? <Sun size={15} /> : <Moon size={15} />}
                      </button>
                      <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ color: T.fg4 }}
                      >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                      </button>
                    </div>
                  </div>
        
                  {menuOpen && (
                    <div
                      className="md:hidden px-6 py-4 flex flex-col gap-1 border-b"
                      style={{ background: T.menuBg, backdropFilter: "blur(20px)", borderColor: T.border }}
                    >
                      {NAV_LINKS.map((l) => (
                        <button
                          key={l.href}
                          onClick={() => scrollTo(l.href)}
                          className="text-left py-3 text-sm border-b"
                          style={{ color: T.fg3, borderColor: T.border }}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  )}
                </nav>
                </>
    )
}