interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MenuButton({ isOpen, onToggle }: MenuButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        cursor-pointer
        relative overflow-hidden h-full 
        w-16 sm:w-20 md:w-24 lg:w-30
        px-3 sm:px-4 md:px-5 lg:px-6
        flex flex-col items-center justify-center gap-1
        group
        border-l
        transition-colors duration-500
        ${isOpen ? "bg-foreground text-background" : "hover:text-background"}
      `}
    >
      {/* Hamburger lines */}
      <div className="relative z-10 flex flex-col gap-1.5 sm:gap-2 md:gap-2.5">
        <div
          className={`
            w-6 sm:w-8 md:w-10 lg:w-12 
            h-0.5 bg-current transition-all duration-300
            ${isOpen ? "rotate-45 translate-y-1 sm:translate-y-1.25 md:translate-y-1.5" : ""}
          `}
        />
        <div
          className={`
            w-6 sm:w-8 md:w-10 lg:w-12 
            h-0.5 bg-current transition-all duration-300
            ${isOpen ? "-rotate-45 -translate-y-1 sm:-translate-y-1.25 md:-translate-y-1.5" : ""}
          `}
        />
      </div>

      {/* Hover fill effect */}
      {!isOpen && (
        <div
          className="
            absolute left-0 right-0 bottom-0 h-0
            transition-all duration-500 ease-out
            group-hover:h-full
            bg-foreground
          "
        />
      )}
    </button>
  );
}
