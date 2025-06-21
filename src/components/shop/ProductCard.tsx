import { motion } from "framer-motion";
import { ActionButtons } from "./ActionButtons";

interface ProductCardProps {
  id: number;
  index: number;
  onInfo?: () => void;
  onFavorite?: () => void;
  onAddToCart?: () => void;
}

export function ProductCard({
  id,
  index,
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
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500 ease-in-out
          group-hover:scale-75
        "
      />

      <ActionButtons
        onInfo={onInfo}
        onFavorite={onFavorite}
        onAddToCart={onAddToCart}
      />
    </motion.div>
  );
}
