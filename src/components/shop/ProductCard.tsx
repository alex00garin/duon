import { motion } from "framer-motion";
import { ActionButtons } from "./ActionButtons";
import { Hand } from "lucide-react";

interface ProductCardProps {
  id: number;
  index: number;
  isActive: boolean;
  onCardClick: () => void;
  onInfo?: () => void;
  onFavorite?: () => void;
  onAddToCart?: () => void;
}

export function ProductCard({
  id,
  index,
  isActive,
  onCardClick,
  onInfo,
  onFavorite,
  onAddToCart,
}: ProductCardProps) {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.4 + index * 0.1,
        ease: "easeOut",
      }}
      onClick={onCardClick}
    >
      {/* Background Image */}
      <img
        src={`/assets/bg-${id}.png`}
        alt={`Background ${id}`}
        className="w-full h-auto object-cover"
      />

      {/* Mock Image (Front) */}
      <img
        src={`/assets/mock-${id}.png`}
        alt={`Product ${id}`}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500 ease-in-out
          md:group-hover:scale-75
          ${isActive ? "scale-75" : ""}
        `}
      />

      {/* Mobile tap indicator */}
      <div
        className={`
        absolute top-2 right-2 
        md:hidden
        bg-background/20 backdrop-blur-sm 
         p-2
        transition-opacity duration-300
        ${isActive ? "opacity-0" : "opacity-60"}
      `}
      >
        <Hand className="w-4 h-4 text-secondary" />
      </div>

      <ActionButtons
        isActive={isActive}
        onInfo={onInfo}
        onFavorite={onFavorite}
        onAddToCart={onAddToCart}
      />
    </motion.div>
  );
}
