import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
  title?: string;
  caption?: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
  title,
  caption,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Reset zoom on open
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') setZoomLevel((z) => Math.min(z + 0.25, 3));
      if (e.key === '-' || e.key === '_') setZoomLevel((z) => Math.max(z - 0.25, 0.5));
      if (e.key === '0') setZoomLevel(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md text-white animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={title || imageAlt}
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E1015]/90 shrink-0">
        <div className="max-w-xl truncate">
          <p className="text-sm font-bold text-white tracking-tight truncate">
            {title || imageAlt}
          </p>
          {caption && (
            <p className="text-xs text-zinc-400 truncate mt-0.5">{caption}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <div className="flex items-center rounded-lg bg-zinc-800/80 border border-white/10 p-1 text-xs">
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.5))}
              className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Reduzir zoom (-)"
              aria-label="Reduzir zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 font-mono text-zinc-300 min-w-12 text-center select-none">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 3))}
              className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Aumentar zoom (+)"
              aria-label="Aumentar zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer ml-1 border-l border-white/10 pl-2"
              title="Redefinir escala (100%)"
              aria-label="Redefinir escala"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer ml-2"
            title="Fechar (Esc)"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div
        className="flex-1 overflow-auto p-4 sm:p-8 flex items-start justify-center cursor-default"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className="transition-transform duration-150 ease-out origin-top mx-auto"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className="max-w-full h-auto rounded-lg shadow-2xl border border-white/10 select-none object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="py-2.5 px-6 border-t border-white/10 bg-[#0E1015]/80 text-center text-xs text-zinc-400 select-none shrink-0 flex items-center justify-center gap-4">
        <span>Dica: Use a roda do mouse ou os botões acima para aplicar zoom.</span>
        <span className="hidden sm:inline text-zinc-600">·</span>
        <span className="hidden sm:inline">Pressione ESC para fechar</span>
      </div>
    </div>
  );
};
