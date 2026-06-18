"use client";

import React from "react";
import {
    Mail,
    Linkedin,
    Github,
    MapPin,
    CheckCircle,
    Send,
} from "lucide-react";

import SectionBadge from "./SectionBadge";
import GradientText from "./GradientText";
import { ThemeType } from "@/types/portfolio";

interface ContactProps {
  T: ThemeType;
  divider: React.CSSProperties;
  isDark: boolean;

  submitted: boolean;
  formData: {
    name: string;
    email: string;
    message: string;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      message: string;
    }>
  >;

  handleSubmit: (e: React.FormEvent) => void;
}
export default function Contact({
  T,
  divider,
  isDark,
  submitted,
  formData,
  setFormData,
  handleSubmit,
}: ContactProps) {
    return (
        <>
            <section id="contact" className="relative py-28" style={divider}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="mb-12 text-center">
                        <SectionBadge>Contact</SectionBadge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>
                            Let&apos;s Build <GradientText>Something Great</GradientText>
                        </h2>
                        <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: T.fg4 }}>
                            Open to full-time remote roles, freelance projects, and startup collaborations.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-8">
                        {/* Info */}
                        <div className="md:col-span-2 space-y-3">
                            {[
                                { icon: Mail, label: "Email", value: "pradeep.verma@email.com", href: "mailto:pradeep.verma@email.com" },
                                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/pradeepverma", href: "#" },
                                { icon: Github, label: "Github", value: "github.com/pradeepverma", href: "#" },
                                { icon: MapPin, label: "Location", value: "India · Remote Worldwide", href: undefined },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-4 rounded-xl transition-all"
                                    style={{ border: `1px solid ${T.border}`, background: T.card, cursor: item.href ? "pointer" : "default" }}
                                    onClick={item.href ? () => window.open(item.href) : undefined}
                                    onMouseEnter={(e) => item.href && (e.currentTarget.style.background = T.cardHov)}
                                    onMouseLeave={(e) => item.href && (e.currentTarget.style.background = T.card)}
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                                        <item.icon size={16} style={{ color: "#818cf8" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs mb-0.5" style={{ color: T.fg5 }}>{item.label}</p>
                                        <p className="text-sm font-medium" style={{ color: T.fg2 }}>{item.value}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="p-4 rounded-xl mt-2" style={{ border: "1px solid rgba(52,211,153,0.2)", background: "rgba(52,211,153,0.05)" }}>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#34d399" }} />
                                    <span className="text-xs font-medium" style={{ color: "#34d399" }}>Available Now</span>
                                </div>
                                <p className="text-xs" style={{ color: T.fg4 }}>Typically responds within 24 hours</p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="md:col-span-3">
                            <div className="p-7 rounded-2xl" style={{ border: `1px solid ${T.borderMd}`, background: T.card }}>
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-14 text-center">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                                            <CheckCircle size={28} style={{ color: "#34d399" }} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>Message Sent!</h3>
                                        <p style={{ color: T.fg4 }}>Thanks for reaching out. I will get back to you within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {[
                                            { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                                            { key: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
                                        ].map((field) => (
                                            <div key={field.key}>
                                                <label className="text-xs font-mono mb-2 block" style={{ color: T.fg5 }}>{field.label}</label>
                                                <input
                                                    type={field.type}
                                                    required
                                                    value={formData[field.key as keyof typeof formData]}
                                                    onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                                                    placeholder={field.placeholder}
                                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                                                    style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(99,102,241,0.04)", border: `1px solid ${T.borderMd}`, color: T.fg }}
                                                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)")}
                                                    onBlur={(e) => (e.currentTarget.style.borderColor = T.borderMd)}
                                                />
                                            </div>
                                        ))}
                                        <div>
                                            <label className="text-xs font-mono mb-2 block" style={{ color: T.fg5 }}>Message</label>
                                            <textarea
                                                rows={5}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                                                placeholder="Tell me about your project or opportunity..."
                                                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                                                style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(99,102,241,0.04)", border: `1px solid ${T.borderMd}`, color: T.fg }}
                                                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)")}
                                                onBlur={(e) => (e.currentTarget.style.borderColor = T.borderMd)}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-[1.01] active:scale-[0.99]"
                                            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 4px 24px rgba(99,102,241,0.35)" }}
                                        >
                                            <Send size={15} /> Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}