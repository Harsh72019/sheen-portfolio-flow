import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  X,
  FileDown,
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
  const [visible, setVisible] = useState(true);
  const [isNearBottom, setIsNearBottom] = useState(false);
  const lastScrollY = React.useRef(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      // Check if near bottom/footer
      const atBottom = (window.innerHeight + currentScrollY) >= (document.documentElement.scrollHeight - 300);
      setIsNearBottom(atBottom);

      // Smart auto-hide on mobile: Hide when scrolling down, show when scrolling up
      if (currentScrollY < 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8 && currentScrollY > 100) {
        if (!mobileMenuOpen) {
          setVisible(false);
        }
      } else if (currentScrollY < lastScrollY.current - 8) {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = currentScrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Laser Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-400 origin-left z-[60]"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 md:translate-y-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
        } ${scrolled ? "py-2.5" : "py-4 sm:py-5"}`}
      >
        <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
          <nav className="glass-panel px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-xl bg-[#090d18]/85">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-slate-200 font-mono font-semibold text-xs group-hover:border-indigo-400/50 group-hover:text-white transition-colors">
                HB<span className="text-indigo-400">.dev</span>
              </div>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
                / Backend Systems
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-full -z-10"
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

            {/* Desktop & Tablet CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={resumePdf}
                download="Harsh_Bali_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-full border border-white/10 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-slate-400" />
                Resume
              </a>

              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                Get in Touch
              </a>
            </div>

            {/* Mobile Actions: Direct "Get in Touch" Button + Drawer Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="#contact"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-colors shadow-sm"
              >
                <Send className="w-3 h-3" />
                <span>Contact</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-white/5 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>

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
            className="fixed inset-x-4 top-20 z-40 md:hidden p-5 rounded-2xl glass-panel border border-white/15 bg-[#090d18]/95 backdrop-blur-2xl shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-white/10 text-white font-semibold"
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
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-white/5 rounded-xl border border-white/10"
              >
                <FileDown className="w-4 h-4 text-slate-400" />
                Download Resume
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl"
              >
                <Send className="w-4 h-4" />
                Get in Touch
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

      {/* Floating Mobile Quick Action Pill (Appears when scrolled, hidden in Contact & Footer) */}
      <AnimatePresence>
        {scrolled && activeSection !== "contact" && !isNearBottom && (
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-4 z-40 md:hidden flex items-center gap-2 px-3.5 py-2 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-2xl border border-indigo-400/30 backdrop-blur-md active:scale-95 transition-transform"
            aria-label="Get in Touch"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Get in Touch</span>
            <Send className="w-3 h-3" />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
