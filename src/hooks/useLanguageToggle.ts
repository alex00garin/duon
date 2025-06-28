import { useLanguage } from "@/components/language/useLanguage";

export function useLanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "cy" : "en");
  };

  return {
    language,
    toggleLanguage,
  };
}
