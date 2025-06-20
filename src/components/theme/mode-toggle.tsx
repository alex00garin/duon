import { ModeToggleButton } from "./ModeToggleButton";
import { ThemeToggleIcon } from "./ThemeToggleIcon";
import { useThemeToggle } from "@/hooks/useThemeToggle";

export function ModeToggle() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <ModeToggleButton onClick={toggleTheme} theme={theme}>
      <ThemeToggleIcon theme={theme} />
    </ModeToggleButton>
  );
}
