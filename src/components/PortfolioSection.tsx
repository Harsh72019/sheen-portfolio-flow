import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  Sparkles,
  Zap,
  Cpu,
  Database,
  Eye,
} from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";

const portfolioItems: ProjectData[] = [
  {
    id: 1,
    title: "Trading Simulator",
    category: "Trading Infrastructure & FinTech",
    tag: "fintech",
    description:
      "Simulates stock trades with real-time position tracking, live P&L updates, and FIFO-based trade matching. Uses Polygon APIs, MongoDB, WebSocket updates, and Redis queues with AI trade analysis.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-cyan-500 to-blue-600",
    accentGlow: "rgba(6, 182, 212, 0.4)",
    fullDetails: {
      overview:
        "High-performance institutional trading simulation engine supporting rapid order execution, live market stream ingestion, FIFO trade settlement, and AI-driven portfolio risk analysis.",
      architecture: [
        "Polygon.io WebSocket connection streaming tick-level market price data",
        "Redis Pub/Sub & In-memory caching for sub-millisecond position calculations",
        "FIFO algorithm for accurate automated trade matching and lot assignment",
        "MongoDB time-series collections for historical trade analytics",
        "AI trade coach giving actionable feedback on risk-reward ratios",
      ],
      metrics: [
        "Sub-5ms order execution simulation latency",
        "Real-time WebSocket P&L broadcasting to connected clients",
        "Zero-loss transactional accounting with MongoDB session rollbacks",
      ],
      techStack: ["Node.js", "Polygon API", "Redis", "WebSockets", "MongoDB", "BullMQ", "AI NLP"],
    },
  },
  {
    id: 2,
    title: "Harmony and Help",
    category: "Enterprise GRC & SSHEQ Platform",
    tag: "backend",
    description:
      "Enterprise-grade GRC and SSHEQ platform built for government infrastructure. Modular microservices using Node.js and Redis, Kafka-driven event architecture, BullMQ-based task queues, and one-click deployment.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750510926/Screenshot_2025-06-21_183123_np00fe.png",
    color: "from-emerald-500 to-teal-600",
    accentGlow: "rgba(16, 185, 129, 0.4)",
    fullDetails: {
      overview:
        "Mission-critical compliance and safety management system built for high-security public sector installations, coordinating cross-departmental auditing and incident dispatch.",
      architecture: [
        "Microservices decoupled via Apache Kafka message partitions",
        "BullMQ for distributed delayed tasks, auto-retry pipelines, and SLA alert triggers",
        "Role-based access control (RBAC) with granular security audit trails",
        "Redis cluster for active session sync and permission caching",
      ],
      metrics: [
        "Improved response time from 20s to under 1s",
        "99.9% uptime across government deployment nodes",
        "10+ independent microservices communicating via event streams",
      ],
      techStack: ["Node.js", "Express", "Apache Kafka", "Redis", "BullMQ", "PostgreSQL", "Docker"],
    },
  },
  {
    id: 3,
    title: "Jambeera",
    category: "Real-Time Event Systems & eCommerce",
    tag: "realtime",
    description:
      "AI-based eCommerce matchmaking platform using cosine similarity. Kafka and Socket.IO enabled real-time notifications with priority queue and seamless buyer-seller matching.",
    image:
      "https://play-lh.googleusercontent.com/pvFaO3WzNzIYDQFpLiXu5WnoPnydI4aU5-XV7xYg_fUpFLZQylmZsdq0Dhjry11MofQ=w1052-h592-rw",
    color: "from-blue-500 to-purple-600",
    accentGlow: "rgba(99, 102, 241, 0.4)",
    fullDetails: {
      overview:
        "High-velocity eCommerce engine connecting prospective buyers with verified sellers in real-time using intelligent vector cosine matching and instant push notifications.",
      architecture: [
        "Real-time event loop with Socket.IO rooms for localized buyer-seller bid negotiations",
        "Cosine similarity algorithms for matching product preference vectors",
        "Distributed queue with priority dispatch for premium tier transactions",
      ],
      metrics: [
        "Instantaneous <50ms buyer notification delivery",
        "Supports 10k+ concurrent connected sockets",
      ],
      techStack: ["Node.js", "Socket.IO", "Kafka", "Redis", "MongoDB", "Cosine Similarity"],
    },
  },
  {
    id: 4,
    title: "EazeAccounts",
    category: "Financial Accounting Platform",
    tag: "fintech",
    description:
      "A modern accounting platform designed to streamline financial data processing and reconciliation. Scalable backend with Node.js, Express, and Redis with priority job queues via BullMQ.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-purple-500 to-indigo-600",
    accentGlow: "rgba(168, 85, 247, 0.4)",
    fullDetails: {
      overview:
        "Double-entry bookkeeping and financial reconciliation software designed for corporate clients, automating ledger generation and tax statement compilation.",
      architecture: [
        "Transactional ledger APIs with ACID compliance guarantees",
        "BullMQ background job workers for heavy end-of-month financial reconciliation reports",
        "Redis caching for quick balance sheet and ledger query retrievals",
      ],
      metrics: [
        "Processed large volume tax reconciliation reports in seconds",
        "Zero calculation discrepancy across multi-currency ledgers",
      ],
      techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "BullMQ", "TypeScript"],
    },
  },
  {
    id: 5,
    title: "MindSpace",
    category: "Spiritual Wellness AI",
    tag: "ai",
    description:
      "Spiritual conversational AI with Bhagavad Gita-based answers. Personalized checks for mental health and relevant remedies with sentiment analysis.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750512204/Screenshot_2025-06-21_185303_anrzsz.png",
    color: "from-cyan-500 to-sky-600",
    accentGlow: "rgba(56, 189, 248, 0.4)",
    fullDetails: {
      overview:
        "Context-aware mental health and philosophical companion leveraging embeddings and semantic search across ancient wisdom texts to provide thoughtful emotional guidance.",
      architecture: [
        "Vector search engine querying Bhagavad Gita shlokas and philosophical commentaries",
        "Sentiment analysis pipeline for tracking emotional state over time",
        "Streamed response generation with low latency WebSocket output",
      ],
      metrics: [
        "Engaged 5,000+ daily conversational sessions",
        "Sentiment classification accuracy >92%",
      ],
      techStack: ["Node.js", "OpenAI Embeddings", "MongoDB", "Express", "Vector DB"],
    },
  },
  {
    id: 6,
    title: "CineSphere",
    category: "AI & Machine Learning",
    tag: "ai",
    description:
      "Machine-learning-based movie recommender system that personalizes suggestions based on viewing history and collaborative filtering vectors.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750511895/cinesphere_oro53k.png",
    color: "from-lime-500 to-green-600",
    accentGlow: "rgba(132, 204, 22, 0.4)",
    fullDetails: {
      overview:
        "Personalized content discovery engine recommending titles based on user rating history, genre affinity, and cross-user collaborative filtering.",
      architecture: [
        "Matrix factorization and cosine similarity for user affinity modeling",
        "Fast Redis cache for hot movie metadata and user recommendation carousels",
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
  { label: "Backend & Scale", value: "backend" },
  { label: "Real-Time & Events", value: "realtime" },
  { label: "FinTech & Trading", value: "fintech" },
  { label: "AI & Machine Learning", value: "ai" },
];

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tag === activeFilter);

  return (
    <section className="py-24 relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Hall of Fame
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Featured <span className="text-gradient-cyan">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            High-concurrency distributed systems, low-latency financial engines,
            and real-time event platforms built with production-grade reliability.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white font-semibold shadow-lg shadow-indigo-500/25"
                    : "text-slate-400 hover:text-slate-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveFilter"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                onClick={() => setSelectedProject(item)}
                className="group cursor-pointer glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 shadow-2xl relative"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/40 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-black/60 text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Quick View Hover Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                    <div className="px-4 py-2 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl">
                      <Eye className="w-3.5 h-3.5" />
                      View System Details
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                    {item.fullDetails?.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {(item.fullDetails?.techStack.length || 0) > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-indigo-400 bg-indigo-500/10">
                        +{(item.fullDetails?.techStack.length || 0) - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
