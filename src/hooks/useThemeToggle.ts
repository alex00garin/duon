import { useTheme } from "@/components/theme/useTheme";

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    theme,
    toggleTheme,
  };
}
