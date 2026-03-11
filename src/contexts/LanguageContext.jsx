import React, { createContext, useContext, useState } from "react";
import fr from "../locales/fr";
import en from "../locales/en";

const translations = { fr, en };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("fr");

  const locale = translations[lang];

  const t = (key) => {
    const keys = key.split(".");
    let value = locale;
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, locale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
