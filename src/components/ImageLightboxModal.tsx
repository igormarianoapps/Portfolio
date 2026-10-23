import React, {useEffect,useRef} from 'react';
import {X} from 'lucide-react';
import {useLanguage} from '../context/LanguageContext';

interface Props {isOpen:boolean;onClose:()=>void;imageUrl:string;imageAlt:string;title?:string;caption?:string}
export const ImageLightboxModal:React.FC<Props>=({isOpen,onClose,imageUrl,imageAlt,title,caption})=>{
 const {t}=useLanguage();
 const closeRef=useRef<HTMLButtonElement>(null);
 const modalRef=useRef<HTMLDivElement>(null);
 const returnFocus=useRef<HTMLElement|null>(null);
 useEffect(()=>{
  if(!isOpen)return;
  returnFocus.current=document.activeElement as HTMLElement;
  const before=document.body.style.overflow;document.body.style.overflow='hidden';
  closeRef.current?.focus();
  const onKey=(e:KeyboardEvent)=>{
   if(e.key==='Escape'){e.preventDefault();onClose();}
   if(e.key==='Tab'){
    const all=Array.from(modalRef.current?.querySelectorAll<HTMLElement>('button,[href],[tabindex]:not([tabindex="-1"])')||[]).filter(el=>!el.hasAttribute('disabled'));
    if(!all.length)return;
    const first=all[0],last=all[all.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
   }
  };
  window.addEventListener('keydown',onKey);
  return ()=>{document.body.style.overflow=before;window.removeEventListener('keydown',onKey);returnFocus.current?.focus();};
 },[isOpen,onClose]);
 if(!isOpen)return null;
 return <div ref={modalRef} role="dialog" aria-modal="true" aria-label={title||imageAlt} className="fixed inset-0 z-[100] bg-[#0B0C0E]/95 text-white flex flex-col">
  <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 gap-4">
   <p className="text-sm text-zinc-200 truncate">{title||imageAlt}</p>
   <button ref={closeRef} type="button" onClick={onClose} aria-label={t('Fechar imagem','Close image')} className="shrink-0 p-2 rounded-lg hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"><X className="w-5 h-5"/></button>
  </div>
  <div className="flex-1 min-h-0 overflow-auto overscroll-contain p-3 sm:p-6" tabIndex={0} aria-label={t('Imagem completa, role para visualizar','Full image, scroll to explore')}>
   <img src={imageUrl} alt={imageAlt} className="block w-auto h-auto max-w-full mx-auto" />
   {caption&&<p className="text-xs text-zinc-400 text-center max-w-3xl mx-auto mt-4 mb-3">{caption}</p>}
  </div>
 </div>;
};
