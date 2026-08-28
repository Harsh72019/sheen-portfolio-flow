import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  FileDown,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import resumePdf from "../assets/HARSH_SEP_RESUME.pdf";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#hero" },
  { name: "Projects", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="glass-panel px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-xl bg-[#090e1c]/70">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-500 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-sm shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                HB
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm sm:text-base tracking-tight group-hover:text-indigo-400 transition-colors">
                  Harsh Bali
                </span>
                <span className="text-[10px] text-cyan-400 font-mono -mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Senior Backend
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-purple-600/80 rounded-full -z-10 shadow-lg shadow-indigo-500/30"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={resumePdf}
                download="Harsh_Bali_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all hover:scale-105"
              >
                <FileDown className="w-3.5 h-3.5 text-indigo-400" />
                Resume
              </a>

              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 rounded-full shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-105"
              >
                <Send className="w-3.5 h-3.5" />
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden p-5 rounded-2xl glass-panel border border-white/15 bg-[#090e1c]/95 backdrop-blur-2xl shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-indigo-600/30 text-indigo-300 font-semibold border border-indigo-500/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={resumePdf}
                download="Harsh_Bali_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-white/10 rounded-xl border border-white/10"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                Download Resume
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-600/30"
              >
                <Send className="w-4 h-4" />
                Let's Talk
              </a>
            </div>

            <div className="flex justify-center gap-6 pt-2 text-slate-400">
              <a
                href="https://github.com/Harsh72019"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-bali-423987228/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:harshbali374@gmail.com" className="hover:text-white">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
