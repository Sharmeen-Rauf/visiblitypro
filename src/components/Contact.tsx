'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, PhoneCall, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import Magnetic from './Magnetic';
import Tilt from './Tilt';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', website: '', program: 'AcceleratedScale' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate real-time API sync
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Dynamically build message with form fields
      const waMsg = `Hello VizibilityPro, my name is ${formState.name}. My email is ${formState.email}. My website/LinkedIn is ${formState.website}. I am interested in the ${formState.program} growth tier.`;
      const waUrl = `https://wa.me/923146773542?text=${encodeURIComponent(waMsg)}`;
      
      // Instantly open WhatsApp chat
      window.open(waUrl, '_blank');
      
      setFormState({ name: '', email: '', website: '', program: 'AcceleratedScale' });
    }, 2000);
  };

  return (
    <section id="contact" className="relative w-full py-12 md:py-16 px-4 md:px-8 xl:px-16 bg-[#000000] overflow-hidden">
      
      {/* Massive Cinematic End Aurora Gradients */}
      <div className="absolute top-[10%] left-[-20%] w-[65vw] h-[65vw] rounded-full bg-cyber-violet/8 blur-[180px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-electric-blue/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-24 md:gap-36 relative z-10">
        
        {/* ================= PHASE 1: READY TO LAUNCH YOUR GROWTH? ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 w-fit">
              <Calendar className="w-3.5 h-3.5 text-electric-blue animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-mono font-medium">
                ENGAGEMENT CHANNELS
              </span>
            </div>

            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-white uppercase">
              READY TO LAUNCH YOUR <br />
              <span className="text-electric-blue drop-shadow-[0_0_15px_rgba(100,206,251,0.4)]">GROWTH?</span>
            </h2>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-sm font-sans">
              Get in touch today to secure a growth strategy audit slot for your brand. Our digital architects will analyze your existing funnels and schedule a brief alignment call.
            </p>

            <div className="flex flex-col gap-4 mt-4 font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="text-electric-blue">🔵</span>
                <span>Direct audit of your current ad account setups.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-electric-blue">🔵</span>
                <span>Personalized revenue timeline and traffic projection.</span>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="lg:col-span-7">
            <Tilt maxRotation={2}>
              <div className="glass-panel p-8 md:p-10 rounded-[3rem] border border-white/5 shadow-2xl relative">
                
                {/* Form spotlight */}
                <div className="absolute inset-0 bg-radial from-cyber-violet/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none -z-10" />

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      ref={formRef}
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-5 text-left"
                    >
                      <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2">
                        CONFIGURE YOUR STRATEGY CALL
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">FULL NAME</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-electric-blue/40 focus:bg-white/[0.04] text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 font-sans"
                          />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">YOUR EMAIL</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-electric-blue/40 focus:bg-white/[0.04] text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 font-sans"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">WEBSITE / LINKEDIN LINK</label>
                          <input
                            type="url"
                            name="website"
                            required
                            value={formState.website}
                            onChange={handleInputChange}
                            placeholder="https://yourbrand.com"
                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-electric-blue/40 focus:bg-white/[0.04] text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 font-sans"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">PREFERRED GROWTH TIER</label>
                          <select
                            name="program"
                            value={formState.program}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-electric-blue/40 focus:bg-white/[0.04] text-sm text-zinc-300 outline-none transition-all duration-300 font-sans"
                          >
                            <option value="AcceleratedScale" className="bg-neutral-950">Accelerated Scale ($3,500/mo)</option>
                            <option value="AuditSprint" className="bg-neutral-950">Traffic Audit Sprint ($1,850/one-off)</option>
                            <option value="RetainedGrowth" className="bg-neutral-950">Retained Growth Partner ($7,500/mo)</option>
                          </select>
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative group inline-flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider bg-white text-black transition-all duration-300 cursor-pointer overflow-hidden shadow-[0_4px_25px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_35px_rgba(100,206,251,0.3)] mt-2"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2 animate-pulse">
                            Syncing with VizibilityPro API...
                          </span>
                        ) : (
                          <span className="relative z-10 flex items-center gap-1.5">
                            SUBMIT BRIEF & SECURE SLOT 🚀
                          </span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-prompt"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-electric-blue/15 border border-electric-blue/40 flex items-center justify-center text-electric-blue mb-6">
                        <CheckCircle2 className="w-8 h-8 animate-bounce" />
                      </div>
                      <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider">
                        Session Lock Registered!
                      </h3>
                      <p className="text-sm text-zinc-400 max-w-sm mt-3 leading-relaxed">
                        Your discovery matrix is locked. Our lead growth engineer is compiling your pre-audit reports and will email your link confirmation in under 4 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 font-mono text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest underline transition-colors"
                      >
                        Reset Booking Form
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Tilt>
          </div>
        </div>

        {/* ================= PHASE 2: FINAL CTA BANNER ================= */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

        <div className="flex flex-col items-center justify-center text-center gap-10 max-w-4xl mx-auto">
          
          <div className="flex flex-col gap-6 items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-blue/40 text-[9px] font-mono uppercase tracking-widest text-zinc-400">
              <span>🌐</span>
              GLOBAL DIGITAL FUTURE
            </div>
            
            {/* Massive headline */}
            <h1 className="font-display font-black text-5xl md:text-7xl xl:text-8xl tracking-tight leading-[0.9] text-white uppercase">
              LET'S BUILD <br />
              SOMETHING WORTH <br />
              <span className="text-electric-blue drop-shadow-[0_0_20px_rgba(100,206,251,0.4)]">
                SCALING.
              </span>
            </h1>
          </div>

          <p className="text-zinc-500 font-sans text-sm md:text-base max-w-lg leading-relaxed">
            Partner with active digital growth engineers to fast-track your revenue path. Start your onboarding blueprint today or chat directly with our strategy directors.
          </p>

          {/* Interactive magnetic end links */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-4 w-full justify-center">
            
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-black overflow-hidden shadow-[0_4px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_40px_rgba(100,206,251,0.4)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  BOOK AUDIT CALL 📞
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10" />
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href="https://wa.me/923146773542?text=Hello%20VizibilityPro,%20I%27d%20like%20to%20book%20a%20free%20growth%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <span>WHATSAPP US 💬</span>
              </a>
            </Magnetic>

          </div>
        </div>
      </div>
    </section>
  );
}
