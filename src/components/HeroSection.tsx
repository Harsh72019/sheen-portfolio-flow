import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  Terminal,
  Database,
  Layers,
  Zap,
  Server,
  Cloud,
  FileDown,
  Mail,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import heroAvatar from "../assets/ChatGPT Image Aug 28, 2026, 06_26_25 PM.png";

const HeroSection: React.FC = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"arch" | "metrics" | "stack">("arch");

  const copyEmail = () => {
    navigator.clipboard.writeText("harshbali374@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied to clipboard! 📋",
      description: "harshbali374@gmail.com is ready to paste.",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const orbitSkills = [
    { name: "Node.js", color: "from-emerald-500 to-green-600", pos: "-top-3 -left-3" },
    { name: "Kafka", color: "from-purple-500 to-indigo-600", pos: "top-12 -right-6" },
    { name: "Redis", color: "from-red-500 to-rose-600", pos: "-bottom-2 -left-4" },
    { name: "BullMQ", color: "from-amber-500 to-yellow-600", pos: "bottom-12 -right-6" },
    { name: "AWS S3", color: "from-cyan-500 to-blue-600", pos: "-top-5 right-12" },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 relative flex items-center justify-center overflow-hidden" id="hero">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide shadow-lg shadow-indigo-500/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Senior Backend & Full-Stack Roles</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                Hi, I'm{" "}
                <span className="text-gradient-cyan relative inline-block">
                  Harsh Bali
                </span>
              </motion.h1>

              {/* Dynamic Typewriter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl sm:text-3xl font-bold text-slate-300 font-mono flex items-center justify-center lg:justify-start gap-2 pt-1"
              >
                <span className="text-indigo-400">&gt;</span>
                <span className="text-cyan-400">
                  <Typewriter
                    words={[
                      "Senior Backend Engineer",
                      "Full Stack Developer",
                      "Backend Developer",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1600}
                  />
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Architecting ultra-low latency, fault-tolerant backend systems. Specializing in{" "}
              <strong className="text-white font-semibold">Node.js</strong>,{" "}
              <strong className="text-cyan-300 font-semibold">Redis & Kafka</strong> event pipelines,{" "}
              <strong className="text-amber-300 font-semibold">BullMQ</strong> job schedulers, and scalable microservices that process millions of events reliably.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#portfolio"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all hover:scale-105"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 transition-all hover:scale-105 backdrop-blur-md"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                Work Experience
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/10 transition-all hover:scale-105"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Quick Micro Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-500 font-semibold uppercase text-[11px] tracking-wider mr-1">
                Core Stack:
              </span>
              {["Node.js", "gRPC", "Redis", "Kafka", "BullMQ", "PostgreSQL (GIN)", "AWS (ECS / S3)", "CloudWatch", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Column: 3D Tilt Portrait & Terminal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative space-y-6"
          >
            {/* 3D Animated Portrait Frame */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              
              {/* Outer Counter-Rotating Glow Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/40 p-2"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-cyan-400/40"
              />

              {/* Glowing Background Radial */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-500/30 blur-2xl -z-10" />

              {/* Orbiting Tech Chips */}
              {orbitSkills.map((chip, idx) => (
                <motion.div
                  key={chip.name}
                  animate={{
                    y: [0, idx % 2 === 0 ? -8 : 8, 0],
                  }}
                  transition={{
                    duration: 3 + idx * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${chip.pos} z-20 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold text-white shadow-xl bg-gradient-to-r ${chip.color} border border-white/20`}
                >
                  <Zap className="w-2.5 h-2.5" />
                  {chip.name}
                </motion.div>
              ))}

              {/* Harsh Bali Photo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-indigo-500/40 shadow-2xl shadow-indigo-500/30 group">
                <img
                  src={heroAvatar}
                  alt="Harsh Bali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Metric Badge: Latency */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-0 sm:-left-6 z-20 px-3.5 py-2 rounded-2xl glass-panel bg-[#0d1427]/95 border border-indigo-500/30 shadow-xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ⚡
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Response Time</div>
                  <div className="text-xs font-bold text-white">20s → &lt;1s <span className="text-emerald-400 text-[10px]">(-95%)</span></div>
                </div>
              </motion.div>

              {/* Floating Metric Badge: Uptime */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 sm:-right-6 z-20 px-3.5 py-2 rounded-2xl glass-panel bg-[#0d1427]/95 border border-cyan-500/30 shadow-xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                  🚀
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Services Built</div>
                  <div className="text-xs font-bold text-white">10+ Microservices</div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Mini Terminal Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-sm glass-card rounded-2xl p-4 border border-white/10 font-mono text-xs shadow-2xl bg-[#090e1e]/90"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-[11px] text-slate-400 ml-2">harsh@cluster-node-01</span>
                </div>
                <div className="flex gap-1 text-[10px]">
                  <button
                    onClick={() => setActiveCodeTab("arch")}
                    className={`px-2 py-0.5 rounded ${
                      activeCodeTab === "arch"
                        ? "bg-indigo-600 text-white font-bold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    arch.ts
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("metrics")}
                    className={`px-2 py-0.5 rounded ${
                      activeCodeTab === "metrics"
                        ? "bg-indigo-600 text-white font-bold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    health
                  </button>
                </div>
              </div>

              {/* Code / Output Area */}
              {activeCodeTab === "arch" && (
                <div className="text-slate-300 space-y-1 leading-relaxed text-[11px]">
                  <div className="text-slate-500">// Distributed Architecture Config</div>
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">HarshEngine</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">stack:</span> [
                    <span className="text-emerald-400">"Node.js"</span>,{" "}
                    <span className="text-emerald-400">"Kafka"</span>,{" "}
                    <span className="text-emerald-400">"Redis"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">queues:</span>{" "}
                    <span className="text-amber-400">"BullMQ (Priority + Delayed)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">performance:</span>{" "}
                    <span className="text-cyan-300">"Sub-second P99"</span>,
                  </div>
                  <div>{"};"}</div>
                </div>
              )}

              {activeCodeTab === "metrics" && (
                <div className="text-slate-300 space-y-1 text-[11px]">
                  <div className="text-emerald-400">✔ Redis Cluster: Healthy (0.2ms ping)</div>
                  <div className="text-emerald-400">✔ Kafka Topics: 12 Active Partitions</div>
                  <div className="text-cyan-300">✔ Memory Usage: 142MB (RSS)</div>
                  <div className="text-indigo-300">✔ BullMQ Workers: 8 Active Concurrency</div>
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
