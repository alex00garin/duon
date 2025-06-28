import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { products, productCategories } from "@/lib/shop-data";
import { useLanguage } from "@/components/language/useLanguage";

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
  const { language } = useLanguage();
  const categories = productCategories[language];
  const enCategories = productCategories.en;

  // Filter categories to only show ones with products
  const availableCategories = categories.filter((category, index) => {
    // Always keep "All" / "Popeth" (first category)
    if (index === 0) return true;

    // Check if this category has products
    const enCategory = enCategories[index];
    return products.some(product => product.category.en === enCategory);
  });

  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(
    availableCategories[0]
  );

  // Reset to "All" when language changes
  useEffect(() => {
    setSelectedCategory(availableCategories[0]);
  }, [language, availableCategories]);

  const filteredProducts =
    selectedCategory === availableCategories[0] // Compare with current language's "All"
      ? products
      : products.filter(product => {
          // Find the index of the selected category in the current language
          const categoryIndex = categories.indexOf(selectedCategory);
          // Use that index to get the corresponding English category for filtering
          const enCategory = enCategories[categoryIndex];
          return product.category.en === enCategory;
        });

  const handleCardClick = (id: number) => {
    // Toggle active state for mobile
    setActiveCardId(activeCardId === id ? null : id);
  };

  const gridClasses = isTwoColumns
    ? "grid grid-cols-2 md:grid-cols-4 gap-6"
    : "grid grid-cols-1 md:grid-cols-4 gap-6";

  // Group products by category for "All" view - only include categories with products
  const groupedProducts = availableCategories
    .filter(category => category !== availableCategories[0]) // Skip "All" / "Popeth"
    .map(category => {
      const categoryIndex = categories.indexOf(category);
      const enCategory = enCategories[categoryIndex];
      return {
        category,
        products: products
          .filter(product => product.category.en === enCategory)
          .slice(0, 4),
      };
    })
    .filter(group => group.products.length > 0);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="md:hidden">
        {/* Mobile: Fixed ALL button + Scrollable others */}
        <div className="flex gap-2">
          {/* Fixed ALL button */}
          <button
            onClick={() => setSelectedCategory(availableCategories[0])}
            className={`
              px-2 py-0 text-sm font-medium flex-shrink-0
              transition-colors cursor-pointer uppercase whitespace-nowrap
              ${
                selectedCategory === availableCategories[0]
                  ? "bg-primary text-primary-foreground"
                  : " text-muted-foreground hover:bg-muted/60"
              }
            `}
          >
            {availableCategories[0]}
          </button>

          {/* Scrollable other categories */}
          <div className="overflow-x-auto scrollbar-hide flex-1">
            <div className="flex gap-2 min-w-max">
              {availableCategories
                .filter(category => category !== availableCategories[0])
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
          {availableCategories.map(category => (
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

      {selectedCategory === availableCategories[0] ? (
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
