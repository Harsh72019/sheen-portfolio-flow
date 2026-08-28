import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Code2,
  Cpu,
  Layers,
  Zap,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  useCase: string;
  color: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Backend & Message Queues",
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    description: "High-concurrency event-driven services & queue architectures",
    skills: [
      { name: "Node.js (Cluster)", level: 95, useCase: "Microservices & asynchronous I/O", color: "from-emerald-500 to-teal-500" },
      { name: "gRPC & Protobuf", level: 86, useCase: "Low-latency binary inter-service RPC", color: "from-blue-500 to-cyan-500" },
      { name: "BullMQ", level: 88, useCase: "Priority queues, delayed jobs & retries", color: "from-amber-500 to-orange-500" },
      { name: "Apache Kafka", level: 85, useCase: "Event streaming & decoupled brokers", color: "from-cyan-500 to-blue-500" },
      { name: "Redis", level: 88, useCase: "Pub/Sub, session storage & caching", color: "from-rose-500 to-red-600" },
      { name: "Express.js", level: 95, useCase: "REST APIs & middleware chains", color: "from-indigo-500 to-purple-500" },
    ],
  },
  {
    title: "Databases & In-Memory Storage",
    icon: <Database className="w-5 h-5 text-cyan-400" />,
    description: "ACID transactions, document models & relational normalization",
    skills: [
      { name: "PostgreSQL (GIN Indexes)", level: 92, useCase: "Sub-0.1s full-text search & query tuning", color: "from-blue-500 to-indigo-600" },
      { name: "Redis In-Memory", level: 90, useCase: "Sub-millisecond data retrieval & caching", color: "from-red-500 to-rose-600" },
      { name: "MongoDB & Mongoose", level: 88, useCase: "Document schemas & aggregation pipelines", color: "from-emerald-500 to-green-600" },
      { name: "MySQL (Sequelize)", level: 85, useCase: "Structured relational models & stored procs", color: "from-sky-500 to-cyan-600" },
    ],
  },
  {
    title: "Cloud, Infrastructure & DevOps",
    icon: <Cloud className="w-5 h-5 text-purple-400" />,
    description: "Container orchestration, telemetry monitoring & cloud compute",
    skills: [
      { name: "AWS (ECS / S3 / EC2)", level: 84, useCase: "Container orchestration & cloud compute", color: "from-amber-500 to-yellow-500" },
      { name: "AWS CloudWatch", level: 85, useCase: "Metrics monitoring, alarms & log insights", color: "from-rose-500 to-pink-500" },
      { name: "Docker & Containers", level: 82, useCase: "Service containerization & parity", color: "from-cyan-500 to-teal-500" },
      { name: "Cloudinary & CDN", level: 85, useCase: "Automated media transformation", color: "from-blue-400 to-indigo-500" },
    ],
  },
  {
    title: "Frontend & Full Stack Synergy",
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    description: "Modern client-side frameworks & type safety",
    skills: [
      { name: "TypeScript", level: 82, useCase: "End-to-end type safety & interfaces", color: "from-blue-500 to-cyan-500" },
      { name: "React.js", level: 75, useCase: "Dynamic responsive single-page apps", color: "from-cyan-400 to-blue-500" },
      { name: "TailwindCSS", level: 85, useCase: "Modern responsive utility styling", color: "from-teal-400 to-emerald-500" },
      { name: "REST & WebSockets", level: 92, useCase: "Full-duplex client-server APIs", color: "from-indigo-500 to-purple-600" },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Engineering Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Skills & <span className="text-gradient-cyan">Technical Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Battle-tested technologies and architectural tools used daily to engineer
            scalable, fault-tolerant applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: catIdx * 0.15, ease: "easeOut" }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0a0f1e]/80 shadow-2xl flex flex-col justify-between hover:border-indigo-500/30 transition-colors"
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-md">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5 cursor-default group"
                  >
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-slate-200 font-semibold group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 text-[11px] font-mono group-hover:text-indigo-300 transition-colors">
                        {skill.useCase}
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden p-0.5 border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.4,
                          delay: catIdx * 0.1 + skillIdx * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                      >
                        <div className="absolute inset-0 bg-white/25 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-3xl glass-card border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 via-[#0a0f1e]/80 to-purple-950/40 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl font-bold flex-shrink-0">
              ⚡
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                Need a Custom Backend Architecture or Microservice Audit?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                I help startups and enterprises reduce latency, eliminate bottlenecks, and scale Kafka/Redis pipelines.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
          >
            Consult with Harsh
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
