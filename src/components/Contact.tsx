'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, PhoneCall, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import Magnetic from './Magnetic';
import Tilt from './Tilt';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', portfolio: '', program: 'Bootcamp' });
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
      const waMsg = `Hello DesignPro, my name is ${formState.name}. My email is ${formState.email}. My portfolio link is ${formState.portfolio}. I am interested in enrolling in the ${formState.program} program.`;
      const waUrl = `https://wa.me/923146773542?text=${encodeURIComponent(waMsg)}`;
      
      // Instantly open WhatsApp chat
      window.open(waUrl, '_blank');
      
      setFormState({ name: '', email: '', portfolio: '', program: 'Bootcamp' });
    }, 2000);
  };

  return (
    <section id="contact" className="relative w-full py-12 md:py-16 px-4 md:px-8 xl:px-16 bg-[#000000] overflow-hidden">
      
      {/* Massive Cinematic End Aurora Gradients */}
      <div className="absolute top-[10%] left-[-20%] w-[65vw] h-[65vw] rounded-full bg-cyber-violet/8 blur-[180px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-electric-blue/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-24 md:gap-36 relative z-10">
        
        {/* ================= PHASE 1: READY TO LAUNCH? ENROLLMENT FORM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 w-fit">
              <Calendar className="w-3.5 h-3.5 text-electric-blue animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-mono font-medium">
                ENROLLMENT CHANNELS
              </span>
            </div>

            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-white uppercase">
              READY <br />
              TO LAUNCH <br />
              <span className="bg-gradient-to-r from-electric-blue to-white bg-clip-text text-transparent">CAREER?</span>
            </h2>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-sm">
              Apply today to secure a seat in our upcoming program. Our enrollment coordinators will review your design background and schedule a brief alignment call.
            </p>

            <div className="flex flex-col gap-4 mt-4 font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-electric-blue" />
                <span>Direct review of your current portfolio drafts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-electric-blue" />
                <span>Personalized timeline and curriculum placement</span>
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
                        Configure Your Application
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Full Name</label>
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
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Your Email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-electric-blue/40 focus:bg-white/[0.04] text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 font-sans"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Portfolio / LinkedIn Link</label>
                          <input
                            type="url"
                            name="portfolio"
                            required
                            value={formState.portfolio}
                            onChange={handleInputChange}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-electric-blue/40 focus:bg-white/[0.04] text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 font-sans"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Preferred Program</label>
                          <select
                            name="program"
                            value={formState.program}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.02] border border-white/5 focus:border-electric-blue/40 focus:bg-white/[0.04] text-sm text-zinc-300 outline-none transition-all duration-300 font-sans"
                          >
                            <option value="Bootcamp" className="bg-neutral-950">Cohort Bootcamp ($2,400)</option>
                            <option value="Mentorship" className="bg-neutral-950">1-on-1 Mentorship ($4,800)</option>
                            <option value="SelfPaced" className="bg-neutral-950">Self-Paced Curriculum ($450)</option>
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
                            Syncing with DesignPro Admission API...
                          </span>
                        ) : (
                          <span className="relative z-10 flex items-center gap-1.5">
                            Submit Application
                            <Send className="w-3.5 h-3.5" />
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
                        Application Locked!
                      </h3>
                      <p className="text-sm text-zinc-400 max-w-sm mt-3 leading-relaxed">
                        Your application profile has been registered. An admissions mentor is reviewing your information and will email your link confirmation in under 4 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 font-mono text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest underline transition-colors"
                      >
                        Reset Application Form
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Tilt>
          </div>
        </div>

        {/* ================= PHASE 2: FINAL CINEMATIC ENDING ================= */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

        <div className="flex flex-col items-center justify-center text-center gap-10 max-w-4xl mx-auto">
          
          <div className="flex flex-col gap-6 items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-400">
              <Sparkles className="w-3 h-3 text-cyber-violet animate-pulse" />
              GLOBAL CREATIVE FUTURE
            </div>
            
            {/* Massive headline */}
            <h1 className="font-display font-black text-5xl md:text-7xl xl:text-8xl tracking-tight leading-[0.9] text-white uppercase">
              LET'S BUILD <br />
              SOMETHING WORTH <br />
              <span className="bg-gradient-to-r from-electric-blue via-white to-cyber-violet bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(100,206,251,0.15)]">
                DESIGNING.
              </span>
            </h1>
          </div>

          <p className="text-zinc-500 font-sans text-sm md:text-base max-w-lg leading-relaxed">
            Partner with active industry design leaders to fast-track your career path. Start your application today or chat directly with our coordinators.
          </p>

          {/* Interactive magnetic end links */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-4 w-full justify-center">
            
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-black overflow-hidden shadow-[0_4px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_40px_rgba(100,206,251,0.4)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply for Admission
                  <PhoneCall className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10" />
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href="https://wa.me/923146773542?text=Hello%20DesignPro,%20I%27d%20like%20to%20ask%20a%20few%20questions%20about%20your%20upcoming%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <span>WhatsApp Us</span>
                <MessageSquare className="w-4 h-4 text-electric-blue animate-pulse" />
              </a>
            </Magnetic>

          </div>
        </div>
      </div>
    </section>
  );
}
