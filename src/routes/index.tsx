import { createRoute, Link } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { BlurIn } from "@/components/blur-in";
import { useLanguage } from "@/components/language/useLanguage";
import { useSEO } from "@/hooks/useSEO";
import {
  duonOrganization,
  generateOrganizationStructuredData,
  generateWebsiteStructuredData,
} from "@/lib/seo";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const translations = {
  en: {
    hero: {
      title: "DŪON",
      subtitle: "Exceptional Coffee & Design",
      description: "from Cardiff",
      cta: "Explore Our Products",
    },
    meta: {
      title: "DŪON - Exceptional Coffee & Design from Cardiff",
      description:
        "Born in Cardiff, inspired by the intersection of design and ritual. Discover exceptional coffee beans, reusable cups, and thoughtfully curated products for those who refuse to settle for ordinary.",
      keywords: [
        "specialty coffee",
        "Cardiff coffee",
        "design",
        "sustainable",
        "artisan coffee",
        "coffee beans",
        "reusable cups",
        "Welsh coffee",
      ],
    },
  },
  cy: {
    hero: {
      title: "DŪON",
      subtitle: "Coffi a Dylunio Eithriadol",
      description: "o Gaerdydd",
      cta: "Archwilio Ein Cynhyrchion",
    },
    meta: {
      title: "DŪON - Coffi a Dylunio Eithriadol o Gaerdydd",
      description:
        "Wedi'i eni yng Nghaerdydd, wedi'i ysbrydoli gan groestoriad dylunio a defod. Darganfyddwch ffa coffi eithriadol, cwpanau aildefnyddiadwy, a chynhyrchion wedi'u curadu'n ystyriol i'r rhai sy'n gwrthod bodloni ar yr cyffredin.",
      keywords: [
        "coffi arbenigol",
        "coffi Caerdydd",
        "dylunio",
        "cynaliadwy",
        "coffi crefftwyr",
        "ffa coffi",
        "cwpanau aildefnyddiadwy",
        "coffi Cymreig",
      ],
    },
  },
};

function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  // SEO Configuration
  useSEO({
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    type: "website",
    image: "/assets/beans/bg-1.png",
    structuredData: [
      generateOrganizationStructuredData(duonOrganization),
      generateWebsiteStructuredData(),
      {
        "@context": "https://schema.org",
        "@type": "Store",
        name: "DŪON",
        description: t.meta.description,
        url: "https://duon.coffee",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cardiff",
          addressRegion: "Wales",
          addressCountry: "UK",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Coffee Products",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Specialty Coffee Beans",
                category: "Coffee",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Reusable Coffee Cups",
                category: "Accessories",
              },
            },
          ],
        },
      },
    ],
  });

  return (
    <div
      className={`flex flex-col items-center justify-center text-center h-[calc(100vh-var(--header-height-lg))]`}
    >
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-10xl font-light uppercase tracking-widest leading-none mb-8">
        {t.hero.title}
      </h1>

      <BlurIn>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl leading-tight tracking-wide">
          {t.hero.subtitle}
        </p>
        <p className="text-sm sm:text-base text-muted-foreground/70 mb-16 tracking-wider">
          {t.hero.description}
        </p>
      </BlurIn>

      <Link
        to="/shop"
        className="
          inline-block px-8 py-4 
          border-2 border-foreground 
          text-foreground bg-transparent
          uppercase tracking-widest font-medium text-sm
          transition-colors duration-200 ease-in-out
          hover:bg-foreground hover:text-background
          focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
        "
      >
        {t.hero.cta}
      </Link>
    </div>
  );
}
