import { ShoppingCart, Heart, Info } from "lucide-react";
import { ActionButton } from "./ActionButton";

interface ActionButtonsProps {
  isActive: boolean;
  onInfo?: () => void;
  onFavorite?: () => void;
  onAddToCart?: () => void;
}

export function ActionButtons({
  isActive,
  onInfo,
  onFavorite,
  onAddToCart,
}: ActionButtonsProps) {
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
      <ActionButton icon={Info} title="More info" onClick={onInfo} />
      <ActionButton icon={Heart} title="Favourite" onClick={onFavorite} />
      <ActionButton
        icon={ShoppingCart}
        title="Add to cart"
        onClick={onAddToCart}
      />
    </div>
  );
}
