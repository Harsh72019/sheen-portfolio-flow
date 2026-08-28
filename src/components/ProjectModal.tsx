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
    challenges: string;
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel bg-[#0c1222]/95 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Image with Gradient */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/50 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title & Category Badge */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-2">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
            {/* Overview */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" /> System Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.fullDetails?.overview || project.description}
              </p>
            </div>

            {/* Tech Stack Chips */}
            {project.fullDetails?.techStack && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.fullDetails.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.fullDetails?.architecture && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Architecture & Key Features
                </h3>
                <ul className="space-y-2.5">
                  {project.fullDetails.architecture.map((arch, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
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
                <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4" /> Engineering Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.fullDetails.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-800/40 border border-white/5 text-xs sm:text-sm text-slate-200 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold border border-white/10 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
              <button
                onClick={onClose}
                className="ml-auto px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-medium border border-white/10 transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
