import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Code2,
  ChevronLeft,
  ChevronRight,
  Zap,
  ArrowRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface SkillItem {
  name: string;
  level: number;
  useCase: string;
}

interface SkillCategory {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  description: string;
  coreHighlight: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Distributed Systems & Backend Architecture",
    shortTitle: "Core Backend",
    icon: <Server className="w-4 h-4 text-indigo-400" />,
    description: "Event-driven microservices, binary RPCs, and asynchronous queue architectures.",
    coreHighlight: "Engineered sub-second event pipelines and background job schedulers.",
    skills: [
      { name: "Node.js (Cluster & Async I/O)", level: 95, useCase: "High-concurrency microservices & non-blocking I/O" },
      { name: "gRPC & Protocol Buffers", level: 86, useCase: "Low-latency binary inter-service RPC communication" },
      { name: "Apache Kafka", level: 88, useCase: "Partitioned event streaming & decoupled message brokers" },
      { name: "BullMQ Job Queues", level: 90, useCase: "Priority queues, delayed scheduling & auto-retry pipelines" },
      { name: "Express.js / REST APIs", level: 95, useCase: "Robust middleware chains, validation & API security" },
    ],
  },
  {
    id: "database",
    title: "Databases & In-Memory Caching",
    shortTitle: "Data & Storage",
    icon: <Database className="w-4 h-4 text-sky-400" />,
    description: "Sub-second indexing, ACID transactional integrity, and low-latency cache layers.",
    coreHighlight: "Tuned complex query execution from 10s down to <0.1s using GIN indexes.",
    skills: [
      { name: "PostgreSQL (GIN Indexes & Tuning)", level: 92, useCase: "Query plan optimization & fast pattern matching" },
      { name: "Redis (In-Memory & Pub/Sub)", level: 90, useCase: "Sub-millisecond caching & real-time session sync" },
      { name: "MongoDB & Aggregation", level: 88, useCase: "Time-series data, document schemas & indexing" },
      { name: "MySQL (Sequelize / Prisma)", level: 85, useCase: "Relational normalization, transactions & migrations" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud, Containers & Telemetry",
    shortTitle: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4 text-emerald-400" />,
    description: "Containerization, cloud compute orchestration, and real-time observability.",
    coreHighlight: "Containerized 10+ services for seamless production deployments.",
    skills: [
      { name: "Docker & Containerization", level: 85, useCase: "Multi-stage builds & environment parity" },
      { name: "AWS (ECS, EC2, S3)", level: 84, useCase: "Container tasks, cloud storage & compute instances" },
      { name: "AWS CloudWatch & Logs", level: 86, useCase: "Telemetry monitoring, alarms & log insights" },
      { name: "CI/CD & Deployment Pipelines", level: 82, useCase: "Automated test suites & continuous delivery" },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Architecture & Tooling",
    shortTitle: "Full-Stack",
    icon: <Code2 className="w-4 h-4 text-amber-400" />,
    description: "End-to-end type safety, duplex real-time sockets, and modern interfaces.",
    coreHighlight: "Engineered responsive full-stack applications with sub-50ms WebSocket feeds.",
    skills: [
      { name: "TypeScript", level: 86, useCase: "Strict type safety across API contracts & schemas" },
      { name: "WebSockets & Socket.IO", level: 92, useCase: "Full-duplex client-server real-time feeds" },
      { name: "React.js & State Management", level: 80, useCase: "Performant responsive single-page interfaces" },
      { name: "TailwindCSS & Component Systems", level: 85, useCase: "Modular, accessible, responsive design systems" },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Carousel setup showing strictly 1 item at a time
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
  });

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((idx: number) => {
    if (emblaApi) emblaApi.scrollTo(idx);
    setSelectedIndex(idx);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const snap = emblaApi.selectedScrollSnap();
    setSelectedIndex(snap);
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills & Architecture
            </h2>
          </motion.div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <div className="text-xs font-mono text-slate-400 mr-1">
              <span className="text-white font-semibold">{String(selectedIndex + 1).padStart(2, "0")}</span> /{" "}
              <span>{String(skillCategories.length).padStart(2, "0")}</span>
            </div>

            <button
              onClick={scrollPrev}
              disabled={prevDisabled}
              className={`p-2.5 rounded-full border transition-all ${
                prevDisabled
                  ? "border-white/5 text-slate-600 cursor-not-allowed bg-transparent"
                  : "border-white/15 text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08]"
              }`}
              aria-label="Previous skill category"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextDisabled}
              className={`p-2.5 rounded-full border transition-all ${
                nextDisabled
                  ? "border-white/5 text-slate-600 cursor-not-allowed bg-transparent"
                  : "border-white/15 text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08]"
              }`}
              aria-label="Next skill category"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 justify-center sm:justify-start">
          {skillCategories.map((cat, idx) => {
            const isActive = selectedIndex === idx;
            return (
              <button
                key={cat.id}
                onClick={() => scrollTo(idx)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white/[0.1] text-white border border-white/20 font-semibold shadow-sm"
                    : "bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] border border-white/5"
                }`}
              >
                {cat.icon}
                <span>{cat.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Single Item Carousel View (100% width) */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="pl-4 min-w-0 flex-[0_0_100%]"
              >
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0a0f1d]/90 shadow-xl flex flex-col justify-between space-y-6">
                  
                  {/* Category Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                      </div>
                    </div>

                    {/* Architectural highlight pill */}
                    <div className="px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 flex items-center gap-2 mt-3">
                      <Zap className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span className="text-xs font-mono">{category.coreHighlight}</span>
                    </div>
                  </div>

                  {/* Skills Progress List */}
                  <div className="space-y-4 pt-1">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5 group">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-200 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-slate-400 text-[11px] font-mono">
                            {skill.useCase}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-800/60 rounded-full h-1.5 overflow-hidden">
                          <div
                            style={{ width: `${skill.level}%` }}
                            className="h-full rounded-full bg-slate-400 group-hover:bg-indigo-400 transition-colors duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {scrollSnaps.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === selectedIndex
                    ? "w-6 bg-indigo-500"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default SkillsSection;
