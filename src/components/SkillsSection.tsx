
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
{ name: "NodeJs", level: 95, color: "bg-teal-500" },
  { name: "Express", level: 95, color: "bg-rose-500" },
  { name: "BullMQ", level: 85, color: "bg-amber-500" },
  { name: "Kafka", level: 82, color: "bg-lime-500" },
  { name: "Redis", level: 80, color: "bg-cyan-500" },
  { name: "Socket", level: 78, color: "bg-fuchsia-500" },
  { name: "MongoDB (Mongoose)", level: 80, color: "bg-sky-500" },
  { name: "PostgreSQL & MySQL (Sequelize)", level: 80, color: "bg-violet-500" },
  { name: "AWS, cPanel, S3, cloudinary", level: 70, color: "bg-pink-500" },
  { name: "React & TypeScript", level: 60, color: "bg-yellow-500" }
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-thin text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical proficiency honed through years of hands-on experience and building systems from scratch.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`h-full ${skill.color} rounded-full relative`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
