import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Copy,
  Check,
  FileDown,
  Linkedin,
  Github,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import resumePdf from "../assets/HARSH_SEP_RESUME.pdf";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (sendError) setSendError(null);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("harshbali374@gmail.com");
    setCopiedEmail(true);
    toast({
      title: "Email Copied! 📋",
      description: "harshbali374@gmail.com is ready to paste.",
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`Project Inquiry / Contact from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Hi Harsh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    window.open(`mailto:harshbali374@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "All fields are required",
        description: "Please fill out your name, email, and message before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);
    setSendError(null);

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      user_name: formData.name,
      to_name: "Harsh Bali",
      email: formData.email,
      from_email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
      message_html: formData.message,
    };

    try {
      await emailjs.send(
        "service_yg9sgo9",
        "template_j4zn7da",
        templateParams,
        "5s_B8LlQxKJV113au"
      );

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#38bdf8", "#a855f7", "#34d399"],
      });

      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out! Harsh will get back to you shortly.",
      });

      setFormData({ name: "", email: "", message: "" });
      setSendError(null);
    } catch (error: any) {
      console.error("EmailJS dispatch error:", error);
      const errMsg = error?.text || error?.message || "Service error";
      setSendError(errMsg);

      toast({
        title: "Email service notification",
        description: "Direct relay encountered an error. You can click 'Open in Mail Client' below to send directly.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Build <span className="text-gradient-cyan">Something Extraordinary</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Have a project in mind, need high-throughput backend scaling, or looking
            for a Senior Backend Engineer? Let's connect.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#090e1d]/85 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                Direct Communication
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">Email Address</div>
                      <a href="mailto:harshbali374@gmail.com" className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                        harshbali374@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      New Delhi, India (Open to Remote / Relocation)
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Working Hours</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      Full-time • Flexible across Global Timezones
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Resume & Socials */}
              <div className="pt-2 space-y-3">
                <a
                  href={resumePdf}
                  download="Harsh_Bali_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-white/10 transition-all hover:scale-[1.02]"
                >
                  <FileDown className="w-4 h-4 text-indigo-400" />
                  Download Official Resume (PDF)
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com/in/harsh-bali-423987228/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#0a66c2]/20 hover:bg-[#0a66c2]/30 text-white text-xs font-semibold border border-[#0a66c2]/30 transition-all hover:scale-105"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Harsh72019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-all hover:scale-105"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#090e1d]/90 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    Your Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Connor"
                    className="bg-slate-900/80 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-sm"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    Your Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sarah@enterprise.com"
                    className="bg-slate-900/80 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-11 text-sm"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    Project Requirements / Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your system requirements, timeline, stack, or role details..."
                    rows={5}
                    className="bg-slate-900/80 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-2xl shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.01] h-auto flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </Button>

                {sendError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs space-y-2 text-center"
                  >
                    <p>Direct API relay had a temporary network issue ({sendError}).</p>
                    <Button
                      type="button"
                      onClick={openMailtoFallback}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Open In Default Email Client (Gmail / Outlook)
                    </Button>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
