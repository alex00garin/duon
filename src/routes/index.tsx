import { createRoute, Link } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { BlurIn } from "@/components/blur-in";
import { useLanguage } from "@/components/language/useLanguage";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const translations = {
  en: {
    title: "DŪON",
    subtitle: "Minimal coffee. Everyday wear. Made with intent.",
    enterShop: "Enter Shop",
  },
  cy: {
    title: "DŪON",
    subtitle: "Coffi syml. Gwisg bob dydd. Wedi'i wneud gyda bwriad.",
    enterShop: "Mynd i'r Siop",
  },
};

function Index() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className={`flex flex-col items-center justify-center text-center h-[calc(100vh-var(--header-height-lg))]`}
    >
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-10xl font-light uppercase tracking-widest leading-none mb-8">
        {t.title}
      </h1>

      <BlurIn>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl leading-tight tracking-wide">
          {t.subtitle}
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
        {t.enterShop}
      </Link>
    </div>
  );
}
