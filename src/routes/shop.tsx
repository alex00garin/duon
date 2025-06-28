import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Section } from "@/components/Section";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { LayoutToggle } from "@/components/shop/LayoutToggle";
import { useState } from "react";
import { useLanguage } from "@/components/language/useLanguage";
import { useProductInterest } from "@/hooks/useProductInterest";
import { useSEO } from "@/hooks/useSEO";
import { products } from "@/lib/shop-data";
import {
  duonOrganization,
  generateOrganizationStructuredData,
  generateBreadcrumbStructuredData,
} from "@/lib/seo";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
});

const translations = {
  en: {
    title: "Shop",
    description: "Browse our collection of products and services.",
    meta: {
      title: "Shop DŪON Coffee - Exceptional Coffee Beans & Reusable Cups",
      description:
        "Discover our carefully curated collection of specialty coffee beans from Guatemala, Colombia, Ethiopia, and Brazil. Plus sustainable reusable coffee cups designed in Cardiff.",
      keywords: [
        "buy coffee online",
        "specialty coffee beans",
        "reusable coffee cups",
        "sustainable coffee",
        "Cardiff coffee",
        "artisan coffee",
        "coffee accessories",
      ],
    },
  },
  cy: {
    title: "Siop",
    description: "Pori drwy ein casgliad o gynhyrchion a gwasanaethau.",
    meta: {
      title:
        "Siop DŪON Coffee - Ffa Coffi Eithriadol a Chwpanau Aildefnyddiadwy",
      description:
        "Darganfyddwch ein casgliad wedi'i guradu'n ofalus o ffa coffi arbenigol o Guatemala, Colombia, Ethiopia, a Brasil. Ynghyd â chwpanau coffi aildefnyddiadwy cynaliadwy wedi'u dylunio yng Nghaerdydd.",
      keywords: [
        "prynu coffi ar-lein",
        "ffa coffi arbenigol",
        "cwpanau coffi aildefnyddiadwy",
        "coffi cynaliadwy",
        "coffi Caerdydd",
        "coffi crefftwyr",
        "ategolion coffi",
      ],
    },
  },
};

function Shop() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isTwoColumns, setIsTwoColumns] = useState(true);
  const { interestCounts, userInterests, toggleInterest } =
    useProductInterest();

  // SEO Configuration
  useSEO({
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    type: "website",
    image: "/assets/beans/bg-1.png",
    structuredData: [
      generateOrganizationStructuredData(duonOrganization),
      generateBreadcrumbStructuredData([
        { name: "Home", url: "https://duon.coffee" },
        {
          name: language === "en" ? "Shop" : "Siop",
          url: "https://duon.coffee/shop",
        },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: t.meta.title,
        description: t.meta.description,
        url: "https://duon.coffee/shop",
        mainEntity: {
          "@type": "ItemList",
          name: "DŪON Product Collection",
          description: "Curated collection of specialty coffee and accessories",
          numberOfItems: products.length,
          itemListElement: products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: product.title[language],
              description: product.description[language],
              image: product.mockImage,
              category: product.category[language],
              brand: {
                "@type": "Brand",
                name: "DŪON",
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/PreOrder",
                seller: {
                  "@type": "Organization",
                  name: "DŪON",
                },
              },
            },
          })),
        },
      },
    ],
  });

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
