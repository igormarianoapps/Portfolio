import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps { title?: string; description?: string; ogImage?: string }
const SITE_URL = 'https://igormariano.vercel.app';
const DEFAULT_IMAGE = SITE_URL + '/og-image.jpg';
function setMeta(key: string, value: string, attribute: 'name'|'property'='property') {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!meta) { meta=document.createElement('meta'); meta.setAttribute(attribute,key); document.head.appendChild(meta); }
  meta.content = value;
}
export const SEOHead: React.FC<SEOProps> = ({title,description,ogImage}) => {
  const {language}=useLanguage();
  const {pathname}=useLocation();
  useEffect(()=>{
    const defaultTitle='Igor Mariano — Product Designer · UX/UI · Design Systems';
    const defaultDesc=language==='pt'
      ? 'Portfólio de Igor Mariano: Product Design, UX Research e Design Systems orientados por dados.'
      : language==='es' ? 'Portfolio de Igor Mariano: Product Design, investigación UX y Design Systems basados en datos.'
      : 'Igor Mariano portfolio: data-informed Product Design, UX Research and Design Systems.';
    const pageTitle=title ? `${title} · Igor Mariano` : defaultTitle;
    const pageDesc=description||defaultDesc;
    const canonical=SITE_URL+(pathname==='/' ? '/' : pathname.replace(/\/$/,''));
    const isNotFound = !/^\/(en|pt|es)(?:\/|$)/.test(pathname) && pathname !== '/';
    const image=ogImage ? new URL(ogImage,SITE_URL).href : DEFAULT_IMAGE;
    document.title=pageTitle;
    setMeta('description',pageDesc,'name');
    if (isNotFound) setMeta('robots','noindex, follow','name');
    else document.head.querySelector('meta[name="robots"]')?.remove();
    setMeta('og:title',pageTitle);
    setMeta('og:description',pageDesc);
    setMeta('og:image',image);
    setMeta('og:image:alt',title || 'Igor Mariano — Product Designer');
    setMeta('og:url',canonical);
    setMeta('og:type',/^\/(pt|en|es)\/projetos\//.test(pathname)?'article':'website');
    setMeta('og:locale',language==='pt'?'pt_BR':language==='es'?'es_ES':'en_US');
    setMeta('twitter:card','summary_large_image','name');
    setMeta('twitter:title',pageTitle,'name');
    setMeta('twitter:description',pageDesc,'name');
    setMeta('twitter:image',image,'name');
    document.documentElement.lang=language==='pt'?'pt-BR':language==='es'?'es-ES':'en';
    let link=document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if(!link){link=document.createElement('link');link.rel='canonical';document.head.appendChild(link);}
    link.href=canonical;
    // Keep language alternatives in sync with client-side navigation.
    const suffix=pathname.replace(/^\/(pt|en)(?=\/|$)/,'') || '';
    if (isNotFound) {
      document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach(node=>node.remove());
      return;
    }
    const alternates: Array<[string,string]> = [
      ['en',SITE_URL+'/en'+suffix],
      ['pt-BR',SITE_URL+'/pt'+suffix],
      ['es-ES',SITE_URL+'/es'+suffix],
      ['x-default',SITE_URL+'/en'+suffix],
    ];
    for (const [hreflang,href] of alternates) {
      let alternate=document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!alternate) {
        alternate=document.createElement('link');
        alternate.rel='alternate';
        alternate.hreflang=hreflang;
        document.head.appendChild(alternate);
      }
      alternate.href=href;
    }
  },[title,description,ogImage,language,pathname]);
  return null;
};
