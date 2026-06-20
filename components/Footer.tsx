"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

import { ThemeType } from "@/types/portfolio";
import { FaWhatsapp } from "react-icons/fa";

interface FooterProps {
  T: ThemeType;
  divider: React.CSSProperties;
}
export default function Footer({
  T,
  divider,
}: FooterProps) {
  return (
    <>
      <footer className="py-10" style={divider}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-lg" style={{ fontFamily: "'Outfit', sans-serif", color: T.fg }}>
              Pradeep<span style={{ color: "#818cf8" }}>.</span>
            </p>
            <p className="text-xs mt-0.5" style={{ color: T.fg6 }}>Full Stack Developer · MERN & Next.js Specialist</p>
          </div>
          <p className="text-xs" style={{ color: T.fg6 }}>
            © {new Date().getFullYear()} Pradeep Verma. Crafted with React & Next.js
          </p>
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
        </div>
      </footer>
    </>
  )
}