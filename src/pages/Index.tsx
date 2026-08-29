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
    <div className="min-h-screen bg-[#070b0e] text-slate-100 relative selection:bg-emerald-500/25 selection:text-emerald-200 overflow-x-hidden">
      {/* Ambient Canvas and Grid */}
      <BackgroundEffects />

      {/* Floating Top Navbar */}
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
