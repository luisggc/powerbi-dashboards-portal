// Create a React context to set language
import { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("language") || navigator.language?.split('-')[0] || navigator.userLanguage?.split('-')[0] || "pt-BR");
  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
