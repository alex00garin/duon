import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Section } from "@/components/Section";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { LayoutToggle } from "@/components/shop/LayoutToggle";
import { useState } from "react";
import { useLanguage } from "@/components/language/useLanguage";
import { useProductInterest } from "@/hooks/useProductInterest";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
});

const translations = {
  en: {
    title: "Shop",
    description: "Browse our collection of products and services.",
  },
  cy: {
    title: "Siop",
    description: "Pori drwy ein casgliad o gynhyrchion a gwasanaethau.",
  },
};

function Shop() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isTwoColumns, setIsTwoColumns] = useState(true);
  const { interestCounts, userInterests, toggleInterest } =
    useProductInterest();

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
        interestCounts={interestCounts}
        userInterests={userInterests}
        onToggleInterest={toggleInterest}
      />
    </Section>
  );
}
