import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wrench, Bot, TerminalSquare } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { skillsData } from '../data/skills';

export const Skills = () => {
  const getCategoryIcon = (category) => {
    if (category.includes('Mechanical')) return Wrench;
    if (category.includes('Embedded')) return Cpu;
    if (category.includes('Robotics')) return Bot;
    return TerminalSquare;
  };

  return (
    <Section id="skills">
      <SectionHeading
        tag="Capabilities"
        title="Engineering Skills &amp; Technical Toolkit"
        subtitle="Competencies directly demonstrated in physical prototypes, CAD assemblies, and microcontroller firmware."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((group, idx) => {
          const Icon = getCategoryIcon(group.category);

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                  <div className="p-2 rounded-lg bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/70 border border-white/10 text-xs font-mono text-text-primary hover:border-cyan-accent/40 transition-colors"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-cyan-accent border border-white/5">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};