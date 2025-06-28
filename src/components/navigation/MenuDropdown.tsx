import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/components/language/useLanguage";

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const translations = {
  en: {
    home: "Home",
    shop: "Shop",
    about: "About",
    coffee: "Coffee",
  },
  cy: {
    home: "Cartref",
    shop: "Siop",
    about: "Amdanom",
    coffee: "Coffi",
  },
};

export function MenuDropdown({ isOpen, onClose }: MenuDropdownProps) {
  const { language } = useLanguage();
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed left-0 right-0 
        top-[var(--header-height-mobile)] sm:top-[var(--header-height-sm)] md:top-[var(--header-height-md)] lg:top-[var(--header-height-lg)]
        h-[calc(100vh-var(--header-height-mobile))] sm:h-[calc(100vh-var(--header-height-sm))] md:h-[calc(100vh-var(--header-height-md))] lg:h-[calc(100vh-var(--header-height-lg))]
        animate-dropdown-slide-up
        bg-background z-40
        border-t overflow-hidden
      "
    >
      <div
        className="
        container mx-auto 
        p-4 sm:p-6 md:p-8 
        h-full flex flex-col justify-start items-end
      "
      >
        <nav
          className="
          space-y-4 sm:space-y-5 md:space-y-6 
          text-2xl sm:text-3xl md:text-4xl 
          font-light
          text-foreground
        "
        >
          <Link
            to="/"
            className="block text-end hover:text-neutral-300 dark:hover:text-secondary transition-colors"
            onClick={onClose}
          >
            {t.home}
          </Link>
          {/* <Link
            to="/coffee"
            className="block text-end hover:text-neutral-300 dark:hover:text-secondary transition-colors"
            onClick={onClose}
          >
            {t.coffee}
          </Link> */}
          <Link
            to="/shop"
            className="block text-end hover:text-neutral-300 dark:hover:text-secondary transition-colors"
            onClick={onClose}
          >
            {t.shop}
          </Link>
          <Link
            to="/about"
            className="block text-end hover:text-neutral-300 dark:hover:text-secondary transition-colors"
            onClick={onClose}
          >
            {t.about}
          </Link>
        </nav>
      </div>
    </div>
  );
}
