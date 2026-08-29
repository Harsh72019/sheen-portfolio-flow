import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  ArrowRight,
  Copy,
  Check,
  Terminal,
  Activity,
  Briefcase,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import heroAvatar from "../assets/avatar.png";

const HeroSection: React.FC = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"arch" | "telemetry">("arch");

  const copyEmail = () => {
    navigator.clipboard.writeText("harshbali374@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied to clipboard 📋",
      description: "harshbali374@gmail.com is ready to paste.",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 relative flex items-center justify-center overflow-hidden" id="hero">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-medium tracking-wide backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Senior Backend & Distributed Systems Roles</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
              >
                Hi, I'm{" "}
                <span className="text-gradient-silver">
                  Harsh Bali
                </span>
              </motion.h1>

              {/* Dynamic Typewriter */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-xl sm:text-2xl font-medium text-slate-300 font-mono flex items-center justify-center lg:justify-start gap-2 pt-1"
              >
                <span className="text-indigo-400">&gt;</span>
                <span className="text-indigo-300 font-semibold">
                  <Typewriter
                    words={[
                      "Senior Backend Engineer",
                      "System Design Architect",
                      "Problem Solver",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={35}
                    delaySpeed={2000}
                  />
                </span>
              </motion.div>
            </div>

            {/* Concise Value Description without tool spam */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Architecting high-throughput, fault-tolerant backend infrastructures. Specializing in event streaming pipelines, sub-second query indexing, and scalable microservices engineered for extreme concurrency and zero downtime.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href="#portfolio"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-sm"
              >
                <span>View Systems & Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-sm border border-white/10 transition-all hover:scale-[1.02]"
              >
                <Briefcase className="w-4 h-4 text-slate-400" />
                Work History
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-mono border border-white/10 transition-all"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Key Engineering Domains (Clean, non-repetitive) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-500 uppercase text-[11px] tracking-wider mr-1">
                Specialties:
              </span>
              {[
                "High-Throughput APIs",
                "Distributed Queues",
                "Query Performance (GIN)",
                "gRPC / RPC Services",
                "Cloud Containerization",
              ].map((domain) => (
                <span
                  key={domain}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-slate-300 text-[11px]"
                >
                  {domain}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Obsidian Portrait & Telemetry Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative space-y-6"
          >
            {/* Elegant Portrait Frame (Hidden on mobile phones, visible on sm+) */}
            <div className="hidden sm:flex relative w-64 h-64 sm:w-72 sm:h-72 items-center justify-center">
              
              {/* Subtle back ambient glow */}
              <div className="absolute inset-4 rounded-full bg-indigo-600/15 blur-2xl -z-10" />

              {/* Circular Portrait Container */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-2 border-white/15 bg-slate-900/60 shadow-2xl group">
                <img
                  src={heroAvatar}
                  alt="Harsh Bali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/50 via-transparent to-transparent" />
              </div>

              {/* Floating Latency Metric Badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 left-0 sm:-left-4 z-20 px-3 py-2 rounded-xl glass-panel bg-[#0d1322]/95 border border-white/10 shadow-xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs">
                  ⚡
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Database Tuning</div>
                  <div className="text-xs font-semibold text-white">10s → &lt;0.1s <span className="text-emerald-400 text-[10px]">(-99%)</span></div>
                </div>
              </motion.div>

              {/* Floating Microservices Metric Badge */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 sm:-right-4 z-20 px-3 py-2 rounded-xl glass-panel bg-[#0d1322]/95 border border-white/10 shadow-xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs">
                  🚀
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Production Scale</div>
                  <div className="text-xs font-semibold text-white">10+ Microservices</div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Terminal Telemetry */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="w-full max-w-sm glass-card rounded-2xl p-4 border border-white/10 font-mono text-xs shadow-xl bg-[#090d18]/90"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" />
                  <span className="text-[11px] text-slate-400 ml-2">sys-node-01</span>
                </div>
                <div className="flex gap-1 text-[10px]">
                  <button
                    onClick={() => setActiveCodeTab("arch")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeCodeTab === "arch"
                        ? "bg-white/10 text-white font-medium"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    arch.json
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("telemetry")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeCodeTab === "telemetry"
                        ? "bg-white/10 text-white font-medium"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    health.log
                  </button>
                </div>
              </div>

              {/* Code / Output Content */}
              {activeCodeTab === "arch" && (
                <div className="text-slate-300 space-y-1 text-[11px] leading-relaxed">
                  <div className="text-slate-500">// Distributed Engine Config</div>
                  <div>
                    <span className="text-indigo-300">"topology"</span>: <span className="text-slate-100">"event-driven-microservices"</span>,
                  </div>
                  <div>
                    <span className="text-indigo-300">"queryLatency"</span>: <span className="text-emerald-400">"sub-100ms P99"</span>,
                  </div>
                  <div>
                    <span className="text-indigo-300">"concurrency"</span>: <span className="text-slate-100">"multi-worker-cluster"</span>,
                  </div>
                  <div>
                    <span className="text-indigo-300">"resilience"</span>: <span className="text-emerald-400">"zero-loss FIFO guarantee"</span>
                  </div>
                </div>
              )}

              {activeCodeTab === "telemetry" && (
                <div className="text-slate-300 space-y-1 text-[11px]">
                  <div className="text-emerald-400">● Cache Cluster: Healthy (0.2ms latency)</div>
                  <div className="text-emerald-400">● Stream Ingestion: 0% message lag</div>
                  <div className="text-slate-300">● Process RSS: 128MB normal footprint</div>
                  <div className="text-indigo-300">● Worker Concurrency: 8 active executors</div>
                </div>
              )}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
