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

  const t = (key: string) => {
    const dict = translations[lang] || {};
    if (dict[key]) return dict[key];
    // Fallback auf Deutsch, falls Key fehlt
    if (lang !== 'de' && translations['de'] && translations['de'][key]) {
      return translations['de'][key];
    }
    // Wenn auch im Deutsch-Objekt nicht vorhanden, zeige Key
    return key;
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