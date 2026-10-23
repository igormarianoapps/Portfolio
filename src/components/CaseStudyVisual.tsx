import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { CaseStudyImageSpec } from '../types/portfolio';
import { ImageLightboxModal } from './ImageLightboxModal';
import { useLanguage } from '../context/LanguageContext';

export const CaseStudyVisual: React.FC<{imageSpec: CaseStudyImageSpec}> = ({imageSpec}) => {
 const {t}=useLanguage();
 const [current,setCurrent]=useState<{url:string;alt:string;caption?:string;title?:string}|null>(null);
 const long = imageSpec.presentation === 'scrollable-page';
 const comparison=Boolean(imageSpec.secondaryImage);
 const renderImage=(item:{url:string;alt:string;caption?:string;frameTitle?:string},isLong:boolean)=>{
  const open=()=>setCurrent({url:item.url,alt:item.alt,title:item.frameTitle,caption:item.caption});
  return <div className="min-w-0">
   <button type="button" onClick={open} aria-label={t(`Ampliar imagem: ${item.alt}`,`Expand image: ${item.alt}`)} className="block w-full text-left group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
    <div className={isLong?'relative max-h-[520px] overflow-hidden':'relative'}>
     <img src={item.url} alt={item.alt} loading="lazy" className={`block w-full h-auto object-contain ${!isLong && imageSpec.presentation==='contain'?'max-h-[580px]':''}`}/>
     {isLong && <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F8F9FA] to-transparent pointer-events-none"/>}
    </div>
   </button>
   {isLong && <button type="button" onClick={open} className="mt-2 inline-flex gap-2 items-center text-xs font-semibold text-zinc-700 hover:text-zinc-950 underline underline-offset-4"><Maximize2 className="w-4 h-4"/><span>{t('Ver imagem completa','View full image')}</span></button>}
  </div>;
 };
 return <>
  <figure className="my-8 space-y-3">
   <div className={comparison?'grid grid-cols-1 sm:grid-cols-2 gap-5 items-start':''}>
    {renderImage(imageSpec,long)}
    {imageSpec.secondaryImage && renderImage(imageSpec.secondaryImage,imageSpec.secondaryImage.presentation==='scrollable-page')}
   </div>
   {imageSpec.caption && <figcaption className="text-xs text-zinc-500 leading-relaxed">{imageSpec.caption}</figcaption>}
  </figure>
  <ImageLightboxModal isOpen={current!==null} onClose={()=>setCurrent(null)} imageUrl={current?.url||imageSpec.url} imageAlt={current?.alt||imageSpec.alt} title={current?.title} caption={current?.caption}/>
 </>;
};
