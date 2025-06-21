import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    try {
      await emailjs.send(
        "service_yg9sgo9", 
        "template_j4zn7da", 
        {
          name: formData.name, 
          to_name: "Harsh Bali", 
          from_name: formData.name, 
          message: formData.message, 
          reply_to: formData.email, 
        },
        "5s_B8LlQxKJV113au" 
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Message failed!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="relative min-h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div
                key="contact-intro"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-center max-w-3xl mx-auto"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-thin mb-6">
                    Let's Create Something
                    <br />
                    <span className="text-indigo-400">Amazing Together</span>
                  </h2>

                  <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                    Ready to bring your vision to life? Let's discuss how we can
                    transform your ideas into exceptional digital experiences.
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                  >
                    <Button
                      onClick={() => setShowForm(true)}
                      className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-all duration-300"
                      size="lg"
                    >
                      Contact Me
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/16pDLa0WFsVagH4AXBGg-tLbmGfGflDhr/view?usp=sharing",
                          "_blank"
                        )
                      }
                      className="px-8 py-4 border border-gray-500 text-white rounded-full hover:border-white transition-all duration-300 bg-transparent"
                      size="lg"
                    >
                      Download Resume
                    </Button>
                  </motion.div>

                  <div className="flex justify-center space-x-8 text-gray-400">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="https://www.linkedin.com/in/harsh-bali-423987228/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-white"
                    >
                      LinkedIn
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="mailto:harshbali374@gmail.com"
                      className="transition-colors duration-300 hover:text-white"
                    >
                      Email
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="https://github.com/Harsh72019"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-white"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full max-w-2xl mx-auto"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-thin mb-4">
                      Let's Start Your
                      <br />
                      <span className="text-indigo-400">Project</span>
                    </h2>
                    <p className="text-gray-300">
                      Tell me about your project and let's bring it to life
                      together.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-white mb-2 block"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400 resize-none"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        type="submit"
                        className="flex-1 px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-all duration-300"
                        size="lg"
                      >
                        Send Message
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                        className="flex-1 px-8 py-4 border border-gray-500 text-white rounded-full hover:border-white transition-all duration-300 bg-transparent"
                        size="lg"
                      >
                        Back
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm"
        >
          <p>&copy; 2024 Harsh Bali. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
