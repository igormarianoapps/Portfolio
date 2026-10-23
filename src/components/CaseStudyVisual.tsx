import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { CaseStudyImageSpec } from '../types/portfolio';
import { ImageLightboxModal } from './ImageLightboxModal';
import { useLanguage } from '../context/LanguageContext';

type ViewImage = {url:string;alt:string;caption?:string;frameTitle?:string;presentation?:string};
const PREVIEW_HEIGHT = 560;
export const CaseStudyVisual: React.FC<{imageSpec: CaseStudyImageSpec; projectSlug?:string}> = ({imageSpec,projectSlug}) => {
  const {t}=useLanguage();
  const [current,setCurrent]=useState<ViewImage|null>(null);
  const [heights,setHeights]=useState<Record<string,boolean>>({});
  const isCorrida=projectSlug==='corrida-perfeita';
  const renderImage=(item:ViewImage)=>{
    const isAnalytics=isCorrida && /analytics-(engajamento|mobile)/.test(item.url);
    const isMobileWireframe=isCorrida && /wireframe-mobile/.test(item.url);
    const explicitlyLong=isCorrida && item.presentation==='scrollable-page';
    const shouldPreview=explicitlyLong || (isCorrida && Boolean(heights[item.url]));
    const open=()=>setCurrent(item);
    const measure=(img:HTMLImageElement)=>{
      if(!isCorrida)return;
      const compute=()=>{
        const imageWidth=Math.min(img.getBoundingClientRect().width,img.naturalWidth || Infinity);
        const renderedHeight=imageWidth * img.naturalHeight / (img.naturalWidth || 1);
        const tall=renderedHeight>PREVIEW_HEIGHT && img.naturalHeight>img.naturalWidth;
        setHeights(old=>old[item.url]===tall?old:{...old,[item.url]:tall});
      };
      compute();
    };
    return <div className="min-w-0">
      <button type="button" onClick={open} aria-label={t(`Ampliar imagem: ${item.alt}`,`Expand image: ${item.alt}`)} className="group relative block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
        <div className="relative mx-auto overflow-hidden" style={{maxHeight:shouldPreview?PREVIEW_HEIGHT:undefined,maxWidth:isCorrida && /analytics-mobile/.test(item.url)?325:isAnalytics?650:isMobileWireframe?320:undefined}}>
          <img src={item.url} alt={item.alt} loading="lazy" decoding="async" onLoad={e=>measure(e.currentTarget)} className="block w-full h-auto object-contain"/>
          {shouldPreview && <>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/25 transition-colors duration-200"/>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/70 to-transparent group-hover:opacity-30 transition-opacity"/>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-zinc-900 text-white px-4 py-2.5 text-xs font-semibold shadow-lg transition-transform group-hover:scale-105">
              <Maximize2 className="h-4 w-4"/>{t('Ver imagem completa','View full image')}
            </span>
          </>}
        </div>
      </button>
    </div>;
  };
  return <>
    <figure className="my-8 space-y-3">
      <div className={imageSpec.secondaryImage?'grid grid-cols-1 sm:grid-cols-2 gap-5 items-start':''}>
        {renderImage(imageSpec)}
        {imageSpec.secondaryImage && renderImage(imageSpec.secondaryImage)}
      </div>
      {imageSpec.caption&&<figcaption className="text-xs text-zinc-500 leading-relaxed">{imageSpec.caption}</figcaption>}
    </figure>
    <ImageLightboxModal isOpen={current!==null} onClose={()=>setCurrent(null)} imageUrl={current?.url||imageSpec.url} imageAlt={current?.alt||imageSpec.alt} title={current?.frameTitle} caption={current?.caption||imageSpec.caption}/>
  </>;
};
