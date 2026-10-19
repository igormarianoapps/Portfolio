import React, { useState } from 'react';
import { Monitor, Smartphone, ZoomIn, Maximize2 } from 'lucide-react';
import { CaseStudyMediaItem } from '../../types/portfolio';
import { LightboxModal } from './LightboxModal';
import { useLanguage } from '../../context/LanguageContext';

interface MediaResponsivePairProps {
  desktop: CaseStudyMediaItem;
  mobile: CaseStudyMediaItem;
  caption?: string;
}

export const MediaResponsivePair: React.FC<MediaResponsivePairProps> = ({
  desktop,
  mobile,
  caption,
}) => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
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
                {t('Wireframes Responsivos', 'Responsive Wireframes')}
              </span>
              <span className="text-zinc-300 font-medium hidden sm:inline">
                {t('Estrutura e hierarquia testadas em desktop e mobile', 'Structure & hierarchy tested across desktop & mobile')}
              </span>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{t('Explorar completos', 'Explore full')}</span>
            </button>
          </div>

          {/* Side-by-side Desktop + Mobile frames */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-6 bg-zinc-950 items-start">
            {/* Desktop Wireframe Frame (8 cols on desktop) */}
            <div className="md:col-span-8 flex flex-col group">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] text-xs">
                <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                  <Monitor className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{desktop.label || 'Wireframe Desktop'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openLightbox(0)}
                  className="text-zinc-400 hover:text-white inline-flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>{t('Ampliar', 'Expand')}</span>
                </button>
              </div>

              {/* Browser mockup frame */}
              <div
                className="rounded-lg overflow-hidden bg-[#161920] border border-white/10 shadow-lg cursor-zoom-in group-hover:border-zinc-400/50 transition-all"
                onClick={() => openLightbox(0)}
              >
                {/* Browser dots */}
                <div className="h-6 px-3 bg-[#1A1E26] border-b border-white/[0.06] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-zinc-600" />
                  <span className="w-2 h-2 rounded-full bg-zinc-600" />
                  <span className="w-2 h-2 rounded-full bg-zinc-600" />
                </div>
                <div className="max-h-[480px] overflow-y-auto bg-black/60">
                  <img
                    src={desktop.url}
                    alt={desktop.alt}
                    className="w-full h-auto object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Wireframe Frame (4 cols on desktop) */}
            <div className="md:col-span-4 flex flex-col group">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] text-xs">
                <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                  <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{mobile.label || 'Wireframe Mobile'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openLightbox(1)}
                  className="text-zinc-400 hover:text-white inline-flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>{t('Ampliar', 'Expand')}</span>
                </button>
              </div>

              {/* Smartphone mockup frame */}
              <div
                className="rounded-2xl overflow-hidden bg-[#161920] border-2 border-white/15 p-1 shadow-lg cursor-zoom-in group-hover:border-zinc-400/50 transition-all max-w-[240px] mx-auto w-full"
                onClick={() => openLightbox(1)}
              >
                <div className="max-h-[480px] overflow-y-auto rounded-xl bg-black/60">
                  <img
                    src={mobile.url}
                    alt={mobile.alt}
                    className="w-full h-auto object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-[#12151B] border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
            <span>{t('Role verticalmente dentro de cada frame ou clique para abrir a visão integral.', 'Scroll vertically inside each frame or click to view full resolution.')}</span>
          </div>
        </div>

        {/* Caption */}
        {caption && (
          <figcaption className="text-xs text-zinc-500 text-center px-4 leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={[desktop, mobile]}
        initialIndex={lightboxIndex}
      />
    </>
  );
};
