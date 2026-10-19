import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site';
import { Linkedin, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#08090C] border-t border-white/[0.08] text-zinc-400">
      {/* Dynamic Network Pattern Final CTA — Connection with LinkedIn */}
      <section className="relative w-full overflow-hidden bg-[#0A0C0F] py-24 sm:py-32 lg:py-36 flex flex-col items-center justify-center text-center px-6">
        {/* Subtle, Sophisticated Abstract Network Pattern (SVG) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {/* Radial Warm Glow centered on the action */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(225, 91, 56, 0.16) 0%, rgba(10, 12, 15, 0.6) 65%, #0A0C0F 100%)',
            }}
          />

          {/* Lightweight Network Geometry Pattern */}
          <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="connections-mesh"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                {/* Network connection lines */}
                <path
                  d="M 0 40 L 80 40 M 40 0 L 40 80 M 0 0 L 80 80 M 0 80 L 80 0"
                  stroke="rgba(255, 255, 255, 0.035)"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Structural nodes */}
                <circle cx="40" cy="40" r="1.5" fill="rgba(255, 255, 255, 0.25)" />
                <circle cx="0" cy="0" r="1.5" fill="rgba(255, 255, 255, 0.15)" />
                <circle cx="80" cy="0" r="1.5" fill="rgba(255, 255, 255, 0.15)" />
                <circle cx="0" cy="80" r="1.5" fill="rgba(255, 255, 255, 0.15)" />
                <circle cx="80" cy="80" r="1.5" fill="rgba(255, 255, 255, 0.15)" />

                {/* Accent terracotta nodes */}
                <circle cx="40" cy="0" r="2" fill="var(--color-accent)" fillOpacity="0.45" />
                <circle cx="0" cy="40" r="2" fill="var(--color-accent)" fillOpacity="0.45" />
                <circle cx="80" cy="40" r="2" fill="var(--color-accent)" fillOpacity="0.45" />
                <circle cx="40" cy="80" r="2" fill="var(--color-accent)" fillOpacity="0.45" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#connections-mesh)" />
          </svg>

          {/* Top and Bottom Feather Scrims */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0D0F12] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#08090C] to-transparent" />
        </div>

        {/* Central Content: Only Title + LinkedIn Button */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 sm:mb-10 text-balance">
            {siteConfig.finalCta.title[language]}
          </h2>

          {/* Prominent LinkedIn CTA Button */}
          <a
            href={siteConfig.contacts.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white transition-all shadow-xl hover:shadow-2xl focus-ring-accent min-h-[48px] cursor-pointer group"
            style={{
              backgroundColor: 'var(--color-accent)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
          >
            {/* Recognizable LinkedIn Icon */}
            <div className="p-1 rounded-sm bg-white/15 text-white group-hover:bg-white/25 transition-colors">
              <Linkedin className="w-5 h-5 fill-white" />
            </div>
            <span>{siteConfig.finalCta.linkedinAction[language]}</span>
          </a>
        </div>
      </section>

      {/* Quiet, Minimalist Footer Navigation & Secondary Channels */}
      <div className="border-t border-white/[0.06] bg-[#07080B]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-zinc-400">
          {/* Identity & Role */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-200">{siteConfig.name}</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-400">{siteConfig.role[language]}</span>
          </div>

          {/* Secondary quiet channels without competing */}
          <div className="flex items-center gap-5 text-xs">
            <a
              href={siteConfig.contacts.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${siteConfig.contacts.email.address}`}
              className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-400" />
              <span>E-mail</span>
            </a>
          </div>

          {/* Nav & Copyright */}
          <div className="flex items-center gap-5">
            <Link to="/sobre" className="hover:text-zinc-200 transition-colors">
              {siteConfig.nav.about[language]}
            </Link>
            <Link to="/contato" className="hover:text-zinc-200 transition-colors">
              {siteConfig.nav.contact[language]}
            </Link>
            <span>© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
