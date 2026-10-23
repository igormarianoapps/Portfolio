import React, {useState} from 'react';
import {Maximize2} from 'lucide-react';
import type {CaseStudyMediaItem} from '../../types/portfolio';
import {ImageLightboxModal} from '../ImageLightboxModal';
import {useLanguage} from '../../context/LanguageContext';
export const MediaPreviewTall:React.FC<{item:CaseStudyMediaItem;maxHeight?:number;highlightText?:string}>=({item,maxHeight=520})=>{
 const [open,setOpen]=useState(false);const {t}=useLanguage();
 return <><figure className="my-8 space-y-3">
  <button type="button" onClick={()=>setOpen(true)} aria-label={t('Abrir imagem completa','Open full image')} className="block relative w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600" style={{maxHeight}}>
   <img src={item.url} alt={item.alt} loading="lazy" className="block w-full h-auto object-top"/>
   <span aria-hidden="true" className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F8F9FA] to-transparent"/>
  </button>
  <button type="button" onClick={()=>setOpen(true)} className="text-xs font-semibold text-zinc-700 hover:text-zinc-950 underline underline-offset-4 inline-flex items-center gap-2"><Maximize2 className="w-4 h-4"/>{t('Ver imagem completa','View full image')}</button>
  {item.caption&&<figcaption className="text-xs text-zinc-500 leading-relaxed">{item.caption}</figcaption>}
 </figure><ImageLightboxModal isOpen={open} onClose={()=>setOpen(false)} imageUrl={item.url} imageAlt={item.alt} title={item.title||item.label} caption={item.caption}/></>;
};
