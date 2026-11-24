import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Cpu, Compass, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HeroCanvas } from '../components/3d/HeroCanvas';
import { profile } from '../data/profile';

export const Hero = () => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Smooth 3D tilt response to mouse move on the card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.04);
    setRotateY(x * 0.04);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* 3D Wireframe Canvas Background */}
      <HeroCanvas />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Bio & Core Pitch */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-800/80 border border-white/10 text-xs font-mono text-cyan-accent mb-6 w-max">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Mechatronics &amp; Mechanical Design Internships</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-electric-blue via-cyan-accent to-white bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div className="mt-4 flex items-center gap-2 font-mono text-sm sm:text-base text-cyan-accent/90">
            <Compass size={16} />
            <span>{profile.tagline}</span>
          </div>

          <p className="mt-6 text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
            Mechanical Engineering undergraduate at Ramachandra College of Engineering (CGPA 7.43) bridging precision SolidWorks CAD and 3D printing with embedded C/C++ firmware, power-isolated motor drives, and autonomous robotics.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary" size="md">
              Explore Projects
            </Button>
            <Button href="#contact" variant="secondary" size="md" icon={Mail}>
              Get In Touch
            </Button>
          </div>

          {/* Highlights Mini-Row */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 font-mono">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">7.43</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">CGPA (Mech)</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">1st Prize</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">RIC 2026 Winner</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">5+</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">Hardware Systems</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Tilting Profile Card (REAL PHOTO) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center perspective-[1000px]"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] p-4 bg-gradient-to-b from-navy-800/90 to-navy-950/90 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-xl group cursor-pointer"
          >
            {/* Tech Corner Markers */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-accent" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-accent" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-accent" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-accent" />

            {/* Profile Photo Container (Exact Uploaded Photo) */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy-900 border border-white/10">
              <img
                src={profile.photoPath}
                alt="Abhiram Vaddi - Profile Photo"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-80" />
              
              {/* Bottom Tag inside photo */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-heading font-bold text-lg text-white">
                  Abhiram Vaddi
                </div>
                <div className="font-mono text-xs text-cyan-accent flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-ping" />
                  RCEE &bull; B.Tech Mechanical Engineering
                </div>
              </div>
            </div>

            {/* Technical Verification Footer */}
            <div className="mt-3 px-2 flex items-center justify-between font-mono text-[11px] text-text-muted">
              <span>CAD // EMBEDDED // ROBOTICS</span>
              <span className="text-cyan-accent">VERIFIED 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};