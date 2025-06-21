import { Link } from "@tanstack/react-router";

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuDropdown({ isOpen, onClose }: MenuDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed left-0 right-0 
        top-[var(--header-height-mobile)] sm:top-[var(--header-height-sm)] md:top-[var(--header-height-md)] lg:top-[var(--header-height-lg)]
        h-[calc(100vh-var(--header-height-mobile))] sm:h-[calc(100vh-var(--header-height-sm))] md:h-[calc(100vh-var(--header-height-md))] lg:h-[calc(100vh-var(--header-height-lg))]
        animate-dropdown-slide-up
        bg-background z-40
        border-t overflow-hidden
      "
    >
      <div
        className="
        container mx-auto 
        p-4 sm:p-6 md:p-8 
        h-full flex flex-col justify-start items-end
      "
      >
        <nav
          className="
          space-y-4 sm:space-y-5 md:space-y-6 
          text-2xl sm:text-3xl md:text-4xl 
          font-light
          text-foreground
        "
        >
          <Link
            to="/"
            className="block text-end hover:text-neutral-300 dark:hover:text-secondary transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/coffee"
            className="block text-end hover:text-neutral-300 dark:hover:text-secondary transition-colors"
            onClick={onClose}
          >
            Coffee
          </Link>
          <Link
            to="/shop"
            className="block text-end hover:text-neutral-300 dark:hover:text-secondary transition-colors"
            onClick={onClose}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="block text-end hover:text-neutral-300 dark:hover:text-secondary transition-colors"
            onClick={onClose}
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}
