import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Copy,
  Check,
  FileDown,
  Linkedin,
  Github,
  MapPin,
  Clock,
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
      title: "Email Copied 📋",
      description: "harshbali374@gmail.com is ready to paste.",
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Hi Harsh,\n\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`
    );
    window.open(`mailto:harshbali374@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill out your name, email, and message.",
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

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#94a3b8", "#38bdf8"],
      });

      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out! I will respond promptly.",
      });

      setFormData({ name: "", email: "", message: "" });
      setSendError(null);
    } catch (error: any) {
      console.error("Email dispatch error:", error);
      const errMsg = error?.text || error?.message || "Relay error";
      setSendError(errMsg);

      toast({
        title: "Message Delivery Notice",
        description: "Direct API relay encountered an issue. You can click 'Open in Mail Client' below.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-10"
        >
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Info Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#090d18]/85 shadow-xl space-y-4 sm:space-y-5">
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                Direct Contact
              </h3>

              <div className="space-y-3">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.05] text-slate-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-500">Email</div>
                      <a href="mailto:harshbali374@gmail.com" className="text-xs font-medium text-slate-200 hover:text-white transition-colors">
                        harshbali374@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-white/[0.05] text-slate-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-500">Location</div>
                    <div className="text-xs font-medium text-slate-200">
                      New Delhi, India • Open to Remote & Relocation
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-white/[0.05] text-slate-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-500">Availability</div>
                    <div className="text-xs font-medium text-slate-200">
                      Full-Time • Flexible Global Timezone Overlap
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={resumePdf}
                  download="Harsh_Bali_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 text-xs font-medium border border-white/10 transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5 text-slate-400" />
                  Download Resume (PDF)
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://www.linkedin.com/in/harsh-bali-423987228/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Harsh72019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-4 sm:p-7 rounded-2xl border border-white/10 bg-[#090d18]/90 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-300 text-xs font-medium uppercase tracking-wider mb-1.5 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="bg-slate-900/60 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:border-indigo-500 h-10 text-xs sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300 text-xs font-medium uppercase tracking-wider mb-1.5 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="bg-slate-900/60 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:border-indigo-500 h-10 text-xs sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-300 text-xs font-medium uppercase tracking-wider mb-1.5 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Project details, role inquiries, or technical discussion..."
                    rows={4}
                    className="bg-slate-900/60 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:border-indigo-500 text-xs sm:text-sm resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm rounded-xl transition-colors shadow-sm h-auto flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>

                {sendError && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs space-y-2 text-center"
                  >
                    <p>API relay issue detected ({sendError}).</p>
                    <Button
                      type="button"
                      onClick={openMailtoFallback}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-1.5 rounded-lg text-xs flex items-center justify-center gap-2"
                    >
                      <Mail className="w-3 h-3" />
                      Open in Email App
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
