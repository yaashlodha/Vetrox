import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: ""
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    // Filter out formatting characters to calculate raw digit count
    const digitCount = formData.phone.replace(/\D/g, "").length;
    
    // Checks if the digit footprint falls within the valid 10-12 range
    if (digitCount < 10 || digitCount > 12) {
      setStatus("error");
      setErrorMessage("Please enter a valid phone number (10-12 digits).");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", phone: "", email: "", requirement: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.details || data.error || "Server error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a3a3a] mb-6">
                Connect with <span className="text-primary">Vetrox</span>
              </h2>
              <p className="text-gray-600 mb-8 max-w-md">
                Have a specific requirement or want to discuss a partnership? 
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Direct Email</h4>
                  <p className="text-[#1a3a3a] font-bold">info@vetrox.co.in</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Office Hours</h4>
                  <p className="text-[#1a3a3a] font-bold text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/5 border border-primary/10 p-8 rounded-3xl text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-xl font-bold text-[#1a3a3a] mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Thank you for reaching out. We have received your requirement and will contact you shortly.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-primary font-bold hover:underline text-sm"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50/50 p-6 md:p-8 rounded-[2rem] border border-gray-100">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Name</label>
                  <input
                    required
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-sm"
                    placeholder="Full Name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Company</label>
                  <input
                    required
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-sm"
                    placeholder="Company Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone</label>
                    <input
                      required
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      // Clean input live: filters out accidental letters/symbols while leaving spacing options open
                      onChange={(e) => {
                        const allowedChars = e.target.value.replace(/[^\d\s+\-()]/g, "");
                        setFormData({ ...formData, phone: allowedChars });
                      }}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-sm"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email</label>
                    <input
                      required
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-sm"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="requirement" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Requirement</label>
                  <textarea
                    required
                    id="requirement"
                    rows={3}
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none text-sm"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-sm ${
                    status === "submitting" 
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                    : "bg-primary text-white hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                  }`}
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-2 bg-red-50 p-4 rounded-xl text-xs"
                  >
                    <div className="flex items-center gap-2 text-red-600 font-bold">
                      <AlertCircle size={14} />
                      Error sending message
                    </div>
                    <p className="text-red-500 italic text-[11px] leading-tight">
                      {errorMessage}
                    </p>
                    <p className="text-gray-500 text-[10px]">
                      Please verify your credentials or email <a href="mailto:info@vetrox.co.in" className="underline font-bold">info@vetrox.co.in</a> directly.
                    </p>
                  </motion.div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}