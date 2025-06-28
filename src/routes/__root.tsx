import { createRootRoute, Outlet, useRouter } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { LanguageProvider } from "@/components/language/language-provider";
import { useEffect } from "react";

function ScrollRestoration() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = router.subscribe("onLoad", () => {
      window.scrollTo(0, 0);
    });

    return unsubscribe;
  }, [router]);

  return null;
}

const rootRoute = createRootRoute({
  component: () => (
    <LanguageProvider defaultLanguage="en" storageKey="duon-language">
      <ThemeProvider defaultTheme="dark" storageKey="duon-theme">
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <ScrollRestoration />
          <Header />
          <main className="flex-1 pt-[var(--header-height-mobile)] sm:pt-[var(--header-height-sm)] md:pt-[var(--header-height-md)] lg:pt-[var(--header-height-lg)] p-4">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  ),
});

export const Route = rootRoute;
