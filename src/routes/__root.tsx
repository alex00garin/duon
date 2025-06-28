import { createRootRoute, Outlet, useRouter } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { LanguageProvider } from "@/components/language/language-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  ),
});

export const Route = rootRoute;
