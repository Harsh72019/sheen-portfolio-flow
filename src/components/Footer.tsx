import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, FileText, Heart, Terminal, Sparkles } from "lucide-react";

const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeStr(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 pt-16 pb-12 border-t border-white/10 bg-[#04060d] text-slate-400">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Status */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md">
                HB
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Harsh Bali
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Senior Backend & Full Stack Engineer specializing in Node.js, Redis,
              Kafka, BullMQ, and high-performance microservices architecture.
            </p>

            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Senior & Lead Roles</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-indigo-400 transition-colors">
                  Home / About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-indigo-400 transition-colors">
                  Hall of Fame
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">
                  Skills & Stacks
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Local Time & Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Local Time & Status
            </h4>
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 font-mono text-xs space-y-1">
              <div className="text-slate-400">New Delhi (IST)</div>
              <div className="text-white font-bold text-sm tracking-wide text-cyan-300">
                {timeStr || "18:24:00 PM"}
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-400 pt-1">
              <a
                href="https://github.com/Harsh72019"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-bali-423987228/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshbali374@gmail.com"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>© {new Date().getFullYear()} Harsh Bali. Crafted with</span>
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>and modern engineering.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-105"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
