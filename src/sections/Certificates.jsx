import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Maximize2, ShieldCheck } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { CertificateViewer } from '../components/viewers/CertificateViewer';
import { certificates } from '../data/certificates';

export const Certificates = () => {
  const [activeViewerIndex, setActiveViewerIndex] = useState(null);

  return (
    <Section id="certificates">
      <SectionHeading
        tag="Credentials"
        title="Official Certificates &amp; Workshops"
        subtitle="Click any certificate to inspect full-resolution credentials with zoom and keyboard navigation."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
          >
            <Card
              onClick={() => setActiveViewerIndex(idx)}
              className="h-full flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Certificate Preview Frame */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-navy-950 border border-white/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-graphite/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-navy-900/90 text-cyan-accent border border-cyan-accent/30 shadow-glow-sm">
                      <Maximize2 size={18} />
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5">
                    <Tag variant={cert.category === 'Award' ? 'award' : 'cyan'}>
                      {cert.category}
                    </Tag>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-sm text-white line-clamp-2 group-hover:text-cyan-accent transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs text-text-muted mt-1.5 font-mono line-clamp-2">
                  {cert.issuer}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-accent">
                <span>{cert.date}</span>
                <span className="flex items-center gap-1 text-[11px] text-text-muted group-hover:text-cyan-accent">
                  Inspect &rarr;
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Certificate Viewer */}
      {activeViewerIndex !== null && (
        <CertificateViewer
          certificates={certificates}
          activeIndex={activeViewerIndex}
          onClose={() => setActiveViewerIndex(null)}
          onNavigate={(newIdx) => setActiveViewerIndex(newIdx)}
        />
      )}
    </Section>
  );
};