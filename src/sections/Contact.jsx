import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, Download } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { profile } from '../data/profile';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact">
      <SectionHeading
        tag="Connect"
        title="Get In Touch"
        subtitle="I am actively seeking Mechatronics, Robotics, and Mechanical Design internship opportunities."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Channels */}
        <div className="lg:col-span-7 space-y-6">
          <Card>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Let's Build Reliable Hardware Together
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Whether you are discussing an engineering internship role at AZOCA Technologies, a robotics hardware project, or CAD design, feel free to reach out directly through email, LinkedIn, or GitHub.
            </p>

            <div className="space-y-3 font-mono text-xs">
              {/* Email Row with Copy Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-navy-950/80 border border-white/10 gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-accent/10 text-cyan-accent">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-text-muted">Primary Email</div>
                    <a href={`mailto:${profile.email}`} className="text-white hover:text-cyan-accent transition-colors font-medium text-sm">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-accent transition-colors self-start sm:self-center border border-white/5"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* LinkedIn Row */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950/80 border border-white/10 hover:border-cyan-accent/40 transition-colors group block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-electric-blue/10 text-electric-blue">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-text-muted">Professional Network</div>
                    <div className="text-white group-hover:text-cyan-accent transition-colors font-medium text-sm">
                      linkedin.com/in/abhiram-vaddi
                    </div>
                  </div>
                </div>
                <span className="text-text-muted group-hover:text-cyan-accent transition-colors text-xs">
                  Connect &rarr;
                </span>
              </a>

              {/* GitHub Row */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950/80 border border-white/10 hover:border-cyan-accent/40 transition-colors group block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/10 text-white">
                    <Github size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-text-muted">Code Repositories</div>
                    <div className="text-white group-hover:text-cyan-accent transition-colors font-medium text-sm">
                      github.com/abhiram2711
                    </div>
                  </div>
                </div>
                <span className="text-text-muted group-hover:text-cyan-accent transition-colors text-xs">
                  Inspect Code &rarr;
                </span>
              </a>
            </div>
          </Card>
        </div>

        {/* Right Column: Direct Resume Access & Location */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="bg-gradient-to-br from-navy-900 to-navy-950 border-cyan-accent/20">
            <h4 className="font-heading font-bold text-base text-white mb-2">
              Engineering Dossier (PDF)
            </h4>
            <p className="text-xs text-text-muted mb-5 leading-relaxed">
              Download the standardized multi-page engineering project dossier formatted for recruiters and hiring managers.
            </p>

            <Button
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={Download}
              className="w-full"
            >
              Download Engineering Dossier (PDF)
            </Button>
          </Card>

          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/10 font-mono text-xs text-text-muted space-y-1">
            <div className="text-white font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Location &amp; Availability:
            </div>
            <div>Eluru / Vijayawada, Andhra Pradesh, India</div>
            <div className="text-cyan-accent">Willing to relocate for on-site mechatronics internships.</div>
          </div>
        </div>
      </div>
    </Section>
  );
};