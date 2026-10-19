import React, { useState } from 'react';
import { Maximize2, FileText, ArrowDown } from 'lucide-react';
import { CaseStudyMediaItem } from '../../types/portfolio';
import { LightboxModal } from './LightboxModal';
import { useLanguage } from '../../context/LanguageContext';

interface MediaPreviewTallProps {
  item: CaseStudyMediaItem;
  maxHeight?: number;
  highlightText?: string;
}

export const MediaPreviewTall: React.FC<MediaPreviewTallProps> = ({
  item,
  maxHeight = 520,
  highlightText,
}) => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <figure className="my-8 space-y-2.5">
        <div
          onClick={() => setLightboxOpen(true)}
          className="group relative rounded-xl overflow-hidden bg-[#0E1014] border border-zinc-200/90 shadow-md hover:border-zinc-400/90 transition-all cursor-pointer"
        >
          {/* Label Badge */}
          {item.label && (
            <div className="absolute top-3 left-3 z-20">
              <span
                className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md uppercase tracking-wider text-white shadow-md backdrop-blur-xs"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                {item.label}
              </span>
            </div>
          )}

          {/* Quick Notice Tag */}
          <div className="absolute top-3 right-3 z-20">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-md bg-black/75 text-zinc-300 backdrop-blur-xs shadow-md">
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>{highlightText || t('Visualização integral disponível', 'Full view available')}</span>
            </span>
          </div>

          {/* Tall Image Cropped Viewport with Top Alignment */}
          <div
            className="w-full overflow-hidden flex justify-center bg-zinc-950"
            style={{ maxHeight: `${maxHeight}px` }}
          >
            <img
              src={item.url}
              alt={item.alt}
              className="w-full max-w-4xl h-auto object-top object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom Gradient Scrim & Expansion CTA Bar */}
          <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 bg-gradient-to-t from-[#0E1014] via-[#0E1014]/90 to-transparent flex flex-col sm:flex-row items-center justify-between gap-3 z-10">
            <div className="text-xs text-zinc-400 flex items-center gap-1.5">
              <ArrowDown className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-y-0.5 transition-transform" />
              <span>{t('Prévia da página — documento extenso', 'Page preview — long-form document')}</span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white shadow-lg transition-transform group-hover:scale-105 cursor-pointer"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{t('Ver página inteira em alta resolução', 'View full page in high resolution')}</span>
            </button>
          </div>
        </div>

        {/* Caption */}
        {item.caption && (
          <figcaption className="text-xs text-zinc-500 text-center px-4 leading-relaxed">
            {item.caption}
          </figcaption>
        )}
      </figure>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={[item]}
      />
    </>
  );
};
