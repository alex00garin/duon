import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="duon-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1 pt-[var(--header-height-mobile)] sm:pt-[var(--header-height-sm)] md:pt-[var(--header-height-md)] lg:pt-[var(--header-height-lg)] p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  ),
});

export const Route = rootRoute;
