import React from "react";
import { motion } from "framer-motion";
const portfolioItems = [
  {
    id: 1,
    title: "Paper Trading Simulator",
    category: "Trading Infrastructure",
    description:
      "Simulates stock trades with real-time position tracking, live P&L updates, and FIFO-based trade matching. Uses polygon APIs, MongoDB, WebSocket updates, and Redis queues for low-latency event handling And provides AI-based trade analysis of your trades",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-cyan-500 to-sky-600",
    hoverColor: "from-black/80 to-black/90",
  },
  {
    id: 2,
    title: "Harmony and Help",
    category: "Backend Engineering",
    description:
      "Enterprise-grade GRC and SSHEQ platform built for government infrastructure. Modular microservices using Node.js and Redis. Kafka-driven event architecture, BullMQ-based task queues, and one-click deployment automation.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750510926/Screenshot_2025-06-21_183123_np00fe.png",
    color: "from-emerald-500 to-teal-600",
    hoverColor: "from-gray-900 to-gray-800",
  },
  {
    id: 3,
    title: "Jambeera",
    category: "Real-Time Event Systems",
    description:
      "AI-based eCommerce matchmaking platform using cosine similarity. Kafka and Socket.IO enabled real-time notifications with a priority queue and seamless buyer-seller matching.",
    image:
      "https://play-lh.googleusercontent.com/pvFaO3WzNzIYDQFpLiXu5WnoPnydI4aU5-XV7xYg_fUpFLZQylmZsdq0Dhjry11MofQ=w1052-h592-rw",
    color: "from-blue-500 to-purple-600",
    hoverColor: "from-blue-900 to-purple-900",
  },
  {
    id: 4,
    title: "CodersPoint",
    category: "High-Performance Content Delivery",
    description:
      "Full-stack educational platform with Redis caching, SSR optimization, and clustered Node.js APIs. Improved engagement by 50%, cut load times by 60%.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750511894/coderspoint_coqdc3.png",
    color: "from-pink-500 to-rose-600",
    hoverColor: "from-pink-900 to-rose-900",
  },
  {
    id: 5,
    title: "MindSpace",
    category: "Spiritual Wellness",
    description:
      "Spiritual chatbot with Bhagavad Gita-based answers. Personalized checks for mental health and relevant remedies.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750512204/Screenshot_2025-06-21_185303_anrzsz.png",
    color: "from-cyan-500 to-sky-600",
    hoverColor: "from-slate-900 to-black",
  },
  {
    id: 6,
    title: "CineSphere",
    category: "AI & Machine Learning",
    description:
      "Machine-learning-based movie recommender system that personalizes suggestions based on viewing history.",
    image:
      "https://res.cloudinary.com/dfpmkus1i/image/upload/v1750511895/cinesphere_oro53k.png",
    color: "from-lime-500 to-green-600",
    hoverColor: "from-lime-900 to-green-900",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-thin text-gray-900 mb-4">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase creativity, technical
            expertise, and attention to detail.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.hoverColor} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    <div className="text-center px-4">
                      <h3 className="text-2xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-200">{item.category}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{item.category}</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
