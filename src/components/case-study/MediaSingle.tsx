import React, {useState} from 'react';
import type {CaseStudyMediaItem} from '../../types/portfolio';
import {ImageLightboxModal} from '../ImageLightboxModal';
export const MediaSingle:React.FC<{item:CaseStudyMediaItem;aspectHint?:'contain'|'cover'|'auto';framed?:boolean}>=({item})=>{
 const [open,setOpen]=useState(false);
 return <><figure className="my-8 space-y-2.5">
  <button type="button" onClick={()=>setOpen(true)} aria-label={`Ampliar imagem: ${item.alt}`} className="block w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
   <img src={item.url} alt={item.alt} loading="lazy" className="block w-full h-auto object-contain"/>
  </button>
  {item.caption&&<figcaption className="text-xs text-zinc-500 leading-relaxed">{item.caption}</figcaption>}
 </figure><ImageLightboxModal isOpen={open} onClose={()=>setOpen(false)} imageUrl={item.url} imageAlt={item.alt} title={item.title||item.label} caption={item.caption}/></>;
};
