import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Layers, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { Modal } from '../components/ui/Modal';
import { projects } from '../data/projects';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects">
      <SectionHeading
        tag="Engineering Work"
        title="Featured Robotics &amp; Mechatronic Projects"
        subtitle="Hardware-tested platforms combining mechanical design, sensor bus integration, and embedded control loops."
      />

      {/* Projects Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Card className="h-full flex flex-col justify-between group">
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-navy-950 border border-white/10">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <Tag variant={proj.badge.includes('Prize') ? 'award' : 'cyan'}>
                      {proj.badge}
                    </Tag>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-accent transition-colors">
                  {proj.title}
                </h3>
                <div className="font-mono text-xs text-electric-blue mt-0.5 mb-2.5">
                  {proj.subtitle}
                </div>
                <p className="text-xs text-text-muted line-clamp-3 leading-relaxed mb-4">
                  {proj.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.slice(0, 3).map((tag, i) => (
                    <Tag key={i} variant="default" className="text-[10px]">
                      {tag}
                    </Tag>
                  ))}
                  {proj.tags.length > 3 && (
                    <Tag variant="default" className="text-[10px]">
                      +{proj.tags.length - 3}
                    </Tag>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedProject(proj)}
                className="w-full justify-between group-hover:border-cyan-accent/40"
              >
                <span>View Technical Case Study</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Detailed Technical Case Study Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Tag variant={selectedProject.badge.includes('Prize') ? 'award' : 'cyan'}>
              {selectedProject.badge}
            </Tag>
            <Tag variant="default" className="text-text-muted">
              Status: {selectedProject.status}
            </Tag>
            {selectedProject.teamNote && (
              <Tag variant="default" className="text-amber-200">
                {selectedProject.teamNote}
              </Tag>
            )}
          </div>

          <div className="text-sm text-text-muted font-mono mb-4">
            {selectedProject.subtitle}
          </div>

          {/* Photo Gallery Grid inside Modal */}
          {selectedProject.gallery && selectedProject.gallery.length > 0 && (
            <div className={`grid gap-3 mb-6 ${selectedProject.gallery.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              {selectedProject.gallery.map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-white/10 bg-navy-950 aspect-[16/10]">
                  <img src={img} alt={`${selectedProject.title} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-navy-900/60 p-4 rounded-xl border border-white/5">
              <h4 className="font-heading font-bold text-sm text-white mb-2 flex items-center gap-1.5">
                <AlertTriangle size={15} className="text-amber-400" /> Problem Statement
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {selectedProject.problem}
              </p>
            </div>
            <div className="bg-navy-900/60 p-4 rounded-xl border border-white/5">
              <h4 className="font-heading font-bold text-sm text-white mb-2 flex items-center gap-1.5">
                <CheckCircle size={15} className="text-cyan-accent" /> Engineering Approach
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {selectedProject.approach}
              </p>
            </div>
          </div>

          {/* Bill of Materials: Hardware & Software */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-navy-900/80 p-4 rounded-xl border border-white/5">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-cyan-accent mb-3 flex items-center gap-2">
                <Cpu size={14} /> Hardware Infrastructure
              </h4>
              <ul className="space-y-1.5 text-xs font-mono text-text-muted">
                {selectedProject.hardware.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-accent">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-900/80 p-4 rounded-xl border border-white/5">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-electric-blue mb-3 flex items-center gap-2">
                <Layers size={14} /> Firmware &amp; Software Stack
              </h4>
              <ul className="space-y-1.5 text-xs font-mono text-text-muted">
                {selectedProject.software.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-electric-blue">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* My Role */}
          <div className="bg-navy-900/50 p-4 rounded-xl border border-white/5">
            <h4 className="font-heading font-bold text-sm text-white mb-1.5">
              My Engineering Role &amp; Contribution
            </h4>
            <p className="text-xs text-text-muted leading-relaxed">
              {selectedProject.role}
            </p>
          </div>

          {/* Challenges & Solutions */}
          {selectedProject.challenges && selectedProject.challenges.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-sm text-white">
                Technical Challenges &amp; Debugging
              </h4>
              {selectedProject.challenges.map((chal, i) => (
                <div key={i} className="bg-navy-950/70 p-3 rounded-lg border border-white/5 text-xs text-text-muted font-mono leading-relaxed">
                  <span className="text-cyan-accent font-bold">#{i + 1}:</span> {chal}
                </div>
              ))}
            </div>
          )}

          {/* Results Block */}
          <div className="p-3.5 rounded-xl bg-cyan-accent/5 border border-cyan-accent/20 font-mono text-xs text-cyan-accent">
            <strong>Results &amp; Verification:</strong> {selectedProject.results}
          </div>
        </Modal>
      )}
    </Section>
  );
};