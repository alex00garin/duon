import { ProductCard } from "./ProductCard";

const PRODUCTS = [1, 2, 3, 4];

interface ProductGridProps {
  onProductInfo?: (id: number) => void;
  onProductFavorite?: (id: number) => void;
  onProductAddToCart?: (id: number) => void;
}

export function ProductGrid({
  onProductInfo,
  onProductFavorite,
  onProductAddToCart,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
      {PRODUCTS.map((id, index) => (
        <ProductCard
          key={id}
          id={id}
          index={index}
          onInfo={() => onProductInfo?.(id)}
          onFavorite={() => onProductFavorite?.(id)}
          onAddToCart={() => onProductAddToCart?.(id)}
        />
      ))}
    </div>
  );
}
