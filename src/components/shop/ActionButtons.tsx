import { ShoppingCart, Heart, Info } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { useLanguage } from "@/components/language/useLanguage";

interface ActionButtonsProps {
  isActive: boolean;
  onInfo?: () => void;
  onFavorite?: () => void;
  onAddToCart?: () => void;
}

const translations = {
  en: {
    moreInfo: "More info",
    favourite: "Favourite",
    addToCart: "Add to cart",
  },
  cy: {
    moreInfo: "Mwy o wybodaeth",
    favourite: "Ffefryn",
    addToCart: "Ychwanegu at y fasged",
  },
};

export function ActionButtons({
  isActive,
  onInfo,
  onFavorite,
  onAddToCart,
}: ActionButtonsProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className={`
      absolute bottom-2 right-4 
      flex flex-row gap-2
      transition-opacity duration-300 ease-in-out
      z-10
      ${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}
    `}
    >
      <ActionButton icon={Info} title={t.moreInfo} onClick={onInfo} />
      <ActionButton icon={Heart} title={t.favourite} onClick={onFavorite} />
      <ActionButton
        icon={ShoppingCart}
        title={t.addToCart}
        onClick={onAddToCart}
      />
    </div>
  );
}
