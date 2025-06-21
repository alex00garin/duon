import { useState } from "react";
import { ProductCard } from "./ProductCard";

const PRODUCTS = [1, 2, 3, 4];

interface ProductGridProps {
  isTwoColumns: boolean;
  onProductInfo?: (id: number) => void;
  onProductFavorite?: (id: number) => void;
  onProductAddToCart?: (id: number) => void;
}

export function ProductGrid({
  isTwoColumns,
  onProductInfo,
  onProductFavorite,
  onProductAddToCart,
}: ProductGridProps) {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    // Toggle active state for mobile
    setActiveCardId(activeCardId === id ? null : id);
  };

  const gridClasses = isTwoColumns
    ? "grid grid-cols-2 md:grid-cols-4 gap-6"
    : "grid grid-cols-1 md:grid-cols-4 gap-6";

  return (
    <div className={gridClasses}>
      {PRODUCTS.map((id, index) => (
        <ProductCard
          key={id}
          id={id}
          index={index}
          isActive={activeCardId === id}
          onCardClick={() => handleCardClick(id)}
          onInfo={() => onProductInfo?.(id)}
          onFavorite={() => onProductFavorite?.(id)}
          onAddToCart={() => onProductAddToCart?.(id)}
        />
      ))}
    </div>
  );
}
