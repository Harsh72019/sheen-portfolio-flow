import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  metrics: string;
  skills: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    company: "DocPharma",
    role: "SDE-2 (Backend)",
    period: "Jun 2026 - Present",
    type: "Full-Time",
    description:
      "Spearheading high-concurrency backend services, warehouse management system (WMS) integrations, and query performance engineering for large-scale pharmaceutical & supply-chain workflows.",
    achievements: [
      "Optimized slow database queries from 10s down to under 0.1s (-99% latency reduction) and integrated core WMS services",
      "Implemented PostgreSQL GIN indexes for fast pattern/full-text search and enhanced distance calculation logic by shifting distance APIs",
    ],
    metrics: "10s → <0.1s Query Latency (-99%)",
    skills: ["Node.js", "PostgreSQL (GIN)", "WMS Integrations", "Distance APIs", "Query Optimization", "Redis"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    company: "Idea Usher",
    role: "Senior Backend Developer",
    period: "2025 - Jun 2026",
    type: "Full-Time",
    description:
      "Architected scalable backend infrastructure and cutting-edge AI integrations for high-volume enterprise and client systems with a core focus on extreme performance, sub-second latency, and fault tolerance.",
    achievements: [
      "Engineered backend optimization reducing response time from >20s to under 1 second (-95%)",
      "Optimized server architecture and load handling by 30%",
      "Implemented enterprise AI features and real-time event pipeline integrations",
    ],
    metrics: "20s → <1s Latency (-95%)",
    skills: ["Node.js", "Kafka", "Redis", "BullMQ", "AI Services", "Microservices"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    company: "Sartia Global",
    role: "Backend Developer (Supervisor)",
    period: "2023 - 2025",
    type: "Supervisor Role",
    description:
      "Supervised developer teams and directed the architectural design and deployment of robust, enterprise-scale backend microservices for government and corporate clients.",
    achievements: [
      "Engineered 10+ independent modular backend services from scratch",
      "Optimized complex SQL and NoSQL queries, reducing database load spikes",
      "Improved overall infrastructure uptime by 20%",
    ],
    metrics: "10+ Services Built & Supervised",
    skills: ["Node.js", "Express", "PostgreSQL", "MySQL", "Architecture Design", "Team Lead"],
    color: "from-emerald-500 to-teal-600",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="experience">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Work <span className="text-gradient-emerald">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A track record of engineering high-impact backend systems, leading
            architecture decisions, and driving measurable performance gains.
          </p>
        </motion.div>

        {/* Vertical Glowing Timeline */}
        <div className="relative">
          {/* Glowing Center Laser Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-purple-500 opacity-30" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#05070e] border-2 border-indigo-400 items-center justify-center z-20 shadow-lg shadow-indigo-500/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#090e1d]/85 shadow-2xl glass-card-hover">
                      {/* Header row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>

                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 mt-0.5">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Achievements Bullet points */}
                      <div className="space-y-2.5 pt-2 border-t border-white/5 mb-5">
                        {exp.achievements.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Highlight Metric Pill */}
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                          Key Impact:
                        </span>
                        <span className="text-xs font-bold text-emerald-400 font-mono">
                          {exp.metrics}
                        </span>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-4">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer on opposite side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
