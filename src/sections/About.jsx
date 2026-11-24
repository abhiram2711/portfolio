import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Wrench, ShieldCheck, GraduationCap } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { profile } from '../data/profile';

export const About = () => {
  return (
    <Section id="about">
      <SectionHeading
        tag="Profile Dossier"
        title="About Me &amp; Engineering Philosophy"
        subtitle="Bridging mechanical CAD engineering with embedded firmware and physical mechatronics."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative & Values */}
        <div className="lg:col-span-7 space-y-6">
          <Card>
            <h3 className="font-heading text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Wrench className="text-cyan-accent" size={20} />
              Iterative Electromechanical Problem-Solving
            </h3>
            <p className="text-text-muted leading-relaxed">
              {profile.bio}
            </p>
            <p className="text-text-muted leading-relaxed mt-3">
              My engineering approach is strictly practical: identifying physical electrical and mechanical constraints—such as voltage drop induced by inductive motor surges, sensor signal noise, or mechanism tolerances—and resolving them methodically through CAD simulation, custom 3D printed assemblies, and structured C/C++ firmware.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-accent" />
                <span>SolidWorks 3D Parametric CAD</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-accent" />
                <span>Additive Prototyping (FDM / Cura)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-accent" />
                <span>ESP32 &amp; Arduino C/C++ Firmware</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-accent" />
                <span>Power Rail Isolation &amp; Star Grounding</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Verified Stats & Academic Standings */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="bg-gradient-to-br from-navy-900 to-navy-950 border-cyan-accent/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base">Academic Affiliation</div>
                <div className="font-mono text-xs text-text-muted">Ramachandra College of Engineering (Autonomous)</div>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-4">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-text-muted">Degree</span>
                <span className="text-white font-medium text-right">B.Tech – Mechanical Engg</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-text-muted">Academic Span</span>
                <span className="text-white font-medium">2025 – 2029</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-text-muted">Cumulative GPA</span>
                <span className="text-cyan-accent font-bold">7.43 / 10.00</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-text-muted">Location</span>
                <span className="text-white">Eluru, Andhra Pradesh, India</span>
              </div>
            </div>
          </Card>

          {/* 4 Strict Numerical Stats */}
          <div className="grid grid-cols-2 gap-3 font-mono">
            {profile.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-navy-900/60 border border-white/10 rounded-xl p-4 text-center hover:border-cyan-accent/30 transition-colors"
              >
                <div className="text-2xl font-heading font-bold text-cyan-accent">{stat.value}</div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};