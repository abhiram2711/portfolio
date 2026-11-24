import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

export const CertificateViewer = ({ certificates, activeIndex, onClose, onNavigate }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const activeCert = certificates[activeIndex];

  useEffect(() => {
    setZoomLevel(1); // Reset zoom on certificate change
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % certificates.length);
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + certificates.length) % certificates.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, certificates.length, onClose, onNavigate]);

  if (!activeCert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-graphite/95 backdrop-blur-lg">
        {/* Top Controls Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white bg-navy-900/80 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-md">
          <div className="flex flex-col pr-4">
            <span className="font-heading font-bold text-sm sm:text-base text-text-primary truncate max-w-xs sm:max-w-md">
              {activeCert.title}
            </span>
            <span className="text-xs text-text-muted font-mono">
              {activeCert.issuer} &bull; {activeCert.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-text-muted hover:text-white transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-text-muted hover:text-white transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-electric-blue hover:bg-electric-deep text-white transition-colors ml-2"
              title="Close Viewer (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => onNavigate((activeIndex - 1 + certificates.length) % certificates.length)}
          className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-navy-900/80 border border-white/10 text-white hover:bg-cyan-accent/20 hover:border-cyan-accent transition-all active:scale-95"
          title="Previous (Left Arrow)"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => onNavigate((activeIndex + 1) % certificates.length)}
          className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-navy-900/80 border border-white/10 text-white hover:bg-cyan-accent/20 hover:border-cyan-accent transition-all active:scale-95"
          title="Next (Right Arrow)"
        >
          <ChevronRight size={24} />
        </button>

        {/* Certificate Image Canvas */}
        <div className="w-full h-full flex items-center justify-center p-8 overflow-auto">
          <motion.img
            key={activeCert.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: zoomLevel }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={activeCert.image}
            alt={activeCert.title}
            className="max-h-[82vh] max-w-[90vw] object-contain rounded-lg shadow-2xl border border-white/20"
          />
        </div>

        {/* Bottom index pill */}
        <div className="absolute bottom-4 z-20 px-3 py-1 bg-navy-900/80 border border-white/10 rounded-full text-xs font-mono text-cyan-accent">
          {activeIndex + 1} / {certificates.length}
        </div>
      </div>
    </AnimatePresence>
  );
};