import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from 'lucide-react';
import { CaseStudyMediaItem } from '../../types/portfolio';
import { LightboxModal } from './LightboxModal';
import { useLanguage } from '../../context/LanguageContext';

interface MediaGalleryProps {
  items: CaseStudyMediaItem[];
  panoramicItem?: CaseStudyMediaItem;
  caption?: string;
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({
  items,
  panoramicItem,
  caption,
}) => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // If panoramicItem is provided, we can present a rich horizontal track viewer with drag/scroll
  const activeItems = items.length > 0 ? items : panoramicItem ? [panoramicItem] : [];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
      <figure className="my-8 space-y-3">
        <div className="relative rounded-xl overflow-hidden bg-[#0E1014] border border-zinc-200/90 shadow-md">
          {/* Header Bar */}
          <div className="px-4 py-3 border-b border-white/[0.08] flex items-center justify-between text-xs bg-[#12151B]">
            <div className="flex items-center gap-2">
              <span
                className="px-2 py-0.5 font-mono font-semibold text-[11px] rounded uppercase text-white"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                {t('Fluxo Sequencial', 'Sequential Flow')}
              </span>
              <span className="text-zinc-300 font-medium hidden sm:inline">
                {t('Deslize horizontalmente para acompanhar a jornada', 'Scroll horizontally to follow the journey')}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleScrollLeft}
                className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Rolar para a esquerda"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleScrollRight}
                className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Rolar para a direita"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedIndex(0);
                  setLightboxOpen(true);
                }}
                className="ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{t('Ampliar', 'Expand')}</span>
              </button>
            </div>
          </div>

          {/* Panoramic Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto scroll-smooth py-4 px-4 flex items-center gap-4 bg-zinc-950 cursor-grab active:cursor-grabbing scrollbar-thin"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.2) transparent',
            }}
          >
            {panoramicItem ? (
              <div
                className="min-w-[900px] sm:min-w-[1400px] lg:min-w-[1800px] shrink-0 cursor-zoom-in"
                onClick={() => {
                  setSelectedIndex(0);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={panoramicItem.url}
                  alt={panoramicItem.alt}
                  className="w-full h-auto object-contain rounded-lg shadow-xl"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className="min-w-[280px] sm:min-w-[340px] shrink-0 bg-[#161920] rounded-lg p-3 border border-white/5 hover:border-zinc-400/50 transition-all cursor-zoom-in group"
                >
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                    <span className="font-mono font-semibold" style={{ color: 'var(--color-accent)' }}>
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-auto max-h-[380px] object-contain rounded transition-transform group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {item.caption && (
                    <p className="mt-2 text-[11px] text-zinc-400 leading-snug line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Bottom helper text */}
          <div className="px-4 py-2 bg-[#12151B] border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span>{t('Sequência do onboarding: boas-vindas → perfil → condicionamento → metas → rotina → plano', 'Onboarding sequence: welcome → profile → fitness → goals → routine → training plan')}</span>
              <ArrowRight className="w-3 h-3 text-zinc-500" />
            </span>
            <span className="hidden sm:inline font-mono text-zinc-400">
              {t('Arraste para rolar', 'Drag to scroll')}
            </span>
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
        items={activeItems}
        initialIndex={selectedIndex}
      />
    </>
  );
};
