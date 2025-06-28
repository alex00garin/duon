import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { products, productCategories } from "@/lib/shop-data";
import { useLanguage } from "@/components/language/useLanguage";

interface ProductGridProps {
  isTwoColumns: boolean;
  interestCounts: { [productId: string]: number };
  userInterests: { [productId: string]: boolean };
  onToggleInterest: (productId: string) => void;
}

export function ProductGrid({
  isTwoColumns,
  interestCounts,
  userInterests,
  onToggleInterest,
}: ProductGridProps) {
  const { language } = useLanguage();
  const categories = productCategories[language];
  const enCategories = productCategories.en;

  const availableCategoriesMap = categories
    .map((category, index) => ({
      display: category,
      english: enCategories[index],
      hasProducts:
        index === 0 ||
        products.some(product => product.category.en === enCategories[index]),
    }))
    .filter(cat => cat.hasProducts);

  const availableCategories = availableCategoriesMap.map(cat => cat.display);

  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(
    availableCategories[0]
  );

  useEffect(() => {
    setSelectedCategory(availableCategories[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const filteredProducts =
    selectedCategory === availableCategories[0]
      ? products
      : products.filter(product => {
          const categoryMap = availableCategoriesMap.find(
            cat => cat.display === selectedCategory
          );
          return categoryMap && product.category.en === categoryMap.english;
        });

  const handleCardClick = (id: string) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveCardId(null);
  };

  const handleProductInterest = (id: string) => {
    onToggleInterest(id);
  };

  const gridClasses = isTwoColumns
    ? "grid grid-cols-2 md:grid-cols-4 gap-6"
    : "grid grid-cols-1 md:grid-cols-4 gap-6";

  const groupedProducts = availableCategoriesMap
    .filter(cat => cat.display !== availableCategories[0])
    .map(cat => ({
      category: cat.display,
      products: products
        .filter(product => product.category.en === cat.english)
        .slice(0, 4),
    }))
    .filter(group => group.products.length > 0);

  return (
    <div className="space-y-6">
      <div className="md:hidden">
        <div className="flex gap-2">
          <button
            onClick={() => handleCategoryClick(availableCategories[0])}
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

          <div className="overflow-x-auto scrollbar-hide flex-1">
            <div className="flex gap-2 min-w-max">
              {availableCategories
                .filter(category => category !== availableCategories[0])
                .map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
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

      <div className="hidden md:block">
        <div className="flex flex-wrap gap-3 justify-start">
          {availableCategories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
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
        <div className="space-y-12 pb-12">
          {groupedProducts.map((group, groupIndex) => (
            <div key={group.category} className="space-y-4">
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

              <div className={gridClasses}>
                {group.products.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index + groupIndex * 4}
                    isActive={activeCardId === product.id}
                    onCardClick={() => handleCardClick(product.id)}
                    onInterest={() => handleProductInterest(product.id)}
                    interestCount={interestCounts[product.id] || 0}
                    isInterested={userInterests[product.id] || false}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={gridClasses}>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isActive={activeCardId === product.id}
              onCardClick={() => handleCardClick(product.id)}
              onInterest={() => handleProductInterest(product.id)}
              interestCount={interestCounts[product.id] || 0}
              isInterested={userInterests[product.id] || false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
