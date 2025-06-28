import type { Language } from "./LanguageProviderContext";

interface LanguageToggleIconProps {
  language: Language;
}

export function LanguageToggleIcon({ language }: LanguageToggleIconProps) {
  return (
    <div className="font-bold text-sm sm:text-base tracking-wider">
      {language === "en" ? "EN" : "CY"}
    </div>
  );
}
