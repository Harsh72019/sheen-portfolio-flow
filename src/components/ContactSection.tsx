
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-thin mb-6">
            Let's Create Something
            <br />
            <span className="text-indigo-400">Amazing Together</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to bring your vision to life? Let's discuss how we can transform 
            your ideas into exceptional digital experiences.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-all duration-300"
            >
              Start a Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-500 text-white rounded-full hover:border-white transition-all duration-300"
            >
              Download Resume
            </motion.button>
          </motion.div>
          
          <div className="flex justify-center space-x-8 text-gray-400">
            <motion.a
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              href="#"
              className="transition-colors duration-300"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              href="#"
              className="transition-colors duration-300"
            >
              Dribbble
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              href="#"
              className="transition-colors duration-300"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              href="#"
              className="transition-colors duration-300"
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm"
      >
        <p>&copy; 2024 Creative Professional. All rights reserved.</p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
