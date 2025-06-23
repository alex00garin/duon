import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { products, productCategories } from "@/lib/shop-data";

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
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(product => product.category === selectedCategory);

  const handleCardClick = (id: number) => {
    // Toggle active state for mobile
    setActiveCardId(activeCardId === id ? null : id);
  };

  const gridClasses = isTwoColumns
    ? "grid grid-cols-2 md:grid-cols-4 gap-6"
    : "grid grid-cols-1 md:grid-cols-4 gap-6";

  // Group products by category for "All" view
  const groupedProducts = productCategories
    .filter(category => category !== "All")
    .map(category => ({
      category,
      products: products
        .filter(product => product.category === category)
        .slice(0, 4),
    }))
    .filter(group => group.products.length > 0);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="md:hidden">
        {/* Mobile: Fixed ALL button + Scrollable others */}
        <div className="flex gap-2">
          {/* Fixed ALL button */}
          <button
            onClick={() => setSelectedCategory("All")}
            className={`
              px-2 py-0 text-sm font-medium flex-shrink-0
              transition-colors cursor-pointer uppercase whitespace-nowrap
              ${
                selectedCategory === "All"
                  ? "bg-primary text-primary-foreground"
                  : " text-muted-foreground hover:bg-muted/60"
              }
            `}
          >
            All
          </button>

          {/* Scrollable other categories */}
          <div className="overflow-x-auto scrollbar-hide flex-1">
            <div className="flex gap-2 min-w-max">
              {productCategories
                .filter(category => category !== "All")
                .map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                    px-2 py-1 text-sm font-medium 
                    transition-colors cursor-pointer uppercase whitespace-nowrap
                    ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : " text-muted-foreground hover:bg-muted/60"
                    }
                  `}
                  >
                    {category}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Traditional wrapped layout */}
      <div className="hidden md:block">
        <div className="flex flex-wrap gap-3 justify-start">
          {productCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 text-sm font-medium 
                transition-colors cursor-pointer uppercase whitespace-nowrap
                ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : " text-muted-foreground hover:bg-muted/60"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory === "All" ? (
        /* Show grouped products by category */
        <div className="space-y-12 pb-12">
          {groupedProducts.map((group, groupIndex) => (
            <div key={group.category} className="space-y-4">
              {/* Category Title */}
              <motion.h2
                className="text-xl  text-start uppercase"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    delay: 0.1,
                    ease: "easeOut",
                  },
                }}
                viewport={{
                  once: true,
                  margin: "20px",
                }}
              >
                {group.category}
              </motion.h2>

              {/* Products Grid */}
              <div className={gridClasses}>
                {group.products.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index + groupIndex * 4}
                    isActive={activeCardId === product.id}
                    onCardClick={() => handleCardClick(product.id)}
                    onInfo={() => onProductInfo?.(product.id)}
                    onFavorite={() => onProductFavorite?.(product.id)}
                    onAddToCart={() => onProductAddToCart?.(product.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Show filtered products for specific category */
        <div className={gridClasses}>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isActive={activeCardId === product.id}
              onCardClick={() => handleCardClick(product.id)}
              onInfo={() => onProductInfo?.(product.id)}
              onFavorite={() => onProductFavorite?.(product.id)}
              onAddToCart={() => onProductAddToCart?.(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
