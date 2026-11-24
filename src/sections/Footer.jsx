import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-navy-950 py-12 px-6 sm:px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand / Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-cyan-accent flex items-center justify-center text-navy-950 font-black text-sm">
            AV
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-white">
              {profile.name}
            </div>
            <div className="font-mono text-xs text-text-muted">
              Mechanical Engineering &bull; Mechatronics &bull; Robotics
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg hover:text-cyan-accent hover:bg-white/5 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg hover:text-cyan-accent hover:bg-white/5 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send Email"
            className="p-2 rounded-lg hover:text-cyan-accent hover:bg-white/5 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 font-mono text-xs text-text-muted hover:text-cyan-accent transition-colors px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-accent/30"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>

      <div className="max-w-[1240px] mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-xs font-mono text-text-subtle gap-2">
        <div>&copy; {new Date().getFullYear()} Abhiram Vaddi. All project technical architectures validated on hardware.</div>
        <div>Built with React, Vite, Tailwind CSS &amp; React Three Fiber.</div>
      </div>
    </footer>
  );
};