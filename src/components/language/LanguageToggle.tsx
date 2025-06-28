import { LanguageToggleButton } from "./LanguageToggleButton";
import { LanguageToggleIcon } from "./LanguageToggleIcon";
import { useLanguageToggle } from "@/hooks/useLanguageToggle";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageToggle();

  return (
    <LanguageToggleButton onClick={toggleLanguage}>
      <LanguageToggleIcon language={language} />
    </LanguageToggleButton>
  );
}
