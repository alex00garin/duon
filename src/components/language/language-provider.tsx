import { useEffect, useState } from "react";
import type { Language } from "./LanguageProviderContext";
import { LanguageProviderContext } from "./LanguageProviderContext";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "duon-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Set the language attribute on the html element for accessibility
    root.setAttribute("lang", language === "cy" ? "cy" : "en");
  }, [language]);

  const value = {
    language,
    setLanguage: (newLanguage: Language) => {
      localStorage.setItem(storageKey, newLanguage);
      setLanguage(newLanguage);
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}
