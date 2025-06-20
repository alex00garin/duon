import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="duon-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-8 border-x h-[calc(100vh-9.5rem)]">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  ),
});

export const Route = rootRoute;
