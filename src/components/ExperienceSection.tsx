import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Calendar,
  Building2,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  achievements: string[];
  metrics: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: "DocPharma",
    role: "Software Development Engineer (Backend)",
    period: "Jul 2026 - Present",
    type: "Full-Time",
    achievements: [
      "Optimized slow database queries from 10s down to <0.1s (-99% latency reduction) with targeted GIN indexing and query tuning.",
      "Integrated core WMS services for end-to-end order fulfilment; enhanced distance calculation logic via dedicated distance APIs.",
    ],
    metrics: "10s → <0.1s Latency (-99%)",
    skills: ["Node.js", "PostgreSQL (GIN)", "WMS Integrations", "Distance APIs", "Redis"],
  },
  {
    company: "Idea Usher",
    role: "Backend Engineer",
    period: "May 2024 - Jun 2026",
    type: "Full-Time",
    achievements: [
      "Scaled event-driven backend to 1k+ concurrent users, re-architecting Redis pub/sub adapter with connection pooling & backpressure control (cutting P95 from ~15s to <1s).",
      "Engineered FIFO order-matching engine with live P&L WebSocket streaming sustained at 100 updates/sec with zero dropped events.",
      "Built async BullMQ + Redis job pipelines with rate limiting, delayed jobs, and fault-tolerant retries.",
    ],
    metrics: "15s → <1s Latency (-95%)",
    skills: ["Node.js", "Kafka", "Redis", "BullMQ", "WebSockets", "Microservices"],
  },
];

const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 80%"],
  });

  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section className="py-10 sm:py-16 relative overflow-hidden" id="experience" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-10"
        >
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
        </motion.div>

        {/* Responsive Vertical Timeline */}
        <div className="relative">
          
          {/* Static Track Line */}
          <div className="absolute left-3.5 sm:left-1/3 top-2 bottom-2 w-px bg-white/10" />

          {/* Dynamic Emerald Laser Beam Fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3.5 sm:left-1/3 top-2 w-0.5 bg-emerald-500 origin-top z-10 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
          />

          <div className="space-y-5 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-9 sm:pl-0 sm:grid sm:grid-cols-12 gap-3 sm:gap-6 items-start group"
              >
                {/* Desktop Left Column (sm+) */}
                <div className="hidden sm:block sm:col-span-4 sm:text-right space-y-1.5 sm:pr-6">
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/[0.04] text-slate-300 border border-white/10">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white flex sm:justify-end items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                    <TrendingUp className="w-3 h-3" />
                    <span>{exp.metrics}</span>
                  </div>
                </div>

                {/* Timeline Center Node Dot */}
                <div className="absolute left-3.5 sm:left-1/3 -translate-x-1/2 top-2.5 w-5 h-5 rounded-full bg-[#070b0e] border border-white/20 flex items-center justify-center z-20 shadow-md group-hover:border-emerald-400 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>

                {/* Right Column / Card */}
                <div className="sm:col-span-8 sm:pl-4">
                  <div className="glass-panel p-3.5 sm:p-5 rounded-xl border border-white/10 bg-[#0c141c]/80 shadow-md space-y-3 group-hover:border-emerald-500/25 transition-all">
                    
                    {/* Role & Company Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="sm:hidden flex items-center gap-1.5 text-xs text-emerald-300 font-medium mt-0.5">
                          <Building2 className="w-3 h-3 text-emerald-400" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 pt-0.5 sm:pt-0">
                        <span className="sm:hidden text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10">
                          {exp.period}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/5">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Achievements bullets */}
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Impact Metric (Fully visible on all viewports) */}
                    <div className="p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/15 flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-medium text-[11px] sm:text-xs">Impact: {exp.metrics}</span>
                    </div>

                    {/* Micro Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1 pt-1 border-t border-white/5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
