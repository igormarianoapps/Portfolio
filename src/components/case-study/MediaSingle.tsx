import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { CaseStudyMediaItem } from '../../types/portfolio';
import { LightboxModal } from './LightboxModal';
import { useLanguage } from '../../context/LanguageContext';

interface MediaSingleProps {
  item: CaseStudyMediaItem;
  aspectHint?: 'contain' | 'cover' | 'auto';
  framed?: boolean;
}

export const MediaSingle: React.FC<MediaSingleProps> = ({
  item,
  aspectHint = 'auto',
  framed = true,
}) => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <figure className="my-8 space-y-2.5">
        <div
          onClick={() => setLightboxOpen(true)}
          className={`group relative rounded-xl overflow-hidden cursor-zoom-in transition-all duration-300 ${
            framed
              ? 'bg-[#0E1014] border border-zinc-200/80 shadow-md hover:border-zinc-400/80'
              : 'bg-transparent'
          }`}
        >
          {/* Label Badge */}
          {item.label && (
            <div className="absolute top-3 left-3 z-10">
              <span
                className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md uppercase tracking-wider text-white shadow-md backdrop-blur-xs"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                {item.label}
              </span>
            </div>
          )}

          {/* Quick Zoom Indicator */}
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-black/75 text-white backdrop-blur-xs shadow-md">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>{t('Ampliar', 'Expand')}</span>
            </span>
          </div>

          {/* Image */}
          <div className="w-full flex items-center justify-center p-2 sm:p-4">
            <img
              src={item.url}
              alt={item.alt}
              className={`max-w-full h-auto max-h-[580px] rounded-lg transition-transform duration-300 group-hover:scale-[1.01] ${
                aspectHint === 'contain' ? 'object-contain' : 'object-scale-down'
              }`}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
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
