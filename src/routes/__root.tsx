import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="duon-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="p-4 h-[calc(100vh-var(--header-height-lg))]">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  ),
});

export const Route = rootRoute;
