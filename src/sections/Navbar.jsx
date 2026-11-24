import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'CAD & Fabrication', href: '#cad' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-white group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-blue to-cyan-accent flex items-center justify-center text-navy-950 font-black shadow-glow-sm group-hover:scale-105 transition-transform">
            AV
          </div>
          <span className="hidden sm:inline font-mono text-sm tracking-wider text-text-muted group-hover:text-text-primary transition-colors">
            ABHIRAM.VADDI
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase font-mono tracking-wider text-text-muted hover:text-cyan-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: Download Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={Download}
          >
            Download Dossier (PDF)
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-b border-white/10 px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono tracking-wider text-text-muted hover:text-cyan-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Button
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              icon={Download}
              className="w-full"
            >
              Download Dossier (PDF)
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};