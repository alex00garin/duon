import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { MenuDropdown } from "./MenuDropdown";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <MenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
      <MenuDropdown isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
