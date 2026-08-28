import React from "react";
import Navbar from "../components/Navbar";
import BackgroundEffects from "../components/BackgroundEffects";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 relative selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Dynamic Background Effects (Ambient Orbs, Constellation Canvas & Grid) */}
      <BackgroundEffects />

      {/* Floating Glassmorphic Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <PortfolioSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
