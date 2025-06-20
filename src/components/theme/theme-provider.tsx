import { useEffect, useState } from "react";
import type { Theme } from "./ThemeProviderContext";
import { ThemeProviderContext } from "./ThemeProviderContext";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    // Add transition class for smooth theme changes
    if (isTransitioning) {
      root.classList.add("theme-transitioning");
    }

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Remove transition class after animation completes
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        root.classList.remove("theme-transitioning");
        setIsTransitioning(false);
      }, 500); // Match the CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [theme, isTransitioning]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setIsTransitioning(true);
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
