import React, { useState } from 'react';
import { Columns2, ToggleLeft, ZoomIn, ArrowRight } from 'lucide-react';
import { CaseStudyMediaItem } from '../../types/portfolio';
import { LightboxModal } from './LightboxModal';
import { useLanguage } from '../../context/LanguageContext';

interface MediaComparisonProps {
  before: CaseStudyMediaItem;
  after: CaseStudyMediaItem;
  caption?: string;
}

export const MediaComparison: React.FC<MediaComparisonProps> = ({
  before,
  after,
  caption,
}) => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'side-by-side' | 'tabs'>('side-by-side');
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');
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
          {/* Header Controls */}
          <div className="px-4 py-3 bg-[#12151B] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span
                className="px-2 py-0.5 font-mono font-semibold text-[11px] rounded uppercase text-white"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                {t('Comparativo', 'Comparison')}
              </span>
              <span className="text-zinc-300 font-medium">
                {t('Evolução do redesign da página inicial', 'Homepage redesign evolution')}
              </span>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 bg-[#1A1E26] p-0.5 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode('side-by-side')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  viewMode === 'side-by-side'
                    ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Columns2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t('Lado a lado', 'Side-by-side')}</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('tabs')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  viewMode === 'tabs'
                    ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <ToggleLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t('Alternar', 'Toggle')}</span>
              </button>
            </div>
          </div>

          {/* Mode 1: Side by Side */}
          {viewMode === 'side-by-side' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] bg-zinc-950">
              {/* Column 1: Before */}
              <div className="p-4 flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[11px] font-mono font-semibold rounded bg-zinc-800 text-zinc-300 uppercase">
                      {before.label || t('Versão anterior', 'Before')}
                    </span>
                    <span className="text-xs text-zinc-400">{before.sublabel}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openLightbox(0)}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-3 h-3" />
                    <span>{t('Ampliar', 'Expand')}</span>
                  </button>
                </div>

                <div
                  className="rounded-lg overflow-hidden bg-black/60 border border-white/5 max-h-[500px] overflow-y-auto cursor-zoom-in"
                  onClick={() => openLightbox(0)}
                >
                  <img
                    src={before.url}
                    alt={before.alt}
                    className="w-full h-auto object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Column 2: After */}
              <div className="p-4 flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 text-[11px] font-mono font-semibold rounded uppercase text-white shadow-xs"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      {after.label || t('Redesign implementado', 'After')}
                    </span>
                    <span className="text-xs text-zinc-300 font-medium">{after.sublabel}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openLightbox(1)}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded text-white transition-colors cursor-pointer shadow-xs"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    <ZoomIn className="w-3 h-3" />
                    <span>{t('Ampliar', 'Expand')}</span>
                  </button>
                </div>

                <div
                  className="rounded-lg overflow-hidden bg-black/60 border border-white/5 max-h-[500px] overflow-y-auto cursor-zoom-in"
                  onClick={() => openLightbox(1)}
                >
                  <img
                    src={after.url}
                    alt={after.alt}
                    className="w-full h-auto object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Mode 2: Tabs Switcher */
            <div className="p-4 bg-zinc-950">
              <div className="flex items-center justify-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('before')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'before'
                      ? 'bg-zinc-800 text-white shadow-xs'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  {before.label || t('Versão anterior', 'Before')}
                </button>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
                <button
                  type="button"
                  onClick={() => setActiveTab('after')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'after'
                      ? 'text-white shadow-xs'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: activeTab === 'after' ? 'var(--color-accent)' : undefined,
                  }}
                >
                  {after.label || t('Novo redesign', 'After')}
                </button>
              </div>

              <div
                className="max-h-[540px] overflow-y-auto rounded-lg bg-black/50 border border-white/5 p-2 flex justify-center cursor-zoom-in"
                onClick={() => openLightbox(activeTab === 'before' ? 0 : 1)}
              >
                <img
                  src={activeTab === 'before' ? before.url : after.url}
                  alt={activeTab === 'before' ? before.alt : after.alt}
                  className="w-full max-w-2xl h-auto object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {/* Bottom Bar with CTA to view both */}
          <div className="px-4 py-2.5 bg-[#12151B] border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
            <span>{t('Clique em qualquer imagem para abrir em alta resolução com rolagem vertical completa.', 'Click any image to open in high-res with full vertical scrolling.')}</span>
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
        items={[before, after]}
        initialIndex={lightboxIndex}
      />
    </>
  );
};
