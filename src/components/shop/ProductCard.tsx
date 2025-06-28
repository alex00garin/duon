import { motion } from "framer-motion";
import { ActionButtons } from "./ActionButtons";
import { ProductInfoModal } from "./ProductInfoModal";
import { Hand } from "lucide-react";
import type { Product } from "@/lib/shop-data";
import { useLanguage } from "@/components/language/useLanguage";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index: number;
  isActive: boolean;
  onCardClick: () => void;
  onFavorite?: () => void;
  onAddToCart?: () => void;
}

export function ProductCard({
  product,
  index,
  isActive,
  onCardClick,
  onFavorite,
  onAddToCart,
}: ProductCardProps) {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        className="relative group cursor-pointer overflow-hidden"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.4,
            delay: index * 0.05,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
          margin: "20px",
        }}
        onClick={onCardClick}
      >
        {/* Background Image */}
        <img
          src={product.backgroundImage}
          alt={`Background ${product.title[language]}`}
          className="w-full h-auto object-cover"
        />

        {/* Mock Image (Front) */}
        <img
          src={product.mockImage}
          alt={product.title[language]}
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
          onInfo={handleInfoClick}
          onFavorite={onFavorite}
          onAddToCart={onAddToCart}
        />
      </motion.div>

      <ProductInfoModal
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
