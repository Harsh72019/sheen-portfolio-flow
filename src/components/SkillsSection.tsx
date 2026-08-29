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
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface SkillItem {
  name: string;
  useCase: string;
  tag: string;
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
    icon: <Server className="w-4 h-4 text-amber-400" />,
    description: "Event-driven microservices, binary RPCs, and asynchronous queue architectures.",
    coreHighlight: "Engineered sub-second event pipelines and background job schedulers.",
    skills: [
      { name: "Node.js (Cluster & Async I/O)", useCase: "High-concurrency microservices & non-blocking I/O", tag: "Core Stack" },
      { name: "gRPC & Protocol Buffers", useCase: "Low-latency binary inter-service RPC communication", tag: "Microservices" },
      { name: "Apache Kafka", useCase: "Partitioned event streaming & decoupled message brokers", tag: "Streaming" },
      { name: "BullMQ Job Queues", useCase: "Priority queues, delayed scheduling & auto-retries", tag: "Distributed" },
      { name: "Express.js / REST APIs", useCase: "Robust middleware chains, validation & API security", tag: "Production" },
      { name: "System Design & Fan-Out", useCase: "Scalable feed generation & asynchronous pipelines", tag: "Architecture" },
    ],
  },
  {
    id: "database",
    title: "Databases & In-Memory Caching",
    shortTitle: "Data & Storage",
    icon: <Database className="w-4 h-4 text-orange-400" />,
    description: "Sub-second indexing, ACID transactional integrity, and low-latency cache layers.",
    coreHighlight: "Tuned complex query execution from 10s down to <0.1s using GIN indexes.",
    skills: [
      { name: "PostgreSQL (GIN Indexes & Tuning)", useCase: "Query plan optimization & fast pattern matching", tag: "Query Tuning" },
      { name: "Redis (In-Memory & Pub/Sub)", useCase: "Sub-millisecond caching & real-time session sync", tag: "Low Latency" },
      { name: "MongoDB & Aggregation", useCase: "Time-series data, document schemas & indexing", tag: "NoSQL" },
      { name: "MySQL (Sequelize / Prisma)", useCase: "Relational normalization, transactions & migrations", tag: "ACID" },
      { name: "Bloom Filters & Indexing", useCase: "Probabilistic deduplication & sub-ms lookups", tag: "Optimization" },
      { name: "Data Pipeline ETL", useCase: "Automated media transcoding & cloud storage sync", tag: "ETL" },
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
      { name: "Docker & Containerization", useCase: "Multi-stage builds & environment parity", tag: "Containers" },
      { name: "Kubernetes (K8s)", useCase: "Automated cluster scaling & pod orchestration", tag: "Orchestration" },
      { name: "AWS (ECS, EC2, S3)", useCase: "Container tasks, cloud storage & compute instances", tag: "Cloud" },
      { name: "AWS CloudWatch & Logs", useCase: "Telemetry monitoring, alarms & log insights", tag: "Telemetry" },
      { name: "CI/CD & Deployment", useCase: "Automated test suites & continuous delivery", tag: "DevOps" },
      { name: "Distributed Rate Limiting", useCase: "Token bucket & sliding window rate throttling", tag: "Security" },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Architecture & Tooling",
    shortTitle: "Full-Stack",
    icon: <Code2 className="w-4 h-4 text-amber-300" />,
    description: "End-to-end type safety, duplex real-time sockets, and modern interfaces.",
    coreHighlight: "Engineered responsive full-stack applications with sub-50ms WebSocket feeds.",
    skills: [
      { name: "TypeScript", useCase: "Strict type safety across API contracts & schemas", tag: "Type Safety" },
      { name: "WebSockets & Socket.IO", useCase: "Full-duplex client-server real-time feeds", tag: "Real-Time" },
      { name: "React.js & Modern UI", useCase: "Performant responsive single-page interfaces", tag: "Frontend" },
      { name: "TailwindCSS & Design Systems", useCase: "Modular, accessible, responsive design systems", tag: "Design" },
      { name: "Vector Search & Embeddings", useCase: "Cosine similarity & semantic query matching", tag: "AI Search" },
      { name: "Git & Linux CLI", useCase: "Version control, shell scripting & server management", tag: "Tooling" },
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
    <section className="py-10 sm:py-16 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
              Skills & Architecture
            </h2>
          </motion.div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-[11px] sm:text-xs font-mono text-slate-400 mr-1">
              <span className="text-white font-semibold">{String(selectedIndex + 1).padStart(2, "0")}</span> /{" "}
              <span>{String(skillCategories.length).padStart(2, "0")}</span>
            </div>

            <button
              onClick={scrollPrev}
              disabled={prevDisabled}
              className={`p-2 sm:p-2.5 rounded-full border transition-all ${
                prevDisabled
                  ? "border-white/5 text-slate-600 cursor-not-allowed bg-transparent"
                  : "border-white/15 text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08]"
              }`}
              aria-label="Previous skill category"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextDisabled}
              className={`p-2 sm:p-2.5 rounded-full border transition-all ${
                nextDisabled
                  ? "border-white/5 text-slate-600 cursor-not-allowed bg-transparent"
                  : "border-white/15 text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08]"
              }`}
              aria-label="Next skill category"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Category Tabs (Smooth Horizontal Scroll on mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-5 sm:mb-7 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {skillCategories.map((cat, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <button
                key={cat.id}
                onClick={() => scrollTo(idx)}
                className={`flex-shrink-0 whitespace-nowrap px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-slate-200 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5"
                }`}
              >
                <span>{cat.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Embla Carousel for Skill Categories */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="pl-4 min-w-0 flex-[0_0_100%]"
              >
                <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#0c141c]/90 shadow-xl space-y-4">
                  
                  {/* Category Header */}
                  <div className="space-y-2.5 pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{category.description}</p>
                      </div>
                    </div>

                    {/* Architectural highlight pill */}
                    <div className="px-3 py-1.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-[11px] sm:text-xs text-emerald-200/90 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="font-mono">{category.coreHighlight}</span>
                    </div>
                  </div>

                  {/* Symmetrical Grid of Skill Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/25 transition-colors flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-white truncate">
                            {skill.name}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5 leading-snug">
                            {skill.useCase}
                          </div>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex-shrink-0">
                          {skill.tag}
                        </span>
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
          <div className="flex items-center justify-center gap-1.5 mt-5 sm:mt-6">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === selectedIndex
                    ? "w-6 bg-emerald-500"
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
