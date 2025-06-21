import { Logo } from "./branding/Logo";
import { Navigation } from "./navigation/Navigation";
import { ModeToggle } from "./theme/mode-toggle";
import { useScrollVisibility } from "../hooks/useScrollVisibility";
import { HEADER_HEIGHT } from "../lib/constants";

export function Header() {
  const isVisible = useScrollVisibility();

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        flex justify-between items-center w-full
        ${HEADER_HEIGHT}
        px-4 mx-auto
        bg-background/80 backdrop-blur-md border-b
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <Logo />

      <div className="flex items-center h-full">
        <Navigation />
        <ModeToggle />
      </div>
    </header>
  );
}
