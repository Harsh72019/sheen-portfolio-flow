
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Idea Usher",
    role: "Senior Backend Developer",
    period: "2025 - Present",
    description: "Developing scalable backend and AI solutions for diverse clients, focusing on performance and reliability.",
    achievements: ["Optimized server performance by 30%", "Implemented AI-driven features" , "Reduced response time by from over 20 seconds to under 1 second"]
  },
  {
    company: "Sartia Global",
    role: "Backend Developer (Supervisor)",
    period: "2024 - 2025", 
    description: "Led a team of developers to build robust backend systems, enhancing system efficiency and scalability.",
    achievements: ["Developed 10+ backend services", "Optimized SQL queries", "Improved system uptime by 20%"]
  },
  {
    company: "Faction IT Solutions",
    role: "Full Stack Developer",
    period: "2023 - 2024",
    description: "Designed and implemented full-stack applications, integrating frontend and backend technologies to deliver seamless user experiences.",
    achievements: ["Developed 5+ full-stack applications", "Implemented responsive design", "Enhanced user engagement by 25%"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-thin text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through impactful roles at innovative companies, driving creative excellence.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 text-sm rounded-full mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-1">{exp.role}</h3>
                  <p className="text-lg text-indigo-600 font-medium">{exp.company}</p>
                </div>
                
                <div className="lg:w-2/3 lg:pl-8 lg:border-l border-gray-200">
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                        <span className="text-gray-700">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
