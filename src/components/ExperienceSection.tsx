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
    <section className="py-16 relative overflow-hidden" id="experience" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
        </motion.div>

        {/* Compact Vertical Timeline */}
        <div className="relative pl-6 sm:pl-0">
          
          {/* Static Track Line */}
          <div className="absolute left-2 sm:left-1/3 top-2 bottom-2 w-px bg-white/10" />

          {/* Dynamic Laser Beam Fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-2 sm:left-1/3 top-2 w-0.5 bg-indigo-500 origin-top z-10 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
          />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start group"
              >
                {/* Left Col (Desktop): Period & Company Info */}
                <div className="sm:col-span-4 sm:text-right space-y-1.5 sm:pr-6">
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/[0.04] text-slate-300 border border-white/10">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white flex sm:justify-end items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.company}</span>
                  </div>
                  {/* Highlight Metric Pill */}
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                    <TrendingUp className="w-3 h-3" />
                    <span>{exp.metrics}</span>
                  </div>
                </div>

                {/* Center Timeline Node Dot */}
                <div className="absolute left-2 sm:left-1/3 -translate-x-1/2 top-1.5 w-5 h-5 rounded-full bg-[#070a12] border border-white/20 flex items-center justify-center z-20 shadow-md group-hover:border-indigo-400 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                </div>

                {/* Right Col: Compact Card */}
                <div className="sm:col-span-8 sm:pl-4">
                  <div className="glass-panel p-4 sm:p-5 rounded-xl border border-white/10 bg-[#090e1c]/80 shadow-md space-y-3 group-hover:border-white/20 transition-all">
                    
                    {/* Role Title */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/5">
                        {exp.type}
                      </span>
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

                    {/* Micro Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1 pt-1.5 border-t border-white/5">
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
