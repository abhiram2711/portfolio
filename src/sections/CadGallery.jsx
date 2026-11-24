import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Eye, X, ZoomIn } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { ExplodedViewCanvas } from '../components/3d/ExplodedViewCanvas';
import { cadGalleryData } from '../data/skills';

export const CadGallery = () => {
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  return (
    <Section id="cad">
      <SectionHeading
        tag="CAD &amp; Fabrication"
        title="SolidWorks 3D Modeling &amp; Rapid Prototyping"
        subtitle="Parametric component modeling, mechanical drafting, tolerance checks, and 3D printing toolpaths."
      />

      {/* Interactive 3D Exploded View Canvas */}
      <div className="mb-10">
        <ExplodedViewCanvas />
      </div>

      {/* Real CAD Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cadGalleryData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between group">
              <div>
                {/* Image Container with Hover Lightbox trigger */}
                <div
                  onClick={() => setActiveLightboxImage(item)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-navy-950 border border-white/10 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-graphite/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-navy-900/90 text-cyan-accent border border-cyan-accent/40 shadow-glow-sm">
                      <ZoomIn size={20} />
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                {item.tags.map((tag, i) => (
                  <Tag key={i} variant="default" className="text-[10px]">
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxImage && (
          <div
            onClick={() => setActiveLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-navy-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-navy-900 border border-white/10 mb-4">
                <img
                  src={activeLightboxImage.image}
                  alt={activeLightboxImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="font-heading font-bold text-lg text-white">
                {activeLightboxImage.title}
              </h4>
              <p className="text-xs sm:text-sm text-text-muted mt-1 font-mono">
                {activeLightboxImage.description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};