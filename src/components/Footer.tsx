import React from 'react';
import { ArrowUp } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    {
      name: "Twitter/X",
      href: "https://twitter.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="relative w-full py-16 px-4 md:px-8 xl:px-16 bg-[#000000] border-t border-white/[0.04] overflow-hidden">
      
      {/* Background glowing circle */}
      <div className="absolute bottom-[-10%] left-[50%] -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-electric-blue/4 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Logo & Slogan Column */}
          <div className="flex flex-col gap-4 text-left max-w-sm">
            <span className="font-display font-black text-2xl tracking-wider text-white uppercase">
              DESIGNPRO<span className="text-electric-blue">.</span>
            </span>
            <p className="text-xs text-zinc-500 leading-relaxed font-mono uppercase tracking-widest mt-1">
              Empowering next-gen product designers. Intensive design cohorts, active industry mentorship, and portfolio placement.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16">
            
            {/* Nav Links Column */}
            <div className="flex flex-col gap-4 text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 font-bold">DIRECTORY</span>
              <div className="flex flex-col gap-2.5 text-xs">
                <a href="/" className="text-zinc-500 hover:text-white transition-colors">Home</a>
                <a href="/#why-us" className="text-zinc-500 hover:text-white transition-colors">About Us</a>
                <a href="/#services" className="text-zinc-500 hover:text-white transition-colors">Courses</a>
              </div>
            </div>

            {/* Utility Links Column */}
            <div className="flex flex-col gap-4 text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 font-bold">RESOURCES</span>
              <div className="flex flex-col gap-2.5 text-xs">
                <a href="/#process" className="text-zinc-500 hover:text-white transition-colors">Journey</a>
                <a href="/#contact" className="text-zinc-500 hover:text-white transition-colors">Enrollment</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>

            {/* Social Icons Column */}
            <div className="flex flex-col gap-4 text-left col-span-2 sm:col-span-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 font-bold">CONNECT</span>
              <div className="flex gap-3">
                {socials.map((soc, idx) => (
                  <Magnetic key={idx} strength={0.25}>
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                      aria-label={`DesignPro Social Channel: ${soc.name}`}
                    >
                      {soc.svg}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="w-full h-[1px] bg-white/[0.05] pt-2" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-2">
          
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
            © 2026 DESIGNPRO INC. COHORT PLACEMENT CODED.
          </span>

          {/* Magnetic scroll to top button */}
          <Magnetic strength={0.3}>
            <button
              onClick={handleScrollTop}
              className="btn-liquid-glass w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </button>
          </Magnetic>

        </div>
      </div>
    </footer>
  );
}
