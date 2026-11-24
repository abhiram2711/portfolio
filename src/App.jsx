import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { CadGallery } from './sections/CadGallery';
import { Achievements } from './sections/Achievements';
import { Certificates } from './sections/Certificates';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-graphite text-text-primary overflow-x-hidden selection:bg-electric-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <CadGallery />
        <Achievements />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;