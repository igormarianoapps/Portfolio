import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types/portfolio';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (pt: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'igor_mariano_portfolio_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'pt') return saved;
    } catch {
      // Ignore localStorage exceptions in restrictive environments
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const t = (pt: string, en: string) => (language === 'pt' ? pt : en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
