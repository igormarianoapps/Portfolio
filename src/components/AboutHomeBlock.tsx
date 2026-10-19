import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site';
import { ArrowRight } from 'lucide-react';

export const AboutHomeBlock: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="w-full py-16 lg:py-20 border-t border-white/[0.07] bg-[#0E1014]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-[#14171E] border border-white/[0.08] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Portrait Photo Crop */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 shrink-0 rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-900 shadow-md">
            <img
              src={siteConfig.portraitImage}
              alt={siteConfig.name}
              className="w-full h-full object-cover object-[76%_25%]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Positioning Statement & Prominent CTA */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start justify-between">
            <span
              className="text-xs font-mono font-semibold tracking-wider uppercase mb-3 block"
              style={{ color: 'var(--color-accent)' }}
            >
              {t('Posicionamento', 'Positioning')}
            </span>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug mb-6 text-balance">
              "{siteConfig.aboutStatement[language]}"
            </blockquote>

            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white transition-all focus-ring-accent"
              style={{ backgroundColor: 'var(--color-accent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
            >
              <span>{t('Conheça mais sobre mim', 'Learn more about me')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
