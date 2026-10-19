import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOProps> = ({ title, description, ogImage }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const defaultTitle =
      language === 'pt'
        ? 'Igor Mariano — Product Designer · UX/UI · Design Systems'
        : 'Igor Mariano — Product Designer · UX/UI · Design Systems';

    const defaultDesc =
      language === 'pt'
        ? 'Transformando dados em decisões de negócio através de UX Research, Design Systems e interfaces digitais de alta escalabilidade.'
        : 'Transforming data into business decisions through UX Research, Design Systems, and high-impact digital products.';

    const pageTitle = title ? `${title} · Igor Mariano` : defaultTitle;
    const pageDesc = description || defaultDesc;

    document.title = pageTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDesc);

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', pageDesc);

    if (ogImage) {
      const ogImgTag = document.querySelector('meta[property="og:image"]');
      if (ogImgTag) ogImgTag.setAttribute('content', ogImage);
    }
  }, [title, description, ogImage, language]);

  return null;
};
