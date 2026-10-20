import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

const SITE_URL = 'https://igormariano.vercel.app';
const DEFAULT_IMAGE = SITE_URL + '/Background.jpg';

const setMeta = (selector: string, attribute: string, value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, selector.match(/\[(?:name|property)="([^"]+)"/)?.[1] || '');
    document.head.appendChild(element);
  }
  element.content = value;
};

export const SEOHead: React.FC<SEOProps> = ({ title, description, ogImage }) => {
  const { language } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    const defaultTitle = 'Igor Mariano — Product Designer · UX/UI · Design Systems';
    const defaultDesc = language === 'pt'
      ? 'Portfólio de Igor Mariano. Projetos de Product Design, UX Research e Design Systems: decisões de produto fundamentadas em dados e necessidades reais.'
      : 'Igor Mariano’s portfolio. Product Design, UX Research and Design Systems: product decisions informed by data and real user needs.';
    const pageTitle = title ? `${title} · Igor Mariano` : defaultTitle;
    const pageDesc = description || defaultDesc;
    const canonical = SITE_URL + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''));
    const image = ogImage ? new URL(ogImage, SITE_URL).href : DEFAULT_IMAGE;

    document.title = pageTitle;
    setMeta('meta[name="description"]', 'name', pageDesc);
    setMeta('meta[property="og:title"]', 'property', pageTitle);
    setMeta('meta[property="og:description"]', 'property', pageDesc);
    setMeta('meta[property="og:image"]', 'property', image);
    setMeta('meta[property="og:url"]', 'property', canonical);
    setMeta('meta[property="og:locale"]', 'property', language === 'pt' ? 'pt_BR' : 'en_US');
    setMeta('meta[name="twitter:title"]', 'name', pageTitle);
    setMeta('meta[name="twitter:description"]', 'name', pageDesc);
    setMeta('meta[name="twitter:image"]', 'name', image);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
  }, [title, description, ogImage, language, pathname]);

  return null;
};
