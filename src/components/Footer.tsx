import React, { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from "lucide-react";

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
    <footer className="relative z-10 py-8 border-t border-white/10 bg-[#060810] text-slate-400">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Monogram & Status */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <div className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-slate-200 font-mono font-semibold text-xs">
              HB<span className="text-indigo-400">.dev</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              New Delhi, IN • <span className="text-slate-200">{timeStr || "12:04 PM"}</span> (IST)
            </span>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Senior Roles</span>
            </div>
          </div>

          {/* Right: Social Links & Back To Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Harsh72019"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-bali-423987228/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshbali374@gmail.com"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition-colors"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors text-xs font-mono"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>© {new Date().getFullYear()} Harsh Bali. All rights reserved.</span>
          <span>Engineered with React & TypeScript</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
