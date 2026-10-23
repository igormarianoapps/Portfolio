import React, { useState } from 'react';
import { CaseStudyImageSpec } from '../types/portfolio';
import { ImageLightboxModal } from './ImageLightboxModal';
import {
  Maximize2,
  Lock,
  Smartphone,
  Monitor,
  Columns,
  Layers,
  ArrowRight,
  BarChart3,
  MousePointer2,
} from 'lucide-react';

interface CaseStudyVisualProps {
  imageSpec: CaseStudyImageSpec;
}

export const CaseStudyVisual: React.FC<CaseStudyVisualProps> = ({ imageSpec }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState<{
    url: string;
    alt: string;
    title?: string;
    caption?: string;
  }>({
    url: imageSpec.url,
    alt: imageSpec.alt,
    title: imageSpec.frameTitle || imageSpec.alt,
    caption: imageSpec.caption,
  });

  // State for wireframe comparison view switcher
  const [wireframeView, setWireframeView] = useState<'both' | 'desktop' | 'mobile'>('both');

  const openLightbox = (url: string, alt: string, title?: string, caption?: string) => {
    setActiveModalImage({ url, alt, title, caption });
    setLightboxOpen(true);
  };

  const presentation = imageSpec.presentation || 'standard';

  // 1. Scrollable Page Presentation (for long vertical web landing pages, e.g. site-novo.png, site-antigo.png)
  if (presentation === 'scrollable-page') {
    return (
      <figure className="my-8 space-y-2.5">
        <div className="rounded-xl overflow-hidden border border-zinc-200/90 shadow-md bg-[#0D0F12]">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#171920] border-b border-white/[0.08] text-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>

            {/* URL Bar */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F1116] border border-white/[0.08] text-zinc-300 font-mono text-[11px] max-w-xs sm:max-w-md w-full justify-center truncate">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">{imageSpec.frameTitle || 'https://corridaperfeita.com'}</span>
            </div>

            {/* Expand Action */}
            <button
              onClick={() =>
                openLightbox(
                  imageSpec.url,
                  imageSpec.alt,
                  imageSpec.frameTitle || 'Página Completa',
                  imageSpec.caption
                )
              }
              className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] transition-colors cursor-pointer"
              title="Ver em tamanho real"
            >
              <Maximize2 className="w-3 h-3" />
              <span className="hidden sm:inline">Ampliar</span>
            </button>
          </div>

          {/* Scrollable Viewport Container */}
          <div className="relative group bg-[#111318]">
            <div
              className="overflow-y-auto overflow-x-hidden scroll-smooth relative"
              style={{ maxHeight: imageSpec.viewportHeight || '520px' }}
              tabIndex={0}
              aria-label="Área de rolagem da página completa"
            >
              <img
                src={imageSpec.url}
                alt={imageSpec.alt}
                className="w-full h-auto block select-none cursor-zoom-in"
                onClick={() =>
                  openLightbox(
                    imageSpec.url,
                    imageSpec.alt,
                    imageSpec.frameTitle || 'Página Completa',
                    imageSpec.caption
                  )
                }
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Scroll Indicator Badge Overlay */}
            <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-white/10 text-white text-[11px] shadow-lg group-hover:opacity-100 opacity-80 transition-opacity">
              <MousePointer2 className="w-3 h-3 text-zinc-400 animate-bounce" />
              <span>Página completa · Role para navegar</span>
            </div>
          </div>
        </div>

        {imageSpec.caption && (
          <figcaption className="text-xs text-zinc-500 text-center leading-relaxed">
            {imageSpec.caption}
          </figcaption>
        )}

        <ImageLightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          imageUrl={activeModalImage.url}
          imageAlt={activeModalImage.alt}
          title={activeModalImage.title}
          caption={activeModalImage.caption}
        />
      </figure>
    );
  }

  // 2. Wireframe Comparison (Desktop & Mobile Wireframes, e.g. wireframe-desktop.png & wireframe-mobile.png)
  if (presentation === 'wireframe-comparison' && imageSpec.secondaryImage) {
    return (
      <figure className="my-8 space-y-3">
        {/* View Switcher Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-zinc-100 rounded-xl border border-zinc-200">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-wider">
            <Layers className="w-4 h-4 text-zinc-700" />
            <span>Wireframes de Arquitetura & Fluxo</span>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-zinc-200 text-xs self-start sm:self-auto">
            <button
              onClick={() => setWireframeView('both')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                wireframeView === 'both'
                  ? 'bg-zinc-900 text-white font-medium shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lado a lado</span>
            </button>
            <button
              onClick={() => setWireframeView('desktop')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                wireframeView === 'desktop'
                  ? 'bg-zinc-900 text-white font-medium shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setWireframeView('mobile')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                wireframeView === 'mobile'
                  ? 'bg-zinc-900 text-white font-medium shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>
        </div>

        {/* Comparison Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* Desktop Wireframe Column */}
          {(wireframeView === 'both' || wireframeView === 'desktop') && (
            <div
              className={`rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-[#0D0F12] ${
                wireframeView === 'both' ? 'md:col-span-8' : 'md:col-span-12'
              }`}
            >
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#171920] border-b border-white/[0.08] text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Monitor className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="font-semibold text-white">Wireframe Desktop (1440px)</span>
                </div>
                <button
                  onClick={() =>
                    openLightbox(
                      imageSpec.url,
                      imageSpec.alt,
                      'Wireframe Desktop',
                      imageSpec.caption
                    )
                  }
                  className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-white/[0.05] hover:bg-white/[0.1] transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Ampliar</span>
                </button>
              </div>

              <div
                className="overflow-y-auto relative scroll-smooth bg-[#121419]"
                style={{ maxHeight: '520px' }}
              >
                <img
                  src={imageSpec.url}
                  alt={imageSpec.alt}
                  className="w-full h-auto block select-none cursor-zoom-in"
                  onClick={() =>
                    openLightbox(
                      imageSpec.url,
                      imageSpec.alt,
                      'Wireframe Desktop',
                      imageSpec.caption
                    )
                  }
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {/* Mobile Wireframe Column */}
          {(wireframeView === 'both' || wireframeView === 'mobile') && (
            <div
              className={`rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-[#0D0F12] ${
                wireframeView === 'both'
                  ? 'md:col-span-4'
                  : 'md:col-span-12 max-w-sm mx-auto w-full'
              }`}
            >
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#171920] border-b border-white/[0.08] text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="font-semibold text-white">Wireframe Mobile (375px)</span>
                </div>
                <button
                  onClick={() =>
                    openLightbox(
                      imageSpec.secondaryImage!.url,
                      imageSpec.secondaryImage!.alt,
                      'Wireframe Mobile',
                      imageSpec.secondaryImage!.caption
                    )
                  }
                  className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-white/[0.05] hover:bg-white/[0.1] transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Ampliar</span>
                </button>
              </div>

              <div
                className="overflow-y-auto relative scroll-smooth bg-[#121419] p-4 flex flex-col items-center"
                style={{ maxHeight: '520px' }}
              >
                <div className="w-full flex justify-center py-2">
                  <img
                    src={imageSpec.secondaryImage.url}
                    alt={imageSpec.secondaryImage.alt}
                    style={{
                      width: '100%',
                      maxWidth: '180px',
                      height: 'auto',
                      aspectRatio: '144 / 2048',
                      objectFit: 'contain',
                    }}
                    className="block select-none cursor-zoom-in rounded-lg shadow-md border border-white/10 mx-auto"
                    onClick={() =>
                      openLightbox(
                        imageSpec.secondaryImage!.url,
                        imageSpec.secondaryImage!.alt,
                        'Wireframe Mobile',
                        imageSpec.secondaryImage!.caption
                      )
                    }
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {imageSpec.caption && (
          <figcaption className="text-xs text-zinc-500 text-center leading-relaxed">
            {imageSpec.caption}
          </figcaption>
        )}

        <ImageLightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          imageUrl={activeModalImage.url}
          imageAlt={activeModalImage.alt}
          title={activeModalImage.title}
          caption={activeModalImage.caption}
        />
      </figure>
    );
  }

  // 3. Panoramic Flow Presentation (for wide multi-step journeys, e.g. onboarding.jpg 2048x728)
  if (presentation === 'panoramic') {
    return (
      <figure className="my-8 space-y-2.5">
        <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-[#0E1015]">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#171920] border-b border-white/[0.08] text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
              <span className="font-semibold text-white">
                {imageSpec.frameTitle || 'Jornada Guiada de Onboarding (Sequência Completa)'}
              </span>
            </div>

            <button
              onClick={() =>
                openLightbox(
                  imageSpec.url,
                  imageSpec.alt,
                  imageSpec.frameTitle || 'Fluxo de Onboarding',
                  imageSpec.caption
                )
              }
              className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3 h-3" />
              <span>Ampliar fluxo</span>
            </button>
          </div>

          {/* Panoramic Scrollable Viewport with Natural Aspect Ratio */}
          <div className="relative group p-4 sm:p-6 bg-gradient-to-b from-[#121419] to-[#0A0B0E] flex items-center justify-center">
            <div className="w-full overflow-x-auto scroll-smooth pb-2">
              <img
                src={imageSpec.url}
                alt={imageSpec.alt}
                className="w-full min-w-[700px] sm:min-w-full h-auto max-h-[460px] object-contain mx-auto select-none rounded-lg shadow-md cursor-zoom-in"
                onClick={() =>
                  openLightbox(
                    imageSpec.url,
                    imageSpec.alt,
                    imageSpec.frameTitle || 'Fluxo de Onboarding',
                    imageSpec.caption
                  )
                }
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="sm:hidden pointer-events-none absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-black/80 text-[10px] text-zinc-300 border border-white/10">
              Deslize para o lado ↔
            </div>
          </div>
        </div>

        {imageSpec.caption && (
          <figcaption className="text-xs text-zinc-500 text-center leading-relaxed">
            {imageSpec.caption}
          </figcaption>
        )}

        <ImageLightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          imageUrl={activeModalImage.url}
          imageAlt={activeModalImage.alt}
          title={activeModalImage.title}
          caption={activeModalImage.caption}
        />
      </figure>
    );
  }

  // 4. Dual Artifact Presentation (e.g. site-antigo.png with analytics-mobile.jpg)
  if (presentation === 'dual-artifact' && imageSpec.secondaryImage) {
    return (
      <figure className="my-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Main Artifact: Scrollable Old Site (7 cols) */}
          <div className="md:col-span-7 rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-[#0D0F12] flex flex-col">
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#171920] border-b border-white/[0.08] text-xs select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-500 inline-block" />
              </div>
              <span className="font-mono text-[11px] text-zinc-400 truncate">
                {imageSpec.frameTitle || 'site-anterior.corridaperfeita.com'}
              </span>
              <button
                onClick={() =>
                  openLightbox(
                    imageSpec.url,
                    imageSpec.alt,
                    imageSpec.frameTitle || 'Site Anterior',
                    imageSpec.caption
                  )
                }
                className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                title="Ampliar"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div
              className="overflow-y-auto relative scroll-smooth flex-1 bg-[#121419]"
              style={{ maxHeight: '460px' }}
            >
              <img
                src={imageSpec.url}
                alt={imageSpec.alt}
                className="w-full h-auto block select-none cursor-zoom-in"
                onClick={() =>
                  openLightbox(
                    imageSpec.url,
                    imageSpec.alt,
                    imageSpec.frameTitle || 'Site Anterior',
                    imageSpec.caption
                  )
                }
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-2 bg-[#171920] border-t border-white/[0.08] text-[11px] text-zinc-400 text-center">
              Página anterior · Role para analisar a hierarquia legada
            </div>
          </div>

          {/* Secondary Artifact: Analytics Telemetry (5 cols) */}
          <div className="md:col-span-5 rounded-xl border border-zinc-200 shadow-sm bg-white p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-zinc-700" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                    {imageSpec.secondaryImage.title || 'Diagnóstico de Tráfego'}
                  </span>
                </div>
                <button
                  onClick={() =>
                    openLightbox(
                      imageSpec.secondaryImage!.url,
                      imageSpec.secondaryImage!.alt,
                      imageSpec.secondaryImage!.title || 'Dados de Tráfego Analytics',
                      imageSpec.secondaryImage!.caption
                    )
                  }
                  className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
                  title="Ampliar dados"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div
                className="rounded-lg overflow-hidden border border-zinc-100 bg-zinc-50 p-2 flex items-center justify-center cursor-zoom-in"
                onClick={() =>
                  openLightbox(
                    imageSpec.secondaryImage!.url,
                    imageSpec.secondaryImage!.alt,
                    imageSpec.secondaryImage!.title || 'Dados de Tráfego Analytics',
                    imageSpec.secondaryImage!.caption
                  )
                }
              >
                <img
                  src={imageSpec.secondaryImage.url}
                  alt={imageSpec.secondaryImage.alt}
                  className="max-h-[220px] w-auto object-contain rounded"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {imageSpec.secondaryImage.caption && (
                <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                  {imageSpec.secondaryImage.caption}
                </p>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
              Insumo de pesquisa · Google Analytics
            </div>
          </div>
        </div>

        {imageSpec.caption && (
          <figcaption className="text-xs text-zinc-500 text-center leading-relaxed">
            {imageSpec.caption}
          </figcaption>
        )}

        <ImageLightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          imageUrl={activeModalImage.url}
          imageAlt={activeModalImage.alt}
          title={activeModalImage.title}
          caption={activeModalImage.caption}
        />
      </figure>
    );
  }

  // 5. Contain / App Showcase Presentation (for app screens & research matrices, preserving full aspect ratio)
  if (presentation === 'contain') {
    const isScrollable = imageSpec.scrollable;

    return (
      <figure className="my-8 space-y-2.5">
        <div className="rounded-xl overflow-hidden border border-zinc-200/90 shadow-sm bg-gradient-to-b from-[#14171E] to-[#0D0F13] p-3 sm:p-5">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.08] text-xs text-zinc-300">
            <span className="font-semibold text-white truncate">
              {imageSpec.frameTitle || imageSpec.alt}
            </span>
            <button
              onClick={() =>
                openLightbox(
                  imageSpec.url,
                  imageSpec.alt,
                  imageSpec.frameTitle || imageSpec.alt,
                  imageSpec.caption
                )
              }
              className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-white/[0.05] hover:bg-white/[0.1] transition-colors cursor-pointer shrink-0 ml-2"
            >
              <Maximize2 className="w-3 h-3" />
              <span>Ampliar</span>
            </button>
          </div>

          {isScrollable ? (
            <div className="relative group rounded-lg overflow-hidden border border-white/5 bg-[#101217]">
              <div
                className="overflow-y-auto relative scroll-smooth cursor-zoom-in"
                style={{ maxHeight: imageSpec.viewportHeight || '520px' }}
                tabIndex={0}
                aria-label="Área de rolagem da tela completa"
              >
                <img
                  src={imageSpec.url}
                  alt={imageSpec.alt}
                  className="w-full h-auto block select-none"
                  onClick={() =>
                    openLightbox(
                      imageSpec.url,
                      imageSpec.alt,
                      imageSpec.frameTitle || imageSpec.alt,
                      imageSpec.caption
                    )
                  }
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-white/10 text-white text-[11px] shadow-lg group-hover:opacity-100 opacity-80 transition-opacity">
                <MousePointer2 className="w-3 h-3 text-zinc-400 animate-bounce" />
                <span>Role para navegar · Clique para ampliar</span>
              </div>
            </div>
          ) : (
            <div
              className="flex items-center justify-center cursor-zoom-in py-2"
              onClick={() =>
                openLightbox(
                  imageSpec.url,
                  imageSpec.alt,
                  imageSpec.frameTitle || imageSpec.alt,
                  imageSpec.caption
                )
              }
            >
              <img
                src={imageSpec.url}
                alt={imageSpec.alt}
                className="max-h-[480px] w-auto max-w-full object-contain rounded-lg shadow-lg select-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </div>

        {imageSpec.caption && (
          <figcaption className="text-xs text-zinc-500 text-center leading-relaxed">
            {imageSpec.caption}
          </figcaption>
        )}

        <ImageLightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          imageUrl={activeModalImage.url}
          imageAlt={activeModalImage.alt}
          title={activeModalImage.title}
          caption={activeModalImage.caption}
        />
      </figure>
    );
  }

  // 6. Default / Standard Presentation (graceful fallback)
  return (
    <figure className="my-6 space-y-2">
      <div
        className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-950 aspect-16/9 relative group cursor-zoom-in"
        onClick={() =>
          openLightbox(
            imageSpec.url,
            imageSpec.alt,
            imageSpec.alt,
            imageSpec.caption
          )
        }
      >
        <img
          src={imageSpec.url}
          alt={imageSpec.alt}
          className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-200"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>
      {imageSpec.caption && (
        <figcaption className="text-xs text-zinc-500 text-center leading-relaxed">
          {imageSpec.caption}
        </figcaption>
      )}

      <ImageLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageUrl={activeModalImage.url}
        imageAlt={activeModalImage.alt}
        title={activeModalImage.title}
        caption={activeModalImage.caption}
      />
    </figure>
  );
};
