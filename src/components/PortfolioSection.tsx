import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Eye,
  TrendingUp,
} from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import useEmblaCarousel from "embla-carousel-react";

const portfolioItems: ProjectData[] = [
  {
    id: 1,
    title: "Trading Simulator Engine",
    category: "FinTech & Low Latency",
    tag: "fintech",
    description:
      "Real-time institutional trading simulation engine supporting tick-level market price streams, FIFO trade matching, and live WebSocket portfolio calculations.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-sky-500 to-indigo-600",
    accentGlow: "rgba(56, 189, 248, 0.2)",
    fullDetails: {
      overview:
        "High-performance institutional trading simulation engine supporting rapid order execution, live market stream ingestion, FIFO trade settlement, and AI-driven portfolio risk analysis.",
      architecture: [
        "WebSocket connection streaming tick-level market price data from external feeds",
        "Sub-millisecond in-memory cache for live position calculations and margin checks",
        "FIFO algorithm for accurate automated trade matching and lot assignment",
        "Time-series collections for historical trade analytics and P&L tracking",
        "Automated risk module analyzing risk-to-reward ratios on active positions",
      ],
      metrics: [
        "Sub-5ms order execution simulation latency",
        "Real-time WebSocket P&L broadcasting to connected clients",
        "Zero-loss transactional accounting with database rollbacks",
      ],
      techStack: ["Node.js", "Polygon APIs", "Redis Pub/Sub", "WebSockets", "MongoDB", "BullMQ"],
    },
  },
  {
    id: 2,
    title: "Decentralized Social Media Platform",
    category: "Distributed Systems & RPC",
    tag: "backend",
    description:
      "Asynchronous fan-out-on-write feed distribution architecture, gRPC microservices with sub-10ms inter-service latency, Bloom filters, and media transcoding ETL pipeline.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-indigo-500 to-sky-600",
    accentGlow: "rgba(99, 102, 241, 0.2)",
    fullDetails: {
      overview:
        "High-throughput decentralized social media backend designed for low-latency activity feed generation, distributed rate limiting, and automated video transcoding workflows.",
      architecture: [
        "Asynchronous fan-out-on-write pipeline for instant real-time feed distribution",
        "gRPC binary protocol buffers for sub-10ms internal inter-service communication",
        "Distributed rate limiting with Redis and Bloom filters for instant duplicate deduplication",
        "Media ETL pipeline for asynchronous video transcoding, compression, and AWS S3 storage",
        "Containerized microservices orchestrated on Docker and Kubernetes (K8s)",
      ],
      metrics: [
        "Sub-10ms internal gRPC inter-service latency",
        "Zero-lag fan-out activity feed distribution",
        "Kubernetes & Docker automated container scaling",
      ],
      techStack: ["NestJS", "gRPC", "Redis", "Docker & K8s", "AWS S3", "Bloom Filters", "TypeScript"],
    },
  },
  {
    id: 3,
    title: "Harmony and Help",
    category: "Distributed GRC Platform",
    tag: "backend",
    description:
      "Enterprise GRC and SSHEQ compliance platform for public infrastructure. Modular microservices handling cross-departmental auditing and incident dispatch.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750510926/Screenshot_2025-06-21_183123_np00fe.png",
    color: "from-emerald-500 to-teal-600",
    accentGlow: "rgba(16, 185, 129, 0.2)",
    fullDetails: {
      overview:
        "Mission-critical compliance and safety management system built for high-security public sector installations, coordinating cross-departmental auditing and incident dispatch.",
      architecture: [
        "Microservices decoupled via partitioned event stream queues",
        "Distributed delayed tasks, auto-retry pipelines, and SLA alert triggers",
        "Role-based access control (RBAC) with granular security audit trails",
        "Cluster session sync and high-speed permission caching",
      ],
      metrics: [
        "Reduced response latency from 20s to under 1s (-95%)",
        "99.9% uptime across production nodes",
        "10+ independent microservices communicating via event streams",
      ],
      techStack: ["Node.js", "Express", "Apache Kafka", "Redis", "BullMQ", "PostgreSQL", "Docker"],
    },
  },
  {
    id: 4,
    title: "Jambeera Marketplace",
    category: "Real-Time Event Systems",
    tag: "realtime",
    description:
      "Real-time eCommerce matchmaking engine utilizing vector cosine matching and low-latency push notifications for rapid buyer-seller transaction negotiation.",
    image:
      "https://play-lh.googleusercontent.com/pvFaO3WzNzIYDQFpLiXu5WnoPnydI4aU5-XV7xYg_fUpFLZQylmZsdq0Dhjry11MofQ=w1052-h592-rw",
    color: "from-indigo-500 to-purple-600",
    accentGlow: "rgba(99, 102, 241, 0.2)",
    fullDetails: {
      overview:
        "High-velocity eCommerce engine connecting prospective buyers with verified sellers in real-time using intelligent vector cosine matching and instant push notifications.",
      architecture: [
        "Real-time event loop with Socket.IO rooms for localized bid negotiations",
        "Cosine similarity algorithms for matching product preference vectors",
        "Distributed queue with priority dispatch for premium tier transactions",
      ],
      metrics: [
        "Sub-50ms buyer notification delivery",
        "Supports 10k+ concurrent connected sockets",
      ],
      techStack: ["Node.js", "Socket.IO", "Kafka", "Redis", "MongoDB", "Vector Math"],
    },
  },
  {
    id: 5,
    title: "EazeAccounts",
    category: "Financial Ledger Engine",
    tag: "fintech",
    description:
      "Double-entry corporate bookkeeping and automated tax reconciliation backend ensuring strict ACID compliance, zero data discrepancy, and fast report generation.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-purple-500 to-indigo-600",
    accentGlow: "rgba(168, 85, 247, 0.2)",
    fullDetails: {
      overview:
        "Double-entry bookkeeping and financial reconciliation software designed for corporate clients, automating ledger generation and tax statement compilation.",
      architecture: [
        "Transactional ledger APIs with ACID compliance guarantees",
        "Background job workers for heavy end-of-month financial reconciliation reports",
        "In-memory caching for quick balance sheet and ledger query retrievals",
      ],
      metrics: [
        "Processed large volume tax reconciliation reports in seconds",
        "Zero calculation discrepancy across multi-currency ledgers",
      ],
      techStack: ["Node.js", "PostgreSQL", "Redis", "BullMQ", "TypeScript", "Express"],
    },
  },
  {
    id: 6,
    title: "MindSpace AI",
    category: "Vector Search & NLP",
    tag: "ai",
    description:
      "Context-aware mental health and philosophical companion leveraging embeddings and semantic search across ancient wisdom texts for emotional guidance.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750512204/Screenshot_2025-06-21_185303_anrzsz.png",
    color: "from-cyan-500 to-sky-600",
    accentGlow: "rgba(56, 189, 248, 0.2)",
    fullDetails: {
      overview:
        "Context-aware mental health and philosophical companion leveraging embeddings and semantic search across ancient wisdom texts to provide thoughtful emotional guidance.",
      architecture: [
        "Vector search engine querying semantic embeddings of philosophical commentaries",
        "Sentiment analysis pipeline for tracking emotional state over time",
        "Streamed response generation with low latency WebSocket output",
      ],
      metrics: [
        "Engaged 5,000+ daily conversational sessions",
        "Sentiment classification accuracy >92%",
      ],
      techStack: ["Node.js", "Vector DB", "OpenAI Embeddings", "MongoDB", "WebSockets"],
    },
  },
  {
    id: 7,
    title: "CineSphere Recommendation Engine",
    category: "Machine Learning & Discovery",
    tag: "ai",
    description:
      "Personalized recommendation engine combining matrix factorization and user rating vectors to render bespoke discovery carousels in under 30ms.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750511895/cinesphere_oro53k.png",
    color: "from-emerald-500 to-green-600",
    accentGlow: "rgba(16, 185, 129, 0.2)",
    fullDetails: {
      overview:
        "Personalized content discovery engine recommending titles based on user rating history, genre affinity, and cross-user collaborative filtering.",
      architecture: [
        "Matrix factorization and cosine similarity for user affinity modeling",
        "Fast memory cache for hot metadata and personalized recommendation feeds",
      ],
      metrics: [
        "Increased user recommendation click-through rate by 35%",
        "Instant personalized feed rendering in <30ms",
      ],
      techStack: ["Node.js", "Python ML", "Redis", "MongoDB", "React"],
    },
  },
];

type CategoryFilter = "all" | "backend" | "realtime" | "fintech" | "ai";

const filters: { label: string; value: CategoryFilter }[] = [
  { label: "All Systems", value: "all" },
  { label: "Distributed Backend", value: "backend" },
  { label: "Real-Time & Sockets", value: "realtime" },
  { label: "FinTech & Trading", value: "fintech" },
  { label: "AI & Embeddings", value: "ai" },
];

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tag === activeFilter);

  // Embla Carousel Setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect, filteredProjects]);

  // Reinitialize carousel when filter changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [activeFilter, emblaApi]);

  return (
    <section className="py-10 sm:py-16 relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
              Featured Work
            </h2>
          </motion.div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-[11px] sm:text-xs font-mono text-slate-400 mr-1">
              <span className="text-white font-semibold">{String(selectedIndex + 1).padStart(2, "0")}</span> /{" "}
              <span>{String(Math.max(1, scrollSnaps.length)).padStart(2, "0")}</span>
            </div>

            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className={`p-2 sm:p-2.5 rounded-full border transition-all ${
                prevBtnDisabled
                  ? "border-white/5 text-slate-600 cursor-not-allowed bg-transparent"
                  : "border-white/15 text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08]"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className={`p-2 sm:p-2.5 rounded-full border transition-all ${
                nextBtnDisabled
                  ? "border-white/5 text-slate-600 cursor-not-allowed bg-transparent"
                  : "border-white/15 text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08]"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters (Smooth Horizontal Scroll on mobile, Wrap on desktop) */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-5 sm:mb-7 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`flex-shrink-0 whitespace-nowrap px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-colors ${
                  isActive
                    ? "text-white bg-white/[0.1] border border-white/20 font-semibold"
                    : "text-slate-400 hover:text-slate-200 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Embla Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 sm:-ml-5">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="pl-4 sm:pl-5 min-w-0 flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div
                  onClick={() => setSelectedProject(item)}
                  className="h-full group cursor-pointer glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 shadow-xl bg-[#0b101d]/80 transition-all duration-300"
                >
                  {/* Project Image & Category */}
                  <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-[#0b101d]/40 to-transparent" />
                    
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-[#070a12]/80 text-slate-200 border border-white/10 backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-xs">
                      <div className="px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        System Architecture
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                          {item.title}
                        </h3>
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
                      </div>

                      <p className="text-slate-400 text-xs line-clamp-2 sm:line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Key Metric Highlight */}
                    {item.fullDetails?.metrics?.[0] && (
                      <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-emerald-400">
                        <TrendingUp className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{item.fullDetails.metrics[0]}</span>
                      </div>
                    )}

                    {/* Tech Chips */}
                    <div className="pt-1.5 sm:pt-2 border-t border-white/5 flex flex-wrap gap-1">
                      {item.fullDetails?.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {(item.fullDetails?.techStack.length || 0) > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono text-slate-400 bg-white/[0.02]">
                          +{(item.fullDetails?.techStack.length || 0) - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {scrollSnaps.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-8">
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

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default PortfolioSection;
