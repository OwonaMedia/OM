import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'de' | 'en' | 'fr' | 'sw';

interface TranslationContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem('lang') as Language;
    return stored || 'de';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);


  const setLang = (newLang: Language) => {
    if (['de', 'en', 'fr', 'sw'].includes(newLang)) {
      setLangState(newLang);
    } else {
      console.warn(`Unknown language: ${newLang}`);
    }
  } 

  const t = (key: string, vars?: Record<string, any>) => {
    const dict = translations[lang] || {};
    let str = dict[key];
    if (!str && lang !== 'de' && translations['de']) str = translations['de'][key];
    if (!str) return key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        str = str.replace(new RegExp(`{{${k}}}`, 'g'), v);
      });
    }
    return str;
  }

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}