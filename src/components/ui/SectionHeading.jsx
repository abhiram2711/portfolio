import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ tag, title, subtitle, align = 'left' }) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 ${isCenter ? 'text-center mx-auto' : ''}`}
    >
      {tag && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20 uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
          {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-electric-blue to-cyan-accent rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};