import React from 'react';

export const Tag = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-navy-800/80 text-text-muted border-white/10',
    accent: 'bg-electric-blue/15 text-electric-blue border-electric-blue/30 font-medium',
    cyan: 'bg-cyan-accent/15 text-cyan-accent border-cyan-accent/30 font-medium',
    award: 'bg-amber-400/15 text-amber-300 border-amber-400/30 font-medium',
    success: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border tracking-wide whitespace-nowrap ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
};