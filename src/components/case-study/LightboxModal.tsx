import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { CaseStudyMediaItem } from '../../types/portfolio';
import { useLanguage } from '../../context/LanguageContext';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CaseStudyMediaItem[];
  initialIndex?: number;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  initialIndex = 0,
}) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }, [initialIndex, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, items.length, onClose]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];
  const hasMultiple = items.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    setIsZoomed(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    setIsZoomed(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.alt || 'Visualizador de imagem'}
      className="fixed inset-0 z-[100] flex flex-col bg-[#07080A]/95 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="w-full h-16 px-4 sm:px-6 flex items-center justify-between border-b border-white/[0.08] bg-[#0D0F12]/80 z-20 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Info & Label */}
        <div className="flex items-center gap-3 min-w-0">
          {currentItem.label && (
            <span
              className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md uppercase tracking-wider text-white"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              {currentItem.label}
            </span>
          )}
          <span className="text-xs sm:text-sm text-zinc-300 truncate max-w-md font-medium">
            {currentItem.caption || currentItem.alt}
          </span>
          {hasMultiple && (
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline-block">
              ({currentIndex + 1} / {items.length})
            </span>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Zoom Toggle */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            title={isZoomed ? t('Ajustar à tela', 'Fit to screen') : t('Tamanho real', 'Actual size')}
            aria-label={isZoomed ? 'Ajustar à tela' : 'Tamanho real'}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            title={t('Fechar (Esc)', 'Close (Esc)')}
            aria-label="Fechar visualizador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className="relative flex-1 w-full overflow-auto flex items-center justify-center p-2 sm:p-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Previous Button */}
        {hasMultiple && (
          <button
            onClick={handlePrev}
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#14171C]/90 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all border border-white/10 shadow-xl cursor-pointer"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {hasMultiple && (
          <button
            onClick={handleNext}
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#14171C]/90 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all border border-white/10 shadow-xl cursor-pointer"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image Container */}
        <div
          className={`transition-all duration-200 flex flex-col items-center justify-center ${
            isZoomed
              ? 'min-h-full py-8 max-w-none w-auto'
              : 'max-w-7xl max-h-[calc(100vh-8rem)] w-auto h-auto'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentItem.url}
            alt={currentItem.alt}
            className={`rounded-lg shadow-2xl object-contain transition-all select-none ${
              isZoomed
                ? 'w-auto max-w-[95vw] h-auto cursor-zoom-out'
                : 'max-h-[calc(100vh-9rem)] max-w-full w-auto cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
            referrerPolicy="no-referrer"
          />

          {/* Caption bar at the bottom */}
          {currentItem.caption && (
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 text-center max-w-2xl px-4 py-1.5 rounded-lg bg-black/40 backdrop-blur-xs">
              {currentItem.caption}
            </p>
          )}
        </div>
      </div>

      {/* Multiple Images Dots / Thumbnails Bottom Bar */}
      {hasMultiple && (
        <div
          className="h-12 w-full flex items-center justify-center gap-2 border-t border-white/[0.08] bg-[#0D0F12]/80 shrink-0 z-20 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          {items.map((it, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsZoomed(false);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              style={{
                backgroundColor: idx === currentIndex ? 'var(--color-accent)' : undefined,
              }}
              aria-label={`Ir para imagem ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
