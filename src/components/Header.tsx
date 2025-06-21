import { Logo } from "./branding/Logo";
import { Navigation } from "./navigation/Navigation";
import { ModeToggle } from "./theme/mode-toggle";
import { useScrollVisibility } from "../hooks/useScrollVisibility";
import { HEADER_HEIGHT } from "../lib/constants";

export function Header() {
  const isVisible = useScrollVisibility();

  return (
    <div className="border-b">
      <header
        className={`
           mx-auto
          sticky top-0 z-50 
          flex justify-between items-center w-full
          ${HEADER_HEIGHT}
          px-4
          bg-background/80 backdrop-blur-md
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
    </div>
  );
}
