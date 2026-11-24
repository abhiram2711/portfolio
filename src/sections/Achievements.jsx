import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { achievements } from '../data/achievements';

export const Achievements = () => {
  // Only display confirmed achievements per Non-Negotiable Rule 1 & Section 0
  const displayAchievements = achievements.filter((a) => a.confirmed);

  return (
    <Section id="achievements">
      <SectionHeading
        tag="Recognition"
        title="Engineering Honors &amp; Awards"
        subtitle="Verifiable competitive accomplishments and innovation challenge prizes."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayAchievements.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="h-full border-amber-400/20 bg-gradient-to-br from-navy-900/90 to-navy-950/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300">
                    <Trophy size={22} />
                  </div>
                  {item.prize && (
                    <Tag variant="award">
                      {item.prize}
                    </Tag>
                  )}
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-1.5">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-accent mb-3">
                  <span>{item.organization}</span>
                </div>

                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-cyan-accent" />
                  {item.date}
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  Verified Credential
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};