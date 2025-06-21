import { ShoppingCart, Heart, Info } from "lucide-react";
import { ActionButton } from "./ActionButton";

interface ActionButtonsProps {
  onInfo?: () => void;
  onFavorite?: () => void;
  onAddToCart?: () => void;
}

export function ActionButtons({
  onInfo,
  onFavorite,
  onAddToCart,
}: ActionButtonsProps) {
  return (
    <div
      className="
      absolute bottom-2 right-4 
      flex flex-row gap-2
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300 ease-in-out
      z-10
    "
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
