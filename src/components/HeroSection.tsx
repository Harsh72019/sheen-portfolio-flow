import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-thin text-gray-900 leading-tight"
          >
            Hi, I'm{" "}
            <span className="font-medium text-indigo-600">Harsh Bali</span>
            <br />
            <span className="text-2xl lg:text-4xl text-gray-800 mt-4 inline-block">
              <Typewriter
                words={[
                  "Backend Developer",
                  "DevOps Engineer",
                  "Full Stack Engineer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed max-w-lg"
          >
            Building scalable and resilient backend systems with 2+ years of
            experience in Node.js. Skilled in Redis, Kafka, BullMQ, AWS (S3),
            and microservice architecture to deliver high-performance solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-gray-300 text-gray-900 rounded-full hover:border-gray-900 transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Circles with Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[500px] lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-80 h-80 lg:w-[24rem] lg:h-[24rem]">
            {/* Outer rotating circles */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 opacity-80 shadow-2xl"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-12 rounded-full bg-gradient-to-tl from-blue-400 via-cyan-400 to-blue-500 opacity-60"
            />
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-20 rounded-full bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 opacity-40"
            />

            {/* Enlarged Image */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img
                src="https://res.cloudinary.com/dfpmkus1i/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1750509480/photo-2_eyyd53.jpg"
                alt="Harsh Bali"
                className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
