import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Zap, Layers } from "lucide-react";

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  tag: "backend" | "realtime" | "ai" | "fintech";
  description: string;
  fullDetails?: {
    overview: string;
    architecture: string[];
    metrics: string[];
    techStack: string[];
    challenges?: string;
  };
  image: string;
  color: string;
  accentGlow: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: "spring", damping: 28, stiffness: 350 }}
          className="relative w-full max-w-2xl glass-panel bg-[#0c141c]/95 border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
        >
          {/* Header Image with Gradient */}
          <div className="relative h-40 sm:h-56 w-full overflow-hidden flex-shrink-0 bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c141c] via-[#0c141c]/50 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/80 text-slate-300 hover:text-white border border-white/20 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Title & Category Badge */}
            <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
              <span className="inline-block px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono font-medium rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-1 backdrop-blur-md">
                {project.category}
              </span>
              <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" /> System Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {project.fullDetails?.overview || project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            {project.fullDetails?.architecture && (
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" /> Architectural Highlights
                </h3>
                <ul className="space-y-2">
                  {project.fullDetails.architecture.map((arch, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics & Performance */}
            {project.fullDetails?.metrics && (
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" /> Measurable Impact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.fullDetails.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-200 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Chips */}
            {project.fullDetails?.techStack && (
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-slate-400" /> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.fullDetails.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-semibold shadow-md transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                    Live System
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs font-medium border border-white/15 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Repository
                  </a>
                )}
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
