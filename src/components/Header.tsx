import { Logo } from "./branding/Logo";
import { Navigation } from "./navigation/Navigation";
import { ModeToggle } from "./theme/mode-toggle";
import { useScrollVisibility } from "../hooks/useScrollVisibility";

export function Header() {
  const isVisible = useScrollVisibility();

  return (
    <div className="border-b">
      <header
        className={`
          container mx-auto
          sticky top-0 z-50 
          flex justify-between items-center w-full
          h-16 sm:h-20 md:h-24 lg:h-38
          px-4 sm:px-0
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
