import { type ReactNode } from "react";

interface ModeToggleButtonProps {
  onClick: () => void;
  theme: string;
  children: ReactNode;
}

export function ModeToggleButton({
  onClick,
  theme,
  children,
}: ModeToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        cursor-pointer
        relative overflow-hidden h-full 
        w-16 sm:w-20 md:w-24 lg:w-30 
        px-3 sm:px-4 md:px-5 lg:px-6 
        border-l 
        flex items-center justify-center
        group
        hover:text-background
      "
    >
      <div className="relative z-10 transition-colors duration-500">
        {children}
      </div>
      <span className="sr-only">Toggle theme</span>

      {/* Custom fill effect */}
      <div
        className="
          absolute left-0 right-0 bottom-0 h-0
          transition-all duration-500 ease-out
          group-hover:h-full
        "
        style={{
          backgroundColor: theme === "dark" ? "#ffffff" : "#000000",
        }}
      />
    </button>
  );
}
