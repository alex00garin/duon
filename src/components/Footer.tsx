import { useLanguage } from "@/components/language/useLanguage";

const translations = {
  en: {
    copyright: "Built in Cardiff",
  },
  cy: {
    copyright: "Wedi'i adeiladu yng Nghaerdydd",
  },
};

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 text-center border-t border-border">
      <p className="text-xs uppercase tracking-widest opacity-40">
        © {new Date().getFullYear()} DŪON. {t.copyright}.
      </p>
    </footer>
  );
}
