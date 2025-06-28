import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Section } from "@/components/Section";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { LayoutToggle } from "@/components/shop/LayoutToggle";
import { toast } from "sonner";
import { useState } from "react";
import { useLanguage } from "@/components/language/useLanguage";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
});

const translations = {
  en: {
    title: "Shop",
    description: "Browse our collection of products and services.",
    toastFavorite: "Added to favorites",
    toastCart: "Added to cart",
  },
  cy: {
    title: "Siop",
    description: "Pori drwy ein casgliad o gynhyrchion a gwasanaethau.",
    toastFavorite: "Wedi'i ychwanegu at ffefrynnau",
    toastCart: "Wedi'i ychwanegu at y fasged",
  },
};

function Shop() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isTwoColumns, setIsTwoColumns] = useState(true);

  const handleProductFavorite = (id: number) => {
    console.log(`Toggle favorite for product ${id}`);
    toast.success(t.toastFavorite);
  };

  const handleProductAddToCart = (id: number) => {
    console.log(`Add product ${id} to cart`);
    toast.success(t.toastCart);
  };

  return (
    <Section title={t.title} description={t.description} animated={true}>
      <div className="flex justify-end mb-6">
        <LayoutToggle
          isTwoColumns={isTwoColumns}
          onToggle={() => setIsTwoColumns(!isTwoColumns)}
        />
      </div>

      <ProductGrid
        isTwoColumns={isTwoColumns}
        onProductFavorite={handleProductFavorite}
        onProductAddToCart={handleProductAddToCart}
      />
    </Section>
  );
}
