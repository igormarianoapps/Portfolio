import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site';

export const SkillsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const skillGroups = siteConfig.skills[language];

  return (
    <section id="competencias" className="w-full py-16 lg:py-20 border-t border-white/[0.07] bg-[#0D0F12]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p
            className="text-xs font-semibold tracking-wider uppercase mb-2 font-mono"
            style={{ color: 'var(--color-accent)' }}
          >
            {t('Competências & Ferramental', 'Core Competencies & Toolkit')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            {t('Domínios de atuação técnica e estratégica', 'Technical and strategic practice areas')}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {t(
              'Práticas consolidadas ao longo de projetos em SaaS B2B, Design Systems e produtos digitais.',
              'Applied practices across B2B SaaS, Design Systems, and customer-facing digital products.'
            )}
          </p>
        </div>

        {/* 4 Balanced Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, idx) => (
            <div
              key={group.id}
              className="rounded-xl p-5 sm:p-6 bg-[#13161C] border border-white/[0.07] hover:border-white/[0.16] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-zinc-400 select-none">›</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
