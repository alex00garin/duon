import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Section } from "@/components/Section";
import { useState } from "react";
import { CoffeeCard } from "@/components/coffee/CoffeeCard";
import { coffeeTopics } from "@/lib/coffee-data";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import { useLanguage } from "@/components/language/useLanguage";
import { useSEO } from "@/hooks/useSEO";
import {
  duonOrganization,
  generateOrganizationStructuredData,
  generateBreadcrumbStructuredData,
} from "@/lib/seo";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coffee",
  component: Coffee,
});

const translations = {
  en: {
    title: "Coffee Knowledge",
    description: "Explore the world of coffee brewing methods and bean types.",
    meta: {
      title: "Coffee Education - Brewing Methods & Bean Types | DŪON",
      description:
        "Learn about different coffee brewing methods, bean varieties, and brewing techniques. From espresso to pour-over, discover the perfect brewing method for your taste preferences.",
      keywords: [
        "coffee education",
        "brewing methods",
        "coffee beans",
        "espresso",
        "pour over",
        "coffee guide",
        "coffee types",
        "brewing techniques",
        "coffee knowledge",
      ],
    },
  },
  cy: {
    title: "Gwybodaeth Coffi",
    description: "Archwilio byd dulliau bragu coffi a mathau o ffa.",
    meta: {
      title: "Addysg Coffi - Dulliau Bragu a Mathau Ffa | DŪON",
      description:
        "Dysgwch am wahanol ddulliau bragu coffi, amrywiaeth ffa, a thechnegau bragu. O espresso i pour-over, darganfyddwch y dull bragu perffaith ar gyfer eich hoffterau blas.",
      keywords: [
        "addysg coffi",
        "dulliau bragu",
        "ffa coffi",
        "espresso",
        "pour over",
        "canllaw coffi",
        "mathau coffi",
        "technegau bragu",
        "gwybodaeth coffi",
      ],
    },
  },
};

function Coffee() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isHeaderVisible = useScrollVisibility();
  const { language } = useLanguage();
  const t = translations[language];

  // SEO Configuration
  useSEO({
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    type: "website",
    image: "/coffee/espresso-machine.png",
    structuredData: [
      generateOrganizationStructuredData(duonOrganization),
      generateBreadcrumbStructuredData([
        { name: "Home", url: "https://duon.coffee" },
        {
          name: language === "en" ? "Coffee Knowledge" : "Gwybodaeth Coffi",
          url: "https://duon.coffee/coffee",
        },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "DŪON Coffee Education",
        description: t.meta.description,
        url: "https://duon.coffee/coffee",
        teaches: "Coffee brewing methods and bean knowledge",
        educationalCredentialAwarded: "Coffee brewing expertise",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Coffee Education Resources",
          itemListElement: coffeeTopics.map((topic, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Course",
              name: topic.title,
              description: topic.description,
              educationalLevel: "Beginner to Advanced",
            },
          })),
        },
      },
    ],
  });

  const handleCardClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full h-full bg-background">
      <Section title={t.title} description={t.description} animated={true}>
        <div className="mt-10 mx-auto">
          <div className="space-y-4">
            {coffeeTopics.map((topic, index) => (
              <CoffeeCard
                key={topic.href}
                title={topic.title}
                description={topic.description}
                content={topic.content}
                isActive={activeIndex === index}
                isHeaderVisible={isHeaderVisible}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
