import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site';

export const DifferentialPillars: React.FC = () => {
  const { language } = useLanguage();
  const pillars = siteConfig.pillars;

  return (
    <section className="w-full py-10 lg:py-12 border-b border-white/[0.07] bg-[#0E1014]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="flex flex-col justify-between group">
              <div>
                <span
                  className="font-mono text-xs font-semibold tracking-wider block mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {pillar.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 group-hover:text-zinc-200 transition-colors">
                  {pillar.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
