import React, { useState } from 'react';
import { BarChart3, ZoomIn } from 'lucide-react';
import { CaseStudyMediaItem } from '../../types/portfolio';
import { LightboxModal } from './LightboxModal';
import { useLanguage } from '../../context/LanguageContext';

interface MediaGridProps {
  items: CaseStudyMediaItem[];
  caption?: string;
  columns?: 2 | 3;
}

export const MediaGrid: React.FC<MediaGridProps> = ({
  items,
  caption,
  columns = 2,
}) => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <figure className="my-8 space-y-3">
        <div className="rounded-xl overflow-hidden bg-[#0E1014] border border-zinc-200/90 shadow-md">
          {/* Header */}
          <div className="px-4 py-3 bg-[#12151B] border-b border-white/[0.08] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="px-2 py-0.5 font-mono font-semibold text-[11px] rounded uppercase text-white"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                {t('Product Analytics', 'Product Analytics')}
              </span>
              <span className="text-zinc-300 font-medium">
                {t('Evidências quantitativas coletadas no Google Analytics', 'Quantitative evidence gathered via Google Analytics')}
              </span>
            </div>

            <div className="text-zinc-400 text-xs hidden sm:flex items-center gap-1">
              <BarChart3 className="w-3.5 h-3.5 text-zinc-400" />
              <span>{t('Dados reais de diagnóstico', 'Real diagnostic data')}</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4 p-4 sm:p-5 bg-zinc-950`}>
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl bg-[#14171D] border border-white/10 p-3.5 hover:border-zinc-400/50 transition-all group"
              >
                {/* Card Title & Tag */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-white block truncate">
                      {item.label}
                    </span>
                    {item.sublabel && (
                      <span className="text-[11px] text-zinc-400 block truncate">
                        {item.sublabel}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => openLightbox(idx)}
                    className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-3 h-3" />
                    <span>{t('Ampliar', 'Expand')}</span>
                  </button>
                </div>

                {/* Chart Graphic Area */}
                <div
                  className="rounded-lg overflow-hidden bg-black/40 border border-white/5 p-2 flex items-center justify-center min-h-[220px] cursor-zoom-in"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="max-h-[260px] w-auto max-w-full object-contain rounded transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Individual Card Caption */}
                {item.caption && (
                  <p className="mt-2.5 text-[11px] text-zinc-400 leading-snug">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-[#12151B] border-t border-white/[0.08] text-xs text-zinc-400">
            <span>{t('Clique em qualquer gráfico para examinar os eixos e valores em tamanho original.', 'Click any chart to inspect axes and values in original size.')}</span>
          </div>
        </div>

        {/* Global Caption */}
        {caption && (
          <figcaption className="text-xs text-zinc-500 text-center px-4 leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={items}
        initialIndex={lightboxIndex}
      />
    </>
  );
};
